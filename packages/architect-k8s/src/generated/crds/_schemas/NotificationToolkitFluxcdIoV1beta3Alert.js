export const validate = validate5;
const schema3 = {"type":"object","properties":{"apiVersion":{"$ref":"FDO61L2EGWtAu8DEHokPFMq1oB_uZaf0Js0o3DWGqmo"},"kind":{"$ref":"rULfQLLmeDPUqRt36-D3khayW1NlIepp5UB9TKOuQuo"},"metadata":{"$ref":"P3srTZpWadQH4s4N9KfJR0iCqydQo9YAz7xMB2qf0GQ"},"spec":{"$ref":"Pw80m9OQTAwa0VkTC-i6QK4sq--wEDNSqHEsZ-xXZNU"}},"required":["apiVersion","kind"],"$id":"notification.toolkit.fluxcd.io.v1beta3.Alert"};
const schema4 = {"type":"string","enum":["notification.toolkit.fluxcd.io/v1beta3"]};

function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema4.enum;
if(!(data === "notification.toolkit.fluxcd.io/v1beta3")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema4.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate6.errors = vErrors;
return errors === 0;
}

const schema5 = {"type":"string","enum":["Alert"]};

function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema5.enum;
if(!(data === "Alert")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema5.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate8.errors = vErrors;
return errors === 0;
}

const schema6 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"};
const schema7 = {};

import { validate as validate11 } from "@glassway/architect/kubernetes/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";


function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate11(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
}
validate10.errors = vErrors;
return errors === 0;
}

const schema8 = {"properties":{"eventMetadata":{"$ref":"HJJzIHbiJa8GGL2u2CTOVy-Hry2MGWIvSIk30RN75wI"},"eventSeverity":{"$ref":"EYTCNqq2ynyHGevMR28mwyVJBb48gXXG0Uz-g3btp5Q"},"eventSources":{"$ref":"aR4Q1-LJ-FUU9ByAMjA-v9_x0g5z8LThqB88UdQ7sLk"},"exclusionList":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"inclusionList":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"providerRef":{"$ref":"Tv4xxEM4-rkWx429stngdyg1y-NXOJv9XnOY7jdo7LY"},"summary":{"$ref":"zzG6nLbdTJ4mYBrSPP36un_ObrIrafDdIzu2zVd031w"},"suspend":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"}},"required":["eventSources","providerRef"],"type":"object","nullable":true};
const schema0 = {"additionalProperties":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"object","properties":{},"nullable":true};
const schema1 = {"type":"string"};

function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate1.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate1(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate0.errors = vErrors;
return errors === 0;
}

const schema9 = {"default":"info","enum":["info","error"],"type":"string","nullable":true};

function validate16(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema9.enum;
if(!((data === "info") || (data === "error"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema9.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate16.errors = vErrors;
return errors === 0;
}

const schema10 = {"items":{"$ref":"sKhoQ18c-WJxm5BsOSXygCMeFWO0BLZFujFzqN5JQpM"},"type":"array"};
const schema11 = {"properties":{"apiVersion":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"kind":{"$ref":"k1nEq5k1q860VUhdw1VFecNrZc5m-4_G5Ve5nQ1ZeHw"},"matchLabels":{"$ref":"HJJzIHbiJa8GGL2u2CTOVy-Hry2MGWIvSIk30RN75wI"},"name":{"$ref":"HObrV2Km43Mw25S2NeeFXvQnOi83UkkOKfJzR7xTt7I"},"namespace":{"$ref":"vE5Ts2634jcVWHt3yKdKCtYy9jK718ibGUBEylvh1mU"}},"required":["kind","name"],"type":"object"};
const schema12 = {"type":"string","nullable":true};

function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate20.errors = vErrors;
return errors === 0;
}

const schema13 = {"enum":["Bucket","GitRepository","Kustomization","HelmRelease","HelmChart","HelmRepository","ImageRepository","ImagePolicy","ImageUpdateAutomation","OCIRepository","ArtifactGenerator","ExternalArtifact"],"type":"string"};

function validate22(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema13.enum;
if(!((((((((((((data === "Bucket") || (data === "GitRepository")) || (data === "Kustomization")) || (data === "HelmRelease")) || (data === "HelmChart")) || (data === "HelmRepository")) || (data === "ImageRepository")) || (data === "ImagePolicy")) || (data === "ImageUpdateAutomation")) || (data === "OCIRepository")) || (data === "ArtifactGenerator")) || (data === "ExternalArtifact"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema13.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate22.errors = vErrors;
return errors === 0;
}

const schema14 = {"maxLength":253,"minLength":1,"type":"string"};
import func0 from "@glassway/architect/kubernetes/validate/runtime/ucs2length";

function validate25(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(typeof data === "string"){
if(func0(data) > 253){
const err0 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 253}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(func0(data) < 1){
const err1 = {instancePath,schemaPath:"#/minLength",keyword:"minLength",params:{limit: 1}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
else {
const err2 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
validate25.errors = vErrors;
return errors === 0;
}

const schema15 = {"maxLength":253,"minLength":1,"type":"string","nullable":true};

function validate27(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(typeof data === "string"){
if(func0(data) > 253){
const err1 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 253}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(func0(data) < 1){
const err2 = {instancePath,schemaPath:"#/minLength",keyword:"minLength",params:{limit: 1}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
}
validate27.errors = vErrors;
return errors === 0;
}


function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.kind === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "kind"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.name === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "name"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.apiVersion !== undefined){
let data0 = data.apiVersion;
const _errs1 = errors;
if(!(validate20(data0, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.kind !== undefined){
let data1 = data.kind;
const _errs2 = errors;
if(!(validate22(data1, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.matchLabels !== undefined){
let data2 = data.matchLabels;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/matchLabels",parentData:data,parentDataProperty:"matchLabels",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.name !== undefined){
let data3 = data.name;
const _errs4 = errors;
if(!(validate25(data3, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.namespace !== undefined){
let data4 = data.namespace;
const _errs5 = errors;
if(!(validate27(data4, {instancePath:instancePath+"/namespace",parentData:data,parentDataProperty:"namespace",rootData}))){
vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
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
validate19.errors = vErrors;
return errors === 0;
}


function validate18(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
if(!(validate19(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
if(!valid0){
valid1 = false;
}
}
}
else {
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
validate18.errors = vErrors;
return errors === 0;
}

const schema2 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array","nullable":true};

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
if(!(validate1(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
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

const schema16 = {"properties":{"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["name"],"type":"object"};

function validate33(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.name !== undefined){
let data0 = data.name;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
}
else {
const err1 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate33.errors = vErrors;
return errors === 0;
}

const schema17 = {"maxLength":255,"type":"string","nullable":true};

function validate36(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(typeof data === "string"){
if(func0(data) > 255){
const err1 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 255}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
validate36.errors = vErrors;
return errors === 0;
}

const schema18 = {"type":"boolean","nullable":true};

function validate38(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate38.errors = vErrors;
return errors === 0;
}


function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.eventSources === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "eventSources"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.providerRef === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "providerRef"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.eventMetadata !== undefined){
let data0 = data.eventMetadata;
const _errs2 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/eventMetadata",parentData:data,parentDataProperty:"eventMetadata",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.eventSeverity !== undefined){
let data1 = data.eventSeverity;
const _errs3 = errors;
if(!(validate16(data1, {instancePath:instancePath+"/eventSeverity",parentData:data,parentDataProperty:"eventSeverity",rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.eventSources !== undefined){
let data2 = data.eventSources;
const _errs4 = errors;
if(!(validate18(data2, {instancePath:instancePath+"/eventSources",parentData:data,parentDataProperty:"eventSources",rootData}))){
vErrors = vErrors === null ? validate18.errors : vErrors.concat(validate18.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.exclusionList !== undefined){
let data3 = data.exclusionList;
const _errs5 = errors;
if(!(validate3(data3, {instancePath:instancePath+"/exclusionList",parentData:data,parentDataProperty:"exclusionList",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.inclusionList !== undefined){
let data4 = data.inclusionList;
const _errs6 = errors;
if(!(validate3(data4, {instancePath:instancePath+"/inclusionList",parentData:data,parentDataProperty:"inclusionList",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.providerRef !== undefined){
let data5 = data.providerRef;
const _errs7 = errors;
if(!(validate33(data5, {instancePath:instancePath+"/providerRef",parentData:data,parentDataProperty:"providerRef",rootData}))){
vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.summary !== undefined){
let data6 = data.summary;
const _errs8 = errors;
if(!(validate36(data6, {instancePath:instancePath+"/summary",parentData:data,parentDataProperty:"summary",rootData}))){
vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.suspend !== undefined){
let data7 = data.suspend;
const _errs9 = errors;
if(!(validate38(data7, {instancePath:instancePath+"/suspend",parentData:data,parentDataProperty:"suspend",rootData}))){
vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
}
validate14.errors = vErrors;
return errors === 0;
}


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="notification.toolkit.fluxcd.io.v1beta3.Alert" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.apiVersion === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "apiVersion"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.kind === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "kind"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.apiVersion !== undefined){
let data0 = data.apiVersion;
const _errs1 = errors;
if(!(validate6(data0, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.kind !== undefined){
let data1 = data.kind;
const _errs2 = errors;
if(!(validate8(data1, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.metadata !== undefined){
let data2 = data.metadata;
const _errs3 = errors;
if(!(validate10(data2, {instancePath:instancePath+"/metadata",parentData:data,parentDataProperty:"metadata",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.spec !== undefined){
let data3 = data.spec;
const _errs4 = errors;
if(!(validate14(data3, {instancePath:instancePath+"/spec",parentData:data,parentDataProperty:"spec",rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
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
validate5.errors = vErrors;
return errors === 0;
}
