/* @ts-self-types="./NonResourcePolicyRule.d.ts" */
export const validate = validate3;
const schema2 = {"properties":{"nonResourceURLs":{"$ref":"uqUtVyG9D2UAWDvqosEgVMtwK5kI3TMy2eLbDZB452I"},"verbs":{"$ref":"uqUtVyG9D2UAWDvqosEgVMtwK5kI3TMy2eLbDZB452I"}},"required":["verbs","nonResourceURLs"],"type":"object","$id":"io.k8s.api.flowcontrol.v1beta1.NonResourcePolicyRule"};
const schema0 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array"};
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
const _errs0 = errors;
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
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
validate0.errors = vErrors;
return errors === 0;
}


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.flowcontrol.v1beta1.NonResourcePolicyRule" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.verbs === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "verbs"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.nonResourceURLs === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "nonResourceURLs"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.nonResourceURLs !== undefined){
let data0 = data.nonResourceURLs;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/nonResourceURLs",parentData:data,parentDataProperty:"nonResourceURLs",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.verbs !== undefined){
let data1 = data.verbs;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/verbs",parentData:data,parentDataProperty:"verbs",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
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
validate3.errors = vErrors;
return errors === 0;
}
