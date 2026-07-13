/* @ts-self-types="./ObjectMetricSource.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"averageValue":{"$ref":"pp_xaFlNXkKoD6DTqyaUAeP7lGItJ9_hKwPxmHYeCNA"},"metricName":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"selector":{"$ref":"ft7HGURTbPyh-vhzFAYgnhVehb5DIkOC1Qu-kP-9F84"},"target":{"$ref":"5e1lrOfmKdZvPCrqgeyFzFzZsObaq6NO6UXy1S7uIUg"},"targetValue":{"$ref":"VKZPUldlWDa056CXEqKHCNMaIxOA7qIsmePtey64Cuk"}},"required":["target","metricName","targetValue"],"type":"object","$id":"io.k8s.api.autoscaling.v2beta1.ObjectMetricSource"};
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

const schema3 = {"type":"string"};

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate5.errors = vErrors;
return errors === 0;
}

const schema4 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"};
const schema5 = {};

import { validate as validate8 } from "./../../../../apimachinery/_schemas/apis/meta/v1/LabelSelector.js";


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

const schema6 = {"$ref":"io.k8s.api.autoscaling.v2beta1.CrossVersionObjectReference#"};
const schema7 = {};

import { validate as validate12 } from "././CrossVersionObjectReference.js";


function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate12(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
validate11.errors = vErrors;
return errors === 0;
}

const schema8 = {"$ref":"io.k8s.apimachinery.pkg.api.resource.Quantity#"};

function validate15(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate2(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
validate15.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.autoscaling.v2beta1.ObjectMetricSource" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.target === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "target"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.metricName === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "metricName"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.targetValue === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "targetValue"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.averageValue !== undefined){
let data0 = data.averageValue;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/averageValue",parentData:data,parentDataProperty:"averageValue",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.metricName !== undefined){
let data1 = data.metricName;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/metricName",parentData:data,parentDataProperty:"metricName",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.selector !== undefined){
let data2 = data.selector;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/selector",parentData:data,parentDataProperty:"selector",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.target !== undefined){
let data3 = data.target;
const _errs4 = errors;
if(!(validate11(data3, {instancePath:instancePath+"/target",parentData:data,parentDataProperty:"target",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.targetValue !== undefined){
let data4 = data.targetValue;
const _errs5 = errors;
if(!(validate15(data4, {instancePath:instancePath+"/targetValue",parentData:data,parentDataProperty:"targetValue",rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
}
else {
const err3 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
validate0.errors = vErrors;
return errors === 0;
}
