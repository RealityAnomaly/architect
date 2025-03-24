import * as fs from 'node:fs/promises';
import * as os from 'node:os';
import * as path from 'node:path';
import * as util from 'node:util';
import * as graphviz from 'ts-graphviz';
import { execFile } from 'node:child_process';
import { DependencyGraph } from './index.mts';
import { Component } from '../../index.mts';

export interface DependencyGraphRenderOptions {
  path: string;
}

export class DependencyGraphRenderer {
  public static async render(
    input: DependencyGraph,
    options: DependencyGraphRenderOptions,
  ) {
    // noinspection SpellCheckingInspection
    const graph = graphviz.digraph("cluster", {
      label: input.target.model.metadata.name,
      labelloc: "top",
      splines: true,
      overlap: "scale",
      compound: true,
      concentrate: true,
    }, (g: graphviz.RootGraphModel) => {
      g.node({ shape: "box" });

      for (const [k, v] of Object.entries(input.components)) {
        if (k.includes("prelude")) continue;

        //const ns = (v.component.context as any).namespace;
        let parentGraph: graphviz.GraphBaseModel = g;
        //parentGraph = parentGraph.subgraph(`cluster_namespace_${ns}`, { label: ns });

        if (v.component.parent) {
          const parent = v.component.parent as Component;
          parentGraph = parentGraph.subgraph("cluster_" + parent.rid, {
            label: parent.name,
          });
        } else if (
          v.component.children.filter((c) => c.independent).length > 0
        ) {
          parentGraph = parentGraph.subgraph("cluster_" + v.component.rid, {
            label: v.component.name,
          });
        }

        parentGraph.node(k, { label: v.component.name });
        for (const dependency of v.dependencies) {
          if (dependency.rid.includes("prelude")) continue;
          g.edge([k, dependency.rid], { len: 3 });
        }
      }
    });

    let content = graphviz.toDot(graph);
    const dir = await fs.mkdtemp(path.join(os.tmpdir(), "architect-"));
    const tempDest = path.join(dir, "graph.dot");
    const execFileAsync = util.promisify(execFile);

    try {
      await fs.writeFile(tempDest, content);
      const buf = await execFileAsync("unflatten", ["-c", "3", tempDest]);
      content = buf.stdout;
    } catch (exception) {
      input.target.app.logger.warn(
        `rendering dependency graph: failed to run unflatten: ${exception}`,
      );
      input.target.app.logger.warn(
        "graph will not be flattened, and will look uglier",
      );
    } finally {
      await fs.rm(dir, {
        force: true,
        recursive: true,
      });
    }

    const dotPath = path.join(options.path, "graph.dot");
    const pngPath = path.join(options.path, "graph.png");
    await fs.writeFile(dotPath, content);

    try {
      await execFileAsync("dot", ["-Tpng", dotPath, "-o", pngPath]);
    } catch (exception) {
      input.target.app.logger.error(
        `rendering dependency graph: failed to run dot: ${exception}`,
      );
    }
  }
}
