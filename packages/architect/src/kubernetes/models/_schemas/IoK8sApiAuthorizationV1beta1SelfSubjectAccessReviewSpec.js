export const validate = validate0;
const schema0 = {"properties":{"nonResourceAttributes":{"$ref":"FAN_0j0o9S_oLroIv6dqemwvCJaODdRMX2-yBc5TTUY"},"resourceAttributes":{"$ref":"F7ECEbd6OemI8zv56i4nsOu4zPWtO5POrjaY3x36D50"}},"type":"object","$id":"io.k8s.api.authorization.v1beta1.SelfSubjectAccessReviewSpec"};
const schema1 = {"nullableRef":"io.k8s.api.authorization.v1beta1.NonResourceAttributes#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiAuthorizationV1beta1NonResourceAttributes.js";


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

const schema3 = {"nullableRef":"io.k8s.api.authorization.v1beta1.ResourceAttributes#"};
const schema4 = {};

import { validate as validate6 } from "./IoK8sApiAuthorizationV1beta1ResourceAttributes.js";


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


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.authorization.v1beta1.SelfSubjectAccessReviewSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.nonResourceAttributes !== undefined){
let data0 = data.nonResourceAttributes;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/nonResourceAttributes",parentData:data,parentDataProperty:"nonResourceAttributes",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.resourceAttributes !== undefined){
let data1 = data.resourceAttributes;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/resourceAttributes",parentData:data,parentDataProperty:"resourceAttributes",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
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
