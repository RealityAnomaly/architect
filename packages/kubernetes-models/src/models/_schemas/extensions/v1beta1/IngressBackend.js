/* @ts-self-types="./IngressBackend.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"resource":{"$ref":"gNEfkjpSaoArCZJB8LjjteziH_lHn9X0rfNecp1th_o"},"serviceName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"servicePort":{"$ref":"0Ic74D7DBbilZPLlK8sD9BMBs_dQWTMr2-XowApJQb0"}},"type":"object","$id":"io.k8s.api.extensions.v1beta1.IngressBackend"};
const schema1 = {"nullableRef":"io.k8s.api.core.v1.TypedLocalObjectReference#"};
const schema2 = {};

import { validate as validate2 } from "./../../v1/TypedLocalObjectReference.js";


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

const schema3 = {"type":"string","nullable":true};

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate5.errors = vErrors;
return errors === 0;
}

const schema4 = {"nullableRef":"io.k8s.apimachinery.pkg.util.intstr.IntOrString#"};
const schema5 = {};

import { validate as validate8 } from "./../../../../apimachinery/_schemas/util/intstr/IntOrString.js";


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
/*# sourceURL="io.k8s.api.extensions.v1beta1.IngressBackend" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.resource !== undefined){
let data0 = data.resource;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/resource",parentData:data,parentDataProperty:"resource",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.serviceName !== undefined){
let data1 = data.serviceName;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/serviceName",parentData:data,parentDataProperty:"serviceName",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.servicePort !== undefined){
let data2 = data.servicePort;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/servicePort",parentData:data,parentDataProperty:"servicePort",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
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
