/* @ts-self-types="./ContainerResourceMetricSource.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"container":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"target":{"$ref":"V70OeVC2D0TMuqfBbacMndGiRpquaYFR7S7HELxobCM"}},"required":["name","target","container"],"type":"object","$id":"io.k8s.api.autoscaling.v2beta2.ContainerResourceMetricSource"};
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

const schema2 = {"$ref":"io.k8s.api.autoscaling.v2beta2.MetricTarget#"};
const schema3 = {};

import { validate as validate5 } from "././MetricTarget.js";


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate5(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
validate4.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.autoscaling.v2beta2.ContainerResourceMetricSource" */;
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
if(data.target === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "target"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.container === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "container"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.container !== undefined){
let data0 = data.container;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/container",parentData:data,parentDataProperty:"container",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.name !== undefined){
let data1 = data.name;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.target !== undefined){
let data2 = data.target;
const _errs3 = errors;
if(!(validate4(data2, {instancePath:instancePath+"/target",parentData:data,parentDataProperty:"target",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
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
