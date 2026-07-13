export const validate = validate0;
const schema0 = {"properties":{"auditAnnotations":{"$ref":"pz-CNMfHXB4VoRkmmhTnHiUVTuIf9_oXXvABlnLpOSQ"},"failurePolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"matchConditions":{"$ref":"yibvEkdEjGa0jSjOAS7s1XduCHWqeL-g1G9LByrgd6A"},"matchConstraints":{"$ref":"z2uclWS4Axm5lAAiAJuQlWwMKHxj93Oi06AP-8J4EFQ"},"paramKind":{"$ref":"5Ix6eUKHPui-V1cEELdHvBkH8W_cIzU1uDZqc8acGXQ"},"validations":{"$ref":"gjejYmO6i0iR_y_XUx_uF8emFjpRT9jF7HPIaVqO2pU"},"variables":{"$ref":"3nw9udUhKogeWRFDJXQprl2YBUXj2zJnTTdwegUyT9A"}},"type":"object","$id":"io.k8s.api.admissionregistration.v1alpha1.ValidatingAdmissionPolicySpec"};
const schema1 = {"items":{"$ref":"mS9_Bym-flJMTXIyk8sqVErVwzPrTKgEjqzVOvPVZ3U"},"type":"array","nullable":true};
const schema2 = {"$ref":"io.k8s.api.admissionregistration.v1alpha1.AuditAnnotation#"};
const schema3 = {};

import { validate as validate3 } from "./IoK8sApiAdmissionregistrationV1alpha1AuditAnnotation.js";


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate3(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
validate2.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(Array.isArray(data))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"}};
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
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs2 = errors;
if(!(validate2(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
if(!valid0){
valid1 = false;
}
}
}
validate1.errors = vErrors;
return errors === 0;
}

const schema4 = {"type":"string","nullable":true};

function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate7.errors = vErrors;
return errors === 0;
}

const schema5 = {"items":{"$ref":"y1gEZSgpgEb76wvqyGoOFzLNlYmk5jzMHuySyRy0vpM"},"type":"array","nullable":true};
const schema6 = {"$ref":"io.k8s.api.admissionregistration.v1alpha1.MatchCondition#"};
const schema7 = {};

import { validate as validate11 } from "./IoK8sApiAdmissionregistrationV1alpha1MatchCondition.js";


function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate11(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
validate10.errors = vErrors;
return errors === 0;
}


function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(Array.isArray(data))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"}};
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
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs2 = errors;
if(!(validate10(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
if(!valid0){
valid1 = false;
}
}
}
validate9.errors = vErrors;
return errors === 0;
}

const schema8 = {"nullableRef":"io.k8s.api.admissionregistration.v1alpha1.MatchResources#"};
const schema9 = {};

import { validate as validate16 } from "./IoK8sApiAdmissionregistrationV1alpha1MatchResources.js";


function validate15(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate16(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
}
validate15.errors = vErrors;
return errors === 0;
}

const schema10 = {"nullableRef":"io.k8s.api.admissionregistration.v1alpha1.ParamKind#"};
const schema11 = {};

import { validate as validate20 } from "./IoK8sApiAdmissionregistrationV1alpha1ParamKind.js";


function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate20(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
}
validate19.errors = vErrors;
return errors === 0;
}

const schema12 = {"items":{"$ref":"RJBuO-cgfYXBf4PpykfGLp6bCYWqAXBcPbfAlkCkmq0"},"type":"array","nullable":true};
const schema13 = {"$ref":"io.k8s.api.admissionregistration.v1alpha1.Validation#"};
const schema14 = {};

import { validate as validate25 } from "./IoK8sApiAdmissionregistrationV1alpha1Validation.js";


function validate24(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate25(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
errors = vErrors.length;
}
else {
}
validate24.errors = vErrors;
return errors === 0;
}


function validate23(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(Array.isArray(data))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"}};
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
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs2 = errors;
if(!(validate24(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
if(!valid0){
valid1 = false;
}
}
}
validate23.errors = vErrors;
return errors === 0;
}

const schema15 = {"items":{"$ref":"iIMsABq5attUPg0YmvdRDv3BclmC0DmSWkjcCiNnKxk"},"type":"array","nullable":true};
const schema16 = {"$ref":"io.k8s.api.admissionregistration.v1alpha1.Variable#"};
const schema17 = {};

import { validate as validate31 } from "./IoK8sApiAdmissionregistrationV1alpha1Variable.js";


function validate30(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate31(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
errors = vErrors.length;
}
else {
}
validate30.errors = vErrors;
return errors === 0;
}


function validate29(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(Array.isArray(data))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"}};
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
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs2 = errors;
if(!(validate30(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
if(!valid0){
valid1 = false;
}
}
}
validate29.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.admissionregistration.v1alpha1.ValidatingAdmissionPolicySpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.auditAnnotations !== undefined){
let data0 = data.auditAnnotations;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/auditAnnotations",parentData:data,parentDataProperty:"auditAnnotations",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.failurePolicy !== undefined){
let data1 = data.failurePolicy;
const _errs2 = errors;
if(!(validate7(data1, {instancePath:instancePath+"/failurePolicy",parentData:data,parentDataProperty:"failurePolicy",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.matchConditions !== undefined){
let data2 = data.matchConditions;
const _errs3 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/matchConditions",parentData:data,parentDataProperty:"matchConditions",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.matchConstraints !== undefined){
let data3 = data.matchConstraints;
const _errs4 = errors;
if(!(validate15(data3, {instancePath:instancePath+"/matchConstraints",parentData:data,parentDataProperty:"matchConstraints",rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.paramKind !== undefined){
let data4 = data.paramKind;
const _errs5 = errors;
if(!(validate19(data4, {instancePath:instancePath+"/paramKind",parentData:data,parentDataProperty:"paramKind",rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.validations !== undefined){
let data5 = data.validations;
const _errs6 = errors;
if(!(validate23(data5, {instancePath:instancePath+"/validations",parentData:data,parentDataProperty:"validations",rootData}))){
vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.variables !== undefined){
let data6 = data.variables;
const _errs7 = errors;
if(!(validate29(data6, {instancePath:instancePath+"/variables",parentData:data,parentDataProperty:"variables",rootData}))){
vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
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
