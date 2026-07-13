/* @ts-self-types="./PodSecurityPolicySpec.d.ts" */
export const validate = validate4;
const schema3 = {"properties":{"allowPrivilegeEscalation":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"allowedCSIDrivers":{"$ref":"o8dYB4qqQGLRRI0KdVxxdVf95Jy0_kH9XkzCVnCKEWo"},"allowedCapabilities":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"allowedFlexVolumes":{"$ref":"REiMvMgCr7FIvv9BLkl6CRzBS6cqzClcFhgwBNLMaGs"},"allowedHostPaths":{"$ref":"gOwruGRGyrbVZ13v6KWDLIcMuNVcOOPycWzMMprH-Qo"},"allowedProcMountTypes":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"allowedUnsafeSysctls":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"defaultAddCapabilities":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"defaultAllowPrivilegeEscalation":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"forbiddenSysctls":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"fsGroup":{"$ref":"hiSdJ2zHOb_rysYX2R4QY4WNwOsCujkYBKfXWG0Me94"},"hostIPC":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"hostNetwork":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"hostPID":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"hostPorts":{"$ref":"9HFHjUP-ybLXmqK3zW78RgjhncSUBTCNw0SfnCfeTtw"},"privileged":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"readOnlyRootFilesystem":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"requiredDropCapabilities":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"},"runAsGroup":{"$ref":"1OTO96jlza3AqhgA6tFKf7Dose5iW7-tNLez8wSoGRM"},"runAsUser":{"$ref":"pnUbAvCVnOzkwNMycd4wyuJksUSiX4fZpGoyerdEZzk"},"runtimeClass":{"$ref":"8B3IJK-imTEjUMcb6wCO5oc1TAs4jN8yUuslHE4oHfQ"},"seLinux":{"$ref":"IZ72IlfRtTL4rnHmbnMhscppcfF9jAOWxXXvcqiZe7s"},"supplementalGroups":{"$ref":"55cYAlkBcJLQ3a1WC3e0DoXXdI9iBDFFIy28bUWcZLY"},"volumes":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"}},"required":["seLinux","runAsUser","supplementalGroups","fsGroup"],"type":"object","$id":"io.k8s.api.extensions.v1beta1.PodSecurityPolicySpec"};
const schema2 = {"type":"boolean","nullable":true};

function validate3(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate3.errors = vErrors;
return errors === 0;
}

const schema4 = {"items":{"$ref":"EEt179zjNpKEqr6xFUZQAnHJvNZqT6hO1-BvScHMWEc"},"type":"array","nullable":true};
const schema5 = {"$ref":"io.k8s.api.extensions.v1beta1.AllowedCSIDriver#"};
const schema6 = {};

import { validate as validate8 } from "././AllowedCSIDriver.js";


function validate7(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate8(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
validate7.errors = vErrors;
return errors === 0;
}


function validate6(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate7(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
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
validate6.errors = vErrors;
return errors === 0;
}

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

const schema7 = {"items":{"$ref":"f1zDNTtLRk-LhCP4Mt_p57gz2qPmWer7zGnyGd3o9xI"},"type":"array","nullable":true};
const schema8 = {"$ref":"io.k8s.api.extensions.v1beta1.AllowedFlexVolume#"};
const schema9 = {};

import { validate as validate15 } from "././AllowedFlexVolume.js";


function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate15(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
validate14.errors = vErrors;
return errors === 0;
}


function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate14(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
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
validate13.errors = vErrors;
return errors === 0;
}

const schema10 = {"items":{"$ref":"VEtnNGTUc1FyPwBlg67TH-UenFZDNYWF9Va7-XShzVY"},"type":"array","nullable":true};
const schema11 = {"$ref":"io.k8s.api.extensions.v1beta1.AllowedHostPath#"};
const schema12 = {};

import { validate as validate21 } from "././AllowedHostPath.js";


function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate21(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
errors = vErrors.length;
}
else {
}
validate20.errors = vErrors;
return errors === 0;
}


function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate20(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
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
validate19.errors = vErrors;
return errors === 0;
}

const schema13 = {"$ref":"io.k8s.api.extensions.v1beta1.FSGroupStrategyOptions#"};
const schema14 = {};

import { validate as validate31 } from "././FSGroupStrategyOptions.js";


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

const schema15 = {"items":{"$ref":"8qEMbAoZeKTl9NDF9jG6Nhx9lggXzVSD42kMfk642e0"},"type":"array","nullable":true};
const schema16 = {"$ref":"io.k8s.api.extensions.v1beta1.HostPortRange#"};
const schema17 = {};

import { validate as validate39 } from "././HostPortRange.js";


function validate38(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate39(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
errors = vErrors.length;
}
else {
}
validate38.errors = vErrors;
return errors === 0;
}


function validate37(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate38(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
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
validate37.errors = vErrors;
return errors === 0;
}

const schema18 = {"nullableRef":"io.k8s.api.extensions.v1beta1.RunAsGroupStrategyOptions#"};
const schema19 = {};

import { validate as validate47 } from "././RunAsGroupStrategyOptions.js";


function validate46(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate47(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
errors = vErrors.length;
}
else {
}
}
validate46.errors = vErrors;
return errors === 0;
}

const schema20 = {"$ref":"io.k8s.api.extensions.v1beta1.RunAsUserStrategyOptions#"};
const schema21 = {};

import { validate as validate51 } from "././RunAsUserStrategyOptions.js";


function validate50(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate51(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
errors = vErrors.length;
}
else {
}
validate50.errors = vErrors;
return errors === 0;
}

const schema22 = {"nullableRef":"io.k8s.api.extensions.v1beta1.RuntimeClassStrategyOptions#"};
const schema23 = {};

import { validate as validate55 } from "././RuntimeClassStrategyOptions.js";


function validate54(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data !== null){
if(!(validate55(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
errors = vErrors.length;
}
else {
}
}
validate54.errors = vErrors;
return errors === 0;
}

const schema24 = {"$ref":"io.k8s.api.extensions.v1beta1.SELinuxStrategyOptions#"};
const schema25 = {};

import { validate as validate59 } from "././SELinuxStrategyOptions.js";


function validate58(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate59(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate59.errors : vErrors.concat(validate59.errors);
errors = vErrors.length;
}
else {
}
validate58.errors = vErrors;
return errors === 0;
}

const schema26 = {"$ref":"io.k8s.api.extensions.v1beta1.SupplementalGroupsStrategyOptions#"};
const schema27 = {};

import { validate as validate63 } from "././SupplementalGroupsStrategyOptions.js";


function validate62(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate63(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
errors = vErrors.length;
}
else {
}
validate62.errors = vErrors;
return errors === 0;
}


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="io.k8s.api.extensions.v1beta1.PodSecurityPolicySpec" */;
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.seLinux === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "seLinux"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.runAsUser === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "runAsUser"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.supplementalGroups === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "supplementalGroups"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.fsGroup === undefined){
const err3 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "fsGroup"}};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
if(data.allowPrivilegeEscalation !== undefined){
let data0 = data.allowPrivilegeEscalation;
const _errs1 = errors;
if(!(validate3(data0, {instancePath:instancePath+"/allowPrivilegeEscalation",parentData:data,parentDataProperty:"allowPrivilegeEscalation",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.allowedCSIDrivers !== undefined){
let data1 = data.allowedCSIDrivers;
const _errs2 = errors;
if(!(validate6(data1, {instancePath:instancePath+"/allowedCSIDrivers",parentData:data,parentDataProperty:"allowedCSIDrivers",rootData}))){
vErrors = vErrors === null ? validate6.errors : vErrors.concat(validate6.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.allowedCapabilities !== undefined){
let data2 = data.allowedCapabilities;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/allowedCapabilities",parentData:data,parentDataProperty:"allowedCapabilities",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.allowedFlexVolumes !== undefined){
let data3 = data.allowedFlexVolumes;
const _errs4 = errors;
if(!(validate13(data3, {instancePath:instancePath+"/allowedFlexVolumes",parentData:data,parentDataProperty:"allowedFlexVolumes",rootData}))){
vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.allowedHostPaths !== undefined){
let data4 = data.allowedHostPaths;
const _errs5 = errors;
if(!(validate19(data4, {instancePath:instancePath+"/allowedHostPaths",parentData:data,parentDataProperty:"allowedHostPaths",rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.allowedProcMountTypes !== undefined){
let data5 = data.allowedProcMountTypes;
const _errs6 = errors;
if(!(validate0(data5, {instancePath:instancePath+"/allowedProcMountTypes",parentData:data,parentDataProperty:"allowedProcMountTypes",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.allowedUnsafeSysctls !== undefined){
let data6 = data.allowedUnsafeSysctls;
const _errs7 = errors;
if(!(validate0(data6, {instancePath:instancePath+"/allowedUnsafeSysctls",parentData:data,parentDataProperty:"allowedUnsafeSysctls",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.defaultAddCapabilities !== undefined){
let data7 = data.defaultAddCapabilities;
const _errs8 = errors;
if(!(validate0(data7, {instancePath:instancePath+"/defaultAddCapabilities",parentData:data,parentDataProperty:"defaultAddCapabilities",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.defaultAllowPrivilegeEscalation !== undefined){
let data8 = data.defaultAllowPrivilegeEscalation;
const _errs9 = errors;
if(!(validate3(data8, {instancePath:instancePath+"/defaultAllowPrivilegeEscalation",parentData:data,parentDataProperty:"defaultAllowPrivilegeEscalation",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
if(data.forbiddenSysctls !== undefined){
let data9 = data.forbiddenSysctls;
const _errs10 = errors;
if(!(validate0(data9, {instancePath:instancePath+"/forbiddenSysctls",parentData:data,parentDataProperty:"forbiddenSysctls",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs10 === errors;
}
if(data.fsGroup !== undefined){
let data10 = data.fsGroup;
const _errs11 = errors;
if(!(validate30(data10, {instancePath:instancePath+"/fsGroup",parentData:data,parentDataProperty:"fsGroup",rootData}))){
vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs11 === errors;
}
if(data.hostIPC !== undefined){
let data11 = data.hostIPC;
const _errs12 = errors;
if(!(validate3(data11, {instancePath:instancePath+"/hostIPC",parentData:data,parentDataProperty:"hostIPC",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs12 === errors;
}
if(data.hostNetwork !== undefined){
let data12 = data.hostNetwork;
const _errs13 = errors;
if(!(validate3(data12, {instancePath:instancePath+"/hostNetwork",parentData:data,parentDataProperty:"hostNetwork",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs13 === errors;
}
if(data.hostPID !== undefined){
let data13 = data.hostPID;
const _errs14 = errors;
if(!(validate3(data13, {instancePath:instancePath+"/hostPID",parentData:data,parentDataProperty:"hostPID",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs14 === errors;
}
if(data.hostPorts !== undefined){
let data14 = data.hostPorts;
const _errs15 = errors;
if(!(validate37(data14, {instancePath:instancePath+"/hostPorts",parentData:data,parentDataProperty:"hostPorts",rootData}))){
vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs15 === errors;
}
if(data.privileged !== undefined){
let data15 = data.privileged;
const _errs16 = errors;
if(!(validate3(data15, {instancePath:instancePath+"/privileged",parentData:data,parentDataProperty:"privileged",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs16 === errors;
}
if(data.readOnlyRootFilesystem !== undefined){
let data16 = data.readOnlyRootFilesystem;
const _errs17 = errors;
if(!(validate3(data16, {instancePath:instancePath+"/readOnlyRootFilesystem",parentData:data,parentDataProperty:"readOnlyRootFilesystem",rootData}))){
vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs17 === errors;
}
if(data.requiredDropCapabilities !== undefined){
let data17 = data.requiredDropCapabilities;
const _errs18 = errors;
if(!(validate0(data17, {instancePath:instancePath+"/requiredDropCapabilities",parentData:data,parentDataProperty:"requiredDropCapabilities",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs18 === errors;
}
if(data.runAsGroup !== undefined){
let data18 = data.runAsGroup;
const _errs19 = errors;
if(!(validate46(data18, {instancePath:instancePath+"/runAsGroup",parentData:data,parentDataProperty:"runAsGroup",rootData}))){
vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs19 === errors;
}
if(data.runAsUser !== undefined){
let data19 = data.runAsUser;
const _errs20 = errors;
if(!(validate50(data19, {instancePath:instancePath+"/runAsUser",parentData:data,parentDataProperty:"runAsUser",rootData}))){
vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs20 === errors;
}
if(data.runtimeClass !== undefined){
let data20 = data.runtimeClass;
const _errs21 = errors;
if(!(validate54(data20, {instancePath:instancePath+"/runtimeClass",parentData:data,parentDataProperty:"runtimeClass",rootData}))){
vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs21 === errors;
}
if(data.seLinux !== undefined){
let data21 = data.seLinux;
const _errs22 = errors;
if(!(validate58(data21, {instancePath:instancePath+"/seLinux",parentData:data,parentDataProperty:"seLinux",rootData}))){
vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs22 === errors;
}
if(data.supplementalGroups !== undefined){
let data22 = data.supplementalGroups;
const _errs23 = errors;
if(!(validate62(data22, {instancePath:instancePath+"/supplementalGroups",parentData:data,parentDataProperty:"supplementalGroups",rootData}))){
vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs23 === errors;
}
if(data.volumes !== undefined){
let data23 = data.volumes;
const _errs24 = errors;
if(!(validate0(data23, {instancePath:instancePath+"/volumes",parentData:data,parentDataProperty:"volumes",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs24 === errors;
}
}
else {
const err4 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"}};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
validate4.errors = vErrors;
return errors === 0;
}
