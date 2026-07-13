/* @ts-self-types="./StatefulSetSpec.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate2;
const schema2 = {"properties":{"minReadySeconds":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"ordinals":{"$ref":"-fSGda3Yl2oTo2XN8XvQ40u0bIJ5M69JgFl_qFPVxSc"},"persistentVolumeClaimRetentionPolicy":{"$ref":"VS3UXaErB0t3hJOJ8oBgbU7q1Y4ow18jnsIvIqaEhlM"},"podManagementPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"replicas":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"revisionHistoryLimit":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"selector":{"$ref":"v9UPpZq80i3gaZjVxpGblXzp_E4dULDId73TGAJeg5U"},"serviceName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"template":{"$ref":"SbN1rvaZBSVKM0AiyQONz32lv4L14pFnWFUIJk4xq20"},"updateStrategy":{"$ref":"wlsfwWT1FcUfbJ_hEysNGCyVt0_Ax71Mzr1JfCNZD_I"},"volumeClaimTemplates":{"$ref":"ZDLCdqzx_tcl8uUdjXDzkUgKcBSQepPpBo3kcmMZDL8"}},"required":["selector","template"],"type":"object","$id":"io.k8s.api.apps.v1.StatefulSetSpec"};
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

const schema3 = {"nullableRef":"io.k8s.api.apps.v1.StatefulSetOrdinals#"};
const schema4 = {};

import { validate as validate5 } from "././StatefulSetOrdinals.js";


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate5(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
}
validate4.errors = vErrors;
return errors === 0;
}

const schema5 = {"nullableRef":"io.k8s.api.apps.v1.StatefulSetPersistentVolumeClaimRetentionPolicy#"};
const schema6 = {};

import { validate as validate9 } from "././StatefulSetPersistentVolumeClaimRetentionPolicy.js";


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

const schema7 = {"$ref":"io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"};
const schema8 = {};

import { validate as validate16 } from "./../../../../apimachinery/_schemas/apis/meta/v1/LabelSelector.js";


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

const schema9 = {"$ref":"io.k8s.api.core.v1.PodTemplateSpec#"};
const schema10 = {};

import { validate as validate21 } from "./../../v1/PodTemplateSpec.js";


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

const schema11 = {"nullableRef":"io.k8s.api.apps.v1.StatefulSetUpdateStrategy#"};
const schema12 = {};

import { validate as validate25 } from "././StatefulSetUpdateStrategy.js";


function validate24(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate25(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
errors = vErrors.length;
}
else {
}
}
validate24.errors = vErrors;
return errors === 0;
}

const schema13 = {"items":{"$ref":"sq5I0H8uF4pAXZwX86_Ddy2YlqmqjTl-zISg0l7aJ3I"},"type":"array","nullable":true};
const schema14 = {"properties":{"apiVersion":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"kind":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"metadata":{"$ref":"P3srTZpWadQH4s4N9KfJR0iCqydQo9YAz7xMB2qf0GQ"},"spec":{"$ref":"F9i6wrkfeuC0TNc7ADLjLYZt-zPP6zjsokalNzfb_oM"},"status":{"$ref":"Z5Rgyu3_FkPYIVBEwC7QUqyfeuufgCAnWoAD0Fagt7A"}},"type":"object"};
const schema15 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"};
const schema16 = {};

import { validate as validate33 } from "./../../../../apimachinery/_schemas/apis/meta/v1/ObjectMeta.js";


function validate32(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate33(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
errors = vErrors.length;
}
else {
}
}
validate32.errors = vErrors;
return errors === 0;
}

const schema17 = {"nullableRef":"io.k8s.api.core.v1.PersistentVolumeClaimSpec#"};
const schema18 = {};

import { validate as validate37 } from "./../../v1/PersistentVolumeClaimSpec.js";


function validate36(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate37(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
errors = vErrors.length;
}
else {
}
}
validate36.errors = vErrors;
return errors === 0;
}

const schema19 = {"nullableRef":"io.k8s.api.core.v1.PersistentVolumeClaimStatus#"};
const schema20 = {};

import { validate as validate41 } from "./../../v1/PersistentVolumeClaimStatus.js";


function validate40(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate41(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
errors = vErrors.length;
}
else {
}
}
validate40.errors = vErrors;
return errors === 0;
}


function validate29(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.apiVersion !== undefined){
let data0 = data.apiVersion;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.kind !== undefined){
let data1 = data.kind;
const _errs2 = errors;
if(!(validate1(data1, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.metadata !== undefined){
let data2 = data.metadata;
const _errs3 = errors;
if(!(validate32(data2, {instancePath:instancePath+"/metadata",parentData:data,parentDataProperty:"metadata",rootData}))){
vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.spec !== undefined){
let data3 = data.spec;
const _errs4 = errors;
if(!(validate36(data3, {instancePath:instancePath+"/spec",parentData:data,parentDataProperty:"spec",rootData}))){
vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.status !== undefined){
let data4 = data.status;
const _errs5 = errors;
if(!(validate40(data4, {instancePath:instancePath+"/status",parentData:data,parentDataProperty:"status",rootData}))){
vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
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
validate29.errors = vErrors;
return errors === 0;
}


function validate28(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate29(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
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
validate28.errors = vErrors;
return errors === 0;
}


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.apps.v1.StatefulSetSpec" */;
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
if(data.ordinals !== undefined){
let data1 = data.ordinals;
const _errs2 = errors;
if(!(validate4(data1, {instancePath:instancePath+"/ordinals",parentData:data,parentDataProperty:"ordinals",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.persistentVolumeClaimRetentionPolicy !== undefined){
let data2 = data.persistentVolumeClaimRetentionPolicy;
const _errs3 = errors;
if(!(validate8(data2, {instancePath:instancePath+"/persistentVolumeClaimRetentionPolicy",parentData:data,parentDataProperty:"persistentVolumeClaimRetentionPolicy",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.podManagementPolicy !== undefined){
let data3 = data.podManagementPolicy;
const _errs4 = errors;
if(!(validate1(data3, {instancePath:instancePath+"/podManagementPolicy",parentData:data,parentDataProperty:"podManagementPolicy",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.replicas !== undefined){
let data4 = data.replicas;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/replicas",parentData:data,parentDataProperty:"replicas",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.revisionHistoryLimit !== undefined){
let data5 = data.revisionHistoryLimit;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/revisionHistoryLimit",parentData:data,parentDataProperty:"revisionHistoryLimit",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.selector !== undefined){
let data6 = data.selector;
const _errs7 = errors;
if(!(validate15(data6, {instancePath:instancePath+"/selector",parentData:data,parentDataProperty:"selector",rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.serviceName !== undefined){
let data7 = data.serviceName;
const _errs8 = errors;
if(!(validate1(data7, {instancePath:instancePath+"/serviceName",parentData:data,parentDataProperty:"serviceName",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
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
if(data.updateStrategy !== undefined){
let data9 = data.updateStrategy;
const _errs10 = errors;
if(!(validate24(data9, {instancePath:instancePath+"/updateStrategy",parentData:data,parentDataProperty:"updateStrategy",rootData}))){
vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.volumeClaimTemplates !== undefined){
let data10 = data.volumeClaimTemplates;
const _errs11 = errors;
if(!(validate28(data10, {instancePath:instancePath+"/volumeClaimTemplates",parentData:data,parentDataProperty:"volumeClaimTemplates",rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
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
validate2.errors = vErrors;
return errors === 0;
}
