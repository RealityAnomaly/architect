/* @ts-self-types="./VolumeProjection.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"clusterTrustBundle":{"$ref":"tALyu1cRZcSjUioJWX5m92Oor8WUNBdBn9X20zezLC0"},"configMap":{"$ref":"4g9oM9otGa5L40FuZhb209gKYOFvw8WF414wyhcbn-Y"},"downwardAPI":{"$ref":"Atlcf_zqCM4svnsaX6oRTJOo0-ZZWuHD9QwJbU86H2s"},"podCertificate":{"$ref":"PGwGvhvyPEzSlP1mVR3QNapkvc6Ah45WBDPoih74Tok"},"secret":{"$ref":"tDoZl-P0DWjXkQ9LeSms8dc7Bso6xKbegOuDMd2POo4"},"serviceAccountToken":{"$ref":"bjiBlNcNoxTC2EQAzQYZkl-npSI0FTcq7upI9pBryAg"}},"type":"object","$id":"io.k8s.api.core.v1.VolumeProjection"};
const schema1 = {"nullableRef":"io.k8s.api.core.v1.ClusterTrustBundleProjection#"};
const schema2 = {};

import { validate as validate2 } from "././ClusterTrustBundleProjection.js";


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

const schema3 = {"nullableRef":"io.k8s.api.core.v1.ConfigMapProjection#"};
const schema4 = {};

import { validate as validate6 } from "././ConfigMapProjection.js";


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

const schema5 = {"nullableRef":"io.k8s.api.core.v1.DownwardAPIProjection#"};
const schema6 = {};

import { validate as validate10 } from "././DownwardAPIProjection.js";


function validate9(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate10(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
}
validate9.errors = vErrors;
return errors === 0;
}

const schema7 = {"nullableRef":"io.k8s.api.core.v1.PodCertificateProjection#"};
const schema8 = {};

import { validate as validate14 } from "././PodCertificateProjection.js";


function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate14(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
}
validate13.errors = vErrors;
return errors === 0;
}

const schema9 = {"nullableRef":"io.k8s.api.core.v1.SecretProjection#"};
const schema10 = {};

import { validate as validate18 } from "././SecretProjection.js";


function validate17(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate18(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate18.errors : vErrors.concat(validate18.errors);
errors = vErrors.length;
}
else {
}
}
validate17.errors = vErrors;
return errors === 0;
}

const schema11 = {"nullableRef":"io.k8s.api.core.v1.ServiceAccountTokenProjection#"};
const schema12 = {};

import { validate as validate22 } from "././ServiceAccountTokenProjection.js";


function validate21(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate22(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
}
validate21.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.VolumeProjection" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.clusterTrustBundle !== undefined){
let data0 = data.clusterTrustBundle;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/clusterTrustBundle",parentData:data,parentDataProperty:"clusterTrustBundle",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.configMap !== undefined){
let data1 = data.configMap;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/configMap",parentData:data,parentDataProperty:"configMap",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.downwardAPI !== undefined){
let data2 = data.downwardAPI;
const _errs3 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/downwardAPI",parentData:data,parentDataProperty:"downwardAPI",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.podCertificate !== undefined){
let data3 = data.podCertificate;
const _errs4 = errors;
if(!(validate13(data3, {instancePath:instancePath+"/podCertificate",parentData:data,parentDataProperty:"podCertificate",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.secret !== undefined){
let data4 = data.secret;
const _errs5 = errors;
if(!(validate17(data4, {instancePath:instancePath+"/secret",parentData:data,parentDataProperty:"secret",rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.serviceAccountToken !== undefined){
let data5 = data.serviceAccountToken;
const _errs6 = errors;
if(!(validate21(data5, {instancePath:instancePath+"/serviceAccountToken",parentData:data,parentDataProperty:"serviceAccountToken",rootData}))){
vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
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
