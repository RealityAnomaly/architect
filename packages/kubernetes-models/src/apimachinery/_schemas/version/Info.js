/* @ts-self-types="./Info.d.ts" */
export const validate = validate2;
const schema2 = {"properties":{"buildDate":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"compiler":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"emulationMajor":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"emulationMinor":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"gitCommit":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"gitTreeState":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"gitVersion":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"goVersion":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"major":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"minCompatibilityMajor":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"minCompatibilityMinor":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"minor":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"platform":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["major","minor","gitVersion","gitCommit","gitTreeState","buildDate","goVersion","compiler","platform"],"type":"object","$id":"io.k8s.apimachinery.pkg.version.Info"};
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

const schema1 = {"type":"string","nullable":true};

function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate1.errors = vErrors;
return errors === 0;
}


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.apimachinery.pkg.version.Info" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.major === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "major"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.minor === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "minor"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.gitVersion === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "gitVersion"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.gitCommit === undefined){
const err3 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "gitCommit"}};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
if(data.gitTreeState === undefined){
const err4 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "gitTreeState"}};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
if(data.buildDate === undefined){
const err5 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "buildDate"}};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
if(data.goVersion === undefined){
const err6 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "goVersion"}};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
if(data.compiler === undefined){
const err7 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "compiler"}};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
if(data.platform === undefined){
const err8 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "platform"}};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
if(data.buildDate !== undefined){
let data0 = data.buildDate;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/buildDate",parentData:data,parentDataProperty:"buildDate",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.compiler !== undefined){
let data1 = data.compiler;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/compiler",parentData:data,parentDataProperty:"compiler",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.emulationMajor !== undefined){
let data2 = data.emulationMajor;
const _errs3 = errors;
if(!(validate1(data2, {instancePath:instancePath+"/emulationMajor",parentData:data,parentDataProperty:"emulationMajor",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.emulationMinor !== undefined){
let data3 = data.emulationMinor;
const _errs4 = errors;
if(!(validate1(data3, {instancePath:instancePath+"/emulationMinor",parentData:data,parentDataProperty:"emulationMinor",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.gitCommit !== undefined){
let data4 = data.gitCommit;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/gitCommit",parentData:data,parentDataProperty:"gitCommit",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.gitTreeState !== undefined){
let data5 = data.gitTreeState;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/gitTreeState",parentData:data,parentDataProperty:"gitTreeState",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.gitVersion !== undefined){
let data6 = data.gitVersion;
const _errs7 = errors;
if(!(validate0(data6, {instancePath:instancePath+"/gitVersion",parentData:data,parentDataProperty:"gitVersion",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.goVersion !== undefined){
let data7 = data.goVersion;
const _errs8 = errors;
if(!(validate0(data7, {instancePath:instancePath+"/goVersion",parentData:data,parentDataProperty:"goVersion",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.major !== undefined){
let data8 = data.major;
const _errs9 = errors;
if(!(validate0(data8, {instancePath:instancePath+"/major",parentData:data,parentDataProperty:"major",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.minCompatibilityMajor !== undefined){
let data9 = data.minCompatibilityMajor;
const _errs10 = errors;
if(!(validate1(data9, {instancePath:instancePath+"/minCompatibilityMajor",parentData:data,parentDataProperty:"minCompatibilityMajor",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.minCompatibilityMinor !== undefined){
let data10 = data.minCompatibilityMinor;
const _errs11 = errors;
if(!(validate1(data10, {instancePath:instancePath+"/minCompatibilityMinor",parentData:data,parentDataProperty:"minCompatibilityMinor",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.minor !== undefined){
let data11 = data.minor;
const _errs12 = errors;
if(!(validate0(data11, {instancePath:instancePath+"/minor",parentData:data,parentDataProperty:"minor",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.platform !== undefined){
let data12 = data.platform;
const _errs13 = errors;
if(!(validate0(data12, {instancePath:instancePath+"/platform",parentData:data,parentDataProperty:"platform",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
}
else {
const err9 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
validate2.errors = vErrors;
return errors === 0;
}
