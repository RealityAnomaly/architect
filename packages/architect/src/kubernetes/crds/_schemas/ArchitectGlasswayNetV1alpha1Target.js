// deno-coverage-ignore-file
/* @ts-self-types="./ArchitectGlasswayNetV1alpha1Target.d.ts" */
export const validate = validate16;
const schema8 = {"type":"object","properties":{"apiVersion":{"$ref":"HcvyTMgw51vgbZ9ry16Kf5jnbh0yNPNerD08c-MShBE"},"kind":{"$ref":"OvKWXaCYvqr2yWY12Y8T1dEHpq_EwFKzHwuOvEcsziw"},"metadata":{"$ref":"yYmnefnmsYn5-MOwxbbM2mBS0bwKIjMQRJHxUmcKHgU"},"spec":{"$ref":"StKh2B2T48fE62XdKNezmlInbYwBdfgz7mt7DG_eHvI"}},"required":["apiVersion","kind","metadata","spec"],"$id":"architect.glassway.net.v1alpha1.Target"};
const schema9 = {"type":"string","enum":["architect.glassway.net/v1alpha1"]};

function validate17(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema9.enum;
if(!(data === "architect.glassway.net/v1alpha1")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema9.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate17.errors = vErrors;
return errors === 0;
}

const schema10 = {"type":"string","enum":["Target"]};

function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema10.enum;
if(!(data === "Target")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema10.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate19.errors = vErrors;
return errors === 0;
}

const schema11 = {"$ref":"io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"};
const schema12 = {};

import { validate as validate22 } from "@glassway/kubernetes-models/apimachinery/_schemas/ObjectMeta";


function validate21(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(validate22(data, {instancePath,parentData,parentDataProperty,rootData}))){
vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
errors = vErrors.length;
}
else {
}
validate21.errors = vErrors;
return errors === 0;
}

const schema13 = {"properties":{"plugins":{"$ref":"QlbzoYH-ElYAgtrQ-D2H8e5oKcWa-zjAiD08hBZQMdo"},"capabilities":{"$ref":"TkGd1gkSVMZC04kKWuLU4uQ0HsYVBDLtd_CExbJAaWA"},"components":{"$ref":"ngfEeDDd5o8GN5RAcnbSi3qWnl-jlNohCxLyfNhU_gE"}},"type":"object"};
const schema14 = {"minProperties":1,"properties":{"kubernetes":{"$ref":"p4kCtM6GC9hLE6qZQ15bd7rGo5-voio6mJqjnaV9Nmg"}},"type":"object","nullable":true};
const schema15 = {"properties":{"client":{"$ref":"27OoL3hYxzV95-aFu0qw5g7le38vRSh-PFoDHJ436P8"},"dns":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"ns":{"$ref":"MSKF3x5z3d0tjRd3e5kizl0pP0GkCPkWEU8bldRKu2k"},"flavor":{"$ref":"L_rV6WQcME8oY6COt0Ows9aEUJdWkN4s0-JWRISiaVA"},"gitops":{"$ref":"EEh1N8TV9nNRp8-yWYXjxJJyaAn-x6XrISlqWLIkGYI"}},"required":["dns","flavor"],"type":"object","nullable":true};
const schema16 = {"properties":{"context":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object","nullable":true};
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


function validate28(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.context !== undefined){
let data0 = data.context;
const _errs2 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/context",parentData:data,parentDataProperty:"context",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
}
validate28.errors = vErrors;
return errors === 0;
}

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

const schema17 = {"properties":{"features":{"$ref":"lzE6NTkeTu3JDOPgoFbsBjrlaLHCcBVPDcO0t6rom6k"},"operators":{"$ref":"lzE6NTkeTu3JDOPgoFbsBjrlaLHCcBVPDcO0t6rom6k"},"services":{"$ref":"lzE6NTkeTu3JDOPgoFbsBjrlaLHCcBVPDcO0t6rom6k"}},"type":"object","nullable":true};
const schema3 = {"properties":{"name":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"annotations":{"$ref":"HJJzIHbiJa8GGL2u2CTOVy-Hry2MGWIvSIk30RN75wI"},"labels":{"$ref":"HJJzIHbiJa8GGL2u2CTOVy-Hry2MGWIvSIk30RN75wI"}},"type":"object","nullable":true};
const schema2 = {"additionalProperties":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"object","properties":{},"nullable":true};

function validate2(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate2.errors = vErrors;
return errors === 0;
}


function validate4(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.annotations !== undefined){
let data1 = data.annotations;
const _errs3 = errors;
if(!(validate2(data1, {instancePath:instancePath+"/annotations",parentData:data,parentDataProperty:"annotations",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.labels !== undefined){
let data2 = data.labels;
const _errs4 = errors;
if(!(validate2(data2, {instancePath:instancePath+"/labels",parentData:data,parentDataProperty:"labels",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
}
validate4.errors = vErrors;
return errors === 0;
}


function validate32(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.features !== undefined){
let data0 = data.features;
const _errs2 = errors;
if(!(validate4(data0, {instancePath:instancePath+"/features",parentData:data,parentDataProperty:"features",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.operators !== undefined){
let data1 = data.operators;
const _errs3 = errors;
if(!(validate4(data1, {instancePath:instancePath+"/operators",parentData:data,parentDataProperty:"operators",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.services !== undefined){
let data2 = data.services;
const _errs4 = errors;
if(!(validate4(data2, {instancePath:instancePath+"/services",parentData:data,parentDataProperty:"services",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
}
validate32.errors = vErrors;
return errors === 0;
}

const schema18 = {"type":"string","enum":["docker-desktop","kind","k3s","talos"]};

function validate37(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema18.enum;
if(!((((data === "docker-desktop") || (data === "kind")) || (data === "k3s")) || (data === "talos"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema18.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate37.errors = vErrors;
return errors === 0;
}

const schema19 = {"minProperties":1,"properties":{"flux":{"$ref":"8dU63p8wOBiX8_U8bK5UPubP46gbeScC5WSHRcNACn4"}},"type":"object","nullable":true};
const schema20 = {"properties":{"decryption":{"$ref":"XQq1YoHfsHmv7xCI0EGyHfgAmExsY8uYL_Sl2Z9f88o"},"sources":{"$ref":"v5F9Mm7QIZld3CQkyAk4fk8qBkkz73kMP2_tkivoLE8"}},"required":["sources"],"type":"object","nullable":true};
const schema21 = {"properties":{"provider":{"$ref":"n3A9wcbAJh_aDtm9wj6v1a1L9ADKnhrEBxri7YZ3tLs"},"provision":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"secretRef":{"$ref":"Tv4xxEM4-rkWx429stngdyg1y-NXOJv9XnOY7jdo7LY"}},"required":["provider","secretRef"],"type":"object","nullable":true};
const schema22 = {"type":"string","enum":["sops"]};

function validate42(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema22.enum;
if(!(data === "sops")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema22.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate42.errors = vErrors;
return errors === 0;
}

const schema23 = {"type":"boolean","nullable":true};

function validate44(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate44.errors = vErrors;
return errors === 0;
}

const schema4 = {"properties":{"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["name"],"type":"object"};

function validate8(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate8.errors = vErrors;
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
if(data.secretRef === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "secretRef"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.provider !== undefined){
let data0 = data.provider;
const _errs2 = errors;
if(!(validate42(data0, {instancePath:instancePath+"/provider",parentData:data,parentDataProperty:"provider",rootData}))){
vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.provision !== undefined){
let data1 = data.provision;
const _errs3 = errors;
if(!(validate44(data1, {instancePath:instancePath+"/provision",parentData:data,parentDataProperty:"provision",rootData}))){
vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.secretRef !== undefined){
let data2 = data.secretRef;
const _errs4 = errors;
if(!(validate8(data2, {instancePath:instancePath+"/secretRef",parentData:data,parentDataProperty:"secretRef",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
}
validate41.errors = vErrors;
return errors === 0;
}

const schema24 = {"minProperties":1,"maxProperties":1,"properties":{"oci":{"$ref":"b750ir7Wwkx-J6qpoBR7jN-XKjof7O5I_Aj18CyFpBM"}},"type":"object"};
const schema25 = {"properties":{"registry":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"prefix":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"secretRef":{"$ref":"Tv4xxEM4-rkWx429stngdyg1y-NXOJv9XnOY7jdo7LY"},"signing":{"$ref":"5jPw-gio2S5HmhFw0j33nSYjI3c19s9JJfWhAwKGtuk"}},"required":["registry","secretRef"],"type":"object","nullable":true};
const schema26 = {"minProperties":1,"maxProperties":1,"properties":{"cosign":{"$ref":"pQhIpc54U0v7jZ_DrJw44UpFNMq2fMP1YLGZkFscEPo"},"notation":{"$ref":"pQhIpc54U0v7jZ_DrJw44UpFNMq2fMP1YLGZkFscEPo"}},"type":"object","nullable":true};
const schema5 = {"properties":{"key":{"$ref":"W6LaYEo81m-aJFg2wT3U84v3cFRoG3rtrSo2POBYd-E"}},"type":"object","nullable":true};
const schema6 = {"properties":{"file":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"path":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["file","path"],"type":"object","nullable":true};

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
if(data.file === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "file"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.path === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "path"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.file !== undefined){
let data0 = data.file;
const _errs2 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/file",parentData:data,parentDataProperty:"file",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.path !== undefined){
let data1 = data.path;
const _errs3 = errors;
if(!(validate1(data1, {instancePath:instancePath+"/path",parentData:data,parentDataProperty:"path",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate11.errors = vErrors;
return errors === 0;
}


function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.key !== undefined){
let data0 = data.key;
const _errs2 = errors;
if(!(validate11(data0, {instancePath:instancePath+"/key",parentData:data,parentDataProperty:"key",rootData}))){
vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
}
validate10.errors = vErrors;
return errors === 0;
}


function validate53(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(Object.keys(data).length > 1){
const err1 = {instancePath,schemaPath:"#/maxProperties",keyword:"maxProperties",params:{limit: 1}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(Object.keys(data).length < 1){
const err2 = {instancePath,schemaPath:"#/minProperties",keyword:"minProperties",params:{limit: 1}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.cosign !== undefined){
let data0 = data.cosign;
const _errs2 = errors;
if(!(validate10(data0, {instancePath:instancePath+"/cosign",parentData:data,parentDataProperty:"cosign",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.notation !== undefined){
let data1 = data.notation;
const _errs3 = errors;
if(!(validate10(data1, {instancePath:instancePath+"/notation",parentData:data,parentDataProperty:"notation",rootData}))){
vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate53.errors = vErrors;
return errors === 0;
}


function validate49(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.registry === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "registry"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.secretRef === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "secretRef"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.registry !== undefined){
let data0 = data.registry;
const _errs2 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/registry",parentData:data,parentDataProperty:"registry",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.prefix !== undefined){
let data1 = data.prefix;
const _errs3 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/prefix",parentData:data,parentDataProperty:"prefix",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.secretRef !== undefined){
let data2 = data.secretRef;
const _errs4 = errors;
if(!(validate8(data2, {instancePath:instancePath+"/secretRef",parentData:data,parentDataProperty:"secretRef",rootData}))){
vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.signing !== undefined){
let data3 = data.signing;
const _errs5 = errors;
if(!(validate53(data3, {instancePath:instancePath+"/signing",parentData:data,parentDataProperty:"signing",rootData}))){
vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
}
validate49.errors = vErrors;
return errors === 0;
}


function validate48(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(Object.keys(data).length > 1){
const err0 = {instancePath,schemaPath:"#/maxProperties",keyword:"maxProperties",params:{limit: 1}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(Object.keys(data).length < 1){
const err1 = {instancePath,schemaPath:"#/minProperties",keyword:"minProperties",params:{limit: 1}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.oci !== undefined){
let data0 = data.oci;
const _errs1 = errors;
if(!(validate49(data0, {instancePath:instancePath+"/oci",parentData:data,parentDataProperty:"oci",rootData}))){
vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
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
validate48.errors = vErrors;
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
if(data.sources === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "sources"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.decryption !== undefined){
let data0 = data.decryption;
const _errs2 = errors;
if(!(validate41(data0, {instancePath:instancePath+"/decryption",parentData:data,parentDataProperty:"decryption",rootData}))){
vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.sources !== undefined){
let data1 = data.sources;
const _errs3 = errors;
if(!(validate48(data1, {instancePath:instancePath+"/sources",parentData:data,parentDataProperty:"sources",rootData}))){
vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate40.errors = vErrors;
return errors === 0;
}


function validate39(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(Object.keys(data).length < 1){
const err1 = {instancePath,schemaPath:"#/minProperties",keyword:"minProperties",params:{limit: 1}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.flux !== undefined){
let data0 = data.flux;
const _errs2 = errors;
if(!(validate40(data0, {instancePath:instancePath+"/flux",parentData:data,parentDataProperty:"flux",rootData}))){
vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
}
validate39.errors = vErrors;
return errors === 0;
}


function validate27(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.dns === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "dns"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.flavor === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "flavor"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.client !== undefined){
let data0 = data.client;
const _errs2 = errors;
if(!(validate28(data0, {instancePath:instancePath+"/client",parentData:data,parentDataProperty:"client",rootData}))){
vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.dns !== undefined){
let data1 = data.dns;
const _errs3 = errors;
if(!(validate1(data1, {instancePath:instancePath+"/dns",parentData:data,parentDataProperty:"dns",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.ns !== undefined){
let data2 = data.ns;
const _errs4 = errors;
if(!(validate32(data2, {instancePath:instancePath+"/ns",parentData:data,parentDataProperty:"ns",rootData}))){
vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.flavor !== undefined){
let data3 = data.flavor;
const _errs5 = errors;
if(!(validate37(data3, {instancePath:instancePath+"/flavor",parentData:data,parentDataProperty:"flavor",rootData}))){
vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.gitops !== undefined){
let data4 = data.gitops;
const _errs6 = errors;
if(!(validate39(data4, {instancePath:instancePath+"/gitops",parentData:data,parentDataProperty:"gitops",rootData}))){
vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
}
validate27.errors = vErrors;
return errors === 0;
}


function validate26(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(Object.keys(data).length < 1){
const err1 = {instancePath,schemaPath:"#/minProperties",keyword:"minProperties",params:{limit: 1}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.kubernetes !== undefined){
let data0 = data.kubernetes;
const _errs2 = errors;
if(!(validate27(data0, {instancePath:instancePath+"/kubernetes",parentData:data,parentDataProperty:"kubernetes",rootData}))){
vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
}
validate26.errors = vErrors;
return errors === 0;
}

const schema27 = {"items":{"$ref":"Uxd-lXAFcO9p5QiL3W2M5PuyNnFooDkaDJkH4da6fnw"},"type":"array","nullable":true};
const schema28 = {"type":"object","properties":{"class":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"options":{"$ref":"4KJpJ2UNFTNL7-nrCAYAhkkrLQWONxS7Duu1ltSg-vc"}},"required":["class"]};
const schema7 = {"type":"object","properties":{},"nullable":true};

function validate15(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
}
validate15.errors = vErrors;
return errors === 0;
}


function validate64(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.class === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "class"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.class !== undefined){
let data0 = data.class;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/class",parentData:data,parentDataProperty:"class",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.options !== undefined){
let data1 = data.options;
const _errs2 = errors;
if(!(validate15(data1, {instancePath:instancePath+"/options",parentData:data,parentDataProperty:"options",rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
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
validate64.errors = vErrors;
return errors === 0;
}


function validate63(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate64(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
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
validate63.errors = vErrors;
return errors === 0;
}

const schema29 = {"items":{"$ref":"JG4nP4MzroZ1cO_C7F7ngwfUsTZoG2xv8kWUT1KHn9w"},"type":"array","nullable":true};
const schema30 = {"properties":{"class":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"name":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"options":{"$ref":"4KJpJ2UNFTNL7-nrCAYAhkkrLQWONxS7Duu1ltSg-vc"},"context":{"$ref":"4KJpJ2UNFTNL7-nrCAYAhkkrLQWONxS7Duu1ltSg-vc"}},"required":["class"],"type":"object"};

function validate70(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.class === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "class"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.class !== undefined){
let data0 = data.class;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/class",parentData:data,parentDataProperty:"class",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
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
if(data.options !== undefined){
let data2 = data.options;
const _errs3 = errors;
if(!(validate15(data2, {instancePath:instancePath+"/options",parentData:data,parentDataProperty:"options",rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.context !== undefined){
let data3 = data.context;
const _errs4 = errors;
if(!(validate15(data3, {instancePath:instancePath+"/context",parentData:data,parentDataProperty:"context",rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
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
validate70.errors = vErrors;
return errors === 0;
}


function validate69(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate70(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
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
validate69.errors = vErrors;
return errors === 0;
}


function validate25(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.plugins !== undefined){
let data0 = data.plugins;
const _errs1 = errors;
if(!(validate26(data0, {instancePath:instancePath+"/plugins",parentData:data,parentDataProperty:"plugins",rootData}))){
vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.capabilities !== undefined){
let data1 = data.capabilities;
const _errs2 = errors;
if(!(validate63(data1, {instancePath:instancePath+"/capabilities",parentData:data,parentDataProperty:"capabilities",rootData}))){
vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.components !== undefined){
let data2 = data.components;
const _errs3 = errors;
if(!(validate69(data2, {instancePath:instancePath+"/components",parentData:data,parentDataProperty:"components",rootData}))){
vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
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
validate25.errors = vErrors;
return errors === 0;
}


function validate16(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="architect.glassway.net.v1alpha1.Target" */;
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
if(data.metadata === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "metadata"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.spec === undefined){
const err3 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "spec"}};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
if(data.apiVersion !== undefined){
let data0 = data.apiVersion;
const _errs1 = errors;
if(!(validate17(data0, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.kind !== undefined){
let data1 = data.kind;
const _errs2 = errors;
if(!(validate19(data1, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.metadata !== undefined){
let data2 = data.metadata;
const _errs3 = errors;
if(!(validate21(data2, {instancePath:instancePath+"/metadata",parentData:data,parentDataProperty:"metadata",rootData}))){
vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.spec !== undefined){
let data3 = data.spec;
const _errs4 = errors;
if(!(validate25(data3, {instancePath:instancePath+"/spec",parentData:data,parentDataProperty:"spec",rootData}))){
vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
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
validate16.errors = vErrors;
return errors === 0;
}
