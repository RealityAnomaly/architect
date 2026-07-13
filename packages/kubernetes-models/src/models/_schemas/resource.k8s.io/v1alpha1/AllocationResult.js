/* @ts-self-types="./AllocationResult.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"availableOnNodes":{"$ref":"TkSNaYWIxhO85OVX_cSWzmQgv784eOxf9GMx98WTU1I"},"resourceHandle":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"shareable":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"}},"type":"object","$id":"io.k8s.api.resource.v1alpha1.AllocationResult"};
const schema1 = {"nullableRef":"io.k8s.api.core.v1.NodeSelector#"};
const schema2 = {};

import { validate as validate2 } from "./../../v1/NodeSelector.js";


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

const schema4 = {"type":"boolean","nullable":true};

function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((typeof data !== "boolean") && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "boolean"}};
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
validate7.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.resource.v1alpha1.AllocationResult" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.availableOnNodes !== undefined){
let data0 = data.availableOnNodes;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/availableOnNodes",parentData:data,parentDataProperty:"availableOnNodes",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.resourceHandle !== undefined){
let data1 = data.resourceHandle;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/resourceHandle",parentData:data,parentDataProperty:"resourceHandle",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.shareable !== undefined){
let data2 = data.shareable;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/shareable",parentData:data,parentDataProperty:"shareable",rootData}))){
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
