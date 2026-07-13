export const validate = validate0;
const schema0 = {"properties":{"workload":{"$ref":"OUgAzMvwfPHWGmagr8Tc91T1Ovi3b8hDjvTsBV0HemQ"}},"type":"object","$id":"io.k8s.api.scheduling.v1alpha2.PodGroupTemplateReference"};
const schema1 = {"nullableRef":"io.k8s.api.scheduling.v1alpha2.WorkloadPodGroupTemplateReference#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiSchedulingV1alpha2WorkloadPodGroupTemplateReference.js";


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate2(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
}
validate1.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.scheduling.v1alpha2.PodGroupTemplateReference" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.workload !== undefined){
let data0 = data.workload;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/workload",parentData:data,parentDataProperty:"workload",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
}
else {
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
validate0.errors = vErrors;
return errors === 0;
}
