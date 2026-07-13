/* @ts-self-types="./HPAScalingRules.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate0;
const schema0 = {"properties":{"policies":{"$ref":"BdydikH3D3WrXgqKmcT60NJcf2HFrCnhykNjY8P2tmc"},"selectPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"stabilizationWindowSeconds":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"}},"type":"object","$id":"io.k8s.api.autoscaling.v2beta2.HPAScalingRules"};
const schema1 = {"items":{"$ref":"ELtoW2SDJp1KD6TKE1o98_2yBW1MXl5EaOyP72jx36w"},"type":"array","nullable":true};
const schema2 = {"$ref":"io.k8s.api.autoscaling.v2beta2.HPAScalingPolicy#"};
const schema3 = {};

import { validate as validate3 } from "././HPAScalingPolicy.js";


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

const schema4 = {"type":"string","nullable":true};

function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate7.errors = vErrors;
return errors === 0;
}

const schema5 = {"format":"int32","type":"integer","nullable":true};
const formats0 = formats.int32;

function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate9.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.autoscaling.v2beta2.HPAScalingRules" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.policies !== undefined){
let data0 = data.policies;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/policies",parentData:data,parentDataProperty:"policies",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.selectPolicy !== undefined){
let data1 = data.selectPolicy;
const _errs2 = errors;
if(!(validate7(data1, {instancePath:instancePath+"/selectPolicy",parentData:data,parentDataProperty:"selectPolicy",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.stabilizationWindowSeconds !== undefined){
let data2 = data.stabilizationWindowSeconds;
const _errs3 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/stabilizationWindowSeconds",parentData:data,parentDataProperty:"stabilizationWindowSeconds",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
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
