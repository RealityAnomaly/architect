import { formats } from "@kubernetes-models/validate";
export const validate = validate79;
const schema31 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "zBYP6354NdMY0CDCjv198HvPylLzqpTMWDeqP2tIC6k"
    },
    "kind": {
      "$ref": "xaDbVHxGID7XwSwLBLfb51nrhkmDYy4XRPGkFWGu4"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "pDjMjqhandk11f2ACOFWZhbIHhLjosexzcvsn8qzuM"
    },
    "status": {
      "$ref": "xt2pOiEbUB1xxk73VjIxQV3VpLYhMjabqkKkjMeNo"
    }
  },
  "required": ["apiVersion", "kind"],
  "$id": "external-secrets.io.v1beta1.ClusterSecretStore"
};
const schema32 = {
  "type": "string",
  "enum": ["external-secrets.io/v1beta1"]
};
function validate80(data, {
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
  if (!(data === "external-secrets.io/v1beta1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema32.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate80.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  "type": "string",
  "enum": ["ClusterSecretStore"]
};
function validate82(data, {
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
  if (!(data === "ClusterSecretStore")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema33.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate82.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema35 = {};
import { validate as validate85 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate84(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate85(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate85.errors : vErrors.concat(validate85.errors);
      errors = vErrors.length;
    }
  }
  validate84.errors = vErrors;
  return errors === 0;
}
const schema36 = {
  "properties": {
    "conditions": {
      "$ref": "n5CF3IYx5r2W6xF3DkeFbhbptFaohFnDgMdPSLWoBek"
    },
    "controller": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "provider": {
      "$ref": "iaU1gbXYO6kNL1wHk2PxBUlGFX9EEGotMwtDcxgAk4"
    },
    "refreshInterval": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "retrySettings": {
      "$ref": "DXfTBeo3h3vWonO7m5Z75IeCJs6YUppfXLkXVawcN0"
    }
  },
  "required": ["provider"],
  "type": "object",
  "nullable": true
};
const schema37 = {
  "items": {
    "$ref": "M9ey7JfqitmiP7Gzqem5ss2yWPfCo9wSZ45fq8v3Qs"
  },
  "type": "array",
  "nullable": true
};
const schema38 = {
  "properties": {
    "namespaceRegexes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "namespaceSelector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "namespaces": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object"
};
const schema7 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
  "nullable": true
};
const schema6 = {
  "type": "string"
};
function validate21(data, {
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
  validate21.errors = vErrors;
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
      if (!validate21(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate22.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  "properties": {
    "matchExpressions": {
      "$ref": "9BW0WuIp1SxhBT4vHohXPUikn0YuwzPq2mNUBC1NsE"
    },
    "matchLabels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    }
  },
  "type": "object",
  "nullable": true
};
const schema40 = {
  "items": {
    "$ref": "MkwwSDeYoT1APit7w8qsvbKCw8OynjINdeojyPgpPQ"
  },
  "type": "array",
  "nullable": true
};
const schema41 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "operator": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "values": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "required": ["key", "operator"],
  "type": "object"
};
function validate94(data, {
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
    if (data.operator === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "operator"
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
      if (!validate21(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.operator !== undefined) {
      if (!validate21(data.operator, {
        instancePath: instancePath + "/operator",
        parentData: data,
        parentDataProperty: "operator",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.values !== undefined) {
      if (!validate22(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
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
  validate94.errors = vErrors;
  return errors === 0;
}
function validate93(data, {
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
      if (!validate94(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
        errors = vErrors.length;
      }
    }
  }
  validate93.errors = vErrors;
  return errors === 0;
}
const schema16 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
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
    for (const key0 in data) {
      if (!validate21(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate49.errors = vErrors;
  return errors === 0;
}
function validate92(data, {
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
    if (data.matchExpressions !== undefined) {
      if (!validate93(data.matchExpressions, {
        instancePath: instancePath + "/matchExpressions",
        parentData: data,
        parentDataProperty: "matchExpressions",
        rootData
      })) {
        vErrors = vErrors === null ? validate93.errors : vErrors.concat(validate93.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchLabels !== undefined) {
      if (!validate49(data.matchLabels, {
        instancePath: instancePath + "/matchLabels",
        parentData: data,
        parentDataProperty: "matchLabels",
        rootData
      })) {
        vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
        errors = vErrors.length;
      }
    }
  }
  validate92.errors = vErrors;
  return errors === 0;
}
function validate90(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.namespaceRegexes !== undefined) {
      if (!validate22(data.namespaceRegexes, {
        instancePath: instancePath + "/namespaceRegexes",
        parentData: data,
        parentDataProperty: "namespaceRegexes",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaceSelector !== undefined) {
      if (!validate92(data.namespaceSelector, {
        instancePath: instancePath + "/namespaceSelector",
        parentData: data,
        parentDataProperty: "namespaceSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaces !== undefined) {
      if (!validate22(data.namespaces, {
        instancePath: instancePath + "/namespaces",
        parentData: data,
        parentDataProperty: "namespaces",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
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
  validate90.errors = vErrors;
  return errors === 0;
}
function validate89(data, {
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
      if (!validate90(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate90.errors : vErrors.concat(validate90.errors);
        errors = vErrors.length;
      }
    }
  }
  validate89.errors = vErrors;
  return errors === 0;
}
const schema8 = {
  "type": "string",
  "nullable": true
};
function validate24(data, {
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
  validate24.errors = vErrors;
  return errors === 0;
}
const schema42 = {
  "maxProperties": 1,
  "minProperties": 1,
  "properties": {
    "akeyless": {
      "$ref": "Q0joWSTQzdjmpdqoBqKR197QNBwDpCjUnRiVmWocY"
    },
    "alibaba": {
      "$ref": "ChR8IoblvlU8dfa2M6oYoSzTbYNGsKmkPbsxGforjs"
    },
    "aws": {
      "$ref": "b6MQZtzd4LEJJ6AQeRGfb40KTx93Dse3MlPSHXG74s"
    },
    "azurekv": {
      "$ref": "1CGFpfodEVMpMNmSkQ99kZ7tBYIX1j6qpFX5t9UUa4"
    },
    "beyondtrust": {
      "$ref": "bqjxiTzUa4r1RNSKyzTN6DDKKVTeH2qxIeodD51xbD8"
    },
    "bitwardensecretsmanager": {
      "$ref": "o4C847pzMj4A5uBQQRAn7swqbEWM1xDNOkpgV1Wmc"
    },
    "chef": {
      "$ref": "W9r78q3juHeEYvNfO4I0hUuFZHsSr4mgfCI4vYvgU"
    },
    "conjur": {
      "$ref": "uFR0WEHAC9qlF8qRIJhpLqLecePLEBiCyY0JojLz5g"
    },
    "delinea": {
      "$ref": "QYrg0PNAGGak4pgKD5T3hv0Q1tMNmBFexa5Oo7T0oQ"
    },
    "device42": {
      "$ref": "VyoOBky3NfSuOobtksPp2AnxHd2bHUU0OawORxXqKc"
    },
    "doppler": {
      "$ref": "ZM5u5Z4PoqNOaiR6X2gG05Qd3AJOH2Zk7vcXIY"
    },
    "fake": {
      "$ref": "scQrUkwhTgydc9oepU0CszwOQhn6Ltuwdr0aXVXOo"
    },
    "fortanix": {
      "$ref": "xtlfU3ruYDrDEKON1H8vH8yK3D4h3NZ2i52CGgow"
    },
    "gcpsm": {
      "$ref": "O5JrsfGVWtkIRT7n9Yc2pPNuxOS315Nf023qAOQULY"
    },
    "gitlab": {
      "$ref": "n3eHpQVBzAmIuISqrjkgImsviRwW8EXE22WT75hMJbA"
    },
    "ibm": {
      "$ref": "3kFCcjdfWx6t6jJec7Ewg0hLscD8k9znf4Qh6oRSF4s"
    },
    "infisical": {
      "$ref": "WackbMw0Y63fd8eUlIHjjmnaN2wlXP0XeEfLfyL0"
    },
    "keepersecurity": {
      "$ref": "12qoKyQcH78gdDnjqKeaZzVjEYB0ufufoOBczCOMSvs"
    },
    "kubernetes": {
      "$ref": "4oH1NGbdQkc3jqv191ehtE7cAJAHYZ3NQx6ISCYPsY"
    },
    "onboardbase": {
      "$ref": "TPoypkZJnwo2i0kNqMgwckLgiipSevMDoYCyWgoTJs"
    },
    "onepassword": {
      "$ref": "nxVkds3YbueEb7Gy3U2YGyMCMFiaNoA1YBoej9kU2U"
    },
    "oracle": {
      "$ref": "TlagwDVTrFpWjNitpsQhBDUo3Vkv12HXdTZlvGMaB0"
    },
    "passbolt": {
      "$ref": "4dkHWgZqjpQQmGUWzvcJStsaIg3bg2A8oW7bAnXOIA"
    },
    "passworddepot": {
      "$ref": "A8eB9iCe3aA0OGl2xOVbmNmZwT5qhX74qibPWeOY"
    },
    "previder": {
      "$ref": "PaB63U1eZAS4PEa9RcON2KGtmrabW9tLK8V0ReYYxE"
    },
    "pulumi": {
      "$ref": "0ESUCycEOjQv5MIaVGj53f0moTNip1JdnW6Nh9i9ak"
    },
    "scaleway": {
      "$ref": "XCPehcJ3OQQElIcOZKKvgYl216Ttss1sOb7gdC0Yg"
    },
    "secretserver": {
      "$ref": "0LDAm6GOwlNODqlEBRLlh4Y3OBaFXRiIhbUexGWnr6A"
    },
    "senhasegura": {
      "$ref": "P4htLJGpzdesHxii5lzCV71I2xb1IdaPweeXSWZGo"
    },
    "vault": {
      "$ref": "veKvmCP1MTWcUORTYXUF4bGYKEUsjAm3QrS3BFk"
    },
    "webhook": {
      "$ref": "EQzR8JhYEsyNmfjgFoDI1Sqp4Nk2Sz8AH8vXJH1Bg"
    },
    "yandexcertificatemanager": {
      "$ref": "VySa7Eh2xPvjEE3ighQfyWrzZppD5423LMrZkwpTs"
    },
    "yandexlockbox": {
      "$ref": "VySa7Eh2xPvjEE3ighQfyWrzZppD5423LMrZkwpTs"
    }
  },
  "type": "object"
};
const schema43 = {
  "properties": {
    "akeylessGWApiURL": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "authSecretRef": {
      "$ref": "IxoFhrzaQISoO7LnQhgQYXZcbJ6crhKuqz0AfRaC4c"
    },
    "caBundle": {
      "$ref": "0d0YjoHtjtI7p6BAHkZ9AtqFZvdnJ29AdGDpfxXc"
    },
    "caProvider": {
      "$ref": "ccuX4CoNUWP2IVzFHEaaIQm8VaPKTbUUXdH7thAmxo"
    }
  },
  "required": ["akeylessGWApiURL", "authSecretRef"],
  "type": "object",
  "nullable": true
};
const schema44 = {
  "properties": {
    "kubernetesAuth": {
      "$ref": "B491BjlhHcXJaixnkpygUl8mrZVvr0yedLrtqv8dEro"
    },
    "secretRef": {
      "$ref": "oUsVngNvWtMypdrg0e3bOJyJICgc5sutjUGtjDjgWIc"
    }
  },
  "type": "object"
};
const schema45 = {
  "properties": {
    "accessID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "k8sConfName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "serviceAccountRef": {
      "$ref": "1ahVOR2eDYxHyGU0TRbhcXIs2rjAF3PFgjzCGXI7Co"
    }
  },
  "required": ["accessID", "k8sConfName"],
  "type": "object",
  "nullable": true
};
const schema9 = {
  "properties": {
    "key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate25(data, {
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
    if (data.key !== undefined) {
      if (!validate24(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate24(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate24(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate25.errors = vErrors;
  return errors === 0;
}
const schema11 = {
  "properties": {
    "audiences": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["name"],
  "type": "object",
  "nullable": true
};
function validate33(data, {
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
    if (data.name === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.audiences !== undefined) {
      if (!validate22(data.audiences, {
        instancePath: instancePath + "/audiences",
        parentData: data,
        parentDataProperty: "audiences",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate21(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate24(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate33.errors = vErrors;
  return errors === 0;
}
function validate110(data, {
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
    if (data.accessID === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "accessID"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.k8sConfName === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "k8sConfName"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.accessID !== undefined) {
      if (!validate21(data.accessID, {
        instancePath: instancePath + "/accessID",
        parentData: data,
        parentDataProperty: "accessID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.k8sConfName !== undefined) {
      if (!validate21(data.k8sConfName, {
        instancePath: instancePath + "/k8sConfName",
        parentData: data,
        parentDataProperty: "k8sConfName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate25(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate33(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
  }
  validate110.errors = vErrors;
  return errors === 0;
}
const schema46 = {
  "properties": {
    "accessID": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "accessType": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "accessTypeParam": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate116(data, {
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
    if (data.accessID !== undefined) {
      if (!validate25(data.accessID, {
        instancePath: instancePath + "/accessID",
        parentData: data,
        parentDataProperty: "accessID",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.accessType !== undefined) {
      if (!validate25(data.accessType, {
        instancePath: instancePath + "/accessType",
        parentData: data,
        parentDataProperty: "accessType",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.accessTypeParam !== undefined) {
      if (!validate25(data.accessTypeParam, {
        instancePath: instancePath + "/accessTypeParam",
        parentData: data,
        parentDataProperty: "accessTypeParam",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate116.errors = vErrors;
  return errors === 0;
}
function validate109(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.kubernetesAuth !== undefined) {
      if (!validate110(data.kubernetesAuth, {
        instancePath: instancePath + "/kubernetesAuth",
        parentData: data,
        parentDataProperty: "kubernetesAuth",
        rootData
      })) {
        vErrors = vErrors === null ? validate110.errors : vErrors.concat(validate110.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate116(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate116.errors : vErrors.concat(validate116.errors);
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
  validate109.errors = vErrors;
  return errors === 0;
}
const schema18 = {
  "format": "byte",
  "type": "string",
  "nullable": true
};
const formats0 = formats.byte;
function validate52(data, {
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
    if (!formats0.validate(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "byte"
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
  validate52.errors = vErrors;
  return errors === 0;
}
const schema14 = {
  "properties": {
    "key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "type": {
      "$ref": "ebAifhrS8MR1Opdn4tuyhKTaJh7h5KbXTPm4AK6IGw"
    }
  },
  "required": ["name", "type"],
  "type": "object",
  "nullable": true
};
const schema15 = {
  "enum": ["Secret", "ConfigMap"],
  "type": "string"
};
function validate47(data, {
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
  if (!(data === "Secret" || data === "ConfigMap")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema15.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate47.errors = vErrors;
  return errors === 0;
}
function validate43(data, {
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
    if (data.name === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.type === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "type"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.key !== undefined) {
      if (!validate24(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate21(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate24(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate47(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
  }
  validate43.errors = vErrors;
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
    if (data.akeylessGWApiURL === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "akeylessGWApiURL"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.authSecretRef === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "authSecretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.akeylessGWApiURL !== undefined) {
      if (!validate21(data.akeylessGWApiURL, {
        instancePath: instancePath + "/akeylessGWApiURL",
        parentData: data,
        parentDataProperty: "akeylessGWApiURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.authSecretRef !== undefined) {
      if (!validate109(data.authSecretRef, {
        instancePath: instancePath + "/authSecretRef",
        parentData: data,
        parentDataProperty: "authSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate109.errors : vErrors.concat(validate109.errors);
        errors = vErrors.length;
      }
    }
    if (data.caBundle !== undefined) {
      if (!validate52(data.caBundle, {
        instancePath: instancePath + "/caBundle",
        parentData: data,
        parentDataProperty: "caBundle",
        rootData
      })) {
        vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
        errors = vErrors.length;
      }
    }
    if (data.caProvider !== undefined) {
      if (!validate43(data.caProvider, {
        instancePath: instancePath + "/caProvider",
        parentData: data,
        parentDataProperty: "caProvider",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
  }
  validate107.errors = vErrors;
  return errors === 0;
}
const schema47 = {
  "properties": {
    "auth": {
      "$ref": "9djhfmHrMWzowwoSre9oCxfc26uOmzEcPbUp12W5FoU"
    },
    "regionID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["auth", "regionID"],
  "type": "object",
  "nullable": true
};
const schema48 = {
  "properties": {
    "rrsa": {
      "$ref": "C2S9Oga6QjNW5W6T23m51fnVUGUcDjbIzMVDa2U2CA"
    },
    "secretRef": {
      "$ref": "VBB87K9ZAQ7Kj0sxRjMOMjYWKRAdQyOQg4dhhDNry0I"
    }
  },
  "type": "object"
};
const schema49 = {
  "properties": {
    "oidcProviderArn": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "oidcTokenFilePath": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "roleArn": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "sessionName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["oidcProviderArn", "oidcTokenFilePath", "roleArn", "sessionName"],
  "type": "object",
  "nullable": true
};
function validate127(data, {
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
    if (data.oidcProviderArn === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "oidcProviderArn"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.oidcTokenFilePath === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "oidcTokenFilePath"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.roleArn === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "roleArn"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.sessionName === undefined) {
      const err4 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "sessionName"
        }
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.oidcProviderArn !== undefined) {
      if (!validate21(data.oidcProviderArn, {
        instancePath: instancePath + "/oidcProviderArn",
        parentData: data,
        parentDataProperty: "oidcProviderArn",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.oidcTokenFilePath !== undefined) {
      if (!validate21(data.oidcTokenFilePath, {
        instancePath: instancePath + "/oidcTokenFilePath",
        parentData: data,
        parentDataProperty: "oidcTokenFilePath",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.roleArn !== undefined) {
      if (!validate21(data.roleArn, {
        instancePath: instancePath + "/roleArn",
        parentData: data,
        parentDataProperty: "roleArn",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.sessionName !== undefined) {
      if (!validate21(data.sessionName, {
        instancePath: instancePath + "/sessionName",
        parentData: data,
        parentDataProperty: "sessionName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate127.errors = vErrors;
  return errors === 0;
}
const schema50 = {
  "properties": {
    "accessKeyIDSecretRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    },
    "accessKeySecretSecretRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["accessKeyIDSecretRef", "accessKeySecretSecretRef"],
  "type": "object",
  "nullable": true
};
const schema10 = {
  "properties": {
    "key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate29(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.key !== undefined) {
      if (!validate24(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate24(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate24(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
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
  validate29.errors = vErrors;
  return errors === 0;
}
function validate133(data, {
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
    if (data.accessKeyIDSecretRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "accessKeyIDSecretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.accessKeySecretSecretRef === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "accessKeySecretSecretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.accessKeyIDSecretRef !== undefined) {
      if (!validate29(data.accessKeyIDSecretRef, {
        instancePath: instancePath + "/accessKeyIDSecretRef",
        parentData: data,
        parentDataProperty: "accessKeyIDSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.accessKeySecretSecretRef !== undefined) {
      if (!validate29(data.accessKeySecretSecretRef, {
        instancePath: instancePath + "/accessKeySecretSecretRef",
        parentData: data,
        parentDataProperty: "accessKeySecretSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate133.errors = vErrors;
  return errors === 0;
}
function validate126(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.rrsa !== undefined) {
      if (!validate127(data.rrsa, {
        instancePath: instancePath + "/rrsa",
        parentData: data,
        parentDataProperty: "rrsa",
        rootData
      })) {
        vErrors = vErrors === null ? validate127.errors : vErrors.concat(validate127.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate133(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate133.errors : vErrors.concat(validate133.errors);
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
  validate126.errors = vErrors;
  return errors === 0;
}
function validate125(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.regionID === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "regionID"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate126(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate126.errors : vErrors.concat(validate126.errors);
        errors = vErrors.length;
      }
    }
    if (data.regionID !== undefined) {
      if (!validate21(data.regionID, {
        instancePath: instancePath + "/regionID",
        parentData: data,
        parentDataProperty: "regionID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate125.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  "properties": {
    "additionalRoles": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "auth": {
      "$ref": "pThbGHYTSOSmrHnM8jsCCPRnrEs1iRKgBozLsViYN7w"
    },
    "externalID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "prefix": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "region": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "role": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretsManager": {
      "$ref": "Fx0yPJS3ghmCuD3m5uwMEaRy2p0SZhgeUzWIMULeDdw"
    },
    "service": {
      "$ref": "rrHfqdBCqzgmh3tFfdRFg2165Ca4zecyE9HiaJdIvI"
    },
    "sessionTags": {
      "$ref": "39wzsI9nsPXgQVE8Vah8f3692SdXajARO0migPVw18"
    },
    "transitiveTagKeys": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "required": ["region", "service"],
  "type": "object",
  "nullable": true
};
const schema52 = {
  "properties": {
    "jwt": {
      "$ref": "bLDXAmEjbF4xQl55HWe0Mg9h0w5DHvqJLI4VAAEu4IY"
    },
    "secretRef": {
      "$ref": "8GAym1kgWrt1Qs2dy5f0aphMnmcNBUf3xpTyWpig"
    }
  },
  "type": "object",
  "nullable": true
};
const schema23 = {
  "properties": {
    "serviceAccountRef": {
      "$ref": "1ahVOR2eDYxHyGU0TRbhcXIs2rjAF3PFgjzCGXI7Co"
    }
  },
  "type": "object",
  "nullable": true
};
function validate59(data, {
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
    if (data.serviceAccountRef !== undefined) {
      if (!validate33(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
  }
  validate59.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "properties": {
    "accessKeyIDSecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "secretAccessKeySecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "sessionTokenSecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate61(data, {
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
    if (data.accessKeyIDSecretRef !== undefined) {
      if (!validate25(data.accessKeyIDSecretRef, {
        instancePath: instancePath + "/accessKeyIDSecretRef",
        parentData: data,
        parentDataProperty: "accessKeyIDSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretAccessKeySecretRef !== undefined) {
      if (!validate25(data.secretAccessKeySecretRef, {
        instancePath: instancePath + "/secretAccessKeySecretRef",
        parentData: data,
        parentDataProperty: "secretAccessKeySecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.sessionTokenSecretRef !== undefined) {
      if (!validate25(data.sessionTokenSecretRef, {
        instancePath: instancePath + "/sessionTokenSecretRef",
        parentData: data,
        parentDataProperty: "sessionTokenSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate61.errors = vErrors;
  return errors === 0;
}
function validate142(data, {
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
    if (data.jwt !== undefined) {
      if (!validate59(data.jwt, {
        instancePath: instancePath + "/jwt",
        parentData: data,
        parentDataProperty: "jwt",
        rootData
      })) {
        vErrors = vErrors === null ? validate59.errors : vErrors.concat(validate59.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate61(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
  }
  validate142.errors = vErrors;
  return errors === 0;
}
const schema53 = {
  "properties": {
    "forceDeleteWithoutRecovery": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "recoveryWindowInDays": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    }
  },
  "type": "object",
  "nullable": true
};
const schema17 = {
  "type": "boolean",
  "nullable": true
};
function validate51(data, {
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
  validate51.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "format": "int64",
  "type": "integer",
  "nullable": true
};
const formats2 = formats.int64;
function validate65(data, {
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
    if (!formats2.validate(data)) {
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
  validate65.errors = vErrors;
  return errors === 0;
}
function validate150(data, {
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
    if (data.forceDeleteWithoutRecovery !== undefined) {
      if (!validate51(data.forceDeleteWithoutRecovery, {
        instancePath: instancePath + "/forceDeleteWithoutRecovery",
        parentData: data,
        parentDataProperty: "forceDeleteWithoutRecovery",
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
    if (data.recoveryWindowInDays !== undefined) {
      if (!validate65(data.recoveryWindowInDays, {
        instancePath: instancePath + "/recoveryWindowInDays",
        parentData: data,
        parentDataProperty: "recoveryWindowInDays",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
  }
  validate150.errors = vErrors;
  return errors === 0;
}
const schema54 = {
  "enum": ["SecretsManager", "ParameterStore"],
  "type": "string"
};
function validate154(data, {
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
  if (!(data === "SecretsManager" || data === "ParameterStore")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema54.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate154.errors = vErrors;
  return errors === 0;
}
const schema55 = {
  "items": {
    "$ref": "rJ4XK5quRiGa2JrAKUdyctsofnFc3PjWJtxxZx64VOA"
  },
  "type": "array",
  "nullable": true
};
const schema56 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["key", "value"],
  "type": "object"
};
function validate157(data, {
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
      if (!validate21(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate21(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
function validate140(data, {
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
    if (data.region === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "region"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.service === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "service"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.additionalRoles !== undefined) {
      if (!validate22(data.additionalRoles, {
        instancePath: instancePath + "/additionalRoles",
        parentData: data,
        parentDataProperty: "additionalRoles",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.auth !== undefined) {
      if (!validate142(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate142.errors : vErrors.concat(validate142.errors);
        errors = vErrors.length;
      }
    }
    if (data.externalID !== undefined) {
      if (!validate24(data.externalID, {
        instancePath: instancePath + "/externalID",
        parentData: data,
        parentDataProperty: "externalID",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.prefix !== undefined) {
      if (!validate24(data.prefix, {
        instancePath: instancePath + "/prefix",
        parentData: data,
        parentDataProperty: "prefix",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.region !== undefined) {
      if (!validate21(data.region, {
        instancePath: instancePath + "/region",
        parentData: data,
        parentDataProperty: "region",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.role !== undefined) {
      if (!validate24(data.role, {
        instancePath: instancePath + "/role",
        parentData: data,
        parentDataProperty: "role",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretsManager !== undefined) {
      if (!validate150(data.secretsManager, {
        instancePath: instancePath + "/secretsManager",
        parentData: data,
        parentDataProperty: "secretsManager",
        rootData
      })) {
        vErrors = vErrors === null ? validate150.errors : vErrors.concat(validate150.errors);
        errors = vErrors.length;
      }
    }
    if (data.service !== undefined) {
      if (!validate154(data.service, {
        instancePath: instancePath + "/service",
        parentData: data,
        parentDataProperty: "service",
        rootData
      })) {
        vErrors = vErrors === null ? validate154.errors : vErrors.concat(validate154.errors);
        errors = vErrors.length;
      }
    }
    if (data.sessionTags !== undefined) {
      if (!validate156(data.sessionTags, {
        instancePath: instancePath + "/sessionTags",
        parentData: data,
        parentDataProperty: "sessionTags",
        rootData
      })) {
        vErrors = vErrors === null ? validate156.errors : vErrors.concat(validate156.errors);
        errors = vErrors.length;
      }
    }
    if (data.transitiveTagKeys !== undefined) {
      if (!validate22(data.transitiveTagKeys, {
        instancePath: instancePath + "/transitiveTagKeys",
        parentData: data,
        parentDataProperty: "transitiveTagKeys",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate140.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  "properties": {
    "authSecretRef": {
      "$ref": "CoOBWhaMEEPaKMjdIpmoLNrkPZ1PiSbf7G8vQ04"
    },
    "authType": {
      "$ref": "pLQszY5HZOyMLXvJehAwrA9GA7wBKTUj1iPE36c0MUY"
    },
    "environmentType": {
      "$ref": "qXq9CX7X1g5PcCf8vwjB46k0Gdji8GP6rSeRp7NTpRo"
    },
    "identityId": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "serviceAccountRef": {
      "$ref": "1ahVOR2eDYxHyGU0TRbhcXIs2rjAF3PFgjzCGXI7Co"
    },
    "tenantId": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "vaultUrl": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["vaultUrl"],
  "type": "object",
  "nullable": true
};
const schema58 = {
  "properties": {
    "clientCertificate": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "clientId": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "clientSecret": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "tenantId": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate165(data, {
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
    if (data.clientCertificate !== undefined) {
      if (!validate25(data.clientCertificate, {
        instancePath: instancePath + "/clientCertificate",
        parentData: data,
        parentDataProperty: "clientCertificate",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientId !== undefined) {
      if (!validate25(data.clientId, {
        instancePath: instancePath + "/clientId",
        parentData: data,
        parentDataProperty: "clientId",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientSecret !== undefined) {
      if (!validate25(data.clientSecret, {
        instancePath: instancePath + "/clientSecret",
        parentData: data,
        parentDataProperty: "clientSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.tenantId !== undefined) {
      if (!validate25(data.tenantId, {
        instancePath: instancePath + "/tenantId",
        parentData: data,
        parentDataProperty: "tenantId",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate165.errors = vErrors;
  return errors === 0;
}
const schema59 = {
  "default": "ServicePrincipal",
  "enum": ["ServicePrincipal", "ManagedIdentity", "WorkloadIdentity"],
  "type": "string",
  "nullable": true
};
function validate171(data, {
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
  if (!(data === "ServicePrincipal" || data === "ManagedIdentity" || data === "WorkloadIdentity")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema59.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate171.errors = vErrors;
  return errors === 0;
}
const schema60 = {
  "default": "PublicCloud",
  "enum": ["PublicCloud", "USGovernmentCloud", "ChinaCloud", "GermanCloud"],
  "type": "string",
  "nullable": true
};
function validate173(data, {
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
  if (!(data === "PublicCloud" || data === "USGovernmentCloud" || data === "ChinaCloud" || data === "GermanCloud")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema60.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate173.errors = vErrors;
  return errors === 0;
}
function validate164(data, {
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
    if (data.vaultUrl === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "vaultUrl"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.authSecretRef !== undefined) {
      if (!validate165(data.authSecretRef, {
        instancePath: instancePath + "/authSecretRef",
        parentData: data,
        parentDataProperty: "authSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate165.errors : vErrors.concat(validate165.errors);
        errors = vErrors.length;
      }
    }
    if (data.authType !== undefined) {
      if (!validate171(data.authType, {
        instancePath: instancePath + "/authType",
        parentData: data,
        parentDataProperty: "authType",
        rootData
      })) {
        vErrors = vErrors === null ? validate171.errors : vErrors.concat(validate171.errors);
        errors = vErrors.length;
      }
    }
    if (data.environmentType !== undefined) {
      if (!validate173(data.environmentType, {
        instancePath: instancePath + "/environmentType",
        parentData: data,
        parentDataProperty: "environmentType",
        rootData
      })) {
        vErrors = vErrors === null ? validate173.errors : vErrors.concat(validate173.errors);
        errors = vErrors.length;
      }
    }
    if (data.identityId !== undefined) {
      if (!validate24(data.identityId, {
        instancePath: instancePath + "/identityId",
        parentData: data,
        parentDataProperty: "identityId",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate33(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.tenantId !== undefined) {
      if (!validate24(data.tenantId, {
        instancePath: instancePath + "/tenantId",
        parentData: data,
        parentDataProperty: "tenantId",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.vaultUrl !== undefined) {
      if (!validate21(data.vaultUrl, {
        instancePath: instancePath + "/vaultUrl",
        parentData: data,
        parentDataProperty: "vaultUrl",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate164.errors = vErrors;
  return errors === 0;
}
const schema61 = {
  "properties": {
    "auth": {
      "$ref": "dHkoSMXXiMVuUaQ4KdoKvw3Gh447RKeZoAZ506pqrCk"
    },
    "server": {
      "$ref": "POXwPSejuz73kFayc8brzzubOxaKdau7sj6YsyAbEf4"
    }
  },
  "required": ["auth", "server"],
  "type": "object",
  "nullable": true
};
const schema62 = {
  "properties": {
    "certificate": {
      "$ref": "tFzIWCwlXvrOhTY2hWShbWsHFr50kwOm9WAI3b8AYE"
    },
    "certificateKey": {
      "$ref": "tFzIWCwlXvrOhTY2hWShbWsHFr50kwOm9WAI3b8AYE"
    },
    "clientId": {
      "$ref": "0bOyAsW3EUlIqHmuqJzZZ6Y4nUzkjckoVhAp5mQU"
    },
    "clientSecret": {
      "$ref": "0bOyAsW3EUlIqHmuqJzZZ6Y4nUzkjckoVhAp5mQU"
    }
  },
  "required": ["clientId", "clientSecret"],
  "type": "object"
};
const schema12 = {
  "properties": {
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate37(data, {
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
    if (data.secretRef !== undefined) {
      if (!validate25(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate24(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate37.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "properties": {
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate40(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.secretRef !== undefined) {
      if (!validate25(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate24(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
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
  validate40.errors = vErrors;
  return errors === 0;
}
function validate181(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.clientId === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "clientId"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.clientSecret === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "clientSecret"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.certificate !== undefined) {
      if (!validate37(data.certificate, {
        instancePath: instancePath + "/certificate",
        parentData: data,
        parentDataProperty: "certificate",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.certificateKey !== undefined) {
      if (!validate37(data.certificateKey, {
        instancePath: instancePath + "/certificateKey",
        parentData: data,
        parentDataProperty: "certificateKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientId !== undefined) {
      if (!validate40(data.clientId, {
        instancePath: instancePath + "/clientId",
        parentData: data,
        parentDataProperty: "clientId",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientSecret !== undefined) {
      if (!validate40(data.clientSecret, {
        instancePath: instancePath + "/clientSecret",
        parentData: data,
        parentDataProperty: "clientSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
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
  validate181.errors = vErrors;
  return errors === 0;
}
const schema63 = {
  "properties": {
    "apiUrl": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "clientTimeOutSeconds": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "retrievalType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "separator": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "verifyCA": {
      "$ref": "384TuUg7xQOu4Fi6u32QopECSxjPv91aOGoUUSEznpE"
    }
  },
  "required": ["apiUrl", "verifyCA"],
  "type": "object"
};
const schema30 = {
  "type": "integer",
  "nullable": true
};
function validate78(data, {
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
  validate78.errors = vErrors;
  return errors === 0;
}
const schema64 = {
  "type": "boolean"
};
function validate192(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "boolean") {
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
  validate192.errors = vErrors;
  return errors === 0;
}
function validate187(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.apiUrl === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "apiUrl"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.verifyCA === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "verifyCA"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.apiUrl !== undefined) {
      if (!validate21(data.apiUrl, {
        instancePath: instancePath + "/apiUrl",
        parentData: data,
        parentDataProperty: "apiUrl",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientTimeOutSeconds !== undefined) {
      if (!validate78(data.clientTimeOutSeconds, {
        instancePath: instancePath + "/clientTimeOutSeconds",
        parentData: data,
        parentDataProperty: "clientTimeOutSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
        errors = vErrors.length;
      }
    }
    if (data.retrievalType !== undefined) {
      if (!validate24(data.retrievalType, {
        instancePath: instancePath + "/retrievalType",
        parentData: data,
        parentDataProperty: "retrievalType",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.separator !== undefined) {
      if (!validate24(data.separator, {
        instancePath: instancePath + "/separator",
        parentData: data,
        parentDataProperty: "separator",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.verifyCA !== undefined) {
      if (!validate192(data.verifyCA, {
        instancePath: instancePath + "/verifyCA",
        parentData: data,
        parentDataProperty: "verifyCA",
        rootData
      })) {
        vErrors = vErrors === null ? validate192.errors : vErrors.concat(validate192.errors);
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
  validate187.errors = vErrors;
  return errors === 0;
}
function validate180(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.server === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "server"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate181(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate181.errors : vErrors.concat(validate181.errors);
        errors = vErrors.length;
      }
    }
    if (data.server !== undefined) {
      if (!validate187(data.server, {
        instancePath: instancePath + "/server",
        parentData: data,
        parentDataProperty: "server",
        rootData
      })) {
        vErrors = vErrors === null ? validate187.errors : vErrors.concat(validate187.errors);
        errors = vErrors.length;
      }
    }
  }
  validate180.errors = vErrors;
  return errors === 0;
}
const schema65 = {
  "properties": {
    "apiURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "auth": {
      "$ref": "xjvjUqBA41cksi0rs2wzuXte1ik0zXtq9wFFgFsfo"
    },
    "bitwardenServerSDKURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "caBundle": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "caProvider": {
      "$ref": "ccuX4CoNUWP2IVzFHEaaIQm8VaPKTbUUXdH7thAmxo"
    },
    "identityURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "organizationID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "projectID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["auth", "organizationID", "projectID"],
  "type": "object",
  "nullable": true
};
const schema66 = {
  "properties": {
    "secretRef": {
      "$ref": "vhIh7lNx9widnlYByMv0MjWnllW09DmTxmxFEhxWFY"
    }
  },
  "required": ["secretRef"],
  "type": "object"
};
const schema67 = {
  "properties": {
    "credentials": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["credentials"],
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
    if (data.credentials === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "credentials"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.credentials !== undefined) {
      if (!validate29(data.credentials, {
        instancePath: instancePath + "/credentials",
        parentData: data,
        parentDataProperty: "credentials",
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.secretRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.secretRef !== undefined) {
      if (!validate199(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate199.errors : vErrors.concat(validate199.errors);
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
  validate198.errors = vErrors;
  return errors === 0;
}
function validate196(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.organizationID === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "organizationID"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.projectID === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "projectID"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.apiURL !== undefined) {
      if (!validate24(data.apiURL, {
        instancePath: instancePath + "/apiURL",
        parentData: data,
        parentDataProperty: "apiURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.auth !== undefined) {
      if (!validate198(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate198.errors : vErrors.concat(validate198.errors);
        errors = vErrors.length;
      }
    }
    if (data.bitwardenServerSDKURL !== undefined) {
      if (!validate24(data.bitwardenServerSDKURL, {
        instancePath: instancePath + "/bitwardenServerSDKURL",
        parentData: data,
        parentDataProperty: "bitwardenServerSDKURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.caBundle !== undefined) {
      if (!validate24(data.caBundle, {
        instancePath: instancePath + "/caBundle",
        parentData: data,
        parentDataProperty: "caBundle",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.caProvider !== undefined) {
      if (!validate43(data.caProvider, {
        instancePath: instancePath + "/caProvider",
        parentData: data,
        parentDataProperty: "caProvider",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.identityURL !== undefined) {
      if (!validate24(data.identityURL, {
        instancePath: instancePath + "/identityURL",
        parentData: data,
        parentDataProperty: "identityURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.organizationID !== undefined) {
      if (!validate21(data.organizationID, {
        instancePath: instancePath + "/organizationID",
        parentData: data,
        parentDataProperty: "organizationID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.projectID !== undefined) {
      if (!validate21(data.projectID, {
        instancePath: instancePath + "/projectID",
        parentData: data,
        parentDataProperty: "projectID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate196.errors = vErrors;
  return errors === 0;
}
const schema68 = {
  "properties": {
    "auth": {
      "$ref": "JrZKdOTskkRP5YiSnRLfReVNyquA5gvyR7c8PFESsME"
    },
    "serverUrl": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "username": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["auth", "serverUrl", "username"],
  "type": "object",
  "nullable": true
};
const schema69 = {
  "properties": {
    "secretRef": {
      "$ref": "BpRirK7kvN7guLK1WtMiVSUg4CL0ctdUJEhsPqnsUI"
    }
  },
  "required": ["secretRef"],
  "type": "object"
};
const schema70 = {
  "properties": {
    "privateKeySecretRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["privateKeySecretRef"],
  "type": "object"
};
function validate212(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.privateKeySecretRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "privateKeySecretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.privateKeySecretRef !== undefined) {
      if (!validate29(data.privateKeySecretRef, {
        instancePath: instancePath + "/privateKeySecretRef",
        parentData: data,
        parentDataProperty: "privateKeySecretRef",
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.secretRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.secretRef !== undefined) {
      if (!validate212(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate212.errors : vErrors.concat(validate212.errors);
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
  validate211.errors = vErrors;
  return errors === 0;
}
function validate210(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.serverUrl === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "serverUrl"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.username === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "username"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate211(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate211.errors : vErrors.concat(validate211.errors);
        errors = vErrors.length;
      }
    }
    if (data.serverUrl !== undefined) {
      if (!validate21(data.serverUrl, {
        instancePath: instancePath + "/serverUrl",
        parentData: data,
        parentDataProperty: "serverUrl",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.username !== undefined) {
      if (!validate21(data.username, {
        instancePath: instancePath + "/username",
        parentData: data,
        parentDataProperty: "username",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate210.errors = vErrors;
  return errors === 0;
}
const schema71 = {
  "properties": {
    "auth": {
      "$ref": "48ErcKKjUZFH2aVX4DvWUmcAiGs9gnWfIL2vvwgxs"
    },
    "caBundle": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "caProvider": {
      "$ref": "ccuX4CoNUWP2IVzFHEaaIQm8VaPKTbUUXdH7thAmxo"
    },
    "url": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["auth", "url"],
  "type": "object",
  "nullable": true
};
const schema72 = {
  "properties": {
    "apikey": {
      "$ref": "6gfIyu9po8cots2l7ldZL4UinOqe9TwpxvnCkle6ms"
    },
    "jwt": {
      "$ref": "Eg2rgklPBZgJLkFJyBlfUxC9859FF4Qp9wsaV2Lkfk"
    }
  },
  "type": "object"
};
const schema73 = {
  "properties": {
    "account": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "apiKeyRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    },
    "userRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["account", "apiKeyRef", "userRef"],
  "type": "object",
  "nullable": true
};
function validate221(data, {
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
    if (data.account === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "account"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.apiKeyRef === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "apiKeyRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.userRef === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "userRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.account !== undefined) {
      if (!validate21(data.account, {
        instancePath: instancePath + "/account",
        parentData: data,
        parentDataProperty: "account",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.apiKeyRef !== undefined) {
      if (!validate29(data.apiKeyRef, {
        instancePath: instancePath + "/apiKeyRef",
        parentData: data,
        parentDataProperty: "apiKeyRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.userRef !== undefined) {
      if (!validate29(data.userRef, {
        instancePath: instancePath + "/userRef",
        parentData: data,
        parentDataProperty: "userRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate221.errors = vErrors;
  return errors === 0;
}
const schema74 = {
  "properties": {
    "account": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "hostId": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "serviceAccountRef": {
      "$ref": "1ahVOR2eDYxHyGU0TRbhcXIs2rjAF3PFgjzCGXI7Co"
    },
    "serviceID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["account", "serviceID"],
  "type": "object",
  "nullable": true
};
function validate226(data, {
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
    if (data.account === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "account"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.serviceID === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "serviceID"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.account !== undefined) {
      if (!validate21(data.account, {
        instancePath: instancePath + "/account",
        parentData: data,
        parentDataProperty: "account",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostId !== undefined) {
      if (!validate24(data.hostId, {
        instancePath: instancePath + "/hostId",
        parentData: data,
        parentDataProperty: "hostId",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate25(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate33(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceID !== undefined) {
      if (!validate21(data.serviceID, {
        instancePath: instancePath + "/serviceID",
        parentData: data,
        parentDataProperty: "serviceID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate226.errors = vErrors;
  return errors === 0;
}
function validate220(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.apikey !== undefined) {
      if (!validate221(data.apikey, {
        instancePath: instancePath + "/apikey",
        parentData: data,
        parentDataProperty: "apikey",
        rootData
      })) {
        vErrors = vErrors === null ? validate221.errors : vErrors.concat(validate221.errors);
        errors = vErrors.length;
      }
    }
    if (data.jwt !== undefined) {
      if (!validate226(data.jwt, {
        instancePath: instancePath + "/jwt",
        parentData: data,
        parentDataProperty: "jwt",
        rootData
      })) {
        vErrors = vErrors === null ? validate226.errors : vErrors.concat(validate226.errors);
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
  validate220.errors = vErrors;
  return errors === 0;
}
function validate219(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.url === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "url"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate220(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate220.errors : vErrors.concat(validate220.errors);
        errors = vErrors.length;
      }
    }
    if (data.caBundle !== undefined) {
      if (!validate24(data.caBundle, {
        instancePath: instancePath + "/caBundle",
        parentData: data,
        parentDataProperty: "caBundle",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.caProvider !== undefined) {
      if (!validate43(data.caProvider, {
        instancePath: instancePath + "/caProvider",
        parentData: data,
        parentDataProperty: "caProvider",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate21(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate219.errors = vErrors;
  return errors === 0;
}
const schema75 = {
  "properties": {
    "clientId": {
      "$ref": "0bOyAsW3EUlIqHmuqJzZZ6Y4nUzkjckoVhAp5mQU"
    },
    "clientSecret": {
      "$ref": "0bOyAsW3EUlIqHmuqJzZZ6Y4nUzkjckoVhAp5mQU"
    },
    "tenant": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "tld": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "urlTemplate": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["clientId", "clientSecret", "tenant"],
  "type": "object",
  "nullable": true
};
function validate238(data, {
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
    if (data.tenant === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "tenant"
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
      if (!validate40(data.clientId, {
        instancePath: instancePath + "/clientId",
        parentData: data,
        parentDataProperty: "clientId",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientSecret !== undefined) {
      if (!validate40(data.clientSecret, {
        instancePath: instancePath + "/clientSecret",
        parentData: data,
        parentDataProperty: "clientSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.tenant !== undefined) {
      if (!validate21(data.tenant, {
        instancePath: instancePath + "/tenant",
        parentData: data,
        parentDataProperty: "tenant",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.tld !== undefined) {
      if (!validate24(data.tld, {
        instancePath: instancePath + "/tld",
        parentData: data,
        parentDataProperty: "tld",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.urlTemplate !== undefined) {
      if (!validate24(data.urlTemplate, {
        instancePath: instancePath + "/urlTemplate",
        parentData: data,
        parentDataProperty: "urlTemplate",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate238.errors = vErrors;
  return errors === 0;
}
const schema76 = {
  "properties": {
    "auth": {
      "$ref": "uuLbtoPc1MlUKSTgWenAHC0H2SBrv2eFU25ejxE"
    },
    "host": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["auth", "host"],
  "type": "object",
  "nullable": true
};
const schema20 = {
  "properties": {
    "secretRef": {
      "$ref": "oA1YCknsfyWSfobeAKeSRnxZO3z1zJFey8cumhqw"
    }
  },
  "required": ["secretRef"],
  "type": "object"
};
const schema21 = {
  "properties": {
    "credentials": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object"
};
function validate55(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.credentials !== undefined) {
      if (!validate25(data.credentials, {
        instancePath: instancePath + "/credentials",
        parentData: data,
        parentDataProperty: "credentials",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
  validate55.errors = vErrors;
  return errors === 0;
}
function validate54(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.secretRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.secretRef !== undefined) {
      if (!validate55(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
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
  validate54.errors = vErrors;
  return errors === 0;
}
function validate245(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.host === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "host"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate54(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.host !== undefined) {
      if (!validate21(data.host, {
        instancePath: instancePath + "/host",
        parentData: data,
        parentDataProperty: "host",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate245.errors = vErrors;
  return errors === 0;
}
const schema77 = {
  "properties": {
    "auth": {
      "$ref": "aX5v7mt4s8U8wpAKRK17tMwKXHp8qgT7Ir970p4qc"
    },
    "config": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "format": {
      "$ref": "xt4YHVW5KmX3KyWDaQPtZlaZwRFmiJSTz4a5ePT4kQ"
    },
    "nameTransformer": {
      "$ref": "QS9LFOLL7NN2FjGr3rWeaTbYieG6oWnpYAULhtZErs"
    },
    "project": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["auth"],
  "type": "object",
  "nullable": true
};
const schema78 = {
  "properties": {
    "secretRef": {
      "$ref": "ILt4LEYU0CJyTgHdyqXappGpEXForIliKTvbdxCZaLk"
    }
  },
  "required": ["secretRef"],
  "type": "object"
};
const schema79 = {
  "properties": {
    "dopplerToken": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["dopplerToken"],
  "type": "object"
};
function validate251(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.dopplerToken === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "dopplerToken"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.dopplerToken !== undefined) {
      if (!validate29(data.dopplerToken, {
        instancePath: instancePath + "/dopplerToken",
        parentData: data,
        parentDataProperty: "dopplerToken",
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
  validate251.errors = vErrors;
  return errors === 0;
}
function validate250(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.secretRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.secretRef !== undefined) {
      if (!validate251(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate251.errors : vErrors.concat(validate251.errors);
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
  validate250.errors = vErrors;
  return errors === 0;
}
const schema80 = {
  "enum": ["json", "dotnet-json", "env", "yaml", "docker"],
  "type": "string",
  "nullable": true
};
function validate256(data, {
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
  if (!(data === "json" || data === "dotnet-json" || data === "env" || data === "yaml" || data === "docker")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema80.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate256.errors = vErrors;
  return errors === 0;
}
const schema81 = {
  "enum": ["upper-camel", "camel", "lower-snake", "tf-var", "dotnet-env", "lower-kebab"],
  "type": "string",
  "nullable": true
};
function validate258(data, {
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
  if (!(data === "upper-camel" || data === "camel" || data === "lower-snake" || data === "tf-var" || data === "dotnet-env" || data === "lower-kebab")) {
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
  validate258.errors = vErrors;
  return errors === 0;
}
function validate249(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate250(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate250.errors : vErrors.concat(validate250.errors);
        errors = vErrors.length;
      }
    }
    if (data.config !== undefined) {
      if (!validate24(data.config, {
        instancePath: instancePath + "/config",
        parentData: data,
        parentDataProperty: "config",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.format !== undefined) {
      if (!validate256(data.format, {
        instancePath: instancePath + "/format",
        parentData: data,
        parentDataProperty: "format",
        rootData
      })) {
        vErrors = vErrors === null ? validate256.errors : vErrors.concat(validate256.errors);
        errors = vErrors.length;
      }
    }
    if (data.nameTransformer !== undefined) {
      if (!validate258(data.nameTransformer, {
        instancePath: instancePath + "/nameTransformer",
        parentData: data,
        parentDataProperty: "nameTransformer",
        rootData
      })) {
        vErrors = vErrors === null ? validate258.errors : vErrors.concat(validate258.errors);
        errors = vErrors.length;
      }
    }
    if (data.project !== undefined) {
      if (!validate24(data.project, {
        instancePath: instancePath + "/project",
        parentData: data,
        parentDataProperty: "project",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate249.errors = vErrors;
  return errors === 0;
}
const schema82 = {
  "properties": {
    "data": {
      "$ref": "j3ZhcsjXeKUskCClLQFzcnK3B7YbIeu8vRgVZgWosIo"
    }
  },
  "required": ["data"],
  "type": "object",
  "nullable": true
};
const schema83 = {
  "items": {
    "$ref": "2u5hH7B4D1AmJ7uPdRM6RlzaiWYCOdBgWqEZ6K2loQc"
  },
  "type": "array"
};
const schema84 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "valueMap": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "version": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["key"],
  "type": "object"
};
function validate264(data, {
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
      if (!validate21(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate24(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.valueMap !== undefined) {
      if (!validate49(data.valueMap, {
        instancePath: instancePath + "/valueMap",
        parentData: data,
        parentDataProperty: "valueMap",
        rootData
      })) {
        vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate24(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
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
  validate264.errors = vErrors;
  return errors === 0;
}
function validate263(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate264(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate264.errors : vErrors.concat(validate264.errors);
        errors = vErrors.length;
      }
    }
  } else {
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
  validate263.errors = vErrors;
  return errors === 0;
}
function validate262(data, {
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
    if (data.data === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "data"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.data !== undefined) {
      if (!validate263(data.data, {
        instancePath: instancePath + "/data",
        parentData: data,
        parentDataProperty: "data",
        rootData
      })) {
        vErrors = vErrors === null ? validate263.errors : vErrors.concat(validate263.errors);
        errors = vErrors.length;
      }
    }
  }
  validate262.errors = vErrors;
  return errors === 0;
}
const schema85 = {
  "properties": {
    "apiKey": {
      "$ref": "jMxJE4DnRZa4aLnrrJ3Hiv8VKCHqtTpznWnZbKU9cw"
    },
    "apiUrl": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema86 = {
  "properties": {
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate273(data, {
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
    if (data.secretRef !== undefined) {
      if (!validate25(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate273.errors = vErrors;
  return errors === 0;
}
function validate272(data, {
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
    if (data.apiKey !== undefined) {
      if (!validate273(data.apiKey, {
        instancePath: instancePath + "/apiKey",
        parentData: data,
        parentDataProperty: "apiKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate273.errors : vErrors.concat(validate273.errors);
        errors = vErrors.length;
      }
    }
    if (data.apiUrl !== undefined) {
      if (!validate24(data.apiUrl, {
        instancePath: instancePath + "/apiUrl",
        parentData: data,
        parentDataProperty: "apiUrl",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate272.errors = vErrors;
  return errors === 0;
}
const schema87 = {
  "properties": {
    "auth": {
      "$ref": "oX4SdxudMFxz4quxeq3m2P3vMwhsXHtkMVuMfFxa1Q"
    },
    "location": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "projectID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema88 = {
  "properties": {
    "secretRef": {
      "$ref": "aitcR5ArJbTn22oOOwNot6r838Gl3NtdMSNwlMpd6U"
    },
    "workloadIdentity": {
      "$ref": "EWWyGkfFui4ebEy0UCxN1sXqCV8KonTanY1PFSainGw"
    }
  },
  "type": "object",
  "nullable": true
};
const schema89 = {
  "properties": {
    "secretAccessKeySecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate280(data, {
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
    if (data.secretAccessKeySecretRef !== undefined) {
      if (!validate25(data.secretAccessKeySecretRef, {
        instancePath: instancePath + "/secretAccessKeySecretRef",
        parentData: data,
        parentDataProperty: "secretAccessKeySecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate280.errors = vErrors;
  return errors === 0;
}
const schema90 = {
  "properties": {
    "clusterLocation": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "clusterName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "clusterProjectID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "serviceAccountRef": {
      "$ref": "eH3ZZWFpYYMv68okqQ8o9kd1pz6DAw1yuQFxSwDA"
    }
  },
  "required": ["clusterLocation", "clusterName", "serviceAccountRef"],
  "type": "object",
  "nullable": true
};
const schema26 = {
  "properties": {
    "audiences": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["name"],
  "type": "object"
};
function validate66(data, {
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
    if (data.audiences !== undefined) {
      if (!validate22(data.audiences, {
        instancePath: instancePath + "/audiences",
        parentData: data,
        parentDataProperty: "audiences",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate21(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate24(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
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
  validate66.errors = vErrors;
  return errors === 0;
}
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
    if (data.clusterLocation === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "clusterLocation"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.clusterName === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "clusterName"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.serviceAccountRef === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "serviceAccountRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.clusterLocation !== undefined) {
      if (!validate21(data.clusterLocation, {
        instancePath: instancePath + "/clusterLocation",
        parentData: data,
        parentDataProperty: "clusterLocation",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterName !== undefined) {
      if (!validate21(data.clusterName, {
        instancePath: instancePath + "/clusterName",
        parentData: data,
        parentDataProperty: "clusterName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterProjectID !== undefined) {
      if (!validate24(data.clusterProjectID, {
        instancePath: instancePath + "/clusterProjectID",
        parentData: data,
        parentDataProperty: "clusterProjectID",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate66(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
        errors = vErrors.length;
      }
    }
  }
  validate283.errors = vErrors;
  return errors === 0;
}
function validate279(data, {
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
    if (data.secretRef !== undefined) {
      if (!validate280(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate280.errors : vErrors.concat(validate280.errors);
        errors = vErrors.length;
      }
    }
    if (data.workloadIdentity !== undefined) {
      if (!validate283(data.workloadIdentity, {
        instancePath: instancePath + "/workloadIdentity",
        parentData: data,
        parentDataProperty: "workloadIdentity",
        rootData
      })) {
        vErrors = vErrors === null ? validate283.errors : vErrors.concat(validate283.errors);
        errors = vErrors.length;
      }
    }
  }
  validate279.errors = vErrors;
  return errors === 0;
}
function validate278(data, {
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
    if (data.auth !== undefined) {
      if (!validate279(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate279.errors : vErrors.concat(validate279.errors);
        errors = vErrors.length;
      }
    }
    if (data.location !== undefined) {
      if (!validate24(data.location, {
        instancePath: instancePath + "/location",
        parentData: data,
        parentDataProperty: "location",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.projectID !== undefined) {
      if (!validate24(data.projectID, {
        instancePath: instancePath + "/projectID",
        parentData: data,
        parentDataProperty: "projectID",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate278.errors = vErrors;
  return errors === 0;
}
const schema91 = {
  "properties": {
    "auth": {
      "$ref": "jcfdZ5DnY8dQSOK0d264GbBtATMnUOpC3sVmdk3Y"
    },
    "environment": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "groupIDs": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "inheritFromGroups": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "projectID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "url": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["auth"],
  "type": "object",
  "nullable": true
};
const schema92 = {
  "properties": {
    "SecretRef": {
      "$ref": "ZZfHWl5aicFfEMmIFFCeVqRPzesXsNs7yZvEwYC8"
    }
  },
  "required": ["SecretRef"],
  "type": "object"
};
const schema93 = {
  "properties": {
    "accessToken": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object"
};
function validate295(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.accessToken !== undefined) {
      if (!validate25(data.accessToken, {
        instancePath: instancePath + "/accessToken",
        parentData: data,
        parentDataProperty: "accessToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
  validate295.errors = vErrors;
  return errors === 0;
}
function validate294(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.SecretRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "SecretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.SecretRef !== undefined) {
      if (!validate295(data.SecretRef, {
        instancePath: instancePath + "/SecretRef",
        parentData: data,
        parentDataProperty: "SecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate295.errors : vErrors.concat(validate295.errors);
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
  validate294.errors = vErrors;
  return errors === 0;
}
function validate293(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate294(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate294.errors : vErrors.concat(validate294.errors);
        errors = vErrors.length;
      }
    }
    if (data.environment !== undefined) {
      if (!validate24(data.environment, {
        instancePath: instancePath + "/environment",
        parentData: data,
        parentDataProperty: "environment",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.groupIDs !== undefined) {
      if (!validate22(data.groupIDs, {
        instancePath: instancePath + "/groupIDs",
        parentData: data,
        parentDataProperty: "groupIDs",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.inheritFromGroups !== undefined) {
      if (!validate51(data.inheritFromGroups, {
        instancePath: instancePath + "/inheritFromGroups",
        parentData: data,
        parentDataProperty: "inheritFromGroups",
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
    if (data.projectID !== undefined) {
      if (!validate24(data.projectID, {
        instancePath: instancePath + "/projectID",
        parentData: data,
        parentDataProperty: "projectID",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate24(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate293.errors = vErrors;
  return errors === 0;
}
const schema94 = {
  "properties": {
    "auth": {
      "$ref": "v70fq35A8LPhLbt1Wn6AoSvToNRwSuQ31i4cWhAs"
    },
    "serviceUrl": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["auth"],
  "type": "object",
  "nullable": true
};
const schema95 = {
  "maxProperties": 1,
  "minProperties": 1,
  "properties": {
    "containerAuth": {
      "$ref": "vx8hsdroSd7EVTWHle2GGewSAYgTI6xxg3DwJmHA9Q"
    },
    "secretRef": {
      "$ref": "lFw1fitbD9rb6AtHRRM0LSNLqM5pJSBa9KGzazYRSe0"
    }
  },
  "type": "object"
};
const schema96 = {
  "properties": {
    "iamEndpoint": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "profile": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "tokenLocation": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["profile"],
  "type": "object",
  "nullable": true
};
function validate307(data, {
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
    if (data.profile === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "profile"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.iamEndpoint !== undefined) {
      if (!validate24(data.iamEndpoint, {
        instancePath: instancePath + "/iamEndpoint",
        parentData: data,
        parentDataProperty: "iamEndpoint",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.profile !== undefined) {
      if (!validate21(data.profile, {
        instancePath: instancePath + "/profile",
        parentData: data,
        parentDataProperty: "profile",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.tokenLocation !== undefined) {
      if (!validate24(data.tokenLocation, {
        instancePath: instancePath + "/tokenLocation",
        parentData: data,
        parentDataProperty: "tokenLocation",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate307.errors = vErrors;
  return errors === 0;
}
const schema97 = {
  "properties": {
    "secretApiKeySecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate312(data, {
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
    if (data.secretApiKeySecretRef !== undefined) {
      if (!validate25(data.secretApiKeySecretRef, {
        instancePath: instancePath + "/secretApiKeySecretRef",
        parentData: data,
        parentDataProperty: "secretApiKeySecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate312.errors = vErrors;
  return errors === 0;
}
function validate306(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (Object.keys(data).length > 1) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxProperties",
        keyword: "maxProperties",
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
    if (Object.keys(data).length < 1) {
      const err1 = {
        instancePath,
        schemaPath: "#/minProperties",
        keyword: "minProperties",
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
    if (data.containerAuth !== undefined) {
      if (!validate307(data.containerAuth, {
        instancePath: instancePath + "/containerAuth",
        parentData: data,
        parentDataProperty: "containerAuth",
        rootData
      })) {
        vErrors = vErrors === null ? validate307.errors : vErrors.concat(validate307.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate312(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate312.errors : vErrors.concat(validate312.errors);
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
  validate306.errors = vErrors;
  return errors === 0;
}
function validate305(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate306(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate306.errors : vErrors.concat(validate306.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceUrl !== undefined) {
      if (!validate24(data.serviceUrl, {
        instancePath: instancePath + "/serviceUrl",
        parentData: data,
        parentDataProperty: "serviceUrl",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate305.errors = vErrors;
  return errors === 0;
}
const schema98 = {
  "properties": {
    "auth": {
      "$ref": "N616N2p1IYvTJPVXzIN7IXn5eZXF6oFADVhiHGYbs"
    },
    "hostAPI": {
      "$ref": "NbFvnepnrZ3ZhPMI89NROblwiLR4kKrtxiakIslLKRE"
    },
    "secretsScope": {
      "$ref": "SCfvOmHDKVyMg1cqzORiiJQx2inPGZkMRVEMrC9Hc"
    }
  },
  "required": ["auth", "secretsScope"],
  "type": "object",
  "nullable": true
};
const schema99 = {
  "properties": {
    "universalAuthCredentials": {
      "$ref": "ewgLOJcJW5YHvisM4pvao9VenISyRiC6Xd5n47cwzI"
    }
  },
  "type": "object"
};
const schema100 = {
  "properties": {
    "clientId": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    },
    "clientSecret": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["clientId", "clientSecret"],
  "type": "object",
  "nullable": true
};
function validate320(data, {
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
    if (data.clientId !== undefined) {
      if (!validate29(data.clientId, {
        instancePath: instancePath + "/clientId",
        parentData: data,
        parentDataProperty: "clientId",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientSecret !== undefined) {
      if (!validate29(data.clientSecret, {
        instancePath: instancePath + "/clientSecret",
        parentData: data,
        parentDataProperty: "clientSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate320.errors = vErrors;
  return errors === 0;
}
function validate319(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.universalAuthCredentials !== undefined) {
      if (!validate320(data.universalAuthCredentials, {
        instancePath: instancePath + "/universalAuthCredentials",
        parentData: data,
        parentDataProperty: "universalAuthCredentials",
        rootData
      })) {
        vErrors = vErrors === null ? validate320.errors : vErrors.concat(validate320.errors);
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
  validate319.errors = vErrors;
  return errors === 0;
}
const schema101 = {
  "default": "https://app.infisical.com/api",
  "type": "string",
  "nullable": true
};
function validate325(data, {
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
  validate325.errors = vErrors;
  return errors === 0;
}
const schema102 = {
  "properties": {
    "environmentSlug": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "projectSlug": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "recursive": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "secretsPath": {
      "$ref": "z6LHlrknYSxhvGB40fWbleDDx5iN5dAfq5SPMmkey8"
    }
  },
  "required": ["environmentSlug", "projectSlug"],
  "type": "object"
};
const schema22 = {
  "default": false,
  "type": "boolean",
  "nullable": true
};
function validate58(data, {
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
  validate58.errors = vErrors;
  return errors === 0;
}
const schema103 = {
  "default": "/",
  "type": "string",
  "nullable": true
};
function validate331(data, {
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
  validate331.errors = vErrors;
  return errors === 0;
}
function validate327(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.environmentSlug === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "environmentSlug"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.projectSlug === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "projectSlug"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.environmentSlug !== undefined) {
      if (!validate21(data.environmentSlug, {
        instancePath: instancePath + "/environmentSlug",
        parentData: data,
        parentDataProperty: "environmentSlug",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.projectSlug !== undefined) {
      if (!validate21(data.projectSlug, {
        instancePath: instancePath + "/projectSlug",
        parentData: data,
        parentDataProperty: "projectSlug",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.recursive !== undefined) {
      if (!validate58(data.recursive, {
        instancePath: instancePath + "/recursive",
        parentData: data,
        parentDataProperty: "recursive",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretsPath !== undefined) {
      if (!validate331(data.secretsPath, {
        instancePath: instancePath + "/secretsPath",
        parentData: data,
        parentDataProperty: "secretsPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate331.errors : vErrors.concat(validate331.errors);
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
  validate327.errors = vErrors;
  return errors === 0;
}
function validate318(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.secretsScope === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretsScope"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate319(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate319.errors : vErrors.concat(validate319.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostAPI !== undefined) {
      if (!validate325(data.hostAPI, {
        instancePath: instancePath + "/hostAPI",
        parentData: data,
        parentDataProperty: "hostAPI",
        rootData
      })) {
        vErrors = vErrors === null ? validate325.errors : vErrors.concat(validate325.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretsScope !== undefined) {
      if (!validate327(data.secretsScope, {
        instancePath: instancePath + "/secretsScope",
        parentData: data,
        parentDataProperty: "secretsScope",
        rootData
      })) {
        vErrors = vErrors === null ? validate327.errors : vErrors.concat(validate327.errors);
        errors = vErrors.length;
      }
    }
  }
  validate318.errors = vErrors;
  return errors === 0;
}
const schema104 = {
  "properties": {
    "authRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    },
    "folderID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["authRef", "folderID"],
  "type": "object",
  "nullable": true
};
function validate335(data, {
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
    if (data.authRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "authRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.folderID === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "folderID"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.authRef !== undefined) {
      if (!validate29(data.authRef, {
        instancePath: instancePath + "/authRef",
        parentData: data,
        parentDataProperty: "authRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.folderID !== undefined) {
      if (!validate21(data.folderID, {
        instancePath: instancePath + "/folderID",
        parentData: data,
        parentDataProperty: "folderID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate335.errors = vErrors;
  return errors === 0;
}
const schema105 = {
  "properties": {
    "auth": {
      "$ref": "iVoNIP6ZSjPfY38ajoVErGtVkNi4gipBtHCnGky6lw"
    },
    "authRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "remoteNamespace": {
      "$ref": "Rek3LtOlEEpHxoGZ6pShOlQzdnylOCoJWbuYOFxt4o"
    },
    "server": {
      "$ref": "WDaY2fuLC600xsROfK8a3C3sJfvC2ZCULsYqAMs"
    }
  },
  "type": "object",
  "nullable": true
};
const schema106 = {
  "maxProperties": 1,
  "minProperties": 1,
  "properties": {
    "cert": {
      "$ref": "etSgelSeSa1PUxhiNLVFAZ9LXqrrAPqTq5M1UTqv1k"
    },
    "serviceAccount": {
      "$ref": "1ahVOR2eDYxHyGU0TRbhcXIs2rjAF3PFgjzCGXI7Co"
    },
    "token": {
      "$ref": "UIK1fR7nSgFWfRuIIGQ7IsBycS3qM3pVjCvTYjEde0s"
    }
  },
  "type": "object",
  "nullable": true
};
const schema107 = {
  "properties": {
    "clientCert": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "clientKey": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate341(data, {
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
    if (data.clientCert !== undefined) {
      if (!validate25(data.clientCert, {
        instancePath: instancePath + "/clientCert",
        parentData: data,
        parentDataProperty: "clientCert",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientKey !== undefined) {
      if (!validate25(data.clientKey, {
        instancePath: instancePath + "/clientKey",
        parentData: data,
        parentDataProperty: "clientKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate341.errors = vErrors;
  return errors === 0;
}
const schema108 = {
  "properties": {
    "bearerToken": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate346(data, {
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
    if (data.bearerToken !== undefined) {
      if (!validate25(data.bearerToken, {
        instancePath: instancePath + "/bearerToken",
        parentData: data,
        parentDataProperty: "bearerToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate346.errors = vErrors;
  return errors === 0;
}
function validate340(data, {
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
    if (Object.keys(data).length > 1) {
      const err1 = {
        instancePath,
        schemaPath: "#/maxProperties",
        keyword: "maxProperties",
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
    if (Object.keys(data).length < 1) {
      const err2 = {
        instancePath,
        schemaPath: "#/minProperties",
        keyword: "minProperties",
        params: {
          limit: 1
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.cert !== undefined) {
      if (!validate341(data.cert, {
        instancePath: instancePath + "/cert",
        parentData: data,
        parentDataProperty: "cert",
        rootData
      })) {
        vErrors = vErrors === null ? validate341.errors : vErrors.concat(validate341.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccount !== undefined) {
      if (!validate33(data.serviceAccount, {
        instancePath: instancePath + "/serviceAccount",
        parentData: data,
        parentDataProperty: "serviceAccount",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.token !== undefined) {
      if (!validate346(data.token, {
        instancePath: instancePath + "/token",
        parentData: data,
        parentDataProperty: "token",
        rootData
      })) {
        vErrors = vErrors === null ? validate346.errors : vErrors.concat(validate346.errors);
        errors = vErrors.length;
      }
    }
  }
  validate340.errors = vErrors;
  return errors === 0;
}
const schema109 = {
  "default": "default",
  "type": "string",
  "nullable": true
};
function validate351(data, {
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
  validate351.errors = vErrors;
  return errors === 0;
}
const schema110 = {
  "properties": {
    "caBundle": {
      "$ref": "0d0YjoHtjtI7p6BAHkZ9AtqFZvdnJ29AdGDpfxXc"
    },
    "caProvider": {
      "$ref": "ccuX4CoNUWP2IVzFHEaaIQm8VaPKTbUUXdH7thAmxo"
    },
    "url": {
      "$ref": "qyI3WFYbdYxpvhFbVjsJ3ph1Z1ESY0TWbBo9WmGtA"
    }
  },
  "type": "object",
  "nullable": true
};
const schema111 = {
  "default": "kubernetes.default",
  "type": "string",
  "nullable": true
};
function validate356(data, {
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
  validate356.errors = vErrors;
  return errors === 0;
}
function validate353(data, {
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
    if (data.caBundle !== undefined) {
      if (!validate52(data.caBundle, {
        instancePath: instancePath + "/caBundle",
        parentData: data,
        parentDataProperty: "caBundle",
        rootData
      })) {
        vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
        errors = vErrors.length;
      }
    }
    if (data.caProvider !== undefined) {
      if (!validate43(data.caProvider, {
        instancePath: instancePath + "/caProvider",
        parentData: data,
        parentDataProperty: "caProvider",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate356(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate356.errors : vErrors.concat(validate356.errors);
        errors = vErrors.length;
      }
    }
  }
  validate353.errors = vErrors;
  return errors === 0;
}
function validate339(data, {
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
    if (data.auth !== undefined) {
      if (!validate340(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate340.errors : vErrors.concat(validate340.errors);
        errors = vErrors.length;
      }
    }
    if (data.authRef !== undefined) {
      if (!validate25(data.authRef, {
        instancePath: instancePath + "/authRef",
        parentData: data,
        parentDataProperty: "authRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.remoteNamespace !== undefined) {
      if (!validate351(data.remoteNamespace, {
        instancePath: instancePath + "/remoteNamespace",
        parentData: data,
        parentDataProperty: "remoteNamespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate351.errors : vErrors.concat(validate351.errors);
        errors = vErrors.length;
      }
    }
    if (data.server !== undefined) {
      if (!validate353(data.server, {
        instancePath: instancePath + "/server",
        parentData: data,
        parentDataProperty: "server",
        rootData
      })) {
        vErrors = vErrors === null ? validate353.errors : vErrors.concat(validate353.errors);
        errors = vErrors.length;
      }
    }
  }
  validate339.errors = vErrors;
  return errors === 0;
}
const schema112 = {
  "properties": {
    "apiHost": {
      "$ref": "EKBPnQOaZVLEIQ401hrWjc2ZlCt1h96s38inbEahCE"
    },
    "auth": {
      "$ref": "BdQmzyI6F6WHFwl85jholSHZQRp41LnkyQlhA5DFEI"
    },
    "environment": {
      "$ref": "l8pY3eRF98WB08nZaoYLMCK0V4vykcA74lqcEPEDmRU"
    },
    "project": {
      "$ref": "l8pY3eRF98WB08nZaoYLMCK0V4vykcA74lqcEPEDmRU"
    }
  },
  "required": ["apiHost", "auth", "environment", "project"],
  "type": "object",
  "nullable": true
};
const schema113 = {
  "default": "https://public.onboardbase.com/api/v1/",
  "type": "string"
};
function validate361(data, {
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
  validate361.errors = vErrors;
  return errors === 0;
}
const schema114 = {
  "properties": {
    "apiKeyRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    },
    "passcodeRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["apiKeyRef", "passcodeRef"],
  "type": "object"
};
function validate363(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.apiKeyRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "apiKeyRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.passcodeRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "passcodeRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.apiKeyRef !== undefined) {
      if (!validate29(data.apiKeyRef, {
        instancePath: instancePath + "/apiKeyRef",
        parentData: data,
        parentDataProperty: "apiKeyRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.passcodeRef !== undefined) {
      if (!validate29(data.passcodeRef, {
        instancePath: instancePath + "/passcodeRef",
        parentData: data,
        parentDataProperty: "passcodeRef",
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
  validate363.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "default": "development",
  "type": "string"
};
function validate53(data, {
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
  validate53.errors = vErrors;
  return errors === 0;
}
function validate360(data, {
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
    if (data.apiHost === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "apiHost"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.auth === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.environment === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "environment"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.project === undefined) {
      const err4 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "project"
        }
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.apiHost !== undefined) {
      if (!validate361(data.apiHost, {
        instancePath: instancePath + "/apiHost",
        parentData: data,
        parentDataProperty: "apiHost",
        rootData
      })) {
        vErrors = vErrors === null ? validate361.errors : vErrors.concat(validate361.errors);
        errors = vErrors.length;
      }
    }
    if (data.auth !== undefined) {
      if (!validate363(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate363.errors : vErrors.concat(validate363.errors);
        errors = vErrors.length;
      }
    }
    if (data.environment !== undefined) {
      if (!validate53(data.environment, {
        instancePath: instancePath + "/environment",
        parentData: data,
        parentDataProperty: "environment",
        rootData
      })) {
        vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
        errors = vErrors.length;
      }
    }
    if (data.project !== undefined) {
      if (!validate53(data.project, {
        instancePath: instancePath + "/project",
        parentData: data,
        parentDataProperty: "project",
        rootData
      })) {
        vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
        errors = vErrors.length;
      }
    }
  }
  validate360.errors = vErrors;
  return errors === 0;
}
const schema115 = {
  "properties": {
    "auth": {
      "$ref": "v3eUTFMZzHnPqUPP2HD2n1CpEciX1IeXQfg5mPRvY"
    },
    "connectHost": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "vaults": {
      "$ref": "Fopw0ZsFbidJU3yVrPJTNPH51WqesRWLq5rvMaDWHU"
    }
  },
  "required": ["auth", "connectHost", "vaults"],
  "type": "object",
  "nullable": true
};
const schema116 = {
  "properties": {
    "secretRef": {
      "$ref": "ekqm0SUo4DgJNE7aCiljzjXjk9oRTpMT726e3vQwM"
    }
  },
  "required": ["secretRef"],
  "type": "object"
};
const schema117 = {
  "properties": {
    "connectTokenSecretRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["connectTokenSecretRef"],
  "type": "object"
};
function validate372(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.connectTokenSecretRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "connectTokenSecretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.connectTokenSecretRef !== undefined) {
      if (!validate29(data.connectTokenSecretRef, {
        instancePath: instancePath + "/connectTokenSecretRef",
        parentData: data,
        parentDataProperty: "connectTokenSecretRef",
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
  validate372.errors = vErrors;
  return errors === 0;
}
function validate371(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.secretRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.secretRef !== undefined) {
      if (!validate372(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate372.errors : vErrors.concat(validate372.errors);
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
  validate371.errors = vErrors;
  return errors === 0;
}
const schema118 = {
  "additionalProperties": {
    "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
  },
  "type": "object",
  "properties": {}
};
const schema119 = {
  "type": "integer"
};
function validate378(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(typeof data == "number" && !(data % 1) && !isNaN(data) && isFinite(data))) {
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
  validate378.errors = vErrors;
  return errors === 0;
}
function validate377(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    for (const key0 in data) {
      if (!validate378(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate378.errors : vErrors.concat(validate378.errors);
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
  validate377.errors = vErrors;
  return errors === 0;
}
function validate370(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.connectHost === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "connectHost"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.vaults === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "vaults"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate371(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate371.errors : vErrors.concat(validate371.errors);
        errors = vErrors.length;
      }
    }
    if (data.connectHost !== undefined) {
      if (!validate21(data.connectHost, {
        instancePath: instancePath + "/connectHost",
        parentData: data,
        parentDataProperty: "connectHost",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.vaults !== undefined) {
      if (!validate377(data.vaults, {
        instancePath: instancePath + "/vaults",
        parentData: data,
        parentDataProperty: "vaults",
        rootData
      })) {
        vErrors = vErrors === null ? validate377.errors : vErrors.concat(validate377.errors);
        errors = vErrors.length;
      }
    }
  }
  validate370.errors = vErrors;
  return errors === 0;
}
const schema120 = {
  "properties": {
    "auth": {
      "$ref": "eQxM4JNBSA61SZ83h8t0ugJUmiROssxN782xxAVKQ"
    },
    "compartment": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "encryptionKey": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "principalType": {
      "$ref": "B0oAD1tpr7RYk3unETJDz1TKqEvdkNvFQJdzihOYEQ"
    },
    "region": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "serviceAccountRef": {
      "$ref": "1ahVOR2eDYxHyGU0TRbhcXIs2rjAF3PFgjzCGXI7Co"
    },
    "vault": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["region", "vault"],
  "type": "object",
  "nullable": true
};
const schema121 = {
  "properties": {
    "secretRef": {
      "$ref": "b7OHI8qXmqf04Rg3pmYRpX6HIW3Wr06S5wPTu5PaU"
    },
    "tenancy": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "user": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["secretRef", "tenancy", "user"],
  "type": "object",
  "nullable": true
};
const schema122 = {
  "properties": {
    "fingerprint": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    },
    "privatekey": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["fingerprint", "privatekey"],
  "type": "object"
};
function validate384(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.fingerprint === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "fingerprint"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.privatekey === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "privatekey"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fingerprint !== undefined) {
      if (!validate29(data.fingerprint, {
        instancePath: instancePath + "/fingerprint",
        parentData: data,
        parentDataProperty: "fingerprint",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.privatekey !== undefined) {
      if (!validate29(data.privatekey, {
        instancePath: instancePath + "/privatekey",
        parentData: data,
        parentDataProperty: "privatekey",
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
  validate384.errors = vErrors;
  return errors === 0;
}
function validate383(data, {
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
    if (data.secretRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.tenancy === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "tenancy"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.user === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "user"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.secretRef !== undefined) {
      if (!validate384(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate384.errors : vErrors.concat(validate384.errors);
        errors = vErrors.length;
      }
    }
    if (data.tenancy !== undefined) {
      if (!validate21(data.tenancy, {
        instancePath: instancePath + "/tenancy",
        parentData: data,
        parentDataProperty: "tenancy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.user !== undefined) {
      if (!validate21(data.user, {
        instancePath: instancePath + "/user",
        parentData: data,
        parentDataProperty: "user",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate383.errors = vErrors;
  return errors === 0;
}
const schema123 = {
  "enum": ["", "UserPrincipal", "InstancePrincipal", "Workload"],
  "type": "string",
  "nullable": true
};
function validate393(data, {
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
  if (!(data === "" || data === "UserPrincipal" || data === "InstancePrincipal" || data === "Workload")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema123.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate393.errors = vErrors;
  return errors === 0;
}
function validate382(data, {
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
    if (data.region === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "region"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.vault === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "vault"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate383(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate383.errors : vErrors.concat(validate383.errors);
        errors = vErrors.length;
      }
    }
    if (data.compartment !== undefined) {
      if (!validate24(data.compartment, {
        instancePath: instancePath + "/compartment",
        parentData: data,
        parentDataProperty: "compartment",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.encryptionKey !== undefined) {
      if (!validate24(data.encryptionKey, {
        instancePath: instancePath + "/encryptionKey",
        parentData: data,
        parentDataProperty: "encryptionKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.principalType !== undefined) {
      if (!validate393(data.principalType, {
        instancePath: instancePath + "/principalType",
        parentData: data,
        parentDataProperty: "principalType",
        rootData
      })) {
        vErrors = vErrors === null ? validate393.errors : vErrors.concat(validate393.errors);
        errors = vErrors.length;
      }
    }
    if (data.region !== undefined) {
      if (!validate21(data.region, {
        instancePath: instancePath + "/region",
        parentData: data,
        parentDataProperty: "region",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate33(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.vault !== undefined) {
      if (!validate21(data.vault, {
        instancePath: instancePath + "/vault",
        parentData: data,
        parentDataProperty: "vault",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate382.errors = vErrors;
  return errors === 0;
}
const schema124 = {
  "properties": {
    "auth": {
      "$ref": "dwsnsQ4CM8G5Z8Uf6rhF5rAzcm1krRd7Hm7dyTVGvbc"
    },
    "host": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["auth", "host"],
  "type": "object",
  "nullable": true
};
const schema125 = {
  "properties": {
    "passwordSecretRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    },
    "privateKeySecretRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["passwordSecretRef", "privateKeySecretRef"],
  "type": "object"
};
function validate400(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.passwordSecretRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "passwordSecretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.privateKeySecretRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "privateKeySecretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.passwordSecretRef !== undefined) {
      if (!validate29(data.passwordSecretRef, {
        instancePath: instancePath + "/passwordSecretRef",
        parentData: data,
        parentDataProperty: "passwordSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.privateKeySecretRef !== undefined) {
      if (!validate29(data.privateKeySecretRef, {
        instancePath: instancePath + "/privateKeySecretRef",
        parentData: data,
        parentDataProperty: "privateKeySecretRef",
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
  validate400.errors = vErrors;
  return errors === 0;
}
function validate399(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.host === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "host"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate400(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate400.errors : vErrors.concat(validate400.errors);
        errors = vErrors.length;
      }
    }
    if (data.host !== undefined) {
      if (!validate21(data.host, {
        instancePath: instancePath + "/host",
        parentData: data,
        parentDataProperty: "host",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate399.errors = vErrors;
  return errors === 0;
}
const schema126 = {
  "properties": {
    "auth": {
      "$ref": "uuLbtoPc1MlUKSTgWenAHC0H2SBrv2eFU25ejxE"
    },
    "database": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "host": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["auth", "database", "host"],
  "type": "object",
  "nullable": true
};
function validate406(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.database === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "database"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.host === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "host"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate54(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.database !== undefined) {
      if (!validate21(data.database, {
        instancePath: instancePath + "/database",
        parentData: data,
        parentDataProperty: "database",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.host !== undefined) {
      if (!validate21(data.host, {
        instancePath: instancePath + "/host",
        parentData: data,
        parentDataProperty: "host",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate406.errors = vErrors;
  return errors === 0;
}
const schema127 = {
  "properties": {
    "auth": {
      "$ref": "nvXme7PKYqeWKTdxLjfLmYmXkbJnL9hMpwgmiJaQ"
    },
    "baseUri": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["auth"],
  "type": "object",
  "nullable": true
};
const schema128 = {
  "properties": {
    "secretRef": {
      "$ref": "FNfKpRZrPHsSj0J8E33PaAmjTTBUGHFJCeyaxqTQ"
    }
  },
  "type": "object"
};
const schema129 = {
  "properties": {
    "accessToken": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["accessToken"],
  "type": "object",
  "nullable": true
};
function validate413(data, {
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
    if (data.accessToken === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "accessToken"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.accessToken !== undefined) {
      if (!validate29(data.accessToken, {
        instancePath: instancePath + "/accessToken",
        parentData: data,
        parentDataProperty: "accessToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate413.errors = vErrors;
  return errors === 0;
}
function validate412(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.secretRef !== undefined) {
      if (!validate413(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate413.errors : vErrors.concat(validate413.errors);
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
  validate412.errors = vErrors;
  return errors === 0;
}
function validate411(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate412(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate412.errors : vErrors.concat(validate412.errors);
        errors = vErrors.length;
      }
    }
    if (data.baseUri !== undefined) {
      if (!validate24(data.baseUri, {
        instancePath: instancePath + "/baseUri",
        parentData: data,
        parentDataProperty: "baseUri",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate411.errors = vErrors;
  return errors === 0;
}
const schema130 = {
  "properties": {
    "accessToken": {
      "$ref": "1dqGNBUwursFE3LoDtmP8CVUnElkyTk1eUDVGeGfG7Y"
    },
    "apiUrl": {
      "$ref": "GCa6zHaueNv1AopZhIey6QYS7IuASw5PwOetNBo"
    },
    "environment": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "organization": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "project": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["accessToken", "environment", "organization", "project"],
  "type": "object",
  "nullable": true
};
const schema131 = {
  "properties": {
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object"
};
function validate420(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.secretRef !== undefined) {
      if (!validate25(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
  validate420.errors = vErrors;
  return errors === 0;
}
const schema132 = {
  "default": "https://api.pulumi.com/api/esc",
  "type": "string",
  "nullable": true
};
function validate423(data, {
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
  validate423.errors = vErrors;
  return errors === 0;
}
function validate419(data, {
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
    if (data.accessToken === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "accessToken"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.environment === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "environment"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.organization === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "organization"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.project === undefined) {
      const err4 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "project"
        }
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.accessToken !== undefined) {
      if (!validate420(data.accessToken, {
        instancePath: instancePath + "/accessToken",
        parentData: data,
        parentDataProperty: "accessToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate420.errors : vErrors.concat(validate420.errors);
        errors = vErrors.length;
      }
    }
    if (data.apiUrl !== undefined) {
      if (!validate423(data.apiUrl, {
        instancePath: instancePath + "/apiUrl",
        parentData: data,
        parentDataProperty: "apiUrl",
        rootData
      })) {
        vErrors = vErrors === null ? validate423.errors : vErrors.concat(validate423.errors);
        errors = vErrors.length;
      }
    }
    if (data.environment !== undefined) {
      if (!validate21(data.environment, {
        instancePath: instancePath + "/environment",
        parentData: data,
        parentDataProperty: "environment",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.organization !== undefined) {
      if (!validate21(data.organization, {
        instancePath: instancePath + "/organization",
        parentData: data,
        parentDataProperty: "organization",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.project !== undefined) {
      if (!validate21(data.project, {
        instancePath: instancePath + "/project",
        parentData: data,
        parentDataProperty: "project",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate419.errors = vErrors;
  return errors === 0;
}
const schema133 = {
  "properties": {
    "accessKey": {
      "$ref": "0bOyAsW3EUlIqHmuqJzZZ6Y4nUzkjckoVhAp5mQU"
    },
    "apiUrl": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "projectId": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "region": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "secretKey": {
      "$ref": "0bOyAsW3EUlIqHmuqJzZZ6Y4nUzkjckoVhAp5mQU"
    }
  },
  "required": ["accessKey", "projectId", "region", "secretKey"],
  "type": "object",
  "nullable": true
};
function validate429(data, {
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
    if (data.accessKey === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "accessKey"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.projectId === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "projectId"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.region === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "region"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.secretKey === undefined) {
      const err4 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretKey"
        }
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.accessKey !== undefined) {
      if (!validate40(data.accessKey, {
        instancePath: instancePath + "/accessKey",
        parentData: data,
        parentDataProperty: "accessKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.apiUrl !== undefined) {
      if (!validate24(data.apiUrl, {
        instancePath: instancePath + "/apiUrl",
        parentData: data,
        parentDataProperty: "apiUrl",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.projectId !== undefined) {
      if (!validate21(data.projectId, {
        instancePath: instancePath + "/projectId",
        parentData: data,
        parentDataProperty: "projectId",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.region !== undefined) {
      if (!validate21(data.region, {
        instancePath: instancePath + "/region",
        parentData: data,
        parentDataProperty: "region",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretKey !== undefined) {
      if (!validate40(data.secretKey, {
        instancePath: instancePath + "/secretKey",
        parentData: data,
        parentDataProperty: "secretKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
  }
  validate429.errors = vErrors;
  return errors === 0;
}
const schema134 = {
  "properties": {
    "password": {
      "$ref": "0bOyAsW3EUlIqHmuqJzZZ6Y4nUzkjckoVhAp5mQU"
    },
    "serverURL": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "username": {
      "$ref": "0bOyAsW3EUlIqHmuqJzZZ6Y4nUzkjckoVhAp5mQU"
    }
  },
  "required": ["password", "serverURL", "username"],
  "type": "object",
  "nullable": true
};
function validate436(data, {
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
    if (data.password === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "password"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.serverURL === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "serverURL"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.username === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "username"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.password !== undefined) {
      if (!validate40(data.password, {
        instancePath: instancePath + "/password",
        parentData: data,
        parentDataProperty: "password",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.serverURL !== undefined) {
      if (!validate21(data.serverURL, {
        instancePath: instancePath + "/serverURL",
        parentData: data,
        parentDataProperty: "serverURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.username !== undefined) {
      if (!validate40(data.username, {
        instancePath: instancePath + "/username",
        parentData: data,
        parentDataProperty: "username",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
  }
  validate436.errors = vErrors;
  return errors === 0;
}
const schema135 = {
  "properties": {
    "auth": {
      "$ref": "Os11vWTi4lQ4OvU5keRJmhNFKnolBAlu56mGx25TVOA"
    },
    "ignoreSslCertificate": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "module": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "url": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["auth", "module", "url"],
  "type": "object",
  "nullable": true
};
const schema136 = {
  "properties": {
    "clientId": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "clientSecretSecretRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["clientId", "clientSecretSecretRef"],
  "type": "object"
};
function validate442(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.clientId === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "clientId"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.clientSecretSecretRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "clientSecretSecretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.clientId !== undefined) {
      if (!validate21(data.clientId, {
        instancePath: instancePath + "/clientId",
        parentData: data,
        parentDataProperty: "clientId",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientSecretSecretRef !== undefined) {
      if (!validate29(data.clientSecretSecretRef, {
        instancePath: instancePath + "/clientSecretSecretRef",
        parentData: data,
        parentDataProperty: "clientSecretSecretRef",
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
  validate442.errors = vErrors;
  return errors === 0;
}
function validate441(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.module === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "module"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.url === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "url"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate442(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate442.errors : vErrors.concat(validate442.errors);
        errors = vErrors.length;
      }
    }
    if (data.ignoreSslCertificate !== undefined) {
      if (!validate58(data.ignoreSslCertificate, {
        instancePath: instancePath + "/ignoreSslCertificate",
        parentData: data,
        parentDataProperty: "ignoreSslCertificate",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.module !== undefined) {
      if (!validate21(data.module, {
        instancePath: instancePath + "/module",
        parentData: data,
        parentDataProperty: "module",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate21(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate441.errors = vErrors;
  return errors === 0;
}
const schema137 = {
  "properties": {
    "auth": {
      "$ref": "rXfxAcwa0F1SD5PQU5lWWrd7FX7tCplrHAEY5yvR30"
    },
    "caBundle": {
      "$ref": "0d0YjoHtjtI7p6BAHkZ9AtqFZvdnJ29AdGDpfxXc"
    },
    "caProvider": {
      "$ref": "ccuX4CoNUWP2IVzFHEaaIQm8VaPKTbUUXdH7thAmxo"
    },
    "forwardInconsistent": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "headers": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readYourWrites": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "server": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "tls": {
      "$ref": "pn6fC1Fsk8tirefipoh7sLF4KR2IfzOBYGjs42UNw"
    },
    "version": {
      "$ref": "aFenxjs96W83On4d9LJCHRVBknHCwT4pzI1yV2bGSc"
    }
  },
  "required": ["auth", "server"],
  "type": "object",
  "nullable": true
};
const schema138 = {
  "properties": {
    "appRole": {
      "$ref": "C5O7bfBlOS2KMoIRRVuCQMQPxIV4YCoFGRZanpMhnLU"
    },
    "cert": {
      "$ref": "QmNKotDTBukf9Zho6w9SE3AA8OdyGOT5qalnNxcGUg"
    },
    "iam": {
      "$ref": "XBQKD6KGUp4WiUeWGTjoIESGB0bn4YL9skt5Iu1WVnA"
    },
    "jwt": {
      "$ref": "K1OmXPhZTs57sNN69XpsAGpr1nsSb77z6GBqLBo1b8"
    },
    "kubernetes": {
      "$ref": "NUv66UC03rnZbCznaVZIU2DNRHWz1XNcLRtBPGA4M"
    },
    "ldap": {
      "$ref": "XZCrjlRz4fHRJmYgbxPUVZi0wH3jw0o9MhlMlHHWKBk"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tokenSecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "userPass": {
      "$ref": "CP9qhGkXOO0GVSzKZMqp756n0fAqtFhGC1ZY0FP7I"
    }
  },
  "type": "object"
};
const schema139 = {
  "properties": {
    "path": {
      "$ref": "8wOWFMMSs6FjrokB08hOxYHTqsFjyBu5xjrFKp8E"
    },
    "roleId": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "roleRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "secretRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["path", "secretRef"],
  "type": "object",
  "nullable": true
};
const schema140 = {
  "default": "approle",
  "type": "string"
};
function validate453(data, {
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
  validate453.errors = vErrors;
  return errors === 0;
}
function validate452(data, {
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
    if (data.path === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "path"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.secretRef === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.path !== undefined) {
      if (!validate453(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate453.errors : vErrors.concat(validate453.errors);
        errors = vErrors.length;
      }
    }
    if (data.roleId !== undefined) {
      if (!validate24(data.roleId, {
        instancePath: instancePath + "/roleId",
        parentData: data,
        parentDataProperty: "roleId",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.roleRef !== undefined) {
      if (!validate25(data.roleRef, {
        instancePath: instancePath + "/roleRef",
        parentData: data,
        parentDataProperty: "roleRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate29(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate452.errors = vErrors;
  return errors === 0;
}
const schema141 = {
  "properties": {
    "clientCert": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate459(data, {
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
    if (data.clientCert !== undefined) {
      if (!validate25(data.clientCert, {
        instancePath: instancePath + "/clientCert",
        parentData: data,
        parentDataProperty: "clientCert",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate25(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate459.errors = vErrors;
  return errors === 0;
}
const schema142 = {
  "properties": {
    "externalID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "jwt": {
      "$ref": "bLDXAmEjbF4xQl55HWe0Mg9h0w5DHvqJLI4VAAEu4IY"
    },
    "path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "region": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "role": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretRef": {
      "$ref": "8GAym1kgWrt1Qs2dy5f0aphMnmcNBUf3xpTyWpig"
    },
    "vaultAwsIamServerID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "vaultRole": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["vaultRole"],
  "type": "object",
  "nullable": true
};
function validate463(data, {
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
    if (data.vaultRole === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "vaultRole"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.externalID !== undefined) {
      if (!validate24(data.externalID, {
        instancePath: instancePath + "/externalID",
        parentData: data,
        parentDataProperty: "externalID",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.jwt !== undefined) {
      if (!validate59(data.jwt, {
        instancePath: instancePath + "/jwt",
        parentData: data,
        parentDataProperty: "jwt",
        rootData
      })) {
        vErrors = vErrors === null ? validate59.errors : vErrors.concat(validate59.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate24(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.region !== undefined) {
      if (!validate24(data.region, {
        instancePath: instancePath + "/region",
        parentData: data,
        parentDataProperty: "region",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.role !== undefined) {
      if (!validate24(data.role, {
        instancePath: instancePath + "/role",
        parentData: data,
        parentDataProperty: "role",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate61(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.vaultAwsIamServerID !== undefined) {
      if (!validate24(data.vaultAwsIamServerID, {
        instancePath: instancePath + "/vaultAwsIamServerID",
        parentData: data,
        parentDataProperty: "vaultAwsIamServerID",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.vaultRole !== undefined) {
      if (!validate21(data.vaultRole, {
        instancePath: instancePath + "/vaultRole",
        parentData: data,
        parentDataProperty: "vaultRole",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate463.errors = vErrors;
  return errors === 0;
}
const schema143 = {
  "properties": {
    "kubernetesServiceAccountToken": {
      "$ref": "xJWxJVwQB5FbZyeXUbl8FEVsLjiGLmEVwKCdqiwoSg"
    },
    "path": {
      "$ref": "PkniA7oGeCLnyXHDln8dp8sAEIAyHtIcpQkVykCFJd4"
    },
    "role": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "required": ["path"],
  "type": "object",
  "nullable": true
};
const schema144 = {
  "properties": {
    "audiences": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "expirationSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "serviceAccountRef": {
      "$ref": "eH3ZZWFpYYMv68okqQ8o9kd1pz6DAw1yuQFxSwDA"
    }
  },
  "required": ["serviceAccountRef"],
  "type": "object",
  "nullable": true
};
function validate474(data, {
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
    if (data.serviceAccountRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "serviceAccountRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.audiences !== undefined) {
      if (!validate22(data.audiences, {
        instancePath: instancePath + "/audiences",
        parentData: data,
        parentDataProperty: "audiences",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.expirationSeconds !== undefined) {
      if (!validate65(data.expirationSeconds, {
        instancePath: instancePath + "/expirationSeconds",
        parentData: data,
        parentDataProperty: "expirationSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate66(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
        errors = vErrors.length;
      }
    }
  }
  validate474.errors = vErrors;
  return errors === 0;
}
const schema145 = {
  "default": "jwt",
  "type": "string"
};
function validate479(data, {
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
  validate479.errors = vErrors;
  return errors === 0;
}
function validate473(data, {
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
    if (data.path === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "path"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.kubernetesServiceAccountToken !== undefined) {
      if (!validate474(data.kubernetesServiceAccountToken, {
        instancePath: instancePath + "/kubernetesServiceAccountToken",
        parentData: data,
        parentDataProperty: "kubernetesServiceAccountToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate474.errors : vErrors.concat(validate474.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate479(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate479.errors : vErrors.concat(validate479.errors);
        errors = vErrors.length;
      }
    }
    if (data.role !== undefined) {
      if (!validate24(data.role, {
        instancePath: instancePath + "/role",
        parentData: data,
        parentDataProperty: "role",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate25(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate473.errors = vErrors;
  return errors === 0;
}
const schema146 = {
  "properties": {
    "mountPath": {
      "$ref": "ZF8mtm1t8YwnjL2dWna1ddAWxEsB0CksfRj0VAKqQME"
    },
    "role": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "serviceAccountRef": {
      "$ref": "1ahVOR2eDYxHyGU0TRbhcXIs2rjAF3PFgjzCGXI7Co"
    }
  },
  "required": ["mountPath", "role"],
  "type": "object",
  "nullable": true
};
const schema147 = {
  "default": "kubernetes",
  "type": "string"
};
function validate485(data, {
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
  validate485.errors = vErrors;
  return errors === 0;
}
function validate484(data, {
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
    if (data.mountPath === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "mountPath"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.role === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "role"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.mountPath !== undefined) {
      if (!validate485(data.mountPath, {
        instancePath: instancePath + "/mountPath",
        parentData: data,
        parentDataProperty: "mountPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate485.errors : vErrors.concat(validate485.errors);
        errors = vErrors.length;
      }
    }
    if (data.role !== undefined) {
      if (!validate21(data.role, {
        instancePath: instancePath + "/role",
        parentData: data,
        parentDataProperty: "role",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate25(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate33(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
  }
  validate484.errors = vErrors;
  return errors === 0;
}
const schema148 = {
  "properties": {
    "path": {
      "$ref": "RjPW2ZxsQgclQcn2egqxCUvJQwuPHwp9DvwhmeKnSO4"
    },
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "username": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["path", "username"],
  "type": "object",
  "nullable": true
};
const schema149 = {
  "default": "ldap",
  "type": "string"
};
function validate492(data, {
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
  validate492.errors = vErrors;
  return errors === 0;
}
function validate491(data, {
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
    if (data.path === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "path"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.username === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "username"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.path !== undefined) {
      if (!validate492(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate492.errors : vErrors.concat(validate492.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate25(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.username !== undefined) {
      if (!validate21(data.username, {
        instancePath: instancePath + "/username",
        parentData: data,
        parentDataProperty: "username",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate491.errors = vErrors;
  return errors === 0;
}
const schema150 = {
  "properties": {
    "path": {
      "$ref": "ia1fPFPiJ08oeJm2ES4sIxOthU7UrIzui7i3w4OnY"
    },
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "username": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["path", "username"],
  "type": "object",
  "nullable": true
};
const schema151 = {
  "default": "user",
  "type": "string"
};
function validate500(data, {
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
  validate500.errors = vErrors;
  return errors === 0;
}
function validate499(data, {
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
    if (data.path === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "path"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.username === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "username"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.path !== undefined) {
      if (!validate500(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate500.errors : vErrors.concat(validate500.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate25(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.username !== undefined) {
      if (!validate21(data.username, {
        instancePath: instancePath + "/username",
        parentData: data,
        parentDataProperty: "username",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate499.errors = vErrors;
  return errors === 0;
}
function validate451(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.appRole !== undefined) {
      if (!validate452(data.appRole, {
        instancePath: instancePath + "/appRole",
        parentData: data,
        parentDataProperty: "appRole",
        rootData
      })) {
        vErrors = vErrors === null ? validate452.errors : vErrors.concat(validate452.errors);
        errors = vErrors.length;
      }
    }
    if (data.cert !== undefined) {
      if (!validate459(data.cert, {
        instancePath: instancePath + "/cert",
        parentData: data,
        parentDataProperty: "cert",
        rootData
      })) {
        vErrors = vErrors === null ? validate459.errors : vErrors.concat(validate459.errors);
        errors = vErrors.length;
      }
    }
    if (data.iam !== undefined) {
      if (!validate463(data.iam, {
        instancePath: instancePath + "/iam",
        parentData: data,
        parentDataProperty: "iam",
        rootData
      })) {
        vErrors = vErrors === null ? validate463.errors : vErrors.concat(validate463.errors);
        errors = vErrors.length;
      }
    }
    if (data.jwt !== undefined) {
      if (!validate473(data.jwt, {
        instancePath: instancePath + "/jwt",
        parentData: data,
        parentDataProperty: "jwt",
        rootData
      })) {
        vErrors = vErrors === null ? validate473.errors : vErrors.concat(validate473.errors);
        errors = vErrors.length;
      }
    }
    if (data.kubernetes !== undefined) {
      if (!validate484(data.kubernetes, {
        instancePath: instancePath + "/kubernetes",
        parentData: data,
        parentDataProperty: "kubernetes",
        rootData
      })) {
        vErrors = vErrors === null ? validate484.errors : vErrors.concat(validate484.errors);
        errors = vErrors.length;
      }
    }
    if (data.ldap !== undefined) {
      if (!validate491(data.ldap, {
        instancePath: instancePath + "/ldap",
        parentData: data,
        parentDataProperty: "ldap",
        rootData
      })) {
        vErrors = vErrors === null ? validate491.errors : vErrors.concat(validate491.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate24(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.tokenSecretRef !== undefined) {
      if (!validate25(data.tokenSecretRef, {
        instancePath: instancePath + "/tokenSecretRef",
        parentData: data,
        parentDataProperty: "tokenSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.userPass !== undefined) {
      if (!validate499(data.userPass, {
        instancePath: instancePath + "/userPass",
        parentData: data,
        parentDataProperty: "userPass",
        rootData
      })) {
        vErrors = vErrors === null ? validate499.errors : vErrors.concat(validate499.errors);
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
  validate451.errors = vErrors;
  return errors === 0;
}
const schema152 = {
  "properties": {
    "certSecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "keySecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate514(data, {
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
    if (data.certSecretRef !== undefined) {
      if (!validate25(data.certSecretRef, {
        instancePath: instancePath + "/certSecretRef",
        parentData: data,
        parentDataProperty: "certSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.keySecretRef !== undefined) {
      if (!validate25(data.keySecretRef, {
        instancePath: instancePath + "/keySecretRef",
        parentData: data,
        parentDataProperty: "keySecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate514.errors = vErrors;
  return errors === 0;
}
const schema153 = {
  "default": "v2",
  "enum": ["v1", "v2"],
  "type": "string",
  "nullable": true
};
function validate518(data, {
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
  if (!(data === "v1" || data === "v2")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema153.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate518.errors = vErrors;
  return errors === 0;
}
function validate450(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.server === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "server"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate451(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate451.errors : vErrors.concat(validate451.errors);
        errors = vErrors.length;
      }
    }
    if (data.caBundle !== undefined) {
      if (!validate52(data.caBundle, {
        instancePath: instancePath + "/caBundle",
        parentData: data,
        parentDataProperty: "caBundle",
        rootData
      })) {
        vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
        errors = vErrors.length;
      }
    }
    if (data.caProvider !== undefined) {
      if (!validate43(data.caProvider, {
        instancePath: instancePath + "/caProvider",
        parentData: data,
        parentDataProperty: "caProvider",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.forwardInconsistent !== undefined) {
      if (!validate51(data.forwardInconsistent, {
        instancePath: instancePath + "/forwardInconsistent",
        parentData: data,
        parentDataProperty: "forwardInconsistent",
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
    if (data.headers !== undefined) {
      if (!validate49(data.headers, {
        instancePath: instancePath + "/headers",
        parentData: data,
        parentDataProperty: "headers",
        rootData
      })) {
        vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate24(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate24(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.readYourWrites !== undefined) {
      if (!validate51(data.readYourWrites, {
        instancePath: instancePath + "/readYourWrites",
        parentData: data,
        parentDataProperty: "readYourWrites",
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
    if (data.server !== undefined) {
      if (!validate21(data.server, {
        instancePath: instancePath + "/server",
        parentData: data,
        parentDataProperty: "server",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.tls !== undefined) {
      if (!validate514(data.tls, {
        instancePath: instancePath + "/tls",
        parentData: data,
        parentDataProperty: "tls",
        rootData
      })) {
        vErrors = vErrors === null ? validate514.errors : vErrors.concat(validate514.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate518(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate518.errors : vErrors.concat(validate518.errors);
        errors = vErrors.length;
      }
    }
  }
  validate450.errors = vErrors;
  return errors === 0;
}
const schema154 = {
  "properties": {
    "body": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "caBundle": {
      "$ref": "0d0YjoHtjtI7p6BAHkZ9AtqFZvdnJ29AdGDpfxXc"
    },
    "caProvider": {
      "$ref": "ccuX4CoNUWP2IVzFHEaaIQm8VaPKTbUUXdH7thAmxo"
    },
    "headers": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "method": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "result": {
      "$ref": "CVVa9rATX0F97UhhoSGxmY6sDac4ntey7z1IQw"
    },
    "secrets": {
      "$ref": "o7Fz1RrCRnLUMdnIMwsNGwzVQsomSz3nZqdb4BcrK7A"
    },
    "timeout": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "url": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["result", "url"],
  "type": "object",
  "nullable": true
};
const schema155 = {
  "properties": {
    "jsonPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate527(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.jsonPath !== undefined) {
      if (!validate24(data.jsonPath, {
        instancePath: instancePath + "/jsonPath",
        parentData: data,
        parentDataProperty: "jsonPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
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
  validate527.errors = vErrors;
  return errors === 0;
}
const schema156 = {
  "items": {
    "$ref": "fP3a1cyUWFMko92PApdmGZb9En8tuev5rzCTdUJjuQ"
  },
  "type": "array",
  "nullable": true
};
const schema157 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "secretRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["name", "secretRef"],
  "type": "object"
};
function validate531(data, {
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
    if (data.secretRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.name !== undefined) {
      if (!validate21(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate29(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
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
  validate531.errors = vErrors;
  return errors === 0;
}
function validate530(data, {
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
      if (!validate531(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate531.errors : vErrors.concat(validate531.errors);
        errors = vErrors.length;
      }
    }
  }
  validate530.errors = vErrors;
  return errors === 0;
}
function validate521(data, {
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
    if (data.result === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "result"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.url === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "url"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.body !== undefined) {
      if (!validate24(data.body, {
        instancePath: instancePath + "/body",
        parentData: data,
        parentDataProperty: "body",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.caBundle !== undefined) {
      if (!validate52(data.caBundle, {
        instancePath: instancePath + "/caBundle",
        parentData: data,
        parentDataProperty: "caBundle",
        rootData
      })) {
        vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
        errors = vErrors.length;
      }
    }
    if (data.caProvider !== undefined) {
      if (!validate43(data.caProvider, {
        instancePath: instancePath + "/caProvider",
        parentData: data,
        parentDataProperty: "caProvider",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.headers !== undefined) {
      if (!validate49(data.headers, {
        instancePath: instancePath + "/headers",
        parentData: data,
        parentDataProperty: "headers",
        rootData
      })) {
        vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
        errors = vErrors.length;
      }
    }
    if (data.method !== undefined) {
      if (!validate24(data.method, {
        instancePath: instancePath + "/method",
        parentData: data,
        parentDataProperty: "method",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.result !== undefined) {
      if (!validate527(data.result, {
        instancePath: instancePath + "/result",
        parentData: data,
        parentDataProperty: "result",
        rootData
      })) {
        vErrors = vErrors === null ? validate527.errors : vErrors.concat(validate527.errors);
        errors = vErrors.length;
      }
    }
    if (data.secrets !== undefined) {
      if (!validate530(data.secrets, {
        instancePath: instancePath + "/secrets",
        parentData: data,
        parentDataProperty: "secrets",
        rootData
      })) {
        vErrors = vErrors === null ? validate530.errors : vErrors.concat(validate530.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeout !== undefined) {
      if (!validate24(data.timeout, {
        instancePath: instancePath + "/timeout",
        parentData: data,
        parentDataProperty: "timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate21(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate521.errors = vErrors;
  return errors === 0;
}
const schema27 = {
  "properties": {
    "apiEndpoint": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "auth": {
      "$ref": "Q3yxI9TDJGWYmiy01iawuCYWMzIZrZOdvCiLA8wiXE"
    },
    "caProvider": {
      "$ref": "jzEWVdvYsPLW0O8VHopvYXWKiohRlvAGjcSNMil8w"
    }
  },
  "required": ["auth"],
  "type": "object",
  "nullable": true
};
const schema28 = {
  "properties": {
    "authorizedKeySecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object"
};
function validate72(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authorizedKeySecretRef !== undefined) {
      if (!validate25(data.authorizedKeySecretRef, {
        instancePath: instancePath + "/authorizedKeySecretRef",
        parentData: data,
        parentDataProperty: "authorizedKeySecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
  validate72.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  "properties": {
    "certSecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate75(data, {
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
    if (data.certSecretRef !== undefined) {
      if (!validate25(data.certSecretRef, {
        instancePath: instancePath + "/certSecretRef",
        parentData: data,
        parentDataProperty: "certSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate75.errors = vErrors;
  return errors === 0;
}
function validate70(data, {
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.apiEndpoint !== undefined) {
      if (!validate24(data.apiEndpoint, {
        instancePath: instancePath + "/apiEndpoint",
        parentData: data,
        parentDataProperty: "apiEndpoint",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.auth !== undefined) {
      if (!validate72(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
        errors = vErrors.length;
      }
    }
    if (data.caProvider !== undefined) {
      if (!validate75(data.caProvider, {
        instancePath: instancePath + "/caProvider",
        parentData: data,
        parentDataProperty: "caProvider",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
  }
  validate70.errors = vErrors;
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
    if (Object.keys(data).length > 1) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxProperties",
        keyword: "maxProperties",
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
    if (Object.keys(data).length < 1) {
      const err1 = {
        instancePath,
        schemaPath: "#/minProperties",
        keyword: "minProperties",
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
    if (data.akeyless !== undefined) {
      if (!validate107(data.akeyless, {
        instancePath: instancePath + "/akeyless",
        parentData: data,
        parentDataProperty: "akeyless",
        rootData
      })) {
        vErrors = vErrors === null ? validate107.errors : vErrors.concat(validate107.errors);
        errors = vErrors.length;
      }
    }
    if (data.alibaba !== undefined) {
      if (!validate125(data.alibaba, {
        instancePath: instancePath + "/alibaba",
        parentData: data,
        parentDataProperty: "alibaba",
        rootData
      })) {
        vErrors = vErrors === null ? validate125.errors : vErrors.concat(validate125.errors);
        errors = vErrors.length;
      }
    }
    if (data.aws !== undefined) {
      if (!validate140(data.aws, {
        instancePath: instancePath + "/aws",
        parentData: data,
        parentDataProperty: "aws",
        rootData
      })) {
        vErrors = vErrors === null ? validate140.errors : vErrors.concat(validate140.errors);
        errors = vErrors.length;
      }
    }
    if (data.azurekv !== undefined) {
      if (!validate164(data.azurekv, {
        instancePath: instancePath + "/azurekv",
        parentData: data,
        parentDataProperty: "azurekv",
        rootData
      })) {
        vErrors = vErrors === null ? validate164.errors : vErrors.concat(validate164.errors);
        errors = vErrors.length;
      }
    }
    if (data.beyondtrust !== undefined) {
      if (!validate180(data.beyondtrust, {
        instancePath: instancePath + "/beyondtrust",
        parentData: data,
        parentDataProperty: "beyondtrust",
        rootData
      })) {
        vErrors = vErrors === null ? validate180.errors : vErrors.concat(validate180.errors);
        errors = vErrors.length;
      }
    }
    if (data.bitwardensecretsmanager !== undefined) {
      if (!validate196(data.bitwardensecretsmanager, {
        instancePath: instancePath + "/bitwardensecretsmanager",
        parentData: data,
        parentDataProperty: "bitwardensecretsmanager",
        rootData
      })) {
        vErrors = vErrors === null ? validate196.errors : vErrors.concat(validate196.errors);
        errors = vErrors.length;
      }
    }
    if (data.chef !== undefined) {
      if (!validate210(data.chef, {
        instancePath: instancePath + "/chef",
        parentData: data,
        parentDataProperty: "chef",
        rootData
      })) {
        vErrors = vErrors === null ? validate210.errors : vErrors.concat(validate210.errors);
        errors = vErrors.length;
      }
    }
    if (data.conjur !== undefined) {
      if (!validate219(data.conjur, {
        instancePath: instancePath + "/conjur",
        parentData: data,
        parentDataProperty: "conjur",
        rootData
      })) {
        vErrors = vErrors === null ? validate219.errors : vErrors.concat(validate219.errors);
        errors = vErrors.length;
      }
    }
    if (data.delinea !== undefined) {
      if (!validate238(data.delinea, {
        instancePath: instancePath + "/delinea",
        parentData: data,
        parentDataProperty: "delinea",
        rootData
      })) {
        vErrors = vErrors === null ? validate238.errors : vErrors.concat(validate238.errors);
        errors = vErrors.length;
      }
    }
    if (data.device42 !== undefined) {
      if (!validate245(data.device42, {
        instancePath: instancePath + "/device42",
        parentData: data,
        parentDataProperty: "device42",
        rootData
      })) {
        vErrors = vErrors === null ? validate245.errors : vErrors.concat(validate245.errors);
        errors = vErrors.length;
      }
    }
    if (data.doppler !== undefined) {
      if (!validate249(data.doppler, {
        instancePath: instancePath + "/doppler",
        parentData: data,
        parentDataProperty: "doppler",
        rootData
      })) {
        vErrors = vErrors === null ? validate249.errors : vErrors.concat(validate249.errors);
        errors = vErrors.length;
      }
    }
    if (data.fake !== undefined) {
      if (!validate262(data.fake, {
        instancePath: instancePath + "/fake",
        parentData: data,
        parentDataProperty: "fake",
        rootData
      })) {
        vErrors = vErrors === null ? validate262.errors : vErrors.concat(validate262.errors);
        errors = vErrors.length;
      }
    }
    if (data.fortanix !== undefined) {
      if (!validate272(data.fortanix, {
        instancePath: instancePath + "/fortanix",
        parentData: data,
        parentDataProperty: "fortanix",
        rootData
      })) {
        vErrors = vErrors === null ? validate272.errors : vErrors.concat(validate272.errors);
        errors = vErrors.length;
      }
    }
    if (data.gcpsm !== undefined) {
      if (!validate278(data.gcpsm, {
        instancePath: instancePath + "/gcpsm",
        parentData: data,
        parentDataProperty: "gcpsm",
        rootData
      })) {
        vErrors = vErrors === null ? validate278.errors : vErrors.concat(validate278.errors);
        errors = vErrors.length;
      }
    }
    if (data.gitlab !== undefined) {
      if (!validate293(data.gitlab, {
        instancePath: instancePath + "/gitlab",
        parentData: data,
        parentDataProperty: "gitlab",
        rootData
      })) {
        vErrors = vErrors === null ? validate293.errors : vErrors.concat(validate293.errors);
        errors = vErrors.length;
      }
    }
    if (data.ibm !== undefined) {
      if (!validate305(data.ibm, {
        instancePath: instancePath + "/ibm",
        parentData: data,
        parentDataProperty: "ibm",
        rootData
      })) {
        vErrors = vErrors === null ? validate305.errors : vErrors.concat(validate305.errors);
        errors = vErrors.length;
      }
    }
    if (data.infisical !== undefined) {
      if (!validate318(data.infisical, {
        instancePath: instancePath + "/infisical",
        parentData: data,
        parentDataProperty: "infisical",
        rootData
      })) {
        vErrors = vErrors === null ? validate318.errors : vErrors.concat(validate318.errors);
        errors = vErrors.length;
      }
    }
    if (data.keepersecurity !== undefined) {
      if (!validate335(data.keepersecurity, {
        instancePath: instancePath + "/keepersecurity",
        parentData: data,
        parentDataProperty: "keepersecurity",
        rootData
      })) {
        vErrors = vErrors === null ? validate335.errors : vErrors.concat(validate335.errors);
        errors = vErrors.length;
      }
    }
    if (data.kubernetes !== undefined) {
      if (!validate339(data.kubernetes, {
        instancePath: instancePath + "/kubernetes",
        parentData: data,
        parentDataProperty: "kubernetes",
        rootData
      })) {
        vErrors = vErrors === null ? validate339.errors : vErrors.concat(validate339.errors);
        errors = vErrors.length;
      }
    }
    if (data.onboardbase !== undefined) {
      if (!validate360(data.onboardbase, {
        instancePath: instancePath + "/onboardbase",
        parentData: data,
        parentDataProperty: "onboardbase",
        rootData
      })) {
        vErrors = vErrors === null ? validate360.errors : vErrors.concat(validate360.errors);
        errors = vErrors.length;
      }
    }
    if (data.onepassword !== undefined) {
      if (!validate370(data.onepassword, {
        instancePath: instancePath + "/onepassword",
        parentData: data,
        parentDataProperty: "onepassword",
        rootData
      })) {
        vErrors = vErrors === null ? validate370.errors : vErrors.concat(validate370.errors);
        errors = vErrors.length;
      }
    }
    if (data.oracle !== undefined) {
      if (!validate382(data.oracle, {
        instancePath: instancePath + "/oracle",
        parentData: data,
        parentDataProperty: "oracle",
        rootData
      })) {
        vErrors = vErrors === null ? validate382.errors : vErrors.concat(validate382.errors);
        errors = vErrors.length;
      }
    }
    if (data.passbolt !== undefined) {
      if (!validate399(data.passbolt, {
        instancePath: instancePath + "/passbolt",
        parentData: data,
        parentDataProperty: "passbolt",
        rootData
      })) {
        vErrors = vErrors === null ? validate399.errors : vErrors.concat(validate399.errors);
        errors = vErrors.length;
      }
    }
    if (data.passworddepot !== undefined) {
      if (!validate406(data.passworddepot, {
        instancePath: instancePath + "/passworddepot",
        parentData: data,
        parentDataProperty: "passworddepot",
        rootData
      })) {
        vErrors = vErrors === null ? validate406.errors : vErrors.concat(validate406.errors);
        errors = vErrors.length;
      }
    }
    if (data.previder !== undefined) {
      if (!validate411(data.previder, {
        instancePath: instancePath + "/previder",
        parentData: data,
        parentDataProperty: "previder",
        rootData
      })) {
        vErrors = vErrors === null ? validate411.errors : vErrors.concat(validate411.errors);
        errors = vErrors.length;
      }
    }
    if (data.pulumi !== undefined) {
      if (!validate419(data.pulumi, {
        instancePath: instancePath + "/pulumi",
        parentData: data,
        parentDataProperty: "pulumi",
        rootData
      })) {
        vErrors = vErrors === null ? validate419.errors : vErrors.concat(validate419.errors);
        errors = vErrors.length;
      }
    }
    if (data.scaleway !== undefined) {
      if (!validate429(data.scaleway, {
        instancePath: instancePath + "/scaleway",
        parentData: data,
        parentDataProperty: "scaleway",
        rootData
      })) {
        vErrors = vErrors === null ? validate429.errors : vErrors.concat(validate429.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretserver !== undefined) {
      if (!validate436(data.secretserver, {
        instancePath: instancePath + "/secretserver",
        parentData: data,
        parentDataProperty: "secretserver",
        rootData
      })) {
        vErrors = vErrors === null ? validate436.errors : vErrors.concat(validate436.errors);
        errors = vErrors.length;
      }
    }
    if (data.senhasegura !== undefined) {
      if (!validate441(data.senhasegura, {
        instancePath: instancePath + "/senhasegura",
        parentData: data,
        parentDataProperty: "senhasegura",
        rootData
      })) {
        vErrors = vErrors === null ? validate441.errors : vErrors.concat(validate441.errors);
        errors = vErrors.length;
      }
    }
    if (data.vault !== undefined) {
      if (!validate450(data.vault, {
        instancePath: instancePath + "/vault",
        parentData: data,
        parentDataProperty: "vault",
        rootData
      })) {
        vErrors = vErrors === null ? validate450.errors : vErrors.concat(validate450.errors);
        errors = vErrors.length;
      }
    }
    if (data.webhook !== undefined) {
      if (!validate521(data.webhook, {
        instancePath: instancePath + "/webhook",
        parentData: data,
        parentDataProperty: "webhook",
        rootData
      })) {
        vErrors = vErrors === null ? validate521.errors : vErrors.concat(validate521.errors);
        errors = vErrors.length;
      }
    }
    if (data.yandexcertificatemanager !== undefined) {
      if (!validate70(data.yandexcertificatemanager, {
        instancePath: instancePath + "/yandexcertificatemanager",
        parentData: data,
        parentDataProperty: "yandexcertificatemanager",
        rootData
      })) {
        vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
        errors = vErrors.length;
      }
    }
    if (data.yandexlockbox !== undefined) {
      if (!validate70(data.yandexlockbox, {
        instancePath: instancePath + "/yandexlockbox",
        parentData: data,
        parentDataProperty: "yandexlockbox",
        rootData
      })) {
        vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
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
  validate106.errors = vErrors;
  return errors === 0;
}
const schema158 = {
  "properties": {
    "maxRetries": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "retryInterval": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema159 = {
  "format": "int32",
  "type": "integer",
  "nullable": true
};
const formats4 = formats.int32;
function validate544(data, {
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
    if (!formats4.validate(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "int32"
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
  validate544.errors = vErrors;
  return errors === 0;
}
function validate543(data, {
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
    if (data.maxRetries !== undefined) {
      if (!validate544(data.maxRetries, {
        instancePath: instancePath + "/maxRetries",
        parentData: data,
        parentDataProperty: "maxRetries",
        rootData
      })) {
        vErrors = vErrors === null ? validate544.errors : vErrors.concat(validate544.errors);
        errors = vErrors.length;
      }
    }
    if (data.retryInterval !== undefined) {
      if (!validate24(data.retryInterval, {
        instancePath: instancePath + "/retryInterval",
        parentData: data,
        parentDataProperty: "retryInterval",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate543.errors = vErrors;
  return errors === 0;
}
function validate88(data, {
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
    if (data.provider === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "provider"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.conditions !== undefined) {
      if (!validate89(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate89.errors : vErrors.concat(validate89.errors);
        errors = vErrors.length;
      }
    }
    if (data.controller !== undefined) {
      if (!validate24(data.controller, {
        instancePath: instancePath + "/controller",
        parentData: data,
        parentDataProperty: "controller",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.provider !== undefined) {
      if (!validate106(data.provider, {
        instancePath: instancePath + "/provider",
        parentData: data,
        parentDataProperty: "provider",
        rootData
      })) {
        vErrors = vErrors === null ? validate106.errors : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
    if (data.refreshInterval !== undefined) {
      if (!validate78(data.refreshInterval, {
        instancePath: instancePath + "/refreshInterval",
        parentData: data,
        parentDataProperty: "refreshInterval",
        rootData
      })) {
        vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
        errors = vErrors.length;
      }
    }
    if (data.retrySettings !== undefined) {
      if (!validate543(data.retrySettings, {
        instancePath: instancePath + "/retrySettings",
        parentData: data,
        parentDataProperty: "retrySettings",
        rootData
      })) {
        vErrors = vErrors === null ? validate543.errors : vErrors.concat(validate543.errors);
        errors = vErrors.length;
      }
    }
  }
  validate88.errors = vErrors;
  return errors === 0;
}
const schema160 = {
  "properties": {
    "capabilities": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "conditions": {
      "$ref": "w2aklriTacMuluV3ikJT0sk1m73QD4wiOVvucBSXqU"
    }
  },
  "type": "object",
  "nullable": true
};
const schema161 = {
  "items": {
    "$ref": "wDmDj5rw5YUsWkFYJ3cuEIZx1zmHBm4Y3alwxCajxY"
  },
  "type": "array",
  "nullable": true
};
const schema162 = {
  "properties": {
    "lastTransitionTime": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "reason": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "status": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "type": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["status", "type"],
  "type": "object"
};
const schema163 = {
  "format": "date-time",
  "type": "string",
  "nullable": true
};
const formats6 = formats["date-time"];
function validate553(data, {
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
    if (!formats6.validate(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "date-time"
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
  validate553.errors = vErrors;
  return errors === 0;
}
function validate552(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.status === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "status"
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
    if (data.lastTransitionTime !== undefined) {
      if (!validate553(data.lastTransitionTime, {
        instancePath: instancePath + "/lastTransitionTime",
        parentData: data,
        parentDataProperty: "lastTransitionTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate553.errors : vErrors.concat(validate553.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate24(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.reason !== undefined) {
      if (!validate24(data.reason, {
        instancePath: instancePath + "/reason",
        parentData: data,
        parentDataProperty: "reason",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate21(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate21(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  validate552.errors = vErrors;
  return errors === 0;
}
function validate551(data, {
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
      if (!validate552(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate552.errors : vErrors.concat(validate552.errors);
        errors = vErrors.length;
      }
    }
  }
  validate551.errors = vErrors;
  return errors === 0;
}
function validate549(data, {
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
    if (data.capabilities !== undefined) {
      if (!validate24(data.capabilities, {
        instancePath: instancePath + "/capabilities",
        parentData: data,
        parentDataProperty: "capabilities",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.conditions !== undefined) {
      if (!validate551(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate551.errors : vErrors.concat(validate551.errors);
        errors = vErrors.length;
      }
    }
  }
  validate549.errors = vErrors;
  return errors === 0;
}
function validate79(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="external-secrets.io.v1beta1.ClusterSecretStore" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.apiVersion === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "apiVersion"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.kind === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "kind"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.apiVersion !== undefined) {
      if (!validate80(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate82(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate82.errors : vErrors.concat(validate82.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate84(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate88(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate549(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate549.errors : vErrors.concat(validate549.errors);
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
  validate79.errors = vErrors;
  return errors === 0;
}