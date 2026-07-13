/* @ts-self-types="./MutatingAdmissionPolicySpec.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"failurePolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"matchConditions":{"$ref":"c9ppsGuxDGyfkEFRCYzjmqPU71CJ-ANdkLo6OV3SBkQ"},"matchConstraints":{"$ref":"_NtCloUFDKjl1lGJbn-gATEs-QayZB4VyyTq7sQ9cHs"},"mutations":{"$ref":"9jjDWslgwDZCImGrFWi2jeSscz3KPHC5_vOFxf_4vow"},"paramKind":{"$ref":"LWAiu6H4ldg0HKmlouQ9syDTVKsy8JP_7x9mfih-luA"},"reinvocationPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"variables":{"$ref":"KWkhgPwChdCeksXM4gpv9qdnHvNXSJ0oKo-vPjiUo_o"}},"type":"object","$id":"io.k8s.api.admissionregistration.v1beta1.MutatingAdmissionPolicySpec"};
const schema0 = {"type":"string","nullable":true};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((typeof data !== "string") && (data !== null)){
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
const _errs1 = errors;
validate0.errors = vErrors;
return errors === 0;
}

const schema2 = {"items":{"$ref":"CqMgCzUcfMdEyRbTaoUfzNs46cjd_Nef4hYhvKczaus"},"type":"array","nullable":true};
const schema3 = {"$ref":"io.k8s.api.admissionregistration.v1beta1.MatchCondition#"};
const schema4 = {};

import { validate as validate5 } from "././MatchCondition.js";


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


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate4(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
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
validate3.errors = vErrors;
return errors === 0;
}

const schema5 = {"nullableRef":"io.k8s.api.admissionregistration.v1beta1.MatchResources#"};
const schema6 = {};

import { validate as validate10 } from "././MatchResources.js";


function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate10(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
}
validate9.errors = vErrors;
return errors === 0;
}

const schema7 = {"items":{"$ref":"ZaI5y1xAcBG19dOysGcxDfiOqiEUN3FPtQNlo9Een-c"},"type":"array","nullable":true};
const schema8 = {"$ref":"io.k8s.api.admissionregistration.v1beta1.Mutation#"};
const schema9 = {};

import { validate as validate15 } from "././Mutation.js";


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
if(!(validate14(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
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
validate13.errors = vErrors;
return errors === 0;
}

const schema10 = {"nullableRef":"io.k8s.api.admissionregistration.v1beta1.ParamKind#"};
const schema11 = {};

import { validate as validate20 } from "././ParamKind.js";


function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate20(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
}
validate19.errors = vErrors;
return errors === 0;
}

const schema12 = {"items":{"$ref":"B_lw2Vcv0H2_-DfI8pEx8lQyKkBpkqedWeLAdxb7T0Q"},"type":"array","nullable":true};
const schema13 = {"$ref":"io.k8s.api.admissionregistration.v1beta1.Variable#"};
const schema14 = {};

import { validate as validate26 } from "././Variable.js";


function validate25(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate26(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
errors = vErrors.length;
}
else {
}
validate25.errors = vErrors;
return errors === 0;
}


function validate24(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate25(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
validate24.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.admissionregistration.v1beta1.MutatingAdmissionPolicySpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.failurePolicy !== undefined){
let data0 = data.failurePolicy;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/failurePolicy",parentData:data,parentDataProperty:"failurePolicy",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.matchConditions !== undefined){
let data1 = data.matchConditions;
const _errs2 = errors;
if(!(validate3(data1, {instancePath:instancePath+"/matchConditions",parentData:data,parentDataProperty:"matchConditions",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.matchConstraints !== undefined){
let data2 = data.matchConstraints;
const _errs3 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/matchConstraints",parentData:data,parentDataProperty:"matchConstraints",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.mutations !== undefined){
let data3 = data.mutations;
const _errs4 = errors;
if(!(validate13(data3, {instancePath:instancePath+"/mutations",parentData:data,parentDataProperty:"mutations",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.paramKind !== undefined){
let data4 = data.paramKind;
const _errs5 = errors;
if(!(validate19(data4, {instancePath:instancePath+"/paramKind",parentData:data,parentDataProperty:"paramKind",rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.reinvocationPolicy !== undefined){
let data5 = data.reinvocationPolicy;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/reinvocationPolicy",parentData:data,parentDataProperty:"reinvocationPolicy",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.variables !== undefined){
let data6 = data.variables;
const _errs7 = errors;
if(!(validate24(data6, {instancePath:instancePath+"/variables",parentData:data,parentDataProperty:"variables",rootData}))){
vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
}
else {
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
validate1.errors = vErrors;
return errors === 0;
}
