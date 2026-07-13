/* @ts-self-types="./StorageVersionMigrationSpec.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"continueToken":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"resource":{"$ref":"GUCZMAn76-gqde0_OBxxLHCcOAN9c19wDRqVdTQ6Lt4"}},"required":["resource"],"type":"object","$id":"io.k8s.api.storagemigration.v1alpha1.StorageVersionMigrationSpec"};
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

const schema2 = {"$ref":"io.k8s.api.storagemigration.v1alpha1.GroupVersionResource#"};
const schema3 = {};

import { validate as validate4 } from "././GroupVersionResource.js";


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate4(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
validate3.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.storagemigration.v1alpha1.StorageVersionMigrationSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.resource === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "resource"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.continueToken !== undefined){
let data0 = data.continueToken;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/continueToken",parentData:data,parentDataProperty:"continueToken",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.resource !== undefined){
let data1 = data.resource;
const _errs2 = errors;
if(!(validate3(data1, {instancePath:instancePath+"/resource",parentData:data,parentDataProperty:"resource",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
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
