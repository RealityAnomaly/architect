/* @ts-self-types="./DeviceTaint.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"effect":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"key":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"timeAdded":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"},"value":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"required":["key","effect"],"type":"object","$id":"io.k8s.api.resource.v1beta2.DeviceTaint"};
const schema0 = {"type":"string"};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate0.errors = vErrors;
return errors === 0;
}

const schema2 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.Time#"};
const schema3 = {};

import { validate as validate5 } from "./../../../../apimachinery/_schemas/apis/meta/v1/Time.js";


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate5(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
}
validate4.errors = vErrors;
return errors === 0;
}

const schema4 = {"type":"string","nullable":true};

function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate8.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.resource.v1beta2.DeviceTaint" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.key === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "key"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.effect === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "effect"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.effect !== undefined){
let data0 = data.effect;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/effect",parentData:data,parentDataProperty:"effect",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.key !== undefined){
let data1 = data.key;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/key",parentData:data,parentDataProperty:"key",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.timeAdded !== undefined){
let data2 = data.timeAdded;
const _errs3 = errors;
if(!(validate4(data2, {instancePath:instancePath+"/timeAdded",parentData:data,parentDataProperty:"timeAdded",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.value !== undefined){
let data3 = data.value;
const _errs4 = errors;
if(!(validate8(data3, {instancePath:instancePath+"/value",parentData:data,parentDataProperty:"value",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
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
validate1.errors = vErrors;
return errors === 0;
}
