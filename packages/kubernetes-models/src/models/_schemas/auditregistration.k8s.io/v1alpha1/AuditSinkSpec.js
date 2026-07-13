/* @ts-self-types="./AuditSinkSpec.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"policy":{"$ref":"yzvWmxPvB0tqV1y-5BJs6w4VdlcJOZdj7354I3Z34jA"},"webhook":{"$ref":"qEYtdgi9jKz2Aqk9fjEGNFS1_7hT7J3R0LOmxkpmODw"}},"required":["policy","webhook"],"type":"object","$id":"io.k8s.api.auditregistration.v1alpha1.AuditSinkSpec"};
const schema1 = {"$ref":"io.k8s.api.auditregistration.v1alpha1.Policy#"};
const schema2 = {};

import { validate as validate2 } from "././Policy.js";


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

const schema3 = {"$ref":"io.k8s.api.auditregistration.v1alpha1.Webhook#"};
const schema4 = {};

import { validate as validate6 } from "././Webhook.js";


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
/*# sourceURL="io.k8s.api.auditregistration.v1alpha1.AuditSinkSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.policy === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "policy"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.webhook === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "webhook"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.policy !== undefined){
let data0 = data.policy;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/policy",parentData:data,parentDataProperty:"policy",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.webhook !== undefined){
let data1 = data.webhook;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/webhook",parentData:data,parentDataProperty:"webhook",rootData}))){
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
