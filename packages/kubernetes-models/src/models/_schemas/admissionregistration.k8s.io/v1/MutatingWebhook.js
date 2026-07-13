/* @ts-self-types="./MutatingWebhook.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate5;
const schema4 = {"properties":{"admissionReviewVersions":{"$ref":"uqUtVyG9D2UAWDvqosEgVMtwK5kI3TMy2eLbDZB452I"},"clientConfig":{"$ref":"60wdYsRfjJBHsj0lgYgtqRuQyyGxwxZ86pth1PqnGGg"},"failurePolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"matchConditions":{"$ref":"O75pOHlRNVvuYKje6cXJ0CnsLAadOqtU8sbhm5NoavE"},"matchPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"namespaceSelector":{"$ref":"ft7HGURTbPyh-vhzFAYgnhVehb5DIkOC1Qu-kP-9F84"},"objectSelector":{"$ref":"ft7HGURTbPyh-vhzFAYgnhVehb5DIkOC1Qu-kP-9F84"},"reinvocationPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"rules":{"$ref":"F9Ck8tkidHos0e12kFxS51Nmp_ucwCO31Eh9iKn1GnU"},"sideEffects":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"timeoutSeconds":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"}},"required":["name","clientConfig","sideEffects","admissionReviewVersions"],"type":"object","$id":"io.k8s.api.admissionregistration.v1.MutatingWebhook"};
const schema5 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array"};
const schema1 = {"type":"string"};

function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate1.errors = vErrors;
return errors === 0;
}


function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
if(!valid0){
valid1 = false;
}
}
}
else {
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
validate6.errors = vErrors;
return errors === 0;
}

const schema6 = {"$ref":"io.k8s.api.admissionregistration.v1.WebhookClientConfig#"};
const schema7 = {};

import { validate as validate10 } from "././WebhookClientConfig.js";


function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate10(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
validate9.errors = vErrors;
return errors === 0;
}

const schema0 = {"type":"string","nullable":true};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate0.errors = vErrors;
return errors === 0;
}

const schema8 = {"items":{"$ref":"U9y3_uQNyUW85_S0jZjMrwRdfL3bM2BqurnENuMBmD8"},"type":"array","nullable":true};
const schema9 = {"$ref":"io.k8s.api.admissionregistration.v1.MatchCondition#"};
const schema10 = {};

import { validate as validate16 } from "././MatchCondition.js";


function validate15(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate16(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
validate15.errors = vErrors;
return errors === 0;
}


function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate15(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
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
validate14.errors = vErrors;
return errors === 0;
}

const schema2 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"};
const schema3 = {};

import { validate as validate3 } from "./../../../../apimachinery/_schemas/apis/meta/v1/LabelSelector.js";


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate3(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
}
validate2.errors = vErrors;
return errors === 0;
}

const schema11 = {"items":{"$ref":"AcIol0lwJko3rhpD4qKkjSltzmWPxzym9fAqAxYcgts"},"type":"array","nullable":true};
const schema12 = {"$ref":"io.k8s.api.admissionregistration.v1.RuleWithOperations#"};
const schema13 = {};

import { validate as validate27 } from "././RuleWithOperations.js";


function validate26(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate27(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
errors = vErrors.length;
}
else {
}
validate26.errors = vErrors;
return errors === 0;
}


function validate25(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate26(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
validate25.errors = vErrors;
return errors === 0;
}

const schema14 = {"format":"int32","type":"integer","nullable":true};
const formats0 = formats.int32;

function validate32(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate32.errors = vErrors;
return errors === 0;
}


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.admissionregistration.v1.MutatingWebhook" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.name === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "name"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.clientConfig === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "clientConfig"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.sideEffects === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "sideEffects"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.admissionReviewVersions === undefined){
const err3 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "admissionReviewVersions"}};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
if(data.admissionReviewVersions !== undefined){
let data0 = data.admissionReviewVersions;
const _errs1 = errors;
if(!(validate6(data0, {instancePath:instancePath+"/admissionReviewVersions",parentData:data,parentDataProperty:"admissionReviewVersions",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.clientConfig !== undefined){
let data1 = data.clientConfig;
const _errs2 = errors;
if(!(validate9(data1, {instancePath:instancePath+"/clientConfig",parentData:data,parentDataProperty:"clientConfig",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.failurePolicy !== undefined){
let data2 = data.failurePolicy;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/failurePolicy",parentData:data,parentDataProperty:"failurePolicy",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.matchConditions !== undefined){
let data3 = data.matchConditions;
const _errs4 = errors;
if(!(validate14(data3, {instancePath:instancePath+"/matchConditions",parentData:data,parentDataProperty:"matchConditions",rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.matchPolicy !== undefined){
let data4 = data.matchPolicy;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/matchPolicy",parentData:data,parentDataProperty:"matchPolicy",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.name !== undefined){
let data5 = data.name;
const _errs6 = errors;
if(!(validate1(data5, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.namespaceSelector !== undefined){
let data6 = data.namespaceSelector;
const _errs7 = errors;
if(!(validate2(data6, {instancePath:instancePath+"/namespaceSelector",parentData:data,parentDataProperty:"namespaceSelector",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.objectSelector !== undefined){
let data7 = data.objectSelector;
const _errs8 = errors;
if(!(validate2(data7, {instancePath:instancePath+"/objectSelector",parentData:data,parentDataProperty:"objectSelector",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.reinvocationPolicy !== undefined){
let data8 = data.reinvocationPolicy;
const _errs9 = errors;
if(!(validate0(data8, {instancePath:instancePath+"/reinvocationPolicy",parentData:data,parentDataProperty:"reinvocationPolicy",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.rules !== undefined){
let data9 = data.rules;
const _errs10 = errors;
if(!(validate25(data9, {instancePath:instancePath+"/rules",parentData:data,parentDataProperty:"rules",rootData}))){
vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.sideEffects !== undefined){
let data10 = data.sideEffects;
const _errs11 = errors;
if(!(validate1(data10, {instancePath:instancePath+"/sideEffects",parentData:data,parentDataProperty:"sideEffects",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.timeoutSeconds !== undefined){
let data11 = data.timeoutSeconds;
const _errs12 = errors;
if(!(validate32(data11, {instancePath:instancePath+"/timeoutSeconds",parentData:data,parentDataProperty:"timeoutSeconds",rootData}))){
vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
}
else {
const err4 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
validate5.errors = vErrors;
return errors === 0;
}
