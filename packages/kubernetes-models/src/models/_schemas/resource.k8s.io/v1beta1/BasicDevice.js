/* @ts-self-types="./BasicDevice.d.ts" */
export const validate = validate4;
const schema3 = {"properties":{"allNodes":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"allowMultipleAllocations":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"attributes":{"$ref":"78kf7Ia3tJkLn2aFXnriJQR5KGHdCAgxLUNLeV6gvTo"},"bindingConditions":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"bindingFailureConditions":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"bindsToNode":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"capacity":{"$ref":"yIsOi6v5nwH1XT99pTE-kk0r8dWAECqgKa1DFJ5iBog"},"consumesCounters":{"$ref":"WQJsm_LuFK6JwTK4o2YSSFsO_qMj_WshD2uPaijTty0"},"nodeAllocatableResourceMappings":{"$ref":"ppU-YjFoNRpUkVu2weWP0i2pKdfsn1EDZGDF2InWzlY"},"nodeName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"nodeSelector":{"$ref":"TkSNaYWIxhO85OVX_cSWzmQgv784eOxf9GMx98WTU1I"},"taints":{"$ref":"xvYtJYw0aVQpU7gz3skmXcLqwxFakgwKHdSRsC-ELTc"}},"type":"object","$id":"io.k8s.api.resource.v1beta1.BasicDevice"};
const schema0 = {"type":"boolean","nullable":true};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate0.errors = vErrors;
return errors === 0;
}

const schema4 = {"additionalProperties":{"$ref":"Y_4OHfHMJe7_IbDOUKFCLaKYrHr7DmwYO_s24kwEJMc"},"type":"object","nullable":true};
const schema5 = {"$ref":"io.k8s.api.resource.v1beta1.DeviceAttribute#"};
const schema6 = {};

import { validate as validate9 } from "././DeviceAttribute.js";


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


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate8(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate7.errors = vErrors;
return errors === 0;
}

const schema1 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array","nullable":true};
const schema2 = {"type":"string"};

function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate2.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate2(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
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
validate1.errors = vErrors;
return errors === 0;
}

const schema7 = {"additionalProperties":{"$ref":"ynrinjqi-2sJ_ryhK6ityiNSUvlnnd5gbzW90FJVGM8"},"type":"object","nullable":true};
const schema8 = {"$ref":"io.k8s.api.resource.v1beta1.DeviceCapacity#"};
const schema9 = {};

import { validate as validate18 } from "././DeviceCapacity.js";


function validate17(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate18(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate18.errors : vErrors.concat(validate18.errors);
errors = vErrors.length;
}
else {
}
validate17.errors = vErrors;
return errors === 0;
}


function validate16(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate17(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate16.errors = vErrors;
return errors === 0;
}

const schema10 = {"items":{"$ref":"2lyTfqzcY7QKSMFBDZqnNJL3sFa8FI80F73tRRQDRGY"},"type":"array","nullable":true};
const schema11 = {"$ref":"io.k8s.api.resource.v1beta1.DeviceCounterConsumption#"};
const schema12 = {};

import { validate as validate24 } from "././DeviceCounterConsumption.js";


function validate23(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate24(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
errors = vErrors.length;
}
else {
}
validate23.errors = vErrors;
return errors === 0;
}


function validate22(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate23(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
validate22.errors = vErrors;
return errors === 0;
}

const schema13 = {"additionalProperties":{"$ref":"aTFW6F01eeTZiVG6Up4gPUOYGOubnv_tv4FWVNmtibA"},"type":"object","nullable":true};
const schema14 = {"$ref":"io.k8s.api.resource.v1beta1.NodeAllocatableResourceMapping#"};
const schema15 = {};

import { validate as validate30 } from "././NodeAllocatableResourceMapping.js";


function validate29(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate30(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
errors = vErrors.length;
}
else {
}
validate29.errors = vErrors;
return errors === 0;
}


function validate28(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate29(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate28.errors = vErrors;
return errors === 0;
}

const schema16 = {"type":"string","nullable":true};

function validate34(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate34.errors = vErrors;
return errors === 0;
}

const schema17 = {"nullableRef":"io.k8s.api.core.v1.NodeSelector#"};
const schema18 = {};

import { validate as validate37 } from "./../../v1/NodeSelector.js";


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

const schema19 = {"items":{"$ref":"xNRkiY1KdJ-DRzvsYIddnns2ArK5aEPJc6IVkfVz-00"},"type":"array","nullable":true};
const schema20 = {"$ref":"io.k8s.api.resource.v1beta1.DeviceTaint#"};
const schema21 = {};

import { validate as validate42 } from "././DeviceTaint.js";


function validate41(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate42(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
errors = vErrors.length;
}
else {
}
validate41.errors = vErrors;
return errors === 0;
}


function validate40(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate41(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
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
validate40.errors = vErrors;
return errors === 0;
}


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.resource.v1beta1.BasicDevice" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.allNodes !== undefined){
let data0 = data.allNodes;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/allNodes",parentData:data,parentDataProperty:"allNodes",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.allowMultipleAllocations !== undefined){
let data1 = data.allowMultipleAllocations;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/allowMultipleAllocations",parentData:data,parentDataProperty:"allowMultipleAllocations",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.attributes !== undefined){
let data2 = data.attributes;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/attributes",parentData:data,parentDataProperty:"attributes",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.bindingConditions !== undefined){
let data3 = data.bindingConditions;
const _errs4 = errors;
if(!(validate1(data3, {instancePath:instancePath+"/bindingConditions",parentData:data,parentDataProperty:"bindingConditions",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.bindingFailureConditions !== undefined){
let data4 = data.bindingFailureConditions;
const _errs5 = errors;
if(!(validate1(data4, {instancePath:instancePath+"/bindingFailureConditions",parentData:data,parentDataProperty:"bindingFailureConditions",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.bindsToNode !== undefined){
let data5 = data.bindsToNode;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/bindsToNode",parentData:data,parentDataProperty:"bindsToNode",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.capacity !== undefined){
let data6 = data.capacity;
const _errs7 = errors;
if(!(validate16(data6, {instancePath:instancePath+"/capacity",parentData:data,parentDataProperty:"capacity",rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.consumesCounters !== undefined){
let data7 = data.consumesCounters;
const _errs8 = errors;
if(!(validate22(data7, {instancePath:instancePath+"/consumesCounters",parentData:data,parentDataProperty:"consumesCounters",rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.nodeAllocatableResourceMappings !== undefined){
let data8 = data.nodeAllocatableResourceMappings;
const _errs9 = errors;
if(!(validate28(data8, {instancePath:instancePath+"/nodeAllocatableResourceMappings",parentData:data,parentDataProperty:"nodeAllocatableResourceMappings",rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.nodeName !== undefined){
let data9 = data.nodeName;
const _errs10 = errors;
if(!(validate34(data9, {instancePath:instancePath+"/nodeName",parentData:data,parentDataProperty:"nodeName",rootData}))){
vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.nodeSelector !== undefined){
let data10 = data.nodeSelector;
const _errs11 = errors;
if(!(validate36(data10, {instancePath:instancePath+"/nodeSelector",parentData:data,parentDataProperty:"nodeSelector",rootData}))){
vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.taints !== undefined){
let data11 = data.taints;
const _errs12 = errors;
if(!(validate40(data11, {instancePath:instancePath+"/taints",parentData:data,parentDataProperty:"taints",rootData}))){
vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
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
validate4.errors = vErrors;
return errors === 0;
}
