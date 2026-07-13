/* @ts-self-types="./Affinity.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"nodeAffinity":{"$ref":"MjpntAn6LDpTnq8wtNHayoIHTRWZWilzWqChfgsX5f0"},"podAffinity":{"$ref":"_2d5JOiJolIsoYs8FHFEt95U4hsMsR-Fv45MCQQy9sY"},"podAntiAffinity":{"$ref":"hTMF4UOGLzHJUO7cLIcAZlVClr01jeseVc5U-sdTnCM"}},"type":"object","$id":"io.k8s.api.core.v1.Affinity"};
const schema1 = {"nullableRef":"io.k8s.api.core.v1.NodeAffinity#"};
const schema2 = {};

import { validate as validate2 } from "././NodeAffinity.js";


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

const schema3 = {"nullableRef":"io.k8s.api.core.v1.PodAffinity#"};
const schema4 = {};

import { validate as validate6 } from "././PodAffinity.js";


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

const schema5 = {"nullableRef":"io.k8s.api.core.v1.PodAntiAffinity#"};
const schema6 = {};

import { validate as validate10 } from "././PodAntiAffinity.js";


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


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.Affinity" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.nodeAffinity !== undefined){
let data0 = data.nodeAffinity;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/nodeAffinity",parentData:data,parentDataProperty:"nodeAffinity",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.podAffinity !== undefined){
let data1 = data.podAffinity;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/podAffinity",parentData:data,parentDataProperty:"podAffinity",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.podAntiAffinity !== undefined){
let data2 = data.podAntiAffinity;
const _errs3 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/podAntiAffinity",parentData:data,parentDataProperty:"podAntiAffinity",rootData}))){
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
