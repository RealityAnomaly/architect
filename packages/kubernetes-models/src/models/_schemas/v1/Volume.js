/* @ts-self-types="./Volume.d.ts" */
export const validate = validate0;
const schema0 = {"properties":{"awsElasticBlockStore":{"$ref":"_BFKe6QcHeYE8JRGs-6ftSUiF2a2yk63PraGAKsUvxE"},"azureDisk":{"$ref":"noOs4tTdVVKkQEU6dpiJtdRTLWoI0_LQ9iGnHpaTweo"},"azureFile":{"$ref":"HWdKc5RtoaQ-qUy9Z5rj7DPyY1wmAj-Bd4A-1XfyKqc"},"cephfs":{"$ref":"uXSNzK89-ugd-2QHiebIyF0GghRQpPiLgQEr619IvOE"},"cinder":{"$ref":"nmAtpWq8lgklkPk1N42qqoq3d8Jq93KfJEenMbqt0HI"},"configMap":{"$ref":"bC8Oakzqp0hjOuKZFri-JiiZb4HlNVRlqND56ulgbAI"},"csi":{"$ref":"Ab-Rmd7D6Zxq6h3iRj83lyg9Urdy9QBsloiWdn6MX24"},"downwardAPI":{"$ref":"rkIFOtyyM9tssndrzq3rdxXJtOfoJNR7k0K9zQObyNI"},"emptyDir":{"$ref":"OOzFtuSh_NRnSQaHjFrPdSPfeRXCP1iGuVnQOSrGe1o"},"ephemeral":{"$ref":"wrehbvKYi2P1W-G586CVg35muLcH0JnKHc9to4c1pow"},"fc":{"$ref":"7Q1duLQaypPhezZG2c6UBiz14QrBwpoRNpduoWtBPwE"},"flexVolume":{"$ref":"YZKJ9L3PUEhMGLGuAxnU8KsqfQbfwf-rXS4k_bDuyPk"},"flocker":{"$ref":"Nrh1PtQ5LusKJwsgaXkcAkWfeJydXATBPRVBfcDJ8iQ"},"gcePersistentDisk":{"$ref":"QJ723QjP8tP43YrI1HuDaLeiTYiuG2h4xfLEZ9LhPDQ"},"gitRepo":{"$ref":"9ptcBPBdDPKKspGD6eOzaMCQo_RYhkE6jaukZbnICyk"},"glusterfs":{"$ref":"xkT-fqcrup4qSXRYzZpBl_S-jPvb7vBiQIAguYQz9wg"},"hostPath":{"$ref":"TcU3Fb_mab1UV-JyeBM59UWItNo5pCd7WYLyGjMKUwY"},"image":{"$ref":"keyZ_6J97JEMy2cK6-mDoPIl-hoQm6hhTlmwyDicak4"},"iscsi":{"$ref":"TNoEvbF1G33yhEaCmGcYxnLZwAFOEgpJDav1E4oa1r4"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"nfs":{"$ref":"HupE9XV7-I_QPnbx4R8MKPfH5-bi1yKPxgWyojMXxnY"},"persistentVolumeClaim":{"$ref":"kb_gwNAtADoGuVT2oiZ0DDTLStVPSll-eaALCJALYCE"},"photonPersistentDisk":{"$ref":"uARkLiDy4jhnSlW_Pc-QCRiNHAf55TbBpxbWqw7D_LE"},"portworxVolume":{"$ref":"D0o80tQwPFbtjO2AUD-U0nfeAbU_Q3-pp0Y4mgDQ_Cg"},"projected":{"$ref":"tNYS8AzYckO5bX4dM_9KYe5PauGkq702tVK6e1dHEpg"},"quobyte":{"$ref":"T7sgqRjsOf0NqFjskAV5R6cairBXxatSSRYfvTNy4yw"},"rbd":{"$ref":"958ItP76C9Igy8X0jsxPHMbe5XcrZcDad5CPwc7Ol7g"},"scaleIO":{"$ref":"wPvO2G2B6_jAKPnxksh8kuH4HE5xzJG5yykjocoa0Po"},"secret":{"$ref":"KZLsxazze3WQzDg0ZpjUXc-dq9fFyjWqBRDzjD04fbE"},"storageos":{"$ref":"baejq0rdHLn8TkA3peao5Mu7_4xVtB5JvPBIgFpQHPU"},"vsphereVolume":{"$ref":"WicD7kHdOQE0a5CNSIGRB13evQgNPXnGLyoAXWxJuew"}},"required":["name"],"type":"object","$id":"io.k8s.api.core.v1.Volume"};
const schema1 = {"nullableRef":"io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource#"};
const schema2 = {};

import { validate as validate2 } from "././AWSElasticBlockStoreVolumeSource.js";


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

const schema3 = {"nullableRef":"io.k8s.api.core.v1.AzureDiskVolumeSource#"};
const schema4 = {};

import { validate as validate6 } from "././AzureDiskVolumeSource.js";


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

const schema5 = {"nullableRef":"io.k8s.api.core.v1.AzureFileVolumeSource#"};
const schema6 = {};

import { validate as validate10 } from "././AzureFileVolumeSource.js";


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

const schema7 = {"nullableRef":"io.k8s.api.core.v1.CephFSVolumeSource#"};
const schema8 = {};

import { validate as validate14 } from "././CephFSVolumeSource.js";


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

const schema9 = {"nullableRef":"io.k8s.api.core.v1.CinderVolumeSource#"};
const schema10 = {};

import { validate as validate18 } from "././CinderVolumeSource.js";


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

const schema11 = {"nullableRef":"io.k8s.api.core.v1.ConfigMapVolumeSource#"};
const schema12 = {};

import { validate as validate22 } from "././ConfigMapVolumeSource.js";


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

const schema13 = {"nullableRef":"io.k8s.api.core.v1.CSIVolumeSource#"};
const schema14 = {};

import { validate as validate26 } from "././CSIVolumeSource.js";


function validate25(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate26(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
errors = vErrors.length;
}
else {
}
}
validate25.errors = vErrors;
return errors === 0;
}

const schema15 = {"nullableRef":"io.k8s.api.core.v1.DownwardAPIVolumeSource#"};
const schema16 = {};

import { validate as validate30 } from "././DownwardAPIVolumeSource.js";


function validate29(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate30(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
errors = vErrors.length;
}
else {
}
}
validate29.errors = vErrors;
return errors === 0;
}

const schema17 = {"nullableRef":"io.k8s.api.core.v1.EmptyDirVolumeSource#"};
const schema18 = {};

import { validate as validate34 } from "././EmptyDirVolumeSource.js";


function validate33(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate34(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
errors = vErrors.length;
}
else {
}
}
validate33.errors = vErrors;
return errors === 0;
}

const schema19 = {"nullableRef":"io.k8s.api.core.v1.EphemeralVolumeSource#"};
const schema20 = {};

import { validate as validate38 } from "././EphemeralVolumeSource.js";


function validate37(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate38(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
errors = vErrors.length;
}
else {
}
}
validate37.errors = vErrors;
return errors === 0;
}

const schema21 = {"nullableRef":"io.k8s.api.core.v1.FCVolumeSource#"};
const schema22 = {};

import { validate as validate42 } from "././FCVolumeSource.js";


function validate41(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate42(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
errors = vErrors.length;
}
else {
}
}
validate41.errors = vErrors;
return errors === 0;
}

const schema23 = {"nullableRef":"io.k8s.api.core.v1.FlexVolumeSource#"};
const schema24 = {};

import { validate as validate46 } from "././FlexVolumeSource.js";


function validate45(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate46(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
errors = vErrors.length;
}
else {
}
}
validate45.errors = vErrors;
return errors === 0;
}

const schema25 = {"nullableRef":"io.k8s.api.core.v1.FlockerVolumeSource#"};
const schema26 = {};

import { validate as validate50 } from "././FlockerVolumeSource.js";


function validate49(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate50(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
errors = vErrors.length;
}
else {
}
}
validate49.errors = vErrors;
return errors === 0;
}

const schema27 = {"nullableRef":"io.k8s.api.core.v1.GCEPersistentDiskVolumeSource#"};
const schema28 = {};

import { validate as validate54 } from "././GCEPersistentDiskVolumeSource.js";


function validate53(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate54(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
errors = vErrors.length;
}
else {
}
}
validate53.errors = vErrors;
return errors === 0;
}

const schema29 = {"nullableRef":"io.k8s.api.core.v1.GitRepoVolumeSource#"};
const schema30 = {};

import { validate as validate58 } from "././GitRepoVolumeSource.js";


function validate57(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate58(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
errors = vErrors.length;
}
else {
}
}
validate57.errors = vErrors;
return errors === 0;
}

const schema31 = {"nullableRef":"io.k8s.api.core.v1.GlusterfsVolumeSource#"};
const schema32 = {};

import { validate as validate62 } from "././GlusterfsVolumeSource.js";


function validate61(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate62(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
errors = vErrors.length;
}
else {
}
}
validate61.errors = vErrors;
return errors === 0;
}

const schema33 = {"nullableRef":"io.k8s.api.core.v1.HostPathVolumeSource#"};
const schema34 = {};

import { validate as validate66 } from "././HostPathVolumeSource.js";


function validate65(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate66(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
errors = vErrors.length;
}
else {
}
}
validate65.errors = vErrors;
return errors === 0;
}

const schema35 = {"nullableRef":"io.k8s.api.core.v1.ImageVolumeSource#"};
const schema36 = {};

import { validate as validate70 } from "././ImageVolumeSource.js";


function validate69(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate70(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
errors = vErrors.length;
}
else {
}
}
validate69.errors = vErrors;
return errors === 0;
}

const schema37 = {"nullableRef":"io.k8s.api.core.v1.ISCSIVolumeSource#"};
const schema38 = {};

import { validate as validate74 } from "././ISCSIVolumeSource.js";


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

const schema39 = {"type":"string"};

function validate77(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate77.errors = vErrors;
return errors === 0;
}

const schema40 = {"nullableRef":"io.k8s.api.core.v1.NFSVolumeSource#"};
const schema41 = {};

import { validate as validate80 } from "././NFSVolumeSource.js";


function validate79(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate80(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
errors = vErrors.length;
}
else {
}
}
validate79.errors = vErrors;
return errors === 0;
}

const schema42 = {"nullableRef":"io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource#"};
const schema43 = {};

import { validate as validate84 } from "././PersistentVolumeClaimVolumeSource.js";


function validate83(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate84(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
errors = vErrors.length;
}
else {
}
}
validate83.errors = vErrors;
return errors === 0;
}

const schema44 = {"nullableRef":"io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource#"};
const schema45 = {};

import { validate as validate88 } from "././PhotonPersistentDiskVolumeSource.js";


function validate87(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate88(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
errors = vErrors.length;
}
else {
}
}
validate87.errors = vErrors;
return errors === 0;
}

const schema46 = {"nullableRef":"io.k8s.api.core.v1.PortworxVolumeSource#"};
const schema47 = {};

import { validate as validate92 } from "././PortworxVolumeSource.js";


function validate91(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate92(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
errors = vErrors.length;
}
else {
}
}
validate91.errors = vErrors;
return errors === 0;
}

const schema48 = {"nullableRef":"io.k8s.api.core.v1.ProjectedVolumeSource#"};
const schema49 = {};

import { validate as validate96 } from "././ProjectedVolumeSource.js";


function validate95(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate96(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate96.errors : vErrors.concat(validate96.errors);
errors = vErrors.length;
}
else {
}
}
validate95.errors = vErrors;
return errors === 0;
}

const schema50 = {"nullableRef":"io.k8s.api.core.v1.QuobyteVolumeSource#"};
const schema51 = {};

import { validate as validate100 } from "././QuobyteVolumeSource.js";


function validate99(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate100(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
errors = vErrors.length;
}
else {
}
}
validate99.errors = vErrors;
return errors === 0;
}

const schema52 = {"nullableRef":"io.k8s.api.core.v1.RBDVolumeSource#"};
const schema53 = {};

import { validate as validate104 } from "././RBDVolumeSource.js";


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

const schema54 = {"nullableRef":"io.k8s.api.core.v1.ScaleIOVolumeSource#"};
const schema55 = {};

import { validate as validate108 } from "././ScaleIOVolumeSource.js";


function validate107(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate108(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate108.errors : vErrors.concat(validate108.errors);
errors = vErrors.length;
}
else {
}
}
validate107.errors = vErrors;
return errors === 0;
}

const schema56 = {"nullableRef":"io.k8s.api.core.v1.SecretVolumeSource#"};
const schema57 = {};

import { validate as validate112 } from "././SecretVolumeSource.js";


function validate111(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate112(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
errors = vErrors.length;
}
else {
}
}
validate111.errors = vErrors;
return errors === 0;
}

const schema58 = {"nullableRef":"io.k8s.api.core.v1.StorageOSVolumeSource#"};
const schema59 = {};

import { validate as validate116 } from "././StorageOSVolumeSource.js";


function validate115(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate116(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate116.errors : vErrors.concat(validate116.errors);
errors = vErrors.length;
}
else {
}
}
validate115.errors = vErrors;
return errors === 0;
}

const schema60 = {"nullableRef":"io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource#"};
const schema61 = {};

import { validate as validate120 } from "././VsphereVirtualDiskVolumeSource.js";


function validate119(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate120(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate120.errors : vErrors.concat(validate120.errors);
errors = vErrors.length;
}
else {
}
}
validate119.errors = vErrors;
return errors === 0;
}


function validate0(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.core.v1.Volume" */;
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
if(data.awsElasticBlockStore !== undefined){
let data0 = data.awsElasticBlockStore;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/awsElasticBlockStore",parentData:data,parentDataProperty:"awsElasticBlockStore",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.azureDisk !== undefined){
let data1 = data.azureDisk;
const _errs2 = errors;
if(!(validate5(data1, {instancePath:instancePath+"/azureDisk",parentData:data,parentDataProperty:"azureDisk",rootData}))){
vErrors = vErrors === null ? validate5.errors : vErrors.concat(validate5.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.azureFile !== undefined){
let data2 = data.azureFile;
const _errs3 = errors;
if(!(validate9(data2, {instancePath:instancePath+"/azureFile",parentData:data,parentDataProperty:"azureFile",rootData}))){
vErrors = vErrors === null ? validate9.errors : vErrors.concat(validate9.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.cephfs !== undefined){
let data3 = data.cephfs;
const _errs4 = errors;
if(!(validate13(data3, {instancePath:instancePath+"/cephfs",parentData:data,parentDataProperty:"cephfs",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.cinder !== undefined){
let data4 = data.cinder;
const _errs5 = errors;
if(!(validate17(data4, {instancePath:instancePath+"/cinder",parentData:data,parentDataProperty:"cinder",rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.configMap !== undefined){
let data5 = data.configMap;
const _errs6 = errors;
if(!(validate21(data5, {instancePath:instancePath+"/configMap",parentData:data,parentDataProperty:"configMap",rootData}))){
vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.csi !== undefined){
let data6 = data.csi;
const _errs7 = errors;
if(!(validate25(data6, {instancePath:instancePath+"/csi",parentData:data,parentDataProperty:"csi",rootData}))){
vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.downwardAPI !== undefined){
let data7 = data.downwardAPI;
const _errs8 = errors;
if(!(validate29(data7, {instancePath:instancePath+"/downwardAPI",parentData:data,parentDataProperty:"downwardAPI",rootData}))){
vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.emptyDir !== undefined){
let data8 = data.emptyDir;
const _errs9 = errors;
if(!(validate33(data8, {instancePath:instancePath+"/emptyDir",parentData:data,parentDataProperty:"emptyDir",rootData}))){
vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.ephemeral !== undefined){
let data9 = data.ephemeral;
const _errs10 = errors;
if(!(validate37(data9, {instancePath:instancePath+"/ephemeral",parentData:data,parentDataProperty:"ephemeral",rootData}))){
vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.fc !== undefined){
let data10 = data.fc;
const _errs11 = errors;
if(!(validate41(data10, {instancePath:instancePath+"/fc",parentData:data,parentDataProperty:"fc",rootData}))){
vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.flexVolume !== undefined){
let data11 = data.flexVolume;
const _errs12 = errors;
if(!(validate45(data11, {instancePath:instancePath+"/flexVolume",parentData:data,parentDataProperty:"flexVolume",rootData}))){
vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.flocker !== undefined){
let data12 = data.flocker;
const _errs13 = errors;
if(!(validate49(data12, {instancePath:instancePath+"/flocker",parentData:data,parentDataProperty:"flocker",rootData}))){
vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.gcePersistentDisk !== undefined){
let data13 = data.gcePersistentDisk;
const _errs14 = errors;
if(!(validate53(data13, {instancePath:instancePath+"/gcePersistentDisk",parentData:data,parentDataProperty:"gcePersistentDisk",rootData}))){
vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.gitRepo !== undefined){
let data14 = data.gitRepo;
const _errs15 = errors;
if(!(validate57(data14, {instancePath:instancePath+"/gitRepo",parentData:data,parentDataProperty:"gitRepo",rootData}))){
vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.glusterfs !== undefined){
let data15 = data.glusterfs;
const _errs16 = errors;
if(!(validate61(data15, {instancePath:instancePath+"/glusterfs",parentData:data,parentDataProperty:"glusterfs",rootData}))){
vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs16 === errors;
}
if(data.hostPath !== undefined){
let data16 = data.hostPath;
const _errs17 = errors;
if(!(validate65(data16, {instancePath:instancePath+"/hostPath",parentData:data,parentDataProperty:"hostPath",rootData}))){
vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs17 === errors;
}
if(data.image !== undefined){
let data17 = data.image;
const _errs18 = errors;
if(!(validate69(data17, {instancePath:instancePath+"/image",parentData:data,parentDataProperty:"image",rootData}))){
vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs18 === errors;
}
if(data.iscsi !== undefined){
let data18 = data.iscsi;
const _errs19 = errors;
if(!(validate73(data18, {instancePath:instancePath+"/iscsi",parentData:data,parentDataProperty:"iscsi",rootData}))){
vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs19 === errors;
}
if(data.name !== undefined){
let data19 = data.name;
const _errs20 = errors;
if(!(validate77(data19, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate77.errors : vErrors.concat(validate77.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs20 === errors;
}
if(data.nfs !== undefined){
let data20 = data.nfs;
const _errs21 = errors;
if(!(validate79(data20, {instancePath:instancePath+"/nfs",parentData:data,parentDataProperty:"nfs",rootData}))){
vErrors = vErrors === null ? validate79.errors : vErrors.concat(validate79.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs21 === errors;
}
if(data.persistentVolumeClaim !== undefined){
let data21 = data.persistentVolumeClaim;
const _errs22 = errors;
if(!(validate83(data21, {instancePath:instancePath+"/persistentVolumeClaim",parentData:data,parentDataProperty:"persistentVolumeClaim",rootData}))){
vErrors = vErrors === null ? validate83.errors : vErrors.concat(validate83.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs22 === errors;
}
if(data.photonPersistentDisk !== undefined){
let data22 = data.photonPersistentDisk;
const _errs23 = errors;
if(!(validate87(data22, {instancePath:instancePath+"/photonPersistentDisk",parentData:data,parentDataProperty:"photonPersistentDisk",rootData}))){
vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs23 === errors;
}
if(data.portworxVolume !== undefined){
let data23 = data.portworxVolume;
const _errs24 = errors;
if(!(validate91(data23, {instancePath:instancePath+"/portworxVolume",parentData:data,parentDataProperty:"portworxVolume",rootData}))){
vErrors = vErrors === null ? validate91.errors : vErrors.concat(validate91.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs24 === errors;
}
if(data.projected !== undefined){
let data24 = data.projected;
const _errs25 = errors;
if(!(validate95(data24, {instancePath:instancePath+"/projected",parentData:data,parentDataProperty:"projected",rootData}))){
vErrors = vErrors === null ? validate95.errors : vErrors.concat(validate95.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs25 === errors;
}
if(data.quobyte !== undefined){
let data25 = data.quobyte;
const _errs26 = errors;
if(!(validate99(data25, {instancePath:instancePath+"/quobyte",parentData:data,parentDataProperty:"quobyte",rootData}))){
vErrors = vErrors === null ? validate99.errors : vErrors.concat(validate99.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs26 === errors;
}
if(data.rbd !== undefined){
let data26 = data.rbd;
const _errs27 = errors;
if(!(validate103(data26, {instancePath:instancePath+"/rbd",parentData:data,parentDataProperty:"rbd",rootData}))){
vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs27 === errors;
}
if(data.scaleIO !== undefined){
let data27 = data.scaleIO;
const _errs28 = errors;
if(!(validate107(data27, {instancePath:instancePath+"/scaleIO",parentData:data,parentDataProperty:"scaleIO",rootData}))){
vErrors = vErrors === null ? validate107.errors : vErrors.concat(validate107.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs28 === errors;
}
if(data.secret !== undefined){
let data28 = data.secret;
const _errs29 = errors;
if(!(validate111(data28, {instancePath:instancePath+"/secret",parentData:data,parentDataProperty:"secret",rootData}))){
vErrors = vErrors === null ? validate111.errors : vErrors.concat(validate111.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs29 === errors;
}
if(data.storageos !== undefined){
let data29 = data.storageos;
const _errs30 = errors;
if(!(validate115(data29, {instancePath:instancePath+"/storageos",parentData:data,parentDataProperty:"storageos",rootData}))){
vErrors = vErrors === null ? validate115.errors : vErrors.concat(validate115.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs30 === errors;
}
if(data.vsphereVolume !== undefined){
let data30 = data.vsphereVolume;
const _errs31 = errors;
if(!(validate119(data30, {instancePath:instancePath+"/vsphereVolume",parentData:data,parentDataProperty:"vsphereVolume",rootData}))){
vErrors = vErrors === null ? validate119.errors : vErrors.concat(validate119.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs31 === errors;
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
validate0.errors = vErrors;
return errors === 0;
}
