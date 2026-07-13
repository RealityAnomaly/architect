/* @ts-self-types="./GroupVersionResource.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"group":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"resource":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"version":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object","$id":"io.k8s.api.storagemigration.v1alpha1.GroupVersionResource"};
const schema0 = {"type":"string","nullable":true};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate0.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.storagemigration.v1alpha1.GroupVersionResource" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.group !== undefined){
let data0 = data.group;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/group",parentData:data,parentDataProperty:"group",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.resource !== undefined){
let data1 = data.resource;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/resource",parentData:data,parentDataProperty:"resource",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.version !== undefined){
let data2 = data.version;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/version",parentData:data,parentDataProperty:"version",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
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
validate1.errors = vErrors;
return errors === 0;
}
