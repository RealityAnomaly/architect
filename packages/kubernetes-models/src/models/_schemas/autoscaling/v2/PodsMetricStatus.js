/* @ts-self-types="./PodsMetricStatus.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"current":{"$ref":"Sd-dcUbA0TL7oZp5fmtDBLHIG0jkAJjU29O4p-Jjvq4"},"metric":{"$ref":"HhIW3eWSXOltn7SemUIsPuCS7UE0PSh1IWsMg8ta2ZE"}},"required":["metric","current"],"type":"object","$id":"io.k8s.api.autoscaling.v2.PodsMetricStatus"};
const schema1 = {"$ref":"io.k8s.api.autoscaling.v2.MetricValueStatus#"};
const schema2 = {};

import { validate as validate2 } from "././MetricValueStatus.js";


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate2(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
validate1.errors = vErrors;
return errors === 0;
}

const schema3 = {"$ref":"io.k8s.api.autoscaling.v2.MetricIdentifier#"};
const schema4 = {};

import { validate as validate6 } from "././MetricIdentifier.js";


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate6(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
validate5.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.autoscaling.v2.PodsMetricStatus" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.metric === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "metric"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.current === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "current"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.current !== undefined){
let data0 = data.current;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/current",parentData:data,parentDataProperty:"current",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.metric !== undefined){
let data1 = data.metric;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/metric",parentData:data,parentDataProperty:"metric",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
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
validate0.errors = vErrors;
return errors === 0;
}
