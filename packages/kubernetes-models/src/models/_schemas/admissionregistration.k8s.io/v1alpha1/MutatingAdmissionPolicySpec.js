/* @ts-self-types="./MutatingAdmissionPolicySpec.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"failurePolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"matchConditions":{"$ref":"yibvEkdEjGa0jSjOAS7s1XduCHWqeL-g1G9LByrgd6A"},"matchConstraints":{"$ref":"z2uclWS4Axm5lAAiAJuQlWwMKHxj93Oi06AP-8J4EFQ"},"mutations":{"$ref":"N38xGGmA0tBxIWU9FpwaWlH-AasnmMh8VC0hxt-ykNo"},"paramKind":{"$ref":"5Ix6eUKHPui-V1cEELdHvBkH8W_cIzU1uDZqc8acGXQ"},"reinvocationPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"variables":{"$ref":"3nw9udUhKogeWRFDJXQprl2YBUXj2zJnTTdwegUyT9A"}},"type":"object","$id":"io.k8s.api.admissionregistration.v1alpha1.MutatingAdmissionPolicySpec"};
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

const schema2 = {"items":{"$ref":"y1gEZSgpgEb76wvqyGoOFzLNlYmk5jzMHuySyRy0vpM"},"type":"array","nullable":true};
const schema3 = {"$ref":"io.k8s.api.admissionregistration.v1alpha1.MatchCondition#"};
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

const schema5 = {"nullableRef":"io.k8s.api.admissionregistration.v1alpha1.MatchResources#"};
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

const schema7 = {"items":{"$ref":"AvgdQtuk6IjnFFV7jnwAEO7aBcIHyyCW7h10c7qd6lI"},"type":"array","nullable":true};
const schema8 = {"$ref":"io.k8s.api.admissionregistration.v1alpha1.Mutation#"};
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

const schema10 = {"nullableRef":"io.k8s.api.admissionregistration.v1alpha1.ParamKind#"};
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

const schema12 = {"items":{"$ref":"iIMsABq5attUPg0YmvdRDv3BclmC0DmSWkjcCiNnKxk"},"type":"array","nullable":true};
const schema13 = {"$ref":"io.k8s.api.admissionregistration.v1alpha1.Variable#"};
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
/*# sourceURL="io.k8s.api.admissionregistration.v1alpha1.MutatingAdmissionPolicySpec" */;
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
