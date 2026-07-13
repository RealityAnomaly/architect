export const validate = validate0;
const schema0 = {"properties":{"cel":{"$ref":"20fHchS8w6ILd0-_rmbfrDcFxjJEGQDy_rnn-oKlOtA"}},"type":"object","$id":"io.k8s.api.resource.v1alpha3.DeviceSelector"};
const schema1 = {"nullableRef":"io.k8s.api.resource.v1alpha3.CELDeviceSelector#"};
const schema2 = {};

import { validate as validate2 } from "./IoK8sApiResourceV1alpha3CELDeviceSelector.js";


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
/*# sourceURL="io.k8s.api.resource.v1alpha3.DeviceSelector" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.cel !== undefined){
let data0 = data.cel;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/cel",parentData:data,parentDataProperty:"cel",rootData}))){
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
