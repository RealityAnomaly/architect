/* @ts-self-types="./DeploymentRollback.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"apiVersion":{"$ref":"7jsfkhcEDyoudlBfDD9y8QHrxewtIHKzZK30E_TSwdk"},"kind":{"$ref":"lQ6Z9uCzTEQkD5PYJlopG2uPN5FoPv5soccNUUcytmg"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"rollbackTo":{"$ref":"IUnpDtuV2zhFynXUadMeRRxUmORvuEKlyRtP1m_Zp2I"},"updatedAnnotations":{"$ref":"Ul_dhUdbb_DarDhfw0mKkpjzZdc0vNqkGhUAaKt2b7M"}},"required":["name","rollbackTo","apiVersion","kind"],"type":"object","$id":"io.k8s.api.extensions.v1beta1.DeploymentRollback"};
const schema2 = {"type":"string","enum":["extensions/v1beta1"]};

function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema2.enum;
if(!(data === "extensions/v1beta1")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema2.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate2.errors = vErrors;
return errors === 0;
}

const schema3 = {"type":"string","enum":["DeploymentRollback"]};

function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema3.enum;
if(!(data === "DeploymentRollback")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema3.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate4.errors = vErrors;
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

const schema4 = {"$ref":"io.k8s.api.extensions.v1beta1.RollbackConfig#"};
const schema5 = {};

import { validate as validate8 } from "././RollbackConfig.js";


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate8(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
validate7.errors = vErrors;
return errors === 0;
}

const schema6 = {"additionalProperties":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"object","nullable":true};

function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(data && typeof data == "object" && !Array.isArray(data))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
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
if(data && typeof data == "object" && !Array.isArray(data)){
const _errs2 = errors;
for(const key0 in data){
let data0 = data[key0];
const _errs3 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate11.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.extensions.v1beta1.DeploymentRollback" */;
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
if(data.rollbackTo === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "rollbackTo"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.apiVersion === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "apiVersion"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.kind === undefined){
const err3 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "kind"}};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
if(data.apiVersion !== undefined){
let data0 = data.apiVersion;
const _errs1 = errors;
if(!(validate2(data0, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.kind !== undefined){
let data1 = data.kind;
const _errs2 = errors;
if(!(validate4(data1, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.name !== undefined){
let data2 = data.name;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.rollbackTo !== undefined){
let data3 = data.rollbackTo;
const _errs4 = errors;
if(!(validate7(data3, {instancePath:instancePath+"/rollbackTo",parentData:data,parentDataProperty:"rollbackTo",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.updatedAnnotations !== undefined){
let data4 = data.updatedAnnotations;
const _errs5 = errors;
if(!(validate11(data4, {instancePath:instancePath+"/updatedAnnotations",parentData:data,parentDataProperty:"updatedAnnotations",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
}
else {
const err4 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
validate1.errors = vErrors;
return errors === 0;
}
