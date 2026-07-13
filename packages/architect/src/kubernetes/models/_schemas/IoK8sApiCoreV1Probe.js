import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate1;
const schema1 = {"properties":{"exec":{"$ref":"hJotIeDhvXV7VSz7omyh89KUC9oqHzVebnUkXVEHC3o"},"failureThreshold":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"grpc":{"$ref":"DIes6-3unOCRGVht8myiKwSuwYoxR-E54kvc_wdHa9I"},"httpGet":{"$ref":"HlUNkly6Uznho8cIjvvt6NTv6KsWI7VG1FQxJrCkMG4"},"initialDelaySeconds":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"periodSeconds":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"successThreshold":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"tcpSocket":{"$ref":"LEZyUF8K1uFnP8xWMGULYYLdoLDXGbIvN5xdYRR8EZU"},"terminationGracePeriodSeconds":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"timeoutSeconds":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"}},"type":"object","$id":"io.k8s.api.core.v1.Probe"};
const schema2 = {"nullableRef":"io.k8s.api.core.v1.ExecAction#"};
const schema3 = {};

import { validate as validate3 } from "./IoK8sApiCoreV1ExecAction.js";


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

const schema4 = {"nullableRef":"io.k8s.api.core.v1.GRPCAction#"};
const schema5 = {};

import { validate as validate8 } from "./IoK8sApiCoreV1GRPCAction.js";


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate8(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
}
validate7.errors = vErrors;
return errors === 0;
}

const schema6 = {"nullableRef":"io.k8s.api.core.v1.HTTPGetAction#"};
const schema7 = {};

import { validate as validate12 } from "./IoK8sApiCoreV1HTTPGetAction.js";


function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate12(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
}
validate11.errors = vErrors;
return errors === 0;
}

const schema8 = {"nullableRef":"io.k8s.api.core.v1.TCPSocketAction#"};
const schema9 = {};

import { validate as validate19 } from "./IoK8sApiCoreV1TCPSocketAction.js";


function validate18(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate19(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
}
validate18.errors = vErrors;
return errors === 0;
}

const schema10 = {"format":"int64","type":"integer","nullable":true};
const formats2 = formats.int64;

function validate22(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate22.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.Probe" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.exec !== undefined){
let data0 = data.exec;
const _errs1 = errors;
if(!(validate2(data0, {instancePath:instancePath+"/exec",parentData:data,parentDataProperty:"exec",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.failureThreshold !== undefined){
let data1 = data.failureThreshold;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/failureThreshold",parentData:data,parentDataProperty:"failureThreshold",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.grpc !== undefined){
let data2 = data.grpc;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/grpc",parentData:data,parentDataProperty:"grpc",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.httpGet !== undefined){
let data3 = data.httpGet;
const _errs4 = errors;
if(!(validate11(data3, {instancePath:instancePath+"/httpGet",parentData:data,parentDataProperty:"httpGet",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.initialDelaySeconds !== undefined){
let data4 = data.initialDelaySeconds;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/initialDelaySeconds",parentData:data,parentDataProperty:"initialDelaySeconds",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.periodSeconds !== undefined){
let data5 = data.periodSeconds;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/periodSeconds",parentData:data,parentDataProperty:"periodSeconds",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.successThreshold !== undefined){
let data6 = data.successThreshold;
const _errs7 = errors;
if(!(validate0(data6, {instancePath:instancePath+"/successThreshold",parentData:data,parentDataProperty:"successThreshold",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.tcpSocket !== undefined){
let data7 = data.tcpSocket;
const _errs8 = errors;
if(!(validate18(data7, {instancePath:instancePath+"/tcpSocket",parentData:data,parentDataProperty:"tcpSocket",rootData}))){
vErrors = vErrors === null ? validate18.errors : vErrors.concat(validate18.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.terminationGracePeriodSeconds !== undefined){
let data8 = data.terminationGracePeriodSeconds;
const _errs9 = errors;
if(!(validate22(data8, {instancePath:instancePath+"/terminationGracePeriodSeconds",parentData:data,parentDataProperty:"terminationGracePeriodSeconds",rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.timeoutSeconds !== undefined){
let data9 = data.timeoutSeconds;
const _errs10 = errors;
if(!(validate0(data9, {instancePath:instancePath+"/timeoutSeconds",parentData:data,parentDataProperty:"timeoutSeconds",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
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
validate1.errors = vErrors;
return errors === 0;
}
