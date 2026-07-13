/* @ts-self-types="./ExternalMetricSource.d.ts" */
export const validate = validate3;
const schema2 = {"properties":{"metricName":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"metricSelector":{"$ref":"ft7HGURTbPyh-vhzFAYgnhVehb5DIkOC1Qu-kP-9F84"},"targetAverageValue":{"$ref":"pp_xaFlNXkKoD6DTqyaUAeP7lGItJ9_hKwPxmHYeCNA"},"targetValue":{"$ref":"pp_xaFlNXkKoD6DTqyaUAeP7lGItJ9_hKwPxmHYeCNA"}},"required":["metricName"],"type":"object","$id":"io.k8s.api.autoscaling.v2beta1.ExternalMetricSource"};
const schema3 = {"type":"string"};

function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate4.errors = vErrors;
return errors === 0;
}

const schema4 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"};
const schema5 = {};

import { validate as validate7 } from "./../../../../apimachinery/_schemas/apis/meta/v1/LabelSelector.js";


function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate7(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
}
validate6.errors = vErrors;
return errors === 0;
}

const schema0 = {"nullableRef":"io.k8s.apimachinery.pkg.api.resource.Quantity#"};
const schema1 = {};

import { validate as validate1 } from "./../../../../apimachinery/_schemas/api/resource/Quantity.js";


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


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.autoscaling.v2beta1.ExternalMetricSource" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.metricName === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "metricName"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.metricName !== undefined){
let data0 = data.metricName;
const _errs1 = errors;
if(!(validate4(data0, {instancePath:instancePath+"/metricName",parentData:data,parentDataProperty:"metricName",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.metricSelector !== undefined){
let data1 = data.metricSelector;
const _errs2 = errors;
if(!(validate6(data1, {instancePath:instancePath+"/metricSelector",parentData:data,parentDataProperty:"metricSelector",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.targetAverageValue !== undefined){
let data2 = data.targetAverageValue;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/targetAverageValue",parentData:data,parentDataProperty:"targetAverageValue",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.targetValue !== undefined){
let data3 = data.targetValue;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/targetValue",parentData:data,parentDataProperty:"targetValue",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
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
validate3.errors = vErrors;
return errors === 0;
}
