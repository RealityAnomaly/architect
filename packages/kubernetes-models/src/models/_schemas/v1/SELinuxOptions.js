/* @ts-self-types="./SELinuxOptions.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"level":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"role":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"type":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"user":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object","$id":"io.k8s.api.core.v1.SELinuxOptions"};
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
/*# sourceURL="io.k8s.api.core.v1.SELinuxOptions" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.level !== undefined){
let data0 = data.level;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/level",parentData:data,parentDataProperty:"level",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.role !== undefined){
let data1 = data.role;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/role",parentData:data,parentDataProperty:"role",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.type !== undefined){
let data2 = data.type;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/type",parentData:data,parentDataProperty:"type",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.user !== undefined){
let data3 = data.user;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/user",parentData:data,parentDataProperty:"user",rootData}))){
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
validate1.errors = vErrors;
return errors === 0;
}
