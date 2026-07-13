/* @ts-self-types="./StatefulSetSpec.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate1;
const schema1 = {"properties":{"podManagementPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"replicas":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"revisionHistoryLimit":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"selector":{"$ref":"v9UPpZq80i3gaZjVxpGblXzp_E4dULDId73TGAJeg5U"},"serviceName":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"template":{"$ref":"SbN1rvaZBSVKM0AiyQONz32lv4L14pFnWFUIJk4xq20"},"updateStrategy":{"$ref":"kU7tlmpYeBrCMndgIbHGHRHfaefvjdkiCTatWpbY4-U"},"volumeClaimTemplates":{"$ref":"KIL9btdFjuKTaXZZbgZ0ski4OsEpHWRevPJV_rv7LJ8"}},"required":["selector","template","serviceName"],"type":"object","$id":"io.k8s.api.apps.v1beta2.StatefulSetSpec"};
const schema2 = {"type":"string","nullable":true};

function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate2.errors = vErrors;
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

const schema3 = {"$ref":"io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"};
const schema4 = {};

import { validate as validate7 } from "./../../../../apimachinery/_schemas/apis/meta/v1/LabelSelector.js";


function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate7(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
validate6.errors = vErrors;
return errors === 0;
}

const schema5 = {"type":"string"};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate10.errors = vErrors;
return errors === 0;
}

const schema6 = {"$ref":"io.k8s.api.core.v1.PodTemplateSpec#"};
const schema7 = {};

import { validate as validate13 } from "./../../v1/PodTemplateSpec.js";


function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate13(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
validate12.errors = vErrors;
return errors === 0;
}

const schema8 = {"nullableRef":"io.k8s.api.apps.v1beta2.StatefulSetUpdateStrategy#"};
const schema9 = {};

import { validate as validate17 } from "././StatefulSetUpdateStrategy.js";


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

const schema10 = {"items":{"$ref":"88z9MLdBy9QO6G1cQFyRTAv2mdNTuRZA8vsLtRVrtAQ"},"type":"array","nullable":true};
const schema11 = {"$ref":"io.k8s.api.core.v1.PersistentVolumeClaim#"};
const schema12 = {};

import { validate as validate22 } from "./../../v1/PersistentVolumeClaim.js";


function validate21(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate22(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
validate21.errors = vErrors;
return errors === 0;
}


function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate21(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
validate20.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.apps.v1beta2.StatefulSetSpec" */;
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
if(data.serviceName === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "serviceName"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.podManagementPolicy !== undefined){
let data0 = data.podManagementPolicy;
const _errs1 = errors;
if(!(validate2(data0, {instancePath:instancePath+"/podManagementPolicy",parentData:data,parentDataProperty:"podManagementPolicy",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.replicas !== undefined){
let data1 = data.replicas;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/replicas",parentData:data,parentDataProperty:"replicas",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.revisionHistoryLimit !== undefined){
let data2 = data.revisionHistoryLimit;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/revisionHistoryLimit",parentData:data,parentDataProperty:"revisionHistoryLimit",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.selector !== undefined){
let data3 = data.selector;
const _errs4 = errors;
if(!(validate6(data3, {instancePath:instancePath+"/selector",parentData:data,parentDataProperty:"selector",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.serviceName !== undefined){
let data4 = data.serviceName;
const _errs5 = errors;
if(!(validate10(data4, {instancePath:instancePath+"/serviceName",parentData:data,parentDataProperty:"serviceName",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.template !== undefined){
let data5 = data.template;
const _errs6 = errors;
if(!(validate12(data5, {instancePath:instancePath+"/template",parentData:data,parentDataProperty:"template",rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.updateStrategy !== undefined){
let data6 = data.updateStrategy;
const _errs7 = errors;
if(!(validate16(data6, {instancePath:instancePath+"/updateStrategy",parentData:data,parentDataProperty:"updateStrategy",rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.volumeClaimTemplates !== undefined){
let data7 = data.volumeClaimTemplates;
const _errs8 = errors;
if(!(validate20(data7, {instancePath:instancePath+"/volumeClaimTemplates",parentData:data,parentDataProperty:"volumeClaimTemplates",rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
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
validate1.errors = vErrors;
return errors === 0;
}
