/* @ts-self-types="./NodeSystemInfo.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"architecture":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"bootID":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"containerRuntimeVersion":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"kernelVersion":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"kubeProxyVersion":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"kubeletVersion":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"machineID":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"operatingSystem":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"osImage":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"swap":{"$ref":"6bc0Q_fqSejL6V7QlK8AIgK5CbqGatig4hhTZYf5lQg"},"systemUUID":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["machineID","systemUUID","bootID","kernelVersion","osImage","containerRuntimeVersion","kubeletVersion","kubeProxyVersion","operatingSystem","architecture"],"type":"object","$id":"io.k8s.api.core.v1.NodeSystemInfo"};
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

const schema2 = {"nullableRef":"io.k8s.api.core.v1.NodeSwapStatus#"};
const schema3 = {};

import { validate as validate12 } from "././NodeSwapStatus.js";


function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate12(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
}
validate11.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.NodeSystemInfo" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.machineID === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "machineID"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.systemUUID === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "systemUUID"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.bootID === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "bootID"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.kernelVersion === undefined){
const err3 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "kernelVersion"}};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
if(data.osImage === undefined){
const err4 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "osImage"}};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
if(data.containerRuntimeVersion === undefined){
const err5 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "containerRuntimeVersion"}};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
if(data.kubeletVersion === undefined){
const err6 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "kubeletVersion"}};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
if(data.kubeProxyVersion === undefined){
const err7 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "kubeProxyVersion"}};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
if(data.operatingSystem === undefined){
const err8 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "operatingSystem"}};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
if(data.architecture === undefined){
const err9 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "architecture"}};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
if(data.architecture !== undefined){
let data0 = data.architecture;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/architecture",parentData:data,parentDataProperty:"architecture",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.bootID !== undefined){
let data1 = data.bootID;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/bootID",parentData:data,parentDataProperty:"bootID",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.containerRuntimeVersion !== undefined){
let data2 = data.containerRuntimeVersion;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/containerRuntimeVersion",parentData:data,parentDataProperty:"containerRuntimeVersion",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.kernelVersion !== undefined){
let data3 = data.kernelVersion;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/kernelVersion",parentData:data,parentDataProperty:"kernelVersion",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.kubeProxyVersion !== undefined){
let data4 = data.kubeProxyVersion;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/kubeProxyVersion",parentData:data,parentDataProperty:"kubeProxyVersion",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.kubeletVersion !== undefined){
let data5 = data.kubeletVersion;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/kubeletVersion",parentData:data,parentDataProperty:"kubeletVersion",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.machineID !== undefined){
let data6 = data.machineID;
const _errs7 = errors;
if(!(validate0(data6, {instancePath:instancePath+"/machineID",parentData:data,parentDataProperty:"machineID",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.operatingSystem !== undefined){
let data7 = data.operatingSystem;
const _errs8 = errors;
if(!(validate0(data7, {instancePath:instancePath+"/operatingSystem",parentData:data,parentDataProperty:"operatingSystem",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.osImage !== undefined){
let data8 = data.osImage;
const _errs9 = errors;
if(!(validate0(data8, {instancePath:instancePath+"/osImage",parentData:data,parentDataProperty:"osImage",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.swap !== undefined){
let data9 = data.swap;
const _errs10 = errors;
if(!(validate11(data9, {instancePath:instancePath+"/swap",parentData:data,parentDataProperty:"swap",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.systemUUID !== undefined){
let data10 = data.systemUUID;
const _errs11 = errors;
if(!(validate0(data10, {instancePath:instancePath+"/systemUUID",parentData:data,parentDataProperty:"systemUUID",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
}
else {
const err10 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
validate1.errors = vErrors;
return errors === 0;
}
