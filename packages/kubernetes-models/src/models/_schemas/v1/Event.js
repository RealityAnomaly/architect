/* @ts-self-types="./Event.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate4;
const schema3 = {"properties":{"action":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"apiVersion":{"$ref":"_-ZvS-rLxHiNEArQOhevVo83klxV-qnul8X_v4BZ4M4"},"count":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"eventTime":{"$ref":"CQdKRhSBkR4Z3P63Z8pFYxXxoFfmf705r67sy9NcAz0"},"firstTimestamp":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"},"involvedObject":{"$ref":"d863Mc7i69O5KcXrD5kRFWdoZ1ImC_fvsM81XerxN5Y"},"kind":{"$ref":"B6Js4ThqTKvsdvrInw86VeLljahuPXXauZibOy2cnWI"},"lastTimestamp":{"$ref":"tpjjy07qx44TS_S1WH8Z24TCcf0ahn452vZ82zIbIK0"},"message":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"metadata":{"$ref":"yYmnefnmsYn5-MOwxbbM2mBS0bwKIjMQRJHxUmcKHgU"},"reason":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"related":{"$ref":"9UGK2Bug0jhPkf5VA_mJbqBuWWCE1KeXKPwsHLfDXrg"},"reportingComponent":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"reportingInstance":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"series":{"$ref":"qq4aFAWPrwyOdM3OJ05D0Vm0NItw28aVaNoCYvmlZqw"},"source":{"$ref":"pugHAdj29dRFUNf--SdoJsiUi91P76wnxbT-4eMvqaY"},"type":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"required":["metadata","involvedObject","apiVersion","kind"],"type":"object","$id":"io.k8s.api.core.v1.Event"};
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

const schema4 = {"type":"string","enum":["v1"]};

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
if(!(data === "v1")){
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

const schema5 = {"format":"int32","type":"integer","nullable":true};
const formats0 = formats.int32;

function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate8.errors = vErrors;
return errors === 0;
}

const schema6 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime#"};
const schema7 = {};

import { validate as validate11 } from "./../../../apimachinery/_schemas/apis/meta/v1/MicroTime.js";


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

const schema0 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.Time#"};
const schema1 = {};

import { validate as validate1 } from "./../../../apimachinery/_schemas/apis/meta/v1/Time.js";


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

const schema8 = {"$ref":"io.k8s.api.core.v1.ObjectReference#"};
const schema9 = {};

import { validate as validate16 } from "././ObjectReference.js";


function validate15(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate16(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
validate15.errors = vErrors;
return errors === 0;
}

const schema10 = {"type":"string","enum":["Event"]};

function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema10.enum;
if(!(data === "Event")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema10.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate19.errors = vErrors;
return errors === 0;
}

const schema11 = {"$ref":"io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"};
const schema12 = {};

import { validate as validate24 } from "./../../../apimachinery/_schemas/apis/meta/v1/ObjectMeta.js";


function validate23(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate24(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
errors = vErrors.length;
}
else {
}
validate23.errors = vErrors;
return errors === 0;
}

const schema13 = {"nullableRef":"io.k8s.api.core.v1.ObjectReference#"};

function validate28(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate28.errors = vErrors;
return errors === 0;
}

const schema14 = {"nullableRef":"io.k8s.api.core.v1.EventSeries#"};
const schema15 = {};

import { validate as validate34 } from "././EventSeries.js";


function validate33(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate34(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
errors = vErrors.length;
}
else {
}
}
validate33.errors = vErrors;
return errors === 0;
}

const schema16 = {"nullableRef":"io.k8s.api.core.v1.EventSource#"};
const schema17 = {};

import { validate as validate38 } from "././EventSource.js";


function validate37(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate38(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
errors = vErrors.length;
}
else {
}
}
validate37.errors = vErrors;
return errors === 0;
}


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.Event" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.metadata === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "metadata"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.involvedObject === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "involvedObject"}};
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
if(!(validate6(data1, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.count !== undefined){
let data2 = data.count;
const _errs3 = errors;
if(!(validate8(data2, {instancePath:instancePath+"/count",parentData:data,parentDataProperty:"count",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.eventTime !== undefined){
let data3 = data.eventTime;
const _errs4 = errors;
if(!(validate10(data3, {instancePath:instancePath+"/eventTime",parentData:data,parentDataProperty:"eventTime",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.firstTimestamp !== undefined){
let data4 = data.firstTimestamp;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/firstTimestamp",parentData:data,parentDataProperty:"firstTimestamp",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.involvedObject !== undefined){
let data5 = data.involvedObject;
const _errs6 = errors;
if(!(validate15(data5, {instancePath:instancePath+"/involvedObject",parentData:data,parentDataProperty:"involvedObject",rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.kind !== undefined){
let data6 = data.kind;
const _errs7 = errors;
if(!(validate19(data6, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.lastTimestamp !== undefined){
let data7 = data.lastTimestamp;
const _errs8 = errors;
if(!(validate0(data7, {instancePath:instancePath+"/lastTimestamp",parentData:data,parentDataProperty:"lastTimestamp",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.message !== undefined){
let data8 = data.message;
const _errs9 = errors;
if(!(validate3(data8, {instancePath:instancePath+"/message",parentData:data,parentDataProperty:"message",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.metadata !== undefined){
let data9 = data.metadata;
const _errs10 = errors;
if(!(validate23(data9, {instancePath:instancePath+"/metadata",parentData:data,parentDataProperty:"metadata",rootData}))){
vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
if(data.related !== undefined){
let data11 = data.related;
const _errs12 = errors;
if(!(validate28(data11, {instancePath:instancePath+"/related",parentData:data,parentDataProperty:"related",rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.reportingComponent !== undefined){
let data12 = data.reportingComponent;
const _errs13 = errors;
if(!(validate3(data12, {instancePath:instancePath+"/reportingComponent",parentData:data,parentDataProperty:"reportingComponent",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.reportingInstance !== undefined){
let data13 = data.reportingInstance;
const _errs14 = errors;
if(!(validate3(data13, {instancePath:instancePath+"/reportingInstance",parentData:data,parentDataProperty:"reportingInstance",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.series !== undefined){
let data14 = data.series;
const _errs15 = errors;
if(!(validate33(data14, {instancePath:instancePath+"/series",parentData:data,parentDataProperty:"series",rootData}))){
vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.source !== undefined){
let data15 = data.source;
const _errs16 = errors;
if(!(validate37(data15, {instancePath:instancePath+"/source",parentData:data,parentDataProperty:"source",rootData}))){
vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
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
const err4 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
validate4.errors = vErrors;
return errors === 0;
}
