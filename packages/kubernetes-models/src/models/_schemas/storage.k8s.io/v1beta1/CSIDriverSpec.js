/* @ts-self-types="./CSIDriverSpec.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"attachRequired":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"fsGroupPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"podInfoOnMount":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"requiresRepublish":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"storageCapacity":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"tokenRequests":{"$ref":"QUkhc75EdeqWuMlOIauRFUMGDWXH3doD4W9DjDEJT1Q"},"volumeLifecycleModes":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"}},"type":"object","$id":"io.k8s.api.storage.v1beta1.CSIDriverSpec"};
const schema0 = {"type":"boolean","nullable":true};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate0.errors = vErrors;
return errors === 0;
}

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

const schema3 = {"items":{"$ref":"bm2eTZvT7Hv191mi72T4guIskG2B-5kb67dAP9rpMbQ"},"type":"array","nullable":true};
const schema4 = {"$ref":"io.k8s.api.storage.v1beta1.TokenRequest#"};
const schema5 = {};

import { validate as validate10 } from "././TokenRequest.js";


function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate10(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
validate9.errors = vErrors;
return errors === 0;
}


function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate9(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
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
validate8.errors = vErrors;
return errors === 0;
}

const schema6 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array","nullable":true};
const schema7 = {"type":"string"};

function validate15(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate15.errors = vErrors;
return errors === 0;
}


function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate15(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
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
validate14.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.storage.v1beta1.CSIDriverSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.attachRequired !== undefined){
let data0 = data.attachRequired;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/attachRequired",parentData:data,parentDataProperty:"attachRequired",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.fsGroupPolicy !== undefined){
let data1 = data.fsGroupPolicy;
const _errs2 = errors;
if(!(validate3(data1, {instancePath:instancePath+"/fsGroupPolicy",parentData:data,parentDataProperty:"fsGroupPolicy",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.podInfoOnMount !== undefined){
let data2 = data.podInfoOnMount;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/podInfoOnMount",parentData:data,parentDataProperty:"podInfoOnMount",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.requiresRepublish !== undefined){
let data3 = data.requiresRepublish;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/requiresRepublish",parentData:data,parentDataProperty:"requiresRepublish",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.storageCapacity !== undefined){
let data4 = data.storageCapacity;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/storageCapacity",parentData:data,parentDataProperty:"storageCapacity",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.tokenRequests !== undefined){
let data5 = data.tokenRequests;
const _errs6 = errors;
if(!(validate8(data5, {instancePath:instancePath+"/tokenRequests",parentData:data,parentDataProperty:"tokenRequests",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.volumeLifecycleModes !== undefined){
let data6 = data.volumeLifecycleModes;
const _errs7 = errors;
if(!(validate14(data6, {instancePath:instancePath+"/volumeLifecycleModes",parentData:data,parentDataProperty:"volumeLifecycleModes",rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
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
