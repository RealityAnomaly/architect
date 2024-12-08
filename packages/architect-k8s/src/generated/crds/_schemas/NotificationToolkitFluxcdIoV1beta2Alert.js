import { formats } from "@kubernetes-models/validate";
export const validate = validate27;
const schema10 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "6cDiOGdQ6DQjCdUNczfIXMtJaTru8mqEIBBBygrZaao"
    },
    "kind": {
      "$ref": "Q5MyvQt3df0hIBIClPLJRRVXogsODN5yCEmB7ksNp8c"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "WDyKasmpMmkx4nk3dzd0QfNVhvo2Dhh4FLD7qSAmog"
    },
    "status": {
      "$ref": "WvJYtEdy3lHtdGzev5dfoUu4PMT5k2chUbNOUvpI"
    }
  },
  "required": ["apiVersion", "kind"],
  "$id": "notification.toolkit.fluxcd.io.v1beta2.Alert"
};
const schema11 = {
  "type": "string",
  "enum": ["notification.toolkit.fluxcd.io/v1beta2"]
};
function validate28(data, {
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
  if (!(data === "notification.toolkit.fluxcd.io/v1beta2")) {
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
  validate28.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "type": "string",
  "enum": ["Alert"]
};
function validate30(data, {
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
  if (!(data === "Alert")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema12.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate30.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema14 = {};
import { validate as validate33 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate32(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate33(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
      errors = vErrors.length;
    }
  }
  validate32.errors = vErrors;
  return errors === 0;
}
const schema15 = {
  "properties": {
    "eventMetadata": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "eventSeverity": {
      "$ref": "QLhR7yuxR83QcimAutECXAAOZ8hCfFqFhOXy6lurx0"
    },
    "eventSources": {
      "$ref": "6oo2c8xTeufjDx8hlS2EgGQdg9Dqezo2XCp3RFMKb4"
    },
    "exclusionList": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "inclusionList": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "providerRef": {
      "$ref": "HN5PKMIdyNeW2tH5k7qzNtrzheocymAho1Vd1ZpPn9c"
    },
    "summary": {
      "$ref": "HMczettg2K81TqimY3bYfCNCphlyMt79KGLoMRo1Muk"
    },
    "suspend": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["eventSources", "providerRef"],
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
const schema16 = {
  "default": "info",
  "enum": ["info", "error"],
  "type": "string",
  "nullable": true
};
function validate38(data, {
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
  if (!(data === "info" || data === "error")) {
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
  validate38.errors = vErrors;
  return errors === 0;
}
const schema17 = {
  "items": {
    "$ref": "zGClIweTx8wBM68WHLpZ50TpB6HZRhfCmSXzFrc"
  },
  "type": "array"
};
const schema18 = {
  "properties": {
    "apiVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "xM3Malz7xAGgKXqNnBTR4FAEec5Vf8W3YDua0JHJs"
    },
    "matchLabels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "name": {
      "$ref": "wc8rLvKKa0LCucsSNwoL4k5Gk2iIE5D3hgAx1FCgPc"
    },
    "namespace": {
      "$ref": "foLyo6yg7CZnqFYRkmimHdMVIr8QPE3KB3Y6FvSPYig"
    }
  },
  "required": ["kind", "name"],
  "type": "object"
};
const schema9 = {
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
  validate26.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "enum": ["Bucket", "GitRepository", "Kustomization", "HelmRelease", "HelmChart", "HelmRepository", "ImageRepository", "ImagePolicy", "ImageUpdateAutomation", "OCIRepository"],
  "type": "string"
};
function validate43(data, {
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
  if (!(data === "Bucket" || data === "GitRepository" || data === "Kustomization" || data === "HelmRelease" || data === "HelmChart" || data === "HelmRepository" || data === "ImageRepository" || data === "ImagePolicy" || data === "ImageUpdateAutomation" || data === "OCIRepository")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema19.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate43.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  "maxLength": 53,
  "minLength": 1,
  "type": "string"
};
import func2 from "@kubernetes-models/validate/runtime/ucs2length";
function validate46(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) > 53) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 53
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
  validate46.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  "maxLength": 53,
  "minLength": 1,
  "type": "string",
  "nullable": true
};
function validate48(data, {
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
  validate48.errors = vErrors;
  return errors === 0;
}
function validate41(data, {
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
      if (!validate26(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate43(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchLabels !== undefined) {
      if (!validate21(data.matchLabels, {
        instancePath: instancePath + "/matchLabels",
        parentData: data,
        parentDataProperty: "matchLabels",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate46(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate48(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
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
  validate41.errors = vErrors;
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
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate41(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
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
  validate40.errors = vErrors;
  return errors === 0;
}
const schema8 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
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
  validate24.errors = vErrors;
  return errors === 0;
}
const schema22 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name"],
  "type": "object"
};
function validate54(data, {
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
const schema23 = {
  "maxLength": 255,
  "type": "string",
  "nullable": true
};
function validate57(data, {
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
    if (func2(data) > 255) {
      const err1 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 255
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
  validate57.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "type": "boolean",
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
  validate59.errors = vErrors;
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
    if (data.eventSources === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "eventSources"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.providerRef === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "providerRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.eventMetadata !== undefined) {
      if (!validate21(data.eventMetadata, {
        instancePath: instancePath + "/eventMetadata",
        parentData: data,
        parentDataProperty: "eventMetadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.eventSeverity !== undefined) {
      if (!validate38(data.eventSeverity, {
        instancePath: instancePath + "/eventSeverity",
        parentData: data,
        parentDataProperty: "eventSeverity",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.eventSources !== undefined) {
      if (!validate40(data.eventSources, {
        instancePath: instancePath + "/eventSources",
        parentData: data,
        parentDataProperty: "eventSources",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.exclusionList !== undefined) {
      if (!validate24(data.exclusionList, {
        instancePath: instancePath + "/exclusionList",
        parentData: data,
        parentDataProperty: "exclusionList",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.inclusionList !== undefined) {
      if (!validate24(data.inclusionList, {
        instancePath: instancePath + "/inclusionList",
        parentData: data,
        parentDataProperty: "inclusionList",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.providerRef !== undefined) {
      if (!validate54(data.providerRef, {
        instancePath: instancePath + "/providerRef",
        parentData: data,
        parentDataProperty: "providerRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.summary !== undefined) {
      if (!validate57(data.summary, {
        instancePath: instancePath + "/summary",
        parentData: data,
        parentDataProperty: "summary",
        rootData
      })) {
        vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
        errors = vErrors.length;
      }
    }
    if (data.suspend !== undefined) {
      if (!validate59(data.suspend, {
        instancePath: instancePath + "/suspend",
        parentData: data,
        parentDataProperty: "suspend",
        rootData
      })) {
        vErrors = vErrors === null ? validate59.errors : vErrors.concat(validate59.errors);
        errors = vErrors.length;
      }
    }
  }
  validate36.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "default": {
    "observedGeneration": -1
  },
  "properties": {
    "conditions": {
      "$ref": "zBl6OiSXSxQ6tDeBlQ4suXy9oTADY8BgOSRVMsB44"
    },
    "lastHandledReconcileAt": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "observedGeneration": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    }
  },
  "type": "object",
  "nullable": true
};
const schema26 = {
  "items": {
    "$ref": "qF2xzAbTxVDKuLvsNu75Dkz2iJf8KcuXclF0tKipnn0"
  },
  "type": "array",
  "nullable": true
};
const schema27 = {
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
const schema28 = {
  "format": "date-time",
  "type": "string"
};
const formats0 = formats["date-time"];
function validate65(data, {
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
  validate65.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  "maxLength": 32768,
  "type": "string"
};
function validate67(data, {
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
  validate67.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "format": "int64",
  "type": "integer",
  "minimum": 0,
  "nullable": true
};
const formats2 = formats.int64;
function validate69(data, {
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
  validate69.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  "maxLength": 1024,
  "minLength": 1,
  "pattern": "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
  "type": "string"
};
const pattern0 = new RegExp("^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$", "u");
function validate71(data, {
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
    if (!pattern0.test(data)) {
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
  validate71.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  "enum": ["True", "False", "Unknown"],
  "type": "string"
};
function validate73(data, {
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
  validate73.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  "maxLength": 316,
  "pattern": "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
  "type": "string"
};
const pattern1 = new RegExp("^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$", "u");
function validate75(data, {
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
    if (!pattern1.test(data)) {
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
  validate75.errors = vErrors;
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
      if (!validate65(data.lastTransitionTime, {
        instancePath: instancePath + "/lastTransitionTime",
        parentData: data,
        parentDataProperty: "lastTransitionTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate67(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
        errors = vErrors.length;
      }
    }
    if (data.observedGeneration !== undefined) {
      if (!validate69(data.observedGeneration, {
        instancePath: instancePath + "/observedGeneration",
        parentData: data,
        parentDataProperty: "observedGeneration",
        rootData
      })) {
        vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
        errors = vErrors.length;
      }
    }
    if (data.reason !== undefined) {
      if (!validate71(data.reason, {
        instancePath: instancePath + "/reason",
        parentData: data,
        parentDataProperty: "reason",
        rootData
      })) {
        vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate73(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate75(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
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
const schema34 = {
  "format": "int64",
  "type": "integer",
  "nullable": true
};
function validate80(data, {
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
  validate80.errors = vErrors;
  return errors === 0;
}
function validate62(data, {
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
      if (!validate63(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastHandledReconcileAt !== undefined) {
      if (!validate26(data.lastHandledReconcileAt, {
        instancePath: instancePath + "/lastHandledReconcileAt",
        parentData: data,
        parentDataProperty: "lastHandledReconcileAt",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.observedGeneration !== undefined) {
      if (!validate80(data.observedGeneration, {
        instancePath: instancePath + "/observedGeneration",
        parentData: data,
        parentDataProperty: "observedGeneration",
        rootData
      })) {
        vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
        errors = vErrors.length;
      }
    }
  }
  validate62.errors = vErrors;
  return errors === 0;
}
function validate27(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="notification.toolkit.fluxcd.io.v1beta2.Alert" */;
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
      if (!validate28(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate30(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate32(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate36(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate62(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
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
  validate27.errors = vErrors;
  return errors === 0;
}