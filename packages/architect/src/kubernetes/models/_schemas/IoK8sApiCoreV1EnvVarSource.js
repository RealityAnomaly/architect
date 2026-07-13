export const validate = validate0;
const schema0 = {"properties":{"configMapKeyRef":{"$ref":"MsdQWaQ3zbmD4Nrf3RDzk2nb9rBLfpv2d6SNFflayyE"},"fieldRef":{"$ref":"JOhCLeihCPJEICCwJ_L74C0fLUv2Ekwfa8UfwK16gnA"},"fileKeyRef":{"$ref":"9R22DDWEljRNeJqiiobw_hbaGjq_w5j3olG9MuL40pY"},"resourceFieldRef":{"$ref":"MMFGE6raCf-JgDZlh_imnx9XhGYBaAKiYX14FgUnkTc"},"secretKeyRef":{"$ref":"9ycLxXIOreoyx5aQ3PnPUb5MeG7b_VHRXOh_hn9Q0Ag"}},"type":"object","$id":"io.k8s.api.core.v1.EnvVarSource"};
const schema1 = {"nullableRef":"io.k8s.api.core.v1.ConfigMapKeySelector#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiCoreV1ConfigMapKeySelector.js";


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

const schema3 = {"nullableRef":"io.k8s.api.core.v1.ObjectFieldSelector#"};
const schema4 = {};

import { validate as validate6 } from "./IoK8sApiCoreV1ObjectFieldSelector.js";


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

const schema5 = {"nullableRef":"io.k8s.api.core.v1.FileKeySelector#"};
const schema6 = {};

import { validate as validate10 } from "./IoK8sApiCoreV1FileKeySelector.js";


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

const schema7 = {"nullableRef":"io.k8s.api.core.v1.ResourceFieldSelector#"};
const schema8 = {};

import { validate as validate14 } from "./IoK8sApiCoreV1ResourceFieldSelector.js";


function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate14(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
}
validate13.errors = vErrors;
return errors === 0;
}

const schema9 = {"nullableRef":"io.k8s.api.core.v1.SecretKeySelector#"};
const schema10 = {};

import { validate as validate18 } from "./IoK8sApiCoreV1SecretKeySelector.js";


function validate17(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate18(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate18.errors : vErrors.concat(validate18.errors);
errors = vErrors.length;
}
else {
}
}
validate17.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.EnvVarSource" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.configMapKeyRef !== undefined){
let data0 = data.configMapKeyRef;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/configMapKeyRef",parentData:data,parentDataProperty:"configMapKeyRef",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.fieldRef !== undefined){
let data1 = data.fieldRef;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/fieldRef",parentData:data,parentDataProperty:"fieldRef",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.fileKeyRef !== undefined){
let data2 = data.fileKeyRef;
const _errs3 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/fileKeyRef",parentData:data,parentDataProperty:"fileKeyRef",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.resourceFieldRef !== undefined){
let data3 = data.resourceFieldRef;
const _errs4 = errors;
if(!(validate13(data3, {instancePath:instancePath+"/resourceFieldRef",parentData:data,parentDataProperty:"resourceFieldRef",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.secretKeyRef !== undefined){
let data4 = data.secretKeyRef;
const _errs5 = errors;
if(!(validate17(data4, {instancePath:instancePath+"/secretKeyRef",parentData:data,parentDataProperty:"secretKeyRef",rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
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
validate0.errors = vErrors;
return errors === 0;
}
