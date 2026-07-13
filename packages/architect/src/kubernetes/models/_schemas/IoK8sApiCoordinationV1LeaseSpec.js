import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate5;
const schema4 = {"properties":{"acquireTime":{"$ref":"CQdKRhSBkR4Z3P63Z8pFYxXxoFfmf705r67sy9NcAz0"},"holderIdentity":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"leaseDurationSeconds":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"leaseTransitions":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"preferredHolder":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"renewTime":{"$ref":"CQdKRhSBkR4Z3P63Z8pFYxXxoFfmf705r67sy9NcAz0"},"strategy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object","$id":"io.k8s.api.coordination.v1.LeaseSpec"};
const schema2 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime#"};
const schema3 = {};

import { validate as validate3 } from "./../../apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1MicroTime.js";


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


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.coordination.v1.LeaseSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.acquireTime !== undefined){
let data0 = data.acquireTime;
const _errs1 = errors;
if(!(validate2(data0, {instancePath:instancePath+"/acquireTime",parentData:data,parentDataProperty:"acquireTime",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.holderIdentity !== undefined){
let data1 = data.holderIdentity;
const _errs2 = errors;
if(!(validate1(data1, {instancePath:instancePath+"/holderIdentity",parentData:data,parentDataProperty:"holderIdentity",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.leaseDurationSeconds !== undefined){
let data2 = data.leaseDurationSeconds;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/leaseDurationSeconds",parentData:data,parentDataProperty:"leaseDurationSeconds",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.leaseTransitions !== undefined){
let data3 = data.leaseTransitions;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/leaseTransitions",parentData:data,parentDataProperty:"leaseTransitions",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.preferredHolder !== undefined){
let data4 = data.preferredHolder;
const _errs5 = errors;
if(!(validate1(data4, {instancePath:instancePath+"/preferredHolder",parentData:data,parentDataProperty:"preferredHolder",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.renewTime !== undefined){
let data5 = data.renewTime;
const _errs6 = errors;
if(!(validate2(data5, {instancePath:instancePath+"/renewTime",parentData:data,parentDataProperty:"renewTime",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.strategy !== undefined){
let data6 = data.strategy;
const _errs7 = errors;
if(!(validate1(data6, {instancePath:instancePath+"/strategy",parentData:data,parentDataProperty:"strategy",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
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
