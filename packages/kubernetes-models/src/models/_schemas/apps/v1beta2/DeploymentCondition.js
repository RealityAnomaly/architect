/* @ts-self-types="./DeploymentCondition.d.ts" */
export const validate = validate5;
const schema4 = {"properties":{"lastTransitionTime":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"},"lastUpdateTime":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"},"message":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"reason":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"status":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["type","status"],"type":"object","$id":"io.k8s.api.apps.v1beta2.DeploymentCondition"};
const schema0 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.Time#"};
const schema1 = {};

import { validate as validate1 } from "./../../../../apimachinery/_schemas/apis/meta/v1/Time.js";


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate1(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
}
validate0.errors = vErrors;
return errors === 0;
}

const schema2 = {"type":"string","nullable":true};

function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate3.errors = vErrors;
return errors === 0;
}

const schema3 = {"type":"string"};

function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate4.errors = vErrors;
return errors === 0;
}


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.apps.v1beta2.DeploymentCondition" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.type === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "type"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.status === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "status"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.lastTransitionTime !== undefined){
let data0 = data.lastTransitionTime;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/lastTransitionTime",parentData:data,parentDataProperty:"lastTransitionTime",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.lastUpdateTime !== undefined){
let data1 = data.lastUpdateTime;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/lastUpdateTime",parentData:data,parentDataProperty:"lastUpdateTime",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.message !== undefined){
let data2 = data.message;
const _errs3 = errors;
if(!(validate3(data2, {instancePath:instancePath+"/message",parentData:data,parentDataProperty:"message",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.reason !== undefined){
let data3 = data.reason;
const _errs4 = errors;
if(!(validate3(data3, {instancePath:instancePath+"/reason",parentData:data,parentDataProperty:"reason",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.status !== undefined){
let data4 = data.status;
const _errs5 = errors;
if(!(validate4(data4, {instancePath:instancePath+"/status",parentData:data,parentDataProperty:"status",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.type !== undefined){
let data5 = data.type;
const _errs6 = errors;
if(!(validate4(data5, {instancePath:instancePath+"/type",parentData:data,parentDataProperty:"type",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
}
else {
const err2 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
validate5.errors = vErrors;
return errors === 0;
}
