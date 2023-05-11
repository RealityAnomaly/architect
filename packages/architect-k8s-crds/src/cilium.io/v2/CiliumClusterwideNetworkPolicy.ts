import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "cilium.io.v2.CiliumClusterwideNetworkPolicy";
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
        "CiliumClusterwideNetworkPolicy"
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
 * CiliumClusterwideNetworkPolicy is a Kubernetes third-party resource with an modified version of CiliumNetworkPolicy which is cluster scoped rather than namespace scoped.
 */
export interface ICiliumClusterwideNetworkPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "cilium.io/v2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "CiliumClusterwideNetworkPolicy";
  "metadata": IObjectMeta;
  /**
   * Spec is the desired Cilium specific rule specification.
   */
  "spec"?: {
    "endpointSelector": any;
  } | {
    "nodeSelector": any;
  };
  /**
   * Specs is a list of desired Cilium specific rule specification.
   */
  "specs"?: Array<{
    "endpointSelector": any;
  } | {
    "nodeSelector": any;
  }>;
  /**
   * Status is the status of the Cilium policy rule. 
   *  The reason this field exists in this structure is due a bug in the k8s code-generator that doesn't create a `UpdateStatus` method because the field does not exist in the structure.
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
 * CiliumClusterwideNetworkPolicy is a Kubernetes third-party resource with an modified version of CiliumNetworkPolicy which is cluster scoped rather than namespace scoped.
 */
export class CiliumClusterwideNetworkPolicy extends Model<ICiliumClusterwideNetworkPolicy> implements ICiliumClusterwideNetworkPolicy {
  "apiVersion": ICiliumClusterwideNetworkPolicy["apiVersion"];
  "kind": ICiliumClusterwideNetworkPolicy["kind"];
  "metadata": ICiliumClusterwideNetworkPolicy["metadata"];
  "spec"?: ICiliumClusterwideNetworkPolicy["spec"];
  "specs"?: ICiliumClusterwideNetworkPolicy["specs"];
  "status"?: ICiliumClusterwideNetworkPolicy["status"];

static apiVersion: ICiliumClusterwideNetworkPolicy["apiVersion"] = "cilium.io/v2";
static kind: ICiliumClusterwideNetworkPolicy["kind"] = "CiliumClusterwideNetworkPolicy";
static is = createTypeMetaGuard<ICiliumClusterwideNetworkPolicy>(CiliumClusterwideNetworkPolicy);

constructor(data?: ModelData<ICiliumClusterwideNetworkPolicy>) {
  super({
    apiVersion: CiliumClusterwideNetworkPolicy.apiVersion,
    kind: CiliumClusterwideNetworkPolicy.kind,
    ...data
  } as ICiliumClusterwideNetworkPolicy);
}
}


setSchema(CiliumClusterwideNetworkPolicy, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
