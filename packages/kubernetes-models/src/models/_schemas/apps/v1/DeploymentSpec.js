/* @ts-self-types="./DeploymentSpec.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate1;
const schema1 = {"properties":{"minReadySeconds":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"paused":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"progressDeadlineSeconds":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"replicas":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"revisionHistoryLimit":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"selector":{"$ref":"v9UPpZq80i3gaZjVxpGblXzp_E4dULDId73TGAJeg5U"},"strategy":{"$ref":"J3b2mYFu6ewIw4cAJLEAAZYlsotBkNd2igXjZNHDHjU"},"template":{"$ref":"SbN1rvaZBSVKM0AiyQONz32lv4L14pFnWFUIJk4xq20"}},"required":["selector","template"],"type":"object","$id":"io.k8s.api.apps.v1.DeploymentSpec"};
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

const schema3 = {"$ref":"io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"};
const schema4 = {};

import { validate as validate9 } from "./../../../../apimachinery/_schemas/apis/meta/v1/LabelSelector.js";


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

const schema5 = {"nullableRef":"io.k8s.api.apps.v1.DeploymentStrategy#"};
const schema6 = {};

import { validate as validate13 } from "././DeploymentStrategy.js";


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

const schema7 = {"$ref":"io.k8s.api.core.v1.PodTemplateSpec#"};
const schema8 = {};

import { validate as validate17 } from "./../../v1/PodTemplateSpec.js";


function validate16(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate17(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
errors = vErrors.length;
}
else {
}
validate16.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.apps.v1.DeploymentSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.selector === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "selector"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.template === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "template"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
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
if(data.selector !== undefined){
let data5 = data.selector;
const _errs6 = errors;
if(!(validate8(data5, {instancePath:instancePath+"/selector",parentData:data,parentDataProperty:"selector",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.strategy !== undefined){
let data6 = data.strategy;
const _errs7 = errors;
if(!(validate12(data6, {instancePath:instancePath+"/strategy",parentData:data,parentDataProperty:"strategy",rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.template !== undefined){
let data7 = data.template;
const _errs8 = errors;
if(!(validate16(data7, {instancePath:instancePath+"/template",parentData:data,parentDataProperty:"template",rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
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
