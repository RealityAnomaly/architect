export const validate = validate0;
const schema0 = {"properties":{"preferredDuringSchedulingIgnoredDuringExecution":{"$ref":"LFjKSxHy72QNqbdCYe6kMTik3p4fV-86wXfy9TdXpTA"},"requiredDuringSchedulingIgnoredDuringExecution":{"$ref":"TkSNaYWIxhO85OVX_cSWzmQgv784eOxf9GMx98WTU1I"}},"type":"object","$id":"io.k8s.api.core.v1.NodeAffinity"};
const schema1 = {"items":{"$ref":"h_0QVQhOyqsGSZbQcJNk7Q5xM46qBxiF-a4ELvj8npY"},"type":"array","nullable":true};
const schema2 = {"$ref":"io.k8s.api.core.v1.PreferredSchedulingTerm#"};
const schema3 = {};

import { validate as validate3 } from "./IoK8sApiCoreV1PreferredSchedulingTerm.js";


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate3(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
validate2.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate2(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
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
validate1.errors = vErrors;
return errors === 0;
}

const schema4 = {"nullableRef":"io.k8s.api.core.v1.NodeSelector#"};
const schema5 = {};

import { validate as validate8 } from "./IoK8sApiCoreV1NodeSelector.js";


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate8(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
}
validate7.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.NodeAffinity" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.preferredDuringSchedulingIgnoredDuringExecution !== undefined){
let data0 = data.preferredDuringSchedulingIgnoredDuringExecution;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/preferredDuringSchedulingIgnoredDuringExecution",parentData:data,parentDataProperty:"preferredDuringSchedulingIgnoredDuringExecution",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.requiredDuringSchedulingIgnoredDuringExecution !== undefined){
let data1 = data.requiredDuringSchedulingIgnoredDuringExecution;
const _errs2 = errors;
if(!(validate7(data1, {instancePath:instancePath+"/requiredDuringSchedulingIgnoredDuringExecution",parentData:data,parentDataProperty:"requiredDuringSchedulingIgnoredDuringExecution",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
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
