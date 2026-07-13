/* @ts-self-types="./ContainerUser.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"linux":{"$ref":"USK21DKT0wE1rxXlekTZOQCPkRd4LTCep7UTX_u9lpE"}},"type":"object","$id":"io.k8s.api.core.v1.ContainerUser"};
const schema1 = {"nullableRef":"io.k8s.api.core.v1.LinuxContainerUser#"};
const schema2 = {};

import { validate as validate2 } from "././LinuxContainerUser.js";


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate2(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
}
validate1.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.ContainerUser" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.linux !== undefined){
let data0 = data.linux;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/linux",parentData:data,parentDataProperty:"linux",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
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
