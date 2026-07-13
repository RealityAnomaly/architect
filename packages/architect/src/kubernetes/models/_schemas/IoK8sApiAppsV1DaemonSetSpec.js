import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate1;
const schema1 = {"properties":{"minReadySeconds":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"revisionHistoryLimit":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"selector":{"$ref":"v9UPpZq80i3gaZjVxpGblXzp_E4dULDId73TGAJeg5U"},"template":{"$ref":"SbN1rvaZBSVKM0AiyQONz32lv4L14pFnWFUIJk4xq20"},"updateStrategy":{"$ref":"IqUIHRabk0RuZrCKKVH9ZXFwa58UrtPXCEvj7lx4MUY"}},"required":["selector","template"],"type":"object","$id":"io.k8s.api.apps.v1.DaemonSetSpec"};
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

const schema2 = {"$ref":"io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"};
const schema3 = {};

import { validate as validate5 } from "./../../apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1LabelSelector.js";


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

const schema4 = {"$ref":"io.k8s.api.core.v1.PodTemplateSpec#"};
const schema5 = {};

import { validate as validate9 } from "./IoK8sApiCoreV1PodTemplateSpec.js";


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

const schema6 = {"nullableRef":"io.k8s.api.apps.v1.DaemonSetUpdateStrategy#"};
const schema7 = {};

import { validate as validate13 } from "./IoK8sApiAppsV1DaemonSetUpdateStrategy.js";


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


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.apps.v1.DaemonSetSpec" */;
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
if(data.revisionHistoryLimit !== undefined){
let data1 = data.revisionHistoryLimit;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/revisionHistoryLimit",parentData:data,parentDataProperty:"revisionHistoryLimit",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.selector !== undefined){
let data2 = data.selector;
const _errs3 = errors;
if(!(validate4(data2, {instancePath:instancePath+"/selector",parentData:data,parentDataProperty:"selector",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.template !== undefined){
let data3 = data.template;
const _errs4 = errors;
if(!(validate8(data3, {instancePath:instancePath+"/template",parentData:data,parentDataProperty:"template",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.updateStrategy !== undefined){
let data4 = data.updateStrategy;
const _errs5 = errors;
if(!(validate12(data4, {instancePath:instancePath+"/updateStrategy",parentData:data,parentDataProperty:"updateStrategy",rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
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
