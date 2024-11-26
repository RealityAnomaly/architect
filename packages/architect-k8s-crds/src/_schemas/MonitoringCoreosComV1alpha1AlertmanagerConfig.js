import { formats } from "@kubernetes-models/validate";
export const validate = validate85;
const schema29 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "jzKi3nOn0XA0UpurY9aOcqQs1nhaxt3Q0yZ8Kpy1KE"
    },
    "kind": {
      "$ref": "RJYmFAdi44K9qXPVrIXuntEGesIeaumlmAoCDMN92E"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "raNrUnCzq46CzcKU7PfQnf1fVzCUPHsEsnU6y1GJE"
    }
  },
  "required": ["spec", "apiVersion", "kind"],
  "$id": "monitoring.coreos.com.v1alpha1.AlertmanagerConfig"
};
const schema30 = {
  "type": "string",
  "enum": ["monitoring.coreos.com/v1alpha1"]
};
function validate86(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (!(data === "monitoring.coreos.com/v1alpha1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema30.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate86.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  "type": "string",
  "enum": ["AlertmanagerConfig"]
};
function validate88(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (!(data === "AlertmanagerConfig")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema31.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate88.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema33 = {};
import { validate as validate91 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate90(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate91(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate91.errors : vErrors.concat(validate91.errors);
      errors = vErrors.length;
    }
  }
  validate90.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  "properties": {
    "inhibitRules": {
      "$ref": "dTk09yOuTSUeG0zOtBs1IAQsoorsKvDB312DevjsIzs"
    },
    "muteTimeIntervals": {
      "$ref": "090f1X4vjX8mw4ayDNtGbGwS8QERGL3Ng6ddAYi2A"
    },
    "receivers": {
      "$ref": "498UNUUl2sOiGZvcIe3kuw8qtqRAwRA145c93QreXIA"
    },
    "route": {
      "$ref": "xm1EG4lMh80WNmdSNRgX6LJybjn25dttzBILcPvKU"
    }
  },
  "type": "object"
};
const schema35 = {
  "items": {
    "$ref": "QPmMm0vd1qGfSgFDIkDS8km1OTrxE1N7QtFl4XCtmo"
  },
  "type": "array",
  "nullable": true
};
const schema36 = {
  "properties": {
    "equal": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "sourceMatch": {
      "$ref": "5IGdYI0OKIfcQIDnWJZigWWN6D5p5BAbi9Cbr4avI"
    },
    "targetMatch": {
      "$ref": "5IGdYI0OKIfcQIDnWJZigWWN6D5p5BAbi9Cbr4avI"
    }
  },
  "type": "object"
};
const schema19 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
  "nullable": true
};
const schema14 = {
  "type": "string"
};
function validate34(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate34.errors = vErrors;
  return errors === 0;
}
function validate47(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate34(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
  }
  validate47.errors = vErrors;
  return errors === 0;
}
const schema6 = {
  "items": {
    "$ref": "8ICtrcsiDfdupLwZpYebIdXvBa417FwXhR0bg089Nk"
  },
  "type": "array",
  "nullable": true
};
const schema7 = {
  "properties": {
    "matchType": {
      "$ref": "MvP2NOSlIka9vI7ZZbCRIjsL6E2Ib2RZPkk3ELk6E"
    },
    "name": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    },
    "regex": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["name"],
  "type": "object"
};
const schema8 = {
  "enum": ["!=", "=", "=~", "!~"],
  "type": "string",
  "nullable": true
};
function validate23(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string" && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (!(data === "!=" || data === "=" || data === "=~" || data === "!~")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema8.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate23.errors = vErrors;
  return errors === 0;
}
const schema9 = {
  "minLength": 1,
  "type": "string"
};
import func2 from "@kubernetes-models/validate/runtime/ucs2length";
function validate25(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) < 1) {
      const err0 = {
        instancePath,
        schemaPath: "#/minLength",
        keyword: "minLength",
        params: {
          limit: 1
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
  } else {
    const err1 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate25.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "type": "boolean",
  "nullable": true
};
function validate27(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "boolean" && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "boolean"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate27.errors = vErrors;
  return errors === 0;
}
const schema11 = {
  "type": "string",
  "nullable": true
};
function validate29(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string" && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate29.errors = vErrors;
  return errors === 0;
}
function validate22(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.matchType !== undefined) {
      if (!validate23(data.matchType, {
        instancePath: instancePath + "/matchType",
        parentData: data,
        parentDataProperty: "matchType",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate25(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.regex !== undefined) {
      if (!validate27(data.regex, {
        instancePath: instancePath + "/regex",
        parentData: data,
        parentDataProperty: "regex",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate29(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err1 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate22.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate22(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate21.errors = vErrors;
  return errors === 0;
}
function validate96(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.equal !== undefined) {
      if (!validate47(data.equal, {
        instancePath: instancePath + "/equal",
        parentData: data,
        parentDataProperty: "equal",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
    if (data.sourceMatch !== undefined) {
      if (!validate21(data.sourceMatch, {
        instancePath: instancePath + "/sourceMatch",
        parentData: data,
        parentDataProperty: "sourceMatch",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetMatch !== undefined) {
      if (!validate21(data.targetMatch, {
        instancePath: instancePath + "/targetMatch",
        parentData: data,
        parentDataProperty: "targetMatch",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate96.errors = vErrors;
  return errors === 0;
}
function validate95(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate96(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate96.errors : vErrors.concat(validate96.errors);
        errors = vErrors.length;
      }
    }
  }
  validate95.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  "items": {
    "$ref": "URtW1jXLntZzjchWcWkzkVCEsRWWaYrDIaOsdQnUUQ"
  },
  "type": "array",
  "nullable": true
};
const schema38 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "timeIntervals": {
      "$ref": "YKpq9i3PNNqbOhEYafjFWMT1It8ArDipuopVJKl19s"
    }
  },
  "type": "object"
};
const schema39 = {
  "items": {
    "$ref": "D75xOWHHQ6annI1qDC4dQg77RGdc91ck8ei2M3jXug"
  },
  "type": "array",
  "nullable": true
};
const schema40 = {
  "properties": {
    "daysOfMonth": {
      "$ref": "C1yKzRUdpLGYA4LadPiYCjBIO0tBPSFCUxugNVDlUVA"
    },
    "months": {
      "$ref": "pkVN1CCc2ihKQyEKpS4myevokC5V1jjeoYkuTZNkg4"
    },
    "times": {
      "$ref": "Oew9KrUZrcePTZ1phqCaaglJc1cbnBXBHoKecSKcr8"
    },
    "weekdays": {
      "$ref": "49hRq81PC7mrxFC0bNnaEeAOx3F1oLbi6rV6rUb5s0"
    },
    "years": {
      "$ref": "y6vzUde9alUf8dRb5b7L9vpmZovOljodDJwjSzlfI"
    }
  },
  "type": "object"
};
const schema41 = {
  "items": {
    "$ref": "UdFqhHBaGopcvM2eahNd9cXCG5LgU1KBl2izaEUKro"
  },
  "type": "array",
  "nullable": true
};
const schema42 = {
  "properties": {
    "end": {
      "$ref": "OjIQ8TMOsdR3dktOwWQQhod0nBvV13a0F9a6HduI"
    },
    "start": {
      "$ref": "OjIQ8TMOsdR3dktOwWQQhod0nBvV13a0F9a6HduI"
    }
  },
  "type": "object"
};
const schema12 = {
  "type": "integer",
  "minimum": -31,
  "maximum": 31,
  "nullable": true
};
function validate32(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(typeof data == "number" && !(data % 1) && !isNaN(data) && isFinite(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "integer"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (typeof data == "number" && isFinite(data)) {
    if (data > 31 || isNaN(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/maximum",
        keyword: "maximum",
        params: {
          comparison: "<=",
          limit: 31
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data < -31 || isNaN(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/minimum",
        keyword: "minimum",
        params: {
          comparison: ">=",
          limit: -31
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  validate32.errors = vErrors;
  return errors === 0;
}
function validate108(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.end !== undefined) {
      if (!validate32(data.end, {
        instancePath: instancePath + "/end",
        parentData: data,
        parentDataProperty: "end",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.start !== undefined) {
      if (!validate32(data.start, {
        instancePath: instancePath + "/start",
        parentData: data,
        parentDataProperty: "start",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate108.errors = vErrors;
  return errors === 0;
}
function validate107(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate108(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate108.errors : vErrors.concat(validate108.errors);
        errors = vErrors.length;
      }
    }
  }
  validate107.errors = vErrors;
  return errors === 0;
}
const schema43 = {
  "items": {
    "$ref": "vQ5IdGbebsRjKdGX4HBUm1QwLXFKh0XERaz1cfw1EQU"
  },
  "type": "array",
  "nullable": true
};
const schema44 = {
  "pattern": "^((?i)january|february|march|april|may|june|july|august|september|october|november|december|[1-12])(?:((:((?i)january|february|march|april|may|june|july|august|september|october|november|december|[1-12]))$)|$)",
  "type": "string"
};
import func3 from "@kubernetes-models/validate/runtime/re2";
const pattern2 = new func3("^((?i)january|february|march|april|may|june|july|august|september|october|november|december|[1-12])(?:((:((?i)january|february|march|april|may|june|july|august|september|october|november|december|[1-12]))$)|$)", "u");
function validate114(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern2.test(data)) {
      const err0 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^((?i)january|february|march|april|may|june|july|august|september|october|november|december|[1-12])(?:((:((?i)january|february|march|april|may|june|july|august|september|october|november|december|[1-12]))$)|$)"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
  } else {
    const err1 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate114.errors = vErrors;
  return errors === 0;
}
function validate113(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate114(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate114.errors : vErrors.concat(validate114.errors);
        errors = vErrors.length;
      }
    }
  }
  validate113.errors = vErrors;
  return errors === 0;
}
const schema45 = {
  "items": {
    "$ref": "fCIlSgEo36WrmTqsECHDCcLhCksZVorP9wPaCBDnc"
  },
  "type": "array",
  "nullable": true
};
const schema46 = {
  "properties": {
    "endTime": {
      "$ref": "oUkxxUpiDOB6X91SOD1AMZzEvosnuPTbjN5p7CtGOA8"
    },
    "startTime": {
      "$ref": "oUkxxUpiDOB6X91SOD1AMZzEvosnuPTbjN5p7CtGOA8"
    }
  },
  "type": "object"
};
const schema13 = {
  "pattern": "^((([01][0-9])|(2[0-3])):[0-5][0-9])$|(^24:00$)",
  "type": "string",
  "nullable": true
};
const pattern0 = new RegExp("^((([01][0-9])|(2[0-3])):[0-5][0-9])$|(^24:00$)", "u");
function validate33(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string" && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^((([01][0-9])|(2[0-3])):[0-5][0-9])$|(^24:00$)"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
  }
  validate33.errors = vErrors;
  return errors === 0;
}
function validate118(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.endTime !== undefined) {
      if (!validate33(data.endTime, {
        instancePath: instancePath + "/endTime",
        parentData: data,
        parentDataProperty: "endTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.startTime !== undefined) {
      if (!validate33(data.startTime, {
        instancePath: instancePath + "/startTime",
        parentData: data,
        parentDataProperty: "startTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate118.errors = vErrors;
  return errors === 0;
}
function validate117(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate118(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate118.errors : vErrors.concat(validate118.errors);
        errors = vErrors.length;
      }
    }
  }
  validate117.errors = vErrors;
  return errors === 0;
}
const schema47 = {
  "items": {
    "$ref": "cMWnkJtBTvhJGgFP6OsqbnMytOphn9m7P8RyQZWqus"
  },
  "type": "array",
  "nullable": true
};
const schema48 = {
  "pattern": "^((?i)sun|mon|tues|wednes|thurs|fri|satur)day(?:((:(sun|mon|tues|wednes|thurs|fri|satur)day)$)|$)",
  "type": "string"
};
const pattern3 = new func3("^((?i)sun|mon|tues|wednes|thurs|fri|satur)day(?:((:(sun|mon|tues|wednes|thurs|fri|satur)day)$)|$)", "u");
function validate124(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern3.test(data)) {
      const err0 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^((?i)sun|mon|tues|wednes|thurs|fri|satur)day(?:((:(sun|mon|tues|wednes|thurs|fri|satur)day)$)|$)"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
  } else {
    const err1 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate124.errors = vErrors;
  return errors === 0;
}
function validate123(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate124(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate124.errors : vErrors.concat(validate124.errors);
        errors = vErrors.length;
      }
    }
  }
  validate123.errors = vErrors;
  return errors === 0;
}
const schema49 = {
  "items": {
    "$ref": "ItbiKVf7OKLgsB8ggpnyTnHItqyFNiOhwwgQ7XJqBnY"
  },
  "type": "array",
  "nullable": true
};
const schema50 = {
  "pattern": "^2\\d{3}(?::2\\d{3}|$)",
  "type": "string"
};
const pattern4 = new RegExp("^2\\d{3}(?::2\\d{3}|$)", "u");
function validate128(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern4.test(data)) {
      const err0 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^2\\d{3}(?::2\\d{3}|$)"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
  } else {
    const err1 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate128.errors = vErrors;
  return errors === 0;
}
function validate127(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate128(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate128.errors : vErrors.concat(validate128.errors);
        errors = vErrors.length;
      }
    }
  }
  validate127.errors = vErrors;
  return errors === 0;
}
function validate106(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.daysOfMonth !== undefined) {
      if (!validate107(data.daysOfMonth, {
        instancePath: instancePath + "/daysOfMonth",
        parentData: data,
        parentDataProperty: "daysOfMonth",
        rootData
      })) {
        vErrors = vErrors === null ? validate107.errors : vErrors.concat(validate107.errors);
        errors = vErrors.length;
      }
    }
    if (data.months !== undefined) {
      if (!validate113(data.months, {
        instancePath: instancePath + "/months",
        parentData: data,
        parentDataProperty: "months",
        rootData
      })) {
        vErrors = vErrors === null ? validate113.errors : vErrors.concat(validate113.errors);
        errors = vErrors.length;
      }
    }
    if (data.times !== undefined) {
      if (!validate117(data.times, {
        instancePath: instancePath + "/times",
        parentData: data,
        parentDataProperty: "times",
        rootData
      })) {
        vErrors = vErrors === null ? validate117.errors : vErrors.concat(validate117.errors);
        errors = vErrors.length;
      }
    }
    if (data.weekdays !== undefined) {
      if (!validate123(data.weekdays, {
        instancePath: instancePath + "/weekdays",
        parentData: data,
        parentDataProperty: "weekdays",
        rootData
      })) {
        vErrors = vErrors === null ? validate123.errors : vErrors.concat(validate123.errors);
        errors = vErrors.length;
      }
    }
    if (data.years !== undefined) {
      if (!validate127(data.years, {
        instancePath: instancePath + "/years",
        parentData: data,
        parentDataProperty: "years",
        rootData
      })) {
        vErrors = vErrors === null ? validate127.errors : vErrors.concat(validate127.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate106.errors = vErrors;
  return errors === 0;
}
function validate105(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate106(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate106.errors : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
  }
  validate105.errors = vErrors;
  return errors === 0;
}
function validate103(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name !== undefined) {
      if (!validate29(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeIntervals !== undefined) {
      if (!validate105(data.timeIntervals, {
        instancePath: instancePath + "/timeIntervals",
        parentData: data,
        parentDataProperty: "timeIntervals",
        rootData
      })) {
        vErrors = vErrors === null ? validate105.errors : vErrors.concat(validate105.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate103.errors = vErrors;
  return errors === 0;
}
function validate102(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate103(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
        errors = vErrors.length;
      }
    }
  }
  validate102.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  "items": {
    "$ref": "7ZuJCyyAFhGIOayIkWnJ2wESNTraK9rIO432L1d3wQg"
  },
  "type": "array",
  "nullable": true
};
const schema52 = {
  "properties": {
    "emailConfigs": {
      "$ref": "we76Go0jFNO1SdlN9Isjio6BE37Rq8ek3LzSWqcIE"
    },
    "name": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    },
    "opsgenieConfigs": {
      "$ref": "6404dC6oWrdkn1zshphqyH9hdgIgbsUOz4QzsV1ngG0"
    },
    "pagerdutyConfigs": {
      "$ref": "foINnyrDYG8DNmwPwi4yLINc02tnXvjyGDVN6ruYtY"
    },
    "pushoverConfigs": {
      "$ref": "UHCqJPsBgSi5mcQNDS3a2rOaXSCKjzQOMembCHHMSs"
    },
    "slackConfigs": {
      "$ref": "MO18d0NFrei9QehKgu40A4zuZ4qXKGeqDwNU1omkw"
    },
    "snsConfigs": {
      "$ref": "dQ05ViYgtCmoXvNFb5RQhY4lFBbC4mbKCwU6BVhtKpE"
    },
    "telegramConfigs": {
      "$ref": "qCHm9rdhGWTgFnKxQQhJTBdiz5Zpiq50kU7igR5v4"
    },
    "victoropsConfigs": {
      "$ref": "9TP1odfe8U93ti5tDcvkEUL1ltvDHSPTmikcgJP4Pc"
    },
    "webhookConfigs": {
      "$ref": "TsoEhcbVppucPtALmZWhnYDyerbiO0T7z9hLfKu5u8"
    },
    "wechatConfigs": {
      "$ref": "QlLUEOrrciDGu9GXivE4te43fBi7gsHLhJzcFhpowo"
    }
  },
  "required": ["name"],
  "type": "object"
};
const schema53 = {
  "items": {
    "$ref": "DLfeUQivXd6Unyk4qsiLr13ZQMxCoq1wMchmsNVAQ"
  },
  "type": "array",
  "nullable": true
};
const schema54 = {
  "properties": {
    "authIdentity": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "authPassword": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "authSecret": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "authUsername": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "from": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "headers": {
      "$ref": "JjPj7iEt7JmGfNPipq28Q1wcwFfTpJisMIF2WWQmw8"
    },
    "hello": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "html": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "requireTLS": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "sendResolved": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "smarthost": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "text": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tlsConfig": {
      "$ref": "ixhHXAh6v4Ajt7eaeukNWsSRnCVySp9C3DECSXKnzBI"
    },
    "to": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
const schema15 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["key"],
  "type": "object",
  "nullable": true
};
function validate35(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.key === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "key"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.key !== undefined) {
      if (!validate34(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate29(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.optional !== undefined) {
      if (!validate27(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  }
  validate35.errors = vErrors;
  return errors === 0;
}
const schema17 = {
  "items": {
    "$ref": "ItfnTGttFwoUepX7pALoZw1YflJyzOBmMbwCxXpv90"
  },
  "type": "array",
  "nullable": true
};
const schema18 = {
  "properties": {
    "key": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    },
    "value": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["key", "value"],
  "type": "object"
};
function validate43(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.key === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "key"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.value === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "value"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.key !== undefined) {
      if (!validate25(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate34(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err2 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  validate43.errors = vErrors;
  return errors === 0;
}
function validate42(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate43(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
  }
  validate42.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  "properties": {
    "ca": {
      "$ref": "gU7QkFFGilSOcADaLu9w4rwvKiuQOHSSu6I5l3j3A"
    },
    "cert": {
      "$ref": "gU7QkFFGilSOcADaLu9w4rwvKiuQOHSSu6I5l3j3A"
    },
    "insecureSkipVerify": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "keySecret": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "serverName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema16 = {
  "properties": {
    "configMap": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "secret": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    }
  },
  "type": "object",
  "nullable": true
};
function validate39(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.configMap !== undefined) {
      if (!validate35(data.configMap, {
        instancePath: instancePath + "/configMap",
        parentData: data,
        parentDataProperty: "configMap",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.secret !== undefined) {
      if (!validate35(data.secret, {
        instancePath: instancePath + "/secret",
        parentData: data,
        parentDataProperty: "secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  }
  validate39.errors = vErrors;
  return errors === 0;
}
function validate49(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.ca !== undefined) {
      if (!validate39(data.ca, {
        instancePath: instancePath + "/ca",
        parentData: data,
        parentDataProperty: "ca",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.cert !== undefined) {
      if (!validate39(data.cert, {
        instancePath: instancePath + "/cert",
        parentData: data,
        parentDataProperty: "cert",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.insecureSkipVerify !== undefined) {
      if (!validate27(data.insecureSkipVerify, {
        instancePath: instancePath + "/insecureSkipVerify",
        parentData: data,
        parentDataProperty: "insecureSkipVerify",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.keySecret !== undefined) {
      if (!validate35(data.keySecret, {
        instancePath: instancePath + "/keySecret",
        parentData: data,
        parentDataProperty: "keySecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.serverName !== undefined) {
      if (!validate29(data.serverName, {
        instancePath: instancePath + "/serverName",
        parentData: data,
        parentDataProperty: "serverName",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate49.errors = vErrors;
  return errors === 0;
}
function validate138(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authIdentity !== undefined) {
      if (!validate29(data.authIdentity, {
        instancePath: instancePath + "/authIdentity",
        parentData: data,
        parentDataProperty: "authIdentity",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.authPassword !== undefined) {
      if (!validate35(data.authPassword, {
        instancePath: instancePath + "/authPassword",
        parentData: data,
        parentDataProperty: "authPassword",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.authSecret !== undefined) {
      if (!validate35(data.authSecret, {
        instancePath: instancePath + "/authSecret",
        parentData: data,
        parentDataProperty: "authSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.authUsername !== undefined) {
      if (!validate29(data.authUsername, {
        instancePath: instancePath + "/authUsername",
        parentData: data,
        parentDataProperty: "authUsername",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.from !== undefined) {
      if (!validate29(data.from, {
        instancePath: instancePath + "/from",
        parentData: data,
        parentDataProperty: "from",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.headers !== undefined) {
      if (!validate42(data.headers, {
        instancePath: instancePath + "/headers",
        parentData: data,
        parentDataProperty: "headers",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.hello !== undefined) {
      if (!validate29(data.hello, {
        instancePath: instancePath + "/hello",
        parentData: data,
        parentDataProperty: "hello",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.html !== undefined) {
      if (!validate29(data.html, {
        instancePath: instancePath + "/html",
        parentData: data,
        parentDataProperty: "html",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.requireTLS !== undefined) {
      if (!validate27(data.requireTLS, {
        instancePath: instancePath + "/requireTLS",
        parentData: data,
        parentDataProperty: "requireTLS",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.sendResolved !== undefined) {
      if (!validate27(data.sendResolved, {
        instancePath: instancePath + "/sendResolved",
        parentData: data,
        parentDataProperty: "sendResolved",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.smarthost !== undefined) {
      if (!validate29(data.smarthost, {
        instancePath: instancePath + "/smarthost",
        parentData: data,
        parentDataProperty: "smarthost",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.text !== undefined) {
      if (!validate29(data.text, {
        instancePath: instancePath + "/text",
        parentData: data,
        parentDataProperty: "text",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.tlsConfig !== undefined) {
      if (!validate49(data.tlsConfig, {
        instancePath: instancePath + "/tlsConfig",
        parentData: data,
        parentDataProperty: "tlsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
        errors = vErrors.length;
      }
    }
    if (data.to !== undefined) {
      if (!validate29(data.to, {
        instancePath: instancePath + "/to",
        parentData: data,
        parentDataProperty: "to",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate138.errors = vErrors;
  return errors === 0;
}
function validate137(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate138(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate138.errors : vErrors.concat(validate138.errors);
        errors = vErrors.length;
      }
    }
  }
  validate137.errors = vErrors;
  return errors === 0;
}
const schema55 = {
  "items": {
    "$ref": "goT04evYoe5AJOjtw6ry4oAXJgj3LjMcRz7VEFIQlHI"
  },
  "type": "array",
  "nullable": true
};
const schema56 = {
  "properties": {
    "actions": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "apiKey": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "apiURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "details": {
      "$ref": "JjPj7iEt7JmGfNPipq28Q1wcwFfTpJisMIF2WWQmw8"
    },
    "entity": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "httpConfig": {
      "$ref": "YCnTnkrOIEomJKXzafyQruGU39SYKV2Digycvwsq8w0"
    },
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "note": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "priority": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "responders": {
      "$ref": "x9xMz6DsewP8xO4Z3uvxdA6SgLZ7NXw0XQU0RpXbT0"
    },
    "sendResolved": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "source": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tags": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "updateAlerts": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object"
};
const schema21 = {
  "properties": {
    "authorization": {
      "$ref": "OjrmMuJ5pz9Py1eqvOMQqOjYkJZmjapgZA0j88211SI"
    },
    "basicAuth": {
      "$ref": "ebkl7P75BnQrBplJSgYwUby6UsUzeUHpcVDEPeT6Do"
    },
    "bearerTokenSecret": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "followRedirects": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "oauth2": {
      "$ref": "j317tXMqbHtj5IljBsfGxH0zEKLY94ubUEUSliIiik"
    },
    "proxyURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tlsConfig": {
      "$ref": "ixhHXAh6v4Ajt7eaeukNWsSRnCVySp9C3DECSXKnzBI"
    }
  },
  "type": "object",
  "nullable": true
};
const schema22 = {
  "properties": {
    "credentials": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate56(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.credentials !== undefined) {
      if (!validate35(data.credentials, {
        instancePath: instancePath + "/credentials",
        parentData: data,
        parentDataProperty: "credentials",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate29(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate56.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  "properties": {
    "password": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "username": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    }
  },
  "type": "object",
  "nullable": true
};
function validate60(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.password !== undefined) {
      if (!validate35(data.password, {
        instancePath: instancePath + "/password",
        parentData: data,
        parentDataProperty: "password",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.username !== undefined) {
      if (!validate35(data.username, {
        instancePath: instancePath + "/username",
        parentData: data,
        parentDataProperty: "username",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  }
  validate60.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "properties": {
    "clientId": {
      "$ref": "I1DdgZa7UvcSeK697zJBqOWTPxPPlWWtDhffT6AX34c"
    },
    "clientSecret": {
      "$ref": "wwQHHesby68vv0NOPJZjmrVDDO2bhXDWQlSKxPoTE"
    },
    "endpointParams": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "scopes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "tokenUrl": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    }
  },
  "required": ["clientId", "clientSecret", "tokenUrl"],
  "type": "object",
  "nullable": true
};
const schema25 = {
  "properties": {
    "configMap": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "secret": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    }
  },
  "type": "object"
};
function validate67(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.configMap !== undefined) {
      if (!validate35(data.configMap, {
        instancePath: instancePath + "/configMap",
        parentData: data,
        parentDataProperty: "configMap",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.secret !== undefined) {
      if (!validate35(data.secret, {
        instancePath: instancePath + "/secret",
        parentData: data,
        parentDataProperty: "secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate67.errors = vErrors;
  return errors === 0;
}
const schema26 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["key"],
  "type": "object"
};
function validate71(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.key === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "key"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.key !== undefined) {
      if (!validate34(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate29(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.optional !== undefined) {
      if (!validate27(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err1 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate71.errors = vErrors;
  return errors === 0;
}
const schema27 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate76(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    for (const key0 in data) {
      if (!validate34(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
  }
  validate76.errors = vErrors;
  return errors === 0;
}
function validate66(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.clientId === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "clientId"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.clientSecret === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "clientSecret"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.tokenUrl === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "tokenUrl"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.clientId !== undefined) {
      if (!validate67(data.clientId, {
        instancePath: instancePath + "/clientId",
        parentData: data,
        parentDataProperty: "clientId",
        rootData
      })) {
        vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientSecret !== undefined) {
      if (!validate71(data.clientSecret, {
        instancePath: instancePath + "/clientSecret",
        parentData: data,
        parentDataProperty: "clientSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
        errors = vErrors.length;
      }
    }
    if (data.endpointParams !== undefined) {
      if (!validate76(data.endpointParams, {
        instancePath: instancePath + "/endpointParams",
        parentData: data,
        parentDataProperty: "endpointParams",
        rootData
      })) {
        vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
        errors = vErrors.length;
      }
    }
    if (data.scopes !== undefined) {
      if (!validate47(data.scopes, {
        instancePath: instancePath + "/scopes",
        parentData: data,
        parentDataProperty: "scopes",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
    if (data.tokenUrl !== undefined) {
      if (!validate25(data.tokenUrl, {
        instancePath: instancePath + "/tokenUrl",
        parentData: data,
        parentDataProperty: "tokenUrl",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate66.errors = vErrors;
  return errors === 0;
}
function validate55(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authorization !== undefined) {
      if (!validate56(data.authorization, {
        instancePath: instancePath + "/authorization",
        parentData: data,
        parentDataProperty: "authorization",
        rootData
      })) {
        vErrors = vErrors === null ? validate56.errors : vErrors.concat(validate56.errors);
        errors = vErrors.length;
      }
    }
    if (data.basicAuth !== undefined) {
      if (!validate60(data.basicAuth, {
        instancePath: instancePath + "/basicAuth",
        parentData: data,
        parentDataProperty: "basicAuth",
        rootData
      })) {
        vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
        errors = vErrors.length;
      }
    }
    if (data.bearerTokenSecret !== undefined) {
      if (!validate35(data.bearerTokenSecret, {
        instancePath: instancePath + "/bearerTokenSecret",
        parentData: data,
        parentDataProperty: "bearerTokenSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.followRedirects !== undefined) {
      if (!validate27(data.followRedirects, {
        instancePath: instancePath + "/followRedirects",
        parentData: data,
        parentDataProperty: "followRedirects",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.oauth2 !== undefined) {
      if (!validate66(data.oauth2, {
        instancePath: instancePath + "/oauth2",
        parentData: data,
        parentDataProperty: "oauth2",
        rootData
      })) {
        vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
        errors = vErrors.length;
      }
    }
    if (data.proxyURL !== undefined) {
      if (!validate29(data.proxyURL, {
        instancePath: instancePath + "/proxyURL",
        parentData: data,
        parentDataProperty: "proxyURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.tlsConfig !== undefined) {
      if (!validate49(data.tlsConfig, {
        instancePath: instancePath + "/tlsConfig",
        parentData: data,
        parentDataProperty: "tlsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
        errors = vErrors.length;
      }
    }
  }
  validate55.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  "items": {
    "$ref": "WDfod3vSN8iLhq65J6m3COjl4OQGAdSDHfawYdGNM"
  },
  "type": "array",
  "nullable": true
};
const schema58 = {
  "properties": {
    "id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "type": {
      "$ref": "OLHz1JqqcpuwlQaI85OHJYElSvNBJ2JWsyQ9jRPQ0Q"
    },
    "username": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["type"],
  "type": "object"
};
const schema59 = {
  "enum": ["team", "teams", "user", "escalation", "schedule"],
  "minLength": 1,
  "type": "string"
};
function validate171(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data === "team" || data === "teams" || data === "user" || data === "escalation" || data === "schedule")) {
    const err0 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema59.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (typeof data === "string") {
    if (func2(data) < 1) {
      const err1 = {
        instancePath,
        schemaPath: "#/minLength",
        keyword: "minLength",
        params: {
          limit: 1
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
  } else {
    const err2 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  validate171.errors = vErrors;
  return errors === 0;
}
function validate168(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.type === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "type"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.id !== undefined) {
      if (!validate29(data.id, {
        instancePath: instancePath + "/id",
        parentData: data,
        parentDataProperty: "id",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate29(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate171(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate171.errors : vErrors.concat(validate171.errors);
        errors = vErrors.length;
      }
    }
    if (data.username !== undefined) {
      if (!validate29(data.username, {
        instancePath: instancePath + "/username",
        parentData: data,
        parentDataProperty: "username",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err1 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate168.errors = vErrors;
  return errors === 0;
}
function validate167(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate168(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate168.errors : vErrors.concat(validate168.errors);
        errors = vErrors.length;
      }
    }
  }
  validate167.errors = vErrors;
  return errors === 0;
}
function validate157(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.actions !== undefined) {
      if (!validate29(data.actions, {
        instancePath: instancePath + "/actions",
        parentData: data,
        parentDataProperty: "actions",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.apiKey !== undefined) {
      if (!validate35(data.apiKey, {
        instancePath: instancePath + "/apiKey",
        parentData: data,
        parentDataProperty: "apiKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.apiURL !== undefined) {
      if (!validate29(data.apiURL, {
        instancePath: instancePath + "/apiURL",
        parentData: data,
        parentDataProperty: "apiURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.details !== undefined) {
      if (!validate42(data.details, {
        instancePath: instancePath + "/details",
        parentData: data,
        parentDataProperty: "details",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.entity !== undefined) {
      if (!validate29(data.entity, {
        instancePath: instancePath + "/entity",
        parentData: data,
        parentDataProperty: "entity",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpConfig !== undefined) {
      if (!validate55(data.httpConfig, {
        instancePath: instancePath + "/httpConfig",
        parentData: data,
        parentDataProperty: "httpConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate29(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.note !== undefined) {
      if (!validate29(data.note, {
        instancePath: instancePath + "/note",
        parentData: data,
        parentDataProperty: "note",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.priority !== undefined) {
      if (!validate29(data.priority, {
        instancePath: instancePath + "/priority",
        parentData: data,
        parentDataProperty: "priority",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.responders !== undefined) {
      if (!validate167(data.responders, {
        instancePath: instancePath + "/responders",
        parentData: data,
        parentDataProperty: "responders",
        rootData
      })) {
        vErrors = vErrors === null ? validate167.errors : vErrors.concat(validate167.errors);
        errors = vErrors.length;
      }
    }
    if (data.sendResolved !== undefined) {
      if (!validate27(data.sendResolved, {
        instancePath: instancePath + "/sendResolved",
        parentData: data,
        parentDataProperty: "sendResolved",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.source !== undefined) {
      if (!validate29(data.source, {
        instancePath: instancePath + "/source",
        parentData: data,
        parentDataProperty: "source",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.tags !== undefined) {
      if (!validate29(data.tags, {
        instancePath: instancePath + "/tags",
        parentData: data,
        parentDataProperty: "tags",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.updateAlerts !== undefined) {
      if (!validate27(data.updateAlerts, {
        instancePath: instancePath + "/updateAlerts",
        parentData: data,
        parentDataProperty: "updateAlerts",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate157.errors = vErrors;
  return errors === 0;
}
function validate156(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate157(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate157.errors : vErrors.concat(validate157.errors);
        errors = vErrors.length;
      }
    }
  }
  validate156.errors = vErrors;
  return errors === 0;
}
const schema60 = {
  "items": {
    "$ref": "4iPtoPgZPov15CzPJI33E05FXfvZnwnSJONkp8o"
  },
  "type": "array",
  "nullable": true
};
const schema61 = {
  "properties": {
    "class": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "client": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "clientURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "component": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "details": {
      "$ref": "JjPj7iEt7JmGfNPipq28Q1wcwFfTpJisMIF2WWQmw8"
    },
    "group": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "httpConfig": {
      "$ref": "YCnTnkrOIEomJKXzafyQruGU39SYKV2Digycvwsq8w0"
    },
    "pagerDutyImageConfigs": {
      "$ref": "D9f0PGTOgj86t6ZjVm5Ql9WIwm9JUWtsRAjhixwpzsI"
    },
    "pagerDutyLinkConfigs": {
      "$ref": "n7J8bC7BSrCNvPf1nnK2OD6ouSTTkEVDUB3eRcD40"
    },
    "routingKey": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "sendResolved": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "serviceKey": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "severity": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "url": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
const schema62 = {
  "items": {
    "$ref": "19rn0PJYxXD2Cz1biruimh6KTW6koHP2UGKNa0lE4"
  },
  "type": "array",
  "nullable": true
};
const schema63 = {
  "properties": {
    "alt": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "href": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "src": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate192(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.alt !== undefined) {
      if (!validate29(data.alt, {
        instancePath: instancePath + "/alt",
        parentData: data,
        parentDataProperty: "alt",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.href !== undefined) {
      if (!validate29(data.href, {
        instancePath: instancePath + "/href",
        parentData: data,
        parentDataProperty: "href",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.src !== undefined) {
      if (!validate29(data.src, {
        instancePath: instancePath + "/src",
        parentData: data,
        parentDataProperty: "src",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate192.errors = vErrors;
  return errors === 0;
}
function validate191(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate192(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate192.errors : vErrors.concat(validate192.errors);
        errors = vErrors.length;
      }
    }
  }
  validate191.errors = vErrors;
  return errors === 0;
}
const schema64 = {
  "items": {
    "$ref": "f59zgLM8TyZZdtqML56FjSes3Ozng4uBqu6wLOROsD8"
  },
  "type": "array",
  "nullable": true
};
const schema65 = {
  "properties": {
    "alt": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "href": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate199(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.alt !== undefined) {
      if (!validate29(data.alt, {
        instancePath: instancePath + "/alt",
        parentData: data,
        parentDataProperty: "alt",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.href !== undefined) {
      if (!validate29(data.href, {
        instancePath: instancePath + "/href",
        parentData: data,
        parentDataProperty: "href",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate199.errors = vErrors;
  return errors === 0;
}
function validate198(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate199(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate199.errors : vErrors.concat(validate199.errors);
        errors = vErrors.length;
      }
    }
  }
  validate198.errors = vErrors;
  return errors === 0;
}
function validate183(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.class !== undefined) {
      if (!validate29(data.class, {
        instancePath: instancePath + "/class",
        parentData: data,
        parentDataProperty: "class",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.client !== undefined) {
      if (!validate29(data.client, {
        instancePath: instancePath + "/client",
        parentData: data,
        parentDataProperty: "client",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientURL !== undefined) {
      if (!validate29(data.clientURL, {
        instancePath: instancePath + "/clientURL",
        parentData: data,
        parentDataProperty: "clientURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.component !== undefined) {
      if (!validate29(data.component, {
        instancePath: instancePath + "/component",
        parentData: data,
        parentDataProperty: "component",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.details !== undefined) {
      if (!validate42(data.details, {
        instancePath: instancePath + "/details",
        parentData: data,
        parentDataProperty: "details",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.group !== undefined) {
      if (!validate29(data.group, {
        instancePath: instancePath + "/group",
        parentData: data,
        parentDataProperty: "group",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpConfig !== undefined) {
      if (!validate55(data.httpConfig, {
        instancePath: instancePath + "/httpConfig",
        parentData: data,
        parentDataProperty: "httpConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.pagerDutyImageConfigs !== undefined) {
      if (!validate191(data.pagerDutyImageConfigs, {
        instancePath: instancePath + "/pagerDutyImageConfigs",
        parentData: data,
        parentDataProperty: "pagerDutyImageConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate191.errors : vErrors.concat(validate191.errors);
        errors = vErrors.length;
      }
    }
    if (data.pagerDutyLinkConfigs !== undefined) {
      if (!validate198(data.pagerDutyLinkConfigs, {
        instancePath: instancePath + "/pagerDutyLinkConfigs",
        parentData: data,
        parentDataProperty: "pagerDutyLinkConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate198.errors : vErrors.concat(validate198.errors);
        errors = vErrors.length;
      }
    }
    if (data.routingKey !== undefined) {
      if (!validate35(data.routingKey, {
        instancePath: instancePath + "/routingKey",
        parentData: data,
        parentDataProperty: "routingKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.sendResolved !== undefined) {
      if (!validate27(data.sendResolved, {
        instancePath: instancePath + "/sendResolved",
        parentData: data,
        parentDataProperty: "sendResolved",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceKey !== undefined) {
      if (!validate35(data.serviceKey, {
        instancePath: instancePath + "/serviceKey",
        parentData: data,
        parentDataProperty: "serviceKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.severity !== undefined) {
      if (!validate29(data.severity, {
        instancePath: instancePath + "/severity",
        parentData: data,
        parentDataProperty: "severity",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate29(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate183.errors = vErrors;
  return errors === 0;
}
function validate182(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate183(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate183.errors : vErrors.concat(validate183.errors);
        errors = vErrors.length;
      }
    }
  }
  validate182.errors = vErrors;
  return errors === 0;
}
const schema66 = {
  "items": {
    "$ref": "7ZWhi7uZHE1D3TsucWkvoUVAmbJwGGbwvMbH2Oo8JU"
  },
  "type": "array",
  "nullable": true
};
const schema67 = {
  "properties": {
    "expire": {
      "$ref": "qkBGZvv0vsrMOfBOnUwXGUMfNLC2UpLNrMccLdyQc"
    },
    "html": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "httpConfig": {
      "$ref": "YCnTnkrOIEomJKXzafyQruGU39SYKV2Digycvwsq8w0"
    },
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "priority": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "retry": {
      "$ref": "qkBGZvv0vsrMOfBOnUwXGUMfNLC2UpLNrMccLdyQc"
    },
    "sendResolved": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "sound": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "title": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "token": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "url": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "urlTitle": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "userKey": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    }
  },
  "type": "object"
};
const schema28 = {
  "pattern": "^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$",
  "type": "string",
  "nullable": true
};
const pattern1 = new RegExp("^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$", "u");
function validate84(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string" && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (typeof data === "string") {
    if (!pattern1.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
  }
  validate84.errors = vErrors;
  return errors === 0;
}
function validate212(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.expire !== undefined) {
      if (!validate84(data.expire, {
        instancePath: instancePath + "/expire",
        parentData: data,
        parentDataProperty: "expire",
        rootData
      })) {
        vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
        errors = vErrors.length;
      }
    }
    if (data.html !== undefined) {
      if (!validate27(data.html, {
        instancePath: instancePath + "/html",
        parentData: data,
        parentDataProperty: "html",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpConfig !== undefined) {
      if (!validate55(data.httpConfig, {
        instancePath: instancePath + "/httpConfig",
        parentData: data,
        parentDataProperty: "httpConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate29(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.priority !== undefined) {
      if (!validate29(data.priority, {
        instancePath: instancePath + "/priority",
        parentData: data,
        parentDataProperty: "priority",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.retry !== undefined) {
      if (!validate84(data.retry, {
        instancePath: instancePath + "/retry",
        parentData: data,
        parentDataProperty: "retry",
        rootData
      })) {
        vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
        errors = vErrors.length;
      }
    }
    if (data.sendResolved !== undefined) {
      if (!validate27(data.sendResolved, {
        instancePath: instancePath + "/sendResolved",
        parentData: data,
        parentDataProperty: "sendResolved",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.sound !== undefined) {
      if (!validate29(data.sound, {
        instancePath: instancePath + "/sound",
        parentData: data,
        parentDataProperty: "sound",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.title !== undefined) {
      if (!validate29(data.title, {
        instancePath: instancePath + "/title",
        parentData: data,
        parentDataProperty: "title",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.token !== undefined) {
      if (!validate35(data.token, {
        instancePath: instancePath + "/token",
        parentData: data,
        parentDataProperty: "token",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate29(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.urlTitle !== undefined) {
      if (!validate29(data.urlTitle, {
        instancePath: instancePath + "/urlTitle",
        parentData: data,
        parentDataProperty: "urlTitle",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.userKey !== undefined) {
      if (!validate35(data.userKey, {
        instancePath: instancePath + "/userKey",
        parentData: data,
        parentDataProperty: "userKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate212.errors = vErrors;
  return errors === 0;
}
function validate211(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate212(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate212.errors : vErrors.concat(validate212.errors);
        errors = vErrors.length;
      }
    }
  }
  validate211.errors = vErrors;
  return errors === 0;
}
const schema68 = {
  "items": {
    "$ref": "kx97HeA2qBSdVHWinTqCLtVV2ZRiYO2R4cq6FQ90"
  },
  "type": "array",
  "nullable": true
};
const schema69 = {
  "properties": {
    "actions": {
      "$ref": "hzeReolEVhMfapmWHe0UfUq7mXDpLjB1HQZHA9K9nE"
    },
    "apiURL": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "callbackId": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "channel": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "color": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "fallback": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "fields": {
      "$ref": "xqOntieaDEEqUSxNOlSy2TQhTnYo03T1zbMoRLM1rA"
    },
    "footer": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "httpConfig": {
      "$ref": "YCnTnkrOIEomJKXzafyQruGU39SYKV2Digycvwsq8w0"
    },
    "iconEmoji": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "iconURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "imageURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "linkNames": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "mrkdwnIn": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "pretext": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "sendResolved": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "shortFields": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "text": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "thumbURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "title": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "titleLink": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "username": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
const schema70 = {
  "items": {
    "$ref": "oD60imEt2aiXbujeQwxT4ZwRoo9kSWpn612WAxs"
  },
  "type": "array",
  "nullable": true
};
const schema71 = {
  "properties": {
    "confirm": {
      "$ref": "GX8F7AaGyp7tK6SHBGr0XN5w0Ww8yIOrkFjActSR1E"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "style": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "text": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    },
    "type": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    },
    "url": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["text", "type"],
  "type": "object"
};
const schema72 = {
  "properties": {
    "dismissText": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "okText": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "text": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    },
    "title": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["text"],
  "type": "object",
  "nullable": true
};
function validate232(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.text === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "text"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.dismissText !== undefined) {
      if (!validate29(data.dismissText, {
        instancePath: instancePath + "/dismissText",
        parentData: data,
        parentDataProperty: "dismissText",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.okText !== undefined) {
      if (!validate29(data.okText, {
        instancePath: instancePath + "/okText",
        parentData: data,
        parentDataProperty: "okText",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.text !== undefined) {
      if (!validate25(data.text, {
        instancePath: instancePath + "/text",
        parentData: data,
        parentDataProperty: "text",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.title !== undefined) {
      if (!validate29(data.title, {
        instancePath: instancePath + "/title",
        parentData: data,
        parentDataProperty: "title",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate232.errors = vErrors;
  return errors === 0;
}
function validate231(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.text === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "text"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.type === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "type"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.confirm !== undefined) {
      if (!validate232(data.confirm, {
        instancePath: instancePath + "/confirm",
        parentData: data,
        parentDataProperty: "confirm",
        rootData
      })) {
        vErrors = vErrors === null ? validate232.errors : vErrors.concat(validate232.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate29(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.style !== undefined) {
      if (!validate29(data.style, {
        instancePath: instancePath + "/style",
        parentData: data,
        parentDataProperty: "style",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.text !== undefined) {
      if (!validate25(data.text, {
        instancePath: instancePath + "/text",
        parentData: data,
        parentDataProperty: "text",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate25(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate29(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate29(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err2 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  validate231.errors = vErrors;
  return errors === 0;
}
function validate230(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate231(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate231.errors : vErrors.concat(validate231.errors);
        errors = vErrors.length;
      }
    }
  }
  validate230.errors = vErrors;
  return errors === 0;
}
const schema73 = {
  "items": {
    "$ref": "UWwA71NNsp2RZ9PiRI4NAav959j82bjvNWnyLR0J4"
  },
  "type": "array",
  "nullable": true
};
const schema74 = {
  "properties": {
    "short": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "title": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    },
    "value": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    }
  },
  "required": ["title", "value"],
  "type": "object"
};
function validate252(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.title === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "title"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.value === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "value"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.short !== undefined) {
      if (!validate27(data.short, {
        instancePath: instancePath + "/short",
        parentData: data,
        parentDataProperty: "short",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.title !== undefined) {
      if (!validate25(data.title, {
        instancePath: instancePath + "/title",
        parentData: data,
        parentDataProperty: "title",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate25(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err2 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  validate252.errors = vErrors;
  return errors === 0;
}
function validate251(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate252(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate252.errors : vErrors.concat(validate252.errors);
        errors = vErrors.length;
      }
    }
  }
  validate251.errors = vErrors;
  return errors === 0;
}
function validate229(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.actions !== undefined) {
      if (!validate230(data.actions, {
        instancePath: instancePath + "/actions",
        parentData: data,
        parentDataProperty: "actions",
        rootData
      })) {
        vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
        errors = vErrors.length;
      }
    }
    if (data.apiURL !== undefined) {
      if (!validate35(data.apiURL, {
        instancePath: instancePath + "/apiURL",
        parentData: data,
        parentDataProperty: "apiURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.callbackId !== undefined) {
      if (!validate29(data.callbackId, {
        instancePath: instancePath + "/callbackId",
        parentData: data,
        parentDataProperty: "callbackId",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.channel !== undefined) {
      if (!validate29(data.channel, {
        instancePath: instancePath + "/channel",
        parentData: data,
        parentDataProperty: "channel",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.color !== undefined) {
      if (!validate29(data.color, {
        instancePath: instancePath + "/color",
        parentData: data,
        parentDataProperty: "color",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.fallback !== undefined) {
      if (!validate29(data.fallback, {
        instancePath: instancePath + "/fallback",
        parentData: data,
        parentDataProperty: "fallback",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.fields !== undefined) {
      if (!validate251(data.fields, {
        instancePath: instancePath + "/fields",
        parentData: data,
        parentDataProperty: "fields",
        rootData
      })) {
        vErrors = vErrors === null ? validate251.errors : vErrors.concat(validate251.errors);
        errors = vErrors.length;
      }
    }
    if (data.footer !== undefined) {
      if (!validate29(data.footer, {
        instancePath: instancePath + "/footer",
        parentData: data,
        parentDataProperty: "footer",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpConfig !== undefined) {
      if (!validate55(data.httpConfig, {
        instancePath: instancePath + "/httpConfig",
        parentData: data,
        parentDataProperty: "httpConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.iconEmoji !== undefined) {
      if (!validate29(data.iconEmoji, {
        instancePath: instancePath + "/iconEmoji",
        parentData: data,
        parentDataProperty: "iconEmoji",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.iconURL !== undefined) {
      if (!validate29(data.iconURL, {
        instancePath: instancePath + "/iconURL",
        parentData: data,
        parentDataProperty: "iconURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.imageURL !== undefined) {
      if (!validate29(data.imageURL, {
        instancePath: instancePath + "/imageURL",
        parentData: data,
        parentDataProperty: "imageURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.linkNames !== undefined) {
      if (!validate27(data.linkNames, {
        instancePath: instancePath + "/linkNames",
        parentData: data,
        parentDataProperty: "linkNames",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.mrkdwnIn !== undefined) {
      if (!validate47(data.mrkdwnIn, {
        instancePath: instancePath + "/mrkdwnIn",
        parentData: data,
        parentDataProperty: "mrkdwnIn",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
    if (data.pretext !== undefined) {
      if (!validate29(data.pretext, {
        instancePath: instancePath + "/pretext",
        parentData: data,
        parentDataProperty: "pretext",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.sendResolved !== undefined) {
      if (!validate27(data.sendResolved, {
        instancePath: instancePath + "/sendResolved",
        parentData: data,
        parentDataProperty: "sendResolved",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.shortFields !== undefined) {
      if (!validate27(data.shortFields, {
        instancePath: instancePath + "/shortFields",
        parentData: data,
        parentDataProperty: "shortFields",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.text !== undefined) {
      if (!validate29(data.text, {
        instancePath: instancePath + "/text",
        parentData: data,
        parentDataProperty: "text",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.thumbURL !== undefined) {
      if (!validate29(data.thumbURL, {
        instancePath: instancePath + "/thumbURL",
        parentData: data,
        parentDataProperty: "thumbURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.title !== undefined) {
      if (!validate29(data.title, {
        instancePath: instancePath + "/title",
        parentData: data,
        parentDataProperty: "title",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.titleLink !== undefined) {
      if (!validate29(data.titleLink, {
        instancePath: instancePath + "/titleLink",
        parentData: data,
        parentDataProperty: "titleLink",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.username !== undefined) {
      if (!validate29(data.username, {
        instancePath: instancePath + "/username",
        parentData: data,
        parentDataProperty: "username",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate229.errors = vErrors;
  return errors === 0;
}
function validate228(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate229(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate229.errors : vErrors.concat(validate229.errors);
        errors = vErrors.length;
      }
    }
  }
  validate228.errors = vErrors;
  return errors === 0;
}
const schema75 = {
  "items": {
    "$ref": "3tllAyrLv7CRDykEjWNlINsYkWPJsFDc8Mb18rdxs"
  },
  "type": "array",
  "nullable": true
};
const schema76 = {
  "properties": {
    "apiURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "attributes": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "httpConfig": {
      "$ref": "YCnTnkrOIEomJKXzafyQruGU39SYKV2Digycvwsq8w0"
    },
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "phoneNumber": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "sendResolved": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "sigv4": {
      "$ref": "FlHTqctEXckKmOnxTMhYFKndRK0yNhkucwdAKQMle2c"
    },
    "subject": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "targetARN": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "topicARN": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
const schema77 = {
  "properties": {
    "accessKey": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "profile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "region": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "roleArn": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretKey": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    }
  },
  "type": "object",
  "nullable": true
};
function validate283(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.accessKey !== undefined) {
      if (!validate35(data.accessKey, {
        instancePath: instancePath + "/accessKey",
        parentData: data,
        parentDataProperty: "accessKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.profile !== undefined) {
      if (!validate29(data.profile, {
        instancePath: instancePath + "/profile",
        parentData: data,
        parentDataProperty: "profile",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.region !== undefined) {
      if (!validate29(data.region, {
        instancePath: instancePath + "/region",
        parentData: data,
        parentDataProperty: "region",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.roleArn !== undefined) {
      if (!validate29(data.roleArn, {
        instancePath: instancePath + "/roleArn",
        parentData: data,
        parentDataProperty: "roleArn",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretKey !== undefined) {
      if (!validate35(data.secretKey, {
        instancePath: instancePath + "/secretKey",
        parentData: data,
        parentDataProperty: "secretKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  }
  validate283.errors = vErrors;
  return errors === 0;
}
function validate276(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.apiURL !== undefined) {
      if (!validate29(data.apiURL, {
        instancePath: instancePath + "/apiURL",
        parentData: data,
        parentDataProperty: "apiURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.attributes !== undefined) {
      if (!validate76(data.attributes, {
        instancePath: instancePath + "/attributes",
        parentData: data,
        parentDataProperty: "attributes",
        rootData
      })) {
        vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpConfig !== undefined) {
      if (!validate55(data.httpConfig, {
        instancePath: instancePath + "/httpConfig",
        parentData: data,
        parentDataProperty: "httpConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate29(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.phoneNumber !== undefined) {
      if (!validate29(data.phoneNumber, {
        instancePath: instancePath + "/phoneNumber",
        parentData: data,
        parentDataProperty: "phoneNumber",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.sendResolved !== undefined) {
      if (!validate27(data.sendResolved, {
        instancePath: instancePath + "/sendResolved",
        parentData: data,
        parentDataProperty: "sendResolved",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.sigv4 !== undefined) {
      if (!validate283(data.sigv4, {
        instancePath: instancePath + "/sigv4",
        parentData: data,
        parentDataProperty: "sigv4",
        rootData
      })) {
        vErrors = vErrors === null ? validate283.errors : vErrors.concat(validate283.errors);
        errors = vErrors.length;
      }
    }
    if (data.subject !== undefined) {
      if (!validate29(data.subject, {
        instancePath: instancePath + "/subject",
        parentData: data,
        parentDataProperty: "subject",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetARN !== undefined) {
      if (!validate29(data.targetARN, {
        instancePath: instancePath + "/targetARN",
        parentData: data,
        parentDataProperty: "targetARN",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.topicARN !== undefined) {
      if (!validate29(data.topicARN, {
        instancePath: instancePath + "/topicARN",
        parentData: data,
        parentDataProperty: "topicARN",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate276.errors = vErrors;
  return errors === 0;
}
function validate275(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate276(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate276.errors : vErrors.concat(validate276.errors);
        errors = vErrors.length;
      }
    }
  }
  validate275.errors = vErrors;
  return errors === 0;
}
const schema78 = {
  "items": {
    "$ref": "4Fld4LLKtuLTLTDWJ3oRa0c3Yx2LjgEy6zEhqzn7qA"
  },
  "type": "array",
  "nullable": true
};
const schema79 = {
  "properties": {
    "apiURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "botToken": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "chatID": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "disableNotifications": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "httpConfig": {
      "$ref": "YCnTnkrOIEomJKXzafyQruGU39SYKV2Digycvwsq8w0"
    },
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "parseMode": {
      "$ref": "ueqX5V9OLM38wW3JYDwbNrMQqGQulLCMasVAP6eCzs"
    },
    "sendResolved": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object"
};
const schema80 = {
  "format": "int64",
  "type": "integer",
  "nullable": true
};
const formats0 = formats.int64;
function validate299(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(typeof data == "number" && !(data % 1) && !isNaN(data) && isFinite(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "integer"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (typeof data == "number" && isFinite(data)) {
    if (!formats0.validate(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "int64"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
  }
  validate299.errors = vErrors;
  return errors === 0;
}
const schema81 = {
  "enum": ["MarkdownV2", "Markdown", "HTML"],
  "type": "string",
  "nullable": true
};
function validate304(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string" && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (!(data === "MarkdownV2" || data === "Markdown" || data === "HTML")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema81.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate304.errors = vErrors;
  return errors === 0;
}
function validate296(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.apiURL !== undefined) {
      if (!validate29(data.apiURL, {
        instancePath: instancePath + "/apiURL",
        parentData: data,
        parentDataProperty: "apiURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.botToken !== undefined) {
      if (!validate35(data.botToken, {
        instancePath: instancePath + "/botToken",
        parentData: data,
        parentDataProperty: "botToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.chatID !== undefined) {
      if (!validate299(data.chatID, {
        instancePath: instancePath + "/chatID",
        parentData: data,
        parentDataProperty: "chatID",
        rootData
      })) {
        vErrors = vErrors === null ? validate299.errors : vErrors.concat(validate299.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableNotifications !== undefined) {
      if (!validate27(data.disableNotifications, {
        instancePath: instancePath + "/disableNotifications",
        parentData: data,
        parentDataProperty: "disableNotifications",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpConfig !== undefined) {
      if (!validate55(data.httpConfig, {
        instancePath: instancePath + "/httpConfig",
        parentData: data,
        parentDataProperty: "httpConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate29(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.parseMode !== undefined) {
      if (!validate304(data.parseMode, {
        instancePath: instancePath + "/parseMode",
        parentData: data,
        parentDataProperty: "parseMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate304.errors : vErrors.concat(validate304.errors);
        errors = vErrors.length;
      }
    }
    if (data.sendResolved !== undefined) {
      if (!validate27(data.sendResolved, {
        instancePath: instancePath + "/sendResolved",
        parentData: data,
        parentDataProperty: "sendResolved",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate296.errors = vErrors;
  return errors === 0;
}
function validate295(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate296(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate296.errors : vErrors.concat(validate296.errors);
        errors = vErrors.length;
      }
    }
  }
  validate295.errors = vErrors;
  return errors === 0;
}
const schema82 = {
  "items": {
    "$ref": "koZHDDiZNXDVTFpLUnrlnwJ4jWvz9eiMmepwm4aHRo"
  },
  "type": "array",
  "nullable": true
};
const schema83 = {
  "properties": {
    "apiKey": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "apiUrl": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "customFields": {
      "$ref": "JjPj7iEt7JmGfNPipq28Q1wcwFfTpJisMIF2WWQmw8"
    },
    "entityDisplayName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "httpConfig": {
      "$ref": "YCnTnkrOIEomJKXzafyQruGU39SYKV2Digycvwsq8w0"
    },
    "messageType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "monitoringTool": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "routingKey": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "sendResolved": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "stateMessage": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate310(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.apiKey !== undefined) {
      if (!validate35(data.apiKey, {
        instancePath: instancePath + "/apiKey",
        parentData: data,
        parentDataProperty: "apiKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.apiUrl !== undefined) {
      if (!validate29(data.apiUrl, {
        instancePath: instancePath + "/apiUrl",
        parentData: data,
        parentDataProperty: "apiUrl",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.customFields !== undefined) {
      if (!validate42(data.customFields, {
        instancePath: instancePath + "/customFields",
        parentData: data,
        parentDataProperty: "customFields",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.entityDisplayName !== undefined) {
      if (!validate29(data.entityDisplayName, {
        instancePath: instancePath + "/entityDisplayName",
        parentData: data,
        parentDataProperty: "entityDisplayName",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpConfig !== undefined) {
      if (!validate55(data.httpConfig, {
        instancePath: instancePath + "/httpConfig",
        parentData: data,
        parentDataProperty: "httpConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.messageType !== undefined) {
      if (!validate29(data.messageType, {
        instancePath: instancePath + "/messageType",
        parentData: data,
        parentDataProperty: "messageType",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.monitoringTool !== undefined) {
      if (!validate29(data.monitoringTool, {
        instancePath: instancePath + "/monitoringTool",
        parentData: data,
        parentDataProperty: "monitoringTool",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.routingKey !== undefined) {
      if (!validate29(data.routingKey, {
        instancePath: instancePath + "/routingKey",
        parentData: data,
        parentDataProperty: "routingKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.sendResolved !== undefined) {
      if (!validate27(data.sendResolved, {
        instancePath: instancePath + "/sendResolved",
        parentData: data,
        parentDataProperty: "sendResolved",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.stateMessage !== undefined) {
      if (!validate29(data.stateMessage, {
        instancePath: instancePath + "/stateMessage",
        parentData: data,
        parentDataProperty: "stateMessage",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate310.errors = vErrors;
  return errors === 0;
}
function validate309(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate310(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate310.errors : vErrors.concat(validate310.errors);
        errors = vErrors.length;
      }
    }
  }
  validate309.errors = vErrors;
  return errors === 0;
}
const schema84 = {
  "items": {
    "$ref": "95y6jmaxkL3R2DFQv0aTtAlMcrLsGMX0n994KQdDKRs"
  },
  "type": "array",
  "nullable": true
};
const schema85 = {
  "properties": {
    "httpConfig": {
      "$ref": "YCnTnkrOIEomJKXzafyQruGU39SYKV2Digycvwsq8w0"
    },
    "maxAlerts": {
      "$ref": "w5IhIKa86RwAovE05iaUbTTyUvDPPwDIMFk2QbV9s2w"
    },
    "sendResolved": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "url": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "urlSecret": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    }
  },
  "type": "object"
};
const schema86 = {
  "format": "int32",
  "type": "integer",
  "minimum": 0,
  "nullable": true
};
const formats2 = formats.int32;
function validate326(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(typeof data == "number" && !(data % 1) && !isNaN(data) && isFinite(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "integer"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (typeof data == "number" && isFinite(data)) {
    if (data < 0 || isNaN(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/minimum",
        keyword: "minimum",
        params: {
          comparison: ">=",
          limit: 0
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (!formats2.validate(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "int32"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  validate326.errors = vErrors;
  return errors === 0;
}
function validate324(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.httpConfig !== undefined) {
      if (!validate55(data.httpConfig, {
        instancePath: instancePath + "/httpConfig",
        parentData: data,
        parentDataProperty: "httpConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxAlerts !== undefined) {
      if (!validate326(data.maxAlerts, {
        instancePath: instancePath + "/maxAlerts",
        parentData: data,
        parentDataProperty: "maxAlerts",
        rootData
      })) {
        vErrors = vErrors === null ? validate326.errors : vErrors.concat(validate326.errors);
        errors = vErrors.length;
      }
    }
    if (data.sendResolved !== undefined) {
      if (!validate27(data.sendResolved, {
        instancePath: instancePath + "/sendResolved",
        parentData: data,
        parentDataProperty: "sendResolved",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate29(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.urlSecret !== undefined) {
      if (!validate35(data.urlSecret, {
        instancePath: instancePath + "/urlSecret",
        parentData: data,
        parentDataProperty: "urlSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate324.errors = vErrors;
  return errors === 0;
}
function validate323(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate324(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate324.errors : vErrors.concat(validate324.errors);
        errors = vErrors.length;
      }
    }
  }
  validate323.errors = vErrors;
  return errors === 0;
}
const schema87 = {
  "items": {
    "$ref": "nwBJGDvq1lrqrrxwnTDZ6XdDGYz4K1ghIC96XqImDJ4"
  },
  "type": "array",
  "nullable": true
};
const schema88 = {
  "properties": {
    "agentID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "apiSecret": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "apiURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "corpID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "httpConfig": {
      "$ref": "YCnTnkrOIEomJKXzafyQruGU39SYKV2Digycvwsq8w0"
    },
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "messageType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "sendResolved": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "toParty": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "toTag": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "toUser": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate334(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.agentID !== undefined) {
      if (!validate29(data.agentID, {
        instancePath: instancePath + "/agentID",
        parentData: data,
        parentDataProperty: "agentID",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.apiSecret !== undefined) {
      if (!validate35(data.apiSecret, {
        instancePath: instancePath + "/apiSecret",
        parentData: data,
        parentDataProperty: "apiSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.apiURL !== undefined) {
      if (!validate29(data.apiURL, {
        instancePath: instancePath + "/apiURL",
        parentData: data,
        parentDataProperty: "apiURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.corpID !== undefined) {
      if (!validate29(data.corpID, {
        instancePath: instancePath + "/corpID",
        parentData: data,
        parentDataProperty: "corpID",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpConfig !== undefined) {
      if (!validate55(data.httpConfig, {
        instancePath: instancePath + "/httpConfig",
        parentData: data,
        parentDataProperty: "httpConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate29(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.messageType !== undefined) {
      if (!validate29(data.messageType, {
        instancePath: instancePath + "/messageType",
        parentData: data,
        parentDataProperty: "messageType",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.sendResolved !== undefined) {
      if (!validate27(data.sendResolved, {
        instancePath: instancePath + "/sendResolved",
        parentData: data,
        parentDataProperty: "sendResolved",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.toParty !== undefined) {
      if (!validate29(data.toParty, {
        instancePath: instancePath + "/toParty",
        parentData: data,
        parentDataProperty: "toParty",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.toTag !== undefined) {
      if (!validate29(data.toTag, {
        instancePath: instancePath + "/toTag",
        parentData: data,
        parentDataProperty: "toTag",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.toUser !== undefined) {
      if (!validate29(data.toUser, {
        instancePath: instancePath + "/toUser",
        parentData: data,
        parentDataProperty: "toUser",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate334.errors = vErrors;
  return errors === 0;
}
function validate333(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate334(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate334.errors : vErrors.concat(validate334.errors);
        errors = vErrors.length;
      }
    }
  }
  validate333.errors = vErrors;
  return errors === 0;
}
function validate136(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.emailConfigs !== undefined) {
      if (!validate137(data.emailConfigs, {
        instancePath: instancePath + "/emailConfigs",
        parentData: data,
        parentDataProperty: "emailConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate137.errors : vErrors.concat(validate137.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate25(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.opsgenieConfigs !== undefined) {
      if (!validate156(data.opsgenieConfigs, {
        instancePath: instancePath + "/opsgenieConfigs",
        parentData: data,
        parentDataProperty: "opsgenieConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate156.errors : vErrors.concat(validate156.errors);
        errors = vErrors.length;
      }
    }
    if (data.pagerdutyConfigs !== undefined) {
      if (!validate182(data.pagerdutyConfigs, {
        instancePath: instancePath + "/pagerdutyConfigs",
        parentData: data,
        parentDataProperty: "pagerdutyConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate182.errors : vErrors.concat(validate182.errors);
        errors = vErrors.length;
      }
    }
    if (data.pushoverConfigs !== undefined) {
      if (!validate211(data.pushoverConfigs, {
        instancePath: instancePath + "/pushoverConfigs",
        parentData: data,
        parentDataProperty: "pushoverConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate211.errors : vErrors.concat(validate211.errors);
        errors = vErrors.length;
      }
    }
    if (data.slackConfigs !== undefined) {
      if (!validate228(data.slackConfigs, {
        instancePath: instancePath + "/slackConfigs",
        parentData: data,
        parentDataProperty: "slackConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate228.errors : vErrors.concat(validate228.errors);
        errors = vErrors.length;
      }
    }
    if (data.snsConfigs !== undefined) {
      if (!validate275(data.snsConfigs, {
        instancePath: instancePath + "/snsConfigs",
        parentData: data,
        parentDataProperty: "snsConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate275.errors : vErrors.concat(validate275.errors);
        errors = vErrors.length;
      }
    }
    if (data.telegramConfigs !== undefined) {
      if (!validate295(data.telegramConfigs, {
        instancePath: instancePath + "/telegramConfigs",
        parentData: data,
        parentDataProperty: "telegramConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate295.errors : vErrors.concat(validate295.errors);
        errors = vErrors.length;
      }
    }
    if (data.victoropsConfigs !== undefined) {
      if (!validate309(data.victoropsConfigs, {
        instancePath: instancePath + "/victoropsConfigs",
        parentData: data,
        parentDataProperty: "victoropsConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate309.errors : vErrors.concat(validate309.errors);
        errors = vErrors.length;
      }
    }
    if (data.webhookConfigs !== undefined) {
      if (!validate323(data.webhookConfigs, {
        instancePath: instancePath + "/webhookConfigs",
        parentData: data,
        parentDataProperty: "webhookConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate323.errors : vErrors.concat(validate323.errors);
        errors = vErrors.length;
      }
    }
    if (data.wechatConfigs !== undefined) {
      if (!validate333(data.wechatConfigs, {
        instancePath: instancePath + "/wechatConfigs",
        parentData: data,
        parentDataProperty: "wechatConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate333.errors : vErrors.concat(validate333.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err1 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate136.errors = vErrors;
  return errors === 0;
}
function validate135(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate136(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate136.errors : vErrors.concat(validate136.errors);
        errors = vErrors.length;
      }
    }
  }
  validate135.errors = vErrors;
  return errors === 0;
}
const schema89 = {
  "properties": {
    "continue": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "groupBy": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "groupInterval": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "groupWait": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "matchers": {
      "$ref": "5IGdYI0OKIfcQIDnWJZigWWN6D5p5BAbi9Cbr4avI"
    },
    "muteTimeIntervals": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "receiver": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "repeatInterval": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "routes": {
      "$ref": "4vimpaSaAcbaKw1RJxomsTbhIAjB9v0THuEAuAyUcc"
    }
  },
  "type": "object",
  "nullable": true
};
const schema90 = {
  "items": {
    "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
  },
  "type": "array",
  "nullable": true
};
const schema91 = {};
function validate360(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  validate360.errors = null;
  return true;
}
function validate359(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate360(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate360.errors : vErrors.concat(validate360.errors);
        errors = vErrors.length;
      }
    }
  }
  validate359.errors = vErrors;
  return errors === 0;
}
function validate350(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.continue !== undefined) {
      if (!validate27(data.continue, {
        instancePath: instancePath + "/continue",
        parentData: data,
        parentDataProperty: "continue",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.groupBy !== undefined) {
      if (!validate47(data.groupBy, {
        instancePath: instancePath + "/groupBy",
        parentData: data,
        parentDataProperty: "groupBy",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
    if (data.groupInterval !== undefined) {
      if (!validate29(data.groupInterval, {
        instancePath: instancePath + "/groupInterval",
        parentData: data,
        parentDataProperty: "groupInterval",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.groupWait !== undefined) {
      if (!validate29(data.groupWait, {
        instancePath: instancePath + "/groupWait",
        parentData: data,
        parentDataProperty: "groupWait",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchers !== undefined) {
      if (!validate21(data.matchers, {
        instancePath: instancePath + "/matchers",
        parentData: data,
        parentDataProperty: "matchers",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.muteTimeIntervals !== undefined) {
      if (!validate47(data.muteTimeIntervals, {
        instancePath: instancePath + "/muteTimeIntervals",
        parentData: data,
        parentDataProperty: "muteTimeIntervals",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
    if (data.receiver !== undefined) {
      if (!validate29(data.receiver, {
        instancePath: instancePath + "/receiver",
        parentData: data,
        parentDataProperty: "receiver",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.repeatInterval !== undefined) {
      if (!validate29(data.repeatInterval, {
        instancePath: instancePath + "/repeatInterval",
        parentData: data,
        parentDataProperty: "repeatInterval",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.routes !== undefined) {
      if (!validate359(data.routes, {
        instancePath: instancePath + "/routes",
        parentData: data,
        parentDataProperty: "routes",
        rootData
      })) {
        vErrors = vErrors === null ? validate359.errors : vErrors.concat(validate359.errors);
        errors = vErrors.length;
      }
    }
  }
  validate350.errors = vErrors;
  return errors === 0;
}
function validate94(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.inhibitRules !== undefined) {
      if (!validate95(data.inhibitRules, {
        instancePath: instancePath + "/inhibitRules",
        parentData: data,
        parentDataProperty: "inhibitRules",
        rootData
      })) {
        vErrors = vErrors === null ? validate95.errors : vErrors.concat(validate95.errors);
        errors = vErrors.length;
      }
    }
    if (data.muteTimeIntervals !== undefined) {
      if (!validate102(data.muteTimeIntervals, {
        instancePath: instancePath + "/muteTimeIntervals",
        parentData: data,
        parentDataProperty: "muteTimeIntervals",
        rootData
      })) {
        vErrors = vErrors === null ? validate102.errors : vErrors.concat(validate102.errors);
        errors = vErrors.length;
      }
    }
    if (data.receivers !== undefined) {
      if (!validate135(data.receivers, {
        instancePath: instancePath + "/receivers",
        parentData: data,
        parentDataProperty: "receivers",
        rootData
      })) {
        vErrors = vErrors === null ? validate135.errors : vErrors.concat(validate135.errors);
        errors = vErrors.length;
      }
    }
    if (data.route !== undefined) {
      if (!validate350(data.route, {
        instancePath: instancePath + "/route",
        parentData: data,
        parentDataProperty: "route",
        rootData
      })) {
        vErrors = vErrors === null ? validate350.errors : vErrors.concat(validate350.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate94.errors = vErrors;
  return errors === 0;
}
function validate85(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="monitoring.coreos.com.v1alpha1.AlertmanagerConfig" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.spec === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "spec"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.apiVersion === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "apiVersion"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.kind === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "kind"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.apiVersion !== undefined) {
      if (!validate86(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate86.errors : vErrors.concat(validate86.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate88(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate90(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate90.errors : vErrors.concat(validate90.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate94(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err3 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err3];
    } else {
      vErrors.push(err3);
    }
    errors++;
  }
  validate85.errors = vErrors;
  return errors === 0;
}