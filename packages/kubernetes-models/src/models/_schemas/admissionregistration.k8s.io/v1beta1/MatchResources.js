/* @ts-self-types="./MatchResources.d.ts" */
export const validate = validate8;
const schema5 = {"properties":{"excludeResourceRules":{"$ref":"N4Pmco8zxktkaEyNCwQhiK4nX32FvBUUO3mbFjpBHQA"},"matchPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"namespaceSelector":{"$ref":"ft7HGURTbPyh-vhzFAYgnhVehb5DIkOC1Qu-kP-9F84"},"objectSelector":{"$ref":"ft7HGURTbPyh-vhzFAYgnhVehb5DIkOC1Qu-kP-9F84"},"resourceRules":{"$ref":"N4Pmco8zxktkaEyNCwQhiK4nX32FvBUUO3mbFjpBHQA"}},"type":"object","$id":"io.k8s.api.admissionregistration.v1beta1.MatchResources"};
const schema2 = {"items":{"$ref":"QTV2MfUYfKNXuFdlaGz0n5LKsRYTwFdQfVL68Ouy2KE"},"type":"array","nullable":true};
const schema3 = {"$ref":"io.k8s.api.admissionregistration.v1beta1.NamedRuleWithOperations#"};
const schema4 = {};

import { validate as validate5 } from "././NamedRuleWithOperations.js";


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate5(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
validate4.errors = vErrors;
return errors === 0;
}


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate4(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
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
validate3.errors = vErrors;
return errors === 0;
}

const schema6 = {"type":"string","nullable":true};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate10.errors = vErrors;
return errors === 0;
}

const schema0 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"};
const schema1 = {};

import { validate as validate1 } from "./../../../../apimachinery/_schemas/apis/meta/v1/LabelSelector.js";


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


function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.admissionregistration.v1beta1.MatchResources" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.excludeResourceRules !== undefined){
let data0 = data.excludeResourceRules;
const _errs1 = errors;
if(!(validate3(data0, {instancePath:instancePath+"/excludeResourceRules",parentData:data,parentDataProperty:"excludeResourceRules",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.matchPolicy !== undefined){
let data1 = data.matchPolicy;
const _errs2 = errors;
if(!(validate10(data1, {instancePath:instancePath+"/matchPolicy",parentData:data,parentDataProperty:"matchPolicy",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.namespaceSelector !== undefined){
let data2 = data.namespaceSelector;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/namespaceSelector",parentData:data,parentDataProperty:"namespaceSelector",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.objectSelector !== undefined){
let data3 = data.objectSelector;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/objectSelector",parentData:data,parentDataProperty:"objectSelector",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.resourceRules !== undefined){
let data4 = data.resourceRules;
const _errs5 = errors;
if(!(validate3(data4, {instancePath:instancePath+"/resourceRules",parentData:data,parentDataProperty:"resourceRules",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
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
validate8.errors = vErrors;
return errors === 0;
}
