import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate1;
const schema1 = {"properties":{"disruptionMode":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"podGroupTemplateRef":{"$ref":"1eK-_3a_IL87A_hVmUPCMj7qPUTXAJraAh8BVGyOwLc"},"priority":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"priorityClassName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"resourceClaims":{"$ref":"Tv2NkQ_08q6eOPaHu1ECrjKPTIFnuxEOxOx60XzavPs"},"schedulingConstraints":{"$ref":"Po_7Hp4ym6qgyI6BttsUPICy93rypfPPiAp-N-b1dMI"},"schedulingPolicy":{"$ref":"m0DpFJfofhz536S6J5YHHJ3qQpg5kzge4wVx7rTrI7U"}},"required":["schedulingPolicy"],"type":"object","$id":"io.k8s.api.scheduling.v1alpha2.PodGroupSpec"};
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

const schema2 = {"nullableRef":"io.k8s.api.scheduling.v1alpha2.PodGroupTemplateReference#"};
const schema3 = {};

import { validate as validate4 } from "./IoK8sApiSchedulingV1alpha2PodGroupTemplateReference.js";


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate4(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
}
validate3.errors = vErrors;
return errors === 0;
}

const schema4 = {"format":"int32","type":"integer","nullable":true};
const formats0 = formats.int32;

function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate7.errors = vErrors;
return errors === 0;
}

const schema5 = {"items":{"$ref":"RhsWliT3NpRtWvcxWvVnLeQ-MBWT-0VX_EJOfjoBSI8"},"type":"array","nullable":true};
const schema6 = {"$ref":"io.k8s.api.scheduling.v1alpha2.PodGroupResourceClaim#"};
const schema7 = {};

import { validate as validate12 } from "./IoK8sApiSchedulingV1alpha2PodGroupResourceClaim.js";


function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate12(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
validate11.errors = vErrors;
return errors === 0;
}


function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate11(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
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
validate10.errors = vErrors;
return errors === 0;
}

const schema8 = {"nullableRef":"io.k8s.api.scheduling.v1alpha2.PodGroupSchedulingConstraints#"};
const schema9 = {};

import { validate as validate17 } from "./IoK8sApiSchedulingV1alpha2PodGroupSchedulingConstraints.js";


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

const schema10 = {"$ref":"io.k8s.api.scheduling.v1alpha2.PodGroupSchedulingPolicy#"};
const schema11 = {};

import { validate as validate21 } from "./IoK8sApiSchedulingV1alpha2PodGroupSchedulingPolicy.js";


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


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.scheduling.v1alpha2.PodGroupSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.schedulingPolicy === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "schedulingPolicy"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.disruptionMode !== undefined){
let data0 = data.disruptionMode;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/disruptionMode",parentData:data,parentDataProperty:"disruptionMode",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.podGroupTemplateRef !== undefined){
let data1 = data.podGroupTemplateRef;
const _errs2 = errors;
if(!(validate3(data1, {instancePath:instancePath+"/podGroupTemplateRef",parentData:data,parentDataProperty:"podGroupTemplateRef",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.priority !== undefined){
let data2 = data.priority;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/priority",parentData:data,parentDataProperty:"priority",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.priorityClassName !== undefined){
let data3 = data.priorityClassName;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/priorityClassName",parentData:data,parentDataProperty:"priorityClassName",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.resourceClaims !== undefined){
let data4 = data.resourceClaims;
const _errs5 = errors;
if(!(validate10(data4, {instancePath:instancePath+"/resourceClaims",parentData:data,parentDataProperty:"resourceClaims",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.schedulingConstraints !== undefined){
let data5 = data.schedulingConstraints;
const _errs6 = errors;
if(!(validate16(data5, {instancePath:instancePath+"/schedulingConstraints",parentData:data,parentDataProperty:"schedulingConstraints",rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.schedulingPolicy !== undefined){
let data6 = data.schedulingPolicy;
const _errs7 = errors;
if(!(validate20(data6, {instancePath:instancePath+"/schedulingPolicy",parentData:data,parentDataProperty:"schedulingPolicy",rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
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
validate1.errors = vErrors;
return errors === 0;
}
