import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MinioMinIoV1Tenant.js";

export interface ITenant {
  "apiVersion": "minio.min.io/v1";
  "kind": "Tenant";
  "metadata"?: IObjectMeta;
  "scheduler"?: {
    "name": string;
  };
  "spec": {
    "certConfig"?: {
      "commonName"?: string;
      "dnsNames"?: Array<string>;
      "organizationName"?: Array<string>;
    };
    "configuration"?: {
      "name"?: string;
    };
    "credsSecret"?: {
      "name"?: string;
    };
    "env"?: Array<{
      "name": string;
      "value"?: string;
      "valueFrom"?: {
        "configMapKeyRef"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
        "fieldRef"?: {
          "apiVersion"?: string;
          "fieldPath": string;
        };
        "resourceFieldRef"?: {
          "containerName"?: string;
          "divisor"?: number | string;
          "resource": string;
        };
        "secretKeyRef"?: {
          "key": string;
          "name"?: string;
          "optional"?: boolean;
        };
      };
    }>;
    "exposeServices"?: {
      "console"?: boolean;
      "minio"?: boolean;
    };
    "externalCaCertSecret"?: Array<{
      "name": string;
      "type"?: string;
    }>;
    "externalCertSecret"?: Array<{
      "name": string;
      "type"?: string;
    }>;
    "externalClientCertSecret"?: {
      "name": string;
      "type"?: string;
    };
    "externalClientCertSecrets"?: Array<{
      "name": string;
      "type"?: string;
    }>;
    "image"?: string;
    "imagePullPolicy"?: string;
    "imagePullSecret"?: {
      "name"?: string;
    };
    "kes"?: {
      "affinity"?: {
        "nodeAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "preference": {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchFields"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
            };
            "weight": number;
          }>;
          "requiredDuringSchedulingIgnoredDuringExecution"?: {
            "nodeSelectorTerms": Array<{
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchFields"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
            }>;
          };
        };
        "podAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "podAffinityTerm": {
              "labelSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaceSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaces"?: Array<string>;
              "topologyKey": string;
            };
            "weight": number;
          }>;
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "labelSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaceSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
        "podAntiAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "podAffinityTerm": {
              "labelSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaceSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaces"?: Array<string>;
              "topologyKey": string;
            };
            "weight": number;
          }>;
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "labelSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaceSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
      };
      "annotations"?: {
        [key: string]: string;
      };
      "clientCertSecret"?: {
        "name": string;
        "type"?: string;
      };
      "env"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "externalCertSecret"?: {
        "name": string;
        "type"?: string;
      };
      "image"?: string;
      "imagePullPolicy"?: string;
      "kesSecret": {
        "name"?: string;
      };
      "keyName"?: string;
      "labels"?: {
        [key: string]: string;
      };
      "nodeSelector"?: {
        [key: string]: string;
      };
      "replicas"?: number;
      "resources"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "securityContext"?: {
        "fsGroup"?: number;
        "fsGroupChangePolicy"?: string;
        "runAsGroup"?: number;
        "runAsNonRoot"?: boolean;
        "runAsUser"?: number;
        "seLinuxOptions"?: {
          "level"?: string;
          "role"?: string;
          "type"?: string;
          "user"?: string;
        };
        "seccompProfile"?: {
          "localhostProfile"?: string;
          "type": string;
        };
        "supplementalGroups"?: Array<number>;
        "sysctls"?: Array<{
          "name": string;
          "value": string;
        }>;
        "windowsOptions"?: {
          "gmsaCredentialSpec"?: string;
          "gmsaCredentialSpecName"?: string;
          "hostProcess"?: boolean;
          "runAsUserName"?: string;
        };
      };
      "serviceAccountName"?: string;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "topologySpreadConstraints"?: Array<{
        "labelSelector"?: {
          "matchExpressions"?: Array<{
            "key": string;
            "operator": string;
            "values"?: Array<string>;
          }>;
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        "matchLabelKeys"?: Array<string>;
        "maxSkew": number;
        "minDomains"?: number;
        "nodeAffinityPolicy"?: string;
        "nodeTaintsPolicy"?: string;
        "topologyKey": string;
        "whenUnsatisfiable": string;
      }>;
    };
    "log"?: {
      "affinity"?: {
        "nodeAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "preference": {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchFields"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
            };
            "weight": number;
          }>;
          "requiredDuringSchedulingIgnoredDuringExecution"?: {
            "nodeSelectorTerms": Array<{
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchFields"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
            }>;
          };
        };
        "podAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "podAffinityTerm": {
              "labelSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaceSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaces"?: Array<string>;
              "topologyKey": string;
            };
            "weight": number;
          }>;
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "labelSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaceSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
        "podAntiAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "podAffinityTerm": {
              "labelSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaceSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaces"?: Array<string>;
              "topologyKey": string;
            };
            "weight": number;
          }>;
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "labelSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaceSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
      };
      "annotations"?: {
        [key: string]: string;
      };
      "audit"?: {
        "diskCapacityGB"?: number;
      };
      "db"?: {
        "affinity"?: {
          "nodeAffinity"?: {
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              "preference": {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchFields"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
              };
              "weight": number;
            }>;
            "requiredDuringSchedulingIgnoredDuringExecution"?: {
              "nodeSelectorTerms": Array<{
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchFields"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
              }>;
            };
          };
          "podAffinity"?: {
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              "podAffinityTerm": {
                "labelSelector"?: {
                  "matchExpressions"?: Array<{
                    "key": string;
                    "operator": string;
                    "values"?: Array<string>;
                  }>;
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                "namespaceSelector"?: {
                  "matchExpressions"?: Array<{
                    "key": string;
                    "operator": string;
                    "values"?: Array<string>;
                  }>;
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                "namespaces"?: Array<string>;
                "topologyKey": string;
              };
              "weight": number;
            }>;
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              "labelSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaceSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaces"?: Array<string>;
              "topologyKey": string;
            }>;
          };
          "podAntiAffinity"?: {
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              "podAffinityTerm": {
                "labelSelector"?: {
                  "matchExpressions"?: Array<{
                    "key": string;
                    "operator": string;
                    "values"?: Array<string>;
                  }>;
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                "namespaceSelector"?: {
                  "matchExpressions"?: Array<{
                    "key": string;
                    "operator": string;
                    "values"?: Array<string>;
                  }>;
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                "namespaces"?: Array<string>;
                "topologyKey": string;
              };
              "weight": number;
            }>;
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              "labelSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaceSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaces"?: Array<string>;
              "topologyKey": string;
            }>;
          };
        };
        "annotations"?: {
          [key: string]: string;
        };
        "env"?: Array<{
          "name": string;
          "value"?: string;
          "valueFrom"?: {
            "configMapKeyRef"?: {
              "key": string;
              "name"?: string;
              "optional"?: boolean;
            };
            "fieldRef"?: {
              "apiVersion"?: string;
              "fieldPath": string;
            };
            "resourceFieldRef"?: {
              "containerName"?: string;
              "divisor"?: number | string;
              "resource": string;
            };
            "secretKeyRef"?: {
              "key": string;
              "name"?: string;
              "optional"?: boolean;
            };
          };
        }>;
        "image"?: string;
        "initimage"?: string;
        "labels"?: {
          [key: string]: string;
        };
        "nodeSelector"?: {
          [key: string]: string;
        };
        "resources"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
        "securityContext"?: {
          "fsGroup"?: number;
          "fsGroupChangePolicy"?: string;
          "runAsGroup"?: number;
          "runAsNonRoot"?: boolean;
          "runAsUser"?: number;
          "seLinuxOptions"?: {
            "level"?: string;
            "role"?: string;
            "type"?: string;
            "user"?: string;
          };
          "seccompProfile"?: {
            "localhostProfile"?: string;
            "type": string;
          };
          "supplementalGroups"?: Array<number>;
          "sysctls"?: Array<{
            "name": string;
            "value": string;
          }>;
          "windowsOptions"?: {
            "gmsaCredentialSpec"?: string;
            "gmsaCredentialSpecName"?: string;
            "hostProcess"?: boolean;
            "runAsUserName"?: string;
          };
        };
        "serviceAccountName"?: string;
        "tolerations"?: Array<{
          "effect"?: string;
          "key"?: string;
          "operator"?: string;
          "tolerationSeconds"?: number;
          "value"?: string;
        }>;
        "topologySpreadConstraints"?: Array<{
          "labelSelector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "matchLabelKeys"?: Array<string>;
          "maxSkew": number;
          "minDomains"?: number;
          "nodeAffinityPolicy"?: string;
          "nodeTaintsPolicy"?: string;
          "topologyKey": string;
          "whenUnsatisfiable": string;
        }>;
        "volumeClaimTemplate": {
          "apiVersion"?: string;
          "kind"?: string;
          "metadata"?: {
            "annotations"?: {
              [key: string]: string;
            };
            "finalizers"?: Array<string>;
            "labels"?: {
              [key: string]: string;
            };
            "name"?: string;
            "namespace"?: string;
          };
          "spec"?: {
            "accessModes"?: Array<string>;
            "dataSource"?: {
              "apiGroup"?: string;
              "kind": string;
              "name": string;
            };
            "dataSourceRef"?: {
              "apiGroup"?: string;
              "kind": string;
              "name": string;
            };
            "resources"?: {
              "limits"?: {
                [key: string]: number | string;
              };
              "requests"?: {
                [key: string]: number | string;
              };
            };
            "selector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "storageClassName"?: string;
            "volumeMode"?: string;
            "volumeName"?: string;
          };
          "status"?: {
            "accessModes"?: Array<string>;
            "allocatedResources"?: {
              [key: string]: number | string;
            };
            "capacity"?: {
              [key: string]: number | string;
            };
            "conditions"?: Array<{
              "lastProbeTime"?: string;
              "lastTransitionTime"?: string;
              "message"?: string;
              "reason"?: string;
              "status": string;
              "type": string;
            }>;
            "phase"?: string;
            "resizeStatus"?: string;
          };
        };
      };
      "env"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "image"?: string;
      "labels"?: {
        [key: string]: string;
      };
      "nodeSelector"?: {
        [key: string]: string;
      };
      "resources"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "securityContext"?: {
        "fsGroup"?: number;
        "fsGroupChangePolicy"?: string;
        "runAsGroup"?: number;
        "runAsNonRoot"?: boolean;
        "runAsUser"?: number;
        "seLinuxOptions"?: {
          "level"?: string;
          "role"?: string;
          "type"?: string;
          "user"?: string;
        };
        "seccompProfile"?: {
          "localhostProfile"?: string;
          "type": string;
        };
        "supplementalGroups"?: Array<number>;
        "sysctls"?: Array<{
          "name": string;
          "value": string;
        }>;
        "windowsOptions"?: {
          "gmsaCredentialSpec"?: string;
          "gmsaCredentialSpecName"?: string;
          "hostProcess"?: boolean;
          "runAsUserName"?: string;
        };
      };
      "serviceAccountName"?: string;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "topologySpreadConstraints"?: Array<{
        "labelSelector"?: {
          "matchExpressions"?: Array<{
            "key": string;
            "operator": string;
            "values"?: Array<string>;
          }>;
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        "matchLabelKeys"?: Array<string>;
        "maxSkew": number;
        "minDomains"?: number;
        "nodeAffinityPolicy"?: string;
        "nodeTaintsPolicy"?: string;
        "topologyKey": string;
        "whenUnsatisfiable": string;
      }>;
    };
    "mountPath"?: string;
    "podManagementPolicy"?: string;
    "priorityClassName"?: string;
    "prometheus"?: {
      "affinity"?: {
        "nodeAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "preference": {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchFields"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
            };
            "weight": number;
          }>;
          "requiredDuringSchedulingIgnoredDuringExecution"?: {
            "nodeSelectorTerms": Array<{
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchFields"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
            }>;
          };
        };
        "podAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "podAffinityTerm": {
              "labelSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaceSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaces"?: Array<string>;
              "topologyKey": string;
            };
            "weight": number;
          }>;
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "labelSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaceSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
        "podAntiAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "podAffinityTerm": {
              "labelSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaceSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaces"?: Array<string>;
              "topologyKey": string;
            };
            "weight": number;
          }>;
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "labelSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaceSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
      };
      "annotations"?: {
        [key: string]: string;
      };
      "diskCapacityGB"?: number;
      "env"?: Array<{
        "name": string;
        "value"?: string;
        "valueFrom"?: {
          "configMapKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
          "fieldRef"?: {
            "apiVersion"?: string;
            "fieldPath": string;
          };
          "resourceFieldRef"?: {
            "containerName"?: string;
            "divisor"?: number | string;
            "resource": string;
          };
          "secretKeyRef"?: {
            "key": string;
            "name"?: string;
            "optional"?: boolean;
          };
        };
      }>;
      "image"?: string;
      "initimage"?: string;
      "labels"?: {
        [key: string]: string;
      };
      "nodeSelector"?: {
        [key: string]: string;
      };
      "resources"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "securityContext"?: {
        "fsGroup"?: number;
        "fsGroupChangePolicy"?: string;
        "runAsGroup"?: number;
        "runAsNonRoot"?: boolean;
        "runAsUser"?: number;
        "seLinuxOptions"?: {
          "level"?: string;
          "role"?: string;
          "type"?: string;
          "user"?: string;
        };
        "seccompProfile"?: {
          "localhostProfile"?: string;
          "type": string;
        };
        "supplementalGroups"?: Array<number>;
        "sysctls"?: Array<{
          "name": string;
          "value": string;
        }>;
        "windowsOptions"?: {
          "gmsaCredentialSpec"?: string;
          "gmsaCredentialSpecName"?: string;
          "hostProcess"?: boolean;
          "runAsUserName"?: string;
        };
      };
      "serviceAccountName"?: string;
      "sidecarimage"?: string;
      "storageClassName"?: string;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "topologySpreadConstraints"?: Array<{
        "labelSelector"?: {
          "matchExpressions"?: Array<{
            "key": string;
            "operator": string;
            "values"?: Array<string>;
          }>;
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        "matchLabelKeys"?: Array<string>;
        "maxSkew": number;
        "minDomains"?: number;
        "nodeAffinityPolicy"?: string;
        "nodeTaintsPolicy"?: string;
        "topologyKey": string;
        "whenUnsatisfiable": string;
      }>;
    };
    "requestAutoCert"?: boolean;
    "s3"?: {
      "bucketDNS"?: boolean;
    };
    "securityContext"?: {
      "fsGroup"?: number;
      "fsGroupChangePolicy"?: string;
      "runAsGroup"?: number;
      "runAsNonRoot"?: boolean;
      "runAsUser"?: number;
      "seLinuxOptions"?: {
        "level"?: string;
        "role"?: string;
        "type"?: string;
        "user"?: string;
      };
      "seccompProfile"?: {
        "localhostProfile"?: string;
        "type": string;
      };
      "supplementalGroups"?: Array<number>;
      "sysctls"?: Array<{
        "name": string;
        "value": string;
      }>;
      "windowsOptions"?: {
        "gmsaCredentialSpec"?: string;
        "gmsaCredentialSpecName"?: string;
        "hostProcess"?: boolean;
        "runAsUserName"?: string;
      };
    };
    "serviceAccountName"?: string;
    "sideCars"?: {
      "containers": Array<{
        "args"?: Array<string>;
        "command"?: Array<string>;
        "env"?: Array<{
          "name": string;
          "value"?: string;
          "valueFrom"?: {
            "configMapKeyRef"?: {
              "key": string;
              "name"?: string;
              "optional"?: boolean;
            };
            "fieldRef"?: {
              "apiVersion"?: string;
              "fieldPath": string;
            };
            "resourceFieldRef"?: {
              "containerName"?: string;
              "divisor"?: number | string;
              "resource": string;
            };
            "secretKeyRef"?: {
              "key": string;
              "name"?: string;
              "optional"?: boolean;
            };
          };
        }>;
        "envFrom"?: Array<{
          "configMapRef"?: {
            "name"?: string;
            "optional"?: boolean;
          };
          "prefix"?: string;
          "secretRef"?: {
            "name"?: string;
            "optional"?: boolean;
          };
        }>;
        "image"?: string;
        "imagePullPolicy"?: string;
        "lifecycle"?: {
          "postStart"?: {
            "exec"?: {
              "command"?: Array<string>;
            };
            "httpGet"?: {
              "host"?: string;
              "httpHeaders"?: Array<{
                "name": string;
                "value": string;
              }>;
              "path"?: string;
              "port": number | string;
              "scheme"?: string;
            };
            "tcpSocket"?: {
              "host"?: string;
              "port": number | string;
            };
          };
          "preStop"?: {
            "exec"?: {
              "command"?: Array<string>;
            };
            "httpGet"?: {
              "host"?: string;
              "httpHeaders"?: Array<{
                "name": string;
                "value": string;
              }>;
              "path"?: string;
              "port": number | string;
              "scheme"?: string;
            };
            "tcpSocket"?: {
              "host"?: string;
              "port": number | string;
            };
          };
        };
        "livenessProbe"?: {
          "exec"?: {
            "command"?: Array<string>;
          };
          "failureThreshold"?: number;
          "grpc"?: {
            "port": number;
            "service"?: string;
          };
          "httpGet"?: {
            "host"?: string;
            "httpHeaders"?: Array<{
              "name": string;
              "value": string;
            }>;
            "path"?: string;
            "port": number | string;
            "scheme"?: string;
          };
          "initialDelaySeconds"?: number;
          "periodSeconds"?: number;
          "successThreshold"?: number;
          "tcpSocket"?: {
            "host"?: string;
            "port": number | string;
          };
          "terminationGracePeriodSeconds"?: number;
          "timeoutSeconds"?: number;
        };
        "name": string;
        "ports"?: Array<{
          "containerPort": number;
          "hostIP"?: string;
          "hostPort"?: number;
          "name"?: string;
          "protocol"?: string;
        }>;
        "readinessProbe"?: {
          "exec"?: {
            "command"?: Array<string>;
          };
          "failureThreshold"?: number;
          "grpc"?: {
            "port": number;
            "service"?: string;
          };
          "httpGet"?: {
            "host"?: string;
            "httpHeaders"?: Array<{
              "name": string;
              "value": string;
            }>;
            "path"?: string;
            "port": number | string;
            "scheme"?: string;
          };
          "initialDelaySeconds"?: number;
          "periodSeconds"?: number;
          "successThreshold"?: number;
          "tcpSocket"?: {
            "host"?: string;
            "port": number | string;
          };
          "terminationGracePeriodSeconds"?: number;
          "timeoutSeconds"?: number;
        };
        "resources"?: {
          "limits"?: {
            [key: string]: number | string;
          };
          "requests"?: {
            [key: string]: number | string;
          };
        };
        "securityContext"?: {
          "allowPrivilegeEscalation"?: boolean;
          "capabilities"?: {
            "add"?: Array<string>;
            "drop"?: Array<string>;
          };
          "privileged"?: boolean;
          "procMount"?: string;
          "readOnlyRootFilesystem"?: boolean;
          "runAsGroup"?: number;
          "runAsNonRoot"?: boolean;
          "runAsUser"?: number;
          "seLinuxOptions"?: {
            "level"?: string;
            "role"?: string;
            "type"?: string;
            "user"?: string;
          };
          "seccompProfile"?: {
            "localhostProfile"?: string;
            "type": string;
          };
          "windowsOptions"?: {
            "gmsaCredentialSpec"?: string;
            "gmsaCredentialSpecName"?: string;
            "hostProcess"?: boolean;
            "runAsUserName"?: string;
          };
        };
        "startupProbe"?: {
          "exec"?: {
            "command"?: Array<string>;
          };
          "failureThreshold"?: number;
          "grpc"?: {
            "port": number;
            "service"?: string;
          };
          "httpGet"?: {
            "host"?: string;
            "httpHeaders"?: Array<{
              "name": string;
              "value": string;
            }>;
            "path"?: string;
            "port": number | string;
            "scheme"?: string;
          };
          "initialDelaySeconds"?: number;
          "periodSeconds"?: number;
          "successThreshold"?: number;
          "tcpSocket"?: {
            "host"?: string;
            "port": number | string;
          };
          "terminationGracePeriodSeconds"?: number;
          "timeoutSeconds"?: number;
        };
        "stdin"?: boolean;
        "stdinOnce"?: boolean;
        "terminationMessagePath"?: string;
        "terminationMessagePolicy"?: string;
        "tty"?: boolean;
        "volumeDevices"?: Array<{
          "devicePath": string;
          "name": string;
        }>;
        "volumeMounts"?: Array<{
          "mountPath": string;
          "mountPropagation"?: string;
          "name": string;
          "readOnly"?: boolean;
          "subPath"?: string;
          "subPathExpr"?: string;
        }>;
        "workingDir"?: string;
      }>;
      "volumeClaimTemplates"?: Array<{
        "apiVersion"?: string;
        "kind"?: string;
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "finalizers"?: Array<string>;
          "labels"?: {
            [key: string]: string;
          };
          "name"?: string;
          "namespace"?: string;
        };
        "spec"?: {
          "accessModes"?: Array<string>;
          "dataSource"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
          };
          "dataSourceRef"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
          };
          "resources"?: {
            "limits"?: {
              [key: string]: number | string;
            };
            "requests"?: {
              [key: string]: number | string;
            };
          };
          "selector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "storageClassName"?: string;
          "volumeMode"?: string;
          "volumeName"?: string;
        };
        "status"?: {
          "accessModes"?: Array<string>;
          "allocatedResources"?: {
            [key: string]: number | string;
          };
          "capacity"?: {
            [key: string]: number | string;
          };
          "conditions"?: Array<{
            "lastProbeTime"?: string;
            "lastTransitionTime"?: string;
            "message"?: string;
            "reason"?: string;
            "status": string;
            "type": string;
          }>;
          "phase"?: string;
          "resizeStatus"?: string;
        };
      }>;
      "volumes"?: Array<{
        "awsElasticBlockStore"?: {
          "fsType"?: string;
          "partition"?: number;
          "readOnly"?: boolean;
          "volumeID": string;
        };
        "azureDisk"?: {
          "cachingMode"?: string;
          "diskName": string;
          "diskURI": string;
          "fsType"?: string;
          "kind"?: string;
          "readOnly"?: boolean;
        };
        "azureFile"?: {
          "readOnly"?: boolean;
          "secretName": string;
          "shareName": string;
        };
        "cephfs"?: {
          "monitors": Array<string>;
          "path"?: string;
          "readOnly"?: boolean;
          "secretFile"?: string;
          "secretRef"?: {
            "name"?: string;
          };
          "user"?: string;
        };
        "cinder"?: {
          "fsType"?: string;
          "readOnly"?: boolean;
          "secretRef"?: {
            "name"?: string;
          };
          "volumeID": string;
        };
        "configMap"?: {
          "defaultMode"?: number;
          "items"?: Array<{
            "key": string;
            "mode"?: number;
            "path": string;
          }>;
          "name"?: string;
          "optional"?: boolean;
        };
        "csi"?: {
          "driver": string;
          "fsType"?: string;
          "nodePublishSecretRef"?: {
            "name"?: string;
          };
          "readOnly"?: boolean;
          "volumeAttributes"?: {
            [key: string]: string;
          };
        };
        "downwardAPI"?: {
          "defaultMode"?: number;
          "items"?: Array<{
            "fieldRef"?: {
              "apiVersion"?: string;
              "fieldPath": string;
            };
            "mode"?: number;
            "path": string;
            "resourceFieldRef"?: {
              "containerName"?: string;
              "divisor"?: number | string;
              "resource": string;
            };
          }>;
        };
        "emptyDir"?: {
          "medium"?: string;
          "sizeLimit"?: number | string;
        };
        "ephemeral"?: {
          "volumeClaimTemplate"?: {
            "metadata"?: {
              "annotations"?: {
                [key: string]: string;
              };
              "finalizers"?: Array<string>;
              "labels"?: {
                [key: string]: string;
              };
              "name"?: string;
              "namespace"?: string;
            };
            "spec": {
              "accessModes"?: Array<string>;
              "dataSource"?: {
                "apiGroup"?: string;
                "kind": string;
                "name": string;
              };
              "dataSourceRef"?: {
                "apiGroup"?: string;
                "kind": string;
                "name": string;
              };
              "resources"?: {
                "limits"?: {
                  [key: string]: number | string;
                };
                "requests"?: {
                  [key: string]: number | string;
                };
              };
              "selector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "storageClassName"?: string;
              "volumeMode"?: string;
              "volumeName"?: string;
            };
          };
        };
        "fc"?: {
          "fsType"?: string;
          "lun"?: number;
          "readOnly"?: boolean;
          "targetWWNs"?: Array<string>;
          "wwids"?: Array<string>;
        };
        "flexVolume"?: {
          "driver": string;
          "fsType"?: string;
          "options"?: {
            [key: string]: string;
          };
          "readOnly"?: boolean;
          "secretRef"?: {
            "name"?: string;
          };
        };
        "flocker"?: {
          "datasetName"?: string;
          "datasetUUID"?: string;
        };
        "gcePersistentDisk"?: {
          "fsType"?: string;
          "partition"?: number;
          "pdName": string;
          "readOnly"?: boolean;
        };
        "gitRepo"?: {
          "directory"?: string;
          "repository": string;
          "revision"?: string;
        };
        "glusterfs"?: {
          "endpoints": string;
          "path": string;
          "readOnly"?: boolean;
        };
        "hostPath"?: {
          "path": string;
          "type"?: string;
        };
        "iscsi"?: {
          "chapAuthDiscovery"?: boolean;
          "chapAuthSession"?: boolean;
          "fsType"?: string;
          "initiatorName"?: string;
          "iqn": string;
          "iscsiInterface"?: string;
          "lun": number;
          "portals"?: Array<string>;
          "readOnly"?: boolean;
          "secretRef"?: {
            "name"?: string;
          };
          "targetPortal": string;
        };
        "name": string;
        "nfs"?: {
          "path": string;
          "readOnly"?: boolean;
          "server": string;
        };
        "persistentVolumeClaim"?: {
          "claimName": string;
          "readOnly"?: boolean;
        };
        "photonPersistentDisk"?: {
          "fsType"?: string;
          "pdID": string;
        };
        "portworxVolume"?: {
          "fsType"?: string;
          "readOnly"?: boolean;
          "volumeID": string;
        };
        "projected"?: {
          "defaultMode"?: number;
          "sources"?: Array<{
            "configMap"?: {
              "items"?: Array<{
                "key": string;
                "mode"?: number;
                "path": string;
              }>;
              "name"?: string;
              "optional"?: boolean;
            };
            "downwardAPI"?: {
              "items"?: Array<{
                "fieldRef"?: {
                  "apiVersion"?: string;
                  "fieldPath": string;
                };
                "mode"?: number;
                "path": string;
                "resourceFieldRef"?: {
                  "containerName"?: string;
                  "divisor"?: number | string;
                  "resource": string;
                };
              }>;
            };
            "secret"?: {
              "items"?: Array<{
                "key": string;
                "mode"?: number;
                "path": string;
              }>;
              "name"?: string;
              "optional"?: boolean;
            };
            "serviceAccountToken"?: {
              "audience"?: string;
              "expirationSeconds"?: number;
              "path": string;
            };
          }>;
        };
        "quobyte"?: {
          "group"?: string;
          "readOnly"?: boolean;
          "registry": string;
          "tenant"?: string;
          "user"?: string;
          "volume": string;
        };
        "rbd"?: {
          "fsType"?: string;
          "image": string;
          "keyring"?: string;
          "monitors": Array<string>;
          "pool"?: string;
          "readOnly"?: boolean;
          "secretRef"?: {
            "name"?: string;
          };
          "user"?: string;
        };
        "scaleIO"?: {
          "fsType"?: string;
          "gateway": string;
          "protectionDomain"?: string;
          "readOnly"?: boolean;
          "secretRef": {
            "name"?: string;
          };
          "sslEnabled"?: boolean;
          "storageMode"?: string;
          "storagePool"?: string;
          "system": string;
          "volumeName"?: string;
        };
        "secret"?: {
          "defaultMode"?: number;
          "items"?: Array<{
            "key": string;
            "mode"?: number;
            "path": string;
          }>;
          "optional"?: boolean;
          "secretName"?: string;
        };
        "storageos"?: {
          "fsType"?: string;
          "readOnly"?: boolean;
          "secretRef"?: {
            "name"?: string;
          };
          "volumeName"?: string;
          "volumeNamespace"?: string;
        };
        "vsphereVolume"?: {
          "fsType"?: string;
          "storagePolicyID"?: string;
          "storagePolicyName"?: string;
          "volumePath": string;
        };
      }>;
    };
    "subPath"?: string;
    "users"?: Array<{
      "name"?: string;
    }>;
    "zones": Array<{
      "affinity"?: {
        "nodeAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "preference": {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchFields"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
            };
            "weight": number;
          }>;
          "requiredDuringSchedulingIgnoredDuringExecution"?: {
            "nodeSelectorTerms": Array<{
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchFields"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
            }>;
          };
        };
        "podAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "podAffinityTerm": {
              "labelSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaceSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaces"?: Array<string>;
              "topologyKey": string;
            };
            "weight": number;
          }>;
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "labelSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaceSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
        "podAntiAffinity"?: {
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "podAffinityTerm": {
              "labelSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaceSelector"?: {
                "matchExpressions"?: Array<{
                  "key": string;
                  "operator": string;
                  "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              "namespaces"?: Array<string>;
              "topologyKey": string;
            };
            "weight": number;
          }>;
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            "labelSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaceSelector"?: {
              "matchExpressions"?: Array<{
                "key": string;
                "operator": string;
                "values"?: Array<string>;
              }>;
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            "namespaces"?: Array<string>;
            "topologyKey": string;
          }>;
        };
      };
      "annotations"?: {
        [key: string]: string;
      };
      "labels"?: {
        [key: string]: string;
      };
      "name"?: string;
      "nodeSelector"?: {
        [key: string]: string;
      };
      "resources"?: {
        "limits"?: {
          [key: string]: number | string;
        };
        "requests"?: {
          [key: string]: number | string;
        };
      };
      "securityContext"?: {
        "fsGroup"?: number;
        "fsGroupChangePolicy"?: string;
        "runAsGroup"?: number;
        "runAsNonRoot"?: boolean;
        "runAsUser"?: number;
        "seLinuxOptions"?: {
          "level"?: string;
          "role"?: string;
          "type"?: string;
          "user"?: string;
        };
        "seccompProfile"?: {
          "localhostProfile"?: string;
          "type": string;
        };
        "supplementalGroups"?: Array<number>;
        "sysctls"?: Array<{
          "name": string;
          "value": string;
        }>;
        "windowsOptions"?: {
          "gmsaCredentialSpec"?: string;
          "gmsaCredentialSpecName"?: string;
          "hostProcess"?: boolean;
          "runAsUserName"?: string;
        };
      };
      "servers": number;
      "tolerations"?: Array<{
        "effect"?: string;
        "key"?: string;
        "operator"?: string;
        "tolerationSeconds"?: number;
        "value"?: string;
      }>;
      "topologySpreadConstraints"?: Array<{
        "labelSelector"?: {
          "matchExpressions"?: Array<{
            "key": string;
            "operator": string;
            "values"?: Array<string>;
          }>;
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        "matchLabelKeys"?: Array<string>;
        "maxSkew": number;
        "minDomains"?: number;
        "nodeAffinityPolicy"?: string;
        "nodeTaintsPolicy"?: string;
        "topologyKey": string;
        "whenUnsatisfiable": string;
      }>;
      "volumeClaimTemplate": {
        "apiVersion"?: string;
        "kind"?: string;
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "finalizers"?: Array<string>;
          "labels"?: {
            [key: string]: string;
          };
          "name"?: string;
          "namespace"?: string;
        };
        "spec"?: {
          "accessModes"?: Array<string>;
          "dataSource"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
          };
          "dataSourceRef"?: {
            "apiGroup"?: string;
            "kind": string;
            "name": string;
          };
          "resources"?: {
            "limits"?: {
              [key: string]: number | string;
            };
            "requests"?: {
              [key: string]: number | string;
            };
          };
          "selector"?: {
            "matchExpressions"?: Array<{
              "key": string;
              "operator": string;
              "values"?: Array<string>;
            }>;
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          "storageClassName"?: string;
          "volumeMode"?: string;
          "volumeName"?: string;
        };
        "status"?: {
          "accessModes"?: Array<string>;
          "allocatedResources"?: {
            [key: string]: number | string;
          };
          "capacity"?: {
            [key: string]: number | string;
          };
          "conditions"?: Array<{
            "lastProbeTime"?: string;
            "lastTransitionTime"?: string;
            "message"?: string;
            "reason"?: string;
            "status": string;
            "type": string;
          }>;
          "phase"?: string;
          "resizeStatus"?: string;
        };
      };
      "volumesPerServer": number;
    }>;
  };
  "status"?: {
    "availableReplicas": number;
    "certificates": {
      "autoCertEnabled"?: boolean;
    };
    "currentState": string;
    "drivesHealing"?: number;
    "drivesOffline"?: number;
    "drivesOnline"?: number;
    "healthMessage"?: string;
    "healthStatus"?: string;
    "pools": Array<{
      "legacySecurityContext"?: boolean;
      "ssName": string;
      "state": string;
    }>;
    "provisionedBuckets"?: boolean;
    "provisionedUsers"?: boolean;
    "revision": number;
    "syncVersion": string;
    "usage"?: {
      "capacity"?: number;
      "rawCapacity"?: number;
      "rawUsage"?: number;
      "tiers"?: Array<{
        "Name": string;
        "Type"?: string;
        "totalSize": number;
      }>;
      "usage"?: number;
    };
    "waitingOnReady"?: string;
    "writeQuorum"?: number;
  };
}

export class Tenant extends Model<ITenant> implements ITenant {
  "apiVersion": ITenant["apiVersion"];
  "kind": ITenant["kind"];
  "metadata"?: ITenant["metadata"];
  "scheduler"?: ITenant["scheduler"];
  "spec": ITenant["spec"];
  "status"?: ITenant["status"];

static apiVersion: ITenant["apiVersion"] = "minio.min.io/v1";
static kind: ITenant["kind"] = "Tenant";
static is = createTypeMetaGuard<ITenant>(Tenant);

constructor(data?: ModelData<ITenant>) {
  super({
    apiVersion: Tenant.apiVersion,
    kind: Tenant.kind,
    ...data
  } as ITenant);
}
}


setValidateFunc(Tenant, validate as ValidateFunc<ITenant>);
