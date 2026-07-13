/* @ts-self-types="./CapacityRequestPolicyRange.d.ts" */
export const validate = validate3;
const schema2 = {"properties":{"max":{"$ref":"pp_xaFlNXkKoD6DTqyaUAeP7lGItJ9_hKwPxmHYeCNA"},"min":{"$ref":"VKZPUldlWDa056CXEqKHCNMaIxOA7qIsmePtey64Cuk"},"step":{"$ref":"pp_xaFlNXkKoD6DTqyaUAeP7lGItJ9_hKwPxmHYeCNA"}},"required":["min"],"type":"object","$id":"io.k8s.api.resource.v1.CapacityRequestPolicyRange"};
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

const schema3 = {"$ref":"io.k8s.apimachinery.pkg.api.resource.Quantity#"};

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate1(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
validate5.errors = vErrors;
return errors === 0;
}


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.resource.v1.CapacityRequestPolicyRange" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.min === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "min"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.max !== undefined){
let data0 = data.max;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/max",parentData:data,parentDataProperty:"max",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.min !== undefined){
let data1 = data.min;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/min",parentData:data,parentDataProperty:"min",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.step !== undefined){
let data2 = data.step;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/step",parentData:data,parentDataProperty:"step",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
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
validate3.errors = vErrors;
return errors === 0;
}
