import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate2;
const schema2 = {"properties":{"allowPrivilegeEscalation":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"appArmorProfile":{"$ref":"Tx9NX2y5Q2psZU5V0eTm-EtTEVDtSNbaiyN_FmeiiEQ"},"capabilities":{"$ref":"iBIjY10VeMpz3sg2b7qF7vahRYlgndZFydU1d6M4JVk"},"privileged":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"procMount":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"readOnlyRootFilesystem":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"runAsGroup":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"runAsNonRoot":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"runAsUser":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"seLinuxOptions":{"$ref":"Ws2Xy2YELmRVB0VQESDuPP2DGdNZOe9n7LNUeX7t1-M"},"seccompProfile":{"$ref":"usZtUa7J5VNXPgn1HkP20PSCX8rPLoYjdEgnYnp0tLY"},"windowsOptions":{"$ref":"pqdN8oVLyoeNYziBdnYlCUfB8ct0pC-7JRO58IQjook"}},"type":"object","$id":"io.k8s.api.core.v1.SecurityContext"};
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

const schema3 = {"nullableRef":"io.k8s.api.core.v1.AppArmorProfile#"};
const schema4 = {};

import { validate as validate5 } from "./IoK8sApiCoreV1AppArmorProfile.js";


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

const schema5 = {"nullableRef":"io.k8s.api.core.v1.Capabilities#"};
const schema6 = {};

import { validate as validate9 } from "./IoK8sApiCoreV1Capabilities.js";


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

const schema7 = {"type":"string","nullable":true};

function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate13.errors = vErrors;
return errors === 0;
}

const schema1 = {"format":"int64","type":"integer","nullable":true};
const formats0 = formats.int64;

function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate1.errors = vErrors;
return errors === 0;
}

const schema8 = {"nullableRef":"io.k8s.api.core.v1.SELinuxOptions#"};
const schema9 = {};

import { validate as validate20 } from "./IoK8sApiCoreV1SELinuxOptions.js";


function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate20(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
}
validate19.errors = vErrors;
return errors === 0;
}

const schema10 = {"nullableRef":"io.k8s.api.core.v1.SeccompProfile#"};
const schema11 = {};

import { validate as validate24 } from "./IoK8sApiCoreV1SeccompProfile.js";


function validate23(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate24(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
errors = vErrors.length;
}
else {
}
}
validate23.errors = vErrors;
return errors === 0;
}

const schema12 = {"nullableRef":"io.k8s.api.core.v1.WindowsSecurityContextOptions#"};
const schema13 = {};

import { validate as validate28 } from "./IoK8sApiCoreV1WindowsSecurityContextOptions.js";


function validate27(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate28(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
}
validate27.errors = vErrors;
return errors === 0;
}


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.SecurityContext" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.allowPrivilegeEscalation !== undefined){
let data0 = data.allowPrivilegeEscalation;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/allowPrivilegeEscalation",parentData:data,parentDataProperty:"allowPrivilegeEscalation",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.appArmorProfile !== undefined){
let data1 = data.appArmorProfile;
const _errs2 = errors;
if(!(validate4(data1, {instancePath:instancePath+"/appArmorProfile",parentData:data,parentDataProperty:"appArmorProfile",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.capabilities !== undefined){
let data2 = data.capabilities;
const _errs3 = errors;
if(!(validate8(data2, {instancePath:instancePath+"/capabilities",parentData:data,parentDataProperty:"capabilities",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.privileged !== undefined){
let data3 = data.privileged;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/privileged",parentData:data,parentDataProperty:"privileged",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.procMount !== undefined){
let data4 = data.procMount;
const _errs5 = errors;
if(!(validate13(data4, {instancePath:instancePath+"/procMount",parentData:data,parentDataProperty:"procMount",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.readOnlyRootFilesystem !== undefined){
let data5 = data.readOnlyRootFilesystem;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/readOnlyRootFilesystem",parentData:data,parentDataProperty:"readOnlyRootFilesystem",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.runAsGroup !== undefined){
let data6 = data.runAsGroup;
const _errs7 = errors;
if(!(validate1(data6, {instancePath:instancePath+"/runAsGroup",parentData:data,parentDataProperty:"runAsGroup",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.runAsNonRoot !== undefined){
let data7 = data.runAsNonRoot;
const _errs8 = errors;
if(!(validate0(data7, {instancePath:instancePath+"/runAsNonRoot",parentData:data,parentDataProperty:"runAsNonRoot",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.runAsUser !== undefined){
let data8 = data.runAsUser;
const _errs9 = errors;
if(!(validate1(data8, {instancePath:instancePath+"/runAsUser",parentData:data,parentDataProperty:"runAsUser",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.seLinuxOptions !== undefined){
let data9 = data.seLinuxOptions;
const _errs10 = errors;
if(!(validate19(data9, {instancePath:instancePath+"/seLinuxOptions",parentData:data,parentDataProperty:"seLinuxOptions",rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.seccompProfile !== undefined){
let data10 = data.seccompProfile;
const _errs11 = errors;
if(!(validate23(data10, {instancePath:instancePath+"/seccompProfile",parentData:data,parentDataProperty:"seccompProfile",rootData}))){
vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.windowsOptions !== undefined){
let data11 = data.windowsOptions;
const _errs12 = errors;
if(!(validate27(data11, {instancePath:instancePath+"/windowsOptions",parentData:data,parentDataProperty:"windowsOptions",rootData}))){
vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
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
