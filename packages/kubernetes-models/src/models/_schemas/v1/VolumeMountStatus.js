/* @ts-self-types="./VolumeMountStatus.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"mountPath":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"readOnly":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"recursiveReadOnly":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"volumeStatus":{"$ref":"vovCO9Mj9E-GK71fb0XmXMDowmJo4xXzCkI23KIDnzw"}},"required":["name","mountPath"],"type":"object","$id":"io.k8s.api.core.v1.VolumeMountStatus"};
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

const schema2 = {"type":"boolean","nullable":true};

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

const schema3 = {"type":"string","nullable":true};

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

const schema4 = {"nullableRef":"io.k8s.api.core.v1.VolumeStatus#"};
const schema5 = {};

import { validate as validate9 } from "././VolumeStatus.js";


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


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.VolumeMountStatus" */;
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
if(data.mountPath === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "mountPath"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.mountPath !== undefined){
let data0 = data.mountPath;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/mountPath",parentData:data,parentDataProperty:"mountPath",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.name !== undefined){
let data1 = data.name;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.readOnly !== undefined){
let data2 = data.readOnly;
const _errs3 = errors;
if(!(validate4(data2, {instancePath:instancePath+"/readOnly",parentData:data,parentDataProperty:"readOnly",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.recursiveReadOnly !== undefined){
let data3 = data.recursiveReadOnly;
const _errs4 = errors;
if(!(validate6(data3, {instancePath:instancePath+"/recursiveReadOnly",parentData:data,parentDataProperty:"recursiveReadOnly",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.volumeStatus !== undefined){
let data4 = data.volumeStatus;
const _errs5 = errors;
if(!(validate8(data4, {instancePath:instancePath+"/volumeStatus",parentData:data,parentDataProperty:"volumeStatus",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
}
else {
const err2 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
validate1.errors = vErrors;
return errors === 0;
}
