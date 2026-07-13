export const validate = validate3;
const schema2 = {"properties":{"active":{"$ref":"nlgMAfIYWXxnNSfm2mAc7ZWvJ2-hnYWjuGO9xVyaL_A"},"lastScheduleTime":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"},"lastSuccessfulTime":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"}},"type":"object","$id":"io.k8s.api.batch.v1beta1.CronJobStatus"};
const schema3 = {"items":{"$ref":"d863Mc7i69O5KcXrD5kRFWdoZ1ImC_fvsM81XerxN5Y"},"type":"array","nullable":true};
const schema4 = {"$ref":"io.k8s.api.core.v1.ObjectReference#"};
const schema5 = {};

import { validate as validate6 } from "./IoK8sApiCoreV1ObjectReference.js";


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate6(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
validate5.errors = vErrors;
return errors === 0;
}


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate5(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
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
validate4.errors = vErrors;
return errors === 0;
}

const schema0 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.Time#"};
const schema1 = {};

import { validate as validate1 } from "./../../apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1Time.js";


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


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.batch.v1beta1.CronJobStatus" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.active !== undefined){
let data0 = data.active;
const _errs1 = errors;
if(!(validate4(data0, {instancePath:instancePath+"/active",parentData:data,parentDataProperty:"active",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.lastScheduleTime !== undefined){
let data1 = data.lastScheduleTime;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/lastScheduleTime",parentData:data,parentDataProperty:"lastScheduleTime",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.lastSuccessfulTime !== undefined){
let data2 = data.lastSuccessfulTime;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/lastSuccessfulTime",parentData:data,parentDataProperty:"lastSuccessfulTime",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
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
validate3.errors = vErrors;
return errors === 0;
}
