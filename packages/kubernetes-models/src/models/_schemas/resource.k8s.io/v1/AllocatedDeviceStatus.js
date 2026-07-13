/* @ts-self-types="./AllocatedDeviceStatus.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"conditions":{"$ref":"jI7gN-jH9FiRLjopJCUTgArdnLwDtZcYfDbNHkOZBp0"},"data":{"$ref":"AR60lTNTcsDH6BJnxZoUAUNlYvqVW-t68_Wkfh7upnM"},"device":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"driver":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"networkData":{"$ref":"kKujw8ZQbaFMDi9KjnwfDBtZX40ahH2Jn3aVKuBnfX4"},"pool":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"shareID":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"required":["driver","pool","device"],"type":"object","$id":"io.k8s.api.resource.v1.AllocatedDeviceStatus"};
const schema2 = {"items":{"$ref":"Q41fcN0GrLvJ1ci-jzMgOiDiV3djUgCqpjN1EJKiJPM"},"type":"array","nullable":true};
const schema3 = {"$ref":"io.k8s.apimachinery.pkg.apis.meta.v1.Condition#"};
const schema4 = {};

import { validate as validate4 } from "./../../../../apimachinery/_schemas/apis/meta/v1/Condition.js";


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate4(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
validate3.errors = vErrors;
return errors === 0;
}


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate3(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
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
validate2.errors = vErrors;
return errors === 0;
}

const schema5 = {"nullableRef":"io.k8s.apimachinery.pkg.runtime.RawExtension#"};
const schema6 = {};

import { validate as validate9 } from "./../../../../apimachinery/_schemas/runtime/RawExtension.js";


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

const schema7 = {"nullableRef":"io.k8s.api.resource.v1.NetworkDeviceData#"};
const schema8 = {};

import { validate as validate15 } from "././NetworkDeviceData.js";


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

const schema9 = {"type":"string","nullable":true};

function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate19.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.resource.v1.AllocatedDeviceStatus" */;
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
if(data.pool === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "pool"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.device === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "device"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.conditions !== undefined){
let data0 = data.conditions;
const _errs1 = errors;
if(!(validate2(data0, {instancePath:instancePath+"/conditions",parentData:data,parentDataProperty:"conditions",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.data !== undefined){
let data1 = data.data;
const _errs2 = errors;
if(!(validate8(data1, {instancePath:instancePath+"/data",parentData:data,parentDataProperty:"data",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.device !== undefined){
let data2 = data.device;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/device",parentData:data,parentDataProperty:"device",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.driver !== undefined){
let data3 = data.driver;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/driver",parentData:data,parentDataProperty:"driver",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.networkData !== undefined){
let data4 = data.networkData;
const _errs5 = errors;
if(!(validate14(data4, {instancePath:instancePath+"/networkData",parentData:data,parentDataProperty:"networkData",rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.pool !== undefined){
let data5 = data.pool;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/pool",parentData:data,parentDataProperty:"pool",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.shareID !== undefined){
let data6 = data.shareID;
const _errs7 = errors;
if(!(validate19(data6, {instancePath:instancePath+"/shareID",parentData:data,parentDataProperty:"shareID",rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
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
validate1.errors = vErrors;
return errors === 0;
}
