/* @ts-self-types="./Device.d.ts" */
export const validate = validate4;
const schema3 = {"properties":{"allNodes":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"allowMultipleAllocations":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"attributes":{"$ref":"YMPZc5EWsabAKebKAA4P1FuMNgu5AcA4As_0g1npWiI"},"bindingConditions":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"bindingFailureConditions":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"bindsToNode":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"capacity":{"$ref":"mf0KAdGN2bv3CMTYmWW2HQ2Fz-Vj81wvjTYbCIPPA4I"},"consumesCounters":{"$ref":"e1emmgXU2DdUP6id_SkSs7-nRCYjDnOJY-7dpaZXeMc"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"nodeAllocatableResourceMappings":{"$ref":"vgVJolDGWUqoyI88RvLC9ig9l9-h2QUrXCiB2oYaAMU"},"nodeName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"nodeSelector":{"$ref":"TkSNaYWIxhO85OVX_cSWzmQgv784eOxf9GMx98WTU1I"},"taints":{"$ref":"bQ4Hv3aHrfDQ1bS3Xj3GGovO_FPglPLU1V6JM_gzrfI"}},"required":["name"],"type":"object","$id":"io.k8s.api.resource.v1.Device"};
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

const schema4 = {"additionalProperties":{"$ref":"RM0uW4ugtdhMO4sfwTPoZxQ-qNWqOUsZU2Xplati8Lk"},"type":"object","nullable":true};
const schema5 = {"$ref":"io.k8s.api.resource.v1.DeviceAttribute#"};
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

const schema7 = {"additionalProperties":{"$ref":"9f1XtzGf7kl7KuuBhFsE4BZXawEeO81VaQKItEX42mo"},"type":"object","nullable":true};
const schema8 = {"$ref":"io.k8s.api.resource.v1.DeviceCapacity#"};
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

const schema10 = {"items":{"$ref":"ZLvvXFtG1Ly3idDYvOOOdi_hy0RA6r1ltj1LUHztp3c"},"type":"array","nullable":true};
const schema11 = {"$ref":"io.k8s.api.resource.v1.DeviceCounterConsumption#"};
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

const schema13 = {"additionalProperties":{"$ref":"bSdpidx5RHqDDAv7pRpAGoPaO50a0hjtG_b0xSo5eTY"},"type":"object","nullable":true};
const schema14 = {"$ref":"io.k8s.api.resource.v1.NodeAllocatableResourceMapping#"};
const schema15 = {};

import { validate as validate31 } from "././NodeAllocatableResourceMapping.js";


function validate30(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate31(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
errors = vErrors.length;
}
else {
}
validate30.errors = vErrors;
return errors === 0;
}


function validate29(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate30(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate29.errors = vErrors;
return errors === 0;
}

const schema16 = {"type":"string","nullable":true};

function validate35(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate35.errors = vErrors;
return errors === 0;
}

const schema17 = {"nullableRef":"io.k8s.api.core.v1.NodeSelector#"};
const schema18 = {};

import { validate as validate38 } from "./../../v1/NodeSelector.js";


function validate37(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate38(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
errors = vErrors.length;
}
else {
}
}
validate37.errors = vErrors;
return errors === 0;
}

const schema19 = {"items":{"$ref":"zlZy_J9oIrPz7HDmu626w-ztX766eAEUC15Fm96QGHQ"},"type":"array","nullable":true};
const schema20 = {"$ref":"io.k8s.api.resource.v1.DeviceTaint#"};
const schema21 = {};

import { validate as validate43 } from "././DeviceTaint.js";


function validate42(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate43(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
errors = vErrors.length;
}
else {
}
validate42.errors = vErrors;
return errors === 0;
}


function validate41(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate42(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
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
validate41.errors = vErrors;
return errors === 0;
}


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.resource.v1.Device" */;
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
if(data.name !== undefined){
let data8 = data.name;
const _errs9 = errors;
if(!(validate2(data8, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.nodeAllocatableResourceMappings !== undefined){
let data9 = data.nodeAllocatableResourceMappings;
const _errs10 = errors;
if(!(validate29(data9, {instancePath:instancePath+"/nodeAllocatableResourceMappings",parentData:data,parentDataProperty:"nodeAllocatableResourceMappings",rootData}))){
vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.nodeName !== undefined){
let data10 = data.nodeName;
const _errs11 = errors;
if(!(validate35(data10, {instancePath:instancePath+"/nodeName",parentData:data,parentDataProperty:"nodeName",rootData}))){
vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.nodeSelector !== undefined){
let data11 = data.nodeSelector;
const _errs12 = errors;
if(!(validate37(data11, {instancePath:instancePath+"/nodeSelector",parentData:data,parentDataProperty:"nodeSelector",rootData}))){
vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.taints !== undefined){
let data12 = data.taints;
const _errs13 = errors;
if(!(validate41(data12, {instancePath:instancePath+"/taints",parentData:data,parentDataProperty:"taints",rootData}))){
vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
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
validate4.errors = vErrors;
return errors === 0;
}
