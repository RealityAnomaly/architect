/* @ts-self-types="./APIServiceSpec.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate2;
const schema2 = {"properties":{"caBundle":{"$ref":"-qMnViG9CEC-V8_TFn4WYpvO2NOwI2XARBIst170yi0"},"group":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"groupPriorityMinimum":{"$ref":"6VbGrbfqnPJ4dMmNewHbRn4M59VZOmu0uhV1edBN8qE"},"insecureSkipTLSVerify":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"service":{"$ref":"bJ88O4XOBPDoyi9e3jG7fL16ufY7er1OieMZdl48J_M"},"version":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"versionPriority":{"$ref":"6VbGrbfqnPJ4dMmNewHbRn4M59VZOmu0uhV1edBN8qE"}},"required":["groupPriorityMinimum","versionPriority"],"type":"object","$id":"io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceSpec"};
const schema3 = {"format":"byte","type":"string","nullable":true};
const formats2 = formats.byte;

function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if((typeof data == "number") && (isFinite(data))){
}
if(typeof data === "string"){
if(!(formats2.validate(data))){
const err1 = {instancePath,schemaPath:"#/format",keyword:"format",params:{format: "byte"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
validate3.errors = vErrors;
return errors === 0;
}

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

const schema1 = {"format":"int32","type":"integer"};
const formats0 = formats.int32;

function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(((typeof data == "number") && (!(data % 1) && !isNaN(data))) && (isFinite(data)))){
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
validate1.errors = vErrors;
return errors === 0;
}

const schema4 = {"type":"boolean","nullable":true};

function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((typeof data !== "boolean") && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "boolean"}};
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
validate7.errors = vErrors;
return errors === 0;
}

const schema5 = {"nullableRef":"io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.ServiceReference#"};
const schema6 = {};

import { validate as validate10 } from "././ServiceReference.js";


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


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.groupPriorityMinimum === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "groupPriorityMinimum"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.versionPriority === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "versionPriority"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.caBundle !== undefined){
let data0 = data.caBundle;
const _errs1 = errors;
if(!(validate3(data0, {instancePath:instancePath+"/caBundle",parentData:data,parentDataProperty:"caBundle",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.group !== undefined){
let data1 = data.group;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/group",parentData:data,parentDataProperty:"group",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.groupPriorityMinimum !== undefined){
let data2 = data.groupPriorityMinimum;
const _errs3 = errors;
if(!(validate1(data2, {instancePath:instancePath+"/groupPriorityMinimum",parentData:data,parentDataProperty:"groupPriorityMinimum",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.insecureSkipTLSVerify !== undefined){
let data3 = data.insecureSkipTLSVerify;
const _errs4 = errors;
if(!(validate7(data3, {instancePath:instancePath+"/insecureSkipTLSVerify",parentData:data,parentDataProperty:"insecureSkipTLSVerify",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.service !== undefined){
let data4 = data.service;
const _errs5 = errors;
if(!(validate9(data4, {instancePath:instancePath+"/service",parentData:data,parentDataProperty:"service",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.version !== undefined){
let data5 = data.version;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/version",parentData:data,parentDataProperty:"version",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.versionPriority !== undefined){
let data6 = data.versionPriority;
const _errs7 = errors;
if(!(validate1(data6, {instancePath:instancePath+"/versionPriority",parentData:data,parentDataProperty:"versionPriority",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
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
validate2.errors = vErrors;
return errors === 0;
}
