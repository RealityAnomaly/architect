export const validate = validate0;
const schema0 = {"properties":{"nodeSelectorTerms":{"$ref":"ekg88GDEIohWVWpcLkS0i-9HVv8Pr6PNKoJIAQZcSmo"}},"required":["nodeSelectorTerms"],"type":"object","$id":"io.k8s.api.core.v1.NodeSelector"};
const schema1 = {"items":{"$ref":"K8ghDuAUs0c1QS25bkgyWWpJemIt3K-mVyAHUBW0Jyg"},"type":"array"};
const schema2 = {"$ref":"io.k8s.api.core.v1.NodeSelectorTerm#"};
const schema3 = {};

import { validate as validate3 } from "./IoK8sApiCoreV1NodeSelectorTerm.js";


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
const _errs0 = errors;
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
if(!(validate2(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
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
validate1.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.NodeSelector" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.nodeSelectorTerms === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "nodeSelectorTerms"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.nodeSelectorTerms !== undefined){
let data0 = data.nodeSelectorTerms;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/nodeSelectorTerms",parentData:data,parentDataProperty:"nodeSelectorTerms",rootData}))){
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
validate0.errors = vErrors;
return errors === 0;
}
