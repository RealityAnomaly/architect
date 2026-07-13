/* @ts-self-types="./BasicSchedulingPolicy.d.ts" */
export const validate = validate0;
const schema0 = {"type":"object","$id":"io.k8s.api.scheduling.v1alpha2.BasicSchedulingPolicy"};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.scheduling.v1alpha2.BasicSchedulingPolicy" */;
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
