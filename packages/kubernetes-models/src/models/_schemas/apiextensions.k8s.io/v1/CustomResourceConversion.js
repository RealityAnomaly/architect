/* @ts-self-types="./CustomResourceConversion.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"strategy":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"webhook":{"$ref":"INo8ILueYJ_mHvvJZ00fm9R917hQBF5cchxftPcMHFc"}},"required":["strategy"],"type":"object","$id":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceConversion"};
const schema1 = {"type":"string"};

function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate1.errors = vErrors;
return errors === 0;
}

const schema2 = {"nullableRef":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookConversion#"};
const schema3 = {};

import { validate as validate4 } from "././WebhookConversion.js";


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate4(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
}
validate3.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceConversion" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.strategy === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "strategy"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.strategy !== undefined){
let data0 = data.strategy;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/strategy",parentData:data,parentDataProperty:"strategy",rootData}))){
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
if(!(validate3(data1, {instancePath:instancePath+"/webhook",parentData:data,parentDataProperty:"webhook",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
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
