/* @ts-self-types="./PodGroupSchedulingConstraints.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"topology":{"$ref":"JZFk6hKPDnl0HQ4SqNAr_VQ_ZmKe2jIEnIKf8YC1qks"}},"type":"object","$id":"io.k8s.api.scheduling.v1alpha2.PodGroupSchedulingConstraints"};
const schema1 = {"items":{"$ref":"yCRRP5KLAwIHZoHBtWecXxIVKYfFMnGaW_Fa7isNKRE"},"type":"array","nullable":true};
const schema2 = {"$ref":"io.k8s.api.scheduling.v1alpha2.TopologyConstraint#"};
const schema3 = {};

import { validate as validate3 } from "././TopologyConstraint.js";


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate3(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
validate2.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(Array.isArray(data))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"}};
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
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs2 = errors;
if(!(validate2(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
if(!valid0){
valid1 = false;
}
}
}
validate1.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.scheduling.v1alpha2.PodGroupSchedulingConstraints" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.topology !== undefined){
let data0 = data.topology;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/topology",parentData:data,parentDataProperty:"topology",rootData}))){
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
