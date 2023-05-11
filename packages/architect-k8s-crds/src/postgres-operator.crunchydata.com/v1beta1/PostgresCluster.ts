import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "postgres-operator.crunchydata.com.v1beta1.PostgresCluster";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "postgres-operator.crunchydata.com/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "PostgresCluster"
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
    "spec": {
      "properties": {
        "backups": {
          "properties": {
            "pgbackrest": {
              "properties": {
                "configuration": {
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
                },
                "global": {
                  "additionalProperties": {
                    "type": "string"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                },
                "image": {
                  "type": "string",
                  "nullable": true
                },
                "jobs": {
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
                    "priorityClassName": {
                      "type": "string",
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
                    "ttlSecondsAfterFinished": {
                      "format": "int32",
                      "type": "integer",
                      "minimum": 60,
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "manual": {
                  "properties": {
                    "options": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "repoName": {
                      "type": "string",
                      "pattern": "^repo[1-4]"
                    }
                  },
                  "required": [
                    "repoName"
                  ],
                  "type": "object",
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
                    "labels": {
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
                "repoHost": {
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
                    "priorityClassName": {
                      "type": "string",
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
                    "sshConfigMap": {
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
                    "sshSecret": {
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
                          "maxSkew": {
                            "format": "int32",
                            "type": "integer"
                          },
                          "minDomains": {
                            "format": "int32",
                            "type": "integer",
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
                "repos": {
                  "items": {
                    "properties": {
                      "azure": {
                        "properties": {
                          "container": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "container"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "gcs": {
                        "properties": {
                          "bucket": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "bucket"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "name": {
                        "type": "string",
                        "pattern": "^repo[1-4]"
                      },
                      "s3": {
                        "properties": {
                          "bucket": {
                            "type": "string"
                          },
                          "endpoint": {
                            "type": "string"
                          },
                          "region": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "bucket",
                          "endpoint",
                          "region"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "schedules": {
                        "properties": {
                          "differential": {
                            "minLength": 6,
                            "type": "string",
                            "nullable": true
                          },
                          "full": {
                            "minLength": 6,
                            "type": "string",
                            "nullable": true
                          },
                          "incremental": {
                            "minLength": 6,
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "volume": {
                        "properties": {
                          "volumeClaimSpec": {
                            "properties": {
                              "accessModes": {
                                "items": {
                                  "type": "string"
                                },
                                "minItems": 1,
                                "type": "array"
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
                                    "required": [
                                      "storage"
                                    ],
                                    "type": "object",
                                    "properties": {}
                                  }
                                },
                                "required": [
                                  "requests"
                                ],
                                "type": "object"
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
                            "required": [
                              "accessModes",
                              "resources"
                            ],
                            "type": "object"
                          }
                        },
                        "required": [
                          "volumeClaimSpec"
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
                  "minItems": 1,
                  "type": "array"
                },
                "restore": {
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
                    "clusterName": {
                      "type": "string",
                      "nullable": true
                    },
                    "clusterNamespace": {
                      "type": "string",
                      "nullable": true
                    },
                    "enabled": {
                      "default": false,
                      "type": "boolean"
                    },
                    "options": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "priorityClassName": {
                      "type": "string",
                      "nullable": true
                    },
                    "repoName": {
                      "type": "string",
                      "pattern": "^repo[1-4]"
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
                    }
                  },
                  "required": [
                    "enabled",
                    "repoName"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "sidecars": {
                  "properties": {
                    "pgbackrest": {
                      "properties": {
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
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "pgbackrestConfig": {
                      "properties": {
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
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                }
              },
              "required": [
                "repos"
              ],
              "type": "object"
            }
          },
          "required": [
            "pgbackrest"
          ],
          "type": "object"
        },
        "config": {
          "properties": {
            "files": {
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
        "customReplicationTLSSecret": {
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
        "customTLSSecret": {
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
        "dataSource": {
          "properties": {
            "pgbackrest": {
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
                "configuration": {
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
                },
                "global": {
                  "additionalProperties": {
                    "type": "string"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                },
                "options": {
                  "items": {
                    "type": "string"
                  },
                  "type": "array",
                  "nullable": true
                },
                "priorityClassName": {
                  "type": "string",
                  "nullable": true
                },
                "repo": {
                  "properties": {
                    "azure": {
                      "properties": {
                        "container": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "container"
                      ],
                      "type": "object",
                      "nullable": true
                    },
                    "gcs": {
                      "properties": {
                        "bucket": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "bucket"
                      ],
                      "type": "object",
                      "nullable": true
                    },
                    "name": {
                      "type": "string",
                      "pattern": "^repo[1-4]"
                    },
                    "s3": {
                      "properties": {
                        "bucket": {
                          "type": "string"
                        },
                        "endpoint": {
                          "type": "string"
                        },
                        "region": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "bucket",
                        "endpoint",
                        "region"
                      ],
                      "type": "object",
                      "nullable": true
                    },
                    "schedules": {
                      "properties": {
                        "differential": {
                          "minLength": 6,
                          "type": "string",
                          "nullable": true
                        },
                        "full": {
                          "minLength": 6,
                          "type": "string",
                          "nullable": true
                        },
                        "incremental": {
                          "minLength": 6,
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "volume": {
                      "properties": {
                        "volumeClaimSpec": {
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
                        "volumeClaimSpec"
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
                "stanza": {
                  "default": "db",
                  "type": "string"
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
                }
              },
              "required": [
                "repo",
                "stanza"
              ],
              "type": "object",
              "nullable": true
            },
            "postgresCluster": {
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
                "clusterName": {
                  "type": "string",
                  "nullable": true
                },
                "clusterNamespace": {
                  "type": "string",
                  "nullable": true
                },
                "options": {
                  "items": {
                    "type": "string"
                  },
                  "type": "array",
                  "nullable": true
                },
                "priorityClassName": {
                  "type": "string",
                  "nullable": true
                },
                "repoName": {
                  "type": "string",
                  "pattern": "^repo[1-4]"
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
                }
              },
              "required": [
                "repoName"
              ],
              "type": "object",
              "nullable": true
            },
            "volumes": {
              "properties": {
                "pgBackRestVolume": {
                  "properties": {
                    "directory": {
                      "type": "string",
                      "nullable": true
                    },
                    "pvcName": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "pvcName"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "pgDataVolume": {
                  "properties": {
                    "directory": {
                      "type": "string",
                      "nullable": true
                    },
                    "pvcName": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "pvcName"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "pgWALVolume": {
                  "properties": {
                    "directory": {
                      "type": "string",
                      "nullable": true
                    },
                    "pvcName": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "pvcName"
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
        "databaseInitSQL": {
          "properties": {
            "key": {
              "type": "string"
            },
            "name": {
              "type": "string"
            }
          },
          "required": [
            "key",
            "name"
          ],
          "type": "object",
          "nullable": true
        },
        "disableDefaultPodScheduling": {
          "type": "boolean",
          "nullable": true
        },
        "image": {
          "type": "string",
          "nullable": true
        },
        "imagePullPolicy": {
          "enum": [
            "Always",
            "Never",
            "IfNotPresent"
          ],
          "type": "string",
          "nullable": true
        },
        "imagePullSecrets": {
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
        "instances": {
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
                "type": "array",
                "nullable": true
              },
              "dataVolumeClaimSpec": {
                "properties": {
                  "accessModes": {
                    "items": {
                      "type": "string"
                    },
                    "minItems": 1,
                    "type": "array"
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
                        "required": [
                          "storage"
                        ],
                        "type": "object",
                        "properties": {}
                      }
                    },
                    "required": [
                      "requests"
                    ],
                    "type": "object"
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
                "required": [
                  "accessModes",
                  "resources"
                ],
                "type": "object"
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
                  "labels": {
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
              "minAvailable": {
                "oneOf": [
                  {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "name": {
                "default": "",
                "type": "string",
                "pattern": "^([a-z0-9]([-a-z0-9]*[a-z0-9])?)?$",
                "nullable": true
              },
              "priorityClassName": {
                "type": "string",
                "nullable": true
              },
              "replicas": {
                "default": 1,
                "format": "int32",
                "type": "integer",
                "minimum": 1,
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
              "sidecars": {
                "properties": {
                  "replicaCertCopy": {
                    "properties": {
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
                      }
                    },
                    "type": "object",
                    "nullable": true
                  }
                },
                "type": "object",
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
                    "maxSkew": {
                      "format": "int32",
                      "type": "integer"
                    },
                    "minDomains": {
                      "format": "int32",
                      "type": "integer",
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
              "walVolumeClaimSpec": {
                "properties": {
                  "accessModes": {
                    "items": {
                      "type": "string"
                    },
                    "minItems": 1,
                    "type": "array"
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
                        "required": [
                          "storage"
                        ],
                        "type": "object",
                        "properties": {}
                      }
                    },
                    "required": [
                      "requests"
                    ],
                    "type": "object"
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
                "required": [
                  "accessModes",
                  "resources"
                ],
                "type": "object",
                "nullable": true
              }
            },
            "required": [
              "dataVolumeClaimSpec"
            ],
            "type": "object"
          },
          "minItems": 1,
          "type": "array"
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
            "labels": {
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
        "monitoring": {
          "properties": {
            "pgmonitor": {
              "properties": {
                "exporter": {
                  "properties": {
                    "configuration": {
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
                    },
                    "customTLSSecret": {
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
                    "image": {
                      "type": "string",
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
                    }
                  },
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
        "openshift": {
          "type": "boolean",
          "nullable": true
        },
        "patroni": {
          "properties": {
            "dynamicConfiguration": {
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "leaderLeaseDurationSeconds": {
              "default": 30,
              "format": "int32",
              "type": "integer",
              "minimum": 3,
              "nullable": true
            },
            "port": {
              "default": 8008,
              "format": "int32",
              "type": "integer",
              "minimum": 1024,
              "nullable": true
            },
            "switchover": {
              "properties": {
                "enabled": {
                  "type": "boolean"
                },
                "targetInstance": {
                  "type": "string",
                  "nullable": true
                },
                "type": {
                  "default": "Switchover",
                  "enum": [
                    "Switchover",
                    "Failover"
                  ],
                  "type": "string",
                  "nullable": true
                }
              },
              "required": [
                "enabled"
              ],
              "type": "object",
              "nullable": true
            },
            "syncPeriodSeconds": {
              "default": 10,
              "format": "int32",
              "type": "integer",
              "minimum": 1,
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "paused": {
          "type": "boolean",
          "nullable": true
        },
        "port": {
          "default": 5432,
          "format": "int32",
          "type": "integer",
          "minimum": 1024,
          "nullable": true
        },
        "postGISVersion": {
          "type": "string",
          "nullable": true
        },
        "postgresVersion": {
          "type": "integer",
          "minimum": 10,
          "maximum": 15
        },
        "proxy": {
          "properties": {
            "pgBouncer": {
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
                "config": {
                  "properties": {
                    "databases": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "files": {
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
                    },
                    "global": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "users": {
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
                  "type": "array",
                  "nullable": true
                },
                "customTLSSecret": {
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
                "image": {
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
                    "labels": {
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
                "minAvailable": {
                  "oneOf": [
                    {
                      "anyOf": [
                        {
                          "type": "integer"
                        },
                        {
                          "type": "string"
                        }
                      ]
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "port": {
                  "default": 5432,
                  "format": "int32",
                  "type": "integer",
                  "minimum": 1024,
                  "nullable": true
                },
                "priorityClassName": {
                  "type": "string",
                  "nullable": true
                },
                "replicas": {
                  "default": 1,
                  "format": "int32",
                  "type": "integer",
                  "minimum": 0,
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
                "service": {
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
                        "labels": {
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
                    "nodePort": {
                      "format": "int32",
                      "type": "integer",
                      "nullable": true
                    },
                    "type": {
                      "default": "ClusterIP",
                      "enum": [
                        "ClusterIP",
                        "NodePort",
                        "LoadBalancer"
                      ],
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "sidecars": {
                  "properties": {
                    "pgbouncerConfig": {
                      "properties": {
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
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
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
                      "maxSkew": {
                        "format": "int32",
                        "type": "integer"
                      },
                      "minDomains": {
                        "format": "int32",
                        "type": "integer",
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
              "type": "object"
            }
          },
          "required": [
            "pgBouncer"
          ],
          "type": "object",
          "nullable": true
        },
        "service": {
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
                "labels": {
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
            "nodePort": {
              "format": "int32",
              "type": "integer",
              "nullable": true
            },
            "type": {
              "default": "ClusterIP",
              "enum": [
                "ClusterIP",
                "NodePort",
                "LoadBalancer"
              ],
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "shutdown": {
          "type": "boolean",
          "nullable": true
        },
        "standby": {
          "properties": {
            "enabled": {
              "default": true,
              "type": "boolean",
              "nullable": true
            },
            "host": {
              "type": "string",
              "nullable": true
            },
            "port": {
              "format": "int32",
              "type": "integer",
              "minimum": 1024,
              "nullable": true
            },
            "repoName": {
              "type": "string",
              "pattern": "^repo[1-4]",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "supplementalGroups": {
          "items": {
            "format": "int64",
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          },
          "type": "array",
          "nullable": true
        },
        "userInterface": {
          "properties": {
            "pgAdmin": {
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
                "config": {
                  "properties": {
                    "files": {
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
                    },
                    "ldapBindPassword": {
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
                    "settings": {
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "dataVolumeClaimSpec": {
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
                },
                "image": {
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
                    "labels": {
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
                "priorityClassName": {
                  "type": "string",
                  "nullable": true
                },
                "replicas": {
                  "default": 1,
                  "format": "int32",
                  "type": "integer",
                  "minimum": 0,
                  "maximum": 1,
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
                "service": {
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
                        "labels": {
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
                    "nodePort": {
                      "format": "int32",
                      "type": "integer",
                      "nullable": true
                    },
                    "type": {
                      "default": "ClusterIP",
                      "enum": [
                        "ClusterIP",
                        "NodePort",
                        "LoadBalancer"
                      ],
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object",
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
                      "maxSkew": {
                        "format": "int32",
                        "type": "integer"
                      },
                      "minDomains": {
                        "format": "int32",
                        "type": "integer",
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
                "dataVolumeClaimSpec"
              ],
              "type": "object"
            }
          },
          "required": [
            "pgAdmin"
          ],
          "type": "object",
          "nullable": true
        },
        "users": {
          "items": {
            "properties": {
              "databases": {
                "items": {
                  "maxLength": 63,
                  "minLength": 1,
                  "type": "string"
                },
                "type": "array",
                "nullable": true
              },
              "name": {
                "maxLength": 63,
                "minLength": 1,
                "type": "string",
                "pattern": "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"
              },
              "options": {
                "type": "string",
                "pattern": "^[^;]*$",
                "nullable": true
              },
              "password": {
                "properties": {
                  "type": {
                    "default": "ASCII",
                    "enum": [
                      "ASCII",
                      "AlphaNumeric"
                    ],
                    "type": "string"
                  }
                },
                "required": [
                  "type"
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
        "backups",
        "instances",
        "postgresVersion"
      ],
      "type": "object",
      "nullable": true
    },
    "status": {
      "properties": {
        "conditions": {
          "items": {
            "properties": {
              "lastTransitionTime": {
                "format": "date-time",
                "type": "string"
              },
              "message": {
                "maxLength": 32768,
                "type": "string"
              },
              "observedGeneration": {
                "format": "int64",
                "type": "integer",
                "minimum": 0,
                "nullable": true
              },
              "reason": {
                "maxLength": 1024,
                "minLength": 1,
                "type": "string",
                "pattern": "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$"
              },
              "status": {
                "enum": [
                  "True",
                  "False",
                  "Unknown"
                ],
                "type": "string"
              },
              "type": {
                "maxLength": 316,
                "type": "string",
                "pattern": "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\\/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$"
              }
            },
            "required": [
              "lastTransitionTime",
              "message",
              "reason",
              "status",
              "type"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "databaseInitSQL": {
          "type": "string",
          "nullable": true
        },
        "databaseRevision": {
          "type": "string",
          "nullable": true
        },
        "instances": {
          "items": {
            "properties": {
              "name": {
                "type": "string"
              },
              "readyReplicas": {
                "format": "int32",
                "type": "integer",
                "nullable": true
              },
              "replicas": {
                "format": "int32",
                "type": "integer",
                "nullable": true
              },
              "updatedReplicas": {
                "format": "int32",
                "type": "integer",
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
        "monitoring": {
          "properties": {
            "exporterConfiguration": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "observedGeneration": {
          "format": "int64",
          "type": "integer",
          "minimum": 0,
          "nullable": true
        },
        "patroni": {
          "properties": {
            "switchover": {
              "type": "string",
              "nullable": true
            },
            "switchoverTimeline": {
              "format": "int64",
              "type": "integer",
              "nullable": true
            },
            "systemIdentifier": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "pgbackrest": {
          "properties": {
            "manualBackup": {
              "properties": {
                "active": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                },
                "completionTime": {
                  "format": "date-time",
                  "type": "string",
                  "nullable": true
                },
                "failed": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                },
                "finished": {
                  "type": "boolean"
                },
                "id": {
                  "type": "string"
                },
                "startTime": {
                  "format": "date-time",
                  "type": "string",
                  "nullable": true
                },
                "succeeded": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                }
              },
              "required": [
                "finished",
                "id"
              ],
              "type": "object",
              "nullable": true
            },
            "repoHost": {
              "properties": {
                "apiVersion": {
                  "type": "string",
                  "nullable": true
                },
                "kind": {
                  "type": "string",
                  "nullable": true
                },
                "ready": {
                  "type": "boolean",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "repos": {
              "items": {
                "properties": {
                  "bound": {
                    "type": "boolean",
                    "nullable": true
                  },
                  "name": {
                    "type": "string"
                  },
                  "replicaCreateBackupComplete": {
                    "type": "boolean",
                    "nullable": true
                  },
                  "repoOptionsHash": {
                    "type": "string",
                    "nullable": true
                  },
                  "stanzaCreated": {
                    "type": "boolean",
                    "nullable": true
                  },
                  "volume": {
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
            "restore": {
              "properties": {
                "active": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                },
                "completionTime": {
                  "format": "date-time",
                  "type": "string",
                  "nullable": true
                },
                "failed": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                },
                "finished": {
                  "type": "boolean"
                },
                "id": {
                  "type": "string"
                },
                "startTime": {
                  "format": "date-time",
                  "type": "string",
                  "nullable": true
                },
                "succeeded": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                }
              },
              "required": [
                "finished",
                "id"
              ],
              "type": "object",
              "nullable": true
            },
            "scheduledBackups": {
              "items": {
                "properties": {
                  "active": {
                    "format": "int32",
                    "type": "integer",
                    "nullable": true
                  },
                  "completionTime": {
                    "format": "date-time",
                    "type": "string",
                    "nullable": true
                  },
                  "cronJobName": {
                    "type": "string",
                    "nullable": true
                  },
                  "failed": {
                    "format": "int32",
                    "type": "integer",
                    "nullable": true
                  },
                  "repo": {
                    "type": "string",
                    "nullable": true
                  },
                  "startTime": {
                    "format": "date-time",
                    "type": "string",
                    "nullable": true
                  },
                  "succeeded": {
                    "format": "int32",
                    "type": "integer",
                    "nullable": true
                  },
                  "type": {
                    "type": "string",
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
        "postgresVersion": {
          "type": "integer",
          "nullable": true
        },
        "proxy": {
          "properties": {
            "pgBouncer": {
              "properties": {
                "postgresRevision": {
                  "type": "string",
                  "nullable": true
                },
                "readyReplicas": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                },
                "replicas": {
                  "format": "int32",
                  "type": "integer",
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
        "startupInstance": {
          "type": "string",
          "nullable": true
        },
        "startupInstanceSet": {
          "type": "string",
          "nullable": true
        },
        "userInterface": {
          "properties": {
            "pgAdmin": {
              "properties": {
                "usersRevision": {
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
        "usersRevision": {
          "type": "string",
          "nullable": true
        }
      },
      "type": "object",
      "nullable": true
    }
  },
  "required": [
    "apiVersion",
    "kind"
  ]
};

/**
 * PostgresCluster is the Schema for the postgresclusters API
 */
export interface IPostgresCluster {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "postgres-operator.crunchydata.com/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "PostgresCluster";
  "metadata"?: IObjectMeta;
  /**
   * PostgresClusterSpec defines the desired state of PostgresCluster
   */
  "spec"?: {
    /**
     * PostgreSQL backup configuration
     */
    "backups": {
      /**
       * pgBackRest archive configuration
       */
      "pgbackrest": {
        /**
         * Projected volumes containing custom pgBackRest configuration.  These files are mounted under "/etc/pgbackrest/conf.d" alongside any pgBackRest configuration generated by the PostgreSQL Operator: https://pgbackrest.org/configuration.html
         */
        "configuration"?: Array<{
          /**
           * configMap information about the configMap data to project
           */
          "configMap"?: {
            /**
             * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
             */
            "items"?: Array<{
              /**
               * key is the key to project.
               */
              "key": string;
              /**
               * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
               */
              "path": string;
            }>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * optional specify whether the ConfigMap or its keys must be defined
             */
            "optional"?: boolean;
          };
          /**
           * downwardAPI information about the downwardAPI data to project
           */
          "downwardAPI"?: {
            /**
             * Items is a list of DownwardAPIVolume file
             */
            "items"?: Array<{
              /**
               * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
               */
              "fieldRef"?: {
                /**
                 * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                 */
                "apiVersion"?: string;
                /**
                 * Path of the field to select in the specified API version.
                 */
                "fieldPath": string;
              };
              /**
               * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
               */
              "path": string;
              /**
               * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
               */
              "resourceFieldRef"?: {
                /**
                 * Container name: required for volumes, optional for env vars
                 */
                "containerName"?: string;
                /**
                 * Specifies the output format of the exposed resources, defaults to "1"
                 */
                "divisor"?: number | string;
                /**
                 * Required: resource to select
                 */
                "resource": string;
              };
            }>;
          };
          /**
           * secret information about the secret data to project
           */
          "secret"?: {
            /**
             * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
             */
            "items"?: Array<{
              /**
               * key is the key to project.
               */
              "key": string;
              /**
               * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
               */
              "path": string;
            }>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * optional field specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * serviceAccountToken is information about the serviceAccountToken data to project
           */
          "serviceAccountToken"?: {
            /**
             * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
             */
            "audience"?: string;
            /**
             * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
             */
            "expirationSeconds"?: number;
            /**
             * path is the path relative to the mount point of the file to project the token into.
             */
            "path": string;
          };
        }>;
        /**
         * Global pgBackRest configuration settings.  These settings are included in the "global" section of the pgBackRest configuration generated by the PostgreSQL Operator, and then mounted under "/etc/pgbackrest/conf.d": https://pgbackrest.org/configuration.html
         */
        "global"?: {
          [key: string]: string;
        };
        /**
         * The image name to use for pgBackRest containers.  Utilized to run pgBackRest repository hosts and backups. The image may also be set using the RELATED_IMAGE_PGBACKREST environment variable
         */
        "image"?: string;
        /**
         * Jobs field allows configuration for all backup jobs
         */
        "jobs"?: {
          /**
           * Scheduling constraints of pgBackRest backup Job pods. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
           */
          "affinity"?: {
            /**
             * Describes node affinity scheduling rules for the pod.
             */
            "nodeAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A node selector term, associated with the corresponding weight.
                 */
                "preference": {
                  /**
                   * A list of node selector requirements by node's labels.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * A list of node selector requirements by node's fields.
                   */
                  "matchFields"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                };
                /**
                 * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: {
                /**
                 * Required. A list of node selector terms. The terms are ORed.
                 */
                "nodeSelectorTerms": Array<{
                  /**
                   * A list of node selector requirements by node's labels.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * A list of node selector requirements by node's fields.
                   */
                  "matchFields"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                }>;
              };
            };
            /**
             * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
             */
            "podAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * Required. A pod affinity term, associated with the corresponding weight.
                 */
                "podAffinityTerm": {
                  /**
                   * A label query over a set of resources, in this case pods.
                   */
                  "labelSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                   */
                  "namespaceSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                   */
                  "namespaces"?: Array<string>;
                  /**
                   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                   */
                  "topologyKey": string;
                };
                /**
                 * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              }>;
            };
            /**
             * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
             */
            "podAntiAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * Required. A pod affinity term, associated with the corresponding weight.
                 */
                "podAffinityTerm": {
                  /**
                   * A label query over a set of resources, in this case pods.
                   */
                  "labelSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                   */
                  "namespaceSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                   */
                  "namespaces"?: Array<string>;
                  /**
                   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                   */
                  "topologyKey": string;
                };
                /**
                 * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              }>;
            };
          };
          /**
           * Priority class name for the pgBackRest backup Job pods. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
           */
          "priorityClassName"?: string;
          /**
           * Resource limits for backup jobs. Includes manual, scheduled and replica create backups
           */
          "resources"?: {
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "limits"?: {
              [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "requests"?: {
              [key: string]: number | string;
            };
          };
          /**
           * Tolerations of pgBackRest backup Job pods. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
           */
          "tolerations"?: Array<{
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            "effect"?: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            "key"?: string;
            /**
             * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
             */
            "operator"?: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
             */
            "tolerationSeconds"?: number;
            /**
             * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            "value"?: string;
          }>;
          /**
           * Limit the lifetime of a Job that has finished. More info: https://kubernetes.io/docs/concepts/workloads/controllers/job
           */
          "ttlSecondsAfterFinished"?: number;
        };
        /**
         * Defines details for manual pgBackRest backup Jobs
         */
        "manual"?: {
          /**
           * Command line options to include when running the pgBackRest backup command. https://pgbackrest.org/command.html#command-backup
           */
          "options"?: Array<string>;
          /**
           * The name of the pgBackRest repo to run the backup command against.
           */
          "repoName": string;
        };
        /**
         * Metadata contains metadata for PostgresCluster resources
         */
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        /**
         * Defines configuration for a pgBackRest dedicated repository host.  This section is only applicable if at least one "volume" (i.e. PVC-based) repository is defined in the "repos" section, therefore enabling a dedicated repository host Deployment.
         */
        "repoHost"?: {
          /**
           * Scheduling constraints of the Dedicated repo host pod. Changing this value causes repo host to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
           */
          "affinity"?: {
            /**
             * Describes node affinity scheduling rules for the pod.
             */
            "nodeAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A node selector term, associated with the corresponding weight.
                 */
                "preference": {
                  /**
                   * A list of node selector requirements by node's labels.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * A list of node selector requirements by node's fields.
                   */
                  "matchFields"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                };
                /**
                 * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: {
                /**
                 * Required. A list of node selector terms. The terms are ORed.
                 */
                "nodeSelectorTerms": Array<{
                  /**
                   * A list of node selector requirements by node's labels.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * A list of node selector requirements by node's fields.
                   */
                  "matchFields"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                }>;
              };
            };
            /**
             * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
             */
            "podAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * Required. A pod affinity term, associated with the corresponding weight.
                 */
                "podAffinityTerm": {
                  /**
                   * A label query over a set of resources, in this case pods.
                   */
                  "labelSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                   */
                  "namespaceSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                   */
                  "namespaces"?: Array<string>;
                  /**
                   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                   */
                  "topologyKey": string;
                };
                /**
                 * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              }>;
            };
            /**
             * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
             */
            "podAntiAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * Required. A pod affinity term, associated with the corresponding weight.
                 */
                "podAffinityTerm": {
                  /**
                   * A label query over a set of resources, in this case pods.
                   */
                  "labelSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                   */
                  "namespaceSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                   */
                  "namespaces"?: Array<string>;
                  /**
                   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                   */
                  "topologyKey": string;
                };
                /**
                 * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              }>;
            };
          };
          /**
           * Priority class name for the pgBackRest repo host pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
           */
          "priorityClassName"?: string;
          /**
           * Resource requirements for a pgBackRest repository host
           */
          "resources"?: {
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "limits"?: {
              [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "requests"?: {
              [key: string]: number | string;
            };
          };
          /**
           * ConfigMap containing custom SSH configuration. Deprecated: Repository hosts use mTLS for encryption, authentication, and authorization.
           */
          "sshConfigMap"?: {
            /**
             * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
             */
            "items"?: Array<{
              /**
               * key is the key to project.
               */
              "key": string;
              /**
               * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
               */
              "path": string;
            }>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * optional specify whether the ConfigMap or its keys must be defined
             */
            "optional"?: boolean;
          };
          /**
           * Secret containing custom SSH keys. Deprecated: Repository hosts use mTLS for encryption, authentication, and authorization.
           */
          "sshSecret"?: {
            /**
             * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
             */
            "items"?: Array<{
              /**
               * key is the key to project.
               */
              "key": string;
              /**
               * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
               */
              "path": string;
            }>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * optional field specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * Tolerations of a PgBackRest repo host pod. Changing this value causes a restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
           */
          "tolerations"?: Array<{
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            "effect"?: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            "key"?: string;
            /**
             * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
             */
            "operator"?: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
             */
            "tolerationSeconds"?: number;
            /**
             * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            "value"?: string;
          }>;
          /**
           * Topology spread constraints of a Dedicated repo host pod. Changing this value causes the repo host to restart. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
           */
          "topologySpreadConstraints"?: Array<{
            /**
             * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
             */
            "labelSelector"?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            /**
             * MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | |  P P  |  P P  |   P   | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
             */
            "maxSkew": number;
            /**
             * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats "global minimum" as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. 
             *  For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | |  P P  |  P P  |  P P  | The number of domains is less than 5(MinDomains), so "global minimum" is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew. 
             *  This is an alpha field and requires enabling MinDomainsInPodTopologySpread feature gate.
             */
            "minDomains"?: number;
            /**
             * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes match the node selector. e.g. If TopologyKey is "kubernetes.io/hostname", each Node is a domain of that topology. And, if TopologyKey is "topology.kubernetes.io/zone", each zone is a domain of that topology. It's a required field.
             */
            "topologyKey": string;
            /**
             * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assignment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it \*more\* imbalanced. It's a required field.
             */
            "whenUnsatisfiable": string;
          }>;
        };
        /**
         * Defines a pgBackRest repository
         */
        "repos": Array<{
          /**
           * Represents a pgBackRest repository that is created using Azure storage
           */
          "azure"?: {
            /**
             * The Azure container utilized for the repository
             */
            "container": string;
          };
          /**
           * Represents a pgBackRest repository that is created using Google Cloud Storage
           */
          "gcs"?: {
            /**
             * The GCS bucket utilized for the repository
             */
            "bucket": string;
          };
          /**
           * The name of the the repository
           */
          "name": string;
          /**
           * RepoS3 represents a pgBackRest repository that is created using AWS S3 (or S3-compatible) storage
           */
          "s3"?: {
            /**
             * The S3 bucket utilized for the repository
             */
            "bucket": string;
            /**
             * A valid endpoint corresponding to the specified region
             */
            "endpoint": string;
            /**
             * The region corresponding to the S3 bucket
             */
            "region": string;
          };
          /**
           * Defines the schedules for the pgBackRest backups Full, Differential and Incremental backup types are supported: https://pgbackrest.org/user-guide.html#concept/backup
           */
          "schedules"?: {
            /**
             * Defines the Cron schedule for a differential pgBackRest backup. Follows the standard Cron schedule syntax: https://k8s.io/docs/concepts/workloads/controllers/cron-jobs/#cron-schedule-syntax
             */
            "differential"?: string;
            /**
             * Defines the Cron schedule for a full pgBackRest backup. Follows the standard Cron schedule syntax: https://k8s.io/docs/concepts/workloads/controllers/cron-jobs/#cron-schedule-syntax
             */
            "full"?: string;
            /**
             * Defines the Cron schedule for an incremental pgBackRest backup. Follows the standard Cron schedule syntax: https://k8s.io/docs/concepts/workloads/controllers/cron-jobs/#cron-schedule-syntax
             */
            "incremental"?: string;
          };
          /**
           * Represents a pgBackRest repository that is created using a PersistentVolumeClaim
           */
          "volume"?: {
            /**
             * Defines a PersistentVolumeClaim spec used to create and/or bind a volume
             */
            "volumeClaimSpec": {
              /**
               * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
               */
              "accessModes": Array<string>;
              /**
               * dataSource field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) \* An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
               */
              "dataSource"?: {
                /**
                 * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
                 */
                "apiGroup"?: string;
                /**
                 * Kind is the type of resource being referenced
                 */
                "kind": string;
                /**
                 * Name is the name of resource being referenced
                 */
                "name": string;
              };
              /**
               * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: \* While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. \* While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
               */
              "dataSourceRef"?: {
                /**
                 * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
                 */
                "apiGroup"?: string;
                /**
                 * Kind is the type of resource being referenced
                 */
                "kind": string;
                /**
                 * Name is the name of resource being referenced
                 */
                "name": string;
              };
              /**
               * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
               */
              "resources": {
                /**
                 * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                 */
                "limits"?: {
                  [key: string]: number | string;
                };
                /**
                 * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                 */
                "requests": {
                  [key: string]: number | string;
                };
              };
              /**
               * selector is a label query over volumes to consider for binding.
               */
              "selector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
               */
              "storageClassName"?: string;
              /**
               * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
               */
              "volumeMode"?: string;
              /**
               * volumeName is the binding reference to the PersistentVolume backing this claim.
               */
              "volumeName"?: string;
            };
          };
        }>;
        /**
         * Defines details for performing an in-place restore using pgBackRest
         */
        "restore"?: {
          /**
           * Scheduling constraints of the pgBackRest restore Job. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
           */
          "affinity"?: {
            /**
             * Describes node affinity scheduling rules for the pod.
             */
            "nodeAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A node selector term, associated with the corresponding weight.
                 */
                "preference": {
                  /**
                   * A list of node selector requirements by node's labels.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * A list of node selector requirements by node's fields.
                   */
                  "matchFields"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                };
                /**
                 * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: {
                /**
                 * Required. A list of node selector terms. The terms are ORed.
                 */
                "nodeSelectorTerms": Array<{
                  /**
                   * A list of node selector requirements by node's labels.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * A list of node selector requirements by node's fields.
                   */
                  "matchFields"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                }>;
              };
            };
            /**
             * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
             */
            "podAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * Required. A pod affinity term, associated with the corresponding weight.
                 */
                "podAffinityTerm": {
                  /**
                   * A label query over a set of resources, in this case pods.
                   */
                  "labelSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                   */
                  "namespaceSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                   */
                  "namespaces"?: Array<string>;
                  /**
                   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                   */
                  "topologyKey": string;
                };
                /**
                 * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              }>;
            };
            /**
             * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
             */
            "podAntiAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * Required. A pod affinity term, associated with the corresponding weight.
                 */
                "podAffinityTerm": {
                  /**
                   * A label query over a set of resources, in this case pods.
                   */
                  "labelSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                   */
                  "namespaceSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                   */
                  "namespaces"?: Array<string>;
                  /**
                   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                   */
                  "topologyKey": string;
                };
                /**
                 * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              }>;
            };
          };
          /**
           * The name of an existing PostgresCluster to use as the data source for the new PostgresCluster. Defaults to the name of the PostgresCluster being created if not provided.
           */
          "clusterName"?: string;
          /**
           * The namespace of the cluster specified as the data source using the clusterName field. Defaults to the namespace of the PostgresCluster being created if not provided.
           */
          "clusterNamespace"?: string;
          /**
           * Whether or not in-place pgBackRest restores are enabled for this PostgresCluster.
           */
          "enabled": boolean;
          /**
           * Command line options to include when running the pgBackRest restore command. https://pgbackrest.org/command.html#command-restore
           */
          "options"?: Array<string>;
          /**
           * Priority class name for the pgBackRest restore Job pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
           */
          "priorityClassName"?: string;
          /**
           * The name of the pgBackRest repo within the source PostgresCluster that contains the backups that should be utilized to perform a pgBackRest restore when initializing the data source for the new PostgresCluster.
           */
          "repoName": string;
          /**
           * Resource requirements for the pgBackRest restore Job.
           */
          "resources"?: {
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "limits"?: {
              [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "requests"?: {
              [key: string]: number | string;
            };
          };
          /**
           * Tolerations of the pgBackRest restore Job. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
           */
          "tolerations"?: Array<{
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            "effect"?: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            "key"?: string;
            /**
             * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
             */
            "operator"?: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
             */
            "tolerationSeconds"?: number;
            /**
             * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            "value"?: string;
          }>;
        };
        /**
         * Configuration for pgBackRest sidecar containers
         */
        "sidecars"?: {
          /**
           * Defines the configuration for the pgBackRest sidecar container
           */
          "pgbackrest"?: {
            /**
             * Resource requirements for a sidecar container
             */
            "resources"?: {
              /**
               * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
               */
              "limits"?: {
                [key: string]: number | string;
              };
              /**
               * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
               */
              "requests"?: {
                [key: string]: number | string;
              };
            };
          };
          /**
           * Defines the configuration for the pgBackRest config sidecar container
           */
          "pgbackrestConfig"?: {
            /**
             * Resource requirements for a sidecar container
             */
            "resources"?: {
              /**
               * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
               */
              "limits"?: {
                [key: string]: number | string;
              };
              /**
               * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
               */
              "requests"?: {
                [key: string]: number | string;
              };
            };
          };
        };
      };
    };
    "config"?: {
      "files"?: Array<{
        /**
         * configMap information about the configMap data to project
         */
        "configMap"?: {
          /**
           * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
           */
          "items"?: Array<{
            /**
             * key is the key to project.
             */
            "key": string;
            /**
             * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
             */
            "mode"?: number;
            /**
             * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
             */
            "path": string;
          }>;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * optional specify whether the ConfigMap or its keys must be defined
           */
          "optional"?: boolean;
        };
        /**
         * downwardAPI information about the downwardAPI data to project
         */
        "downwardAPI"?: {
          /**
           * Items is a list of DownwardAPIVolume file
           */
          "items"?: Array<{
            /**
             * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
             */
            "fieldRef"?: {
              /**
               * Version of the schema the FieldPath is written in terms of, defaults to "v1".
               */
              "apiVersion"?: string;
              /**
               * Path of the field to select in the specified API version.
               */
              "fieldPath": string;
            };
            /**
             * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
             */
            "mode"?: number;
            /**
             * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
             */
            "path": string;
            /**
             * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
             */
            "resourceFieldRef"?: {
              /**
               * Container name: required for volumes, optional for env vars
               */
              "containerName"?: string;
              /**
               * Specifies the output format of the exposed resources, defaults to "1"
               */
              "divisor"?: number | string;
              /**
               * Required: resource to select
               */
              "resource": string;
            };
          }>;
        };
        /**
         * secret information about the secret data to project
         */
        "secret"?: {
          /**
           * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
           */
          "items"?: Array<{
            /**
             * key is the key to project.
             */
            "key": string;
            /**
             * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
             */
            "mode"?: number;
            /**
             * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
             */
            "path": string;
          }>;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * optional field specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * serviceAccountToken is information about the serviceAccountToken data to project
         */
        "serviceAccountToken"?: {
          /**
           * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
           */
          "audience"?: string;
          /**
           * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
           */
          "expirationSeconds"?: number;
          /**
           * path is the path relative to the mount point of the file to project the token into.
           */
          "path": string;
        };
      }>;
    };
    /**
     * The secret containing the replication client certificates and keys for secure connections to the PostgreSQL server. It will need to contain the client TLS certificate, TLS key and the Certificate Authority certificate with the data keys set to tls.crt, tls.key and ca.crt, respectively. NOTE: If CustomReplicationClientTLSSecret is provided, CustomTLSSecret MUST be provided and the ca.crt provided must be the same.
     */
    "customReplicationTLSSecret"?: {
      /**
       * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
       */
      "items"?: Array<{
        /**
         * key is the key to project.
         */
        "key": string;
        /**
         * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
         */
        "mode"?: number;
        /**
         * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
         */
        "path": string;
      }>;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * optional field specify whether the Secret or its key must be defined
       */
      "optional"?: boolean;
    };
    /**
     * The secret containing the Certificates and Keys to encrypt PostgreSQL traffic will need to contain the server TLS certificate, TLS key and the Certificate Authority certificate with the data keys set to tls.crt, tls.key and ca.crt, respectively. It will then be mounted as a volume projection to the '/pgconf/tls' directory. For more information on Kubernetes secret projections, please see https://k8s.io/docs/concepts/configuration/secret/#projection-of-secret-keys-to-specific-paths NOTE: If CustomTLSSecret is provided, CustomReplicationClientTLSSecret MUST be provided and the ca.crt provided must be the same.
     */
    "customTLSSecret"?: {
      /**
       * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
       */
      "items"?: Array<{
        /**
         * key is the key to project.
         */
        "key": string;
        /**
         * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
         */
        "mode"?: number;
        /**
         * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
         */
        "path": string;
      }>;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * optional field specify whether the Secret or its key must be defined
       */
      "optional"?: boolean;
    };
    /**
     * Specifies a data source for bootstrapping the PostgreSQL cluster.
     */
    "dataSource"?: {
      /**
       * Defines a pgBackRest cloud-based data source that can be used to pre-populate the the PostgreSQL data directory for a new PostgreSQL cluster using a pgBackRest restore. The PGBackRest field is incompatible with the PostgresCluster field: only one data source can be used for pre-populating a new PostgreSQL cluster
       */
      "pgbackrest"?: {
        /**
         * Scheduling constraints of the pgBackRest restore Job. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
         */
        "affinity"?: {
          /**
           * Describes node affinity scheduling rules for the pod.
           */
          "nodeAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A node selector term, associated with the corresponding weight.
               */
              "preference": {
                /**
                 * A list of node selector requirements by node's labels.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * A list of node selector requirements by node's fields.
                 */
                "matchFields"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
              };
              /**
               * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: {
              /**
               * Required. A list of node selector terms. The terms are ORed.
               */
              "nodeSelectorTerms": Array<{
                /**
                 * A list of node selector requirements by node's labels.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * A list of node selector requirements by node's fields.
                 */
                "matchFields"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
              }>;
            };
          };
          /**
           * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
           */
          "podAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * Required. A pod affinity term, associated with the corresponding weight.
               */
              "podAffinityTerm": {
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              };
              /**
               * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
               */
              "namespaceSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            }>;
          };
          /**
           * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
           */
          "podAntiAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * Required. A pod affinity term, associated with the corresponding weight.
               */
              "podAffinityTerm": {
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              };
              /**
               * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
               */
              "namespaceSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            }>;
          };
        };
        /**
         * Projected volumes containing custom pgBackRest configuration.  These files are mounted under "/etc/pgbackrest/conf.d" alongside any pgBackRest configuration generated by the PostgreSQL Operator: https://pgbackrest.org/configuration.html
         */
        "configuration"?: Array<{
          /**
           * configMap information about the configMap data to project
           */
          "configMap"?: {
            /**
             * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
             */
            "items"?: Array<{
              /**
               * key is the key to project.
               */
              "key": string;
              /**
               * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
               */
              "path": string;
            }>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * optional specify whether the ConfigMap or its keys must be defined
             */
            "optional"?: boolean;
          };
          /**
           * downwardAPI information about the downwardAPI data to project
           */
          "downwardAPI"?: {
            /**
             * Items is a list of DownwardAPIVolume file
             */
            "items"?: Array<{
              /**
               * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
               */
              "fieldRef"?: {
                /**
                 * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                 */
                "apiVersion"?: string;
                /**
                 * Path of the field to select in the specified API version.
                 */
                "fieldPath": string;
              };
              /**
               * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
               */
              "path": string;
              /**
               * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
               */
              "resourceFieldRef"?: {
                /**
                 * Container name: required for volumes, optional for env vars
                 */
                "containerName"?: string;
                /**
                 * Specifies the output format of the exposed resources, defaults to "1"
                 */
                "divisor"?: number | string;
                /**
                 * Required: resource to select
                 */
                "resource": string;
              };
            }>;
          };
          /**
           * secret information about the secret data to project
           */
          "secret"?: {
            /**
             * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
             */
            "items"?: Array<{
              /**
               * key is the key to project.
               */
              "key": string;
              /**
               * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
               */
              "path": string;
            }>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * optional field specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * serviceAccountToken is information about the serviceAccountToken data to project
           */
          "serviceAccountToken"?: {
            /**
             * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
             */
            "audience"?: string;
            /**
             * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
             */
            "expirationSeconds"?: number;
            /**
             * path is the path relative to the mount point of the file to project the token into.
             */
            "path": string;
          };
        }>;
        /**
         * Global pgBackRest configuration settings.  These settings are included in the "global" section of the pgBackRest configuration generated by the PostgreSQL Operator, and then mounted under "/etc/pgbackrest/conf.d": https://pgbackrest.org/configuration.html
         */
        "global"?: {
          [key: string]: string;
        };
        /**
         * Command line options to include when running the pgBackRest restore command. https://pgbackrest.org/command.html#command-restore
         */
        "options"?: Array<string>;
        /**
         * Priority class name for the pgBackRest restore Job pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
         */
        "priorityClassName"?: string;
        /**
         * Defines a pgBackRest repository
         */
        "repo": {
          /**
           * Represents a pgBackRest repository that is created using Azure storage
           */
          "azure"?: {
            /**
             * The Azure container utilized for the repository
             */
            "container": string;
          };
          /**
           * Represents a pgBackRest repository that is created using Google Cloud Storage
           */
          "gcs"?: {
            /**
             * The GCS bucket utilized for the repository
             */
            "bucket": string;
          };
          /**
           * The name of the the repository
           */
          "name": string;
          /**
           * RepoS3 represents a pgBackRest repository that is created using AWS S3 (or S3-compatible) storage
           */
          "s3"?: {
            /**
             * The S3 bucket utilized for the repository
             */
            "bucket": string;
            /**
             * A valid endpoint corresponding to the specified region
             */
            "endpoint": string;
            /**
             * The region corresponding to the S3 bucket
             */
            "region": string;
          };
          /**
           * Defines the schedules for the pgBackRest backups Full, Differential and Incremental backup types are supported: https://pgbackrest.org/user-guide.html#concept/backup
           */
          "schedules"?: {
            /**
             * Defines the Cron schedule for a differential pgBackRest backup. Follows the standard Cron schedule syntax: https://k8s.io/docs/concepts/workloads/controllers/cron-jobs/#cron-schedule-syntax
             */
            "differential"?: string;
            /**
             * Defines the Cron schedule for a full pgBackRest backup. Follows the standard Cron schedule syntax: https://k8s.io/docs/concepts/workloads/controllers/cron-jobs/#cron-schedule-syntax
             */
            "full"?: string;
            /**
             * Defines the Cron schedule for an incremental pgBackRest backup. Follows the standard Cron schedule syntax: https://k8s.io/docs/concepts/workloads/controllers/cron-jobs/#cron-schedule-syntax
             */
            "incremental"?: string;
          };
          /**
           * Represents a pgBackRest repository that is created using a PersistentVolumeClaim
           */
          "volume"?: {
            /**
             * Defines a PersistentVolumeClaim spec used to create and/or bind a volume
             */
            "volumeClaimSpec": {
              /**
               * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
               */
              "accessModes"?: Array<string>;
              /**
               * dataSource field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) \* An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
               */
              "dataSource"?: {
                /**
                 * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
                 */
                "apiGroup"?: string;
                /**
                 * Kind is the type of resource being referenced
                 */
                "kind": string;
                /**
                 * Name is the name of resource being referenced
                 */
                "name": string;
              };
              /**
               * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: \* While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. \* While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
               */
              "dataSourceRef"?: {
                /**
                 * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
                 */
                "apiGroup"?: string;
                /**
                 * Kind is the type of resource being referenced
                 */
                "kind": string;
                /**
                 * Name is the name of resource being referenced
                 */
                "name": string;
              };
              /**
               * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
               */
              "resources"?: {
                /**
                 * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                 */
                "limits"?: {
                  [key: string]: number | string;
                };
                /**
                 * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                 */
                "requests"?: {
                  [key: string]: number | string;
                };
              };
              /**
               * selector is a label query over volumes to consider for binding.
               */
              "selector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
               */
              "storageClassName"?: string;
              /**
               * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
               */
              "volumeMode"?: string;
              /**
               * volumeName is the binding reference to the PersistentVolume backing this claim.
               */
              "volumeName"?: string;
            };
          };
        };
        /**
         * Resource requirements for the pgBackRest restore Job.
         */
        "resources"?: {
          /**
           * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "limits"?: {
            [key: string]: number | string;
          };
          /**
           * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "requests"?: {
            [key: string]: number | string;
          };
        };
        /**
         * The name of an existing pgBackRest stanza to use as the data source for the new PostgresCluster. Defaults to `db` if not provided.
         */
        "stanza": string;
        /**
         * Tolerations of the pgBackRest restore Job. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
         */
        "tolerations"?: Array<{
          /**
           * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
           */
          "effect"?: string;
          /**
           * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
           */
          "key"?: string;
          /**
           * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
           */
          "operator"?: string;
          /**
           * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
           */
          "tolerationSeconds"?: number;
          /**
           * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
           */
          "value"?: string;
        }>;
      };
      /**
       * Defines a pgBackRest data source that can be used to pre-populate the PostgreSQL data directory for a new PostgreSQL cluster using a pgBackRest restore. The PGBackRest field is incompatible with the PostgresCluster field: only one data source can be used for pre-populating a new PostgreSQL cluster
       */
      "postgresCluster"?: {
        /**
         * Scheduling constraints of the pgBackRest restore Job. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
         */
        "affinity"?: {
          /**
           * Describes node affinity scheduling rules for the pod.
           */
          "nodeAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A node selector term, associated with the corresponding weight.
               */
              "preference": {
                /**
                 * A list of node selector requirements by node's labels.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * A list of node selector requirements by node's fields.
                 */
                "matchFields"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
              };
              /**
               * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: {
              /**
               * Required. A list of node selector terms. The terms are ORed.
               */
              "nodeSelectorTerms": Array<{
                /**
                 * A list of node selector requirements by node's labels.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * A list of node selector requirements by node's fields.
                 */
                "matchFields"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
              }>;
            };
          };
          /**
           * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
           */
          "podAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * Required. A pod affinity term, associated with the corresponding weight.
               */
              "podAffinityTerm": {
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              };
              /**
               * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
               */
              "namespaceSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            }>;
          };
          /**
           * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
           */
          "podAntiAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * Required. A pod affinity term, associated with the corresponding weight.
               */
              "podAffinityTerm": {
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              };
              /**
               * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
               */
              "namespaceSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            }>;
          };
        };
        /**
         * The name of an existing PostgresCluster to use as the data source for the new PostgresCluster. Defaults to the name of the PostgresCluster being created if not provided.
         */
        "clusterName"?: string;
        /**
         * The namespace of the cluster specified as the data source using the clusterName field. Defaults to the namespace of the PostgresCluster being created if not provided.
         */
        "clusterNamespace"?: string;
        /**
         * Command line options to include when running the pgBackRest restore command. https://pgbackrest.org/command.html#command-restore
         */
        "options"?: Array<string>;
        /**
         * Priority class name for the pgBackRest restore Job pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
         */
        "priorityClassName"?: string;
        /**
         * The name of the pgBackRest repo within the source PostgresCluster that contains the backups that should be utilized to perform a pgBackRest restore when initializing the data source for the new PostgresCluster.
         */
        "repoName": string;
        /**
         * Resource requirements for the pgBackRest restore Job.
         */
        "resources"?: {
          /**
           * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "limits"?: {
            [key: string]: number | string;
          };
          /**
           * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "requests"?: {
            [key: string]: number | string;
          };
        };
        /**
         * Tolerations of the pgBackRest restore Job. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
         */
        "tolerations"?: Array<{
          /**
           * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
           */
          "effect"?: string;
          /**
           * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
           */
          "key"?: string;
          /**
           * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
           */
          "operator"?: string;
          /**
           * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
           */
          "tolerationSeconds"?: number;
          /**
           * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
           */
          "value"?: string;
        }>;
      };
      /**
       * Defines any existing volumes to reuse for this PostgresCluster.
       */
      "volumes"?: {
        /**
         * Defines the existing pgBackRest repo volume and directory to use in the current PostgresCluster.
         */
        "pgBackRestVolume"?: {
          /**
           * The existing directory. When not set, a move Job is not created for the associated volume.
           */
          "directory"?: string;
          /**
           * The existing PVC name.
           */
          "pvcName": string;
        };
        /**
         * Defines the existing pgData volume and directory to use in the current PostgresCluster.
         */
        "pgDataVolume"?: {
          /**
           * The existing directory. When not set, a move Job is not created for the associated volume.
           */
          "directory"?: string;
          /**
           * The existing PVC name.
           */
          "pvcName": string;
        };
        /**
         * Defines the existing pg_wal volume and directory to use in the current PostgresCluster. Note that a defined pg_wal volume MUST be accompanied by a pgData volume.
         */
        "pgWALVolume"?: {
          /**
           * The existing directory. When not set, a move Job is not created for the associated volume.
           */
          "directory"?: string;
          /**
           * The existing PVC name.
           */
          "pvcName": string;
        };
      };
    };
    /**
     * DatabaseInitSQL defines a ConfigMap containing custom SQL that will be run after the cluster is initialized. This ConfigMap must be in the same namespace as the cluster.
     */
    "databaseInitSQL"?: {
      /**
       * Key is the ConfigMap data key that points to a SQL string
       */
      "key": string;
      /**
       * Name is the name of a ConfigMap
       */
      "name": string;
    };
    /**
     * Whether or not the PostgreSQL cluster should use the defined default scheduling constraints. If the field is unset or false, the default scheduling constraints will be used in addition to any custom constraints provided.
     */
    "disableDefaultPodScheduling"?: boolean;
    /**
     * The image name to use for PostgreSQL containers. When omitted, the value comes from an operator environment variable. For standard PostgreSQL images, the format is RELATED_IMAGE_POSTGRES_{postgresVersion}, e.g. RELATED_IMAGE_POSTGRES_13. For PostGIS enabled PostgreSQL images, the format is RELATED_IMAGE_POSTGRES_{postgresVersion}_GIS_{postGISVersion}, e.g. RELATED_IMAGE_POSTGRES_13_GIS_3.1.
     */
    "image"?: string;
    /**
     * ImagePullPolicy is used to determine when Kubernetes will attempt to pull (download) container images. More info: https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy
     */
    "imagePullPolicy"?: "Always" | "Never" | "IfNotPresent";
    /**
     * The image pull secrets used to pull from a private registry Changing this value causes all running pods to restart. https://k8s.io/docs/tasks/configure-pod-container/pull-image-private-registry/
     */
    "imagePullSecrets"?: Array<{
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
    }>;
    /**
     * Specifies one or more sets of PostgreSQL pods that replicate data for this cluster.
     */
    "instances": Array<{
      /**
       * Scheduling constraints of a PostgreSQL pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
       */
      "affinity"?: {
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        "nodeAffinity"?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
           */
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * A node selector term, associated with the corresponding weight.
             */
            "preference": {
              /**
               * A list of node selector requirements by node's labels.
               */
              "matchExpressions"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * A list of node selector requirements by node's fields.
               */
              "matchFields"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
            };
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            "weight": number;
          }>;
          /**
           * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
           */
          "requiredDuringSchedulingIgnoredDuringExecution"?: {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            "nodeSelectorTerms": Array<{
              /**
               * A list of node selector requirements by node's labels.
               */
              "matchExpressions"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * A list of node selector requirements by node's fields.
               */
              "matchFields"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
            }>;
          };
        };
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        "podAffinity"?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
           */
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * Required. A pod affinity term, associated with the corresponding weight.
             */
            "podAffinityTerm": {
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
               */
              "namespaceSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            };
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            "weight": number;
          }>;
          /**
           * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
           */
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * A label query over a set of resources, in this case pods.
             */
            "labelSelector"?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            /**
             * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
             */
            "namespaceSelector"?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            "namespaces"?: Array<string>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            "topologyKey": string;
          }>;
        };
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        "podAntiAffinity"?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
           */
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * Required. A pod affinity term, associated with the corresponding weight.
             */
            "podAffinityTerm": {
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
               */
              "namespaceSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            };
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            "weight": number;
          }>;
          /**
           * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
           */
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * A label query over a set of resources, in this case pods.
             */
            "labelSelector"?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            /**
             * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
             */
            "namespaceSelector"?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            /**
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            "namespaces"?: Array<string>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            "topologyKey": string;
          }>;
        };
      };
      /**
       * Custom sidecars for PostgreSQL instance pods. Changing this value causes PostgreSQL to restart.
       */
      "containers"?: Array<{
        /**
         * Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
         */
        "args"?: Array<string>;
        /**
         * Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
         */
        "command"?: Array<string>;
        /**
         * List of environment variables to set in the container. Cannot be updated.
         */
        "env"?: Array<{
          /**
           * Name of the environment variable. Must be a C_IDENTIFIER.
           */
          "name": string;
          /**
           * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
           */
          "value"?: string;
          /**
           * Source for the environment variable's value. Cannot be used if value is not empty.
           */
          "valueFrom"?: {
            /**
             * Selects a key of a ConfigMap.
             */
            "configMapKeyRef"?: {
              /**
               * The key to select.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * Specify whether the ConfigMap or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
             */
            "fieldRef"?: {
              /**
               * Version of the schema the FieldPath is written in terms of, defaults to "v1".
               */
              "apiVersion"?: string;
              /**
               * Path of the field to select in the specified API version.
               */
              "fieldPath": string;
            };
            /**
             * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
             */
            "resourceFieldRef"?: {
              /**
               * Container name: required for volumes, optional for env vars
               */
              "containerName"?: string;
              /**
               * Specifies the output format of the exposed resources, defaults to "1"
               */
              "divisor"?: number | string;
              /**
               * Required: resource to select
               */
              "resource": string;
            };
            /**
             * Selects a key of a secret in the pod's namespace
             */
            "secretKeyRef"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
        }>;
        /**
         * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
         */
        "envFrom"?: Array<{
          /**
           * The ConfigMap to select from
           */
          "configMapRef"?: {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the ConfigMap must be defined
             */
            "optional"?: boolean;
          };
          /**
           * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
           */
          "prefix"?: string;
          /**
           * The Secret to select from
           */
          "secretRef"?: {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the Secret must be defined
             */
            "optional"?: boolean;
          };
        }>;
        /**
         * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
         */
        "image"?: string;
        /**
         * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
         */
        "imagePullPolicy"?: string;
        /**
         * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
         */
        "lifecycle"?: {
          /**
           * PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
           */
          "postStart"?: {
            /**
             * Exec specifies the action to take.
             */
            "exec"?: {
              /**
               * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
               */
              "command"?: Array<string>;
            };
            /**
             * HTTPGet specifies the http request to perform.
             */
            "httpGet"?: {
              /**
               * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
               */
              "host"?: string;
              /**
               * Custom headers to set in the request. HTTP allows repeated headers.
               */
              "httpHeaders"?: Array<{
                /**
                 * The header field name
                 */
                "name": string;
                /**
                 * The header field value
                 */
                "value": string;
              }>;
              /**
               * Path to access on the HTTP server.
               */
              "path"?: string;
              /**
               * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
               */
              "port": number | string;
              /**
               * Scheme to use for connecting to the host. Defaults to HTTP.
               */
              "scheme"?: string;
            };
            /**
             * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified.
             */
            "tcpSocket"?: {
              /**
               * Optional: Host name to connect to, defaults to the pod IP.
               */
              "host"?: string;
              /**
               * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
               */
              "port": number | string;
            };
          };
          /**
           * PreStop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The Pod's termination grace period countdown begins before the PreStop hook is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period (unless delayed by finalizers). Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
           */
          "preStop"?: {
            /**
             * Exec specifies the action to take.
             */
            "exec"?: {
              /**
               * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
               */
              "command"?: Array<string>;
            };
            /**
             * HTTPGet specifies the http request to perform.
             */
            "httpGet"?: {
              /**
               * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
               */
              "host"?: string;
              /**
               * Custom headers to set in the request. HTTP allows repeated headers.
               */
              "httpHeaders"?: Array<{
                /**
                 * The header field name
                 */
                "name": string;
                /**
                 * The header field value
                 */
                "value": string;
              }>;
              /**
               * Path to access on the HTTP server.
               */
              "path"?: string;
              /**
               * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
               */
              "port": number | string;
              /**
               * Scheme to use for connecting to the host. Defaults to HTTP.
               */
              "scheme"?: string;
            };
            /**
             * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified.
             */
            "tcpSocket"?: {
              /**
               * Optional: Host name to connect to, defaults to the pod IP.
               */
              "host"?: string;
              /**
               * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
               */
              "port": number | string;
            };
          };
        };
        /**
         * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        "livenessProbe"?: {
          /**
           * Exec specifies the action to take.
           */
          "exec"?: {
            /**
             * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            "command"?: Array<string>;
          };
          /**
           * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
           */
          "failureThreshold"?: number;
          /**
           * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
           */
          "grpc"?: {
            /**
             * Port number of the gRPC service. Number must be in the range 1 to 65535.
             */
            "port": number;
            /**
             * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). 
             *  If this is not specified, the default behavior is defined by gRPC.
             */
            "service"?: string;
          };
          /**
           * HTTPGet specifies the http request to perform.
           */
          "httpGet"?: {
            /**
             * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
             */
            "host"?: string;
            /**
             * Custom headers to set in the request. HTTP allows repeated headers.
             */
            "httpHeaders"?: Array<{
              /**
               * The header field name
               */
              "name": string;
              /**
               * The header field value
               */
              "value": string;
            }>;
            /**
             * Path to access on the HTTP server.
             */
            "path"?: string;
            /**
             * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
             */
            "port": number | string;
            /**
             * Scheme to use for connecting to the host. Defaults to HTTP.
             */
            "scheme"?: string;
          };
          /**
           * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          "initialDelaySeconds"?: number;
          /**
           * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
           */
          "periodSeconds"?: number;
          /**
           * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
           */
          "successThreshold"?: number;
          /**
           * TCPSocket specifies an action involving a TCP port.
           */
          "tcpSocket"?: {
            /**
             * Optional: Host name to connect to, defaults to the pod IP.
             */
            "host"?: string;
            /**
             * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
             */
            "port": number | string;
          };
          /**
           * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
           */
          "terminationGracePeriodSeconds"?: number;
          /**
           * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          "timeoutSeconds"?: number;
        };
        /**
         * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
         */
        "name": string;
        /**
         * List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.
         */
        "ports"?: Array<{
          /**
           * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
           */
          "containerPort": number;
          /**
           * What host IP to bind the external port to.
           */
          "hostIP"?: string;
          /**
           * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
           */
          "hostPort"?: number;
          /**
           * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
           */
          "name"?: string;
          /**
           * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
           */
          "protocol"?: string;
        }>;
        /**
         * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        "readinessProbe"?: {
          /**
           * Exec specifies the action to take.
           */
          "exec"?: {
            /**
             * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            "command"?: Array<string>;
          };
          /**
           * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
           */
          "failureThreshold"?: number;
          /**
           * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
           */
          "grpc"?: {
            /**
             * Port number of the gRPC service. Number must be in the range 1 to 65535.
             */
            "port": number;
            /**
             * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). 
             *  If this is not specified, the default behavior is defined by gRPC.
             */
            "service"?: string;
          };
          /**
           * HTTPGet specifies the http request to perform.
           */
          "httpGet"?: {
            /**
             * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
             */
            "host"?: string;
            /**
             * Custom headers to set in the request. HTTP allows repeated headers.
             */
            "httpHeaders"?: Array<{
              /**
               * The header field name
               */
              "name": string;
              /**
               * The header field value
               */
              "value": string;
            }>;
            /**
             * Path to access on the HTTP server.
             */
            "path"?: string;
            /**
             * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
             */
            "port": number | string;
            /**
             * Scheme to use for connecting to the host. Defaults to HTTP.
             */
            "scheme"?: string;
          };
          /**
           * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          "initialDelaySeconds"?: number;
          /**
           * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
           */
          "periodSeconds"?: number;
          /**
           * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
           */
          "successThreshold"?: number;
          /**
           * TCPSocket specifies an action involving a TCP port.
           */
          "tcpSocket"?: {
            /**
             * Optional: Host name to connect to, defaults to the pod IP.
             */
            "host"?: string;
            /**
             * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
             */
            "port": number | string;
          };
          /**
           * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
           */
          "terminationGracePeriodSeconds"?: number;
          /**
           * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          "timeoutSeconds"?: number;
        };
        /**
         * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        "resources"?: {
          /**
           * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "limits"?: {
            [key: string]: number | string;
          };
          /**
           * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "requests"?: {
            [key: string]: number | string;
          };
        };
        /**
         * SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
         */
        "securityContext"?: {
          /**
           * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
           */
          "allowPrivilegeEscalation"?: boolean;
          /**
           * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
           */
          "capabilities"?: {
            /**
             * Added capabilities
             */
            "add"?: Array<string>;
            /**
             * Removed capabilities
             */
            "drop"?: Array<string>;
          };
          /**
           * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
           */
          "privileged"?: boolean;
          /**
           * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
           */
          "procMount"?: string;
          /**
           * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
           */
          "readOnlyRootFilesystem"?: boolean;
          /**
           * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
           */
          "runAsGroup"?: number;
          /**
           * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
           */
          "runAsNonRoot"?: boolean;
          /**
           * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
           */
          "runAsUser"?: number;
          /**
           * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
           */
          "seLinuxOptions"?: {
            /**
             * Level is SELinux level label that applies to the container.
             */
            "level"?: string;
            /**
             * Role is a SELinux role label that applies to the container.
             */
            "role"?: string;
            /**
             * Type is a SELinux type label that applies to the container.
             */
            "type"?: string;
            /**
             * User is a SELinux user label that applies to the container.
             */
            "user"?: string;
          };
          /**
           * The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.
           */
          "seccompProfile"?: {
            /**
             * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost".
             */
            "localhostProfile"?: string;
            /**
             * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
             */
            "type": string;
          };
          /**
           * The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
           */
          "windowsOptions"?: {
            /**
             * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
             */
            "gmsaCredentialSpec"?: string;
            /**
             * GMSACredentialSpecName is the name of the GMSA credential spec to use.
             */
            "gmsaCredentialSpecName"?: string;
            /**
             * HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true.
             */
            "hostProcess"?: boolean;
            /**
             * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
             */
            "runAsUserName"?: string;
          };
        };
        /**
         * StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        "startupProbe"?: {
          /**
           * Exec specifies the action to take.
           */
          "exec"?: {
            /**
             * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
             */
            "command"?: Array<string>;
          };
          /**
           * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
           */
          "failureThreshold"?: number;
          /**
           * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
           */
          "grpc"?: {
            /**
             * Port number of the gRPC service. Number must be in the range 1 to 65535.
             */
            "port": number;
            /**
             * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). 
             *  If this is not specified, the default behavior is defined by gRPC.
             */
            "service"?: string;
          };
          /**
           * HTTPGet specifies the http request to perform.
           */
          "httpGet"?: {
            /**
             * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
             */
            "host"?: string;
            /**
             * Custom headers to set in the request. HTTP allows repeated headers.
             */
            "httpHeaders"?: Array<{
              /**
               * The header field name
               */
              "name": string;
              /**
               * The header field value
               */
              "value": string;
            }>;
            /**
             * Path to access on the HTTP server.
             */
            "path"?: string;
            /**
             * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
             */
            "port": number | string;
            /**
             * Scheme to use for connecting to the host. Defaults to HTTP.
             */
            "scheme"?: string;
          };
          /**
           * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          "initialDelaySeconds"?: number;
          /**
           * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
           */
          "periodSeconds"?: number;
          /**
           * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
           */
          "successThreshold"?: number;
          /**
           * TCPSocket specifies an action involving a TCP port.
           */
          "tcpSocket"?: {
            /**
             * Optional: Host name to connect to, defaults to the pod IP.
             */
            "host"?: string;
            /**
             * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
             */
            "port": number | string;
          };
          /**
           * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
           */
          "terminationGracePeriodSeconds"?: number;
          /**
           * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          "timeoutSeconds"?: number;
        };
        /**
         * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
         */
        "stdin"?: boolean;
        /**
         * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
         */
        "stdinOnce"?: boolean;
        /**
         * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
         */
        "terminationMessagePath"?: string;
        /**
         * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
         */
        "terminationMessagePolicy"?: string;
        /**
         * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
         */
        "tty"?: boolean;
        /**
         * volumeDevices is the list of block devices to be used by the container.
         */
        "volumeDevices"?: Array<{
          /**
           * devicePath is the path inside of the container that the device will be mapped to.
           */
          "devicePath": string;
          /**
           * name must match the name of a persistentVolumeClaim in the pod
           */
          "name": string;
        }>;
        /**
         * Pod volumes to mount into the container's filesystem. Cannot be updated.
         */
        "volumeMounts"?: Array<{
          /**
           * Path within the container at which the volume should be mounted.  Must not contain ':'.
           */
          "mountPath": string;
          /**
           * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
           */
          "mountPropagation"?: string;
          /**
           * This must match the Name of a Volume.
           */
          "name": string;
          /**
           * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
           */
          "readOnly"?: boolean;
          /**
           * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
           */
          "subPath"?: string;
          /**
           * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive.
           */
          "subPathExpr"?: string;
        }>;
        /**
         * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
         */
        "workingDir"?: string;
      }>;
      /**
       * Defines a PersistentVolumeClaim for PostgreSQL data. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
       */
      "dataVolumeClaimSpec": {
        /**
         * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
         */
        "accessModes": Array<string>;
        /**
         * dataSource field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) \* An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
         */
        "dataSource"?: {
          /**
           * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
           */
          "apiGroup"?: string;
          /**
           * Kind is the type of resource being referenced
           */
          "kind": string;
          /**
           * Name is the name of resource being referenced
           */
          "name": string;
        };
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: \* While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. \* While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
         */
        "dataSourceRef"?: {
          /**
           * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
           */
          "apiGroup"?: string;
          /**
           * Kind is the type of resource being referenced
           */
          "kind": string;
          /**
           * Name is the name of resource being referenced
           */
          "name": string;
        };
        /**
         * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        "resources": {
          /**
           * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "limits"?: {
            [key: string]: number | string;
          };
          /**
           * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "requests": {
            [key: string]: number | string;
          };
        };
        /**
         * selector is a label query over volumes to consider for binding.
         */
        "selector"?: {
          /**
           * matchExpressions is a list of label selector requirements. The requirements are ANDed.
           */
          "matchExpressions"?: Array<{
            /**
             * key is the label key that the selector applies to.
             */
            "key": string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            "operator": string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            "values"?: Array<string>;
          }>;
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        /**
         * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
         */
        "storageClassName"?: string;
        /**
         * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
         */
        "volumeMode"?: string;
        /**
         * volumeName is the binding reference to the PersistentVolume backing this claim.
         */
        "volumeName"?: string;
      };
      /**
       * Metadata contains metadata for PostgresCluster resources
       */
      "metadata"?: {
        "annotations"?: {
          [key: string]: string;
        };
        "labels"?: {
          [key: string]: string;
        };
      };
      /**
       * Minimum number of pods that should be available at a time. Defaults to one when the replicas field is greater than one.
       */
      "minAvailable"?: number | string;
      /**
       * Name that associates this set of PostgreSQL pods. This field is optional when only one instance set is defined. Each instance set in a cluster must have a unique name. The combined length of this and the cluster name must be 46 characters or less.
       */
      "name"?: string;
      /**
       * Priority class name for the PostgreSQL pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
       */
      "priorityClassName"?: string;
      /**
       * Number of desired PostgreSQL pods.
       */
      "replicas"?: number;
      /**
       * Compute resources of a PostgreSQL container.
       */
      "resources"?: {
        /**
         * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        "limits"?: {
          [key: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        "requests"?: {
          [key: string]: number | string;
        };
      };
      /**
       * Configuration for instance sidecar containers
       */
      "sidecars"?: {
        /**
         * Defines the configuration for the replica cert copy sidecar container
         */
        "replicaCertCopy"?: {
          /**
           * Resource requirements for a sidecar container
           */
          "resources"?: {
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "limits"?: {
              [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "requests"?: {
              [key: string]: number | string;
            };
          };
        };
      };
      /**
       * Tolerations of a PostgreSQL pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
       */
      "tolerations"?: Array<{
        /**
         * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
         */
        "effect"?: string;
        /**
         * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
         */
        "key"?: string;
        /**
         * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
         */
        "operator"?: string;
        /**
         * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
         */
        "tolerationSeconds"?: number;
        /**
         * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
         */
        "value"?: string;
      }>;
      /**
       * Topology spread constraints of a PostgreSQL pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
       */
      "topologySpreadConstraints"?: Array<{
        /**
         * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
         */
        "labelSelector"?: {
          /**
           * matchExpressions is a list of label selector requirements. The requirements are ANDed.
           */
          "matchExpressions"?: Array<{
            /**
             * key is the label key that the selector applies to.
             */
            "key": string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            "operator": string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            "values"?: Array<string>;
          }>;
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        /**
         * MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | |  P P  |  P P  |   P   | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
         */
        "maxSkew": number;
        /**
         * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats "global minimum" as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. 
         *  For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | |  P P  |  P P  |  P P  | The number of domains is less than 5(MinDomains), so "global minimum" is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew. 
         *  This is an alpha field and requires enabling MinDomainsInPodTopologySpread feature gate.
         */
        "minDomains"?: number;
        /**
         * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes match the node selector. e.g. If TopologyKey is "kubernetes.io/hostname", each Node is a domain of that topology. And, if TopologyKey is "topology.kubernetes.io/zone", each zone is a domain of that topology. It's a required field.
         */
        "topologyKey": string;
        /**
         * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assignment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it \*more\* imbalanced. It's a required field.
         */
        "whenUnsatisfiable": string;
      }>;
      /**
       * Defines a separate PersistentVolumeClaim for PostgreSQL's write-ahead log. More info: https://www.postgresql.org/docs/current/wal.html
       */
      "walVolumeClaimSpec"?: {
        /**
         * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
         */
        "accessModes": Array<string>;
        /**
         * dataSource field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) \* An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
         */
        "dataSource"?: {
          /**
           * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
           */
          "apiGroup"?: string;
          /**
           * Kind is the type of resource being referenced
           */
          "kind": string;
          /**
           * Name is the name of resource being referenced
           */
          "name": string;
        };
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: \* While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. \* While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
         */
        "dataSourceRef"?: {
          /**
           * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
           */
          "apiGroup"?: string;
          /**
           * Kind is the type of resource being referenced
           */
          "kind": string;
          /**
           * Name is the name of resource being referenced
           */
          "name": string;
        };
        /**
         * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        "resources": {
          /**
           * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "limits"?: {
            [key: string]: number | string;
          };
          /**
           * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "requests": {
            [key: string]: number | string;
          };
        };
        /**
         * selector is a label query over volumes to consider for binding.
         */
        "selector"?: {
          /**
           * matchExpressions is a list of label selector requirements. The requirements are ANDed.
           */
          "matchExpressions"?: Array<{
            /**
             * key is the label key that the selector applies to.
             */
            "key": string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            "operator": string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            "values"?: Array<string>;
          }>;
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        /**
         * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
         */
        "storageClassName"?: string;
        /**
         * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
         */
        "volumeMode"?: string;
        /**
         * volumeName is the binding reference to the PersistentVolume backing this claim.
         */
        "volumeName"?: string;
      };
    }>;
    /**
     * Metadata contains metadata for PostgresCluster resources
     */
    "metadata"?: {
      "annotations"?: {
        [key: string]: string;
      };
      "labels"?: {
        [key: string]: string;
      };
    };
    /**
     * The specification of monitoring tools that connect to PostgreSQL
     */
    "monitoring"?: {
      /**
       * PGMonitorSpec defines the desired state of the pgMonitor tool suite
       */
      "pgmonitor"?: {
        "exporter"?: {
          /**
           * Projected volumes containing custom PostgreSQL Exporter configuration.  Currently supports the customization of PostgreSQL Exporter queries. If a "queries.yml" file is detected in any volume projected using this field, it will be loaded using the "extend.query-path" flag: https://github.com/prometheus-community/postgres_exporter#flags Changing the values of field causes PostgreSQL and the exporter to restart.
           */
          "configuration"?: Array<{
            /**
             * configMap information about the configMap data to project
             */
            "configMap"?: {
              /**
               * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
               */
              "items"?: Array<{
                /**
                 * key is the key to project.
                 */
                "key": string;
                /**
                 * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                 */
                "path": string;
              }>;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * optional specify whether the ConfigMap or its keys must be defined
               */
              "optional"?: boolean;
            };
            /**
             * downwardAPI information about the downwardAPI data to project
             */
            "downwardAPI"?: {
              /**
               * Items is a list of DownwardAPIVolume file
               */
              "items"?: Array<{
                /**
                 * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
                 */
                "fieldRef"?: {
                  /**
                   * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                   */
                  "apiVersion"?: string;
                  /**
                   * Path of the field to select in the specified API version.
                   */
                  "fieldPath": string;
                };
                /**
                 * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
                 */
                "path": string;
                /**
                 * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                 */
                "resourceFieldRef"?: {
                  /**
                   * Container name: required for volumes, optional for env vars
                   */
                  "containerName"?: string;
                  /**
                   * Specifies the output format of the exposed resources, defaults to "1"
                   */
                  "divisor"?: number | string;
                  /**
                   * Required: resource to select
                   */
                  "resource": string;
                };
              }>;
            };
            /**
             * secret information about the secret data to project
             */
            "secret"?: {
              /**
               * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
               */
              "items"?: Array<{
                /**
                 * key is the key to project.
                 */
                "key": string;
                /**
                 * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                 */
                "path": string;
              }>;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * optional field specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * serviceAccountToken is information about the serviceAccountToken data to project
             */
            "serviceAccountToken"?: {
              /**
               * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
               */
              "audience"?: string;
              /**
               * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
               */
              "expirationSeconds"?: number;
              /**
               * path is the path relative to the mount point of the file to project the token into.
               */
              "path": string;
            };
          }>;
          /**
           * Projected secret containing custom TLS certificates to encrypt output from the exporter web server
           */
          "customTLSSecret"?: {
            /**
             * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
             */
            "items"?: Array<{
              /**
               * key is the key to project.
               */
              "key": string;
              /**
               * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
               */
              "path": string;
            }>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * optional field specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * The image name to use for crunchy-postgres-exporter containers. The image may also be set using the RELATED_IMAGE_PGEXPORTER environment variable.
           */
          "image"?: string;
          /**
           * Changing this value causes PostgreSQL and the exporter to restart. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers
           */
          "resources"?: {
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "limits"?: {
              [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "requests"?: {
              [key: string]: number | string;
            };
          };
        };
      };
    };
    /**
     * Whether or not the PostgreSQL cluster is being deployed to an OpenShift environment. If the field is unset, the operator will automatically detect the environment.
     */
    "openshift"?: boolean;
    "patroni"?: {
      /**
       * Patroni dynamic configuration settings. Changes to this value will be automatically reloaded without validation. Changes to certain PostgreSQL parameters cause PostgreSQL to restart. More info: https://patroni.readthedocs.io/en/latest/SETTINGS.html
       */
      "dynamicConfiguration"?: {
      };
      /**
       * TTL of the cluster leader lock. "Think of it as the length of time before initiation of the automatic failover process." Changing this value causes PostgreSQL to restart.
       */
      "leaderLeaseDurationSeconds"?: number;
      /**
       * The port on which Patroni should listen. Changing this value causes PostgreSQL to restart.
       */
      "port"?: number;
      /**
       * Switchover gives options to perform ad hoc switchovers in a PostgresCluster.
       */
      "switchover"?: {
        /**
         * Whether or not the operator should allow switchovers in a PostgresCluster
         */
        "enabled": boolean;
        /**
         * The instance that should become primary during a switchover. This field is optional when Type is "Switchover" and required when Type is "Failover". When it is not specified, a healthy replica is automatically selected.
         */
        "targetInstance"?: string;
        /**
         * Type of switchover to perform. Valid options are Switchover and Failover. "Switchover" changes the primary instance of a healthy PostgresCluster. "Failover" forces a particular instance to be primary, regardless of other factors. A TargetInstance must be specified to failover. NOTE: The Failover type is reserved as the "last resort" case.
         */
        "type"?: "Switchover" | "Failover";
      };
      /**
       * The interval for refreshing the leader lock and applying dynamicConfiguration. Must be less than leaderLeaseDurationSeconds. Changing this value causes PostgreSQL to restart.
       */
      "syncPeriodSeconds"?: number;
    };
    /**
     * Suspends the rollout and reconciliation of changes made to the PostgresCluster spec.
     */
    "paused"?: boolean;
    /**
     * The port on which PostgreSQL should listen.
     */
    "port"?: number;
    /**
     * The PostGIS extension version installed in the PostgreSQL image. When image is not set, indicates a PostGIS enabled image will be used.
     */
    "postGISVersion"?: string;
    /**
     * The major version of PostgreSQL installed in the PostgreSQL image
     */
    "postgresVersion": number;
    /**
     * The specification of a proxy that connects to PostgreSQL.
     */
    "proxy"?: {
      /**
       * Defines a PgBouncer proxy and connection pooler.
       */
      "pgBouncer": {
        /**
         * Scheduling constraints of a PgBouncer pod. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
         */
        "affinity"?: {
          /**
           * Describes node affinity scheduling rules for the pod.
           */
          "nodeAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A node selector term, associated with the corresponding weight.
               */
              "preference": {
                /**
                 * A list of node selector requirements by node's labels.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * A list of node selector requirements by node's fields.
                 */
                "matchFields"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
              };
              /**
               * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: {
              /**
               * Required. A list of node selector terms. The terms are ORed.
               */
              "nodeSelectorTerms": Array<{
                /**
                 * A list of node selector requirements by node's labels.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * A list of node selector requirements by node's fields.
                 */
                "matchFields"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
              }>;
            };
          };
          /**
           * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
           */
          "podAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * Required. A pod affinity term, associated with the corresponding weight.
               */
              "podAffinityTerm": {
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              };
              /**
               * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
               */
              "namespaceSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            }>;
          };
          /**
           * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
           */
          "podAntiAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * Required. A pod affinity term, associated with the corresponding weight.
               */
              "podAffinityTerm": {
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              };
              /**
               * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
               */
              "namespaceSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            }>;
          };
        };
        /**
         * Configuration settings for the PgBouncer process. Changes to any of these values will be automatically reloaded without validation. Be careful, as you may put PgBouncer into an unusable state. More info: https://www.pgbouncer.org/usage.html#reload
         */
        "config"?: {
          /**
           * PgBouncer database definitions. The key is the database requested by a client while the value is a libpq-styled connection string. The special key "\*" acts as a fallback. When this field is empty, PgBouncer is configured with a single "\*" entry that connects to the primary PostgreSQL instance. More info: https://www.pgbouncer.org/config.html#section-databases
           */
          "databases"?: {
            [key: string]: string;
          };
          /**
           * Files to mount under "/etc/pgbouncer". When specified, settings in the "pgbouncer.ini" file are loaded before all others. From there, other files may be included by absolute path. Changing these references causes PgBouncer to restart, but changes to the file contents are automatically reloaded. More info: https://www.pgbouncer.org/config.html#include-directive
           */
          "files"?: Array<{
            /**
             * configMap information about the configMap data to project
             */
            "configMap"?: {
              /**
               * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
               */
              "items"?: Array<{
                /**
                 * key is the key to project.
                 */
                "key": string;
                /**
                 * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                 */
                "path": string;
              }>;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * optional specify whether the ConfigMap or its keys must be defined
               */
              "optional"?: boolean;
            };
            /**
             * downwardAPI information about the downwardAPI data to project
             */
            "downwardAPI"?: {
              /**
               * Items is a list of DownwardAPIVolume file
               */
              "items"?: Array<{
                /**
                 * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
                 */
                "fieldRef"?: {
                  /**
                   * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                   */
                  "apiVersion"?: string;
                  /**
                   * Path of the field to select in the specified API version.
                   */
                  "fieldPath": string;
                };
                /**
                 * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
                 */
                "path": string;
                /**
                 * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                 */
                "resourceFieldRef"?: {
                  /**
                   * Container name: required for volumes, optional for env vars
                   */
                  "containerName"?: string;
                  /**
                   * Specifies the output format of the exposed resources, defaults to "1"
                   */
                  "divisor"?: number | string;
                  /**
                   * Required: resource to select
                   */
                  "resource": string;
                };
              }>;
            };
            /**
             * secret information about the secret data to project
             */
            "secret"?: {
              /**
               * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
               */
              "items"?: Array<{
                /**
                 * key is the key to project.
                 */
                "key": string;
                /**
                 * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                 */
                "path": string;
              }>;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * optional field specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * serviceAccountToken is information about the serviceAccountToken data to project
             */
            "serviceAccountToken"?: {
              /**
               * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
               */
              "audience"?: string;
              /**
               * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
               */
              "expirationSeconds"?: number;
              /**
               * path is the path relative to the mount point of the file to project the token into.
               */
              "path": string;
            };
          }>;
          /**
           * Settings that apply to the entire PgBouncer process. More info: https://www.pgbouncer.org/config.html
           */
          "global"?: {
            [key: string]: string;
          };
          /**
           * Connection settings specific to particular users. More info: https://www.pgbouncer.org/config.html#section-users
           */
          "users"?: {
            [key: string]: string;
          };
        };
        /**
         * Custom sidecars for a PgBouncer pod. Changing this value causes PgBouncer to restart.
         */
        "containers"?: Array<{
          /**
           * Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
           */
          "args"?: Array<string>;
          /**
           * Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
           */
          "command"?: Array<string>;
          /**
           * List of environment variables to set in the container. Cannot be updated.
           */
          "env"?: Array<{
            /**
             * Name of the environment variable. Must be a C_IDENTIFIER.
             */
            "name": string;
            /**
             * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
             */
            "value"?: string;
            /**
             * Source for the environment variable's value. Cannot be used if value is not empty.
             */
            "valueFrom"?: {
              /**
               * Selects a key of a ConfigMap.
               */
              "configMapKeyRef"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
               */
              "fieldRef"?: {
                /**
                 * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                 */
                "apiVersion"?: string;
                /**
                 * Path of the field to select in the specified API version.
                 */
                "fieldPath": string;
              };
              /**
               * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
               */
              "resourceFieldRef"?: {
                /**
                 * Container name: required for volumes, optional for env vars
                 */
                "containerName"?: string;
                /**
                 * Specifies the output format of the exposed resources, defaults to "1"
                 */
                "divisor"?: number | string;
                /**
                 * Required: resource to select
                 */
                "resource": string;
              };
              /**
               * Selects a key of a secret in the pod's namespace
               */
              "secretKeyRef"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
          }>;
          /**
           * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
           */
          "envFrom"?: Array<{
            /**
             * The ConfigMap to select from
             */
            "configMapRef"?: {
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * Specify whether the ConfigMap must be defined
               */
              "optional"?: boolean;
            };
            /**
             * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
             */
            "prefix"?: string;
            /**
             * The Secret to select from
             */
            "secretRef"?: {
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * Specify whether the Secret must be defined
               */
              "optional"?: boolean;
            };
          }>;
          /**
           * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
           */
          "image"?: string;
          /**
           * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
           */
          "imagePullPolicy"?: string;
          /**
           * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
           */
          "lifecycle"?: {
            /**
             * PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
             */
            "postStart"?: {
              /**
               * Exec specifies the action to take.
               */
              "exec"?: {
                /**
                 * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                 */
                "command"?: Array<string>;
              };
              /**
               * HTTPGet specifies the http request to perform.
               */
              "httpGet"?: {
                /**
                 * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
                 */
                "host"?: string;
                /**
                 * Custom headers to set in the request. HTTP allows repeated headers.
                 */
                "httpHeaders"?: Array<{
                  /**
                   * The header field name
                   */
                  "name": string;
                  /**
                   * The header field value
                   */
                  "value": string;
                }>;
                /**
                 * Path to access on the HTTP server.
                 */
                "path"?: string;
                /**
                 * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                 */
                "port": number | string;
                /**
                 * Scheme to use for connecting to the host. Defaults to HTTP.
                 */
                "scheme"?: string;
              };
              /**
               * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified.
               */
              "tcpSocket"?: {
                /**
                 * Optional: Host name to connect to, defaults to the pod IP.
                 */
                "host"?: string;
                /**
                 * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                 */
                "port": number | string;
              };
            };
            /**
             * PreStop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The Pod's termination grace period countdown begins before the PreStop hook is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period (unless delayed by finalizers). Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
             */
            "preStop"?: {
              /**
               * Exec specifies the action to take.
               */
              "exec"?: {
                /**
                 * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                 */
                "command"?: Array<string>;
              };
              /**
               * HTTPGet specifies the http request to perform.
               */
              "httpGet"?: {
                /**
                 * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
                 */
                "host"?: string;
                /**
                 * Custom headers to set in the request. HTTP allows repeated headers.
                 */
                "httpHeaders"?: Array<{
                  /**
                   * The header field name
                   */
                  "name": string;
                  /**
                   * The header field value
                   */
                  "value": string;
                }>;
                /**
                 * Path to access on the HTTP server.
                 */
                "path"?: string;
                /**
                 * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                 */
                "port": number | string;
                /**
                 * Scheme to use for connecting to the host. Defaults to HTTP.
                 */
                "scheme"?: string;
              };
              /**
               * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified.
               */
              "tcpSocket"?: {
                /**
                 * Optional: Host name to connect to, defaults to the pod IP.
                 */
                "host"?: string;
                /**
                 * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                 */
                "port": number | string;
              };
            };
          };
          /**
           * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          "livenessProbe"?: {
            /**
             * Exec specifies the action to take.
             */
            "exec"?: {
              /**
               * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
               */
              "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            "failureThreshold"?: number;
            /**
             * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
             */
            "grpc"?: {
              /**
               * Port number of the gRPC service. Number must be in the range 1 to 65535.
               */
              "port": number;
              /**
               * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). 
               *  If this is not specified, the default behavior is defined by gRPC.
               */
              "service"?: string;
            };
            /**
             * HTTPGet specifies the http request to perform.
             */
            "httpGet"?: {
              /**
               * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
               */
              "host"?: string;
              /**
               * Custom headers to set in the request. HTTP allows repeated headers.
               */
              "httpHeaders"?: Array<{
                /**
                 * The header field name
                 */
                "name": string;
                /**
                 * The header field value
                 */
                "value": string;
              }>;
              /**
               * Path to access on the HTTP server.
               */
              "path"?: string;
              /**
               * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
               */
              "port": number | string;
              /**
               * Scheme to use for connecting to the host. Defaults to HTTP.
               */
              "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
             */
            "successThreshold"?: number;
            /**
             * TCPSocket specifies an action involving a TCP port.
             */
            "tcpSocket"?: {
              /**
               * Optional: Host name to connect to, defaults to the pod IP.
               */
              "host"?: string;
              /**
               * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
               */
              "port": number | string;
            };
            /**
             * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            "terminationGracePeriodSeconds"?: number;
            /**
             * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            "timeoutSeconds"?: number;
          };
          /**
           * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
           */
          "name": string;
          /**
           * List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.
           */
          "ports"?: Array<{
            /**
             * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
             */
            "containerPort": number;
            /**
             * What host IP to bind the external port to.
             */
            "hostIP"?: string;
            /**
             * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
             */
            "hostPort"?: number;
            /**
             * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
             */
            "name"?: string;
            /**
             * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
             */
            "protocol"?: string;
          }>;
          /**
           * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          "readinessProbe"?: {
            /**
             * Exec specifies the action to take.
             */
            "exec"?: {
              /**
               * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
               */
              "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            "failureThreshold"?: number;
            /**
             * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
             */
            "grpc"?: {
              /**
               * Port number of the gRPC service. Number must be in the range 1 to 65535.
               */
              "port": number;
              /**
               * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). 
               *  If this is not specified, the default behavior is defined by gRPC.
               */
              "service"?: string;
            };
            /**
             * HTTPGet specifies the http request to perform.
             */
            "httpGet"?: {
              /**
               * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
               */
              "host"?: string;
              /**
               * Custom headers to set in the request. HTTP allows repeated headers.
               */
              "httpHeaders"?: Array<{
                /**
                 * The header field name
                 */
                "name": string;
                /**
                 * The header field value
                 */
                "value": string;
              }>;
              /**
               * Path to access on the HTTP server.
               */
              "path"?: string;
              /**
               * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
               */
              "port": number | string;
              /**
               * Scheme to use for connecting to the host. Defaults to HTTP.
               */
              "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
             */
            "successThreshold"?: number;
            /**
             * TCPSocket specifies an action involving a TCP port.
             */
            "tcpSocket"?: {
              /**
               * Optional: Host name to connect to, defaults to the pod IP.
               */
              "host"?: string;
              /**
               * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
               */
              "port": number | string;
            };
            /**
             * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            "terminationGracePeriodSeconds"?: number;
            /**
             * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            "timeoutSeconds"?: number;
          };
          /**
           * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "resources"?: {
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "limits"?: {
              [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "requests"?: {
              [key: string]: number | string;
            };
          };
          /**
           * SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
           */
          "securityContext"?: {
            /**
             * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
             */
            "allowPrivilegeEscalation"?: boolean;
            /**
             * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
             */
            "capabilities"?: {
              /**
               * Added capabilities
               */
              "add"?: Array<string>;
              /**
               * Removed capabilities
               */
              "drop"?: Array<string>;
            };
            /**
             * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
             */
            "privileged"?: boolean;
            /**
             * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
             */
            "procMount"?: string;
            /**
             * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
             */
            "readOnlyRootFilesystem"?: boolean;
            /**
             * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
             */
            "runAsGroup"?: number;
            /**
             * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
             */
            "runAsNonRoot"?: boolean;
            /**
             * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
             */
            "runAsUser"?: number;
            /**
             * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
             */
            "seLinuxOptions"?: {
              /**
               * Level is SELinux level label that applies to the container.
               */
              "level"?: string;
              /**
               * Role is a SELinux role label that applies to the container.
               */
              "role"?: string;
              /**
               * Type is a SELinux type label that applies to the container.
               */
              "type"?: string;
              /**
               * User is a SELinux user label that applies to the container.
               */
              "user"?: string;
            };
            /**
             * The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.
             */
            "seccompProfile"?: {
              /**
               * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost".
               */
              "localhostProfile"?: string;
              /**
               * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
               */
              "type": string;
            };
            /**
             * The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
             */
            "windowsOptions"?: {
              /**
               * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
               */
              "gmsaCredentialSpec"?: string;
              /**
               * GMSACredentialSpecName is the name of the GMSA credential spec to use.
               */
              "gmsaCredentialSpecName"?: string;
              /**
               * HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true.
               */
              "hostProcess"?: boolean;
              /**
               * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
               */
              "runAsUserName"?: string;
            };
          };
          /**
           * StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          "startupProbe"?: {
            /**
             * Exec specifies the action to take.
             */
            "exec"?: {
              /**
               * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
               */
              "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            "failureThreshold"?: number;
            /**
             * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
             */
            "grpc"?: {
              /**
               * Port number of the gRPC service. Number must be in the range 1 to 65535.
               */
              "port": number;
              /**
               * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). 
               *  If this is not specified, the default behavior is defined by gRPC.
               */
              "service"?: string;
            };
            /**
             * HTTPGet specifies the http request to perform.
             */
            "httpGet"?: {
              /**
               * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
               */
              "host"?: string;
              /**
               * Custom headers to set in the request. HTTP allows repeated headers.
               */
              "httpHeaders"?: Array<{
                /**
                 * The header field name
                 */
                "name": string;
                /**
                 * The header field value
                 */
                "value": string;
              }>;
              /**
               * Path to access on the HTTP server.
               */
              "path"?: string;
              /**
               * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
               */
              "port": number | string;
              /**
               * Scheme to use for connecting to the host. Defaults to HTTP.
               */
              "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
             */
            "successThreshold"?: number;
            /**
             * TCPSocket specifies an action involving a TCP port.
             */
            "tcpSocket"?: {
              /**
               * Optional: Host name to connect to, defaults to the pod IP.
               */
              "host"?: string;
              /**
               * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
               */
              "port": number | string;
            };
            /**
             * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            "terminationGracePeriodSeconds"?: number;
            /**
             * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            "timeoutSeconds"?: number;
          };
          /**
           * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
           */
          "stdin"?: boolean;
          /**
           * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
           */
          "stdinOnce"?: boolean;
          /**
           * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
           */
          "terminationMessagePath"?: string;
          /**
           * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
           */
          "terminationMessagePolicy"?: string;
          /**
           * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
           */
          "tty"?: boolean;
          /**
           * volumeDevices is the list of block devices to be used by the container.
           */
          "volumeDevices"?: Array<{
            /**
             * devicePath is the path inside of the container that the device will be mapped to.
             */
            "devicePath": string;
            /**
             * name must match the name of a persistentVolumeClaim in the pod
             */
            "name": string;
          }>;
          /**
           * Pod volumes to mount into the container's filesystem. Cannot be updated.
           */
          "volumeMounts"?: Array<{
            /**
             * Path within the container at which the volume should be mounted.  Must not contain ':'.
             */
            "mountPath": string;
            /**
             * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
             */
            "mountPropagation"?: string;
            /**
             * This must match the Name of a Volume.
             */
            "name": string;
            /**
             * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
             */
            "readOnly"?: boolean;
            /**
             * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
             */
            "subPath"?: string;
            /**
             * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive.
             */
            "subPathExpr"?: string;
          }>;
          /**
           * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
           */
          "workingDir"?: string;
        }>;
        /**
         * A secret projection containing a certificate and key with which to encrypt connections to PgBouncer. The "tls.crt", "tls.key", and "ca.crt" paths must be PEM-encoded certificates and keys. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/configuration/secret/#projection-of-secret-keys-to-specific-paths
         */
        "customTLSSecret"?: {
          /**
           * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
           */
          "items"?: Array<{
            /**
             * key is the key to project.
             */
            "key": string;
            /**
             * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
             */
            "mode"?: number;
            /**
             * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
             */
            "path": string;
          }>;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * optional field specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * Name of a container image that can run PgBouncer 1.15 or newer. Changing this value causes PgBouncer to restart. The image may also be set using the RELATED_IMAGE_PGBOUNCER environment variable. More info: https://kubernetes.io/docs/concepts/containers/images
         */
        "image"?: string;
        /**
         * Metadata contains metadata for PostgresCluster resources
         */
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        /**
         * Minimum number of pods that should be available at a time. Defaults to one when the replicas field is greater than one.
         */
        "minAvailable"?: number | string;
        /**
         * Port on which PgBouncer should listen for client connections. Changing this value causes PgBouncer to restart.
         */
        "port"?: number;
        /**
         * Priority class name for the pgBouncer pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
         */
        "priorityClassName"?: string;
        /**
         * Number of desired PgBouncer pods.
         */
        "replicas"?: number;
        /**
         * Compute resources of a PgBouncer container. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers
         */
        "resources"?: {
          /**
           * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "limits"?: {
            [key: string]: number | string;
          };
          /**
           * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "requests"?: {
            [key: string]: number | string;
          };
        };
        /**
         * Specification of the service that exposes PgBouncer.
         */
        "service"?: {
          /**
           * Metadata contains metadata for PostgresCluster resources
           */
          "metadata"?: {
            "annotations"?: {
              [key: string]: string;
            };
            "labels"?: {
              [key: string]: string;
            };
          };
          /**
           * The port on which this service is exposed when type is NodePort or LoadBalancer. Value must be in-range and not in use or the operation will fail. If unspecified, a port will be allocated if this Service requires one. - https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
           */
          "nodePort"?: number;
          /**
           * More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
           */
          "type"?: "ClusterIP" | "NodePort" | "LoadBalancer";
        };
        /**
         * Configuration for pgBouncer sidecar containers
         */
        "sidecars"?: {
          /**
           * Defines the configuration for the pgBouncer config sidecar container
           */
          "pgbouncerConfig"?: {
            /**
             * Resource requirements for a sidecar container
             */
            "resources"?: {
              /**
               * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
               */
              "limits"?: {
                [key: string]: number | string;
              };
              /**
               * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
               */
              "requests"?: {
                [key: string]: number | string;
              };
            };
          };
        };
        /**
         * Tolerations of a PgBouncer pod. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
         */
        "tolerations"?: Array<{
          /**
           * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
           */
          "effect"?: string;
          /**
           * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
           */
          "key"?: string;
          /**
           * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
           */
          "operator"?: string;
          /**
           * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
           */
          "tolerationSeconds"?: number;
          /**
           * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
           */
          "value"?: string;
        }>;
        /**
         * Topology spread constraints of a PgBouncer pod. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
         */
        "topologySpreadConstraints"?: Array<{
          /**
           * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
           */
          "labelSelector"?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            "matchExpressions"?: Array<{
              /**
               * key is the label key that the selector applies to.
               */
              "key": string;
              /**
               * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              "operator": string;
              /**
               * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
               */
              "values"?: Array<string>;
            }>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          /**
           * MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | |  P P  |  P P  |   P   | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
           */
          "maxSkew": number;
          /**
           * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats "global minimum" as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. 
           *  For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | |  P P  |  P P  |  P P  | The number of domains is less than 5(MinDomains), so "global minimum" is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew. 
           *  This is an alpha field and requires enabling MinDomainsInPodTopologySpread feature gate.
           */
          "minDomains"?: number;
          /**
           * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes match the node selector. e.g. If TopologyKey is "kubernetes.io/hostname", each Node is a domain of that topology. And, if TopologyKey is "topology.kubernetes.io/zone", each zone is a domain of that topology. It's a required field.
           */
          "topologyKey": string;
          /**
           * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assignment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it \*more\* imbalanced. It's a required field.
           */
          "whenUnsatisfiable": string;
        }>;
      };
    };
    /**
     * Specification of the service that exposes the PostgreSQL primary instance.
     */
    "service"?: {
      /**
       * Metadata contains metadata for PostgresCluster resources
       */
      "metadata"?: {
        "annotations"?: {
          [key: string]: string;
        };
        "labels"?: {
          [key: string]: string;
        };
      };
      /**
       * The port on which this service is exposed when type is NodePort or LoadBalancer. Value must be in-range and not in use or the operation will fail. If unspecified, a port will be allocated if this Service requires one. - https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
       */
      "nodePort"?: number;
      /**
       * More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
       */
      "type"?: "ClusterIP" | "NodePort" | "LoadBalancer";
    };
    /**
     * Whether or not the PostgreSQL cluster should be stopped. When this is true, workloads are scaled to zero and CronJobs are suspended. Other resources, such as Services and Volumes, remain in place.
     */
    "shutdown"?: boolean;
    /**
     * Run this cluster as a read-only copy of an existing cluster or archive.
     */
    "standby"?: {
      /**
       * Whether or not the PostgreSQL cluster should be read-only. When this is true, WAL files are applied from a pgBackRest repository or another PostgreSQL server.
       */
      "enabled"?: boolean;
      /**
       * Network address of the PostgreSQL server to follow via streaming replication.
       */
      "host"?: string;
      /**
       * Network port of the PostgreSQL server to follow via streaming replication.
       */
      "port"?: number;
      /**
       * The name of the pgBackRest repository to follow for WAL files.
       */
      "repoName"?: string;
    };
    /**
     * A list of group IDs applied to the process of a container. These can be useful when accessing shared file systems with constrained permissions. More info: https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#security-context
     */
    "supplementalGroups"?: Array<number>;
    /**
     * The specification of a user interface that connects to PostgreSQL.
     */
    "userInterface"?: {
      /**
       * Defines a pgAdmin user interface.
       */
      "pgAdmin": {
        /**
         * Scheduling constraints of a pgAdmin pod. Changing this value causes pgAdmin to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
         */
        "affinity"?: {
          /**
           * Describes node affinity scheduling rules for the pod.
           */
          "nodeAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A node selector term, associated with the corresponding weight.
               */
              "preference": {
                /**
                 * A list of node selector requirements by node's labels.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * A list of node selector requirements by node's fields.
                 */
                "matchFields"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
              };
              /**
               * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: {
              /**
               * Required. A list of node selector terms. The terms are ORed.
               */
              "nodeSelectorTerms": Array<{
                /**
                 * A list of node selector requirements by node's labels.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * A list of node selector requirements by node's fields.
                 */
                "matchFields"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
              }>;
            };
          };
          /**
           * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
           */
          "podAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * Required. A pod affinity term, associated with the corresponding weight.
               */
              "podAffinityTerm": {
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              };
              /**
               * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
               */
              "namespaceSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            }>;
          };
          /**
           * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
           */
          "podAntiAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * Required. A pod affinity term, associated with the corresponding weight.
               */
              "podAffinityTerm": {
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                 */
                "namespaceSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              };
              /**
               * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
               */
              "namespaceSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            }>;
          };
        };
        /**
         * Configuration settings for the pgAdmin process. Changes to any of these values will be loaded without validation. Be careful, as you may put pgAdmin into an unusable state.
         */
        "config"?: {
          /**
           * Files allows the user to mount projected volumes into the pgAdmin container so that files can be referenced by pgAdmin as needed.
           */
          "files"?: Array<{
            /**
             * configMap information about the configMap data to project
             */
            "configMap"?: {
              /**
               * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
               */
              "items"?: Array<{
                /**
                 * key is the key to project.
                 */
                "key": string;
                /**
                 * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                 */
                "path": string;
              }>;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * optional specify whether the ConfigMap or its keys must be defined
               */
              "optional"?: boolean;
            };
            /**
             * downwardAPI information about the downwardAPI data to project
             */
            "downwardAPI"?: {
              /**
               * Items is a list of DownwardAPIVolume file
               */
              "items"?: Array<{
                /**
                 * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
                 */
                "fieldRef"?: {
                  /**
                   * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                   */
                  "apiVersion"?: string;
                  /**
                   * Path of the field to select in the specified API version.
                   */
                  "fieldPath": string;
                };
                /**
                 * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
                 */
                "path": string;
                /**
                 * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                 */
                "resourceFieldRef"?: {
                  /**
                   * Container name: required for volumes, optional for env vars
                   */
                  "containerName"?: string;
                  /**
                   * Specifies the output format of the exposed resources, defaults to "1"
                   */
                  "divisor"?: number | string;
                  /**
                   * Required: resource to select
                   */
                  "resource": string;
                };
              }>;
            };
            /**
             * secret information about the secret data to project
             */
            "secret"?: {
              /**
               * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
               */
              "items"?: Array<{
                /**
                 * key is the key to project.
                 */
                "key": string;
                /**
                 * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                 */
                "path": string;
              }>;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name"?: string;
              /**
               * optional field specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * serviceAccountToken is information about the serviceAccountToken data to project
             */
            "serviceAccountToken"?: {
              /**
               * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
               */
              "audience"?: string;
              /**
               * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
               */
              "expirationSeconds"?: number;
              /**
               * path is the path relative to the mount point of the file to project the token into.
               */
              "path": string;
            };
          }>;
          /**
           * A Secret containing the value for the LDAP_BIND_PASSWORD setting. More info: https://www.pgadmin.org/docs/pgadmin4/latest/ldap.html
           */
          "ldapBindPassword"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * Settings for the pgAdmin server process. Keys should be uppercase and values must be constants. More info: https://www.pgadmin.org/docs/pgadmin4/latest/config_py.html
           */
          "settings"?: {
          };
        };
        /**
         * Defines a PersistentVolumeClaim for pgAdmin data. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
         */
        "dataVolumeClaimSpec": {
          /**
           * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
           */
          "accessModes"?: Array<string>;
          /**
           * dataSource field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) \* An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
           */
          "dataSource"?: {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            "apiGroup"?: string;
            /**
             * Kind is the type of resource being referenced
             */
            "kind": string;
            /**
             * Name is the name of resource being referenced
             */
            "name": string;
          };
          /**
           * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: \* While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. \* While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
           */
          "dataSourceRef"?: {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
             */
            "apiGroup"?: string;
            /**
             * Kind is the type of resource being referenced
             */
            "kind": string;
            /**
             * Name is the name of resource being referenced
             */
            "name": string;
          };
          /**
           * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
           */
          "resources"?: {
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "limits"?: {
              [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "requests"?: {
              [key: string]: number | string;
            };
          };
          /**
           * selector is a label query over volumes to consider for binding.
           */
          "selector"?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            "matchExpressions"?: Array<{
              /**
               * key is the label key that the selector applies to.
               */
              "key": string;
              /**
               * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              "operator": string;
              /**
               * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
               */
              "values"?: Array<string>;
            }>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          /**
           * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
           */
          "storageClassName"?: string;
          /**
           * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
           */
          "volumeMode"?: string;
          /**
           * volumeName is the binding reference to the PersistentVolume backing this claim.
           */
          "volumeName"?: string;
        };
        /**
         * Name of a container image that can run pgAdmin 4. Changing this value causes pgAdmin to restart. The image may also be set using the RELATED_IMAGE_PGADMIN environment variable. More info: https://kubernetes.io/docs/concepts/containers/images
         */
        "image"?: string;
        /**
         * Metadata contains metadata for PostgresCluster resources
         */
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        /**
         * Priority class name for the pgAdmin pod. Changing this value causes pgAdmin to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
         */
        "priorityClassName"?: string;
        /**
         * Number of desired pgAdmin pods.
         */
        "replicas"?: number;
        /**
         * Compute resources of a pgAdmin container. Changing this value causes pgAdmin to restart. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers
         */
        "resources"?: {
          /**
           * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "limits"?: {
            [key: string]: number | string;
          };
          /**
           * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "requests"?: {
            [key: string]: number | string;
          };
        };
        /**
         * Specification of the service that exposes pgAdmin.
         */
        "service"?: {
          /**
           * Metadata contains metadata for PostgresCluster resources
           */
          "metadata"?: {
            "annotations"?: {
              [key: string]: string;
            };
            "labels"?: {
              [key: string]: string;
            };
          };
          /**
           * The port on which this service is exposed when type is NodePort or LoadBalancer. Value must be in-range and not in use or the operation will fail. If unspecified, a port will be allocated if this Service requires one. - https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
           */
          "nodePort"?: number;
          /**
           * More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
           */
          "type"?: "ClusterIP" | "NodePort" | "LoadBalancer";
        };
        /**
         * Tolerations of a pgAdmin pod. Changing this value causes pgAdmin to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
         */
        "tolerations"?: Array<{
          /**
           * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
           */
          "effect"?: string;
          /**
           * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
           */
          "key"?: string;
          /**
           * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
           */
          "operator"?: string;
          /**
           * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
           */
          "tolerationSeconds"?: number;
          /**
           * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
           */
          "value"?: string;
        }>;
        /**
         * Topology spread constraints of a pgAdmin pod. Changing this value causes pgAdmin to restart. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
         */
        "topologySpreadConstraints"?: Array<{
          /**
           * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
           */
          "labelSelector"?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            "matchExpressions"?: Array<{
              /**
               * key is the label key that the selector applies to.
               */
              "key": string;
              /**
               * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              "operator": string;
              /**
               * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
               */
              "values"?: Array<string>;
            }>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          /**
           * MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | |  P P  |  P P  |   P   | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
           */
          "maxSkew": number;
          /**
           * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats "global minimum" as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. 
           *  For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | |  P P  |  P P  |  P P  | The number of domains is less than 5(MinDomains), so "global minimum" is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew. 
           *  This is an alpha field and requires enabling MinDomainsInPodTopologySpread feature gate.
           */
          "minDomains"?: number;
          /**
           * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes match the node selector. e.g. If TopologyKey is "kubernetes.io/hostname", each Node is a domain of that topology. And, if TopologyKey is "topology.kubernetes.io/zone", each zone is a domain of that topology. It's a required field.
           */
          "topologyKey": string;
          /**
           * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assignment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it \*more\* imbalanced. It's a required field.
           */
          "whenUnsatisfiable": string;
        }>;
      };
    };
    /**
     * Users to create inside PostgreSQL and the databases they should access. The default creates one user that can access one database matching the PostgresCluster name. An empty list creates no users. Removing a user from this list does NOT drop the user nor revoke their access.
     */
    "users"?: Array<{
      /**
       * Databases to which this user can connect and create objects. Removing a database from this list does NOT revoke access. This field is ignored for the "postgres" user.
       */
      "databases"?: Array<string>;
      /**
       * The name of this PostgreSQL user. The value may contain only lowercase letters, numbers, and hyphen so that it fits into Kubernetes metadata.
       */
      "name": string;
      /**
       * ALTER ROLE options except for PASSWORD. This field is ignored for the "postgres" user. More info: https://www.postgresql.org/docs/current/role-attributes.html
       */
      "options"?: string;
      /**
       * Properties of the password generated for this user.
       */
      "password"?: {
        /**
         * Type of password to generate. Defaults to ASCII. Valid options are ASCII and AlphaNumeric. "ASCII" passwords contain letters, numbers, and symbols from the US-ASCII character set. "AlphaNumeric" passwords contain letters and numbers from the US-ASCII character set.
         */
        "type": "ASCII" | "AlphaNumeric";
      };
    }>;
  };
  /**
   * PostgresClusterStatus defines the observed state of PostgresCluster
   */
  "status"?: {
    /**
     * conditions represent the observations of postgrescluster's current state. Known .status.conditions.type are: "PersistentVolumeResizing", "Progressing", "ProxyAvailable"
     */
    "conditions"?: Array<{
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
       */
      "lastTransitionTime": string;
      /**
       * message is a human readable message indicating details about the transition. This may be an empty string.
       */
      "message": string;
      /**
       * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
       */
      "observedGeneration"?: number;
      /**
       * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
       */
      "reason": string;
      /**
       * status of the condition, one of True, False, Unknown.
       */
      "status": "True" | "False" | "Unknown";
      /**
       * type of condition in CamelCase.
       */
      "type": string;
    }>;
    /**
     * DatabaseInitSQL state of custom database initialization in the cluster
     */
    "databaseInitSQL"?: string;
    /**
     * Identifies the databases that have been installed into PostgreSQL.
     */
    "databaseRevision"?: string;
    /**
     * Current state of PostgreSQL instances.
     */
    "instances"?: Array<{
      "name": string;
      /**
       * Total number of ready pods.
       */
      "readyReplicas"?: number;
      /**
       * Total number of pods.
       */
      "replicas"?: number;
      /**
       * Total number of pods that have the desired specification.
       */
      "updatedReplicas"?: number;
    }>;
    /**
     * Current state of PostgreSQL cluster monitoring tool configuration
     */
    "monitoring"?: {
      "exporterConfiguration"?: string;
    };
    /**
     * observedGeneration represents the .metadata.generation on which the status was based.
     */
    "observedGeneration"?: number;
    "patroni"?: {
      /**
       * Tracks the execution of the switchover requests.
       */
      "switchover"?: string;
      /**
       * Tracks the current timeline during switchovers
       */
      "switchoverTimeline"?: number;
      /**
       * The PostgreSQL system identifier reported by Patroni.
       */
      "systemIdentifier"?: string;
    };
    /**
     * Status information for pgBackRest
     */
    "pgbackrest"?: {
      /**
       * Status information for manual backups
       */
      "manualBackup"?: {
        /**
         * The number of actively running manual backup Pods.
         */
        "active"?: number;
        /**
         * Represents the time the manual backup Job was determined by the Job controller to be completed.  This field is only set if the backup completed successfully. Additionally, it is represented in RFC3339 form and is in UTC.
         */
        "completionTime"?: string;
        /**
         * The number of Pods for the manual backup Job that reached the "Failed" phase.
         */
        "failed"?: number;
        /**
         * Specifies whether or not the Job is finished executing (does not indicate success or failure).
         */
        "finished": boolean;
        /**
         * A unique identifier for the manual backup as provided using the "pgbackrest-backup" annotation when initiating a backup.
         */
        "id": string;
        /**
         * Represents the time the manual backup Job was acknowledged by the Job controller. It is represented in RFC3339 form and is in UTC.
         */
        "startTime"?: string;
        /**
         * The number of Pods for the manual backup Job that reached the "Succeeded" phase.
         */
        "succeeded"?: number;
      };
      /**
       * Status information for the pgBackRest dedicated repository host
       */
      "repoHost"?: {
        /**
         * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
         */
        "apiVersion"?: string;
        /**
         * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        "kind"?: string;
        /**
         * Whether or not the pgBackRest repository host is ready for use
         */
        "ready"?: boolean;
      };
      /**
       * Status information for pgBackRest repositories
       */
      "repos"?: Array<{
        /**
         * Whether or not the pgBackRest repository PersistentVolumeClaim is bound to a volume
         */
        "bound"?: boolean;
        /**
         * The name of the pgBackRest repository
         */
        "name": string;
        /**
         * ReplicaCreateBackupReady indicates whether a backup exists in the repository as needed to bootstrap replicas.
         */
        "replicaCreateBackupComplete"?: boolean;
        /**
         * A hash of the required fields in the spec for defining an Azure, GCS or S3 repository, Utilizd to detect changes to these fields and then execute pgBackRest stanza-create commands accordingly.
         */
        "repoOptionsHash"?: string;
        /**
         * Specifies whether or not a stanza has been successfully created for the repository
         */
        "stanzaCreated"?: boolean;
        /**
         * The name of the volume the containing the pgBackRest repository
         */
        "volume"?: string;
      }>;
      /**
       * Status information for in-place restores
       */
      "restore"?: {
        /**
         * The number of actively running manual backup Pods.
         */
        "active"?: number;
        /**
         * Represents the time the manual backup Job was determined by the Job controller to be completed.  This field is only set if the backup completed successfully. Additionally, it is represented in RFC3339 form and is in UTC.
         */
        "completionTime"?: string;
        /**
         * The number of Pods for the manual backup Job that reached the "Failed" phase.
         */
        "failed"?: number;
        /**
         * Specifies whether or not the Job is finished executing (does not indicate success or failure).
         */
        "finished": boolean;
        /**
         * A unique identifier for the manual backup as provided using the "pgbackrest-backup" annotation when initiating a backup.
         */
        "id": string;
        /**
         * Represents the time the manual backup Job was acknowledged by the Job controller. It is represented in RFC3339 form and is in UTC.
         */
        "startTime"?: string;
        /**
         * The number of Pods for the manual backup Job that reached the "Succeeded" phase.
         */
        "succeeded"?: number;
      };
      /**
       * Status information for scheduled backups
       */
      "scheduledBackups"?: Array<{
        /**
         * The number of actively running manual backup Pods.
         */
        "active"?: number;
        /**
         * Represents the time the manual backup Job was determined by the Job controller to be completed.  This field is only set if the backup completed successfully. Additionally, it is represented in RFC3339 form and is in UTC.
         */
        "completionTime"?: string;
        /**
         * The name of the associated pgBackRest scheduled backup CronJob
         */
        "cronJobName"?: string;
        /**
         * The number of Pods for the manual backup Job that reached the "Failed" phase.
         */
        "failed"?: number;
        /**
         * The name of the associated pgBackRest repository
         */
        "repo"?: string;
        /**
         * Represents the time the manual backup Job was acknowledged by the Job controller. It is represented in RFC3339 form and is in UTC.
         */
        "startTime"?: string;
        /**
         * The number of Pods for the manual backup Job that reached the "Succeeded" phase.
         */
        "succeeded"?: number;
        /**
         * The pgBackRest backup type for this Job
         */
        "type"?: string;
      }>;
    };
    /**
     * Stores the current PostgreSQL major version following a successful major PostgreSQL upgrade.
     */
    "postgresVersion"?: number;
    /**
     * Current state of the PostgreSQL proxy.
     */
    "proxy"?: {
      "pgBouncer"?: {
        /**
         * Identifies the revision of PgBouncer assets that have been installed into PostgreSQL.
         */
        "postgresRevision"?: string;
        /**
         * Total number of ready pods.
         */
        "readyReplicas"?: number;
        /**
         * Total number of non-terminated pods.
         */
        "replicas"?: number;
      };
    };
    /**
     * The instance that should be started first when bootstrapping and/or starting a PostgresCluster.
     */
    "startupInstance"?: string;
    /**
     * The instance set associated with the startupInstance
     */
    "startupInstanceSet"?: string;
    /**
     * Current state of the PostgreSQL user interface.
     */
    "userInterface"?: {
      /**
       * The state of the pgAdmin user interface.
       */
      "pgAdmin"?: {
        /**
         * Hash that indicates which users have been installed into pgAdmin.
         */
        "usersRevision"?: string;
      };
    };
    /**
     * Identifies the users that have been installed into PostgreSQL.
     */
    "usersRevision"?: string;
  };
}

/**
 * PostgresCluster is the Schema for the postgresclusters API
 */
export class PostgresCluster extends Model<IPostgresCluster> implements IPostgresCluster {
  "apiVersion": IPostgresCluster["apiVersion"];
  "kind": IPostgresCluster["kind"];
  "metadata"?: IPostgresCluster["metadata"];
  "spec"?: IPostgresCluster["spec"];
  "status"?: IPostgresCluster["status"];

static apiVersion: IPostgresCluster["apiVersion"] = "postgres-operator.crunchydata.com/v1beta1";
static kind: IPostgresCluster["kind"] = "PostgresCluster";
static is = createTypeMetaGuard<IPostgresCluster>(PostgresCluster);

constructor(data?: ModelData<IPostgresCluster>) {
  super({
    apiVersion: PostgresCluster.apiVersion,
    kind: PostgresCluster.kind,
    ...data
  } as IPostgresCluster);
}
}


setSchema(PostgresCluster, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
