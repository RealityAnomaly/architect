/* @ts-self-types="./LimitedPriorityLevelConfiguration.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate1;
const schema1 = {"properties":{"assuredConcurrencyShares":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"borrowingLimitPercent":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"lendablePercent":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"limitResponse":{"$ref":"FPuue4w9OfeVbjHFmagO3i-HPnh6u7zMIBY6izzaNbo"}},"type":"object","$id":"io.k8s.api.flowcontrol.v1beta2.LimitedPriorityLevelConfiguration"};
const schema0 = {"format":"int32","type":"integer","nullable":true};
const formats0 = formats.int32;

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate0.errors = vErrors;
return errors === 0;
}

const schema2 = {"nullableRef":"io.k8s.api.flowcontrol.v1beta2.LimitResponse#"};
const schema3 = {};

import { validate as validate6 } from "././LimitResponse.js";


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


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.flowcontrol.v1beta2.LimitedPriorityLevelConfiguration" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.assuredConcurrencyShares !== undefined){
let data0 = data.assuredConcurrencyShares;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/assuredConcurrencyShares",parentData:data,parentDataProperty:"assuredConcurrencyShares",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.borrowingLimitPercent !== undefined){
let data1 = data.borrowingLimitPercent;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/borrowingLimitPercent",parentData:data,parentDataProperty:"borrowingLimitPercent",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.lendablePercent !== undefined){
let data2 = data.lendablePercent;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/lendablePercent",parentData:data,parentDataProperty:"lendablePercent",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.limitResponse !== undefined){
let data3 = data.limitResponse;
const _errs4 = errors;
if(!(validate5(data3, {instancePath:instancePath+"/limitResponse",parentData:data,parentDataProperty:"limitResponse",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
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
validate1.errors = vErrors;
return errors === 0;
}
