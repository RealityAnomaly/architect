export const validate = validate24;
const schema9 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "CmbkRKZeJYKK10CMLtAIosblR298gGgact8DqLhtBg"
    },
    "kind": {
      "$ref": "DdY3kYm4w7tjRpbRyuPpphPU44LQqGW7azCwEDDUyCE"
    },
    "metadata": {
      "$ref": "F8UXVl2B8ROl9kb045E2at1pE3IVL8xPdYnpnYIkb0"
    },
    "spec": {
      "$ref": "KdYvqaQbNmS3aH5WnRVFYuq4ultzkLAzVATow2Bbc"
    }
  },
  "required": ["apiVersion", "kind", "metadata", "spec"],
  "$id": "architect.glassway.net.v1alpha1.Target"
};
const schema10 = {
  "type": "string",
  "enum": ["architect.glassway.net/v1alpha1"]
};
function validate25(data, {
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
  if (!(data === "architect.glassway.net/v1alpha1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema10.enum
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
const schema11 = {
  "type": "string",
  "enum": ["Target"]
};
function validate27(data, {
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
  if (!(data === "Target")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema11.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate27.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema13 = {};
import { validate as validate30 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate29(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate30(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
    errors = vErrors.length;
  }
  validate29.errors = vErrors;
  return errors === 0;
}
const schema14 = {
  "properties": {
    "plugins": {
      "$ref": "bLN4DmuSvasE82BRe2tS3f1zBT7VkpSTocDlzhWOXzU"
    },
    "requirements": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "components": {
      "$ref": "jrYujLw4RhGkshASgNW8t8PEE1liPlavRGooSVp1NyU"
    }
  },
  "type": "object"
};
const schema15 = {
  "minProperties": 1,
  "properties": {
    "kubernetes": {
      "$ref": "9MbvX6ckKOio771r2RFly4ukJzOEufcqhqerlFaYUk"
    }
  },
  "type": "object",
  "nullable": true
};
const schema16 = {
  "properties": {
    "client": {
      "$ref": "vUqrafbbXUrvWmRdhpz5Q7u0Ir5dOmGEPFn8hak"
    },
    "dns": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "ns": {
      "$ref": "NU6U6bHckmznKkuuSWXRHlYxICBHmCsFVZ02ps9wuI"
    },
    "podNetwork": {
      "$ref": "PRvsSII8bBqbECzaL0H1MNFWQN0oUSb5XuFruNplI"
    },
    "flavor": {
      "$ref": "x62ZrPo8iHAJdQOaycJbPhiHryIsHzOksGSxEP81vI"
    },
    "version": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "metal": {
      "$ref": "AMn6rZVnhDugA5rT7vc3ij005tT8insdgaFbPOLiw"
    }
  },
  "required": ["client", "dns", "podNetwork", "flavor", "version", "metal"],
  "type": "object",
  "nullable": true
};
const schema17 = {
  "properties": {
    "context": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["context"],
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
function validate36(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.context === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "context"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.context !== undefined) {
      if (!validate21(data.context, {
        instancePath: instancePath + "/context",
        parentData: data,
        parentDataProperty: "context",
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
  validate36.errors = vErrors;
  return errors === 0;
}
const schema18 = {
  "properties": {
    "features": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "operators": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "services": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema7 = {
  "type": "string",
  "nullable": true
};
function validate22(data, {
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
  validate22.errors = vErrors;
  return errors === 0;
}
function validate40(data, {
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
    if (data.features !== undefined) {
      if (!validate22(data.features, {
        instancePath: instancePath + "/features",
        parentData: data,
        parentDataProperty: "features",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.operators !== undefined) {
      if (!validate22(data.operators, {
        instancePath: instancePath + "/operators",
        parentData: data,
        parentDataProperty: "operators",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.services !== undefined) {
      if (!validate22(data.services, {
        instancePath: instancePath + "/services",
        parentData: data,
        parentDataProperty: "services",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate40.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "properties": {
    "ipFamilies": {
      "$ref": "jTf7PWpA7jG51d7Ry4s5vt2ThYEpiKCzsTYeMpbtM"
    }
  },
  "required": ["ipFamilies"],
  "type": "object"
};
const schema20 = {
  "items": {
    "$ref": "YW12n4WuxuuQHEMZnICBOQWsHz79CEfIJSh0Gys"
  },
  "type": "array"
};
const schema21 = {
  "type": "string",
  "enum": ["IPv4", "IPv6"]
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
  if (!(data === "IPv4" || data === "IPv6")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema21.enum
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
function validate46(data, {
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
      if (!validate47(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.ipFamilies === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "ipFamilies"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.ipFamilies !== undefined) {
      if (!validate46(data.ipFamilies, {
        instancePath: instancePath + "/ipFamilies",
        parentData: data,
        parentDataProperty: "ipFamilies",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
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
  validate45.errors = vErrors;
  return errors === 0;
}
const schema22 = {
  "type": "string",
  "enum": ["docker-desktop", "kind", "k3s", "talos"]
};
function validate51(data, {
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
  if (!(data === "docker-desktop" || data === "kind" || data === "k3s" || data === "talos")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema22.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate51.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  "type": "object",
  "properties": {
    "nodes": {
      "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
    }
  },
  "required": ["nodes"]
};
const schema24 = {
  "type": "integer"
};
function validate55(data, {
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
    if (data.nodes === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "nodes"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.nodes !== undefined) {
      if (!validate55(data.nodes, {
        instancePath: instancePath + "/nodes",
        parentData: data,
        parentDataProperty: "nodes",
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
    if (data.client === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "client"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.dns === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "dns"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.podNetwork === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "podNetwork"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.flavor === undefined) {
      const err4 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "flavor"
        }
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.version === undefined) {
      const err5 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "version"
        }
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
    if (data.metal === undefined) {
      const err6 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "metal"
        }
      };
      if (vErrors === null) {
        vErrors = [err6];
      } else {
        vErrors.push(err6);
      }
      errors++;
    }
    if (data.client !== undefined) {
      if (!validate36(data.client, {
        instancePath: instancePath + "/client",
        parentData: data,
        parentDataProperty: "client",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.dns !== undefined) {
      if (!validate21(data.dns, {
        instancePath: instancePath + "/dns",
        parentData: data,
        parentDataProperty: "dns",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.ns !== undefined) {
      if (!validate40(data.ns, {
        instancePath: instancePath + "/ns",
        parentData: data,
        parentDataProperty: "ns",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.podNetwork !== undefined) {
      if (!validate45(data.podNetwork, {
        instancePath: instancePath + "/podNetwork",
        parentData: data,
        parentDataProperty: "podNetwork",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.flavor !== undefined) {
      if (!validate51(data.flavor, {
        instancePath: instancePath + "/flavor",
        parentData: data,
        parentDataProperty: "flavor",
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate21(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.metal !== undefined) {
      if (!validate54(data.metal, {
        instancePath: instancePath + "/metal",
        parentData: data,
        parentDataProperty: "metal",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate35.errors = vErrors;
  return errors === 0;
}
function validate34(data, {
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
    if (data.kubernetes !== undefined) {
      if (!validate35(data.kubernetes, {
        instancePath: instancePath + "/kubernetes",
        parentData: data,
        parentDataProperty: "kubernetes",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  }
  validate34.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
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
  validate60.errors = vErrors;
  return errors === 0;
}
const schema26 = {
  "items": {
    "$ref": "908R0Mwfe6REGO8538L3P9IIITPDHtPJlXmJGlrwPOE"
  },
  "type": "array",
  "nullable": true
};
const schema27 = {
  "properties": {
    "class": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "options": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "context": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    }
  },
  "required": ["class"],
  "type": "object"
};
const schema8 = {
  "type": "object",
  "properties": {},
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
  validate23.errors = vErrors;
  return errors === 0;
}
function validate64(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.class === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "class"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.class !== undefined) {
      if (!validate21(data.class, {
        instancePath: instancePath + "/class",
        parentData: data,
        parentDataProperty: "class",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate22(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.options !== undefined) {
      if (!validate23(data.options, {
        instancePath: instancePath + "/options",
        parentData: data,
        parentDataProperty: "options",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.context !== undefined) {
      if (!validate23(data.context, {
        instancePath: instancePath + "/context",
        parentData: data,
        parentDataProperty: "context",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
  validate64.errors = vErrors;
  return errors === 0;
}
function validate63(data, {
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
      if (!validate64(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
  }
  validate63.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.plugins !== undefined) {
      if (!validate34(data.plugins, {
        instancePath: instancePath + "/plugins",
        parentData: data,
        parentDataProperty: "plugins",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.requirements !== undefined) {
      if (!validate60(data.requirements, {
        instancePath: instancePath + "/requirements",
        parentData: data,
        parentDataProperty: "requirements",
        rootData
      })) {
        vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
        errors = vErrors.length;
      }
    }
    if (data.components !== undefined) {
      if (!validate63(data.components, {
        instancePath: instancePath + "/components",
        parentData: data,
        parentDataProperty: "components",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
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
  validate33.errors = vErrors;
  return errors === 0;
}
function validate24(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="architect.glassway.net.v1alpha1.Target" */;
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
    if (data.metadata === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "metadata"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.spec === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "spec"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.apiVersion !== undefined) {
      if (!validate25(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate27(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate29(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate33(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err4 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err4];
    } else {
      vErrors.push(err4);
    }
    errors++;
  }
  validate24.errors = vErrors;
  return errors === 0;
}