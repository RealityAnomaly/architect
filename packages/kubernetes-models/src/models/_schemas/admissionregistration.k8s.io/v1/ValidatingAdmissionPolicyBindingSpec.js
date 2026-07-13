/* @ts-self-types="./ValidatingAdmissionPolicyBindingSpec.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"matchResources":{"$ref":"73ALkj3Px5oyNUnchRkDz-wTuW7-nl6Zflwnowe4c3c"},"paramRef":{"$ref":"JgIUlq0oEHPgEgTtS8d2zGd_I71apI7dMgQPpnxyMZc"},"policyName":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"validationActions":{"$ref":"uqUtVyG9D2UAWDvqosEgVMtwK5kI3TMy2eLbDZB452I"}},"required":["policyName","validationActions"],"type":"object","$id":"io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBindingSpec"};
const schema2 = {"nullableRef":"io.k8s.api.admissionregistration.v1.MatchResources#"};
const schema3 = {};

import { validate as validate3 } from "././MatchResources.js";


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate3(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
}
validate2.errors = vErrors;
return errors === 0;
}

const schema4 = {"nullableRef":"io.k8s.api.admissionregistration.v1.ParamRef#"};
const schema5 = {};

import { validate as validate7 } from "././ParamRef.js";


function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate7(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
}
validate6.errors = vErrors;
return errors === 0;
}

const schema0 = {"type":"string"};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate0.errors = vErrors;
return errors === 0;
}

const schema6 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array"};

function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
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
validate11.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBindingSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.policyName === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "policyName"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.validationActions === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "validationActions"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.matchResources !== undefined){
let data0 = data.matchResources;
const _errs1 = errors;
if(!(validate2(data0, {instancePath:instancePath+"/matchResources",parentData:data,parentDataProperty:"matchResources",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.paramRef !== undefined){
let data1 = data.paramRef;
const _errs2 = errors;
if(!(validate6(data1, {instancePath:instancePath+"/paramRef",parentData:data,parentDataProperty:"paramRef",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.policyName !== undefined){
let data2 = data.policyName;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/policyName",parentData:data,parentDataProperty:"policyName",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.validationActions !== undefined){
let data3 = data.validationActions;
const _errs4 = errors;
if(!(validate11(data3, {instancePath:instancePath+"/validationActions",parentData:data,parentDataProperty:"validationActions",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
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
validate1.errors = vErrors;
return errors === 0;
}
