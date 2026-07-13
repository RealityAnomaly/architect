/* @ts-self-types="./Subject.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"group":{"$ref":"paFmQZwN-6FcErKsPQUgUpVcYWncNIblC-7RIi-T_CY"},"kind":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"serviceAccount":{"$ref":"m8HWyxDjM34TEHjSTyo4LtLY14eeHdBezz7QAbo249w"},"user":{"$ref":"FiWuNwE5CA5maWAUcL6tIVvyzi6vg-8SihWJgoi69cQ"}},"required":["kind"],"type":"object","$id":"io.k8s.api.flowcontrol.v1beta1.Subject"};
const schema1 = {"nullableRef":"io.k8s.api.flowcontrol.v1beta1.GroupSubject#"};
const schema2 = {};

import { validate as validate2 } from "././GroupSubject.js";


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

const schema3 = {"type":"string"};

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate5.errors = vErrors;
return errors === 0;
}

const schema4 = {"nullableRef":"io.k8s.api.flowcontrol.v1beta1.ServiceAccountSubject#"};
const schema5 = {};

import { validate as validate8 } from "././ServiceAccountSubject.js";


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate8(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
}
validate7.errors = vErrors;
return errors === 0;
}

const schema6 = {"nullableRef":"io.k8s.api.flowcontrol.v1beta1.UserSubject#"};
const schema7 = {};

import { validate as validate12 } from "././UserSubject.js";


function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate12(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
}
validate11.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.flowcontrol.v1beta1.Subject" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.kind === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "kind"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.group !== undefined){
let data0 = data.group;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/group",parentData:data,parentDataProperty:"group",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.kind !== undefined){
let data1 = data.kind;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.serviceAccount !== undefined){
let data2 = data.serviceAccount;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/serviceAccount",parentData:data,parentDataProperty:"serviceAccount",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.user !== undefined){
let data3 = data.user;
const _errs4 = errors;
if(!(validate11(data3, {instancePath:instancePath+"/user",parentData:data,parentDataProperty:"user",rootData}))){
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
