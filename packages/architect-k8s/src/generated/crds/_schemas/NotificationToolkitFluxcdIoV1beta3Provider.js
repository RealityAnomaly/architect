export const validate = validate5;
const schema4 = {"type":"object","properties":{"apiVersion":{"$ref":"FDO61L2EGWtAu8DEHokPFMq1oB_uZaf0Js0o3DWGqmo"},"kind":{"$ref":"TzK_z0f57OcVEiQgE4YpHNXla7xpG37QVsMan1UKtiA"},"metadata":{"$ref":"P3srTZpWadQH4s4N9KfJR0iCqydQo9YAz7xMB2qf0GQ"},"spec":{"$ref":"e7_VdNJkHCy3hLsAc0YhS8JY_bBiAD3DLezglnHyres"}},"required":["apiVersion","kind"],"$id":"notification.toolkit.fluxcd.io.v1beta3.Provider"};
const schema5 = {"type":"string","enum":["notification.toolkit.fluxcd.io/v1beta3"]};

function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema5.enum;
if(!(data === "notification.toolkit.fluxcd.io/v1beta3")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema5.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate6.errors = vErrors;
return errors === 0;
}

const schema6 = {"type":"string","enum":["Provider"]};

function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema6.enum;
if(!(data === "Provider")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema6.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate8.errors = vErrors;
return errors === 0;
}

const schema7 = {"nullableRef":"io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"};
const schema8 = {};

import { validate as validate11 } from "@glassway/architect/kubernetes/apimachinery/_schemas/ObjectMeta";


function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate11(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
}
validate10.errors = vErrors;
return errors === 0;
}

const schema9 = {"properties":{"address":{"$ref":"wF8Z4bvfqJOijhq3xTXZkuKD8wvFMdZBklQ_DFak_tM"},"certSecretRef":{"$ref":"E97dOchMV0AJMEW2BvWE8x-plhaqw9P894BmF33ZGUY"},"channel":{"$ref":"wF8Z4bvfqJOijhq3xTXZkuKD8wvFMdZBklQ_DFak_tM"},"commitStatusExpr":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"interval":{"$ref":"pBaBQUcJ_4VVd59oMlDSOC0VZvtZV0pop01FX11W3LU"},"proxy":{"$ref":"B1t5LjOl3yvZ6x7L-4nAQiX3SMGJaabTSRUGLkgnEXo"},"proxySecretRef":{"$ref":"E97dOchMV0AJMEW2BvWE8x-plhaqw9P894BmF33ZGUY"},"secretRef":{"$ref":"E97dOchMV0AJMEW2BvWE8x-plhaqw9P894BmF33ZGUY"},"serviceAccountName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"suspend":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"timeout":{"$ref":"NxYVC3iXeyIXvWkEba5ma3lHyRQHVFyBMV_5tuprckc"},"type":{"$ref":"KmEPbSKBQaql7i2r2EAMoEpB5tBy-EqouBCCzPPkTEE"},"username":{"$ref":"wF8Z4bvfqJOijhq3xTXZkuKD8wvFMdZBklQ_DFak_tM"}},"required":["type"],"type":"object","nullable":true};
const schema0 = {"maxLength":2048,"type":"string","nullable":true};
import func0 from "@glassway/architect/kubernetes/validate/runtime/ucs2length";

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
if(typeof data === "string"){
if(func0(data) > 2048){
const err1 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 2048}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
validate0.errors = vErrors;
return errors === 0;
}

const schema1 = {"properties":{"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["name"],"type":"object","nullable":true};
const schema2 = {"type":"string"};

function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate2.errors = vErrors;
return errors === 0;
}


function validate1(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate2(data0, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
}
validate1.errors = vErrors;
return errors === 0;
}

const schema3 = {"type":"string","nullable":true};

function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate4.errors = vErrors;
return errors === 0;
}

const schema10 = {"pattern":"^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$","type":"string","nullable":true};
const pattern0 = new RegExp("^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$", "u");

function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate19.errors = vErrors;
return errors === 0;
}

const schema11 = {"maxLength":2048,"pattern":"^(http|https)://.*$","type":"string","nullable":true};
const pattern1 = new RegExp("^(http|https)://.*$", "u");

function validate21(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(func0(data) > 2048){
const err1 = {instancePath,schemaPath:"#/maxLength",keyword:"maxLength",params:{limit: 2048}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(!pattern1.test(data)){
const err2 = {instancePath,schemaPath:"#/pattern",keyword:"pattern",params:{pattern: "^(http|https)://.*$"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
}
validate21.errors = vErrors;
return errors === 0;
}

const schema12 = {"type":"boolean","nullable":true};

function validate26(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate26.errors = vErrors;
return errors === 0;
}

const schema13 = {"pattern":"^([0-9]+(\\.[0-9]+)?(ms|s|m))+$","type":"string","nullable":true};
const pattern2 = new RegExp("^([0-9]+(\\.[0-9]+)?(ms|s|m))+$", "u");

function validate28(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!pattern2.test(data)){
const err1 = {instancePath,schemaPath:"#/pattern",keyword:"pattern",params:{pattern: "^([0-9]+(\\.[0-9]+)?(ms|s|m))+$"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
}
validate28.errors = vErrors;
return errors === 0;
}

const schema14 = {"enum":["slack","discord","msteams","rocket","generic","generic-hmac","github","gitlab","gitea","giteapullrequestcomment","bitbucketserver","bitbucket","azuredevops","googlechat","googlepubsub","webex","sentry","azureeventhub","telegram","lark","matrix","opsgenie","alertmanager","grafana","githubdispatch","githubpullrequestcomment","gitlabmergerequestcomment","pagerduty","datadog","nats","zulip","otel"],"type":"string"};

function validate30(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!((((((((((((((((((((((((((((((((data === "slack") || (data === "discord")) || (data === "msteams")) || (data === "rocket")) || (data === "generic")) || (data === "generic-hmac")) || (data === "github")) || (data === "gitlab")) || (data === "gitea")) || (data === "giteapullrequestcomment")) || (data === "bitbucketserver")) || (data === "bitbucket")) || (data === "azuredevops")) || (data === "googlechat")) || (data === "googlepubsub")) || (data === "webex")) || (data === "sentry")) || (data === "azureeventhub")) || (data === "telegram")) || (data === "lark")) || (data === "matrix")) || (data === "opsgenie")) || (data === "alertmanager")) || (data === "grafana")) || (data === "githubdispatch")) || (data === "githubpullrequestcomment")) || (data === "gitlabmergerequestcomment")) || (data === "pagerduty")) || (data === "datadog")) || (data === "nats")) || (data === "zulip")) || (data === "otel"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema14.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate30.errors = vErrors;
return errors === 0;
}


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
if(data.type === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "type"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.address !== undefined){
let data0 = data.address;
const _errs2 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/address",parentData:data,parentDataProperty:"address",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.certSecretRef !== undefined){
let data1 = data.certSecretRef;
const _errs3 = errors;
if(!(validate1(data1, {instancePath:instancePath+"/certSecretRef",parentData:data,parentDataProperty:"certSecretRef",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.channel !== undefined){
let data2 = data.channel;
const _errs4 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/channel",parentData:data,parentDataProperty:"channel",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.commitStatusExpr !== undefined){
let data3 = data.commitStatusExpr;
const _errs5 = errors;
if(!(validate4(data3, {instancePath:instancePath+"/commitStatusExpr",parentData:data,parentDataProperty:"commitStatusExpr",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.interval !== undefined){
let data4 = data.interval;
const _errs6 = errors;
if(!(validate19(data4, {instancePath:instancePath+"/interval",parentData:data,parentDataProperty:"interval",rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.proxy !== undefined){
let data5 = data.proxy;
const _errs7 = errors;
if(!(validate21(data5, {instancePath:instancePath+"/proxy",parentData:data,parentDataProperty:"proxy",rootData}))){
vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.proxySecretRef !== undefined){
let data6 = data.proxySecretRef;
const _errs8 = errors;
if(!(validate1(data6, {instancePath:instancePath+"/proxySecretRef",parentData:data,parentDataProperty:"proxySecretRef",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.secretRef !== undefined){
let data7 = data.secretRef;
const _errs9 = errors;
if(!(validate1(data7, {instancePath:instancePath+"/secretRef",parentData:data,parentDataProperty:"secretRef",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.serviceAccountName !== undefined){
let data8 = data.serviceAccountName;
const _errs10 = errors;
if(!(validate4(data8, {instancePath:instancePath+"/serviceAccountName",parentData:data,parentDataProperty:"serviceAccountName",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.suspend !== undefined){
let data9 = data.suspend;
const _errs11 = errors;
if(!(validate26(data9, {instancePath:instancePath+"/suspend",parentData:data,parentDataProperty:"suspend",rootData}))){
vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.timeout !== undefined){
let data10 = data.timeout;
const _errs12 = errors;
if(!(validate28(data10, {instancePath:instancePath+"/timeout",parentData:data,parentDataProperty:"timeout",rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.type !== undefined){
let data11 = data.type;
const _errs13 = errors;
if(!(validate30(data11, {instancePath:instancePath+"/type",parentData:data,parentDataProperty:"type",rootData}))){
vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.username !== undefined){
let data12 = data.username;
const _errs14 = errors;
if(!(validate0(data12, {instancePath:instancePath+"/username",parentData:data,parentDataProperty:"username",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
}
validate14.errors = vErrors;
return errors === 0;
}


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="notification.toolkit.fluxcd.io.v1beta3.Provider" */;
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
if(!(validate6(data0, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.kind !== undefined){
let data1 = data.kind;
const _errs2 = errors;
if(!(validate8(data1, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.metadata !== undefined){
let data2 = data.metadata;
const _errs3 = errors;
if(!(validate10(data2, {instancePath:instancePath+"/metadata",parentData:data,parentDataProperty:"metadata",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.spec !== undefined){
let data3 = data.spec;
const _errs4 = errors;
if(!(validate14(data3, {instancePath:instancePath+"/spec",parentData:data,parentDataProperty:"spec",rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
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
validate5.errors = vErrors;
return errors === 0;
}
