/* @ts-self-types="./MetricStatus.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"containerResource":{"$ref":"4Gcgnl44eA2hax9JBPJpU7Kkf893hIroj-YpDWORtc8"},"external":{"$ref":"fh-CGXdB5_ztav_YIVsAvXTbyLYDnGAyPbWMSBSXla8"},"object":{"$ref":"Hu02fPamQT-fjYLGLIxIOn5NeVlP1ox7-fdxmHmwiGo"},"pods":{"$ref":"XmFIncXyeknNuMMfIjvHGoCffCBQU2j8I0oAIy6b_9E"},"resource":{"$ref":"2Ar3R4LxkmFx2bj3ukC2HCVGWtkRq1zbeA00X8zYPsE"},"type":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["type"],"type":"object","$id":"io.k8s.api.autoscaling.v2beta1.MetricStatus"};
const schema1 = {"nullableRef":"io.k8s.api.autoscaling.v2beta1.ContainerResourceMetricStatus#"};
const schema2 = {};

import { validate as validate2 } from "././ContainerResourceMetricStatus.js";


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

const schema3 = {"nullableRef":"io.k8s.api.autoscaling.v2beta1.ExternalMetricStatus#"};
const schema4 = {};

import { validate as validate6 } from "././ExternalMetricStatus.js";


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

const schema5 = {"nullableRef":"io.k8s.api.autoscaling.v2beta1.ObjectMetricStatus#"};
const schema6 = {};

import { validate as validate10 } from "././ObjectMetricStatus.js";


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

const schema7 = {"nullableRef":"io.k8s.api.autoscaling.v2beta1.PodsMetricStatus#"};
const schema8 = {};

import { validate as validate14 } from "././PodsMetricStatus.js";


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

const schema9 = {"nullableRef":"io.k8s.api.autoscaling.v2beta1.ResourceMetricStatus#"};
const schema10 = {};

import { validate as validate18 } from "././ResourceMetricStatus.js";


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

const schema11 = {"type":"string"};

function validate21(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate21.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.autoscaling.v2beta1.MetricStatus" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.type === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "type"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.containerResource !== undefined){
let data0 = data.containerResource;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/containerResource",parentData:data,parentDataProperty:"containerResource",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.external !== undefined){
let data1 = data.external;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/external",parentData:data,parentDataProperty:"external",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.object !== undefined){
let data2 = data.object;
const _errs3 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/object",parentData:data,parentDataProperty:"object",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.pods !== undefined){
let data3 = data.pods;
const _errs4 = errors;
if(!(validate13(data3, {instancePath:instancePath+"/pods",parentData:data,parentDataProperty:"pods",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.resource !== undefined){
let data4 = data.resource;
const _errs5 = errors;
if(!(validate17(data4, {instancePath:instancePath+"/resource",parentData:data,parentDataProperty:"resource",rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.type !== undefined){
let data5 = data.type;
const _errs6 = errors;
if(!(validate21(data5, {instancePath:instancePath+"/type",parentData:data,parentDataProperty:"type",rootData}))){
vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
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
