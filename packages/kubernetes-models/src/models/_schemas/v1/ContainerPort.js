/* @ts-self-types="./ContainerPort.d.ts" */
import { formats } from "@glassway/kubernetes-types/validate";
export const validate = validate1;
const schema1 = {"properties":{"containerPort":{"$ref":"6VbGrbfqnPJ4dMmNewHbRn4M59VZOmu0uhV1edBN8qE"},"hostIP":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"hostPort":{"$ref":"j4SBnKFzNWrJQU4F8rp8qSB0IqehV1dh50NKzJhlTjs"},"name":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"protocol":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"required":["containerPort"],"type":"object","$id":"io.k8s.api.core.v1.ContainerPort"};
const schema2 = {"format":"int32","type":"integer"};
const formats0 = formats.int32;

function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(((typeof data == "number") && (!(data % 1) && !isNaN(data))) && (isFinite(data)))){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "integer"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
const _errs0 = errors;
if((typeof data == "number") && (isFinite(data))){
if(!(formats0.validate(data))){
const err1 = {instancePath,schemaPath:"#/format",keyword:"format",params:{format: "int32"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
if(typeof data === "string"){
}
validate2.errors = vErrors;
return errors === 0;
}

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

const schema3 = {"format":"int32","type":"integer","nullable":true};

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(((typeof data == "number") && (!(data % 1) && !isNaN(data))) && (isFinite(data)))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "integer"}};
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
if((typeof data == "number") && (isFinite(data))){
if(!(formats0.validate(data))){
const err1 = {instancePath,schemaPath:"#/format",keyword:"format",params:{format: "int32"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
if(typeof data === "string"){
}
validate5.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.ContainerPort" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.containerPort === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "containerPort"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.containerPort !== undefined){
let data0 = data.containerPort;
const _errs1 = errors;
if(!(validate2(data0, {instancePath:instancePath+"/containerPort",parentData:data,parentDataProperty:"containerPort",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.hostIP !== undefined){
let data1 = data.hostIP;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/hostIP",parentData:data,parentDataProperty:"hostIP",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.hostPort !== undefined){
let data2 = data.hostPort;
const _errs3 = errors;
if(!(validate5(data2, {instancePath:instancePath+"/hostPort",parentData:data,parentDataProperty:"hostPort",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.name !== undefined){
let data3 = data.name;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.protocol !== undefined){
let data4 = data.protocol;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/protocol",parentData:data,parentDataProperty:"protocol",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
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
