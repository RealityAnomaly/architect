/* @ts-self-types="./VsphereVirtualDiskVolumeSource.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"fsType":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"storagePolicyID":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"storagePolicyName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"volumePath":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["volumePath"],"type":"object","$id":"io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource"};
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

const schema2 = {"type":"string"};

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate5.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.volumePath === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "volumePath"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.fsType !== undefined){
let data0 = data.fsType;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/fsType",parentData:data,parentDataProperty:"fsType",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.storagePolicyID !== undefined){
let data1 = data.storagePolicyID;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/storagePolicyID",parentData:data,parentDataProperty:"storagePolicyID",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.storagePolicyName !== undefined){
let data2 = data.storagePolicyName;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/storagePolicyName",parentData:data,parentDataProperty:"storagePolicyName",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.volumePath !== undefined){
let data3 = data.volumePath;
const _errs4 = errors;
if(!(validate5(data3, {instancePath:instancePath+"/volumePath",parentData:data,parentDataProperty:"volumePath",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
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
validate1.errors = vErrors;
return errors === 0;
}
