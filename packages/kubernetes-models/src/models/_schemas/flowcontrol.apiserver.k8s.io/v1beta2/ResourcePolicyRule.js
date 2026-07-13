/* @ts-self-types="./ResourcePolicyRule.d.ts" */
export const validate = validate3;
const schema2 = {"properties":{"apiGroups":{"$ref":"uqUtVyG9D2UAWDvqosEgVMtwK5kI3TMy2eLbDZB452I"},"clusterScope":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"namespaces":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"resources":{"$ref":"uqUtVyG9D2UAWDvqosEgVMtwK5kI3TMy2eLbDZB452I"},"verbs":{"$ref":"uqUtVyG9D2UAWDvqosEgVMtwK5kI3TMy2eLbDZB452I"}},"required":["verbs","apiGroups","resources"],"type":"object","$id":"io.k8s.api.flowcontrol.v1beta2.ResourcePolicyRule"};
const schema1 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array"};
const schema0 = {"type":"string"};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate0.errors = vErrors;
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
if(!(validate0(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
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

const schema3 = {"type":"boolean","nullable":true};

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate5.errors = vErrors;
return errors === 0;
}

const schema4 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array","nullable":true};

function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate0(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
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
validate7.errors = vErrors;
return errors === 0;
}


function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.flowcontrol.v1beta2.ResourcePolicyRule" */;
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
if(data.apiGroups === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "apiGroups"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.resources === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "resources"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.apiGroups !== undefined){
let data0 = data.apiGroups;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/apiGroups",parentData:data,parentDataProperty:"apiGroups",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.clusterScope !== undefined){
let data1 = data.clusterScope;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/clusterScope",parentData:data,parentDataProperty:"clusterScope",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.namespaces !== undefined){
let data2 = data.namespaces;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/namespaces",parentData:data,parentDataProperty:"namespaces",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.resources !== undefined){
let data3 = data.resources;
const _errs4 = errors;
if(!(validate1(data3, {instancePath:instancePath+"/resources",parentData:data,parentDataProperty:"resources",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.verbs !== undefined){
let data4 = data.verbs;
const _errs5 = errors;
if(!(validate1(data4, {instancePath:instancePath+"/verbs",parentData:data,parentDataProperty:"verbs",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
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
validate3.errors = vErrors;
return errors === 0;
}
