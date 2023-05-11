import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "minio.min.io.v1.Tenant";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "minio.min.io/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Tenant"
      ]
    },
    "metadata": {
      "oneOf": [
        {
          "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
        },
        {
          "type": "null"
        }
      ]
    },
    "scheduler": {
      "properties": {
        "name": {
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object",
      "nullable": true
    },
    "spec": {
      "properties": {
        "certConfig": {
          "properties": {
            "commonName": {
              "type": "string",
              "nullable": true
            },
            "dnsNames": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "nullable": true
            },
            "organizationName": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "configuration": {
          "properties": {
            "name": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "credsSecret": {
          "properties": {
            "name": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "env": {
          "items": {
            "properties": {
              "name": {
                "type": "string"
              },
              "value": {
                "type": "string",
                "nullable": true
              },
              "valueFrom": {
                "properties": {
                  "configMapKeyRef": {
                    "properties": {
                      "key": {
                        "type": "string"
                      },
                      "name": {
                        "type": "string",
                        "nullable": true
                      },
                      "optional": {
                        "type": "boolean",
                        "nullable": true
                      }
                    },
                    "required": [
                      "key"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "fieldRef": {
                    "properties": {
                      "apiVersion": {
                        "type": "string",
                        "nullable": true
                      },
                      "fieldPath": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "fieldPath"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "resourceFieldRef": {
                    "properties": {
                      "containerName": {
                        "type": "string",
                        "nullable": true
                      },
                      "divisor": {
                        "oneOf": [
                          {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ],
                            "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "resource": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "resource"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "secretKeyRef": {
                    "properties": {
                      "key": {
                        "type": "string"
                      },
                      "name": {
                        "type": "string",
                        "nullable": true
                      },
                      "optional": {
                        "type": "boolean",
                        "nullable": true
                      }
                    },
                    "required": [
                      "key"
                    ],
                    "type": "object",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              }
            },
            "required": [
              "name"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "exposeServices": {
          "properties": {
            "console": {
              "type": "boolean",
              "nullable": true
            },
            "minio": {
              "type": "boolean",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "externalCaCertSecret": {
          "items": {
            "properties": {
              "name": {
                "type": "string"
              },
              "type": {
                "type": "string",
                "nullable": true
              }
            },
            "required": [
              "name"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "externalCertSecret": {
          "items": {
            "properties": {
              "name": {
                "type": "string"
              },
              "type": {
                "type": "string",
                "nullable": true
              }
            },
            "required": [
              "name"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "externalClientCertSecret": {
          "properties": {
            "name": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "nullable": true
            }
          },
          "required": [
            "name"
          ],
          "type": "object",
          "nullable": true
        },
        "externalClientCertSecrets": {
          "items": {
            "properties": {
              "name": {
                "type": "string"
              },
              "type": {
                "type": "string",
                "nullable": true
              }
            },
            "required": [
              "name"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "image": {
          "type": "string",
          "nullable": true
        },
        "imagePullPolicy": {
          "type": "string",
          "nullable": true
        },
        "imagePullSecret": {
          "properties": {
            "name": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "kes": {
          "properties": {
            "affinity": {
              "properties": {
                "nodeAffinity": {
                  "properties": {
                    "preferredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "preference": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchFields": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              }
                            },
                            "type": "object"
                          },
                          "weight": {
                            "format": "int32",
                            "type": "integer"
                          }
                        },
                        "required": [
                          "preference",
                          "weight"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "requiredDuringSchedulingIgnoredDuringExecution": {
                      "properties": {
                        "nodeSelectorTerms": {
                          "items": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchFields": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              }
                            },
                            "type": "object"
                          },
                          "type": "array"
                        }
                      },
                      "required": [
                        "nodeSelectorTerms"
                      ],
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "podAffinity": {
                  "properties": {
                    "preferredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "podAffinityTerm": {
                            "properties": {
                              "labelSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaceSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaces": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "topologyKey": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "topologyKey"
                            ],
                            "type": "object"
                          },
                          "weight": {
                            "format": "int32",
                            "type": "integer"
                          }
                        },
                        "required": [
                          "podAffinityTerm",
                          "weight"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "requiredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "labelSelector": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchLabels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "namespaceSelector": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchLabels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "namespaces": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "topologyKey": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "topologyKey"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "podAntiAffinity": {
                  "properties": {
                    "preferredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "podAffinityTerm": {
                            "properties": {
                              "labelSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaceSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaces": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "topologyKey": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "topologyKey"
                            ],
                            "type": "object"
                          },
                          "weight": {
                            "format": "int32",
                            "type": "integer"
                          }
                        },
                        "required": [
                          "podAffinityTerm",
                          "weight"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "requiredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "labelSelector": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchLabels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "namespaceSelector": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchLabels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "namespaces": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "topologyKey": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "topologyKey"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "annotations": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "clientCertSecret": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "type": {
                  "type": "string",
                  "nullable": true
                }
              },
              "required": [
                "name"
              ],
              "type": "object",
              "nullable": true
            },
            "env": {
              "items": {
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string",
                    "nullable": true
                  },
                  "valueFrom": {
                    "properties": {
                      "configMapKeyRef": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string",
                            "nullable": true
                          },
                          "optional": {
                            "type": "boolean",
                            "nullable": true
                          }
                        },
                        "required": [
                          "key"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "fieldRef": {
                        "properties": {
                          "apiVersion": {
                            "type": "string",
                            "nullable": true
                          },
                          "fieldPath": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "fieldPath"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "resourceFieldRef": {
                        "properties": {
                          "containerName": {
                            "type": "string",
                            "nullable": true
                          },
                          "divisor": {
                            "oneOf": [
                              {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ],
                                "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "resource": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "resource"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "secretKeyRef": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string",
                            "nullable": true
                          },
                          "optional": {
                            "type": "boolean",
                            "nullable": true
                          }
                        },
                        "required": [
                          "key"
                        ],
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
              },
              "type": "array",
              "nullable": true
            },
            "externalCertSecret": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "type": {
                  "type": "string",
                  "nullable": true
                }
              },
              "required": [
                "name"
              ],
              "type": "object",
              "nullable": true
            },
            "image": {
              "type": "string",
              "nullable": true
            },
            "imagePullPolicy": {
              "type": "string",
              "nullable": true
            },
            "kesSecret": {
              "properties": {
                "name": {
                  "type": "string",
                  "nullable": true
                }
              },
              "type": "object"
            },
            "keyName": {
              "type": "string",
              "nullable": true
            },
            "labels": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "nodeSelector": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "replicas": {
              "format": "int32",
              "type": "integer",
              "nullable": true
            },
            "resources": {
              "properties": {
                "limits": {
                  "additionalProperties": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "string"
                      }
                    ],
                    "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                },
                "requests": {
                  "additionalProperties": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "string"
                      }
                    ],
                    "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "securityContext": {
              "properties": {
                "fsGroup": {
                  "format": "int64",
                  "type": "integer",
                  "nullable": true
                },
                "fsGroupChangePolicy": {
                  "type": "string",
                  "nullable": true
                },
                "runAsGroup": {
                  "format": "int64",
                  "type": "integer",
                  "nullable": true
                },
                "runAsNonRoot": {
                  "type": "boolean",
                  "nullable": true
                },
                "runAsUser": {
                  "format": "int64",
                  "type": "integer",
                  "nullable": true
                },
                "seLinuxOptions": {
                  "properties": {
                    "level": {
                      "type": "string",
                      "nullable": true
                    },
                    "role": {
                      "type": "string",
                      "nullable": true
                    },
                    "type": {
                      "type": "string",
                      "nullable": true
                    },
                    "user": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "seccompProfile": {
                  "properties": {
                    "localhostProfile": {
                      "type": "string",
                      "nullable": true
                    },
                    "type": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "type"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "supplementalGroups": {
                  "items": {
                    "format": "int64",
                    "type": "integer"
                  },
                  "type": "array",
                  "nullable": true
                },
                "sysctls": {
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "name",
                      "value"
                    ],
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "windowsOptions": {
                  "properties": {
                    "gmsaCredentialSpec": {
                      "type": "string",
                      "nullable": true
                    },
                    "gmsaCredentialSpecName": {
                      "type": "string",
                      "nullable": true
                    },
                    "hostProcess": {
                      "type": "boolean",
                      "nullable": true
                    },
                    "runAsUserName": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "serviceAccountName": {
              "type": "string",
              "nullable": true
            },
            "tolerations": {
              "items": {
                "properties": {
                  "effect": {
                    "type": "string",
                    "nullable": true
                  },
                  "key": {
                    "type": "string",
                    "nullable": true
                  },
                  "operator": {
                    "type": "string",
                    "nullable": true
                  },
                  "tolerationSeconds": {
                    "format": "int64",
                    "type": "integer",
                    "nullable": true
                  },
                  "value": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "type": "object"
              },
              "type": "array",
              "nullable": true
            },
            "topologySpreadConstraints": {
              "items": {
                "properties": {
                  "labelSelector": {
                    "properties": {
                      "matchExpressions": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "operator": {
                              "type": "string"
                            },
                            "values": {
                              "items": {
                                "type": "string"
                              },
                              "type": "array",
                              "nullable": true
                            }
                          },
                          "required": [
                            "key",
                            "operator"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "matchLabels": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "matchLabelKeys": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "maxSkew": {
                    "format": "int32",
                    "type": "integer"
                  },
                  "minDomains": {
                    "format": "int32",
                    "type": "integer",
                    "nullable": true
                  },
                  "nodeAffinityPolicy": {
                    "type": "string",
                    "nullable": true
                  },
                  "nodeTaintsPolicy": {
                    "type": "string",
                    "nullable": true
                  },
                  "topologyKey": {
                    "type": "string"
                  },
                  "whenUnsatisfiable": {
                    "type": "string"
                  }
                },
                "required": [
                  "maxSkew",
                  "topologyKey",
                  "whenUnsatisfiable"
                ],
                "type": "object"
              },
              "type": "array",
              "nullable": true
            }
          },
          "required": [
            "kesSecret"
          ],
          "type": "object",
          "nullable": true
        },
        "log": {
          "properties": {
            "affinity": {
              "properties": {
                "nodeAffinity": {
                  "properties": {
                    "preferredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "preference": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchFields": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              }
                            },
                            "type": "object"
                          },
                          "weight": {
                            "format": "int32",
                            "type": "integer"
                          }
                        },
                        "required": [
                          "preference",
                          "weight"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "requiredDuringSchedulingIgnoredDuringExecution": {
                      "properties": {
                        "nodeSelectorTerms": {
                          "items": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchFields": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              }
                            },
                            "type": "object"
                          },
                          "type": "array"
                        }
                      },
                      "required": [
                        "nodeSelectorTerms"
                      ],
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "podAffinity": {
                  "properties": {
                    "preferredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "podAffinityTerm": {
                            "properties": {
                              "labelSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaceSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaces": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "topologyKey": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "topologyKey"
                            ],
                            "type": "object"
                          },
                          "weight": {
                            "format": "int32",
                            "type": "integer"
                          }
                        },
                        "required": [
                          "podAffinityTerm",
                          "weight"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "requiredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "labelSelector": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchLabels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "namespaceSelector": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchLabels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "namespaces": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "topologyKey": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "topologyKey"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "podAntiAffinity": {
                  "properties": {
                    "preferredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "podAffinityTerm": {
                            "properties": {
                              "labelSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaceSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaces": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "topologyKey": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "topologyKey"
                            ],
                            "type": "object"
                          },
                          "weight": {
                            "format": "int32",
                            "type": "integer"
                          }
                        },
                        "required": [
                          "podAffinityTerm",
                          "weight"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "requiredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "labelSelector": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchLabels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "namespaceSelector": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchLabels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "namespaces": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "topologyKey": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "topologyKey"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "annotations": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "audit": {
              "properties": {
                "diskCapacityGB": {
                  "type": "integer",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "db": {
              "properties": {
                "affinity": {
                  "properties": {
                    "nodeAffinity": {
                      "properties": {
                        "preferredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "preference": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchFields": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  }
                                },
                                "type": "object"
                              },
                              "weight": {
                                "format": "int32",
                                "type": "integer"
                              }
                            },
                            "required": [
                              "preference",
                              "weight"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "requiredDuringSchedulingIgnoredDuringExecution": {
                          "properties": {
                            "nodeSelectorTerms": {
                              "items": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchFields": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  }
                                },
                                "type": "object"
                              },
                              "type": "array"
                            }
                          },
                          "required": [
                            "nodeSelectorTerms"
                          ],
                          "type": "object",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "podAffinity": {
                      "properties": {
                        "preferredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "podAffinityTerm": {
                                "properties": {
                                  "labelSelector": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchLabels": {
                                        "additionalProperties": {
                                          "type": "string"
                                        },
                                        "type": "object",
                                        "properties": {},
                                        "nullable": true
                                      }
                                    },
                                    "type": "object",
                                    "nullable": true
                                  },
                                  "namespaceSelector": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchLabels": {
                                        "additionalProperties": {
                                          "type": "string"
                                        },
                                        "type": "object",
                                        "properties": {},
                                        "nullable": true
                                      }
                                    },
                                    "type": "object",
                                    "nullable": true
                                  },
                                  "namespaces": {
                                    "items": {
                                      "type": "string"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "topologyKey": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "topologyKey"
                                ],
                                "type": "object"
                              },
                              "weight": {
                                "format": "int32",
                                "type": "integer"
                              }
                            },
                            "required": [
                              "podAffinityTerm",
                              "weight"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "requiredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "labelSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaceSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaces": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "topologyKey": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "topologyKey"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "podAntiAffinity": {
                      "properties": {
                        "preferredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "podAffinityTerm": {
                                "properties": {
                                  "labelSelector": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchLabels": {
                                        "additionalProperties": {
                                          "type": "string"
                                        },
                                        "type": "object",
                                        "properties": {},
                                        "nullable": true
                                      }
                                    },
                                    "type": "object",
                                    "nullable": true
                                  },
                                  "namespaceSelector": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchLabels": {
                                        "additionalProperties": {
                                          "type": "string"
                                        },
                                        "type": "object",
                                        "properties": {},
                                        "nullable": true
                                      }
                                    },
                                    "type": "object",
                                    "nullable": true
                                  },
                                  "namespaces": {
                                    "items": {
                                      "type": "string"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "topologyKey": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "topologyKey"
                                ],
                                "type": "object"
                              },
                              "weight": {
                                "format": "int32",
                                "type": "integer"
                              }
                            },
                            "required": [
                              "podAffinityTerm",
                              "weight"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "requiredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "labelSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaceSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaces": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "topologyKey": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "topologyKey"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "annotations": {
                  "additionalProperties": {
                    "type": "string"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                },
                "env": {
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string",
                        "nullable": true
                      },
                      "valueFrom": {
                        "properties": {
                          "configMapKeyRef": {
                            "properties": {
                              "key": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string",
                                "nullable": true
                              },
                              "optional": {
                                "type": "boolean",
                                "nullable": true
                              }
                            },
                            "required": [
                              "key"
                            ],
                            "type": "object",
                            "nullable": true
                          },
                          "fieldRef": {
                            "properties": {
                              "apiVersion": {
                                "type": "string",
                                "nullable": true
                              },
                              "fieldPath": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "fieldPath"
                            ],
                            "type": "object",
                            "nullable": true
                          },
                          "resourceFieldRef": {
                            "properties": {
                              "containerName": {
                                "type": "string",
                                "nullable": true
                              },
                              "divisor": {
                                "oneOf": [
                                  {
                                    "anyOf": [
                                      {
                                        "type": "integer"
                                      },
                                      {
                                        "type": "string"
                                      }
                                    ],
                                    "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                                  },
                                  {
                                    "type": "null"
                                  }
                                ]
                              },
                              "resource": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "resource"
                            ],
                            "type": "object",
                            "nullable": true
                          },
                          "secretKeyRef": {
                            "properties": {
                              "key": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string",
                                "nullable": true
                              },
                              "optional": {
                                "type": "boolean",
                                "nullable": true
                              }
                            },
                            "required": [
                              "key"
                            ],
                            "type": "object",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "required": [
                      "name"
                    ],
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "image": {
                  "type": "string",
                  "nullable": true
                },
                "initimage": {
                  "type": "string",
                  "nullable": true
                },
                "labels": {
                  "additionalProperties": {
                    "type": "string"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                },
                "nodeSelector": {
                  "additionalProperties": {
                    "type": "string"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                },
                "resources": {
                  "properties": {
                    "limits": {
                      "additionalProperties": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "string"
                          }
                        ],
                        "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "requests": {
                      "additionalProperties": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "string"
                          }
                        ],
                        "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "securityContext": {
                  "properties": {
                    "fsGroup": {
                      "format": "int64",
                      "type": "integer",
                      "nullable": true
                    },
                    "fsGroupChangePolicy": {
                      "type": "string",
                      "nullable": true
                    },
                    "runAsGroup": {
                      "format": "int64",
                      "type": "integer",
                      "nullable": true
                    },
                    "runAsNonRoot": {
                      "type": "boolean",
                      "nullable": true
                    },
                    "runAsUser": {
                      "format": "int64",
                      "type": "integer",
                      "nullable": true
                    },
                    "seLinuxOptions": {
                      "properties": {
                        "level": {
                          "type": "string",
                          "nullable": true
                        },
                        "role": {
                          "type": "string",
                          "nullable": true
                        },
                        "type": {
                          "type": "string",
                          "nullable": true
                        },
                        "user": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "seccompProfile": {
                      "properties": {
                        "localhostProfile": {
                          "type": "string",
                          "nullable": true
                        },
                        "type": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "type"
                      ],
                      "type": "object",
                      "nullable": true
                    },
                    "supplementalGroups": {
                      "items": {
                        "format": "int64",
                        "type": "integer"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "sysctls": {
                      "items": {
                        "properties": {
                          "name": {
                            "type": "string"
                          },
                          "value": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "name",
                          "value"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "windowsOptions": {
                      "properties": {
                        "gmsaCredentialSpec": {
                          "type": "string",
                          "nullable": true
                        },
                        "gmsaCredentialSpecName": {
                          "type": "string",
                          "nullable": true
                        },
                        "hostProcess": {
                          "type": "boolean",
                          "nullable": true
                        },
                        "runAsUserName": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "serviceAccountName": {
                  "type": "string",
                  "nullable": true
                },
                "tolerations": {
                  "items": {
                    "properties": {
                      "effect": {
                        "type": "string",
                        "nullable": true
                      },
                      "key": {
                        "type": "string",
                        "nullable": true
                      },
                      "operator": {
                        "type": "string",
                        "nullable": true
                      },
                      "tolerationSeconds": {
                        "format": "int64",
                        "type": "integer",
                        "nullable": true
                      },
                      "value": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "topologySpreadConstraints": {
                  "items": {
                    "properties": {
                      "labelSelector": {
                        "properties": {
                          "matchExpressions": {
                            "items": {
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "operator": {
                                  "type": "string"
                                },
                                "values": {
                                  "items": {
                                    "type": "string"
                                  },
                                  "type": "array",
                                  "nullable": true
                                }
                              },
                              "required": [
                                "key",
                                "operator"
                              ],
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "matchLabels": {
                            "additionalProperties": {
                              "type": "string"
                            },
                            "type": "object",
                            "properties": {},
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "matchLabelKeys": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "maxSkew": {
                        "format": "int32",
                        "type": "integer"
                      },
                      "minDomains": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "nodeAffinityPolicy": {
                        "type": "string",
                        "nullable": true
                      },
                      "nodeTaintsPolicy": {
                        "type": "string",
                        "nullable": true
                      },
                      "topologyKey": {
                        "type": "string"
                      },
                      "whenUnsatisfiable": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "maxSkew",
                      "topologyKey",
                      "whenUnsatisfiable"
                    ],
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "volumeClaimTemplate": {
                  "properties": {
                    "apiVersion": {
                      "type": "string",
                      "nullable": true
                    },
                    "kind": {
                      "type": "string",
                      "nullable": true
                    },
                    "metadata": {
                      "properties": {
                        "annotations": {
                          "additionalProperties": {
                            "type": "string"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        },
                        "finalizers": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "labels": {
                          "additionalProperties": {
                            "type": "string"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        },
                        "name": {
                          "type": "string",
                          "nullable": true
                        },
                        "namespace": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "spec": {
                      "properties": {
                        "accessModes": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "dataSource": {
                          "properties": {
                            "apiGroup": {
                              "type": "string",
                              "nullable": true
                            },
                            "kind": {
                              "type": "string"
                            },
                            "name": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "kind",
                            "name"
                          ],
                          "type": "object",
                          "nullable": true
                        },
                        "dataSourceRef": {
                          "properties": {
                            "apiGroup": {
                              "type": "string",
                              "nullable": true
                            },
                            "kind": {
                              "type": "string"
                            },
                            "name": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "kind",
                            "name"
                          ],
                          "type": "object",
                          "nullable": true
                        },
                        "resources": {
                          "properties": {
                            "limits": {
                              "additionalProperties": {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ],
                                "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                              },
                              "type": "object",
                              "properties": {},
                              "nullable": true
                            },
                            "requests": {
                              "additionalProperties": {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ],
                                "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                              },
                              "type": "object",
                              "properties": {},
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        },
                        "selector": {
                          "properties": {
                            "matchExpressions": {
                              "items": {
                                "properties": {
                                  "key": {
                                    "type": "string"
                                  },
                                  "operator": {
                                    "type": "string"
                                  },
                                  "values": {
                                    "items": {
                                      "type": "string"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  }
                                },
                                "required": [
                                  "key",
                                  "operator"
                                ],
                                "type": "object"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "matchLabels": {
                              "additionalProperties": {
                                "type": "string"
                              },
                              "type": "object",
                              "properties": {},
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        },
                        "storageClassName": {
                          "type": "string",
                          "nullable": true
                        },
                        "volumeMode": {
                          "type": "string",
                          "nullable": true
                        },
                        "volumeName": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "status": {
                      "properties": {
                        "accessModes": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "allocatedResources": {
                          "additionalProperties": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ],
                            "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        },
                        "capacity": {
                          "additionalProperties": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ],
                            "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        },
                        "conditions": {
                          "items": {
                            "properties": {
                              "lastProbeTime": {
                                "format": "date-time",
                                "type": "string",
                                "nullable": true
                              },
                              "lastTransitionTime": {
                                "format": "date-time",
                                "type": "string",
                                "nullable": true
                              },
                              "message": {
                                "type": "string",
                                "nullable": true
                              },
                              "reason": {
                                "type": "string",
                                "nullable": true
                              },
                              "status": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "status",
                              "type"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "phase": {
                          "type": "string",
                          "nullable": true
                        },
                        "resizeStatus": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object"
                }
              },
              "required": [
                "volumeClaimTemplate"
              ],
              "type": "object",
              "nullable": true
            },
            "env": {
              "items": {
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string",
                    "nullable": true
                  },
                  "valueFrom": {
                    "properties": {
                      "configMapKeyRef": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string",
                            "nullable": true
                          },
                          "optional": {
                            "type": "boolean",
                            "nullable": true
                          }
                        },
                        "required": [
                          "key"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "fieldRef": {
                        "properties": {
                          "apiVersion": {
                            "type": "string",
                            "nullable": true
                          },
                          "fieldPath": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "fieldPath"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "resourceFieldRef": {
                        "properties": {
                          "containerName": {
                            "type": "string",
                            "nullable": true
                          },
                          "divisor": {
                            "oneOf": [
                              {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ],
                                "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "resource": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "resource"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "secretKeyRef": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string",
                            "nullable": true
                          },
                          "optional": {
                            "type": "boolean",
                            "nullable": true
                          }
                        },
                        "required": [
                          "key"
                        ],
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
              },
              "type": "array",
              "nullable": true
            },
            "image": {
              "type": "string",
              "nullable": true
            },
            "labels": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "nodeSelector": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "resources": {
              "properties": {
                "limits": {
                  "additionalProperties": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "string"
                      }
                    ],
                    "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                },
                "requests": {
                  "additionalProperties": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "string"
                      }
                    ],
                    "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "securityContext": {
              "properties": {
                "fsGroup": {
                  "format": "int64",
                  "type": "integer",
                  "nullable": true
                },
                "fsGroupChangePolicy": {
                  "type": "string",
                  "nullable": true
                },
                "runAsGroup": {
                  "format": "int64",
                  "type": "integer",
                  "nullable": true
                },
                "runAsNonRoot": {
                  "type": "boolean",
                  "nullable": true
                },
                "runAsUser": {
                  "format": "int64",
                  "type": "integer",
                  "nullable": true
                },
                "seLinuxOptions": {
                  "properties": {
                    "level": {
                      "type": "string",
                      "nullable": true
                    },
                    "role": {
                      "type": "string",
                      "nullable": true
                    },
                    "type": {
                      "type": "string",
                      "nullable": true
                    },
                    "user": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "seccompProfile": {
                  "properties": {
                    "localhostProfile": {
                      "type": "string",
                      "nullable": true
                    },
                    "type": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "type"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "supplementalGroups": {
                  "items": {
                    "format": "int64",
                    "type": "integer"
                  },
                  "type": "array",
                  "nullable": true
                },
                "sysctls": {
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "name",
                      "value"
                    ],
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "windowsOptions": {
                  "properties": {
                    "gmsaCredentialSpec": {
                      "type": "string",
                      "nullable": true
                    },
                    "gmsaCredentialSpecName": {
                      "type": "string",
                      "nullable": true
                    },
                    "hostProcess": {
                      "type": "boolean",
                      "nullable": true
                    },
                    "runAsUserName": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "serviceAccountName": {
              "type": "string",
              "nullable": true
            },
            "tolerations": {
              "items": {
                "properties": {
                  "effect": {
                    "type": "string",
                    "nullable": true
                  },
                  "key": {
                    "type": "string",
                    "nullable": true
                  },
                  "operator": {
                    "type": "string",
                    "nullable": true
                  },
                  "tolerationSeconds": {
                    "format": "int64",
                    "type": "integer",
                    "nullable": true
                  },
                  "value": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "type": "object"
              },
              "type": "array",
              "nullable": true
            },
            "topologySpreadConstraints": {
              "items": {
                "properties": {
                  "labelSelector": {
                    "properties": {
                      "matchExpressions": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "operator": {
                              "type": "string"
                            },
                            "values": {
                              "items": {
                                "type": "string"
                              },
                              "type": "array",
                              "nullable": true
                            }
                          },
                          "required": [
                            "key",
                            "operator"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "matchLabels": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "matchLabelKeys": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "maxSkew": {
                    "format": "int32",
                    "type": "integer"
                  },
                  "minDomains": {
                    "format": "int32",
                    "type": "integer",
                    "nullable": true
                  },
                  "nodeAffinityPolicy": {
                    "type": "string",
                    "nullable": true
                  },
                  "nodeTaintsPolicy": {
                    "type": "string",
                    "nullable": true
                  },
                  "topologyKey": {
                    "type": "string"
                  },
                  "whenUnsatisfiable": {
                    "type": "string"
                  }
                },
                "required": [
                  "maxSkew",
                  "topologyKey",
                  "whenUnsatisfiable"
                ],
                "type": "object"
              },
              "type": "array",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "mountPath": {
          "type": "string",
          "nullable": true
        },
        "podManagementPolicy": {
          "type": "string",
          "nullable": true
        },
        "priorityClassName": {
          "type": "string",
          "nullable": true
        },
        "prometheus": {
          "properties": {
            "affinity": {
              "properties": {
                "nodeAffinity": {
                  "properties": {
                    "preferredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "preference": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchFields": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              }
                            },
                            "type": "object"
                          },
                          "weight": {
                            "format": "int32",
                            "type": "integer"
                          }
                        },
                        "required": [
                          "preference",
                          "weight"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "requiredDuringSchedulingIgnoredDuringExecution": {
                      "properties": {
                        "nodeSelectorTerms": {
                          "items": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchFields": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              }
                            },
                            "type": "object"
                          },
                          "type": "array"
                        }
                      },
                      "required": [
                        "nodeSelectorTerms"
                      ],
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "podAffinity": {
                  "properties": {
                    "preferredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "podAffinityTerm": {
                            "properties": {
                              "labelSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaceSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaces": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "topologyKey": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "topologyKey"
                            ],
                            "type": "object"
                          },
                          "weight": {
                            "format": "int32",
                            "type": "integer"
                          }
                        },
                        "required": [
                          "podAffinityTerm",
                          "weight"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "requiredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "labelSelector": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchLabels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "namespaceSelector": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchLabels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "namespaces": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "topologyKey": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "topologyKey"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "podAntiAffinity": {
                  "properties": {
                    "preferredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "podAffinityTerm": {
                            "properties": {
                              "labelSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaceSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaces": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "topologyKey": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "topologyKey"
                            ],
                            "type": "object"
                          },
                          "weight": {
                            "format": "int32",
                            "type": "integer"
                          }
                        },
                        "required": [
                          "podAffinityTerm",
                          "weight"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "requiredDuringSchedulingIgnoredDuringExecution": {
                      "items": {
                        "properties": {
                          "labelSelector": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchLabels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "namespaceSelector": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchLabels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "namespaces": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "topologyKey": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "topologyKey"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "annotations": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "diskCapacityGB": {
              "type": "integer",
              "nullable": true
            },
            "env": {
              "items": {
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string",
                    "nullable": true
                  },
                  "valueFrom": {
                    "properties": {
                      "configMapKeyRef": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string",
                            "nullable": true
                          },
                          "optional": {
                            "type": "boolean",
                            "nullable": true
                          }
                        },
                        "required": [
                          "key"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "fieldRef": {
                        "properties": {
                          "apiVersion": {
                            "type": "string",
                            "nullable": true
                          },
                          "fieldPath": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "fieldPath"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "resourceFieldRef": {
                        "properties": {
                          "containerName": {
                            "type": "string",
                            "nullable": true
                          },
                          "divisor": {
                            "oneOf": [
                              {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ],
                                "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "resource": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "resource"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "secretKeyRef": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string",
                            "nullable": true
                          },
                          "optional": {
                            "type": "boolean",
                            "nullable": true
                          }
                        },
                        "required": [
                          "key"
                        ],
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
              },
              "type": "array",
              "nullable": true
            },
            "image": {
              "type": "string",
              "nullable": true
            },
            "initimage": {
              "type": "string",
              "nullable": true
            },
            "labels": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "nodeSelector": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "resources": {
              "properties": {
                "limits": {
                  "additionalProperties": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "string"
                      }
                    ],
                    "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                },
                "requests": {
                  "additionalProperties": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "string"
                      }
                    ],
                    "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "securityContext": {
              "properties": {
                "fsGroup": {
                  "format": "int64",
                  "type": "integer",
                  "nullable": true
                },
                "fsGroupChangePolicy": {
                  "type": "string",
                  "nullable": true
                },
                "runAsGroup": {
                  "format": "int64",
                  "type": "integer",
                  "nullable": true
                },
                "runAsNonRoot": {
                  "type": "boolean",
                  "nullable": true
                },
                "runAsUser": {
                  "format": "int64",
                  "type": "integer",
                  "nullable": true
                },
                "seLinuxOptions": {
                  "properties": {
                    "level": {
                      "type": "string",
                      "nullable": true
                    },
                    "role": {
                      "type": "string",
                      "nullable": true
                    },
                    "type": {
                      "type": "string",
                      "nullable": true
                    },
                    "user": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "seccompProfile": {
                  "properties": {
                    "localhostProfile": {
                      "type": "string",
                      "nullable": true
                    },
                    "type": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "type"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "supplementalGroups": {
                  "items": {
                    "format": "int64",
                    "type": "integer"
                  },
                  "type": "array",
                  "nullable": true
                },
                "sysctls": {
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "name",
                      "value"
                    ],
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "windowsOptions": {
                  "properties": {
                    "gmsaCredentialSpec": {
                      "type": "string",
                      "nullable": true
                    },
                    "gmsaCredentialSpecName": {
                      "type": "string",
                      "nullable": true
                    },
                    "hostProcess": {
                      "type": "boolean",
                      "nullable": true
                    },
                    "runAsUserName": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "serviceAccountName": {
              "type": "string",
              "nullable": true
            },
            "sidecarimage": {
              "type": "string",
              "nullable": true
            },
            "storageClassName": {
              "type": "string",
              "nullable": true
            },
            "tolerations": {
              "items": {
                "properties": {
                  "effect": {
                    "type": "string",
                    "nullable": true
                  },
                  "key": {
                    "type": "string",
                    "nullable": true
                  },
                  "operator": {
                    "type": "string",
                    "nullable": true
                  },
                  "tolerationSeconds": {
                    "format": "int64",
                    "type": "integer",
                    "nullable": true
                  },
                  "value": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "type": "object"
              },
              "type": "array",
              "nullable": true
            },
            "topologySpreadConstraints": {
              "items": {
                "properties": {
                  "labelSelector": {
                    "properties": {
                      "matchExpressions": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "operator": {
                              "type": "string"
                            },
                            "values": {
                              "items": {
                                "type": "string"
                              },
                              "type": "array",
                              "nullable": true
                            }
                          },
                          "required": [
                            "key",
                            "operator"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "matchLabels": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "matchLabelKeys": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "maxSkew": {
                    "format": "int32",
                    "type": "integer"
                  },
                  "minDomains": {
                    "format": "int32",
                    "type": "integer",
                    "nullable": true
                  },
                  "nodeAffinityPolicy": {
                    "type": "string",
                    "nullable": true
                  },
                  "nodeTaintsPolicy": {
                    "type": "string",
                    "nullable": true
                  },
                  "topologyKey": {
                    "type": "string"
                  },
                  "whenUnsatisfiable": {
                    "type": "string"
                  }
                },
                "required": [
                  "maxSkew",
                  "topologyKey",
                  "whenUnsatisfiable"
                ],
                "type": "object"
              },
              "type": "array",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "requestAutoCert": {
          "type": "boolean",
          "nullable": true
        },
        "s3": {
          "properties": {
            "bucketDNS": {
              "type": "boolean",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "securityContext": {
          "properties": {
            "fsGroup": {
              "format": "int64",
              "type": "integer",
              "nullable": true
            },
            "fsGroupChangePolicy": {
              "type": "string",
              "nullable": true
            },
            "runAsGroup": {
              "format": "int64",
              "type": "integer",
              "nullable": true
            },
            "runAsNonRoot": {
              "type": "boolean",
              "nullable": true
            },
            "runAsUser": {
              "format": "int64",
              "type": "integer",
              "nullable": true
            },
            "seLinuxOptions": {
              "properties": {
                "level": {
                  "type": "string",
                  "nullable": true
                },
                "role": {
                  "type": "string",
                  "nullable": true
                },
                "type": {
                  "type": "string",
                  "nullable": true
                },
                "user": {
                  "type": "string",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "seccompProfile": {
              "properties": {
                "localhostProfile": {
                  "type": "string",
                  "nullable": true
                },
                "type": {
                  "type": "string"
                }
              },
              "required": [
                "type"
              ],
              "type": "object",
              "nullable": true
            },
            "supplementalGroups": {
              "items": {
                "format": "int64",
                "type": "integer"
              },
              "type": "array",
              "nullable": true
            },
            "sysctls": {
              "items": {
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string"
                  }
                },
                "required": [
                  "name",
                  "value"
                ],
                "type": "object"
              },
              "type": "array",
              "nullable": true
            },
            "windowsOptions": {
              "properties": {
                "gmsaCredentialSpec": {
                  "type": "string",
                  "nullable": true
                },
                "gmsaCredentialSpecName": {
                  "type": "string",
                  "nullable": true
                },
                "hostProcess": {
                  "type": "boolean",
                  "nullable": true
                },
                "runAsUserName": {
                  "type": "string",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "serviceAccountName": {
          "type": "string",
          "nullable": true
        },
        "sideCars": {
          "properties": {
            "containers": {
              "items": {
                "properties": {
                  "args": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "command": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "env": {
                    "items": {
                      "properties": {
                        "name": {
                          "type": "string"
                        },
                        "value": {
                          "type": "string",
                          "nullable": true
                        },
                        "valueFrom": {
                          "properties": {
                            "configMapKeyRef": {
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "name": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "optional": {
                                  "type": "boolean",
                                  "nullable": true
                                }
                              },
                              "required": [
                                "key"
                              ],
                              "type": "object",
                              "nullable": true
                            },
                            "fieldRef": {
                              "properties": {
                                "apiVersion": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "fieldPath": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "fieldPath"
                              ],
                              "type": "object",
                              "nullable": true
                            },
                            "resourceFieldRef": {
                              "properties": {
                                "containerName": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "divisor": {
                                  "oneOf": [
                                    {
                                      "anyOf": [
                                        {
                                          "type": "integer"
                                        },
                                        {
                                          "type": "string"
                                        }
                                      ],
                                      "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "resource": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "resource"
                              ],
                              "type": "object",
                              "nullable": true
                            },
                            "secretKeyRef": {
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "name": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "optional": {
                                  "type": "boolean",
                                  "nullable": true
                                }
                              },
                              "required": [
                                "key"
                              ],
                              "type": "object",
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        }
                      },
                      "required": [
                        "name"
                      ],
                      "type": "object"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "envFrom": {
                    "items": {
                      "properties": {
                        "configMapRef": {
                          "properties": {
                            "name": {
                              "type": "string",
                              "nullable": true
                            },
                            "optional": {
                              "type": "boolean",
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        },
                        "prefix": {
                          "type": "string",
                          "nullable": true
                        },
                        "secretRef": {
                          "properties": {
                            "name": {
                              "type": "string",
                              "nullable": true
                            },
                            "optional": {
                              "type": "boolean",
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        }
                      },
                      "type": "object"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "image": {
                    "type": "string",
                    "nullable": true
                  },
                  "imagePullPolicy": {
                    "type": "string",
                    "nullable": true
                  },
                  "lifecycle": {
                    "properties": {
                      "postStart": {
                        "properties": {
                          "exec": {
                            "properties": {
                              "command": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "httpGet": {
                            "properties": {
                              "host": {
                                "type": "string",
                                "nullable": true
                              },
                              "httpHeaders": {
                                "items": {
                                  "properties": {
                                    "name": {
                                      "type": "string"
                                    },
                                    "value": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "name",
                                    "value"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "path": {
                                "type": "string",
                                "nullable": true
                              },
                              "port": {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "scheme": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "required": [
                              "port"
                            ],
                            "type": "object",
                            "nullable": true
                          },
                          "tcpSocket": {
                            "properties": {
                              "host": {
                                "type": "string",
                                "nullable": true
                              },
                              "port": {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              }
                            },
                            "required": [
                              "port"
                            ],
                            "type": "object",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "preStop": {
                        "properties": {
                          "exec": {
                            "properties": {
                              "command": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "httpGet": {
                            "properties": {
                              "host": {
                                "type": "string",
                                "nullable": true
                              },
                              "httpHeaders": {
                                "items": {
                                  "properties": {
                                    "name": {
                                      "type": "string"
                                    },
                                    "value": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "name",
                                    "value"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "path": {
                                "type": "string",
                                "nullable": true
                              },
                              "port": {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "scheme": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "required": [
                              "port"
                            ],
                            "type": "object",
                            "nullable": true
                          },
                          "tcpSocket": {
                            "properties": {
                              "host": {
                                "type": "string",
                                "nullable": true
                              },
                              "port": {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              }
                            },
                            "required": [
                              "port"
                            ],
                            "type": "object",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "livenessProbe": {
                    "properties": {
                      "exec": {
                        "properties": {
                          "command": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "failureThreshold": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "grpc": {
                        "properties": {
                          "port": {
                            "format": "int32",
                            "type": "integer"
                          },
                          "service": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "port"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "httpGet": {
                        "properties": {
                          "host": {
                            "type": "string",
                            "nullable": true
                          },
                          "httpHeaders": {
                            "items": {
                              "properties": {
                                "name": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "name",
                                "value"
                              ],
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "path": {
                            "type": "string",
                            "nullable": true
                          },
                          "port": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ]
                          },
                          "scheme": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "port"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "initialDelaySeconds": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "periodSeconds": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "successThreshold": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "tcpSocket": {
                        "properties": {
                          "host": {
                            "type": "string",
                            "nullable": true
                          },
                          "port": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ]
                          }
                        },
                        "required": [
                          "port"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "terminationGracePeriodSeconds": {
                        "format": "int64",
                        "type": "integer",
                        "nullable": true
                      },
                      "timeoutSeconds": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "name": {
                    "type": "string"
                  },
                  "ports": {
                    "items": {
                      "properties": {
                        "containerPort": {
                          "format": "int32",
                          "type": "integer"
                        },
                        "hostIP": {
                          "type": "string",
                          "nullable": true
                        },
                        "hostPort": {
                          "format": "int32",
                          "type": "integer",
                          "nullable": true
                        },
                        "name": {
                          "type": "string",
                          "nullable": true
                        },
                        "protocol": {
                          "default": "TCP",
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "required": [
                        "containerPort"
                      ],
                      "type": "object"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "readinessProbe": {
                    "properties": {
                      "exec": {
                        "properties": {
                          "command": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "failureThreshold": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "grpc": {
                        "properties": {
                          "port": {
                            "format": "int32",
                            "type": "integer"
                          },
                          "service": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "port"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "httpGet": {
                        "properties": {
                          "host": {
                            "type": "string",
                            "nullable": true
                          },
                          "httpHeaders": {
                            "items": {
                              "properties": {
                                "name": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "name",
                                "value"
                              ],
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "path": {
                            "type": "string",
                            "nullable": true
                          },
                          "port": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ]
                          },
                          "scheme": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "port"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "initialDelaySeconds": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "periodSeconds": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "successThreshold": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "tcpSocket": {
                        "properties": {
                          "host": {
                            "type": "string",
                            "nullable": true
                          },
                          "port": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ]
                          }
                        },
                        "required": [
                          "port"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "terminationGracePeriodSeconds": {
                        "format": "int64",
                        "type": "integer",
                        "nullable": true
                      },
                      "timeoutSeconds": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "resources": {
                    "properties": {
                      "limits": {
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "string"
                            }
                          ],
                          "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "requests": {
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "string"
                            }
                          ],
                          "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "securityContext": {
                    "properties": {
                      "allowPrivilegeEscalation": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "capabilities": {
                        "properties": {
                          "add": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "drop": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "privileged": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "procMount": {
                        "type": "string",
                        "nullable": true
                      },
                      "readOnlyRootFilesystem": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "runAsGroup": {
                        "format": "int64",
                        "type": "integer",
                        "nullable": true
                      },
                      "runAsNonRoot": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "runAsUser": {
                        "format": "int64",
                        "type": "integer",
                        "nullable": true
                      },
                      "seLinuxOptions": {
                        "properties": {
                          "level": {
                            "type": "string",
                            "nullable": true
                          },
                          "role": {
                            "type": "string",
                            "nullable": true
                          },
                          "type": {
                            "type": "string",
                            "nullable": true
                          },
                          "user": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "seccompProfile": {
                        "properties": {
                          "localhostProfile": {
                            "type": "string",
                            "nullable": true
                          },
                          "type": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "type"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "windowsOptions": {
                        "properties": {
                          "gmsaCredentialSpec": {
                            "type": "string",
                            "nullable": true
                          },
                          "gmsaCredentialSpecName": {
                            "type": "string",
                            "nullable": true
                          },
                          "hostProcess": {
                            "type": "boolean",
                            "nullable": true
                          },
                          "runAsUserName": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "startupProbe": {
                    "properties": {
                      "exec": {
                        "properties": {
                          "command": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "failureThreshold": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "grpc": {
                        "properties": {
                          "port": {
                            "format": "int32",
                            "type": "integer"
                          },
                          "service": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "port"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "httpGet": {
                        "properties": {
                          "host": {
                            "type": "string",
                            "nullable": true
                          },
                          "httpHeaders": {
                            "items": {
                              "properties": {
                                "name": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "name",
                                "value"
                              ],
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "path": {
                            "type": "string",
                            "nullable": true
                          },
                          "port": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ]
                          },
                          "scheme": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "port"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "initialDelaySeconds": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "periodSeconds": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "successThreshold": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "tcpSocket": {
                        "properties": {
                          "host": {
                            "type": "string",
                            "nullable": true
                          },
                          "port": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ]
                          }
                        },
                        "required": [
                          "port"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "terminationGracePeriodSeconds": {
                        "format": "int64",
                        "type": "integer",
                        "nullable": true
                      },
                      "timeoutSeconds": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "stdin": {
                    "type": "boolean",
                    "nullable": true
                  },
                  "stdinOnce": {
                    "type": "boolean",
                    "nullable": true
                  },
                  "terminationMessagePath": {
                    "type": "string",
                    "nullable": true
                  },
                  "terminationMessagePolicy": {
                    "type": "string",
                    "nullable": true
                  },
                  "tty": {
                    "type": "boolean",
                    "nullable": true
                  },
                  "volumeDevices": {
                    "items": {
                      "properties": {
                        "devicePath": {
                          "type": "string"
                        },
                        "name": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "devicePath",
                        "name"
                      ],
                      "type": "object"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "volumeMounts": {
                    "items": {
                      "properties": {
                        "mountPath": {
                          "type": "string"
                        },
                        "mountPropagation": {
                          "type": "string",
                          "nullable": true
                        },
                        "name": {
                          "type": "string"
                        },
                        "readOnly": {
                          "type": "boolean",
                          "nullable": true
                        },
                        "subPath": {
                          "type": "string",
                          "nullable": true
                        },
                        "subPathExpr": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "required": [
                        "mountPath",
                        "name"
                      ],
                      "type": "object"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "workingDir": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
              },
              "type": "array"
            },
            "volumeClaimTemplates": {
              "items": {
                "properties": {
                  "apiVersion": {
                    "type": "string",
                    "nullable": true
                  },
                  "kind": {
                    "type": "string",
                    "nullable": true
                  },
                  "metadata": {
                    "properties": {
                      "annotations": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "finalizers": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "labels": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "name": {
                        "type": "string",
                        "nullable": true
                      },
                      "namespace": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "spec": {
                    "properties": {
                      "accessModes": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "dataSource": {
                        "properties": {
                          "apiGroup": {
                            "type": "string",
                            "nullable": true
                          },
                          "kind": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "kind",
                          "name"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "dataSourceRef": {
                        "properties": {
                          "apiGroup": {
                            "type": "string",
                            "nullable": true
                          },
                          "kind": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "kind",
                          "name"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "resources": {
                        "properties": {
                          "limits": {
                            "additionalProperties": {
                              "anyOf": [
                                {
                                  "type": "integer"
                                },
                                {
                                  "type": "string"
                                }
                              ],
                              "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                            },
                            "type": "object",
                            "properties": {},
                            "nullable": true
                          },
                          "requests": {
                            "additionalProperties": {
                              "anyOf": [
                                {
                                  "type": "integer"
                                },
                                {
                                  "type": "string"
                                }
                              ],
                              "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                            },
                            "type": "object",
                            "properties": {},
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "selector": {
                        "properties": {
                          "matchExpressions": {
                            "items": {
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "operator": {
                                  "type": "string"
                                },
                                "values": {
                                  "items": {
                                    "type": "string"
                                  },
                                  "type": "array",
                                  "nullable": true
                                }
                              },
                              "required": [
                                "key",
                                "operator"
                              ],
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "matchLabels": {
                            "additionalProperties": {
                              "type": "string"
                            },
                            "type": "object",
                            "properties": {},
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "storageClassName": {
                        "type": "string",
                        "nullable": true
                      },
                      "volumeMode": {
                        "type": "string",
                        "nullable": true
                      },
                      "volumeName": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "status": {
                    "properties": {
                      "accessModes": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "allocatedResources": {
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "string"
                            }
                          ],
                          "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "capacity": {
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "string"
                            }
                          ],
                          "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "conditions": {
                        "items": {
                          "properties": {
                            "lastProbeTime": {
                              "format": "date-time",
                              "type": "string",
                              "nullable": true
                            },
                            "lastTransitionTime": {
                              "format": "date-time",
                              "type": "string",
                              "nullable": true
                            },
                            "message": {
                              "type": "string",
                              "nullable": true
                            },
                            "reason": {
                              "type": "string",
                              "nullable": true
                            },
                            "status": {
                              "type": "string"
                            },
                            "type": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "status",
                            "type"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "phase": {
                        "type": "string",
                        "nullable": true
                      },
                      "resizeStatus": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  }
                },
                "type": "object"
              },
              "type": "array",
              "nullable": true
            },
            "volumes": {
              "items": {
                "properties": {
                  "awsElasticBlockStore": {
                    "properties": {
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "partition": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "volumeID": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "volumeID"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "azureDisk": {
                    "properties": {
                      "cachingMode": {
                        "type": "string",
                        "nullable": true
                      },
                      "diskName": {
                        "type": "string"
                      },
                      "diskURI": {
                        "type": "string"
                      },
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "kind": {
                        "type": "string",
                        "nullable": true
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      }
                    },
                    "required": [
                      "diskName",
                      "diskURI"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "azureFile": {
                    "properties": {
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "secretName": {
                        "type": "string"
                      },
                      "shareName": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "secretName",
                      "shareName"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "cephfs": {
                    "properties": {
                      "monitors": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "path": {
                        "type": "string",
                        "nullable": true
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "secretFile": {
                        "type": "string",
                        "nullable": true
                      },
                      "secretRef": {
                        "properties": {
                          "name": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "user": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "required": [
                      "monitors"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "cinder": {
                    "properties": {
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "secretRef": {
                        "properties": {
                          "name": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "volumeID": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "volumeID"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "configMap": {
                    "properties": {
                      "defaultMode": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "items": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "mode": {
                              "format": "int32",
                              "type": "integer",
                              "nullable": true
                            },
                            "path": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "key",
                            "path"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "name": {
                        "type": "string",
                        "nullable": true
                      },
                      "optional": {
                        "type": "boolean",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "csi": {
                    "properties": {
                      "driver": {
                        "type": "string"
                      },
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "nodePublishSecretRef": {
                        "properties": {
                          "name": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "volumeAttributes": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "required": [
                      "driver"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "downwardAPI": {
                    "properties": {
                      "defaultMode": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "items": {
                        "items": {
                          "properties": {
                            "fieldRef": {
                              "properties": {
                                "apiVersion": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "fieldPath": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "fieldPath"
                              ],
                              "type": "object",
                              "nullable": true
                            },
                            "mode": {
                              "format": "int32",
                              "type": "integer",
                              "nullable": true
                            },
                            "path": {
                              "type": "string"
                            },
                            "resourceFieldRef": {
                              "properties": {
                                "containerName": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "divisor": {
                                  "oneOf": [
                                    {
                                      "anyOf": [
                                        {
                                          "type": "integer"
                                        },
                                        {
                                          "type": "string"
                                        }
                                      ],
                                      "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "resource": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "resource"
                              ],
                              "type": "object",
                              "nullable": true
                            }
                          },
                          "required": [
                            "path"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "emptyDir": {
                    "properties": {
                      "medium": {
                        "type": "string",
                        "nullable": true
                      },
                      "sizeLimit": {
                        "oneOf": [
                          {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ],
                            "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "ephemeral": {
                    "properties": {
                      "volumeClaimTemplate": {
                        "properties": {
                          "metadata": {
                            "properties": {
                              "annotations": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              },
                              "finalizers": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "labels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              },
                              "name": {
                                "type": "string",
                                "nullable": true
                              },
                              "namespace": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "spec": {
                            "properties": {
                              "accessModes": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "dataSource": {
                                "properties": {
                                  "apiGroup": {
                                    "type": "string",
                                    "nullable": true
                                  },
                                  "kind": {
                                    "type": "string"
                                  },
                                  "name": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "kind",
                                  "name"
                                ],
                                "type": "object",
                                "nullable": true
                              },
                              "dataSourceRef": {
                                "properties": {
                                  "apiGroup": {
                                    "type": "string",
                                    "nullable": true
                                  },
                                  "kind": {
                                    "type": "string"
                                  },
                                  "name": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "kind",
                                  "name"
                                ],
                                "type": "object",
                                "nullable": true
                              },
                              "resources": {
                                "properties": {
                                  "limits": {
                                    "additionalProperties": {
                                      "anyOf": [
                                        {
                                          "type": "integer"
                                        },
                                        {
                                          "type": "string"
                                        }
                                      ],
                                      "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  },
                                  "requests": {
                                    "additionalProperties": {
                                      "anyOf": [
                                        {
                                          "type": "integer"
                                        },
                                        {
                                          "type": "string"
                                        }
                                      ],
                                      "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "selector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "storageClassName": {
                                "type": "string",
                                "nullable": true
                              },
                              "volumeMode": {
                                "type": "string",
                                "nullable": true
                              },
                              "volumeName": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "type": "object"
                          }
                        },
                        "required": [
                          "spec"
                        ],
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "fc": {
                    "properties": {
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "lun": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "targetWWNs": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "wwids": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "flexVolume": {
                    "properties": {
                      "driver": {
                        "type": "string"
                      },
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "options": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "secretRef": {
                        "properties": {
                          "name": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "required": [
                      "driver"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "flocker": {
                    "properties": {
                      "datasetName": {
                        "type": "string",
                        "nullable": true
                      },
                      "datasetUUID": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "gcePersistentDisk": {
                    "properties": {
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "partition": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "pdName": {
                        "type": "string"
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      }
                    },
                    "required": [
                      "pdName"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "gitRepo": {
                    "properties": {
                      "directory": {
                        "type": "string",
                        "nullable": true
                      },
                      "repository": {
                        "type": "string"
                      },
                      "revision": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "required": [
                      "repository"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "glusterfs": {
                    "properties": {
                      "endpoints": {
                        "type": "string"
                      },
                      "path": {
                        "type": "string"
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      }
                    },
                    "required": [
                      "endpoints",
                      "path"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "hostPath": {
                    "properties": {
                      "path": {
                        "type": "string"
                      },
                      "type": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "required": [
                      "path"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "iscsi": {
                    "properties": {
                      "chapAuthDiscovery": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "chapAuthSession": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "initiatorName": {
                        "type": "string",
                        "nullable": true
                      },
                      "iqn": {
                        "type": "string"
                      },
                      "iscsiInterface": {
                        "type": "string",
                        "nullable": true
                      },
                      "lun": {
                        "format": "int32",
                        "type": "integer"
                      },
                      "portals": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "secretRef": {
                        "properties": {
                          "name": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "targetPortal": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "iqn",
                      "lun",
                      "targetPortal"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "name": {
                    "type": "string"
                  },
                  "nfs": {
                    "properties": {
                      "path": {
                        "type": "string"
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "server": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "path",
                      "server"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "persistentVolumeClaim": {
                    "properties": {
                      "claimName": {
                        "type": "string"
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      }
                    },
                    "required": [
                      "claimName"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "photonPersistentDisk": {
                    "properties": {
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "pdID": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "pdID"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "portworxVolume": {
                    "properties": {
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "volumeID": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "volumeID"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "projected": {
                    "properties": {
                      "defaultMode": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "sources": {
                        "items": {
                          "properties": {
                            "configMap": {
                              "properties": {
                                "items": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "mode": {
                                        "format": "int32",
                                        "type": "integer",
                                        "nullable": true
                                      },
                                      "path": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "path"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "name": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "optional": {
                                  "type": "boolean",
                                  "nullable": true
                                }
                              },
                              "type": "object",
                              "nullable": true
                            },
                            "downwardAPI": {
                              "properties": {
                                "items": {
                                  "items": {
                                    "properties": {
                                      "fieldRef": {
                                        "properties": {
                                          "apiVersion": {
                                            "type": "string",
                                            "nullable": true
                                          },
                                          "fieldPath": {
                                            "type": "string"
                                          }
                                        },
                                        "required": [
                                          "fieldPath"
                                        ],
                                        "type": "object",
                                        "nullable": true
                                      },
                                      "mode": {
                                        "format": "int32",
                                        "type": "integer",
                                        "nullable": true
                                      },
                                      "path": {
                                        "type": "string"
                                      },
                                      "resourceFieldRef": {
                                        "properties": {
                                          "containerName": {
                                            "type": "string",
                                            "nullable": true
                                          },
                                          "divisor": {
                                            "oneOf": [
                                              {
                                                "anyOf": [
                                                  {
                                                    "type": "integer"
                                                  },
                                                  {
                                                    "type": "string"
                                                  }
                                                ],
                                                "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                                              },
                                              {
                                                "type": "null"
                                              }
                                            ]
                                          },
                                          "resource": {
                                            "type": "string"
                                          }
                                        },
                                        "required": [
                                          "resource"
                                        ],
                                        "type": "object",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "path"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                }
                              },
                              "type": "object",
                              "nullable": true
                            },
                            "secret": {
                              "properties": {
                                "items": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "mode": {
                                        "format": "int32",
                                        "type": "integer",
                                        "nullable": true
                                      },
                                      "path": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "path"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "name": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "optional": {
                                  "type": "boolean",
                                  "nullable": true
                                }
                              },
                              "type": "object",
                              "nullable": true
                            },
                            "serviceAccountToken": {
                              "properties": {
                                "audience": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "expirationSeconds": {
                                  "format": "int64",
                                  "type": "integer",
                                  "nullable": true
                                },
                                "path": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "path"
                              ],
                              "type": "object",
                              "nullable": true
                            }
                          },
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "quobyte": {
                    "properties": {
                      "group": {
                        "type": "string",
                        "nullable": true
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "registry": {
                        "type": "string"
                      },
                      "tenant": {
                        "type": "string",
                        "nullable": true
                      },
                      "user": {
                        "type": "string",
                        "nullable": true
                      },
                      "volume": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "registry",
                      "volume"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "rbd": {
                    "properties": {
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "image": {
                        "type": "string"
                      },
                      "keyring": {
                        "type": "string",
                        "nullable": true
                      },
                      "monitors": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "pool": {
                        "type": "string",
                        "nullable": true
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "secretRef": {
                        "properties": {
                          "name": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "user": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "required": [
                      "image",
                      "monitors"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "scaleIO": {
                    "properties": {
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "gateway": {
                        "type": "string"
                      },
                      "protectionDomain": {
                        "type": "string",
                        "nullable": true
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "secretRef": {
                        "properties": {
                          "name": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object"
                      },
                      "sslEnabled": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "storageMode": {
                        "type": "string",
                        "nullable": true
                      },
                      "storagePool": {
                        "type": "string",
                        "nullable": true
                      },
                      "system": {
                        "type": "string"
                      },
                      "volumeName": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "required": [
                      "gateway",
                      "secretRef",
                      "system"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "secret": {
                    "properties": {
                      "defaultMode": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "items": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "mode": {
                              "format": "int32",
                              "type": "integer",
                              "nullable": true
                            },
                            "path": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "key",
                            "path"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "optional": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "secretName": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "storageos": {
                    "properties": {
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "readOnly": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "secretRef": {
                        "properties": {
                          "name": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "volumeName": {
                        "type": "string",
                        "nullable": true
                      },
                      "volumeNamespace": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "vsphereVolume": {
                    "properties": {
                      "fsType": {
                        "type": "string",
                        "nullable": true
                      },
                      "storagePolicyID": {
                        "type": "string",
                        "nullable": true
                      },
                      "storagePolicyName": {
                        "type": "string",
                        "nullable": true
                      },
                      "volumePath": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "volumePath"
                    ],
                    "type": "object",
                    "nullable": true
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
              },
              "type": "array",
              "nullable": true
            }
          },
          "required": [
            "containers"
          ],
          "type": "object",
          "nullable": true
        },
        "subPath": {
          "type": "string",
          "nullable": true
        },
        "users": {
          "items": {
            "properties": {
              "name": {
                "type": "string",
                "nullable": true
              }
            },
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "zones": {
          "items": {
            "properties": {
              "affinity": {
                "properties": {
                  "nodeAffinity": {
                    "properties": {
                      "preferredDuringSchedulingIgnoredDuringExecution": {
                        "items": {
                          "properties": {
                            "preference": {
                              "properties": {
                                "matchExpressions": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "matchFields": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                }
                              },
                              "type": "object"
                            },
                            "weight": {
                              "format": "int32",
                              "type": "integer"
                            }
                          },
                          "required": [
                            "preference",
                            "weight"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "requiredDuringSchedulingIgnoredDuringExecution": {
                        "properties": {
                          "nodeSelectorTerms": {
                            "items": {
                              "properties": {
                                "matchExpressions": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "matchFields": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                }
                              },
                              "type": "object"
                            },
                            "type": "array"
                          }
                        },
                        "required": [
                          "nodeSelectorTerms"
                        ],
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "podAffinity": {
                    "properties": {
                      "preferredDuringSchedulingIgnoredDuringExecution": {
                        "items": {
                          "properties": {
                            "podAffinityTerm": {
                              "properties": {
                                "labelSelector": {
                                  "properties": {
                                    "matchExpressions": {
                                      "items": {
                                        "properties": {
                                          "key": {
                                            "type": "string"
                                          },
                                          "operator": {
                                            "type": "string"
                                          },
                                          "values": {
                                            "items": {
                                              "type": "string"
                                            },
                                            "type": "array",
                                            "nullable": true
                                          }
                                        },
                                        "required": [
                                          "key",
                                          "operator"
                                        ],
                                        "type": "object"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    },
                                    "matchLabels": {
                                      "additionalProperties": {
                                        "type": "string"
                                      },
                                      "type": "object",
                                      "properties": {},
                                      "nullable": true
                                    }
                                  },
                                  "type": "object",
                                  "nullable": true
                                },
                                "namespaceSelector": {
                                  "properties": {
                                    "matchExpressions": {
                                      "items": {
                                        "properties": {
                                          "key": {
                                            "type": "string"
                                          },
                                          "operator": {
                                            "type": "string"
                                          },
                                          "values": {
                                            "items": {
                                              "type": "string"
                                            },
                                            "type": "array",
                                            "nullable": true
                                          }
                                        },
                                        "required": [
                                          "key",
                                          "operator"
                                        ],
                                        "type": "object"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    },
                                    "matchLabels": {
                                      "additionalProperties": {
                                        "type": "string"
                                      },
                                      "type": "object",
                                      "properties": {},
                                      "nullable": true
                                    }
                                  },
                                  "type": "object",
                                  "nullable": true
                                },
                                "namespaces": {
                                  "items": {
                                    "type": "string"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "topologyKey": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "topologyKey"
                              ],
                              "type": "object"
                            },
                            "weight": {
                              "format": "int32",
                              "type": "integer"
                            }
                          },
                          "required": [
                            "podAffinityTerm",
                            "weight"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "requiredDuringSchedulingIgnoredDuringExecution": {
                        "items": {
                          "properties": {
                            "labelSelector": {
                              "properties": {
                                "matchExpressions": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "matchLabels": {
                                  "additionalProperties": {
                                    "type": "string"
                                  },
                                  "type": "object",
                                  "properties": {},
                                  "nullable": true
                                }
                              },
                              "type": "object",
                              "nullable": true
                            },
                            "namespaceSelector": {
                              "properties": {
                                "matchExpressions": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "matchLabels": {
                                  "additionalProperties": {
                                    "type": "string"
                                  },
                                  "type": "object",
                                  "properties": {},
                                  "nullable": true
                                }
                              },
                              "type": "object",
                              "nullable": true
                            },
                            "namespaces": {
                              "items": {
                                "type": "string"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "topologyKey": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "topologyKey"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "podAntiAffinity": {
                    "properties": {
                      "preferredDuringSchedulingIgnoredDuringExecution": {
                        "items": {
                          "properties": {
                            "podAffinityTerm": {
                              "properties": {
                                "labelSelector": {
                                  "properties": {
                                    "matchExpressions": {
                                      "items": {
                                        "properties": {
                                          "key": {
                                            "type": "string"
                                          },
                                          "operator": {
                                            "type": "string"
                                          },
                                          "values": {
                                            "items": {
                                              "type": "string"
                                            },
                                            "type": "array",
                                            "nullable": true
                                          }
                                        },
                                        "required": [
                                          "key",
                                          "operator"
                                        ],
                                        "type": "object"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    },
                                    "matchLabels": {
                                      "additionalProperties": {
                                        "type": "string"
                                      },
                                      "type": "object",
                                      "properties": {},
                                      "nullable": true
                                    }
                                  },
                                  "type": "object",
                                  "nullable": true
                                },
                                "namespaceSelector": {
                                  "properties": {
                                    "matchExpressions": {
                                      "items": {
                                        "properties": {
                                          "key": {
                                            "type": "string"
                                          },
                                          "operator": {
                                            "type": "string"
                                          },
                                          "values": {
                                            "items": {
                                              "type": "string"
                                            },
                                            "type": "array",
                                            "nullable": true
                                          }
                                        },
                                        "required": [
                                          "key",
                                          "operator"
                                        ],
                                        "type": "object"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    },
                                    "matchLabels": {
                                      "additionalProperties": {
                                        "type": "string"
                                      },
                                      "type": "object",
                                      "properties": {},
                                      "nullable": true
                                    }
                                  },
                                  "type": "object",
                                  "nullable": true
                                },
                                "namespaces": {
                                  "items": {
                                    "type": "string"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "topologyKey": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "topologyKey"
                              ],
                              "type": "object"
                            },
                            "weight": {
                              "format": "int32",
                              "type": "integer"
                            }
                          },
                          "required": [
                            "podAffinityTerm",
                            "weight"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "requiredDuringSchedulingIgnoredDuringExecution": {
                        "items": {
                          "properties": {
                            "labelSelector": {
                              "properties": {
                                "matchExpressions": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "matchLabels": {
                                  "additionalProperties": {
                                    "type": "string"
                                  },
                                  "type": "object",
                                  "properties": {},
                                  "nullable": true
                                }
                              },
                              "type": "object",
                              "nullable": true
                            },
                            "namespaceSelector": {
                              "properties": {
                                "matchExpressions": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "matchLabels": {
                                  "additionalProperties": {
                                    "type": "string"
                                  },
                                  "type": "object",
                                  "properties": {},
                                  "nullable": true
                                }
                              },
                              "type": "object",
                              "nullable": true
                            },
                            "namespaces": {
                              "items": {
                                "type": "string"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "topologyKey": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "topologyKey"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "annotations": {
                "additionalProperties": {
                  "type": "string"
                },
                "type": "object",
                "properties": {},
                "nullable": true
              },
              "labels": {
                "additionalProperties": {
                  "type": "string"
                },
                "type": "object",
                "properties": {},
                "nullable": true
              },
              "name": {
                "type": "string",
                "nullable": true
              },
              "nodeSelector": {
                "additionalProperties": {
                  "type": "string"
                },
                "type": "object",
                "properties": {},
                "nullable": true
              },
              "resources": {
                "properties": {
                  "limits": {
                    "additionalProperties": {
                      "anyOf": [
                        {
                          "type": "integer"
                        },
                        {
                          "type": "string"
                        }
                      ],
                      "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                    },
                    "type": "object",
                    "properties": {},
                    "nullable": true
                  },
                  "requests": {
                    "additionalProperties": {
                      "anyOf": [
                        {
                          "type": "integer"
                        },
                        {
                          "type": "string"
                        }
                      ],
                      "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                    },
                    "type": "object",
                    "properties": {},
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "securityContext": {
                "properties": {
                  "fsGroup": {
                    "format": "int64",
                    "type": "integer",
                    "nullable": true
                  },
                  "fsGroupChangePolicy": {
                    "type": "string",
                    "nullable": true
                  },
                  "runAsGroup": {
                    "format": "int64",
                    "type": "integer",
                    "nullable": true
                  },
                  "runAsNonRoot": {
                    "type": "boolean",
                    "nullable": true
                  },
                  "runAsUser": {
                    "format": "int64",
                    "type": "integer",
                    "nullable": true
                  },
                  "seLinuxOptions": {
                    "properties": {
                      "level": {
                        "type": "string",
                        "nullable": true
                      },
                      "role": {
                        "type": "string",
                        "nullable": true
                      },
                      "type": {
                        "type": "string",
                        "nullable": true
                      },
                      "user": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "seccompProfile": {
                    "properties": {
                      "localhostProfile": {
                        "type": "string",
                        "nullable": true
                      },
                      "type": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "type"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "supplementalGroups": {
                    "items": {
                      "format": "int64",
                      "type": "integer"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "sysctls": {
                    "items": {
                      "properties": {
                        "name": {
                          "type": "string"
                        },
                        "value": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "name",
                        "value"
                      ],
                      "type": "object"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "windowsOptions": {
                    "properties": {
                      "gmsaCredentialSpec": {
                        "type": "string",
                        "nullable": true
                      },
                      "gmsaCredentialSpecName": {
                        "type": "string",
                        "nullable": true
                      },
                      "hostProcess": {
                        "type": "boolean",
                        "nullable": true
                      },
                      "runAsUserName": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "servers": {
                "format": "int32",
                "type": "integer"
              },
              "tolerations": {
                "items": {
                  "properties": {
                    "effect": {
                      "type": "string",
                      "nullable": true
                    },
                    "key": {
                      "type": "string",
                      "nullable": true
                    },
                    "operator": {
                      "type": "string",
                      "nullable": true
                    },
                    "tolerationSeconds": {
                      "format": "int64",
                      "type": "integer",
                      "nullable": true
                    },
                    "value": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "topologySpreadConstraints": {
                "items": {
                  "properties": {
                    "labelSelector": {
                      "properties": {
                        "matchExpressions": {
                          "items": {
                            "properties": {
                              "key": {
                                "type": "string"
                              },
                              "operator": {
                                "type": "string"
                              },
                              "values": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              }
                            },
                            "required": [
                              "key",
                              "operator"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "matchLabels": {
                          "additionalProperties": {
                            "type": "string"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "matchLabelKeys": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "maxSkew": {
                      "format": "int32",
                      "type": "integer"
                    },
                    "minDomains": {
                      "format": "int32",
                      "type": "integer",
                      "nullable": true
                    },
                    "nodeAffinityPolicy": {
                      "type": "string",
                      "nullable": true
                    },
                    "nodeTaintsPolicy": {
                      "type": "string",
                      "nullable": true
                    },
                    "topologyKey": {
                      "type": "string"
                    },
                    "whenUnsatisfiable": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "maxSkew",
                    "topologyKey",
                    "whenUnsatisfiable"
                  ],
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "volumeClaimTemplate": {
                "properties": {
                  "apiVersion": {
                    "type": "string",
                    "nullable": true
                  },
                  "kind": {
                    "type": "string",
                    "nullable": true
                  },
                  "metadata": {
                    "properties": {
                      "annotations": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "finalizers": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "labels": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "name": {
                        "type": "string",
                        "nullable": true
                      },
                      "namespace": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "spec": {
                    "properties": {
                      "accessModes": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "dataSource": {
                        "properties": {
                          "apiGroup": {
                            "type": "string",
                            "nullable": true
                          },
                          "kind": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "kind",
                          "name"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "dataSourceRef": {
                        "properties": {
                          "apiGroup": {
                            "type": "string",
                            "nullable": true
                          },
                          "kind": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "kind",
                          "name"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "resources": {
                        "properties": {
                          "limits": {
                            "additionalProperties": {
                              "anyOf": [
                                {
                                  "type": "integer"
                                },
                                {
                                  "type": "string"
                                }
                              ],
                              "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                            },
                            "type": "object",
                            "properties": {},
                            "nullable": true
                          },
                          "requests": {
                            "additionalProperties": {
                              "anyOf": [
                                {
                                  "type": "integer"
                                },
                                {
                                  "type": "string"
                                }
                              ],
                              "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                            },
                            "type": "object",
                            "properties": {},
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "selector": {
                        "properties": {
                          "matchExpressions": {
                            "items": {
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "operator": {
                                  "type": "string"
                                },
                                "values": {
                                  "items": {
                                    "type": "string"
                                  },
                                  "type": "array",
                                  "nullable": true
                                }
                              },
                              "required": [
                                "key",
                                "operator"
                              ],
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "matchLabels": {
                            "additionalProperties": {
                              "type": "string"
                            },
                            "type": "object",
                            "properties": {},
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "storageClassName": {
                        "type": "string",
                        "nullable": true
                      },
                      "volumeMode": {
                        "type": "string",
                        "nullable": true
                      },
                      "volumeName": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "status": {
                    "properties": {
                      "accessModes": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "allocatedResources": {
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "string"
                            }
                          ],
                          "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "capacity": {
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "string"
                            }
                          ],
                          "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "conditions": {
                        "items": {
                          "properties": {
                            "lastProbeTime": {
                              "format": "date-time",
                              "type": "string",
                              "nullable": true
                            },
                            "lastTransitionTime": {
                              "format": "date-time",
                              "type": "string",
                              "nullable": true
                            },
                            "message": {
                              "type": "string",
                              "nullable": true
                            },
                            "reason": {
                              "type": "string",
                              "nullable": true
                            },
                            "status": {
                              "type": "string"
                            },
                            "type": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "status",
                            "type"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "phase": {
                        "type": "string",
                        "nullable": true
                      },
                      "resizeStatus": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  }
                },
                "type": "object"
              },
              "volumesPerServer": {
                "format": "int32",
                "type": "integer"
              }
            },
            "required": [
              "servers",
              "volumeClaimTemplate",
              "volumesPerServer"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "required": [
        "zones"
      ],
      "type": "object"
    },
    "status": {
      "properties": {
        "availableReplicas": {
          "format": "int32",
          "type": "integer"
        },
        "certificates": {
          "nullable": true,
          "properties": {
            "autoCertEnabled": {
              "nullable": true,
              "type": "boolean"
            }
          },
          "type": "object"
        },
        "currentState": {
          "type": "string"
        },
        "drivesHealing": {
          "format": "int32",
          "type": "integer",
          "nullable": true
        },
        "drivesOffline": {
          "format": "int32",
          "type": "integer",
          "nullable": true
        },
        "drivesOnline": {
          "format": "int32",
          "type": "integer",
          "nullable": true
        },
        "healthMessage": {
          "type": "string",
          "nullable": true
        },
        "healthStatus": {
          "type": "string",
          "nullable": true
        },
        "pools": {
          "items": {
            "properties": {
              "legacySecurityContext": {
                "type": "boolean",
                "nullable": true
              },
              "ssName": {
                "type": "string"
              },
              "state": {
                "type": "string"
              }
            },
            "required": [
              "ssName",
              "state"
            ],
            "type": "object"
          },
          "nullable": true,
          "type": "array"
        },
        "provisionedBuckets": {
          "type": "boolean",
          "nullable": true
        },
        "provisionedUsers": {
          "type": "boolean",
          "nullable": true
        },
        "revision": {
          "format": "int32",
          "type": "integer"
        },
        "syncVersion": {
          "type": "string"
        },
        "usage": {
          "properties": {
            "capacity": {
              "format": "int64",
              "type": "integer",
              "nullable": true
            },
            "rawCapacity": {
              "format": "int64",
              "type": "integer",
              "nullable": true
            },
            "rawUsage": {
              "format": "int64",
              "type": "integer",
              "nullable": true
            },
            "tiers": {
              "items": {
                "properties": {
                  "Name": {
                    "type": "string"
                  },
                  "Type": {
                    "type": "string",
                    "nullable": true
                  },
                  "totalSize": {
                    "format": "int64",
                    "type": "integer"
                  }
                },
                "required": [
                  "Name",
                  "totalSize"
                ],
                "type": "object"
              },
              "type": "array",
              "nullable": true
            },
            "usage": {
              "format": "int64",
              "type": "integer",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "waitingOnReady": {
          "format": "date-time",
          "type": "string",
          "nullable": true
        },
        "writeQuorum": {
          "format": "int32",
          "type": "integer",
          "nullable": true
        }
      },
      "required": [
        "availableReplicas",
        "certificates",
        "currentState",
        "pools",
        "revision",
        "syncVersion"
      ],
      "type": "object",
      "nullable": true
    }
  },
  "required": [
    "spec",
    "apiVersion",
    "kind"
  ]
};

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


setSchema(Tenant, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
