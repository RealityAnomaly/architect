export const validate = validate0;
const schema0 = {"properties":{"overhead":{"$ref":"2VpWJlSigTZ-MCL2gAJiZP_3o7cixzf-t2wu23xsxcQ"},"runtimeHandler":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"scheduling":{"$ref":"dOfautIfsmQdP50eKV3uMIUrTbXcdXKkakwDPbEITt0"}},"required":["runtimeHandler"],"type":"object","$id":"io.k8s.api.node.v1alpha1.RuntimeClassSpec"};
const schema1 = {"nullableRef":"io.k8s.api.node.v1alpha1.Overhead#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiNodeV1alpha1Overhead.js";


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

const schema3 = {"type":"string"};

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(typeof data !== "string"){
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
validate5.errors = vErrors;
return errors === 0;
}

const schema4 = {"nullableRef":"io.k8s.api.node.v1alpha1.Scheduling#"};
const schema5 = {};

import { validate as validate8 } from "./IoK8sApiNodeV1alpha1Scheduling.js";


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate8(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
}
validate7.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.node.v1alpha1.RuntimeClassSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.runtimeHandler === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "runtimeHandler"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.overhead !== undefined){
let data0 = data.overhead;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/overhead",parentData:data,parentDataProperty:"overhead",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.runtimeHandler !== undefined){
let data1 = data.runtimeHandler;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/runtimeHandler",parentData:data,parentDataProperty:"runtimeHandler",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.scheduling !== undefined){
let data2 = data.scheduling;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/scheduling",parentData:data,parentDataProperty:"scheduling",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
else {
const err1 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate0.errors = vErrors;
return errors === 0;
}
