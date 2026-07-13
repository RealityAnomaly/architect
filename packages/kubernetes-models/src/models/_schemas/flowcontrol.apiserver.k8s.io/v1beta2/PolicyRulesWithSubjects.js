/* @ts-self-types="./PolicyRulesWithSubjects.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"nonResourceRules":{"$ref":"h3q_cGVfuJZ_m8d9WGTwXooYlKnx3AGBnyGaj4Go32I"},"resourceRules":{"$ref":"i70928bLEWlDHz4AtIHjyc0cFeFiY_7hnltNo_D2IFA"},"subjects":{"$ref":"5YLFSStcOmwAlZ31Notu2TyYQnndXIDDK6wd3iYdHMQ"}},"required":["subjects"],"type":"object","$id":"io.k8s.api.flowcontrol.v1beta2.PolicyRulesWithSubjects"};
const schema1 = {"items":{"$ref":"dlZLcDB_0GVRWxZhjTpDVGwS-myO8gKtspqj1Unv31A"},"type":"array","nullable":true};
const schema2 = {"$ref":"io.k8s.api.flowcontrol.v1beta2.NonResourcePolicyRule#"};
const schema3 = {};

import { validate as validate3 } from "././NonResourcePolicyRule.js";


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

const schema4 = {"items":{"$ref":"3rTRAKOaO7S9Lbf62VqnwDq5g-JXPUArqZA-OuhPrFU"},"type":"array","nullable":true};
const schema5 = {"$ref":"io.k8s.api.flowcontrol.v1beta2.ResourcePolicyRule#"};
const schema6 = {};

import { validate as validate9 } from "././ResourcePolicyRule.js";


function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate9(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
validate8.errors = vErrors;
return errors === 0;
}


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate8(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
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
validate7.errors = vErrors;
return errors === 0;
}

const schema7 = {"items":{"$ref":"dFvHqoAF7Ei9Eea5Z7AzSZ15lRm6wEwQ6hblQotFtOU"},"type":"array"};
const schema8 = {"$ref":"io.k8s.api.flowcontrol.v1beta2.Subject#"};
const schema9 = {};

import { validate as validate15 } from "././Subject.js";


function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate15(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
validate14.errors = vErrors;
return errors === 0;
}


function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
if(!(validate14(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
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
validate13.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.flowcontrol.v1beta2.PolicyRulesWithSubjects" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.subjects === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "subjects"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.nonResourceRules !== undefined){
let data0 = data.nonResourceRules;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/nonResourceRules",parentData:data,parentDataProperty:"nonResourceRules",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.resourceRules !== undefined){
let data1 = data.resourceRules;
const _errs2 = errors;
if(!(validate7(data1, {instancePath:instancePath+"/resourceRules",parentData:data,parentDataProperty:"resourceRules",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.subjects !== undefined){
let data2 = data.subjects;
const _errs3 = errors;
if(!(validate13(data2, {instancePath:instancePath+"/subjects",parentData:data,parentDataProperty:"subjects",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
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
validate0.errors = vErrors;
return errors === 0;
}
