import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate7;
const schema5 = {"properties":{"action":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"apiVersion":{"$ref":"6HcqeNnqn8zQuJDebL0khMYvQGhePr6hjaW5aK6Djt0"},"deprecatedCount":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"deprecatedFirstTimestamp":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"},"deprecatedLastTimestamp":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"},"deprecatedSource":{"$ref":"pugHAdj29dRFUNf--SdoJsiUi91P76wnxbT-4eMvqaY"},"eventTime":{"$ref":"MdxhferRjti8877U_5w2PibKQQv4V2Zk1e2FIMataHU"},"kind":{"$ref":"B6Js4ThqTKvsdvrInw86VeLljahuPXXauZibOy2cnWI"},"metadata":{"$ref":"P3srTZpWadQH4s4N9KfJR0iCqydQo9YAz7xMB2qf0GQ"},"note":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"reason":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"regarding":{"$ref":"9UGK2Bug0jhPkf5VA_mJbqBuWWCE1KeXKPwsHLfDXrg"},"related":{"$ref":"9UGK2Bug0jhPkf5VA_mJbqBuWWCE1KeXKPwsHLfDXrg"},"reportingController":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"reportingInstance":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"series":{"$ref":"dpXG2GecCG4IohfnGhx9kYH1UGmft9kiy8LvwlxoA2Q"},"type":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"required":["eventTime","apiVersion","kind"],"type":"object","$id":"io.k8s.api.events.v1beta1.Event"};
const schema2 = {"type":"string","nullable":true};

function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate3.errors = vErrors;
return errors === 0;
}

const schema6 = {"type":"string","enum":["events.k8s.io/v1beta1"]};

function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema6.enum;
if(!(data === "events.k8s.io/v1beta1")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema6.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate9.errors = vErrors;
return errors === 0;
}

const schema7 = {"format":"int32","type":"integer","nullable":true};
const formats0 = formats.int32;

function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(((typeof data == "number") && (!(data % 1) && !isNaN(data))) && (isFinite(data)))) && (data !== null)){
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
const _errs1 = errors;
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
validate11.errors = vErrors;
return errors === 0;
}

const schema0 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.Time#"};
const schema1 = {};

import { validate as validate1 } from "./../../apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1Time.js";


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate1(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
}
validate0.errors = vErrors;
return errors === 0;
}

const schema8 = {"nullableRef":"io.k8s.api.core.v1.EventSource#"};
const schema9 = {};

import { validate as validate16 } from "./IoK8sApiCoreV1EventSource.js";


function validate15(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate16(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
}
validate15.errors = vErrors;
return errors === 0;
}

const schema10 = {"$ref":"io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime#"};
const schema11 = {};

import { validate as validate20 } from "./../../apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1MicroTime.js";


function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate20(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
validate19.errors = vErrors;
return errors === 0;
}

const schema12 = {"type":"string","enum":["Event"]};

function validate23(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema12.enum;
if(!(data === "Event")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema12.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate23.errors = vErrors;
return errors === 0;
}

const schema13 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"};
const schema14 = {};

import { validate as validate26 } from "./../../apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta.js";


function validate25(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate26(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
errors = vErrors.length;
}
else {
}
}
validate25.errors = vErrors;
return errors === 0;
}

const schema3 = {"nullableRef":"io.k8s.api.core.v1.ObjectReference#"};
const schema4 = {};

import { validate as validate5 } from "./IoK8sApiCoreV1ObjectReference.js";


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate5(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
}
validate4.errors = vErrors;
return errors === 0;
}

const schema15 = {"nullableRef":"io.k8s.api.events.v1beta1.EventSeries#"};
const schema16 = {};

import { validate as validate36 } from "./IoK8sApiEventsV1beta1EventSeries.js";


function validate35(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate36(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
errors = vErrors.length;
}
else {
}
}
validate35.errors = vErrors;
return errors === 0;
}


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.events.v1beta1.Event" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.eventTime === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "eventTime"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.apiVersion === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "apiVersion"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.kind === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "kind"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.action !== undefined){
let data0 = data.action;
const _errs1 = errors;
if(!(validate3(data0, {instancePath:instancePath+"/action",parentData:data,parentDataProperty:"action",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.apiVersion !== undefined){
let data1 = data.apiVersion;
const _errs2 = errors;
if(!(validate9(data1, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.deprecatedCount !== undefined){
let data2 = data.deprecatedCount;
const _errs3 = errors;
if(!(validate11(data2, {instancePath:instancePath+"/deprecatedCount",parentData:data,parentDataProperty:"deprecatedCount",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.deprecatedFirstTimestamp !== undefined){
let data3 = data.deprecatedFirstTimestamp;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/deprecatedFirstTimestamp",parentData:data,parentDataProperty:"deprecatedFirstTimestamp",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.deprecatedLastTimestamp !== undefined){
let data4 = data.deprecatedLastTimestamp;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/deprecatedLastTimestamp",parentData:data,parentDataProperty:"deprecatedLastTimestamp",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.deprecatedSource !== undefined){
let data5 = data.deprecatedSource;
const _errs6 = errors;
if(!(validate15(data5, {instancePath:instancePath+"/deprecatedSource",parentData:data,parentDataProperty:"deprecatedSource",rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.eventTime !== undefined){
let data6 = data.eventTime;
const _errs7 = errors;
if(!(validate19(data6, {instancePath:instancePath+"/eventTime",parentData:data,parentDataProperty:"eventTime",rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.kind !== undefined){
let data7 = data.kind;
const _errs8 = errors;
if(!(validate23(data7, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.metadata !== undefined){
let data8 = data.metadata;
const _errs9 = errors;
if(!(validate25(data8, {instancePath:instancePath+"/metadata",parentData:data,parentDataProperty:"metadata",rootData}))){
vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.note !== undefined){
let data9 = data.note;
const _errs10 = errors;
if(!(validate3(data9, {instancePath:instancePath+"/note",parentData:data,parentDataProperty:"note",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.reason !== undefined){
let data10 = data.reason;
const _errs11 = errors;
if(!(validate3(data10, {instancePath:instancePath+"/reason",parentData:data,parentDataProperty:"reason",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.regarding !== undefined){
let data11 = data.regarding;
const _errs12 = errors;
if(!(validate4(data11, {instancePath:instancePath+"/regarding",parentData:data,parentDataProperty:"regarding",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.related !== undefined){
let data12 = data.related;
const _errs13 = errors;
if(!(validate4(data12, {instancePath:instancePath+"/related",parentData:data,parentDataProperty:"related",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.reportingController !== undefined){
let data13 = data.reportingController;
const _errs14 = errors;
if(!(validate3(data13, {instancePath:instancePath+"/reportingController",parentData:data,parentDataProperty:"reportingController",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.reportingInstance !== undefined){
let data14 = data.reportingInstance;
const _errs15 = errors;
if(!(validate3(data14, {instancePath:instancePath+"/reportingInstance",parentData:data,parentDataProperty:"reportingInstance",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.series !== undefined){
let data15 = data.series;
const _errs16 = errors;
if(!(validate35(data15, {instancePath:instancePath+"/series",parentData:data,parentDataProperty:"series",rootData}))){
vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs16 === errors;
}
if(data.type !== undefined){
let data16 = data.type;
const _errs17 = errors;
if(!(validate3(data16, {instancePath:instancePath+"/type",parentData:data,parentDataProperty:"type",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs17 === errors;
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
validate7.errors = vErrors;
return errors === 0;
}
