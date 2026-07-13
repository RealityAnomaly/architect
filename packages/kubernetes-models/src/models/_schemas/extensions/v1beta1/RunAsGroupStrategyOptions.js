/* @ts-self-types="./RunAsGroupStrategyOptions.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"ranges":{"$ref":"N8eewXRciDx0tc0VUaqeW1aRpQ2lfblkmbZE3a7YQQg"},"rule":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["rule"],"type":"object","$id":"io.k8s.api.extensions.v1beta1.RunAsGroupStrategyOptions"};
const schema1 = {"items":{"$ref":"tX_PB1FQkCrkFOB1v2qI8_tkWzEhuz47XTeDhXd3gME"},"type":"array","nullable":true};
const schema2 = {"$ref":"io.k8s.api.extensions.v1beta1.IDRange#"};
const schema3 = {};

import { validate as validate3 } from "././IDRange.js";


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate3(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
validate2.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate2(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
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
validate1.errors = vErrors;
return errors === 0;
}

const schema4 = {"type":"string"};

function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate7.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.extensions.v1beta1.RunAsGroupStrategyOptions" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.rule === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "rule"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.ranges !== undefined){
let data0 = data.ranges;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/ranges",parentData:data,parentDataProperty:"ranges",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.rule !== undefined){
let data1 = data.rule;
const _errs2 = errors;
if(!(validate7(data1, {instancePath:instancePath+"/rule",parentData:data,parentDataProperty:"rule",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
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
