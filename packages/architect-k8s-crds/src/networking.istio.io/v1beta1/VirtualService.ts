import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "networking.istio.io.v1beta1.VirtualService";
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
        "gateways": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "nullable": true
        },
        "hosts": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "nullable": true
        },
        "http": {
          "items": {
            "properties": {
              "corsPolicy": {
                "properties": {
                  "allowCredentials": {
                    "nullable": true,
                    "type": "boolean"
                  },
                  "allowHeaders": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "allowMethods": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "allowOrigin": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "allowOrigins": {
                    "items": {
                      "oneOf": [
                        {
                          "not": {
                            "anyOf": [
                              {
                                "required": [
                                  "exact"
                                ]
                              },
                              {
                                "required": [
                                  "prefix"
                                ]
                              },
                              {
                                "required": [
                                  "regex"
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "required": [
                            "exact"
                          ]
                        },
                        {
                          "required": [
                            "prefix"
                          ]
                        },
                        {
                          "required": [
                            "regex"
                          ]
                        }
                      ],
                      "properties": {
                        "exact": {
                          "type": "string",
                          "nullable": true
                        },
                        "prefix": {
                          "type": "string",
                          "nullable": true
                        },
                        "regex": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "exposeHeaders": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "maxAge": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "delegate": {
                "properties": {
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
              "fault": {
                "properties": {
                  "abort": {
                    "oneOf": [
                      {
                        "not": {
                          "anyOf": [
                            {
                              "required": [
                                "httpStatus"
                              ]
                            },
                            {
                              "required": [
                                "grpcStatus"
                              ]
                            },
                            {
                              "required": [
                                "http2Error"
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "required": [
                          "httpStatus"
                        ]
                      },
                      {
                        "required": [
                          "grpcStatus"
                        ]
                      },
                      {
                        "required": [
                          "http2Error"
                        ]
                      }
                    ],
                    "properties": {
                      "grpcStatus": {
                        "type": "string",
                        "nullable": true
                      },
                      "http2Error": {
                        "type": "string",
                        "nullable": true
                      },
                      "httpStatus": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "percentage": {
                        "properties": {
                          "value": {
                            "format": "double",
                            "type": "number",
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
                  "delay": {
                    "oneOf": [
                      {
                        "not": {
                          "anyOf": [
                            {
                              "required": [
                                "fixedDelay"
                              ]
                            },
                            {
                              "required": [
                                "exponentialDelay"
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "required": [
                          "fixedDelay"
                        ]
                      },
                      {
                        "required": [
                          "exponentialDelay"
                        ]
                      }
                    ],
                    "properties": {
                      "exponentialDelay": {
                        "type": "string",
                        "nullable": true
                      },
                      "fixedDelay": {
                        "type": "string",
                        "nullable": true
                      },
                      "percent": {
                        "format": "int32",
                        "type": "integer",
                        "nullable": true
                      },
                      "percentage": {
                        "properties": {
                          "value": {
                            "format": "double",
                            "type": "number",
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
              "headers": {
                "properties": {
                  "request": {
                    "properties": {
                      "add": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "remove": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "set": {
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
                  "response": {
                    "properties": {
                      "add": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "remove": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "set": {
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
              "match": {
                "items": {
                  "properties": {
                    "authority": {
                      "oneOf": [
                        {
                          "not": {
                            "anyOf": [
                              {
                                "required": [
                                  "exact"
                                ]
                              },
                              {
                                "required": [
                                  "prefix"
                                ]
                              },
                              {
                                "required": [
                                  "regex"
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "required": [
                            "exact"
                          ]
                        },
                        {
                          "required": [
                            "prefix"
                          ]
                        },
                        {
                          "required": [
                            "regex"
                          ]
                        }
                      ],
                      "properties": {
                        "exact": {
                          "type": "string",
                          "nullable": true
                        },
                        "prefix": {
                          "type": "string",
                          "nullable": true
                        },
                        "regex": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "gateways": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "headers": {
                      "additionalProperties": {
                        "oneOf": [
                          {
                            "not": {
                              "anyOf": [
                                {
                                  "required": [
                                    "exact"
                                  ]
                                },
                                {
                                  "required": [
                                    "prefix"
                                  ]
                                },
                                {
                                  "required": [
                                    "regex"
                                  ]
                                }
                              ]
                            }
                          },
                          {
                            "required": [
                              "exact"
                            ]
                          },
                          {
                            "required": [
                              "prefix"
                            ]
                          },
                          {
                            "required": [
                              "regex"
                            ]
                          }
                        ],
                        "properties": {
                          "exact": {
                            "type": "string",
                            "nullable": true
                          },
                          "prefix": {
                            "type": "string",
                            "nullable": true
                          },
                          "regex": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "ignoreUriCase": {
                      "type": "boolean",
                      "nullable": true
                    },
                    "method": {
                      "oneOf": [
                        {
                          "not": {
                            "anyOf": [
                              {
                                "required": [
                                  "exact"
                                ]
                              },
                              {
                                "required": [
                                  "prefix"
                                ]
                              },
                              {
                                "required": [
                                  "regex"
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "required": [
                            "exact"
                          ]
                        },
                        {
                          "required": [
                            "prefix"
                          ]
                        },
                        {
                          "required": [
                            "regex"
                          ]
                        }
                      ],
                      "properties": {
                        "exact": {
                          "type": "string",
                          "nullable": true
                        },
                        "prefix": {
                          "type": "string",
                          "nullable": true
                        },
                        "regex": {
                          "type": "string",
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
                    "port": {
                      "type": "integer",
                      "nullable": true
                    },
                    "queryParams": {
                      "additionalProperties": {
                        "oneOf": [
                          {
                            "not": {
                              "anyOf": [
                                {
                                  "required": [
                                    "exact"
                                  ]
                                },
                                {
                                  "required": [
                                    "prefix"
                                  ]
                                },
                                {
                                  "required": [
                                    "regex"
                                  ]
                                }
                              ]
                            }
                          },
                          {
                            "required": [
                              "exact"
                            ]
                          },
                          {
                            "required": [
                              "prefix"
                            ]
                          },
                          {
                            "required": [
                              "regex"
                            ]
                          }
                        ],
                        "properties": {
                          "exact": {
                            "type": "string",
                            "nullable": true
                          },
                          "prefix": {
                            "type": "string",
                            "nullable": true
                          },
                          "regex": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "scheme": {
                      "oneOf": [
                        {
                          "not": {
                            "anyOf": [
                              {
                                "required": [
                                  "exact"
                                ]
                              },
                              {
                                "required": [
                                  "prefix"
                                ]
                              },
                              {
                                "required": [
                                  "regex"
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "required": [
                            "exact"
                          ]
                        },
                        {
                          "required": [
                            "prefix"
                          ]
                        },
                        {
                          "required": [
                            "regex"
                          ]
                        }
                      ],
                      "properties": {
                        "exact": {
                          "type": "string",
                          "nullable": true
                        },
                        "prefix": {
                          "type": "string",
                          "nullable": true
                        },
                        "regex": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "sourceLabels": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "sourceNamespace": {
                      "type": "string",
                      "nullable": true
                    },
                    "uri": {
                      "oneOf": [
                        {
                          "not": {
                            "anyOf": [
                              {
                                "required": [
                                  "exact"
                                ]
                              },
                              {
                                "required": [
                                  "prefix"
                                ]
                              },
                              {
                                "required": [
                                  "regex"
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "required": [
                            "exact"
                          ]
                        },
                        {
                          "required": [
                            "prefix"
                          ]
                        },
                        {
                          "required": [
                            "regex"
                          ]
                        }
                      ],
                      "properties": {
                        "exact": {
                          "type": "string",
                          "nullable": true
                        },
                        "prefix": {
                          "type": "string",
                          "nullable": true
                        },
                        "regex": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "withoutHeaders": {
                      "additionalProperties": {
                        "oneOf": [
                          {
                            "not": {
                              "anyOf": [
                                {
                                  "required": [
                                    "exact"
                                  ]
                                },
                                {
                                  "required": [
                                    "prefix"
                                  ]
                                },
                                {
                                  "required": [
                                    "regex"
                                  ]
                                }
                              ]
                            }
                          },
                          {
                            "required": [
                              "exact"
                            ]
                          },
                          {
                            "required": [
                              "prefix"
                            ]
                          },
                          {
                            "required": [
                              "regex"
                            ]
                          }
                        ],
                        "properties": {
                          "exact": {
                            "type": "string",
                            "nullable": true
                          },
                          "prefix": {
                            "type": "string",
                            "nullable": true
                          },
                          "regex": {
                            "type": "string",
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
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "mirror": {
                "properties": {
                  "host": {
                    "type": "string",
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
                  "subset": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "mirrorPercent": {
                "nullable": true,
                "type": "integer"
              },
              "mirrorPercentage": {
                "properties": {
                  "value": {
                    "format": "double",
                    "type": "number",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "mirror_percent": {
                "nullable": true,
                "type": "integer"
              },
              "name": {
                "type": "string",
                "nullable": true
              },
              "redirect": {
                "oneOf": [
                  {
                    "not": {
                      "anyOf": [
                        {
                          "required": [
                            "port"
                          ]
                        },
                        {
                          "required": [
                            "derivePort"
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "required": [
                      "port"
                    ]
                  },
                  {
                    "required": [
                      "derivePort"
                    ]
                  }
                ],
                "properties": {
                  "authority": {
                    "type": "string",
                    "nullable": true
                  },
                  "derivePort": {
                    "enum": [
                      "FROM_PROTOCOL_DEFAULT",
                      "FROM_REQUEST_PORT"
                    ],
                    "type": "string",
                    "nullable": true
                  },
                  "port": {
                    "type": "integer",
                    "nullable": true
                  },
                  "redirectCode": {
                    "type": "integer",
                    "nullable": true
                  },
                  "scheme": {
                    "type": "string",
                    "nullable": true
                  },
                  "uri": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "retries": {
                "properties": {
                  "attempts": {
                    "format": "int32",
                    "type": "integer",
                    "nullable": true
                  },
                  "perTryTimeout": {
                    "type": "string",
                    "nullable": true
                  },
                  "retryOn": {
                    "type": "string",
                    "nullable": true
                  },
                  "retryRemoteLocalities": {
                    "nullable": true,
                    "type": "boolean"
                  }
                },
                "type": "object",
                "nullable": true
              },
              "rewrite": {
                "properties": {
                  "authority": {
                    "type": "string",
                    "nullable": true
                  },
                  "uri": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "route": {
                "items": {
                  "properties": {
                    "destination": {
                      "properties": {
                        "host": {
                          "type": "string",
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
                        "subset": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "headers": {
                      "properties": {
                        "request": {
                          "properties": {
                            "add": {
                              "additionalProperties": {
                                "type": "string"
                              },
                              "type": "object",
                              "properties": {},
                              "nullable": true
                            },
                            "remove": {
                              "items": {
                                "type": "string"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "set": {
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
                        "response": {
                          "properties": {
                            "add": {
                              "additionalProperties": {
                                "type": "string"
                              },
                              "type": "object",
                              "properties": {},
                              "nullable": true
                            },
                            "remove": {
                              "items": {
                                "type": "string"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "set": {
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
                    "weight": {
                      "format": "int32",
                      "type": "integer",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "timeout": {
                "type": "string",
                "nullable": true
              }
            },
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "tcp": {
          "items": {
            "properties": {
              "match": {
                "items": {
                  "properties": {
                    "destinationSubnets": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "gateways": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "port": {
                      "type": "integer",
                      "nullable": true
                    },
                    "sourceLabels": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "sourceNamespace": {
                      "type": "string",
                      "nullable": true
                    },
                    "sourceSubnet": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "route": {
                "items": {
                  "properties": {
                    "destination": {
                      "properties": {
                        "host": {
                          "type": "string",
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
                        "subset": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "weight": {
                      "format": "int32",
                      "type": "integer",
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
        "tls": {
          "items": {
            "properties": {
              "match": {
                "items": {
                  "properties": {
                    "destinationSubnets": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "gateways": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "port": {
                      "type": "integer",
                      "nullable": true
                    },
                    "sniHosts": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "sourceLabels": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "sourceNamespace": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "route": {
                "items": {
                  "properties": {
                    "destination": {
                      "properties": {
                        "host": {
                          "type": "string",
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
                        "subset": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "weight": {
                      "format": "int32",
                      "type": "integer",
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
        "VirtualService"
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

export interface IVirtualService {
  /**
   * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
   */
  "spec"?: {
    /**
     * A list of namespaces to which this virtual service is exported.
     */
    "exportTo"?: Array<string>;
    /**
     * The names of gateways and sidecars that should apply these routes.
     */
    "gateways"?: Array<string>;
    /**
     * The destination hosts to which traffic is being sent.
     */
    "hosts"?: Array<string>;
    /**
     * An ordered list of route rules for HTTP traffic.
     */
    "http"?: Array<{
      /**
       * Cross-Origin Resource Sharing policy (CORS).
       */
      "corsPolicy"?: {
        "allowCredentials"?: boolean;
        "allowHeaders"?: Array<string>;
        /**
         * List of HTTP methods allowed to access the resource.
         */
        "allowMethods"?: Array<string>;
        /**
         * The list of origins that are allowed to perform CORS requests.
         */
        "allowOrigin"?: Array<string>;
        /**
         * String patterns that match allowed origins.
         */
        "allowOrigins"?: Array<Exclude<{
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        }, {
          "exact": string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix": string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex": string;
        }> | {
          "exact": string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix": string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex": string;
        }>;
        "exposeHeaders"?: Array<string>;
        "maxAge"?: string;
      };
      "delegate"?: {
        /**
         * Name specifies the name of the delegate VirtualService.
         */
        "name"?: string;
        /**
         * Namespace specifies the namespace where the delegate VirtualService resides.
         */
        "namespace"?: string;
      };
      /**
       * Fault injection policy to apply on HTTP traffic at the client side.
       */
      "fault"?: {
        "abort"?: Exclude<{
          "grpcStatus"?: string;
          "http2Error"?: string;
          /**
           * HTTP status code to use to abort the Http request.
           */
          "httpStatus"?: number;
          /**
           * Percentage of requests to be aborted with the error code provided.
           */
          "percentage"?: {
            "value"?: number;
          };
        }, {
          "grpcStatus"?: string;
          "http2Error"?: string;
          /**
           * HTTP status code to use to abort the Http request.
           */
          "httpStatus": number;
          /**
           * Percentage of requests to be aborted with the error code provided.
           */
          "percentage"?: {
            "value"?: number;
          };
        } | {
          "grpcStatus": string;
          "http2Error"?: string;
          /**
           * HTTP status code to use to abort the Http request.
           */
          "httpStatus"?: number;
          /**
           * Percentage of requests to be aborted with the error code provided.
           */
          "percentage"?: {
            "value"?: number;
          };
        } | {
          "grpcStatus"?: string;
          "http2Error": string;
          /**
           * HTTP status code to use to abort the Http request.
           */
          "httpStatus"?: number;
          /**
           * Percentage of requests to be aborted with the error code provided.
           */
          "percentage"?: {
            "value"?: number;
          };
        }> | {
          "grpcStatus"?: string;
          "http2Error"?: string;
          /**
           * HTTP status code to use to abort the Http request.
           */
          "httpStatus": number;
          /**
           * Percentage of requests to be aborted with the error code provided.
           */
          "percentage"?: {
            "value"?: number;
          };
        } | {
          "grpcStatus": string;
          "http2Error"?: string;
          /**
           * HTTP status code to use to abort the Http request.
           */
          "httpStatus"?: number;
          /**
           * Percentage of requests to be aborted with the error code provided.
           */
          "percentage"?: {
            "value"?: number;
          };
        } | {
          "grpcStatus"?: string;
          "http2Error": string;
          /**
           * HTTP status code to use to abort the Http request.
           */
          "httpStatus"?: number;
          /**
           * Percentage of requests to be aborted with the error code provided.
           */
          "percentage"?: {
            "value"?: number;
          };
        };
        "delay"?: Exclude<{
          "exponentialDelay"?: string;
          /**
           * Add a fixed delay before forwarding the request.
           */
          "fixedDelay"?: string;
          /**
           * Percentage of requests on which the delay will be injected (0-100).
           */
          "percent"?: number;
          /**
           * Percentage of requests on which the delay will be injected.
           */
          "percentage"?: {
            "value"?: number;
          };
        }, {
          "exponentialDelay"?: string;
          /**
           * Add a fixed delay before forwarding the request.
           */
          "fixedDelay": string;
          /**
           * Percentage of requests on which the delay will be injected (0-100).
           */
          "percent"?: number;
          /**
           * Percentage of requests on which the delay will be injected.
           */
          "percentage"?: {
            "value"?: number;
          };
        } | {
          "exponentialDelay": string;
          /**
           * Add a fixed delay before forwarding the request.
           */
          "fixedDelay"?: string;
          /**
           * Percentage of requests on which the delay will be injected (0-100).
           */
          "percent"?: number;
          /**
           * Percentage of requests on which the delay will be injected.
           */
          "percentage"?: {
            "value"?: number;
          };
        }> | {
          "exponentialDelay"?: string;
          /**
           * Add a fixed delay before forwarding the request.
           */
          "fixedDelay": string;
          /**
           * Percentage of requests on which the delay will be injected (0-100).
           */
          "percent"?: number;
          /**
           * Percentage of requests on which the delay will be injected.
           */
          "percentage"?: {
            "value"?: number;
          };
        } | {
          "exponentialDelay": string;
          /**
           * Add a fixed delay before forwarding the request.
           */
          "fixedDelay"?: string;
          /**
           * Percentage of requests on which the delay will be injected (0-100).
           */
          "percent"?: number;
          /**
           * Percentage of requests on which the delay will be injected.
           */
          "percentage"?: {
            "value"?: number;
          };
        };
      };
      "headers"?: {
        "request"?: {
          "add"?: {
            [key: string]: string;
          };
          "remove"?: Array<string>;
          "set"?: {
            [key: string]: string;
          };
        };
        "response"?: {
          "add"?: {
            [key: string]: string;
          };
          "remove"?: Array<string>;
          "set"?: {
            [key: string]: string;
          };
        };
      };
      "match"?: Array<{
        "authority"?: Exclude<{
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        }, {
          "exact": string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix": string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex": string;
        }> | {
          "exact": string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix": string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex": string;
        };
        /**
         * Names of gateways where the rule should be applied.
         */
        "gateways"?: Array<string>;
        "headers"?: {
          [key: string]: Exclude<{
            "exact"?: string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          }, {
            "exact": string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          } | {
            "exact"?: string;
            "prefix": string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          } | {
            "exact"?: string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex": string;
          }> | {
            "exact": string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          } | {
            "exact"?: string;
            "prefix": string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          } | {
            "exact"?: string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex": string;
          };
        };
        /**
         * Flag to specify whether the URI matching should be case-insensitive.
         */
        "ignoreUriCase"?: boolean;
        "method"?: Exclude<{
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        }, {
          "exact": string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix": string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex": string;
        }> | {
          "exact": string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix": string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex": string;
        };
        /**
         * The name assigned to a match.
         */
        "name"?: string;
        /**
         * Specifies the ports on the host that is being addressed.
         */
        "port"?: number;
        /**
         * Query parameters for matching.
         */
        "queryParams"?: {
          [key: string]: Exclude<{
            "exact"?: string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          }, {
            "exact": string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          } | {
            "exact"?: string;
            "prefix": string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          } | {
            "exact"?: string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex": string;
          }> | {
            "exact": string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          } | {
            "exact"?: string;
            "prefix": string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          } | {
            "exact"?: string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex": string;
          };
        };
        "scheme"?: Exclude<{
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        }, {
          "exact": string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix": string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex": string;
        }> | {
          "exact": string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix": string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex": string;
        };
        "sourceLabels"?: {
          [key: string]: string;
        };
        /**
         * Source namespace constraining the applicability of a rule to workloads in that namespace.
         */
        "sourceNamespace"?: string;
        "uri"?: Exclude<{
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        }, {
          "exact": string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix": string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex": string;
        }> | {
          "exact": string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix": string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex"?: string;
        } | {
          "exact"?: string;
          "prefix"?: string;
          /**
           * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
           */
          "regex": string;
        };
        /**
         * withoutHeader has the same syntax with the header, but has opposite meaning.
         */
        "withoutHeaders"?: {
          [key: string]: Exclude<{
            "exact"?: string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          }, {
            "exact": string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          } | {
            "exact"?: string;
            "prefix": string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          } | {
            "exact"?: string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex": string;
          }> | {
            "exact": string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          } | {
            "exact"?: string;
            "prefix": string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex"?: string;
          } | {
            "exact"?: string;
            "prefix"?: string;
            /**
             * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
             */
            "regex": string;
          };
        };
      }>;
      "mirror"?: {
        /**
         * The name of a service from the service registry.
         */
        "host"?: string;
        /**
         * Specifies the port on the host that is being addressed.
         */
        "port"?: {
          "number"?: number;
        };
        /**
         * The name of a subset within the service.
         */
        "subset"?: string;
      };
      /**
       * Percentage of the traffic to be mirrored by the `mirror` field.
       */
      "mirrorPercent"?: number;
      /**
       * Percentage of the traffic to be mirrored by the `mirror` field.
       */
      "mirrorPercentage"?: {
        "value"?: number;
      };
      /**
       * Percentage of the traffic to be mirrored by the `mirror` field.
       */
      "mirror_percent"?: number;
      /**
       * The name assigned to the route for debugging purposes.
       */
      "name"?: string;
      /**
       * A HTTP rule can either redirect or forward (default) traffic.
       */
      "redirect"?: Exclude<{
        "authority"?: string;
        "derivePort"?: "FROM_PROTOCOL_DEFAULT" | "FROM_REQUEST_PORT";
        /**
         * On a redirect, overwrite the port portion of the URL with this value.
         */
        "port"?: number;
        "redirectCode"?: number;
        /**
         * On a redirect, overwrite the scheme portion of the URL with this value.
         */
        "scheme"?: string;
        "uri"?: string;
      }, {
        "authority"?: string;
        "derivePort"?: "FROM_PROTOCOL_DEFAULT" | "FROM_REQUEST_PORT";
        /**
         * On a redirect, overwrite the port portion of the URL with this value.
         */
        "port": number;
        "redirectCode"?: number;
        /**
         * On a redirect, overwrite the scheme portion of the URL with this value.
         */
        "scheme"?: string;
        "uri"?: string;
      } | {
        "authority"?: string;
        "derivePort": "FROM_PROTOCOL_DEFAULT" | "FROM_REQUEST_PORT";
        /**
         * On a redirect, overwrite the port portion of the URL with this value.
         */
        "port"?: number;
        "redirectCode"?: number;
        /**
         * On a redirect, overwrite the scheme portion of the URL with this value.
         */
        "scheme"?: string;
        "uri"?: string;
      }> | {
        "authority"?: string;
        "derivePort"?: "FROM_PROTOCOL_DEFAULT" | "FROM_REQUEST_PORT";
        /**
         * On a redirect, overwrite the port portion of the URL with this value.
         */
        "port": number;
        "redirectCode"?: number;
        /**
         * On a redirect, overwrite the scheme portion of the URL with this value.
         */
        "scheme"?: string;
        "uri"?: string;
      } | {
        "authority"?: string;
        "derivePort": "FROM_PROTOCOL_DEFAULT" | "FROM_REQUEST_PORT";
        /**
         * On a redirect, overwrite the port portion of the URL with this value.
         */
        "port"?: number;
        "redirectCode"?: number;
        /**
         * On a redirect, overwrite the scheme portion of the URL with this value.
         */
        "scheme"?: string;
        "uri"?: string;
      };
      /**
       * Retry policy for HTTP requests.
       */
      "retries"?: {
        /**
         * Number of retries to be allowed for a given request.
         */
        "attempts"?: number;
        /**
         * Timeout per attempt for a given request, including the initial call and any retries.
         */
        "perTryTimeout"?: string;
        /**
         * Specifies the conditions under which retry takes place.
         */
        "retryOn"?: string;
        /**
         * Flag to specify whether the retries should retry to other localities.
         */
        "retryRemoteLocalities"?: boolean;
      };
      /**
       * Rewrite HTTP URIs and Authority headers.
       */
      "rewrite"?: {
        /**
         * rewrite the Authority/Host header with this value.
         */
        "authority"?: string;
        "uri"?: string;
      };
      /**
       * A HTTP rule can either redirect or forward (default) traffic.
       */
      "route"?: Array<{
        "destination"?: {
          /**
           * The name of a service from the service registry.
           */
          "host"?: string;
          /**
           * Specifies the port on the host that is being addressed.
           */
          "port"?: {
            "number"?: number;
          };
          /**
           * The name of a subset within the service.
           */
          "subset"?: string;
        };
        "headers"?: {
          "request"?: {
            "add"?: {
              [key: string]: string;
            };
            "remove"?: Array<string>;
            "set"?: {
              [key: string]: string;
            };
          };
          "response"?: {
            "add"?: {
              [key: string]: string;
            };
            "remove"?: Array<string>;
            "set"?: {
              [key: string]: string;
            };
          };
        };
        /**
         * Weight specifies the relative proportion of traffic to be forwarded to the destination.
         */
        "weight"?: number;
      }>;
      /**
       * Timeout for HTTP requests, default is disabled.
       */
      "timeout"?: string;
    }>;
    /**
     * An ordered list of route rules for opaque TCP traffic.
     */
    "tcp"?: Array<{
      "match"?: Array<{
        /**
         * IPv4 or IPv6 ip addresses of destination with optional subnet.
         */
        "destinationSubnets"?: Array<string>;
        /**
         * Names of gateways where the rule should be applied.
         */
        "gateways"?: Array<string>;
        /**
         * Specifies the port on the host that is being addressed.
         */
        "port"?: number;
        "sourceLabels"?: {
          [key: string]: string;
        };
        /**
         * Source namespace constraining the applicability of a rule to workloads in that namespace.
         */
        "sourceNamespace"?: string;
        /**
         * IPv4 or IPv6 ip address of source with optional subnet.
         */
        "sourceSubnet"?: string;
      }>;
      /**
       * The destination to which the connection should be forwarded to.
       */
      "route"?: Array<{
        "destination"?: {
          /**
           * The name of a service from the service registry.
           */
          "host"?: string;
          /**
           * Specifies the port on the host that is being addressed.
           */
          "port"?: {
            "number"?: number;
          };
          /**
           * The name of a subset within the service.
           */
          "subset"?: string;
        };
        /**
         * Weight specifies the relative proportion of traffic to be forwarded to the destination.
         */
        "weight"?: number;
      }>;
    }>;
    "tls"?: Array<{
      "match"?: Array<{
        /**
         * IPv4 or IPv6 ip addresses of destination with optional subnet.
         */
        "destinationSubnets"?: Array<string>;
        /**
         * Names of gateways where the rule should be applied.
         */
        "gateways"?: Array<string>;
        /**
         * Specifies the port on the host that is being addressed.
         */
        "port"?: number;
        /**
         * SNI (server name indicator) to match on.
         */
        "sniHosts"?: Array<string>;
        "sourceLabels"?: {
          [key: string]: string;
        };
        /**
         * Source namespace constraining the applicability of a rule to workloads in that namespace.
         */
        "sourceNamespace"?: string;
      }>;
      /**
       * The destination to which the connection should be forwarded to.
       */
      "route"?: Array<{
        "destination"?: {
          /**
           * The name of a service from the service registry.
           */
          "host"?: string;
          /**
           * Specifies the port on the host that is being addressed.
           */
          "port"?: {
            "number"?: number;
          };
          /**
           * The name of a subset within the service.
           */
          "subset"?: string;
        };
        /**
         * Weight specifies the relative proportion of traffic to be forwarded to the destination.
         */
        "weight"?: number;
      }>;
    }>;
  };
  "status"?: {
  };
  "apiVersion": "networking.istio.io/v1beta1";
  "kind": "VirtualService";
  "metadata"?: IObjectMeta;
}

export class VirtualService extends Model<IVirtualService> implements IVirtualService {
  "spec"?: IVirtualService["spec"];
  "status"?: IVirtualService["status"];
  "apiVersion": IVirtualService["apiVersion"];
  "kind": IVirtualService["kind"];
  "metadata"?: IVirtualService["metadata"];

static apiVersion: IVirtualService["apiVersion"] = "networking.istio.io/v1beta1";
static kind: IVirtualService["kind"] = "VirtualService";
static is = createTypeMetaGuard<IVirtualService>(VirtualService);

constructor(data?: ModelData<IVirtualService>) {
  super({
    apiVersion: VirtualService.apiVersion,
    kind: VirtualService.kind,
    ...data
  } as IVirtualService);
}
}


setSchema(VirtualService, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
