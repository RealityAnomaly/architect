/* @ts-self-types="./DeviceSubRequest.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate1;
const schema1 = {"properties":{"allocationMode":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"capacity":{"$ref":"w2eCTAvJ5P2tIzrAnRICuBX2ZfgLvbMEPCiEbCeGMXQ"},"count":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"deviceClassName":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"selectors":{"$ref":"UsYyRAk0ARrj4YEkr-YRdV6jYmCAPw5olGF9WcUwipg"},"tolerations":{"$ref":"mAeHVuuTzXkzX1B3tBltIQIfJizade6HthSFP0_us80"}},"required":["name","deviceClassName"],"type":"object","$id":"io.k8s.api.resource.v1.DeviceSubRequest"};
const schema2 = {"type":"string","nullable":true};

function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate2.errors = vErrors;
return errors === 0;
}

const schema3 = {"nullableRef":"io.k8s.api.resource.v1.CapacityRequirements#"};
const schema4 = {};

import { validate as validate5 } from "././CapacityRequirements.js";


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

const schema5 = {"format":"int64","type":"integer","nullable":true};
const formats0 = formats.int64;

function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate8.errors = vErrors;
return errors === 0;
}

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

const schema6 = {"items":{"$ref":"Qibf8gnBEb_7FMZ3UDBqcNC1uVw2ATrDv2vur_KAqO8"},"type":"array","nullable":true};
const schema7 = {"$ref":"io.k8s.api.resource.v1.DeviceSelector#"};
const schema8 = {};

import { validate as validate14 } from "././DeviceSelector.js";


function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate14(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
validate13.errors = vErrors;
return errors === 0;
}


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
if(!(validate13(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
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

const schema9 = {"items":{"$ref":"Oeg0HZldl0CuOkhH2lLHngbMC3E5dDbPOtSfm2cKawc"},"type":"array","nullable":true};
const schema10 = {"$ref":"io.k8s.api.resource.v1.DeviceToleration#"};
const schema11 = {};

import { validate as validate20 } from "././DeviceToleration.js";


function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate20(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
validate19.errors = vErrors;
return errors === 0;
}


function validate18(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate19(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
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
validate18.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.resource.v1.DeviceSubRequest" */;
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
if(data.deviceClassName === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "deviceClassName"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.allocationMode !== undefined){
let data0 = data.allocationMode;
const _errs1 = errors;
if(!(validate2(data0, {instancePath:instancePath+"/allocationMode",parentData:data,parentDataProperty:"allocationMode",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.capacity !== undefined){
let data1 = data.capacity;
const _errs2 = errors;
if(!(validate4(data1, {instancePath:instancePath+"/capacity",parentData:data,parentDataProperty:"capacity",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.count !== undefined){
let data2 = data.count;
const _errs3 = errors;
if(!(validate8(data2, {instancePath:instancePath+"/count",parentData:data,parentDataProperty:"count",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.deviceClassName !== undefined){
let data3 = data.deviceClassName;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/deviceClassName",parentData:data,parentDataProperty:"deviceClassName",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.name !== undefined){
let data4 = data.name;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.selectors !== undefined){
let data5 = data.selectors;
const _errs6 = errors;
if(!(validate12(data5, {instancePath:instancePath+"/selectors",parentData:data,parentDataProperty:"selectors",rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.tolerations !== undefined){
let data6 = data.tolerations;
const _errs7 = errors;
if(!(validate18(data6, {instancePath:instancePath+"/tolerations",parentData:data,parentDataProperty:"tolerations",rootData}))){
vErrors = vErrors === null ? validate18.errors : vErrors.concat(validate18.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
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
