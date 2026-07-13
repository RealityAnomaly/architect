/* @ts-self-types="./IngressBackend.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"resource":{"$ref":"gNEfkjpSaoArCZJB8LjjteziH_lHn9X0rfNecp1th_o"},"service":{"$ref":"ARRWQYecjACjH9zIMhILz56IwHnX_ng5xRe3VxFwFAY"}},"type":"object","$id":"io.k8s.api.networking.v1.IngressBackend"};
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

const schema3 = {"nullableRef":"io.k8s.api.networking.v1.IngressServiceBackend#"};
const schema4 = {};

import { validate as validate6 } from "././IngressServiceBackend.js";


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate6(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
}
validate5.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.networking.v1.IngressBackend" */;
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
if(data.service !== undefined){
let data1 = data.service;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/service",parentData:data,parentDataProperty:"service",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
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
validate0.errors = vErrors;
return errors === 0;
}
