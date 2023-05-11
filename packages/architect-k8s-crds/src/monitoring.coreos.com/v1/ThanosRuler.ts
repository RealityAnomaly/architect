import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "monitoring.coreos.com.v1.ThanosRuler";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "monitoring.coreos.com/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "ThanosRuler"
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
        "alertDropLabels": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "nullable": true
        },
        "alertQueryUrl": {
          "type": "string",
          "nullable": true
        },
        "alertRelabelConfigFile": {
          "type": "string",
          "nullable": true
        },
        "alertRelabelConfigs": {
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
        "alertmanagersConfig": {
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
        "alertmanagersUrl": {
          "items": {
            "type": "string"
          },
          "type": "array",
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
        "enforcedNamespaceLabel": {
          "type": "string",
          "nullable": true
        },
        "evaluationInterval": {
          "default": "15s",
          "type": "string",
          "pattern": "^(0|(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?)$",
          "nullable": true
        },
        "excludedFromEnforcement": {
          "items": {
            "properties": {
              "group": {
                "default": "monitoring.coreos.com",
                "enum": [
                  "monitoring.coreos.com"
                ],
                "type": "string",
                "nullable": true
              },
              "name": {
                "type": "string",
                "nullable": true
              },
              "namespace": {
                "minLength": 1,
                "type": "string"
              },
              "resource": {
                "enum": [
                  "prometheusrules",
                  "servicemonitors",
                  "podmonitors",
                  "probes"
                ],
                "type": "string"
              }
            },
            "required": [
              "namespace",
              "resource"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "externalPrefix": {
          "type": "string",
          "nullable": true
        },
        "grpcServerTlsConfig": {
          "properties": {
            "ca": {
              "properties": {
                "configMap": {
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
                "secret": {
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
            },
            "caFile": {
              "type": "string",
              "nullable": true
            },
            "cert": {
              "properties": {
                "configMap": {
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
                "secret": {
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
            },
            "certFile": {
              "type": "string",
              "nullable": true
            },
            "insecureSkipVerify": {
              "type": "boolean",
              "nullable": true
            },
            "keyFile": {
              "type": "string",
              "nullable": true
            },
            "keySecret": {
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
            "serverName": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "hostAliases": {
          "items": {
            "properties": {
              "hostnames": {
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "ip": {
                "type": "string"
              }
            },
            "required": [
              "hostnames",
              "ip"
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
        "initContainers": {
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
        "labels": {
          "additionalProperties": {
            "type": "string"
          },
          "type": "object",
          "properties": {},
          "nullable": true
        },
        "listenLocal": {
          "type": "boolean",
          "nullable": true
        },
        "logFormat": {
          "enum": [
            "",
            "logfmt",
            "json"
          ],
          "type": "string",
          "nullable": true
        },
        "logLevel": {
          "enum": [
            "",
            "debug",
            "info",
            "warn",
            "error"
          ],
          "type": "string",
          "nullable": true
        },
        "minReadySeconds": {
          "format": "int32",
          "type": "integer",
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
        "objectStorageConfig": {
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
        "objectStorageConfigFile": {
          "type": "string",
          "nullable": true
        },
        "paused": {
          "type": "boolean",
          "nullable": true
        },
        "podMetadata": {
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
            },
            "name": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "portName": {
          "type": "string",
          "nullable": true
        },
        "priorityClassName": {
          "type": "string",
          "nullable": true
        },
        "prometheusRulesExcludedFromEnforce": {
          "items": {
            "properties": {
              "ruleName": {
                "type": "string"
              },
              "ruleNamespace": {
                "type": "string"
              }
            },
            "required": [
              "ruleName",
              "ruleNamespace"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "queryConfig": {
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
        "queryEndpoints": {
          "items": {
            "type": "string"
          },
          "type": "array",
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
        "retention": {
          "default": "24h",
          "type": "string",
          "pattern": "^(0|(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?)$",
          "nullable": true
        },
        "routePrefix": {
          "type": "string",
          "nullable": true
        },
        "ruleNamespaceSelector": {
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
        "ruleSelector": {
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
        "storage": {
          "properties": {
            "disableMountSubPath": {
              "type": "boolean",
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
                      "type": "object",
                      "properties": {},
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
        "tracingConfig": {
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
                        "type": "object",
                        "properties": {},
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
      "type": "object"
    },
    "status": {
      "properties": {
        "availableReplicas": {
          "format": "int32",
          "type": "integer"
        },
        "paused": {
          "type": "boolean"
        },
        "replicas": {
          "format": "int32",
          "type": "integer"
        },
        "unavailableReplicas": {
          "format": "int32",
          "type": "integer"
        },
        "updatedReplicas": {
          "format": "int32",
          "type": "integer"
        }
      },
      "required": [
        "availableReplicas",
        "paused",
        "replicas",
        "unavailableReplicas",
        "updatedReplicas"
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

/**
 * ThanosRuler defines a ThanosRuler deployment.
 */
export interface IThanosRuler {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "monitoring.coreos.com/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ThanosRuler";
  "metadata"?: IObjectMeta;
  /**
   * Specification of the desired behavior of the ThanosRuler cluster. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  "spec": {
    /**
     * If specified, the pod's scheduling constraints.
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
             * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. This field is beta-level and is only honored when PodAffinityNamespaceSelector feature is enabled.
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
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace"
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
           * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. This field is beta-level and is only honored when PodAffinityNamespaceSelector feature is enabled.
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
           * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace"
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
             * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. This field is beta-level and is only honored when PodAffinityNamespaceSelector feature is enabled.
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
             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace"
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
           * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. This field is beta-level and is only honored when PodAffinityNamespaceSelector feature is enabled.
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
           * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace"
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
     * AlertDropLabels configure the label names which should be dropped in ThanosRuler alerts. The replica label `thanos_ruler_replica` will always be dropped in alerts.
     */
    "alertDropLabels"?: Array<string>;
    /**
     * The external Query URL the Thanos Ruler will set in the 'Source' field of all alerts. Maps to the '--alert.query-url' CLI arg.
     */
    "alertQueryUrl"?: string;
    /**
     * AlertRelabelConfigFile specifies the path of the alert relabeling configuration file. When used alongside with AlertRelabelConfigs, alertRelabelConfigFile takes precedence.
     */
    "alertRelabelConfigFile"?: string;
    /**
     * AlertRelabelConfigs configures alert relabeling in ThanosRuler. Alert relabel configurations must have the form as specified in the official Prometheus documentation: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#alert_relabel_configs Alternative to AlertRelabelConfigFile, and lower order priority.
     */
    "alertRelabelConfigs"?: {
      /**
       * The key of the secret to select from.  Must be a valid secret key.
       */
      "key": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
      /**
       * Specify whether the Secret or its key must be defined
       */
      "optional"?: boolean;
    };
    /**
     * Define configuration for connecting to alertmanager.  Only available with thanos v0.10.0 and higher.  Maps to the `alertmanagers.config` arg.
     */
    "alertmanagersConfig"?: {
      /**
       * The key of the secret to select from.  Must be a valid secret key.
       */
      "key": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
      /**
       * Specify whether the Secret or its key must be defined
       */
      "optional"?: boolean;
    };
    /**
     * Define URLs to send alerts to Alertmanager.  For Thanos v0.10.0 and higher, AlertManagersConfig should be used instead.  Note: this field will be ignored if AlertManagersConfig is specified. Maps to the `alertmanagers.url` arg.
     */
    "alertmanagersUrl"?: Array<string>;
    /**
     * Containers allows injecting additional containers or modifying operator generated containers. This can be used to allow adding an authentication proxy to a ThanosRuler pod or to change the behavior of an operator generated container. Containers described here modify an operator generated container if they share the same name and modifications are done via a strategic merge patch. The current container names are: `thanos-ruler` and `config-reloader`. Overriding containers is entirely outside the scope of what the maintainers will support and by doing so, you accept that this behaviour may break at any time without notice.
     */
    "containers"?: Array<{
      /**
       * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
       */
      "args"?: Array<string>;
      /**
       * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
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
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
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
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
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
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
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
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret must be defined
           */
          "optional"?: boolean;
        };
      }>;
      /**
       * Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
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
         * GRPC specifies an action involving a GRPC port. This is an alpha field and requires enabling GRPCContainerProbe feature gate.
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
         * GRPC specifies an action involving a GRPC port. This is an alpha field and requires enabling GRPCContainerProbe feature gate.
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
           * type indicates which kind of seccomp profile will be applied. Valid options are: 
           *  Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
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
         * GRPC specifies an action involving a GRPC port. This is an alpha field and requires enabling GRPCContainerProbe feature gate.
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
     * EnforcedNamespaceLabel enforces adding a namespace label of origin for each alert and metric that is user created. The label value will always be the namespace of the object that is being created.
     */
    "enforcedNamespaceLabel"?: string;
    /**
     * Interval between consecutive evaluations.
     */
    "evaluationInterval"?: string;
    /**
     * List of references to PrometheusRule objects to be excluded from enforcing a namespace label of origin. Applies only if enforcedNamespaceLabel set to true.
     */
    "excludedFromEnforcement"?: Array<{
      /**
       * Group of the referent. When not specified, it defaults to `monitoring.coreos.com`
       */
      "group"?: "monitoring.coreos.com";
      /**
       * Name of the referent. When not set, all resources are matched.
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
      /**
       * Resource of the referent.
       */
      "resource": "prometheusrules" | "servicemonitors" | "podmonitors" | "probes";
    }>;
    /**
     * The external URL the Thanos Ruler instances will be available under. This is necessary to generate correct URLs. This is necessary if Thanos Ruler is not served from root of a DNS name.
     */
    "externalPrefix"?: string;
    /**
     * GRPCServerTLSConfig configures the gRPC server from which Thanos Querier reads recorded rule data. Note: Currently only the CAFile, CertFile, and KeyFile fields are supported. Maps to the '--grpc-server-tls-\*' CLI args.
     */
    "grpcServerTlsConfig"?: {
      /**
       * Struct containing the CA cert to use for the targets.
       */
      "ca"?: {
        /**
         * ConfigMap containing data to use for the targets.
         */
        "configMap"?: {
          /**
           * The key to select.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the ConfigMap or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * Secret containing data to use for the targets.
         */
        "secret"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
      };
      /**
       * Path to the CA cert in the Prometheus container to use for the targets.
       */
      "caFile"?: string;
      /**
       * Struct containing the client cert file for the targets.
       */
      "cert"?: {
        /**
         * ConfigMap containing data to use for the targets.
         */
        "configMap"?: {
          /**
           * The key to select.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the ConfigMap or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * Secret containing data to use for the targets.
         */
        "secret"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
      };
      /**
       * Path to the client cert file in the Prometheus container for the targets.
       */
      "certFile"?: string;
      /**
       * Disable target certificate validation.
       */
      "insecureSkipVerify"?: boolean;
      /**
       * Path to the client key file in the Prometheus container for the targets.
       */
      "keyFile"?: string;
      /**
       * Secret containing the client key file for the targets.
       */
      "keySecret"?: {
        /**
         * The key of the secret to select from.  Must be a valid secret key.
         */
        "key": string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
         */
        "name"?: string;
        /**
         * Specify whether the Secret or its key must be defined
         */
        "optional"?: boolean;
      };
      /**
       * Used to verify the hostname for the targets.
       */
      "serverName"?: string;
    };
    /**
     * Pods' hostAliases configuration
     */
    "hostAliases"?: Array<{
      /**
       * Hostnames for the above IP address.
       */
      "hostnames": Array<string>;
      /**
       * IP address of the host file entry.
       */
      "ip": string;
    }>;
    /**
     * Thanos container image URL.
     */
    "image"?: string;
    /**
     * An optional list of references to secrets in the same namespace to use for pulling thanos images from registries see http://kubernetes.io/docs/user-guide/images#specifying-imagepullsecrets-on-a-pod
     */
    "imagePullSecrets"?: Array<{
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
    }>;
    /**
     * InitContainers allows adding initContainers to the pod definition. Those can be used to e.g. fetch secrets for injection into the ThanosRuler configuration from external sources. Any errors during the execution of an initContainer will lead to a restart of the Pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/ Using initContainers for any use case other then secret fetching is entirely outside the scope of what the maintainers will support and by doing so, you accept that this behaviour may break at any time without notice.
     */
    "initContainers"?: Array<{
      /**
       * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
       */
      "args"?: Array<string>;
      /**
       * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
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
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
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
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
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
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
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
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret must be defined
           */
          "optional"?: boolean;
        };
      }>;
      /**
       * Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
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
         * GRPC specifies an action involving a GRPC port. This is an alpha field and requires enabling GRPCContainerProbe feature gate.
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
         * GRPC specifies an action involving a GRPC port. This is an alpha field and requires enabling GRPCContainerProbe feature gate.
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
           * type indicates which kind of seccomp profile will be applied. Valid options are: 
           *  Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
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
         * GRPC specifies an action involving a GRPC port. This is an alpha field and requires enabling GRPCContainerProbe feature gate.
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
     * Labels configure the external label pairs to ThanosRuler. A default replica label `thanos_ruler_replica` will be always added  as a label with the value of the pod's name and it will be dropped in the alerts.
     */
    "labels"?: {
      [key: string]: string;
    };
    /**
     * ListenLocal makes the Thanos ruler listen on loopback, so that it does not bind against the Pod IP.
     */
    "listenLocal"?: boolean;
    /**
     * Log format for ThanosRuler to be configured with.
     */
    "logFormat"?: "" | "logfmt" | "json";
    /**
     * Log level for ThanosRuler to be configured with.
     */
    "logLevel"?: "" | "debug" | "info" | "warn" | "error";
    /**
     * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) This is an alpha field and requires enabling StatefulSetMinReadySeconds feature gate.
     */
    "minReadySeconds"?: number;
    /**
     * Define which Nodes the Pods are scheduled on.
     */
    "nodeSelector"?: {
      [key: string]: string;
    };
    /**
     * ObjectStorageConfig configures object storage in Thanos. Alternative to ObjectStorageConfigFile, and lower order priority.
     */
    "objectStorageConfig"?: {
      /**
       * The key of the secret to select from.  Must be a valid secret key.
       */
      "key": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
      /**
       * Specify whether the Secret or its key must be defined
       */
      "optional"?: boolean;
    };
    /**
     * ObjectStorageConfigFile specifies the path of the object storage configuration file. When used alongside with ObjectStorageConfig, ObjectStorageConfigFile takes precedence.
     */
    "objectStorageConfigFile"?: string;
    /**
     * When a ThanosRuler deployment is paused, no actions except for deletion will be performed on the underlying objects.
     */
    "paused"?: boolean;
    /**
     * PodMetadata contains Labels and Annotations gets propagated to the thanos ruler pods.
     */
    "podMetadata"?: {
      /**
       * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
       */
      "annotations"?: {
        [key: string]: string;
      };
      /**
       * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
       */
      "name"?: string;
    };
    /**
     * Port name used for the pods and governing service. This defaults to web
     */
    "portName"?: string;
    /**
     * Priority class assigned to the Pods
     */
    "priorityClassName"?: string;
    /**
     * PrometheusRulesExcludedFromEnforce - list of Prometheus rules to be excluded from enforcing of adding namespace labels. Works only if enforcedNamespaceLabel set to true. Make sure both ruleNamespace and ruleName are set for each pair Deprecated: use excludedFromEnforcement instead.
     */
    "prometheusRulesExcludedFromEnforce"?: Array<{
      /**
       * RuleNamespace - name of excluded rule
       */
      "ruleName": string;
      /**
       * RuleNamespace - namespace of excluded rule
       */
      "ruleNamespace": string;
    }>;
    /**
     * Define configuration for connecting to thanos query instances. If this is defined, the QueryEndpoints field will be ignored. Maps to the `query.config` CLI argument. Only available with thanos v0.11.0 and higher.
     */
    "queryConfig"?: {
      /**
       * The key of the secret to select from.  Must be a valid secret key.
       */
      "key": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
      /**
       * Specify whether the Secret or its key must be defined
       */
      "optional"?: boolean;
    };
    /**
     * QueryEndpoints defines Thanos querier endpoints from which to query metrics. Maps to the --query flag of thanos ruler.
     */
    "queryEndpoints"?: Array<string>;
    /**
     * Number of thanos ruler instances to deploy.
     */
    "replicas"?: number;
    /**
     * Resources defines the resource requirements for single Pods. If not provided, no requests/limits will be set
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
     * Time duration ThanosRuler shall retain data for. Default is '24h', and must match the regular expression `[0-9]+(ms|s|m|h|d|w|y)` (milliseconds seconds minutes hours days weeks years).
     */
    "retention"?: string;
    /**
     * The route prefix ThanosRuler registers HTTP handlers for. This allows thanos UI to be served on a sub-path.
     */
    "routePrefix"?: string;
    /**
     * Namespaces to be selected for Rules discovery. If unspecified, only the same namespace as the ThanosRuler object is in is used.
     */
    "ruleNamespaceSelector"?: {
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
     * A label selector to select which PrometheusRules to mount for alerting and recording.
     */
    "ruleSelector"?: {
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
     * SecurityContext holds pod-level security attributes and common container settings. This defaults to the default PodSecurityContext.
     */
    "securityContext"?: {
      /**
       * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 
       *  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- 
       *  If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
       */
      "fsGroup"?: number;
      /**
       * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used. Note that this field cannot be set when spec.os.name is windows.
       */
      "fsGroupChangePolicy"?: string;
      /**
       * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
       */
      "runAsGroup"?: number;
      /**
       * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
       */
      "runAsNonRoot"?: boolean;
      /**
       * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
       */
      "runAsUser"?: number;
      /**
       * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
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
       * The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
       */
      "seccompProfile"?: {
        /**
         * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost".
         */
        "localhostProfile"?: string;
        /**
         * type indicates which kind of seccomp profile will be applied. Valid options are: 
         *  Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
         */
        "type": string;
      };
      /**
       * A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container. Note that this field cannot be set when spec.os.name is windows.
       */
      "supplementalGroups"?: Array<number>;
      /**
       * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
       */
      "sysctls"?: Array<{
        /**
         * Name of a property to set
         */
        "name": string;
        /**
         * Value of a property to set
         */
        "value": string;
      }>;
      /**
       * The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
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
     * ServiceAccountName is the name of the ServiceAccount to use to run the Thanos Ruler Pods.
     */
    "serviceAccountName"?: string;
    /**
     * Storage spec to specify how storage shall be used.
     */
    "storage"?: {
      /**
       * Deprecated: subPath usage will be disabled by default in a future release, this option will become unnecessary. DisableMountSubPath allows to remove any subPath usage in volume mounts.
       */
      "disableMountSubPath"?: boolean;
      /**
       * EmptyDirVolumeSource to be used by the Prometheus StatefulSets. If specified, used in place of any volumeClaimTemplate. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir
       */
      "emptyDir"?: {
        /**
         * What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
         */
        "medium"?: string;
        /**
         * Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
         */
        "sizeLimit"?: number | string;
      };
      /**
       * EphemeralVolumeSource to be used by the Prometheus StatefulSets. This is a beta field in k8s 1.21, for lower versions, starting with k8s 1.19, it requires enabling the GenericEphemeralVolume feature gate. More info: https://kubernetes.io/docs/concepts/storage/ephemeral-volumes/#generic-ephemeral-volumes
       */
      "ephemeral"?: {
        /**
         * Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod.  The name of the PVC will be `<pod name>-<volume name>` where `<volume name>` is the name from the `PodSpec.Volumes` array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long). 
         *  An existing PVC with that name that is not owned by the pod will \*not\* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster. 
         *  This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created. 
         *  Required, must not be nil.
         */
        "volumeClaimTemplate"?: {
          /**
           * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
           */
          "metadata"?: {
          };
          /**
           * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
           */
          "spec": {
            /**
             * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            "accessModes"?: Array<string>;
            /**
             * This field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) \* An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
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
             * Specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: \* While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. \* While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Alpha) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
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
             * Resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
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
             * A label query over volumes to consider for binding.
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
             * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            "storageClassName"?: string;
            /**
             * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
             */
            "volumeMode"?: string;
            /**
             * VolumeName is the binding reference to the PersistentVolume backing this claim.
             */
            "volumeName"?: string;
          };
        };
      };
      /**
       * A PVC spec to be used by the Prometheus StatefulSets.
       */
      "volumeClaimTemplate"?: {
        /**
         * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
         */
        "apiVersion"?: string;
        /**
         * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        "kind"?: string;
        /**
         * EmbeddedMetadata contains metadata relevant to an EmbeddedResource.
         */
        "metadata"?: {
          /**
           * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
           */
          "annotations"?: {
            [key: string]: string;
          };
          /**
           * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
           */
          "labels"?: {
            [key: string]: string;
          };
          /**
           * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
           */
          "name"?: string;
        };
        /**
         * Spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        "spec"?: {
          /**
           * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
           */
          "accessModes"?: Array<string>;
          /**
           * This field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) \* An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
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
           * Specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: \* While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. \* While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Alpha) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
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
           * Resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
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
           * A label query over volumes to consider for binding.
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
           * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
           */
          "storageClassName"?: string;
          /**
           * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
           */
          "volumeMode"?: string;
          /**
           * VolumeName is the binding reference to the PersistentVolume backing this claim.
           */
          "volumeName"?: string;
        };
        /**
         * Status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        "status"?: {
          /**
           * AccessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
           */
          "accessModes"?: Array<string>;
          /**
           * The storage resource within AllocatedResources tracks the capacity allocated to a PVC. It may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
           */
          "allocatedResources"?: {
            [key: string]: number | string;
          };
          /**
           * Represents the actual resources of the underlying volume.
           */
          "capacity"?: {
            [key: string]: number | string;
          };
          /**
           * Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'.
           */
          "conditions"?: Array<{
            /**
             * Last time we probed the condition.
             */
            "lastProbeTime"?: string;
            /**
             * Last time the condition transitioned from one status to another.
             */
            "lastTransitionTime"?: string;
            /**
             * Human-readable message indicating details about last transition.
             */
            "message"?: string;
            /**
             * Unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "ResizeStarted" that means the underlying persistent volume is being resized.
             */
            "reason"?: string;
            "status": string;
            /**
             * PersistentVolumeClaimConditionType is a valid value of PersistentVolumeClaimCondition.Type
             */
            "type": string;
          }>;
          /**
           * Phase represents the current phase of PersistentVolumeClaim.
           */
          "phase"?: string;
          /**
           * ResizeStatus stores status of resize operation. ResizeStatus is not set by default but when expansion is complete resizeStatus is set to empty string by resize controller or kubelet. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
           */
          "resizeStatus"?: string;
        };
      };
    };
    /**
     * If specified, the pod's tolerations.
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
     * If specified, the pod's topology spread constraints.
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
       * MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: | zone1 | zone2 | zone3 | |   P   |   P   |       | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 1/1/1; scheduling it onto zone1(zone2) would make the ActualSkew(2-0) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
       */
      "maxSkew": number;
      /**
       * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. It's a required field.
       */
      "topologyKey": string;
      /**
       * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assignment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it \*more\* imbalanced. It's a required field.
       */
      "whenUnsatisfiable": string;
    }>;
    /**
     * TracingConfig configures tracing in Thanos. This is an experimental feature, it may change in any upcoming release in a breaking way.
     */
    "tracingConfig"?: {
      /**
       * The key of the secret to select from.  Must be a valid secret key.
       */
      "key": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
      /**
       * Specify whether the Secret or its key must be defined
       */
      "optional"?: boolean;
    };
    /**
     * Volumes allows configuration of additional volumes on the output StatefulSet definition. Volumes specified will be appended to other volumes that are generated as a result of StorageSpec objects.
     */
    "volumes"?: Array<{
      /**
       * AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
       */
      "awsElasticBlockStore"?: {
        /**
         * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore TODO: how do we prevent errors in the filesystem from compromising the machine
         */
        "fsType"?: string;
        /**
         * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
         */
        "partition"?: number;
        /**
         * Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
         */
        "readOnly"?: boolean;
        /**
         * Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
         */
        "volumeID": string;
      };
      /**
       * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
       */
      "azureDisk"?: {
        /**
         * Host Caching mode: None, Read Only, Read Write.
         */
        "cachingMode"?: string;
        /**
         * The Name of the data disk in the blob storage
         */
        "diskName": string;
        /**
         * The URI the data disk in the blob storage
         */
        "diskURI": string;
        /**
         * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
         */
        "fsType"?: string;
        /**
         * Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
         */
        "kind"?: string;
        /**
         * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
         */
        "readOnly"?: boolean;
      };
      /**
       * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
       */
      "azureFile"?: {
        /**
         * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
         */
        "readOnly"?: boolean;
        /**
         * the name of secret that contains Azure Storage Account Name and Key
         */
        "secretName": string;
        /**
         * Share Name
         */
        "shareName": string;
      };
      /**
       * CephFS represents a Ceph FS mount on the host that shares a pod's lifetime
       */
      "cephfs"?: {
        /**
         * Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
         */
        "monitors": Array<string>;
        /**
         * Optional: Used as the mounted root, rather than the full Ceph tree, default is /
         */
        "path"?: string;
        /**
         * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
         */
        "readOnly"?: boolean;
        /**
         * Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
         */
        "secretFile"?: string;
        /**
         * Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
         */
        "secretRef"?: {
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
        };
        /**
         * Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
         */
        "user"?: string;
      };
      /**
       * Cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
       */
      "cinder"?: {
        /**
         * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
         */
        "fsType"?: string;
        /**
         * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
         */
        "readOnly"?: boolean;
        /**
         * Optional: points to a secret object containing parameters used to connect to OpenStack.
         */
        "secretRef"?: {
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
        };
        /**
         * volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
         */
        "volumeID": string;
      };
      /**
       * ConfigMap represents a configMap that should populate this volume
       */
      "configMap"?: {
        /**
         * Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
         */
        "defaultMode"?: number;
        /**
         * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
         */
        "items"?: Array<{
          /**
           * The key to project.
           */
          "key": string;
          /**
           * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
           */
          "mode"?: number;
          /**
           * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
           */
          "path": string;
        }>;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
         */
        "name"?: string;
        /**
         * Specify whether the ConfigMap or its keys must be defined
         */
        "optional"?: boolean;
      };
      /**
       * CSI (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
       */
      "csi"?: {
        /**
         * Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
         */
        "driver": string;
        /**
         * Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
         */
        "fsType"?: string;
        /**
         * NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
         */
        "nodePublishSecretRef"?: {
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
        };
        /**
         * Specifies a read-only configuration for the volume. Defaults to false (read/write).
         */
        "readOnly"?: boolean;
        /**
         * VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
         */
        "volumeAttributes"?: {
          [key: string]: string;
        };
      };
      /**
       * DownwardAPI represents downward API about the pod that should populate this volume
       */
      "downwardAPI"?: {
        /**
         * Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
         */
        "defaultMode"?: number;
        /**
         * Items is a list of downward API volume file
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
       * EmptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
       */
      "emptyDir"?: {
        /**
         * What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
         */
        "medium"?: string;
        /**
         * Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
         */
        "sizeLimit"?: number | string;
      };
      /**
       * Ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. 
       *  Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). 
       *  Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. 
       *  Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. 
       *  A pod can use both types of ephemeral volumes and persistent volumes at the same time.
       */
      "ephemeral"?: {
        /**
         * Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod.  The name of the PVC will be `<pod name>-<volume name>` where `<volume name>` is the name from the `PodSpec.Volumes` array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long). 
         *  An existing PVC with that name that is not owned by the pod will \*not\* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster. 
         *  This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created. 
         *  Required, must not be nil.
         */
        "volumeClaimTemplate"?: {
          /**
           * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
           */
          "metadata"?: {
          };
          /**
           * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
           */
          "spec": {
            /**
             * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            "accessModes"?: Array<string>;
            /**
             * This field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) \* An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
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
             * Specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: \* While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. \* While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Alpha) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
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
             * Resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
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
             * A label query over volumes to consider for binding.
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
             * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            "storageClassName"?: string;
            /**
             * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
             */
            "volumeMode"?: string;
            /**
             * VolumeName is the binding reference to the PersistentVolume backing this claim.
             */
            "volumeName"?: string;
          };
        };
      };
      /**
       * FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
       */
      "fc"?: {
        /**
         * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine
         */
        "fsType"?: string;
        /**
         * Optional: FC target lun number
         */
        "lun"?: number;
        /**
         * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
         */
        "readOnly"?: boolean;
        /**
         * Optional: FC target worldwide names (WWNs)
         */
        "targetWWNs"?: Array<string>;
        /**
         * Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
         */
        "wwids"?: Array<string>;
      };
      /**
       * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
       */
      "flexVolume"?: {
        /**
         * Driver is the name of the driver to use for this volume.
         */
        "driver": string;
        /**
         * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
         */
        "fsType"?: string;
        /**
         * Optional: Extra command options if any.
         */
        "options"?: {
          [key: string]: string;
        };
        /**
         * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
         */
        "readOnly"?: boolean;
        /**
         * Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
         */
        "secretRef"?: {
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
        };
      };
      /**
       * Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
       */
      "flocker"?: {
        /**
         * Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
         */
        "datasetName"?: string;
        /**
         * UUID of the dataset. This is unique identifier of a Flocker dataset
         */
        "datasetUUID"?: string;
      };
      /**
       * GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
       */
      "gcePersistentDisk"?: {
        /**
         * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine
         */
        "fsType"?: string;
        /**
         * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
         */
        "partition"?: number;
        /**
         * Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
         */
        "pdName": string;
        /**
         * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
         */
        "readOnly"?: boolean;
      };
      /**
       * GitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
       */
      "gitRepo"?: {
        /**
         * Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
         */
        "directory"?: string;
        /**
         * Repository URL
         */
        "repository": string;
        /**
         * Commit hash for the specified revision.
         */
        "revision"?: string;
      };
      /**
       * Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
       */
      "glusterfs"?: {
        /**
         * EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
         */
        "endpoints": string;
        /**
         * Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
         */
        "path": string;
        /**
         * ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
         */
        "readOnly"?: boolean;
      };
      /**
       * HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
       */
      "hostPath"?: {
        /**
         * Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
         */
        "path": string;
        /**
         * Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
         */
        "type"?: string;
      };
      /**
       * ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
       */
      "iscsi"?: {
        /**
         * whether support iSCSI Discovery CHAP authentication
         */
        "chapAuthDiscovery"?: boolean;
        /**
         * whether support iSCSI Session CHAP authentication
         */
        "chapAuthSession"?: boolean;
        /**
         * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine
         */
        "fsType"?: string;
        /**
         * Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
         */
        "initiatorName"?: string;
        /**
         * Target iSCSI Qualified Name.
         */
        "iqn": string;
        /**
         * iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
         */
        "iscsiInterface"?: string;
        /**
         * iSCSI Target Lun number.
         */
        "lun": number;
        /**
         * iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
         */
        "portals"?: Array<string>;
        /**
         * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
         */
        "readOnly"?: boolean;
        /**
         * CHAP Secret for iSCSI target and initiator authentication
         */
        "secretRef"?: {
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
        };
        /**
         * iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
         */
        "targetPortal": string;
      };
      /**
       * Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * NFS represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
       */
      "nfs"?: {
        /**
         * Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
         */
        "path": string;
        /**
         * ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
         */
        "readOnly"?: boolean;
        /**
         * Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
         */
        "server": string;
      };
      /**
       * PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
       */
      "persistentVolumeClaim"?: {
        /**
         * ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        "claimName": string;
        /**
         * Will force the ReadOnly setting in VolumeMounts. Default false.
         */
        "readOnly"?: boolean;
      };
      /**
       * PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
       */
      "photonPersistentDisk"?: {
        /**
         * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
         */
        "fsType"?: string;
        /**
         * ID that identifies Photon Controller persistent disk
         */
        "pdID": string;
      };
      /**
       * PortworxVolume represents a portworx volume attached and mounted on kubelets host machine
       */
      "portworxVolume"?: {
        /**
         * FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
         */
        "fsType"?: string;
        /**
         * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
         */
        "readOnly"?: boolean;
        /**
         * VolumeID uniquely identifies a Portworx volume
         */
        "volumeID": string;
      };
      /**
       * Items for all in one resources secrets, configmaps, and downward API
       */
      "projected"?: {
        /**
         * Mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
         */
        "defaultMode"?: number;
        /**
         * list of volume projections
         */
        "sources"?: Array<{
          /**
           * information about the configMap data to project
           */
          "configMap"?: {
            /**
             * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
             */
            "items"?: Array<{
              /**
               * The key to project.
               */
              "key": string;
              /**
               * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
               */
              "path": string;
            }>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the ConfigMap or its keys must be defined
             */
            "optional"?: boolean;
          };
          /**
           * information about the downwardAPI data to project
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
           * information about the secret data to project
           */
          "secret"?: {
            /**
             * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
             */
            "items"?: Array<{
              /**
               * The key to project.
               */
              "key": string;
              /**
               * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
               */
              "path": string;
            }>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * information about the serviceAccountToken data to project
           */
          "serviceAccountToken"?: {
            /**
             * Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
             */
            "audience"?: string;
            /**
             * ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
             */
            "expirationSeconds"?: number;
            /**
             * Path is the path relative to the mount point of the file to project the token into.
             */
            "path": string;
          };
        }>;
      };
      /**
       * Quobyte represents a Quobyte mount on the host that shares a pod's lifetime
       */
      "quobyte"?: {
        /**
         * Group to map volume access to Default is no group
         */
        "group"?: string;
        /**
         * ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
         */
        "readOnly"?: boolean;
        /**
         * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
         */
        "registry": string;
        /**
         * Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
         */
        "tenant"?: string;
        /**
         * User to map volume access to Defaults to serivceaccount user
         */
        "user"?: string;
        /**
         * Volume is a string that references an already created Quobyte volume by name.
         */
        "volume": string;
      };
      /**
       * RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
       */
      "rbd"?: {
        /**
         * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine
         */
        "fsType"?: string;
        /**
         * The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
         */
        "image": string;
        /**
         * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
         */
        "keyring"?: string;
        /**
         * A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
         */
        "monitors": Array<string>;
        /**
         * The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
         */
        "pool"?: string;
        /**
         * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
         */
        "readOnly"?: boolean;
        /**
         * SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
         */
        "secretRef"?: {
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
        };
        /**
         * The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
         */
        "user"?: string;
      };
      /**
       * ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
       */
      "scaleIO"?: {
        /**
         * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs".
         */
        "fsType"?: string;
        /**
         * The host address of the ScaleIO API Gateway.
         */
        "gateway": string;
        /**
         * The name of the ScaleIO Protection Domain for the configured storage.
         */
        "protectionDomain"?: string;
        /**
         * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
         */
        "readOnly"?: boolean;
        /**
         * SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
         */
        "secretRef": {
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
        };
        /**
         * Flag to enable/disable SSL communication with Gateway, default false
         */
        "sslEnabled"?: boolean;
        /**
         * Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
         */
        "storageMode"?: string;
        /**
         * The ScaleIO Storage Pool associated with the protection domain.
         */
        "storagePool"?: string;
        /**
         * The name of the storage system as configured in ScaleIO.
         */
        "system": string;
        /**
         * The name of a volume already created in the ScaleIO system that is associated with this volume source.
         */
        "volumeName"?: string;
      };
      /**
       * Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
       */
      "secret"?: {
        /**
         * Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
         */
        "defaultMode"?: number;
        /**
         * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
         */
        "items"?: Array<{
          /**
           * The key to project.
           */
          "key": string;
          /**
           * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
           */
          "mode"?: number;
          /**
           * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
           */
          "path": string;
        }>;
        /**
         * Specify whether the Secret or its keys must be defined
         */
        "optional"?: boolean;
        /**
         * Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
         */
        "secretName"?: string;
      };
      /**
       * StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
       */
      "storageos"?: {
        /**
         * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
         */
        "fsType"?: string;
        /**
         * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
         */
        "readOnly"?: boolean;
        /**
         * SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.
         */
        "secretRef"?: {
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
        };
        /**
         * VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
         */
        "volumeName"?: string;
        /**
         * VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
         */
        "volumeNamespace"?: string;
      };
      /**
       * VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
       */
      "vsphereVolume"?: {
        /**
         * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
         */
        "fsType"?: string;
        /**
         * Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
         */
        "storagePolicyID"?: string;
        /**
         * Storage Policy Based Management (SPBM) profile name.
         */
        "storagePolicyName"?: string;
        /**
         * Path that identifies vSphere volume vmdk
         */
        "volumePath": string;
      };
    }>;
  };
  /**
   * Most recent observed status of the ThanosRuler cluster. Read-only. Not included when requesting from the apiserver, only from the ThanosRuler Operator API itself. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  "status"?: {
    /**
     * Total number of available pods (ready for at least minReadySeconds) targeted by this ThanosRuler deployment.
     */
    "availableReplicas": number;
    /**
     * Represents whether any actions on the underlying managed objects are being performed. Only delete actions will be performed.
     */
    "paused": boolean;
    /**
     * Total number of non-terminated pods targeted by this ThanosRuler deployment (their labels match the selector).
     */
    "replicas": number;
    /**
     * Total number of unavailable pods targeted by this ThanosRuler deployment.
     */
    "unavailableReplicas": number;
    /**
     * Total number of non-terminated pods targeted by this ThanosRuler deployment that have the desired version spec.
     */
    "updatedReplicas": number;
  };
}

/**
 * ThanosRuler defines a ThanosRuler deployment.
 */
export class ThanosRuler extends Model<IThanosRuler> implements IThanosRuler {
  "apiVersion": IThanosRuler["apiVersion"];
  "kind": IThanosRuler["kind"];
  "metadata"?: IThanosRuler["metadata"];
  "spec": IThanosRuler["spec"];
  "status"?: IThanosRuler["status"];

static apiVersion: IThanosRuler["apiVersion"] = "monitoring.coreos.com/v1";
static kind: IThanosRuler["kind"] = "ThanosRuler";
static is = createTypeMetaGuard<IThanosRuler>(ThanosRuler);

constructor(data?: ModelData<IThanosRuler>) {
  super({
    apiVersion: ThanosRuler.apiVersion,
    kind: ThanosRuler.kind,
    ...data
  } as IThanosRuler);
}
}


setSchema(ThanosRuler, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
