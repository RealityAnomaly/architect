export const validate = validate5;
const schema3 = {"properties":{"matchExpressions":{"$ref":"U7REhJyhEvoBy9K0RHHWzNrW7_2WaGTDP_RFw0DZCNw"},"matchFields":{"$ref":"U7REhJyhEvoBy9K0RHHWzNrW7_2WaGTDP_RFw0DZCNw"}},"type":"object","$id":"io.k8s.api.core.v1.NodeSelectorTerm"};
const schema0 = {"items":{"$ref":"B-9Hu-ueE76AFrGvZ4c2QnKgRN0afDxu90O7j-83UpM"},"type":"array","nullable":true};
const schema1 = {"$ref":"io.k8s.api.core.v1.NodeSelectorRequirement#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiCoreV1NodeSelectorRequirement.js";


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate2(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
validate1.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate0.errors = vErrors;
return errors === 0;
}


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.NodeSelectorTerm" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.matchExpressions !== undefined){
let data0 = data.matchExpressions;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/matchExpressions",parentData:data,parentDataProperty:"matchExpressions",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.matchFields !== undefined){
let data1 = data.matchFields;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/matchFields",parentData:data,parentDataProperty:"matchFields",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
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
validate5.errors = vErrors;
return errors === 0;
}
