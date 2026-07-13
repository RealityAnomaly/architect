import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate31;
const schema18 = {"type":"object","properties":{"apiVersion":{"$ref":"Wgi43w9BfvsDf9zsq62ZzQjdd-xk5BcaZmwCFSYojj4"},"kind":{"$ref":"mqWRR4EoDr4i-0EwXbsjLv8vg0Qp9Ujz5w6tH4Y9mmw"},"metadata":{"$ref":"P3srTZpWadQH4s4N9KfJR0iCqydQo9YAz7xMB2qf0GQ"},"spec":{"$ref":"z5bWtchhc0m8YVpOo2Zb67yuInumCskIwt_sgBXVDz0"},"status":{"$ref":"iiwgKi80zAuQFcf1j0uC0W6igatCHyMXPrqd36rAnrY"}},"required":["apiVersion","kind"],"$id":"helm.toolkit.fluxcd.io.v2.HelmRelease"};
const schema19 = {"type":"string","enum":["helm.toolkit.fluxcd.io/v2"]};

function validate32(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(data === "helm.toolkit.fluxcd.io/v2")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema19.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate32.errors = vErrors;
return errors === 0;
}

const schema20 = {"type":"string","enum":["HelmRelease"]};

function validate34(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema20.enum;
if(!(data === "HelmRelease")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema20.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate34.errors = vErrors;
return errors === 0;
}

const schema21 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"};
const schema22 = {};

import { validate as validate37 } from "@glassway/architect/kubernetes/apimachinery/_schemas/ObjectMeta";


function validate36(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate37(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
errors = vErrors.length;
}
else {
}
}
validate36.errors = vErrors;
return errors === 0;
}

const schema23 = {"properties":{"chart":{"$ref":"WDzEmy0O2f5ycM86RYTBeJ9sVeoT2iBSgXj6nJztnMI"},"chartRef":{"$ref":"ynsmHDQy5qrKLlGvFdhPpQGx5rVO74LbdrdiSTyVeQk"},"commonMetadata":{"$ref":"a3da4kmT9QZElz2dwf5u_WcqApiGQLXEQuq_iSFtFi4"},"dependsOn":{"$ref":"nC6K2LDWn20UDiMlY0mZBIRtT6jRG4G9jCWilqnC_zw"},"driftDetection":{"$ref":"_uZIbUZ5KRwXlY6iaz3NQy0nZtwhrBUqpe8ecGqlLx4"},"healthCheckExprs":{"$ref":"5EYL_ab1hpYzDBjlwANkvr5hgAm-Xdyj36l_mmfigow"},"install":{"$ref":"wk8FaqYrjJxeSZ0ysnxr4uKgMSYNoiIms_LJhrEtnpM"},"interval":{"$ref":"LsMD3Ue9PdPHLGttXdfcxIWepwGNenjy1vMwBiao_hY"},"kubeConfig":{"$ref":"NBceRB61OIDX1-kpgUJpvko08SmbKWaPV5hvZjoS1Dc"},"maxHistory":{"$ref":"e9Vp3ktUVkjqJ-BnY0fSuWjq1PyapJgZxILP3xcsiuw"},"persistentClient":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"postRenderStrategy":{"$ref":"U8nYXqgoemqXfO98FE6UMUr3p34dwxnUOl73a8SAXZg"},"postRenderers":{"$ref":"415HaCogAzi4pIWB_1-PfeCORr9T79UOgjCjI6jhmVE"},"releaseName":{"$ref":"2au9SLJcXFdCTDk7MikhHpxSBcACTU-6vb_rLqSuiJU"},"rollback":{"$ref":"4Lttw6r5tiYoWTFD9qJahaTwipq23UdJVlZGLLRA5r0"},"serviceAccountName":{"$ref":"vE5Ts2634jcVWHt3yKdKCtYy9jK718ibGUBEylvh1mU"},"storageNamespace":{"$ref":"tk4ch55V7Bggx4bXj1MsbJrmxEc7ACeG6E_TxOLn6NY"},"suspend":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"targetNamespace":{"$ref":"tk4ch55V7Bggx4bXj1MsbJrmxEc7ACeG6E_TxOLn6NY"},"test":{"$ref":"FGDWMH6veKigdhkYIUJMAkr5Uh9_CoFAGHNT9tukx7A"},"timeout":{"$ref":"pBaBQUcJ_4VVd59oMlDSOC0VZvtZV0pop01FX11W3LU"},"uninstall":{"$ref":"LLGijvAPtRUnTLJprzwuzKq9dpwpBj_VutbrS_CgcqM"},"upgrade":{"$ref":"bF6KIB531ckIbWyjLDkocBqcL6xErPZci-AvYvty_Kg"},"values":{"$ref":"RBNvo1WzZ4oRRq0W9-hknpT7T8If536DEMBg9hyq_4o"},"valuesFrom":{"$ref":"RbUXEq149lMPg-A8dABo5wpheOXZfhcNqpZvsnFlzCY"},"waitStrategy":{"$ref":"xgYq02KL_Lxr64KXHp0jyAHcQltVuUpQx5cVaNjQKqY"}},"required":["interval"],"type":"object","nullable":true};
const schema24 = {"properties":{"metadata":{"$ref":"a3da4kmT9QZElz2dwf5u_WcqApiGQLXEQuq_iSFtFi4"},"spec":{"$ref":"bswU32Rk33JZyiy1jCqxHJa46jm9_yuc9VMLQKWEoDo"}},"required":["spec"],"type":"object","nullable":true};
const schema5 = {"properties":{"annotations":{"$ref":"HJJzIHbiJa8GGL2u2CTOVy-Hry2MGWIvSIk30RN75wI"},"labels":{"$ref":"HJJzIHbiJa8GGL2u2CTOVy-Hry2MGWIvSIk30RN75wI"}},"type":"object","nullable":true};
const schema0 = {"additionalProperties":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"object","properties":{},"nullable":true};
const schema1 = {"type":"string"};

function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate1.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate1(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate0.errors = vErrors;
return errors === 0;
}


function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.annotations !== undefined){
let data0 = data.annotations;
const _errs2 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/annotations",parentData:data,parentDataProperty:"annotations",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.labels !== undefined){
let data1 = data.labels;
const _errs3 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/labels",parentData:data,parentDataProperty:"labels",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate6.errors = vErrors;
return errors === 0;
}

const schema25 = {"properties":{"chart":{"$ref":"Rohd5dq27qj2tztTuRaGh8X48XyCl2VBKQt1sfAA6Fg"},"ignoreMissingValuesFiles":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"interval":{"$ref":"pBaBQUcJ_4VVd59oMlDSOC0VZvtZV0pop01FX11W3LU"},"reconcileStrategy":{"$ref":"T43tADg444WCCiFJoyY2ieqIXkN9r3gxsSC4aR8L6aQ"},"sourceRef":{"$ref":"6hzt0seTdM0G1dEur1X0Q43_OMgCNt79qzwGWDQ2yIk"},"valuesFiles":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"verify":{"$ref":"xEVkbItf9TGB_ZixwsEHFTo8N8tuRtqRQIWUCXFdZC8"},"version":{"$ref":"7Ae4kI5YYV9DPpIiILTK1sc5oZLmV0nMffCXZi4qKv8"}},"required":["chart","sourceRef"],"type":"object"};
const schema26 = {"maxLength":2048,"minLength":1,"type":"string"};
import func0 from "@glassway/architect/kubernetes/validate/runtime/ucs2length";

function validate44(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(typeof data === "string"){
if(func0(data) > 2048){
const err0 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 2048}};
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
validate44.errors = vErrors;
return errors === 0;
}

const schema6 = {"type":"boolean","nullable":true};

function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate9.errors = vErrors;
return errors === 0;
}

const schema7 = {"pattern":"^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$","type":"string","nullable":true};
const pattern0 = new RegExp("^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$", "u");

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate10.errors = vErrors;
return errors === 0;
}

const schema27 = {"default":"ChartVersion","enum":["ChartVersion","Revision"],"type":"string","nullable":true};

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
const vSchema0 = schema27.enum;
if(!((data === "ChartVersion") || (data === "Revision"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema27.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate48.errors = vErrors;
return errors === 0;
}

const schema28 = {"properties":{"apiVersion":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"kind":{"$ref":"5V0QnOenUIHl6nvb8NFKtJlwe4qJPrcEDm2HXmCwpOA"},"name":{"$ref":"HObrV2Km43Mw25S2NeeFXvQnOi83UkkOKfJzR7xTt7I"},"namespace":{"$ref":"tk4ch55V7Bggx4bXj1MsbJrmxEc7ACeG6E_TxOLn6NY"}},"required":["kind","name"],"type":"object"};
const schema2 = {"type":"string","nullable":true};

function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate3.errors = vErrors;
return errors === 0;
}

const schema29 = {"enum":["HelmRepository","GitRepository","Bucket"],"type":"string"};

function validate52(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema29.enum;
if(!(((data === "HelmRepository") || (data === "GitRepository")) || (data === "Bucket"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema29.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate52.errors = vErrors;
return errors === 0;
}

const schema3 = {"maxLength":253,"minLength":1,"type":"string"};

function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate4.errors = vErrors;
return errors === 0;
}

const schema4 = {"maxLength":63,"minLength":1,"type":"string","nullable":true};

function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(func0(data) > 63){
const err1 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 63}};
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
validate5.errors = vErrors;
return errors === 0;
}


function validate50(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate52(data1, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.name !== undefined){
let data2 = data.name;
const _errs3 = errors;
if(!(validate4(data2, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.namespace !== undefined){
let data3 = data.namespace;
const _errs4 = errors;
if(!(validate5(data3, {instancePath:instancePath+"/namespace",parentData:data,parentDataProperty:"namespace",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
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
validate50.errors = vErrors;
return errors === 0;
}

const schema30 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array","nullable":true};

function validate57(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate1(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
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
validate57.errors = vErrors;
return errors === 0;
}

const schema31 = {"properties":{"provider":{"$ref":"TQ6Cg9YL7mzUZwcGmnOgF-VM40YMiThyPFAaE206My4"},"secretRef":{"$ref":"E97dOchMV0AJMEW2BvWE8x-plhaqw9P894BmF33ZGUY"}},"required":["provider"],"type":"object","nullable":true};
const schema32 = {"default":"cosign","enum":["cosign","notation"],"type":"string"};

function validate61(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema32.enum;
if(!((data === "cosign") || (data === "notation"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema32.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate61.errors = vErrors;
return errors === 0;
}

const schema8 = {"properties":{"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["name"],"type":"object","nullable":true};

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
if(!(validate1(data0, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
}
validate11.errors = vErrors;
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
if(data.provider === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "provider"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.provider !== undefined){
let data0 = data.provider;
const _errs2 = errors;
if(!(validate61(data0, {instancePath:instancePath+"/provider",parentData:data,parentDataProperty:"provider",rootData}))){
vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.secretRef !== undefined){
let data1 = data.secretRef;
const _errs3 = errors;
if(!(validate11(data1, {instancePath:instancePath+"/secretRef",parentData:data,parentDataProperty:"secretRef",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate60.errors = vErrors;
return errors === 0;
}

const schema33 = {"default":"*","type":"string","nullable":true};

function validate65(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate65.errors = vErrors;
return errors === 0;
}


function validate43(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.chart === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "chart"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.sourceRef === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "sourceRef"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.chart !== undefined){
let data0 = data.chart;
const _errs1 = errors;
if(!(validate44(data0, {instancePath:instancePath+"/chart",parentData:data,parentDataProperty:"chart",rootData}))){
vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.ignoreMissingValuesFiles !== undefined){
let data1 = data.ignoreMissingValuesFiles;
const _errs2 = errors;
if(!(validate9(data1, {instancePath:instancePath+"/ignoreMissingValuesFiles",parentData:data,parentDataProperty:"ignoreMissingValuesFiles",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.interval !== undefined){
let data2 = data.interval;
const _errs3 = errors;
if(!(validate10(data2, {instancePath:instancePath+"/interval",parentData:data,parentDataProperty:"interval",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.reconcileStrategy !== undefined){
let data3 = data.reconcileStrategy;
const _errs4 = errors;
if(!(validate48(data3, {instancePath:instancePath+"/reconcileStrategy",parentData:data,parentDataProperty:"reconcileStrategy",rootData}))){
vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.sourceRef !== undefined){
let data4 = data.sourceRef;
const _errs5 = errors;
if(!(validate50(data4, {instancePath:instancePath+"/sourceRef",parentData:data,parentDataProperty:"sourceRef",rootData}))){
vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.valuesFiles !== undefined){
let data5 = data.valuesFiles;
const _errs6 = errors;
if(!(validate57(data5, {instancePath:instancePath+"/valuesFiles",parentData:data,parentDataProperty:"valuesFiles",rootData}))){
vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.verify !== undefined){
let data6 = data.verify;
const _errs7 = errors;
if(!(validate60(data6, {instancePath:instancePath+"/verify",parentData:data,parentDataProperty:"verify",rootData}))){
vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.version !== undefined){
let data7 = data.version;
const _errs8 = errors;
if(!(validate65(data7, {instancePath:instancePath+"/version",parentData:data,parentDataProperty:"version",rootData}))){
vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
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
validate43.errors = vErrors;
return errors === 0;
}


function validate41(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.spec === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "spec"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.metadata !== undefined){
let data0 = data.metadata;
const _errs2 = errors;
if(!(validate6(data0, {instancePath:instancePath+"/metadata",parentData:data,parentDataProperty:"metadata",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.spec !== undefined){
let data1 = data.spec;
const _errs3 = errors;
if(!(validate43(data1, {instancePath:instancePath+"/spec",parentData:data,parentDataProperty:"spec",rootData}))){
vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate41.errors = vErrors;
return errors === 0;
}

const schema34 = {"properties":{"apiVersion":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"kind":{"$ref":"tVvU14RkoeoO6CD2sXSa4lusJJgbderKB8SU46ylhgs"},"name":{"$ref":"HObrV2Km43Mw25S2NeeFXvQnOi83UkkOKfJzR7xTt7I"},"namespace":{"$ref":"tk4ch55V7Bggx4bXj1MsbJrmxEc7ACeG6E_TxOLn6NY"}},"required":["kind","name"],"type":"object","nullable":true};
const schema35 = {"enum":["OCIRepository","HelmChart","ExternalArtifact"],"type":"string"};

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
const vSchema0 = schema35.enum;
if(!(((data === "OCIRepository") || (data === "HelmChart")) || (data === "ExternalArtifact"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema35.enum}};
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


function validate69(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.name === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "name"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.apiVersion !== undefined){
let data0 = data.apiVersion;
const _errs2 = errors;
if(!(validate3(data0, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.kind !== undefined){
let data1 = data.kind;
const _errs3 = errors;
if(!(validate71(data1, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.name !== undefined){
let data2 = data.name;
const _errs4 = errors;
if(!(validate4(data2, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.namespace !== undefined){
let data3 = data.namespace;
const _errs5 = errors;
if(!(validate5(data3, {instancePath:instancePath+"/namespace",parentData:data,parentDataProperty:"namespace",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
}
validate69.errors = vErrors;
return errors === 0;
}

const schema36 = {"items":{"$ref":"vknfdiwjScuYK_dQo4kzImsGi8Y3Lh-Ehq-O0wWhJ9Q"},"type":"array","nullable":true};
const schema37 = {"properties":{"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"namespace":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"readyExpr":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"required":["name"],"type":"object"};

function validate78(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.name === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "name"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.name !== undefined){
let data0 = data.name;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.namespace !== undefined){
let data1 = data.namespace;
const _errs2 = errors;
if(!(validate3(data1, {instancePath:instancePath+"/namespace",parentData:data,parentDataProperty:"namespace",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.readyExpr !== undefined){
let data2 = data.readyExpr;
const _errs3 = errors;
if(!(validate3(data2, {instancePath:instancePath+"/readyExpr",parentData:data,parentDataProperty:"readyExpr",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
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
validate78.errors = vErrors;
return errors === 0;
}


function validate77(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate78(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
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
validate77.errors = vErrors;
return errors === 0;
}

const schema38 = {"properties":{"ignore":{"$ref":"vZxFWPNu5a7giiVcHPxX-Mxq5mdKtQ7f6ps8wznMLlY"},"mode":{"$ref":"xhPM4Ns2OGD6khK3nsDfmJDQsNMNtiiYEf0887xONVE"}},"type":"object","nullable":true};
const schema39 = {"items":{"$ref":"mBeiVAvZDtq3QqqZfXYdQ1mhUyG_nU417N6pCknTUus"},"type":"array","nullable":true};
const schema40 = {"properties":{"paths":{"$ref":"uqUtVyG9D2UAWDvqosEgVMtwK5kI3TMy2eLbDZB452I"},"target":{"$ref":"qvQ8zCB_i7fk-8VDWKLhLuHqTCAEsZHU1Zdym0tsWl0"}},"required":["paths"],"type":"object"};
const schema41 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array"};

function validate87(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
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
validate87.errors = vErrors;
return errors === 0;
}

const schema10 = {"properties":{"annotationSelector":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"group":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"kind":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"labelSelector":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"name":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"namespace":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"version":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object","nullable":true};

function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.annotationSelector !== undefined){
let data0 = data.annotationSelector;
const _errs2 = errors;
if(!(validate3(data0, {instancePath:instancePath+"/annotationSelector",parentData:data,parentDataProperty:"annotationSelector",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.group !== undefined){
let data1 = data.group;
const _errs3 = errors;
if(!(validate3(data1, {instancePath:instancePath+"/group",parentData:data,parentDataProperty:"group",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.kind !== undefined){
let data2 = data.kind;
const _errs4 = errors;
if(!(validate3(data2, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.labelSelector !== undefined){
let data3 = data.labelSelector;
const _errs5 = errors;
if(!(validate3(data3, {instancePath:instancePath+"/labelSelector",parentData:data,parentDataProperty:"labelSelector",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.name !== undefined){
let data4 = data.name;
const _errs6 = errors;
if(!(validate3(data4, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.namespace !== undefined){
let data5 = data.namespace;
const _errs7 = errors;
if(!(validate3(data5, {instancePath:instancePath+"/namespace",parentData:data,parentDataProperty:"namespace",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.version !== undefined){
let data6 = data.version;
const _errs8 = errors;
if(!(validate3(data6, {instancePath:instancePath+"/version",parentData:data,parentDataProperty:"version",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
}
validate14.errors = vErrors;
return errors === 0;
}


function validate86(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.paths === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "paths"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.paths !== undefined){
let data0 = data.paths;
const _errs1 = errors;
if(!(validate87(data0, {instancePath:instancePath+"/paths",parentData:data,parentDataProperty:"paths",rootData}))){
vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.target !== undefined){
let data1 = data.target;
const _errs2 = errors;
if(!(validate14(data1, {instancePath:instancePath+"/target",parentData:data,parentDataProperty:"target",rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
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
validate86.errors = vErrors;
return errors === 0;
}


function validate85(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate86(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate86.errors : vErrors.concat(validate86.errors);
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
validate85.errors = vErrors;
return errors === 0;
}

const schema42 = {"enum":["enabled","warn","disabled"],"type":"string","nullable":true};

function validate93(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema42.enum;
if(!(((data === "enabled") || (data === "warn")) || (data === "disabled"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema42.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate93.errors = vErrors;
return errors === 0;
}


function validate84(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.ignore !== undefined){
let data0 = data.ignore;
const _errs2 = errors;
if(!(validate85(data0, {instancePath:instancePath+"/ignore",parentData:data,parentDataProperty:"ignore",rootData}))){
vErrors = vErrors === null ? validate85.errors : vErrors.concat(validate85.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.mode !== undefined){
let data1 = data.mode;
const _errs3 = errors;
if(!(validate93(data1, {instancePath:instancePath+"/mode",parentData:data,parentDataProperty:"mode",rootData}))){
vErrors = vErrors === null ? validate93.errors : vErrors.concat(validate93.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate84.errors = vErrors;
return errors === 0;
}

const schema43 = {"items":{"$ref":"giwPYvBfmXW7U9gipZTWJ4PZ2EYV8g5dw4BUEDTYDi0"},"type":"array","nullable":true};
const schema44 = {"properties":{"apiVersion":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"current":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"failed":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"inProgress":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"kind":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"required":["apiVersion","current"],"type":"object"};

function validate97(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.current === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "current"}};
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
if(data.current !== undefined){
let data1 = data.current;
const _errs2 = errors;
if(!(validate1(data1, {instancePath:instancePath+"/current",parentData:data,parentDataProperty:"current",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.failed !== undefined){
let data2 = data.failed;
const _errs3 = errors;
if(!(validate3(data2, {instancePath:instancePath+"/failed",parentData:data,parentDataProperty:"failed",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.inProgress !== undefined){
let data3 = data.inProgress;
const _errs4 = errors;
if(!(validate3(data3, {instancePath:instancePath+"/inProgress",parentData:data,parentDataProperty:"inProgress",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.kind !== undefined){
let data4 = data.kind;
const _errs5 = errors;
if(!(validate3(data4, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
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
validate97.errors = vErrors;
return errors === 0;
}


function validate96(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate97(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate97.errors : vErrors.concat(validate97.errors);
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
validate96.errors = vErrors;
return errors === 0;
}

const schema45 = {"properties":{"crds":{"$ref":"OoJv1EUzxO3-ytW-Q7UusSJbcy6XlCF1qPhYt-Mp6qQ"},"createNamespace":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableHooks":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableOpenAPIValidation":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableSchemaValidation":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableTakeOwnership":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableWait":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableWaitForJobs":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"remediation":{"$ref":"TmbQLIKDEv9hFT29cnZdSfQQlJeTDXjZgB1kVvETsZg"},"replace":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"serverSideApply":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"skipCRDs":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"strategy":{"$ref":"ZteiFUwKUc69bD83Kax17fYpFJ0Q2dbriTKXsNV4nmY"},"timeout":{"$ref":"pBaBQUcJ_4VVd59oMlDSOC0VZvtZV0pop01FX11W3LU"}},"type":"object","nullable":true};
const schema11 = {"enum":["Skip","Create","CreateReplace"],"type":"string","nullable":true};

function validate22(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema11.enum;
if(!(((data === "Skip") || (data === "Create")) || (data === "CreateReplace"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema11.enum}};
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

const schema46 = {"properties":{"ignoreTestFailures":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"remediateLastFailure":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"retries":{"$ref":"e9Vp3ktUVkjqJ-BnY0fSuWjq1PyapJgZxILP3xcsiuw"}},"type":"object","nullable":true};
const schema9 = {"type":"integer","nullable":true};

function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate13.errors = vErrors;
return errors === 0;
}


function validate114(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.ignoreTestFailures !== undefined){
let data0 = data.ignoreTestFailures;
const _errs2 = errors;
if(!(validate9(data0, {instancePath:instancePath+"/ignoreTestFailures",parentData:data,parentDataProperty:"ignoreTestFailures",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.remediateLastFailure !== undefined){
let data1 = data.remediateLastFailure;
const _errs3 = errors;
if(!(validate9(data1, {instancePath:instancePath+"/remediateLastFailure",parentData:data,parentDataProperty:"remediateLastFailure",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.retries !== undefined){
let data2 = data.retries;
const _errs4 = errors;
if(!(validate13(data2, {instancePath:instancePath+"/retries",parentData:data,parentDataProperty:"retries",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
}
validate114.errors = vErrors;
return errors === 0;
}

const schema13 = {"properties":{"name":{"$ref":"OzBaJ3F5_cGR-UG4ERERf67yJuhCollnC7czmnuGeJ8"},"retryInterval":{"$ref":"pBaBQUcJ_4VVd59oMlDSOC0VZvtZV0pop01FX11W3LU"}},"required":["name"],"type":"object","nullable":true};
const schema14 = {"enum":["RemediateOnFailure","RetryOnFailure"],"type":"string"};

function validate25(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema14.enum;
if(!((data === "RemediateOnFailure") || (data === "RetryOnFailure"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema14.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate25.errors = vErrors;
return errors === 0;
}


function validate24(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate25(data0, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.retryInterval !== undefined){
let data1 = data.retryInterval;
const _errs3 = errors;
if(!(validate10(data1, {instancePath:instancePath+"/retryInterval",parentData:data,parentDataProperty:"retryInterval",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate24.errors = vErrors;
return errors === 0;
}


function validate105(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.crds !== undefined){
let data0 = data.crds;
const _errs2 = errors;
if(!(validate22(data0, {instancePath:instancePath+"/crds",parentData:data,parentDataProperty:"crds",rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.createNamespace !== undefined){
let data1 = data.createNamespace;
const _errs3 = errors;
if(!(validate9(data1, {instancePath:instancePath+"/createNamespace",parentData:data,parentDataProperty:"createNamespace",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.disableHooks !== undefined){
let data2 = data.disableHooks;
const _errs4 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/disableHooks",parentData:data,parentDataProperty:"disableHooks",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.disableOpenAPIValidation !== undefined){
let data3 = data.disableOpenAPIValidation;
const _errs5 = errors;
if(!(validate9(data3, {instancePath:instancePath+"/disableOpenAPIValidation",parentData:data,parentDataProperty:"disableOpenAPIValidation",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.disableSchemaValidation !== undefined){
let data4 = data.disableSchemaValidation;
const _errs6 = errors;
if(!(validate9(data4, {instancePath:instancePath+"/disableSchemaValidation",parentData:data,parentDataProperty:"disableSchemaValidation",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.disableTakeOwnership !== undefined){
let data5 = data.disableTakeOwnership;
const _errs7 = errors;
if(!(validate9(data5, {instancePath:instancePath+"/disableTakeOwnership",parentData:data,parentDataProperty:"disableTakeOwnership",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.disableWait !== undefined){
let data6 = data.disableWait;
const _errs8 = errors;
if(!(validate9(data6, {instancePath:instancePath+"/disableWait",parentData:data,parentDataProperty:"disableWait",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.disableWaitForJobs !== undefined){
let data7 = data.disableWaitForJobs;
const _errs9 = errors;
if(!(validate9(data7, {instancePath:instancePath+"/disableWaitForJobs",parentData:data,parentDataProperty:"disableWaitForJobs",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.remediation !== undefined){
let data8 = data.remediation;
const _errs10 = errors;
if(!(validate114(data8, {instancePath:instancePath+"/remediation",parentData:data,parentDataProperty:"remediation",rootData}))){
vErrors = vErrors === null ? validate114.errors : vErrors.concat(validate114.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.replace !== undefined){
let data9 = data.replace;
const _errs11 = errors;
if(!(validate9(data9, {instancePath:instancePath+"/replace",parentData:data,parentDataProperty:"replace",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.serverSideApply !== undefined){
let data10 = data.serverSideApply;
const _errs12 = errors;
if(!(validate9(data10, {instancePath:instancePath+"/serverSideApply",parentData:data,parentDataProperty:"serverSideApply",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.skipCRDs !== undefined){
let data11 = data.skipCRDs;
const _errs13 = errors;
if(!(validate9(data11, {instancePath:instancePath+"/skipCRDs",parentData:data,parentDataProperty:"skipCRDs",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.strategy !== undefined){
let data12 = data.strategy;
const _errs14 = errors;
if(!(validate24(data12, {instancePath:instancePath+"/strategy",parentData:data,parentDataProperty:"strategy",rootData}))){
vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.timeout !== undefined){
let data13 = data.timeout;
const _errs15 = errors;
if(!(validate10(data13, {instancePath:instancePath+"/timeout",parentData:data,parentDataProperty:"timeout",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
}
validate105.errors = vErrors;
return errors === 0;
}

const schema47 = {"pattern":"^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$","type":"string"};

function validate125(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(typeof data === "string"){
if(!pattern0.test(data)){
const err0 = {instancePath,schemaPath:"#/pattern",keyword:"pattern",params:{pattern: "^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$"}};
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
validate125.errors = vErrors;
return errors === 0;
}

const schema48 = {"properties":{"configMapRef":{"$ref":"E97dOchMV0AJMEW2BvWE8x-plhaqw9P894BmF33ZGUY"},"secretRef":{"$ref":"HNqddWvljbZv1epM4N80otIjODFhNlkMeK62aTcPCac"}},"type":"object","nullable":true};
const schema49 = {"properties":{"key":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["name"],"type":"object","nullable":true};

function validate129(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.key !== undefined){
let data0 = data.key;
const _errs2 = errors;
if(!(validate3(data0, {instancePath:instancePath+"/key",parentData:data,parentDataProperty:"key",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.name !== undefined){
let data1 = data.name;
const _errs3 = errors;
if(!(validate1(data1, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate129.errors = vErrors;
return errors === 0;
}


function validate127(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.configMapRef !== undefined){
let data0 = data.configMapRef;
const _errs2 = errors;
if(!(validate11(data0, {instancePath:instancePath+"/configMapRef",parentData:data,parentDataProperty:"configMapRef",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.secretRef !== undefined){
let data1 = data.secretRef;
const _errs3 = errors;
if(!(validate129(data1, {instancePath:instancePath+"/secretRef",parentData:data,parentDataProperty:"secretRef",rootData}))){
vErrors = vErrors === null ? validate129.errors : vErrors.concat(validate129.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate127.errors = vErrors;
return errors === 0;
}

const schema50 = {"enum":["nohooks","combined","separate"],"type":"string","nullable":true};

function validate136(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema50.enum;
if(!(((data === "nohooks") || (data === "combined")) || (data === "separate"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema50.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate136.errors = vErrors;
return errors === 0;
}

const schema51 = {"items":{"$ref":"wJOPX3ECz8ZKtPseMuuNJh3nD6RBQJLKjWMls-KDYh4"},"type":"array","nullable":true};
const schema52 = {"properties":{"kustomize":{"$ref":"qR_JcWw0PuoIq79vGcHwtVTPcI60qj_AvUC_hGUM0dA"}},"type":"object"};
const schema53 = {"properties":{"images":{"$ref":"MnSyYuh_ZV5UkjJeg9zUnfMRdzusauRxZt04Wgch3h8"},"patches":{"$ref":"KdIxwXkQgSi43TxY4JWFd8YvD7gCsESTUWzH5WomFc8"}},"type":"object","nullable":true};
const schema54 = {"items":{"$ref":"zH8napn8H8POTCDxXeqLLHCePW-XpL4BSQKBQoXk4Ds"},"type":"array","nullable":true};
const schema55 = {"properties":{"digest":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"newName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"newTag":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"required":["name"],"type":"object"};

function validate142(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.name === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "name"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.digest !== undefined){
let data0 = data.digest;
const _errs1 = errors;
if(!(validate3(data0, {instancePath:instancePath+"/digest",parentData:data,parentDataProperty:"digest",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.name !== undefined){
let data1 = data.name;
const _errs2 = errors;
if(!(validate1(data1, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.newName !== undefined){
let data2 = data.newName;
const _errs3 = errors;
if(!(validate3(data2, {instancePath:instancePath+"/newName",parentData:data,parentDataProperty:"newName",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.newTag !== undefined){
let data3 = data.newTag;
const _errs4 = errors;
if(!(validate3(data3, {instancePath:instancePath+"/newTag",parentData:data,parentDataProperty:"newTag",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
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
validate142.errors = vErrors;
return errors === 0;
}


function validate141(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate142(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate142.errors : vErrors.concat(validate142.errors);
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
validate141.errors = vErrors;
return errors === 0;
}

const schema56 = {"items":{"$ref":"7CZHzZDz_wpoocIZS98DyyQE-Ko_OIZuRqg1lsnq5nY"},"type":"array","nullable":true};
const schema57 = {"properties":{"patch":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"target":{"$ref":"qvQ8zCB_i7fk-8VDWKLhLuHqTCAEsZHU1Zdym0tsWl0"}},"required":["patch"],"type":"object"};

function validate150(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.patch === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "patch"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.patch !== undefined){
let data0 = data.patch;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/patch",parentData:data,parentDataProperty:"patch",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.target !== undefined){
let data1 = data.target;
const _errs2 = errors;
if(!(validate14(data1, {instancePath:instancePath+"/target",parentData:data,parentDataProperty:"target",rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
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
validate150.errors = vErrors;
return errors === 0;
}


function validate149(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate150(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate150.errors : vErrors.concat(validate150.errors);
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
validate149.errors = vErrors;
return errors === 0;
}


function validate140(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.images !== undefined){
let data0 = data.images;
const _errs2 = errors;
if(!(validate141(data0, {instancePath:instancePath+"/images",parentData:data,parentDataProperty:"images",rootData}))){
vErrors = vErrors === null ? validate141.errors : vErrors.concat(validate141.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.patches !== undefined){
let data1 = data.patches;
const _errs3 = errors;
if(!(validate149(data1, {instancePath:instancePath+"/patches",parentData:data,parentDataProperty:"patches",rootData}))){
vErrors = vErrors === null ? validate149.errors : vErrors.concat(validate149.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate140.errors = vErrors;
return errors === 0;
}


function validate139(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.kustomize !== undefined){
let data0 = data.kustomize;
const _errs1 = errors;
if(!(validate140(data0, {instancePath:instancePath+"/kustomize",parentData:data,parentDataProperty:"kustomize",rootData}))){
vErrors = vErrors === null ? validate140.errors : vErrors.concat(validate140.errors);
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
validate139.errors = vErrors;
return errors === 0;
}


function validate138(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate139(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate139.errors : vErrors.concat(validate139.errors);
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
validate138.errors = vErrors;
return errors === 0;
}

const schema58 = {"maxLength":53,"minLength":1,"type":"string","nullable":true};

function validate158(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(func0(data) > 53){
const err1 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 53}};
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
validate158.errors = vErrors;
return errors === 0;
}

const schema59 = {"properties":{"cleanupOnFail":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableHooks":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableWait":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableWaitForJobs":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"force":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"recreate":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"serverSideApply":{"$ref":"rKko3smVPKcQFzR6-Vi-TWU5ABiIv_BRUwSfF3vPL-k"},"timeout":{"$ref":"pBaBQUcJ_4VVd59oMlDSOC0VZvtZV0pop01FX11W3LU"}},"type":"object","nullable":true};
const schema12 = {"enum":["enabled","disabled","auto"],"type":"string","nullable":true};

function validate23(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema12.enum;
if(!(((data === "enabled") || (data === "disabled")) || (data === "auto"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema12.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate23.errors = vErrors;
return errors === 0;
}


function validate160(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.cleanupOnFail !== undefined){
let data0 = data.cleanupOnFail;
const _errs2 = errors;
if(!(validate9(data0, {instancePath:instancePath+"/cleanupOnFail",parentData:data,parentDataProperty:"cleanupOnFail",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.disableHooks !== undefined){
let data1 = data.disableHooks;
const _errs3 = errors;
if(!(validate9(data1, {instancePath:instancePath+"/disableHooks",parentData:data,parentDataProperty:"disableHooks",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.disableWait !== undefined){
let data2 = data.disableWait;
const _errs4 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/disableWait",parentData:data,parentDataProperty:"disableWait",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.disableWaitForJobs !== undefined){
let data3 = data.disableWaitForJobs;
const _errs5 = errors;
if(!(validate9(data3, {instancePath:instancePath+"/disableWaitForJobs",parentData:data,parentDataProperty:"disableWaitForJobs",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.force !== undefined){
let data4 = data.force;
const _errs6 = errors;
if(!(validate9(data4, {instancePath:instancePath+"/force",parentData:data,parentDataProperty:"force",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.recreate !== undefined){
let data5 = data.recreate;
const _errs7 = errors;
if(!(validate9(data5, {instancePath:instancePath+"/recreate",parentData:data,parentDataProperty:"recreate",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.serverSideApply !== undefined){
let data6 = data.serverSideApply;
const _errs8 = errors;
if(!(validate23(data6, {instancePath:instancePath+"/serverSideApply",parentData:data,parentDataProperty:"serverSideApply",rootData}))){
vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.timeout !== undefined){
let data7 = data.timeout;
const _errs9 = errors;
if(!(validate10(data7, {instancePath:instancePath+"/timeout",parentData:data,parentDataProperty:"timeout",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
}
validate160.errors = vErrors;
return errors === 0;
}

const schema60 = {"maxLength":253,"minLength":1,"type":"string","nullable":true};

function validate170(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate170.errors = vErrors;
return errors === 0;
}

const schema61 = {"properties":{"enable":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"filters":{"$ref":"Uu3k7ODceiZLKHKcy_kVkWBewhHtmPkQSfeRih-mdP8"},"ignoreFailures":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"timeout":{"$ref":"pBaBQUcJ_4VVd59oMlDSOC0VZvtZV0pop01FX11W3LU"}},"type":"object","nullable":true};
const schema62 = {"items":{"$ref":"wujosy4XY2Xyx5g7WOuiNrwFelGKGkmpW0KGxj1m6kc"},"type":"array","nullable":true};
const schema63 = {"properties":{"exclude":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"name":{"$ref":"HObrV2Km43Mw25S2NeeFXvQnOi83UkkOKfJzR7xTt7I"}},"required":["name"],"type":"object"};

function validate178(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.name === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "name"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.exclude !== undefined){
let data0 = data.exclude;
const _errs1 = errors;
if(!(validate9(data0, {instancePath:instancePath+"/exclude",parentData:data,parentDataProperty:"exclude",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.name !== undefined){
let data1 = data.name;
const _errs2 = errors;
if(!(validate4(data1, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
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
validate178.errors = vErrors;
return errors === 0;
}


function validate177(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate178(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate178.errors : vErrors.concat(validate178.errors);
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
validate177.errors = vErrors;
return errors === 0;
}


function validate175(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.enable !== undefined){
let data0 = data.enable;
const _errs2 = errors;
if(!(validate9(data0, {instancePath:instancePath+"/enable",parentData:data,parentDataProperty:"enable",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.filters !== undefined){
let data1 = data.filters;
const _errs3 = errors;
if(!(validate177(data1, {instancePath:instancePath+"/filters",parentData:data,parentDataProperty:"filters",rootData}))){
vErrors = vErrors === null ? validate177.errors : vErrors.concat(validate177.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.ignoreFailures !== undefined){
let data2 = data.ignoreFailures;
const _errs4 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/ignoreFailures",parentData:data,parentDataProperty:"ignoreFailures",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.timeout !== undefined){
let data3 = data.timeout;
const _errs5 = errors;
if(!(validate10(data3, {instancePath:instancePath+"/timeout",parentData:data,parentDataProperty:"timeout",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
}
validate175.errors = vErrors;
return errors === 0;
}

const schema64 = {"properties":{"deletionPropagation":{"$ref":"3kjZxSED9exwVM7f7WAj6nEuo15W5j_fdrqMFWWSLxw"},"disableHooks":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableWait":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"keepHistory":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"timeout":{"$ref":"pBaBQUcJ_4VVd59oMlDSOC0VZvtZV0pop01FX11W3LU"}},"type":"object","nullable":true};
const schema65 = {"default":"background","enum":["background","foreground","orphan"],"type":"string","nullable":true};

function validate188(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema65.enum;
if(!(((data === "background") || (data === "foreground")) || (data === "orphan"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema65.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate188.errors = vErrors;
return errors === 0;
}


function validate187(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.deletionPropagation !== undefined){
let data0 = data.deletionPropagation;
const _errs2 = errors;
if(!(validate188(data0, {instancePath:instancePath+"/deletionPropagation",parentData:data,parentDataProperty:"deletionPropagation",rootData}))){
vErrors = vErrors === null ? validate188.errors : vErrors.concat(validate188.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.disableHooks !== undefined){
let data1 = data.disableHooks;
const _errs3 = errors;
if(!(validate9(data1, {instancePath:instancePath+"/disableHooks",parentData:data,parentDataProperty:"disableHooks",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.disableWait !== undefined){
let data2 = data.disableWait;
const _errs4 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/disableWait",parentData:data,parentDataProperty:"disableWait",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.keepHistory !== undefined){
let data3 = data.keepHistory;
const _errs5 = errors;
if(!(validate9(data3, {instancePath:instancePath+"/keepHistory",parentData:data,parentDataProperty:"keepHistory",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.timeout !== undefined){
let data4 = data.timeout;
const _errs6 = errors;
if(!(validate10(data4, {instancePath:instancePath+"/timeout",parentData:data,parentDataProperty:"timeout",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
}
validate187.errors = vErrors;
return errors === 0;
}

const schema66 = {"properties":{"chartNameChangeStrategy":{"$ref":"qSBImi-V8xPOQgRY9j2rx4pCJWscx2jt1r7ZzWrRyCM"},"cleanupOnFail":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"crds":{"$ref":"OoJv1EUzxO3-ytW-Q7UusSJbcy6XlCF1qPhYt-Mp6qQ"},"disableHooks":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableOpenAPIValidation":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableSchemaValidation":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableTakeOwnership":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableWait":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"disableWaitForJobs":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"force":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"preserveValues":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"remediation":{"$ref":"-XJJob9_ByBu6_YVli59_IqwhTVZtMhcUOdt-UePRbw"},"serverSideApply":{"$ref":"rKko3smVPKcQFzR6-Vi-TWU5ABiIv_BRUwSfF3vPL-k"},"strategy":{"$ref":"ZteiFUwKUc69bD83Kax17fYpFJ0Q2dbriTKXsNV4nmY"},"timeout":{"$ref":"pBaBQUcJ_4VVd59oMlDSOC0VZvtZV0pop01FX11W3LU"}},"type":"object","nullable":true};
const schema67 = {"enum":["InPlaceUpdate","Reinstall"],"type":"string","nullable":true};

function validate196(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema67.enum;
if(!((data === "InPlaceUpdate") || (data === "Reinstall"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema67.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate196.errors = vErrors;
return errors === 0;
}

const schema68 = {"properties":{"ignoreTestFailures":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"remediateLastFailure":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"retries":{"$ref":"e9Vp3ktUVkjqJ-BnY0fSuWjq1PyapJgZxILP3xcsiuw"},"strategy":{"$ref":"4TBb3Vm4X0INEwqDUXQVOJTxND2JMyHWh0k7oB3_Nd8"}},"type":"object","nullable":true};
const schema69 = {"enum":["rollback","uninstall"],"type":"string","nullable":true};

function validate212(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema69.enum;
if(!((data === "rollback") || (data === "uninstall"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema69.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate212.errors = vErrors;
return errors === 0;
}


function validate208(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.ignoreTestFailures !== undefined){
let data0 = data.ignoreTestFailures;
const _errs2 = errors;
if(!(validate9(data0, {instancePath:instancePath+"/ignoreTestFailures",parentData:data,parentDataProperty:"ignoreTestFailures",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.remediateLastFailure !== undefined){
let data1 = data.remediateLastFailure;
const _errs3 = errors;
if(!(validate9(data1, {instancePath:instancePath+"/remediateLastFailure",parentData:data,parentDataProperty:"remediateLastFailure",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.retries !== undefined){
let data2 = data.retries;
const _errs4 = errors;
if(!(validate13(data2, {instancePath:instancePath+"/retries",parentData:data,parentDataProperty:"retries",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.strategy !== undefined){
let data3 = data.strategy;
const _errs5 = errors;
if(!(validate212(data3, {instancePath:instancePath+"/strategy",parentData:data,parentDataProperty:"strategy",rootData}))){
vErrors = vErrors === null ? validate212.errors : vErrors.concat(validate212.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
}
validate208.errors = vErrors;
return errors === 0;
}


function validate195(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.chartNameChangeStrategy !== undefined){
let data0 = data.chartNameChangeStrategy;
const _errs2 = errors;
if(!(validate196(data0, {instancePath:instancePath+"/chartNameChangeStrategy",parentData:data,parentDataProperty:"chartNameChangeStrategy",rootData}))){
vErrors = vErrors === null ? validate196.errors : vErrors.concat(validate196.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.cleanupOnFail !== undefined){
let data1 = data.cleanupOnFail;
const _errs3 = errors;
if(!(validate9(data1, {instancePath:instancePath+"/cleanupOnFail",parentData:data,parentDataProperty:"cleanupOnFail",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.crds !== undefined){
let data2 = data.crds;
const _errs4 = errors;
if(!(validate22(data2, {instancePath:instancePath+"/crds",parentData:data,parentDataProperty:"crds",rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.disableHooks !== undefined){
let data3 = data.disableHooks;
const _errs5 = errors;
if(!(validate9(data3, {instancePath:instancePath+"/disableHooks",parentData:data,parentDataProperty:"disableHooks",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.disableOpenAPIValidation !== undefined){
let data4 = data.disableOpenAPIValidation;
const _errs6 = errors;
if(!(validate9(data4, {instancePath:instancePath+"/disableOpenAPIValidation",parentData:data,parentDataProperty:"disableOpenAPIValidation",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.disableSchemaValidation !== undefined){
let data5 = data.disableSchemaValidation;
const _errs7 = errors;
if(!(validate9(data5, {instancePath:instancePath+"/disableSchemaValidation",parentData:data,parentDataProperty:"disableSchemaValidation",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.disableTakeOwnership !== undefined){
let data6 = data.disableTakeOwnership;
const _errs8 = errors;
if(!(validate9(data6, {instancePath:instancePath+"/disableTakeOwnership",parentData:data,parentDataProperty:"disableTakeOwnership",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.disableWait !== undefined){
let data7 = data.disableWait;
const _errs9 = errors;
if(!(validate9(data7, {instancePath:instancePath+"/disableWait",parentData:data,parentDataProperty:"disableWait",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.disableWaitForJobs !== undefined){
let data8 = data.disableWaitForJobs;
const _errs10 = errors;
if(!(validate9(data8, {instancePath:instancePath+"/disableWaitForJobs",parentData:data,parentDataProperty:"disableWaitForJobs",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.force !== undefined){
let data9 = data.force;
const _errs11 = errors;
if(!(validate9(data9, {instancePath:instancePath+"/force",parentData:data,parentDataProperty:"force",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.preserveValues !== undefined){
let data10 = data.preserveValues;
const _errs12 = errors;
if(!(validate9(data10, {instancePath:instancePath+"/preserveValues",parentData:data,parentDataProperty:"preserveValues",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.remediation !== undefined){
let data11 = data.remediation;
const _errs13 = errors;
if(!(validate208(data11, {instancePath:instancePath+"/remediation",parentData:data,parentDataProperty:"remediation",rootData}))){
vErrors = vErrors === null ? validate208.errors : vErrors.concat(validate208.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.serverSideApply !== undefined){
let data12 = data.serverSideApply;
const _errs14 = errors;
if(!(validate23(data12, {instancePath:instancePath+"/serverSideApply",parentData:data,parentDataProperty:"serverSideApply",rootData}))){
vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.strategy !== undefined){
let data13 = data.strategy;
const _errs15 = errors;
if(!(validate24(data13, {instancePath:instancePath+"/strategy",parentData:data,parentDataProperty:"strategy",rootData}))){
vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.timeout !== undefined){
let data14 = data.timeout;
const _errs16 = errors;
if(!(validate10(data14, {instancePath:instancePath+"/timeout",parentData:data,parentDataProperty:"timeout",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs16 === errors;
}
}
validate195.errors = vErrors;
return errors === 0;
}

const schema70 = {};

function validate219(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
validate219.errors = null;
return true;
}

const schema71 = {"items":{"$ref":"UYTQ4nEOMdlBnFCb_yiCvuoD6roZD4woUTcXpuMAGsI"},"type":"array","nullable":true};
const schema72 = {"properties":{"kind":{"$ref":"aPdrpIa2RtG2XilSqWzI3xeOYWA-OkPRmfZJHVhTAc4"},"literal":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"name":{"$ref":"HObrV2Km43Mw25S2NeeFXvQnOi83UkkOKfJzR7xTt7I"},"optional":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"targetPath":{"$ref":"P9RvGiOkIjBB69km-B1MaxfchWUiwS94e4I-Zz_IwlQ"},"valuesKey":{"$ref":"LlSXn1_DFx2v2LkVm81eYvpT93tmYsRiyLbv6i-iW_Y"}},"required":["kind","name"],"type":"object"};
const schema73 = {"enum":["Secret","ConfigMap"],"type":"string"};

function validate223(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema73.enum;
if(!((data === "Secret") || (data === "ConfigMap"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema73.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate223.errors = vErrors;
return errors === 0;
}

const schema74 = {"maxLength":250,"pattern":"^([a-zA-Z0-9_\\-.\\\\\\/]|\\[[0-9]{1,5}\\])+$","type":"string","nullable":true};
const pattern2 = new RegExp("^([a-zA-Z0-9_\\-.\\\\\\/]|\\[[0-9]{1,5}\\])+$", "u");

function validate228(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(func0(data) > 250){
const err1 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 250}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(!pattern2.test(data)){
const err2 = {instancePath,schemaPath:"#/pattern",keyword:"pattern",params:{pattern: "^([a-zA-Z0-9_\\-.\\\\\\/]|\\[[0-9]{1,5}\\])+$"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
}
validate228.errors = vErrors;
return errors === 0;
}

const schema75 = {"maxLength":253,"pattern":"^[\\-._a-zA-Z0-9]+$","type":"string","nullable":true};
const pattern3 = new RegExp("^[\\-._a-zA-Z0-9]+$", "u");

function validate230(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!pattern3.test(data)){
const err2 = {instancePath,schemaPath:"#/pattern",keyword:"pattern",params:{pattern: "^[\\-._a-zA-Z0-9]+$"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
}
validate230.errors = vErrors;
return errors === 0;
}


function validate222(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.kind !== undefined){
let data0 = data.kind;
const _errs1 = errors;
if(!(validate223(data0, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate223.errors : vErrors.concat(validate223.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.literal !== undefined){
let data1 = data.literal;
const _errs2 = errors;
if(!(validate9(data1, {instancePath:instancePath+"/literal",parentData:data,parentDataProperty:"literal",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.name !== undefined){
let data2 = data.name;
const _errs3 = errors;
if(!(validate4(data2, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.optional !== undefined){
let data3 = data.optional;
const _errs4 = errors;
if(!(validate9(data3, {instancePath:instancePath+"/optional",parentData:data,parentDataProperty:"optional",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.targetPath !== undefined){
let data4 = data.targetPath;
const _errs5 = errors;
if(!(validate228(data4, {instancePath:instancePath+"/targetPath",parentData:data,parentDataProperty:"targetPath",rootData}))){
vErrors = vErrors === null ? validate228.errors : vErrors.concat(validate228.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.valuesKey !== undefined){
let data5 = data.valuesKey;
const _errs6 = errors;
if(!(validate230(data5, {instancePath:instancePath+"/valuesKey",parentData:data,parentDataProperty:"valuesKey",rootData}))){
vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
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
validate222.errors = vErrors;
return errors === 0;
}


function validate221(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate222(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate222.errors : vErrors.concat(validate222.errors);
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
validate221.errors = vErrors;
return errors === 0;
}

const schema76 = {"properties":{"name":{"$ref":"PkSZER4Hko4mWeDEdsFq5ij2DI9BleVJOw8Gs-EGBcM"}},"required":["name"],"type":"object","nullable":true};
const schema77 = {"enum":["poller","legacy"],"type":"string"};

function validate235(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema77.enum;
if(!((data === "poller") || (data === "legacy"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema77.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate235.errors = vErrors;
return errors === 0;
}


function validate234(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate235(data0, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate235.errors : vErrors.concat(validate235.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
}
validate234.errors = vErrors;
return errors === 0;
}


function validate40(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.interval === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "interval"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.chart !== undefined){
let data0 = data.chart;
const _errs2 = errors;
if(!(validate41(data0, {instancePath:instancePath+"/chart",parentData:data,parentDataProperty:"chart",rootData}))){
vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.chartRef !== undefined){
let data1 = data.chartRef;
const _errs3 = errors;
if(!(validate69(data1, {instancePath:instancePath+"/chartRef",parentData:data,parentDataProperty:"chartRef",rootData}))){
vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.commonMetadata !== undefined){
let data2 = data.commonMetadata;
const _errs4 = errors;
if(!(validate6(data2, {instancePath:instancePath+"/commonMetadata",parentData:data,parentDataProperty:"commonMetadata",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.dependsOn !== undefined){
let data3 = data.dependsOn;
const _errs5 = errors;
if(!(validate77(data3, {instancePath:instancePath+"/dependsOn",parentData:data,parentDataProperty:"dependsOn",rootData}))){
vErrors = vErrors === null ? validate77.errors : vErrors.concat(validate77.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.driftDetection !== undefined){
let data4 = data.driftDetection;
const _errs6 = errors;
if(!(validate84(data4, {instancePath:instancePath+"/driftDetection",parentData:data,parentDataProperty:"driftDetection",rootData}))){
vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.healthCheckExprs !== undefined){
let data5 = data.healthCheckExprs;
const _errs7 = errors;
if(!(validate96(data5, {instancePath:instancePath+"/healthCheckExprs",parentData:data,parentDataProperty:"healthCheckExprs",rootData}))){
vErrors = vErrors === null ? validate96.errors : vErrors.concat(validate96.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.install !== undefined){
let data6 = data.install;
const _errs8 = errors;
if(!(validate105(data6, {instancePath:instancePath+"/install",parentData:data,parentDataProperty:"install",rootData}))){
vErrors = vErrors === null ? validate105.errors : vErrors.concat(validate105.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.interval !== undefined){
let data7 = data.interval;
const _errs9 = errors;
if(!(validate125(data7, {instancePath:instancePath+"/interval",parentData:data,parentDataProperty:"interval",rootData}))){
vErrors = vErrors === null ? validate125.errors : vErrors.concat(validate125.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.kubeConfig !== undefined){
let data8 = data.kubeConfig;
const _errs10 = errors;
if(!(validate127(data8, {instancePath:instancePath+"/kubeConfig",parentData:data,parentDataProperty:"kubeConfig",rootData}))){
vErrors = vErrors === null ? validate127.errors : vErrors.concat(validate127.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.maxHistory !== undefined){
let data9 = data.maxHistory;
const _errs11 = errors;
if(!(validate13(data9, {instancePath:instancePath+"/maxHistory",parentData:data,parentDataProperty:"maxHistory",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.persistentClient !== undefined){
let data10 = data.persistentClient;
const _errs12 = errors;
if(!(validate9(data10, {instancePath:instancePath+"/persistentClient",parentData:data,parentDataProperty:"persistentClient",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.postRenderStrategy !== undefined){
let data11 = data.postRenderStrategy;
const _errs13 = errors;
if(!(validate136(data11, {instancePath:instancePath+"/postRenderStrategy",parentData:data,parentDataProperty:"postRenderStrategy",rootData}))){
vErrors = vErrors === null ? validate136.errors : vErrors.concat(validate136.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.postRenderers !== undefined){
let data12 = data.postRenderers;
const _errs14 = errors;
if(!(validate138(data12, {instancePath:instancePath+"/postRenderers",parentData:data,parentDataProperty:"postRenderers",rootData}))){
vErrors = vErrors === null ? validate138.errors : vErrors.concat(validate138.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.releaseName !== undefined){
let data13 = data.releaseName;
const _errs15 = errors;
if(!(validate158(data13, {instancePath:instancePath+"/releaseName",parentData:data,parentDataProperty:"releaseName",rootData}))){
vErrors = vErrors === null ? validate158.errors : vErrors.concat(validate158.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.rollback !== undefined){
let data14 = data.rollback;
const _errs16 = errors;
if(!(validate160(data14, {instancePath:instancePath+"/rollback",parentData:data,parentDataProperty:"rollback",rootData}))){
vErrors = vErrors === null ? validate160.errors : vErrors.concat(validate160.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs16 === errors;
}
if(data.serviceAccountName !== undefined){
let data15 = data.serviceAccountName;
const _errs17 = errors;
if(!(validate170(data15, {instancePath:instancePath+"/serviceAccountName",parentData:data,parentDataProperty:"serviceAccountName",rootData}))){
vErrors = vErrors === null ? validate170.errors : vErrors.concat(validate170.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs17 === errors;
}
if(data.storageNamespace !== undefined){
let data16 = data.storageNamespace;
const _errs18 = errors;
if(!(validate5(data16, {instancePath:instancePath+"/storageNamespace",parentData:data,parentDataProperty:"storageNamespace",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs18 === errors;
}
if(data.suspend !== undefined){
let data17 = data.suspend;
const _errs19 = errors;
if(!(validate9(data17, {instancePath:instancePath+"/suspend",parentData:data,parentDataProperty:"suspend",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs19 === errors;
}
if(data.targetNamespace !== undefined){
let data18 = data.targetNamespace;
const _errs20 = errors;
if(!(validate5(data18, {instancePath:instancePath+"/targetNamespace",parentData:data,parentDataProperty:"targetNamespace",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs20 === errors;
}
if(data.test !== undefined){
let data19 = data.test;
const _errs21 = errors;
if(!(validate175(data19, {instancePath:instancePath+"/test",parentData:data,parentDataProperty:"test",rootData}))){
vErrors = vErrors === null ? validate175.errors : vErrors.concat(validate175.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs21 === errors;
}
if(data.timeout !== undefined){
let data20 = data.timeout;
const _errs22 = errors;
if(!(validate10(data20, {instancePath:instancePath+"/timeout",parentData:data,parentDataProperty:"timeout",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs22 === errors;
}
if(data.uninstall !== undefined){
let data21 = data.uninstall;
const _errs23 = errors;
if(!(validate187(data21, {instancePath:instancePath+"/uninstall",parentData:data,parentDataProperty:"uninstall",rootData}))){
vErrors = vErrors === null ? validate187.errors : vErrors.concat(validate187.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs23 === errors;
}
if(data.upgrade !== undefined){
let data22 = data.upgrade;
const _errs24 = errors;
if(!(validate195(data22, {instancePath:instancePath+"/upgrade",parentData:data,parentDataProperty:"upgrade",rootData}))){
vErrors = vErrors === null ? validate195.errors : vErrors.concat(validate195.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs24 === errors;
}
if(data.values !== undefined){
let data23 = data.values;
const _errs25 = errors;
if(!(validate219(data23, {instancePath:instancePath+"/values",parentData:data,parentDataProperty:"values",rootData}))){
vErrors = vErrors === null ? validate219.errors : vErrors.concat(validate219.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs25 === errors;
}
if(data.valuesFrom !== undefined){
let data24 = data.valuesFrom;
const _errs26 = errors;
if(!(validate221(data24, {instancePath:instancePath+"/valuesFrom",parentData:data,parentDataProperty:"valuesFrom",rootData}))){
vErrors = vErrors === null ? validate221.errors : vErrors.concat(validate221.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs26 === errors;
}
if(data.waitStrategy !== undefined){
let data25 = data.waitStrategy;
const _errs27 = errors;
if(!(validate234(data25, {instancePath:instancePath+"/waitStrategy",parentData:data,parentDataProperty:"waitStrategy",rootData}))){
vErrors = vErrors === null ? validate234.errors : vErrors.concat(validate234.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs27 === errors;
}
}
validate40.errors = vErrors;
return errors === 0;
}

const schema78 = {"default":{"observedGeneration":-1},"properties":{"conditions":{"$ref":"hhAxL57cvApnLYfNWQbGuX0ymd4M4buVmG7H0q63I0w"},"failures":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"helmChart":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"history":{"$ref":"HiellltmyEiKN4B9fWI6JaJht9ARdECMhxTc4VCpiSY"},"installFailures":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"inventory":{"$ref":"Tcb6I9FLQmmUTGwECb6U9ykk42sRt73p7pJgI3y3FmQ"},"lastAttemptedConfigDigest":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"lastAttemptedGeneration":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"lastAttemptedReleaseAction":{"$ref":"IA_2ksd3LpKUiA2DFm2InFMbfbsYUFMRrnqYbQXIc3c"},"lastAttemptedReleaseActionDuration":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"lastAttemptedRevision":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"lastAttemptedRevisionDigest":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"lastAttemptedValuesChecksum":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"lastHandledForceAt":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"lastHandledReconcileAt":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"lastHandledResetAt":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"lastReleaseRevision":{"$ref":"e9Vp3ktUVkjqJ-BnY0fSuWjq1PyapJgZxILP3xcsiuw"},"observedCommonMetadataDigest":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"observedGeneration":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"observedPostRenderersDigest":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"storageNamespace":{"$ref":"tk4ch55V7Bggx4bXj1MsbJrmxEc7ACeG6E_TxOLn6NY"},"upgradeFailures":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"}},"type":"object","nullable":true};
const schema79 = {"items":{"$ref":"dZ13d79yfL0AfKGv8XJr0-7aalgpv7dwgkV5EU9HxwM"},"type":"array","nullable":true};
const schema80 = {"properties":{"lastTransitionTime":{"$ref":"nWP098h5Flk6EOMa_OWYW4EnhyCrisyvgJPgk0WtC9c"},"message":{"$ref":"CG805GD3KzsipQt5EKLOQw9SjU_4PVFnnbOjDh0LzJQ"},"observedGeneration":{"$ref":"Tv0gqme9PlVaT-l831KRjUe4u9reG1m_llVaPqPtqUs"},"reason":{"$ref":"UPBfG4e9zcqG6mx3tN1LWinVzYKOFfIO2VnMgg6lAWI"},"status":{"$ref":"UcCRuQZyUlftnmEwuGDZcciwLAdzzRj4HOLofWAwyW8"},"type":{"$ref":"grctw_GwW6iDVZUzowft1rMz55_d64qiJ_wOfyk2Qoo"}},"required":["lastTransitionTime","message","reason","status","type"],"type":"object"};
const schema15 = {"format":"date-time","type":"string"};
const formats0 = formats["date-time"];

function validate28(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate28.errors = vErrors;
return errors === 0;
}

const schema81 = {"maxLength":32768,"type":"string"};

function validate243(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate243.errors = vErrors;
return errors === 0;
}

const schema82 = {"format":"int64","type":"integer","minimum":0,"nullable":true};
const formats4 = formats.int64;

function validate245(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(formats4.validate(data))){
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
validate245.errors = vErrors;
return errors === 0;
}

const schema83 = {"maxLength":1024,"minLength":1,"pattern":"^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$","type":"string"};
const pattern4 = new RegExp("^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$", "u");

function validate247(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!pattern4.test(data)){
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
validate247.errors = vErrors;
return errors === 0;
}

const schema84 = {"enum":["True","False","Unknown"],"type":"string"};

function validate249(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema84.enum;
if(!(((data === "True") || (data === "False")) || (data === "Unknown"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema84.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate249.errors = vErrors;
return errors === 0;
}

const schema85 = {"maxLength":316,"pattern":"^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$","type":"string"};
const pattern5 = new RegExp("^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$", "u");

function validate251(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!pattern5.test(data)){
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
validate251.errors = vErrors;
return errors === 0;
}


function validate241(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate28(data0, {instancePath:instancePath+"/lastTransitionTime",parentData:data,parentDataProperty:"lastTransitionTime",rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.message !== undefined){
let data1 = data.message;
const _errs2 = errors;
if(!(validate243(data1, {instancePath:instancePath+"/message",parentData:data,parentDataProperty:"message",rootData}))){
vErrors = vErrors === null ? validate243.errors : vErrors.concat(validate243.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.observedGeneration !== undefined){
let data2 = data.observedGeneration;
const _errs3 = errors;
if(!(validate245(data2, {instancePath:instancePath+"/observedGeneration",parentData:data,parentDataProperty:"observedGeneration",rootData}))){
vErrors = vErrors === null ? validate245.errors : vErrors.concat(validate245.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.reason !== undefined){
let data3 = data.reason;
const _errs4 = errors;
if(!(validate247(data3, {instancePath:instancePath+"/reason",parentData:data,parentDataProperty:"reason",rootData}))){
vErrors = vErrors === null ? validate247.errors : vErrors.concat(validate247.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.status !== undefined){
let data4 = data.status;
const _errs5 = errors;
if(!(validate249(data4, {instancePath:instancePath+"/status",parentData:data,parentDataProperty:"status",rootData}))){
vErrors = vErrors === null ? validate249.errors : vErrors.concat(validate249.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.type !== undefined){
let data5 = data.type;
const _errs6 = errors;
if(!(validate251(data5, {instancePath:instancePath+"/type",parentData:data,parentDataProperty:"type",rootData}))){
vErrors = vErrors === null ? validate251.errors : vErrors.concat(validate251.errors);
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
validate241.errors = vErrors;
return errors === 0;
}


function validate240(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate241(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate241.errors : vErrors.concat(validate241.errors);
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
validate240.errors = vErrors;
return errors === 0;
}

const schema17 = {"format":"int64","type":"integer","nullable":true};

function validate30(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(formats4.validate(data))){
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
validate30.errors = vErrors;
return errors === 0;
}

const schema86 = {"items":{"$ref":"VpsnqXuyqfZHt9dEsVHIAUH-53iwjMr6TivkdqWUCkI"},"type":"array","nullable":true};
const schema87 = {"properties":{"action":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"apiVersion":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"appVersion":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"chartName":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"chartVersion":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"configDigest":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"deleted":{"$ref":"YL2AaRx5mZZL3drs48WsIqN7ZQe66kWzKXDNrUwOgoc"},"digest":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"firstDeployed":{"$ref":"nWP098h5Flk6EOMa_OWYW4EnhyCrisyvgJPgk0WtC9c"},"lastDeployed":{"$ref":"nWP098h5Flk6EOMa_OWYW4EnhyCrisyvgJPgk0WtC9c"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"namespace":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"ociDigest":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"status":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"testHooks":{"$ref":"baxCnCOaMcmgfiNjFGwET7N42TNEMN-chRFdBcTbGbE"},"version":{"$ref":"laYO4ZujiLzTOvPomluoS9e439ISWe2RqSMRunp3ReI"}},"required":["chartName","chartVersion","configDigest","digest","firstDeployed","lastDeployed","name","namespace","status","version"],"type":"object"};
const schema16 = {"format":"date-time","type":"string","nullable":true};

function validate29(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if((typeof data == "number") && (isFinite(data))){
}
if(typeof data === "string"){
if(!(formats0.validate(data))){
const err1 = {instancePath,schemaPath:"#/format",keyword:"format",params:{format: "date-time"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
validate29.errors = vErrors;
return errors === 0;
}

const schema88 = {"additionalProperties":{"$ref":"eT94oKncxH2OodQFSooIdjeNV4NRAR4MKeZ3geB3X6M"},"type":"object","properties":{},"nullable":true};
const schema89 = {"properties":{"lastCompleted":{"$ref":"YL2AaRx5mZZL3drs48WsIqN7ZQe66kWzKXDNrUwOgoc"},"lastStarted":{"$ref":"YL2AaRx5mZZL3drs48WsIqN7ZQe66kWzKXDNrUwOgoc"},"phase":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object"};

function validate274(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.lastCompleted !== undefined){
let data0 = data.lastCompleted;
const _errs1 = errors;
if(!(validate29(data0, {instancePath:instancePath+"/lastCompleted",parentData:data,parentDataProperty:"lastCompleted",rootData}))){
vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.lastStarted !== undefined){
let data1 = data.lastStarted;
const _errs2 = errors;
if(!(validate29(data1, {instancePath:instancePath+"/lastStarted",parentData:data,parentDataProperty:"lastStarted",rootData}))){
vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.phase !== undefined){
let data2 = data.phase;
const _errs3 = errors;
if(!(validate3(data2, {instancePath:instancePath+"/phase",parentData:data,parentDataProperty:"phase",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
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
validate274.errors = vErrors;
return errors === 0;
}


function validate273(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate274(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate274.errors : vErrors.concat(validate274.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate273.errors = vErrors;
return errors === 0;
}

const schema90 = {"type":"integer"};

function validate280(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate280.errors = vErrors;
return errors === 0;
}


function validate258(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.chartName === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "chartName"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.chartVersion === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "chartVersion"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.configDigest === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "configDigest"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.digest === undefined){
const err3 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "digest"}};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
if(data.firstDeployed === undefined){
const err4 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "firstDeployed"}};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
if(data.lastDeployed === undefined){
const err5 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "lastDeployed"}};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
if(data.name === undefined){
const err6 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "name"}};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
if(data.namespace === undefined){
const err7 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "namespace"}};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
if(data.status === undefined){
const err8 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "status"}};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
if(data.version === undefined){
const err9 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "version"}};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
if(data.action !== undefined){
let data0 = data.action;
const _errs1 = errors;
if(!(validate3(data0, {instancePath:instancePath+"/action",parentData:data,parentDataProperty:"action",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.apiVersion !== undefined){
let data1 = data.apiVersion;
const _errs2 = errors;
if(!(validate3(data1, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.appVersion !== undefined){
let data2 = data.appVersion;
const _errs3 = errors;
if(!(validate3(data2, {instancePath:instancePath+"/appVersion",parentData:data,parentDataProperty:"appVersion",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.chartName !== undefined){
let data3 = data.chartName;
const _errs4 = errors;
if(!(validate1(data3, {instancePath:instancePath+"/chartName",parentData:data,parentDataProperty:"chartName",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.chartVersion !== undefined){
let data4 = data.chartVersion;
const _errs5 = errors;
if(!(validate1(data4, {instancePath:instancePath+"/chartVersion",parentData:data,parentDataProperty:"chartVersion",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.configDigest !== undefined){
let data5 = data.configDigest;
const _errs6 = errors;
if(!(validate1(data5, {instancePath:instancePath+"/configDigest",parentData:data,parentDataProperty:"configDigest",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.deleted !== undefined){
let data6 = data.deleted;
const _errs7 = errors;
if(!(validate29(data6, {instancePath:instancePath+"/deleted",parentData:data,parentDataProperty:"deleted",rootData}))){
vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.digest !== undefined){
let data7 = data.digest;
const _errs8 = errors;
if(!(validate1(data7, {instancePath:instancePath+"/digest",parentData:data,parentDataProperty:"digest",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.firstDeployed !== undefined){
let data8 = data.firstDeployed;
const _errs9 = errors;
if(!(validate28(data8, {instancePath:instancePath+"/firstDeployed",parentData:data,parentDataProperty:"firstDeployed",rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.lastDeployed !== undefined){
let data9 = data.lastDeployed;
const _errs10 = errors;
if(!(validate28(data9, {instancePath:instancePath+"/lastDeployed",parentData:data,parentDataProperty:"lastDeployed",rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.name !== undefined){
let data10 = data.name;
const _errs11 = errors;
if(!(validate1(data10, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.namespace !== undefined){
let data11 = data.namespace;
const _errs12 = errors;
if(!(validate1(data11, {instancePath:instancePath+"/namespace",parentData:data,parentDataProperty:"namespace",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.ociDigest !== undefined){
let data12 = data.ociDigest;
const _errs13 = errors;
if(!(validate3(data12, {instancePath:instancePath+"/ociDigest",parentData:data,parentDataProperty:"ociDigest",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.status !== undefined){
let data13 = data.status;
const _errs14 = errors;
if(!(validate1(data13, {instancePath:instancePath+"/status",parentData:data,parentDataProperty:"status",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.testHooks !== undefined){
let data14 = data.testHooks;
const _errs15 = errors;
if(!(validate273(data14, {instancePath:instancePath+"/testHooks",parentData:data,parentDataProperty:"testHooks",rootData}))){
vErrors = vErrors === null ? validate273.errors : vErrors.concat(validate273.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.version !== undefined){
let data15 = data.version;
const _errs16 = errors;
if(!(validate280(data15, {instancePath:instancePath+"/version",parentData:data,parentDataProperty:"version",rootData}))){
vErrors = vErrors === null ? validate280.errors : vErrors.concat(validate280.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs16 === errors;
}
}
else {
const err10 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
validate258.errors = vErrors;
return errors === 0;
}


function validate257(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate258(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate258.errors : vErrors.concat(validate258.errors);
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
validate257.errors = vErrors;
return errors === 0;
}

const schema91 = {"properties":{"entries":{"$ref":"GtEscIeDFDP_SQuHNzGlMiDVnF-oNGLLoEnmJARta6I"}},"required":["entries"],"type":"object","nullable":true};
const schema92 = {"items":{"$ref":"CHMFAT9LgmOc35cOsQWep9-5glTezh0ah7GbIQfrbB8"},"type":"array"};
const schema93 = {"properties":{"id":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"v":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["id","v"],"type":"object"};

function validate287(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.id === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "id"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.v === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "v"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.id !== undefined){
let data0 = data.id;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/id",parentData:data,parentDataProperty:"id",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.v !== undefined){
let data1 = data.v;
const _errs2 = errors;
if(!(validate1(data1, {instancePath:instancePath+"/v",parentData:data,parentDataProperty:"v",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
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
validate287.errors = vErrors;
return errors === 0;
}


function validate286(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(Array.isArray(data)){
let valid1 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
if(!(validate287(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate287.errors : vErrors.concat(validate287.errors);
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
validate286.errors = vErrors;
return errors === 0;
}


function validate285(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.entries === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "entries"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.entries !== undefined){
let data0 = data.entries;
const _errs2 = errors;
if(!(validate286(data0, {instancePath:instancePath+"/entries",parentData:data,parentDataProperty:"entries",rootData}))){
vErrors = vErrors === null ? validate286.errors : vErrors.concat(validate286.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
}
validate285.errors = vErrors;
return errors === 0;
}

const schema94 = {"enum":["install","upgrade"],"type":"string","nullable":true};

function validate295(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema94.enum;
if(!((data === "install") || (data === "upgrade"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema94.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate295.errors = vErrors;
return errors === 0;
}


function validate239(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate240(data0, {instancePath:instancePath+"/conditions",parentData:data,parentDataProperty:"conditions",rootData}))){
vErrors = vErrors === null ? validate240.errors : vErrors.concat(validate240.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.failures !== undefined){
let data1 = data.failures;
const _errs3 = errors;
if(!(validate30(data1, {instancePath:instancePath+"/failures",parentData:data,parentDataProperty:"failures",rootData}))){
vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.helmChart !== undefined){
let data2 = data.helmChart;
const _errs4 = errors;
if(!(validate3(data2, {instancePath:instancePath+"/helmChart",parentData:data,parentDataProperty:"helmChart",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.history !== undefined){
let data3 = data.history;
const _errs5 = errors;
if(!(validate257(data3, {instancePath:instancePath+"/history",parentData:data,parentDataProperty:"history",rootData}))){
vErrors = vErrors === null ? validate257.errors : vErrors.concat(validate257.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.installFailures !== undefined){
let data4 = data.installFailures;
const _errs6 = errors;
if(!(validate30(data4, {instancePath:instancePath+"/installFailures",parentData:data,parentDataProperty:"installFailures",rootData}))){
vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.inventory !== undefined){
let data5 = data.inventory;
const _errs7 = errors;
if(!(validate285(data5, {instancePath:instancePath+"/inventory",parentData:data,parentDataProperty:"inventory",rootData}))){
vErrors = vErrors === null ? validate285.errors : vErrors.concat(validate285.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.lastAttemptedConfigDigest !== undefined){
let data6 = data.lastAttemptedConfigDigest;
const _errs8 = errors;
if(!(validate3(data6, {instancePath:instancePath+"/lastAttemptedConfigDigest",parentData:data,parentDataProperty:"lastAttemptedConfigDigest",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.lastAttemptedGeneration !== undefined){
let data7 = data.lastAttemptedGeneration;
const _errs9 = errors;
if(!(validate30(data7, {instancePath:instancePath+"/lastAttemptedGeneration",parentData:data,parentDataProperty:"lastAttemptedGeneration",rootData}))){
vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.lastAttemptedReleaseAction !== undefined){
let data8 = data.lastAttemptedReleaseAction;
const _errs10 = errors;
if(!(validate295(data8, {instancePath:instancePath+"/lastAttemptedReleaseAction",parentData:data,parentDataProperty:"lastAttemptedReleaseAction",rootData}))){
vErrors = vErrors === null ? validate295.errors : vErrors.concat(validate295.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.lastAttemptedReleaseActionDuration !== undefined){
let data9 = data.lastAttemptedReleaseActionDuration;
const _errs11 = errors;
if(!(validate3(data9, {instancePath:instancePath+"/lastAttemptedReleaseActionDuration",parentData:data,parentDataProperty:"lastAttemptedReleaseActionDuration",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.lastAttemptedRevision !== undefined){
let data10 = data.lastAttemptedRevision;
const _errs12 = errors;
if(!(validate3(data10, {instancePath:instancePath+"/lastAttemptedRevision",parentData:data,parentDataProperty:"lastAttemptedRevision",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.lastAttemptedRevisionDigest !== undefined){
let data11 = data.lastAttemptedRevisionDigest;
const _errs13 = errors;
if(!(validate3(data11, {instancePath:instancePath+"/lastAttemptedRevisionDigest",parentData:data,parentDataProperty:"lastAttemptedRevisionDigest",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.lastAttemptedValuesChecksum !== undefined){
let data12 = data.lastAttemptedValuesChecksum;
const _errs14 = errors;
if(!(validate3(data12, {instancePath:instancePath+"/lastAttemptedValuesChecksum",parentData:data,parentDataProperty:"lastAttemptedValuesChecksum",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.lastHandledForceAt !== undefined){
let data13 = data.lastHandledForceAt;
const _errs15 = errors;
if(!(validate3(data13, {instancePath:instancePath+"/lastHandledForceAt",parentData:data,parentDataProperty:"lastHandledForceAt",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.lastHandledReconcileAt !== undefined){
let data14 = data.lastHandledReconcileAt;
const _errs16 = errors;
if(!(validate3(data14, {instancePath:instancePath+"/lastHandledReconcileAt",parentData:data,parentDataProperty:"lastHandledReconcileAt",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs16 === errors;
}
if(data.lastHandledResetAt !== undefined){
let data15 = data.lastHandledResetAt;
const _errs17 = errors;
if(!(validate3(data15, {instancePath:instancePath+"/lastHandledResetAt",parentData:data,parentDataProperty:"lastHandledResetAt",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs17 === errors;
}
if(data.lastReleaseRevision !== undefined){
let data16 = data.lastReleaseRevision;
const _errs18 = errors;
if(!(validate13(data16, {instancePath:instancePath+"/lastReleaseRevision",parentData:data,parentDataProperty:"lastReleaseRevision",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs18 === errors;
}
if(data.observedCommonMetadataDigest !== undefined){
let data17 = data.observedCommonMetadataDigest;
const _errs19 = errors;
if(!(validate3(data17, {instancePath:instancePath+"/observedCommonMetadataDigest",parentData:data,parentDataProperty:"observedCommonMetadataDigest",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs19 === errors;
}
if(data.observedGeneration !== undefined){
let data18 = data.observedGeneration;
const _errs20 = errors;
if(!(validate30(data18, {instancePath:instancePath+"/observedGeneration",parentData:data,parentDataProperty:"observedGeneration",rootData}))){
vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs20 === errors;
}
if(data.observedPostRenderersDigest !== undefined){
let data19 = data.observedPostRenderersDigest;
const _errs21 = errors;
if(!(validate3(data19, {instancePath:instancePath+"/observedPostRenderersDigest",parentData:data,parentDataProperty:"observedPostRenderersDigest",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs21 === errors;
}
if(data.storageNamespace !== undefined){
let data20 = data.storageNamespace;
const _errs22 = errors;
if(!(validate5(data20, {instancePath:instancePath+"/storageNamespace",parentData:data,parentDataProperty:"storageNamespace",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs22 === errors;
}
if(data.upgradeFailures !== undefined){
let data21 = data.upgradeFailures;
const _errs23 = errors;
if(!(validate30(data21, {instancePath:instancePath+"/upgradeFailures",parentData:data,parentDataProperty:"upgradeFailures",rootData}))){
vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs23 === errors;
}
}
validate239.errors = vErrors;
return errors === 0;
}


function validate31(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="helm.toolkit.fluxcd.io.v2.HelmRelease" */;
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
if(!(validate32(data0, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.kind !== undefined){
let data1 = data.kind;
const _errs2 = errors;
if(!(validate34(data1, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.metadata !== undefined){
let data2 = data.metadata;
const _errs3 = errors;
if(!(validate36(data2, {instancePath:instancePath+"/metadata",parentData:data,parentDataProperty:"metadata",rootData}))){
vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.spec !== undefined){
let data3 = data.spec;
const _errs4 = errors;
if(!(validate40(data3, {instancePath:instancePath+"/spec",parentData:data,parentDataProperty:"spec",rootData}))){
vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.status !== undefined){
let data4 = data.status;
const _errs5 = errors;
if(!(validate239(data4, {instancePath:instancePath+"/status",parentData:data,parentDataProperty:"status",rootData}))){
vErrors = vErrors === null ? validate239.errors : vErrors.concat(validate239.errors);
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
validate31.errors = vErrors;
return errors === 0;
}
