/* @ts-self-types="./NodeRuntimeHandlerFeatures.d.ts" */
export const validate = validate1;
const schema1 = {"properties":{"recursiveReadOnlyMounts":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"userNamespaces":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"}},"type":"object","$id":"io.k8s.api.core.v1.NodeRuntimeHandlerFeatures"};
const schema0 = {"type":"boolean","nullable":true};

function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate0.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.NodeRuntimeHandlerFeatures" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.recursiveReadOnlyMounts !== undefined){
let data0 = data.recursiveReadOnlyMounts;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/recursiveReadOnlyMounts",parentData:data,parentDataProperty:"recursiveReadOnlyMounts",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.userNamespaces !== undefined){
let data1 = data.userNamespaces;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/userNamespaces",parentData:data,parentDataProperty:"userNamespaces",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
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
validate1.errors = vErrors;
return errors === 0;
}
