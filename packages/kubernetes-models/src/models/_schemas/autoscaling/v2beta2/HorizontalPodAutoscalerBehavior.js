/* @ts-self-types="./HorizontalPodAutoscalerBehavior.d.ts" */
export const validate = validate3;
const schema2 = {"properties":{"scaleDown":{"$ref":"DlfeP_5m7TaVXAM2DbTrffVw4y-fqsBZ0LQoCKBevTE"},"scaleUp":{"$ref":"DlfeP_5m7TaVXAM2DbTrffVw4y-fqsBZ0LQoCKBevTE"}},"type":"object","$id":"io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerBehavior"};
const schema0 = {"nullableRef":"io.k8s.api.autoscaling.v2beta2.HPAScalingRules#"};
const schema1 = {};

import { validate as validate1 } from "././HPAScalingRules.js";


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
/*# sourceURL="io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerBehavior" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.scaleDown !== undefined){
let data0 = data.scaleDown;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/scaleDown",parentData:data,parentDataProperty:"scaleDown",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.scaleUp !== undefined){
let data1 = data.scaleUp;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/scaleUp",parentData:data,parentDataProperty:"scaleUp",rootData}))){
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
