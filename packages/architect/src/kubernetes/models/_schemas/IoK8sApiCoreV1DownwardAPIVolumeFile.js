import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate0;
const schema0 = {"properties":{"fieldRef":{"$ref":"JOhCLeihCPJEICCwJ_L74C0fLUv2Ekwfa8UfwK16gnA"},"mode":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"path":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"resourceFieldRef":{"$ref":"MMFGE6raCf-JgDZlh_imnx9XhGYBaAKiYX14FgUnkTc"}},"required":["path"],"type":"object","$id":"io.k8s.api.core.v1.DownwardAPIVolumeFile"};
const schema1 = {"nullableRef":"io.k8s.api.core.v1.ObjectFieldSelector#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiCoreV1ObjectFieldSelector.js";


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

const schema3 = {"format":"int32","type":"integer","nullable":true};
const formats0 = formats.int32;

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate5.errors = vErrors;
return errors === 0;
}

const schema4 = {"type":"string"};

function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate7.errors = vErrors;
return errors === 0;
}

const schema5 = {"nullableRef":"io.k8s.api.core.v1.ResourceFieldSelector#"};
const schema6 = {};

import { validate as validate10 } from "./IoK8sApiCoreV1ResourceFieldSelector.js";


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
/*# sourceURL="io.k8s.api.core.v1.DownwardAPIVolumeFile" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.path === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "path"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.fieldRef !== undefined){
let data0 = data.fieldRef;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/fieldRef",parentData:data,parentDataProperty:"fieldRef",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.mode !== undefined){
let data1 = data.mode;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/mode",parentData:data,parentDataProperty:"mode",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.path !== undefined){
let data2 = data.path;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/path",parentData:data,parentDataProperty:"path",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.resourceFieldRef !== undefined){
let data3 = data.resourceFieldRef;
const _errs4 = errors;
if(!(validate9(data3, {instancePath:instancePath+"/resourceFieldRef",parentData:data,parentDataProperty:"resourceFieldRef",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
}
else {
const err1 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate0.errors = vErrors;
return errors === 0;
}
