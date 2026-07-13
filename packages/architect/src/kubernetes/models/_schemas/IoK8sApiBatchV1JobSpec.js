import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate3;
const schema3 = {"properties":{"activeDeadlineSeconds":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"backoffLimit":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"backoffLimitPerIndex":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"completionMode":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"completions":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"managedBy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"manualSelector":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"maxFailedIndexes":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"parallelism":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"podFailurePolicy":{"$ref":"sMEyJO_aAHo7irDFjJkQOdtkyvecYprDwVbzFTfhPIg"},"podReplacementPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"selector":{"$ref":"ft7HGURTbPyh-vhzFAYgnhVehb5DIkOC1Qu-kP-9F84"},"successPolicy":{"$ref":"TlmduU4e3RvMmnFqaty6U0s_JXF8zznQoQ5H-X4NSAA"},"suspend":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"template":{"$ref":"SbN1rvaZBSVKM0AiyQONz32lv4L14pFnWFUIJk4xq20"},"ttlSecondsAfterFinished":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"}},"required":["template"],"type":"object","$id":"io.k8s.api.batch.v1.JobSpec"};
const schema4 = {"format":"int64","type":"integer","nullable":true};
const formats2 = formats.int64;

function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(formats2.validate(data))){
const err1 = {instancePath,schemaPath:"#/format",keyword:"format",params:{format: "int64"}};
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
validate4.errors = vErrors;
return errors === 0;
}

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

const schema1 = {"type":"string","nullable":true};

function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate1.errors = vErrors;
return errors === 0;
}

const schema2 = {"type":"boolean","nullable":true};

function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate2.errors = vErrors;
return errors === 0;
}

const schema5 = {"nullableRef":"io.k8s.api.batch.v1.PodFailurePolicy#"};
const schema6 = {};

import { validate as validate15 } from "./IoK8sApiBatchV1PodFailurePolicy.js";


function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate15(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
}
validate14.errors = vErrors;
return errors === 0;
}

const schema7 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"};
const schema8 = {};

import { validate as validate20 } from "./../../apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1LabelSelector.js";


function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate20(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
}
validate19.errors = vErrors;
return errors === 0;
}

const schema9 = {"nullableRef":"io.k8s.api.batch.v1.SuccessPolicy#"};
const schema10 = {};

import { validate as validate24 } from "./IoK8sApiBatchV1SuccessPolicy.js";


function validate23(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate24(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
errors = vErrors.length;
}
else {
}
}
validate23.errors = vErrors;
return errors === 0;
}

const schema11 = {"$ref":"io.k8s.api.core.v1.PodTemplateSpec#"};
const schema12 = {};

import { validate as validate29 } from "./IoK8sApiCoreV1PodTemplateSpec.js";


function validate28(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate29(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
errors = vErrors.length;
}
else {
}
validate28.errors = vErrors;
return errors === 0;
}


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.batch.v1.JobSpec" */;
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
if(data.activeDeadlineSeconds !== undefined){
let data0 = data.activeDeadlineSeconds;
const _errs1 = errors;
if(!(validate4(data0, {instancePath:instancePath+"/activeDeadlineSeconds",parentData:data,parentDataProperty:"activeDeadlineSeconds",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.backoffLimit !== undefined){
let data1 = data.backoffLimit;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/backoffLimit",parentData:data,parentDataProperty:"backoffLimit",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.backoffLimitPerIndex !== undefined){
let data2 = data.backoffLimitPerIndex;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/backoffLimitPerIndex",parentData:data,parentDataProperty:"backoffLimitPerIndex",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.completionMode !== undefined){
let data3 = data.completionMode;
const _errs4 = errors;
if(!(validate1(data3, {instancePath:instancePath+"/completionMode",parentData:data,parentDataProperty:"completionMode",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.completions !== undefined){
let data4 = data.completions;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/completions",parentData:data,parentDataProperty:"completions",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.managedBy !== undefined){
let data5 = data.managedBy;
const _errs6 = errors;
if(!(validate1(data5, {instancePath:instancePath+"/managedBy",parentData:data,parentDataProperty:"managedBy",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.manualSelector !== undefined){
let data6 = data.manualSelector;
const _errs7 = errors;
if(!(validate2(data6, {instancePath:instancePath+"/manualSelector",parentData:data,parentDataProperty:"manualSelector",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.maxFailedIndexes !== undefined){
let data7 = data.maxFailedIndexes;
const _errs8 = errors;
if(!(validate0(data7, {instancePath:instancePath+"/maxFailedIndexes",parentData:data,parentDataProperty:"maxFailedIndexes",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.parallelism !== undefined){
let data8 = data.parallelism;
const _errs9 = errors;
if(!(validate0(data8, {instancePath:instancePath+"/parallelism",parentData:data,parentDataProperty:"parallelism",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.podFailurePolicy !== undefined){
let data9 = data.podFailurePolicy;
const _errs10 = errors;
if(!(validate14(data9, {instancePath:instancePath+"/podFailurePolicy",parentData:data,parentDataProperty:"podFailurePolicy",rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.podReplacementPolicy !== undefined){
let data10 = data.podReplacementPolicy;
const _errs11 = errors;
if(!(validate1(data10, {instancePath:instancePath+"/podReplacementPolicy",parentData:data,parentDataProperty:"podReplacementPolicy",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.selector !== undefined){
let data11 = data.selector;
const _errs12 = errors;
if(!(validate19(data11, {instancePath:instancePath+"/selector",parentData:data,parentDataProperty:"selector",rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.successPolicy !== undefined){
let data12 = data.successPolicy;
const _errs13 = errors;
if(!(validate23(data12, {instancePath:instancePath+"/successPolicy",parentData:data,parentDataProperty:"successPolicy",rootData}))){
vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.suspend !== undefined){
let data13 = data.suspend;
const _errs14 = errors;
if(!(validate2(data13, {instancePath:instancePath+"/suspend",parentData:data,parentDataProperty:"suspend",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.template !== undefined){
let data14 = data.template;
const _errs15 = errors;
if(!(validate28(data14, {instancePath:instancePath+"/template",parentData:data,parentDataProperty:"template",rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.ttlSecondsAfterFinished !== undefined){
let data15 = data.ttlSecondsAfterFinished;
const _errs16 = errors;
if(!(validate0(data15, {instancePath:instancePath+"/ttlSecondsAfterFinished",parentData:data,parentDataProperty:"ttlSecondsAfterFinished",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs16 === errors;
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
