import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "networking.istio.io.v1beta1.DestinationRule";
const schema = {
  "type": "object",
  "properties": {
    "spec": {
      "properties": {
        "exportTo": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "nullable": true
        },
        "host": {
          "type": "string",
          "nullable": true
        },
        "subsets": {
          "items": {
            "properties": {
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
              "trafficPolicy": {
                "properties": {
                  "connectionPool": {
                    "properties": {
                      "http": {
                        "properties": {
                          "h2UpgradePolicy": {
                            "enum": [
                              "DEFAULT",
                              "DO_NOT_UPGRADE",
                              "UPGRADE"
                            ],
                            "type": "string",
                            "nullable": true
                          },
                          "http1MaxPendingRequests": {
                            "format": "int32",
                            "type": "integer",
                            "nullable": true
                          },
                          "http2MaxRequests": {
                            "format": "int32",
                            "type": "integer",
                            "nullable": true
                          },
                          "idleTimeout": {
                            "type": "string",
                            "nullable": true
                          },
                          "maxRequestsPerConnection": {
                            "format": "int32",
                            "type": "integer",
                            "nullable": true
                          },
                          "maxRetries": {
                            "format": "int32",
                            "type": "integer",
                            "nullable": true
                          },
                          "useClientProtocol": {
                            "type": "boolean",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "tcp": {
                        "properties": {
                          "connectTimeout": {
                            "type": "string",
                            "nullable": true
                          },
                          "maxConnections": {
                            "format": "int32",
                            "type": "integer",
                            "nullable": true
                          },
                          "tcpKeepalive": {
                            "properties": {
                              "interval": {
                                "type": "string",
                                "nullable": true
                              },
                              "probes": {
                                "type": "integer",
                                "nullable": true
                              },
                              "time": {
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
                  "loadBalancer": {
                    "oneOf": [
                      {
                        "not": {
                          "anyOf": [
                            {
                              "required": [
                                "simple"
                              ]
                            },
                            {
                              "properties": {
                                "consistentHash": {
                                  "oneOf": [
                                    {
                                      "not": {
                                        "anyOf": [
                                          {
                                            "required": [
                                              "httpHeaderName"
                                            ]
                                          },
                                          {
                                            "required": [
                                              "httpCookie"
                                            ]
                                          },
                                          {
                                            "required": [
                                              "useSourceIp"
                                            ]
                                          },
                                          {
                                            "required": [
                                              "httpQueryParameterName"
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "required": [
                                        "httpHeaderName"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "httpCookie"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "useSourceIp"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "httpQueryParameterName"
                                      ]
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "consistentHash"
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "required": [
                          "simple"
                        ]
                      },
                      {
                        "properties": {
                          "consistentHash": {
                            "oneOf": [
                              {
                                "not": {
                                  "anyOf": [
                                    {
                                      "required": [
                                        "httpHeaderName"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "httpCookie"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "useSourceIp"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "httpQueryParameterName"
                                      ]
                                    }
                                  ]
                                }
                              },
                              {
                                "required": [
                                  "httpHeaderName"
                                ]
                              },
                              {
                                "required": [
                                  "httpCookie"
                                ]
                              },
                              {
                                "required": [
                                  "useSourceIp"
                                ]
                              },
                              {
                                "required": [
                                  "httpQueryParameterName"
                                ]
                              }
                            ]
                          }
                        },
                        "required": [
                          "consistentHash"
                        ]
                      }
                    ],
                    "properties": {
                      "consistentHash": {
                        "properties": {
                          "httpCookie": {
                            "properties": {
                              "name": {
                                "type": "string",
                                "nullable": true
                              },
                              "path": {
                                "type": "string",
                                "nullable": true
                              },
                              "ttl": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "httpHeaderName": {
                            "type": "string",
                            "nullable": true
                          },
                          "httpQueryParameterName": {
                            "type": "string",
                            "nullable": true
                          },
                          "minimumRingSize": {
                            "type": "integer",
                            "nullable": true
                          },
                          "useSourceIp": {
                            "type": "boolean",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "localityLbSetting": {
                        "properties": {
                          "distribute": {
                            "items": {
                              "properties": {
                                "from": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "to": {
                                  "additionalProperties": {
                                    "type": "integer"
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
                          "enabled": {
                            "nullable": true,
                            "type": "boolean"
                          },
                          "failover": {
                            "items": {
                              "properties": {
                                "from": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "to": {
                                  "type": "string",
                                  "nullable": true
                                }
                              },
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "failoverPriority": {
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
                      "simple": {
                        "enum": [
                          "UNSPECIFIED",
                          "LEAST_CONN",
                          "RANDOM",
                          "PASSTHROUGH",
                          "ROUND_ROBIN",
                          "LEAST_REQUEST"
                        ],
                        "type": "string",
                        "nullable": true
                      },
                      "warmupDurationSecs": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "outlierDetection": {
                    "properties": {
                      "baseEjectionTime": {
                        "type": "string",
                        "nullable": true
                      },
                      "consecutive5xxErrors": {
                        "nullable": true,
                        "type": "integer"
                      },
                      "consecutiveErrors": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "consecutiveGatewayErrors": {
                        "nullable": true,
                        "type": "integer"
                      },
                      "consecutiveLocalOriginFailures": {
                        "nullable": true,
                        "type": "integer"
                      },
                      "interval": {
                        "type": "string",
                        "nullable": true
                      },
                      "maxEjectionPercent": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "minHealthPercent": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "splitExternalLocalOriginErrors": {
                        "type": "boolean",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "portLevelSettings": {
                    "items": {
                      "properties": {
                        "connectionPool": {
                          "properties": {
                            "http": {
                              "properties": {
                                "h2UpgradePolicy": {
                                  "enum": [
                                    "DEFAULT",
                                    "DO_NOT_UPGRADE",
                                    "UPGRADE"
                                  ],
                                  "type": "string",
                                  "nullable": true
                                },
                                "http1MaxPendingRequests": {
                                  "format": "int32",
                                  "type": "integer",
                                  "nullable": true
                                },
                                "http2MaxRequests": {
                                  "format": "int32",
                                  "type": "integer",
                                  "nullable": true
                                },
                                "idleTimeout": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "maxRequestsPerConnection": {
                                  "format": "int32",
                                  "type": "integer",
                                  "nullable": true
                                },
                                "maxRetries": {
                                  "format": "int32",
                                  "type": "integer",
                                  "nullable": true
                                },
                                "useClientProtocol": {
                                  "type": "boolean",
                                  "nullable": true
                                }
                              },
                              "type": "object",
                              "nullable": true
                            },
                            "tcp": {
                              "properties": {
                                "connectTimeout": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "maxConnections": {
                                  "format": "int32",
                                  "type": "integer",
                                  "nullable": true
                                },
                                "tcpKeepalive": {
                                  "properties": {
                                    "interval": {
                                      "type": "string",
                                      "nullable": true
                                    },
                                    "probes": {
                                      "type": "integer",
                                      "nullable": true
                                    },
                                    "time": {
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
                        "loadBalancer": {
                          "oneOf": [
                            {
                              "not": {
                                "anyOf": [
                                  {
                                    "required": [
                                      "simple"
                                    ]
                                  },
                                  {
                                    "properties": {
                                      "consistentHash": {
                                        "oneOf": [
                                          {
                                            "not": {
                                              "anyOf": [
                                                {
                                                  "required": [
                                                    "httpHeaderName"
                                                  ]
                                                },
                                                {
                                                  "required": [
                                                    "httpCookie"
                                                  ]
                                                },
                                                {
                                                  "required": [
                                                    "useSourceIp"
                                                  ]
                                                },
                                                {
                                                  "required": [
                                                    "httpQueryParameterName"
                                                  ]
                                                }
                                              ]
                                            }
                                          },
                                          {
                                            "required": [
                                              "httpHeaderName"
                                            ]
                                          },
                                          {
                                            "required": [
                                              "httpCookie"
                                            ]
                                          },
                                          {
                                            "required": [
                                              "useSourceIp"
                                            ]
                                          },
                                          {
                                            "required": [
                                              "httpQueryParameterName"
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    "required": [
                                      "consistentHash"
                                    ]
                                  }
                                ]
                              }
                            },
                            {
                              "required": [
                                "simple"
                              ]
                            },
                            {
                              "properties": {
                                "consistentHash": {
                                  "oneOf": [
                                    {
                                      "not": {
                                        "anyOf": [
                                          {
                                            "required": [
                                              "httpHeaderName"
                                            ]
                                          },
                                          {
                                            "required": [
                                              "httpCookie"
                                            ]
                                          },
                                          {
                                            "required": [
                                              "useSourceIp"
                                            ]
                                          },
                                          {
                                            "required": [
                                              "httpQueryParameterName"
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "required": [
                                        "httpHeaderName"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "httpCookie"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "useSourceIp"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "httpQueryParameterName"
                                      ]
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "consistentHash"
                              ]
                            }
                          ],
                          "properties": {
                            "consistentHash": {
                              "properties": {
                                "httpCookie": {
                                  "properties": {
                                    "name": {
                                      "type": "string",
                                      "nullable": true
                                    },
                                    "path": {
                                      "type": "string",
                                      "nullable": true
                                    },
                                    "ttl": {
                                      "type": "string",
                                      "nullable": true
                                    }
                                  },
                                  "type": "object",
                                  "nullable": true
                                },
                                "httpHeaderName": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "httpQueryParameterName": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "minimumRingSize": {
                                  "type": "integer",
                                  "nullable": true
                                },
                                "useSourceIp": {
                                  "type": "boolean",
                                  "nullable": true
                                }
                              },
                              "type": "object",
                              "nullable": true
                            },
                            "localityLbSetting": {
                              "properties": {
                                "distribute": {
                                  "items": {
                                    "properties": {
                                      "from": {
                                        "type": "string",
                                        "nullable": true
                                      },
                                      "to": {
                                        "additionalProperties": {
                                          "type": "integer"
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
                                "enabled": {
                                  "nullable": true,
                                  "type": "boolean"
                                },
                                "failover": {
                                  "items": {
                                    "properties": {
                                      "from": {
                                        "type": "string",
                                        "nullable": true
                                      },
                                      "to": {
                                        "type": "string",
                                        "nullable": true
                                      }
                                    },
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "failoverPriority": {
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
                            "simple": {
                              "enum": [
                                "UNSPECIFIED",
                                "LEAST_CONN",
                                "RANDOM",
                                "PASSTHROUGH",
                                "ROUND_ROBIN",
                                "LEAST_REQUEST"
                              ],
                              "type": "string",
                              "nullable": true
                            },
                            "warmupDurationSecs": {
                              "type": "string",
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        },
                        "outlierDetection": {
                          "properties": {
                            "baseEjectionTime": {
                              "type": "string",
                              "nullable": true
                            },
                            "consecutive5xxErrors": {
                              "nullable": true,
                              "type": "integer"
                            },
                            "consecutiveErrors": {
                              "format": "int32",
                              "type": "integer",
                              "nullable": true
                            },
                            "consecutiveGatewayErrors": {
                              "nullable": true,
                              "type": "integer"
                            },
                            "consecutiveLocalOriginFailures": {
                              "nullable": true,
                              "type": "integer"
                            },
                            "interval": {
                              "type": "string",
                              "nullable": true
                            },
                            "maxEjectionPercent": {
                              "format": "int32",
                              "type": "integer",
                              "nullable": true
                            },
                            "minHealthPercent": {
                              "format": "int32",
                              "type": "integer",
                              "nullable": true
                            },
                            "splitExternalLocalOriginErrors": {
                              "type": "boolean",
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        },
                        "port": {
                          "properties": {
                            "number": {
                              "type": "integer",
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        },
                        "tls": {
                          "properties": {
                            "caCertificates": {
                              "type": "string",
                              "nullable": true
                            },
                            "clientCertificate": {
                              "type": "string",
                              "nullable": true
                            },
                            "credentialName": {
                              "type": "string",
                              "nullable": true
                            },
                            "insecureSkipVerify": {
                              "nullable": true,
                              "type": "boolean"
                            },
                            "mode": {
                              "enum": [
                                "DISABLE",
                                "SIMPLE",
                                "MUTUAL",
                                "ISTIO_MUTUAL"
                              ],
                              "type": "string",
                              "nullable": true
                            },
                            "privateKey": {
                              "type": "string",
                              "nullable": true
                            },
                            "sni": {
                              "type": "string",
                              "nullable": true
                            },
                            "subjectAltNames": {
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
                  "tls": {
                    "properties": {
                      "caCertificates": {
                        "type": "string",
                        "nullable": true
                      },
                      "clientCertificate": {
                        "type": "string",
                        "nullable": true
                      },
                      "credentialName": {
                        "type": "string",
                        "nullable": true
                      },
                      "insecureSkipVerify": {
                        "nullable": true,
                        "type": "boolean"
                      },
                      "mode": {
                        "enum": [
                          "DISABLE",
                          "SIMPLE",
                          "MUTUAL",
                          "ISTIO_MUTUAL"
                        ],
                        "type": "string",
                        "nullable": true
                      },
                      "privateKey": {
                        "type": "string",
                        "nullable": true
                      },
                      "sni": {
                        "type": "string",
                        "nullable": true
                      },
                      "subjectAltNames": {
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
                  "tunnel": {
                    "properties": {
                      "protocol": {
                        "type": "string",
                        "nullable": true
                      },
                      "targetHost": {
                        "type": "string",
                        "nullable": true
                      },
                      "targetPort": {
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
              }
            },
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "trafficPolicy": {
          "properties": {
            "connectionPool": {
              "properties": {
                "http": {
                  "properties": {
                    "h2UpgradePolicy": {
                      "enum": [
                        "DEFAULT",
                        "DO_NOT_UPGRADE",
                        "UPGRADE"
                      ],
                      "type": "string",
                      "nullable": true
                    },
                    "http1MaxPendingRequests": {
                      "format": "int32",
                      "type": "integer",
                      "nullable": true
                    },
                    "http2MaxRequests": {
                      "format": "int32",
                      "type": "integer",
                      "nullable": true
                    },
                    "idleTimeout": {
                      "type": "string",
                      "nullable": true
                    },
                    "maxRequestsPerConnection": {
                      "format": "int32",
                      "type": "integer",
                      "nullable": true
                    },
                    "maxRetries": {
                      "format": "int32",
                      "type": "integer",
                      "nullable": true
                    },
                    "useClientProtocol": {
                      "type": "boolean",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "tcp": {
                  "properties": {
                    "connectTimeout": {
                      "type": "string",
                      "nullable": true
                    },
                    "maxConnections": {
                      "format": "int32",
                      "type": "integer",
                      "nullable": true
                    },
                    "tcpKeepalive": {
                      "properties": {
                        "interval": {
                          "type": "string",
                          "nullable": true
                        },
                        "probes": {
                          "type": "integer",
                          "nullable": true
                        },
                        "time": {
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
            "loadBalancer": {
              "oneOf": [
                {
                  "not": {
                    "anyOf": [
                      {
                        "required": [
                          "simple"
                        ]
                      },
                      {
                        "properties": {
                          "consistentHash": {
                            "oneOf": [
                              {
                                "not": {
                                  "anyOf": [
                                    {
                                      "required": [
                                        "httpHeaderName"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "httpCookie"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "useSourceIp"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "httpQueryParameterName"
                                      ]
                                    }
                                  ]
                                }
                              },
                              {
                                "required": [
                                  "httpHeaderName"
                                ]
                              },
                              {
                                "required": [
                                  "httpCookie"
                                ]
                              },
                              {
                                "required": [
                                  "useSourceIp"
                                ]
                              },
                              {
                                "required": [
                                  "httpQueryParameterName"
                                ]
                              }
                            ]
                          }
                        },
                        "required": [
                          "consistentHash"
                        ]
                      }
                    ]
                  }
                },
                {
                  "required": [
                    "simple"
                  ]
                },
                {
                  "properties": {
                    "consistentHash": {
                      "oneOf": [
                        {
                          "not": {
                            "anyOf": [
                              {
                                "required": [
                                  "httpHeaderName"
                                ]
                              },
                              {
                                "required": [
                                  "httpCookie"
                                ]
                              },
                              {
                                "required": [
                                  "useSourceIp"
                                ]
                              },
                              {
                                "required": [
                                  "httpQueryParameterName"
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "required": [
                            "httpHeaderName"
                          ]
                        },
                        {
                          "required": [
                            "httpCookie"
                          ]
                        },
                        {
                          "required": [
                            "useSourceIp"
                          ]
                        },
                        {
                          "required": [
                            "httpQueryParameterName"
                          ]
                        }
                      ]
                    }
                  },
                  "required": [
                    "consistentHash"
                  ]
                }
              ],
              "properties": {
                "consistentHash": {
                  "properties": {
                    "httpCookie": {
                      "properties": {
                        "name": {
                          "type": "string",
                          "nullable": true
                        },
                        "path": {
                          "type": "string",
                          "nullable": true
                        },
                        "ttl": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "httpHeaderName": {
                      "type": "string",
                      "nullable": true
                    },
                    "httpQueryParameterName": {
                      "type": "string",
                      "nullable": true
                    },
                    "minimumRingSize": {
                      "type": "integer",
                      "nullable": true
                    },
                    "useSourceIp": {
                      "type": "boolean",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "localityLbSetting": {
                  "properties": {
                    "distribute": {
                      "items": {
                        "properties": {
                          "from": {
                            "type": "string",
                            "nullable": true
                          },
                          "to": {
                            "additionalProperties": {
                              "type": "integer"
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
                    "enabled": {
                      "nullable": true,
                      "type": "boolean"
                    },
                    "failover": {
                      "items": {
                        "properties": {
                          "from": {
                            "type": "string",
                            "nullable": true
                          },
                          "to": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "failoverPriority": {
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
                "simple": {
                  "enum": [
                    "UNSPECIFIED",
                    "LEAST_CONN",
                    "RANDOM",
                    "PASSTHROUGH",
                    "ROUND_ROBIN",
                    "LEAST_REQUEST"
                  ],
                  "type": "string",
                  "nullable": true
                },
                "warmupDurationSecs": {
                  "type": "string",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "outlierDetection": {
              "properties": {
                "baseEjectionTime": {
                  "type": "string",
                  "nullable": true
                },
                "consecutive5xxErrors": {
                  "nullable": true,
                  "type": "integer"
                },
                "consecutiveErrors": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                },
                "consecutiveGatewayErrors": {
                  "nullable": true,
                  "type": "integer"
                },
                "consecutiveLocalOriginFailures": {
                  "nullable": true,
                  "type": "integer"
                },
                "interval": {
                  "type": "string",
                  "nullable": true
                },
                "maxEjectionPercent": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                },
                "minHealthPercent": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                },
                "splitExternalLocalOriginErrors": {
                  "type": "boolean",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "portLevelSettings": {
              "items": {
                "properties": {
                  "connectionPool": {
                    "properties": {
                      "http": {
                        "properties": {
                          "h2UpgradePolicy": {
                            "enum": [
                              "DEFAULT",
                              "DO_NOT_UPGRADE",
                              "UPGRADE"
                            ],
                            "type": "string",
                            "nullable": true
                          },
                          "http1MaxPendingRequests": {
                            "format": "int32",
                            "type": "integer",
                            "nullable": true
                          },
                          "http2MaxRequests": {
                            "format": "int32",
                            "type": "integer",
                            "nullable": true
                          },
                          "idleTimeout": {
                            "type": "string",
                            "nullable": true
                          },
                          "maxRequestsPerConnection": {
                            "format": "int32",
                            "type": "integer",
                            "nullable": true
                          },
                          "maxRetries": {
                            "format": "int32",
                            "type": "integer",
                            "nullable": true
                          },
                          "useClientProtocol": {
                            "type": "boolean",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "tcp": {
                        "properties": {
                          "connectTimeout": {
                            "type": "string",
                            "nullable": true
                          },
                          "maxConnections": {
                            "format": "int32",
                            "type": "integer",
                            "nullable": true
                          },
                          "tcpKeepalive": {
                            "properties": {
                              "interval": {
                                "type": "string",
                                "nullable": true
                              },
                              "probes": {
                                "type": "integer",
                                "nullable": true
                              },
                              "time": {
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
                  "loadBalancer": {
                    "oneOf": [
                      {
                        "not": {
                          "anyOf": [
                            {
                              "required": [
                                "simple"
                              ]
                            },
                            {
                              "properties": {
                                "consistentHash": {
                                  "oneOf": [
                                    {
                                      "not": {
                                        "anyOf": [
                                          {
                                            "required": [
                                              "httpHeaderName"
                                            ]
                                          },
                                          {
                                            "required": [
                                              "httpCookie"
                                            ]
                                          },
                                          {
                                            "required": [
                                              "useSourceIp"
                                            ]
                                          },
                                          {
                                            "required": [
                                              "httpQueryParameterName"
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "required": [
                                        "httpHeaderName"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "httpCookie"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "useSourceIp"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "httpQueryParameterName"
                                      ]
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "consistentHash"
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "required": [
                          "simple"
                        ]
                      },
                      {
                        "properties": {
                          "consistentHash": {
                            "oneOf": [
                              {
                                "not": {
                                  "anyOf": [
                                    {
                                      "required": [
                                        "httpHeaderName"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "httpCookie"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "useSourceIp"
                                      ]
                                    },
                                    {
                                      "required": [
                                        "httpQueryParameterName"
                                      ]
                                    }
                                  ]
                                }
                              },
                              {
                                "required": [
                                  "httpHeaderName"
                                ]
                              },
                              {
                                "required": [
                                  "httpCookie"
                                ]
                              },
                              {
                                "required": [
                                  "useSourceIp"
                                ]
                              },
                              {
                                "required": [
                                  "httpQueryParameterName"
                                ]
                              }
                            ]
                          }
                        },
                        "required": [
                          "consistentHash"
                        ]
                      }
                    ],
                    "properties": {
                      "consistentHash": {
                        "properties": {
                          "httpCookie": {
                            "properties": {
                              "name": {
                                "type": "string",
                                "nullable": true
                              },
                              "path": {
                                "type": "string",
                                "nullable": true
                              },
                              "ttl": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "httpHeaderName": {
                            "type": "string",
                            "nullable": true
                          },
                          "httpQueryParameterName": {
                            "type": "string",
                            "nullable": true
                          },
                          "minimumRingSize": {
                            "type": "integer",
                            "nullable": true
                          },
                          "useSourceIp": {
                            "type": "boolean",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "localityLbSetting": {
                        "properties": {
                          "distribute": {
                            "items": {
                              "properties": {
                                "from": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "to": {
                                  "additionalProperties": {
                                    "type": "integer"
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
                          "enabled": {
                            "nullable": true,
                            "type": "boolean"
                          },
                          "failover": {
                            "items": {
                              "properties": {
                                "from": {
                                  "type": "string",
                                  "nullable": true
                                },
                                "to": {
                                  "type": "string",
                                  "nullable": true
                                }
                              },
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "failoverPriority": {
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
                      "simple": {
                        "enum": [
                          "UNSPECIFIED",
                          "LEAST_CONN",
                          "RANDOM",
                          "PASSTHROUGH",
                          "ROUND_ROBIN",
                          "LEAST_REQUEST"
                        ],
                        "type": "string",
                        "nullable": true
                      },
                      "warmupDurationSecs": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "outlierDetection": {
                    "properties": {
                      "baseEjectionTime": {
                        "type": "string",
                        "nullable": true
                      },
                      "consecutive5xxErrors": {
                        "nullable": true,
                        "type": "integer"
                      },
                      "consecutiveErrors": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "consecutiveGatewayErrors": {
                        "nullable": true,
                        "type": "integer"
                      },
                      "consecutiveLocalOriginFailures": {
                        "nullable": true,
                        "type": "integer"
                      },
                      "interval": {
                        "type": "string",
                        "nullable": true
                      },
                      "maxEjectionPercent": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "minHealthPercent": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "splitExternalLocalOriginErrors": {
                        "type": "boolean",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "port": {
                    "properties": {
                      "number": {
                        "type": "integer",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "tls": {
                    "properties": {
                      "caCertificates": {
                        "type": "string",
                        "nullable": true
                      },
                      "clientCertificate": {
                        "type": "string",
                        "nullable": true
                      },
                      "credentialName": {
                        "type": "string",
                        "nullable": true
                      },
                      "insecureSkipVerify": {
                        "nullable": true,
                        "type": "boolean"
                      },
                      "mode": {
                        "enum": [
                          "DISABLE",
                          "SIMPLE",
                          "MUTUAL",
                          "ISTIO_MUTUAL"
                        ],
                        "type": "string",
                        "nullable": true
                      },
                      "privateKey": {
                        "type": "string",
                        "nullable": true
                      },
                      "sni": {
                        "type": "string",
                        "nullable": true
                      },
                      "subjectAltNames": {
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
            "tls": {
              "properties": {
                "caCertificates": {
                  "type": "string",
                  "nullable": true
                },
                "clientCertificate": {
                  "type": "string",
                  "nullable": true
                },
                "credentialName": {
                  "type": "string",
                  "nullable": true
                },
                "insecureSkipVerify": {
                  "nullable": true,
                  "type": "boolean"
                },
                "mode": {
                  "enum": [
                    "DISABLE",
                    "SIMPLE",
                    "MUTUAL",
                    "ISTIO_MUTUAL"
                  ],
                  "type": "string",
                  "nullable": true
                },
                "privateKey": {
                  "type": "string",
                  "nullable": true
                },
                "sni": {
                  "type": "string",
                  "nullable": true
                },
                "subjectAltNames": {
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
            "tunnel": {
              "properties": {
                "protocol": {
                  "type": "string",
                  "nullable": true
                },
                "targetHost": {
                  "type": "string",
                  "nullable": true
                },
                "targetPort": {
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
        "workloadSelector": {
          "properties": {
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
      "type": "object",
      "nullable": true
    },
    "status": {
      "type": "object",
      "properties": {},
      "nullable": true
    },
    "apiVersion": {
      "type": "string",
      "enum": [
        "networking.istio.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "DestinationRule"
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
    }
  },
  "required": [
    "apiVersion",
    "kind"
  ]
};

export interface IDestinationRule {
  /**
   * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
   */
  "spec"?: {
    /**
     * A list of namespaces to which this destination rule is exported.
     */
    "exportTo"?: Array<string>;
    /**
     * The name of a service from the service registry.
     */
    "host"?: string;
    "subsets"?: Array<{
      "labels"?: {
        [key: string]: string;
      };
      /**
       * Name of the subset.
       */
      "name"?: string;
      /**
       * Traffic policies that apply to this subset.
       */
      "trafficPolicy"?: {
        "connectionPool"?: {
          /**
           * HTTP connection pool settings.
           */
          "http"?: {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             */
            "h2UpgradePolicy"?: "DEFAULT" | "DO_NOT_UPGRADE" | "UPGRADE";
            /**
             * Maximum number of pending HTTP requests to a destination.
             */
            "http1MaxPendingRequests"?: number;
            /**
             * Maximum number of requests to a backend.
             */
            "http2MaxRequests"?: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            "idleTimeout"?: string;
            /**
             * Maximum number of requests per connection to a backend.
             */
            "maxRequestsPerConnection"?: number;
            "maxRetries"?: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            "useClientProtocol"?: boolean;
          };
          /**
           * Settings common to both HTTP and TCP upstream connections.
           */
          "tcp"?: {
            /**
             * TCP connection timeout.
             */
            "connectTimeout"?: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            "maxConnections"?: number;
            /**
             * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
             */
            "tcpKeepalive"?: {
              /**
               * The time duration between keep-alive probes.
               */
              "interval"?: string;
              "probes"?: number;
              "time"?: string;
            };
          };
        };
        /**
         * Settings controlling the load balancer algorithms.
         */
        "loadBalancer"?: {
          "consistentHash"?: {
            /**
             * Hash based on HTTP cookie.
             */
            "httpCookie"?: {
              /**
               * Name of the cookie.
               */
              "name"?: string;
              /**
               * Path to set for the cookie.
               */
              "path"?: string;
              /**
               * Lifetime of the cookie.
               */
              "ttl"?: string;
            };
            /**
             * Hash based on a specific HTTP header.
             */
            "httpHeaderName"?: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            "httpQueryParameterName"?: string;
            "minimumRingSize"?: number;
            /**
             * Hash based on the source IP address.
             */
            "useSourceIp"?: boolean;
          };
          "localityLbSetting"?: {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "distribute"?: Array<{
              /**
               * Originating locality, '/' separated, e.g.
               */
              "from"?: string;
              /**
               * Map of upstream localities to traffic distribution weights.
               */
              "to"?: {
                [key: string]: number;
              };
            }>;
            /**
             * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
             */
            "enabled"?: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "failover"?: Array<{
              /**
               * Originating region.
               */
              "from"?: string;
              "to"?: string;
            }>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            "failoverPriority"?: Array<string>;
          };
          "simple"?: "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
          /**
           * Represents the warmup duration of Service.
           */
          "warmupDurationSecs"?: string;
        } & (Exclude<{
          "consistentHash"?: {
            /**
             * Hash based on HTTP cookie.
             */
            "httpCookie"?: {
              /**
               * Name of the cookie.
               */
              "name"?: string;
              /**
               * Path to set for the cookie.
               */
              "path"?: string;
              /**
               * Lifetime of the cookie.
               */
              "ttl"?: string;
            };
            /**
             * Hash based on a specific HTTP header.
             */
            "httpHeaderName"?: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            "httpQueryParameterName"?: string;
            "minimumRingSize"?: number;
            /**
             * Hash based on the source IP address.
             */
            "useSourceIp"?: boolean;
          };
          "localityLbSetting"?: {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "distribute"?: Array<{
              /**
               * Originating locality, '/' separated, e.g.
               */
              "from"?: string;
              /**
               * Map of upstream localities to traffic distribution weights.
               */
              "to"?: {
                [key: string]: number;
              };
            }>;
            /**
             * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
             */
            "enabled"?: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "failover"?: Array<{
              /**
               * Originating region.
               */
              "from"?: string;
              "to"?: string;
            }>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            "failoverPriority"?: Array<string>;
          };
          "simple"?: "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
          /**
           * Represents the warmup duration of Service.
           */
          "warmupDurationSecs"?: string;
        }, {
          "consistentHash"?: {
            /**
             * Hash based on HTTP cookie.
             */
            "httpCookie"?: {
              /**
               * Name of the cookie.
               */
              "name"?: string;
              /**
               * Path to set for the cookie.
               */
              "path"?: string;
              /**
               * Lifetime of the cookie.
               */
              "ttl"?: string;
            };
            /**
             * Hash based on a specific HTTP header.
             */
            "httpHeaderName"?: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            "httpQueryParameterName"?: string;
            "minimumRingSize"?: number;
            /**
             * Hash based on the source IP address.
             */
            "useSourceIp"?: boolean;
          };
          "localityLbSetting"?: {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "distribute"?: Array<{
              /**
               * Originating locality, '/' separated, e.g.
               */
              "from"?: string;
              /**
               * Map of upstream localities to traffic distribution weights.
               */
              "to"?: {
                [key: string]: number;
              };
            }>;
            /**
             * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
             */
            "enabled"?: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "failover"?: Array<{
              /**
               * Originating region.
               */
              "from"?: string;
              "to"?: string;
            }>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            "failoverPriority"?: Array<string>;
          };
          "simple"?: "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
          /**
           * Represents the warmup duration of Service.
           */
          "warmupDurationSecs"?: string;
        } & ({
          "consistentHash"?: {
            /**
             * Hash based on HTTP cookie.
             */
            "httpCookie"?: {
              /**
               * Name of the cookie.
               */
              "name"?: string;
              /**
               * Path to set for the cookie.
               */
              "path"?: string;
              /**
               * Lifetime of the cookie.
               */
              "ttl"?: string;
            };
            /**
             * Hash based on a specific HTTP header.
             */
            "httpHeaderName"?: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            "httpQueryParameterName"?: string;
            "minimumRingSize"?: number;
            /**
             * Hash based on the source IP address.
             */
            "useSourceIp"?: boolean;
          };
          "localityLbSetting"?: {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "distribute"?: Array<{
              /**
               * Originating locality, '/' separated, e.g.
               */
              "from"?: string;
              /**
               * Map of upstream localities to traffic distribution weights.
               */
              "to"?: {
                [key: string]: number;
              };
            }>;
            /**
             * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
             */
            "enabled"?: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "failover"?: Array<{
              /**
               * Originating region.
               */
              "from"?: string;
              "to"?: string;
            }>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            "failoverPriority"?: Array<string>;
          };
          "simple": "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
          /**
           * Represents the warmup duration of Service.
           */
          "warmupDurationSecs"?: string;
        } | {
          "consistentHash": Exclude<any, any | any | any | any> | any | any | any | any;
        })> | {
          "consistentHash"?: {
            /**
             * Hash based on HTTP cookie.
             */
            "httpCookie"?: {
              /**
               * Name of the cookie.
               */
              "name"?: string;
              /**
               * Path to set for the cookie.
               */
              "path"?: string;
              /**
               * Lifetime of the cookie.
               */
              "ttl"?: string;
            };
            /**
             * Hash based on a specific HTTP header.
             */
            "httpHeaderName"?: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            "httpQueryParameterName"?: string;
            "minimumRingSize"?: number;
            /**
             * Hash based on the source IP address.
             */
            "useSourceIp"?: boolean;
          };
          "localityLbSetting"?: {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "distribute"?: Array<{
              /**
               * Originating locality, '/' separated, e.g.
               */
              "from"?: string;
              /**
               * Map of upstream localities to traffic distribution weights.
               */
              "to"?: {
                [key: string]: number;
              };
            }>;
            /**
             * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
             */
            "enabled"?: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "failover"?: Array<{
              /**
               * Originating region.
               */
              "from"?: string;
              "to"?: string;
            }>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            "failoverPriority"?: Array<string>;
          };
          "simple": "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
          /**
           * Represents the warmup duration of Service.
           */
          "warmupDurationSecs"?: string;
        } | {
          "consistentHash": Exclude<any, any | any | any | any> | any | any | any | any;
        });
        "outlierDetection"?: {
          /**
           * Minimum ejection duration.
           */
          "baseEjectionTime"?: string;
          /**
           * Number of 5xx errors before a host is ejected from the connection pool.
           */
          "consecutive5xxErrors"?: number;
          "consecutiveErrors"?: number;
          /**
           * Number of gateway errors before a host is ejected from the connection pool.
           */
          "consecutiveGatewayErrors"?: number;
          "consecutiveLocalOriginFailures"?: number;
          /**
           * Time interval between ejection sweep analysis.
           */
          "interval"?: string;
          "maxEjectionPercent"?: number;
          "minHealthPercent"?: number;
          /**
           * Determines whether to distinguish local origin failures from external errors.
           */
          "splitExternalLocalOriginErrors"?: boolean;
        };
        /**
         * Traffic policies specific to individual ports.
         */
        "portLevelSettings"?: Array<{
          "connectionPool"?: {
            /**
             * HTTP connection pool settings.
             */
            "http"?: {
              /**
               * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
               */
              "h2UpgradePolicy"?: "DEFAULT" | "DO_NOT_UPGRADE" | "UPGRADE";
              /**
               * Maximum number of pending HTTP requests to a destination.
               */
              "http1MaxPendingRequests"?: number;
              /**
               * Maximum number of requests to a backend.
               */
              "http2MaxRequests"?: number;
              /**
               * The idle timeout for upstream connection pool connections.
               */
              "idleTimeout"?: string;
              /**
               * Maximum number of requests per connection to a backend.
               */
              "maxRequestsPerConnection"?: number;
              "maxRetries"?: number;
              /**
               * If set to true, client protocol will be preserved while initiating connection to backend.
               */
              "useClientProtocol"?: boolean;
            };
            /**
             * Settings common to both HTTP and TCP upstream connections.
             */
            "tcp"?: {
              /**
               * TCP connection timeout.
               */
              "connectTimeout"?: string;
              /**
               * Maximum number of HTTP1 /TCP connections to a destination host.
               */
              "maxConnections"?: number;
              /**
               * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
               */
              "tcpKeepalive"?: {
                /**
                 * The time duration between keep-alive probes.
                 */
                "interval"?: string;
                "probes"?: number;
                "time"?: string;
              };
            };
          };
          /**
           * Settings controlling the load balancer algorithms.
           */
          "loadBalancer"?: {
            "consistentHash"?: {
              /**
               * Hash based on HTTP cookie.
               */
              "httpCookie"?: {
                /**
                 * Name of the cookie.
                 */
                "name"?: string;
                /**
                 * Path to set for the cookie.
                 */
                "path"?: string;
                /**
                 * Lifetime of the cookie.
                 */
                "ttl"?: string;
              };
              /**
               * Hash based on a specific HTTP header.
               */
              "httpHeaderName"?: string;
              /**
               * Hash based on a specific HTTP query parameter.
               */
              "httpQueryParameterName"?: string;
              "minimumRingSize"?: number;
              /**
               * Hash based on the source IP address.
               */
              "useSourceIp"?: boolean;
            };
            "localityLbSetting"?: {
              /**
               * Optional: only one of distribute, failover or failoverPriority can be set.
               */
              "distribute"?: Array<{
                /**
                 * Originating locality, '/' separated, e.g.
                 */
                "from"?: string;
                /**
                 * Map of upstream localities to traffic distribution weights.
                 */
                "to"?: {
                  [key: string]: number;
                };
              }>;
              /**
               * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
               */
              "enabled"?: boolean;
              /**
               * Optional: only one of distribute, failover or failoverPriority can be set.
               */
              "failover"?: Array<{
                /**
                 * Originating region.
                 */
                "from"?: string;
                "to"?: string;
              }>;
              /**
               * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
               */
              "failoverPriority"?: Array<string>;
            };
            "simple"?: "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
            /**
             * Represents the warmup duration of Service.
             */
            "warmupDurationSecs"?: string;
          } & (Exclude<{
            "consistentHash"?: {
              /**
               * Hash based on HTTP cookie.
               */
              "httpCookie"?: {
                /**
                 * Name of the cookie.
                 */
                "name"?: string;
                /**
                 * Path to set for the cookie.
                 */
                "path"?: string;
                /**
                 * Lifetime of the cookie.
                 */
                "ttl"?: string;
              };
              /**
               * Hash based on a specific HTTP header.
               */
              "httpHeaderName"?: string;
              /**
               * Hash based on a specific HTTP query parameter.
               */
              "httpQueryParameterName"?: string;
              "minimumRingSize"?: number;
              /**
               * Hash based on the source IP address.
               */
              "useSourceIp"?: boolean;
            };
            "localityLbSetting"?: {
              /**
               * Optional: only one of distribute, failover or failoverPriority can be set.
               */
              "distribute"?: Array<{
                /**
                 * Originating locality, '/' separated, e.g.
                 */
                "from"?: string;
                /**
                 * Map of upstream localities to traffic distribution weights.
                 */
                "to"?: {
                  [key: string]: number;
                };
              }>;
              /**
               * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
               */
              "enabled"?: boolean;
              /**
               * Optional: only one of distribute, failover or failoverPriority can be set.
               */
              "failover"?: Array<{
                /**
                 * Originating region.
                 */
                "from"?: string;
                "to"?: string;
              }>;
              /**
               * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
               */
              "failoverPriority"?: Array<string>;
            };
            "simple"?: "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
            /**
             * Represents the warmup duration of Service.
             */
            "warmupDurationSecs"?: string;
          }, {
            "consistentHash"?: {
              /**
               * Hash based on HTTP cookie.
               */
              "httpCookie"?: {
                /**
                 * Name of the cookie.
                 */
                "name"?: string;
                /**
                 * Path to set for the cookie.
                 */
                "path"?: string;
                /**
                 * Lifetime of the cookie.
                 */
                "ttl"?: string;
              };
              /**
               * Hash based on a specific HTTP header.
               */
              "httpHeaderName"?: string;
              /**
               * Hash based on a specific HTTP query parameter.
               */
              "httpQueryParameterName"?: string;
              "minimumRingSize"?: number;
              /**
               * Hash based on the source IP address.
               */
              "useSourceIp"?: boolean;
            };
            "localityLbSetting"?: {
              /**
               * Optional: only one of distribute, failover or failoverPriority can be set.
               */
              "distribute"?: Array<{
                /**
                 * Originating locality, '/' separated, e.g.
                 */
                "from"?: string;
                /**
                 * Map of upstream localities to traffic distribution weights.
                 */
                "to"?: {
                  [key: string]: number;
                };
              }>;
              /**
               * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
               */
              "enabled"?: boolean;
              /**
               * Optional: only one of distribute, failover or failoverPriority can be set.
               */
              "failover"?: Array<{
                /**
                 * Originating region.
                 */
                "from"?: string;
                "to"?: string;
              }>;
              /**
               * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
               */
              "failoverPriority"?: Array<string>;
            };
            "simple"?: "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
            /**
             * Represents the warmup duration of Service.
             */
            "warmupDurationSecs"?: string;
          } & ({
            "consistentHash"?: {
              /**
               * Hash based on HTTP cookie.
               */
              "httpCookie"?: {
                /**
                 * Name of the cookie.
                 */
                "name"?: string;
                /**
                 * Path to set for the cookie.
                 */
                "path"?: string;
                /**
                 * Lifetime of the cookie.
                 */
                "ttl"?: string;
              };
              /**
               * Hash based on a specific HTTP header.
               */
              "httpHeaderName"?: string;
              /**
               * Hash based on a specific HTTP query parameter.
               */
              "httpQueryParameterName"?: string;
              "minimumRingSize"?: number;
              /**
               * Hash based on the source IP address.
               */
              "useSourceIp"?: boolean;
            };
            "localityLbSetting"?: {
              /**
               * Optional: only one of distribute, failover or failoverPriority can be set.
               */
              "distribute"?: Array<{
                /**
                 * Originating locality, '/' separated, e.g.
                 */
                "from"?: string;
                /**
                 * Map of upstream localities to traffic distribution weights.
                 */
                "to"?: {
                  [key: string]: number;
                };
              }>;
              /**
               * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
               */
              "enabled"?: boolean;
              /**
               * Optional: only one of distribute, failover or failoverPriority can be set.
               */
              "failover"?: Array<{
                /**
                 * Originating region.
                 */
                "from"?: string;
                "to"?: string;
              }>;
              /**
               * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
               */
              "failoverPriority"?: Array<string>;
            };
            "simple": "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
            /**
             * Represents the warmup duration of Service.
             */
            "warmupDurationSecs"?: string;
          } | {
            "consistentHash": Exclude<any, any | any | any | any> | any | any | any | any;
          })> | {
            "consistentHash"?: {
              /**
               * Hash based on HTTP cookie.
               */
              "httpCookie"?: {
                /**
                 * Name of the cookie.
                 */
                "name"?: string;
                /**
                 * Path to set for the cookie.
                 */
                "path"?: string;
                /**
                 * Lifetime of the cookie.
                 */
                "ttl"?: string;
              };
              /**
               * Hash based on a specific HTTP header.
               */
              "httpHeaderName"?: string;
              /**
               * Hash based on a specific HTTP query parameter.
               */
              "httpQueryParameterName"?: string;
              "minimumRingSize"?: number;
              /**
               * Hash based on the source IP address.
               */
              "useSourceIp"?: boolean;
            };
            "localityLbSetting"?: {
              /**
               * Optional: only one of distribute, failover or failoverPriority can be set.
               */
              "distribute"?: Array<{
                /**
                 * Originating locality, '/' separated, e.g.
                 */
                "from"?: string;
                /**
                 * Map of upstream localities to traffic distribution weights.
                 */
                "to"?: {
                  [key: string]: number;
                };
              }>;
              /**
               * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
               */
              "enabled"?: boolean;
              /**
               * Optional: only one of distribute, failover or failoverPriority can be set.
               */
              "failover"?: Array<{
                /**
                 * Originating region.
                 */
                "from"?: string;
                "to"?: string;
              }>;
              /**
               * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
               */
              "failoverPriority"?: Array<string>;
            };
            "simple": "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
            /**
             * Represents the warmup duration of Service.
             */
            "warmupDurationSecs"?: string;
          } | {
            "consistentHash": Exclude<any, any | any | any | any> | any | any | any | any;
          });
          "outlierDetection"?: {
            /**
             * Minimum ejection duration.
             */
            "baseEjectionTime"?: string;
            /**
             * Number of 5xx errors before a host is ejected from the connection pool.
             */
            "consecutive5xxErrors"?: number;
            "consecutiveErrors"?: number;
            /**
             * Number of gateway errors before a host is ejected from the connection pool.
             */
            "consecutiveGatewayErrors"?: number;
            "consecutiveLocalOriginFailures"?: number;
            /**
             * Time interval between ejection sweep analysis.
             */
            "interval"?: string;
            "maxEjectionPercent"?: number;
            "minHealthPercent"?: number;
            /**
             * Determines whether to distinguish local origin failures from external errors.
             */
            "splitExternalLocalOriginErrors"?: boolean;
          };
          "port"?: {
            "number"?: number;
          };
          /**
           * TLS related settings for connections to the upstream service.
           */
          "tls"?: {
            "caCertificates"?: string;
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            "clientCertificate"?: string;
            "credentialName"?: string;
            "insecureSkipVerify"?: boolean;
            "mode"?: "DISABLE" | "SIMPLE" | "MUTUAL" | "ISTIO_MUTUAL";
            /**
             * REQUIRED if mode is `MUTUAL`.
             */
            "privateKey"?: string;
            /**
             * SNI string to present to the server during TLS handshake.
             */
            "sni"?: string;
            "subjectAltNames"?: Array<string>;
          };
        }>;
        /**
         * TLS related settings for connections to the upstream service.
         */
        "tls"?: {
          "caCertificates"?: string;
          /**
           * REQUIRED if mode is `MUTUAL`.
           */
          "clientCertificate"?: string;
          "credentialName"?: string;
          "insecureSkipVerify"?: boolean;
          "mode"?: "DISABLE" | "SIMPLE" | "MUTUAL" | "ISTIO_MUTUAL";
          /**
           * REQUIRED if mode is `MUTUAL`.
           */
          "privateKey"?: string;
          /**
           * SNI string to present to the server during TLS handshake.
           */
          "sni"?: string;
          "subjectAltNames"?: Array<string>;
        };
        "tunnel"?: {
          /**
           * Specifies which protocol to use for tunneling the downstream connection.
           */
          "protocol"?: string;
          /**
           * Specifies a host to which the downstream connection is tunneled.
           */
          "targetHost"?: string;
          /**
           * Specifies a port to which the downstream connection is tunneled.
           */
          "targetPort"?: number;
        };
      };
    }>;
    "trafficPolicy"?: {
      "connectionPool"?: {
        /**
         * HTTP connection pool settings.
         */
        "http"?: {
          /**
           * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
           */
          "h2UpgradePolicy"?: "DEFAULT" | "DO_NOT_UPGRADE" | "UPGRADE";
          /**
           * Maximum number of pending HTTP requests to a destination.
           */
          "http1MaxPendingRequests"?: number;
          /**
           * Maximum number of requests to a backend.
           */
          "http2MaxRequests"?: number;
          /**
           * The idle timeout for upstream connection pool connections.
           */
          "idleTimeout"?: string;
          /**
           * Maximum number of requests per connection to a backend.
           */
          "maxRequestsPerConnection"?: number;
          "maxRetries"?: number;
          /**
           * If set to true, client protocol will be preserved while initiating connection to backend.
           */
          "useClientProtocol"?: boolean;
        };
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        "tcp"?: {
          /**
           * TCP connection timeout.
           */
          "connectTimeout"?: string;
          /**
           * Maximum number of HTTP1 /TCP connections to a destination host.
           */
          "maxConnections"?: number;
          /**
           * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
           */
          "tcpKeepalive"?: {
            /**
             * The time duration between keep-alive probes.
             */
            "interval"?: string;
            "probes"?: number;
            "time"?: string;
          };
        };
      };
      /**
       * Settings controlling the load balancer algorithms.
       */
      "loadBalancer"?: {
        "consistentHash"?: {
          /**
           * Hash based on HTTP cookie.
           */
          "httpCookie"?: {
            /**
             * Name of the cookie.
             */
            "name"?: string;
            /**
             * Path to set for the cookie.
             */
            "path"?: string;
            /**
             * Lifetime of the cookie.
             */
            "ttl"?: string;
          };
          /**
           * Hash based on a specific HTTP header.
           */
          "httpHeaderName"?: string;
          /**
           * Hash based on a specific HTTP query parameter.
           */
          "httpQueryParameterName"?: string;
          "minimumRingSize"?: number;
          /**
           * Hash based on the source IP address.
           */
          "useSourceIp"?: boolean;
        };
        "localityLbSetting"?: {
          /**
           * Optional: only one of distribute, failover or failoverPriority can be set.
           */
          "distribute"?: Array<{
            /**
             * Originating locality, '/' separated, e.g.
             */
            "from"?: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            "to"?: {
              [key: string]: number;
            };
          }>;
          /**
           * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
           */
          "enabled"?: boolean;
          /**
           * Optional: only one of distribute, failover or failoverPriority can be set.
           */
          "failover"?: Array<{
            /**
             * Originating region.
             */
            "from"?: string;
            "to"?: string;
          }>;
          /**
           * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
           */
          "failoverPriority"?: Array<string>;
        };
        "simple"?: "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
        /**
         * Represents the warmup duration of Service.
         */
        "warmupDurationSecs"?: string;
      } & (Exclude<{
        "consistentHash"?: {
          /**
           * Hash based on HTTP cookie.
           */
          "httpCookie"?: {
            /**
             * Name of the cookie.
             */
            "name"?: string;
            /**
             * Path to set for the cookie.
             */
            "path"?: string;
            /**
             * Lifetime of the cookie.
             */
            "ttl"?: string;
          };
          /**
           * Hash based on a specific HTTP header.
           */
          "httpHeaderName"?: string;
          /**
           * Hash based on a specific HTTP query parameter.
           */
          "httpQueryParameterName"?: string;
          "minimumRingSize"?: number;
          /**
           * Hash based on the source IP address.
           */
          "useSourceIp"?: boolean;
        };
        "localityLbSetting"?: {
          /**
           * Optional: only one of distribute, failover or failoverPriority can be set.
           */
          "distribute"?: Array<{
            /**
             * Originating locality, '/' separated, e.g.
             */
            "from"?: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            "to"?: {
              [key: string]: number;
            };
          }>;
          /**
           * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
           */
          "enabled"?: boolean;
          /**
           * Optional: only one of distribute, failover or failoverPriority can be set.
           */
          "failover"?: Array<{
            /**
             * Originating region.
             */
            "from"?: string;
            "to"?: string;
          }>;
          /**
           * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
           */
          "failoverPriority"?: Array<string>;
        };
        "simple"?: "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
        /**
         * Represents the warmup duration of Service.
         */
        "warmupDurationSecs"?: string;
      }, {
        "consistentHash"?: {
          /**
           * Hash based on HTTP cookie.
           */
          "httpCookie"?: {
            /**
             * Name of the cookie.
             */
            "name"?: string;
            /**
             * Path to set for the cookie.
             */
            "path"?: string;
            /**
             * Lifetime of the cookie.
             */
            "ttl"?: string;
          };
          /**
           * Hash based on a specific HTTP header.
           */
          "httpHeaderName"?: string;
          /**
           * Hash based on a specific HTTP query parameter.
           */
          "httpQueryParameterName"?: string;
          "minimumRingSize"?: number;
          /**
           * Hash based on the source IP address.
           */
          "useSourceIp"?: boolean;
        };
        "localityLbSetting"?: {
          /**
           * Optional: only one of distribute, failover or failoverPriority can be set.
           */
          "distribute"?: Array<{
            /**
             * Originating locality, '/' separated, e.g.
             */
            "from"?: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            "to"?: {
              [key: string]: number;
            };
          }>;
          /**
           * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
           */
          "enabled"?: boolean;
          /**
           * Optional: only one of distribute, failover or failoverPriority can be set.
           */
          "failover"?: Array<{
            /**
             * Originating region.
             */
            "from"?: string;
            "to"?: string;
          }>;
          /**
           * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
           */
          "failoverPriority"?: Array<string>;
        };
        "simple"?: "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
        /**
         * Represents the warmup duration of Service.
         */
        "warmupDurationSecs"?: string;
      } & ({
        "consistentHash"?: {
          /**
           * Hash based on HTTP cookie.
           */
          "httpCookie"?: {
            /**
             * Name of the cookie.
             */
            "name"?: string;
            /**
             * Path to set for the cookie.
             */
            "path"?: string;
            /**
             * Lifetime of the cookie.
             */
            "ttl"?: string;
          };
          /**
           * Hash based on a specific HTTP header.
           */
          "httpHeaderName"?: string;
          /**
           * Hash based on a specific HTTP query parameter.
           */
          "httpQueryParameterName"?: string;
          "minimumRingSize"?: number;
          /**
           * Hash based on the source IP address.
           */
          "useSourceIp"?: boolean;
        };
        "localityLbSetting"?: {
          /**
           * Optional: only one of distribute, failover or failoverPriority can be set.
           */
          "distribute"?: Array<{
            /**
             * Originating locality, '/' separated, e.g.
             */
            "from"?: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            "to"?: {
              [key: string]: number;
            };
          }>;
          /**
           * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
           */
          "enabled"?: boolean;
          /**
           * Optional: only one of distribute, failover or failoverPriority can be set.
           */
          "failover"?: Array<{
            /**
             * Originating region.
             */
            "from"?: string;
            "to"?: string;
          }>;
          /**
           * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
           */
          "failoverPriority"?: Array<string>;
        };
        "simple": "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
        /**
         * Represents the warmup duration of Service.
         */
        "warmupDurationSecs"?: string;
      } | {
        "consistentHash": Exclude<any, any | any | any | any> | any | any | any | any;
      })> | {
        "consistentHash"?: {
          /**
           * Hash based on HTTP cookie.
           */
          "httpCookie"?: {
            /**
             * Name of the cookie.
             */
            "name"?: string;
            /**
             * Path to set for the cookie.
             */
            "path"?: string;
            /**
             * Lifetime of the cookie.
             */
            "ttl"?: string;
          };
          /**
           * Hash based on a specific HTTP header.
           */
          "httpHeaderName"?: string;
          /**
           * Hash based on a specific HTTP query parameter.
           */
          "httpQueryParameterName"?: string;
          "minimumRingSize"?: number;
          /**
           * Hash based on the source IP address.
           */
          "useSourceIp"?: boolean;
        };
        "localityLbSetting"?: {
          /**
           * Optional: only one of distribute, failover or failoverPriority can be set.
           */
          "distribute"?: Array<{
            /**
             * Originating locality, '/' separated, e.g.
             */
            "from"?: string;
            /**
             * Map of upstream localities to traffic distribution weights.
             */
            "to"?: {
              [key: string]: number;
            };
          }>;
          /**
           * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
           */
          "enabled"?: boolean;
          /**
           * Optional: only one of distribute, failover or failoverPriority can be set.
           */
          "failover"?: Array<{
            /**
             * Originating region.
             */
            "from"?: string;
            "to"?: string;
          }>;
          /**
           * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
           */
          "failoverPriority"?: Array<string>;
        };
        "simple": "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
        /**
         * Represents the warmup duration of Service.
         */
        "warmupDurationSecs"?: string;
      } | {
        "consistentHash": Exclude<any, any | any | any | any> | any | any | any | any;
      });
      "outlierDetection"?: {
        /**
         * Minimum ejection duration.
         */
        "baseEjectionTime"?: string;
        /**
         * Number of 5xx errors before a host is ejected from the connection pool.
         */
        "consecutive5xxErrors"?: number;
        "consecutiveErrors"?: number;
        /**
         * Number of gateway errors before a host is ejected from the connection pool.
         */
        "consecutiveGatewayErrors"?: number;
        "consecutiveLocalOriginFailures"?: number;
        /**
         * Time interval between ejection sweep analysis.
         */
        "interval"?: string;
        "maxEjectionPercent"?: number;
        "minHealthPercent"?: number;
        /**
         * Determines whether to distinguish local origin failures from external errors.
         */
        "splitExternalLocalOriginErrors"?: boolean;
      };
      /**
       * Traffic policies specific to individual ports.
       */
      "portLevelSettings"?: Array<{
        "connectionPool"?: {
          /**
           * HTTP connection pool settings.
           */
          "http"?: {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             */
            "h2UpgradePolicy"?: "DEFAULT" | "DO_NOT_UPGRADE" | "UPGRADE";
            /**
             * Maximum number of pending HTTP requests to a destination.
             */
            "http1MaxPendingRequests"?: number;
            /**
             * Maximum number of requests to a backend.
             */
            "http2MaxRequests"?: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            "idleTimeout"?: string;
            /**
             * Maximum number of requests per connection to a backend.
             */
            "maxRequestsPerConnection"?: number;
            "maxRetries"?: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            "useClientProtocol"?: boolean;
          };
          /**
           * Settings common to both HTTP and TCP upstream connections.
           */
          "tcp"?: {
            /**
             * TCP connection timeout.
             */
            "connectTimeout"?: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            "maxConnections"?: number;
            /**
             * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
             */
            "tcpKeepalive"?: {
              /**
               * The time duration between keep-alive probes.
               */
              "interval"?: string;
              "probes"?: number;
              "time"?: string;
            };
          };
        };
        /**
         * Settings controlling the load balancer algorithms.
         */
        "loadBalancer"?: {
          "consistentHash"?: {
            /**
             * Hash based on HTTP cookie.
             */
            "httpCookie"?: {
              /**
               * Name of the cookie.
               */
              "name"?: string;
              /**
               * Path to set for the cookie.
               */
              "path"?: string;
              /**
               * Lifetime of the cookie.
               */
              "ttl"?: string;
            };
            /**
             * Hash based on a specific HTTP header.
             */
            "httpHeaderName"?: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            "httpQueryParameterName"?: string;
            "minimumRingSize"?: number;
            /**
             * Hash based on the source IP address.
             */
            "useSourceIp"?: boolean;
          };
          "localityLbSetting"?: {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "distribute"?: Array<{
              /**
               * Originating locality, '/' separated, e.g.
               */
              "from"?: string;
              /**
               * Map of upstream localities to traffic distribution weights.
               */
              "to"?: {
                [key: string]: number;
              };
            }>;
            /**
             * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
             */
            "enabled"?: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "failover"?: Array<{
              /**
               * Originating region.
               */
              "from"?: string;
              "to"?: string;
            }>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            "failoverPriority"?: Array<string>;
          };
          "simple"?: "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
          /**
           * Represents the warmup duration of Service.
           */
          "warmupDurationSecs"?: string;
        } & (Exclude<{
          "consistentHash"?: {
            /**
             * Hash based on HTTP cookie.
             */
            "httpCookie"?: {
              /**
               * Name of the cookie.
               */
              "name"?: string;
              /**
               * Path to set for the cookie.
               */
              "path"?: string;
              /**
               * Lifetime of the cookie.
               */
              "ttl"?: string;
            };
            /**
             * Hash based on a specific HTTP header.
             */
            "httpHeaderName"?: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            "httpQueryParameterName"?: string;
            "minimumRingSize"?: number;
            /**
             * Hash based on the source IP address.
             */
            "useSourceIp"?: boolean;
          };
          "localityLbSetting"?: {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "distribute"?: Array<{
              /**
               * Originating locality, '/' separated, e.g.
               */
              "from"?: string;
              /**
               * Map of upstream localities to traffic distribution weights.
               */
              "to"?: {
                [key: string]: number;
              };
            }>;
            /**
             * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
             */
            "enabled"?: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "failover"?: Array<{
              /**
               * Originating region.
               */
              "from"?: string;
              "to"?: string;
            }>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            "failoverPriority"?: Array<string>;
          };
          "simple"?: "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
          /**
           * Represents the warmup duration of Service.
           */
          "warmupDurationSecs"?: string;
        }, {
          "consistentHash"?: {
            /**
             * Hash based on HTTP cookie.
             */
            "httpCookie"?: {
              /**
               * Name of the cookie.
               */
              "name"?: string;
              /**
               * Path to set for the cookie.
               */
              "path"?: string;
              /**
               * Lifetime of the cookie.
               */
              "ttl"?: string;
            };
            /**
             * Hash based on a specific HTTP header.
             */
            "httpHeaderName"?: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            "httpQueryParameterName"?: string;
            "minimumRingSize"?: number;
            /**
             * Hash based on the source IP address.
             */
            "useSourceIp"?: boolean;
          };
          "localityLbSetting"?: {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "distribute"?: Array<{
              /**
               * Originating locality, '/' separated, e.g.
               */
              "from"?: string;
              /**
               * Map of upstream localities to traffic distribution weights.
               */
              "to"?: {
                [key: string]: number;
              };
            }>;
            /**
             * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
             */
            "enabled"?: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "failover"?: Array<{
              /**
               * Originating region.
               */
              "from"?: string;
              "to"?: string;
            }>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            "failoverPriority"?: Array<string>;
          };
          "simple"?: "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
          /**
           * Represents the warmup duration of Service.
           */
          "warmupDurationSecs"?: string;
        } & ({
          "consistentHash"?: {
            /**
             * Hash based on HTTP cookie.
             */
            "httpCookie"?: {
              /**
               * Name of the cookie.
               */
              "name"?: string;
              /**
               * Path to set for the cookie.
               */
              "path"?: string;
              /**
               * Lifetime of the cookie.
               */
              "ttl"?: string;
            };
            /**
             * Hash based on a specific HTTP header.
             */
            "httpHeaderName"?: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            "httpQueryParameterName"?: string;
            "minimumRingSize"?: number;
            /**
             * Hash based on the source IP address.
             */
            "useSourceIp"?: boolean;
          };
          "localityLbSetting"?: {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "distribute"?: Array<{
              /**
               * Originating locality, '/' separated, e.g.
               */
              "from"?: string;
              /**
               * Map of upstream localities to traffic distribution weights.
               */
              "to"?: {
                [key: string]: number;
              };
            }>;
            /**
             * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
             */
            "enabled"?: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "failover"?: Array<{
              /**
               * Originating region.
               */
              "from"?: string;
              "to"?: string;
            }>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            "failoverPriority"?: Array<string>;
          };
          "simple": "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
          /**
           * Represents the warmup duration of Service.
           */
          "warmupDurationSecs"?: string;
        } | {
          "consistentHash": Exclude<any, any | any | any | any> | any | any | any | any;
        })> | {
          "consistentHash"?: {
            /**
             * Hash based on HTTP cookie.
             */
            "httpCookie"?: {
              /**
               * Name of the cookie.
               */
              "name"?: string;
              /**
               * Path to set for the cookie.
               */
              "path"?: string;
              /**
               * Lifetime of the cookie.
               */
              "ttl"?: string;
            };
            /**
             * Hash based on a specific HTTP header.
             */
            "httpHeaderName"?: string;
            /**
             * Hash based on a specific HTTP query parameter.
             */
            "httpQueryParameterName"?: string;
            "minimumRingSize"?: number;
            /**
             * Hash based on the source IP address.
             */
            "useSourceIp"?: boolean;
          };
          "localityLbSetting"?: {
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "distribute"?: Array<{
              /**
               * Originating locality, '/' separated, e.g.
               */
              "from"?: string;
              /**
               * Map of upstream localities to traffic distribution weights.
               */
              "to"?: {
                [key: string]: number;
              };
            }>;
            /**
             * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
             */
            "enabled"?: boolean;
            /**
             * Optional: only one of distribute, failover or failoverPriority can be set.
             */
            "failover"?: Array<{
              /**
               * Originating region.
               */
              "from"?: string;
              "to"?: string;
            }>;
            /**
             * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
             */
            "failoverPriority"?: Array<string>;
          };
          "simple": "UNSPECIFIED" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH" | "ROUND_ROBIN" | "LEAST_REQUEST";
          /**
           * Represents the warmup duration of Service.
           */
          "warmupDurationSecs"?: string;
        } | {
          "consistentHash": Exclude<any, any | any | any | any> | any | any | any | any;
        });
        "outlierDetection"?: {
          /**
           * Minimum ejection duration.
           */
          "baseEjectionTime"?: string;
          /**
           * Number of 5xx errors before a host is ejected from the connection pool.
           */
          "consecutive5xxErrors"?: number;
          "consecutiveErrors"?: number;
          /**
           * Number of gateway errors before a host is ejected from the connection pool.
           */
          "consecutiveGatewayErrors"?: number;
          "consecutiveLocalOriginFailures"?: number;
          /**
           * Time interval between ejection sweep analysis.
           */
          "interval"?: string;
          "maxEjectionPercent"?: number;
          "minHealthPercent"?: number;
          /**
           * Determines whether to distinguish local origin failures from external errors.
           */
          "splitExternalLocalOriginErrors"?: boolean;
        };
        "port"?: {
          "number"?: number;
        };
        /**
         * TLS related settings for connections to the upstream service.
         */
        "tls"?: {
          "caCertificates"?: string;
          /**
           * REQUIRED if mode is `MUTUAL`.
           */
          "clientCertificate"?: string;
          "credentialName"?: string;
          "insecureSkipVerify"?: boolean;
          "mode"?: "DISABLE" | "SIMPLE" | "MUTUAL" | "ISTIO_MUTUAL";
          /**
           * REQUIRED if mode is `MUTUAL`.
           */
          "privateKey"?: string;
          /**
           * SNI string to present to the server during TLS handshake.
           */
          "sni"?: string;
          "subjectAltNames"?: Array<string>;
        };
      }>;
      /**
       * TLS related settings for connections to the upstream service.
       */
      "tls"?: {
        "caCertificates"?: string;
        /**
         * REQUIRED if mode is `MUTUAL`.
         */
        "clientCertificate"?: string;
        "credentialName"?: string;
        "insecureSkipVerify"?: boolean;
        "mode"?: "DISABLE" | "SIMPLE" | "MUTUAL" | "ISTIO_MUTUAL";
        /**
         * REQUIRED if mode is `MUTUAL`.
         */
        "privateKey"?: string;
        /**
         * SNI string to present to the server during TLS handshake.
         */
        "sni"?: string;
        "subjectAltNames"?: Array<string>;
      };
      "tunnel"?: {
        /**
         * Specifies which protocol to use for tunneling the downstream connection.
         */
        "protocol"?: string;
        /**
         * Specifies a host to which the downstream connection is tunneled.
         */
        "targetHost"?: string;
        /**
         * Specifies a port to which the downstream connection is tunneled.
         */
        "targetPort"?: number;
      };
    };
    "workloadSelector"?: {
      "matchLabels"?: {
        [key: string]: string;
      };
    };
  };
  "status"?: {
  };
  "apiVersion": "networking.istio.io/v1beta1";
  "kind": "DestinationRule";
  "metadata"?: IObjectMeta;
}

export class DestinationRule extends Model<IDestinationRule> implements IDestinationRule {
  "spec"?: IDestinationRule["spec"];
  "status"?: IDestinationRule["status"];
  "apiVersion": IDestinationRule["apiVersion"];
  "kind": IDestinationRule["kind"];
  "metadata"?: IDestinationRule["metadata"];

static apiVersion: IDestinationRule["apiVersion"] = "networking.istio.io/v1beta1";
static kind: IDestinationRule["kind"] = "DestinationRule";
static is = createTypeMetaGuard<IDestinationRule>(DestinationRule);

constructor(data?: ModelData<IDestinationRule>) {
  super({
    apiVersion: DestinationRule.apiVersion,
    kind: DestinationRule.kind,
    ...data
  } as IDestinationRule);
}
}


setSchema(DestinationRule, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
