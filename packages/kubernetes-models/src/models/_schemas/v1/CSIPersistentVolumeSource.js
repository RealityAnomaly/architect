/* @ts-self-types="./CSIPersistentVolumeSource.d.ts" */
export const validate = validate4;
const schema3 = {"properties":{"controllerExpandSecretRef":{"$ref":"1a3NqiktqyZHHY3Qk2TC-_08DZCxXEI_qoSZ_ClP6qA"},"controllerPublishSecretRef":{"$ref":"1a3NqiktqyZHHY3Qk2TC-_08DZCxXEI_qoSZ_ClP6qA"},"driver":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"fsType":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"nodeExpandSecretRef":{"$ref":"1a3NqiktqyZHHY3Qk2TC-_08DZCxXEI_qoSZ_ClP6qA"},"nodePublishSecretRef":{"$ref":"1a3NqiktqyZHHY3Qk2TC-_08DZCxXEI_qoSZ_ClP6qA"},"nodeStageSecretRef":{"$ref":"1a3NqiktqyZHHY3Qk2TC-_08DZCxXEI_qoSZ_ClP6qA"},"readOnly":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"volumeAttributes":{"$ref":"Ul_dhUdbb_DarDhfw0mKkpjzZdc0vNqkGhUAaKt2b7M"},"volumeHandle":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["driver","volumeHandle"],"type":"object","$id":"io.k8s.api.core.v1.CSIPersistentVolumeSource"};
const schema0 = {"nullableRef":"io.k8s.api.core.v1.SecretReference#"};
const schema1 = {};

import { validate as validate1 } from "././SecretReference.js";


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

const schema2 = {"type":"string"};

function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate3.errors = vErrors;
return errors === 0;
}

const schema4 = {"type":"string","nullable":true};

function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate8.errors = vErrors;
return errors === 0;
}

const schema5 = {"type":"boolean","nullable":true};

function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate13.errors = vErrors;
return errors === 0;
}

const schema6 = {"additionalProperties":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"object","nullable":true};

function validate15(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate3(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate15.errors = vErrors;
return errors === 0;
}


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.CSIPersistentVolumeSource" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.driver === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "driver"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.volumeHandle === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "volumeHandle"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.controllerExpandSecretRef !== undefined){
let data0 = data.controllerExpandSecretRef;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/controllerExpandSecretRef",parentData:data,parentDataProperty:"controllerExpandSecretRef",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.controllerPublishSecretRef !== undefined){
let data1 = data.controllerPublishSecretRef;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/controllerPublishSecretRef",parentData:data,parentDataProperty:"controllerPublishSecretRef",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.driver !== undefined){
let data2 = data.driver;
const _errs3 = errors;
if(!(validate3(data2, {instancePath:instancePath+"/driver",parentData:data,parentDataProperty:"driver",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.fsType !== undefined){
let data3 = data.fsType;
const _errs4 = errors;
if(!(validate8(data3, {instancePath:instancePath+"/fsType",parentData:data,parentDataProperty:"fsType",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.nodeExpandSecretRef !== undefined){
let data4 = data.nodeExpandSecretRef;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/nodeExpandSecretRef",parentData:data,parentDataProperty:"nodeExpandSecretRef",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.nodePublishSecretRef !== undefined){
let data5 = data.nodePublishSecretRef;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/nodePublishSecretRef",parentData:data,parentDataProperty:"nodePublishSecretRef",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.nodeStageSecretRef !== undefined){
let data6 = data.nodeStageSecretRef;
const _errs7 = errors;
if(!(validate0(data6, {instancePath:instancePath+"/nodeStageSecretRef",parentData:data,parentDataProperty:"nodeStageSecretRef",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.readOnly !== undefined){
let data7 = data.readOnly;
const _errs8 = errors;
if(!(validate13(data7, {instancePath:instancePath+"/readOnly",parentData:data,parentDataProperty:"readOnly",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.volumeAttributes !== undefined){
let data8 = data.volumeAttributes;
const _errs9 = errors;
if(!(validate15(data8, {instancePath:instancePath+"/volumeAttributes",parentData:data,parentDataProperty:"volumeAttributes",rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.volumeHandle !== undefined){
let data9 = data.volumeHandle;
const _errs10 = errors;
if(!(validate3(data9, {instancePath:instancePath+"/volumeHandle",parentData:data,parentDataProperty:"volumeHandle",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
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
validate4.errors = vErrors;
return errors === 0;
}
