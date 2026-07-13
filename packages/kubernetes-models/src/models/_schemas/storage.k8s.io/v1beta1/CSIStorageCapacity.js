/* @ts-self-types="./CSIStorageCapacity.d.ts" */
export const validate = validate3;
const schema2 = {"properties":{"apiVersion":{"$ref":"VqCulr_ZES6zbEl6HyGvOlGSJNmM2F7NvLFbdnOvTVs"},"capacity":{"$ref":"pp_xaFlNXkKoD6DTqyaUAeP7lGItJ9_hKwPxmHYeCNA"},"kind":{"$ref":"a6uexyHLJOIUZB0xn0nBPjIGQTP8i-1D_sTXVcB2A2Y"},"maximumVolumeSize":{"$ref":"pp_xaFlNXkKoD6DTqyaUAeP7lGItJ9_hKwPxmHYeCNA"},"metadata":{"$ref":"P3srTZpWadQH4s4N9KfJR0iCqydQo9YAz7xMB2qf0GQ"},"nodeTopology":{"$ref":"ft7HGURTbPyh-vhzFAYgnhVehb5DIkOC1Qu-kP-9F84"},"storageClassName":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["storageClassName","apiVersion","kind"],"type":"object","$id":"io.k8s.api.storage.v1beta1.CSIStorageCapacity"};
const schema3 = {"type":"string","enum":["storage.k8s.io/v1beta1"]};

function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema3.enum;
if(!(data === "storage.k8s.io/v1beta1")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema3.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate4.errors = vErrors;
return errors === 0;
}

const schema0 = {"nullableRef":"io.k8s.apimachinery.pkg.api.resource.Quantity#"};
const schema1 = {};

import { validate as validate1 } from "./../../../../apimachinery/_schemas/api/resource/Quantity.js";


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

const schema4 = {"type":"string","enum":["CSIStorageCapacity"]};

function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema4.enum;
if(!(data === "CSIStorageCapacity")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema4.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate7.errors = vErrors;
return errors === 0;
}

const schema5 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"};
const schema6 = {};

import { validate as validate11 } from "./../../../../apimachinery/_schemas/apis/meta/v1/ObjectMeta.js";


function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate11(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
}
validate10.errors = vErrors;
return errors === 0;
}

const schema7 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"};
const schema8 = {};

import { validate as validate15 } from "./../../../../apimachinery/_schemas/apis/meta/v1/LabelSelector.js";


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

const schema9 = {"type":"string"};

function validate18(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate18.errors = vErrors;
return errors === 0;
}


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.storage.v1beta1.CSIStorageCapacity" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.storageClassName === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "storageClassName"}};
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
if(data.apiVersion !== undefined){
let data0 = data.apiVersion;
const _errs1 = errors;
if(!(validate4(data0, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.capacity !== undefined){
let data1 = data.capacity;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/capacity",parentData:data,parentDataProperty:"capacity",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.kind !== undefined){
let data2 = data.kind;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.maximumVolumeSize !== undefined){
let data3 = data.maximumVolumeSize;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/maximumVolumeSize",parentData:data,parentDataProperty:"maximumVolumeSize",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.metadata !== undefined){
let data4 = data.metadata;
const _errs5 = errors;
if(!(validate10(data4, {instancePath:instancePath+"/metadata",parentData:data,parentDataProperty:"metadata",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.nodeTopology !== undefined){
let data5 = data.nodeTopology;
const _errs6 = errors;
if(!(validate14(data5, {instancePath:instancePath+"/nodeTopology",parentData:data,parentDataProperty:"nodeTopology",rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.storageClassName !== undefined){
let data6 = data.storageClassName;
const _errs7 = errors;
if(!(validate18(data6, {instancePath:instancePath+"/storageClassName",parentData:data,parentDataProperty:"storageClassName",rootData}))){
vErrors = vErrors === null ? validate18.errors : vErrors.concat(validate18.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
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
