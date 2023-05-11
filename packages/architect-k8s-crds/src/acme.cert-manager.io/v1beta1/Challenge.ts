import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "acme.cert-manager.io.v1beta1.Challenge";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "acme.cert-manager.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Challenge"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "properties": {
        "authorizationURL": {
          "type": "string"
        },
        "dnsName": {
          "type": "string"
        },
        "issuerRef": {
          "properties": {
            "group": {
              "type": "string",
              "nullable": true
            },
            "kind": {
              "type": "string",
              "nullable": true
            },
            "name": {
              "type": "string"
            }
          },
          "required": [
            "name"
          ],
          "type": "object"
        },
        "key": {
          "type": "string"
        },
        "solver": {
          "properties": {
            "dns01": {
              "properties": {
                "acmeDNS": {
                  "properties": {
                    "accountSecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
                          "nullable": true
                        },
                        "name": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "name"
                      ],
                      "type": "object"
                    },
                    "host": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "accountSecretRef",
                    "host"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "akamai": {
                  "properties": {
                    "accessTokenSecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
                          "nullable": true
                        },
                        "name": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "name"
                      ],
                      "type": "object"
                    },
                    "clientSecretSecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
                          "nullable": true
                        },
                        "name": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "name"
                      ],
                      "type": "object"
                    },
                    "clientTokenSecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
                          "nullable": true
                        },
                        "name": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "name"
                      ],
                      "type": "object"
                    },
                    "serviceConsumerDomain": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "accessTokenSecretRef",
                    "clientSecretSecretRef",
                    "clientTokenSecretRef",
                    "serviceConsumerDomain"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "azureDNS": {
                  "properties": {
                    "clientID": {
                      "type": "string",
                      "nullable": true
                    },
                    "clientSecretSecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
                          "nullable": true
                        },
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
                    "environment": {
                      "enum": [
                        "AzurePublicCloud",
                        "AzureChinaCloud",
                        "AzureGermanCloud",
                        "AzureUSGovernmentCloud"
                      ],
                      "type": "string",
                      "nullable": true
                    },
                    "hostedZoneName": {
                      "type": "string",
                      "nullable": true
                    },
                    "resourceGroupName": {
                      "type": "string"
                    },
                    "subscriptionID": {
                      "type": "string"
                    },
                    "tenantID": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "required": [
                    "resourceGroupName",
                    "subscriptionID"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "cloudDNS": {
                  "properties": {
                    "hostedZoneName": {
                      "type": "string",
                      "nullable": true
                    },
                    "project": {
                      "type": "string"
                    },
                    "serviceAccountSecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
                          "nullable": true
                        },
                        "name": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "name"
                      ],
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "required": [
                    "project"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "cloudflare": {
                  "properties": {
                    "apiKeySecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
                          "nullable": true
                        },
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
                    "apiTokenSecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
                          "nullable": true
                        },
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
                    "email": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "cnameStrategy": {
                  "enum": [
                    "None",
                    "Follow"
                  ],
                  "type": "string",
                  "nullable": true
                },
                "digitalocean": {
                  "properties": {
                    "tokenSecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
                          "nullable": true
                        },
                        "name": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "name"
                      ],
                      "type": "object"
                    }
                  },
                  "required": [
                    "tokenSecretRef"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "rfc2136": {
                  "properties": {
                    "nameserver": {
                      "type": "string"
                    },
                    "tsigAlgorithm": {
                      "type": "string",
                      "nullable": true
                    },
                    "tsigKeyName": {
                      "type": "string",
                      "nullable": true
                    },
                    "tsigSecretSecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
                          "nullable": true
                        },
                        "name": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "name"
                      ],
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "required": [
                    "nameserver"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "route53": {
                  "properties": {
                    "accessKeyID": {
                      "type": "string",
                      "nullable": true
                    },
                    "hostedZoneID": {
                      "type": "string",
                      "nullable": true
                    },
                    "region": {
                      "type": "string"
                    },
                    "role": {
                      "type": "string",
                      "nullable": true
                    },
                    "secretAccessKeySecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
                          "nullable": true
                        },
                        "name": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "name"
                      ],
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "required": [
                    "region"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "webhook": {
                  "properties": {
                    "config": {
                      "oneOf": [
                        {},
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "groupName": {
                      "type": "string"
                    },
                    "solverName": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "groupName",
                    "solverName"
                  ],
                  "type": "object",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "http01": {
              "properties": {
                "gatewayHTTPRoute": {
                  "properties": {
                    "labels": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "serviceType": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "ingress": {
                  "properties": {
                    "class": {
                      "type": "string",
                      "nullable": true
                    },
                    "ingressTemplate": {
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
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "name": {
                      "type": "string",
                      "nullable": true
                    },
                    "podTemplate": {
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
                            "nodeSelector": {
                              "additionalProperties": {
                                "type": "string"
                              },
                              "type": "object",
                              "properties": {},
                              "nullable": true
                            },
                            "priorityClassName": {
                              "type": "string",
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
                            }
                          },
                          "type": "object",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "serviceType": {
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
            "selector": {
              "properties": {
                "dnsNames": {
                  "items": {
                    "type": "string"
                  },
                  "type": "array",
                  "nullable": true
                },
                "dnsZones": {
                  "items": {
                    "type": "string"
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
            }
          },
          "type": "object"
        },
        "token": {
          "type": "string"
        },
        "type": {
          "enum": [
            "HTTP-01",
            "DNS-01"
          ],
          "type": "string"
        },
        "url": {
          "type": "string"
        },
        "wildcard": {
          "type": "boolean",
          "nullable": true
        }
      },
      "required": [
        "authorizationURL",
        "dnsName",
        "issuerRef",
        "key",
        "solver",
        "token",
        "type",
        "url"
      ],
      "type": "object"
    },
    "status": {
      "properties": {
        "presented": {
          "type": "boolean",
          "nullable": true
        },
        "processing": {
          "type": "boolean",
          "nullable": true
        },
        "reason": {
          "type": "string",
          "nullable": true
        },
        "state": {
          "enum": [
            "valid",
            "ready",
            "pending",
            "processing",
            "invalid",
            "expired",
            "errored"
          ],
          "type": "string",
          "nullable": true
        }
      },
      "type": "object",
      "nullable": true
    }
  },
  "required": [
    "metadata",
    "spec",
    "apiVersion",
    "kind"
  ]
};

/**
 * Challenge is a type to represent a Challenge request with an ACME server
 */
export interface IChallenge {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "acme.cert-manager.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Challenge";
  "metadata": IObjectMeta;
  "spec": {
    /**
     * The URL to the ACME Authorization resource that this challenge is a part of.
     */
    "authorizationURL": string;
    /**
     * dnsName is the identifier that this challenge is for, e.g. example.com. If the requested DNSName is a 'wildcard', this field MUST be set to the non-wildcard domain, e.g. for `\*.example.com`, it must be `example.com`.
     */
    "dnsName": string;
    /**
     * References a properly configured ACME-type Issuer which should be used to create this Challenge. If the Issuer does not exist, processing will be retried. If the Issuer is not an 'ACME' Issuer, an error will be returned and the Challenge will be marked as failed.
     */
    "issuerRef": {
      /**
       * Group of the resource being referred to.
       */
      "group"?: string;
      /**
       * Kind of the resource being referred to.
       */
      "kind"?: string;
      /**
       * Name of the resource being referred to.
       */
      "name": string;
    };
    /**
     * The ACME challenge key for this challenge For HTTP01 challenges, this is the value that must be responded with to complete the HTTP01 challenge in the format: `<private key JWK thumbprint>.<key from acme server for challenge>`. For DNS01 challenges, this is the base64 encoded SHA256 sum of the `<private key JWK thumbprint>.<key from acme server for challenge>` text that must be set as the TXT record content.
     */
    "key": string;
    /**
     * Contains the domain solving configuration that should be used to solve this challenge resource.
     */
    "solver": {
      /**
       * Configures cert-manager to attempt to complete authorizations by performing the DNS01 challenge flow.
       */
      "dns01"?: {
        /**
         * Use the 'ACME DNS' (https://github.com/joohoi/acme-dns) API to manage DNS01 challenge records.
         */
        "acmeDNS"?: {
          /**
           * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
           */
          "accountSecretRef": {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
          };
          "host": string;
        };
        /**
         * Use the Akamai DNS zone management API to manage DNS01 challenge records.
         */
        "akamai"?: {
          /**
           * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
           */
          "accessTokenSecretRef": {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
          };
          /**
           * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
           */
          "clientSecretSecretRef": {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
          };
          /**
           * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
           */
          "clientTokenSecretRef": {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
          };
          "serviceConsumerDomain": string;
        };
        /**
         * Use the Microsoft Azure DNS API to manage DNS01 challenge records.
         */
        "azureDNS"?: {
          /**
           * if both this and ClientSecret are left unset MSI will be used
           */
          "clientID"?: string;
          /**
           * if both this and ClientID are left unset MSI will be used
           */
          "clientSecretSecretRef"?: {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
          };
          "environment"?: "AzurePublicCloud" | "AzureChinaCloud" | "AzureGermanCloud" | "AzureUSGovernmentCloud";
          "hostedZoneName"?: string;
          "resourceGroupName": string;
          "subscriptionID": string;
          /**
           * when specifying ClientID and ClientSecret then this field is also needed
           */
          "tenantID"?: string;
        };
        /**
         * Use the Google Cloud DNS API to manage DNS01 challenge records.
         */
        "cloudDNS"?: {
          /**
           * HostedZoneName is an optional field that tells cert-manager in which Cloud DNS zone the challenge record has to be created. If left empty cert-manager will automatically choose a zone.
           */
          "hostedZoneName"?: string;
          "project": string;
          /**
           * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
           */
          "serviceAccountSecretRef"?: {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
          };
        };
        /**
         * Use the Cloudflare API to manage DNS01 challenge records.
         */
        "cloudflare"?: {
          /**
           * API key to use to authenticate with Cloudflare. Note: using an API token to authenticate is now the recommended method as it allows greater control of permissions.
           */
          "apiKeySecretRef"?: {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
          };
          /**
           * API token used to authenticate with Cloudflare.
           */
          "apiTokenSecretRef"?: {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
          };
          /**
           * Email of the account, only required when using API key based authentication.
           */
          "email"?: string;
        };
        /**
         * CNAMEStrategy configures how the DNS01 provider should handle CNAME records when found in DNS zones.
         */
        "cnameStrategy"?: "None" | "Follow";
        /**
         * Use the DigitalOcean DNS API to manage DNS01 challenge records.
         */
        "digitalocean"?: {
          /**
           * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
           */
          "tokenSecretRef": {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
          };
        };
        /**
         * Use RFC2136 ("Dynamic Updates in the Domain Name System") (https://datatracker.ietf.org/doc/rfc2136/) to manage DNS01 challenge records.
         */
        "rfc2136"?: {
          /**
           * The IP address or hostname of an authoritative DNS server supporting RFC2136 in the form host:port. If the host is an IPv6 address it must be enclosed in square brackets (e.g [2001:db8::1]) ; port is optional. This field is required.
           */
          "nameserver": string;
          /**
           * The TSIG Algorithm configured in the DNS supporting RFC2136. Used only when ``tsigSecretSecretRef`` and ``tsigKeyName`` are defined. Supported values are (case-insensitive): ``HMACMD5`` (default), ``HMACSHA1``, ``HMACSHA256`` or ``HMACSHA512``.
           */
          "tsigAlgorithm"?: string;
          /**
           * The TSIG Key name configured in the DNS. If ``tsigSecretSecretRef`` is defined, this field is required.
           */
          "tsigKeyName"?: string;
          /**
           * The name of the secret containing the TSIG value. If ``tsigKeyName`` is defined, this field is required.
           */
          "tsigSecretSecretRef"?: {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
          };
        };
        /**
         * Use the AWS Route53 API to manage DNS01 challenge records.
         */
        "route53"?: {
          /**
           * The AccessKeyID is used for authentication. If not set we fall-back to using env vars, shared credentials file or AWS Instance metadata see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
           */
          "accessKeyID"?: string;
          /**
           * If set, the provider will manage only this zone in Route53 and will not do an lookup using the route53:ListHostedZonesByName api call.
           */
          "hostedZoneID"?: string;
          /**
           * Always set the region when using AccessKeyID and SecretAccessKey
           */
          "region": string;
          /**
           * Role is a Role ARN which the Route53 provider will assume using either the explicit credentials AccessKeyID/SecretAccessKey or the inferred credentials from environment variables, shared credentials file or AWS Instance metadata
           */
          "role"?: string;
          /**
           * The SecretAccessKey is used for authentication. If not set we fall-back to using env vars, shared credentials file or AWS Instance metadata https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
           */
          "secretAccessKeySecretRef"?: {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
          };
        };
        /**
         * Configure an external webhook based DNS01 challenge solver to manage DNS01 challenge records.
         */
        "webhook"?: {
          /**
           * Additional configuration that should be passed to the webhook apiserver when challenges are processed. This can contain arbitrary JSON data. Secret values should not be specified in this stanza. If secret values are needed (e.g. credentials for a DNS service), you should use a SecretKeySelector to reference a Secret resource. For details on the schema of this field, consult the webhook provider implementation's documentation.
           */
          "config"?: any;
          /**
           * The API group name that should be used when POSTing ChallengePayload resources to the webhook apiserver. This should be the same as the GroupName specified in the webhook provider implementation.
           */
          "groupName": string;
          /**
           * The name of the solver to use, as defined in the webhook provider implementation. This will typically be the name of the provider, e.g. 'cloudflare'.
           */
          "solverName": string;
        };
      };
      /**
       * Configures cert-manager to attempt to complete authorizations by performing the HTTP01 challenge flow. It is not possible to obtain certificates for wildcard domain names (e.g. `\*.example.com`) using the HTTP01 challenge mechanism.
       */
      "http01"?: {
        /**
         * The Gateway API is a sig-network community API that models service networking in Kubernetes (https://gateway-api.sigs.k8s.io/). The Gateway solver will create HTTPRoutes with the specified labels in the same namespace as the challenge. This solver is experimental, and fields / behaviour may change in the future.
         */
        "gatewayHTTPRoute"?: {
          /**
           * The labels that cert-manager will use when creating the temporary HTTPRoute needed for solving the HTTP-01 challenge. These labels must match the label selector of at least one Gateway.
           */
          "labels"?: {
            [key: string]: string;
          };
          /**
           * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
           */
          "serviceType"?: string;
        };
        /**
         * The ingress based HTTP01 challenge solver will solve challenges by creating or modifying Ingress resources in order to route requests for '/.well-known/acme-challenge/XYZ' to 'challenge solver' pods that are provisioned by cert-manager for each Challenge to be completed.
         */
        "ingress"?: {
          /**
           * The ingress class to use when creating Ingress resources to solve ACME challenges that use this challenge solver. Only one of 'class' or 'name' may be specified.
           */
          "class"?: string;
          /**
           * Optional ingress template used to configure the ACME challenge solver ingress used for HTTP01 challenges.
           */
          "ingressTemplate"?: {
            /**
             * ObjectMeta overrides for the ingress used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
             */
            "metadata"?: {
              /**
               * Annotations that should be added to the created ACME HTTP01 solver ingress.
               */
              "annotations"?: {
                [key: string]: string;
              };
              /**
               * Labels that should be added to the created ACME HTTP01 solver ingress.
               */
              "labels"?: {
                [key: string]: string;
              };
            };
          };
          /**
           * The name of the ingress resource that should have ACME challenge solving routes inserted into it in order to solve HTTP01 challenges. This is typically used in conjunction with ingress controllers like ingress-gce, which maintains a 1:1 mapping between external IPs and ingress resources.
           */
          "name"?: string;
          /**
           * Optional pod template used to configure the ACME challenge solver pods used for HTTP01 challenges
           */
          "podTemplate"?: {
            /**
             * ObjectMeta overrides for the pod used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
             */
            "metadata"?: {
              /**
               * Annotations that should be added to the create ACME HTTP01 solver pods.
               */
              "annotations"?: {
                [key: string]: string;
              };
              /**
               * Labels that should be added to the created ACME HTTP01 solver pods.
               */
              "labels"?: {
                [key: string]: string;
              };
            };
            /**
             * PodSpec defines overrides for the HTTP01 challenge solver pod. Only the 'priorityClassName', 'nodeSelector', 'affinity', 'serviceAccountName' and 'tolerations' fields are supported currently. All other fields will be ignored.
             */
            "spec"?: {
              /**
               * If specified, the pod's scheduling constraints
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
                       * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. This field is alpha-level and is only honored when PodAffinityNamespaceSelector feature is enabled.
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
                     * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. This field is alpha-level and is only honored when PodAffinityNamespaceSelector feature is enabled.
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
                       * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. This field is alpha-level and is only honored when PodAffinityNamespaceSelector feature is enabled.
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
                     * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. This field is alpha-level and is only honored when PodAffinityNamespaceSelector feature is enabled.
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
               * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
               */
              "nodeSelector"?: {
                [key: string]: string;
              };
              /**
               * If specified, the pod's priorityClassName.
               */
              "priorityClassName"?: string;
              /**
               * If specified, the pod's service account
               */
              "serviceAccountName"?: string;
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
            };
          };
          /**
           * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
           */
          "serviceType"?: string;
        };
      };
      /**
       * Selector selects a set of DNSNames on the Certificate resource that should be solved using this challenge solver. If not specified, the solver will be treated as the 'default' solver with the lowest priority, i.e. if any other solver has a more specific match, it will be used instead.
       */
      "selector"?: {
        /**
         * List of DNSNames that this solver will be used to solve. If specified and a match is found, a dnsNames selector will take precedence over a dnsZones selector. If multiple solvers match with the same dnsNames value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
         */
        "dnsNames"?: Array<string>;
        /**
         * List of DNSZones that this solver will be used to solve. The most specific DNS zone match specified here will take precedence over other DNS zone matches, so a solver specifying sys.example.com will be selected over one specifying example.com for the domain www.sys.example.com. If multiple solvers match with the same dnsZones value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
         */
        "dnsZones"?: Array<string>;
        /**
         * A label selector that is used to refine the set of certificate's that this challenge solver will apply to.
         */
        "matchLabels"?: {
          [key: string]: string;
        };
      };
    };
    /**
     * The ACME challenge token for this challenge. This is the raw value returned from the ACME server.
     */
    "token": string;
    /**
     * The type of ACME challenge this resource represents. One of "HTTP-01" or "DNS-01".
     */
    "type": "HTTP-01" | "DNS-01";
    /**
     * The URL of the ACME Challenge resource for this challenge. This can be used to lookup details about the status of this challenge.
     */
    "url": string;
    /**
     * wildcard will be true if this challenge is for a wildcard identifier, for example '\*.example.com'.
     */
    "wildcard"?: boolean;
  };
  "status"?: {
    /**
     * presented will be set to true if the challenge values for this challenge are currently 'presented'. This \*does not\* imply the self check is passing. Only that the values have been 'submitted' for the appropriate challenge mechanism (i.e. the DNS01 TXT record has been presented, or the HTTP01 configuration has been configured).
     */
    "presented"?: boolean;
    /**
     * Used to denote whether this challenge should be processed or not. This field will only be set to true by the 'scheduling' component. It will only be set to false by the 'challenges' controller, after the challenge has reached a final state or timed out. If this field is set to false, the challenge controller will not take any more action.
     */
    "processing"?: boolean;
    /**
     * Contains human readable information on why the Challenge is in the current state.
     */
    "reason"?: string;
    /**
     * Contains the current 'state' of the challenge. If not set, the state of the challenge is unknown.
     */
    "state"?: "valid" | "ready" | "pending" | "processing" | "invalid" | "expired" | "errored";
  };
}

/**
 * Challenge is a type to represent a Challenge request with an ACME server
 */
export class Challenge extends Model<IChallenge> implements IChallenge {
  "apiVersion": IChallenge["apiVersion"];
  "kind": IChallenge["kind"];
  "metadata": IChallenge["metadata"];
  "spec": IChallenge["spec"];
  "status"?: IChallenge["status"];

static apiVersion: IChallenge["apiVersion"] = "acme.cert-manager.io/v1beta1";
static kind: IChallenge["kind"] = "Challenge";
static is = createTypeMetaGuard<IChallenge>(Challenge);

constructor(data?: ModelData<IChallenge>) {
  super({
    apiVersion: Challenge.apiVersion,
    kind: Challenge.kind,
    ...data
  } as IChallenge);
}
}


setSchema(Challenge, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
