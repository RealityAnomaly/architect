/* @ts-self-types="./SelfSubjectReviewStatus.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"userInfo":{"$ref":"u88HhYlhDXdVePDvxwnuWESx03cHbfDZdGGI6CItlWA"}},"type":"object","$id":"io.k8s.api.authentication.v1beta1.SelfSubjectReviewStatus"};
const schema1 = {"nullableRef":"io.k8s.api.authentication.v1.UserInfo#"};
const schema2 = {};

import { validate as validate2 } from "./../v1/UserInfo.js";


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
/*# sourceURL="io.k8s.api.authentication.v1beta1.SelfSubjectReviewStatus" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.userInfo !== undefined){
let data0 = data.userInfo;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/userInfo",parentData:data,parentDataProperty:"userInfo",rootData}))){
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
