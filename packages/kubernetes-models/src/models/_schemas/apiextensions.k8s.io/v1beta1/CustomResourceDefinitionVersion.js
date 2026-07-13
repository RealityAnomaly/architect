/* @ts-self-types="./CustomResourceDefinitionVersion.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"additionalPrinterColumns":{"$ref":"2YqhsuMaeTkSLoHiFXhRmbpc7MpB4HU83FZKddCde7k"},"deprecated":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"deprecationWarning":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"schema":{"$ref":"vsfUQjaO7IJJBzQa-n4UGb-Z_LfsRGSzd5X1k3PJ8tk"},"served":{"$ref":"C6hei-tisjs1kz7xDhDJSDhsoUlCo3cumzNSDD7Je7A"},"storage":{"$ref":"C6hei-tisjs1kz7xDhDJSDhsoUlCo3cumzNSDD7Je7A"},"subresources":{"$ref":"z2gm6KOSgSAzb5jTB5siqa1om27pQf0T93s-0TmQs7U"}},"required":["name","served","storage"],"type":"object","$id":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionVersion"};
const schema2 = {"items":{"$ref":"yLR3ia_8uA2ASu0LtIcXiM1vbHKsNT-iDv_emXt_P9w"},"type":"array","nullable":true};
const schema3 = {"$ref":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceColumnDefinition#"};
const schema4 = {};

import { validate as validate4 } from "././CustomResourceColumnDefinition.js";


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate4(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
validate3.errors = vErrors;
return errors === 0;
}


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate3(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
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
validate2.errors = vErrors;
return errors === 0;
}

const schema5 = {"type":"boolean","nullable":true};

function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate8.errors = vErrors;
return errors === 0;
}

const schema6 = {"type":"string","nullable":true};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate10.errors = vErrors;
return errors === 0;
}

const schema7 = {"type":"string"};

function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate12.errors = vErrors;
return errors === 0;
}

const schema8 = {"nullableRef":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceValidation#"};
const schema9 = {};

import { validate as validate15 } from "././CustomResourceValidation.js";


function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate15(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
}
validate14.errors = vErrors;
return errors === 0;
}

const schema0 = {"type":"boolean"};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(typeof data !== "boolean"){
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
validate0.errors = vErrors;
return errors === 0;
}

const schema10 = {"nullableRef":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresources#"};
const schema11 = {};

import { validate as validate21 } from "././CustomResourceSubresources.js";


function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate21(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
errors = vErrors.length;
}
else {
}
}
validate20.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionVersion" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.name === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "name"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.served === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "served"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.storage === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "storage"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.additionalPrinterColumns !== undefined){
let data0 = data.additionalPrinterColumns;
const _errs1 = errors;
if(!(validate2(data0, {instancePath:instancePath+"/additionalPrinterColumns",parentData:data,parentDataProperty:"additionalPrinterColumns",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.deprecated !== undefined){
let data1 = data.deprecated;
const _errs2 = errors;
if(!(validate8(data1, {instancePath:instancePath+"/deprecated",parentData:data,parentDataProperty:"deprecated",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.deprecationWarning !== undefined){
let data2 = data.deprecationWarning;
const _errs3 = errors;
if(!(validate10(data2, {instancePath:instancePath+"/deprecationWarning",parentData:data,parentDataProperty:"deprecationWarning",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.name !== undefined){
let data3 = data.name;
const _errs4 = errors;
if(!(validate12(data3, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.schema !== undefined){
let data4 = data.schema;
const _errs5 = errors;
if(!(validate14(data4, {instancePath:instancePath+"/schema",parentData:data,parentDataProperty:"schema",rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.served !== undefined){
let data5 = data.served;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/served",parentData:data,parentDataProperty:"served",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.storage !== undefined){
let data6 = data.storage;
const _errs7 = errors;
if(!(validate0(data6, {instancePath:instancePath+"/storage",parentData:data,parentDataProperty:"storage",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.subresources !== undefined){
let data7 = data.subresources;
const _errs8 = errors;
if(!(validate20(data7, {instancePath:instancePath+"/subresources",parentData:data,parentDataProperty:"subresources",rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
}
else {
const err3 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
validate1.errors = vErrors;
return errors === 0;
}
