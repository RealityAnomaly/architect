/* @ts-self-types="./EmptyDirVolumeSource.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"medium":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"sizeLimit":{"$ref":"pp_xaFlNXkKoD6DTqyaUAeP7lGItJ9_hKwPxmHYeCNA"}},"type":"object","$id":"io.k8s.api.core.v1.EmptyDirVolumeSource"};
const schema1 = {"type":"string","nullable":true};

function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate1.errors = vErrors;
return errors === 0;
}

const schema2 = {"nullableRef":"io.k8s.apimachinery.pkg.api.resource.Quantity#"};
const schema3 = {};

import { validate as validate4 } from "./../../../apimachinery/_schemas/api/resource/Quantity.js";


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate4(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
}
validate3.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.EmptyDirVolumeSource" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.medium !== undefined){
let data0 = data.medium;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/medium",parentData:data,parentDataProperty:"medium",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.sizeLimit !== undefined){
let data1 = data.sizeLimit;
const _errs2 = errors;
if(!(validate3(data1, {instancePath:instancePath+"/sizeLimit",parentData:data,parentDataProperty:"sizeLimit",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
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
