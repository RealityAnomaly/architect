/* @ts-self-types="./DeviceClassSpec.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"config":{"$ref":"PKa9PNlmk0xTOQJ1-xAw3hJErRhyzLIx1rXr2QYBlfU"},"selectors":{"$ref":"NRRr4Gi55H3B79YxXAH1Uv_iRFWaWr9_52mXBpv4N7s"}},"type":"object","$id":"io.k8s.api.resource.v1alpha3.DeviceClassSpec"};
const schema1 = {"items":{"$ref":"cyzPbwB8mZN8yYbqOk3JYNqrxYHioRLRMAV5ePJXzQc"},"type":"array","nullable":true};
const schema2 = {"$ref":"io.k8s.api.resource.v1alpha3.DeviceClassConfiguration#"};
const schema3 = {};

import { validate as validate3 } from "././DeviceClassConfiguration.js";


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate3(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
validate2.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate2(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
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
validate1.errors = vErrors;
return errors === 0;
}

const schema4 = {"items":{"$ref":"ooGwadlcDGT7G1zB_6Rrc8ucVPx_hH4CvylH0Jf-5EY"},"type":"array","nullable":true};
const schema5 = {"$ref":"io.k8s.api.resource.v1alpha3.DeviceSelector#"};
const schema6 = {};

import { validate as validate9 } from "././DeviceSelector.js";


function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate9(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
validate8.errors = vErrors;
return errors === 0;
}


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate8(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
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
validate7.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.resource.v1alpha3.DeviceClassSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.config !== undefined){
let data0 = data.config;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/config",parentData:data,parentDataProperty:"config",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.selectors !== undefined){
let data1 = data.selectors;
const _errs2 = errors;
if(!(validate7(data1, {instancePath:instancePath+"/selectors",parentData:data,parentDataProperty:"selectors",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
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
