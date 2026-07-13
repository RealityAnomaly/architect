/* @ts-self-types="./PodGroupSchedulingPolicy.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"basic":{"$ref":"xkjgn7W88pt5iOdXMrmuJh-J_JIME8z0PMCljEuVaiQ"},"gang":{"$ref":"lipfdOZ2BUDMrNo4iMfBjCB4Oj24Xl1n-KGmFFFxvNI"}},"type":"object","$id":"io.k8s.api.scheduling.v1alpha2.PodGroupSchedulingPolicy"};
const schema1 = {"nullableRef":"io.k8s.api.scheduling.v1alpha2.BasicSchedulingPolicy#"};
const schema2 = {};

import { validate as validate2 } from "././BasicSchedulingPolicy.js";


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

const schema3 = {"nullableRef":"io.k8s.api.scheduling.v1alpha2.GangSchedulingPolicy#"};
const schema4 = {};

import { validate as validate6 } from "././GangSchedulingPolicy.js";


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
/*# sourceURL="io.k8s.api.scheduling.v1alpha2.PodGroupSchedulingPolicy" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.basic !== undefined){
let data0 = data.basic;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/basic",parentData:data,parentDataProperty:"basic",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.gang !== undefined){
let data1 = data.gang;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/gang",parentData:data,parentDataProperty:"gang",rootData}))){
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
