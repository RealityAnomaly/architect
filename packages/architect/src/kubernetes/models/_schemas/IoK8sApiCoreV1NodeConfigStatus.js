export const validate = validate3;
const schema2 = {"properties":{"active":{"$ref":"OuFQ7ZYywai4I3ehbV5dfAFIiOSEets7pVgeM8dq1fE"},"assigned":{"$ref":"OuFQ7ZYywai4I3ehbV5dfAFIiOSEets7pVgeM8dq1fE"},"error":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"lastKnownGood":{"$ref":"OuFQ7ZYywai4I3ehbV5dfAFIiOSEets7pVgeM8dq1fE"}},"type":"object","$id":"io.k8s.api.core.v1.NodeConfigStatus"};
const schema0 = {"nullableRef":"io.k8s.api.core.v1.NodeConfigSource#"};
const schema1 = {};

import { validate as validate1 } from "./IoK8sApiCoreV1NodeConfigSource.js";


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
/*# sourceURL="io.k8s.api.core.v1.NodeConfigStatus" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.active !== undefined){
let data0 = data.active;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/active",parentData:data,parentDataProperty:"active",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.assigned !== undefined){
let data1 = data.assigned;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/assigned",parentData:data,parentDataProperty:"assigned",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.error !== undefined){
let data2 = data.error;
const _errs3 = errors;
if(!(validate6(data2, {instancePath:instancePath+"/error",parentData:data,parentDataProperty:"error",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.lastKnownGood !== undefined){
let data3 = data.lastKnownGood;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/lastKnownGood",parentData:data,parentDataProperty:"lastKnownGood",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
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
