export const validate = validate0;
const schema0 = {"properties":{"configMapRef":{"$ref":"TsoMG6XfDRxZGIRW82etlQlgP1-FKZ9Ap4bVJa7qFOE"},"prefix":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"secretRef":{"$ref":"MT6lPGHwFXyDcE16vik3ql_uWWFyJnPdotJOEhxO_x4"}},"type":"object","$id":"io.k8s.api.core.v1.EnvFromSource"};
const schema1 = {"nullableRef":"io.k8s.api.core.v1.ConfigMapEnvSource#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiCoreV1ConfigMapEnvSource.js";


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

const schema3 = {"type":"string","nullable":true};

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate5.errors = vErrors;
return errors === 0;
}

const schema4 = {"nullableRef":"io.k8s.api.core.v1.SecretEnvSource#"};
const schema5 = {};

import { validate as validate8 } from "./IoK8sApiCoreV1SecretEnvSource.js";


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


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.EnvFromSource" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.configMapRef !== undefined){
let data0 = data.configMapRef;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/configMapRef",parentData:data,parentDataProperty:"configMapRef",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.prefix !== undefined){
let data1 = data.prefix;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/prefix",parentData:data,parentDataProperty:"prefix",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.secretRef !== undefined){
let data2 = data.secretRef;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/secretRef",parentData:data,parentDataProperty:"secretRef",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
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
