/* @ts-self-types="./EphemeralContainer.d.ts" */
export const validate = validate8;
const schema6 = {"properties":{"args":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"command":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"env":{"$ref":"tOvEOomFPQ11DQqhf-xjojT7Ag-xLjHW5nGYKYeaI_I"},"envFrom":{"$ref":"gWXSiRLIsl74n2BsEeonPQPvsBAUaLSJnw2Y47GiYSA"},"image":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"imagePullPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"lifecycle":{"$ref":"k63Lwaih-8VRlDKNVGz_QAtT2RdonzODqIwyXWTsJaE"},"livenessProbe":{"$ref":"1tfqPVU_qoMsGFMyOVh2kv-2hebwFnlRcgt89nVIEYU"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"ports":{"$ref":"n15VzIDDlfdmQKpJlPY3rY7T9yzotLgvU-EKobeebzY"},"readinessProbe":{"$ref":"1tfqPVU_qoMsGFMyOVh2kv-2hebwFnlRcgt89nVIEYU"},"resizePolicy":{"$ref":"Xg8GzaHkGqFhhR0ur-iLjKitodM6swNUXK1TDviV0VM"},"resources":{"$ref":"YJRTEWaEMMAL2EbRfoDU21RN4Ki3OAwPZa2m9VFEL8U"},"restartPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"restartPolicyRules":{"$ref":"HKn41UBVos3nSzZdJ8G_RtYYFz5utDtj31-D8QZJ9IY"},"securityContext":{"$ref":"X_uPdWt3XYGe8rFu7uPRzGQB_kqHFe5JpZoDpeC38SU"},"startupProbe":{"$ref":"1tfqPVU_qoMsGFMyOVh2kv-2hebwFnlRcgt89nVIEYU"},"stdin":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"stdinOnce":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"targetContainerName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"terminationMessagePath":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"terminationMessagePolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"tty":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"volumeDevices":{"$ref":"u28fm44SLPyNkJk3LYIppL99gVuc9lsYfdGIoJeWfBk"},"volumeMounts":{"$ref":"usBZjbtoQnfcayV0LpyAqd7GDbxbzL1_cSYXig8l_pY"},"workingDir":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"required":["name"],"type":"object","$id":"io.k8s.api.core.v1.EphemeralContainer"};
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

const schema7 = {"items":{"$ref":"QzFRAIo_nv_TBC6v8zxAnbUCU2-la9kRGor-AR8mNNU"},"type":"array","nullable":true};
const schema8 = {"$ref":"io.k8s.api.core.v1.EnvVar#"};
const schema9 = {};

import { validate as validate13 } from "././EnvVar.js";


function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate13(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
validate12.errors = vErrors;
return errors === 0;
}


function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate12(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
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
validate11.errors = vErrors;
return errors === 0;
}

const schema10 = {"items":{"$ref":"ZWu1cv3ZUUWRw9JJu_3yf9d1BSNgse12atlYhCeLZcg"},"type":"array","nullable":true};
const schema11 = {"$ref":"io.k8s.api.core.v1.EnvFromSource#"};
const schema12 = {};

import { validate as validate19 } from "././EnvFromSource.js";


function validate18(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate19(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
validate18.errors = vErrors;
return errors === 0;
}


function validate17(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate18(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate18.errors : vErrors.concat(validate18.errors);
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
validate17.errors = vErrors;
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

const schema13 = {"nullableRef":"io.k8s.api.core.v1.Lifecycle#"};
const schema14 = {};

import { validate as validate26 } from "././Lifecycle.js";


function validate25(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate26(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
errors = vErrors.length;
}
else {
}
}
validate25.errors = vErrors;
return errors === 0;
}

const schema3 = {"nullableRef":"io.k8s.api.core.v1.Probe#"};
const schema4 = {};

import { validate as validate5 } from "././Probe.js";


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate5(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
}
validate4.errors = vErrors;
return errors === 0;
}

const schema15 = {"items":{"$ref":"s40PBgTzQ-hUNGYBWwoCk1u4XFaZtn5rgPk1tfAlGXg"},"type":"array","nullable":true};
const schema16 = {"$ref":"io.k8s.api.core.v1.ContainerPort#"};
const schema17 = {};

import { validate as validate33 } from "././ContainerPort.js";


function validate32(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate33(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
errors = vErrors.length;
}
else {
}
validate32.errors = vErrors;
return errors === 0;
}


function validate31(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate32(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
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
validate31.errors = vErrors;
return errors === 0;
}

const schema18 = {"items":{"$ref":"TfSvAYFROMFXNmX_Ie5QyvCc2QjpaEodwHTGmDmEQQU"},"type":"array","nullable":true};
const schema19 = {"$ref":"io.k8s.api.core.v1.ContainerResizePolicy#"};
const schema20 = {};

import { validate as validate40 } from "././ContainerResizePolicy.js";


function validate39(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate40(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
errors = vErrors.length;
}
else {
}
validate39.errors = vErrors;
return errors === 0;
}


function validate38(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate39(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
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
validate38.errors = vErrors;
return errors === 0;
}

const schema21 = {"nullableRef":"io.k8s.api.core.v1.ResourceRequirements#"};
const schema22 = {};

import { validate as validate45 } from "././ResourceRequirements.js";


function validate44(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate45(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
errors = vErrors.length;
}
else {
}
}
validate44.errors = vErrors;
return errors === 0;
}

const schema23 = {"items":{"$ref":"V4rmO1BKA1mSaNJSOEqcYgkVrZLCvZtH61sp6kgGTEY"},"type":"array","nullable":true};
const schema24 = {"$ref":"io.k8s.api.core.v1.ContainerRestartRule#"};
const schema25 = {};

import { validate as validate51 } from "././ContainerRestartRule.js";


function validate50(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate51(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
errors = vErrors.length;
}
else {
}
validate50.errors = vErrors;
return errors === 0;
}


function validate49(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate50(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
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
validate49.errors = vErrors;
return errors === 0;
}

const schema26 = {"nullableRef":"io.k8s.api.core.v1.SecurityContext#"};
const schema27 = {};

import { validate as validate56 } from "././SecurityContext.js";


function validate55(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate56(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate56.errors : vErrors.concat(validate56.errors);
errors = vErrors.length;
}
else {
}
}
validate55.errors = vErrors;
return errors === 0;
}

const schema5 = {"type":"boolean","nullable":true};

function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate7.errors = vErrors;
return errors === 0;
}

const schema28 = {"items":{"$ref":"pJj6PkTg7zDSyjmGSnKe4DkVxtbN4sqp8daIfcSn4Mk"},"type":"array","nullable":true};
const schema29 = {"$ref":"io.k8s.api.core.v1.VolumeDevice#"};
const schema30 = {};

import { validate as validate68 } from "././VolumeDevice.js";


function validate67(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate68(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
errors = vErrors.length;
}
else {
}
validate67.errors = vErrors;
return errors === 0;
}


function validate66(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate67(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
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
validate66.errors = vErrors;
return errors === 0;
}

const schema31 = {"items":{"$ref":"CqxuoDZ3sl4nz8o30Z154zaxyQUlCsC5LeQpnKUOcpA"},"type":"array","nullable":true};
const schema32 = {"$ref":"io.k8s.api.core.v1.VolumeMount#"};
const schema33 = {};

import { validate as validate74 } from "././VolumeMount.js";


function validate73(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate74(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
errors = vErrors.length;
}
else {
}
validate73.errors = vErrors;
return errors === 0;
}


function validate72(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate73(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
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
validate72.errors = vErrors;
return errors === 0;
}


function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.EphemeralContainer" */;
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
if(data.args !== undefined){
let data0 = data.args;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/args",parentData:data,parentDataProperty:"args",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.command !== undefined){
let data1 = data.command;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/command",parentData:data,parentDataProperty:"command",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.env !== undefined){
let data2 = data.env;
const _errs3 = errors;
if(!(validate11(data2, {instancePath:instancePath+"/env",parentData:data,parentDataProperty:"env",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.envFrom !== undefined){
let data3 = data.envFrom;
const _errs4 = errors;
if(!(validate17(data3, {instancePath:instancePath+"/envFrom",parentData:data,parentDataProperty:"envFrom",rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.image !== undefined){
let data4 = data.image;
const _errs5 = errors;
if(!(validate3(data4, {instancePath:instancePath+"/image",parentData:data,parentDataProperty:"image",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.imagePullPolicy !== undefined){
let data5 = data.imagePullPolicy;
const _errs6 = errors;
if(!(validate3(data5, {instancePath:instancePath+"/imagePullPolicy",parentData:data,parentDataProperty:"imagePullPolicy",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.lifecycle !== undefined){
let data6 = data.lifecycle;
const _errs7 = errors;
if(!(validate25(data6, {instancePath:instancePath+"/lifecycle",parentData:data,parentDataProperty:"lifecycle",rootData}))){
vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.livenessProbe !== undefined){
let data7 = data.livenessProbe;
const _errs8 = errors;
if(!(validate4(data7, {instancePath:instancePath+"/livenessProbe",parentData:data,parentDataProperty:"livenessProbe",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.name !== undefined){
let data8 = data.name;
const _errs9 = errors;
if(!(validate1(data8, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.ports !== undefined){
let data9 = data.ports;
const _errs10 = errors;
if(!(validate31(data9, {instancePath:instancePath+"/ports",parentData:data,parentDataProperty:"ports",rootData}))){
vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.readinessProbe !== undefined){
let data10 = data.readinessProbe;
const _errs11 = errors;
if(!(validate4(data10, {instancePath:instancePath+"/readinessProbe",parentData:data,parentDataProperty:"readinessProbe",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.resizePolicy !== undefined){
let data11 = data.resizePolicy;
const _errs12 = errors;
if(!(validate38(data11, {instancePath:instancePath+"/resizePolicy",parentData:data,parentDataProperty:"resizePolicy",rootData}))){
vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.resources !== undefined){
let data12 = data.resources;
const _errs13 = errors;
if(!(validate44(data12, {instancePath:instancePath+"/resources",parentData:data,parentDataProperty:"resources",rootData}))){
vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.restartPolicy !== undefined){
let data13 = data.restartPolicy;
const _errs14 = errors;
if(!(validate3(data13, {instancePath:instancePath+"/restartPolicy",parentData:data,parentDataProperty:"restartPolicy",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.restartPolicyRules !== undefined){
let data14 = data.restartPolicyRules;
const _errs15 = errors;
if(!(validate49(data14, {instancePath:instancePath+"/restartPolicyRules",parentData:data,parentDataProperty:"restartPolicyRules",rootData}))){
vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.securityContext !== undefined){
let data15 = data.securityContext;
const _errs16 = errors;
if(!(validate55(data15, {instancePath:instancePath+"/securityContext",parentData:data,parentDataProperty:"securityContext",rootData}))){
vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs16 === errors;
}
if(data.startupProbe !== undefined){
let data16 = data.startupProbe;
const _errs17 = errors;
if(!(validate4(data16, {instancePath:instancePath+"/startupProbe",parentData:data,parentDataProperty:"startupProbe",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs17 === errors;
}
if(data.stdin !== undefined){
let data17 = data.stdin;
const _errs18 = errors;
if(!(validate7(data17, {instancePath:instancePath+"/stdin",parentData:data,parentDataProperty:"stdin",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs18 === errors;
}
if(data.stdinOnce !== undefined){
let data18 = data.stdinOnce;
const _errs19 = errors;
if(!(validate7(data18, {instancePath:instancePath+"/stdinOnce",parentData:data,parentDataProperty:"stdinOnce",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs19 === errors;
}
if(data.targetContainerName !== undefined){
let data19 = data.targetContainerName;
const _errs20 = errors;
if(!(validate3(data19, {instancePath:instancePath+"/targetContainerName",parentData:data,parentDataProperty:"targetContainerName",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs20 === errors;
}
if(data.terminationMessagePath !== undefined){
let data20 = data.terminationMessagePath;
const _errs21 = errors;
if(!(validate3(data20, {instancePath:instancePath+"/terminationMessagePath",parentData:data,parentDataProperty:"terminationMessagePath",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs21 === errors;
}
if(data.terminationMessagePolicy !== undefined){
let data21 = data.terminationMessagePolicy;
const _errs22 = errors;
if(!(validate3(data21, {instancePath:instancePath+"/terminationMessagePolicy",parentData:data,parentDataProperty:"terminationMessagePolicy",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs22 === errors;
}
if(data.tty !== undefined){
let data22 = data.tty;
const _errs23 = errors;
if(!(validate7(data22, {instancePath:instancePath+"/tty",parentData:data,parentDataProperty:"tty",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs23 === errors;
}
if(data.volumeDevices !== undefined){
let data23 = data.volumeDevices;
const _errs24 = errors;
if(!(validate66(data23, {instancePath:instancePath+"/volumeDevices",parentData:data,parentDataProperty:"volumeDevices",rootData}))){
vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs24 === errors;
}
if(data.volumeMounts !== undefined){
let data24 = data.volumeMounts;
const _errs25 = errors;
if(!(validate72(data24, {instancePath:instancePath+"/volumeMounts",parentData:data,parentDataProperty:"volumeMounts",rootData}))){
vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs25 === errors;
}
if(data.workingDir !== undefined){
let data25 = data.workingDir;
const _errs26 = errors;
if(!(validate3(data25, {instancePath:instancePath+"/workingDir",parentData:data,parentDataProperty:"workingDir",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs26 === errors;
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
validate8.errors = vErrors;
return errors === 0;
}
