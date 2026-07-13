/* @ts-self-types="./PodSecurityContext.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate2;
const schema2 = {"properties":{"appArmorProfile":{"$ref":"Tx9NX2y5Q2psZU5V0eTm-EtTEVDtSNbaiyN_FmeiiEQ"},"fsGroup":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"fsGroupChangePolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"runAsGroup":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"runAsNonRoot":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"runAsUser":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"seLinuxChangePolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"seLinuxOptions":{"$ref":"Ws2Xy2YELmRVB0VQESDuPP2DGdNZOe9n7LNUeX7t1-M"},"seccompProfile":{"$ref":"usZtUa7J5VNXPgn1HkP20PSCX8rPLoYjdEgnYnp0tLY"},"supplementalGroups":{"$ref":"61CuU5PR0DTXgf6CSVY2YGQyMC0xseKwOl9CPTT5SMw"},"supplementalGroupsPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"sysctls":{"$ref":"LUcd-PoVZHcaiU2nENR6P_2MYaGvqt_DeEkwrnVt5Ng"},"windowsOptions":{"$ref":"pqdN8oVLyoeNYziBdnYlCUfB8ct0pC-7JRO58IQjook"}},"type":"object","$id":"io.k8s.api.core.v1.PodSecurityContext"};
const schema3 = {"nullableRef":"io.k8s.api.core.v1.AppArmorProfile#"};
const schema4 = {};

import { validate as validate4 } from "././AppArmorProfile.js";


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

const schema0 = {"format":"int64","type":"integer","nullable":true};
const formats0 = formats.int64;

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

const schema5 = {"type":"boolean","nullable":true};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate10.errors = vErrors;
return errors === 0;
}

const schema6 = {"nullableRef":"io.k8s.api.core.v1.SELinuxOptions#"};
const schema7 = {};

import { validate as validate15 } from "././SELinuxOptions.js";


function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate15(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
}
validate14.errors = vErrors;
return errors === 0;
}

const schema8 = {"nullableRef":"io.k8s.api.core.v1.SeccompProfile#"};
const schema9 = {};

import { validate as validate19 } from "././SeccompProfile.js";


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

const schema10 = {"items":{"$ref":"0YQm7z5aN2fg7S8XlbxrquRU6pdIr97uCbtQYyjv3S4"},"type":"array","nullable":true};
const schema11 = {"format":"int64","type":"integer"};

function validate23(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate23.errors = vErrors;
return errors === 0;
}


function validate22(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate23(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
validate22.errors = vErrors;
return errors === 0;
}

const schema12 = {"items":{"$ref":"nIKwqu8iGZU-g6q9lI1utzUg1VIMSA6OC3HGVCVUubo"},"type":"array","nullable":true};
const schema13 = {"$ref":"io.k8s.api.core.v1.Sysctl#"};
const schema14 = {};

import { validate as validate29 } from "././Sysctl.js";


function validate28(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate29(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
errors = vErrors.length;
}
else {
}
validate28.errors = vErrors;
return errors === 0;
}


function validate27(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate28(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
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
validate27.errors = vErrors;
return errors === 0;
}

const schema15 = {"nullableRef":"io.k8s.api.core.v1.WindowsSecurityContextOptions#"};
const schema16 = {};

import { validate as validate34 } from "././WindowsSecurityContextOptions.js";


function validate33(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate34(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
errors = vErrors.length;
}
else {
}
}
validate33.errors = vErrors;
return errors === 0;
}


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.PodSecurityContext" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.appArmorProfile !== undefined){
let data0 = data.appArmorProfile;
const _errs1 = errors;
if(!(validate3(data0, {instancePath:instancePath+"/appArmorProfile",parentData:data,parentDataProperty:"appArmorProfile",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.fsGroup !== undefined){
let data1 = data.fsGroup;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/fsGroup",parentData:data,parentDataProperty:"fsGroup",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.fsGroupChangePolicy !== undefined){
let data2 = data.fsGroupChangePolicy;
const _errs3 = errors;
if(!(validate1(data2, {instancePath:instancePath+"/fsGroupChangePolicy",parentData:data,parentDataProperty:"fsGroupChangePolicy",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.runAsGroup !== undefined){
let data3 = data.runAsGroup;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/runAsGroup",parentData:data,parentDataProperty:"runAsGroup",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.runAsNonRoot !== undefined){
let data4 = data.runAsNonRoot;
const _errs5 = errors;
if(!(validate10(data4, {instancePath:instancePath+"/runAsNonRoot",parentData:data,parentDataProperty:"runAsNonRoot",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.runAsUser !== undefined){
let data5 = data.runAsUser;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/runAsUser",parentData:data,parentDataProperty:"runAsUser",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.seLinuxChangePolicy !== undefined){
let data6 = data.seLinuxChangePolicy;
const _errs7 = errors;
if(!(validate1(data6, {instancePath:instancePath+"/seLinuxChangePolicy",parentData:data,parentDataProperty:"seLinuxChangePolicy",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.seLinuxOptions !== undefined){
let data7 = data.seLinuxOptions;
const _errs8 = errors;
if(!(validate14(data7, {instancePath:instancePath+"/seLinuxOptions",parentData:data,parentDataProperty:"seLinuxOptions",rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.seccompProfile !== undefined){
let data8 = data.seccompProfile;
const _errs9 = errors;
if(!(validate18(data8, {instancePath:instancePath+"/seccompProfile",parentData:data,parentDataProperty:"seccompProfile",rootData}))){
vErrors = vErrors === null ? validate18.errors : vErrors.concat(validate18.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.supplementalGroups !== undefined){
let data9 = data.supplementalGroups;
const _errs10 = errors;
if(!(validate22(data9, {instancePath:instancePath+"/supplementalGroups",parentData:data,parentDataProperty:"supplementalGroups",rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.supplementalGroupsPolicy !== undefined){
let data10 = data.supplementalGroupsPolicy;
const _errs11 = errors;
if(!(validate1(data10, {instancePath:instancePath+"/supplementalGroupsPolicy",parentData:data,parentDataProperty:"supplementalGroupsPolicy",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.sysctls !== undefined){
let data11 = data.sysctls;
const _errs12 = errors;
if(!(validate27(data11, {instancePath:instancePath+"/sysctls",parentData:data,parentDataProperty:"sysctls",rootData}))){
vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.windowsOptions !== undefined){
let data12 = data.windowsOptions;
const _errs13 = errors;
if(!(validate33(data12, {instancePath:instancePath+"/windowsOptions",parentData:data,parentDataProperty:"windowsOptions",rootData}))){
vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
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
validate2.errors = vErrors;
return errors === 0;
}
