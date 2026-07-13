export const validate = validate0;
const schema0 = {"properties":{"allocation":{"$ref":"u-STvOcvUKirszA8mDeutyGKsET14xTgJ_U41YDE1zM"},"devices":{"$ref":"S8K5iJlJb27d9iCX4EXSBrVRR4JYa-gSxtK67A5BIpI"},"reservedFor":{"$ref":"C_mpZ2wgPDXX6kPlE_pwep-g2wCSEqQrB7jBuiSMPig"}},"type":"object","$id":"io.k8s.api.resource.v1.ResourceClaimStatus"};
const schema1 = {"nullableRef":"io.k8s.api.resource.v1.AllocationResult#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiResourceV1AllocationResult.js";


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate2(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
}
validate1.errors = vErrors;
return errors === 0;
}

const schema3 = {"items":{"$ref":"kUSfJSVHR-Shy_KDPf5bZsR-xqvbQ81rkYdKYSYqtAk"},"type":"array","nullable":true};
const schema4 = {"$ref":"io.k8s.api.resource.v1.AllocatedDeviceStatus#"};
const schema5 = {};

import { validate as validate7 } from "./IoK8sApiResourceV1AllocatedDeviceStatus.js";


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

const schema6 = {"items":{"$ref":"tDbXBSSvqp9Vuahx9cPpD8c9ZfFdY8ts5D-SyUhErh0"},"type":"array","nullable":true};
const schema7 = {"$ref":"io.k8s.api.resource.v1.ResourceClaimConsumerReference#"};
const schema8 = {};

import { validate as validate13 } from "./IoK8sApiResourceV1ResourceClaimConsumerReference.js";


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


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.resource.v1.ResourceClaimStatus" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.allocation !== undefined){
let data0 = data.allocation;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/allocation",parentData:data,parentDataProperty:"allocation",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.devices !== undefined){
let data1 = data.devices;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/devices",parentData:data,parentDataProperty:"devices",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.reservedFor !== undefined){
let data2 = data.reservedFor;
const _errs3 = errors;
if(!(validate11(data2, {instancePath:instancePath+"/reservedFor",parentData:data,parentDataProperty:"reservedFor",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
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
