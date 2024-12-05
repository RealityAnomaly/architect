import { formats } from "npm:@kubernetes-models/validate";
export const validate = validate43;
const schema20 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "xIdL4kBSil8g54ahv9oPjqkZ24NyuqouNNshxvNTJLQ"
    },
    "kind": {
      "$ref": "1u2eBIyDJRntAlnLf2PyLfLm2jk8INgWR6CogC90hY"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "lzSs0xSuA8dyZVjDEbiX9LkUTA6oABqACcBYJhvE"
    },
    "status": {
      "$ref": "J5xCVntdLRVvFXuXOEdVBL88hS3OwlhE11n8XKfS10"
    }
  },
  "required": ["apiVersion", "kind"],
  "$id": "helm.toolkit.fluxcd.io.v2beta1.HelmRelease"
};
const schema21 = {
  "type": "string",
  "enum": ["helm.toolkit.fluxcd.io/v2beta1"]
};
function validate44(data, {
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
  if (!(data === "helm.toolkit.fluxcd.io/v2beta1")) {
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
  validate44.errors = vErrors;
  return errors === 0;
}
const schema22 = {
  "type": "string",
  "enum": ["HelmRelease"]
};
function validate46(data, {
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
  if (!(data === "HelmRelease")) {
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
  validate46.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema24 = {};
import { validate as validate49 } from "npm:@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate48(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate49(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
      errors = vErrors.length;
    }
  }
  validate48.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "properties": {
    "chart": {
      "$ref": "pUki0lVaBrhOYy9e5EdaPzzEXvvVvUzMH6wdLXFs"
    },
    "chartRef": {
      "$ref": "GAfl530y49JjqEva3tgLHh4KymX8erYWjobbSJkPnE"
    },
    "dependsOn": {
      "$ref": "3AggOdqCKOesDhC0CFJtyD8vxBexv7TvCyWGbYWtU"
    },
    "driftDetection": {
      "$ref": "QzGtrfr0QANILHxfnjXIwaoOjgggDBtzzSXIoUHvMZs"
    },
    "install": {
      "$ref": "KAZ2irgREcw7pDRL0OxDTg4xzV4He7oJPGSWEPyM8ZY"
    },
    "interval": {
      "$ref": "VTS2hqBen1ql8yB5hEunjoVVvxlzpwuCJKblEhORdw"
    },
    "kubeConfig": {
      "$ref": "kJjwTAr1am4FQLfT7Xj1zUYQjrkEhVEWkX2KwqnlRI"
    },
    "maxHistory": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "persistentClient": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "postRenderers": {
      "$ref": "cONDXK305RX0QWFQPnpJInptA2gLuexfIFDKmL5mgKQ"
    },
    "releaseName": {
      "$ref": "foLyo6yg7CZnqFYRkmimHdMVIr8QPE3KB3Y6FvSPYig"
    },
    "rollback": {
      "$ref": "myINH185u69L8bdRWb3FaQLKl6bqX8h9b3DlZUZxR8"
    },
    "serviceAccountName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "storageNamespace": {
      "$ref": "Fi5GumpZRhoGbEbXE3aAYf5MY3ogPT21qvKgVxb4X8"
    },
    "suspend": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "targetNamespace": {
      "$ref": "Fi5GumpZRhoGbEbXE3aAYf5MY3ogPT21qvKgVxb4X8"
    },
    "test": {
      "$ref": "An9072rxC48qNR7WIzANAFlJ5BwyF5n1WChF6HH3hg"
    },
    "timeout": {
      "$ref": "qbTPr63NaBvHDBOU1Ezw2BbHbSjTZltL11L03m0YA"
    },
    "uninstall": {
      "$ref": "L7fLQ5XKTxt7tiXSoaJdFWEICZDBoDbATHK1qazO1Q"
    },
    "upgrade": {
      "$ref": "9Wyh7Vrl2Rc4S33jr5v31ZBk2xMYRJJWFiV8GAf9JQ"
    },
    "values": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "valuesFrom": {
      "$ref": "jxxTEDMEVkDaYO0SSWENwWi2Ftimab2a1ib5s0Sy5s"
    }
  },
  "required": ["chart", "interval"],
  "type": "object",
  "nullable": true
};
const schema26 = {
  "properties": {
    "metadata": {
      "$ref": "igJYwSZYrBtVsRmcMsQYdB7Q50xFQbahYKwITLXw0"
    },
    "spec": {
      "$ref": "9hGL2YO7en6gtFvr2DWIq00rBTXJbH4tI3mHS2XDtM"
    }
  },
  "required": ["spec"],
  "type": "object"
};
const schema27 = {
  "properties": {
    "annotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "labels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    }
  },
  "type": "object",
  "nullable": true
};
const schema6 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema7 = {
  "type": "string"
};
function validate22(data, {
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
      if (!validate22(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
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
function validate54(data, {
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
      if (!validate21(data.annotations, {
        instancePath: instancePath + "/annotations",
        parentData: data,
        parentDataProperty: "annotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.labels !== undefined) {
      if (!validate21(data.labels, {
        instancePath: instancePath + "/labels",
        parentData: data,
        parentDataProperty: "labels",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate54.errors = vErrors;
  return errors === 0;
}
const schema28 = {
  "properties": {
    "chart": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "interval": {
      "$ref": "qbTPr63NaBvHDBOU1Ezw2BbHbSjTZltL11L03m0YA"
    },
    "reconcileStrategy": {
      "$ref": "ySp5Bunyfj1DSY4H0pNpJVvjrN6pwWzcaXqFLaxN0"
    },
    "sourceRef": {
      "$ref": "gnAX7Un3jql2fms1txCB0Vg8wUS53kceDTQ0EJKkQ"
    },
    "valuesFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "valuesFiles": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "verify": {
      "$ref": "aWDM9BUu5DhED0fJ7ErL1wiOa7Aw53dKyIFDzBhJio"
    },
    "version": {
      "$ref": "AkOHq2iPv4pa7Q6zJFEOi1xU6czpxKKJgHUNGmbJPk"
    }
  },
  "required": ["chart", "sourceRef"],
  "type": "object"
};
const schema12 = {
  "pattern": "^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$",
  "type": "string",
  "nullable": true
};
const pattern0 = new RegExp("^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$", "u");
function validate28(data, {
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
          pattern: "^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$"
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
  validate28.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  "default": "ChartVersion",
  "enum": ["ChartVersion", "Revision"],
  "type": "string",
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
  if (!(data === "ChartVersion" || data === "Revision")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema29.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate61.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "properties": {
    "apiVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "Sn4pzIouE92yhB9vZ34wX3fMx4gCgsAZSc516BQ"
    },
    "name": {
      "$ref": "xwpijLRhjUEJllEse3cgJuQz6UsEYqfhm0t12sQjFe4"
    },
    "namespace": {
      "$ref": "Fi5GumpZRhoGbEbXE3aAYf5MY3ogPT21qvKgVxb4X8"
    }
  },
  "required": ["kind", "name"],
  "type": "object"
};
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
const schema31 = {
  "enum": ["HelmRepository", "GitRepository", "Bucket"],
  "type": "string"
};
function validate65(data, {
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
  if (!(data === "HelmRepository" || data === "GitRepository" || data === "Bucket")) {
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
  validate65.errors = vErrors;
  return errors === 0;
}
const schema9 = {
  "maxLength": 253,
  "minLength": 1,
  "type": "string"
};
import func2 from "npm:@kubernetes-models/validate/runtime/ucs2length";
function validate25(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) > 253) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 253
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
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
  validate25.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "maxLength": 63,
  "minLength": 1,
  "type": "string",
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
    if (func2(data) > 63) {
      const err1 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 63
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (func2(data) < 1) {
      const err2 = {
        instancePath,
        schemaPath: "#/minLength",
        keyword: "minLength",
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
  }
  validate26.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.kind === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "kind"
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
    if (data.apiVersion !== undefined) {
      if (!validate24(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate65(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
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
    if (data.namespace !== undefined) {
      if (!validate26(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
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
  validate63.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
  "nullable": true
};
function validate71(data, {
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
  validate71.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  "properties": {
    "provider": {
      "$ref": "bT0tOhqFXPWMHCo44mRz6frn0D7AyGsFPYAHtPZQ"
    },
    "secretRef": {
      "$ref": "OAgQGC3YN1FICnXF5ReeaD1QWt6Riug0pHBXOEYs"
    }
  },
  "required": ["provider"],
  "type": "object",
  "nullable": true
};
const schema34 = {
  "default": "cosign",
  "enum": ["cosign"],
  "type": "string"
};
function validate75(data, {
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
  if (!(data === "cosign")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema34.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate75.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name"],
  "type": "object",
  "nullable": true
};
function validate77(data, {
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
  }
  validate77.errors = vErrors;
  return errors === 0;
}
function validate74(data, {
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
    if (data.provider !== undefined) {
      if (!validate75(data.provider, {
        instancePath: instancePath + "/provider",
        parentData: data,
        parentDataProperty: "provider",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate77(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate77.errors : vErrors.concat(validate77.errors);
        errors = vErrors.length;
      }
    }
  }
  validate74.errors = vErrors;
  return errors === 0;
}
const schema36 = {
  "default": "*",
  "type": "string",
  "nullable": true
};
function validate81(data, {
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
  validate81.errors = vErrors;
  return errors === 0;
}
function validate58(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.chart === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "chart"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.sourceRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "sourceRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.chart !== undefined) {
      if (!validate22(data.chart, {
        instancePath: instancePath + "/chart",
        parentData: data,
        parentDataProperty: "chart",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.interval !== undefined) {
      if (!validate28(data.interval, {
        instancePath: instancePath + "/interval",
        parentData: data,
        parentDataProperty: "interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.reconcileStrategy !== undefined) {
      if (!validate61(data.reconcileStrategy, {
        instancePath: instancePath + "/reconcileStrategy",
        parentData: data,
        parentDataProperty: "reconcileStrategy",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.sourceRef !== undefined) {
      if (!validate63(data.sourceRef, {
        instancePath: instancePath + "/sourceRef",
        parentData: data,
        parentDataProperty: "sourceRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
        errors = vErrors.length;
      }
    }
    if (data.valuesFile !== undefined) {
      if (!validate24(data.valuesFile, {
        instancePath: instancePath + "/valuesFile",
        parentData: data,
        parentDataProperty: "valuesFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.valuesFiles !== undefined) {
      if (!validate71(data.valuesFiles, {
        instancePath: instancePath + "/valuesFiles",
        parentData: data,
        parentDataProperty: "valuesFiles",
        rootData
      })) {
        vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
        errors = vErrors.length;
      }
    }
    if (data.verify !== undefined) {
      if (!validate74(data.verify, {
        instancePath: instancePath + "/verify",
        parentData: data,
        parentDataProperty: "verify",
        rootData
      })) {
        vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate81(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
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
  validate58.errors = vErrors;
  return errors === 0;
}
function validate53(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
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
    if (data.metadata !== undefined) {
      if (!validate54(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate58(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
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
  validate53.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  "properties": {
    "apiVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "2rk8cSmgZSTbynoDDhzwAjBqBel8EpriuHhrpmeU"
    },
    "name": {
      "$ref": "xwpijLRhjUEJllEse3cgJuQz6UsEYqfhm0t12sQjFe4"
    },
    "namespace": {
      "$ref": "Fi5GumpZRhoGbEbXE3aAYf5MY3ogPT21qvKgVxb4X8"
    }
  },
  "required": ["kind", "name"],
  "type": "object",
  "nullable": true
};
const schema38 = {
  "enum": ["OCIRepository", "HelmChart"],
  "type": "string"
};
function validate87(data, {
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
  if (!(data === "OCIRepository" || data === "HelmChart")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema38.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate87.errors = vErrors;
  return errors === 0;
}
function validate85(data, {
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
    if (data.apiVersion !== undefined) {
      if (!validate24(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate87(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
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
    if (data.namespace !== undefined) {
      if (!validate26(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate85.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  "items": {
    "$ref": "djR0IiKxj20fIodNTVmExT7zNueAT3cy9fuVEwNlhI"
  },
  "type": "array",
  "nullable": true
};
const schema40 = {
  "properties": {
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
function validate93(data, {
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
  validate93.errors = vErrors;
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
      if (!validate93(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate93.errors : vErrors.concat(validate93.errors);
        errors = vErrors.length;
      }
    }
  }
  validate92.errors = vErrors;
  return errors === 0;
}
const schema41 = {
  "properties": {
    "ignore": {
      "$ref": "JzsofhGMinSH4MhHOmwnxlKAeu4ouW043fljvDEc"
    },
    "mode": {
      "$ref": "zHyOPMRKCRiBR0vpIPBbkV1jHFzEQe83LRcAh7PKAGw"
    }
  },
  "type": "object",
  "nullable": true
};
const schema42 = {
  "items": {
    "$ref": "Jy2Z8KMNJVzOtEJ2idpXO11m5uL7FFr3dkb1L7p6ckI"
  },
  "type": "array",
  "nullable": true
};
const schema43 = {
  "properties": {
    "paths": {
      "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
    },
    "target": {
      "$ref": "bNUw6RodMn9Zp4UiC1xue4h7cxJhya9vjygSWsBvc"
    }
  },
  "required": ["paths"],
  "type": "object"
};
const schema44 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array"
};
function validate101(data, {
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
  validate101.errors = vErrors;
  return errors === 0;
}
const schema14 = {
  "properties": {
    "annotationSelector": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "group": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "labelSelector": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "version": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate30(data, {
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
    if (data.annotationSelector !== undefined) {
      if (!validate24(data.annotationSelector, {
        instancePath: instancePath + "/annotationSelector",
        parentData: data,
        parentDataProperty: "annotationSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.group !== undefined) {
      if (!validate24(data.group, {
        instancePath: instancePath + "/group",
        parentData: data,
        parentDataProperty: "group",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate24(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.labelSelector !== undefined) {
      if (!validate24(data.labelSelector, {
        instancePath: instancePath + "/labelSelector",
        parentData: data,
        parentDataProperty: "labelSelector",
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
  }
  validate30.errors = vErrors;
  return errors === 0;
}
function validate100(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.paths === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "paths"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.paths !== undefined) {
      if (!validate101(data.paths, {
        instancePath: instancePath + "/paths",
        parentData: data,
        parentDataProperty: "paths",
        rootData
      })) {
        vErrors = vErrors === null ? validate101.errors : vErrors.concat(validate101.errors);
        errors = vErrors.length;
      }
    }
    if (data.target !== undefined) {
      if (!validate30(data.target, {
        instancePath: instancePath + "/target",
        parentData: data,
        parentDataProperty: "target",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
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
  validate100.errors = vErrors;
  return errors === 0;
}
function validate99(data, {
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
      if (!validate100(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
  }
  validate99.errors = vErrors;
  return errors === 0;
}
const schema45 = {
  "enum": ["enabled", "warn", "disabled"],
  "type": "string",
  "nullable": true
};
function validate107(data, {
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
  if (!(data === "enabled" || data === "warn" || data === "disabled")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema45.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate107.errors = vErrors;
  return errors === 0;
}
function validate98(data, {
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
    if (data.ignore !== undefined) {
      if (!validate99(data.ignore, {
        instancePath: instancePath + "/ignore",
        parentData: data,
        parentDataProperty: "ignore",
        rootData
      })) {
        vErrors = vErrors === null ? validate99.errors : vErrors.concat(validate99.errors);
        errors = vErrors.length;
      }
    }
    if (data.mode !== undefined) {
      if (!validate107(data.mode, {
        instancePath: instancePath + "/mode",
        parentData: data,
        parentDataProperty: "mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate107.errors : vErrors.concat(validate107.errors);
        errors = vErrors.length;
      }
    }
  }
  validate98.errors = vErrors;
  return errors === 0;
}
const schema46 = {
  "properties": {
    "crds": {
      "$ref": "abU29tbAs4eXemPQN6EuDBpqLWiHzfLp1M5fdZKvZqg"
    },
    "createNamespace": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "disableHooks": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "disableOpenAPIValidation": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "disableWait": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "disableWaitForJobs": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "remediation": {
      "$ref": "W8tFcesVD0DkYKSa3ENTNMyys29j40raFKh1yS8jmhM"
    },
    "replace": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "skipCRDs": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "timeout": {
      "$ref": "qbTPr63NaBvHDBOU1Ezw2BbHbSjTZltL11L03m0YA"
    }
  },
  "type": "object",
  "nullable": true
};
const schema16 = {
  "enum": ["Skip", "Create", "CreateReplace"],
  "type": "string",
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
  if (!(data === "Skip" || data === "Create" || data === "CreateReplace")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema16.enum
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
const schema11 = {
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
const schema47 = {
  "properties": {
    "ignoreTestFailures": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "remediateLastFailure": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "retries": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    }
  },
  "type": "object",
  "nullable": true
};
const schema13 = {
  "type": "integer",
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
  validate29.errors = vErrors;
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
    if (data.ignoreTestFailures !== undefined) {
      if (!validate27(data.ignoreTestFailures, {
        instancePath: instancePath + "/ignoreTestFailures",
        parentData: data,
        parentDataProperty: "ignoreTestFailures",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.remediateLastFailure !== undefined) {
      if (!validate27(data.remediateLastFailure, {
        instancePath: instancePath + "/remediateLastFailure",
        parentData: data,
        parentDataProperty: "remediateLastFailure",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.retries !== undefined) {
      if (!validate29(data.retries, {
        instancePath: instancePath + "/retries",
        parentData: data,
        parentDataProperty: "retries",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate117.errors = vErrors;
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
    if (data.crds !== undefined) {
      if (!validate39(data.crds, {
        instancePath: instancePath + "/crds",
        parentData: data,
        parentDataProperty: "crds",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.createNamespace !== undefined) {
      if (!validate27(data.createNamespace, {
        instancePath: instancePath + "/createNamespace",
        parentData: data,
        parentDataProperty: "createNamespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableHooks !== undefined) {
      if (!validate27(data.disableHooks, {
        instancePath: instancePath + "/disableHooks",
        parentData: data,
        parentDataProperty: "disableHooks",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableOpenAPIValidation !== undefined) {
      if (!validate27(data.disableOpenAPIValidation, {
        instancePath: instancePath + "/disableOpenAPIValidation",
        parentData: data,
        parentDataProperty: "disableOpenAPIValidation",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableWait !== undefined) {
      if (!validate27(data.disableWait, {
        instancePath: instancePath + "/disableWait",
        parentData: data,
        parentDataProperty: "disableWait",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableWaitForJobs !== undefined) {
      if (!validate27(data.disableWaitForJobs, {
        instancePath: instancePath + "/disableWaitForJobs",
        parentData: data,
        parentDataProperty: "disableWaitForJobs",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.remediation !== undefined) {
      if (!validate117(data.remediation, {
        instancePath: instancePath + "/remediation",
        parentData: data,
        parentDataProperty: "remediation",
        rootData
      })) {
        vErrors = vErrors === null ? validate117.errors : vErrors.concat(validate117.errors);
        errors = vErrors.length;
      }
    }
    if (data.replace !== undefined) {
      if (!validate27(data.replace, {
        instancePath: instancePath + "/replace",
        parentData: data,
        parentDataProperty: "replace",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.skipCRDs !== undefined) {
      if (!validate27(data.skipCRDs, {
        instancePath: instancePath + "/skipCRDs",
        parentData: data,
        parentDataProperty: "skipCRDs",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeout !== undefined) {
      if (!validate28(data.timeout, {
        instancePath: instancePath + "/timeout",
        parentData: data,
        parentDataProperty: "timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate110.errors = vErrors;
  return errors === 0;
}
const schema48 = {
  "pattern": "^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$",
  "type": "string"
};
function validate126(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^([0-9]+(\\.[0-9]+)?(ms|s|m|h))+$"
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
  validate126.errors = vErrors;
  return errors === 0;
}
const schema49 = {
  "properties": {
    "secretRef": {
      "$ref": "Gh64Fj0PhhaaQOrqMxEvmxezayGCs8WLbXGiFvBiEy4"
    }
  },
  "required": ["secretRef"],
  "type": "object",
  "nullable": true
};
const schema50 = {
  "properties": {
    "key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name"],
  "type": "object"
};
function validate129(data, {
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
  validate129.errors = vErrors;
  return errors === 0;
}
function validate128(data, {
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
    if (data.secretRef !== undefined) {
      if (!validate129(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate129.errors : vErrors.concat(validate129.errors);
        errors = vErrors.length;
      }
    }
  }
  validate128.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  "items": {
    "$ref": "2Th0qFYviKNw6d6TthbDU5jSGX1MmDpD4mszh8gL8"
  },
  "type": "array",
  "nullable": true
};
const schema52 = {
  "properties": {
    "kustomize": {
      "$ref": "9p8UICoOoqJD58CjSAJE5CW592j63lbq7x0bgO3vw"
    }
  },
  "type": "object"
};
const schema53 = {
  "properties": {
    "images": {
      "$ref": "vCG18bghMRsL10eubu2KKJa7lkKuiW11nEE1TCTAk"
    },
    "patches": {
      "$ref": "xOWuIQr6PRUmu69UK2JTVxdjhxOEyKHSfSNw2kq4"
    },
    "patchesJson6902": {
      "$ref": "rZ1gr97fRitfm1m3eoG7ae8HvfztIubFmcZmtpfI"
    },
    "patchesStrategicMerge": {
      "$ref": "4vimpaSaAcbaKw1RJxomsTbhIAjB9v0THuEAuAyUcc"
    }
  },
  "type": "object",
  "nullable": true
};
const schema54 = {
  "items": {
    "$ref": "ZnWUine85I5z1OOaNLUwSzl8cWM1fobpgJuWFWzqLI"
  },
  "type": "array",
  "nullable": true
};
const schema55 = {
  "properties": {
    "digest": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "newName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "newTag": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["name"],
  "type": "object"
};
function validate140(data, {
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
    if (data.digest !== undefined) {
      if (!validate24(data.digest, {
        instancePath: instancePath + "/digest",
        parentData: data,
        parentDataProperty: "digest",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
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
    if (data.newName !== undefined) {
      if (!validate24(data.newName, {
        instancePath: instancePath + "/newName",
        parentData: data,
        parentDataProperty: "newName",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.newTag !== undefined) {
      if (!validate24(data.newTag, {
        instancePath: instancePath + "/newTag",
        parentData: data,
        parentDataProperty: "newTag",
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
  validate140.errors = vErrors;
  return errors === 0;
}
function validate139(data, {
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
      if (!validate140(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate140.errors : vErrors.concat(validate140.errors);
        errors = vErrors.length;
      }
    }
  }
  validate139.errors = vErrors;
  return errors === 0;
}
const schema56 = {
  "items": {
    "$ref": "AljKEZ1ursikkK1CdjLVtcsJ9cBKgX2K9n2ULlamU"
  },
  "type": "array",
  "nullable": true
};
const schema57 = {
  "properties": {
    "patch": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "target": {
      "$ref": "bNUw6RodMn9Zp4UiC1xue4h7cxJhya9vjygSWsBvc"
    }
  },
  "required": ["patch"],
  "type": "object"
};
function validate148(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.patch === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "patch"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.patch !== undefined) {
      if (!validate22(data.patch, {
        instancePath: instancePath + "/patch",
        parentData: data,
        parentDataProperty: "patch",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.target !== undefined) {
      if (!validate30(data.target, {
        instancePath: instancePath + "/target",
        parentData: data,
        parentDataProperty: "target",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
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
  validate148.errors = vErrors;
  return errors === 0;
}
function validate147(data, {
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
      if (!validate148(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate148.errors : vErrors.concat(validate148.errors);
        errors = vErrors.length;
      }
    }
  }
  validate147.errors = vErrors;
  return errors === 0;
}
const schema58 = {
  "items": {
    "$ref": "d8qxDRSh2DIK345hn1ywPTGeLW0d178du9cNey2a48"
  },
  "type": "array",
  "nullable": true
};
const schema59 = {
  "properties": {
    "patch": {
      "$ref": "6H5SzCsykT45virw2d4vDV3icHFQpSTBtR7GcMimjU"
    },
    "target": {
      "$ref": "wuZwqFHzJGrriFTGR37fGmsGv3pd83uqPC2wqzehFeE"
    }
  },
  "required": ["patch", "target"],
  "type": "object"
};
const schema60 = {
  "items": {
    "$ref": "qcu7RinORdL7vhWi3jRVMh6u4eZjYHguRQGM1sB5jk"
  },
  "type": "array"
};
const schema61 = {
  "properties": {
    "from": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "op": {
      "$ref": "Gjcq6QqJFZSKoA6Yps9cAyOanspBcxAWMXcw9r4H6Q"
    },
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    }
  },
  "required": ["op", "path"],
  "type": "object"
};
const schema62 = {
  "enum": ["test", "remove", "add", "replace", "move", "copy"],
  "type": "string"
};
function validate158(data, {
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
  if (!(data === "test" || data === "remove" || data === "add" || data === "replace" || data === "move" || data === "copy")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema62.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate158.errors = vErrors;
  return errors === 0;
}
const schema15 = {};
function validate38(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  validate38.errors = null;
  return true;
}
function validate156(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.op === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "op"
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
    if (data.from !== undefined) {
      if (!validate24(data.from, {
        instancePath: instancePath + "/from",
        parentData: data,
        parentDataProperty: "from",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.op !== undefined) {
      if (!validate158(data.op, {
        instancePath: instancePath + "/op",
        parentData: data,
        parentDataProperty: "op",
        rootData
      })) {
        vErrors = vErrors === null ? validate158.errors : vErrors.concat(validate158.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate22(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate38(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
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
  validate156.errors = vErrors;
  return errors === 0;
}
function validate155(data, {
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
      if (!validate156(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate156.errors : vErrors.concat(validate156.errors);
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
  validate155.errors = vErrors;
  return errors === 0;
}
const schema63 = {
  "properties": {
    "annotationSelector": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "group": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "labelSelector": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "version": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate164(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.annotationSelector !== undefined) {
      if (!validate24(data.annotationSelector, {
        instancePath: instancePath + "/annotationSelector",
        parentData: data,
        parentDataProperty: "annotationSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.group !== undefined) {
      if (!validate24(data.group, {
        instancePath: instancePath + "/group",
        parentData: data,
        parentDataProperty: "group",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate24(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.labelSelector !== undefined) {
      if (!validate24(data.labelSelector, {
        instancePath: instancePath + "/labelSelector",
        parentData: data,
        parentDataProperty: "labelSelector",
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
  validate164.errors = vErrors;
  return errors === 0;
}
function validate154(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.patch === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "patch"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.target === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "target"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.patch !== undefined) {
      if (!validate155(data.patch, {
        instancePath: instancePath + "/patch",
        parentData: data,
        parentDataProperty: "patch",
        rootData
      })) {
        vErrors = vErrors === null ? validate155.errors : vErrors.concat(validate155.errors);
        errors = vErrors.length;
      }
    }
    if (data.target !== undefined) {
      if (!validate164(data.target, {
        instancePath: instancePath + "/target",
        parentData: data,
        parentDataProperty: "target",
        rootData
      })) {
        vErrors = vErrors === null ? validate164.errors : vErrors.concat(validate164.errors);
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
  validate154.errors = vErrors;
  return errors === 0;
}
function validate153(data, {
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
      if (!validate154(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate154.errors : vErrors.concat(validate154.errors);
        errors = vErrors.length;
      }
    }
  }
  validate153.errors = vErrors;
  return errors === 0;
}
const schema64 = {
  "items": {
    "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
  },
  "type": "array",
  "nullable": true
};
function validate175(data, {
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
      if (!validate38(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
  }
  validate175.errors = vErrors;
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
    if (data.images !== undefined) {
      if (!validate139(data.images, {
        instancePath: instancePath + "/images",
        parentData: data,
        parentDataProperty: "images",
        rootData
      })) {
        vErrors = vErrors === null ? validate139.errors : vErrors.concat(validate139.errors);
        errors = vErrors.length;
      }
    }
    if (data.patches !== undefined) {
      if (!validate147(data.patches, {
        instancePath: instancePath + "/patches",
        parentData: data,
        parentDataProperty: "patches",
        rootData
      })) {
        vErrors = vErrors === null ? validate147.errors : vErrors.concat(validate147.errors);
        errors = vErrors.length;
      }
    }
    if (data.patchesJson6902 !== undefined) {
      if (!validate153(data.patchesJson6902, {
        instancePath: instancePath + "/patchesJson6902",
        parentData: data,
        parentDataProperty: "patchesJson6902",
        rootData
      })) {
        vErrors = vErrors === null ? validate153.errors : vErrors.concat(validate153.errors);
        errors = vErrors.length;
      }
    }
    if (data.patchesStrategicMerge !== undefined) {
      if (!validate175(data.patchesStrategicMerge, {
        instancePath: instancePath + "/patchesStrategicMerge",
        parentData: data,
        parentDataProperty: "patchesStrategicMerge",
        rootData
      })) {
        vErrors = vErrors === null ? validate175.errors : vErrors.concat(validate175.errors);
        errors = vErrors.length;
      }
    }
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.kustomize !== undefined) {
      if (!validate138(data.kustomize, {
        instancePath: instancePath + "/kustomize",
        parentData: data,
        parentDataProperty: "kustomize",
        rootData
      })) {
        vErrors = vErrors === null ? validate138.errors : vErrors.concat(validate138.errors);
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
  validate137.errors = vErrors;
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
      if (!validate137(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate137.errors : vErrors.concat(validate137.errors);
        errors = vErrors.length;
      }
    }
  }
  validate136.errors = vErrors;
  return errors === 0;
}
const schema65 = {
  "maxLength": 53,
  "minLength": 1,
  "type": "string",
  "nullable": true
};
function validate181(data, {
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
    if (func2(data) > 53) {
      const err1 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 53
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (func2(data) < 1) {
      const err2 = {
        instancePath,
        schemaPath: "#/minLength",
        keyword: "minLength",
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
  }
  validate181.errors = vErrors;
  return errors === 0;
}
const schema66 = {
  "properties": {
    "cleanupOnFail": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "disableHooks": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "disableWait": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "disableWaitForJobs": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "force": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "recreate": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "timeout": {
      "$ref": "qbTPr63NaBvHDBOU1Ezw2BbHbSjTZltL11L03m0YA"
    }
  },
  "type": "object",
  "nullable": true
};
function validate183(data, {
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
    if (data.cleanupOnFail !== undefined) {
      if (!validate27(data.cleanupOnFail, {
        instancePath: instancePath + "/cleanupOnFail",
        parentData: data,
        parentDataProperty: "cleanupOnFail",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableHooks !== undefined) {
      if (!validate27(data.disableHooks, {
        instancePath: instancePath + "/disableHooks",
        parentData: data,
        parentDataProperty: "disableHooks",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableWait !== undefined) {
      if (!validate27(data.disableWait, {
        instancePath: instancePath + "/disableWait",
        parentData: data,
        parentDataProperty: "disableWait",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableWaitForJobs !== undefined) {
      if (!validate27(data.disableWaitForJobs, {
        instancePath: instancePath + "/disableWaitForJobs",
        parentData: data,
        parentDataProperty: "disableWaitForJobs",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.force !== undefined) {
      if (!validate27(data.force, {
        instancePath: instancePath + "/force",
        parentData: data,
        parentDataProperty: "force",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.recreate !== undefined) {
      if (!validate27(data.recreate, {
        instancePath: instancePath + "/recreate",
        parentData: data,
        parentDataProperty: "recreate",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeout !== undefined) {
      if (!validate28(data.timeout, {
        instancePath: instancePath + "/timeout",
        parentData: data,
        parentDataProperty: "timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate183.errors = vErrors;
  return errors === 0;
}
const schema67 = {
  "properties": {
    "enable": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "ignoreFailures": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "timeout": {
      "$ref": "qbTPr63NaBvHDBOU1Ezw2BbHbSjTZltL11L03m0YA"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.enable !== undefined) {
      if (!validate27(data.enable, {
        instancePath: instancePath + "/enable",
        parentData: data,
        parentDataProperty: "enable",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.ignoreFailures !== undefined) {
      if (!validate27(data.ignoreFailures, {
        instancePath: instancePath + "/ignoreFailures",
        parentData: data,
        parentDataProperty: "ignoreFailures",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeout !== undefined) {
      if (!validate28(data.timeout, {
        instancePath: instancePath + "/timeout",
        parentData: data,
        parentDataProperty: "timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate196.errors = vErrors;
  return errors === 0;
}
const schema68 = {
  "properties": {
    "deletionPropagation": {
      "$ref": "01UuiuEaGVTRggUzBVtkgJyrTyPOGAXEyIcgobj7w"
    },
    "disableHooks": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "disableWait": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "keepHistory": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "timeout": {
      "$ref": "qbTPr63NaBvHDBOU1Ezw2BbHbSjTZltL11L03m0YA"
    }
  },
  "type": "object",
  "nullable": true
};
const schema69 = {
  "default": "background",
  "enum": ["background", "foreground", "orphan"],
  "type": "string",
  "nullable": true
};
function validate203(data, {
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
  if (!(data === "background" || data === "foreground" || data === "orphan")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema69.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate203.errors = vErrors;
  return errors === 0;
}
function validate202(data, {
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
    if (data.deletionPropagation !== undefined) {
      if (!validate203(data.deletionPropagation, {
        instancePath: instancePath + "/deletionPropagation",
        parentData: data,
        parentDataProperty: "deletionPropagation",
        rootData
      })) {
        vErrors = vErrors === null ? validate203.errors : vErrors.concat(validate203.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableHooks !== undefined) {
      if (!validate27(data.disableHooks, {
        instancePath: instancePath + "/disableHooks",
        parentData: data,
        parentDataProperty: "disableHooks",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableWait !== undefined) {
      if (!validate27(data.disableWait, {
        instancePath: instancePath + "/disableWait",
        parentData: data,
        parentDataProperty: "disableWait",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.keepHistory !== undefined) {
      if (!validate27(data.keepHistory, {
        instancePath: instancePath + "/keepHistory",
        parentData: data,
        parentDataProperty: "keepHistory",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeout !== undefined) {
      if (!validate28(data.timeout, {
        instancePath: instancePath + "/timeout",
        parentData: data,
        parentDataProperty: "timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate202.errors = vErrors;
  return errors === 0;
}
const schema70 = {
  "properties": {
    "cleanupOnFail": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "crds": {
      "$ref": "abU29tbAs4eXemPQN6EuDBpqLWiHzfLp1M5fdZKvZqg"
    },
    "disableHooks": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "disableOpenAPIValidation": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "disableWait": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "disableWaitForJobs": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "force": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "preserveValues": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "remediation": {
      "$ref": "OcGyGhqY9WYRXzFh6BMRfik2szhB1tOlC7luNwIo"
    },
    "timeout": {
      "$ref": "qbTPr63NaBvHDBOU1Ezw2BbHbSjTZltL11L03m0YA"
    }
  },
  "type": "object",
  "nullable": true
};
const schema71 = {
  "properties": {
    "ignoreTestFailures": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "remediateLastFailure": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "retries": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "strategy": {
      "$ref": "RuapGS9f0d1zXTSxQNHEXdzP4OBbcifXKYsTijfZlQY"
    }
  },
  "type": "object",
  "nullable": true
};
const schema72 = {
  "enum": ["rollback", "uninstall"],
  "type": "string",
  "nullable": true
};
function validate223(data, {
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
  if (!(data === "rollback" || data === "uninstall")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema72.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate223.errors = vErrors;
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
    if (data.ignoreTestFailures !== undefined) {
      if (!validate27(data.ignoreTestFailures, {
        instancePath: instancePath + "/ignoreTestFailures",
        parentData: data,
        parentDataProperty: "ignoreTestFailures",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.remediateLastFailure !== undefined) {
      if (!validate27(data.remediateLastFailure, {
        instancePath: instancePath + "/remediateLastFailure",
        parentData: data,
        parentDataProperty: "remediateLastFailure",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.retries !== undefined) {
      if (!validate29(data.retries, {
        instancePath: instancePath + "/retries",
        parentData: data,
        parentDataProperty: "retries",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.strategy !== undefined) {
      if (!validate223(data.strategy, {
        instancePath: instancePath + "/strategy",
        parentData: data,
        parentDataProperty: "strategy",
        rootData
      })) {
        vErrors = vErrors === null ? validate223.errors : vErrors.concat(validate223.errors);
        errors = vErrors.length;
      }
    }
  }
  validate219.errors = vErrors;
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
    if (data.cleanupOnFail !== undefined) {
      if (!validate27(data.cleanupOnFail, {
        instancePath: instancePath + "/cleanupOnFail",
        parentData: data,
        parentDataProperty: "cleanupOnFail",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.crds !== undefined) {
      if (!validate39(data.crds, {
        instancePath: instancePath + "/crds",
        parentData: data,
        parentDataProperty: "crds",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableHooks !== undefined) {
      if (!validate27(data.disableHooks, {
        instancePath: instancePath + "/disableHooks",
        parentData: data,
        parentDataProperty: "disableHooks",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableOpenAPIValidation !== undefined) {
      if (!validate27(data.disableOpenAPIValidation, {
        instancePath: instancePath + "/disableOpenAPIValidation",
        parentData: data,
        parentDataProperty: "disableOpenAPIValidation",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableWait !== undefined) {
      if (!validate27(data.disableWait, {
        instancePath: instancePath + "/disableWait",
        parentData: data,
        parentDataProperty: "disableWait",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableWaitForJobs !== undefined) {
      if (!validate27(data.disableWaitForJobs, {
        instancePath: instancePath + "/disableWaitForJobs",
        parentData: data,
        parentDataProperty: "disableWaitForJobs",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.force !== undefined) {
      if (!validate27(data.force, {
        instancePath: instancePath + "/force",
        parentData: data,
        parentDataProperty: "force",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.preserveValues !== undefined) {
      if (!validate27(data.preserveValues, {
        instancePath: instancePath + "/preserveValues",
        parentData: data,
        parentDataProperty: "preserveValues",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.remediation !== undefined) {
      if (!validate219(data.remediation, {
        instancePath: instancePath + "/remediation",
        parentData: data,
        parentDataProperty: "remediation",
        rootData
      })) {
        vErrors = vErrors === null ? validate219.errors : vErrors.concat(validate219.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeout !== undefined) {
      if (!validate28(data.timeout, {
        instancePath: instancePath + "/timeout",
        parentData: data,
        parentDataProperty: "timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate210.errors = vErrors;
  return errors === 0;
}
const schema73 = {
  "items": {
    "$ref": "xYHCCpmybZswQMyiYAtX0sLLVKUIDHJycP39ZB1MI8w"
  },
  "type": "array",
  "nullable": true
};
const schema74 = {
  "properties": {
    "kind": {
      "$ref": "ebAifhrS8MR1Opdn4tuyhKTaJh7h5KbXTPm4AK6IGw"
    },
    "name": {
      "$ref": "xwpijLRhjUEJllEse3cgJuQz6UsEYqfhm0t12sQjFe4"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "targetPath": {
      "$ref": "eyl9Kmu7CkYmMWDuj0jS8GCu33cqlwpAokXOjHs18"
    },
    "valuesKey": {
      "$ref": "xsURQdt0Z3OHZLInOn9n67QxXq7BkpLL5Bw7DJeW4c"
    }
  },
  "required": ["kind", "name"],
  "type": "object"
};
const schema75 = {
  "enum": ["Secret", "ConfigMap"],
  "type": "string"
};
function validate231(data, {
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
        allowedValues: schema75.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate231.errors = vErrors;
  return errors === 0;
}
const schema76 = {
  "maxLength": 250,
  "pattern": "^([a-zA-Z0-9_\\-.\\\\\\/]|\\[[0-9]{1,5}\\])+$",
  "type": "string",
  "nullable": true
};
const pattern2 = new RegExp("^([a-zA-Z0-9_\\-.\\\\\\/]|\\[[0-9]{1,5}\\])+$", "u");
function validate235(data, {
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
    if (func2(data) > 250) {
      const err1 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 250
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (!pattern2.test(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^([a-zA-Z0-9_\\-.\\\\\\/]|\\[[0-9]{1,5}\\])+$"
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
  validate235.errors = vErrors;
  return errors === 0;
}
const schema77 = {
  "maxLength": 253,
  "pattern": "^[\\-._a-zA-Z0-9]+$",
  "type": "string",
  "nullable": true
};
const pattern3 = new RegExp("^[\\-._a-zA-Z0-9]+$", "u");
function validate237(data, {
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
    if (func2(data) > 253) {
      const err1 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 253
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (!pattern3.test(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^[\\-._a-zA-Z0-9]+$"
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
  validate237.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.kind === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "kind"
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
    if (data.kind !== undefined) {
      if (!validate231(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate231.errors : vErrors.concat(validate231.errors);
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
    if (data.targetPath !== undefined) {
      if (!validate235(data.targetPath, {
        instancePath: instancePath + "/targetPath",
        parentData: data,
        parentDataProperty: "targetPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate235.errors : vErrors.concat(validate235.errors);
        errors = vErrors.length;
      }
    }
    if (data.valuesKey !== undefined) {
      if (!validate237(data.valuesKey, {
        instancePath: instancePath + "/valuesKey",
        parentData: data,
        parentDataProperty: "valuesKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate237.errors : vErrors.concat(validate237.errors);
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
  validate230.errors = vErrors;
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
      if (!validate230(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
        errors = vErrors.length;
      }
    }
  }
  validate229.errors = vErrors;
  return errors === 0;
}
function validate52(data, {
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
    if (data.chart === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "chart"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.interval === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "interval"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.chart !== undefined) {
      if (!validate53(data.chart, {
        instancePath: instancePath + "/chart",
        parentData: data,
        parentDataProperty: "chart",
        rootData
      })) {
        vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
        errors = vErrors.length;
      }
    }
    if (data.chartRef !== undefined) {
      if (!validate85(data.chartRef, {
        instancePath: instancePath + "/chartRef",
        parentData: data,
        parentDataProperty: "chartRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate85.errors : vErrors.concat(validate85.errors);
        errors = vErrors.length;
      }
    }
    if (data.dependsOn !== undefined) {
      if (!validate92(data.dependsOn, {
        instancePath: instancePath + "/dependsOn",
        parentData: data,
        parentDataProperty: "dependsOn",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.driftDetection !== undefined) {
      if (!validate98(data.driftDetection, {
        instancePath: instancePath + "/driftDetection",
        parentData: data,
        parentDataProperty: "driftDetection",
        rootData
      })) {
        vErrors = vErrors === null ? validate98.errors : vErrors.concat(validate98.errors);
        errors = vErrors.length;
      }
    }
    if (data.install !== undefined) {
      if (!validate110(data.install, {
        instancePath: instancePath + "/install",
        parentData: data,
        parentDataProperty: "install",
        rootData
      })) {
        vErrors = vErrors === null ? validate110.errors : vErrors.concat(validate110.errors);
        errors = vErrors.length;
      }
    }
    if (data.interval !== undefined) {
      if (!validate126(data.interval, {
        instancePath: instancePath + "/interval",
        parentData: data,
        parentDataProperty: "interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate126.errors : vErrors.concat(validate126.errors);
        errors = vErrors.length;
      }
    }
    if (data.kubeConfig !== undefined) {
      if (!validate128(data.kubeConfig, {
        instancePath: instancePath + "/kubeConfig",
        parentData: data,
        parentDataProperty: "kubeConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate128.errors : vErrors.concat(validate128.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxHistory !== undefined) {
      if (!validate29(data.maxHistory, {
        instancePath: instancePath + "/maxHistory",
        parentData: data,
        parentDataProperty: "maxHistory",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.persistentClient !== undefined) {
      if (!validate27(data.persistentClient, {
        instancePath: instancePath + "/persistentClient",
        parentData: data,
        parentDataProperty: "persistentClient",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.postRenderers !== undefined) {
      if (!validate136(data.postRenderers, {
        instancePath: instancePath + "/postRenderers",
        parentData: data,
        parentDataProperty: "postRenderers",
        rootData
      })) {
        vErrors = vErrors === null ? validate136.errors : vErrors.concat(validate136.errors);
        errors = vErrors.length;
      }
    }
    if (data.releaseName !== undefined) {
      if (!validate181(data.releaseName, {
        instancePath: instancePath + "/releaseName",
        parentData: data,
        parentDataProperty: "releaseName",
        rootData
      })) {
        vErrors = vErrors === null ? validate181.errors : vErrors.concat(validate181.errors);
        errors = vErrors.length;
      }
    }
    if (data.rollback !== undefined) {
      if (!validate183(data.rollback, {
        instancePath: instancePath + "/rollback",
        parentData: data,
        parentDataProperty: "rollback",
        rootData
      })) {
        vErrors = vErrors === null ? validate183.errors : vErrors.concat(validate183.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountName !== undefined) {
      if (!validate24(data.serviceAccountName, {
        instancePath: instancePath + "/serviceAccountName",
        parentData: data,
        parentDataProperty: "serviceAccountName",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageNamespace !== undefined) {
      if (!validate26(data.storageNamespace, {
        instancePath: instancePath + "/storageNamespace",
        parentData: data,
        parentDataProperty: "storageNamespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.suspend !== undefined) {
      if (!validate27(data.suspend, {
        instancePath: instancePath + "/suspend",
        parentData: data,
        parentDataProperty: "suspend",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetNamespace !== undefined) {
      if (!validate26(data.targetNamespace, {
        instancePath: instancePath + "/targetNamespace",
        parentData: data,
        parentDataProperty: "targetNamespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.test !== undefined) {
      if (!validate196(data.test, {
        instancePath: instancePath + "/test",
        parentData: data,
        parentDataProperty: "test",
        rootData
      })) {
        vErrors = vErrors === null ? validate196.errors : vErrors.concat(validate196.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeout !== undefined) {
      if (!validate28(data.timeout, {
        instancePath: instancePath + "/timeout",
        parentData: data,
        parentDataProperty: "timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.uninstall !== undefined) {
      if (!validate202(data.uninstall, {
        instancePath: instancePath + "/uninstall",
        parentData: data,
        parentDataProperty: "uninstall",
        rootData
      })) {
        vErrors = vErrors === null ? validate202.errors : vErrors.concat(validate202.errors);
        errors = vErrors.length;
      }
    }
    if (data.upgrade !== undefined) {
      if (!validate210(data.upgrade, {
        instancePath: instancePath + "/upgrade",
        parentData: data,
        parentDataProperty: "upgrade",
        rootData
      })) {
        vErrors = vErrors === null ? validate210.errors : vErrors.concat(validate210.errors);
        errors = vErrors.length;
      }
    }
    if (data.values !== undefined) {
      if (!validate38(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.valuesFrom !== undefined) {
      if (!validate229(data.valuesFrom, {
        instancePath: instancePath + "/valuesFrom",
        parentData: data,
        parentDataProperty: "valuesFrom",
        rootData
      })) {
        vErrors = vErrors === null ? validate229.errors : vErrors.concat(validate229.errors);
        errors = vErrors.length;
      }
    }
  }
  validate52.errors = vErrors;
  return errors === 0;
}
const schema78 = {
  "default": {
    "observedGeneration": -1
  },
  "properties": {
    "conditions": {
      "$ref": "zBl6OiSXSxQ6tDeBlQ4suXy9oTADY8BgOSRVMsB44"
    },
    "failures": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "helmChart": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "history": {
      "$ref": "0udejmwpeB6Yv6FXnmz6ZNuE3Sr9ScCeTHnMOdFbA"
    },
    "installFailures": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "lastAppliedRevision": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lastAttemptedConfigDigest": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lastAttemptedGeneration": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "lastAttemptedReleaseAction": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lastAttemptedRevision": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lastAttemptedValuesChecksum": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lastHandledForceAt": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lastHandledReconcileAt": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lastHandledResetAt": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lastReleaseRevision": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "observedGeneration": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "observedPostRenderersDigest": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "storageNamespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "upgradeFailures": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    }
  },
  "type": "object",
  "nullable": true
};
const schema79 = {
  "items": {
    "$ref": "qF2xzAbTxVDKuLvsNu75Dkz2iJf8KcuXclF0tKipnn0"
  },
  "type": "array",
  "nullable": true
};
const schema80 = {
  "properties": {
    "lastTransitionTime": {
      "$ref": "KrhXBWKB1pK8JptMQRXbBg5co4bpZWZnIUkdeEo37wY"
    },
    "message": {
      "$ref": "Kduwl8DcA0kMznK9kNMJ5ZDKDZL9GH04F46AbIesag"
    },
    "observedGeneration": {
      "$ref": "Sg5VMnp9PeciTWOOocDxVZ8KL974mKlNPE7Z3LxfFY"
    },
    "reason": {
      "$ref": "ffwvxWNmgAw4j3J98OozNWe0YovCdcCVbNeffpYY"
    },
    "status": {
      "$ref": "pxfc6xQekz8UJRTLhQQLAy8qHcx9lW4EsDEEbdf5fxA"
    },
    "type": {
      "$ref": "abwpMDY1BocHdDN72xQbiDERuNabmToRz3D0GKn0D4"
    }
  },
  "required": ["lastTransitionTime", "message", "reason", "status", "type"],
  "type": "object"
};
const schema17 = {
  "format": "date-time",
  "type": "string"
};
const formats0 = formats["date-time"];
function validate40(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!formats0.validate(data)) {
      const err0 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "date-time"
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
  validate40.errors = vErrors;
  return errors === 0;
}
const schema81 = {
  "maxLength": 32768,
  "type": "string"
};
function validate246(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) > 32768) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 32768
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
  validate246.errors = vErrors;
  return errors === 0;
}
const schema82 = {
  "format": "int64",
  "type": "integer",
  "minimum": 0,
  "nullable": true
};
const formats4 = formats.int64;
function validate248(data, {
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
    if (!formats4.validate(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "int64"
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
  validate248.errors = vErrors;
  return errors === 0;
}
const schema83 = {
  "maxLength": 1024,
  "minLength": 1,
  "pattern": "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
  "type": "string"
};
const pattern4 = new RegExp("^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$", "u");
function validate250(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) > 1024) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 1024
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
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
    if (!pattern4.test(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  } else {
    const err3 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err3];
    } else {
      vErrors.push(err3);
    }
    errors++;
  }
  validate250.errors = vErrors;
  return errors === 0;
}
const schema84 = {
  "enum": ["True", "False", "Unknown"],
  "type": "string"
};
function validate252(data, {
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
  if (!(data === "True" || data === "False" || data === "Unknown")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema84.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate252.errors = vErrors;
  return errors === 0;
}
const schema85 = {
  "maxLength": 316,
  "pattern": "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
  "type": "string"
};
const pattern5 = new RegExp("^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$", "u");
function validate254(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) > 316) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 316
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (!pattern5.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$"
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
  validate254.errors = vErrors;
  return errors === 0;
}
function validate244(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.lastTransitionTime === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "lastTransitionTime"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.message === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "message"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.reason === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "reason"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.status === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "status"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.type === undefined) {
      const err4 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "type"
        }
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.lastTransitionTime !== undefined) {
      if (!validate40(data.lastTransitionTime, {
        instancePath: instancePath + "/lastTransitionTime",
        parentData: data,
        parentDataProperty: "lastTransitionTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate246(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate246.errors : vErrors.concat(validate246.errors);
        errors = vErrors.length;
      }
    }
    if (data.observedGeneration !== undefined) {
      if (!validate248(data.observedGeneration, {
        instancePath: instancePath + "/observedGeneration",
        parentData: data,
        parentDataProperty: "observedGeneration",
        rootData
      })) {
        vErrors = vErrors === null ? validate248.errors : vErrors.concat(validate248.errors);
        errors = vErrors.length;
      }
    }
    if (data.reason !== undefined) {
      if (!validate250(data.reason, {
        instancePath: instancePath + "/reason",
        parentData: data,
        parentDataProperty: "reason",
        rootData
      })) {
        vErrors = vErrors === null ? validate250.errors : vErrors.concat(validate250.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate252(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate252.errors : vErrors.concat(validate252.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate254(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate254.errors : vErrors.concat(validate254.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err5 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err5];
    } else {
      vErrors.push(err5);
    }
    errors++;
  }
  validate244.errors = vErrors;
  return errors === 0;
}
function validate243(data, {
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
      if (!validate244(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate244.errors : vErrors.concat(validate244.errors);
        errors = vErrors.length;
      }
    }
  }
  validate243.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "format": "int64",
  "type": "integer",
  "nullable": true
};
function validate42(data, {
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
  validate42.errors = vErrors;
  return errors === 0;
}
const schema86 = {
  "items": {
    "$ref": "1wsDHbLmj7gyTbzkaE6wMpMZOiWBARBOxcw6VmKqE"
  },
  "type": "array",
  "nullable": true
};
const schema87 = {
  "properties": {
    "apiVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "appVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "chartName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "chartVersion": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "configDigest": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "deleted": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
    "digest": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "firstDeployed": {
      "$ref": "KrhXBWKB1pK8JptMQRXbBg5co4bpZWZnIUkdeEo37wY"
    },
    "lastDeployed": {
      "$ref": "KrhXBWKB1pK8JptMQRXbBg5co4bpZWZnIUkdeEo37wY"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "namespace": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "ociDigest": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "status": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "testHooks": {
      "$ref": "OGIP4UhRQtHufldqtHOjSCV8NYFThkJ97h1RdKqNg"
    },
    "version": {
      "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
    }
  },
  "required": ["chartName", "chartVersion", "configDigest", "digest", "firstDeployed", "lastDeployed", "name", "namespace", "status", "version"],
  "type": "object"
};
const schema18 = {
  "format": "date-time",
  "type": "string",
  "nullable": true
};
function validate41(data, {
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
  validate41.errors = vErrors;
  return errors === 0;
}
const schema88 = {
  "additionalProperties": {
    "$ref": "IMuNf6gw56D8DCHsmZEbRSo0I5CYD1o9SFqc9JPL2E"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema89 = {
  "properties": {
    "lastCompleted": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
    "lastStarted": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
    "phase": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate276(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.lastCompleted !== undefined) {
      if (!validate41(data.lastCompleted, {
        instancePath: instancePath + "/lastCompleted",
        parentData: data,
        parentDataProperty: "lastCompleted",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastStarted !== undefined) {
      if (!validate41(data.lastStarted, {
        instancePath: instancePath + "/lastStarted",
        parentData: data,
        parentDataProperty: "lastStarted",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.phase !== undefined) {
      if (!validate24(data.phase, {
        instancePath: instancePath + "/phase",
        parentData: data,
        parentDataProperty: "phase",
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
      if (!validate276(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
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
const schema90 = {
  "type": "integer"
};
function validate282(data, {
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
  validate282.errors = vErrors;
  return errors === 0;
}
function validate261(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.chartName === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "chartName"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.chartVersion === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "chartVersion"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.configDigest === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "configDigest"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.digest === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "digest"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.firstDeployed === undefined) {
      const err4 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "firstDeployed"
        }
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.lastDeployed === undefined) {
      const err5 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "lastDeployed"
        }
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
    if (data.name === undefined) {
      const err6 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err6];
      } else {
        vErrors.push(err6);
      }
      errors++;
    }
    if (data.namespace === undefined) {
      const err7 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "namespace"
        }
      };
      if (vErrors === null) {
        vErrors = [err7];
      } else {
        vErrors.push(err7);
      }
      errors++;
    }
    if (data.status === undefined) {
      const err8 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "status"
        }
      };
      if (vErrors === null) {
        vErrors = [err8];
      } else {
        vErrors.push(err8);
      }
      errors++;
    }
    if (data.version === undefined) {
      const err9 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "version"
        }
      };
      if (vErrors === null) {
        vErrors = [err9];
      } else {
        vErrors.push(err9);
      }
      errors++;
    }
    if (data.apiVersion !== undefined) {
      if (!validate24(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.appVersion !== undefined) {
      if (!validate24(data.appVersion, {
        instancePath: instancePath + "/appVersion",
        parentData: data,
        parentDataProperty: "appVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.chartName !== undefined) {
      if (!validate22(data.chartName, {
        instancePath: instancePath + "/chartName",
        parentData: data,
        parentDataProperty: "chartName",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.chartVersion !== undefined) {
      if (!validate22(data.chartVersion, {
        instancePath: instancePath + "/chartVersion",
        parentData: data,
        parentDataProperty: "chartVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.configDigest !== undefined) {
      if (!validate22(data.configDigest, {
        instancePath: instancePath + "/configDigest",
        parentData: data,
        parentDataProperty: "configDigest",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.deleted !== undefined) {
      if (!validate41(data.deleted, {
        instancePath: instancePath + "/deleted",
        parentData: data,
        parentDataProperty: "deleted",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.digest !== undefined) {
      if (!validate22(data.digest, {
        instancePath: instancePath + "/digest",
        parentData: data,
        parentDataProperty: "digest",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.firstDeployed !== undefined) {
      if (!validate40(data.firstDeployed, {
        instancePath: instancePath + "/firstDeployed",
        parentData: data,
        parentDataProperty: "firstDeployed",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastDeployed !== undefined) {
      if (!validate40(data.lastDeployed, {
        instancePath: instancePath + "/lastDeployed",
        parentData: data,
        parentDataProperty: "lastDeployed",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
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
    if (data.namespace !== undefined) {
      if (!validate22(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.ociDigest !== undefined) {
      if (!validate24(data.ociDigest, {
        instancePath: instancePath + "/ociDigest",
        parentData: data,
        parentDataProperty: "ociDigest",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate22(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.testHooks !== undefined) {
      if (!validate275(data.testHooks, {
        instancePath: instancePath + "/testHooks",
        parentData: data,
        parentDataProperty: "testHooks",
        rootData
      })) {
        vErrors = vErrors === null ? validate275.errors : vErrors.concat(validate275.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate282(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate282.errors : vErrors.concat(validate282.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err10 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err10];
    } else {
      vErrors.push(err10);
    }
    errors++;
  }
  validate261.errors = vErrors;
  return errors === 0;
}
function validate260(data, {
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
      if (!validate261(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate261.errors : vErrors.concat(validate261.errors);
        errors = vErrors.length;
      }
    }
  }
  validate260.errors = vErrors;
  return errors === 0;
}
function validate242(data, {
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
    if (data.conditions !== undefined) {
      if (!validate243(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate243.errors : vErrors.concat(validate243.errors);
        errors = vErrors.length;
      }
    }
    if (data.failures !== undefined) {
      if (!validate42(data.failures, {
        instancePath: instancePath + "/failures",
        parentData: data,
        parentDataProperty: "failures",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.helmChart !== undefined) {
      if (!validate24(data.helmChart, {
        instancePath: instancePath + "/helmChart",
        parentData: data,
        parentDataProperty: "helmChart",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.history !== undefined) {
      if (!validate260(data.history, {
        instancePath: instancePath + "/history",
        parentData: data,
        parentDataProperty: "history",
        rootData
      })) {
        vErrors = vErrors === null ? validate260.errors : vErrors.concat(validate260.errors);
        errors = vErrors.length;
      }
    }
    if (data.installFailures !== undefined) {
      if (!validate42(data.installFailures, {
        instancePath: instancePath + "/installFailures",
        parentData: data,
        parentDataProperty: "installFailures",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastAppliedRevision !== undefined) {
      if (!validate24(data.lastAppliedRevision, {
        instancePath: instancePath + "/lastAppliedRevision",
        parentData: data,
        parentDataProperty: "lastAppliedRevision",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastAttemptedConfigDigest !== undefined) {
      if (!validate24(data.lastAttemptedConfigDigest, {
        instancePath: instancePath + "/lastAttemptedConfigDigest",
        parentData: data,
        parentDataProperty: "lastAttemptedConfigDigest",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastAttemptedGeneration !== undefined) {
      if (!validate42(data.lastAttemptedGeneration, {
        instancePath: instancePath + "/lastAttemptedGeneration",
        parentData: data,
        parentDataProperty: "lastAttemptedGeneration",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastAttemptedReleaseAction !== undefined) {
      if (!validate24(data.lastAttemptedReleaseAction, {
        instancePath: instancePath + "/lastAttemptedReleaseAction",
        parentData: data,
        parentDataProperty: "lastAttemptedReleaseAction",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastAttemptedRevision !== undefined) {
      if (!validate24(data.lastAttemptedRevision, {
        instancePath: instancePath + "/lastAttemptedRevision",
        parentData: data,
        parentDataProperty: "lastAttemptedRevision",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastAttemptedValuesChecksum !== undefined) {
      if (!validate24(data.lastAttemptedValuesChecksum, {
        instancePath: instancePath + "/lastAttemptedValuesChecksum",
        parentData: data,
        parentDataProperty: "lastAttemptedValuesChecksum",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastHandledForceAt !== undefined) {
      if (!validate24(data.lastHandledForceAt, {
        instancePath: instancePath + "/lastHandledForceAt",
        parentData: data,
        parentDataProperty: "lastHandledForceAt",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastHandledReconcileAt !== undefined) {
      if (!validate24(data.lastHandledReconcileAt, {
        instancePath: instancePath + "/lastHandledReconcileAt",
        parentData: data,
        parentDataProperty: "lastHandledReconcileAt",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastHandledResetAt !== undefined) {
      if (!validate24(data.lastHandledResetAt, {
        instancePath: instancePath + "/lastHandledResetAt",
        parentData: data,
        parentDataProperty: "lastHandledResetAt",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastReleaseRevision !== undefined) {
      if (!validate29(data.lastReleaseRevision, {
        instancePath: instancePath + "/lastReleaseRevision",
        parentData: data,
        parentDataProperty: "lastReleaseRevision",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.observedGeneration !== undefined) {
      if (!validate42(data.observedGeneration, {
        instancePath: instancePath + "/observedGeneration",
        parentData: data,
        parentDataProperty: "observedGeneration",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.observedPostRenderersDigest !== undefined) {
      if (!validate24(data.observedPostRenderersDigest, {
        instancePath: instancePath + "/observedPostRenderersDigest",
        parentData: data,
        parentDataProperty: "observedPostRenderersDigest",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageNamespace !== undefined) {
      if (!validate24(data.storageNamespace, {
        instancePath: instancePath + "/storageNamespace",
        parentData: data,
        parentDataProperty: "storageNamespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.upgradeFailures !== undefined) {
      if (!validate42(data.upgradeFailures, {
        instancePath: instancePath + "/upgradeFailures",
        parentData: data,
        parentDataProperty: "upgradeFailures",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
  }
  validate242.errors = vErrors;
  return errors === 0;
}
function validate43(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="helm.toolkit.fluxcd.io.v2beta1.HelmRelease" */;
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
      if (!validate44(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate46(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate48(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate52(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate242(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate242.errors : vErrors.concat(validate242.errors);
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