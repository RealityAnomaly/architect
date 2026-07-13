export const validate = validate3;
const schema2 = {"properties":{"postStart":{"$ref":"-92ZXZo_-Rc-9E5fR3sot11D9Z6qP8nhtK14lryJCy4"},"preStop":{"$ref":"-92ZXZo_-Rc-9E5fR3sot11D9Z6qP8nhtK14lryJCy4"},"stopSignal":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object","$id":"io.k8s.api.core.v1.Lifecycle"};
const schema0 = {"nullableRef":"io.k8s.api.core.v1.LifecycleHandler#"};
const schema1 = {};

import { validate as validate1 } from "./IoK8sApiCoreV1LifecycleHandler.js";


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

const schema3 = {"type":"string","nullable":true};

function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate6.errors = vErrors;
return errors === 0;
}


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.Lifecycle" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.postStart !== undefined){
let data0 = data.postStart;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/postStart",parentData:data,parentDataProperty:"postStart",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.preStop !== undefined){
let data1 = data.preStop;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/preStop",parentData:data,parentDataProperty:"preStop",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.stopSignal !== undefined){
let data2 = data.stopSignal;
const _errs3 = errors;
if(!(validate6(data2, {instancePath:instancePath+"/stopSignal",parentData:data,parentDataProperty:"stopSignal",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
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
validate3.errors = vErrors;
return errors === 0;
}
