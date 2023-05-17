import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "cilium.io.v2.CiliumNetworkPolicy";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "cilium.io/v2"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "CiliumNetworkPolicy"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "oneOf": [
        {
          "properties": {
            "endpointSelector": {}
          },
          "required": [
            "endpointSelector"
          ]
        },
        {
          "properties": {
            "nodeSelector": {}
          },
          "required": [
            "nodeSelector"
          ]
        }
      ],
      "properties": {
        "egress": {
          "items": {
            "properties": {
              "icmps": {
                "items": {
                  "properties": {
                    "fields": {
                      "items": {
                        "properties": {
                          "family": {
                            "default": "IPv4",
                            "enum": [
                              "IPv4",
                              "IPv6"
                            ],
                            "type": "string",
                            "nullable": true
                          },
                          "type": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 255
                          }
                        },
                        "required": [
                          "type"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "toCIDR": {
                "items": {
                  "type": "string",
                  "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                },
                "type": "array",
                "nullable": true
              },
              "toCIDRSet": {
                "items": {
                  "properties": {
                    "cidr": {
                      "type": "string",
                      "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                    },
                    "except": {
                      "items": {
                        "type": "string",
                        "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "required": [
                    "cidr"
                  ],
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "toEndpoints": {
                "items": {
                  "properties": {
                    "matchExpressions": {
                      "items": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "operator": {
                            "enum": [
                              "In",
                              "NotIn",
                              "Exists",
                              "DoesNotExist"
                            ],
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
                        "maxLength": 63,
                        "type": "string",
                        "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "toEntities": {
                "items": {
                  "enum": [
                    "all",
                    "world",
                    "cluster",
                    "host",
                    "init",
                    "unmanaged",
                    "remote-node",
                    "health",
                    "none",
                    "kube-apiserver"
                  ],
                  "type": "string"
                },
                "type": "array",
                "nullable": true
              },
              "toFQDNs": {
                "items": {
                  "properties": {
                    "matchName": {
                      "type": "string",
                      "pattern": "^([-a-zA-Z0-9_]+[.]?)+$",
                      "nullable": true
                    },
                    "matchPattern": {
                      "type": "string",
                      "pattern": "^([-a-zA-Z0-9_*]+[.]?)+$",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "toGroups": {
                "items": {
                  "properties": {
                    "aws": {
                      "properties": {
                        "labels": {
                          "additionalProperties": {
                            "type": "string"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        },
                        "region": {
                          "type": "string",
                          "nullable": true
                        },
                        "securityGroupsIds": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "securityGroupsNames": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
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
              "toPorts": {
                "items": {
                  "properties": {
                    "originatingTLS": {
                      "properties": {
                        "certificate": {
                          "type": "string",
                          "nullable": true
                        },
                        "privateKey": {
                          "type": "string",
                          "nullable": true
                        },
                        "secret": {
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "namespace": {
                              "type": "string",
                              "nullable": true
                            }
                          },
                          "required": [
                            "name"
                          ],
                          "type": "object"
                        },
                        "trustedCA": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "required": [
                        "secret"
                      ],
                      "type": "object",
                      "nullable": true
                    },
                    "ports": {
                      "items": {
                        "properties": {
                          "port": {
                            "type": "string",
                            "pattern": "^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$"
                          },
                          "protocol": {
                            "enum": [
                              "TCP",
                              "UDP",
                              "ANY"
                            ],
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "port"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "rules": {
                      "properties": {
                        "dns": {
                          "items": {
                            "properties": {
                              "matchName": {
                                "type": "string",
                                "pattern": "^([-a-zA-Z0-9_]+[.]?)+$",
                                "nullable": true
                              },
                              "matchPattern": {
                                "type": "string",
                                "pattern": "^([-a-zA-Z0-9_*]+[.]?)+$",
                                "nullable": true
                              }
                            },
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "http": {
                          "items": {
                            "properties": {
                              "headerMatches": {
                                "items": {
                                  "properties": {
                                    "mismatch": {
                                      "enum": [
                                        "LOG",
                                        "ADD",
                                        "DELETE",
                                        "REPLACE"
                                      ],
                                      "type": "string",
                                      "nullable": true
                                    },
                                    "name": {
                                      "type": "string"
                                    },
                                    "secret": {
                                      "properties": {
                                        "name": {
                                          "type": "string"
                                        },
                                        "namespace": {
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
                                    "value": {
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
                              "headers": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "host": {
                                "format": "idn-hostname",
                                "type": "string",
                                "nullable": true
                              },
                              "method": {
                                "type": "string",
                                "nullable": true
                              },
                              "path": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "kafka": {
                          "items": {
                            "properties": {
                              "apiKey": {
                                "type": "string",
                                "nullable": true
                              },
                              "apiVersion": {
                                "type": "string",
                                "nullable": true
                              },
                              "clientID": {
                                "type": "string",
                                "nullable": true
                              },
                              "role": {
                                "enum": [
                                  "produce",
                                  "consume"
                                ],
                                "type": "string",
                                "nullable": true
                              },
                              "topic": {
                                "maxLength": 255,
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "l7": {
                          "items": {
                            "additionalProperties": {
                              "type": "string"
                            },
                            "type": "object",
                            "properties": {}
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "l7proto": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "terminatingTLS": {
                      "properties": {
                        "certificate": {
                          "type": "string",
                          "nullable": true
                        },
                        "privateKey": {
                          "type": "string",
                          "nullable": true
                        },
                        "secret": {
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "namespace": {
                              "type": "string",
                              "nullable": true
                            }
                          },
                          "required": [
                            "name"
                          ],
                          "type": "object"
                        },
                        "trustedCA": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "required": [
                        "secret"
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
              "toRequires": {
                "items": {
                  "properties": {
                    "matchExpressions": {
                      "items": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "operator": {
                            "enum": [
                              "In",
                              "NotIn",
                              "Exists",
                              "DoesNotExist"
                            ],
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
                        "maxLength": 63,
                        "type": "string",
                        "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "toServices": {
                "items": {
                  "properties": {
                    "k8sService": {
                      "properties": {
                        "namespace": {
                          "type": "string",
                          "nullable": true
                        },
                        "serviceName": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "k8sServiceSelector": {
                      "properties": {
                        "namespace": {
                          "type": "string",
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
                                    "enum": [
                                      "In",
                                      "NotIn",
                                      "Exists",
                                      "DoesNotExist"
                                    ],
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
                                "maxLength": 63,
                                "type": "string",
                                "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                              },
                              "type": "object",
                              "properties": {},
                              "nullable": true
                            }
                          },
                          "type": "object"
                        }
                      },
                      "required": [
                        "selector"
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
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "egressDeny": {
          "items": {
            "properties": {
              "icmps": {
                "items": {
                  "properties": {
                    "fields": {
                      "items": {
                        "properties": {
                          "family": {
                            "default": "IPv4",
                            "enum": [
                              "IPv4",
                              "IPv6"
                            ],
                            "type": "string",
                            "nullable": true
                          },
                          "type": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 255
                          }
                        },
                        "required": [
                          "type"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "toCIDR": {
                "items": {
                  "type": "string",
                  "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                },
                "type": "array",
                "nullable": true
              },
              "toCIDRSet": {
                "items": {
                  "properties": {
                    "cidr": {
                      "type": "string",
                      "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                    },
                    "except": {
                      "items": {
                        "type": "string",
                        "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "required": [
                    "cidr"
                  ],
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "toEndpoints": {
                "items": {
                  "properties": {
                    "matchExpressions": {
                      "items": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "operator": {
                            "enum": [
                              "In",
                              "NotIn",
                              "Exists",
                              "DoesNotExist"
                            ],
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
                        "maxLength": 63,
                        "type": "string",
                        "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "toEntities": {
                "items": {
                  "enum": [
                    "all",
                    "world",
                    "cluster",
                    "host",
                    "init",
                    "unmanaged",
                    "remote-node",
                    "health",
                    "none",
                    "kube-apiserver"
                  ],
                  "type": "string"
                },
                "type": "array",
                "nullable": true
              },
              "toGroups": {
                "items": {
                  "properties": {
                    "aws": {
                      "properties": {
                        "labels": {
                          "additionalProperties": {
                            "type": "string"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        },
                        "region": {
                          "type": "string",
                          "nullable": true
                        },
                        "securityGroupsIds": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "securityGroupsNames": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
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
              "toPorts": {
                "items": {
                  "properties": {
                    "ports": {
                      "items": {
                        "properties": {
                          "port": {
                            "type": "string",
                            "pattern": "^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$"
                          },
                          "protocol": {
                            "enum": [
                              "TCP",
                              "UDP",
                              "ANY"
                            ],
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "port"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "toRequires": {
                "items": {
                  "properties": {
                    "matchExpressions": {
                      "items": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "operator": {
                            "enum": [
                              "In",
                              "NotIn",
                              "Exists",
                              "DoesNotExist"
                            ],
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
                        "maxLength": 63,
                        "type": "string",
                        "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "toServices": {
                "items": {
                  "properties": {
                    "k8sService": {
                      "properties": {
                        "namespace": {
                          "type": "string",
                          "nullable": true
                        },
                        "serviceName": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "k8sServiceSelector": {
                      "properties": {
                        "namespace": {
                          "type": "string",
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
                                    "enum": [
                                      "In",
                                      "NotIn",
                                      "Exists",
                                      "DoesNotExist"
                                    ],
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
                                "maxLength": 63,
                                "type": "string",
                                "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                              },
                              "type": "object",
                              "properties": {},
                              "nullable": true
                            }
                          },
                          "type": "object"
                        }
                      },
                      "required": [
                        "selector"
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
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "endpointSelector": {
          "properties": {
            "matchExpressions": {
              "items": {
                "properties": {
                  "key": {
                    "type": "string"
                  },
                  "operator": {
                    "enum": [
                      "In",
                      "NotIn",
                      "Exists",
                      "DoesNotExist"
                    ],
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
                "maxLength": 63,
                "type": "string",
                "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "ingress": {
          "items": {
            "properties": {
              "fromCIDR": {
                "items": {
                  "type": "string",
                  "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                },
                "type": "array",
                "nullable": true
              },
              "fromCIDRSet": {
                "items": {
                  "properties": {
                    "cidr": {
                      "type": "string",
                      "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                    },
                    "except": {
                      "items": {
                        "type": "string",
                        "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "required": [
                    "cidr"
                  ],
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "fromEndpoints": {
                "items": {
                  "properties": {
                    "matchExpressions": {
                      "items": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "operator": {
                            "enum": [
                              "In",
                              "NotIn",
                              "Exists",
                              "DoesNotExist"
                            ],
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
                        "maxLength": 63,
                        "type": "string",
                        "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "fromEntities": {
                "items": {
                  "enum": [
                    "all",
                    "world",
                    "cluster",
                    "host",
                    "init",
                    "unmanaged",
                    "remote-node",
                    "health",
                    "none",
                    "kube-apiserver"
                  ],
                  "type": "string"
                },
                "type": "array",
                "nullable": true
              },
              "fromRequires": {
                "items": {
                  "properties": {
                    "matchExpressions": {
                      "items": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "operator": {
                            "enum": [
                              "In",
                              "NotIn",
                              "Exists",
                              "DoesNotExist"
                            ],
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
                        "maxLength": 63,
                        "type": "string",
                        "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "icmps": {
                "items": {
                  "properties": {
                    "fields": {
                      "items": {
                        "properties": {
                          "family": {
                            "default": "IPv4",
                            "enum": [
                              "IPv4",
                              "IPv6"
                            ],
                            "type": "string",
                            "nullable": true
                          },
                          "type": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 255
                          }
                        },
                        "required": [
                          "type"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "toPorts": {
                "items": {
                  "properties": {
                    "originatingTLS": {
                      "properties": {
                        "certificate": {
                          "type": "string",
                          "nullable": true
                        },
                        "privateKey": {
                          "type": "string",
                          "nullable": true
                        },
                        "secret": {
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "namespace": {
                              "type": "string",
                              "nullable": true
                            }
                          },
                          "required": [
                            "name"
                          ],
                          "type": "object"
                        },
                        "trustedCA": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "required": [
                        "secret"
                      ],
                      "type": "object",
                      "nullable": true
                    },
                    "ports": {
                      "items": {
                        "properties": {
                          "port": {
                            "type": "string",
                            "pattern": "^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$"
                          },
                          "protocol": {
                            "enum": [
                              "TCP",
                              "UDP",
                              "ANY"
                            ],
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "port"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "rules": {
                      "properties": {
                        "dns": {
                          "items": {
                            "properties": {
                              "matchName": {
                                "type": "string",
                                "pattern": "^([-a-zA-Z0-9_]+[.]?)+$",
                                "nullable": true
                              },
                              "matchPattern": {
                                "type": "string",
                                "pattern": "^([-a-zA-Z0-9_*]+[.]?)+$",
                                "nullable": true
                              }
                            },
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "http": {
                          "items": {
                            "properties": {
                              "headerMatches": {
                                "items": {
                                  "properties": {
                                    "mismatch": {
                                      "enum": [
                                        "LOG",
                                        "ADD",
                                        "DELETE",
                                        "REPLACE"
                                      ],
                                      "type": "string",
                                      "nullable": true
                                    },
                                    "name": {
                                      "type": "string"
                                    },
                                    "secret": {
                                      "properties": {
                                        "name": {
                                          "type": "string"
                                        },
                                        "namespace": {
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
                                    "value": {
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
                              "headers": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "host": {
                                "format": "idn-hostname",
                                "type": "string",
                                "nullable": true
                              },
                              "method": {
                                "type": "string",
                                "nullable": true
                              },
                              "path": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "kafka": {
                          "items": {
                            "properties": {
                              "apiKey": {
                                "type": "string",
                                "nullable": true
                              },
                              "apiVersion": {
                                "type": "string",
                                "nullable": true
                              },
                              "clientID": {
                                "type": "string",
                                "nullable": true
                              },
                              "role": {
                                "enum": [
                                  "produce",
                                  "consume"
                                ],
                                "type": "string",
                                "nullable": true
                              },
                              "topic": {
                                "maxLength": 255,
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "l7": {
                          "items": {
                            "additionalProperties": {
                              "type": "string"
                            },
                            "type": "object",
                            "properties": {}
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "l7proto": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "terminatingTLS": {
                      "properties": {
                        "certificate": {
                          "type": "string",
                          "nullable": true
                        },
                        "privateKey": {
                          "type": "string",
                          "nullable": true
                        },
                        "secret": {
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "namespace": {
                              "type": "string",
                              "nullable": true
                            }
                          },
                          "required": [
                            "name"
                          ],
                          "type": "object"
                        },
                        "trustedCA": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "required": [
                        "secret"
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
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "ingressDeny": {
          "items": {
            "properties": {
              "fromCIDR": {
                "items": {
                  "type": "string",
                  "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                },
                "type": "array",
                "nullable": true
              },
              "fromCIDRSet": {
                "items": {
                  "properties": {
                    "cidr": {
                      "type": "string",
                      "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                    },
                    "except": {
                      "items": {
                        "type": "string",
                        "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "required": [
                    "cidr"
                  ],
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "fromEndpoints": {
                "items": {
                  "properties": {
                    "matchExpressions": {
                      "items": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "operator": {
                            "enum": [
                              "In",
                              "NotIn",
                              "Exists",
                              "DoesNotExist"
                            ],
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
                        "maxLength": 63,
                        "type": "string",
                        "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "fromEntities": {
                "items": {
                  "enum": [
                    "all",
                    "world",
                    "cluster",
                    "host",
                    "init",
                    "unmanaged",
                    "remote-node",
                    "health",
                    "none",
                    "kube-apiserver"
                  ],
                  "type": "string"
                },
                "type": "array",
                "nullable": true
              },
              "fromRequires": {
                "items": {
                  "properties": {
                    "matchExpressions": {
                      "items": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "operator": {
                            "enum": [
                              "In",
                              "NotIn",
                              "Exists",
                              "DoesNotExist"
                            ],
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
                        "maxLength": 63,
                        "type": "string",
                        "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "icmps": {
                "items": {
                  "properties": {
                    "fields": {
                      "items": {
                        "properties": {
                          "family": {
                            "default": "IPv4",
                            "enum": [
                              "IPv4",
                              "IPv6"
                            ],
                            "type": "string",
                            "nullable": true
                          },
                          "type": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 255
                          }
                        },
                        "required": [
                          "type"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "toPorts": {
                "items": {
                  "properties": {
                    "ports": {
                      "items": {
                        "properties": {
                          "port": {
                            "type": "string",
                            "pattern": "^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$"
                          },
                          "protocol": {
                            "enum": [
                              "TCP",
                              "UDP",
                              "ANY"
                            ],
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "port"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              }
            },
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "labels": {
          "items": {
            "properties": {
              "key": {
                "type": "string"
              },
              "source": {
                "type": "string",
                "nullable": true
              },
              "value": {
                "type": "string",
                "nullable": true
              }
            },
            "required": [
              "key"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "nodeSelector": {
          "properties": {
            "matchExpressions": {
              "items": {
                "properties": {
                  "key": {
                    "type": "string"
                  },
                  "operator": {
                    "enum": [
                      "In",
                      "NotIn",
                      "Exists",
                      "DoesNotExist"
                    ],
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
                "maxLength": 63,
                "type": "string",
                "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
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
    "specs": {
      "items": {
        "oneOf": [
          {
            "properties": {
              "endpointSelector": {}
            },
            "required": [
              "endpointSelector"
            ]
          },
          {
            "properties": {
              "nodeSelector": {}
            },
            "required": [
              "nodeSelector"
            ]
          }
        ],
        "properties": {
          "egress": {
            "items": {
              "properties": {
                "icmps": {
                  "items": {
                    "properties": {
                      "fields": {
                        "items": {
                          "properties": {
                            "family": {
                              "default": "IPv4",
                              "enum": [
                                "IPv4",
                                "IPv6"
                              ],
                              "type": "string",
                              "nullable": true
                            },
                            "type": {
                              "type": "integer",
                              "minimum": 0,
                              "maximum": 255
                            }
                          },
                          "required": [
                            "type"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toCIDR": {
                  "items": {
                    "type": "string",
                    "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toCIDRSet": {
                  "items": {
                    "properties": {
                      "cidr": {
                        "type": "string",
                        "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                      },
                      "except": {
                        "items": {
                          "type": "string",
                          "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "required": [
                      "cidr"
                    ],
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toEndpoints": {
                  "items": {
                    "properties": {
                      "matchExpressions": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "operator": {
                              "enum": [
                                "In",
                                "NotIn",
                                "Exists",
                                "DoesNotExist"
                              ],
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
                          "maxLength": 63,
                          "type": "string",
                          "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toEntities": {
                  "items": {
                    "enum": [
                      "all",
                      "world",
                      "cluster",
                      "host",
                      "init",
                      "unmanaged",
                      "remote-node",
                      "health",
                      "none",
                      "kube-apiserver"
                    ],
                    "type": "string"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toFQDNs": {
                  "items": {
                    "properties": {
                      "matchName": {
                        "type": "string",
                        "pattern": "^([-a-zA-Z0-9_]+[.]?)+$",
                        "nullable": true
                      },
                      "matchPattern": {
                        "type": "string",
                        "pattern": "^([-a-zA-Z0-9_*]+[.]?)+$",
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toGroups": {
                  "items": {
                    "properties": {
                      "aws": {
                        "properties": {
                          "labels": {
                            "additionalProperties": {
                              "type": "string"
                            },
                            "type": "object",
                            "properties": {},
                            "nullable": true
                          },
                          "region": {
                            "type": "string",
                            "nullable": true
                          },
                          "securityGroupsIds": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "securityGroupsNames": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
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
                "toPorts": {
                  "items": {
                    "properties": {
                      "originatingTLS": {
                        "properties": {
                          "certificate": {
                            "type": "string",
                            "nullable": true
                          },
                          "privateKey": {
                            "type": "string",
                            "nullable": true
                          },
                          "secret": {
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "namespace": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "required": [
                              "name"
                            ],
                            "type": "object"
                          },
                          "trustedCA": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "secret"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "ports": {
                        "items": {
                          "properties": {
                            "port": {
                              "type": "string",
                              "pattern": "^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$"
                            },
                            "protocol": {
                              "enum": [
                                "TCP",
                                "UDP",
                                "ANY"
                              ],
                              "type": "string",
                              "nullable": true
                            }
                          },
                          "required": [
                            "port"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "rules": {
                        "properties": {
                          "dns": {
                            "items": {
                              "properties": {
                                "matchName": {
                                  "type": "string",
                                  "pattern": "^([-a-zA-Z0-9_]+[.]?)+$",
                                  "nullable": true
                                },
                                "matchPattern": {
                                  "type": "string",
                                  "pattern": "^([-a-zA-Z0-9_*]+[.]?)+$",
                                  "nullable": true
                                }
                              },
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "http": {
                            "items": {
                              "properties": {
                                "headerMatches": {
                                  "items": {
                                    "properties": {
                                      "mismatch": {
                                        "enum": [
                                          "LOG",
                                          "ADD",
                                          "DELETE",
                                          "REPLACE"
                                        ],
                                        "type": "string",
                                        "nullable": true
                                      },
                                      "name": {
                                        "type": "string"
                                      },
                                      "secret": {
                                        "properties": {
                                          "name": {
                                            "type": "string"
                                          },
                                          "namespace": {
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
                                      "value": {
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
                                "headers": {
                                  "items": {
                                    "type": "string"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "host": {
                                  "format": "idn-hostname",
                                  "type": "string",
                                  "nullable": true
                                },
                                "method": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "path": {
                                  "type": "string",
                                  "nullable": true
                                }
                              },
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "kafka": {
                            "items": {
                              "properties": {
                                "apiKey": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "apiVersion": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "clientID": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "role": {
                                  "enum": [
                                    "produce",
                                    "consume"
                                  ],
                                  "type": "string",
                                  "nullable": true
                                },
                                "topic": {
                                  "maxLength": 255,
                                  "type": "string",
                                  "nullable": true
                                }
                              },
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "l7": {
                            "items": {
                              "additionalProperties": {
                                "type": "string"
                              },
                              "type": "object",
                              "properties": {}
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "l7proto": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "terminatingTLS": {
                        "properties": {
                          "certificate": {
                            "type": "string",
                            "nullable": true
                          },
                          "privateKey": {
                            "type": "string",
                            "nullable": true
                          },
                          "secret": {
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "namespace": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "required": [
                              "name"
                            ],
                            "type": "object"
                          },
                          "trustedCA": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "secret"
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
                "toRequires": {
                  "items": {
                    "properties": {
                      "matchExpressions": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "operator": {
                              "enum": [
                                "In",
                                "NotIn",
                                "Exists",
                                "DoesNotExist"
                              ],
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
                          "maxLength": 63,
                          "type": "string",
                          "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toServices": {
                  "items": {
                    "properties": {
                      "k8sService": {
                        "properties": {
                          "namespace": {
                            "type": "string",
                            "nullable": true
                          },
                          "serviceName": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "k8sServiceSelector": {
                        "properties": {
                          "namespace": {
                            "type": "string",
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
                                      "enum": [
                                        "In",
                                        "NotIn",
                                        "Exists",
                                        "DoesNotExist"
                                      ],
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
                                  "maxLength": 63,
                                  "type": "string",
                                  "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object"
                          }
                        },
                        "required": [
                          "selector"
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
              "type": "object"
            },
            "type": "array",
            "nullable": true
          },
          "egressDeny": {
            "items": {
              "properties": {
                "icmps": {
                  "items": {
                    "properties": {
                      "fields": {
                        "items": {
                          "properties": {
                            "family": {
                              "default": "IPv4",
                              "enum": [
                                "IPv4",
                                "IPv6"
                              ],
                              "type": "string",
                              "nullable": true
                            },
                            "type": {
                              "type": "integer",
                              "minimum": 0,
                              "maximum": 255
                            }
                          },
                          "required": [
                            "type"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toCIDR": {
                  "items": {
                    "type": "string",
                    "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toCIDRSet": {
                  "items": {
                    "properties": {
                      "cidr": {
                        "type": "string",
                        "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                      },
                      "except": {
                        "items": {
                          "type": "string",
                          "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "required": [
                      "cidr"
                    ],
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toEndpoints": {
                  "items": {
                    "properties": {
                      "matchExpressions": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "operator": {
                              "enum": [
                                "In",
                                "NotIn",
                                "Exists",
                                "DoesNotExist"
                              ],
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
                          "maxLength": 63,
                          "type": "string",
                          "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toEntities": {
                  "items": {
                    "enum": [
                      "all",
                      "world",
                      "cluster",
                      "host",
                      "init",
                      "unmanaged",
                      "remote-node",
                      "health",
                      "none",
                      "kube-apiserver"
                    ],
                    "type": "string"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toGroups": {
                  "items": {
                    "properties": {
                      "aws": {
                        "properties": {
                          "labels": {
                            "additionalProperties": {
                              "type": "string"
                            },
                            "type": "object",
                            "properties": {},
                            "nullable": true
                          },
                          "region": {
                            "type": "string",
                            "nullable": true
                          },
                          "securityGroupsIds": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "securityGroupsNames": {
                            "items": {
                              "type": "string"
                            },
                            "type": "array",
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
                "toPorts": {
                  "items": {
                    "properties": {
                      "ports": {
                        "items": {
                          "properties": {
                            "port": {
                              "type": "string",
                              "pattern": "^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$"
                            },
                            "protocol": {
                              "enum": [
                                "TCP",
                                "UDP",
                                "ANY"
                              ],
                              "type": "string",
                              "nullable": true
                            }
                          },
                          "required": [
                            "port"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toRequires": {
                  "items": {
                    "properties": {
                      "matchExpressions": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "operator": {
                              "enum": [
                                "In",
                                "NotIn",
                                "Exists",
                                "DoesNotExist"
                              ],
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
                          "maxLength": 63,
                          "type": "string",
                          "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toServices": {
                  "items": {
                    "properties": {
                      "k8sService": {
                        "properties": {
                          "namespace": {
                            "type": "string",
                            "nullable": true
                          },
                          "serviceName": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "k8sServiceSelector": {
                        "properties": {
                          "namespace": {
                            "type": "string",
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
                                      "enum": [
                                        "In",
                                        "NotIn",
                                        "Exists",
                                        "DoesNotExist"
                                      ],
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
                                  "maxLength": 63,
                                  "type": "string",
                                  "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object"
                          }
                        },
                        "required": [
                          "selector"
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
              "type": "object"
            },
            "type": "array",
            "nullable": true
          },
          "endpointSelector": {
            "properties": {
              "matchExpressions": {
                "items": {
                  "properties": {
                    "key": {
                      "type": "string"
                    },
                    "operator": {
                      "enum": [
                        "In",
                        "NotIn",
                        "Exists",
                        "DoesNotExist"
                      ],
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
                  "maxLength": 63,
                  "type": "string",
                  "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                },
                "type": "object",
                "properties": {},
                "nullable": true
              }
            },
            "type": "object",
            "nullable": true
          },
          "ingress": {
            "items": {
              "properties": {
                "fromCIDR": {
                  "items": {
                    "type": "string",
                    "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                  },
                  "type": "array",
                  "nullable": true
                },
                "fromCIDRSet": {
                  "items": {
                    "properties": {
                      "cidr": {
                        "type": "string",
                        "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                      },
                      "except": {
                        "items": {
                          "type": "string",
                          "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "required": [
                      "cidr"
                    ],
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "fromEndpoints": {
                  "items": {
                    "properties": {
                      "matchExpressions": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "operator": {
                              "enum": [
                                "In",
                                "NotIn",
                                "Exists",
                                "DoesNotExist"
                              ],
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
                          "maxLength": 63,
                          "type": "string",
                          "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "fromEntities": {
                  "items": {
                    "enum": [
                      "all",
                      "world",
                      "cluster",
                      "host",
                      "init",
                      "unmanaged",
                      "remote-node",
                      "health",
                      "none",
                      "kube-apiserver"
                    ],
                    "type": "string"
                  },
                  "type": "array",
                  "nullable": true
                },
                "fromRequires": {
                  "items": {
                    "properties": {
                      "matchExpressions": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "operator": {
                              "enum": [
                                "In",
                                "NotIn",
                                "Exists",
                                "DoesNotExist"
                              ],
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
                          "maxLength": 63,
                          "type": "string",
                          "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "icmps": {
                  "items": {
                    "properties": {
                      "fields": {
                        "items": {
                          "properties": {
                            "family": {
                              "default": "IPv4",
                              "enum": [
                                "IPv4",
                                "IPv6"
                              ],
                              "type": "string",
                              "nullable": true
                            },
                            "type": {
                              "type": "integer",
                              "minimum": 0,
                              "maximum": 255
                            }
                          },
                          "required": [
                            "type"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toPorts": {
                  "items": {
                    "properties": {
                      "originatingTLS": {
                        "properties": {
                          "certificate": {
                            "type": "string",
                            "nullable": true
                          },
                          "privateKey": {
                            "type": "string",
                            "nullable": true
                          },
                          "secret": {
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "namespace": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "required": [
                              "name"
                            ],
                            "type": "object"
                          },
                          "trustedCA": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "secret"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "ports": {
                        "items": {
                          "properties": {
                            "port": {
                              "type": "string",
                              "pattern": "^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$"
                            },
                            "protocol": {
                              "enum": [
                                "TCP",
                                "UDP",
                                "ANY"
                              ],
                              "type": "string",
                              "nullable": true
                            }
                          },
                          "required": [
                            "port"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "rules": {
                        "properties": {
                          "dns": {
                            "items": {
                              "properties": {
                                "matchName": {
                                  "type": "string",
                                  "pattern": "^([-a-zA-Z0-9_]+[.]?)+$",
                                  "nullable": true
                                },
                                "matchPattern": {
                                  "type": "string",
                                  "pattern": "^([-a-zA-Z0-9_*]+[.]?)+$",
                                  "nullable": true
                                }
                              },
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "http": {
                            "items": {
                              "properties": {
                                "headerMatches": {
                                  "items": {
                                    "properties": {
                                      "mismatch": {
                                        "enum": [
                                          "LOG",
                                          "ADD",
                                          "DELETE",
                                          "REPLACE"
                                        ],
                                        "type": "string",
                                        "nullable": true
                                      },
                                      "name": {
                                        "type": "string"
                                      },
                                      "secret": {
                                        "properties": {
                                          "name": {
                                            "type": "string"
                                          },
                                          "namespace": {
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
                                      "value": {
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
                                "headers": {
                                  "items": {
                                    "type": "string"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "host": {
                                  "format": "idn-hostname",
                                  "type": "string",
                                  "nullable": true
                                },
                                "method": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "path": {
                                  "type": "string",
                                  "nullable": true
                                }
                              },
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "kafka": {
                            "items": {
                              "properties": {
                                "apiKey": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "apiVersion": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "clientID": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "role": {
                                  "enum": [
                                    "produce",
                                    "consume"
                                  ],
                                  "type": "string",
                                  "nullable": true
                                },
                                "topic": {
                                  "maxLength": 255,
                                  "type": "string",
                                  "nullable": true
                                }
                              },
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "l7": {
                            "items": {
                              "additionalProperties": {
                                "type": "string"
                              },
                              "type": "object",
                              "properties": {}
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "l7proto": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "terminatingTLS": {
                        "properties": {
                          "certificate": {
                            "type": "string",
                            "nullable": true
                          },
                          "privateKey": {
                            "type": "string",
                            "nullable": true
                          },
                          "secret": {
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "namespace": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "required": [
                              "name"
                            ],
                            "type": "object"
                          },
                          "trustedCA": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "required": [
                          "secret"
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
              "type": "object"
            },
            "type": "array",
            "nullable": true
          },
          "ingressDeny": {
            "items": {
              "properties": {
                "fromCIDR": {
                  "items": {
                    "type": "string",
                    "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                  },
                  "type": "array",
                  "nullable": true
                },
                "fromCIDRSet": {
                  "items": {
                    "properties": {
                      "cidr": {
                        "type": "string",
                        "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                      },
                      "except": {
                        "items": {
                          "type": "string",
                          "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "required": [
                      "cidr"
                    ],
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "fromEndpoints": {
                  "items": {
                    "properties": {
                      "matchExpressions": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "operator": {
                              "enum": [
                                "In",
                                "NotIn",
                                "Exists",
                                "DoesNotExist"
                              ],
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
                          "maxLength": 63,
                          "type": "string",
                          "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "fromEntities": {
                  "items": {
                    "enum": [
                      "all",
                      "world",
                      "cluster",
                      "host",
                      "init",
                      "unmanaged",
                      "remote-node",
                      "health",
                      "none",
                      "kube-apiserver"
                    ],
                    "type": "string"
                  },
                  "type": "array",
                  "nullable": true
                },
                "fromRequires": {
                  "items": {
                    "properties": {
                      "matchExpressions": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "operator": {
                              "enum": [
                                "In",
                                "NotIn",
                                "Exists",
                                "DoesNotExist"
                              ],
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
                          "maxLength": 63,
                          "type": "string",
                          "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "icmps": {
                  "items": {
                    "properties": {
                      "fields": {
                        "items": {
                          "properties": {
                            "family": {
                              "default": "IPv4",
                              "enum": [
                                "IPv4",
                                "IPv6"
                              ],
                              "type": "string",
                              "nullable": true
                            },
                            "type": {
                              "type": "integer",
                              "minimum": 0,
                              "maximum": 255
                            }
                          },
                          "required": [
                            "type"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "toPorts": {
                  "items": {
                    "properties": {
                      "ports": {
                        "items": {
                          "properties": {
                            "port": {
                              "type": "string",
                              "pattern": "^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$"
                            },
                            "protocol": {
                              "enum": [
                                "TCP",
                                "UDP",
                                "ANY"
                              ],
                              "type": "string",
                              "nullable": true
                            }
                          },
                          "required": [
                            "port"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                }
              },
              "type": "object"
            },
            "type": "array",
            "nullable": true
          },
          "labels": {
            "items": {
              "properties": {
                "key": {
                  "type": "string"
                },
                "source": {
                  "type": "string",
                  "nullable": true
                },
                "value": {
                  "type": "string",
                  "nullable": true
                }
              },
              "required": [
                "key"
              ],
              "type": "object"
            },
            "type": "array",
            "nullable": true
          },
          "nodeSelector": {
            "properties": {
              "matchExpressions": {
                "items": {
                  "properties": {
                    "key": {
                      "type": "string"
                    },
                    "operator": {
                      "enum": [
                        "In",
                        "NotIn",
                        "Exists",
                        "DoesNotExist"
                      ],
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
                  "maxLength": 63,
                  "type": "string",
                  "pattern": "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$"
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
      "type": "array",
      "nullable": true
    },
    "status": {
      "properties": {
        "derivativePolicies": {
          "additionalProperties": {
            "properties": {
              "annotations": {
                "additionalProperties": {
                  "type": "string"
                },
                "type": "object",
                "properties": {},
                "nullable": true
              },
              "enforcing": {
                "type": "boolean",
                "nullable": true
              },
              "error": {
                "type": "string",
                "nullable": true
              },
              "lastUpdated": {
                "format": "date-time",
                "type": "string",
                "nullable": true
              },
              "localPolicyRevision": {
                "format": "int64",
                "type": "integer",
                "nullable": true
              },
              "ok": {
                "type": "boolean",
                "nullable": true
              }
            },
            "type": "object"
          },
          "type": "object",
          "properties": {},
          "nullable": true
        },
        "nodes": {
          "additionalProperties": {
            "properties": {
              "annotations": {
                "additionalProperties": {
                  "type": "string"
                },
                "type": "object",
                "properties": {},
                "nullable": true
              },
              "enforcing": {
                "type": "boolean",
                "nullable": true
              },
              "error": {
                "type": "string",
                "nullable": true
              },
              "lastUpdated": {
                "format": "date-time",
                "type": "string",
                "nullable": true
              },
              "localPolicyRevision": {
                "format": "int64",
                "type": "integer",
                "nullable": true
              },
              "ok": {
                "type": "boolean",
                "nullable": true
              }
            },
            "type": "object"
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
  "required": [
    "metadata",
    "apiVersion",
    "kind"
  ]
};

/**
 * CiliumNetworkPolicy is a Kubernetes third-party resource with an extended version of NetworkPolicy.
 */
export interface ICiliumNetworkPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "cilium.io/v2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "CiliumNetworkPolicy";
  "metadata": IObjectMeta;
  /**
   * Spec is the desired Cilium specific rule specification.
   */
  "spec"?: {
    /**
     * Description is a free form string, it can be used by the creator of the rule to store human readable explanation of the purpose of this rule. Rules cannot be identified by comment.
     */
    "description"?: string;
    /**
     * Egress is a list of EgressRule which are enforced at egress. If omitted or empty, this rule does not apply at egress.
     */
    "egress"?: Array<{
      /**
       * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is allowed to connect to. 
       *  Example: Any endpoint with the label "app=httpd" is allowed to initiate type 8 ICMP connections.
       */
      "icmps"?: Array<{
        /**
         * Fields is a list of ICMP fields.
         */
        "fields"?: Array<{
          /**
           * Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
           */
          "family"?: "IPv4" | "IPv6";
          /**
           * Type is a ICMP-type. It should be 0-255 (8bit).
           */
          "type": number;
        }>;
      }>;
      /**
       * ToCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections. Only connections destined for outside of the cluster and not targeting the host will be subject to CIDR rules.  This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. 
       *  Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24
       */
      "toCIDR"?: Array<string>;
      /**
       * ToCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections to in addition to connections which are allowed via ToEndpoints, along with a list of subnets contained within their corresponding IP block to which traffic should not be allowed. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. 
       *  Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24 except from IPs in subnet 10.2.3.0/28.
       */
      "toCIDRSet"?: Array<{
        /**
         * CIDR is a CIDR prefix / IP Block.
         */
        "cidr": string;
        /**
         * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
         */
        "except"?: Array<string>;
      }>;
      /**
       * ToEndpoints is a list of endpoints identified by an EndpointSelector to which the endpoints subject to the rule are allowed to communicate. 
       *  Example: Any endpoint with the label "role=frontend" can communicate with any endpoint carrying the label "role=backend".
       */
      "toEndpoints"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * ToEntities is a list of special entities to which the endpoint subject to the rule is allowed to initiate connections. Supported entities are `world`, `cluster` and `host`
       */
      "toEntities"?: Array<"all" | "world" | "cluster" | "host" | "init" | "unmanaged" | "remote-node" | "health" | "none" | "kube-apiserver">;
      /**
       * ToFQDN allows whitelisting DNS names in place of IPs. The IPs that result from DNS resolution of `ToFQDN.MatchName`s are added to the same EgressRule object as ToCIDRSet entries, and behave accordingly. Any L4 and L7 rules within this EgressRule will also apply to these IPs. The DNS -> IP mapping is re-resolved periodically from within the cilium-agent, and the IPs in the DNS response are effected in the policy for selected pods as-is (i.e. the list of IPs is not modified in any way). Note: An explicit rule to allow for DNS traffic is needed for the pods, as ToFQDN counts as an egress rule and will enforce egress policy when PolicyEnforcment=default. Note: If the resolved IPs are IPs within the kubernetes cluster, the ToFQDN rule will not apply to that IP. Note: ToFQDN cannot occur in the same policy as other To\* rules. 
       *  The current implementation has a number of limitations: - The DNS resolution originates from cilium-agent, and not from the pods. Differences between the responses seen by cilium agent and a particular pod will whitelist the incorrect IP. - DNS TTLs are ignored, and cilium-agent will repoll on a short interval (5 seconds). Each change to the DNS data will trigger a policy regeneration. This may result in delayed updates to the policy for an endpoint when the data changes often or the system is under load.
       */
      "toFQDNs"?: Array<{
        /**
         * MatchName matches literal DNS names. A trailing "." is automatically added when missing.
         */
        "matchName"?: string;
        /**
         * MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "\*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "\*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing. 
         *  Examples: `\*.cilium.io` matches subomains of cilium at that level   www.cilium.io and blog.cilium.io match, cilium.io and google.com do not `\*cilium.io` matches cilium.io and all subdomains 1 level below   www.cilium.io, blog.cilium.io and cilium.io match, google.com does not sub\*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub"   sub.cilium.io and subdomain.cilium.io match, www.cilium.io,   blog.cilium.io, cilium.io and google.com do not
         */
        "matchPattern"?: string;
      }>;
      /**
       * ToGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives: 
       *  Example: toGroups: - aws:     securityGroupsIds:     - 'sg-XXXXXXXXXXXXX'
       */
      "toGroups"?: Array<{
        /**
         * AWSGroup is an structure that can be used to whitelisting information from AWS integration
         */
        "aws"?: {
          "labels"?: {
            [key: string]: string;
          };
          "region"?: string;
          "securityGroupsIds"?: Array<string>;
          "securityGroupsNames"?: Array<string>;
        };
      }>;
      /**
       * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is allowed to connect to. 
       *  Example: Any endpoint with the label "role=frontend" is allowed to initiate connections to destination port 8080/tcp
       */
      "toPorts"?: Array<{
        /**
         * OriginatingTLS is the TLS context for the connections originated by the L7 proxy.  For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint.
         */
        "originatingTLS"?: {
          /**
           * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
           */
          "certificate"?: string;
          /**
           * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
           */
          "privateKey"?: string;
          /**
           * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.
           */
          "secret": {
            /**
             * Name is the name of the secret.
             */
            "name": string;
            /**
             * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").
             */
            "namespace"?: string;
          };
          /**
           * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
           */
          "trustedCA"?: string;
        };
        /**
         * Ports is a list of L4 port/protocol
         */
        "ports"?: Array<{
          /**
           * Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
           */
          "port": string;
          /**
           * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", ""/"ANY" 
           *  Matching on ICMP is not supported. 
           *  Named port specified for a container may narrow this down, but may not contradict this.
           */
          "protocol"?: "TCP" | "UDP" | "ANY";
        }>;
        /**
         * Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced.
         */
        "rules"?: {
          /**
           * DNS-specific rules.
           */
          "dns"?: Array<{
            /**
             * MatchName matches literal DNS names. A trailing "." is automatically added when missing.
             */
            "matchName"?: string;
            /**
             * MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "\*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "\*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing. 
             *  Examples: `\*.cilium.io` matches subomains of cilium at that level   www.cilium.io and blog.cilium.io match, cilium.io and google.com do not `\*cilium.io` matches cilium.io and all subdomains 1 level below   www.cilium.io, blog.cilium.io and cilium.io match, google.com does not sub\*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub"   sub.cilium.io and subdomain.cilium.io match, www.cilium.io,   blog.cilium.io, cilium.io and google.com do not
             */
            "matchPattern"?: string;
          }>;
          /**
           * HTTP specific rules.
           */
          "http"?: Array<{
            /**
             * HeaderMatches is a list of HTTP headers which must be present and match against the given values. Mismatch field can be used to specify what to do when there is no match.
             */
            "headerMatches"?: Array<{
              /**
               * Mismatch identifies what to do in case there is no match. The default is to drop the request. Otherwise the overall rule is still considered as matching, but the mismatches are logged in the access log.
               */
              "mismatch"?: "LOG" | "ADD" | "DELETE" | "REPLACE";
              /**
               * Name identifies the header.
               */
              "name": string;
              /**
               * Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no "Value" specified, the match will fail.
               */
              "secret"?: {
                /**
                 * Name is the name of the secret.
                 */
                "name": string;
                /**
                 * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").
                 */
                "namespace"?: string;
              };
              /**
               * Value matches the exact value of the header. Can be specified either alone or together with "Secret"; will be used as the header value if the secret can not be found in the latter case.
               */
              "value"?: string;
            }>;
            /**
             * Headers is a list of HTTP headers which must be present in the request. If omitted or empty, requests are allowed regardless of headers present.
             */
            "headers"?: Array<string>;
            /**
             * Host is an extended POSIX regex matched against the host header of a request, e.g. "foo.com" 
             *  If omitted or empty, the value of the host header is ignored.
             */
            "host"?: string;
            /**
             * Method is an extended POSIX regex matched against the method of a request, e.g. "GET", "POST", "PUT", "PATCH", "DELETE", ... 
             *  If omitted or empty, all methods are allowed.
             */
            "method"?: string;
            /**
             * Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. 
             *  If omitted or empty, all paths are all allowed.
             */
            "path"?: string;
          }>;
          /**
           * Kafka-specific rules.
           */
          "kafka"?: Array<{
            /**
             * APIKey is a case-insensitive string matched against the key of a request, e.g. "produce", "fetch", "createtopic", "deletetopic", et al Reference: https://kafka.apache.org/protocol#protocol_api_keys 
             *  If omitted or empty, and if Role is not specified, then all keys are allowed.
             */
            "apiKey"?: string;
            /**
             * APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer. 
             *  If omitted or empty, all versions are allowed.
             */
            "apiVersion"?: string;
            /**
             * ClientID is the client identifier as provided in the request. 
             *  From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client. 
             *  If omitted or empty, all client identifiers are allowed.
             */
            "clientID"?: string;
            /**
             * Role is a case-insensitive string and describes a group of API keys necessary to perform certain higher-level Kafka operations such as "produce" or "consume". A Role automatically expands into all APIKeys required to perform the specified higher-level operation. 
             *  The following values are supported:  - "produce": Allow producing to the topics specified in the rule  - "consume": Allow consuming from the topics specified in the rule 
             *  This field is incompatible with the APIKey field, i.e APIKey and Role cannot both be specified in the same rule. 
             *  If omitted or empty, and if APIKey is not specified, then all keys are allowed.
             */
            "role"?: "produce" | "consume";
            /**
             * Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected. 
             *  This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _. 
             *  Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255. 
             *  If omitted or empty, all topics are allowed.
             */
            "topic"?: string;
          }>;
          /**
           * Key-value pair rules.
           */
          "l7"?: Array<{
            [key: string]: string;
          }>;
          /**
           * Name of the L7 protocol for which the Key-value pair rules apply.
           */
          "l7proto"?: string;
        };
        /**
         * TerminatingTLS is the TLS context for the connection terminated by the L7 proxy.  For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy.
         */
        "terminatingTLS"?: {
          /**
           * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
           */
          "certificate"?: string;
          /**
           * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
           */
          "privateKey"?: string;
          /**
           * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.
           */
          "secret": {
            /**
             * Name is the name of the secret.
             */
            "name": string;
            /**
             * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").
             */
            "namespace"?: string;
          };
          /**
           * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
           */
          "trustedCA"?: string;
        };
      }>;
      /**
       * ToRequires is a list of additional constraints which must be met in order for the selected endpoints to be able to connect to other endpoints. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching ToEndpoints. 
       *  Example: Any Endpoint with the label "team=A" requires any endpoint to which it communicates to also carry the label "team=A".
       */
      "toRequires"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * ToServices is a list of services to which the endpoint subject to the rule is allowed to initiate connections. Currently Cilium only supports toServices for K8s services without selectors. 
       *  Example: Any endpoint with the label "app=backend-app" is allowed to initiate connections to all cidrs backing the "external-service" service
       */
      "toServices"?: Array<{
        /**
         * K8sService selects service by name and namespace pair
         */
        "k8sService"?: {
          "namespace"?: string;
          "serviceName"?: string;
        };
        /**
         * K8sServiceSelector selects services by k8s labels and namespace
         */
        "k8sServiceSelector"?: {
          "namespace"?: string;
          /**
           * ServiceSelector is a label selector for k8s services
           */
          "selector": {
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
              "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
        };
      }>;
    }>;
    /**
     * EgressDeny is a list of EgressDenyRule which are enforced at egress. Any rule inserted here will by denied regardless of the allowed egress rules in the 'egress' field. If omitted or empty, this rule does not apply at egress.
     */
    "egressDeny"?: Array<{
      /**
       * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is not allowed to connect to. 
       *  Example: Any endpoint with the label "app=httpd" is not allowed to initiate type 8 ICMP connections.
       */
      "icmps"?: Array<{
        /**
         * Fields is a list of ICMP fields.
         */
        "fields"?: Array<{
          /**
           * Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
           */
          "family"?: "IPv4" | "IPv6";
          /**
           * Type is a ICMP-type. It should be 0-255 (8bit).
           */
          "type": number;
        }>;
      }>;
      /**
       * ToCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections. Only connections destined for outside of the cluster and not targeting the host will be subject to CIDR rules.  This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. 
       *  Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24
       */
      "toCIDR"?: Array<string>;
      /**
       * ToCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections to in addition to connections which are allowed via ToEndpoints, along with a list of subnets contained within their corresponding IP block to which traffic should not be allowed. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. 
       *  Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24 except from IPs in subnet 10.2.3.0/28.
       */
      "toCIDRSet"?: Array<{
        /**
         * CIDR is a CIDR prefix / IP Block.
         */
        "cidr": string;
        /**
         * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
         */
        "except"?: Array<string>;
      }>;
      /**
       * ToEndpoints is a list of endpoints identified by an EndpointSelector to which the endpoints subject to the rule are allowed to communicate. 
       *  Example: Any endpoint with the label "role=frontend" can communicate with any endpoint carrying the label "role=backend".
       */
      "toEndpoints"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * ToEntities is a list of special entities to which the endpoint subject to the rule is allowed to initiate connections. Supported entities are `world`, `cluster` and `host`
       */
      "toEntities"?: Array<"all" | "world" | "cluster" | "host" | "init" | "unmanaged" | "remote-node" | "health" | "none" | "kube-apiserver">;
      /**
       * ToGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives: 
       *  Example: toGroups: - aws:     securityGroupsIds:     - 'sg-XXXXXXXXXXXXX'
       */
      "toGroups"?: Array<{
        /**
         * AWSGroup is an structure that can be used to whitelisting information from AWS integration
         */
        "aws"?: {
          "labels"?: {
            [key: string]: string;
          };
          "region"?: string;
          "securityGroupsIds"?: Array<string>;
          "securityGroupsNames"?: Array<string>;
        };
      }>;
      /**
       * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is not allowed to connect to. 
       *  Example: Any endpoint with the label "role=frontend" is not allowed to initiate connections to destination port 8080/tcp
       */
      "toPorts"?: Array<{
        /**
         * Ports is a list of L4 port/protocol
         */
        "ports"?: Array<{
          /**
           * Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
           */
          "port": string;
          /**
           * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", ""/"ANY" 
           *  Matching on ICMP is not supported. 
           *  Named port specified for a container may narrow this down, but may not contradict this.
           */
          "protocol"?: "TCP" | "UDP" | "ANY";
        }>;
      }>;
      /**
       * ToRequires is a list of additional constraints which must be met in order for the selected endpoints to be able to connect to other endpoints. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching ToEndpoints. 
       *  Example: Any Endpoint with the label "team=A" requires any endpoint to which it communicates to also carry the label "team=A".
       */
      "toRequires"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * ToServices is a list of services to which the endpoint subject to the rule is allowed to initiate connections. Currently Cilium only supports toServices for K8s services without selectors. 
       *  Example: Any endpoint with the label "app=backend-app" is allowed to initiate connections to all cidrs backing the "external-service" service
       */
      "toServices"?: Array<{
        /**
         * K8sService selects service by name and namespace pair
         */
        "k8sService"?: {
          "namespace"?: string;
          "serviceName"?: string;
        };
        /**
         * K8sServiceSelector selects services by k8s labels and namespace
         */
        "k8sServiceSelector"?: {
          "namespace"?: string;
          /**
           * ServiceSelector is a label selector for k8s services
           */
          "selector": {
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
              "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
        };
      }>;
    }>;
    /**
     * EndpointSelector selects all endpoints which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive.
     */
    "endpointSelector"?: {
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
        "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
     * Ingress is a list of IngressRule which are enforced at ingress. If omitted or empty, this rule does not apply at ingress.
     */
    "ingress"?: Array<{
      /**
       * FromCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from. Only connections which do \*not\* originate from the cluster or from the local host are subject to CIDR rules. In order to allow in-cluster connectivity, use the FromEndpoints field.  This will match on the source IP address of incoming connections. Adding  a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is  equivalent.  Overlaps are allowed between FromCIDR and FromCIDRSet. 
       *  Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.3.9.1
       */
      "fromCIDR"?: Array<string>;
      /**
       * FromCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from in addition to FromEndpoints, along with a list of subnets contained within their corresponding IP block from which traffic should not be allowed. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet. 
       *  Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.0.0.0/8 except from IPs in subnet 10.96.0.0/12.
       */
      "fromCIDRSet"?: Array<{
        /**
         * CIDR is a CIDR prefix / IP Block.
         */
        "cidr": string;
        /**
         * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
         */
        "except"?: Array<string>;
      }>;
      /**
       * FromEndpoints is a list of endpoints identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule. 
       *  Example: Any endpoint with the label "role=backend" can be consumed by any endpoint carrying the label "role=frontend".
       */
      "fromEndpoints"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * FromEntities is a list of special entities which the endpoint subject to the rule is allowed to receive connections from. Supported entities are `world`, `cluster` and `host`
       */
      "fromEntities"?: Array<"all" | "world" | "cluster" | "host" | "init" | "unmanaged" | "remote-node" | "health" | "none" | "kube-apiserver">;
      /**
       * FromRequires is a list of additional constraints which must be met in order for the selected endpoints to be reachable. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching FromEndpoints. 
       *  Example: Any Endpoint with the label "team=A" requires consuming endpoint to also carry the label "team=A".
       */
      "fromRequires"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is allowed to receive connections on. 
       *  Example: Any endpoint with the label "app=httpd" can only accept incoming type 8 ICMP connections.
       */
      "icmps"?: Array<{
        /**
         * Fields is a list of ICMP fields.
         */
        "fields"?: Array<{
          /**
           * Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
           */
          "family"?: "IPv4" | "IPv6";
          /**
           * Type is a ICMP-type. It should be 0-255 (8bit).
           */
          "type": number;
        }>;
      }>;
      /**
       * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is allowed to receive connections on. 
       *  Example: Any endpoint with the label "app=httpd" can only accept incoming connections on port 80/tcp.
       */
      "toPorts"?: Array<{
        /**
         * OriginatingTLS is the TLS context for the connections originated by the L7 proxy.  For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint.
         */
        "originatingTLS"?: {
          /**
           * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
           */
          "certificate"?: string;
          /**
           * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
           */
          "privateKey"?: string;
          /**
           * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.
           */
          "secret": {
            /**
             * Name is the name of the secret.
             */
            "name": string;
            /**
             * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").
             */
            "namespace"?: string;
          };
          /**
           * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
           */
          "trustedCA"?: string;
        };
        /**
         * Ports is a list of L4 port/protocol
         */
        "ports"?: Array<{
          /**
           * Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
           */
          "port": string;
          /**
           * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", ""/"ANY" 
           *  Matching on ICMP is not supported. 
           *  Named port specified for a container may narrow this down, but may not contradict this.
           */
          "protocol"?: "TCP" | "UDP" | "ANY";
        }>;
        /**
         * Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced.
         */
        "rules"?: {
          /**
           * DNS-specific rules.
           */
          "dns"?: Array<{
            /**
             * MatchName matches literal DNS names. A trailing "." is automatically added when missing.
             */
            "matchName"?: string;
            /**
             * MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "\*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "\*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing. 
             *  Examples: `\*.cilium.io` matches subomains of cilium at that level   www.cilium.io and blog.cilium.io match, cilium.io and google.com do not `\*cilium.io` matches cilium.io and all subdomains 1 level below   www.cilium.io, blog.cilium.io and cilium.io match, google.com does not sub\*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub"   sub.cilium.io and subdomain.cilium.io match, www.cilium.io,   blog.cilium.io, cilium.io and google.com do not
             */
            "matchPattern"?: string;
          }>;
          /**
           * HTTP specific rules.
           */
          "http"?: Array<{
            /**
             * HeaderMatches is a list of HTTP headers which must be present and match against the given values. Mismatch field can be used to specify what to do when there is no match.
             */
            "headerMatches"?: Array<{
              /**
               * Mismatch identifies what to do in case there is no match. The default is to drop the request. Otherwise the overall rule is still considered as matching, but the mismatches are logged in the access log.
               */
              "mismatch"?: "LOG" | "ADD" | "DELETE" | "REPLACE";
              /**
               * Name identifies the header.
               */
              "name": string;
              /**
               * Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no "Value" specified, the match will fail.
               */
              "secret"?: {
                /**
                 * Name is the name of the secret.
                 */
                "name": string;
                /**
                 * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").
                 */
                "namespace"?: string;
              };
              /**
               * Value matches the exact value of the header. Can be specified either alone or together with "Secret"; will be used as the header value if the secret can not be found in the latter case.
               */
              "value"?: string;
            }>;
            /**
             * Headers is a list of HTTP headers which must be present in the request. If omitted or empty, requests are allowed regardless of headers present.
             */
            "headers"?: Array<string>;
            /**
             * Host is an extended POSIX regex matched against the host header of a request, e.g. "foo.com" 
             *  If omitted or empty, the value of the host header is ignored.
             */
            "host"?: string;
            /**
             * Method is an extended POSIX regex matched against the method of a request, e.g. "GET", "POST", "PUT", "PATCH", "DELETE", ... 
             *  If omitted or empty, all methods are allowed.
             */
            "method"?: string;
            /**
             * Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. 
             *  If omitted or empty, all paths are all allowed.
             */
            "path"?: string;
          }>;
          /**
           * Kafka-specific rules.
           */
          "kafka"?: Array<{
            /**
             * APIKey is a case-insensitive string matched against the key of a request, e.g. "produce", "fetch", "createtopic", "deletetopic", et al Reference: https://kafka.apache.org/protocol#protocol_api_keys 
             *  If omitted or empty, and if Role is not specified, then all keys are allowed.
             */
            "apiKey"?: string;
            /**
             * APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer. 
             *  If omitted or empty, all versions are allowed.
             */
            "apiVersion"?: string;
            /**
             * ClientID is the client identifier as provided in the request. 
             *  From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client. 
             *  If omitted or empty, all client identifiers are allowed.
             */
            "clientID"?: string;
            /**
             * Role is a case-insensitive string and describes a group of API keys necessary to perform certain higher-level Kafka operations such as "produce" or "consume". A Role automatically expands into all APIKeys required to perform the specified higher-level operation. 
             *  The following values are supported:  - "produce": Allow producing to the topics specified in the rule  - "consume": Allow consuming from the topics specified in the rule 
             *  This field is incompatible with the APIKey field, i.e APIKey and Role cannot both be specified in the same rule. 
             *  If omitted or empty, and if APIKey is not specified, then all keys are allowed.
             */
            "role"?: "produce" | "consume";
            /**
             * Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected. 
             *  This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _. 
             *  Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255. 
             *  If omitted or empty, all topics are allowed.
             */
            "topic"?: string;
          }>;
          /**
           * Key-value pair rules.
           */
          "l7"?: Array<{
            [key: string]: string;
          }>;
          /**
           * Name of the L7 protocol for which the Key-value pair rules apply.
           */
          "l7proto"?: string;
        };
        /**
         * TerminatingTLS is the TLS context for the connection terminated by the L7 proxy.  For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy.
         */
        "terminatingTLS"?: {
          /**
           * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
           */
          "certificate"?: string;
          /**
           * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
           */
          "privateKey"?: string;
          /**
           * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.
           */
          "secret": {
            /**
             * Name is the name of the secret.
             */
            "name": string;
            /**
             * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").
             */
            "namespace"?: string;
          };
          /**
           * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
           */
          "trustedCA"?: string;
        };
      }>;
    }>;
    /**
     * IngressDeny is a list of IngressDenyRule which are enforced at ingress. Any rule inserted here will by denied regardless of the allowed ingress rules in the 'ingress' field. If omitted or empty, this rule does not apply at ingress.
     */
    "ingressDeny"?: Array<{
      /**
       * FromCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from. Only connections which do \*not\* originate from the cluster or from the local host are subject to CIDR rules. In order to allow in-cluster connectivity, use the FromEndpoints field.  This will match on the source IP address of incoming connections. Adding  a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is  equivalent.  Overlaps are allowed between FromCIDR and FromCIDRSet. 
       *  Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.3.9.1
       */
      "fromCIDR"?: Array<string>;
      /**
       * FromCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from in addition to FromEndpoints, along with a list of subnets contained within their corresponding IP block from which traffic should not be allowed. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet. 
       *  Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.0.0.0/8 except from IPs in subnet 10.96.0.0/12.
       */
      "fromCIDRSet"?: Array<{
        /**
         * CIDR is a CIDR prefix / IP Block.
         */
        "cidr": string;
        /**
         * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
         */
        "except"?: Array<string>;
      }>;
      /**
       * FromEndpoints is a list of endpoints identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule. 
       *  Example: Any endpoint with the label "role=backend" can be consumed by any endpoint carrying the label "role=frontend".
       */
      "fromEndpoints"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * FromEntities is a list of special entities which the endpoint subject to the rule is allowed to receive connections from. Supported entities are `world`, `cluster` and `host`
       */
      "fromEntities"?: Array<"all" | "world" | "cluster" | "host" | "init" | "unmanaged" | "remote-node" | "health" | "none" | "kube-apiserver">;
      /**
       * FromRequires is a list of additional constraints which must be met in order for the selected endpoints to be reachable. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching FromEndpoints. 
       *  Example: Any Endpoint with the label "team=A" requires consuming endpoint to also carry the label "team=A".
       */
      "fromRequires"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is not allowed to receive connections on. 
       *  Example: Any endpoint with the label "app=httpd" can not accept incoming type 8 ICMP connections.
       */
      "icmps"?: Array<{
        /**
         * Fields is a list of ICMP fields.
         */
        "fields"?: Array<{
          /**
           * Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
           */
          "family"?: "IPv4" | "IPv6";
          /**
           * Type is a ICMP-type. It should be 0-255 (8bit).
           */
          "type": number;
        }>;
      }>;
      /**
       * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is not allowed to receive connections on. 
       *  Example: Any endpoint with the label "app=httpd" can not accept incoming connections on port 80/tcp.
       */
      "toPorts"?: Array<{
        /**
         * Ports is a list of L4 port/protocol
         */
        "ports"?: Array<{
          /**
           * Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
           */
          "port": string;
          /**
           * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", ""/"ANY" 
           *  Matching on ICMP is not supported. 
           *  Named port specified for a container may narrow this down, but may not contradict this.
           */
          "protocol"?: "TCP" | "UDP" | "ANY";
        }>;
      }>;
    }>;
    /**
     * Labels is a list of optional strings which can be used to re-identify the rule or to store metadata. It is possible to lookup or delete strings based on labels. Labels are not required to be unique, multiple rules can have overlapping or identical labels.
     */
    "labels"?: Array<{
      "key": string;
      /**
       * Source can be one of the above values (e.g.: LabelSourceContainer).
       */
      "source"?: string;
      "value"?: string;
    }>;
    /**
     * NodeSelector selects all nodes which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive. Can only be used in CiliumClusterwideNetworkPolicies.
     */
    "nodeSelector"?: {
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
        "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
  } & ({
    "endpointSelector": any;
  } | {
    "nodeSelector": any;
  });
  /**
   * Specs is a list of desired Cilium specific rule specification.
   */
  "specs"?: Array<{
    /**
     * Description is a free form string, it can be used by the creator of the rule to store human readable explanation of the purpose of this rule. Rules cannot be identified by comment.
     */
    "description"?: string;
    /**
     * Egress is a list of EgressRule which are enforced at egress. If omitted or empty, this rule does not apply at egress.
     */
    "egress"?: Array<{
      /**
       * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is allowed to connect to. 
       *  Example: Any endpoint with the label "app=httpd" is allowed to initiate type 8 ICMP connections.
       */
      "icmps"?: Array<{
        /**
         * Fields is a list of ICMP fields.
         */
        "fields"?: Array<{
          /**
           * Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
           */
          "family"?: "IPv4" | "IPv6";
          /**
           * Type is a ICMP-type. It should be 0-255 (8bit).
           */
          "type": number;
        }>;
      }>;
      /**
       * ToCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections. Only connections destined for outside of the cluster and not targeting the host will be subject to CIDR rules.  This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. 
       *  Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24
       */
      "toCIDR"?: Array<string>;
      /**
       * ToCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections to in addition to connections which are allowed via ToEndpoints, along with a list of subnets contained within their corresponding IP block to which traffic should not be allowed. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. 
       *  Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24 except from IPs in subnet 10.2.3.0/28.
       */
      "toCIDRSet"?: Array<{
        /**
         * CIDR is a CIDR prefix / IP Block.
         */
        "cidr": string;
        /**
         * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
         */
        "except"?: Array<string>;
      }>;
      /**
       * ToEndpoints is a list of endpoints identified by an EndpointSelector to which the endpoints subject to the rule are allowed to communicate. 
       *  Example: Any endpoint with the label "role=frontend" can communicate with any endpoint carrying the label "role=backend".
       */
      "toEndpoints"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * ToEntities is a list of special entities to which the endpoint subject to the rule is allowed to initiate connections. Supported entities are `world`, `cluster` and `host`
       */
      "toEntities"?: Array<"all" | "world" | "cluster" | "host" | "init" | "unmanaged" | "remote-node" | "health" | "none" | "kube-apiserver">;
      /**
       * ToFQDN allows whitelisting DNS names in place of IPs. The IPs that result from DNS resolution of `ToFQDN.MatchName`s are added to the same EgressRule object as ToCIDRSet entries, and behave accordingly. Any L4 and L7 rules within this EgressRule will also apply to these IPs. The DNS -> IP mapping is re-resolved periodically from within the cilium-agent, and the IPs in the DNS response are effected in the policy for selected pods as-is (i.e. the list of IPs is not modified in any way). Note: An explicit rule to allow for DNS traffic is needed for the pods, as ToFQDN counts as an egress rule and will enforce egress policy when PolicyEnforcment=default. Note: If the resolved IPs are IPs within the kubernetes cluster, the ToFQDN rule will not apply to that IP. Note: ToFQDN cannot occur in the same policy as other To\* rules. 
       *  The current implementation has a number of limitations: - The DNS resolution originates from cilium-agent, and not from the pods. Differences between the responses seen by cilium agent and a particular pod will whitelist the incorrect IP. - DNS TTLs are ignored, and cilium-agent will repoll on a short interval (5 seconds). Each change to the DNS data will trigger a policy regeneration. This may result in delayed updates to the policy for an endpoint when the data changes often or the system is under load.
       */
      "toFQDNs"?: Array<{
        /**
         * MatchName matches literal DNS names. A trailing "." is automatically added when missing.
         */
        "matchName"?: string;
        /**
         * MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "\*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "\*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing. 
         *  Examples: `\*.cilium.io` matches subomains of cilium at that level   www.cilium.io and blog.cilium.io match, cilium.io and google.com do not `\*cilium.io` matches cilium.io and all subdomains 1 level below   www.cilium.io, blog.cilium.io and cilium.io match, google.com does not sub\*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub"   sub.cilium.io and subdomain.cilium.io match, www.cilium.io,   blog.cilium.io, cilium.io and google.com do not
         */
        "matchPattern"?: string;
      }>;
      /**
       * ToGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives: 
       *  Example: toGroups: - aws:     securityGroupsIds:     - 'sg-XXXXXXXXXXXXX'
       */
      "toGroups"?: Array<{
        /**
         * AWSGroup is an structure that can be used to whitelisting information from AWS integration
         */
        "aws"?: {
          "labels"?: {
            [key: string]: string;
          };
          "region"?: string;
          "securityGroupsIds"?: Array<string>;
          "securityGroupsNames"?: Array<string>;
        };
      }>;
      /**
       * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is allowed to connect to. 
       *  Example: Any endpoint with the label "role=frontend" is allowed to initiate connections to destination port 8080/tcp
       */
      "toPorts"?: Array<{
        /**
         * OriginatingTLS is the TLS context for the connections originated by the L7 proxy.  For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint.
         */
        "originatingTLS"?: {
          /**
           * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
           */
          "certificate"?: string;
          /**
           * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
           */
          "privateKey"?: string;
          /**
           * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.
           */
          "secret": {
            /**
             * Name is the name of the secret.
             */
            "name": string;
            /**
             * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").
             */
            "namespace"?: string;
          };
          /**
           * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
           */
          "trustedCA"?: string;
        };
        /**
         * Ports is a list of L4 port/protocol
         */
        "ports"?: Array<{
          /**
           * Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
           */
          "port": string;
          /**
           * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", ""/"ANY" 
           *  Matching on ICMP is not supported. 
           *  Named port specified for a container may narrow this down, but may not contradict this.
           */
          "protocol"?: "TCP" | "UDP" | "ANY";
        }>;
        /**
         * Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced.
         */
        "rules"?: {
          /**
           * DNS-specific rules.
           */
          "dns"?: Array<{
            /**
             * MatchName matches literal DNS names. A trailing "." is automatically added when missing.
             */
            "matchName"?: string;
            /**
             * MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "\*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "\*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing. 
             *  Examples: `\*.cilium.io` matches subomains of cilium at that level   www.cilium.io and blog.cilium.io match, cilium.io and google.com do not `\*cilium.io` matches cilium.io and all subdomains 1 level below   www.cilium.io, blog.cilium.io and cilium.io match, google.com does not sub\*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub"   sub.cilium.io and subdomain.cilium.io match, www.cilium.io,   blog.cilium.io, cilium.io and google.com do not
             */
            "matchPattern"?: string;
          }>;
          /**
           * HTTP specific rules.
           */
          "http"?: Array<{
            /**
             * HeaderMatches is a list of HTTP headers which must be present and match against the given values. Mismatch field can be used to specify what to do when there is no match.
             */
            "headerMatches"?: Array<{
              /**
               * Mismatch identifies what to do in case there is no match. The default is to drop the request. Otherwise the overall rule is still considered as matching, but the mismatches are logged in the access log.
               */
              "mismatch"?: "LOG" | "ADD" | "DELETE" | "REPLACE";
              /**
               * Name identifies the header.
               */
              "name": string;
              /**
               * Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no "Value" specified, the match will fail.
               */
              "secret"?: {
                /**
                 * Name is the name of the secret.
                 */
                "name": string;
                /**
                 * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").
                 */
                "namespace"?: string;
              };
              /**
               * Value matches the exact value of the header. Can be specified either alone or together with "Secret"; will be used as the header value if the secret can not be found in the latter case.
               */
              "value"?: string;
            }>;
            /**
             * Headers is a list of HTTP headers which must be present in the request. If omitted or empty, requests are allowed regardless of headers present.
             */
            "headers"?: Array<string>;
            /**
             * Host is an extended POSIX regex matched against the host header of a request, e.g. "foo.com" 
             *  If omitted or empty, the value of the host header is ignored.
             */
            "host"?: string;
            /**
             * Method is an extended POSIX regex matched against the method of a request, e.g. "GET", "POST", "PUT", "PATCH", "DELETE", ... 
             *  If omitted or empty, all methods are allowed.
             */
            "method"?: string;
            /**
             * Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. 
             *  If omitted or empty, all paths are all allowed.
             */
            "path"?: string;
          }>;
          /**
           * Kafka-specific rules.
           */
          "kafka"?: Array<{
            /**
             * APIKey is a case-insensitive string matched against the key of a request, e.g. "produce", "fetch", "createtopic", "deletetopic", et al Reference: https://kafka.apache.org/protocol#protocol_api_keys 
             *  If omitted or empty, and if Role is not specified, then all keys are allowed.
             */
            "apiKey"?: string;
            /**
             * APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer. 
             *  If omitted or empty, all versions are allowed.
             */
            "apiVersion"?: string;
            /**
             * ClientID is the client identifier as provided in the request. 
             *  From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client. 
             *  If omitted or empty, all client identifiers are allowed.
             */
            "clientID"?: string;
            /**
             * Role is a case-insensitive string and describes a group of API keys necessary to perform certain higher-level Kafka operations such as "produce" or "consume". A Role automatically expands into all APIKeys required to perform the specified higher-level operation. 
             *  The following values are supported:  - "produce": Allow producing to the topics specified in the rule  - "consume": Allow consuming from the topics specified in the rule 
             *  This field is incompatible with the APIKey field, i.e APIKey and Role cannot both be specified in the same rule. 
             *  If omitted or empty, and if APIKey is not specified, then all keys are allowed.
             */
            "role"?: "produce" | "consume";
            /**
             * Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected. 
             *  This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _. 
             *  Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255. 
             *  If omitted or empty, all topics are allowed.
             */
            "topic"?: string;
          }>;
          /**
           * Key-value pair rules.
           */
          "l7"?: Array<{
            [key: string]: string;
          }>;
          /**
           * Name of the L7 protocol for which the Key-value pair rules apply.
           */
          "l7proto"?: string;
        };
        /**
         * TerminatingTLS is the TLS context for the connection terminated by the L7 proxy.  For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy.
         */
        "terminatingTLS"?: {
          /**
           * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
           */
          "certificate"?: string;
          /**
           * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
           */
          "privateKey"?: string;
          /**
           * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.
           */
          "secret": {
            /**
             * Name is the name of the secret.
             */
            "name": string;
            /**
             * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").
             */
            "namespace"?: string;
          };
          /**
           * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
           */
          "trustedCA"?: string;
        };
      }>;
      /**
       * ToRequires is a list of additional constraints which must be met in order for the selected endpoints to be able to connect to other endpoints. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching ToEndpoints. 
       *  Example: Any Endpoint with the label "team=A" requires any endpoint to which it communicates to also carry the label "team=A".
       */
      "toRequires"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * ToServices is a list of services to which the endpoint subject to the rule is allowed to initiate connections. Currently Cilium only supports toServices for K8s services without selectors. 
       *  Example: Any endpoint with the label "app=backend-app" is allowed to initiate connections to all cidrs backing the "external-service" service
       */
      "toServices"?: Array<{
        /**
         * K8sService selects service by name and namespace pair
         */
        "k8sService"?: {
          "namespace"?: string;
          "serviceName"?: string;
        };
        /**
         * K8sServiceSelector selects services by k8s labels and namespace
         */
        "k8sServiceSelector"?: {
          "namespace"?: string;
          /**
           * ServiceSelector is a label selector for k8s services
           */
          "selector": {
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
              "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
        };
      }>;
    }>;
    /**
     * EgressDeny is a list of EgressDenyRule which are enforced at egress. Any rule inserted here will by denied regardless of the allowed egress rules in the 'egress' field. If omitted or empty, this rule does not apply at egress.
     */
    "egressDeny"?: Array<{
      /**
       * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is not allowed to connect to. 
       *  Example: Any endpoint with the label "app=httpd" is not allowed to initiate type 8 ICMP connections.
       */
      "icmps"?: Array<{
        /**
         * Fields is a list of ICMP fields.
         */
        "fields"?: Array<{
          /**
           * Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
           */
          "family"?: "IPv4" | "IPv6";
          /**
           * Type is a ICMP-type. It should be 0-255 (8bit).
           */
          "type": number;
        }>;
      }>;
      /**
       * ToCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections. Only connections destined for outside of the cluster and not targeting the host will be subject to CIDR rules.  This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. 
       *  Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24
       */
      "toCIDR"?: Array<string>;
      /**
       * ToCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections to in addition to connections which are allowed via ToEndpoints, along with a list of subnets contained within their corresponding IP block to which traffic should not be allowed. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. 
       *  Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24 except from IPs in subnet 10.2.3.0/28.
       */
      "toCIDRSet"?: Array<{
        /**
         * CIDR is a CIDR prefix / IP Block.
         */
        "cidr": string;
        /**
         * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
         */
        "except"?: Array<string>;
      }>;
      /**
       * ToEndpoints is a list of endpoints identified by an EndpointSelector to which the endpoints subject to the rule are allowed to communicate. 
       *  Example: Any endpoint with the label "role=frontend" can communicate with any endpoint carrying the label "role=backend".
       */
      "toEndpoints"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * ToEntities is a list of special entities to which the endpoint subject to the rule is allowed to initiate connections. Supported entities are `world`, `cluster` and `host`
       */
      "toEntities"?: Array<"all" | "world" | "cluster" | "host" | "init" | "unmanaged" | "remote-node" | "health" | "none" | "kube-apiserver">;
      /**
       * ToGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives: 
       *  Example: toGroups: - aws:     securityGroupsIds:     - 'sg-XXXXXXXXXXXXX'
       */
      "toGroups"?: Array<{
        /**
         * AWSGroup is an structure that can be used to whitelisting information from AWS integration
         */
        "aws"?: {
          "labels"?: {
            [key: string]: string;
          };
          "region"?: string;
          "securityGroupsIds"?: Array<string>;
          "securityGroupsNames"?: Array<string>;
        };
      }>;
      /**
       * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is not allowed to connect to. 
       *  Example: Any endpoint with the label "role=frontend" is not allowed to initiate connections to destination port 8080/tcp
       */
      "toPorts"?: Array<{
        /**
         * Ports is a list of L4 port/protocol
         */
        "ports"?: Array<{
          /**
           * Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
           */
          "port": string;
          /**
           * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", ""/"ANY" 
           *  Matching on ICMP is not supported. 
           *  Named port specified for a container may narrow this down, but may not contradict this.
           */
          "protocol"?: "TCP" | "UDP" | "ANY";
        }>;
      }>;
      /**
       * ToRequires is a list of additional constraints which must be met in order for the selected endpoints to be able to connect to other endpoints. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching ToEndpoints. 
       *  Example: Any Endpoint with the label "team=A" requires any endpoint to which it communicates to also carry the label "team=A".
       */
      "toRequires"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * ToServices is a list of services to which the endpoint subject to the rule is allowed to initiate connections. Currently Cilium only supports toServices for K8s services without selectors. 
       *  Example: Any endpoint with the label "app=backend-app" is allowed to initiate connections to all cidrs backing the "external-service" service
       */
      "toServices"?: Array<{
        /**
         * K8sService selects service by name and namespace pair
         */
        "k8sService"?: {
          "namespace"?: string;
          "serviceName"?: string;
        };
        /**
         * K8sServiceSelector selects services by k8s labels and namespace
         */
        "k8sServiceSelector"?: {
          "namespace"?: string;
          /**
           * ServiceSelector is a label selector for k8s services
           */
          "selector": {
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
              "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
        };
      }>;
    }>;
    /**
     * EndpointSelector selects all endpoints which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive.
     */
    "endpointSelector"?: {
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
        "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
     * Ingress is a list of IngressRule which are enforced at ingress. If omitted or empty, this rule does not apply at ingress.
     */
    "ingress"?: Array<{
      /**
       * FromCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from. Only connections which do \*not\* originate from the cluster or from the local host are subject to CIDR rules. In order to allow in-cluster connectivity, use the FromEndpoints field.  This will match on the source IP address of incoming connections. Adding  a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is  equivalent.  Overlaps are allowed between FromCIDR and FromCIDRSet. 
       *  Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.3.9.1
       */
      "fromCIDR"?: Array<string>;
      /**
       * FromCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from in addition to FromEndpoints, along with a list of subnets contained within their corresponding IP block from which traffic should not be allowed. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet. 
       *  Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.0.0.0/8 except from IPs in subnet 10.96.0.0/12.
       */
      "fromCIDRSet"?: Array<{
        /**
         * CIDR is a CIDR prefix / IP Block.
         */
        "cidr": string;
        /**
         * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
         */
        "except"?: Array<string>;
      }>;
      /**
       * FromEndpoints is a list of endpoints identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule. 
       *  Example: Any endpoint with the label "role=backend" can be consumed by any endpoint carrying the label "role=frontend".
       */
      "fromEndpoints"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * FromEntities is a list of special entities which the endpoint subject to the rule is allowed to receive connections from. Supported entities are `world`, `cluster` and `host`
       */
      "fromEntities"?: Array<"all" | "world" | "cluster" | "host" | "init" | "unmanaged" | "remote-node" | "health" | "none" | "kube-apiserver">;
      /**
       * FromRequires is a list of additional constraints which must be met in order for the selected endpoints to be reachable. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching FromEndpoints. 
       *  Example: Any Endpoint with the label "team=A" requires consuming endpoint to also carry the label "team=A".
       */
      "fromRequires"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is allowed to receive connections on. 
       *  Example: Any endpoint with the label "app=httpd" can only accept incoming type 8 ICMP connections.
       */
      "icmps"?: Array<{
        /**
         * Fields is a list of ICMP fields.
         */
        "fields"?: Array<{
          /**
           * Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
           */
          "family"?: "IPv4" | "IPv6";
          /**
           * Type is a ICMP-type. It should be 0-255 (8bit).
           */
          "type": number;
        }>;
      }>;
      /**
       * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is allowed to receive connections on. 
       *  Example: Any endpoint with the label "app=httpd" can only accept incoming connections on port 80/tcp.
       */
      "toPorts"?: Array<{
        /**
         * OriginatingTLS is the TLS context for the connections originated by the L7 proxy.  For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint.
         */
        "originatingTLS"?: {
          /**
           * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
           */
          "certificate"?: string;
          /**
           * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
           */
          "privateKey"?: string;
          /**
           * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.
           */
          "secret": {
            /**
             * Name is the name of the secret.
             */
            "name": string;
            /**
             * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").
             */
            "namespace"?: string;
          };
          /**
           * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
           */
          "trustedCA"?: string;
        };
        /**
         * Ports is a list of L4 port/protocol
         */
        "ports"?: Array<{
          /**
           * Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
           */
          "port": string;
          /**
           * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", ""/"ANY" 
           *  Matching on ICMP is not supported. 
           *  Named port specified for a container may narrow this down, but may not contradict this.
           */
          "protocol"?: "TCP" | "UDP" | "ANY";
        }>;
        /**
         * Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced.
         */
        "rules"?: {
          /**
           * DNS-specific rules.
           */
          "dns"?: Array<{
            /**
             * MatchName matches literal DNS names. A trailing "." is automatically added when missing.
             */
            "matchName"?: string;
            /**
             * MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "\*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "\*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing. 
             *  Examples: `\*.cilium.io` matches subomains of cilium at that level   www.cilium.io and blog.cilium.io match, cilium.io and google.com do not `\*cilium.io` matches cilium.io and all subdomains 1 level below   www.cilium.io, blog.cilium.io and cilium.io match, google.com does not sub\*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub"   sub.cilium.io and subdomain.cilium.io match, www.cilium.io,   blog.cilium.io, cilium.io and google.com do not
             */
            "matchPattern"?: string;
          }>;
          /**
           * HTTP specific rules.
           */
          "http"?: Array<{
            /**
             * HeaderMatches is a list of HTTP headers which must be present and match against the given values. Mismatch field can be used to specify what to do when there is no match.
             */
            "headerMatches"?: Array<{
              /**
               * Mismatch identifies what to do in case there is no match. The default is to drop the request. Otherwise the overall rule is still considered as matching, but the mismatches are logged in the access log.
               */
              "mismatch"?: "LOG" | "ADD" | "DELETE" | "REPLACE";
              /**
               * Name identifies the header.
               */
              "name": string;
              /**
               * Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no "Value" specified, the match will fail.
               */
              "secret"?: {
                /**
                 * Name is the name of the secret.
                 */
                "name": string;
                /**
                 * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").
                 */
                "namespace"?: string;
              };
              /**
               * Value matches the exact value of the header. Can be specified either alone or together with "Secret"; will be used as the header value if the secret can not be found in the latter case.
               */
              "value"?: string;
            }>;
            /**
             * Headers is a list of HTTP headers which must be present in the request. If omitted or empty, requests are allowed regardless of headers present.
             */
            "headers"?: Array<string>;
            /**
             * Host is an extended POSIX regex matched against the host header of a request, e.g. "foo.com" 
             *  If omitted or empty, the value of the host header is ignored.
             */
            "host"?: string;
            /**
             * Method is an extended POSIX regex matched against the method of a request, e.g. "GET", "POST", "PUT", "PATCH", "DELETE", ... 
             *  If omitted or empty, all methods are allowed.
             */
            "method"?: string;
            /**
             * Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. 
             *  If omitted or empty, all paths are all allowed.
             */
            "path"?: string;
          }>;
          /**
           * Kafka-specific rules.
           */
          "kafka"?: Array<{
            /**
             * APIKey is a case-insensitive string matched against the key of a request, e.g. "produce", "fetch", "createtopic", "deletetopic", et al Reference: https://kafka.apache.org/protocol#protocol_api_keys 
             *  If omitted or empty, and if Role is not specified, then all keys are allowed.
             */
            "apiKey"?: string;
            /**
             * APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer. 
             *  If omitted or empty, all versions are allowed.
             */
            "apiVersion"?: string;
            /**
             * ClientID is the client identifier as provided in the request. 
             *  From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client. 
             *  If omitted or empty, all client identifiers are allowed.
             */
            "clientID"?: string;
            /**
             * Role is a case-insensitive string and describes a group of API keys necessary to perform certain higher-level Kafka operations such as "produce" or "consume". A Role automatically expands into all APIKeys required to perform the specified higher-level operation. 
             *  The following values are supported:  - "produce": Allow producing to the topics specified in the rule  - "consume": Allow consuming from the topics specified in the rule 
             *  This field is incompatible with the APIKey field, i.e APIKey and Role cannot both be specified in the same rule. 
             *  If omitted or empty, and if APIKey is not specified, then all keys are allowed.
             */
            "role"?: "produce" | "consume";
            /**
             * Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected. 
             *  This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _. 
             *  Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255. 
             *  If omitted or empty, all topics are allowed.
             */
            "topic"?: string;
          }>;
          /**
           * Key-value pair rules.
           */
          "l7"?: Array<{
            [key: string]: string;
          }>;
          /**
           * Name of the L7 protocol for which the Key-value pair rules apply.
           */
          "l7proto"?: string;
        };
        /**
         * TerminatingTLS is the TLS context for the connection terminated by the L7 proxy.  For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy.
         */
        "terminatingTLS"?: {
          /**
           * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
           */
          "certificate"?: string;
          /**
           * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
           */
          "privateKey"?: string;
          /**
           * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.
           */
          "secret": {
            /**
             * Name is the name of the secret.
             */
            "name": string;
            /**
             * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").
             */
            "namespace"?: string;
          };
          /**
           * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
           */
          "trustedCA"?: string;
        };
      }>;
    }>;
    /**
     * IngressDeny is a list of IngressDenyRule which are enforced at ingress. Any rule inserted here will by denied regardless of the allowed ingress rules in the 'ingress' field. If omitted or empty, this rule does not apply at ingress.
     */
    "ingressDeny"?: Array<{
      /**
       * FromCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from. Only connections which do \*not\* originate from the cluster or from the local host are subject to CIDR rules. In order to allow in-cluster connectivity, use the FromEndpoints field.  This will match on the source IP address of incoming connections. Adding  a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is  equivalent.  Overlaps are allowed between FromCIDR and FromCIDRSet. 
       *  Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.3.9.1
       */
      "fromCIDR"?: Array<string>;
      /**
       * FromCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from in addition to FromEndpoints, along with a list of subnets contained within their corresponding IP block from which traffic should not be allowed. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet. 
       *  Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.0.0.0/8 except from IPs in subnet 10.96.0.0/12.
       */
      "fromCIDRSet"?: Array<{
        /**
         * CIDR is a CIDR prefix / IP Block.
         */
        "cidr": string;
        /**
         * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
         */
        "except"?: Array<string>;
      }>;
      /**
       * FromEndpoints is a list of endpoints identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule. 
       *  Example: Any endpoint with the label "role=backend" can be consumed by any endpoint carrying the label "role=frontend".
       */
      "fromEndpoints"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * FromEntities is a list of special entities which the endpoint subject to the rule is allowed to receive connections from. Supported entities are `world`, `cluster` and `host`
       */
      "fromEntities"?: Array<"all" | "world" | "cluster" | "host" | "init" | "unmanaged" | "remote-node" | "health" | "none" | "kube-apiserver">;
      /**
       * FromRequires is a list of additional constraints which must be met in order for the selected endpoints to be reachable. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching FromEndpoints. 
       *  Example: Any Endpoint with the label "team=A" requires consuming endpoint to also carry the label "team=A".
       */
      "fromRequires"?: Array<{
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
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
      }>;
      /**
       * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is not allowed to receive connections on. 
       *  Example: Any endpoint with the label "app=httpd" can not accept incoming type 8 ICMP connections.
       */
      "icmps"?: Array<{
        /**
         * Fields is a list of ICMP fields.
         */
        "fields"?: Array<{
          /**
           * Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
           */
          "family"?: "IPv4" | "IPv6";
          /**
           * Type is a ICMP-type. It should be 0-255 (8bit).
           */
          "type": number;
        }>;
      }>;
      /**
       * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is not allowed to receive connections on. 
       *  Example: Any endpoint with the label "app=httpd" can not accept incoming connections on port 80/tcp.
       */
      "toPorts"?: Array<{
        /**
         * Ports is a list of L4 port/protocol
         */
        "ports"?: Array<{
          /**
           * Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
           */
          "port": string;
          /**
           * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", ""/"ANY" 
           *  Matching on ICMP is not supported. 
           *  Named port specified for a container may narrow this down, but may not contradict this.
           */
          "protocol"?: "TCP" | "UDP" | "ANY";
        }>;
      }>;
    }>;
    /**
     * Labels is a list of optional strings which can be used to re-identify the rule or to store metadata. It is possible to lookup or delete strings based on labels. Labels are not required to be unique, multiple rules can have overlapping or identical labels.
     */
    "labels"?: Array<{
      "key": string;
      /**
       * Source can be one of the above values (e.g.: LabelSourceContainer).
       */
      "source"?: string;
      "value"?: string;
    }>;
    /**
     * NodeSelector selects all nodes which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive. Can only be used in CiliumClusterwideNetworkPolicies.
     */
    "nodeSelector"?: {
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
        "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
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
  } & ({
    "endpointSelector": any;
  } | {
    "nodeSelector": any;
  })>;
  /**
   * Status is the status of the Cilium policy rule
   */
  "status"?: {
    /**
     * DerivativePolicies is the status of all policies derived from the Cilium policy
     */
    "derivativePolicies"?: {
      [key: string]: {
        /**
         * Annotations corresponds to the Annotations in the ObjectMeta of the CNP that have been realized on the node for CNP. That is, if a CNP has been imported and has been assigned annotation X=Y by the user, Annotations in CiliumNetworkPolicyNodeStatus will be X=Y once the CNP that was imported corresponding to Annotation X=Y has been realized on the node.
         */
        "annotations"?: {
          [key: string]: string;
        };
        /**
         * Enforcing is set to true once all endpoints present at the time the policy has been imported are enforcing this policy.
         */
        "enforcing"?: boolean;
        /**
         * Error describes any error that occurred when parsing or importing the policy, or realizing the policy for the endpoints to which it applies on the node.
         */
        "error"?: string;
        /**
         * LastUpdated contains the last time this status was updated
         */
        "lastUpdated"?: string;
        /**
         * Revision is the policy revision of the repository which first implemented this policy.
         */
        "localPolicyRevision"?: number;
        /**
         * OK is true when the policy has been parsed and imported successfully into the in-memory policy repository on the node.
         */
        "ok"?: boolean;
      };
    };
    /**
     * Nodes is the Cilium policy status for each node
     */
    "nodes"?: {
      [key: string]: {
        /**
         * Annotations corresponds to the Annotations in the ObjectMeta of the CNP that have been realized on the node for CNP. That is, if a CNP has been imported and has been assigned annotation X=Y by the user, Annotations in CiliumNetworkPolicyNodeStatus will be X=Y once the CNP that was imported corresponding to Annotation X=Y has been realized on the node.
         */
        "annotations"?: {
          [key: string]: string;
        };
        /**
         * Enforcing is set to true once all endpoints present at the time the policy has been imported are enforcing this policy.
         */
        "enforcing"?: boolean;
        /**
         * Error describes any error that occurred when parsing or importing the policy, or realizing the policy for the endpoints to which it applies on the node.
         */
        "error"?: string;
        /**
         * LastUpdated contains the last time this status was updated
         */
        "lastUpdated"?: string;
        /**
         * Revision is the policy revision of the repository which first implemented this policy.
         */
        "localPolicyRevision"?: number;
        /**
         * OK is true when the policy has been parsed and imported successfully into the in-memory policy repository on the node.
         */
        "ok"?: boolean;
      };
    };
  };
}

/**
 * CiliumNetworkPolicy is a Kubernetes third-party resource with an extended version of NetworkPolicy.
 */
export class CiliumNetworkPolicy extends Model<ICiliumNetworkPolicy> implements ICiliumNetworkPolicy {
  "apiVersion": ICiliumNetworkPolicy["apiVersion"];
  "kind": ICiliumNetworkPolicy["kind"];
  "metadata": ICiliumNetworkPolicy["metadata"];
  "spec"?: ICiliumNetworkPolicy["spec"];
  "specs"?: ICiliumNetworkPolicy["specs"];
  "status"?: ICiliumNetworkPolicy["status"];

static apiVersion: ICiliumNetworkPolicy["apiVersion"] = "cilium.io/v2";
static kind: ICiliumNetworkPolicy["kind"] = "CiliumNetworkPolicy";
static is = createTypeMetaGuard<ICiliumNetworkPolicy>(CiliumNetworkPolicy);

constructor(data?: ModelData<ICiliumNetworkPolicy>) {
  super({
    apiVersion: CiliumNetworkPolicy.apiVersion,
    kind: CiliumNetworkPolicy.kind,
    ...data
  } as ICiliumNetworkPolicy);
}
}


setSchema(CiliumNetworkPolicy, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
