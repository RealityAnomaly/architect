/* @ts-self-types="./LimitedPriorityLevelConfiguration.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate0;
const schema0 = {"properties":{"assuredConcurrencyShares":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"limitResponse":{"$ref":"0BpeZs6dfyyvbfU_LbuaiWnWTLaXh0y-1Rhzj1BZUpo"}},"type":"object","$id":"io.k8s.api.flowcontrol.v1beta1.LimitedPriorityLevelConfiguration"};
const schema1 = {"format":"int32","type":"integer","nullable":true};
const formats0 = formats.int32;

function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(((typeof data == "number") && (!(data % 1) && !isNaN(data))) && (isFinite(data)))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "integer"}};
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
if((typeof data == "number") && (isFinite(data))){
if(!(formats0.validate(data))){
const err1 = {instancePath,schemaPath:"#/format",keyword:"format",params:{format: "int32"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
if(typeof data === "string"){
}
validate1.errors = vErrors;
return errors === 0;
}

const schema2 = {"nullableRef":"io.k8s.api.flowcontrol.v1beta1.LimitResponse#"};
const schema3 = {};

import { validate as validate4 } from "././LimitResponse.js";


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
/*# sourceURL="io.k8s.api.flowcontrol.v1beta1.LimitedPriorityLevelConfiguration" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.assuredConcurrencyShares !== undefined){
let data0 = data.assuredConcurrencyShares;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/assuredConcurrencyShares",parentData:data,parentDataProperty:"assuredConcurrencyShares",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.limitResponse !== undefined){
let data1 = data.limitResponse;
const _errs2 = errors;
if(!(validate3(data1, {instancePath:instancePath+"/limitResponse",parentData:data,parentDataProperty:"limitResponse",rootData}))){
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
