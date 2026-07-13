import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate6;
const schema5 = {"properties":{"$ref":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"$schema":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"additionalItems":{"$ref":"zWsg0gIIsCB3d1S54fnxnM0T_hL_5f6JV7YYqUiH884"},"additionalProperties":{"$ref":"zWsg0gIIsCB3d1S54fnxnM0T_hL_5f6JV7YYqUiH884"},"allOf":{"$ref":"fOdZ5ea48HI9cfaYuW5fw-JpPrm1mRcWGvbk_U8CLjA"},"anyOf":{"items":{"$ref":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"},"type":"array","nullable":true},"default":{"nullableRef":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSON#"},"definitions":{"additionalProperties":{"$ref":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"},"type":"object","nullable":true},"dependencies":{"additionalProperties":{"$ref":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaPropsOrStringArray#"},"type":"object","nullable":true},"enum":{"items":{"$ref":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSON#"},"type":"array","nullable":true},"example":{"nullableRef":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSON#"},"exclusiveMaximum":{"type":"boolean","nullable":true},"exclusiveMinimum":{"type":"boolean","nullable":true},"externalDocs":{"nullableRef":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.ExternalDocumentation#"},"format":{"type":"string","nullable":true},"id":{"type":"string","nullable":true},"items":{"nullableRef":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaPropsOrArray#"},"maxItems":{"format":"int64","type":"integer","nullable":true},"maxLength":{"format":"int64","type":"integer","nullable":true},"maxProperties":{"format":"int64","type":"integer","nullable":true},"maximum":{"format":"double","type":"number","nullable":true},"minItems":{"format":"int64","type":"integer","nullable":true},"minLength":{"format":"int64","type":"integer","nullable":true},"minProperties":{"format":"int64","type":"integer","nullable":true},"minimum":{"format":"double","type":"number","nullable":true},"multipleOf":{"format":"double","type":"number","nullable":true},"not":{"nullableRef":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"},"nullable":{"type":"boolean","nullable":true},"oneOf":{"items":{"$ref":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"},"type":"array","nullable":true},"pattern":{"type":"string","nullable":true},"patternProperties":{"additionalProperties":{"$ref":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"},"type":"object","nullable":true},"properties":{"additionalProperties":{"$ref":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"},"type":"object","nullable":true},"required":{"items":{"type":"string"},"type":"array","nullable":true},"title":{"type":"string","nullable":true},"type":{"type":"string","nullable":true},"uniqueItems":{"type":"boolean","nullable":true}},"type":"object","$id":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps"};
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

const schema1 = {"nullableRef":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaPropsOrBool#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrBool.js";


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

const schema6 = {};

import { validate as validate11 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSON.js";

const schema7 = {};

import { validate as validate13 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrStringArray.js";

const schema8 = {};

import { validate as validate17 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ExternalDocumentation.js";

const schema9 = {};

import { validate as validate19 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrArray.js";

const wrapper0 = {validate: validate4};
const schema3 = {"items":{"$ref":"IN8A5AqJw7gEYivHogFC9LhnEFhnBl_Q0ZulkfovReI"},"type":"array","nullable":true};
const schema4 = {"$ref":"io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#"};

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate6(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
validate5.errors = vErrors;
return errors === 0;
}


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate5(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
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
validate4.errors = vErrors;
return errors === 0;
}

const wrapper1 = {validate: validate6};
const formats0 = formats.int64;
const formats6 = formats.double;

function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.$ref !== undefined){
let data0 = data.$ref;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/$ref",parentData:data,parentDataProperty:"$ref",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.$schema !== undefined){
let data1 = data.$schema;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/$schema",parentData:data,parentDataProperty:"$schema",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.additionalItems !== undefined){
let data2 = data.additionalItems;
const _errs3 = errors;
if(!(validate1(data2, {instancePath:instancePath+"/additionalItems",parentData:data,parentDataProperty:"additionalItems",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.additionalProperties !== undefined){
let data3 = data.additionalProperties;
const _errs4 = errors;
if(!(validate1(data3, {instancePath:instancePath+"/additionalProperties",parentData:data,parentDataProperty:"additionalProperties",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.allOf !== undefined){
let data4 = data.allOf;
const _errs5 = errors;
if(!(wrapper0.validate(data4, {instancePath:instancePath+"/allOf",parentData:data,parentDataProperty:"allOf",rootData}))){
vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.anyOf !== undefined){
let data5 = data.anyOf;
const _errs6 = errors;
if((!(Array.isArray(data5))) && (data5 !== null)){
const err0 = {instancePath:instancePath+"/anyOf",schemaPath:"#/properties/anyOf/type",keyword:"type",params:{type: "array"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
const _errs7 = errors;
const _errs8 = errors;
if(Array.isArray(data5)){
let valid2 = true;
const len0 = data5.length;
for(let i0=0; i0<len0; i0++){
let data6 = data5[i0];
const _errs9 = errors;
if(!(wrapper1.validate(data6, {instancePath:instancePath+"/anyOf/" + i0,parentData:data5,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? wrapper1.validate.errors : vErrors.concat(wrapper1.validate.errors);
errors = vErrors.length;
}
else {
}
var valid1 = _errs9 === errors;
if(!valid1){
valid2 = false;
}
}
}
var valid0 = _errs6 === errors;
}
if(data.default !== undefined){
let data7 = data.default;
const _errs10 = errors;
if(data7 !== null){
if(!(validate11(data7, {instancePath:instancePath+"/default",parentData:data,parentDataProperty:"default",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
}
var valid0 = _errs10 === errors;
}
if(data.definitions !== undefined){
let data8 = data.definitions;
const _errs11 = errors;
if((!(data8 && typeof data8 == "object" && !Array.isArray(data8))) && (data8 !== null)){
const err1 = {instancePath:instancePath+"/definitions",schemaPath:"#/properties/definitions/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
const _errs12 = errors;
const _errs13 = errors;
if(data8 && typeof data8 == "object" && !Array.isArray(data8)){
const _errs14 = errors;
for(const key0 in data8){
let data9 = data8[key0];
const _errs15 = errors;
if(!(wrapper1.validate(data9, {instancePath:instancePath+"/definitions/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data8,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? wrapper1.validate.errors : vErrors.concat(wrapper1.validate.errors);
errors = vErrors.length;
}
else {
}
var valid3 = _errs15 === errors;
}
}
var valid0 = _errs11 === errors;
}
if(data.dependencies !== undefined){
let data10 = data.dependencies;
const _errs16 = errors;
if((!(data10 && typeof data10 == "object" && !Array.isArray(data10))) && (data10 !== null)){
const err2 = {instancePath:instancePath+"/dependencies",schemaPath:"#/properties/dependencies/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
const _errs17 = errors;
const _errs18 = errors;
if(data10 && typeof data10 == "object" && !Array.isArray(data10)){
const _errs19 = errors;
for(const key1 in data10){
let data11 = data10[key1];
const _errs20 = errors;
if(!(validate13(data11, {instancePath:instancePath+"/dependencies/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data10,parentDataProperty:key1,rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid4 = _errs20 === errors;
}
}
var valid0 = _errs16 === errors;
}
if(data.enum !== undefined){
let data12 = data.enum;
const _errs21 = errors;
if((!(Array.isArray(data12))) && (data12 !== null)){
const err3 = {instancePath:instancePath+"/enum",schemaPath:"#/properties/enum/type",keyword:"type",params:{type: "array"}};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
const _errs22 = errors;
const _errs23 = errors;
if(Array.isArray(data12)){
let valid6 = true;
const len1 = data12.length;
for(let i1=0; i1<len1; i1++){
let data13 = data12[i1];
const _errs24 = errors;
if(!(validate11(data13, {instancePath:instancePath+"/enum/" + i1,parentData:data12,parentDataProperty:i1,rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid5 = _errs24 === errors;
if(!valid5){
valid6 = false;
}
}
}
var valid0 = _errs21 === errors;
}
if(data.example !== undefined){
let data14 = data.example;
const _errs25 = errors;
if(data14 !== null){
if(!(validate11(data14, {instancePath:instancePath+"/example",parentData:data,parentDataProperty:"example",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
}
var valid0 = _errs25 === errors;
}
if(data.exclusiveMaximum !== undefined){
let data15 = data.exclusiveMaximum;
const _errs26 = errors;
if((typeof data15 !== "boolean") && (data15 !== null)){
const err4 = {instancePath:instancePath+"/exclusiveMaximum",schemaPath:"#/properties/exclusiveMaximum/type",keyword:"type",params:{type: "boolean"}};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
const _errs27 = errors;
const _errs28 = errors;
var valid0 = _errs26 === errors;
}
if(data.exclusiveMinimum !== undefined){
let data16 = data.exclusiveMinimum;
const _errs29 = errors;
if((typeof data16 !== "boolean") && (data16 !== null)){
const err5 = {instancePath:instancePath+"/exclusiveMinimum",schemaPath:"#/properties/exclusiveMinimum/type",keyword:"type",params:{type: "boolean"}};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
const _errs30 = errors;
const _errs31 = errors;
var valid0 = _errs29 === errors;
}
if(data.externalDocs !== undefined){
let data17 = data.externalDocs;
const _errs32 = errors;
if(data17 !== null){
if(!(validate17(data17, {instancePath:instancePath+"/externalDocs",parentData:data,parentDataProperty:"externalDocs",rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
errors = vErrors.length;
}
else {
}
}
var valid0 = _errs32 === errors;
}
if(data.format !== undefined){
let data18 = data.format;
const _errs33 = errors;
if((typeof data18 !== "string") && (data18 !== null)){
const err6 = {instancePath:instancePath+"/format",schemaPath:"#/properties/format/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
const _errs34 = errors;
const _errs35 = errors;
var valid0 = _errs33 === errors;
}
if(data.id !== undefined){
let data19 = data.id;
const _errs36 = errors;
if((typeof data19 !== "string") && (data19 !== null)){
const err7 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
const _errs37 = errors;
const _errs38 = errors;
var valid0 = _errs36 === errors;
}
if(data.items !== undefined){
let data20 = data.items;
const _errs39 = errors;
if(data20 !== null){
if(!(validate19(data20, {instancePath:instancePath+"/items",parentData:data,parentDataProperty:"items",rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
}
var valid0 = _errs39 === errors;
}
if(data.maxItems !== undefined){
let data21 = data.maxItems;
const _errs40 = errors;
if((!(((typeof data21 == "number") && (!(data21 % 1) && !isNaN(data21))) && (isFinite(data21)))) && (data21 !== null)){
const err8 = {instancePath:instancePath+"/maxItems",schemaPath:"#/properties/maxItems/type",keyword:"type",params:{type: "integer"}};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
const _errs41 = errors;
const _errs42 = errors;
if((typeof data21 == "number") && (isFinite(data21))){
if(!(formats0.validate(data21))){
const err9 = {instancePath:instancePath+"/maxItems",schemaPath:"#/properties/maxItems/format",keyword:"format",params:{format: "int64"}};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
}
if(typeof data21 === "string"){
}
var valid0 = _errs40 === errors;
}
if(data.maxLength !== undefined){
let data22 = data.maxLength;
const _errs43 = errors;
if((!(((typeof data22 == "number") && (!(data22 % 1) && !isNaN(data22))) && (isFinite(data22)))) && (data22 !== null)){
const err10 = {instancePath:instancePath+"/maxLength",schemaPath:"#/properties/maxLength/type",keyword:"type",params:{type: "integer"}};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
const _errs44 = errors;
const _errs45 = errors;
if((typeof data22 == "number") && (isFinite(data22))){
if(!(formats0.validate(data22))){
const err11 = {instancePath:instancePath+"/maxLength",schemaPath:"#/properties/maxLength/format",keyword:"format",params:{format: "int64"}};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
}
if(typeof data22 === "string"){
}
var valid0 = _errs43 === errors;
}
if(data.maxProperties !== undefined){
let data23 = data.maxProperties;
const _errs46 = errors;
if((!(((typeof data23 == "number") && (!(data23 % 1) && !isNaN(data23))) && (isFinite(data23)))) && (data23 !== null)){
const err12 = {instancePath:instancePath+"/maxProperties",schemaPath:"#/properties/maxProperties/type",keyword:"type",params:{type: "integer"}};
if(vErrors === null){
vErrors = [err12];
}
else {
vErrors.push(err12);
}
errors++;
}
const _errs47 = errors;
const _errs48 = errors;
if((typeof data23 == "number") && (isFinite(data23))){
if(!(formats0.validate(data23))){
const err13 = {instancePath:instancePath+"/maxProperties",schemaPath:"#/properties/maxProperties/format",keyword:"format",params:{format: "int64"}};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
}
if(typeof data23 === "string"){
}
var valid0 = _errs46 === errors;
}
if(data.maximum !== undefined){
let data24 = data.maximum;
const _errs49 = errors;
if((!((typeof data24 == "number") && (isFinite(data24)))) && (data24 !== null)){
const err14 = {instancePath:instancePath+"/maximum",schemaPath:"#/properties/maximum/type",keyword:"type",params:{type: "number"}};
if(vErrors === null){
vErrors = [err14];
}
else {
vErrors.push(err14);
}
errors++;
}
const _errs50 = errors;
const _errs51 = errors;
if((typeof data24 == "number") && (isFinite(data24))){
if(!(formats6.validate(data24))){
const err15 = {instancePath:instancePath+"/maximum",schemaPath:"#/properties/maximum/format",keyword:"format",params:{format: "double"}};
if(vErrors === null){
vErrors = [err15];
}
else {
vErrors.push(err15);
}
errors++;
}
}
if(typeof data24 === "string"){
}
var valid0 = _errs49 === errors;
}
if(data.minItems !== undefined){
let data25 = data.minItems;
const _errs52 = errors;
if((!(((typeof data25 == "number") && (!(data25 % 1) && !isNaN(data25))) && (isFinite(data25)))) && (data25 !== null)){
const err16 = {instancePath:instancePath+"/minItems",schemaPath:"#/properties/minItems/type",keyword:"type",params:{type: "integer"}};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
const _errs53 = errors;
const _errs54 = errors;
if((typeof data25 == "number") && (isFinite(data25))){
if(!(formats0.validate(data25))){
const err17 = {instancePath:instancePath+"/minItems",schemaPath:"#/properties/minItems/format",keyword:"format",params:{format: "int64"}};
if(vErrors === null){
vErrors = [err17];
}
else {
vErrors.push(err17);
}
errors++;
}
}
if(typeof data25 === "string"){
}
var valid0 = _errs52 === errors;
}
if(data.minLength !== undefined){
let data26 = data.minLength;
const _errs55 = errors;
if((!(((typeof data26 == "number") && (!(data26 % 1) && !isNaN(data26))) && (isFinite(data26)))) && (data26 !== null)){
const err18 = {instancePath:instancePath+"/minLength",schemaPath:"#/properties/minLength/type",keyword:"type",params:{type: "integer"}};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
}
const _errs56 = errors;
const _errs57 = errors;
if((typeof data26 == "number") && (isFinite(data26))){
if(!(formats0.validate(data26))){
const err19 = {instancePath:instancePath+"/minLength",schemaPath:"#/properties/minLength/format",keyword:"format",params:{format: "int64"}};
if(vErrors === null){
vErrors = [err19];
}
else {
vErrors.push(err19);
}
errors++;
}
}
if(typeof data26 === "string"){
}
var valid0 = _errs55 === errors;
}
if(data.minProperties !== undefined){
let data27 = data.minProperties;
const _errs58 = errors;
if((!(((typeof data27 == "number") && (!(data27 % 1) && !isNaN(data27))) && (isFinite(data27)))) && (data27 !== null)){
const err20 = {instancePath:instancePath+"/minProperties",schemaPath:"#/properties/minProperties/type",keyword:"type",params:{type: "integer"}};
if(vErrors === null){
vErrors = [err20];
}
else {
vErrors.push(err20);
}
errors++;
}
const _errs59 = errors;
const _errs60 = errors;
if((typeof data27 == "number") && (isFinite(data27))){
if(!(formats0.validate(data27))){
const err21 = {instancePath:instancePath+"/minProperties",schemaPath:"#/properties/minProperties/format",keyword:"format",params:{format: "int64"}};
if(vErrors === null){
vErrors = [err21];
}
else {
vErrors.push(err21);
}
errors++;
}
}
if(typeof data27 === "string"){
}
var valid0 = _errs58 === errors;
}
if(data.minimum !== undefined){
let data28 = data.minimum;
const _errs61 = errors;
if((!((typeof data28 == "number") && (isFinite(data28)))) && (data28 !== null)){
const err22 = {instancePath:instancePath+"/minimum",schemaPath:"#/properties/minimum/type",keyword:"type",params:{type: "number"}};
if(vErrors === null){
vErrors = [err22];
}
else {
vErrors.push(err22);
}
errors++;
}
const _errs62 = errors;
const _errs63 = errors;
if((typeof data28 == "number") && (isFinite(data28))){
if(!(formats6.validate(data28))){
const err23 = {instancePath:instancePath+"/minimum",schemaPath:"#/properties/minimum/format",keyword:"format",params:{format: "double"}};
if(vErrors === null){
vErrors = [err23];
}
else {
vErrors.push(err23);
}
errors++;
}
}
if(typeof data28 === "string"){
}
var valid0 = _errs61 === errors;
}
if(data.multipleOf !== undefined){
let data29 = data.multipleOf;
const _errs64 = errors;
if((!((typeof data29 == "number") && (isFinite(data29)))) && (data29 !== null)){
const err24 = {instancePath:instancePath+"/multipleOf",schemaPath:"#/properties/multipleOf/type",keyword:"type",params:{type: "number"}};
if(vErrors === null){
vErrors = [err24];
}
else {
vErrors.push(err24);
}
errors++;
}
const _errs65 = errors;
const _errs66 = errors;
if((typeof data29 == "number") && (isFinite(data29))){
if(!(formats6.validate(data29))){
const err25 = {instancePath:instancePath+"/multipleOf",schemaPath:"#/properties/multipleOf/format",keyword:"format",params:{format: "double"}};
if(vErrors === null){
vErrors = [err25];
}
else {
vErrors.push(err25);
}
errors++;
}
}
if(typeof data29 === "string"){
}
var valid0 = _errs64 === errors;
}
if(data.not !== undefined){
let data30 = data.not;
const _errs67 = errors;
if(data30 !== null){
if(!(wrapper1.validate(data30, {instancePath:instancePath+"/not",parentData:data,parentDataProperty:"not",rootData}))){
vErrors = vErrors === null ? wrapper1.validate.errors : vErrors.concat(wrapper1.validate.errors);
errors = vErrors.length;
}
else {
}
}
var valid0 = _errs67 === errors;
}
if(data.nullable !== undefined){
let data31 = data.nullable;
const _errs68 = errors;
if((typeof data31 !== "boolean") && (data31 !== null)){
const err26 = {instancePath:instancePath+"/nullable",schemaPath:"#/properties/nullable/type",keyword:"type",params:{type: "boolean"}};
if(vErrors === null){
vErrors = [err26];
}
else {
vErrors.push(err26);
}
errors++;
}
const _errs69 = errors;
const _errs70 = errors;
var valid0 = _errs68 === errors;
}
if(data.oneOf !== undefined){
let data32 = data.oneOf;
const _errs71 = errors;
if((!(Array.isArray(data32))) && (data32 !== null)){
const err27 = {instancePath:instancePath+"/oneOf",schemaPath:"#/properties/oneOf/type",keyword:"type",params:{type: "array"}};
if(vErrors === null){
vErrors = [err27];
}
else {
vErrors.push(err27);
}
errors++;
}
const _errs72 = errors;
const _errs73 = errors;
if(Array.isArray(data32)){
let valid8 = true;
const len2 = data32.length;
for(let i2=0; i2<len2; i2++){
let data33 = data32[i2];
const _errs74 = errors;
if(!(wrapper1.validate(data33, {instancePath:instancePath+"/oneOf/" + i2,parentData:data32,parentDataProperty:i2,rootData}))){
vErrors = vErrors === null ? wrapper1.validate.errors : vErrors.concat(wrapper1.validate.errors);
errors = vErrors.length;
}
else {
}
var valid7 = _errs74 === errors;
if(!valid7){
valid8 = false;
}
}
}
var valid0 = _errs71 === errors;
}
if(data.pattern !== undefined){
let data34 = data.pattern;
const _errs75 = errors;
if((typeof data34 !== "string") && (data34 !== null)){
const err28 = {instancePath:instancePath+"/pattern",schemaPath:"#/properties/pattern/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err28];
}
else {
vErrors.push(err28);
}
errors++;
}
const _errs76 = errors;
const _errs77 = errors;
var valid0 = _errs75 === errors;
}
if(data.patternProperties !== undefined){
let data35 = data.patternProperties;
const _errs78 = errors;
if((!(data35 && typeof data35 == "object" && !Array.isArray(data35))) && (data35 !== null)){
const err29 = {instancePath:instancePath+"/patternProperties",schemaPath:"#/properties/patternProperties/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err29];
}
else {
vErrors.push(err29);
}
errors++;
}
const _errs79 = errors;
const _errs80 = errors;
if(data35 && typeof data35 == "object" && !Array.isArray(data35)){
const _errs81 = errors;
for(const key2 in data35){
let data36 = data35[key2];
const _errs82 = errors;
if(!(wrapper1.validate(data36, {instancePath:instancePath+"/patternProperties/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data35,parentDataProperty:key2,rootData}))){
vErrors = vErrors === null ? wrapper1.validate.errors : vErrors.concat(wrapper1.validate.errors);
errors = vErrors.length;
}
else {
}
var valid9 = _errs82 === errors;
}
}
var valid0 = _errs78 === errors;
}
if(data.properties !== undefined){
let data37 = data.properties;
const _errs83 = errors;
if((!(data37 && typeof data37 == "object" && !Array.isArray(data37))) && (data37 !== null)){
const err30 = {instancePath:instancePath+"/properties",schemaPath:"#/properties/properties/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err30];
}
else {
vErrors.push(err30);
}
errors++;
}
const _errs84 = errors;
const _errs85 = errors;
if(data37 && typeof data37 == "object" && !Array.isArray(data37)){
const _errs86 = errors;
for(const key3 in data37){
let data38 = data37[key3];
const _errs87 = errors;
if(!(wrapper1.validate(data38, {instancePath:instancePath+"/properties/" + key3.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data37,parentDataProperty:key3,rootData}))){
vErrors = vErrors === null ? wrapper1.validate.errors : vErrors.concat(wrapper1.validate.errors);
errors = vErrors.length;
}
else {
}
var valid10 = _errs87 === errors;
}
}
var valid0 = _errs83 === errors;
}
if(data.required !== undefined){
let data39 = data.required;
const _errs88 = errors;
if((!(Array.isArray(data39))) && (data39 !== null)){
const err31 = {instancePath:instancePath+"/required",schemaPath:"#/properties/required/type",keyword:"type",params:{type: "array"}};
if(vErrors === null){
vErrors = [err31];
}
else {
vErrors.push(err31);
}
errors++;
}
const _errs89 = errors;
const _errs90 = errors;
if(Array.isArray(data39)){
let valid12 = true;
const len3 = data39.length;
for(let i3=0; i3<len3; i3++){
let data40 = data39[i3];
const _errs91 = errors;
if(typeof data40 !== "string"){
const err32 = {instancePath:instancePath+"/required/" + i3,schemaPath:"#/properties/required/items/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err32];
}
else {
vErrors.push(err32);
}
errors++;
}
const _errs92 = errors;
var valid11 = _errs91 === errors;
if(!valid11){
valid12 = false;
}
}
}
var valid0 = _errs88 === errors;
}
if(data.title !== undefined){
let data41 = data.title;
const _errs93 = errors;
if((typeof data41 !== "string") && (data41 !== null)){
const err33 = {instancePath:instancePath+"/title",schemaPath:"#/properties/title/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err33];
}
else {
vErrors.push(err33);
}
errors++;
}
const _errs94 = errors;
const _errs95 = errors;
var valid0 = _errs93 === errors;
}
if(data.type !== undefined){
let data42 = data.type;
const _errs96 = errors;
if((typeof data42 !== "string") && (data42 !== null)){
const err34 = {instancePath:instancePath+"/type",schemaPath:"#/properties/type/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err34];
}
else {
vErrors.push(err34);
}
errors++;
}
const _errs97 = errors;
const _errs98 = errors;
var valid0 = _errs96 === errors;
}
if(data.uniqueItems !== undefined){
let data43 = data.uniqueItems;
const _errs99 = errors;
if((typeof data43 !== "boolean") && (data43 !== null)){
const err35 = {instancePath:instancePath+"/uniqueItems",schemaPath:"#/properties/uniqueItems/type",keyword:"type",params:{type: "boolean"}};
if(vErrors === null){
vErrors = [err35];
}
else {
vErrors.push(err35);
}
errors++;
}
const _errs100 = errors;
const _errs101 = errors;
var valid0 = _errs99 === errors;
}
}
else {
const err36 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err36];
}
else {
vErrors.push(err36);
}
errors++;
}
validate6.errors = vErrors;
return errors === 0;
}
