/* @ts-self-types="./StorageVersionSpec.d.ts" */
export const validate = validate0;
const schema0 = {"type":"object","$id":"io.k8s.api.apiserverinternal.v1alpha1.StorageVersionSpec"};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.apiserverinternal.v1alpha1.StorageVersionSpec" */;
let vErrors = null;
let errors = 0;
if(!(data && typeof data == "object" && !Array.isArray(data))){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
const _errs0 = errors;
validate0.errors = vErrors;
return errors === 0;
}
