/* @ts-self-types="./ServiceSpec.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate5;
const schema4 = {"properties":{"allocateLoadBalancerNodePorts":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"clusterIP":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"clusterIPs":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"externalIPs":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"externalName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"externalTrafficPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"healthCheckNodePort":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"internalTrafficPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"ipFamilies":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"ipFamilyPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"loadBalancerClass":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"loadBalancerIP":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"loadBalancerSourceRanges":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"ports":{"$ref":"8keS58c_2nfY1X2vvTj1pQZf_ecyAeJAzNMNaRgPGeE"},"publishNotReadyAddresses":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"selector":{"$ref":"Ul_dhUdbb_DarDhfw0mKkpjzZdc0vNqkGhUAaKt2b7M"},"sessionAffinity":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"sessionAffinityConfig":{"$ref":"mKxveGG4e0_IKOmTFRsRpqGVhYfPqi_sfeYafFBW1bg"},"trafficDistribution":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"type":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object","$id":"io.k8s.api.core.v1.ServiceSpec"};
const schema3 = {"type":"boolean","nullable":true};

function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate4.errors = vErrors;
return errors === 0;
}

const schema2 = {"type":"string","nullable":true};

function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate3.errors = vErrors;
return errors === 0;
}

const schema0 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array","nullable":true};
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

const schema5 = {"format":"int32","type":"integer","nullable":true};
const formats0 = formats.int32;

function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate12.errors = vErrors;
return errors === 0;
}

const schema6 = {"items":{"$ref":"CK7DKH20s51nLQMw3c7o0WHDzPpnU6PpxixpMNPe-Tg"},"type":"array","nullable":true};
const schema7 = {"$ref":"io.k8s.api.core.v1.ServicePort#"};
const schema8 = {};

import { validate as validate22 } from "././ServicePort.js";


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

const schema9 = {"additionalProperties":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"object","nullable":true};

function validate27(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate27.errors = vErrors;
return errors === 0;
}

const schema10 = {"nullableRef":"io.k8s.api.core.v1.SessionAffinityConfig#"};
const schema11 = {};

import { validate as validate32 } from "././SessionAffinityConfig.js";


function validate31(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate32(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
errors = vErrors.length;
}
else {
}
}
validate31.errors = vErrors;
return errors === 0;
}


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.ServiceSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.allocateLoadBalancerNodePorts !== undefined){
let data0 = data.allocateLoadBalancerNodePorts;
const _errs1 = errors;
if(!(validate4(data0, {instancePath:instancePath+"/allocateLoadBalancerNodePorts",parentData:data,parentDataProperty:"allocateLoadBalancerNodePorts",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.clusterIP !== undefined){
let data1 = data.clusterIP;
const _errs2 = errors;
if(!(validate3(data1, {instancePath:instancePath+"/clusterIP",parentData:data,parentDataProperty:"clusterIP",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.clusterIPs !== undefined){
let data2 = data.clusterIPs;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/clusterIPs",parentData:data,parentDataProperty:"clusterIPs",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.externalIPs !== undefined){
let data3 = data.externalIPs;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/externalIPs",parentData:data,parentDataProperty:"externalIPs",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.externalName !== undefined){
let data4 = data.externalName;
const _errs5 = errors;
if(!(validate3(data4, {instancePath:instancePath+"/externalName",parentData:data,parentDataProperty:"externalName",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.externalTrafficPolicy !== undefined){
let data5 = data.externalTrafficPolicy;
const _errs6 = errors;
if(!(validate3(data5, {instancePath:instancePath+"/externalTrafficPolicy",parentData:data,parentDataProperty:"externalTrafficPolicy",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.healthCheckNodePort !== undefined){
let data6 = data.healthCheckNodePort;
const _errs7 = errors;
if(!(validate12(data6, {instancePath:instancePath+"/healthCheckNodePort",parentData:data,parentDataProperty:"healthCheckNodePort",rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.internalTrafficPolicy !== undefined){
let data7 = data.internalTrafficPolicy;
const _errs8 = errors;
if(!(validate3(data7, {instancePath:instancePath+"/internalTrafficPolicy",parentData:data,parentDataProperty:"internalTrafficPolicy",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.ipFamilies !== undefined){
let data8 = data.ipFamilies;
const _errs9 = errors;
if(!(validate0(data8, {instancePath:instancePath+"/ipFamilies",parentData:data,parentDataProperty:"ipFamilies",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.ipFamilyPolicy !== undefined){
let data9 = data.ipFamilyPolicy;
const _errs10 = errors;
if(!(validate3(data9, {instancePath:instancePath+"/ipFamilyPolicy",parentData:data,parentDataProperty:"ipFamilyPolicy",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.loadBalancerClass !== undefined){
let data10 = data.loadBalancerClass;
const _errs11 = errors;
if(!(validate3(data10, {instancePath:instancePath+"/loadBalancerClass",parentData:data,parentDataProperty:"loadBalancerClass",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.loadBalancerIP !== undefined){
let data11 = data.loadBalancerIP;
const _errs12 = errors;
if(!(validate3(data11, {instancePath:instancePath+"/loadBalancerIP",parentData:data,parentDataProperty:"loadBalancerIP",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.loadBalancerSourceRanges !== undefined){
let data12 = data.loadBalancerSourceRanges;
const _errs13 = errors;
if(!(validate0(data12, {instancePath:instancePath+"/loadBalancerSourceRanges",parentData:data,parentDataProperty:"loadBalancerSourceRanges",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.ports !== undefined){
let data13 = data.ports;
const _errs14 = errors;
if(!(validate20(data13, {instancePath:instancePath+"/ports",parentData:data,parentDataProperty:"ports",rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.publishNotReadyAddresses !== undefined){
let data14 = data.publishNotReadyAddresses;
const _errs15 = errors;
if(!(validate4(data14, {instancePath:instancePath+"/publishNotReadyAddresses",parentData:data,parentDataProperty:"publishNotReadyAddresses",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.selector !== undefined){
let data15 = data.selector;
const _errs16 = errors;
if(!(validate27(data15, {instancePath:instancePath+"/selector",parentData:data,parentDataProperty:"selector",rootData}))){
vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs16 === errors;
}
if(data.sessionAffinity !== undefined){
let data16 = data.sessionAffinity;
const _errs17 = errors;
if(!(validate3(data16, {instancePath:instancePath+"/sessionAffinity",parentData:data,parentDataProperty:"sessionAffinity",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs17 === errors;
}
if(data.sessionAffinityConfig !== undefined){
let data17 = data.sessionAffinityConfig;
const _errs18 = errors;
if(!(validate31(data17, {instancePath:instancePath+"/sessionAffinityConfig",parentData:data,parentDataProperty:"sessionAffinityConfig",rootData}))){
vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs18 === errors;
}
if(data.trafficDistribution !== undefined){
let data18 = data.trafficDistribution;
const _errs19 = errors;
if(!(validate3(data18, {instancePath:instancePath+"/trafficDistribution",parentData:data,parentDataProperty:"trafficDistribution",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs19 === errors;
}
if(data.type !== undefined){
let data19 = data.type;
const _errs20 = errors;
if(!(validate3(data19, {instancePath:instancePath+"/type",parentData:data,parentDataProperty:"type",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs20 === errors;
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
validate5.errors = vErrors;
return errors === 0;
}
