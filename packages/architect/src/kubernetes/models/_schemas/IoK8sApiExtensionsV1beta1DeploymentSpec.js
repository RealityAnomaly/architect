import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate1;
const schema1 = {"properties":{"minReadySeconds":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"paused":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"progressDeadlineSeconds":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"replicas":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"revisionHistoryLimit":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"rollbackTo":{"$ref":"TNOOMohvKRuf-_PqlcwyJoD5kT82gHs1a1ayYH6jJ8s"},"selector":{"$ref":"ft7HGURTbPyh-vhzFAYgnhVehb5DIkOC1Qu-kP-9F84"},"strategy":{"$ref":"B4dfbWx_SWlX3POMPbWx-AVbviwmXSCuOcLX9YChZcg"},"template":{"$ref":"SbN1rvaZBSVKM0AiyQONz32lv4L14pFnWFUIJk4xq20"}},"required":["template"],"type":"object","$id":"io.k8s.api.extensions.v1beta1.DeploymentSpec"};
const schema0 = {"format":"int32","type":"integer","nullable":true};
const formats0 = formats.int32;

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate0.errors = vErrors;
return errors === 0;
}

const schema2 = {"type":"boolean","nullable":true};

function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((typeof data !== "boolean") && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "boolean"}};
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
validate3.errors = vErrors;
return errors === 0;
}

const schema3 = {"nullableRef":"io.k8s.api.extensions.v1beta1.RollbackConfig#"};
const schema4 = {};

import { validate as validate9 } from "./IoK8sApiExtensionsV1beta1RollbackConfig.js";


function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate9(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
}
validate8.errors = vErrors;
return errors === 0;
}

const schema5 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"};
const schema6 = {};

import { validate as validate13 } from "./../../apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1LabelSelector.js";


function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate13(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
}
validate12.errors = vErrors;
return errors === 0;
}

const schema7 = {"nullableRef":"io.k8s.api.extensions.v1beta1.DeploymentStrategy#"};
const schema8 = {};

import { validate as validate17 } from "./IoK8sApiExtensionsV1beta1DeploymentStrategy.js";


function validate16(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate17(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
errors = vErrors.length;
}
else {
}
}
validate16.errors = vErrors;
return errors === 0;
}

const schema9 = {"$ref":"io.k8s.api.core.v1.PodTemplateSpec#"};
const schema10 = {};

import { validate as validate21 } from "./IoK8sApiCoreV1PodTemplateSpec.js";


function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate21(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
errors = vErrors.length;
}
else {
}
validate20.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.extensions.v1beta1.DeploymentSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.template === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "template"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.minReadySeconds !== undefined){
let data0 = data.minReadySeconds;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/minReadySeconds",parentData:data,parentDataProperty:"minReadySeconds",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.paused !== undefined){
let data1 = data.paused;
const _errs2 = errors;
if(!(validate3(data1, {instancePath:instancePath+"/paused",parentData:data,parentDataProperty:"paused",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.progressDeadlineSeconds !== undefined){
let data2 = data.progressDeadlineSeconds;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/progressDeadlineSeconds",parentData:data,parentDataProperty:"progressDeadlineSeconds",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.replicas !== undefined){
let data3 = data.replicas;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/replicas",parentData:data,parentDataProperty:"replicas",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.revisionHistoryLimit !== undefined){
let data4 = data.revisionHistoryLimit;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/revisionHistoryLimit",parentData:data,parentDataProperty:"revisionHistoryLimit",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.rollbackTo !== undefined){
let data5 = data.rollbackTo;
const _errs6 = errors;
if(!(validate8(data5, {instancePath:instancePath+"/rollbackTo",parentData:data,parentDataProperty:"rollbackTo",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.selector !== undefined){
let data6 = data.selector;
const _errs7 = errors;
if(!(validate12(data6, {instancePath:instancePath+"/selector",parentData:data,parentDataProperty:"selector",rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.strategy !== undefined){
let data7 = data.strategy;
const _errs8 = errors;
if(!(validate16(data7, {instancePath:instancePath+"/strategy",parentData:data,parentDataProperty:"strategy",rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.template !== undefined){
let data8 = data.template;
const _errs9 = errors;
if(!(validate20(data8, {instancePath:instancePath+"/template",parentData:data,parentDataProperty:"template",rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
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
validate1.errors = vErrors;
return errors === 0;
}
