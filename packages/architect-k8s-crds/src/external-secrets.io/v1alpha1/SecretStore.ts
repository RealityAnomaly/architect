import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "external-secrets.io.v1alpha1.SecretStore";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "external-secrets.io/v1alpha1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "SecretStore"
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
        "controller": {
          "type": "string",
          "nullable": true
        },
        "provider": {
          "maxProperties": 1,
          "minProperties": 1,
          "properties": {
            "akeyless": {
              "properties": {
                "akeylessGWApiURL": {
                  "type": "string"
                },
                "authSecretRef": {
                  "properties": {
                    "secretRef": {
                      "properties": {
                        "accessID": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        "accessType": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        "accessTypeParam": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        }
                      },
                      "type": "object"
                    }
                  },
                  "required": [
                    "secretRef"
                  ],
                  "type": "object"
                }
              },
              "required": [
                "akeylessGWApiURL",
                "authSecretRef"
              ],
              "type": "object",
              "nullable": true
            },
            "alibaba": {
              "properties": {
                "auth": {
                  "properties": {
                    "secretRef": {
                      "properties": {
                        "accessKeyIDSecretRef": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                          "type": "object"
                        },
                        "accessKeySecretSecretRef": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                          "type": "object"
                        }
                      },
                      "required": [
                        "accessKeyIDSecretRef",
                        "accessKeySecretSecretRef"
                      ],
                      "type": "object"
                    }
                  },
                  "required": [
                    "secretRef"
                  ],
                  "type": "object"
                },
                "endpoint": {
                  "type": "string",
                  "nullable": true
                },
                "regionID": {
                  "type": "string"
                }
              },
              "required": [
                "auth",
                "regionID"
              ],
              "type": "object",
              "nullable": true
            },
            "aws": {
              "properties": {
                "auth": {
                  "properties": {
                    "jwt": {
                      "properties": {
                        "serviceAccountRef": {
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
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "secretRef": {
                      "properties": {
                        "accessKeyIDSecretRef": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        "secretAccessKeySecretRef": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "region": {
                  "type": "string"
                },
                "role": {
                  "type": "string",
                  "nullable": true
                },
                "service": {
                  "enum": [
                    "SecretsManager",
                    "ParameterStore"
                  ],
                  "type": "string"
                }
              },
              "required": [
                "region",
                "service"
              ],
              "type": "object",
              "nullable": true
            },
            "azurekv": {
              "properties": {
                "authSecretRef": {
                  "properties": {
                    "clientId": {
                      "properties": {
                        "key": {
                          "type": "string",
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
                    "clientSecret": {
                      "properties": {
                        "key": {
                          "type": "string",
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
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "authType": {
                  "default": "ServicePrincipal",
                  "enum": [
                    "ServicePrincipal",
                    "ManagedIdentity",
                    "WorkloadIdentity"
                  ],
                  "type": "string",
                  "nullable": true
                },
                "identityId": {
                  "type": "string",
                  "nullable": true
                },
                "serviceAccountRef": {
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
                "tenantId": {
                  "type": "string",
                  "nullable": true
                },
                "vaultUrl": {
                  "type": "string"
                }
              },
              "required": [
                "vaultUrl"
              ],
              "type": "object",
              "nullable": true
            },
            "fake": {
              "properties": {
                "data": {
                  "items": {
                    "properties": {
                      "key": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string",
                        "nullable": true
                      },
                      "valueMap": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "version": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "required": [
                      "key"
                    ],
                    "type": "object"
                  },
                  "type": "array"
                }
              },
              "required": [
                "data"
              ],
              "type": "object",
              "nullable": true
            },
            "gcpsm": {
              "properties": {
                "auth": {
                  "properties": {
                    "secretRef": {
                      "properties": {
                        "secretAccessKeySecretRef": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "workloadIdentity": {
                      "properties": {
                        "clusterLocation": {
                          "type": "string"
                        },
                        "clusterName": {
                          "type": "string"
                        },
                        "clusterProjectID": {
                          "type": "string",
                          "nullable": true
                        },
                        "serviceAccountRef": {
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
                        }
                      },
                      "required": [
                        "clusterLocation",
                        "clusterName",
                        "serviceAccountRef"
                      ],
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "projectID": {
                  "type": "string",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "gitlab": {
              "properties": {
                "auth": {
                  "properties": {
                    "SecretRef": {
                      "properties": {
                        "accessToken": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        }
                      },
                      "type": "object"
                    }
                  },
                  "required": [
                    "SecretRef"
                  ],
                  "type": "object"
                },
                "projectID": {
                  "type": "string",
                  "nullable": true
                },
                "url": {
                  "type": "string",
                  "nullable": true
                }
              },
              "required": [
                "auth"
              ],
              "type": "object",
              "nullable": true
            },
            "ibm": {
              "properties": {
                "auth": {
                  "properties": {
                    "secretRef": {
                      "properties": {
                        "secretApiKeySecretRef": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        }
                      },
                      "type": "object"
                    }
                  },
                  "required": [
                    "secretRef"
                  ],
                  "type": "object"
                },
                "serviceUrl": {
                  "type": "string",
                  "nullable": true
                }
              },
              "required": [
                "auth"
              ],
              "type": "object",
              "nullable": true
            },
            "kubernetes": {
              "properties": {
                "auth": {
                  "maxProperties": 1,
                  "minProperties": 1,
                  "properties": {
                    "cert": {
                      "properties": {
                        "clientCert": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        "clientKey": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "serviceAccount": {
                      "properties": {
                        "serviceAccount": {
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
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "token": {
                      "properties": {
                        "bearerToken": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "remoteNamespace": {
                  "default": "default",
                  "type": "string",
                  "nullable": true
                },
                "server": {
                  "properties": {
                    "caBundle": {
                      "format": "byte",
                      "type": "string",
                      "nullable": true
                    },
                    "caProvider": {
                      "properties": {
                        "key": {
                          "type": "string",
                          "nullable": true
                        },
                        "name": {
                          "type": "string"
                        },
                        "namespace": {
                          "type": "string",
                          "nullable": true
                        },
                        "type": {
                          "enum": [
                            "Secret",
                            "ConfigMap"
                          ],
                          "type": "string"
                        }
                      },
                      "required": [
                        "name",
                        "type"
                      ],
                      "type": "object",
                      "nullable": true
                    },
                    "url": {
                      "default": "kubernetes.default",
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                }
              },
              "required": [
                "auth"
              ],
              "type": "object",
              "nullable": true
            },
            "oracle": {
              "properties": {
                "auth": {
                  "properties": {
                    "secretRef": {
                      "properties": {
                        "fingerprint": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                          "type": "object"
                        },
                        "privatekey": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                          "type": "object"
                        }
                      },
                      "required": [
                        "fingerprint",
                        "privatekey"
                      ],
                      "type": "object"
                    },
                    "tenancy": {
                      "type": "string"
                    },
                    "user": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "secretRef",
                    "tenancy",
                    "user"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "region": {
                  "type": "string"
                },
                "vault": {
                  "type": "string"
                }
              },
              "required": [
                "region",
                "vault"
              ],
              "type": "object",
              "nullable": true
            },
            "vault": {
              "properties": {
                "auth": {
                  "properties": {
                    "appRole": {
                      "properties": {
                        "path": {
                          "default": "approle",
                          "type": "string"
                        },
                        "roleId": {
                          "type": "string"
                        },
                        "secretRef": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                          "type": "object"
                        }
                      },
                      "required": [
                        "path",
                        "roleId",
                        "secretRef"
                      ],
                      "type": "object",
                      "nullable": true
                    },
                    "cert": {
                      "properties": {
                        "clientCert": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        "secretRef": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "jwt": {
                      "properties": {
                        "kubernetesServiceAccountToken": {
                          "properties": {
                            "audiences": {
                              "items": {
                                "type": "string"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "expirationSeconds": {
                              "format": "int64",
                              "type": "integer",
                              "nullable": true
                            },
                            "serviceAccountRef": {
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
                            }
                          },
                          "required": [
                            "serviceAccountRef"
                          ],
                          "type": "object",
                          "nullable": true
                        },
                        "path": {
                          "default": "jwt",
                          "type": "string"
                        },
                        "role": {
                          "type": "string",
                          "nullable": true
                        },
                        "secretRef": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        }
                      },
                      "required": [
                        "path"
                      ],
                      "type": "object",
                      "nullable": true
                    },
                    "kubernetes": {
                      "properties": {
                        "mountPath": {
                          "default": "kubernetes",
                          "type": "string"
                        },
                        "role": {
                          "type": "string"
                        },
                        "secretRef": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        "serviceAccountRef": {
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
                        }
                      },
                      "required": [
                        "mountPath",
                        "role"
                      ],
                      "type": "object",
                      "nullable": true
                    },
                    "ldap": {
                      "properties": {
                        "path": {
                          "default": "ldap",
                          "type": "string"
                        },
                        "secretRef": {
                          "properties": {
                            "key": {
                              "type": "string",
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
                        "username": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "path",
                        "username"
                      ],
                      "type": "object",
                      "nullable": true
                    },
                    "tokenSecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
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
                    }
                  },
                  "type": "object"
                },
                "caBundle": {
                  "format": "byte",
                  "type": "string",
                  "nullable": true
                },
                "caProvider": {
                  "properties": {
                    "key": {
                      "type": "string",
                      "nullable": true
                    },
                    "name": {
                      "type": "string"
                    },
                    "namespace": {
                      "type": "string",
                      "nullable": true
                    },
                    "type": {
                      "enum": [
                        "Secret",
                        "ConfigMap"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "type"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "forwardInconsistent": {
                  "type": "boolean",
                  "nullable": true
                },
                "namespace": {
                  "type": "string",
                  "nullable": true
                },
                "path": {
                  "type": "string",
                  "nullable": true
                },
                "readYourWrites": {
                  "type": "boolean",
                  "nullable": true
                },
                "server": {
                  "type": "string"
                },
                "version": {
                  "default": "v2",
                  "enum": [
                    "v1",
                    "v2"
                  ],
                  "type": "string",
                  "nullable": true
                }
              },
              "required": [
                "auth",
                "server"
              ],
              "type": "object",
              "nullable": true
            },
            "webhook": {
              "properties": {
                "body": {
                  "type": "string",
                  "nullable": true
                },
                "caBundle": {
                  "format": "byte",
                  "type": "string",
                  "nullable": true
                },
                "caProvider": {
                  "properties": {
                    "key": {
                      "type": "string",
                      "nullable": true
                    },
                    "name": {
                      "type": "string"
                    },
                    "namespace": {
                      "type": "string",
                      "nullable": true
                    },
                    "type": {
                      "enum": [
                        "Secret",
                        "ConfigMap"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "type"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "headers": {
                  "additionalProperties": {
                    "type": "string"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                },
                "method": {
                  "type": "string",
                  "nullable": true
                },
                "result": {
                  "properties": {
                    "jsonPath": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "secrets": {
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "secretRef": {
                        "properties": {
                          "key": {
                            "type": "string",
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
                        "type": "object"
                      }
                    },
                    "required": [
                      "name",
                      "secretRef"
                    ],
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "timeout": {
                  "type": "string",
                  "nullable": true
                },
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "result",
                "url"
              ],
              "type": "object",
              "nullable": true
            },
            "yandexlockbox": {
              "properties": {
                "apiEndpoint": {
                  "type": "string",
                  "nullable": true
                },
                "auth": {
                  "properties": {
                    "authorizedKeySecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
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
                    }
                  },
                  "type": "object"
                },
                "caProvider": {
                  "properties": {
                    "certSecretRef": {
                      "properties": {
                        "key": {
                          "type": "string",
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
                    }
                  },
                  "type": "object",
                  "nullable": true
                }
              },
              "required": [
                "auth"
              ],
              "type": "object",
              "nullable": true
            }
          },
          "type": "object"
        },
        "retrySettings": {
          "properties": {
            "maxRetries": {
              "format": "int32",
              "type": "integer",
              "nullable": true
            },
            "retryInterval": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        }
      },
      "required": [
        "provider"
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
 * SecretStore represents a secure external location for storing secrets, which can be referenced as part of `storeRef` fields.
 */
export interface ISecretStore {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "external-secrets.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "SecretStore";
  "metadata"?: IObjectMeta;
  /**
   * SecretStoreSpec defines the desired state of SecretStore.
   */
  "spec"?: {
    /**
     * Used to select the correct KES controller (think: ingress.ingressClassName) The KES controller is instantiated with a specific controller name and filters ES based on this property
     */
    "controller"?: string;
    /**
     * Used to configure the provider. Only one provider may be set
     */
    "provider": {
      /**
       * Akeyless configures this store to sync secrets using Akeyless Vault provider
       */
      "akeyless"?: {
        /**
         * Akeyless GW API Url from which the secrets to be fetched from.
         */
        "akeylessGWApiURL": string;
        /**
         * Auth configures how the operator authenticates with Akeyless.
         */
        "authSecretRef": {
          /**
           * AkeylessAuthSecretRef AKEYLESS_ACCESS_TYPE_PARAM: AZURE_OBJ_ID OR GCP_AUDIENCE OR ACCESS_KEY OR KUB_CONFIG_NAME.
           */
          "secretRef": {
            /**
             * The SecretAccessID is used for authentication
             */
            "accessID"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
            /**
             * A reference to a specific 'key' within a Secret resource, In some instances, `key` is a required field.
             */
            "accessType"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
            /**
             * A reference to a specific 'key' within a Secret resource, In some instances, `key` is a required field.
             */
            "accessTypeParam"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
        };
      };
      /**
       * Alibaba configures this store to sync secrets using Alibaba Cloud provider
       */
      "alibaba"?: {
        /**
         * AlibabaAuth contains a secretRef for credentials.
         */
        "auth": {
          /**
           * AlibabaAuthSecretRef holds secret references for Alibaba credentials.
           */
          "secretRef": {
            /**
             * The AccessKeyID is used for authentication
             */
            "accessKeyIDSecretRef": {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
            /**
             * The AccessKeySecret is used for authentication
             */
            "accessKeySecretSecretRef": {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
        };
        "endpoint"?: string;
        /**
         * Alibaba Region to be used for the provider
         */
        "regionID": string;
      };
      /**
       * AWS configures this store to sync secrets using AWS Secret Manager provider
       */
      "aws"?: {
        /**
         * Auth defines the information necessary to authenticate against AWS if not set aws sdk will infer credentials from your environment see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        "auth"?: {
          /**
           * Authenticate against AWS using service account tokens.
           */
          "jwt"?: {
            /**
             * A reference to a ServiceAccount resource.
             */
            "serviceAccountRef"?: {
              /**
               * The name of the ServiceAccount resource being referred to.
               */
              "name": string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
          /**
           * AWSAuthSecretRef holds secret references for AWS credentials both AccessKeyID and SecretAccessKey must be defined in order to properly authenticate.
           */
          "secretRef"?: {
            /**
             * The AccessKeyID is used for authentication
             */
            "accessKeyIDSecretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
            /**
             * The SecretAccessKey is used for authentication
             */
            "secretAccessKeySecretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
        };
        /**
         * AWS Region to be used for the provider
         */
        "region": string;
        /**
         * Role is a Role ARN which the SecretManager provider will assume
         */
        "role"?: string;
        /**
         * Service defines which service should be used to fetch the secrets
         */
        "service": "SecretsManager" | "ParameterStore";
      };
      /**
       * AzureKV configures this store to sync secrets using Azure Key Vault provider
       */
      "azurekv"?: {
        /**
         * Auth configures how the operator authenticates with Azure. Required for ServicePrincipal auth type.
         */
        "authSecretRef"?: {
          /**
           * The Azure clientId of the service principle used for authentication.
           */
          "clientId"?: {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * The name of the Secret resource being referred to.
             */
            "name"?: string;
            /**
             * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
             */
            "namespace"?: string;
          };
          /**
           * The Azure ClientSecret of the service principle used for authentication.
           */
          "clientSecret"?: {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * The name of the Secret resource being referred to.
             */
            "name"?: string;
            /**
             * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
             */
            "namespace"?: string;
          };
        };
        /**
         * Auth type defines how to authenticate to the keyvault service. Valid values are: - "ServicePrincipal" (default): Using a service principal (tenantId, clientId, clientSecret) - "ManagedIdentity": Using Managed Identity assigned to the pod (see aad-pod-identity)
         */
        "authType"?: "ServicePrincipal" | "ManagedIdentity" | "WorkloadIdentity";
        /**
         * If multiple Managed Identity is assigned to the pod, you can select the one to be used
         */
        "identityId"?: string;
        /**
         * ServiceAccountRef specified the service account that should be used when authenticating with WorkloadIdentity.
         */
        "serviceAccountRef"?: {
          /**
           * The name of the ServiceAccount resource being referred to.
           */
          "name": string;
          /**
           * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
           */
          "namespace"?: string;
        };
        /**
         * TenantID configures the Azure Tenant to send requests to. Required for ServicePrincipal auth type.
         */
        "tenantId"?: string;
        /**
         * Vault Url from which the secrets to be fetched from.
         */
        "vaultUrl": string;
      };
      /**
       * Fake configures a store with static key/value pairs
       */
      "fake"?: {
        "data": Array<{
          "key": string;
          "value"?: string;
          "valueMap"?: {
            [key: string]: string;
          };
          "version"?: string;
        }>;
      };
      /**
       * GCPSM configures this store to sync secrets using Google Cloud Platform Secret Manager provider
       */
      "gcpsm"?: {
        /**
         * Auth defines the information necessary to authenticate against GCP
         */
        "auth"?: {
          "secretRef"?: {
            /**
             * The SecretAccessKey is used for authentication
             */
            "secretAccessKeySecretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
          "workloadIdentity"?: {
            "clusterLocation": string;
            "clusterName": string;
            "clusterProjectID"?: string;
            /**
             * A reference to a ServiceAccount resource.
             */
            "serviceAccountRef": {
              /**
               * The name of the ServiceAccount resource being referred to.
               */
              "name": string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
        };
        /**
         * ProjectID project where secret is located
         */
        "projectID"?: string;
      };
      /**
       * Gitlab configures this store to sync secrets using Gitlab Variables provider
       */
      "gitlab"?: {
        /**
         * Auth configures how secret-manager authenticates with a GitLab instance.
         */
        "auth": {
          "SecretRef": {
            /**
             * AccessToken is used for authentication.
             */
            "accessToken"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
        };
        /**
         * ProjectID specifies a project where secrets are located.
         */
        "projectID"?: string;
        /**
         * URL configures the GitLab instance URL. Defaults to https://gitlab.com/.
         */
        "url"?: string;
      };
      /**
       * IBM configures this store to sync secrets using IBM Cloud provider
       */
      "ibm"?: {
        /**
         * Auth configures how secret-manager authenticates with the IBM secrets manager.
         */
        "auth": {
          "secretRef": {
            /**
             * The SecretAccessKey is used for authentication
             */
            "secretApiKeySecretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
        };
        /**
         * ServiceURL is the Endpoint URL that is specific to the Secrets Manager service instance
         */
        "serviceUrl"?: string;
      };
      /**
       * Kubernetes configures this store to sync secrets using a Kubernetes cluster provider
       */
      "kubernetes"?: {
        /**
         * Auth configures how secret-manager authenticates with a Kubernetes instance.
         */
        "auth": {
          /**
           * has both clientCert and clientKey as secretKeySelector
           */
          "cert"?: {
            /**
             * A reference to a specific 'key' within a Secret resource, In some instances, `key` is a required field.
             */
            "clientCert"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
            /**
             * A reference to a specific 'key' within a Secret resource, In some instances, `key` is a required field.
             */
            "clientKey"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
          /**
           * points to a service account that should be used for authentication
           */
          "serviceAccount"?: {
            /**
             * A reference to a ServiceAccount resource.
             */
            "serviceAccount"?: {
              /**
               * The name of the ServiceAccount resource being referred to.
               */
              "name": string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
          /**
           * use static token to authenticate with
           */
          "token"?: {
            /**
             * A reference to a specific 'key' within a Secret resource, In some instances, `key` is a required field.
             */
            "bearerToken"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
        };
        /**
         * Remote namespace to fetch the secrets from
         */
        "remoteNamespace"?: string;
        /**
         * configures the Kubernetes server Address.
         */
        "server"?: {
          /**
           * CABundle is a base64-encoded CA certificate
           */
          "caBundle"?: string;
          /**
           * see: https://external-secrets.io/v0.4.1/spec/#external-secrets.io/v1alpha1.CAProvider
           */
          "caProvider"?: {
            /**
             * The key the value inside of the provider type to use, only used with "Secret" type
             */
            "key"?: string;
            /**
             * The name of the object located at the provider type.
             */
            "name": string;
            /**
             * The namespace the Provider type is in.
             */
            "namespace"?: string;
            /**
             * The type of provider to use such as "Secret", or "ConfigMap".
             */
            "type": "Secret" | "ConfigMap";
          };
          /**
           * configures the Kubernetes server Address.
           */
          "url"?: string;
        };
      };
      /**
       * Oracle configures this store to sync secrets using Oracle Vault provider
       */
      "oracle"?: {
        /**
         * Auth configures how secret-manager authenticates with the Oracle Vault. If empty, use the instance principal, otherwise the user credentials specified in Auth.
         */
        "auth"?: {
          /**
           * SecretRef to pass through sensitive information.
           */
          "secretRef": {
            /**
             * Fingerprint is the fingerprint of the API private key.
             */
            "fingerprint": {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
            /**
             * PrivateKey is the user's API Signing Key in PEM format, used for authentication.
             */
            "privatekey": {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
          /**
           * Tenancy is the tenancy OCID where user is located.
           */
          "tenancy": string;
          /**
           * User is an access OCID specific to the account.
           */
          "user": string;
        };
        /**
         * Region is the region where vault is located.
         */
        "region": string;
        /**
         * Vault is the vault's OCID of the specific vault where secret is located.
         */
        "vault": string;
      };
      /**
       * Vault configures this store to sync secrets using Hashi provider
       */
      "vault"?: {
        /**
         * Auth configures how secret-manager authenticates with the Vault server.
         */
        "auth": {
          /**
           * AppRole authenticates with Vault using the App Role auth mechanism, with the role and secret stored in a Kubernetes Secret resource.
           */
          "appRole"?: {
            /**
             * Path where the App Role authentication backend is mounted in Vault, e.g: "approle"
             */
            "path": string;
            /**
             * RoleID configured in the App Role authentication backend when setting up the authentication backend in Vault.
             */
            "roleId": string;
            /**
             * Reference to a key in a Secret that contains the App Role secret used to authenticate with Vault. The `key` field must be specified and denotes which entry within the Secret resource is used as the app role secret.
             */
            "secretRef": {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
          /**
           * Cert authenticates with TLS Certificates by passing client certificate, private key and ca certificate Cert authentication method
           */
          "cert"?: {
            /**
             * ClientCert is a certificate to authenticate using the Cert Vault authentication method
             */
            "clientCert"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
            /**
             * SecretRef to a key in a Secret resource containing client private key to authenticate with Vault using the Cert authentication method
             */
            "secretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
          /**
           * Jwt authenticates with Vault by passing role and JWT token using the JWT/OIDC authentication method
           */
          "jwt"?: {
            /**
             * Optional ServiceAccountToken specifies the Kubernetes service account for which to request a token for with the `TokenRequest` API.
             */
            "kubernetesServiceAccountToken"?: {
              /**
               * Optional audiences field that will be used to request a temporary Kubernetes service account token for the service account referenced by `serviceAccountRef`. Defaults to a single audience `vault` it not specified.
               */
              "audiences"?: Array<string>;
              /**
               * Optional expiration time in seconds that will be used to request a temporary Kubernetes service account token for the service account referenced by `serviceAccountRef`. Defaults to 10 minutes.
               */
              "expirationSeconds"?: number;
              /**
               * Service account field containing the name of a kubernetes ServiceAccount.
               */
              "serviceAccountRef": {
                /**
                 * The name of the ServiceAccount resource being referred to.
                 */
                "name": string;
                /**
                 * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
                 */
                "namespace"?: string;
              };
            };
            /**
             * Path where the JWT authentication backend is mounted in Vault, e.g: "jwt"
             */
            "path": string;
            /**
             * Role is a JWT role to authenticate using the JWT/OIDC Vault authentication method
             */
            "role"?: string;
            /**
             * Optional SecretRef that refers to a key in a Secret resource containing JWT token to authenticate with Vault using the JWT/OIDC authentication method.
             */
            "secretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
          /**
           * Kubernetes authenticates with Vault by passing the ServiceAccount token stored in the named Secret resource to the Vault server.
           */
          "kubernetes"?: {
            /**
             * Path where the Kubernetes authentication backend is mounted in Vault, e.g: "kubernetes"
             */
            "mountPath": string;
            /**
             * A required field containing the Vault Role to assume. A Role binds a Kubernetes ServiceAccount with a set of Vault policies.
             */
            "role": string;
            /**
             * Optional secret field containing a Kubernetes ServiceAccount JWT used for authenticating with Vault. If a name is specified without a key, `token` is the default. If one is not specified, the one bound to the controller will be used.
             */
            "secretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
            /**
             * Optional service account field containing the name of a kubernetes ServiceAccount. If the service account is specified, the service account secret token JWT will be used for authenticating with Vault. If the service account selector is not supplied, the secretRef will be used instead.
             */
            "serviceAccountRef"?: {
              /**
               * The name of the ServiceAccount resource being referred to.
               */
              "name": string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
          };
          /**
           * Ldap authenticates with Vault by passing username/password pair using the LDAP authentication method
           */
          "ldap"?: {
            /**
             * Path where the LDAP authentication backend is mounted in Vault, e.g: "ldap"
             */
            "path": string;
            /**
             * SecretRef to a key in a Secret resource containing password for the LDAP user used to authenticate with Vault using the LDAP authentication method
             */
            "secretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * The name of the Secret resource being referred to.
               */
              "name"?: string;
              /**
               * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
               */
              "namespace"?: string;
            };
            /**
             * Username is a LDAP user name used to authenticate using the LDAP Vault authentication method
             */
            "username": string;
          };
          /**
           * TokenSecretRef authenticates with Vault by presenting a token.
           */
          "tokenSecretRef"?: {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * The name of the Secret resource being referred to.
             */
            "name"?: string;
            /**
             * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
             */
            "namespace"?: string;
          };
        };
        /**
         * PEM encoded CA bundle used to validate Vault server certificate. Only used if the Server URL is using HTTPS protocol. This parameter is ignored for plain HTTP protocol connection. If not set the system root certificates are used to validate the TLS connection.
         */
        "caBundle"?: string;
        /**
         * The provider for the CA bundle to use to validate Vault server certificate.
         */
        "caProvider"?: {
          /**
           * The key the value inside of the provider type to use, only used with "Secret" type
           */
          "key"?: string;
          /**
           * The name of the object located at the provider type.
           */
          "name": string;
          /**
           * The namespace the Provider type is in.
           */
          "namespace"?: string;
          /**
           * The type of provider to use such as "Secret", or "ConfigMap".
           */
          "type": "Secret" | "ConfigMap";
        };
        /**
         * ForwardInconsistent tells Vault to forward read-after-write requests to the Vault leader instead of simply retrying within a loop. This can increase performance if the option is enabled serverside. https://www.vaultproject.io/docs/configuration/replication#allow_forwarding_via_header
         */
        "forwardInconsistent"?: boolean;
        /**
         * Name of the vault namespace. Namespaces is a set of features within Vault Enterprise that allows Vault environments to support Secure Multi-tenancy. e.g: "ns1". More about namespaces can be found here https://www.vaultproject.io/docs/enterprise/namespaces
         */
        "namespace"?: string;
        /**
         * Path is the mount path of the Vault KV backend endpoint, e.g: "secret". The v2 KV secret engine version specific "/data" path suffix for fetching secrets from Vault is optional and will be appended if not present in specified path.
         */
        "path"?: string;
        /**
         * ReadYourWrites ensures isolated read-after-write semantics by providing discovered cluster replication states in each request. More information about eventual consistency in Vault can be found here https://www.vaultproject.io/docs/enterprise/consistency
         */
        "readYourWrites"?: boolean;
        /**
         * Server is the connection address for the Vault server, e.g: "https://vault.example.com:8200".
         */
        "server": string;
        /**
         * Version is the Vault KV secret engine version. This can be either "v1" or "v2". Version defaults to "v2".
         */
        "version"?: "v1" | "v2";
      };
      /**
       * Webhook configures this store to sync secrets using a generic templated webhook
       */
      "webhook"?: {
        /**
         * Body
         */
        "body"?: string;
        /**
         * PEM encoded CA bundle used to validate webhook server certificate. Only used if the Server URL is using HTTPS protocol. This parameter is ignored for plain HTTP protocol connection. If not set the system root certificates are used to validate the TLS connection.
         */
        "caBundle"?: string;
        /**
         * The provider for the CA bundle to use to validate webhook server certificate.
         */
        "caProvider"?: {
          /**
           * The key the value inside of the provider type to use, only used with "Secret" type
           */
          "key"?: string;
          /**
           * The name of the object located at the provider type.
           */
          "name": string;
          /**
           * The namespace the Provider type is in.
           */
          "namespace"?: string;
          /**
           * The type of provider to use such as "Secret", or "ConfigMap".
           */
          "type": "Secret" | "ConfigMap";
        };
        /**
         * Headers
         */
        "headers"?: {
          [key: string]: string;
        };
        /**
         * Webhook Method
         */
        "method"?: string;
        /**
         * Result formatting
         */
        "result": {
          /**
           * Json path of return value
           */
          "jsonPath"?: string;
        };
        /**
         * Secrets to fill in templates These secrets will be passed to the templating function as key value pairs under the given name
         */
        "secrets"?: Array<{
          /**
           * Name of this secret in templates
           */
          "name": string;
          /**
           * Secret ref to fill in credentials
           */
          "secretRef": {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * The name of the Secret resource being referred to.
             */
            "name"?: string;
            /**
             * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
             */
            "namespace"?: string;
          };
        }>;
        /**
         * Timeout
         */
        "timeout"?: string;
        /**
         * Webhook url to call
         */
        "url": string;
      };
      /**
       * YandexLockbox configures this store to sync secrets using Yandex Lockbox provider
       */
      "yandexlockbox"?: {
        /**
         * Yandex.Cloud API endpoint (e.g. 'api.cloud.yandex.net:443')
         */
        "apiEndpoint"?: string;
        /**
         * Auth defines the information necessary to authenticate against Yandex Lockbox
         */
        "auth": {
          /**
           * The authorized key used for authentication
           */
          "authorizedKeySecretRef"?: {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * The name of the Secret resource being referred to.
             */
            "name"?: string;
            /**
             * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
             */
            "namespace"?: string;
          };
        };
        /**
         * The provider for the CA bundle to use to validate Yandex.Cloud server certificate.
         */
        "caProvider"?: {
          /**
           * A reference to a specific 'key' within a Secret resource, In some instances, `key` is a required field.
           */
          "certSecretRef"?: {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * The name of the Secret resource being referred to.
             */
            "name"?: string;
            /**
             * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
             */
            "namespace"?: string;
          };
        };
      };
    };
    /**
     * Used to configure http retries if failed
     */
    "retrySettings"?: {
      "maxRetries"?: number;
      "retryInterval"?: string;
    };
  };
  /**
   * SecretStoreStatus defines the observed state of the SecretStore.
   */
  "status"?: {
    "conditions"?: Array<{
      "lastTransitionTime"?: string;
      "message"?: string;
      "reason"?: string;
      "status": string;
      "type": string;
    }>;
  };
}

/**
 * SecretStore represents a secure external location for storing secrets, which can be referenced as part of `storeRef` fields.
 */
export class SecretStore extends Model<ISecretStore> implements ISecretStore {
  "apiVersion": ISecretStore["apiVersion"];
  "kind": ISecretStore["kind"];
  "metadata"?: ISecretStore["metadata"];
  "spec"?: ISecretStore["spec"];
  "status"?: ISecretStore["status"];

static apiVersion: ISecretStore["apiVersion"] = "external-secrets.io/v1alpha1";
static kind: ISecretStore["kind"] = "SecretStore";
static is = createTypeMetaGuard<ISecretStore>(SecretStore);

constructor(data?: ModelData<ISecretStore>) {
  super({
    apiVersion: SecretStore.apiVersion,
    kind: SecretStore.kind,
    ...data
  } as ISecretStore);
}
}


setSchema(SecretStore, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
