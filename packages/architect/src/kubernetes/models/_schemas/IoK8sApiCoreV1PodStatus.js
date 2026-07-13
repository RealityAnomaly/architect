import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate6;
const schema4 = {"properties":{"allocatedResources":{"$ref":"YfMVS3P5aWVrkVb6yChl1fVwg8EQjbWuoJkKTJAHr6A"},"conditions":{"$ref":"TroKMVOFlqSdtqJ8Omx7kwcyEAb2dZ6XVkHkSKnBAlo"},"containerStatuses":{"$ref":"9MuiARAtkVwz2OZbpYTy51HhPlV6SQ819ydqLvqrLps"},"ephemeralContainerStatuses":{"$ref":"9MuiARAtkVwz2OZbpYTy51HhPlV6SQ819ydqLvqrLps"},"extendedResourceClaimStatus":{"$ref":"Gpd06Q6mWRNIvqjrqOy1V4lZQ0NxY5-x1kY1-0IADVg"},"hostIP":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"hostIPs":{"$ref":"KufH6clZxkCO4mUKd-_A0g_fqRZIiW0jHasA2BlW4uA"},"initContainerStatuses":{"$ref":"9MuiARAtkVwz2OZbpYTy51HhPlV6SQ819ydqLvqrLps"},"message":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"nodeAllocatableResourceClaimStatuses":{"$ref":"uQ24k-ql0qQGherogSosHh1kIC0aWXHBD__ZQtQsbwM"},"nominatedNodeName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"observedGeneration":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"phase":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"podIP":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"podIPs":{"$ref":"tonp-t1FLJ1DNVCOwVhVOsc62utlT0fUdURldWkxwmI"},"qosClass":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"reason":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"resize":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"resourceClaimStatuses":{"$ref":"Q866iRe4hdjiYHoj4JfiDRzgES26Oz3ckTQ1qvqL5Nw"},"resources":{"$ref":"YJRTEWaEMMAL2EbRfoDU21RN4Ki3OAwPZa2m9VFEL8U"},"startTime":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"}},"type":"object","$id":"io.k8s.api.core.v1.PodStatus"};
const schema5 = {"additionalProperties":{"$ref":"VKZPUldlWDa056CXEqKHCNMaIxOA7qIsmePtey64Cuk"},"type":"object","nullable":true};
const schema6 = {"$ref":"io.k8s.apimachinery.pkg.api.resource.Quantity#"};
const schema7 = {};

import { validate as validate9 } from "./../../apimachinery/_schemas/IoK8sApimachineryPkgApiResourceQuantity.js";


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

const schema8 = {"items":{"$ref":"mN4VyLmC2MSWOzsxHhrlzHNeldDqVk3-ecmw3Yw5s4U"},"type":"array","nullable":true};
const schema9 = {"$ref":"io.k8s.api.core.v1.PodCondition#"};
const schema10 = {};

import { validate as validate15 } from "./IoK8sApiCoreV1PodCondition.js";


function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate15(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
validate14.errors = vErrors;
return errors === 0;
}


function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate14(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
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
validate13.errors = vErrors;
return errors === 0;
}

const schema0 = {"items":{"$ref":"zeu4mgDcMjQjru8yEaMWsZs3k0YsYHgCZd2_LhXjhQs"},"type":"array","nullable":true};
const schema1 = {"$ref":"io.k8s.api.core.v1.ContainerStatus#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiCoreV1ContainerStatus.js";


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
if(!(validate1(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
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
validate0.errors = vErrors;
return errors === 0;
}

const schema11 = {"nullableRef":"io.k8s.api.core.v1.PodExtendedResourceClaimStatus#"};
const schema12 = {};

import { validate as validate22 } from "./IoK8sApiCoreV1PodExtendedResourceClaimStatus.js";


function validate21(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate22(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
}
validate21.errors = vErrors;
return errors === 0;
}

const schema3 = {"type":"string","nullable":true};

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate5.errors = vErrors;
return errors === 0;
}

const schema13 = {"items":{"$ref":"0BKOEM65mMJnLObNed4a4KEf_eEomX6iCJpFFuVEVfg"},"type":"array","nullable":true};
const schema14 = {"$ref":"io.k8s.api.core.v1.HostIP#"};
const schema15 = {};

import { validate as validate28 } from "./IoK8sApiCoreV1HostIP.js";


function validate27(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate28(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
validate27.errors = vErrors;
return errors === 0;
}


function validate26(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate27(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
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
validate26.errors = vErrors;
return errors === 0;
}

const schema16 = {"items":{"$ref":"aXi_kYS8uKnhXL2upQvigzRAYWJNv0SqUKK3Kggcwvo"},"type":"array","nullable":true};
const schema17 = {"$ref":"io.k8s.api.core.v1.NodeAllocatableResourceClaimStatus#"};
const schema18 = {};

import { validate as validate36 } from "./IoK8sApiCoreV1NodeAllocatableResourceClaimStatus.js";


function validate35(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate36(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
errors = vErrors.length;
}
else {
}
validate35.errors = vErrors;
return errors === 0;
}


function validate34(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate35(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
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
validate34.errors = vErrors;
return errors === 0;
}

const schema19 = {"format":"int64","type":"integer","nullable":true};
const formats0 = formats.int64;

function validate41(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate41.errors = vErrors;
return errors === 0;
}

const schema20 = {"items":{"$ref":"KcfrKwEbw_kNrVA4381rfTWjBtiFFEXer4ZlL_A1feo"},"type":"array","nullable":true};
const schema21 = {"$ref":"io.k8s.api.core.v1.PodIP#"};
const schema22 = {};

import { validate as validate47 } from "./IoK8sApiCoreV1PodIP.js";


function validate46(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate47(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
errors = vErrors.length;
}
else {
}
validate46.errors = vErrors;
return errors === 0;
}


function validate45(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate46(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
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
validate45.errors = vErrors;
return errors === 0;
}

const schema23 = {"items":{"$ref":"_P1ZjQwMcLW1EdEz5YmX4GYi88Er1EzGhaoeM4HgyFQ"},"type":"array","nullable":true};
const schema24 = {"$ref":"io.k8s.api.core.v1.PodResourceClaimStatus#"};
const schema25 = {};

import { validate as validate56 } from "./IoK8sApiCoreV1PodResourceClaimStatus.js";


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

const schema26 = {"nullableRef":"io.k8s.api.core.v1.ResourceRequirements#"};
const schema27 = {};

import { validate as validate61 } from "./IoK8sApiCoreV1ResourceRequirements.js";


function validate60(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate61(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
errors = vErrors.length;
}
else {
}
}
validate60.errors = vErrors;
return errors === 0;
}

const schema28 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.Time#"};
const schema29 = {};

import { validate as validate65 } from "./../../apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1Time.js";


function validate64(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate65(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
errors = vErrors.length;
}
else {
}
}
validate64.errors = vErrors;
return errors === 0;
}


function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.PodStatus" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.allocatedResources !== undefined){
let data0 = data.allocatedResources;
const _errs1 = errors;
if(!(validate7(data0, {instancePath:instancePath+"/allocatedResources",parentData:data,parentDataProperty:"allocatedResources",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.conditions !== undefined){
let data1 = data.conditions;
const _errs2 = errors;
if(!(validate13(data1, {instancePath:instancePath+"/conditions",parentData:data,parentDataProperty:"conditions",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.containerStatuses !== undefined){
let data2 = data.containerStatuses;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/containerStatuses",parentData:data,parentDataProperty:"containerStatuses",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.ephemeralContainerStatuses !== undefined){
let data3 = data.ephemeralContainerStatuses;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/ephemeralContainerStatuses",parentData:data,parentDataProperty:"ephemeralContainerStatuses",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.extendedResourceClaimStatus !== undefined){
let data4 = data.extendedResourceClaimStatus;
const _errs5 = errors;
if(!(validate21(data4, {instancePath:instancePath+"/extendedResourceClaimStatus",parentData:data,parentDataProperty:"extendedResourceClaimStatus",rootData}))){
vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.hostIP !== undefined){
let data5 = data.hostIP;
const _errs6 = errors;
if(!(validate5(data5, {instancePath:instancePath+"/hostIP",parentData:data,parentDataProperty:"hostIP",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.hostIPs !== undefined){
let data6 = data.hostIPs;
const _errs7 = errors;
if(!(validate26(data6, {instancePath:instancePath+"/hostIPs",parentData:data,parentDataProperty:"hostIPs",rootData}))){
vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.initContainerStatuses !== undefined){
let data7 = data.initContainerStatuses;
const _errs8 = errors;
if(!(validate0(data7, {instancePath:instancePath+"/initContainerStatuses",parentData:data,parentDataProperty:"initContainerStatuses",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.message !== undefined){
let data8 = data.message;
const _errs9 = errors;
if(!(validate5(data8, {instancePath:instancePath+"/message",parentData:data,parentDataProperty:"message",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.nodeAllocatableResourceClaimStatuses !== undefined){
let data9 = data.nodeAllocatableResourceClaimStatuses;
const _errs10 = errors;
if(!(validate34(data9, {instancePath:instancePath+"/nodeAllocatableResourceClaimStatuses",parentData:data,parentDataProperty:"nodeAllocatableResourceClaimStatuses",rootData}))){
vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.nominatedNodeName !== undefined){
let data10 = data.nominatedNodeName;
const _errs11 = errors;
if(!(validate5(data10, {instancePath:instancePath+"/nominatedNodeName",parentData:data,parentDataProperty:"nominatedNodeName",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.observedGeneration !== undefined){
let data11 = data.observedGeneration;
const _errs12 = errors;
if(!(validate41(data11, {instancePath:instancePath+"/observedGeneration",parentData:data,parentDataProperty:"observedGeneration",rootData}))){
vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.phase !== undefined){
let data12 = data.phase;
const _errs13 = errors;
if(!(validate5(data12, {instancePath:instancePath+"/phase",parentData:data,parentDataProperty:"phase",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.podIP !== undefined){
let data13 = data.podIP;
const _errs14 = errors;
if(!(validate5(data13, {instancePath:instancePath+"/podIP",parentData:data,parentDataProperty:"podIP",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.podIPs !== undefined){
let data14 = data.podIPs;
const _errs15 = errors;
if(!(validate45(data14, {instancePath:instancePath+"/podIPs",parentData:data,parentDataProperty:"podIPs",rootData}))){
vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.qosClass !== undefined){
let data15 = data.qosClass;
const _errs16 = errors;
if(!(validate5(data15, {instancePath:instancePath+"/qosClass",parentData:data,parentDataProperty:"qosClass",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs16 === errors;
}
if(data.reason !== undefined){
let data16 = data.reason;
const _errs17 = errors;
if(!(validate5(data16, {instancePath:instancePath+"/reason",parentData:data,parentDataProperty:"reason",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs17 === errors;
}
if(data.resize !== undefined){
let data17 = data.resize;
const _errs18 = errors;
if(!(validate5(data17, {instancePath:instancePath+"/resize",parentData:data,parentDataProperty:"resize",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs18 === errors;
}
if(data.resourceClaimStatuses !== undefined){
let data18 = data.resourceClaimStatuses;
const _errs19 = errors;
if(!(validate54(data18, {instancePath:instancePath+"/resourceClaimStatuses",parentData:data,parentDataProperty:"resourceClaimStatuses",rootData}))){
vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs19 === errors;
}
if(data.resources !== undefined){
let data19 = data.resources;
const _errs20 = errors;
if(!(validate60(data19, {instancePath:instancePath+"/resources",parentData:data,parentDataProperty:"resources",rootData}))){
vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs20 === errors;
}
if(data.startTime !== undefined){
let data20 = data.startTime;
const _errs21 = errors;
if(!(validate64(data20, {instancePath:instancePath+"/startTime",parentData:data,parentDataProperty:"startTime",rootData}))){
vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs21 === errors;
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
validate6.errors = vErrors;
return errors === 0;
}
