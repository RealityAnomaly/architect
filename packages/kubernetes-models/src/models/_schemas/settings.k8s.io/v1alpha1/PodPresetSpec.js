/* @ts-self-types="./PodPresetSpec.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"env":{"$ref":"tOvEOomFPQ11DQqhf-xjojT7Ag-xLjHW5nGYKYeaI_I"},"envFrom":{"$ref":"gWXSiRLIsl74n2BsEeonPQPvsBAUaLSJnw2Y47GiYSA"},"selector":{"$ref":"ft7HGURTbPyh-vhzFAYgnhVehb5DIkOC1Qu-kP-9F84"},"volumeMounts":{"$ref":"usBZjbtoQnfcayV0LpyAqd7GDbxbzL1_cSYXig8l_pY"},"volumes":{"$ref":"3N9lKvx5joFgj-YBYbTm2tddKXclNVN7K8xMGx8dILo"}},"type":"object","$id":"io.k8s.api.settings.v1alpha1.PodPresetSpec"};
const schema1 = {"items":{"$ref":"QzFRAIo_nv_TBC6v8zxAnbUCU2-la9kRGor-AR8mNNU"},"type":"array","nullable":true};
const schema2 = {"$ref":"io.k8s.api.core.v1.EnvVar#"};
const schema3 = {};

import { validate as validate3 } from "./../../v1/EnvVar.js";


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate3(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
validate2.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate1.errors = vErrors;
return errors === 0;
}

const schema4 = {"items":{"$ref":"ZWu1cv3ZUUWRw9JJu_3yf9d1BSNgse12atlYhCeLZcg"},"type":"array","nullable":true};
const schema5 = {"$ref":"io.k8s.api.core.v1.EnvFromSource#"};
const schema6 = {};

import { validate as validate9 } from "./../../v1/EnvFromSource.js";


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

const schema7 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"};
const schema8 = {};

import { validate as validate14 } from "./../../../../apimachinery/_schemas/apis/meta/v1/LabelSelector.js";


function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate14(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
}
validate13.errors = vErrors;
return errors === 0;
}

const schema9 = {"items":{"$ref":"CqxuoDZ3sl4nz8o30Z154zaxyQUlCsC5LeQpnKUOcpA"},"type":"array","nullable":true};
const schema10 = {"$ref":"io.k8s.api.core.v1.VolumeMount#"};
const schema11 = {};

import { validate as validate19 } from "./../../v1/VolumeMount.js";


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

const schema12 = {"items":{"$ref":"KNSHcLoUd0OHio2fzdRRrXacrmFG_IUNIaRxw76zj9g"},"type":"array","nullable":true};
const schema13 = {"$ref":"io.k8s.api.core.v1.Volume#"};
const schema14 = {};

import { validate as validate25 } from "./../../v1/Volume.js";


function validate24(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate25(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
errors = vErrors.length;
}
else {
}
validate24.errors = vErrors;
return errors === 0;
}


function validate23(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate24(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
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
validate23.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.settings.v1alpha1.PodPresetSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.env !== undefined){
let data0 = data.env;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/env",parentData:data,parentDataProperty:"env",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.envFrom !== undefined){
let data1 = data.envFrom;
const _errs2 = errors;
if(!(validate7(data1, {instancePath:instancePath+"/envFrom",parentData:data,parentDataProperty:"envFrom",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.selector !== undefined){
let data2 = data.selector;
const _errs3 = errors;
if(!(validate13(data2, {instancePath:instancePath+"/selector",parentData:data,parentDataProperty:"selector",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.volumeMounts !== undefined){
let data3 = data.volumeMounts;
const _errs4 = errors;
if(!(validate17(data3, {instancePath:instancePath+"/volumeMounts",parentData:data,parentDataProperty:"volumeMounts",rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.volumes !== undefined){
let data4 = data.volumes;
const _errs5 = errors;
if(!(validate23(data4, {instancePath:instancePath+"/volumes",parentData:data,parentDataProperty:"volumes",rootData}))){
vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
validate0.errors = vErrors;
return errors === 0;
}
