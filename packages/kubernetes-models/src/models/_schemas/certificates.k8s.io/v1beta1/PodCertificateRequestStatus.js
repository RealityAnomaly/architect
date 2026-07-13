/* @ts-self-types="./PodCertificateRequestStatus.d.ts" */
export const validate = validate3;
const schema2 = {"properties":{"beginRefreshAt":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"},"certificateChain":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"conditions":{"$ref":"jI7gN-jH9FiRLjopJCUTgArdnLwDtZcYfDbNHkOZBp0"},"notAfter":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"},"notBefore":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"}},"type":"object","$id":"io.k8s.api.certificates.v1beta1.PodCertificateRequestStatus"};
const schema0 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.Time#"};
const schema1 = {};

import { validate as validate1 } from "./../../../../apimachinery/_schemas/apis/meta/v1/Time.js";


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate1(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
}
validate0.errors = vErrors;
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

const schema4 = {"items":{"$ref":"Q41fcN0GrLvJ1ci-jzMgOiDiV3djUgCqpjN1EJKiJPM"},"type":"array","nullable":true};
const schema5 = {"$ref":"io.k8s.apimachinery.pkg.apis.meta.v1.Condition#"};
const schema6 = {};

import { validate as validate9 } from "./../../../../apimachinery/_schemas/apis/meta/v1/Condition.js";


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
if(!(validate8(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
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
validate7.errors = vErrors;
return errors === 0;
}


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.certificates.v1beta1.PodCertificateRequestStatus" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.beginRefreshAt !== undefined){
let data0 = data.beginRefreshAt;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/beginRefreshAt",parentData:data,parentDataProperty:"beginRefreshAt",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.certificateChain !== undefined){
let data1 = data.certificateChain;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/certificateChain",parentData:data,parentDataProperty:"certificateChain",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.conditions !== undefined){
let data2 = data.conditions;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/conditions",parentData:data,parentDataProperty:"conditions",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.notAfter !== undefined){
let data3 = data.notAfter;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/notAfter",parentData:data,parentDataProperty:"notAfter",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.notBefore !== undefined){
let data4 = data.notBefore;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/notBefore",parentData:data,parentDataProperty:"notBefore",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
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
validate3.errors = vErrors;
return errors === 0;
}
