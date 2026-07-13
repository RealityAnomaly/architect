/* @ts-self-types="./MutatingAdmissionPolicyBindingSpec.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"matchResources":{"$ref":"z2uclWS4Axm5lAAiAJuQlWwMKHxj93Oi06AP-8J4EFQ"},"paramRef":{"$ref":"0zEUWYwerYbs_qQtJ31c6u78b3pkfG0wQDggUyYr-u8"},"policyName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object","$id":"io.k8s.api.admissionregistration.v1alpha1.MutatingAdmissionPolicyBindingSpec"};
const schema1 = {"nullableRef":"io.k8s.api.admissionregistration.v1alpha1.MatchResources#"};
const schema2 = {};

import { validate as validate2 } from "././MatchResources.js";


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

const schema3 = {"nullableRef":"io.k8s.api.admissionregistration.v1alpha1.ParamRef#"};
const schema4 = {};

import { validate as validate6 } from "././ParamRef.js";


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate6(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
}
validate5.errors = vErrors;
return errors === 0;
}

const schema5 = {"type":"string","nullable":true};

function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate9.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.admissionregistration.v1alpha1.MutatingAdmissionPolicyBindingSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.matchResources !== undefined){
let data0 = data.matchResources;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/matchResources",parentData:data,parentDataProperty:"matchResources",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.paramRef !== undefined){
let data1 = data.paramRef;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/paramRef",parentData:data,parentDataProperty:"paramRef",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.policyName !== undefined){
let data2 = data.policyName;
const _errs3 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/policyName",parentData:data,parentDataProperty:"policyName",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
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
validate0.errors = vErrors;
return errors === 0;
}
