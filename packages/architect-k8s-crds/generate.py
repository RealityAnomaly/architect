import os
import yaml
import shutil
import tempfile
import subprocess
import argparse
from typing import List

# https://github.com/yaml/pyyaml/issues/89
yaml.CSafeLoader.yaml_implicit_resolvers.pop("=")

def filter_crds(results: List):
    crds = []
    for result in results:
        # filter out any bogus entries
        if not isinstance(result, dict):
            continue
        if not "apiVersion" in result:
            continue
        if not "kind" in result or not result["kind"] == "CustomResourceDefinition":
            continue
        crds.append(result)
    return crds

def update_crds(dir):
    script = os.path.join(dir, "update.sh")
    if not os.path.isfile(script):
        return
    print(f"updating crds for {ns}")
    
    crds = []
    with tempfile.TemporaryDirectory() as tmpdir:
        result = subprocess.run(os.path.abspath(script), cwd=tmpdir)
        result.check_returncode()

        out = os.path.join(tmpdir, "out")

        # parse all the yaml files
        files = [os.path.join(out, f) for f in os.listdir(out) if f.endswith(".yaml")]
        for file in files:
            with open(file, "r") as f:
                results = yaml.load_all(f, yaml.CSafeLoader)
                crds.extend(filter_crds(results))
    
    # write out the results
    if len(crds) <= 0:
        return
    for f in os.listdir(dir):
        if f.endswith(".yaml"):
            os.remove(os.path.join(dir, f))
    for crd in crds:
        id = f"{crd['spec']['group']}_{crd['spec']['names']['singular']}"
        file = os.path.join(dir, f"{id}.yaml")
        with open(file, "w") as f:
            yaml.dump(crd, f, Dumper=yaml.CSafeDumper)

parser = argparse.ArgumentParser("generate", description="Generates CRDs using npx cdk8s import")
parser.add_argument("-u", "--update", action="store_true", help="Updates CRDs")
args = parser.parse_args()

shutil.rmtree("src", True)
os.mkdir("src")

per_ns_data = {}

# compile the bulk data
# all CRDs are merged into one file
for ns in os.listdir("crds"):
    path = os.path.join("crds", ns)
    if not os.path.isdir(path):
        continue

    if args.update:
        update_crds(path)
    
    files = [os.path.join(path, f) for f in os.listdir(path) if f.endswith(".yaml")]
    for file in files:
        with open(file, "r") as f:
            results = yaml.load_all(f, yaml.CSafeLoader)
            if not ns in per_ns_data:
                per_ns_data[ns] = []
            per_ns_data[ns].extend(filter_crds(results))

print("writing temporary data files")

all_crds = []
for ns, data in per_ns_data.items():
    all_crds.extend(data)

with tempfile.NamedTemporaryFile(mode="w") as f:
    yaml.dump_all(all_crds, f)
    f.flush()

    # build gen path
    generated_path = os.path.join(os.getcwd(), "src")
    os.makedirs(generated_path, exist_ok=True)

    # now run the build
    params = ["npx", "crd-generate", "--input", f.name, "--output", generated_path]
    subprocess.run(params, stdout=subprocess.DEVNULL)

with open("src/index.ts", "a") as f:
    f.write("export const dir = __dirname;\n")
