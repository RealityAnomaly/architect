/* @ts-self-types="./EndpointSubset.d.ts" */
export const validate = validate5;
const schema3 = {"properties":{"addresses":{"$ref":"ZZorem0dgaA7mng0Jo6afgw7OpKPAK_DlZWM9bW5c5A"},"notReadyAddresses":{"$ref":"ZZorem0dgaA7mng0Jo6afgw7OpKPAK_DlZWM9bW5c5A"},"ports":{"$ref":"_eHBUXglvieoYjK2ELbUKS4K8lsxEbsicZQj_sQxJ24"}},"type":"object","$id":"io.k8s.api.core.v1.EndpointSubset"};
const schema0 = {"items":{"$ref":"xbREBpJNs3rOTRIFNHqYnBGjy-f4R8JHEGvXEE_mr2Y"},"type":"array","nullable":true};
const schema1 = {"$ref":"io.k8s.api.core.v1.EndpointAddress#"};
const schema2 = {};

import { validate as validate2 } from "././EndpointAddress.js";


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate2(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
validate1.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate1(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
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
validate0.errors = vErrors;
return errors === 0;
}

const schema4 = {"items":{"$ref":"fxdUg5RxC2E_315WPSkpjmyKlH8v3jLYYTseVuTd9Zc"},"type":"array","nullable":true};
const schema5 = {"$ref":"io.k8s.api.core.v1.EndpointPort#"};
const schema6 = {};

import { validate as validate10 } from "././EndpointPort.js";


function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate10(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
validate9.errors = vErrors;
return errors === 0;
}


function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate9(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
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
validate8.errors = vErrors;
return errors === 0;
}


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.EndpointSubset" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.addresses !== undefined){
let data0 = data.addresses;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/addresses",parentData:data,parentDataProperty:"addresses",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.notReadyAddresses !== undefined){
let data1 = data.notReadyAddresses;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/notReadyAddresses",parentData:data,parentDataProperty:"notReadyAddresses",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.ports !== undefined){
let data2 = data.ports;
const _errs3 = errors;
if(!(validate8(data2, {instancePath:instancePath+"/ports",parentData:data,parentDataProperty:"ports",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
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
validate5.errors = vErrors;
return errors === 0;
}
