export const validate = validate0;
const schema0 = {"properties":{"controllerRef":{"$ref":"x2040rIyfXmfnhA8M8OWPMoZ2e85wsQEnR3lGzzX_Ro"},"podGroupTemplates":{"$ref":"qom1DTXPttFsOu42MKNC2P4YRXDzfg5_keTks4Hnong"}},"required":["podGroupTemplates"],"type":"object","$id":"io.k8s.api.scheduling.v1alpha2.WorkloadSpec"};
const schema1 = {"nullableRef":"io.k8s.api.scheduling.v1alpha2.TypedLocalObjectReference#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiSchedulingV1alpha2TypedLocalObjectReference.js";


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

const schema3 = {"items":{"$ref":"ut8E3pGgSn6O6vSDspz-oua386rHgmfllUaCPToBdQ0"},"type":"array"};
const schema4 = {"$ref":"io.k8s.api.scheduling.v1alpha2.PodGroupTemplate#"};
const schema5 = {};

import { validate as validate7 } from "./IoK8sApiSchedulingV1alpha2PodGroupTemplate.js";


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
const _errs0 = errors;
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
if(!(validate6(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
if(!valid0){
valid1 = false;
}
}
}
else {
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
validate5.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.scheduling.v1alpha2.WorkloadSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.podGroupTemplates === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "podGroupTemplates"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.controllerRef !== undefined){
let data0 = data.controllerRef;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/controllerRef",parentData:data,parentDataProperty:"controllerRef",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.podGroupTemplates !== undefined){
let data1 = data.podGroupTemplates;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/podGroupTemplates",parentData:data,parentDataProperty:"podGroupTemplates",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
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
validate0.errors = vErrors;
return errors === 0;
}
