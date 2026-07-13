/* @ts-self-types="./WeightedPodAffinityTerm.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate0;
const schema0 = {"properties":{"podAffinityTerm":{"$ref":"n4vE2rPdGkFdw3uvpdNq6zEnxI8ml4th5OptthsCdS4"},"weight":{"$ref":"6VbGrbfqnPJ4dMmNewHbRn4M59VZOmu0uhV1edBN8qE"}},"required":["weight","podAffinityTerm"],"type":"object","$id":"io.k8s.api.core.v1.WeightedPodAffinityTerm"};
const schema1 = {"$ref":"io.k8s.api.core.v1.PodAffinityTerm#"};
const schema2 = {};

import { validate as validate2 } from "././PodAffinityTerm.js";


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate2(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
validate1.errors = vErrors;
return errors === 0;
}

const schema3 = {"format":"int32","type":"integer"};
const formats0 = formats.int32;

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate5.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.WeightedPodAffinityTerm" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.weight === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "weight"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.podAffinityTerm === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "podAffinityTerm"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.podAffinityTerm !== undefined){
let data0 = data.podAffinityTerm;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/podAffinityTerm",parentData:data,parentDataProperty:"podAffinityTerm",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.weight !== undefined){
let data1 = data.weight;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/weight",parentData:data,parentDataProperty:"weight",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
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
validate0.errors = vErrors;
return errors === 0;
}
