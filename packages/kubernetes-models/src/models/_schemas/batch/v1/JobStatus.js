/* @ts-self-types="./JobStatus.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate5;
const schema4 = {"properties":{"active":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"completedIndexes":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"completionTime":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"},"conditions":{"$ref":"t7Kk4aiLdAUvsrixxQ6cW49TuYn4YXzgC3xI25LqtGo"},"failed":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"failedIndexes":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"ready":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"startTime":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"},"succeeded":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"terminating":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"uncountedTerminatedPods":{"$ref":"Wm5zH5rlhjxnb_de8-tYnYnprH9zvBMHi49yztdBzVE"}},"type":"object","$id":"io.k8s.api.batch.v1.JobStatus"};
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

const schema2 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.Time#"};
const schema3 = {};

import { validate as validate3 } from "./../../../../apimachinery/_schemas/apis/meta/v1/Time.js";


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate3(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
}
validate2.errors = vErrors;
return errors === 0;
}

const schema5 = {"items":{"$ref":"2mTRHXaj0DKCHsZK-PyghkCB7Q7ICVjgIcrRhAukt0c"},"type":"array","nullable":true};
const schema6 = {"$ref":"io.k8s.api.batch.v1.JobCondition#"};
const schema7 = {};

import { validate as validate11 } from "././JobCondition.js";


function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate11(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
validate10.errors = vErrors;
return errors === 0;
}


function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate10(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
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
validate9.errors = vErrors;
return errors === 0;
}

const schema8 = {"nullableRef":"io.k8s.api.batch.v1.UncountedTerminatedPods#"};
const schema9 = {};

import { validate as validate22 } from "././UncountedTerminatedPods.js";


function validate21(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate22(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
}
validate21.errors = vErrors;
return errors === 0;
}


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.batch.v1.JobStatus" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.active !== undefined){
let data0 = data.active;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/active",parentData:data,parentDataProperty:"active",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.completedIndexes !== undefined){
let data1 = data.completedIndexes;
const _errs2 = errors;
if(!(validate1(data1, {instancePath:instancePath+"/completedIndexes",parentData:data,parentDataProperty:"completedIndexes",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.completionTime !== undefined){
let data2 = data.completionTime;
const _errs3 = errors;
if(!(validate2(data2, {instancePath:instancePath+"/completionTime",parentData:data,parentDataProperty:"completionTime",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.conditions !== undefined){
let data3 = data.conditions;
const _errs4 = errors;
if(!(validate9(data3, {instancePath:instancePath+"/conditions",parentData:data,parentDataProperty:"conditions",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.failed !== undefined){
let data4 = data.failed;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/failed",parentData:data,parentDataProperty:"failed",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.failedIndexes !== undefined){
let data5 = data.failedIndexes;
const _errs6 = errors;
if(!(validate1(data5, {instancePath:instancePath+"/failedIndexes",parentData:data,parentDataProperty:"failedIndexes",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.ready !== undefined){
let data6 = data.ready;
const _errs7 = errors;
if(!(validate0(data6, {instancePath:instancePath+"/ready",parentData:data,parentDataProperty:"ready",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.startTime !== undefined){
let data7 = data.startTime;
const _errs8 = errors;
if(!(validate2(data7, {instancePath:instancePath+"/startTime",parentData:data,parentDataProperty:"startTime",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.succeeded !== undefined){
let data8 = data.succeeded;
const _errs9 = errors;
if(!(validate0(data8, {instancePath:instancePath+"/succeeded",parentData:data,parentDataProperty:"succeeded",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.terminating !== undefined){
let data9 = data.terminating;
const _errs10 = errors;
if(!(validate0(data9, {instancePath:instancePath+"/terminating",parentData:data,parentDataProperty:"terminating",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.uncountedTerminatedPods !== undefined){
let data10 = data.uncountedTerminatedPods;
const _errs11 = errors;
if(!(validate21(data10, {instancePath:instancePath+"/uncountedTerminatedPods",parentData:data,parentDataProperty:"uncountedTerminatedPods",rootData}))){
vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
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
validate5.errors = vErrors;
return errors === 0;
}
