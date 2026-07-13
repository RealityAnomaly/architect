/* @ts-self-types="./IngressSpec.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"backend":{"$ref":"tAajsKk6_rWCU-8uOr0yyu2CMcldWobVqWV6ilbXeAI"},"ingressClassName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"rules":{"$ref":"u7r08o3R6mx3NIs2TjdSY2A90e9lu1nkD3vmQsOYAOk"},"tls":{"$ref":"BhKC4X8T-4PB1lORwaR9Vfpe8kIUln76hSaJDoyGB7I"}},"type":"object","$id":"io.k8s.api.extensions.v1beta1.IngressSpec"};
const schema1 = {"nullableRef":"io.k8s.api.extensions.v1beta1.IngressBackend#"};
const schema2 = {};

import { validate as validate2 } from "././IngressBackend.js";


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

const schema3 = {"type":"string","nullable":true};

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate5.errors = vErrors;
return errors === 0;
}

const schema4 = {"items":{"$ref":"0TBfeq4mTph2eW8svRgvabZDHyGyepQ8lEQpBW7bJaU"},"type":"array","nullable":true};
const schema5 = {"$ref":"io.k8s.api.extensions.v1beta1.IngressRule#"};
const schema6 = {};

import { validate as validate9 } from "././IngressRule.js";


function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate9(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
validate8.errors = vErrors;
return errors === 0;
}


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate8(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
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
validate7.errors = vErrors;
return errors === 0;
}

const schema7 = {"items":{"$ref":"tIiWiJwdfh9VfCr7OKkaERpBYcgAT54Jk2inSjLOQMw"},"type":"array","nullable":true};
const schema8 = {"$ref":"io.k8s.api.extensions.v1beta1.IngressTLS#"};
const schema9 = {};

import { validate as validate15 } from "././IngressTLS.js";


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


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.extensions.v1beta1.IngressSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.backend !== undefined){
let data0 = data.backend;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/backend",parentData:data,parentDataProperty:"backend",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.ingressClassName !== undefined){
let data1 = data.ingressClassName;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/ingressClassName",parentData:data,parentDataProperty:"ingressClassName",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.rules !== undefined){
let data2 = data.rules;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/rules",parentData:data,parentDataProperty:"rules",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.tls !== undefined){
let data3 = data.tls;
const _errs4 = errors;
if(!(validate13(data3, {instancePath:instancePath+"/tls",parentData:data,parentDataProperty:"tls",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
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
