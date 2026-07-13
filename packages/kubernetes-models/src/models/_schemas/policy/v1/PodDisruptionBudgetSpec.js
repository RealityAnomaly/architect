/* @ts-self-types="./PodDisruptionBudgetSpec.d.ts" */
export const validate = validate3;
const schema2 = {"properties":{"maxUnavailable":{"$ref":"0Ic74D7DBbilZPLlK8sD9BMBs_dQWTMr2-XowApJQb0"},"minAvailable":{"$ref":"0Ic74D7DBbilZPLlK8sD9BMBs_dQWTMr2-XowApJQb0"},"selector":{"$ref":"ft7HGURTbPyh-vhzFAYgnhVehb5DIkOC1Qu-kP-9F84"},"unhealthyPodEvictionPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object","$id":"io.k8s.api.policy.v1.PodDisruptionBudgetSpec"};
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

const schema3 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"};
const schema4 = {};

import { validate as validate7 } from "./../../../../apimachinery/_schemas/apis/meta/v1/LabelSelector.js";


function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate7(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
}
validate6.errors = vErrors;
return errors === 0;
}

const schema5 = {"type":"string","nullable":true};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((typeof data !== "string") && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
const _errs0 = errors;
const _errs1 = errors;
validate10.errors = vErrors;
return errors === 0;
}


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.policy.v1.PodDisruptionBudgetSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.maxUnavailable !== undefined){
let data0 = data.maxUnavailable;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/maxUnavailable",parentData:data,parentDataProperty:"maxUnavailable",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.minAvailable !== undefined){
let data1 = data.minAvailable;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/minAvailable",parentData:data,parentDataProperty:"minAvailable",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.selector !== undefined){
let data2 = data.selector;
const _errs3 = errors;
if(!(validate6(data2, {instancePath:instancePath+"/selector",parentData:data,parentDataProperty:"selector",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.unhealthyPodEvictionPolicy !== undefined){
let data3 = data.unhealthyPodEvictionPolicy;
const _errs4 = errors;
if(!(validate10(data3, {instancePath:instancePath+"/unhealthyPodEvictionPolicy",parentData:data,parentDataProperty:"unhealthyPodEvictionPolicy",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
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
