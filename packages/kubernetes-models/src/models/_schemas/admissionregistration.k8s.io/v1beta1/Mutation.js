/* @ts-self-types="./Mutation.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"applyConfiguration":{"$ref":"V2phbNUTqKWeOBV-EXSYTh0-LG88LqWj-8P67NgThAs"},"jsonPatch":{"$ref":"cEQ5_cFD8EE0922Be3gKePfuqLFwVfhG3VuuXZVi3DA"},"patchType":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["patchType"],"type":"object","$id":"io.k8s.api.admissionregistration.v1beta1.Mutation"};
const schema1 = {"nullableRef":"io.k8s.api.admissionregistration.v1beta1.ApplyConfiguration#"};
const schema2 = {};

import { validate as validate2 } from "././ApplyConfiguration.js";


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

const schema3 = {"nullableRef":"io.k8s.api.admissionregistration.v1beta1.JSONPatch#"};
const schema4 = {};

import { validate as validate6 } from "././JSONPatch.js";


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

const schema5 = {"type":"string"};

function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate9.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.admissionregistration.v1beta1.Mutation" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.patchType === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "patchType"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.applyConfiguration !== undefined){
let data0 = data.applyConfiguration;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/applyConfiguration",parentData:data,parentDataProperty:"applyConfiguration",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.jsonPatch !== undefined){
let data1 = data.jsonPatch;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/jsonPatch",parentData:data,parentDataProperty:"jsonPatch",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.patchType !== undefined){
let data2 = data.patchType;
const _errs3 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/patchType",parentData:data,parentDataProperty:"patchType",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
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
