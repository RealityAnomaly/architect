/* @ts-self-types="./PersistentVolumeSpec.d.ts" */
export const validate = validate4;
const schema3 = {"properties":{"accessModes":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"awsElasticBlockStore":{"$ref":"_BFKe6QcHeYE8JRGs-6ftSUiF2a2yk63PraGAKsUvxE"},"azureDisk":{"$ref":"noOs4tTdVVKkQEU6dpiJtdRTLWoI0_LQ9iGnHpaTweo"},"azureFile":{"$ref":"O9yFgAcxFN11qcLrV1dxH0jb715uesCH82yAEnRFs80"},"capacity":{"$ref":"YfMVS3P5aWVrkVb6yChl1fVwg8EQjbWuoJkKTJAHr6A"},"cephfs":{"$ref":"YMucIqsoHcBB5hS2-6RYo-l7Gi0pL8GHQrbn3EvsTkw"},"cinder":{"$ref":"bYjog-jTnfPO6Jp9KTCc5MRLL2hw0sXh_ysJlLdbFhk"},"claimRef":{"$ref":"9UGK2Bug0jhPkf5VA_mJbqBuWWCE1KeXKPwsHLfDXrg"},"csi":{"$ref":"sZGXKeFHjQTVIOvEOQkWtI9FbEkgUsq5j-nEItv23wg"},"fc":{"$ref":"7Q1duLQaypPhezZG2c6UBiz14QrBwpoRNpduoWtBPwE"},"flexVolume":{"$ref":"PgCOdmbSWDfMotHXW_ytvYKCYv5HPFjF8AyvALz4khY"},"flocker":{"$ref":"Nrh1PtQ5LusKJwsgaXkcAkWfeJydXATBPRVBfcDJ8iQ"},"gcePersistentDisk":{"$ref":"QJ723QjP8tP43YrI1HuDaLeiTYiuG2h4xfLEZ9LhPDQ"},"glusterfs":{"$ref":"0BoDUnt3m0V7zsfQHdGePmbReHKhhfoKmmPiFCgvJO0"},"hostPath":{"$ref":"TcU3Fb_mab1UV-JyeBM59UWItNo5pCd7WYLyGjMKUwY"},"iscsi":{"$ref":"PGooIP0Xp4XFzqy5HNASbD42xUbCDP2XDzc_bHWk0Hc"},"local":{"$ref":"Jir_xgf4MNjyUqRVuTXtUg7X-lHitaheVLQGmu0qWXU"},"mountOptions":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"nfs":{"$ref":"HupE9XV7-I_QPnbx4R8MKPfH5-bi1yKPxgWyojMXxnY"},"nodeAffinity":{"$ref":"EgXfQeMO2x3ZRXJUBbqc0i4bbF6sdW1vgeB5f4cO87I"},"persistentVolumeReclaimPolicy":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"photonPersistentDisk":{"$ref":"uARkLiDy4jhnSlW_Pc-QCRiNHAf55TbBpxbWqw7D_LE"},"portworxVolume":{"$ref":"D0o80tQwPFbtjO2AUD-U0nfeAbU_Q3-pp0Y4mgDQ_Cg"},"quobyte":{"$ref":"T7sgqRjsOf0NqFjskAV5R6cairBXxatSSRYfvTNy4yw"},"rbd":{"$ref":"1rW6BTG7ePzcn_c_IYHIzH9_h1-uvsvG_wMB44SpcQA"},"scaleIO":{"$ref":"4kekTCRBnbR5djNfRZ022EeXPoCB0Ie4k5XjAoxsYKQ"},"storageClassName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"storageos":{"$ref":"kvVXD0cZItJcPTv-64taahsARpCzywyjn_whF5ynnW4"},"volumeAttributesClassName":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"volumeMode":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"vsphereVolume":{"$ref":"WicD7kHdOQE0a5CNSIGRB13evQgNPXnGLyoAXWxJuew"}},"type":"object","$id":"io.k8s.api.core.v1.PersistentVolumeSpec"};
const schema0 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array","nullable":true};
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
validate0.errors = vErrors;
return errors === 0;
}

const schema4 = {"nullableRef":"io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource#"};
const schema5 = {};

import { validate as validate7 } from "././AWSElasticBlockStoreVolumeSource.js";


function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate7(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
errors = vErrors.length;
}
else {
}
}
validate6.errors = vErrors;
return errors === 0;
}

const schema6 = {"nullableRef":"io.k8s.api.core.v1.AzureDiskVolumeSource#"};
const schema7 = {};

import { validate as validate11 } from "././AzureDiskVolumeSource.js";


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

const schema8 = {"nullableRef":"io.k8s.api.core.v1.AzureFilePersistentVolumeSource#"};
const schema9 = {};

import { validate as validate15 } from "././AzureFilePersistentVolumeSource.js";


function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate15(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
}
validate14.errors = vErrors;
return errors === 0;
}

const schema10 = {"additionalProperties":{"$ref":"VKZPUldlWDa056CXEqKHCNMaIxOA7qIsmePtey64Cuk"},"type":"object","nullable":true};
const schema11 = {"$ref":"io.k8s.apimachinery.pkg.api.resource.Quantity#"};
const schema12 = {};

import { validate as validate20 } from "./../../../apimachinery/_schemas/api/resource/Quantity.js";


function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate20(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
errors = vErrors.length;
}
else {
}
validate19.errors = vErrors;
return errors === 0;
}


function validate18(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate19(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate18.errors = vErrors;
return errors === 0;
}

const schema13 = {"nullableRef":"io.k8s.api.core.v1.CephFSPersistentVolumeSource#"};
const schema14 = {};

import { validate as validate25 } from "././CephFSPersistentVolumeSource.js";


function validate24(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate25(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
errors = vErrors.length;
}
else {
}
}
validate24.errors = vErrors;
return errors === 0;
}

const schema15 = {"nullableRef":"io.k8s.api.core.v1.CinderPersistentVolumeSource#"};
const schema16 = {};

import { validate as validate29 } from "././CinderPersistentVolumeSource.js";


function validate28(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate29(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
errors = vErrors.length;
}
else {
}
}
validate28.errors = vErrors;
return errors === 0;
}

const schema17 = {"nullableRef":"io.k8s.api.core.v1.ObjectReference#"};
const schema18 = {};

import { validate as validate33 } from "././ObjectReference.js";


function validate32(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate33(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
errors = vErrors.length;
}
else {
}
}
validate32.errors = vErrors;
return errors === 0;
}

const schema19 = {"nullableRef":"io.k8s.api.core.v1.CSIPersistentVolumeSource#"};
const schema20 = {};

import { validate as validate37 } from "././CSIPersistentVolumeSource.js";


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

const schema21 = {"nullableRef":"io.k8s.api.core.v1.FCVolumeSource#"};
const schema22 = {};

import { validate as validate41 } from "././FCVolumeSource.js";


function validate40(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate41(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
errors = vErrors.length;
}
else {
}
}
validate40.errors = vErrors;
return errors === 0;
}

const schema23 = {"nullableRef":"io.k8s.api.core.v1.FlexPersistentVolumeSource#"};
const schema24 = {};

import { validate as validate45 } from "././FlexPersistentVolumeSource.js";


function validate44(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate45(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
errors = vErrors.length;
}
else {
}
}
validate44.errors = vErrors;
return errors === 0;
}

const schema25 = {"nullableRef":"io.k8s.api.core.v1.FlockerVolumeSource#"};
const schema26 = {};

import { validate as validate49 } from "././FlockerVolumeSource.js";


function validate48(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate49(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
errors = vErrors.length;
}
else {
}
}
validate48.errors = vErrors;
return errors === 0;
}

const schema27 = {"nullableRef":"io.k8s.api.core.v1.GCEPersistentDiskVolumeSource#"};
const schema28 = {};

import { validate as validate53 } from "././GCEPersistentDiskVolumeSource.js";


function validate52(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate53(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
errors = vErrors.length;
}
else {
}
}
validate52.errors = vErrors;
return errors === 0;
}

const schema29 = {"nullableRef":"io.k8s.api.core.v1.GlusterfsPersistentVolumeSource#"};
const schema30 = {};

import { validate as validate57 } from "././GlusterfsPersistentVolumeSource.js";


function validate56(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate57(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
errors = vErrors.length;
}
else {
}
}
validate56.errors = vErrors;
return errors === 0;
}

const schema31 = {"nullableRef":"io.k8s.api.core.v1.HostPathVolumeSource#"};
const schema32 = {};

import { validate as validate61 } from "././HostPathVolumeSource.js";


function validate60(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate61(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
errors = vErrors.length;
}
else {
}
}
validate60.errors = vErrors;
return errors === 0;
}

const schema33 = {"nullableRef":"io.k8s.api.core.v1.ISCSIPersistentVolumeSource#"};
const schema34 = {};

import { validate as validate65 } from "././ISCSIPersistentVolumeSource.js";


function validate64(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate65(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
errors = vErrors.length;
}
else {
}
}
validate64.errors = vErrors;
return errors === 0;
}

const schema35 = {"nullableRef":"io.k8s.api.core.v1.LocalVolumeSource#"};
const schema36 = {};

import { validate as validate69 } from "././LocalVolumeSource.js";


function validate68(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate69(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
errors = vErrors.length;
}
else {
}
}
validate68.errors = vErrors;
return errors === 0;
}

const schema37 = {"nullableRef":"io.k8s.api.core.v1.NFSVolumeSource#"};
const schema38 = {};

import { validate as validate74 } from "././NFSVolumeSource.js";


function validate73(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate74(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
errors = vErrors.length;
}
else {
}
}
validate73.errors = vErrors;
return errors === 0;
}

const schema39 = {"nullableRef":"io.k8s.api.core.v1.VolumeNodeAffinity#"};
const schema40 = {};

import { validate as validate78 } from "././VolumeNodeAffinity.js";


function validate77(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate78(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
errors = vErrors.length;
}
else {
}
}
validate77.errors = vErrors;
return errors === 0;
}

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

const schema41 = {"nullableRef":"io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource#"};
const schema42 = {};

import { validate as validate83 } from "././PhotonPersistentDiskVolumeSource.js";


function validate82(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate83(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate83.errors : vErrors.concat(validate83.errors);
errors = vErrors.length;
}
else {
}
}
validate82.errors = vErrors;
return errors === 0;
}

const schema43 = {"nullableRef":"io.k8s.api.core.v1.PortworxVolumeSource#"};
const schema44 = {};

import { validate as validate87 } from "././PortworxVolumeSource.js";


function validate86(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate87(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
errors = vErrors.length;
}
else {
}
}
validate86.errors = vErrors;
return errors === 0;
}

const schema45 = {"nullableRef":"io.k8s.api.core.v1.QuobyteVolumeSource#"};
const schema46 = {};

import { validate as validate91 } from "././QuobyteVolumeSource.js";


function validate90(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate91(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate91.errors : vErrors.concat(validate91.errors);
errors = vErrors.length;
}
else {
}
}
validate90.errors = vErrors;
return errors === 0;
}

const schema47 = {"nullableRef":"io.k8s.api.core.v1.RBDPersistentVolumeSource#"};
const schema48 = {};

import { validate as validate95 } from "././RBDPersistentVolumeSource.js";


function validate94(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate95(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate95.errors : vErrors.concat(validate95.errors);
errors = vErrors.length;
}
else {
}
}
validate94.errors = vErrors;
return errors === 0;
}

const schema49 = {"nullableRef":"io.k8s.api.core.v1.ScaleIOPersistentVolumeSource#"};
const schema50 = {};

import { validate as validate99 } from "././ScaleIOPersistentVolumeSource.js";


function validate98(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate99(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate99.errors : vErrors.concat(validate99.errors);
errors = vErrors.length;
}
else {
}
}
validate98.errors = vErrors;
return errors === 0;
}

const schema51 = {"nullableRef":"io.k8s.api.core.v1.StorageOSPersistentVolumeSource#"};
const schema52 = {};

import { validate as validate104 } from "././StorageOSPersistentVolumeSource.js";


function validate103(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate104(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate104.errors : vErrors.concat(validate104.errors);
errors = vErrors.length;
}
else {
}
}
validate103.errors = vErrors;
return errors === 0;
}

const schema53 = {"nullableRef":"io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource#"};
const schema54 = {};

import { validate as validate110 } from "././VsphereVirtualDiskVolumeSource.js";


function validate109(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate110(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate110.errors : vErrors.concat(validate110.errors);
errors = vErrors.length;
}
else {
}
}
validate109.errors = vErrors;
return errors === 0;
}


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.PersistentVolumeSpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.accessModes !== undefined){
let data0 = data.accessModes;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/accessModes",parentData:data,parentDataProperty:"accessModes",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.awsElasticBlockStore !== undefined){
let data1 = data.awsElasticBlockStore;
const _errs2 = errors;
if(!(validate6(data1, {instancePath:instancePath+"/awsElasticBlockStore",parentData:data,parentDataProperty:"awsElasticBlockStore",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.azureDisk !== undefined){
let data2 = data.azureDisk;
const _errs3 = errors;
if(!(validate10(data2, {instancePath:instancePath+"/azureDisk",parentData:data,parentDataProperty:"azureDisk",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.azureFile !== undefined){
let data3 = data.azureFile;
const _errs4 = errors;
if(!(validate14(data3, {instancePath:instancePath+"/azureFile",parentData:data,parentDataProperty:"azureFile",rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.capacity !== undefined){
let data4 = data.capacity;
const _errs5 = errors;
if(!(validate18(data4, {instancePath:instancePath+"/capacity",parentData:data,parentDataProperty:"capacity",rootData}))){
vErrors = vErrors === null ? validate18.errors : vErrors.concat(validate18.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.cephfs !== undefined){
let data5 = data.cephfs;
const _errs6 = errors;
if(!(validate24(data5, {instancePath:instancePath+"/cephfs",parentData:data,parentDataProperty:"cephfs",rootData}))){
vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.cinder !== undefined){
let data6 = data.cinder;
const _errs7 = errors;
if(!(validate28(data6, {instancePath:instancePath+"/cinder",parentData:data,parentDataProperty:"cinder",rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.claimRef !== undefined){
let data7 = data.claimRef;
const _errs8 = errors;
if(!(validate32(data7, {instancePath:instancePath+"/claimRef",parentData:data,parentDataProperty:"claimRef",rootData}))){
vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.csi !== undefined){
let data8 = data.csi;
const _errs9 = errors;
if(!(validate36(data8, {instancePath:instancePath+"/csi",parentData:data,parentDataProperty:"csi",rootData}))){
vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.fc !== undefined){
let data9 = data.fc;
const _errs10 = errors;
if(!(validate40(data9, {instancePath:instancePath+"/fc",parentData:data,parentDataProperty:"fc",rootData}))){
vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.flexVolume !== undefined){
let data10 = data.flexVolume;
const _errs11 = errors;
if(!(validate44(data10, {instancePath:instancePath+"/flexVolume",parentData:data,parentDataProperty:"flexVolume",rootData}))){
vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.flocker !== undefined){
let data11 = data.flocker;
const _errs12 = errors;
if(!(validate48(data11, {instancePath:instancePath+"/flocker",parentData:data,parentDataProperty:"flocker",rootData}))){
vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.gcePersistentDisk !== undefined){
let data12 = data.gcePersistentDisk;
const _errs13 = errors;
if(!(validate52(data12, {instancePath:instancePath+"/gcePersistentDisk",parentData:data,parentDataProperty:"gcePersistentDisk",rootData}))){
vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.glusterfs !== undefined){
let data13 = data.glusterfs;
const _errs14 = errors;
if(!(validate56(data13, {instancePath:instancePath+"/glusterfs",parentData:data,parentDataProperty:"glusterfs",rootData}))){
vErrors = vErrors === null ? validate56.errors : vErrors.concat(validate56.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.hostPath !== undefined){
let data14 = data.hostPath;
const _errs15 = errors;
if(!(validate60(data14, {instancePath:instancePath+"/hostPath",parentData:data,parentDataProperty:"hostPath",rootData}))){
vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.iscsi !== undefined){
let data15 = data.iscsi;
const _errs16 = errors;
if(!(validate64(data15, {instancePath:instancePath+"/iscsi",parentData:data,parentDataProperty:"iscsi",rootData}))){
vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs16 === errors;
}
if(data.local !== undefined){
let data16 = data.local;
const _errs17 = errors;
if(!(validate68(data16, {instancePath:instancePath+"/local",parentData:data,parentDataProperty:"local",rootData}))){
vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs17 === errors;
}
if(data.mountOptions !== undefined){
let data17 = data.mountOptions;
const _errs18 = errors;
if(!(validate0(data17, {instancePath:instancePath+"/mountOptions",parentData:data,parentDataProperty:"mountOptions",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs18 === errors;
}
if(data.nfs !== undefined){
let data18 = data.nfs;
const _errs19 = errors;
if(!(validate73(data18, {instancePath:instancePath+"/nfs",parentData:data,parentDataProperty:"nfs",rootData}))){
vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs19 === errors;
}
if(data.nodeAffinity !== undefined){
let data19 = data.nodeAffinity;
const _errs20 = errors;
if(!(validate77(data19, {instancePath:instancePath+"/nodeAffinity",parentData:data,parentDataProperty:"nodeAffinity",rootData}))){
vErrors = vErrors === null ? validate77.errors : vErrors.concat(validate77.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs20 === errors;
}
if(data.persistentVolumeReclaimPolicy !== undefined){
let data20 = data.persistentVolumeReclaimPolicy;
const _errs21 = errors;
if(!(validate3(data20, {instancePath:instancePath+"/persistentVolumeReclaimPolicy",parentData:data,parentDataProperty:"persistentVolumeReclaimPolicy",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs21 === errors;
}
if(data.photonPersistentDisk !== undefined){
let data21 = data.photonPersistentDisk;
const _errs22 = errors;
if(!(validate82(data21, {instancePath:instancePath+"/photonPersistentDisk",parentData:data,parentDataProperty:"photonPersistentDisk",rootData}))){
vErrors = vErrors === null ? validate82.errors : vErrors.concat(validate82.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs22 === errors;
}
if(data.portworxVolume !== undefined){
let data22 = data.portworxVolume;
const _errs23 = errors;
if(!(validate86(data22, {instancePath:instancePath+"/portworxVolume",parentData:data,parentDataProperty:"portworxVolume",rootData}))){
vErrors = vErrors === null ? validate86.errors : vErrors.concat(validate86.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs23 === errors;
}
if(data.quobyte !== undefined){
let data23 = data.quobyte;
const _errs24 = errors;
if(!(validate90(data23, {instancePath:instancePath+"/quobyte",parentData:data,parentDataProperty:"quobyte",rootData}))){
vErrors = vErrors === null ? validate90.errors : vErrors.concat(validate90.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs24 === errors;
}
if(data.rbd !== undefined){
let data24 = data.rbd;
const _errs25 = errors;
if(!(validate94(data24, {instancePath:instancePath+"/rbd",parentData:data,parentDataProperty:"rbd",rootData}))){
vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs25 === errors;
}
if(data.scaleIO !== undefined){
let data25 = data.scaleIO;
const _errs26 = errors;
if(!(validate98(data25, {instancePath:instancePath+"/scaleIO",parentData:data,parentDataProperty:"scaleIO",rootData}))){
vErrors = vErrors === null ? validate98.errors : vErrors.concat(validate98.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs26 === errors;
}
if(data.storageClassName !== undefined){
let data26 = data.storageClassName;
const _errs27 = errors;
if(!(validate3(data26, {instancePath:instancePath+"/storageClassName",parentData:data,parentDataProperty:"storageClassName",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs27 === errors;
}
if(data.storageos !== undefined){
let data27 = data.storageos;
const _errs28 = errors;
if(!(validate103(data27, {instancePath:instancePath+"/storageos",parentData:data,parentDataProperty:"storageos",rootData}))){
vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs28 === errors;
}
if(data.volumeAttributesClassName !== undefined){
let data28 = data.volumeAttributesClassName;
const _errs29 = errors;
if(!(validate3(data28, {instancePath:instancePath+"/volumeAttributesClassName",parentData:data,parentDataProperty:"volumeAttributesClassName",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs29 === errors;
}
if(data.volumeMode !== undefined){
let data29 = data.volumeMode;
const _errs30 = errors;
if(!(validate3(data29, {instancePath:instancePath+"/volumeMode",parentData:data,parentDataProperty:"volumeMode",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs30 === errors;
}
if(data.vsphereVolume !== undefined){
let data30 = data.vsphereVolume;
const _errs31 = errors;
if(!(validate109(data30, {instancePath:instancePath+"/vsphereVolume",parentData:data,parentDataProperty:"vsphereVolume",rootData}))){
vErrors = vErrors === null ? validate109.errors : vErrors.concat(validate109.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs31 === errors;
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
validate4.errors = vErrors;
return errors === 0;
}
