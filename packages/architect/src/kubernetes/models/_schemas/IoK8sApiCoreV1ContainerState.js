export const validate = validate0;
const schema0 = {"properties":{"running":{"$ref":"Obq93tOmXJxn87JLaHhPm47TaxoUaD76UQhhAUHh4GI"},"terminated":{"$ref":"2qB6EHPkoM_ZLt7b_E7QPymDlcunFUyEGhugce5Hs_o"},"waiting":{"$ref":"bVd0GZI-sbBqag9_2PEvFkkL7J9pGON4QlcEDIPCT6o"}},"type":"object","$id":"io.k8s.api.core.v1.ContainerState"};
const schema1 = {"nullableRef":"io.k8s.api.core.v1.ContainerStateRunning#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiCoreV1ContainerStateRunning.js";


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

const schema3 = {"nullableRef":"io.k8s.api.core.v1.ContainerStateTerminated#"};
const schema4 = {};

import { validate as validate6 } from "./IoK8sApiCoreV1ContainerStateTerminated.js";


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

const schema5 = {"nullableRef":"io.k8s.api.core.v1.ContainerStateWaiting#"};
const schema6 = {};

import { validate as validate10 } from "./IoK8sApiCoreV1ContainerStateWaiting.js";


function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate10(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
}
validate9.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.ContainerState" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.running !== undefined){
let data0 = data.running;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/running",parentData:data,parentDataProperty:"running",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.terminated !== undefined){
let data1 = data.terminated;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/terminated",parentData:data,parentDataProperty:"terminated",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.waiting !== undefined){
let data2 = data.waiting;
const _errs3 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/waiting",parentData:data,parentDataProperty:"waiting",rootData}))){
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
