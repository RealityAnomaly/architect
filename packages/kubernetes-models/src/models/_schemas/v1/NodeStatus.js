/* @ts-self-types="./NodeStatus.d.ts" */
export const validate = validate8;
const schema5 = {"properties":{"addresses":{"$ref":"OjUrdQ56o3gYWHHDo1jfthiXx8erme72tPqvJzoyenQ"},"allocatable":{"$ref":"YfMVS3P5aWVrkVb6yChl1fVwg8EQjbWuoJkKTJAHr6A"},"capacity":{"$ref":"YfMVS3P5aWVrkVb6yChl1fVwg8EQjbWuoJkKTJAHr6A"},"conditions":{"$ref":"SLc7rLQjnJubMZyiLm5qPAu_ccdnMZPEEXCoscaBkA8"},"config":{"$ref":"dzVhZtJZSOVkm5qkFDy3fBXYT1A7b6db3xKt7WVJYZU"},"daemonEndpoints":{"$ref":"PCgHqIfy0-ZbqfL07cFil6Ly04kqMw4ljzFVsrNZuh8"},"declaredFeatures":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"features":{"$ref":"Rk5QJDjHDq0WG3PBuf0SYuUdO-pC17khaXhxwbheJvI"},"images":{"$ref":"Dla9cBsFUZZNvIYDUqEG8ok8iwO51KZgv1FtlGO3qHM"},"nodeInfo":{"$ref":"sIlENCUORL1itV702fikrIfrOLsYkj22PObmi3YxtuI"},"phase":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"runtimeHandlers":{"$ref":"j5elPBCn2Jf2gweMxoH61nIzopIMFnHk-h7grkkLeyE"},"volumesAttached":{"$ref":"vwyzbH3NSBRjOk9eKY42zg6D7Do4DHr-rAcxv1XJlQI"},"volumesInUse":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"}},"type":"object","$id":"io.k8s.api.core.v1.NodeStatus"};
const schema6 = {"items":{"$ref":"sjQSrynp1ruXlgQnn3-k3PrnU6qz-Fy9gL3ERh_oMcQ"},"type":"array","nullable":true};
const schema7 = {"$ref":"io.k8s.api.core.v1.NodeAddress#"};
const schema8 = {};

import { validate as validate11 } from "././NodeAddress.js";


function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate11(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
validate10.errors = vErrors;
return errors === 0;
}


function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate10(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
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
validate9.errors = vErrors;
return errors === 0;
}

const schema0 = {"additionalProperties":{"$ref":"VKZPUldlWDa056CXEqKHCNMaIxOA7qIsmePtey64Cuk"},"type":"object","nullable":true};
const schema1 = {"$ref":"io.k8s.apimachinery.pkg.api.resource.Quantity#"};
const schema2 = {};

import { validate as validate2 } from "./../../../apimachinery/_schemas/api/resource/Quantity.js";


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate2(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
validate1.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(data && typeof data == "object" && !Array.isArray(data))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
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
if(data && typeof data == "object" && !Array.isArray(data)){
const _errs2 = errors;
for(const key0 in data){
let data0 = data[key0];
const _errs3 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate0.errors = vErrors;
return errors === 0;
}

const schema9 = {"items":{"$ref":"S2d7uwqi-JBCJssTRNCywhgnNHjTrGmvZvV7n2UJBIs"},"type":"array","nullable":true};
const schema10 = {"$ref":"io.k8s.api.core.v1.NodeCondition#"};
const schema11 = {};

import { validate as validate19 } from "././NodeCondition.js";


function validate18(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate19(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
validate18.errors = vErrors;
return errors === 0;
}


function validate17(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate18(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate18.errors : vErrors.concat(validate18.errors);
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
validate17.errors = vErrors;
return errors === 0;
}

const schema12 = {"nullableRef":"io.k8s.api.core.v1.NodeConfigStatus#"};
const schema13 = {};

import { validate as validate24 } from "././NodeConfigStatus.js";


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

const schema14 = {"nullableRef":"io.k8s.api.core.v1.NodeDaemonEndpoints#"};
const schema15 = {};

import { validate as validate28 } from "././NodeDaemonEndpoints.js";


function validate27(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate28(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
}
validate27.errors = vErrors;
return errors === 0;
}

const schema3 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array","nullable":true};
const schema4 = {"type":"string"};

function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate6.errors = vErrors;
return errors === 0;
}


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate6(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
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
validate5.errors = vErrors;
return errors === 0;
}

const schema16 = {"nullableRef":"io.k8s.api.core.v1.NodeFeatures#"};
const schema17 = {};

import { validate as validate33 } from "././NodeFeatures.js";


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

const schema18 = {"items":{"$ref":"j5MvVrF3MUPDYZ4T1yAZTpV_eKebxc0y5KkuEtYTpgs"},"type":"array","nullable":true};
const schema19 = {"$ref":"io.k8s.api.core.v1.ContainerImage#"};
const schema20 = {};

import { validate as validate38 } from "././ContainerImage.js";


function validate37(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate38(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
errors = vErrors.length;
}
else {
}
validate37.errors = vErrors;
return errors === 0;
}


function validate36(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate37(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
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
validate36.errors = vErrors;
return errors === 0;
}

const schema21 = {"nullableRef":"io.k8s.api.core.v1.NodeSystemInfo#"};
const schema22 = {};

import { validate as validate43 } from "././NodeSystemInfo.js";


function validate42(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate43(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
errors = vErrors.length;
}
else {
}
}
validate42.errors = vErrors;
return errors === 0;
}

const schema23 = {"type":"string","nullable":true};

function validate46(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate46.errors = vErrors;
return errors === 0;
}

const schema24 = {"items":{"$ref":"SXqHh4rkSHqZh1tr3DTO3PyegDNeF5k2bRh4KhayqsE"},"type":"array","nullable":true};
const schema25 = {"$ref":"io.k8s.api.core.v1.NodeRuntimeHandler#"};
const schema26 = {};

import { validate as validate50 } from "././NodeRuntimeHandler.js";


function validate49(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate50(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
errors = vErrors.length;
}
else {
}
validate49.errors = vErrors;
return errors === 0;
}


function validate48(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate49(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
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
validate48.errors = vErrors;
return errors === 0;
}

const schema27 = {"items":{"$ref":"O-DTUG6x45zWHEhW4wHlf_1wVS79MdSgk_Qls7IjBTc"},"type":"array","nullable":true};
const schema28 = {"$ref":"io.k8s.api.core.v1.AttachedVolume#"};
const schema29 = {};

import { validate as validate56 } from "././AttachedVolume.js";


function validate55(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate56(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate56.errors : vErrors.concat(validate56.errors);
errors = vErrors.length;
}
else {
}
validate55.errors = vErrors;
return errors === 0;
}


function validate54(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate55(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
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
validate54.errors = vErrors;
return errors === 0;
}


function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.NodeStatus" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.addresses !== undefined){
let data0 = data.addresses;
const _errs1 = errors;
if(!(validate9(data0, {instancePath:instancePath+"/addresses",parentData:data,parentDataProperty:"addresses",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.allocatable !== undefined){
let data1 = data.allocatable;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/allocatable",parentData:data,parentDataProperty:"allocatable",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.capacity !== undefined){
let data2 = data.capacity;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/capacity",parentData:data,parentDataProperty:"capacity",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.conditions !== undefined){
let data3 = data.conditions;
const _errs4 = errors;
if(!(validate17(data3, {instancePath:instancePath+"/conditions",parentData:data,parentDataProperty:"conditions",rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.config !== undefined){
let data4 = data.config;
const _errs5 = errors;
if(!(validate23(data4, {instancePath:instancePath+"/config",parentData:data,parentDataProperty:"config",rootData}))){
vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.daemonEndpoints !== undefined){
let data5 = data.daemonEndpoints;
const _errs6 = errors;
if(!(validate27(data5, {instancePath:instancePath+"/daemonEndpoints",parentData:data,parentDataProperty:"daemonEndpoints",rootData}))){
vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.declaredFeatures !== undefined){
let data6 = data.declaredFeatures;
const _errs7 = errors;
if(!(validate5(data6, {instancePath:instancePath+"/declaredFeatures",parentData:data,parentDataProperty:"declaredFeatures",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.features !== undefined){
let data7 = data.features;
const _errs8 = errors;
if(!(validate32(data7, {instancePath:instancePath+"/features",parentData:data,parentDataProperty:"features",rootData}))){
vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.images !== undefined){
let data8 = data.images;
const _errs9 = errors;
if(!(validate36(data8, {instancePath:instancePath+"/images",parentData:data,parentDataProperty:"images",rootData}))){
vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.nodeInfo !== undefined){
let data9 = data.nodeInfo;
const _errs10 = errors;
if(!(validate42(data9, {instancePath:instancePath+"/nodeInfo",parentData:data,parentDataProperty:"nodeInfo",rootData}))){
vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.phase !== undefined){
let data10 = data.phase;
const _errs11 = errors;
if(!(validate46(data10, {instancePath:instancePath+"/phase",parentData:data,parentDataProperty:"phase",rootData}))){
vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.runtimeHandlers !== undefined){
let data11 = data.runtimeHandlers;
const _errs12 = errors;
if(!(validate48(data11, {instancePath:instancePath+"/runtimeHandlers",parentData:data,parentDataProperty:"runtimeHandlers",rootData}))){
vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.volumesAttached !== undefined){
let data12 = data.volumesAttached;
const _errs13 = errors;
if(!(validate54(data12, {instancePath:instancePath+"/volumesAttached",parentData:data,parentDataProperty:"volumesAttached",rootData}))){
vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.volumesInUse !== undefined){
let data13 = data.volumesInUse;
const _errs14 = errors;
if(!(validate5(data13, {instancePath:instancePath+"/volumesInUse",parentData:data,parentDataProperty:"volumesInUse",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
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
validate8.errors = vErrors;
return errors === 0;
}
