/* @ts-self-types="./CapacityRequestPolicy.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"default":{"$ref":"pp_xaFlNXkKoD6DTqyaUAeP7lGItJ9_hKwPxmHYeCNA"},"validRange":{"$ref":"KxL1FeA6J35a9LW7uFLihq-kpXncuGi729DmwjMUCUM"},"validValues":{"$ref":"wTSPP-ovF8Joa5mZZqgkMv-4MHc_K-tIJpjRmF_KYe8"}},"type":"object","$id":"io.k8s.api.resource.v1.CapacityRequestPolicy"};
const schema1 = {"nullableRef":"io.k8s.apimachinery.pkg.api.resource.Quantity#"};
const schema2 = {};

import { validate as validate2 } from "./../../../../apimachinery/_schemas/api/resource/Quantity.js";


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

const schema3 = {"nullableRef":"io.k8s.api.resource.v1.CapacityRequestPolicyRange#"};
const schema4 = {};

import { validate as validate6 } from "././CapacityRequestPolicyRange.js";


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

const schema5 = {"items":{"$ref":"VKZPUldlWDa056CXEqKHCNMaIxOA7qIsmePtey64Cuk"},"type":"array","nullable":true};
const schema6 = {"$ref":"io.k8s.apimachinery.pkg.api.resource.Quantity#"};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate2(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
validate10.errors = vErrors;
return errors === 0;
}


function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate10(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
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
validate9.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.resource.v1.CapacityRequestPolicy" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.default !== undefined){
let data0 = data.default;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/default",parentData:data,parentDataProperty:"default",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.validRange !== undefined){
let data1 = data.validRange;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/validRange",parentData:data,parentDataProperty:"validRange",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.validValues !== undefined){
let data2 = data.validValues;
const _errs3 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/validValues",parentData:data,parentDataProperty:"validValues",rootData}))){
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
