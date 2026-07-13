import { formats } from "@glassway/architect/kubernetes/validate";
export const validate = validate5;
const schema4 = {"type":"object","properties":{"apiVersion":{"$ref":"VMUmA03SewmuvI9dOayFBcyInGffceYOUTWGeKqh4K0"},"kind":{"$ref":"5TSzaZsXGs4_zL6eT3e1t7cCo2170hlqUKy1SwndqFs"},"metadata":{"$ref":"P3srTZpWadQH4s4N9KfJR0iCqydQo9YAz7xMB2qf0GQ"},"spec":{"$ref":"jubdf-S1QRYUYYnTmaAQY2F71oijkbuH4vhvJsm97Zg"},"status":{"$ref":"Nx47Zy_aLrPFh_6kqr_SmOSDgRsOj9wSDIQoOhM8zhg"}},"required":["apiVersion","kind"],"$id":"image.toolkit.fluxcd.io.v1.ImageUpdateAutomation"};
const schema5 = {"type":"string","enum":["image.toolkit.fluxcd.io/v1"]};

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
if(!(data === "image.toolkit.fluxcd.io/v1")){
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

const schema6 = {"type":"string","enum":["ImageUpdateAutomation"]};

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
if(!(data === "ImageUpdateAutomation")){
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

import { validate as validate11 } from "@glassway/architect/kubernetes/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";


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

const schema9 = {"properties":{"git":{"$ref":"iUgNLuG4Sv6dqIVe1_PdGTfrB4o3xq834jI8ufmZSPo"},"interval":{"$ref":"LsMD3Ue9PdPHLGttXdfcxIWepwGNenjy1vMwBiao_hY"},"policySelector":{"$ref":"VVCKgJOBvzPMFDWky4rRQ5NkqJqB9eXDLOrP2lnPweI"},"sourceRef":{"$ref":"dLwzwJmBfUYBtUuWHhldraxJjlUqrUGPUKgvMCUMmPc"},"suspend":{"$ref":"CTX4WtafS9K1Gv7k2X1H0J3M9LziUVVRBMOR0rDDzTk"},"update":{"$ref":"0sEkUjjtbTU5x8CjPqtSpR45d0zAOU-VBJKslU9WxiU"}},"required":["interval","sourceRef"],"type":"object","nullable":true};
const schema10 = {"properties":{"checkout":{"$ref":"qQ0crzaVceSBe5HUsrxMdNtYaK_YyVHG385k-5s7o3s"},"commit":{"$ref":"iLWk3ZNMaix5NS6HQNeGbb9mK9BkTXJ7KViEMC-Ezx0"},"push":{"$ref":"pFySpe-UU_CdT-89CFocT7SCLFRep_NOCps6beLhUBk"}},"required":["commit"],"type":"object","nullable":true};
const schema11 = {"properties":{"ref":{"$ref":"thMSeyTM6d3io3c8vs17yqbmToGPyTYF9TSwW22TyKg"}},"required":["ref"],"type":"object","nullable":true};
const schema12 = {"properties":{"branch":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"commit":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"name":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"semver":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"tag":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object"};
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


function validate17(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.branch !== undefined){
let data0 = data.branch;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/branch",parentData:data,parentDataProperty:"branch",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.commit !== undefined){
let data1 = data.commit;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/commit",parentData:data,parentDataProperty:"commit",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.name !== undefined){
let data2 = data.name;
const _errs3 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.semver !== undefined){
let data3 = data.semver;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/semver",parentData:data,parentDataProperty:"semver",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.tag !== undefined){
let data4 = data.tag;
const _errs5 = errors;
if(!(validate0(data4, {instancePath:instancePath+"/tag",parentData:data,parentDataProperty:"tag",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
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
validate17.errors = vErrors;
return errors === 0;
}


function validate16(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.ref === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "ref"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.ref !== undefined){
let data0 = data.ref;
const _errs2 = errors;
if(!(validate17(data0, {instancePath:instancePath+"/ref",parentData:data,parentDataProperty:"ref",rootData}))){
vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
}
validate16.errors = vErrors;
return errors === 0;
}

const schema13 = {"properties":{"author":{"$ref":"E0BTlQe7ImNdxl5h-8hxWAsptVdQa5TEh6oNiCZA1Zs"},"messageTemplate":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"messageTemplateValues":{"$ref":"HJJzIHbiJa8GGL2u2CTOVy-Hry2MGWIvSIk30RN75wI"},"signingKey":{"$ref":"shvzatrFLkfwOWxTCERlqobDmu02GzykWc2KkWdQFa4"}},"required":["author"],"type":"object"};
const schema14 = {"properties":{"email":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"name":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"required":["email"],"type":"object"};
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


function validate26(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.email === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "email"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.email !== undefined){
let data0 = data.email;
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/email",parentData:data,parentDataProperty:"email",rootData}))){
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
validate26.errors = vErrors;
return errors === 0;
}

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

const schema15 = {"properties":{"secretRef":{"$ref":"Tv4xxEM4-rkWx429stngdyg1y-NXOJv9XnOY7jdo7LY"},"type":{"$ref":"MkQwJT6tko-MASz6DqeRTVW0XtjHoTlyMay13y_53X8"}},"required":["secretRef"],"type":"object","nullable":true};
const schema16 = {"properties":{"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["name"],"type":"object"};

function validate33(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate33.errors = vErrors;
return errors === 0;
}

const schema17 = {"enum":["gpg","ssh"],"type":"string","nullable":true};

function validate36(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema17.enum;
if(!((data === "gpg") || (data === "ssh"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema17.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate36.errors = vErrors;
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
if(data.secretRef === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "secretRef"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.secretRef !== undefined){
let data0 = data.secretRef;
const _errs2 = errors;
if(!(validate33(data0, {instancePath:instancePath+"/secretRef",parentData:data,parentDataProperty:"secretRef",rootData}))){
vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.type !== undefined){
let data1 = data.type;
const _errs3 = errors;
if(!(validate36(data1, {instancePath:instancePath+"/type",parentData:data,parentDataProperty:"type",rootData}))){
vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate32.errors = vErrors;
return errors === 0;
}


function validate25(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.author === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "author"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.author !== undefined){
let data0 = data.author;
const _errs1 = errors;
if(!(validate26(data0, {instancePath:instancePath+"/author",parentData:data,parentDataProperty:"author",rootData}))){
vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.messageTemplate !== undefined){
let data1 = data.messageTemplate;
const _errs2 = errors;
if(!(validate0(data1, {instancePath:instancePath+"/messageTemplate",parentData:data,parentDataProperty:"messageTemplate",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.messageTemplateValues !== undefined){
let data2 = data.messageTemplateValues;
const _errs3 = errors;
if(!(validate2(data2, {instancePath:instancePath+"/messageTemplateValues",parentData:data,parentDataProperty:"messageTemplateValues",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.signingKey !== undefined){
let data3 = data.signingKey;
const _errs4 = errors;
if(!(validate32(data3, {instancePath:instancePath+"/signingKey",parentData:data,parentDataProperty:"signingKey",rootData}))){
vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
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
validate25.errors = vErrors;
return errors === 0;
}

const schema18 = {"properties":{"branch":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"options":{"$ref":"HJJzIHbiJa8GGL2u2CTOVy-Hry2MGWIvSIk30RN75wI"},"refspec":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object","nullable":true};

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
if(data.branch !== undefined){
let data0 = data.branch;
const _errs2 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/branch",parentData:data,parentDataProperty:"branch",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.options !== undefined){
let data1 = data.options;
const _errs3 = errors;
if(!(validate2(data1, {instancePath:instancePath+"/options",parentData:data,parentDataProperty:"options",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.refspec !== undefined){
let data2 = data.refspec;
const _errs4 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/refspec",parentData:data,parentDataProperty:"refspec",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
}
validate40.errors = vErrors;
return errors === 0;
}


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
if(data.commit === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "commit"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.checkout !== undefined){
let data0 = data.checkout;
const _errs2 = errors;
if(!(validate16(data0, {instancePath:instancePath+"/checkout",parentData:data,parentDataProperty:"checkout",rootData}))){
vErrors = vErrors === null ? validate16.errors : vErrors.concat(validate16.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.commit !== undefined){
let data1 = data.commit;
const _errs3 = errors;
if(!(validate25(data1, {instancePath:instancePath+"/commit",parentData:data,parentDataProperty:"commit",rootData}))){
vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.push !== undefined){
let data2 = data.push;
const _errs4 = errors;
if(!(validate40(data2, {instancePath:instancePath+"/push",parentData:data,parentDataProperty:"push",rootData}))){
vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
}
validate15.errors = vErrors;
return errors === 0;
}

const schema19 = {"pattern":"^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$","type":"string"};
const pattern0 = new RegExp("^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$", "u");

function validate46(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate46.errors = vErrors;
return errors === 0;
}

const schema20 = {"properties":{"matchExpressions":{"$ref":"ayKrb4PFrKLMYqvjiutPxrbz750hbVgxft904f5rFtQ"},"matchLabels":{"$ref":"HJJzIHbiJa8GGL2u2CTOVy-Hry2MGWIvSIk30RN75wI"}},"type":"object","nullable":true};
const schema21 = {"items":{"$ref":"9NBsm8QGHPFL3UnZD7QzZl0zjxatAalAe2kAVgrnyrc"},"type":"array","nullable":true};
const schema22 = {"properties":{"key":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"operator":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"values":{"$ref":"uqi-NWpwJAtCtKg340P2GU85hOwdccNKh8Eansj5IGE"}},"required":["key","operator"],"type":"object"};
const schema23 = {"items":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"type":"array","nullable":true};

function validate53(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate53.errors = vErrors;
return errors === 0;
}


function validate50(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
const _errs0 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.key === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "key"}};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.operator === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "operator"}};
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
const _errs1 = errors;
if(!(validate1(data0, {instancePath:instancePath+"/key",parentData:data,parentDataProperty:"key",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.operator !== undefined){
let data1 = data.operator;
const _errs2 = errors;
if(!(validate1(data1, {instancePath:instancePath+"/operator",parentData:data,parentDataProperty:"operator",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.values !== undefined){
let data2 = data.values;
const _errs3 = errors;
if(!(validate53(data2, {instancePath:instancePath+"/values",parentData:data,parentDataProperty:"values",rootData}))){
vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
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


function validate49(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate50(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
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
validate49.errors = vErrors;
return errors === 0;
}


function validate48(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.matchExpressions !== undefined){
let data0 = data.matchExpressions;
const _errs2 = errors;
if(!(validate49(data0, {instancePath:instancePath+"/matchExpressions",parentData:data,parentDataProperty:"matchExpressions",rootData}))){
vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.matchLabels !== undefined){
let data1 = data.matchLabels;
const _errs3 = errors;
if(!(validate2(data1, {instancePath:instancePath+"/matchLabels",parentData:data,parentDataProperty:"matchLabels",rootData}))){
vErrors = vErrors === null ? validate2.errors : vErrors.concat(validate2.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate48.errors = vErrors;
return errors === 0;
}

const schema24 = {"properties":{"apiVersion":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"kind":{"$ref":"vBtsoFstkAinjSLnwx_GOpbzqAwWQdics04N6IBJeKI"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"namespace":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"required":["kind","name"],"type":"object"};
const schema25 = {"default":"GitRepository","enum":["GitRepository"],"type":"string"};

function validate62(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(data === "GitRepository")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema25.enum}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
validate62.errors = vErrors;
return errors === 0;
}


function validate60(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate0(data0, {instancePath:instancePath+"/apiVersion",parentData:data,parentDataProperty:"apiVersion",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.kind !== undefined){
let data1 = data.kind;
const _errs2 = errors;
if(!(validate62(data1, {instancePath:instancePath+"/kind",parentData:data,parentDataProperty:"kind",rootData}))){
vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.name !== undefined){
let data2 = data.name;
const _errs3 = errors;
if(!(validate1(data2, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.namespace !== undefined){
let data3 = data.namespace;
const _errs4 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/namespace",parentData:data,parentDataProperty:"namespace",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
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
validate60.errors = vErrors;
return errors === 0;
}

const schema26 = {"type":"boolean","nullable":true};

function validate67(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate67.errors = vErrors;
return errors === 0;
}

const schema27 = {"default":{"strategy":"Setters"},"properties":{"path":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"strategy":{"$ref":"I3H61SfQITuItbf1rJSNyMzsDQqE37nkY4dzxaQFWhs"}},"type":"object","nullable":true};
const schema28 = {"default":"Setters","enum":["Setters"],"type":"string","nullable":true};

function validate71(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema28.enum;
if(!(data === "Setters")){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema28.enum}};
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
if(data.path !== undefined){
let data0 = data.path;
const _errs2 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/path",parentData:data,parentDataProperty:"path",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.strategy !== undefined){
let data1 = data.strategy;
const _errs3 = errors;
if(!(validate71(data1, {instancePath:instancePath+"/strategy",parentData:data,parentDataProperty:"strategy",rootData}))){
vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate69.errors = vErrors;
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
if(data.sourceRef === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "sourceRef"}};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.git !== undefined){
let data0 = data.git;
const _errs2 = errors;
if(!(validate15(data0, {instancePath:instancePath+"/git",parentData:data,parentDataProperty:"git",rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.interval !== undefined){
let data1 = data.interval;
const _errs3 = errors;
if(!(validate46(data1, {instancePath:instancePath+"/interval",parentData:data,parentDataProperty:"interval",rootData}))){
vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.policySelector !== undefined){
let data2 = data.policySelector;
const _errs4 = errors;
if(!(validate48(data2, {instancePath:instancePath+"/policySelector",parentData:data,parentDataProperty:"policySelector",rootData}))){
vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.sourceRef !== undefined){
let data3 = data.sourceRef;
const _errs5 = errors;
if(!(validate60(data3, {instancePath:instancePath+"/sourceRef",parentData:data,parentDataProperty:"sourceRef",rootData}))){
vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.suspend !== undefined){
let data4 = data.suspend;
const _errs6 = errors;
if(!(validate67(data4, {instancePath:instancePath+"/suspend",parentData:data,parentDataProperty:"suspend",rootData}))){
vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.update !== undefined){
let data5 = data.update;
const _errs7 = errors;
if(!(validate69(data5, {instancePath:instancePath+"/update",parentData:data,parentDataProperty:"update",rootData}))){
vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
}
validate14.errors = vErrors;
return errors === 0;
}

const schema29 = {"default":{"observedGeneration":-1},"properties":{"conditions":{"$ref":"hhAxL57cvApnLYfNWQbGuX0ymd4M4buVmG7H0q63I0w"},"lastAutomationRunTime":{"$ref":"YL2AaRx5mZZL3drs48WsIqN7ZQe66kWzKXDNrUwOgoc"},"lastHandledReconcileAt":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"lastPushCommit":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"lastPushTime":{"$ref":"YL2AaRx5mZZL3drs48WsIqN7ZQe66kWzKXDNrUwOgoc"},"observedGeneration":{"$ref":"otlW-2SioSJxw2ZRa8bQrFi14CUkm_yS2tfdShK98Vk"},"observedPolicies":{"$ref":"N7p7Tri2H3ob_VWJwWb0U3vciPusb6L2qHWjh-Ij7Ms"},"observedSourceRevision":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"}},"type":"object","nullable":true};
const schema30 = {"items":{"$ref":"dZ13d79yfL0AfKGv8XJr0-7aalgpv7dwgkV5EU9HxwM"},"type":"array","nullable":true};
const schema31 = {"properties":{"lastTransitionTime":{"$ref":"nWP098h5Flk6EOMa_OWYW4EnhyCrisyvgJPgk0WtC9c"},"message":{"$ref":"CG805GD3KzsipQt5EKLOQw9SjU_4PVFnnbOjDh0LzJQ"},"observedGeneration":{"$ref":"Tv0gqme9PlVaT-l831KRjUe4u9reG1m_llVaPqPtqUs"},"reason":{"$ref":"UPBfG4e9zcqG6mx3tN1LWinVzYKOFfIO2VnMgg6lAWI"},"status":{"$ref":"UcCRuQZyUlftnmEwuGDZcciwLAdzzRj4HOLofWAwyW8"},"type":{"$ref":"grctw_GwW6iDVZUzowft1rMz55_d64qiJ_wOfyk2Qoo"}},"required":["lastTransitionTime","message","reason","status","type"],"type":"object"};
const schema32 = {"format":"date-time","type":"string"};
const formats0 = formats["date-time"];

function validate78(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate78.errors = vErrors;
return errors === 0;
}

const schema33 = {"maxLength":32768,"type":"string"};
import func0 from "@glassway/architect/kubernetes/validate/runtime/ucs2length";

function validate80(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate80.errors = vErrors;
return errors === 0;
}

const schema34 = {"format":"int64","type":"integer","minimum":0,"nullable":true};
const formats4 = formats.int64;

function validate82(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate82.errors = vErrors;
return errors === 0;
}

const schema35 = {"maxLength":1024,"minLength":1,"pattern":"^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$","type":"string"};
const pattern1 = new RegExp("^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$", "u");

function validate84(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!pattern1.test(data)){
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
validate84.errors = vErrors;
return errors === 0;
}

const schema36 = {"enum":["True","False","Unknown"],"type":"string"};

function validate86(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
const vSchema0 = schema36.enum;
if(!(((data === "True") || (data === "False")) || (data === "Unknown"))){
const err1 = {instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema36.enum}};
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

const schema37 = {"maxLength":316,"pattern":"^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$","type":"string"};
const pattern2 = new RegExp("^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$", "u");

function validate88(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!pattern2.test(data)){
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
validate88.errors = vErrors;
return errors === 0;
}


function validate77(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate78(data0, {instancePath:instancePath+"/lastTransitionTime",parentData:data,parentDataProperty:"lastTransitionTime",rootData}))){
vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs1 === errors;
}
if(data.message !== undefined){
let data1 = data.message;
const _errs2 = errors;
if(!(validate80(data1, {instancePath:instancePath+"/message",parentData:data,parentDataProperty:"message",rootData}))){
vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.observedGeneration !== undefined){
let data2 = data.observedGeneration;
const _errs3 = errors;
if(!(validate82(data2, {instancePath:instancePath+"/observedGeneration",parentData:data,parentDataProperty:"observedGeneration",rootData}))){
vErrors = vErrors === null ? validate82.errors : vErrors.concat(validate82.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.reason !== undefined){
let data3 = data.reason;
const _errs4 = errors;
if(!(validate84(data3, {instancePath:instancePath+"/reason",parentData:data,parentDataProperty:"reason",rootData}))){
vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.status !== undefined){
let data4 = data.status;
const _errs5 = errors;
if(!(validate86(data4, {instancePath:instancePath+"/status",parentData:data,parentDataProperty:"status",rootData}))){
vErrors = vErrors === null ? validate86.errors : vErrors.concat(validate86.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.type !== undefined){
let data5 = data.type;
const _errs6 = errors;
if(!(validate88(data5, {instancePath:instancePath+"/type",parentData:data,parentDataProperty:"type",rootData}))){
vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
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
validate77.errors = vErrors;
return errors === 0;
}


function validate76(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate77(data0, {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){
vErrors = vErrors === null ? validate77.errors : vErrors.concat(validate77.errors);
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
validate76.errors = vErrors;
return errors === 0;
}

const schema3 = {"format":"date-time","type":"string","nullable":true};

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
validate4.errors = vErrors;
return errors === 0;
}

const schema38 = {"format":"int64","type":"integer","nullable":true};

function validate96(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
validate96.errors = vErrors;
return errors === 0;
}

const schema39 = {"additionalProperties":{"$ref":"W9FznksFmovOFoktIiqsHIkkeehT3lSdqOmjAWgZack"},"type":"object","properties":{},"nullable":true};
const schema40 = {"properties":{"digest":{"$ref":"ldoCEsh0ARg8F2aeji6S38NFl7aLPSuz1hGlgX2tjuQ"},"name":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"},"tag":{"$ref":"sLlNkWhANXZ15lvmcujppy1mXxqn6f-GaeQpWRYm_dw"}},"required":["name","tag"],"type":"object"};

function validate99(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(data.tag === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "tag"}};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.digest !== undefined){
let data0 = data.digest;
const _errs1 = errors;
if(!(validate0(data0, {instancePath:instancePath+"/digest",parentData:data,parentDataProperty:"digest",rootData}))){
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
if(!(validate1(data1, {instancePath:instancePath+"/name",parentData:data,parentDataProperty:"name",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.tag !== undefined){
let data2 = data.tag;
const _errs3 = errors;
if(!(validate1(data2, {instancePath:instancePath+"/tag",parentData:data,parentDataProperty:"tag",rootData}))){
vErrors = vErrors === null ? validate1.errors : vErrors.concat(validate1.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
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
validate99.errors = vErrors;
return errors === 0;
}


function validate98(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate99(data0, {instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),parentData:data,parentDataProperty:key0,rootData}))){
vErrors = vErrors === null ? validate99.errors : vErrors.concat(validate99.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
}
validate98.errors = vErrors;
return errors === 0;
}


function validate75(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
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
if(!(validate76(data0, {instancePath:instancePath+"/conditions",parentData:data,parentDataProperty:"conditions",rootData}))){
vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs2 === errors;
}
if(data.lastAutomationRunTime !== undefined){
let data1 = data.lastAutomationRunTime;
const _errs3 = errors;
if(!(validate4(data1, {instancePath:instancePath+"/lastAutomationRunTime",parentData:data,parentDataProperty:"lastAutomationRunTime",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs3 === errors;
}
if(data.lastHandledReconcileAt !== undefined){
let data2 = data.lastHandledReconcileAt;
const _errs4 = errors;
if(!(validate0(data2, {instancePath:instancePath+"/lastHandledReconcileAt",parentData:data,parentDataProperty:"lastHandledReconcileAt",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs4 === errors;
}
if(data.lastPushCommit !== undefined){
let data3 = data.lastPushCommit;
const _errs5 = errors;
if(!(validate0(data3, {instancePath:instancePath+"/lastPushCommit",parentData:data,parentDataProperty:"lastPushCommit",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs5 === errors;
}
if(data.lastPushTime !== undefined){
let data4 = data.lastPushTime;
const _errs6 = errors;
if(!(validate4(data4, {instancePath:instancePath+"/lastPushTime",parentData:data,parentDataProperty:"lastPushTime",rootData}))){
vErrors = vErrors === null ? validate4.errors : vErrors.concat(validate4.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs6 === errors;
}
if(data.observedGeneration !== undefined){
let data5 = data.observedGeneration;
const _errs7 = errors;
if(!(validate96(data5, {instancePath:instancePath+"/observedGeneration",parentData:data,parentDataProperty:"observedGeneration",rootData}))){
vErrors = vErrors === null ? validate96.errors : vErrors.concat(validate96.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs7 === errors;
}
if(data.observedPolicies !== undefined){
let data6 = data.observedPolicies;
const _errs8 = errors;
if(!(validate98(data6, {instancePath:instancePath+"/observedPolicies",parentData:data,parentDataProperty:"observedPolicies",rootData}))){
vErrors = vErrors === null ? validate98.errors : vErrors.concat(validate98.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs8 === errors;
}
if(data.observedSourceRevision !== undefined){
let data7 = data.observedSourceRevision;
const _errs9 = errors;
if(!(validate0(data7, {instancePath:instancePath+"/observedSourceRevision",parentData:data,parentDataProperty:"observedSourceRevision",rootData}))){
vErrors = vErrors === null ? validate0.errors : vErrors.concat(validate0.errors);
errors = vErrors.length;
}
else {
}
var valid0 = _errs9 === errors;
}
}
validate75.errors = vErrors;
return errors === 0;
}


function validate5(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="image.toolkit.fluxcd.io.v1.ImageUpdateAutomation" */;
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
if(data.status !== undefined){
let data4 = data.status;
const _errs5 = errors;
if(!(validate75(data4, {instancePath:instancePath+"/status",parentData:data,parentDataProperty:"status",rootData}))){
vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
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
validate5.errors = vErrors;
return errors === 0;
}
