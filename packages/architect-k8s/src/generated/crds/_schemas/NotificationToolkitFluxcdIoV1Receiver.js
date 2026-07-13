import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate2;
const schema2 = {"type":"object","properties":{"apiVersion":{"$ref":"joZ9GSpJihH494RXPVHBRFBVgQFt5QFnCM057s_QdUo"},"kind":{"$ref":"radXAEYcWENhNZfBpQjb-SRzemeoYAqs69VZziwGLOw"},"metadata":{"$ref":"P3srTZpWadQH4s4N9KfJR0iCqydQo9YAz7xMB2qf0GQ"},"spec":{"$ref":"aOlcnrfb9C4UBu7hBI5Dd49Sx3gFhnCWg6uPoVdkuoQ"},"status":{"$ref":"Pj7iXvy5EydV08b0wyzSu-dtxKxZ6HhrV-UnpVdwL1E"}},"required":["apiVersion","kind"],"$id":"notification.toolkit.fluxcd.io.v1.Receiver"};
const schema3 = {"type":"string","enum":["notification.toolkit.fluxcd.io/v1"]};

function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema3.enum;
if(!(data === "notification.toolkit.fluxcd.io/v1")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema3.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate3.errors = vErrors;
return errors === 0;
}

const schema4 = {"type":"string","enum":["Receiver"]};

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
const vSchema0 = schema4.enum;
if(!(data === "Receiver")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema4.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate5.errors = vErrors;
return errors === 0;
}

const schema5 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"};
const schema6 = {};

import { validate as validate8 } from "@glassway/architect/kubernetes/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate8(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
}
validate7.errors = vErrors;
return errors === 0;
}

const schema7 = {"properties":{"events":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"interval":{"$ref":"8I-gGjAcLx1CG-FPoGVBrRR-grj5h26UXebhEXfJNJQ"},"oidcProviders":{"$ref":"NWF_0xs6TCsN_vXuYUaR_rQuV7_KAzIKMkDpYLjxrXg"},"resourceFilter":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"resources":{"$ref":"wfphvJmaw65nLRBiJI2b1QL-T3nMo-tYUEBaMfMqzAs"},"secretRef":{"$ref":"E97dOchMV0AJMEW2BvWE8x-plhaqw9P894BmF33ZGUY"},"suspend":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"type":{"$ref":"r0RfCZOrd9v4B7PsikiZPE9k3PN2bsG07HoFpKuZnOE"}},"required":["resources","type"],"type":"object","nullable":true};
const schema8 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array","nullable":true};
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


function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate0(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
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
validate12.errors = vErrors;
return errors === 0;
}

const schema9 = {"default":"10m","pattern":"^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$","type":"string","nullable":true};
const pattern0 = new RegExp("^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$", "u");

function validate15(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(typeof data === "string"){
if(!pattern0.test(data)){
const err1 = {instancePath,schemaPath:"#/pattern",keyword:"pattern",params:{pattern: "^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
validate15.errors = vErrors;
return errors === 0;
}

const schema10 = {"items":{"$ref":"_DdGOA5UbygvE1SiWgj4UP3GQPliB7cbbCc6PIQ27uU"},"type":"array","nullable":true};
const schema11 = {"properties":{"audience":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"issuerURL":{"$ref":"VNIM5gyDdeY3uWrxfFBIzpRbZAlGuKps4QHAujN7G04"},"validations":{"$ref":"pEyDkbvtfXlMf3brdS7Miw9iZSWbuG_j7GR3IXzJpzE"},"variables":{"$ref":"ZXdO5kEziqe4FquTrngZJVPYjh7MGCyDYE_xkw8L-kc"}},"required":["issuerURL","validations"],"type":"object"};
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

const schema12 = {"pattern":"^https?://","type":"string"};
const pattern1 = new RegExp("^https?://", "u");

function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(typeof data === "string"){
if(!pattern1.test(data)){
const err0 = {instancePath,schemaPath:"#/pattern",keyword:"pattern",params:{pattern: "^https?://"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
}
else {
const err1 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate20.errors = vErrors;
return errors === 0;
}

const schema13 = {"items":{"$ref":"pfIJjGP8cMEXx5vkLjmA-CYLc7GG9iTYYF3Hq4n_0Wk"},"minItems":1,"type":"array"};
const schema14 = {"properties":{"expression":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"message":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["expression","message"],"type":"object"};

function validate23(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.expression === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "expression"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.message === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "message"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.expression !== undefined){
let data0 = data.expression;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/expression",parentData:data,parentDataProperty:"expression",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.message !== undefined){
let data1 = data.message;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/message",parentData:data,parentDataProperty:"message",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
}
else {
const err2 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
validate23.errors = vErrors;
return errors === 0;
}


function validate22(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(Array.isArray(data)){
if(data.length < 1){
const err0 = {instancePath,schemaPath:"#/minItems",keyword:"minItems",params:{limit: 1}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
if(!(validate23(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
if(!valid0){
valid1 = false;
}
}
}
else {
const err1 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate22.errors = vErrors;
return errors === 0;
}

const schema15 = {"items":{"$ref":"Wl7S6vi6z-SwWgMRpFMn-KHGOQ9klDBXX5HOi8I9OSU"},"type":"array","nullable":true};
const schema16 = {"properties":{"expression":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["expression","name"],"type":"object"};

function validate29(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.expression === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "expression"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.name === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "name"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.expression !== undefined){
let data0 = data.expression;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/expression",parentData:data,parentDataProperty:"expression",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.name !== undefined){
let data1 = data.name;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
}
else {
const err2 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
validate29.errors = vErrors;
return errors === 0;
}


function validate28(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate29(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
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
validate28.errors = vErrors;
return errors === 0;
}


function validate18(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.issuerURL === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "issuerURL"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.validations === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "validations"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.audience !== undefined){
let data0 = data.audience;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/audience",parentData:data,parentDataProperty:"audience",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.issuerURL !== undefined){
let data1 = data.issuerURL;
const _errs2 = errors;
if(!(validate20(data1, {instancePath:instancePath+"/issuerURL",parentData:data,parentDataProperty:"issuerURL",rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.validations !== undefined){
let data2 = data.validations;
const _errs3 = errors;
if(!(validate22(data2, {instancePath:instancePath+"/validations",parentData:data,parentDataProperty:"validations",rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.variables !== undefined){
let data3 = data.variables;
const _errs4 = errors;
if(!(validate28(data3, {instancePath:instancePath+"/variables",parentData:data,parentDataProperty:"variables",rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
}
else {
const err2 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
validate18.errors = vErrors;
return errors === 0;
}


function validate17(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate18(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate18.errors : vErrors.concat(validate18.errors);
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
validate17.errors = vErrors;
return errors === 0;
}

const schema17 = {"items":{"$ref":"DJBoDKVDdQwQR0mD8MbQ2hVUu-_MFqJJnmHRI23sbeI"},"type":"array"};
const schema18 = {"properties":{"apiVersion":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"filter":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"kind":{"$ref":"k1nEq5k1q860VUhdw1VFecNrZc5m-4_G5Ve5nQ1ZeHw"},"matchLabels":{"$ref":"HJJzIHbiJa8GGL2u2CTOVy-Hry2MGWIvSIk30RN75wI"},"name":{"$ref":"HObrV2Km43Mw25S2NeeFXvQnOi83UkkOKfJzR7xTt7I"},"namespace":{"$ref":"vE5Ts2634jcVWHt3yKdKCtYy9jK718ibGUBEylvh1mU"}},"required":["kind","name"],"type":"object"};
const schema19 = {"enum":["Bucket","GitRepository","Kustomization","HelmRelease","HelmChart","HelmRepository","ImageRepository","ImagePolicy","ImageUpdateAutomation","OCIRepository","ArtifactGenerator","ExternalArtifact"],"type":"string"};

function validate41(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema19.enum;
if(!((((((((((((data === "Bucket") || (data === "GitRepository")) || (data === "Kustomization")) || (data === "HelmRelease")) || (data === "HelmChart")) || (data === "HelmRepository")) || (data === "ImageRepository")) || (data === "ImagePolicy")) || (data === "ImageUpdateAutomation")) || (data === "OCIRepository")) || (data === "ArtifactGenerator")) || (data === "ExternalArtifact"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema19.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate41.errors = vErrors;
return errors === 0;
}

const schema20 = {"additionalProperties":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"object","properties":{},"nullable":true};

function validate43(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(data && typeof data == "object" && !Array.isArray(data))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
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
if(data && typeof data == "object" && !Array.isArray(data)){
const _errs2 = errors;
for(const key0 in data){
let data0 = data[key0];
const _errs3 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate43.errors = vErrors;
return errors === 0;
}

const schema21 = {"maxLength":253,"minLength":1,"type":"string"};
import func0 from "@glassway/architect/kubernetes/validate/runtime/ucs2length";

function validate46(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(typeof data === "string"){
if(func0(data) > 253){
const err0 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 253}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(func0(data) < 1){
const err1 = {instancePath,schemaPath:"#/minLength",keyword:"minLength",params:{limit: 1}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
else {
const err2 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
validate46.errors = vErrors;
return errors === 0;
}

const schema22 = {"maxLength":253,"minLength":1,"type":"string","nullable":true};

function validate48(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(typeof data === "string"){
if(func0(data) > 253){
const err1 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 253}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(func0(data) < 1){
const err2 = {instancePath,schemaPath:"#/minLength",keyword:"minLength",params:{limit: 1}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
}
validate48.errors = vErrors;
return errors === 0;
}


function validate38(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.kind === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "kind"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.name === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "name"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.apiVersion !== undefined){
let data0 = data.apiVersion;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.filter !== undefined){
let data1 = data.filter;
const _errs2 = errors;
if(!(validate1(data1, {instancePath:instancePath+"/filter",parentData:data,parentDataProperty:"filter",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.kind !== undefined){
let data2 = data.kind;
const _errs3 = errors;
if(!(validate41(data2, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.matchLabels !== undefined){
let data3 = data.matchLabels;
const _errs4 = errors;
if(!(validate43(data3, {instancePath:instancePath+"/matchLabels",parentData:data,parentDataProperty:"matchLabels",rootData}))){
vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.name !== undefined){
let data4 = data.name;
const _errs5 = errors;
if(!(validate46(data4, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.namespace !== undefined){
let data5 = data.namespace;
const _errs6 = errors;
if(!(validate48(data5, {instancePath:instancePath+"/namespace",parentData:data,parentDataProperty:"namespace",rootData}))){
vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
}
else {
const err2 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
validate38.errors = vErrors;
return errors === 0;
}


function validate37(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
if(!(validate38(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
if(!valid0){
valid1 = false;
}
}
}
else {
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
validate37.errors = vErrors;
return errors === 0;
}

const schema23 = {"properties":{"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["name"],"type":"object","nullable":true};

function validate52(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(data && typeof data == "object" && !Array.isArray(data))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
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
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.name === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "name"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.name !== undefined){
let data0 = data.name;
const _errs2 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
}
validate52.errors = vErrors;
return errors === 0;
}

const schema24 = {"type":"boolean","nullable":true};

function validate55(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate55.errors = vErrors;
return errors === 0;
}

const schema25 = {"enum":["generic","generic-hmac","generic-oidc","github","gitlab","bitbucket","harbor","dockerhub","quay","gcr","nexus","acr","cdevents"],"type":"string"};

function validate57(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema25.enum;
if(!(((((((((((((data === "generic") || (data === "generic-hmac")) || (data === "generic-oidc")) || (data === "github")) || (data === "gitlab")) || (data === "bitbucket")) || (data === "harbor")) || (data === "dockerhub")) || (data === "quay")) || (data === "gcr")) || (data === "nexus")) || (data === "acr")) || (data === "cdevents"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema25.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate57.errors = vErrors;
return errors === 0;
}


function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(data && typeof data == "object" && !Array.isArray(data))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
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
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.resources === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "resources"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.type === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "type"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.events !== undefined){
let data0 = data.events;
const _errs2 = errors;
if(!(validate12(data0, {instancePath:instancePath+"/events",parentData:data,parentDataProperty:"events",rootData}))){
vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.interval !== undefined){
let data1 = data.interval;
const _errs3 = errors;
if(!(validate15(data1, {instancePath:instancePath+"/interval",parentData:data,parentDataProperty:"interval",rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.oidcProviders !== undefined){
let data2 = data.oidcProviders;
const _errs4 = errors;
if(!(validate17(data2, {instancePath:instancePath+"/oidcProviders",parentData:data,parentDataProperty:"oidcProviders",rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.resourceFilter !== undefined){
let data3 = data.resourceFilter;
const _errs5 = errors;
if(!(validate1(data3, {instancePath:instancePath+"/resourceFilter",parentData:data,parentDataProperty:"resourceFilter",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.resources !== undefined){
let data4 = data.resources;
const _errs6 = errors;
if(!(validate37(data4, {instancePath:instancePath+"/resources",parentData:data,parentDataProperty:"resources",rootData}))){
vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.secretRef !== undefined){
let data5 = data.secretRef;
const _errs7 = errors;
if(!(validate52(data5, {instancePath:instancePath+"/secretRef",parentData:data,parentDataProperty:"secretRef",rootData}))){
vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.suspend !== undefined){
let data6 = data.suspend;
const _errs8 = errors;
if(!(validate55(data6, {instancePath:instancePath+"/suspend",parentData:data,parentDataProperty:"suspend",rootData}))){
vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.type !== undefined){
let data7 = data.type;
const _errs9 = errors;
if(!(validate57(data7, {instancePath:instancePath+"/type",parentData:data,parentDataProperty:"type",rootData}))){
vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
}
validate11.errors = vErrors;
return errors === 0;
}

const schema26 = {"default":{"observedGeneration":-1},"properties":{"conditions":{"$ref":"hhAxL57cvApnLYfNWQbGuX0ymd4M4buVmG7H0q63I0w"},"lastHandledReconcileAt":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"observedGeneration":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"webhookPath":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object","nullable":true};
const schema27 = {"items":{"$ref":"dZ13d79yfL0AfKGv8XJr0-7aalgpv7dwgkV5EU9HxwM"},"type":"array","nullable":true};
const schema28 = {"properties":{"lastTransitionTime":{"$ref":"nWP098h5Flk6EOMa_OWYW4EnhyCrisyvgJPgk0WtC9c"},"message":{"$ref":"CG805GD3KzsipQt5EKLOQw9SjU_4PVFnnbOjDh0LzJQ"},"observedGeneration":{"$ref":"Tv0gqme9PlVaT-l831KRjUe4u9reG1m_llVaPqPtqUs"},"reason":{"$ref":"UPBfG4e9zcqG6mx3tN1LWinVzYKOFfIO2VnMgg6lAWI"},"status":{"$ref":"UcCRuQZyUlftnmEwuGDZcciwLAdzzRj4HOLofWAwyW8"},"type":{"$ref":"grctw_GwW6iDVZUzowft1rMz55_d64qiJ_wOfyk2Qoo"}},"required":["lastTransitionTime","message","reason","status","type"],"type":"object"};
const schema29 = {"format":"date-time","type":"string"};
const formats0 = formats["date-time"];

function validate63(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if((typeof data == "number") && (isFinite(data))){
}
if(typeof data === "string"){
if(!(formats0.validate(data))){
const err0 = {instancePath,schemaPath:"#/format",keyword:"format",params:{format: "date-time"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
}
else {
const err1 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate63.errors = vErrors;
return errors === 0;
}

const schema30 = {"maxLength":32768,"type":"string"};

function validate65(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(typeof data === "string"){
if(func0(data) > 32768){
const err0 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 32768}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
}
else {
const err1 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate65.errors = vErrors;
return errors === 0;
}

const schema31 = {"format":"int64","type":"integer","minimum":0,"nullable":true};
const formats2 = formats.int64;

function validate67(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data < 0 || isNaN(data)){
const err1 = {instancePath,schemaPath:"#/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(!(formats2.validate(data))){
const err2 = {instancePath,schemaPath:"#/format",keyword:"format",params:{format: "int64"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
}
if(typeof data === "string"){
}
validate67.errors = vErrors;
return errors === 0;
}

const schema32 = {"maxLength":1024,"minLength":1,"pattern":"^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$","type":"string"};
const pattern2 = new RegExp("^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$", "u");

function validate69(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(typeof data === "string"){
if(func0(data) > 1024){
const err0 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 1024}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(func0(data) < 1){
const err1 = {instancePath,schemaPath:"#/minLength",keyword:"minLength",params:{limit: 1}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(!pattern2.test(data)){
const err2 = {instancePath,schemaPath:"#/pattern",keyword:"pattern",params:{pattern: "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
}
else {
const err3 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
validate69.errors = vErrors;
return errors === 0;
}

const schema33 = {"enum":["True","False","Unknown"],"type":"string"};

function validate71(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema33.enum;
if(!(((data === "True") || (data === "False")) || (data === "Unknown"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema33.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate71.errors = vErrors;
return errors === 0;
}

const schema34 = {"maxLength":316,"pattern":"^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$","type":"string"};
const pattern3 = new RegExp("^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$", "u");

function validate73(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(typeof data === "string"){
if(func0(data) > 316){
const err0 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 316}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(!pattern3.test(data)){
const err1 = {instancePath,schemaPath:"#/pattern",keyword:"pattern",params:{pattern: "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
else {
const err2 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "string"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
validate73.errors = vErrors;
return errors === 0;
}


function validate62(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.lastTransitionTime === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "lastTransitionTime"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.message === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "message"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.reason === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "reason"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.status === undefined){
const err3 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "status"}};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
if(data.type === undefined){
const err4 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "type"}};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
if(data.lastTransitionTime !== undefined){
let data0 = data.lastTransitionTime;
const _errs1 = errors;
if(!(validate63(data0, {instancePath:instancePath+"/lastTransitionTime",parentData:data,parentDataProperty:"lastTransitionTime",rootData}))){
vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.message !== undefined){
let data1 = data.message;
const _errs2 = errors;
if(!(validate65(data1, {instancePath:instancePath+"/message",parentData:data,parentDataProperty:"message",rootData}))){
vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.observedGeneration !== undefined){
let data2 = data.observedGeneration;
const _errs3 = errors;
if(!(validate67(data2, {instancePath:instancePath+"/observedGeneration",parentData:data,parentDataProperty:"observedGeneration",rootData}))){
vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.reason !== undefined){
let data3 = data.reason;
const _errs4 = errors;
if(!(validate69(data3, {instancePath:instancePath+"/reason",parentData:data,parentDataProperty:"reason",rootData}))){
vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.status !== undefined){
let data4 = data.status;
const _errs5 = errors;
if(!(validate71(data4, {instancePath:instancePath+"/status",parentData:data,parentDataProperty:"status",rootData}))){
vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.type !== undefined){
let data5 = data.type;
const _errs6 = errors;
if(!(validate73(data5, {instancePath:instancePath+"/type",parentData:data,parentDataProperty:"type",rootData}))){
vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
}
else {
const err5 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
validate62.errors = vErrors;
return errors === 0;
}


function validate61(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate62(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
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
validate61.errors = vErrors;
return errors === 0;
}

const schema35 = {"format":"int64","type":"integer","nullable":true};

function validate78(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(formats2.validate(data))){
const err1 = {instancePath,schemaPath:"#/format",keyword:"format",params:{format: "int64"}};
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
validate78.errors = vErrors;
return errors === 0;
}


function validate60(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if((!(data && typeof data == "object" && !Array.isArray(data))) && (data !== null)){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
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
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.conditions !== undefined){
let data0 = data.conditions;
const _errs2 = errors;
if(!(validate61(data0, {instancePath:instancePath+"/conditions",parentData:data,parentDataProperty:"conditions",rootData}))){
vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.lastHandledReconcileAt !== undefined){
let data1 = data.lastHandledReconcileAt;
const _errs3 = errors;
if(!(validate1(data1, {instancePath:instancePath+"/lastHandledReconcileAt",parentData:data,parentDataProperty:"lastHandledReconcileAt",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.observedGeneration !== undefined){
let data2 = data.observedGeneration;
const _errs4 = errors;
if(!(validate78(data2, {instancePath:instancePath+"/observedGeneration",parentData:data,parentDataProperty:"observedGeneration",rootData}))){
vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.webhookPath !== undefined){
let data3 = data.webhookPath;
const _errs5 = errors;
if(!(validate1(data3, {instancePath:instancePath+"/webhookPath",parentData:data,parentDataProperty:"webhookPath",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
}
validate60.errors = vErrors;
return errors === 0;
}


function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="notification.toolkit.fluxcd.io.v1.Receiver" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.apiVersion === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "apiVersion"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.kind === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "kind"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.apiVersion !== undefined){
let data0 = data.apiVersion;
const _errs1 = errors;
if(!(validate3(data0, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.kind !== undefined){
let data1 = data.kind;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.metadata !== undefined){
let data2 = data.metadata;
const _errs3 = errors;
if(!(validate7(data2, {instancePath:instancePath+"/metadata",parentData:data,parentDataProperty:"metadata",rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.spec !== undefined){
let data3 = data.spec;
const _errs4 = errors;
if(!(validate11(data3, {instancePath:instancePath+"/spec",parentData:data,parentDataProperty:"spec",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.status !== undefined){
let data4 = data.status;
const _errs5 = errors;
if(!(validate60(data4, {instancePath:instancePath+"/status",parentData:data,parentDataProperty:"status",rootData}))){
vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
}
else {
const err2 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
validate2.errors = vErrors;
return errors === 0;
}
