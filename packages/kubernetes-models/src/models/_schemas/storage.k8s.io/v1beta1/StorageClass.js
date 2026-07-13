/* @ts-self-types="./StorageClass.d.ts" */
export const validate = validate2;
const schema2 = {"properties":{"allowVolumeExpansion":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"allowedTopologies":{"$ref":"9ww-QPZNRJMPT4b0SC-V-W1wknmUIqhNcrgq4h_yvro"},"apiVersion":{"$ref":"VqCulr_ZES6zbEl6HyGvOlGSJNmM2F7NvLFbdnOvTVs"},"kind":{"$ref":"q62o6VLDq6bmGEptsKPUZ9nFjyUsuuT5QstoHCQKuTU"},"metadata":{"$ref":"P3srTZpWadQH4s4N9KfJR0iCqydQo9YAz7xMB2qf0GQ"},"mountOptions":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"parameters":{"$ref":"Ul_dhUdbb_DarDhfw0mKkpjzZdc0vNqkGhUAaKt2b7M"},"provisioner":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"reclaimPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"volumeBindingMode":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"required":["provisioner","apiVersion","kind"],"type":"object","$id":"io.k8s.api.storage.v1beta1.StorageClass"};
const schema3 = {"type":"boolean","nullable":true};

function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate3.errors = vErrors;
return errors === 0;
}

const schema4 = {"items":{"$ref":"_pXqaWpy_Tw5oDnWFCn8B_PK-jJE2iER4B36ldBg3JU"},"type":"array","nullable":true};
const schema5 = {"$ref":"io.k8s.api.core.v1.TopologySelectorTerm#"};
const schema6 = {};

import { validate as validate7 } from "./../../v1/TopologySelectorTerm.js";


function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate7(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
validate6.errors = vErrors;
return errors === 0;
}


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate6(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
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
validate5.errors = vErrors;
return errors === 0;
}

const schema7 = {"type":"string","enum":["storage.k8s.io/v1beta1"]};

function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema7.enum;
if(!(data === "storage.k8s.io/v1beta1")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema7.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate11.errors = vErrors;
return errors === 0;
}

const schema8 = {"type":"string","enum":["StorageClass"]};

function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema8.enum;
if(!(data === "StorageClass")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema8.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate13.errors = vErrors;
return errors === 0;
}

const schema9 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"};
const schema10 = {};

import { validate as validate16 } from "./../../../../apimachinery/_schemas/apis/meta/v1/ObjectMeta.js";


function validate15(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate16(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
}
validate15.errors = vErrors;
return errors === 0;
}

const schema11 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array","nullable":true};
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


function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate0(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
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
validate19.errors = vErrors;
return errors === 0;
}

const schema12 = {"additionalProperties":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"object","nullable":true};

function validate22(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate0(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate22.errors = vErrors;
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


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.storage.v1beta1.StorageClass" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.provisioner === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "provisioner"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.apiVersion === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "apiVersion"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.kind === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "kind"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.allowVolumeExpansion !== undefined){
let data0 = data.allowVolumeExpansion;
const _errs1 = errors;
if(!(validate3(data0, {instancePath:instancePath+"/allowVolumeExpansion",parentData:data,parentDataProperty:"allowVolumeExpansion",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.allowedTopologies !== undefined){
let data1 = data.allowedTopologies;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/allowedTopologies",parentData:data,parentDataProperty:"allowedTopologies",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.apiVersion !== undefined){
let data2 = data.apiVersion;
const _errs3 = errors;
if(!(validate11(data2, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.kind !== undefined){
let data3 = data.kind;
const _errs4 = errors;
if(!(validate13(data3, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.metadata !== undefined){
let data4 = data.metadata;
const _errs5 = errors;
if(!(validate15(data4, {instancePath:instancePath+"/metadata",parentData:data,parentDataProperty:"metadata",rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.mountOptions !== undefined){
let data5 = data.mountOptions;
const _errs6 = errors;
if(!(validate19(data5, {instancePath:instancePath+"/mountOptions",parentData:data,parentDataProperty:"mountOptions",rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.parameters !== undefined){
let data6 = data.parameters;
const _errs7 = errors;
if(!(validate22(data6, {instancePath:instancePath+"/parameters",parentData:data,parentDataProperty:"parameters",rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.provisioner !== undefined){
let data7 = data.provisioner;
const _errs8 = errors;
if(!(validate0(data7, {instancePath:instancePath+"/provisioner",parentData:data,parentDataProperty:"provisioner",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.reclaimPolicy !== undefined){
let data8 = data.reclaimPolicy;
const _errs9 = errors;
if(!(validate1(data8, {instancePath:instancePath+"/reclaimPolicy",parentData:data,parentDataProperty:"reclaimPolicy",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.volumeBindingMode !== undefined){
let data9 = data.volumeBindingMode;
const _errs10 = errors;
if(!(validate1(data9, {instancePath:instancePath+"/volumeBindingMode",parentData:data,parentDataProperty:"volumeBindingMode",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
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
validate2.errors = vErrors;
return errors === 0;
}
