/* @ts-self-types="./ResourceClaimStatus.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"allocation":{"$ref":"ZEZHoGaGBE7fkls5pF6bgZcGrPXYgkUo8DiL2EeIIUs"},"devices":{"$ref":"3d-I33DY0lqN0er2Z2GBjYSuIgr3V2Ko25H5x3-Tq68"},"reservedFor":{"$ref":"lVg3a71_1XBdUk2QJpg7DMkYb9o9q7NJAfOxFdSqZes"}},"type":"object","$id":"io.k8s.api.resource.v1beta2.ResourceClaimStatus"};
const schema1 = {"nullableRef":"io.k8s.api.resource.v1beta2.AllocationResult#"};
const schema2 = {};

import { validate as validate2 } from "././AllocationResult.js";


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

const schema3 = {"items":{"$ref":"KtTMxqF6Pn6p4qZCN37MwQCss71JoCyWdS35N-K57j8"},"type":"array","nullable":true};
const schema4 = {"$ref":"io.k8s.api.resource.v1beta2.AllocatedDeviceStatus#"};
const schema5 = {};

import { validate as validate7 } from "././AllocatedDeviceStatus.js";


function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate7(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
validate6.errors = vErrors;
return errors === 0;
}


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate6(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
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
validate5.errors = vErrors;
return errors === 0;
}

const schema6 = {"items":{"$ref":"CoQwOg67uaEpwPry6N9jFHeouTxbvZf7YurE5doQtKE"},"type":"array","nullable":true};
const schema7 = {"$ref":"io.k8s.api.resource.v1beta2.ResourceClaimConsumerReference#"};
const schema8 = {};

import { validate as validate13 } from "././ResourceClaimConsumerReference.js";


function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate13(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
validate12.errors = vErrors;
return errors === 0;
}


function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate12(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
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
validate11.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.resource.v1beta2.ResourceClaimStatus" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.allocation !== undefined){
let data0 = data.allocation;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/allocation",parentData:data,parentDataProperty:"allocation",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.devices !== undefined){
let data1 = data.devices;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/devices",parentData:data,parentDataProperty:"devices",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.reservedFor !== undefined){
let data2 = data.reservedFor;
const _errs3 = errors;
if(!(validate11(data2, {instancePath:instancePath+"/reservedFor",parentData:data,parentDataProperty:"reservedFor",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
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
