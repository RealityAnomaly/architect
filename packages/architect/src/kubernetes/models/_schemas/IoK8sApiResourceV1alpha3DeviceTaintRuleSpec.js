export const validate = validate0;
const schema0 = {"properties":{"deviceSelector":{"$ref":"Kfeu4W_JVWVF6bYwsQFPw7IGZRCXam9opep65tU5TkE"},"taint":{"$ref":"Br85iETfDoi66HH_8o9BxJBrRh7BNcEzNKaVzLyCOMY"}},"required":["taint"],"type":"object","$id":"io.k8s.api.resource.v1alpha3.DeviceTaintRuleSpec"};
const schema1 = {"nullableRef":"io.k8s.api.resource.v1alpha3.DeviceTaintSelector#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiResourceV1alpha3DeviceTaintSelector.js";


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

const schema3 = {"$ref":"io.k8s.api.resource.v1alpha3.DeviceTaint#"};
const schema4 = {};

import { validate as validate6 } from "./IoK8sApiResourceV1alpha3DeviceTaint.js";


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
/*# sourceURL="io.k8s.api.resource.v1alpha3.DeviceTaintRuleSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.taint === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "taint"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.deviceSelector !== undefined){
let data0 = data.deviceSelector;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/deviceSelector",parentData:data,parentDataProperty:"deviceSelector",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.taint !== undefined){
let data1 = data.taint;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/taint",parentData:data,parentDataProperty:"taint",rootData}))){
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
