/* @ts-self-types="./ExemptPriorityLevelConfiguration.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate1;
const schema1 = {"properties":{"lendablePercent":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"nominalConcurrencyShares":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"}},"type":"object","$id":"io.k8s.api.flowcontrol.v1.ExemptPriorityLevelConfiguration"};
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


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.flowcontrol.v1.ExemptPriorityLevelConfiguration" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.lendablePercent !== undefined){
let data0 = data.lendablePercent;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/lendablePercent",parentData:data,parentDataProperty:"lendablePercent",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.nominalConcurrencyShares !== undefined){
let data1 = data.nominalConcurrencyShares;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/nominalConcurrencyShares",parentData:data,parentDataProperty:"nominalConcurrencyShares",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
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
validate1.errors = vErrors;
return errors === 0;
}
