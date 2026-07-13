/* @ts-self-types="./ListMeta.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate1;
const schema1 = {"properties":{"continue":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"remainingItemCount":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"resourceVersion":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"selfLink":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"shardInfo":{"$ref":"1UWOhQdByQ0HEnaBS4CcVMRoDZuAEc_a78vb_eUFRMk"}},"type":"object","$id":"io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"};
const schema0 = {"type":"string","nullable":true};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate0.errors = vErrors;
return errors === 0;
}

const schema2 = {"format":"int64","type":"integer","nullable":true};
const formats0 = formats.int64;

function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const err1 = {instancePath,schemaPath:"#/format",keyword:"format",params:{format: "int64"}};
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
validate3.errors = vErrors;
return errors === 0;
}

const schema3 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.ShardInfo#"};
const schema4 = {};

import { validate as validate8 } from "././ShardInfo.js";


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate8(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
}
validate7.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.continue !== undefined){
let data0 = data.continue;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/continue",parentData:data,parentDataProperty:"continue",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.remainingItemCount !== undefined){
let data1 = data.remainingItemCount;
const _errs2 = errors;
if(!(validate3(data1, {instancePath:instancePath+"/remainingItemCount",parentData:data,parentDataProperty:"remainingItemCount",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.resourceVersion !== undefined){
let data2 = data.resourceVersion;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/resourceVersion",parentData:data,parentDataProperty:"resourceVersion",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.selfLink !== undefined){
let data3 = data.selfLink;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/selfLink",parentData:data,parentDataProperty:"selfLink",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.shardInfo !== undefined){
let data4 = data.shardInfo;
const _errs5 = errors;
if(!(validate7(data4, {instancePath:instancePath+"/shardInfo",parentData:data,parentDataProperty:"shardInfo",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
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
