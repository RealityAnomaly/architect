import { formats } from "@kubernetes-models/validate";
export const validate = validate267;
const schema77 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "8rfe2sPkPAwQ5jAxtNTv2aGWw9jalSe03OxhSRic50"
    },
    "kind": {
      "$ref": "WapAv5sPW60e1Cw4PdZjpDXkn8VsoVoxqnbuwSM64"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "2rclTUyl2Yv84bEsoM7dspfHAPRPYyASDus8ytWNg0"
    },
    "status": {
      "$ref": "wcM4toCrXhZDRJZG8pMjKGqyGQSwpdC46Ptq2EMTwnU"
    }
  },
  "required": ["spec", "apiVersion", "kind"],
  "$id": "monitoring.coreos.com.v1.ThanosRuler"
};
const schema78 = {
  "type": "string",
  "enum": ["monitoring.coreos.com/v1"]
};
function validate268(data, {
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
  if (!(data === "monitoring.coreos.com/v1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema78.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate268.errors = vErrors;
  return errors === 0;
}
const schema79 = {
  "type": "string",
  "enum": ["ThanosRuler"]
};
function validate270(data, {
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
  if (!(data === "ThanosRuler")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema79.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate270.errors = vErrors;
  return errors === 0;
}
const schema80 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema81 = {};
import { validate as validate273 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate272(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate273(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate273.errors : vErrors.concat(validate273.errors);
      errors = vErrors.length;
    }
  }
  validate272.errors = vErrors;
  return errors === 0;
}
const schema82 = {
  "properties": {
    "affinity": {
      "$ref": "eQnLjitsrTSVTFasXcHSNJf2f0CZ2KykATo6mjrpT2c"
    },
    "alertDropLabels": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "alertQueryUrl": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "alertRelabelConfigFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "alertRelabelConfigs": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "alertmanagersConfig": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "alertmanagersUrl": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "containers": {
      "$ref": "VIj6iGZvckJvSckcBQbryY2ugKuYB6udb8hdsJTWP4"
    },
    "enforcedNamespaceLabel": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "evaluationInterval": {
      "$ref": "X2VbgH8GTZjgCevhLnPsTVJ4Jw5kKJO1Ufxwjnni0"
    },
    "excludedFromEnforcement": {
      "$ref": "Dz8KmpzwGHyjIxh20rqbOeLydlgqF8dDI1aQrDqoog"
    },
    "externalPrefix": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "grpcServerTlsConfig": {
      "$ref": "ecWK9fO4T2udHXg0WZQLntU0KVLbc2najyAEMWfEO8"
    },
    "hostAliases": {
      "$ref": "QP8Yj8ZrfOrfkzyDP72LrM73e1zjqKILvGFWTBtQXY"
    },
    "image": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "imagePullSecrets": {
      "$ref": "0pzBTE76xYFsQtoMToT048kLLDNrLQ4wQvdw1GHVrQ"
    },
    "initContainers": {
      "$ref": "VIj6iGZvckJvSckcBQbryY2ugKuYB6udb8hdsJTWP4"
    },
    "labels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "listenLocal": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "logFormat": {
      "$ref": "b9mve0gOV1HnIihdAIZSn92jqnNZMALRiTjRG6i0"
    },
    "logLevel": {
      "$ref": "guQDzQDztlXqdeefnE2qZNVPePLdLKRliEYwDVnbFZ8"
    },
    "minReadySeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "nodeSelector": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "objectStorageConfig": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "objectStorageConfigFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "paused": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "podMetadata": {
      "$ref": "dw9Aj87JbDhskFYjQ9xyC2ziWVIvXd7xite3XAESo4"
    },
    "portName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "priorityClassName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "prometheusRulesExcludedFromEnforce": {
      "$ref": "lBgPfy6JUe7G2yqTQtqSeTVPhhVlSPYb2kJ36RdCoE"
    },
    "queryConfig": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "queryEndpoints": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "replicas": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "resources": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "retention": {
      "$ref": "39pwryei27yMQ79SzfU1tdDls6oj4ApIYv0LgXWUMoU"
    },
    "routePrefix": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "ruleNamespaceSelector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "ruleSelector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "securityContext": {
      "$ref": "ddB3tD2SHT4OKxzQFKXJhd51Fb7wlsxB2LqTtT1VQY"
    },
    "serviceAccountName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "storage": {
      "$ref": "i5bDeDwKVD25vlWH0rUZ9cHvyrLEG1Ab1M6AmQ1rzQ"
    },
    "tolerations": {
      "$ref": "0n4c9hC8BjWXgqJPcgtzXIbgzIfyT58Oy1pU5nsoec"
    },
    "topologySpreadConstraints": {
      "$ref": "00N8blqCT2kWSZu87pHftRsQZX7oPfKbnlS7hA21Rms"
    },
    "tracingConfig": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "volumes": {
      "$ref": "IPEbncZhH85K61Y2E1nNqCfMxBdL9k3yhLictua89E"
    }
  },
  "type": "object"
};
const schema83 = {
  "properties": {
    "nodeAffinity": {
      "$ref": "ilIeGX7cSHMmL7ioNwzODU6lYXSv4jarxIX2s8IW4"
    },
    "podAffinity": {
      "$ref": "DsNsWuYn4nQkINJhcnI8fvpFfqQQ9s1oRdKm3W5Q8"
    },
    "podAntiAffinity": {
      "$ref": "DsNsWuYn4nQkINJhcnI8fvpFfqQQ9s1oRdKm3W5Q8"
    }
  },
  "type": "object",
  "nullable": true
};
const schema84 = {
  "properties": {
    "preferredDuringSchedulingIgnoredDuringExecution": {
      "$ref": "HC615OS3o4FaxIeSsZYUiEWpRFwokElNCDLKZWAw"
    },
    "requiredDuringSchedulingIgnoredDuringExecution": {
      "$ref": "yWknb7dT7ue0rjnNXkPUrp1WPuHKhs0S6rXzUG4qQHM"
    }
  },
  "type": "object",
  "nullable": true
};
const schema85 = {
  "items": {
    "$ref": "KT8yO8lY4mlKxs74BP1LG0T6VlK79euyrEXXie1TQM"
  },
  "type": "array",
  "nullable": true
};
const schema86 = {
  "properties": {
    "preference": {
      "$ref": "tydPzboPRD4fGreI5KQTJcmvoGoGl0gxaSYfabYh8UI"
    },
    "weight": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    }
  },
  "required": ["preference", "weight"],
  "type": "object"
};
const schema10 = {
  "properties": {
    "matchExpressions": {
      "$ref": "9BW0WuIp1SxhBT4vHohXPUikn0YuwzPq2mNUBC1NsE"
    },
    "matchFields": {
      "$ref": "9BW0WuIp1SxhBT4vHohXPUikn0YuwzPq2mNUBC1NsE"
    }
  },
  "type": "object"
};
const schema7 = {
  "items": {
    "$ref": "MkwwSDeYoT1APit7w8qsvbKCw8OynjINdeojyPgpPQ"
  },
  "type": "array",
  "nullable": true
};
const schema8 = {
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
const schema9 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
  "nullable": true
};
function validate26(data, {
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
  validate26.errors = vErrors;
  return errors === 0;
}
function validate23(data, {
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
      if (!validate26(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
  validate23.errors = vErrors;
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
      if (!validate23(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate22.errors = vErrors;
  return errors === 0;
}
function validate30(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.matchExpressions !== undefined) {
      if (!validate22(data.matchExpressions, {
        instancePath: instancePath + "/matchExpressions",
        parentData: data,
        parentDataProperty: "matchExpressions",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchFields !== undefined) {
      if (!validate22(data.matchFields, {
        instancePath: instancePath + "/matchFields",
        parentData: data,
        parentDataProperty: "matchFields",
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
  validate30.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "format": "int32",
  "type": "integer"
};
const formats0 = formats.int32;
function validate38(data, {
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
  if (typeof data == "number" && isFinite(data)) {
    if (!formats0.validate(data)) {
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
  validate38.errors = vErrors;
  return errors === 0;
}
function validate280(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.preference === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "preference"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.weight === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "weight"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.preference !== undefined) {
      if (!validate30(data.preference, {
        instancePath: instancePath + "/preference",
        parentData: data,
        parentDataProperty: "preference",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.weight !== undefined) {
      if (!validate38(data.weight, {
        instancePath: instancePath + "/weight",
        parentData: data,
        parentDataProperty: "weight",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
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
  validate280.errors = vErrors;
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
      if (!validate280(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate280.errors : vErrors.concat(validate280.errors);
        errors = vErrors.length;
      }
    }
  }
  validate279.errors = vErrors;
  return errors === 0;
}
const schema87 = {
  "properties": {
    "nodeSelectorTerms": {
      "$ref": "hVQp5aNt5Ip0WaaRBpcUfl5xvhWH5vfkg8VQq1is"
    }
  },
  "required": ["nodeSelectorTerms"],
  "type": "object",
  "nullable": true
};
const schema88 = {
  "items": {
    "$ref": "tydPzboPRD4fGreI5KQTJcmvoGoGl0gxaSYfabYh8UI"
  },
  "type": "array"
};
function validate286(data, {
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
      if (!validate30(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
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
  validate286.errors = vErrors;
  return errors === 0;
}
function validate285(data, {
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
    if (data.nodeSelectorTerms === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "nodeSelectorTerms"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.nodeSelectorTerms !== undefined) {
      if (!validate286(data.nodeSelectorTerms, {
        instancePath: instancePath + "/nodeSelectorTerms",
        parentData: data,
        parentDataProperty: "nodeSelectorTerms",
        rootData
      })) {
        vErrors = vErrors === null ? validate286.errors : vErrors.concat(validate286.errors);
        errors = vErrors.length;
      }
    }
  }
  validate285.errors = vErrors;
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
    if (data.preferredDuringSchedulingIgnoredDuringExecution !== undefined) {
      if (!validate279(data.preferredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/preferredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "preferredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate279.errors : vErrors.concat(validate279.errors);
        errors = vErrors.length;
      }
    }
    if (data.requiredDuringSchedulingIgnoredDuringExecution !== undefined) {
      if (!validate285(data.requiredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/requiredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "requiredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate285.errors : vErrors.concat(validate285.errors);
        errors = vErrors.length;
      }
    }
  }
  validate278.errors = vErrors;
  return errors === 0;
}
const schema15 = {
  "properties": {
    "preferredDuringSchedulingIgnoredDuringExecution": {
      "$ref": "ZBNBJIKcYw9b6ByZ1oTCFen775p3KptAtSEBMtqSVs0"
    },
    "requiredDuringSchedulingIgnoredDuringExecution": {
      "$ref": "CjCL5qmBxS14UT2XOnRAFXR6PuszqYeDmNJIZczJIY"
    }
  },
  "type": "object",
  "nullable": true
};
const schema16 = {
  "items": {
    "$ref": "64RujE3HVgf5cYEsps9MsJqnpxPv9cJ7O3IzJ0HKyQ"
  },
  "type": "array",
  "nullable": true
};
const schema17 = {
  "properties": {
    "podAffinityTerm": {
      "$ref": "QPoXPP8srfYyWaiKzJR4gjGUBOGS8eomxnzjd9M39E"
    },
    "weight": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    }
  },
  "required": ["podAffinityTerm", "weight"],
  "type": "object"
};
const schema14 = {
  "properties": {
    "labelSelector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "namespaceSelector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "namespaces": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "topologyKey": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["topologyKey"],
  "type": "object"
};
const schema11 = {
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
const schema12 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
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
  validate35.errors = vErrors;
  return errors === 0;
}
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
    if (data.matchExpressions !== undefined) {
      if (!validate22(data.matchExpressions, {
        instancePath: instancePath + "/matchExpressions",
        parentData: data,
        parentDataProperty: "matchExpressions",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchLabels !== undefined) {
      if (!validate35(data.matchLabels, {
        instancePath: instancePath + "/matchLabels",
        parentData: data,
        parentDataProperty: "matchLabels",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  }
  validate33.errors = vErrors;
  return errors === 0;
}
function validate39(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.topologyKey === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "topologyKey"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.labelSelector !== undefined) {
      if (!validate33(data.labelSelector, {
        instancePath: instancePath + "/labelSelector",
        parentData: data,
        parentDataProperty: "labelSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaceSelector !== undefined) {
      if (!validate33(data.namespaceSelector, {
        instancePath: instancePath + "/namespaceSelector",
        parentData: data,
        parentDataProperty: "namespaceSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaces !== undefined) {
      if (!validate26(data.namespaces, {
        instancePath: instancePath + "/namespaces",
        parentData: data,
        parentDataProperty: "namespaces",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.topologyKey !== undefined) {
      if (!validate21(data.topologyKey, {
        instancePath: instancePath + "/topologyKey",
        parentData: data,
        parentDataProperty: "topologyKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  validate39.errors = vErrors;
  return errors === 0;
}
function validate46(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.podAffinityTerm === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "podAffinityTerm"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.weight === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "weight"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.podAffinityTerm !== undefined) {
      if (!validate39(data.podAffinityTerm, {
        instancePath: instancePath + "/podAffinityTerm",
        parentData: data,
        parentDataProperty: "podAffinityTerm",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.weight !== undefined) {
      if (!validate38(data.weight, {
        instancePath: instancePath + "/weight",
        parentData: data,
        parentDataProperty: "weight",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
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
  validate46.errors = vErrors;
  return errors === 0;
}
function validate45(data, {
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
      if (!validate46(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
  }
  validate45.errors = vErrors;
  return errors === 0;
}
const schema18 = {
  "items": {
    "$ref": "QPoXPP8srfYyWaiKzJR4gjGUBOGS8eomxnzjd9M39E"
  },
  "type": "array",
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
      if (!validate39(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
  }
  validate51.errors = vErrors;
  return errors === 0;
}
function validate44(data, {
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
    if (data.preferredDuringSchedulingIgnoredDuringExecution !== undefined) {
      if (!validate45(data.preferredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/preferredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "preferredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.requiredDuringSchedulingIgnoredDuringExecution !== undefined) {
      if (!validate51(data.requiredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/requiredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "requiredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
  }
  validate44.errors = vErrors;
  return errors === 0;
}
function validate277(data, {
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
    if (data.nodeAffinity !== undefined) {
      if (!validate278(data.nodeAffinity, {
        instancePath: instancePath + "/nodeAffinity",
        parentData: data,
        parentDataProperty: "nodeAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate278.errors : vErrors.concat(validate278.errors);
        errors = vErrors.length;
      }
    }
    if (data.podAffinity !== undefined) {
      if (!validate44(data.podAffinity, {
        instancePath: instancePath + "/podAffinity",
        parentData: data,
        parentDataProperty: "podAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
    if (data.podAntiAffinity !== undefined) {
      if (!validate44(data.podAntiAffinity, {
        instancePath: instancePath + "/podAntiAffinity",
        parentData: data,
        parentDataProperty: "podAntiAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
  }
  validate277.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "type": "string",
  "nullable": true
};
function validate54(data, {
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
  validate54.errors = vErrors;
  return errors === 0;
}
const schema20 = {
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
const schema21 = {
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
    if (data.name !== undefined) {
      if (!validate54(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.optional !== undefined) {
      if (!validate58(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
  }
  validate55.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  "items": {
    "$ref": "giYrfs17KVdZdflrM4kYlBN1BxQg4kKNIPJV4Xgvqo"
  },
  "type": "array",
  "nullable": true
};
const schema39 = {
  "properties": {
    "args": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "command": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "env": {
      "$ref": "3Jp76g3FDGxGCRhB4rdsXV0CN3ViAXzNmXiWQNaiI"
    },
    "envFrom": {
      "$ref": "EkD1nTzAjmtgIszfzhU32HU6RJWgWl1E3sZihaaYJk"
    },
    "image": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "imagePullPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lifecycle": {
      "$ref": "W7vrlsSZWp7rggEIEZsVRoja8Xamzter4HOa8m2lRw"
    },
    "livenessProbe": {
      "$ref": "6hcGsOxaLbPw8KjDNduwssgl3ObU2WuOLGRodXs"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "ports": {
      "$ref": "QkG34wpgMYTMO9YE77bfWKFLDRsUlPeO44VNnszt7Qs"
    },
    "readinessProbe": {
      "$ref": "6hcGsOxaLbPw8KjDNduwssgl3ObU2WuOLGRodXs"
    },
    "resources": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "securityContext": {
      "$ref": "aND3ea1LG5u3n1ujZMr0x8VV9erWu8SezMfn5zIpYm8"
    },
    "startupProbe": {
      "$ref": "6hcGsOxaLbPw8KjDNduwssgl3ObU2WuOLGRodXs"
    },
    "stdin": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "stdinOnce": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "terminationMessagePath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "terminationMessagePolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tty": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "volumeDevices": {
      "$ref": "mBDhRX59TxMU0NTk7LfnSYRWB6jHAhliJbubNaMjM"
    },
    "volumeMounts": {
      "$ref": "ploEHy7cvuqU434uo1rYaAhc9iU5NKdsYBUm8wDO6M"
    },
    "workingDir": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["name"],
  "type": "object"
};
const schema40 = {
  "items": {
    "$ref": "2DnvY3OSiQGeFcfEmVdJwRWMJ3q6DrZzvMYtV2fkz3c"
  },
  "type": "array",
  "nullable": true
};
const schema41 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "valueFrom": {
      "$ref": "eVznl7xSuOWb5hNtuDmy3lZLEJ73zFoxWn3ubwkt8"
    }
  },
  "required": ["name"],
  "type": "object"
};
const schema42 = {
  "properties": {
    "configMapKeyRef": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "fieldRef": {
      "$ref": "B5jNtau7CpFJjYJrsYhyzxmI9XsIag7F9u7xksrgmQk"
    },
    "resourceFieldRef": {
      "$ref": "D7PNj4ec9vScD68sAz7HLGzoBiyO7djP09KZXUzl2Y4"
    },
    "secretKeyRef": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    }
  },
  "type": "object",
  "nullable": true
};
const schema43 = {
  "properties": {
    "apiVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "fieldPath": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["fieldPath"],
  "type": "object",
  "nullable": true
};
function validate121(data, {
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
    if (data.fieldPath === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "fieldPath"
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
      if (!validate54(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.fieldPath !== undefined) {
      if (!validate21(data.fieldPath, {
        instancePath: instancePath + "/fieldPath",
        parentData: data,
        parentDataProperty: "fieldPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate121.errors = vErrors;
  return errors === 0;
}
const schema44 = {
  "properties": {
    "containerName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "divisor": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    },
    "resource": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["resource"],
  "type": "object",
  "nullable": true
};
const schema35 = {
  "anyOf": [{
    "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
  }, {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  }],
  "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
};
const schema23 = {
  "type": "integer"
};
function validate63(data, {
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
  validate63.errors = vErrors;
  return errors === 0;
}
const pattern0 = new RegExp("^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$", "u");
function validate103(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (!validate63(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate21(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
      errors = vErrors.length;
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err0 = {
      instancePath,
      schemaPath: "#/anyOf",
      keyword: "anyOf",
      params: {}
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
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
  validate103.errors = vErrors;
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
    if (data.resource === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "resource"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.containerName !== undefined) {
      if (!validate54(data.containerName, {
        instancePath: instancePath + "/containerName",
        parentData: data,
        parentDataProperty: "containerName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.divisor !== undefined) {
      if (!validate103(data.divisor, {
        instancePath: instancePath + "/divisor",
        parentData: data,
        parentDataProperty: "divisor",
        rootData
      })) {
        vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
        errors = vErrors.length;
      }
    }
    if (data.resource !== undefined) {
      if (!validate21(data.resource, {
        instancePath: instancePath + "/resource",
        parentData: data,
        parentDataProperty: "resource",
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
function validate119(data, {
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
    if (data.configMapKeyRef !== undefined) {
      if (!validate55(data.configMapKeyRef, {
        instancePath: instancePath + "/configMapKeyRef",
        parentData: data,
        parentDataProperty: "configMapKeyRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.fieldRef !== undefined) {
      if (!validate121(data.fieldRef, {
        instancePath: instancePath + "/fieldRef",
        parentData: data,
        parentDataProperty: "fieldRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate121.errors : vErrors.concat(validate121.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceFieldRef !== undefined) {
      if (!validate125(data.resourceFieldRef, {
        instancePath: instancePath + "/resourceFieldRef",
        parentData: data,
        parentDataProperty: "resourceFieldRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate125.errors : vErrors.concat(validate125.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretKeyRef !== undefined) {
      if (!validate55(data.secretKeyRef, {
        instancePath: instancePath + "/secretKeyRef",
        parentData: data,
        parentDataProperty: "secretKeyRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
  }
  validate119.errors = vErrors;
  return errors === 0;
}
function validate116(data, {
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
    if (data.value !== undefined) {
      if (!validate54(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.valueFrom !== undefined) {
      if (!validate119(data.valueFrom, {
        instancePath: instancePath + "/valueFrom",
        parentData: data,
        parentDataProperty: "valueFrom",
        rootData
      })) {
        vErrors = vErrors === null ? validate119.errors : vErrors.concat(validate119.errors);
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
  validate116.errors = vErrors;
  return errors === 0;
}
function validate115(data, {
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
      if (!validate116(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate116.errors : vErrors.concat(validate116.errors);
        errors = vErrors.length;
      }
    }
  }
  validate115.errors = vErrors;
  return errors === 0;
}
const schema45 = {
  "items": {
    "$ref": "ikCIlFtFemCnMYeJtAt3NRQIkZLQNIKIbJvxkO8"
  },
  "type": "array",
  "nullable": true
};
const schema46 = {
  "properties": {
    "configMapRef": {
      "$ref": "vIMX5TuwLUjrF4xwcBzJKsRoDuvJXyODQDaulgLLL4"
    },
    "prefix": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretRef": {
      "$ref": "vIMX5TuwLUjrF4xwcBzJKsRoDuvJXyODQDaulgLLL4"
    }
  },
  "type": "object"
};
const schema22 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
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
    if (data.name !== undefined) {
      if (!validate54(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.optional !== undefined) {
      if (!validate58(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
  }
  validate60.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.configMapRef !== undefined) {
      if (!validate60(data.configMapRef, {
        instancePath: instancePath + "/configMapRef",
        parentData: data,
        parentDataProperty: "configMapRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
        errors = vErrors.length;
      }
    }
    if (data.prefix !== undefined) {
      if (!validate54(data.prefix, {
        instancePath: instancePath + "/prefix",
        parentData: data,
        parentDataProperty: "prefix",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate60(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
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
  validate135.errors = vErrors;
  return errors === 0;
}
function validate134(data, {
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
      if (!validate135(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate135.errors : vErrors.concat(validate135.errors);
        errors = vErrors.length;
      }
    }
  }
  validate134.errors = vErrors;
  return errors === 0;
}
const schema47 = {
  "properties": {
    "postStart": {
      "$ref": "HAlIObuw5PJ7yBUQZzkLyysWvHHLun7gu5WuCZhfGfY"
    },
    "preStop": {
      "$ref": "HAlIObuw5PJ7yBUQZzkLyysWvHHLun7gu5WuCZhfGfY"
    }
  },
  "type": "object",
  "nullable": true
};
const schema25 = {
  "properties": {
    "exec": {
      "$ref": "moEpOLb1kgFxaUouQajnrop3umuZQh81JqXQh7AIVQ"
    },
    "httpGet": {
      "$ref": "mmlyBLvRl7v3o5Pp55N1xeaHQ9tDWZHs5C7b5GfLN8"
    },
    "tcpSocket": {
      "$ref": "1ZbuYUyDXQSaxhnkO1WtAhRTjyp3DzYi9wa2Pdpoow"
    }
  },
  "type": "object",
  "nullable": true
};
const schema26 = {
  "properties": {
    "command": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
  "nullable": true
};
function validate68(data, {
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
    if (data.command !== undefined) {
      if (!validate26(data.command, {
        instancePath: instancePath + "/command",
        parentData: data,
        parentDataProperty: "command",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate68.errors = vErrors;
  return errors === 0;
}
const schema27 = {
  "properties": {
    "host": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "httpHeaders": {
      "$ref": "wOtvUyP8xBMF8YvP9G2nZ7hpGeMpOckdRUXrDPgLUY"
    },
    "path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "port": {
      "$ref": "uJPY5JwdoQeyZsG50sBXB6uBQV8ScD7PtRRAnILoI3A"
    },
    "scheme": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["port"],
  "type": "object",
  "nullable": true
};
const schema28 = {
  "items": {
    "$ref": "RI8VVk8l4SnLWK7FbWs0RBoAVoSBUKkroMUjUfsI"
  },
  "type": "array",
  "nullable": true
};
const schema29 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name", "value"],
  "type": "object"
};
function validate74(data, {
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
  validate74.errors = vErrors;
  return errors === 0;
}
function validate73(data, {
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
      if (!validate74(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
        errors = vErrors.length;
      }
    }
  }
  validate73.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "anyOf": [{
    "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
  }, {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  }]
};
function validate64(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (!validate63(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate21(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
      errors = vErrors.length;
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err0 = {
      instancePath,
      schemaPath: "#/anyOf",
      keyword: "anyOf",
      params: {}
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate64.errors = vErrors;
  return errors === 0;
}
function validate71(data, {
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
    if (data.port === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "port"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.host !== undefined) {
      if (!validate54(data.host, {
        instancePath: instancePath + "/host",
        parentData: data,
        parentDataProperty: "host",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpHeaders !== undefined) {
      if (!validate73(data.httpHeaders, {
        instancePath: instancePath + "/httpHeaders",
        parentData: data,
        parentDataProperty: "httpHeaders",
        rootData
      })) {
        vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate54(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate64(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
    if (data.scheme !== undefined) {
      if (!validate54(data.scheme, {
        instancePath: instancePath + "/scheme",
        parentData: data,
        parentDataProperty: "scheme",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate71.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "properties": {
    "host": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "port": {
      "$ref": "uJPY5JwdoQeyZsG50sBXB6uBQV8ScD7PtRRAnILoI3A"
    }
  },
  "required": ["port"],
  "type": "object",
  "nullable": true
};
function validate83(data, {
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
    if (data.port === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "port"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.host !== undefined) {
      if (!validate54(data.host, {
        instancePath: instancePath + "/host",
        parentData: data,
        parentDataProperty: "host",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate64(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
  }
  validate83.errors = vErrors;
  return errors === 0;
}
function validate67(data, {
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
    if (data.exec !== undefined) {
      if (!validate68(data.exec, {
        instancePath: instancePath + "/exec",
        parentData: data,
        parentDataProperty: "exec",
        rootData
      })) {
        vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpGet !== undefined) {
      if (!validate71(data.httpGet, {
        instancePath: instancePath + "/httpGet",
        parentData: data,
        parentDataProperty: "httpGet",
        rootData
      })) {
        vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
        errors = vErrors.length;
      }
    }
    if (data.tcpSocket !== undefined) {
      if (!validate83(data.tcpSocket, {
        instancePath: instancePath + "/tcpSocket",
        parentData: data,
        parentDataProperty: "tcpSocket",
        rootData
      })) {
        vErrors = vErrors === null ? validate83.errors : vErrors.concat(validate83.errors);
        errors = vErrors.length;
      }
    }
  }
  validate67.errors = vErrors;
  return errors === 0;
}
function validate143(data, {
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
    if (data.postStart !== undefined) {
      if (!validate67(data.postStart, {
        instancePath: instancePath + "/postStart",
        parentData: data,
        parentDataProperty: "postStart",
        rootData
      })) {
        vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
        errors = vErrors.length;
      }
    }
    if (data.preStop !== undefined) {
      if (!validate67(data.preStop, {
        instancePath: instancePath + "/preStop",
        parentData: data,
        parentDataProperty: "preStop",
        rootData
      })) {
        vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
        errors = vErrors.length;
      }
    }
  }
  validate143.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  "properties": {
    "exec": {
      "$ref": "moEpOLb1kgFxaUouQajnrop3umuZQh81JqXQh7AIVQ"
    },
    "failureThreshold": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "grpc": {
      "$ref": "zimiYgliSEzKY1uy0jBGUTkFkVFtyXIMNBOoeBFfpI"
    },
    "httpGet": {
      "$ref": "mmlyBLvRl7v3o5Pp55N1xeaHQ9tDWZHs5C7b5GfLN8"
    },
    "initialDelaySeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "periodSeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "successThreshold": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "tcpSocket": {
      "$ref": "1ZbuYUyDXQSaxhnkO1WtAhRTjyp3DzYi9wa2Pdpoow"
    },
    "terminationGracePeriodSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "timeoutSeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    }
  },
  "type": "object",
  "nullable": true
};
const schema31 = {
  "format": "int32",
  "type": "integer",
  "nullable": true
};
function validate87(data, {
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
  validate87.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  "properties": {
    "port": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "service": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["port"],
  "type": "object",
  "nullable": true
};
function validate91(data, {
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
    if (data.port === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "port"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.port !== undefined) {
      if (!validate38(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.service !== undefined) {
      if (!validate54(data.service, {
        instancePath: instancePath + "/service",
        parentData: data,
        parentDataProperty: "service",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate91.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  "format": "int64",
  "type": "integer",
  "nullable": true
};
const formats4 = formats.int64;
function validate100(data, {
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
  validate100.errors = vErrors;
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
    if (data.exec !== undefined) {
      if (!validate68(data.exec, {
        instancePath: instancePath + "/exec",
        parentData: data,
        parentDataProperty: "exec",
        rootData
      })) {
        vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
        errors = vErrors.length;
      }
    }
    if (data.failureThreshold !== undefined) {
      if (!validate87(data.failureThreshold, {
        instancePath: instancePath + "/failureThreshold",
        parentData: data,
        parentDataProperty: "failureThreshold",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.grpc !== undefined) {
      if (!validate91(data.grpc, {
        instancePath: instancePath + "/grpc",
        parentData: data,
        parentDataProperty: "grpc",
        rootData
      })) {
        vErrors = vErrors === null ? validate91.errors : vErrors.concat(validate91.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpGet !== undefined) {
      if (!validate71(data.httpGet, {
        instancePath: instancePath + "/httpGet",
        parentData: data,
        parentDataProperty: "httpGet",
        rootData
      })) {
        vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
        errors = vErrors.length;
      }
    }
    if (data.initialDelaySeconds !== undefined) {
      if (!validate87(data.initialDelaySeconds, {
        instancePath: instancePath + "/initialDelaySeconds",
        parentData: data,
        parentDataProperty: "initialDelaySeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.periodSeconds !== undefined) {
      if (!validate87(data.periodSeconds, {
        instancePath: instancePath + "/periodSeconds",
        parentData: data,
        parentDataProperty: "periodSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.successThreshold !== undefined) {
      if (!validate87(data.successThreshold, {
        instancePath: instancePath + "/successThreshold",
        parentData: data,
        parentDataProperty: "successThreshold",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.tcpSocket !== undefined) {
      if (!validate83(data.tcpSocket, {
        instancePath: instancePath + "/tcpSocket",
        parentData: data,
        parentDataProperty: "tcpSocket",
        rootData
      })) {
        vErrors = vErrors === null ? validate83.errors : vErrors.concat(validate83.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationGracePeriodSeconds !== undefined) {
      if (!validate100(data.terminationGracePeriodSeconds, {
        instancePath: instancePath + "/terminationGracePeriodSeconds",
        parentData: data,
        parentDataProperty: "terminationGracePeriodSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeoutSeconds !== undefined) {
      if (!validate87(data.timeoutSeconds, {
        instancePath: instancePath + "/timeoutSeconds",
        parentData: data,
        parentDataProperty: "timeoutSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
  }
  validate88.errors = vErrors;
  return errors === 0;
}
const schema48 = {
  "items": {
    "$ref": "WxMipWUqqSfo29Ftt21K0qdNOM8gEudjMjxXtvA"
  },
  "type": "array",
  "nullable": true
};
const schema49 = {
  "properties": {
    "containerPort": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "hostIP": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "hostPort": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "protocol": {
      "$ref": "WjWl4gI0zAjaPoQiailk8NsLbKtD9AmRfEZB1lmJptc"
    }
  },
  "required": ["containerPort"],
  "type": "object"
};
const schema50 = {
  "default": "TCP",
  "type": "string",
  "nullable": true
};
function validate155(data, {
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
  validate155.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.containerPort === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "containerPort"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.containerPort !== undefined) {
      if (!validate38(data.containerPort, {
        instancePath: instancePath + "/containerPort",
        parentData: data,
        parentDataProperty: "containerPort",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostIP !== undefined) {
      if (!validate54(data.hostIP, {
        instancePath: instancePath + "/hostIP",
        parentData: data,
        parentDataProperty: "hostIP",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostPort !== undefined) {
      if (!validate87(data.hostPort, {
        instancePath: instancePath + "/hostPort",
        parentData: data,
        parentDataProperty: "hostPort",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate54(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.protocol !== undefined) {
      if (!validate155(data.protocol, {
        instancePath: instancePath + "/protocol",
        parentData: data,
        parentDataProperty: "protocol",
        rootData
      })) {
        vErrors = vErrors === null ? validate155.errors : vErrors.concat(validate155.errors);
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
  validate150.errors = vErrors;
  return errors === 0;
}
function validate149(data, {
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
      if (!validate150(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate150.errors : vErrors.concat(validate150.errors);
        errors = vErrors.length;
      }
    }
  }
  validate149.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  "properties": {
    "limits": {
      "$ref": "gjo16z3NV0NSVrHi0ow9dEFkpRekg7uAIyza4KmU"
    },
    "requests": {
      "$ref": "gjo16z3NV0NSVrHi0ow9dEFkpRekg7uAIyza4KmU"
    }
  },
  "type": "object",
  "nullable": true
};
const schema36 = {
  "additionalProperties": {
    "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate106(data, {
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
      if (!validate103(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
        errors = vErrors.length;
      }
    }
  }
  validate106.errors = vErrors;
  return errors === 0;
}
function validate160(data, {
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
    if (data.limits !== undefined) {
      if (!validate106(data.limits, {
        instancePath: instancePath + "/limits",
        parentData: data,
        parentDataProperty: "limits",
        rootData
      })) {
        vErrors = vErrors === null ? validate106.errors : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
    if (data.requests !== undefined) {
      if (!validate106(data.requests, {
        instancePath: instancePath + "/requests",
        parentData: data,
        parentDataProperty: "requests",
        rootData
      })) {
        vErrors = vErrors === null ? validate106.errors : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
  }
  validate160.errors = vErrors;
  return errors === 0;
}
const schema52 = {
  "properties": {
    "allowPrivilegeEscalation": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "capabilities": {
      "$ref": "YMgmBIl6G2AJbxo7TKvMvLiTTIxtMfc8CdiHqBKE"
    },
    "privileged": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "procMount": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnlyRootFilesystem": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "runAsGroup": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "runAsNonRoot": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "runAsUser": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "seLinuxOptions": {
      "$ref": "HxCShOIxXvAeZcVxGCTBWSblLv24k535dp3HuWUtqq0"
    },
    "seccompProfile": {
      "$ref": "YbnajYi6rBqhVSaUKuHSP0DlX7N4UdiS6tIv3THy4"
    },
    "windowsOptions": {
      "$ref": "sWfrXDJM9xHwLEX7HYTegXP1RJ5T3eXzwt07iJjKI"
    }
  },
  "type": "object",
  "nullable": true
};
const schema53 = {
  "properties": {
    "add": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "drop": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
  "nullable": true
};
function validate166(data, {
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
    if (data.add !== undefined) {
      if (!validate26(data.add, {
        instancePath: instancePath + "/add",
        parentData: data,
        parentDataProperty: "add",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.drop !== undefined) {
      if (!validate26(data.drop, {
        instancePath: instancePath + "/drop",
        parentData: data,
        parentDataProperty: "drop",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate166.errors = vErrors;
  return errors === 0;
}
const schema54 = {
  "properties": {
    "level": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "role": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "user": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate176(data, {
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
    if (data.level !== undefined) {
      if (!validate54(data.level, {
        instancePath: instancePath + "/level",
        parentData: data,
        parentDataProperty: "level",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.role !== undefined) {
      if (!validate54(data.role, {
        instancePath: instancePath + "/role",
        parentData: data,
        parentDataProperty: "role",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate54(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.user !== undefined) {
      if (!validate54(data.user, {
        instancePath: instancePath + "/user",
        parentData: data,
        parentDataProperty: "user",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate176.errors = vErrors;
  return errors === 0;
}
const schema55 = {
  "properties": {
    "localhostProfile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "type": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["type"],
  "type": "object",
  "nullable": true
};
function validate182(data, {
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
    if (data.localhostProfile !== undefined) {
      if (!validate54(data.localhostProfile, {
        instancePath: instancePath + "/localhostProfile",
        parentData: data,
        parentDataProperty: "localhostProfile",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
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
  }
  validate182.errors = vErrors;
  return errors === 0;
}
const schema56 = {
  "properties": {
    "gmsaCredentialSpec": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "gmsaCredentialSpecName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "hostProcess": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "runAsUserName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate186(data, {
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
    if (data.gmsaCredentialSpec !== undefined) {
      if (!validate54(data.gmsaCredentialSpec, {
        instancePath: instancePath + "/gmsaCredentialSpec",
        parentData: data,
        parentDataProperty: "gmsaCredentialSpec",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.gmsaCredentialSpecName !== undefined) {
      if (!validate54(data.gmsaCredentialSpecName, {
        instancePath: instancePath + "/gmsaCredentialSpecName",
        parentData: data,
        parentDataProperty: "gmsaCredentialSpecName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostProcess !== undefined) {
      if (!validate58(data.hostProcess, {
        instancePath: instancePath + "/hostProcess",
        parentData: data,
        parentDataProperty: "hostProcess",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsUserName !== undefined) {
      if (!validate54(data.runAsUserName, {
        instancePath: instancePath + "/runAsUserName",
        parentData: data,
        parentDataProperty: "runAsUserName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate186.errors = vErrors;
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
    if (data.allowPrivilegeEscalation !== undefined) {
      if (!validate58(data.allowPrivilegeEscalation, {
        instancePath: instancePath + "/allowPrivilegeEscalation",
        parentData: data,
        parentDataProperty: "allowPrivilegeEscalation",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.capabilities !== undefined) {
      if (!validate166(data.capabilities, {
        instancePath: instancePath + "/capabilities",
        parentData: data,
        parentDataProperty: "capabilities",
        rootData
      })) {
        vErrors = vErrors === null ? validate166.errors : vErrors.concat(validate166.errors);
        errors = vErrors.length;
      }
    }
    if (data.privileged !== undefined) {
      if (!validate58(data.privileged, {
        instancePath: instancePath + "/privileged",
        parentData: data,
        parentDataProperty: "privileged",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.procMount !== undefined) {
      if (!validate54(data.procMount, {
        instancePath: instancePath + "/procMount",
        parentData: data,
        parentDataProperty: "procMount",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnlyRootFilesystem !== undefined) {
      if (!validate58(data.readOnlyRootFilesystem, {
        instancePath: instancePath + "/readOnlyRootFilesystem",
        parentData: data,
        parentDataProperty: "readOnlyRootFilesystem",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsGroup !== undefined) {
      if (!validate100(data.runAsGroup, {
        instancePath: instancePath + "/runAsGroup",
        parentData: data,
        parentDataProperty: "runAsGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsNonRoot !== undefined) {
      if (!validate58(data.runAsNonRoot, {
        instancePath: instancePath + "/runAsNonRoot",
        parentData: data,
        parentDataProperty: "runAsNonRoot",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsUser !== undefined) {
      if (!validate100(data.runAsUser, {
        instancePath: instancePath + "/runAsUser",
        parentData: data,
        parentDataProperty: "runAsUser",
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
    if (data.seLinuxOptions !== undefined) {
      if (!validate176(data.seLinuxOptions, {
        instancePath: instancePath + "/seLinuxOptions",
        parentData: data,
        parentDataProperty: "seLinuxOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate176.errors : vErrors.concat(validate176.errors);
        errors = vErrors.length;
      }
    }
    if (data.seccompProfile !== undefined) {
      if (!validate182(data.seccompProfile, {
        instancePath: instancePath + "/seccompProfile",
        parentData: data,
        parentDataProperty: "seccompProfile",
        rootData
      })) {
        vErrors = vErrors === null ? validate182.errors : vErrors.concat(validate182.errors);
        errors = vErrors.length;
      }
    }
    if (data.windowsOptions !== undefined) {
      if (!validate186(data.windowsOptions, {
        instancePath: instancePath + "/windowsOptions",
        parentData: data,
        parentDataProperty: "windowsOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate186.errors : vErrors.concat(validate186.errors);
        errors = vErrors.length;
      }
    }
  }
  validate164.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  "items": {
    "$ref": "RyMynCzjYAPHCEQqWFiO4dTDXuIMC11XbOjI4iorY"
  },
  "type": "array",
  "nullable": true
};
const schema58 = {
  "properties": {
    "devicePath": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["devicePath", "name"],
  "type": "object"
};
function validate200(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.devicePath === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "devicePath"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
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
    if (data.devicePath !== undefined) {
      if (!validate21(data.devicePath, {
        instancePath: instancePath + "/devicePath",
        parentData: data,
        parentDataProperty: "devicePath",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  validate200.errors = vErrors;
  return errors === 0;
}
function validate199(data, {
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
      if (!validate200(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate200.errors : vErrors.concat(validate200.errors);
        errors = vErrors.length;
      }
    }
  }
  validate199.errors = vErrors;
  return errors === 0;
}
const schema59 = {
  "items": {
    "$ref": "h2ndxqWzuqLEMmnwolMtxbUY8H7jzoghc2HBeqRAw"
  },
  "type": "array",
  "nullable": true
};
const schema60 = {
  "properties": {
    "mountPath": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "mountPropagation": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "subPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "subPathExpr": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["mountPath", "name"],
  "type": "object"
};
function validate206(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.mountPath === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "mountPath"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
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
    if (data.mountPath !== undefined) {
      if (!validate21(data.mountPath, {
        instancePath: instancePath + "/mountPath",
        parentData: data,
        parentDataProperty: "mountPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.mountPropagation !== undefined) {
      if (!validate54(data.mountPropagation, {
        instancePath: instancePath + "/mountPropagation",
        parentData: data,
        parentDataProperty: "mountPropagation",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
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
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.subPath !== undefined) {
      if (!validate54(data.subPath, {
        instancePath: instancePath + "/subPath",
        parentData: data,
        parentDataProperty: "subPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.subPathExpr !== undefined) {
      if (!validate54(data.subPathExpr, {
        instancePath: instancePath + "/subPathExpr",
        parentData: data,
        parentDataProperty: "subPathExpr",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
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
  validate206.errors = vErrors;
  return errors === 0;
}
function validate205(data, {
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
      if (!validate206(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate206.errors : vErrors.concat(validate206.errors);
        errors = vErrors.length;
      }
    }
  }
  validate205.errors = vErrors;
  return errors === 0;
}
function validate112(data, {
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
    if (data.args !== undefined) {
      if (!validate26(data.args, {
        instancePath: instancePath + "/args",
        parentData: data,
        parentDataProperty: "args",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.command !== undefined) {
      if (!validate26(data.command, {
        instancePath: instancePath + "/command",
        parentData: data,
        parentDataProperty: "command",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.env !== undefined) {
      if (!validate115(data.env, {
        instancePath: instancePath + "/env",
        parentData: data,
        parentDataProperty: "env",
        rootData
      })) {
        vErrors = vErrors === null ? validate115.errors : vErrors.concat(validate115.errors);
        errors = vErrors.length;
      }
    }
    if (data.envFrom !== undefined) {
      if (!validate134(data.envFrom, {
        instancePath: instancePath + "/envFrom",
        parentData: data,
        parentDataProperty: "envFrom",
        rootData
      })) {
        vErrors = vErrors === null ? validate134.errors : vErrors.concat(validate134.errors);
        errors = vErrors.length;
      }
    }
    if (data.image !== undefined) {
      if (!validate54(data.image, {
        instancePath: instancePath + "/image",
        parentData: data,
        parentDataProperty: "image",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.imagePullPolicy !== undefined) {
      if (!validate54(data.imagePullPolicy, {
        instancePath: instancePath + "/imagePullPolicy",
        parentData: data,
        parentDataProperty: "imagePullPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.lifecycle !== undefined) {
      if (!validate143(data.lifecycle, {
        instancePath: instancePath + "/lifecycle",
        parentData: data,
        parentDataProperty: "lifecycle",
        rootData
      })) {
        vErrors = vErrors === null ? validate143.errors : vErrors.concat(validate143.errors);
        errors = vErrors.length;
      }
    }
    if (data.livenessProbe !== undefined) {
      if (!validate88(data.livenessProbe, {
        instancePath: instancePath + "/livenessProbe",
        parentData: data,
        parentDataProperty: "livenessProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
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
    if (data.ports !== undefined) {
      if (!validate149(data.ports, {
        instancePath: instancePath + "/ports",
        parentData: data,
        parentDataProperty: "ports",
        rootData
      })) {
        vErrors = vErrors === null ? validate149.errors : vErrors.concat(validate149.errors);
        errors = vErrors.length;
      }
    }
    if (data.readinessProbe !== undefined) {
      if (!validate88(data.readinessProbe, {
        instancePath: instancePath + "/readinessProbe",
        parentData: data,
        parentDataProperty: "readinessProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate160(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate160.errors : vErrors.concat(validate160.errors);
        errors = vErrors.length;
      }
    }
    if (data.securityContext !== undefined) {
      if (!validate164(data.securityContext, {
        instancePath: instancePath + "/securityContext",
        parentData: data,
        parentDataProperty: "securityContext",
        rootData
      })) {
        vErrors = vErrors === null ? validate164.errors : vErrors.concat(validate164.errors);
        errors = vErrors.length;
      }
    }
    if (data.startupProbe !== undefined) {
      if (!validate88(data.startupProbe, {
        instancePath: instancePath + "/startupProbe",
        parentData: data,
        parentDataProperty: "startupProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
        errors = vErrors.length;
      }
    }
    if (data.stdin !== undefined) {
      if (!validate58(data.stdin, {
        instancePath: instancePath + "/stdin",
        parentData: data,
        parentDataProperty: "stdin",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.stdinOnce !== undefined) {
      if (!validate58(data.stdinOnce, {
        instancePath: instancePath + "/stdinOnce",
        parentData: data,
        parentDataProperty: "stdinOnce",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationMessagePath !== undefined) {
      if (!validate54(data.terminationMessagePath, {
        instancePath: instancePath + "/terminationMessagePath",
        parentData: data,
        parentDataProperty: "terminationMessagePath",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationMessagePolicy !== undefined) {
      if (!validate54(data.terminationMessagePolicy, {
        instancePath: instancePath + "/terminationMessagePolicy",
        parentData: data,
        parentDataProperty: "terminationMessagePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.tty !== undefined) {
      if (!validate58(data.tty, {
        instancePath: instancePath + "/tty",
        parentData: data,
        parentDataProperty: "tty",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeDevices !== undefined) {
      if (!validate199(data.volumeDevices, {
        instancePath: instancePath + "/volumeDevices",
        parentData: data,
        parentDataProperty: "volumeDevices",
        rootData
      })) {
        vErrors = vErrors === null ? validate199.errors : vErrors.concat(validate199.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeMounts !== undefined) {
      if (!validate205(data.volumeMounts, {
        instancePath: instancePath + "/volumeMounts",
        parentData: data,
        parentDataProperty: "volumeMounts",
        rootData
      })) {
        vErrors = vErrors === null ? validate205.errors : vErrors.concat(validate205.errors);
        errors = vErrors.length;
      }
    }
    if (data.workingDir !== undefined) {
      if (!validate54(data.workingDir, {
        instancePath: instancePath + "/workingDir",
        parentData: data,
        parentDataProperty: "workingDir",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
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
  validate112.errors = vErrors;
  return errors === 0;
}
function validate111(data, {
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
      if (!validate112(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
        errors = vErrors.length;
      }
    }
  }
  validate111.errors = vErrors;
  return errors === 0;
}
const schema89 = {
  "default": "15s",
  "pattern": "^(0|(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?)$",
  "type": "string",
  "nullable": true
};
const pattern1 = new RegExp("^(0|(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?)$", "u");
function validate302(data, {
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
          pattern: "^(0|(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?)$"
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
  validate302.errors = vErrors;
  return errors === 0;
}
const schema90 = {
  "items": {
    "$ref": "fVvHa8DQC0QLMsBcGF33KfhIGwbMqoMUSQkQxIZe9o"
  },
  "type": "array",
  "nullable": true
};
const schema91 = {
  "properties": {
    "group": {
      "$ref": "gx1hUsYpzXMxcWLrfRKtQoSGpiFDcDcEVOq2zjP0mqo"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    },
    "resource": {
      "$ref": "jqtT3NVvJ1LVQOdoh2cADQfzm4yZI4I2oe2dECsH5E"
    }
  },
  "required": ["namespace", "resource"],
  "type": "object"
};
const schema92 = {
  "default": "monitoring.coreos.com",
  "enum": ["monitoring.coreos.com"],
  "type": "string",
  "nullable": true
};
function validate306(data, {
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
  if (!(data === "monitoring.coreos.com")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema92.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate306.errors = vErrors;
  return errors === 0;
}
const schema93 = {
  "minLength": 1,
  "type": "string"
};
import func2 from "@kubernetes-models/validate/runtime/ucs2length";
function validate309(data, {
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
  validate309.errors = vErrors;
  return errors === 0;
}
const schema94 = {
  "enum": ["prometheusrules", "servicemonitors", "podmonitors", "probes"],
  "type": "string"
};
function validate311(data, {
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
  if (!(data === "prometheusrules" || data === "servicemonitors" || data === "podmonitors" || data === "probes")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema94.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate311.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.namespace === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "namespace"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.resource === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "resource"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.group !== undefined) {
      if (!validate306(data.group, {
        instancePath: instancePath + "/group",
        parentData: data,
        parentDataProperty: "group",
        rootData
      })) {
        vErrors = vErrors === null ? validate306.errors : vErrors.concat(validate306.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate54(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate309(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate309.errors : vErrors.concat(validate309.errors);
        errors = vErrors.length;
      }
    }
    if (data.resource !== undefined) {
      if (!validate311(data.resource, {
        instancePath: instancePath + "/resource",
        parentData: data,
        parentDataProperty: "resource",
        rootData
      })) {
        vErrors = vErrors === null ? validate311.errors : vErrors.concat(validate311.errors);
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
  validate305.errors = vErrors;
  return errors === 0;
}
function validate304(data, {
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
      if (!validate305(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate305.errors : vErrors.concat(validate305.errors);
        errors = vErrors.length;
      }
    }
  }
  validate304.errors = vErrors;
  return errors === 0;
}
const schema95 = {
  "properties": {
    "ca": {
      "$ref": "gU7QkFFGilSOcADaLu9w4rwvKiuQOHSSu6I5l3j3A"
    },
    "caFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "cert": {
      "$ref": "gU7QkFFGilSOcADaLu9w4rwvKiuQOHSSu6I5l3j3A"
    },
    "certFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "insecureSkipVerify": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "keyFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
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
const schema37 = {
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
function validate108(data, {
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
      if (!validate55(data.configMap, {
        instancePath: instancePath + "/configMap",
        parentData: data,
        parentDataProperty: "configMap",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.secret !== undefined) {
      if (!validate55(data.secret, {
        instancePath: instancePath + "/secret",
        parentData: data,
        parentDataProperty: "secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
  }
  validate108.errors = vErrors;
  return errors === 0;
}
function validate316(data, {
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
      if (!validate108(data.ca, {
        instancePath: instancePath + "/ca",
        parentData: data,
        parentDataProperty: "ca",
        rootData
      })) {
        vErrors = vErrors === null ? validate108.errors : vErrors.concat(validate108.errors);
        errors = vErrors.length;
      }
    }
    if (data.caFile !== undefined) {
      if (!validate54(data.caFile, {
        instancePath: instancePath + "/caFile",
        parentData: data,
        parentDataProperty: "caFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.cert !== undefined) {
      if (!validate108(data.cert, {
        instancePath: instancePath + "/cert",
        parentData: data,
        parentDataProperty: "cert",
        rootData
      })) {
        vErrors = vErrors === null ? validate108.errors : vErrors.concat(validate108.errors);
        errors = vErrors.length;
      }
    }
    if (data.certFile !== undefined) {
      if (!validate54(data.certFile, {
        instancePath: instancePath + "/certFile",
        parentData: data,
        parentDataProperty: "certFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.insecureSkipVerify !== undefined) {
      if (!validate58(data.insecureSkipVerify, {
        instancePath: instancePath + "/insecureSkipVerify",
        parentData: data,
        parentDataProperty: "insecureSkipVerify",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.keyFile !== undefined) {
      if (!validate54(data.keyFile, {
        instancePath: instancePath + "/keyFile",
        parentData: data,
        parentDataProperty: "keyFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.keySecret !== undefined) {
      if (!validate55(data.keySecret, {
        instancePath: instancePath + "/keySecret",
        parentData: data,
        parentDataProperty: "keySecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.serverName !== undefined) {
      if (!validate54(data.serverName, {
        instancePath: instancePath + "/serverName",
        parentData: data,
        parentDataProperty: "serverName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate316.errors = vErrors;
  return errors === 0;
}
const schema96 = {
  "items": {
    "$ref": "kSyga4ecchKN4eGV0cdrlXE1sLaGQjDGcNYBWrC7630"
  },
  "type": "array",
  "nullable": true
};
const schema97 = {
  "properties": {
    "hostnames": {
      "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
    },
    "ip": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["hostnames", "ip"],
  "type": "object"
};
const schema64 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array"
};
function validate226(data, {
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
  validate226.errors = vErrors;
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
    if (data.hostnames === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "hostnames"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.ip === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "ip"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.hostnames !== undefined) {
      if (!validate226(data.hostnames, {
        instancePath: instancePath + "/hostnames",
        parentData: data,
        parentDataProperty: "hostnames",
        rootData
      })) {
        vErrors = vErrors === null ? validate226.errors : vErrors.concat(validate226.errors);
        errors = vErrors.length;
      }
    }
    if (data.ip !== undefined) {
      if (!validate21(data.ip, {
        instancePath: instancePath + "/ip",
        parentData: data,
        parentDataProperty: "ip",
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
  validate327.errors = vErrors;
  return errors === 0;
}
function validate326(data, {
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
      if (!validate327(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate327.errors : vErrors.concat(validate327.errors);
        errors = vErrors.length;
      }
    }
  }
  validate326.errors = vErrors;
  return errors === 0;
}
const schema98 = {
  "items": {
    "$ref": "qgtTuDaNsImr24YNCUVN3pDpwYXcxIDVFjAvxPkh8"
  },
  "type": "array",
  "nullable": true
};
const schema76 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate265(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name !== undefined) {
      if (!validate54(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
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
  validate265.errors = vErrors;
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
      if (!validate265(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate265.errors : vErrors.concat(validate265.errors);
        errors = vErrors.length;
      }
    }
  }
  validate333.errors = vErrors;
  return errors === 0;
}
const schema99 = {
  "enum": ["", "logfmt", "json"],
  "type": "string",
  "nullable": true
};
function validate339(data, {
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
  if (!(data === "" || data === "logfmt" || data === "json")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema99.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate339.errors = vErrors;
  return errors === 0;
}
const schema100 = {
  "enum": ["", "debug", "info", "warn", "error"],
  "type": "string",
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
  if (!(data === "" || data === "debug" || data === "info" || data === "warn" || data === "error")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema100.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate341.errors = vErrors;
  return errors === 0;
}
const schema62 = {
  "properties": {
    "annotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "labels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
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
    if (data.annotations !== undefined) {
      if (!validate35(data.annotations, {
        instancePath: instancePath + "/annotations",
        parentData: data,
        parentDataProperty: "annotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.labels !== undefined) {
      if (!validate35(data.labels, {
        instancePath: instancePath + "/labels",
        parentData: data,
        parentDataProperty: "labels",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate54(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate221.errors = vErrors;
  return errors === 0;
}
const schema101 = {
  "items": {
    "$ref": "dijMKhelye5PEPQszbtEYfWkgPEJ7dAVSlDloR29ss"
  },
  "type": "array",
  "nullable": true
};
const schema102 = {
  "properties": {
    "ruleName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "ruleNamespace": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["ruleName", "ruleNamespace"],
  "type": "object"
};
function validate352(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.ruleName === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "ruleName"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.ruleNamespace === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "ruleNamespace"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.ruleName !== undefined) {
      if (!validate21(data.ruleName, {
        instancePath: instancePath + "/ruleName",
        parentData: data,
        parentDataProperty: "ruleName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.ruleNamespace !== undefined) {
      if (!validate21(data.ruleNamespace, {
        instancePath: instancePath + "/ruleNamespace",
        parentData: data,
        parentDataProperty: "ruleNamespace",
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
  validate352.errors = vErrors;
  return errors === 0;
}
function validate351(data, {
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
      if (!validate352(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate352.errors : vErrors.concat(validate352.errors);
        errors = vErrors.length;
      }
    }
  }
  validate351.errors = vErrors;
  return errors === 0;
}
const schema103 = {
  "default": "24h",
  "pattern": "^(0|(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?)$",
  "type": "string",
  "nullable": true
};
function validate361(data, {
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
          pattern: "^(0|(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?)$"
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
  validate361.errors = vErrors;
  return errors === 0;
}
const schema104 = {
  "properties": {
    "fsGroup": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "fsGroupChangePolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "runAsGroup": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "runAsNonRoot": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "runAsUser": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "seLinuxOptions": {
      "$ref": "HxCShOIxXvAeZcVxGCTBWSblLv24k535dp3HuWUtqq0"
    },
    "seccompProfile": {
      "$ref": "YbnajYi6rBqhVSaUKuHSP0DlX7N4UdiS6tIv3THy4"
    },
    "supplementalGroups": {
      "$ref": "Q576bBYbJ1AGPeiGBGrCfpIOdAY4EluWm7uSP5Hk"
    },
    "sysctls": {
      "$ref": "wOtvUyP8xBMF8YvP9G2nZ7hpGeMpOckdRUXrDPgLUY"
    },
    "windowsOptions": {
      "$ref": "sWfrXDJM9xHwLEX7HYTegXP1RJ5T3eXzwt07iJjKI"
    }
  },
  "type": "object",
  "nullable": true
};
const schema105 = {
  "items": {
    "$ref": "icwF9bpzvIS3QxC52v2XvqrjjaZnFwyMbHUnptLeEQ"
  },
  "type": "array",
  "nullable": true
};
const schema106 = {
  "format": "int64",
  "type": "integer"
};
function validate375(data, {
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
  if (typeof data == "number" && isFinite(data)) {
    if (!formats4.validate(data)) {
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
  validate375.errors = vErrors;
  return errors === 0;
}
function validate374(data, {
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
      if (!validate375(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate375.errors : vErrors.concat(validate375.errors);
        errors = vErrors.length;
      }
    }
  }
  validate374.errors = vErrors;
  return errors === 0;
}
function validate366(data, {
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
    if (data.fsGroup !== undefined) {
      if (!validate100(data.fsGroup, {
        instancePath: instancePath + "/fsGroup",
        parentData: data,
        parentDataProperty: "fsGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
    if (data.fsGroupChangePolicy !== undefined) {
      if (!validate54(data.fsGroupChangePolicy, {
        instancePath: instancePath + "/fsGroupChangePolicy",
        parentData: data,
        parentDataProperty: "fsGroupChangePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsGroup !== undefined) {
      if (!validate100(data.runAsGroup, {
        instancePath: instancePath + "/runAsGroup",
        parentData: data,
        parentDataProperty: "runAsGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsNonRoot !== undefined) {
      if (!validate58(data.runAsNonRoot, {
        instancePath: instancePath + "/runAsNonRoot",
        parentData: data,
        parentDataProperty: "runAsNonRoot",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsUser !== undefined) {
      if (!validate100(data.runAsUser, {
        instancePath: instancePath + "/runAsUser",
        parentData: data,
        parentDataProperty: "runAsUser",
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
    if (data.seLinuxOptions !== undefined) {
      if (!validate176(data.seLinuxOptions, {
        instancePath: instancePath + "/seLinuxOptions",
        parentData: data,
        parentDataProperty: "seLinuxOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate176.errors : vErrors.concat(validate176.errors);
        errors = vErrors.length;
      }
    }
    if (data.seccompProfile !== undefined) {
      if (!validate182(data.seccompProfile, {
        instancePath: instancePath + "/seccompProfile",
        parentData: data,
        parentDataProperty: "seccompProfile",
        rootData
      })) {
        vErrors = vErrors === null ? validate182.errors : vErrors.concat(validate182.errors);
        errors = vErrors.length;
      }
    }
    if (data.supplementalGroups !== undefined) {
      if (!validate374(data.supplementalGroups, {
        instancePath: instancePath + "/supplementalGroups",
        parentData: data,
        parentDataProperty: "supplementalGroups",
        rootData
      })) {
        vErrors = vErrors === null ? validate374.errors : vErrors.concat(validate374.errors);
        errors = vErrors.length;
      }
    }
    if (data.sysctls !== undefined) {
      if (!validate73(data.sysctls, {
        instancePath: instancePath + "/sysctls",
        parentData: data,
        parentDataProperty: "sysctls",
        rootData
      })) {
        vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
        errors = vErrors.length;
      }
    }
    if (data.windowsOptions !== undefined) {
      if (!validate186(data.windowsOptions, {
        instancePath: instancePath + "/windowsOptions",
        parentData: data,
        parentDataProperty: "windowsOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate186.errors : vErrors.concat(validate186.errors);
        errors = vErrors.length;
      }
    }
  }
  validate366.errors = vErrors;
  return errors === 0;
}
const schema107 = {
  "properties": {
    "disableMountSubPath": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "emptyDir": {
      "$ref": "oCPGk3BkJBAY5rCBWsfjLE97smSw378DNB3pJ2yQdAU"
    },
    "ephemeral": {
      "$ref": "4BOyBr1QD4XE4G0bbDH3DWL60GSw4vFNCP88PGtkKg"
    },
    "volumeClaimTemplate": {
      "$ref": "W0aU2EnxHiGb7HyUjuVqIcRpTf7c7NYp5L9PWl74nI"
    }
  },
  "type": "object",
  "nullable": true
};
const schema66 = {
  "properties": {
    "medium": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "sizeLimit": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    }
  },
  "type": "object",
  "nullable": true
};
function validate230(data, {
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
    if (data.medium !== undefined) {
      if (!validate54(data.medium, {
        instancePath: instancePath + "/medium",
        parentData: data,
        parentDataProperty: "medium",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.sizeLimit !== undefined) {
      if (!validate103(data.sizeLimit, {
        instancePath: instancePath + "/sizeLimit",
        parentData: data,
        parentDataProperty: "sizeLimit",
        rootData
      })) {
        vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
        errors = vErrors.length;
      }
    }
  }
  validate230.errors = vErrors;
  return errors === 0;
}
const schema67 = {
  "properties": {
    "volumeClaimTemplate": {
      "$ref": "dtMcsMWRcn9scvwVz7Dj7qrFtZpF3fJFCj5iilE2o"
    }
  },
  "type": "object",
  "nullable": true
};
const schema68 = {
  "properties": {
    "metadata": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "spec": {
      "$ref": "2bb8d7m40oq1FAyB6SBgRCz2fyAiYxSoRKQg3DQBY"
    }
  },
  "required": ["spec"],
  "type": "object",
  "nullable": true
};
const schema69 = {
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate235(data, {
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
  validate235.errors = vErrors;
  return errors === 0;
}
const schema70 = {
  "properties": {
    "accessModes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "dataSource": {
      "$ref": "Ie9aGhSpjw6Qzf2P1NWEJFaL4kYcEsKAtQUYsudcc"
    },
    "dataSourceRef": {
      "$ref": "Ie9aGhSpjw6Qzf2P1NWEJFaL4kYcEsKAtQUYsudcc"
    },
    "resources": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "selector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "storageClassName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "volumeMode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "volumeName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
const schema61 = {
  "properties": {
    "apiGroup": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["kind", "name"],
  "type": "object",
  "nullable": true
};
function validate217(data, {
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
    if (data.name === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.apiGroup !== undefined) {
      if (!validate54(data.apiGroup, {
        instancePath: instancePath + "/apiGroup",
        parentData: data,
        parentDataProperty: "apiGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate21(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  }
  validate217.errors = vErrors;
  return errors === 0;
}
function validate237(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.accessModes !== undefined) {
      if (!validate26(data.accessModes, {
        instancePath: instancePath + "/accessModes",
        parentData: data,
        parentDataProperty: "accessModes",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataSource !== undefined) {
      if (!validate217(data.dataSource, {
        instancePath: instancePath + "/dataSource",
        parentData: data,
        parentDataProperty: "dataSource",
        rootData
      })) {
        vErrors = vErrors === null ? validate217.errors : vErrors.concat(validate217.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataSourceRef !== undefined) {
      if (!validate217(data.dataSourceRef, {
        instancePath: instancePath + "/dataSourceRef",
        parentData: data,
        parentDataProperty: "dataSourceRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate217.errors : vErrors.concat(validate217.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate160(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate160.errors : vErrors.concat(validate160.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate33(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageClassName !== undefined) {
      if (!validate54(data.storageClassName, {
        instancePath: instancePath + "/storageClassName",
        parentData: data,
        parentDataProperty: "storageClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeMode !== undefined) {
      if (!validate54(data.volumeMode, {
        instancePath: instancePath + "/volumeMode",
        parentData: data,
        parentDataProperty: "volumeMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeName !== undefined) {
      if (!validate54(data.volumeName, {
        instancePath: instancePath + "/volumeName",
        parentData: data,
        parentDataProperty: "volumeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
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
  validate237.errors = vErrors;
  return errors === 0;
}
function validate234(data, {
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
    if (data.spec === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "spec"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.metadata !== undefined) {
      if (!validate235(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate235.errors : vErrors.concat(validate235.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate237(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate237.errors : vErrors.concat(validate237.errors);
        errors = vErrors.length;
      }
    }
  }
  validate234.errors = vErrors;
  return errors === 0;
}
function validate233(data, {
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
    if (data.volumeClaimTemplate !== undefined) {
      if (!validate234(data.volumeClaimTemplate, {
        instancePath: instancePath + "/volumeClaimTemplate",
        parentData: data,
        parentDataProperty: "volumeClaimTemplate",
        rootData
      })) {
        vErrors = vErrors === null ? validate234.errors : vErrors.concat(validate234.errors);
        errors = vErrors.length;
      }
    }
  }
  validate233.errors = vErrors;
  return errors === 0;
}
const schema108 = {
  "properties": {
    "apiVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "metadata": {
      "$ref": "dw9Aj87JbDhskFYjQ9xyC2ziWVIvXd7xite3XAESo4"
    },
    "spec": {
      "$ref": "8VDJmbEiK3NZY8d9AgZR7F5uM1RFWf8KboZHz8iVhwQ"
    },
    "status": {
      "$ref": "VT83uchrngUQOFVFEOLmDyAiwZYTsNMvGy1n13ekFY"
    }
  },
  "type": "object",
  "nullable": true
};
const schema109 = {
  "properties": {
    "accessModes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "dataSource": {
      "$ref": "Ie9aGhSpjw6Qzf2P1NWEJFaL4kYcEsKAtQUYsudcc"
    },
    "dataSourceRef": {
      "$ref": "Ie9aGhSpjw6Qzf2P1NWEJFaL4kYcEsKAtQUYsudcc"
    },
    "resources": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "selector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "storageClassName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "volumeMode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "volumeName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate390(data, {
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
    if (data.accessModes !== undefined) {
      if (!validate26(data.accessModes, {
        instancePath: instancePath + "/accessModes",
        parentData: data,
        parentDataProperty: "accessModes",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataSource !== undefined) {
      if (!validate217(data.dataSource, {
        instancePath: instancePath + "/dataSource",
        parentData: data,
        parentDataProperty: "dataSource",
        rootData
      })) {
        vErrors = vErrors === null ? validate217.errors : vErrors.concat(validate217.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataSourceRef !== undefined) {
      if (!validate217(data.dataSourceRef, {
        instancePath: instancePath + "/dataSourceRef",
        parentData: data,
        parentDataProperty: "dataSourceRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate217.errors : vErrors.concat(validate217.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate160(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate160.errors : vErrors.concat(validate160.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate33(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageClassName !== undefined) {
      if (!validate54(data.storageClassName, {
        instancePath: instancePath + "/storageClassName",
        parentData: data,
        parentDataProperty: "storageClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeMode !== undefined) {
      if (!validate54(data.volumeMode, {
        instancePath: instancePath + "/volumeMode",
        parentData: data,
        parentDataProperty: "volumeMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeName !== undefined) {
      if (!validate54(data.volumeName, {
        instancePath: instancePath + "/volumeName",
        parentData: data,
        parentDataProperty: "volumeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate390.errors = vErrors;
  return errors === 0;
}
const schema110 = {
  "properties": {
    "accessModes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "allocatedResources": {
      "$ref": "gjo16z3NV0NSVrHi0ow9dEFkpRekg7uAIyza4KmU"
    },
    "capacity": {
      "$ref": "gjo16z3NV0NSVrHi0ow9dEFkpRekg7uAIyza4KmU"
    },
    "conditions": {
      "$ref": "bWsC846N6lwnSk8171n5znSNKmb3MMCymezlH3MgVQ"
    },
    "phase": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "resizeStatus": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema111 = {
  "items": {
    "$ref": "mi9BRXU6Hf8aJ4x7ZptnpBq4WrrIwuaOlkokdn8pVM"
  },
  "type": "array",
  "nullable": true
};
const schema112 = {
  "properties": {
    "lastProbeTime": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
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
const schema63 = {
  "format": "date-time",
  "type": "string",
  "nullable": true
};
const formats6 = formats["date-time"];
function validate225(data, {
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
  validate225.errors = vErrors;
  return errors === 0;
}
function validate405(data, {
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
    if (data.lastProbeTime !== undefined) {
      if (!validate225(data.lastProbeTime, {
        instancePath: instancePath + "/lastProbeTime",
        parentData: data,
        parentDataProperty: "lastProbeTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate225.errors : vErrors.concat(validate225.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastTransitionTime !== undefined) {
      if (!validate225(data.lastTransitionTime, {
        instancePath: instancePath + "/lastTransitionTime",
        parentData: data,
        parentDataProperty: "lastTransitionTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate225.errors : vErrors.concat(validate225.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate54(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.reason !== undefined) {
      if (!validate54(data.reason, {
        instancePath: instancePath + "/reason",
        parentData: data,
        parentDataProperty: "reason",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
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
  validate405.errors = vErrors;
  return errors === 0;
}
function validate404(data, {
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
      if (!validate405(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate405.errors : vErrors.concat(validate405.errors);
        errors = vErrors.length;
      }
    }
  }
  validate404.errors = vErrors;
  return errors === 0;
}
function validate400(data, {
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
    if (data.accessModes !== undefined) {
      if (!validate26(data.accessModes, {
        instancePath: instancePath + "/accessModes",
        parentData: data,
        parentDataProperty: "accessModes",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.allocatedResources !== undefined) {
      if (!validate106(data.allocatedResources, {
        instancePath: instancePath + "/allocatedResources",
        parentData: data,
        parentDataProperty: "allocatedResources",
        rootData
      })) {
        vErrors = vErrors === null ? validate106.errors : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
    if (data.capacity !== undefined) {
      if (!validate106(data.capacity, {
        instancePath: instancePath + "/capacity",
        parentData: data,
        parentDataProperty: "capacity",
        rootData
      })) {
        vErrors = vErrors === null ? validate106.errors : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
    if (data.conditions !== undefined) {
      if (!validate404(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate404.errors : vErrors.concat(validate404.errors);
        errors = vErrors.length;
      }
    }
    if (data.phase !== undefined) {
      if (!validate54(data.phase, {
        instancePath: instancePath + "/phase",
        parentData: data,
        parentDataProperty: "phase",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.resizeStatus !== undefined) {
      if (!validate54(data.resizeStatus, {
        instancePath: instancePath + "/resizeStatus",
        parentData: data,
        parentDataProperty: "resizeStatus",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate400.errors = vErrors;
  return errors === 0;
}
function validate386(data, {
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
    if (data.apiVersion !== undefined) {
      if (!validate54(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate54(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate221(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate221.errors : vErrors.concat(validate221.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate390(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate390.errors : vErrors.concat(validate390.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate400(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate400.errors : vErrors.concat(validate400.errors);
        errors = vErrors.length;
      }
    }
  }
  validate386.errors = vErrors;
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
    if (data.disableMountSubPath !== undefined) {
      if (!validate58(data.disableMountSubPath, {
        instancePath: instancePath + "/disableMountSubPath",
        parentData: data,
        parentDataProperty: "disableMountSubPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.emptyDir !== undefined) {
      if (!validate230(data.emptyDir, {
        instancePath: instancePath + "/emptyDir",
        parentData: data,
        parentDataProperty: "emptyDir",
        rootData
      })) {
        vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
        errors = vErrors.length;
      }
    }
    if (data.ephemeral !== undefined) {
      if (!validate233(data.ephemeral, {
        instancePath: instancePath + "/ephemeral",
        parentData: data,
        parentDataProperty: "ephemeral",
        rootData
      })) {
        vErrors = vErrors === null ? validate233.errors : vErrors.concat(validate233.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeClaimTemplate !== undefined) {
      if (!validate386(data.volumeClaimTemplate, {
        instancePath: instancePath + "/volumeClaimTemplate",
        parentData: data,
        parentDataProperty: "volumeClaimTemplate",
        rootData
      })) {
        vErrors = vErrors === null ? validate386.errors : vErrors.concat(validate386.errors);
        errors = vErrors.length;
      }
    }
  }
  validate382.errors = vErrors;
  return errors === 0;
}
const schema113 = {
  "items": {
    "$ref": "Me3dAzCevo9JgluOcBf4PX5XcjXOHICBlAsWQglc"
  },
  "type": "array",
  "nullable": true
};
const schema114 = {
  "properties": {
    "effect": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "operator": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tolerationSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
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
    if (data.effect !== undefined) {
      if (!validate54(data.effect, {
        instancePath: instancePath + "/effect",
        parentData: data,
        parentDataProperty: "effect",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.key !== undefined) {
      if (!validate54(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.operator !== undefined) {
      if (!validate54(data.operator, {
        instancePath: instancePath + "/operator",
        parentData: data,
        parentDataProperty: "operator",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.tolerationSeconds !== undefined) {
      if (!validate100(data.tolerationSeconds, {
        instancePath: instancePath + "/tolerationSeconds",
        parentData: data,
        parentDataProperty: "tolerationSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate54(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
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
function validate419(data, {
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
      if (!validate420(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate420.errors : vErrors.concat(validate420.errors);
        errors = vErrors.length;
      }
    }
  }
  validate419.errors = vErrors;
  return errors === 0;
}
const schema115 = {
  "items": {
    "$ref": "PuHvzCsfcQjnYRLzM6nDacK99pqlDXXcvi8KwTejWVI"
  },
  "type": "array",
  "nullable": true
};
const schema116 = {
  "properties": {
    "labelSelector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "maxSkew": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "topologyKey": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "whenUnsatisfiable": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["maxSkew", "topologyKey", "whenUnsatisfiable"],
  "type": "object"
};
function validate429(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.maxSkew === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "maxSkew"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.topologyKey === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "topologyKey"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.whenUnsatisfiable === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "whenUnsatisfiable"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.labelSelector !== undefined) {
      if (!validate33(data.labelSelector, {
        instancePath: instancePath + "/labelSelector",
        parentData: data,
        parentDataProperty: "labelSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxSkew !== undefined) {
      if (!validate38(data.maxSkew, {
        instancePath: instancePath + "/maxSkew",
        parentData: data,
        parentDataProperty: "maxSkew",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.topologyKey !== undefined) {
      if (!validate21(data.topologyKey, {
        instancePath: instancePath + "/topologyKey",
        parentData: data,
        parentDataProperty: "topologyKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.whenUnsatisfiable !== undefined) {
      if (!validate21(data.whenUnsatisfiable, {
        instancePath: instancePath + "/whenUnsatisfiable",
        parentData: data,
        parentDataProperty: "whenUnsatisfiable",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  validate429.errors = vErrors;
  return errors === 0;
}
function validate428(data, {
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
      if (!validate429(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate429.errors : vErrors.concat(validate429.errors);
        errors = vErrors.length;
      }
    }
  }
  validate428.errors = vErrors;
  return errors === 0;
}
const schema117 = {
  "items": {
    "$ref": "uwf9fjXqDVBdisbZihonpMcBKFWitgd2fssJ9nUuVk"
  },
  "type": "array",
  "nullable": true
};
const schema118 = {
  "properties": {
    "awsElasticBlockStore": {
      "$ref": "UQa7Lhw5iGFLfJlygIJgmJ6Hywcu6Xn7okVNibWnms"
    },
    "azureDisk": {
      "$ref": "rC5tEafGGt3ojJcfb2HAk0agKW5AulefVOZ7BJtc4"
    },
    "azureFile": {
      "$ref": "aGoyELjKgVZB0zHZY20WHspFt5yRjdEGhBhP64tI"
    },
    "cephfs": {
      "$ref": "MgHYLawNC9z2IYbSqTCcZLojkVKAVMGr6mosPoBQFg"
    },
    "cinder": {
      "$ref": "ybgi1TOJloZ01od6IO6LreMR2QkRj5OpBKkz3BiCs"
    },
    "configMap": {
      "$ref": "uaNQZQ5Y2Z6Ub2O5DPWZhhjzGE3qjh8E610dBIrU"
    },
    "csi": {
      "$ref": "QZukoubHHGDv9FmbnqMQ4MaAii2eYFz3eQKZUKawY"
    },
    "downwardAPI": {
      "$ref": "v1PCMNdiugdUmkd4iDaUiI9TBLV0ysLSufqr22m0o"
    },
    "emptyDir": {
      "$ref": "oCPGk3BkJBAY5rCBWsfjLE97smSw378DNB3pJ2yQdAU"
    },
    "ephemeral": {
      "$ref": "4BOyBr1QD4XE4G0bbDH3DWL60GSw4vFNCP88PGtkKg"
    },
    "fc": {
      "$ref": "Uqzx5kAIsGKjouiuawWN56EiOBK7WDkCQLJuJNuomA"
    },
    "flexVolume": {
      "$ref": "2xnNZ6lM8Qvbll0NBnCh2PSbjJAziUDze6AN2ziQU"
    },
    "flocker": {
      "$ref": "w8yctXjkRqJ0HFoiSOCeruXgyckAOlH3vZnofJ7L9A"
    },
    "gcePersistentDisk": {
      "$ref": "BPpBEgv3BVu3XQEyaunhHFel5nn4hFMSM9gwTMBvVNk"
    },
    "gitRepo": {
      "$ref": "xgKgqYAOLgMggltl93ltgU0mQzey55818D1mM5ydodc"
    },
    "glusterfs": {
      "$ref": "wrr3iOTI9cIafNHBkruOIMvmrMkQJyVegxJz4i6A1P8"
    },
    "hostPath": {
      "$ref": "cDEhPXL8pA6Ec187LOICpIpwh0q9lmBY4g5Xl43cQ"
    },
    "iscsi": {
      "$ref": "EEWm4ienK1GnW5NvsYl36uxiHtJte2GQhMbdFQ3XGE"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "nfs": {
      "$ref": "PTIHrR7ObpFSHfpEsbwkaEt6QpgouCTgsczNTv3E"
    },
    "persistentVolumeClaim": {
      "$ref": "STKrnHXjnhmUK8ywI96Co95jk513Kd6B4STnaeRjE8"
    },
    "photonPersistentDisk": {
      "$ref": "jIbK1AyqFiR5cG5FK2IbibPooMO9NkEUicdeVu1KKoE"
    },
    "portworxVolume": {
      "$ref": "LeJeuVcoPGROifOKwaoW7nJYZwqn7pYot9GYlUELPI"
    },
    "projected": {
      "$ref": "L20Ck7xRaAwJ7X2tGoV4IwNWXebfn4aID97VW3AYC8"
    },
    "quobyte": {
      "$ref": "LclMJcQIFOPOzptOLn5YycJLDZRCMgkHoMHc4wzDY"
    },
    "rbd": {
      "$ref": "2OdQTwSqJbxEssVjlVmDCT2pODyt3EOdXUUvFVWCYU"
    },
    "scaleIO": {
      "$ref": "p3kfzGQWHqXUqRf3MrQeIK0WccM8HyA8lb8tzqvgsLo"
    },
    "secret": {
      "$ref": "7hoi1hZ13HUjcnY6nweLgqKxHiHpOSs0cLYzJyXZdI"
    },
    "storageos": {
      "$ref": "WUKw4y9z6XPmOPKp3Gu6bjss6o344upeD3tzEF06hA"
    },
    "vsphereVolume": {
      "$ref": "EhgFSGj2dHoIO7ucsQk2Dn5PpCIdUW0wfSO8b6GRc"
    }
  },
  "required": ["name"],
  "type": "object"
};
const schema119 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "partition": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "volumeID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["volumeID"],
  "type": "object",
  "nullable": true
};
function validate439(data, {
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
    if (data.volumeID === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "volumeID"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.partition !== undefined) {
      if (!validate87(data.partition, {
        instancePath: instancePath + "/partition",
        parentData: data,
        parentDataProperty: "partition",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeID !== undefined) {
      if (!validate21(data.volumeID, {
        instancePath: instancePath + "/volumeID",
        parentData: data,
        parentDataProperty: "volumeID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate439.errors = vErrors;
  return errors === 0;
}
const schema120 = {
  "properties": {
    "cachingMode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "diskName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "diskURI": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["diskName", "diskURI"],
  "type": "object",
  "nullable": true
};
function validate445(data, {
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
    if (data.diskName === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "diskName"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.diskURI === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "diskURI"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.cachingMode !== undefined) {
      if (!validate54(data.cachingMode, {
        instancePath: instancePath + "/cachingMode",
        parentData: data,
        parentDataProperty: "cachingMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.diskName !== undefined) {
      if (!validate21(data.diskName, {
        instancePath: instancePath + "/diskName",
        parentData: data,
        parentDataProperty: "diskName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.diskURI !== undefined) {
      if (!validate21(data.diskURI, {
        instancePath: instancePath + "/diskURI",
        parentData: data,
        parentDataProperty: "diskURI",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate54(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
  }
  validate445.errors = vErrors;
  return errors === 0;
}
const schema121 = {
  "properties": {
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "shareName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["secretName", "shareName"],
  "type": "object",
  "nullable": true
};
function validate453(data, {
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
    if (data.secretName === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretName"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.shareName === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "shareName"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretName !== undefined) {
      if (!validate21(data.secretName, {
        instancePath: instancePath + "/secretName",
        parentData: data,
        parentDataProperty: "secretName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.shareName !== undefined) {
      if (!validate21(data.shareName, {
        instancePath: instancePath + "/shareName",
        parentData: data,
        parentDataProperty: "shareName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate453.errors = vErrors;
  return errors === 0;
}
const schema122 = {
  "properties": {
    "monitors": {
      "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
    },
    "path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "user": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["monitors"],
  "type": "object",
  "nullable": true
};
const schema65 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate228(data, {
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
    if (data.name !== undefined) {
      if (!validate54(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate228.errors = vErrors;
  return errors === 0;
}
function validate458(data, {
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
    if (data.monitors === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "monitors"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.monitors !== undefined) {
      if (!validate226(data.monitors, {
        instancePath: instancePath + "/monitors",
        parentData: data,
        parentDataProperty: "monitors",
        rootData
      })) {
        vErrors = vErrors === null ? validate226.errors : vErrors.concat(validate226.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate54(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretFile !== undefined) {
      if (!validate54(data.secretFile, {
        instancePath: instancePath + "/secretFile",
        parentData: data,
        parentDataProperty: "secretFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate228(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate228.errors : vErrors.concat(validate228.errors);
        errors = vErrors.length;
      }
    }
    if (data.user !== undefined) {
      if (!validate54(data.user, {
        instancePath: instancePath + "/user",
        parentData: data,
        parentDataProperty: "user",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate458.errors = vErrors;
  return errors === 0;
}
const schema123 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "volumeID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["volumeID"],
  "type": "object",
  "nullable": true
};
function validate466(data, {
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
    if (data.volumeID === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "volumeID"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate228(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate228.errors : vErrors.concat(validate228.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeID !== undefined) {
      if (!validate21(data.volumeID, {
        instancePath: instancePath + "/volumeID",
        parentData: data,
        parentDataProperty: "volumeID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate466.errors = vErrors;
  return errors === 0;
}
const schema124 = {
  "properties": {
    "defaultMode": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "items": {
      "$ref": "bOfN3l1QF0mww6to6sM7AuvRsOk8kXQng6eAelVIQlw"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
const schema71 = {
  "items": {
    "$ref": "KZm4JRWtb68G65niEVa35cCfAyEYRWGkoaumd8EY"
  },
  "type": "array",
  "nullable": true
};
const schema72 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "mode": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["key", "path"],
  "type": "object"
};
function validate249(data, {
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
    if (data.mode !== undefined) {
      if (!validate87(data.mode, {
        instancePath: instancePath + "/mode",
        parentData: data,
        parentDataProperty: "mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate21(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
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
  validate249.errors = vErrors;
  return errors === 0;
}
function validate248(data, {
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
      if (!validate249(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate249.errors : vErrors.concat(validate249.errors);
        errors = vErrors.length;
      }
    }
  }
  validate248.errors = vErrors;
  return errors === 0;
}
function validate472(data, {
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
    if (data.defaultMode !== undefined) {
      if (!validate87(data.defaultMode, {
        instancePath: instancePath + "/defaultMode",
        parentData: data,
        parentDataProperty: "defaultMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.items !== undefined) {
      if (!validate248(data.items, {
        instancePath: instancePath + "/items",
        parentData: data,
        parentDataProperty: "items",
        rootData
      })) {
        vErrors = vErrors === null ? validate248.errors : vErrors.concat(validate248.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate54(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.optional !== undefined) {
      if (!validate58(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
  }
  validate472.errors = vErrors;
  return errors === 0;
}
const schema125 = {
  "properties": {
    "driver": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "nodePublishSecretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "volumeAttributes": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    }
  },
  "required": ["driver"],
  "type": "object",
  "nullable": true
};
function validate478(data, {
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
    if (data.driver === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "driver"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.driver !== undefined) {
      if (!validate21(data.driver, {
        instancePath: instancePath + "/driver",
        parentData: data,
        parentDataProperty: "driver",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodePublishSecretRef !== undefined) {
      if (!validate228(data.nodePublishSecretRef, {
        instancePath: instancePath + "/nodePublishSecretRef",
        parentData: data,
        parentDataProperty: "nodePublishSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate228.errors : vErrors.concat(validate228.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeAttributes !== undefined) {
      if (!validate35(data.volumeAttributes, {
        instancePath: instancePath + "/volumeAttributes",
        parentData: data,
        parentDataProperty: "volumeAttributes",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  }
  validate478.errors = vErrors;
  return errors === 0;
}
const schema126 = {
  "properties": {
    "defaultMode": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "items": {
      "$ref": "TQHsoKhmMfGdgQZTETcM93nSDALohOZ36ZiSXicyxhU"
    }
  },
  "type": "object",
  "nullable": true
};
const schema73 = {
  "items": {
    "$ref": "83t6EKcTjvzxVMR8ob3sMZu0lIqxm1azYctskfY5Ks4"
  },
  "type": "array",
  "nullable": true
};
const schema74 = {
  "properties": {
    "fieldRef": {
      "$ref": "B5jNtau7CpFJjYJrsYhyzxmI9XsIag7F9u7xksrgmQk"
    },
    "mode": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "resourceFieldRef": {
      "$ref": "D7PNj4ec9vScD68sAz7HLGzoBiyO7djP09KZXUzl2Y4"
    }
  },
  "required": ["path"],
  "type": "object"
};
function validate255(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.path === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "path"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.fieldRef !== undefined) {
      if (!validate121(data.fieldRef, {
        instancePath: instancePath + "/fieldRef",
        parentData: data,
        parentDataProperty: "fieldRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate121.errors : vErrors.concat(validate121.errors);
        errors = vErrors.length;
      }
    }
    if (data.mode !== undefined) {
      if (!validate87(data.mode, {
        instancePath: instancePath + "/mode",
        parentData: data,
        parentDataProperty: "mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate21(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceFieldRef !== undefined) {
      if (!validate125(data.resourceFieldRef, {
        instancePath: instancePath + "/resourceFieldRef",
        parentData: data,
        parentDataProperty: "resourceFieldRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate125.errors : vErrors.concat(validate125.errors);
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
  validate255.errors = vErrors;
  return errors === 0;
}
function validate254(data, {
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
      if (!validate255(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate255.errors : vErrors.concat(validate255.errors);
        errors = vErrors.length;
      }
    }
  }
  validate254.errors = vErrors;
  return errors === 0;
}
function validate485(data, {
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
    if (data.defaultMode !== undefined) {
      if (!validate87(data.defaultMode, {
        instancePath: instancePath + "/defaultMode",
        parentData: data,
        parentDataProperty: "defaultMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.items !== undefined) {
      if (!validate254(data.items, {
        instancePath: instancePath + "/items",
        parentData: data,
        parentDataProperty: "items",
        rootData
      })) {
        vErrors = vErrors === null ? validate254.errors : vErrors.concat(validate254.errors);
        errors = vErrors.length;
      }
    }
  }
  validate485.errors = vErrors;
  return errors === 0;
}
const schema127 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lun": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "targetWWNs": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "wwids": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.lun !== undefined) {
      if (!validate87(data.lun, {
        instancePath: instancePath + "/lun",
        parentData: data,
        parentDataProperty: "lun",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetWWNs !== undefined) {
      if (!validate26(data.targetWWNs, {
        instancePath: instancePath + "/targetWWNs",
        parentData: data,
        parentDataProperty: "targetWWNs",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.wwids !== undefined) {
      if (!validate26(data.wwids, {
        instancePath: instancePath + "/wwids",
        parentData: data,
        parentDataProperty: "wwids",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate491.errors = vErrors;
  return errors === 0;
}
const schema128 = {
  "properties": {
    "driver": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "options": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    }
  },
  "required": ["driver"],
  "type": "object",
  "nullable": true
};
function validate498(data, {
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
    if (data.driver === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "driver"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.driver !== undefined) {
      if (!validate21(data.driver, {
        instancePath: instancePath + "/driver",
        parentData: data,
        parentDataProperty: "driver",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.options !== undefined) {
      if (!validate35(data.options, {
        instancePath: instancePath + "/options",
        parentData: data,
        parentDataProperty: "options",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate228(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate228.errors : vErrors.concat(validate228.errors);
        errors = vErrors.length;
      }
    }
  }
  validate498.errors = vErrors;
  return errors === 0;
}
const schema129 = {
  "properties": {
    "datasetName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "datasetUUID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate505(data, {
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
    if (data.datasetName !== undefined) {
      if (!validate54(data.datasetName, {
        instancePath: instancePath + "/datasetName",
        parentData: data,
        parentDataProperty: "datasetName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.datasetUUID !== undefined) {
      if (!validate54(data.datasetUUID, {
        instancePath: instancePath + "/datasetUUID",
        parentData: data,
        parentDataProperty: "datasetUUID",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate505.errors = vErrors;
  return errors === 0;
}
const schema130 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "partition": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "pdName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["pdName"],
  "type": "object",
  "nullable": true
};
function validate509(data, {
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
    if (data.pdName === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "pdName"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.partition !== undefined) {
      if (!validate87(data.partition, {
        instancePath: instancePath + "/partition",
        parentData: data,
        parentDataProperty: "partition",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.pdName !== undefined) {
      if (!validate21(data.pdName, {
        instancePath: instancePath + "/pdName",
        parentData: data,
        parentDataProperty: "pdName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
  }
  validate509.errors = vErrors;
  return errors === 0;
}
const schema131 = {
  "properties": {
    "directory": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "repository": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "revision": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["repository"],
  "type": "object",
  "nullable": true
};
function validate515(data, {
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
    if (data.repository === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "repository"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.directory !== undefined) {
      if (!validate54(data.directory, {
        instancePath: instancePath + "/directory",
        parentData: data,
        parentDataProperty: "directory",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.repository !== undefined) {
      if (!validate21(data.repository, {
        instancePath: instancePath + "/repository",
        parentData: data,
        parentDataProperty: "repository",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.revision !== undefined) {
      if (!validate54(data.revision, {
        instancePath: instancePath + "/revision",
        parentData: data,
        parentDataProperty: "revision",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate515.errors = vErrors;
  return errors === 0;
}
const schema132 = {
  "properties": {
    "endpoints": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["endpoints", "path"],
  "type": "object",
  "nullable": true
};
function validate520(data, {
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
    if (data.endpoints === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "endpoints"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.path === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "path"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.endpoints !== undefined) {
      if (!validate21(data.endpoints, {
        instancePath: instancePath + "/endpoints",
        parentData: data,
        parentDataProperty: "endpoints",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate21(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
  }
  validate520.errors = vErrors;
  return errors === 0;
}
const schema133 = {
  "properties": {
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["path"],
  "type": "object",
  "nullable": true
};
function validate525(data, {
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
    if (data.path !== undefined) {
      if (!validate21(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate54(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate525.errors = vErrors;
  return errors === 0;
}
const schema134 = {
  "properties": {
    "chapAuthDiscovery": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "chapAuthSession": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "initiatorName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "iqn": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "iscsiInterface": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lun": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "portals": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "targetPortal": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["iqn", "lun", "targetPortal"],
  "type": "object",
  "nullable": true
};
function validate529(data, {
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
    if (data.iqn === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "iqn"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.lun === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "lun"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.targetPortal === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "targetPortal"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.chapAuthDiscovery !== undefined) {
      if (!validate58(data.chapAuthDiscovery, {
        instancePath: instancePath + "/chapAuthDiscovery",
        parentData: data,
        parentDataProperty: "chapAuthDiscovery",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.chapAuthSession !== undefined) {
      if (!validate58(data.chapAuthSession, {
        instancePath: instancePath + "/chapAuthSession",
        parentData: data,
        parentDataProperty: "chapAuthSession",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.initiatorName !== undefined) {
      if (!validate54(data.initiatorName, {
        instancePath: instancePath + "/initiatorName",
        parentData: data,
        parentDataProperty: "initiatorName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.iqn !== undefined) {
      if (!validate21(data.iqn, {
        instancePath: instancePath + "/iqn",
        parentData: data,
        parentDataProperty: "iqn",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.iscsiInterface !== undefined) {
      if (!validate54(data.iscsiInterface, {
        instancePath: instancePath + "/iscsiInterface",
        parentData: data,
        parentDataProperty: "iscsiInterface",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.lun !== undefined) {
      if (!validate38(data.lun, {
        instancePath: instancePath + "/lun",
        parentData: data,
        parentDataProperty: "lun",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.portals !== undefined) {
      if (!validate26(data.portals, {
        instancePath: instancePath + "/portals",
        parentData: data,
        parentDataProperty: "portals",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate228(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate228.errors : vErrors.concat(validate228.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetPortal !== undefined) {
      if (!validate21(data.targetPortal, {
        instancePath: instancePath + "/targetPortal",
        parentData: data,
        parentDataProperty: "targetPortal",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate529.errors = vErrors;
  return errors === 0;
}
const schema135 = {
  "properties": {
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "server": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["path", "server"],
  "type": "object",
  "nullable": true
};
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
    if (data.path !== undefined) {
      if (!validate21(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
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
  }
  validate543.errors = vErrors;
  return errors === 0;
}
const schema136 = {
  "properties": {
    "claimName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["claimName"],
  "type": "object",
  "nullable": true
};
function validate548(data, {
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
    if (data.claimName === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "claimName"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.claimName !== undefined) {
      if (!validate21(data.claimName, {
        instancePath: instancePath + "/claimName",
        parentData: data,
        parentDataProperty: "claimName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
  }
  validate548.errors = vErrors;
  return errors === 0;
}
const schema137 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "pdID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["pdID"],
  "type": "object",
  "nullable": true
};
function validate552(data, {
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
    if (data.pdID === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "pdID"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.pdID !== undefined) {
      if (!validate21(data.pdID, {
        instancePath: instancePath + "/pdID",
        parentData: data,
        parentDataProperty: "pdID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate552.errors = vErrors;
  return errors === 0;
}
const schema138 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "volumeID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["volumeID"],
  "type": "object",
  "nullable": true
};
function validate556(data, {
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
    if (data.volumeID === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "volumeID"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeID !== undefined) {
      if (!validate21(data.volumeID, {
        instancePath: instancePath + "/volumeID",
        parentData: data,
        parentDataProperty: "volumeID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate556.errors = vErrors;
  return errors === 0;
}
const schema139 = {
  "properties": {
    "defaultMode": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "sources": {
      "$ref": "NRcu48uTBTnExV8Iol35FmiFvOrAfmUCoq19YAg"
    }
  },
  "type": "object",
  "nullable": true
};
const schema140 = {
  "items": {
    "$ref": "0yc0nGf36IpyG3tPvmd4I4zExUYDkuNxMesbklF8"
  },
  "type": "array",
  "nullable": true
};
const schema141 = {
  "properties": {
    "configMap": {
      "$ref": "EteiDSJOuKMG18J9HxNrDRvj8atSKjCtJCRkmm8S5Q"
    },
    "downwardAPI": {
      "$ref": "jT5EAzotOiaS75BFqVTEtfS83Rl5cvFYVcMxbvOETU"
    },
    "secret": {
      "$ref": "EteiDSJOuKMG18J9HxNrDRvj8atSKjCtJCRkmm8S5Q"
    },
    "serviceAccountToken": {
      "$ref": "0BsTGqumYwSj0foZkstB2wsVBt1d0Yb7yN2zIsVfc"
    }
  },
  "type": "object"
};
const schema75 = {
  "properties": {
    "items": {
      "$ref": "bOfN3l1QF0mww6to6sM7AuvRsOk8kXQng6eAelVIQlw"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
function validate261(data, {
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
    if (data.items !== undefined) {
      if (!validate248(data.items, {
        instancePath: instancePath + "/items",
        parentData: data,
        parentDataProperty: "items",
        rootData
      })) {
        vErrors = vErrors === null ? validate248.errors : vErrors.concat(validate248.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate54(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.optional !== undefined) {
      if (!validate58(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
  }
  validate261.errors = vErrors;
  return errors === 0;
}
const schema142 = {
  "properties": {
    "items": {
      "$ref": "TQHsoKhmMfGdgQZTETcM93nSDALohOZ36ZiSXicyxhU"
    }
  },
  "type": "object",
  "nullable": true
};
function validate566(data, {
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
    if (data.items !== undefined) {
      if (!validate254(data.items, {
        instancePath: instancePath + "/items",
        parentData: data,
        parentDataProperty: "items",
        rootData
      })) {
        vErrors = vErrors === null ? validate254.errors : vErrors.concat(validate254.errors);
        errors = vErrors.length;
      }
    }
  }
  validate566.errors = vErrors;
  return errors === 0;
}
const schema143 = {
  "properties": {
    "audience": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "expirationSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["path"],
  "type": "object",
  "nullable": true
};
function validate570(data, {
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
    if (data.audience !== undefined) {
      if (!validate54(data.audience, {
        instancePath: instancePath + "/audience",
        parentData: data,
        parentDataProperty: "audience",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.expirationSeconds !== undefined) {
      if (!validate100(data.expirationSeconds, {
        instancePath: instancePath + "/expirationSeconds",
        parentData: data,
        parentDataProperty: "expirationSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate21(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate570.errors = vErrors;
  return errors === 0;
}
function validate564(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.configMap !== undefined) {
      if (!validate261(data.configMap, {
        instancePath: instancePath + "/configMap",
        parentData: data,
        parentDataProperty: "configMap",
        rootData
      })) {
        vErrors = vErrors === null ? validate261.errors : vErrors.concat(validate261.errors);
        errors = vErrors.length;
      }
    }
    if (data.downwardAPI !== undefined) {
      if (!validate566(data.downwardAPI, {
        instancePath: instancePath + "/downwardAPI",
        parentData: data,
        parentDataProperty: "downwardAPI",
        rootData
      })) {
        vErrors = vErrors === null ? validate566.errors : vErrors.concat(validate566.errors);
        errors = vErrors.length;
      }
    }
    if (data.secret !== undefined) {
      if (!validate261(data.secret, {
        instancePath: instancePath + "/secret",
        parentData: data,
        parentDataProperty: "secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate261.errors : vErrors.concat(validate261.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountToken !== undefined) {
      if (!validate570(data.serviceAccountToken, {
        instancePath: instancePath + "/serviceAccountToken",
        parentData: data,
        parentDataProperty: "serviceAccountToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate570.errors : vErrors.concat(validate570.errors);
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
  validate564.errors = vErrors;
  return errors === 0;
}
function validate563(data, {
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
      if (!validate564(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate564.errors : vErrors.concat(validate564.errors);
        errors = vErrors.length;
      }
    }
  }
  validate563.errors = vErrors;
  return errors === 0;
}
function validate561(data, {
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
    if (data.defaultMode !== undefined) {
      if (!validate87(data.defaultMode, {
        instancePath: instancePath + "/defaultMode",
        parentData: data,
        parentDataProperty: "defaultMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.sources !== undefined) {
      if (!validate563(data.sources, {
        instancePath: instancePath + "/sources",
        parentData: data,
        parentDataProperty: "sources",
        rootData
      })) {
        vErrors = vErrors === null ? validate563.errors : vErrors.concat(validate563.errors);
        errors = vErrors.length;
      }
    }
  }
  validate561.errors = vErrors;
  return errors === 0;
}
const schema144 = {
  "properties": {
    "group": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "registry": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "tenant": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "user": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "volume": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["registry", "volume"],
  "type": "object",
  "nullable": true
};
function validate578(data, {
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
    if (data.registry === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "registry"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.volume === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "volume"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.group !== undefined) {
      if (!validate54(data.group, {
        instancePath: instancePath + "/group",
        parentData: data,
        parentDataProperty: "group",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.registry !== undefined) {
      if (!validate21(data.registry, {
        instancePath: instancePath + "/registry",
        parentData: data,
        parentDataProperty: "registry",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.tenant !== undefined) {
      if (!validate54(data.tenant, {
        instancePath: instancePath + "/tenant",
        parentData: data,
        parentDataProperty: "tenant",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.user !== undefined) {
      if (!validate54(data.user, {
        instancePath: instancePath + "/user",
        parentData: data,
        parentDataProperty: "user",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.volume !== undefined) {
      if (!validate21(data.volume, {
        instancePath: instancePath + "/volume",
        parentData: data,
        parentDataProperty: "volume",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate578.errors = vErrors;
  return errors === 0;
}
const schema145 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "image": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "keyring": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "monitors": {
      "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
    },
    "pool": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "user": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["image", "monitors"],
  "type": "object",
  "nullable": true
};
function validate586(data, {
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
    if (data.image === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "image"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.monitors === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "monitors"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.image !== undefined) {
      if (!validate21(data.image, {
        instancePath: instancePath + "/image",
        parentData: data,
        parentDataProperty: "image",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.keyring !== undefined) {
      if (!validate54(data.keyring, {
        instancePath: instancePath + "/keyring",
        parentData: data,
        parentDataProperty: "keyring",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.monitors !== undefined) {
      if (!validate226(data.monitors, {
        instancePath: instancePath + "/monitors",
        parentData: data,
        parentDataProperty: "monitors",
        rootData
      })) {
        vErrors = vErrors === null ? validate226.errors : vErrors.concat(validate226.errors);
        errors = vErrors.length;
      }
    }
    if (data.pool !== undefined) {
      if (!validate54(data.pool, {
        instancePath: instancePath + "/pool",
        parentData: data,
        parentDataProperty: "pool",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate228(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate228.errors : vErrors.concat(validate228.errors);
        errors = vErrors.length;
      }
    }
    if (data.user !== undefined) {
      if (!validate54(data.user, {
        instancePath: instancePath + "/user",
        parentData: data,
        parentDataProperty: "user",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate586.errors = vErrors;
  return errors === 0;
}
const schema146 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "gateway": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "protectionDomain": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretRef": {
      "$ref": "qgtTuDaNsImr24YNCUVN3pDpwYXcxIDVFjAvxPkh8"
    },
    "sslEnabled": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "storageMode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "storagePool": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "system": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "volumeName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["gateway", "secretRef", "system"],
  "type": "object",
  "nullable": true
};
function validate596(data, {
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
    if (data.gateway === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "gateway"
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
    if (data.system === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "system"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.gateway !== undefined) {
      if (!validate21(data.gateway, {
        instancePath: instancePath + "/gateway",
        parentData: data,
        parentDataProperty: "gateway",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.protectionDomain !== undefined) {
      if (!validate54(data.protectionDomain, {
        instancePath: instancePath + "/protectionDomain",
        parentData: data,
        parentDataProperty: "protectionDomain",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate265(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate265.errors : vErrors.concat(validate265.errors);
        errors = vErrors.length;
      }
    }
    if (data.sslEnabled !== undefined) {
      if (!validate58(data.sslEnabled, {
        instancePath: instancePath + "/sslEnabled",
        parentData: data,
        parentDataProperty: "sslEnabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageMode !== undefined) {
      if (!validate54(data.storageMode, {
        instancePath: instancePath + "/storageMode",
        parentData: data,
        parentDataProperty: "storageMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.storagePool !== undefined) {
      if (!validate54(data.storagePool, {
        instancePath: instancePath + "/storagePool",
        parentData: data,
        parentDataProperty: "storagePool",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.system !== undefined) {
      if (!validate21(data.system, {
        instancePath: instancePath + "/system",
        parentData: data,
        parentDataProperty: "system",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeName !== undefined) {
      if (!validate54(data.volumeName, {
        instancePath: instancePath + "/volumeName",
        parentData: data,
        parentDataProperty: "volumeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate596.errors = vErrors;
  return errors === 0;
}
const schema147 = {
  "properties": {
    "defaultMode": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "items": {
      "$ref": "bOfN3l1QF0mww6to6sM7AuvRsOk8kXQng6eAelVIQlw"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate608(data, {
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
    if (data.defaultMode !== undefined) {
      if (!validate87(data.defaultMode, {
        instancePath: instancePath + "/defaultMode",
        parentData: data,
        parentDataProperty: "defaultMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.items !== undefined) {
      if (!validate248(data.items, {
        instancePath: instancePath + "/items",
        parentData: data,
        parentDataProperty: "items",
        rootData
      })) {
        vErrors = vErrors === null ? validate248.errors : vErrors.concat(validate248.errors);
        errors = vErrors.length;
      }
    }
    if (data.optional !== undefined) {
      if (!validate58(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretName !== undefined) {
      if (!validate54(data.secretName, {
        instancePath: instancePath + "/secretName",
        parentData: data,
        parentDataProperty: "secretName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate608.errors = vErrors;
  return errors === 0;
}
const schema148 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "volumeName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "volumeNamespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate614(data, {
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
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate58(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate228(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate228.errors : vErrors.concat(validate228.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeName !== undefined) {
      if (!validate54(data.volumeName, {
        instancePath: instancePath + "/volumeName",
        parentData: data,
        parentDataProperty: "volumeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeNamespace !== undefined) {
      if (!validate54(data.volumeNamespace, {
        instancePath: instancePath + "/volumeNamespace",
        parentData: data,
        parentDataProperty: "volumeNamespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate614.errors = vErrors;
  return errors === 0;
}
const schema149 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "storagePolicyID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "storagePolicyName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "volumePath": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["volumePath"],
  "type": "object",
  "nullable": true
};
function validate621(data, {
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
    if (data.volumePath === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "volumePath"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate54(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.storagePolicyID !== undefined) {
      if (!validate54(data.storagePolicyID, {
        instancePath: instancePath + "/storagePolicyID",
        parentData: data,
        parentDataProperty: "storagePolicyID",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.storagePolicyName !== undefined) {
      if (!validate54(data.storagePolicyName, {
        instancePath: instancePath + "/storagePolicyName",
        parentData: data,
        parentDataProperty: "storagePolicyName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumePath !== undefined) {
      if (!validate21(data.volumePath, {
        instancePath: instancePath + "/volumePath",
        parentData: data,
        parentDataProperty: "volumePath",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate621.errors = vErrors;
  return errors === 0;
}
function validate438(data, {
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
    if (data.awsElasticBlockStore !== undefined) {
      if (!validate439(data.awsElasticBlockStore, {
        instancePath: instancePath + "/awsElasticBlockStore",
        parentData: data,
        parentDataProperty: "awsElasticBlockStore",
        rootData
      })) {
        vErrors = vErrors === null ? validate439.errors : vErrors.concat(validate439.errors);
        errors = vErrors.length;
      }
    }
    if (data.azureDisk !== undefined) {
      if (!validate445(data.azureDisk, {
        instancePath: instancePath + "/azureDisk",
        parentData: data,
        parentDataProperty: "azureDisk",
        rootData
      })) {
        vErrors = vErrors === null ? validate445.errors : vErrors.concat(validate445.errors);
        errors = vErrors.length;
      }
    }
    if (data.azureFile !== undefined) {
      if (!validate453(data.azureFile, {
        instancePath: instancePath + "/azureFile",
        parentData: data,
        parentDataProperty: "azureFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate453.errors : vErrors.concat(validate453.errors);
        errors = vErrors.length;
      }
    }
    if (data.cephfs !== undefined) {
      if (!validate458(data.cephfs, {
        instancePath: instancePath + "/cephfs",
        parentData: data,
        parentDataProperty: "cephfs",
        rootData
      })) {
        vErrors = vErrors === null ? validate458.errors : vErrors.concat(validate458.errors);
        errors = vErrors.length;
      }
    }
    if (data.cinder !== undefined) {
      if (!validate466(data.cinder, {
        instancePath: instancePath + "/cinder",
        parentData: data,
        parentDataProperty: "cinder",
        rootData
      })) {
        vErrors = vErrors === null ? validate466.errors : vErrors.concat(validate466.errors);
        errors = vErrors.length;
      }
    }
    if (data.configMap !== undefined) {
      if (!validate472(data.configMap, {
        instancePath: instancePath + "/configMap",
        parentData: data,
        parentDataProperty: "configMap",
        rootData
      })) {
        vErrors = vErrors === null ? validate472.errors : vErrors.concat(validate472.errors);
        errors = vErrors.length;
      }
    }
    if (data.csi !== undefined) {
      if (!validate478(data.csi, {
        instancePath: instancePath + "/csi",
        parentData: data,
        parentDataProperty: "csi",
        rootData
      })) {
        vErrors = vErrors === null ? validate478.errors : vErrors.concat(validate478.errors);
        errors = vErrors.length;
      }
    }
    if (data.downwardAPI !== undefined) {
      if (!validate485(data.downwardAPI, {
        instancePath: instancePath + "/downwardAPI",
        parentData: data,
        parentDataProperty: "downwardAPI",
        rootData
      })) {
        vErrors = vErrors === null ? validate485.errors : vErrors.concat(validate485.errors);
        errors = vErrors.length;
      }
    }
    if (data.emptyDir !== undefined) {
      if (!validate230(data.emptyDir, {
        instancePath: instancePath + "/emptyDir",
        parentData: data,
        parentDataProperty: "emptyDir",
        rootData
      })) {
        vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
        errors = vErrors.length;
      }
    }
    if (data.ephemeral !== undefined) {
      if (!validate233(data.ephemeral, {
        instancePath: instancePath + "/ephemeral",
        parentData: data,
        parentDataProperty: "ephemeral",
        rootData
      })) {
        vErrors = vErrors === null ? validate233.errors : vErrors.concat(validate233.errors);
        errors = vErrors.length;
      }
    }
    if (data.fc !== undefined) {
      if (!validate491(data.fc, {
        instancePath: instancePath + "/fc",
        parentData: data,
        parentDataProperty: "fc",
        rootData
      })) {
        vErrors = vErrors === null ? validate491.errors : vErrors.concat(validate491.errors);
        errors = vErrors.length;
      }
    }
    if (data.flexVolume !== undefined) {
      if (!validate498(data.flexVolume, {
        instancePath: instancePath + "/flexVolume",
        parentData: data,
        parentDataProperty: "flexVolume",
        rootData
      })) {
        vErrors = vErrors === null ? validate498.errors : vErrors.concat(validate498.errors);
        errors = vErrors.length;
      }
    }
    if (data.flocker !== undefined) {
      if (!validate505(data.flocker, {
        instancePath: instancePath + "/flocker",
        parentData: data,
        parentDataProperty: "flocker",
        rootData
      })) {
        vErrors = vErrors === null ? validate505.errors : vErrors.concat(validate505.errors);
        errors = vErrors.length;
      }
    }
    if (data.gcePersistentDisk !== undefined) {
      if (!validate509(data.gcePersistentDisk, {
        instancePath: instancePath + "/gcePersistentDisk",
        parentData: data,
        parentDataProperty: "gcePersistentDisk",
        rootData
      })) {
        vErrors = vErrors === null ? validate509.errors : vErrors.concat(validate509.errors);
        errors = vErrors.length;
      }
    }
    if (data.gitRepo !== undefined) {
      if (!validate515(data.gitRepo, {
        instancePath: instancePath + "/gitRepo",
        parentData: data,
        parentDataProperty: "gitRepo",
        rootData
      })) {
        vErrors = vErrors === null ? validate515.errors : vErrors.concat(validate515.errors);
        errors = vErrors.length;
      }
    }
    if (data.glusterfs !== undefined) {
      if (!validate520(data.glusterfs, {
        instancePath: instancePath + "/glusterfs",
        parentData: data,
        parentDataProperty: "glusterfs",
        rootData
      })) {
        vErrors = vErrors === null ? validate520.errors : vErrors.concat(validate520.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostPath !== undefined) {
      if (!validate525(data.hostPath, {
        instancePath: instancePath + "/hostPath",
        parentData: data,
        parentDataProperty: "hostPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate525.errors : vErrors.concat(validate525.errors);
        errors = vErrors.length;
      }
    }
    if (data.iscsi !== undefined) {
      if (!validate529(data.iscsi, {
        instancePath: instancePath + "/iscsi",
        parentData: data,
        parentDataProperty: "iscsi",
        rootData
      })) {
        vErrors = vErrors === null ? validate529.errors : vErrors.concat(validate529.errors);
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
    if (data.nfs !== undefined) {
      if (!validate543(data.nfs, {
        instancePath: instancePath + "/nfs",
        parentData: data,
        parentDataProperty: "nfs",
        rootData
      })) {
        vErrors = vErrors === null ? validate543.errors : vErrors.concat(validate543.errors);
        errors = vErrors.length;
      }
    }
    if (data.persistentVolumeClaim !== undefined) {
      if (!validate548(data.persistentVolumeClaim, {
        instancePath: instancePath + "/persistentVolumeClaim",
        parentData: data,
        parentDataProperty: "persistentVolumeClaim",
        rootData
      })) {
        vErrors = vErrors === null ? validate548.errors : vErrors.concat(validate548.errors);
        errors = vErrors.length;
      }
    }
    if (data.photonPersistentDisk !== undefined) {
      if (!validate552(data.photonPersistentDisk, {
        instancePath: instancePath + "/photonPersistentDisk",
        parentData: data,
        parentDataProperty: "photonPersistentDisk",
        rootData
      })) {
        vErrors = vErrors === null ? validate552.errors : vErrors.concat(validate552.errors);
        errors = vErrors.length;
      }
    }
    if (data.portworxVolume !== undefined) {
      if (!validate556(data.portworxVolume, {
        instancePath: instancePath + "/portworxVolume",
        parentData: data,
        parentDataProperty: "portworxVolume",
        rootData
      })) {
        vErrors = vErrors === null ? validate556.errors : vErrors.concat(validate556.errors);
        errors = vErrors.length;
      }
    }
    if (data.projected !== undefined) {
      if (!validate561(data.projected, {
        instancePath: instancePath + "/projected",
        parentData: data,
        parentDataProperty: "projected",
        rootData
      })) {
        vErrors = vErrors === null ? validate561.errors : vErrors.concat(validate561.errors);
        errors = vErrors.length;
      }
    }
    if (data.quobyte !== undefined) {
      if (!validate578(data.quobyte, {
        instancePath: instancePath + "/quobyte",
        parentData: data,
        parentDataProperty: "quobyte",
        rootData
      })) {
        vErrors = vErrors === null ? validate578.errors : vErrors.concat(validate578.errors);
        errors = vErrors.length;
      }
    }
    if (data.rbd !== undefined) {
      if (!validate586(data.rbd, {
        instancePath: instancePath + "/rbd",
        parentData: data,
        parentDataProperty: "rbd",
        rootData
      })) {
        vErrors = vErrors === null ? validate586.errors : vErrors.concat(validate586.errors);
        errors = vErrors.length;
      }
    }
    if (data.scaleIO !== undefined) {
      if (!validate596(data.scaleIO, {
        instancePath: instancePath + "/scaleIO",
        parentData: data,
        parentDataProperty: "scaleIO",
        rootData
      })) {
        vErrors = vErrors === null ? validate596.errors : vErrors.concat(validate596.errors);
        errors = vErrors.length;
      }
    }
    if (data.secret !== undefined) {
      if (!validate608(data.secret, {
        instancePath: instancePath + "/secret",
        parentData: data,
        parentDataProperty: "secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate608.errors : vErrors.concat(validate608.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageos !== undefined) {
      if (!validate614(data.storageos, {
        instancePath: instancePath + "/storageos",
        parentData: data,
        parentDataProperty: "storageos",
        rootData
      })) {
        vErrors = vErrors === null ? validate614.errors : vErrors.concat(validate614.errors);
        errors = vErrors.length;
      }
    }
    if (data.vsphereVolume !== undefined) {
      if (!validate621(data.vsphereVolume, {
        instancePath: instancePath + "/vsphereVolume",
        parentData: data,
        parentDataProperty: "vsphereVolume",
        rootData
      })) {
        vErrors = vErrors === null ? validate621.errors : vErrors.concat(validate621.errors);
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
  validate438.errors = vErrors;
  return errors === 0;
}
function validate437(data, {
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
      if (!validate438(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate438.errors : vErrors.concat(validate438.errors);
        errors = vErrors.length;
      }
    }
  }
  validate437.errors = vErrors;
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
    if (data.affinity !== undefined) {
      if (!validate277(data.affinity, {
        instancePath: instancePath + "/affinity",
        parentData: data,
        parentDataProperty: "affinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate277.errors : vErrors.concat(validate277.errors);
        errors = vErrors.length;
      }
    }
    if (data.alertDropLabels !== undefined) {
      if (!validate26(data.alertDropLabels, {
        instancePath: instancePath + "/alertDropLabels",
        parentData: data,
        parentDataProperty: "alertDropLabels",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.alertQueryUrl !== undefined) {
      if (!validate54(data.alertQueryUrl, {
        instancePath: instancePath + "/alertQueryUrl",
        parentData: data,
        parentDataProperty: "alertQueryUrl",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.alertRelabelConfigFile !== undefined) {
      if (!validate54(data.alertRelabelConfigFile, {
        instancePath: instancePath + "/alertRelabelConfigFile",
        parentData: data,
        parentDataProperty: "alertRelabelConfigFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.alertRelabelConfigs !== undefined) {
      if (!validate55(data.alertRelabelConfigs, {
        instancePath: instancePath + "/alertRelabelConfigs",
        parentData: data,
        parentDataProperty: "alertRelabelConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.alertmanagersConfig !== undefined) {
      if (!validate55(data.alertmanagersConfig, {
        instancePath: instancePath + "/alertmanagersConfig",
        parentData: data,
        parentDataProperty: "alertmanagersConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.alertmanagersUrl !== undefined) {
      if (!validate26(data.alertmanagersUrl, {
        instancePath: instancePath + "/alertmanagersUrl",
        parentData: data,
        parentDataProperty: "alertmanagersUrl",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.containers !== undefined) {
      if (!validate111(data.containers, {
        instancePath: instancePath + "/containers",
        parentData: data,
        parentDataProperty: "containers",
        rootData
      })) {
        vErrors = vErrors === null ? validate111.errors : vErrors.concat(validate111.errors);
        errors = vErrors.length;
      }
    }
    if (data.enforcedNamespaceLabel !== undefined) {
      if (!validate54(data.enforcedNamespaceLabel, {
        instancePath: instancePath + "/enforcedNamespaceLabel",
        parentData: data,
        parentDataProperty: "enforcedNamespaceLabel",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.evaluationInterval !== undefined) {
      if (!validate302(data.evaluationInterval, {
        instancePath: instancePath + "/evaluationInterval",
        parentData: data,
        parentDataProperty: "evaluationInterval",
        rootData
      })) {
        vErrors = vErrors === null ? validate302.errors : vErrors.concat(validate302.errors);
        errors = vErrors.length;
      }
    }
    if (data.excludedFromEnforcement !== undefined) {
      if (!validate304(data.excludedFromEnforcement, {
        instancePath: instancePath + "/excludedFromEnforcement",
        parentData: data,
        parentDataProperty: "excludedFromEnforcement",
        rootData
      })) {
        vErrors = vErrors === null ? validate304.errors : vErrors.concat(validate304.errors);
        errors = vErrors.length;
      }
    }
    if (data.externalPrefix !== undefined) {
      if (!validate54(data.externalPrefix, {
        instancePath: instancePath + "/externalPrefix",
        parentData: data,
        parentDataProperty: "externalPrefix",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.grpcServerTlsConfig !== undefined) {
      if (!validate316(data.grpcServerTlsConfig, {
        instancePath: instancePath + "/grpcServerTlsConfig",
        parentData: data,
        parentDataProperty: "grpcServerTlsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate316.errors : vErrors.concat(validate316.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostAliases !== undefined) {
      if (!validate326(data.hostAliases, {
        instancePath: instancePath + "/hostAliases",
        parentData: data,
        parentDataProperty: "hostAliases",
        rootData
      })) {
        vErrors = vErrors === null ? validate326.errors : vErrors.concat(validate326.errors);
        errors = vErrors.length;
      }
    }
    if (data.image !== undefined) {
      if (!validate54(data.image, {
        instancePath: instancePath + "/image",
        parentData: data,
        parentDataProperty: "image",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.imagePullSecrets !== undefined) {
      if (!validate333(data.imagePullSecrets, {
        instancePath: instancePath + "/imagePullSecrets",
        parentData: data,
        parentDataProperty: "imagePullSecrets",
        rootData
      })) {
        vErrors = vErrors === null ? validate333.errors : vErrors.concat(validate333.errors);
        errors = vErrors.length;
      }
    }
    if (data.initContainers !== undefined) {
      if (!validate111(data.initContainers, {
        instancePath: instancePath + "/initContainers",
        parentData: data,
        parentDataProperty: "initContainers",
        rootData
      })) {
        vErrors = vErrors === null ? validate111.errors : vErrors.concat(validate111.errors);
        errors = vErrors.length;
      }
    }
    if (data.labels !== undefined) {
      if (!validate35(data.labels, {
        instancePath: instancePath + "/labels",
        parentData: data,
        parentDataProperty: "labels",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.listenLocal !== undefined) {
      if (!validate58(data.listenLocal, {
        instancePath: instancePath + "/listenLocal",
        parentData: data,
        parentDataProperty: "listenLocal",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.logFormat !== undefined) {
      if (!validate339(data.logFormat, {
        instancePath: instancePath + "/logFormat",
        parentData: data,
        parentDataProperty: "logFormat",
        rootData
      })) {
        vErrors = vErrors === null ? validate339.errors : vErrors.concat(validate339.errors);
        errors = vErrors.length;
      }
    }
    if (data.logLevel !== undefined) {
      if (!validate341(data.logLevel, {
        instancePath: instancePath + "/logLevel",
        parentData: data,
        parentDataProperty: "logLevel",
        rootData
      })) {
        vErrors = vErrors === null ? validate341.errors : vErrors.concat(validate341.errors);
        errors = vErrors.length;
      }
    }
    if (data.minReadySeconds !== undefined) {
      if (!validate87(data.minReadySeconds, {
        instancePath: instancePath + "/minReadySeconds",
        parentData: data,
        parentDataProperty: "minReadySeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeSelector !== undefined) {
      if (!validate35(data.nodeSelector, {
        instancePath: instancePath + "/nodeSelector",
        parentData: data,
        parentDataProperty: "nodeSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.objectStorageConfig !== undefined) {
      if (!validate55(data.objectStorageConfig, {
        instancePath: instancePath + "/objectStorageConfig",
        parentData: data,
        parentDataProperty: "objectStorageConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.objectStorageConfigFile !== undefined) {
      if (!validate54(data.objectStorageConfigFile, {
        instancePath: instancePath + "/objectStorageConfigFile",
        parentData: data,
        parentDataProperty: "objectStorageConfigFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.paused !== undefined) {
      if (!validate58(data.paused, {
        instancePath: instancePath + "/paused",
        parentData: data,
        parentDataProperty: "paused",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.podMetadata !== undefined) {
      if (!validate221(data.podMetadata, {
        instancePath: instancePath + "/podMetadata",
        parentData: data,
        parentDataProperty: "podMetadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate221.errors : vErrors.concat(validate221.errors);
        errors = vErrors.length;
      }
    }
    if (data.portName !== undefined) {
      if (!validate54(data.portName, {
        instancePath: instancePath + "/portName",
        parentData: data,
        parentDataProperty: "portName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.priorityClassName !== undefined) {
      if (!validate54(data.priorityClassName, {
        instancePath: instancePath + "/priorityClassName",
        parentData: data,
        parentDataProperty: "priorityClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.prometheusRulesExcludedFromEnforce !== undefined) {
      if (!validate351(data.prometheusRulesExcludedFromEnforce, {
        instancePath: instancePath + "/prometheusRulesExcludedFromEnforce",
        parentData: data,
        parentDataProperty: "prometheusRulesExcludedFromEnforce",
        rootData
      })) {
        vErrors = vErrors === null ? validate351.errors : vErrors.concat(validate351.errors);
        errors = vErrors.length;
      }
    }
    if (data.queryConfig !== undefined) {
      if (!validate55(data.queryConfig, {
        instancePath: instancePath + "/queryConfig",
        parentData: data,
        parentDataProperty: "queryConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.queryEndpoints !== undefined) {
      if (!validate26(data.queryEndpoints, {
        instancePath: instancePath + "/queryEndpoints",
        parentData: data,
        parentDataProperty: "queryEndpoints",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.replicas !== undefined) {
      if (!validate87(data.replicas, {
        instancePath: instancePath + "/replicas",
        parentData: data,
        parentDataProperty: "replicas",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate160(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate160.errors : vErrors.concat(validate160.errors);
        errors = vErrors.length;
      }
    }
    if (data.retention !== undefined) {
      if (!validate361(data.retention, {
        instancePath: instancePath + "/retention",
        parentData: data,
        parentDataProperty: "retention",
        rootData
      })) {
        vErrors = vErrors === null ? validate361.errors : vErrors.concat(validate361.errors);
        errors = vErrors.length;
      }
    }
    if (data.routePrefix !== undefined) {
      if (!validate54(data.routePrefix, {
        instancePath: instancePath + "/routePrefix",
        parentData: data,
        parentDataProperty: "routePrefix",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.ruleNamespaceSelector !== undefined) {
      if (!validate33(data.ruleNamespaceSelector, {
        instancePath: instancePath + "/ruleNamespaceSelector",
        parentData: data,
        parentDataProperty: "ruleNamespaceSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.ruleSelector !== undefined) {
      if (!validate33(data.ruleSelector, {
        instancePath: instancePath + "/ruleSelector",
        parentData: data,
        parentDataProperty: "ruleSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.securityContext !== undefined) {
      if (!validate366(data.securityContext, {
        instancePath: instancePath + "/securityContext",
        parentData: data,
        parentDataProperty: "securityContext",
        rootData
      })) {
        vErrors = vErrors === null ? validate366.errors : vErrors.concat(validate366.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountName !== undefined) {
      if (!validate54(data.serviceAccountName, {
        instancePath: instancePath + "/serviceAccountName",
        parentData: data,
        parentDataProperty: "serviceAccountName",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.storage !== undefined) {
      if (!validate382(data.storage, {
        instancePath: instancePath + "/storage",
        parentData: data,
        parentDataProperty: "storage",
        rootData
      })) {
        vErrors = vErrors === null ? validate382.errors : vErrors.concat(validate382.errors);
        errors = vErrors.length;
      }
    }
    if (data.tolerations !== undefined) {
      if (!validate419(data.tolerations, {
        instancePath: instancePath + "/tolerations",
        parentData: data,
        parentDataProperty: "tolerations",
        rootData
      })) {
        vErrors = vErrors === null ? validate419.errors : vErrors.concat(validate419.errors);
        errors = vErrors.length;
      }
    }
    if (data.topologySpreadConstraints !== undefined) {
      if (!validate428(data.topologySpreadConstraints, {
        instancePath: instancePath + "/topologySpreadConstraints",
        parentData: data,
        parentDataProperty: "topologySpreadConstraints",
        rootData
      })) {
        vErrors = vErrors === null ? validate428.errors : vErrors.concat(validate428.errors);
        errors = vErrors.length;
      }
    }
    if (data.tracingConfig !== undefined) {
      if (!validate55(data.tracingConfig, {
        instancePath: instancePath + "/tracingConfig",
        parentData: data,
        parentDataProperty: "tracingConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumes !== undefined) {
      if (!validate437(data.volumes, {
        instancePath: instancePath + "/volumes",
        parentData: data,
        parentDataProperty: "volumes",
        rootData
      })) {
        vErrors = vErrors === null ? validate437.errors : vErrors.concat(validate437.errors);
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
const schema150 = {
  "properties": {
    "availableReplicas": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "paused": {
      "$ref": "384TuUg7xQOu4Fi6u32QopECSxjPv91aOGoUUSEznpE"
    },
    "replicas": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "unavailableReplicas": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "updatedReplicas": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    }
  },
  "required": ["availableReplicas", "paused", "replicas", "unavailableReplicas", "updatedReplicas"],
  "type": "object",
  "nullable": true
};
const schema151 = {
  "type": "boolean"
};
function validate632(data, {
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
  validate632.errors = vErrors;
  return errors === 0;
}
function validate630(data, {
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
    if (data.availableReplicas === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "availableReplicas"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.paused === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "paused"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.replicas === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "replicas"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.unavailableReplicas === undefined) {
      const err4 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "unavailableReplicas"
        }
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.updatedReplicas === undefined) {
      const err5 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "updatedReplicas"
        }
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
    if (data.availableReplicas !== undefined) {
      if (!validate38(data.availableReplicas, {
        instancePath: instancePath + "/availableReplicas",
        parentData: data,
        parentDataProperty: "availableReplicas",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.paused !== undefined) {
      if (!validate632(data.paused, {
        instancePath: instancePath + "/paused",
        parentData: data,
        parentDataProperty: "paused",
        rootData
      })) {
        vErrors = vErrors === null ? validate632.errors : vErrors.concat(validate632.errors);
        errors = vErrors.length;
      }
    }
    if (data.replicas !== undefined) {
      if (!validate38(data.replicas, {
        instancePath: instancePath + "/replicas",
        parentData: data,
        parentDataProperty: "replicas",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.unavailableReplicas !== undefined) {
      if (!validate38(data.unavailableReplicas, {
        instancePath: instancePath + "/unavailableReplicas",
        parentData: data,
        parentDataProperty: "unavailableReplicas",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.updatedReplicas !== undefined) {
      if (!validate38(data.updatedReplicas, {
        instancePath: instancePath + "/updatedReplicas",
        parentData: data,
        parentDataProperty: "updatedReplicas",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
  }
  validate630.errors = vErrors;
  return errors === 0;
}
function validate267(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="monitoring.coreos.com.v1.ThanosRuler" */;
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
      if (!validate268(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate268.errors : vErrors.concat(validate268.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate270(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate270.errors : vErrors.concat(validate270.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate272(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate272.errors : vErrors.concat(validate272.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate276(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate276.errors : vErrors.concat(validate276.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate630(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate630.errors : vErrors.concat(validate630.errors);
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
  validate267.errors = vErrors;
  return errors === 0;
}