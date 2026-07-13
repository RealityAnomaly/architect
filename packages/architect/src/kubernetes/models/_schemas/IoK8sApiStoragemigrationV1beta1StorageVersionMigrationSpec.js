export const validate = validate0;
const schema0 = {"properties":{"resource":{"$ref":"FjMpk6KkGAUy07nzlV86c16zQOm1IOQwcvngjGeh6pI"}},"required":["resource"],"type":"object","$id":"io.k8s.api.storagemigration.v1beta1.StorageVersionMigrationSpec"};
const schema1 = {"$ref":"io.k8s.apimachinery.pkg.apis.meta.v1.GroupResource#"};
const schema2 = {};

import { validate as validate2 } from "./../../apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1GroupResource.js";


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
/*# sourceURL="io.k8s.api.storagemigration.v1beta1.StorageVersionMigrationSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.resource === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "resource"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.resource !== undefined){
let data0 = data.resource;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/resource",parentData:data,parentDataProperty:"resource",rootData}))){
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
