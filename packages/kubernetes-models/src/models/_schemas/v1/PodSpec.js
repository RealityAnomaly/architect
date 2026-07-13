/* @ts-self-types="./PodSpec.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate6;
const schema5 = {"properties":{"activeDeadlineSeconds":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"affinity":{"$ref":"5oJ-88jmc9KZnuQchHrqb6gjmQgGd5mXa--848PN3IM"},"automountServiceAccountToken":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"containers":{"$ref":"iqRYB3yCrzgjj-HUvm-rnBuAoBvCgnYQu670NjfErWo"},"dnsConfig":{"$ref":"JLVZbyj74igDC3cYXxGJYQvoIvyvL6hHdWsruCWRjsM"},"dnsPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"enableServiceLinks":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"ephemeralContainers":{"$ref":"C1IhVipMoCt0gpHW2PaiSWSrqIP7HdToHiA2bKpj4tQ"},"hostAliases":{"$ref":"kIpOQ2JJ-97dzasWRXIVZvzLjNb6CCusVPi3QkN552I"},"hostIPC":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"hostNetwork":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"hostPID":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"hostUsers":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"hostname":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"hostnameOverride":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"imagePullSecrets":{"$ref":"gjXZRQ8w9yBKkLxsmhPnZCSKN4unVoqvrNXh00NXGOo"},"initContainers":{"$ref":"-B4qBLCtNycW2OgmF2ns7nxw7XnPbL7qPjyWnbsU_SY"},"nodeName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"nodeSelector":{"$ref":"Ul_dhUdbb_DarDhfw0mKkpjzZdc0vNqkGhUAaKt2b7M"},"os":{"$ref":"egSCTBL4o0T4Cz7BImeXxOshQYEDYtUiCYutvYKW-dA"},"overhead":{"$ref":"YfMVS3P5aWVrkVb6yChl1fVwg8EQjbWuoJkKTJAHr6A"},"preemptionPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"priority":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"priorityClassName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"readinessGates":{"$ref":"F0DnxNGymz9t_-VvdpPqjjUQ2YVzwB8gh7jTyJCdaVg"},"resourceClaims":{"$ref":"KiRN0D0osEoHY9J5HsnlTOudg2ZUkFOBqZ5TEdNXCQY"},"resources":{"$ref":"YJRTEWaEMMAL2EbRfoDU21RN4Ki3OAwPZa2m9VFEL8U"},"restartPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"runtimeClassName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"schedulerName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"schedulingGates":{"$ref":"20j2Xrah6LWOCm6-jDiAWA-k26RU4ffdqUxuIYYW7PM"},"schedulingGroup":{"$ref":"YkrCGD5mouVl8DMzvmxjMm5hz11ZklHtPZ8k3C7N78o"},"securityContext":{"$ref":"ZbgUdpV8yA-9xCgMpQHwScJW6Az5VMO9qLJKvXsKcBI"},"serviceAccount":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"serviceAccountName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"setHostnameAsFQDN":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"shareProcessNamespace":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"subdomain":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"terminationGracePeriodSeconds":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"tolerations":{"$ref":"99pABxGOpM5kMhz23gIFtNrTrpLxZYHA4pvL_seEbl8"},"topologySpreadConstraints":{"$ref":"1oANpIxQ8m8OLphFmQmh-6fLtdbVBTbE00HFkxDoBZQ"},"volumes":{"$ref":"3N9lKvx5joFgj-YBYbTm2tddKXclNVN7K8xMGx8dILo"}},"required":["containers"],"type":"object","$id":"io.k8s.api.core.v1.PodSpec"};
const schema4 = {"format":"int64","type":"integer","nullable":true};
const formats0 = formats.int64;

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate5.errors = vErrors;
return errors === 0;
}

const schema6 = {"nullableRef":"io.k8s.api.core.v1.Affinity#"};
const schema7 = {};

import { validate as validate9 } from "././Affinity.js";


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

const schema8 = {"items":{"$ref":"m1S9Ergyw-swF2upGCpoSNruSiWWOZaXSE6Tta2VM7U"},"type":"array"};
const schema2 = {"$ref":"io.k8s.api.core.v1.Container#"};
const schema3 = {};

import { validate as validate3 } from "././Container.js";


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate3(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
validate2.errors = vErrors;
return errors === 0;
}


function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
if(!(validate2(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
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
validate13.errors = vErrors;
return errors === 0;
}

const schema9 = {"nullableRef":"io.k8s.api.core.v1.PodDNSConfig#"};
const schema10 = {};

import { validate as validate17 } from "././PodDNSConfig.js";


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

const schema11 = {"items":{"$ref":"-iFpL4OINxRJEKZa8RpR3jQO1sVJk_Pc5l88HlUZIng"},"type":"array","nullable":true};
const schema12 = {"$ref":"io.k8s.api.core.v1.EphemeralContainer#"};
const schema13 = {};

import { validate as validate24 } from "././EphemeralContainer.js";


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

const schema14 = {"items":{"$ref":"haBjrTTEn-RTBwSWIyvUvSYCmv-LPbjPBwokne4YVBo"},"type":"array","nullable":true};
const schema15 = {"$ref":"io.k8s.api.core.v1.HostAlias#"};
const schema16 = {};

import { validate as validate30 } from "././HostAlias.js";


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

const schema17 = {"items":{"$ref":"4YCFHRfFKFmA1CimYyY0_4zKlnol9cbixnRVsbLO4so"},"type":"array","nullable":true};
const schema18 = {"$ref":"io.k8s.api.core.v1.LocalObjectReference#"};
const schema19 = {};

import { validate as validate42 } from "././LocalObjectReference.js";


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

const schema20 = {"items":{"$ref":"m1S9Ergyw-swF2upGCpoSNruSiWWOZaXSE6Tta2VM7U"},"type":"array","nullable":true};

function validate46(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate46.errors = vErrors;
return errors === 0;
}

const schema21 = {"additionalProperties":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"object","nullable":true};
const schema22 = {"type":"string"};

function validate51(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate51.errors = vErrors;
return errors === 0;
}


function validate50(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate51(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate50.errors = vErrors;
return errors === 0;
}

const schema23 = {"nullableRef":"io.k8s.api.core.v1.PodOS#"};
const schema24 = {};

import { validate as validate55 } from "././PodOS.js";


function validate54(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate55(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
errors = vErrors.length;
}
else {
}
}
validate54.errors = vErrors;
return errors === 0;
}

const schema25 = {"additionalProperties":{"$ref":"VKZPUldlWDa056CXEqKHCNMaIxOA7qIsmePtey64Cuk"},"type":"object","nullable":true};
const schema26 = {"$ref":"io.k8s.apimachinery.pkg.api.resource.Quantity#"};
const schema27 = {};

import { validate as validate60 } from "./../../../apimachinery/_schemas/api/resource/Quantity.js";


function validate59(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate60(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
errors = vErrors.length;
}
else {
}
validate59.errors = vErrors;
return errors === 0;
}


function validate58(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate59(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate59.errors : vErrors.concat(validate59.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate58.errors = vErrors;
return errors === 0;
}

const schema28 = {"format":"int32","type":"integer","nullable":true};
const formats2 = formats.int32;

function validate65(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate65.errors = vErrors;
return errors === 0;
}

const schema29 = {"items":{"$ref":"4Ff2Wuz8OueMJAXjd0ZudFPNd1n3ceO_xqcpWGoF4Xg"},"type":"array","nullable":true};
const schema30 = {"$ref":"io.k8s.api.core.v1.PodReadinessGate#"};
const schema31 = {};

import { validate as validate70 } from "././PodReadinessGate.js";


function validate69(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate70(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
errors = vErrors.length;
}
else {
}
validate69.errors = vErrors;
return errors === 0;
}


function validate68(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate69(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
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
validate68.errors = vErrors;
return errors === 0;
}

const schema32 = {"items":{"$ref":"1qIFbwd9fXs46j_D9i-_nYE7xHFcjed6-BU4L_d1nBM"},"type":"array","nullable":true};
const schema33 = {"$ref":"io.k8s.api.core.v1.PodResourceClaim#"};
const schema34 = {};

import { validate as validate76 } from "././PodResourceClaim.js";


function validate75(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate76(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
errors = vErrors.length;
}
else {
}
validate75.errors = vErrors;
return errors === 0;
}


function validate74(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate75(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
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
validate74.errors = vErrors;
return errors === 0;
}

const schema35 = {"nullableRef":"io.k8s.api.core.v1.ResourceRequirements#"};
const schema36 = {};

import { validate as validate81 } from "././ResourceRequirements.js";


function validate80(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate81(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
errors = vErrors.length;
}
else {
}
}
validate80.errors = vErrors;
return errors === 0;
}

const schema37 = {"items":{"$ref":"MAjRgBTFfU73JUpRcAqRbtrq8kgXgVDtV743GPs9Cmo"},"type":"array","nullable":true};
const schema38 = {"$ref":"io.k8s.api.core.v1.PodSchedulingGate#"};
const schema39 = {};

import { validate as validate89 } from "././PodSchedulingGate.js";


function validate88(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate89(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate89.errors : vErrors.concat(validate89.errors);
errors = vErrors.length;
}
else {
}
validate88.errors = vErrors;
return errors === 0;
}


function validate87(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate88(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
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
validate87.errors = vErrors;
return errors === 0;
}

const schema40 = {"nullableRef":"io.k8s.api.core.v1.PodSchedulingGroup#"};
const schema41 = {};

import { validate as validate94 } from "././PodSchedulingGroup.js";


function validate93(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate94(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
errors = vErrors.length;
}
else {
}
}
validate93.errors = vErrors;
return errors === 0;
}

const schema42 = {"nullableRef":"io.k8s.api.core.v1.PodSecurityContext#"};
const schema43 = {};

import { validate as validate98 } from "././PodSecurityContext.js";


function validate97(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate98(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate98.errors : vErrors.concat(validate98.errors);
errors = vErrors.length;
}
else {
}
}
validate97.errors = vErrors;
return errors === 0;
}

const schema44 = {"items":{"$ref":"VPTB-Zr1Tt0p_1ZESUr79DJgyVsAOP5zfEKvLmjQMR4"},"type":"array","nullable":true};
const schema45 = {"$ref":"io.k8s.api.core.v1.Toleration#"};
const schema46 = {};

import { validate as validate109 } from "././Toleration.js";


function validate108(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate109(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate109.errors : vErrors.concat(validate109.errors);
errors = vErrors.length;
}
else {
}
validate108.errors = vErrors;
return errors === 0;
}


function validate107(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate108(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate108.errors : vErrors.concat(validate108.errors);
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
validate107.errors = vErrors;
return errors === 0;
}

const schema47 = {"items":{"$ref":"1Vl6ljIEADlgbctA-ZHRs6GCj-AzuOPmQq8WlGoboJY"},"type":"array","nullable":true};
const schema48 = {"$ref":"io.k8s.api.core.v1.TopologySpreadConstraint#"};
const schema49 = {};

import { validate as validate115 } from "././TopologySpreadConstraint.js";


function validate114(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate115(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate115.errors : vErrors.concat(validate115.errors);
errors = vErrors.length;
}
else {
}
validate114.errors = vErrors;
return errors === 0;
}


function validate113(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate114(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate114.errors : vErrors.concat(validate114.errors);
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
validate113.errors = vErrors;
return errors === 0;
}

const schema50 = {"items":{"$ref":"KNSHcLoUd0OHio2fzdRRrXacrmFG_IUNIaRxw76zj9g"},"type":"array","nullable":true};
const schema51 = {"$ref":"io.k8s.api.core.v1.Volume#"};
const schema52 = {};

import { validate as validate121 } from "././Volume.js";


function validate120(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate121(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate121.errors : vErrors.concat(validate121.errors);
errors = vErrors.length;
}
else {
}
validate120.errors = vErrors;
return errors === 0;
}


function validate119(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate120(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate120.errors : vErrors.concat(validate120.errors);
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
validate119.errors = vErrors;
return errors === 0;
}


function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.PodSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.containers === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "containers"}};
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
if(!(validate5(data0, {instancePath:instancePath+"/activeDeadlineSeconds",parentData:data,parentDataProperty:"activeDeadlineSeconds",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.affinity !== undefined){
let data1 = data.affinity;
const _errs2 = errors;
if(!(validate8(data1, {instancePath:instancePath+"/affinity",parentData:data,parentDataProperty:"affinity",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.automountServiceAccountToken !== undefined){
let data2 = data.automountServiceAccountToken;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/automountServiceAccountToken",parentData:data,parentDataProperty:"automountServiceAccountToken",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.containers !== undefined){
let data3 = data.containers;
const _errs4 = errors;
if(!(validate13(data3, {instancePath:instancePath+"/containers",parentData:data,parentDataProperty:"containers",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.dnsConfig !== undefined){
let data4 = data.dnsConfig;
const _errs5 = errors;
if(!(validate16(data4, {instancePath:instancePath+"/dnsConfig",parentData:data,parentDataProperty:"dnsConfig",rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.dnsPolicy !== undefined){
let data5 = data.dnsPolicy;
const _errs6 = errors;
if(!(validate1(data5, {instancePath:instancePath+"/dnsPolicy",parentData:data,parentDataProperty:"dnsPolicy",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.enableServiceLinks !== undefined){
let data6 = data.enableServiceLinks;
const _errs7 = errors;
if(!(validate0(data6, {instancePath:instancePath+"/enableServiceLinks",parentData:data,parentDataProperty:"enableServiceLinks",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.ephemeralContainers !== undefined){
let data7 = data.ephemeralContainers;
const _errs8 = errors;
if(!(validate22(data7, {instancePath:instancePath+"/ephemeralContainers",parentData:data,parentDataProperty:"ephemeralContainers",rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.hostAliases !== undefined){
let data8 = data.hostAliases;
const _errs9 = errors;
if(!(validate28(data8, {instancePath:instancePath+"/hostAliases",parentData:data,parentDataProperty:"hostAliases",rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.hostIPC !== undefined){
let data9 = data.hostIPC;
const _errs10 = errors;
if(!(validate0(data9, {instancePath:instancePath+"/hostIPC",parentData:data,parentDataProperty:"hostIPC",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.hostNetwork !== undefined){
let data10 = data.hostNetwork;
const _errs11 = errors;
if(!(validate0(data10, {instancePath:instancePath+"/hostNetwork",parentData:data,parentDataProperty:"hostNetwork",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.hostPID !== undefined){
let data11 = data.hostPID;
const _errs12 = errors;
if(!(validate0(data11, {instancePath:instancePath+"/hostPID",parentData:data,parentDataProperty:"hostPID",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.hostUsers !== undefined){
let data12 = data.hostUsers;
const _errs13 = errors;
if(!(validate0(data12, {instancePath:instancePath+"/hostUsers",parentData:data,parentDataProperty:"hostUsers",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.hostname !== undefined){
let data13 = data.hostname;
const _errs14 = errors;
if(!(validate1(data13, {instancePath:instancePath+"/hostname",parentData:data,parentDataProperty:"hostname",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.hostnameOverride !== undefined){
let data14 = data.hostnameOverride;
const _errs15 = errors;
if(!(validate1(data14, {instancePath:instancePath+"/hostnameOverride",parentData:data,parentDataProperty:"hostnameOverride",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.imagePullSecrets !== undefined){
let data15 = data.imagePullSecrets;
const _errs16 = errors;
if(!(validate40(data15, {instancePath:instancePath+"/imagePullSecrets",parentData:data,parentDataProperty:"imagePullSecrets",rootData}))){
vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs16 === errors;
}
if(data.initContainers !== undefined){
let data16 = data.initContainers;
const _errs17 = errors;
if(!(validate46(data16, {instancePath:instancePath+"/initContainers",parentData:data,parentDataProperty:"initContainers",rootData}))){
vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs17 === errors;
}
if(data.nodeName !== undefined){
let data17 = data.nodeName;
const _errs18 = errors;
if(!(validate1(data17, {instancePath:instancePath+"/nodeName",parentData:data,parentDataProperty:"nodeName",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs18 === errors;
}
if(data.nodeSelector !== undefined){
let data18 = data.nodeSelector;
const _errs19 = errors;
if(!(validate50(data18, {instancePath:instancePath+"/nodeSelector",parentData:data,parentDataProperty:"nodeSelector",rootData}))){
vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs19 === errors;
}
if(data.os !== undefined){
let data19 = data.os;
const _errs20 = errors;
if(!(validate54(data19, {instancePath:instancePath+"/os",parentData:data,parentDataProperty:"os",rootData}))){
vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs20 === errors;
}
if(data.overhead !== undefined){
let data20 = data.overhead;
const _errs21 = errors;
if(!(validate58(data20, {instancePath:instancePath+"/overhead",parentData:data,parentDataProperty:"overhead",rootData}))){
vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs21 === errors;
}
if(data.preemptionPolicy !== undefined){
let data21 = data.preemptionPolicy;
const _errs22 = errors;
if(!(validate1(data21, {instancePath:instancePath+"/preemptionPolicy",parentData:data,parentDataProperty:"preemptionPolicy",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs22 === errors;
}
if(data.priority !== undefined){
let data22 = data.priority;
const _errs23 = errors;
if(!(validate65(data22, {instancePath:instancePath+"/priority",parentData:data,parentDataProperty:"priority",rootData}))){
vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs23 === errors;
}
if(data.priorityClassName !== undefined){
let data23 = data.priorityClassName;
const _errs24 = errors;
if(!(validate1(data23, {instancePath:instancePath+"/priorityClassName",parentData:data,parentDataProperty:"priorityClassName",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs24 === errors;
}
if(data.readinessGates !== undefined){
let data24 = data.readinessGates;
const _errs25 = errors;
if(!(validate68(data24, {instancePath:instancePath+"/readinessGates",parentData:data,parentDataProperty:"readinessGates",rootData}))){
vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs25 === errors;
}
if(data.resourceClaims !== undefined){
let data25 = data.resourceClaims;
const _errs26 = errors;
if(!(validate74(data25, {instancePath:instancePath+"/resourceClaims",parentData:data,parentDataProperty:"resourceClaims",rootData}))){
vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs26 === errors;
}
if(data.resources !== undefined){
let data26 = data.resources;
const _errs27 = errors;
if(!(validate80(data26, {instancePath:instancePath+"/resources",parentData:data,parentDataProperty:"resources",rootData}))){
vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs27 === errors;
}
if(data.restartPolicy !== undefined){
let data27 = data.restartPolicy;
const _errs28 = errors;
if(!(validate1(data27, {instancePath:instancePath+"/restartPolicy",parentData:data,parentDataProperty:"restartPolicy",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs28 === errors;
}
if(data.runtimeClassName !== undefined){
let data28 = data.runtimeClassName;
const _errs29 = errors;
if(!(validate1(data28, {instancePath:instancePath+"/runtimeClassName",parentData:data,parentDataProperty:"runtimeClassName",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs29 === errors;
}
if(data.schedulerName !== undefined){
let data29 = data.schedulerName;
const _errs30 = errors;
if(!(validate1(data29, {instancePath:instancePath+"/schedulerName",parentData:data,parentDataProperty:"schedulerName",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs30 === errors;
}
if(data.schedulingGates !== undefined){
let data30 = data.schedulingGates;
const _errs31 = errors;
if(!(validate87(data30, {instancePath:instancePath+"/schedulingGates",parentData:data,parentDataProperty:"schedulingGates",rootData}))){
vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs31 === errors;
}
if(data.schedulingGroup !== undefined){
let data31 = data.schedulingGroup;
const _errs32 = errors;
if(!(validate93(data31, {instancePath:instancePath+"/schedulingGroup",parentData:data,parentDataProperty:"schedulingGroup",rootData}))){
vErrors = vErrors === null ? validate93.errors : vErrors.concat(validate93.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs32 === errors;
}
if(data.securityContext !== undefined){
let data32 = data.securityContext;
const _errs33 = errors;
if(!(validate97(data32, {instancePath:instancePath+"/securityContext",parentData:data,parentDataProperty:"securityContext",rootData}))){
vErrors = vErrors === null ? validate97.errors : vErrors.concat(validate97.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs33 === errors;
}
if(data.serviceAccount !== undefined){
let data33 = data.serviceAccount;
const _errs34 = errors;
if(!(validate1(data33, {instancePath:instancePath+"/serviceAccount",parentData:data,parentDataProperty:"serviceAccount",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs34 === errors;
}
if(data.serviceAccountName !== undefined){
let data34 = data.serviceAccountName;
const _errs35 = errors;
if(!(validate1(data34, {instancePath:instancePath+"/serviceAccountName",parentData:data,parentDataProperty:"serviceAccountName",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs35 === errors;
}
if(data.setHostnameAsFQDN !== undefined){
let data35 = data.setHostnameAsFQDN;
const _errs36 = errors;
if(!(validate0(data35, {instancePath:instancePath+"/setHostnameAsFQDN",parentData:data,parentDataProperty:"setHostnameAsFQDN",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs36 === errors;
}
if(data.shareProcessNamespace !== undefined){
let data36 = data.shareProcessNamespace;
const _errs37 = errors;
if(!(validate0(data36, {instancePath:instancePath+"/shareProcessNamespace",parentData:data,parentDataProperty:"shareProcessNamespace",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs37 === errors;
}
if(data.subdomain !== undefined){
let data37 = data.subdomain;
const _errs38 = errors;
if(!(validate1(data37, {instancePath:instancePath+"/subdomain",parentData:data,parentDataProperty:"subdomain",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs38 === errors;
}
if(data.terminationGracePeriodSeconds !== undefined){
let data38 = data.terminationGracePeriodSeconds;
const _errs39 = errors;
if(!(validate5(data38, {instancePath:instancePath+"/terminationGracePeriodSeconds",parentData:data,parentDataProperty:"terminationGracePeriodSeconds",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs39 === errors;
}
if(data.tolerations !== undefined){
let data39 = data.tolerations;
const _errs40 = errors;
if(!(validate107(data39, {instancePath:instancePath+"/tolerations",parentData:data,parentDataProperty:"tolerations",rootData}))){
vErrors = vErrors === null ? validate107.errors : vErrors.concat(validate107.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs40 === errors;
}
if(data.topologySpreadConstraints !== undefined){
let data40 = data.topologySpreadConstraints;
const _errs41 = errors;
if(!(validate113(data40, {instancePath:instancePath+"/topologySpreadConstraints",parentData:data,parentDataProperty:"topologySpreadConstraints",rootData}))){
vErrors = vErrors === null ? validate113.errors : vErrors.concat(validate113.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs41 === errors;
}
if(data.volumes !== undefined){
let data41 = data.volumes;
const _errs42 = errors;
if(!(validate119(data41, {instancePath:instancePath+"/volumes",parentData:data,parentDataProperty:"volumes",rootData}))){
vErrors = vErrors === null ? validate119.errors : vErrors.concat(validate119.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs42 === errors;
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
validate6.errors = vErrors;
return errors === 0;
}
