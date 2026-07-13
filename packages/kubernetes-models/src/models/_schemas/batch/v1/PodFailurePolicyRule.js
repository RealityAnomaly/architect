/* @ts-self-types="./PodFailurePolicyRule.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"action":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"onExitCodes":{"$ref":"CUqbB84rlxUjtUxBF0jgjhBRaWrO_u7ACm3Rp1mbjIo"},"onPodConditions":{"$ref":"lS6_-WX7YuVAc2JOHHo3SBr4qE6zN8JxiNhdpEiS1yg"}},"required":["action"],"type":"object","$id":"io.k8s.api.batch.v1.PodFailurePolicyRule"};
const schema1 = {"type":"string"};

function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate1.errors = vErrors;
return errors === 0;
}

const schema2 = {"nullableRef":"io.k8s.api.batch.v1.PodFailurePolicyOnExitCodesRequirement#"};
const schema3 = {};

import { validate as validate4 } from "././PodFailurePolicyOnExitCodesRequirement.js";


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

const schema4 = {"items":{"$ref":"kWMkib6fIQpRJ1T3beuaNZOW95xI2ilAmK3aSEsNdlo"},"type":"array","nullable":true};
const schema5 = {"$ref":"io.k8s.api.batch.v1.PodFailurePolicyOnPodConditionsPattern#"};
const schema6 = {};

import { validate as validate9 } from "././PodFailurePolicyOnPodConditionsPattern.js";


function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate9(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
validate8.errors = vErrors;
return errors === 0;
}


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate8(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
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
validate7.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.batch.v1.PodFailurePolicyRule" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.action === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "action"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.action !== undefined){
let data0 = data.action;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/action",parentData:data,parentDataProperty:"action",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.onExitCodes !== undefined){
let data1 = data.onExitCodes;
const _errs2 = errors;
if(!(validate3(data1, {instancePath:instancePath+"/onExitCodes",parentData:data,parentDataProperty:"onExitCodes",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.onPodConditions !== undefined){
let data2 = data.onPodConditions;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/onPodConditions",parentData:data,parentDataProperty:"onPodConditions",rootData}))){
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
