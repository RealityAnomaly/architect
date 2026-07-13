import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate0;
const schema0 = {"properties":{"distinguisherMethod":{"$ref":"ILBhUNH2qE1i15EzR7C3St2584yol3ZXPmurm9Ew9Ds"},"matchingPrecedence":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"priorityLevelConfiguration":{"$ref":"wmY3Trftv_f3SPd3sesFObpP1XoV7PmiakQS-hl0BG0"},"rules":{"$ref":"iZApE9fS2vGltgQoZsI4SyxoR54NtBKR2JbOpkDeoaA"}},"required":["priorityLevelConfiguration"],"type":"object","$id":"io.k8s.api.flowcontrol.v1beta2.FlowSchemaSpec"};
const schema1 = {"nullableRef":"io.k8s.api.flowcontrol.v1beta2.FlowDistinguisherMethod#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethod.js";


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

const schema3 = {"format":"int32","type":"integer","nullable":true};
const formats0 = formats.int32;

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(((typeof data == "number") && (!(data % 1) && !isNaN(data))) && (isFinite(data)))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "integer"}};
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
if((typeof data == "number") && (isFinite(data))){
if(!(formats0.validate(data))){
const err1 = {instancePath,schemaPath:"#/format",keyword:"format",params:{format: "int32"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
if(typeof data === "string"){
}
validate5.errors = vErrors;
return errors === 0;
}

const schema4 = {"$ref":"io.k8s.api.flowcontrol.v1beta2.PriorityLevelConfigurationReference#"};
const schema5 = {};

import { validate as validate8 } from "./IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReference.js";


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate8(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
validate7.errors = vErrors;
return errors === 0;
}

const schema6 = {"items":{"$ref":"oO2KC_gVSln2o8yDdJG2da73_f1UrErtsoqPKeibkK4"},"type":"array","nullable":true};
const schema7 = {"$ref":"io.k8s.api.flowcontrol.v1beta2.PolicyRulesWithSubjects#"};
const schema8 = {};

import { validate as validate13 } from "./IoK8sApiFlowcontrolV1beta2PolicyRulesWithSubjects.js";


function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate13(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
validate12.errors = vErrors;
return errors === 0;
}


function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate12(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
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
validate11.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.flowcontrol.v1beta2.FlowSchemaSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.priorityLevelConfiguration === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "priorityLevelConfiguration"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.distinguisherMethod !== undefined){
let data0 = data.distinguisherMethod;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/distinguisherMethod",parentData:data,parentDataProperty:"distinguisherMethod",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.matchingPrecedence !== undefined){
let data1 = data.matchingPrecedence;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/matchingPrecedence",parentData:data,parentDataProperty:"matchingPrecedence",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.priorityLevelConfiguration !== undefined){
let data2 = data.priorityLevelConfiguration;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/priorityLevelConfiguration",parentData:data,parentDataProperty:"priorityLevelConfiguration",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.rules !== undefined){
let data3 = data.rules;
const _errs4 = errors;
if(!(validate11(data3, {instancePath:instancePath+"/rules",parentData:data,parentDataProperty:"rules",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
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
