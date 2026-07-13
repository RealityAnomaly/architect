/* @ts-self-types="./LeaseCandidateSpec.d.ts" */
export const validate = validate4;
const schema3 = {"properties":{"binaryVersion":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"emulationVersion":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"leaseName":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"pingTime":{"$ref":"CQdKRhSBkR4Z3P63Z8pFYxXxoFfmf705r67sy9NcAz0"},"renewTime":{"$ref":"CQdKRhSBkR4Z3P63Z8pFYxXxoFfmf705r67sy9NcAz0"},"strategy":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["leaseName","binaryVersion","strategy"],"type":"object","$id":"io.k8s.api.coordination.v1alpha2.LeaseCandidateSpec"};
const schema0 = {"type":"string"};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate0.errors = vErrors;
return errors === 0;
}

const schema4 = {"type":"string","nullable":true};

function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate6.errors = vErrors;
return errors === 0;
}

const schema1 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime#"};
const schema2 = {};

import { validate as validate2 } from "./../../../../apimachinery/_schemas/apis/meta/v1/MicroTime.js";


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate2(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
}
validate1.errors = vErrors;
return errors === 0;
}


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.coordination.v1alpha2.LeaseCandidateSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.leaseName === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "leaseName"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.binaryVersion === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "binaryVersion"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.strategy === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "strategy"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.binaryVersion !== undefined){
let data0 = data.binaryVersion;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/binaryVersion",parentData:data,parentDataProperty:"binaryVersion",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.emulationVersion !== undefined){
let data1 = data.emulationVersion;
const _errs2 = errors;
if(!(validate6(data1, {instancePath:instancePath+"/emulationVersion",parentData:data,parentDataProperty:"emulationVersion",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.leaseName !== undefined){
let data2 = data.leaseName;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/leaseName",parentData:data,parentDataProperty:"leaseName",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.pingTime !== undefined){
let data3 = data.pingTime;
const _errs4 = errors;
if(!(validate1(data3, {instancePath:instancePath+"/pingTime",parentData:data,parentDataProperty:"pingTime",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.renewTime !== undefined){
let data4 = data.renewTime;
const _errs5 = errors;
if(!(validate1(data4, {instancePath:instancePath+"/renewTime",parentData:data,parentDataProperty:"renewTime",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.strategy !== undefined){
let data5 = data.strategy;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/strategy",parentData:data,parentDataProperty:"strategy",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
}
else {
const err3 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
validate4.errors = vErrors;
return errors === 0;
}
