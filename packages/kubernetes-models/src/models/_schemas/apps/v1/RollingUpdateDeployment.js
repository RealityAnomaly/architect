/* @ts-self-types="./RollingUpdateDeployment.d.ts" */
export const validate = validate3;
const schema2 = {"properties":{"maxSurge":{"$ref":"0Ic74D7DBbilZPLlK8sD9BMBs_dQWTMr2-XowApJQb0"},"maxUnavailable":{"$ref":"0Ic74D7DBbilZPLlK8sD9BMBs_dQWTMr2-XowApJQb0"}},"type":"object","$id":"io.k8s.api.apps.v1.RollingUpdateDeployment"};
const schema0 = {"nullableRef":"io.k8s.apimachinery.pkg.util.intstr.IntOrString#"};
const schema1 = {};

import { validate as validate1 } from "./../../../../apimachinery/_schemas/util/intstr/IntOrString.js";


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate1(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
}
validate0.errors = vErrors;
return errors === 0;
}


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.apps.v1.RollingUpdateDeployment" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.maxSurge !== undefined){
let data0 = data.maxSurge;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/maxSurge",parentData:data,parentDataProperty:"maxSurge",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.maxUnavailable !== undefined){
let data1 = data.maxUnavailable;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/maxUnavailable",parentData:data,parentDataProperty:"maxUnavailable",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
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
validate3.errors = vErrors;
return errors === 0;
}
