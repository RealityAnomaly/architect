/* @ts-self-types="./AllocationResult.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"devices":{"$ref":"qKcsOzAyn_jXf6HclxHerfgjC5Fp8whi_9oKtbzO9xc"},"nodeSelector":{"$ref":"TkSNaYWIxhO85OVX_cSWzmQgv784eOxf9GMx98WTU1I"}},"type":"object","$id":"io.k8s.api.resource.v1alpha3.AllocationResult"};
const schema1 = {"nullableRef":"io.k8s.api.resource.v1alpha3.DeviceAllocationResult#"};
const schema2 = {};

import { validate as validate2 } from "././DeviceAllocationResult.js";


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

const schema3 = {"nullableRef":"io.k8s.api.core.v1.NodeSelector#"};
const schema4 = {};

import { validate as validate6 } from "./../../v1/NodeSelector.js";


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate6(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
}
validate5.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.resource.v1alpha3.AllocationResult" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.devices !== undefined){
let data0 = data.devices;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/devices",parentData:data,parentDataProperty:"devices",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.nodeSelector !== undefined){
let data1 = data.nodeSelector;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/nodeSelector",parentData:data,parentDataProperty:"nodeSelector",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
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
validate0.errors = vErrors;
return errors === 0;
}
