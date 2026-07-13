/* @ts-self-types="./ISCSIPersistentVolumeSource.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate3;
const schema3 = {"properties":{"chapAuthDiscovery":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"chapAuthSession":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"fsType":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"initiatorName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"iqn":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"iscsiInterface":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"lun":{"$ref":"6VbGrbfqnPJ4dMmNewHbRn4M59VZOmu0uhV1edBN8qE"},"portals":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"readOnly":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"secretRef":{"$ref":"1a3NqiktqyZHHY3Qk2TC-_08DZCxXEI_qoSZ_ClP6qA"},"targetPortal":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["targetPortal","iqn","lun"],"type":"object","$id":"io.k8s.api.core.v1.ISCSIPersistentVolumeSource"};
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

const schema2 = {"type":"string"};

function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate2.errors = vErrors;
return errors === 0;
}

const schema4 = {"format":"int32","type":"integer"};
const formats0 = formats.int32;

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(((typeof data == "number") && (!(data % 1) && !isNaN(data))) && (isFinite(data)))){
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
validate10.errors = vErrors;
return errors === 0;
}

const schema5 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array","nullable":true};

function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate12.errors = vErrors;
return errors === 0;
}

const schema6 = {"nullableRef":"io.k8s.api.core.v1.SecretReference#"};
const schema7 = {};

import { validate as validate17 } from "././SecretReference.js";


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


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.ISCSIPersistentVolumeSource" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.targetPortal === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "targetPortal"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.iqn === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "iqn"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.lun === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "lun"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.chapAuthDiscovery !== undefined){
let data0 = data.chapAuthDiscovery;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/chapAuthDiscovery",parentData:data,parentDataProperty:"chapAuthDiscovery",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.chapAuthSession !== undefined){
let data1 = data.chapAuthSession;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/chapAuthSession",parentData:data,parentDataProperty:"chapAuthSession",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.fsType !== undefined){
let data2 = data.fsType;
const _errs3 = errors;
if(!(validate1(data2, {instancePath:instancePath+"/fsType",parentData:data,parentDataProperty:"fsType",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.initiatorName !== undefined){
let data3 = data.initiatorName;
const _errs4 = errors;
if(!(validate1(data3, {instancePath:instancePath+"/initiatorName",parentData:data,parentDataProperty:"initiatorName",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.iqn !== undefined){
let data4 = data.iqn;
const _errs5 = errors;
if(!(validate2(data4, {instancePath:instancePath+"/iqn",parentData:data,parentDataProperty:"iqn",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.iscsiInterface !== undefined){
let data5 = data.iscsiInterface;
const _errs6 = errors;
if(!(validate1(data5, {instancePath:instancePath+"/iscsiInterface",parentData:data,parentDataProperty:"iscsiInterface",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.lun !== undefined){
let data6 = data.lun;
const _errs7 = errors;
if(!(validate10(data6, {instancePath:instancePath+"/lun",parentData:data,parentDataProperty:"lun",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.portals !== undefined){
let data7 = data.portals;
const _errs8 = errors;
if(!(validate12(data7, {instancePath:instancePath+"/portals",parentData:data,parentDataProperty:"portals",rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.readOnly !== undefined){
let data8 = data.readOnly;
const _errs9 = errors;
if(!(validate0(data8, {instancePath:instancePath+"/readOnly",parentData:data,parentDataProperty:"readOnly",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.secretRef !== undefined){
let data9 = data.secretRef;
const _errs10 = errors;
if(!(validate16(data9, {instancePath:instancePath+"/secretRef",parentData:data,parentDataProperty:"secretRef",rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.targetPortal !== undefined){
let data10 = data.targetPortal;
const _errs11 = errors;
if(!(validate2(data10, {instancePath:instancePath+"/targetPortal",parentData:data,parentDataProperty:"targetPortal",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
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
validate3.errors = vErrors;
return errors === 0;
}
