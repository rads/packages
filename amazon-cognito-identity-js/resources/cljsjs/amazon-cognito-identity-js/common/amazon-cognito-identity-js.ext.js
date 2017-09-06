// Generated via http://jmmk.github.io/javascript-externs-generator/
//
// Load JavaScript (order matters):
// https://cdn.rawgit.com/aws/amazon-cognito-identity-js/v1.19.0/dist/aws-cognito-sdk.js
// https://cdn.rawgit.com/aws/amazon-cognito-identity-js/v1.19.0/dist/amazon-cognito-identity.js
//
// Extern:
// AWSCognito

var AWSCognito = {
  "CognitoIdentity": {
    "__super__": {
      "__super__": function () {},
      "_serviceMap": {
        "cognitoidentity": {},
        "cognitoidentityserviceprovider": {},
        "sts": {}
      },
      "addVersions": function () {},
      "defineMethods": function () {},
      "defineService": function () {},
      "defineServiceApi": function () {},
      "hasService": function () {}
    },
    "apiVersions": {},
    "serviceIdentifier": {},
    "services": {
      "2014-06-30": {}
    }
  },
  "CognitoIdentityCredentials": {
    "__super__": {
      "__super__": function () {}
    }
  },
  "CognitoIdentityServiceProvider": {
    "AuthenticationDetails": function () {},
    "AuthenticationHelper": function () {},
    "CognitoAccessToken": function () {},
    "CognitoIdToken": function () {},
    "CognitoRefreshToken": function () {},
    "CognitoUser": function () {},
    "CognitoUserAttribute": function () {},
    "CognitoUserPool": function () {},
    "CognitoUserSession": function () {},
    "DateHelper": function () {},
    "__esModule": {},
    "__super__": {
      "__super__": function () {},
      "_serviceMap": {
        "cognitoidentity": {},
        "cognitoidentityserviceprovider": {},
        "sts": {}
      },
      "addVersions": function () {},
      "defineMethods": function () {},
      "defineService": function () {},
      "defineServiceApi": function () {},
      "hasService": function () {}
    },
    "apiVersions": {},
    "serviceIdentifier": {},
    "services": {
      "2016-04-18": {}
    }
  },
  "Config": {
    "__super__": function () {}
  },
  "CredentialProviderChain": {
    "__super__": {
      "__super__": function () {}
    },
    "defaultProviders": {}
  },
  "Credentials": {
    "__super__": function () {}
  },
  "Endpoint": {
    "__super__": function () {}
  },
  "EventListeners": {
    "Core": {
      "CLOCK_SKEWED": function () {},
      "COMPUTE_SHA256": {
        "_isAsync": {}
      },
      "EXPIRED_SIGNATURE": function () {},
      "FINALIZE_ERROR": function () {},
      "HTTP_DATA": function () {},
      "HTTP_DONE": function () {},
      "HTTP_HEADERS": function () {},
      "INVALIDATE_CREDENTIALS": function () {},
      "REDIRECT": function () {},
      "RESET_RETRY_STATE": {
        "_isAsync": {}
      },
      "RESTART": function () {},
      "RETRY_CHECK": function () {},
      "SEND": {
        "_isAsync": {}
      },
      "SET_CONTENT_LENGTH": function () {},
      "SET_HTTP_HOST": function () {},
      "SIGN": {
        "_isAsync": {}
      },
      "VALIDATE_CREDENTIALS": {
        "_isAsync": {}
      },
      "VALIDATE_PARAMETERS": function () {},
      "VALIDATE_REGION": function () {},
      "VALIDATE_RESPONSE": function () {},
      "_events": {
        "afterBuild": {},
        "afterRetry": {},
        "httpData": {},
        "httpDone": {},
        "httpHeaders": {},
        "restart": {},
        "retry": {},
        "send": {},
        "sign": {},
        "validate": {},
        "validateResponse": {}
      },
      "addListener": function () {},
      "addListeners": function () {},
      "addNamedAsyncListener": function () {},
      "addNamedListener": function () {},
      "addNamedListeners": function () {},
      "callListeners": function () {},
      "constructor": {
        "__super__": function () {}
      },
      "emit": function () {},
      "listeners": function () {},
      "on": function () {},
      "onAsync": function () {},
      "removeAllListeners": function () {},
      "removeListener": function () {}
    },
    "CorePost": {
      "ENOTFOUND_ERROR": function () {},
      "EXTRACT_REQUEST_ID": function () {},
      "_events": {
        "extractData": {},
        "extractError": {},
        "httpError": {}
      },
      "addListener": function () {},
      "addListeners": function () {},
      "addNamedAsyncListener": function () {},
      "addNamedListener": function () {},
      "addNamedListeners": function () {},
      "callListeners": function () {},
      "constructor": {
        "__super__": function () {}
      },
      "emit": function () {},
      "listeners": function () {},
      "on": function () {},
      "onAsync": function () {},
      "removeAllListeners": function () {},
      "removeListener": function () {}
    },
    "Json": {
      "BUILD": function () {},
      "EXTRACT_DATA": function () {},
      "EXTRACT_ERROR": function () {},
      "_events": {
        "build": {},
        "extractData": {},
        "extractError": {}
      },
      "addListener": function () {},
      "addListeners": function () {},
      "addNamedAsyncListener": function () {},
      "addNamedListener": function () {},
      "addNamedListeners": function () {},
      "callListeners": function () {},
      "constructor": {
        "__super__": function () {}
      },
      "emit": function () {},
      "listeners": function () {},
      "on": function () {},
      "onAsync": function () {},
      "removeAllListeners": function () {},
      "removeListener": function () {}
    },
    "Logger": {
      "LOG_REQUEST": function () {},
      "_events": {
        "complete": {}
      },
      "addListener": function () {},
      "addListeners": function () {},
      "addNamedAsyncListener": function () {},
      "addNamedListener": function () {},
      "addNamedListeners": function () {},
      "callListeners": function () {},
      "constructor": {
        "__super__": function () {}
      },
      "emit": function () {},
      "listeners": function () {},
      "on": function () {},
      "onAsync": function () {},
      "removeAllListeners": function () {},
      "removeListener": function () {}
    },
    "Query": {
      "BUILD": function () {},
      "EXTRACT_DATA": function () {},
      "EXTRACT_ERROR": function () {},
      "_events": {
        "build": {},
        "extractData": {},
        "extractError": {}
      },
      "addListener": function () {},
      "addListeners": function () {},
      "addNamedAsyncListener": function () {},
      "addNamedListener": function () {},
      "addNamedListeners": function () {},
      "callListeners": function () {},
      "constructor": {
        "__super__": function () {}
      },
      "emit": function () {},
      "listeners": function () {},
      "on": function () {},
      "onAsync": function () {},
      "removeAllListeners": function () {},
      "removeListener": function () {}
    },
    "Rest": {
      "BUILD": function () {},
      "EXTRACT_DATA": function () {},
      "EXTRACT_ERROR": function () {},
      "_events": {
        "build": {},
        "extractData": {},
        "extractError": {}
      },
      "addListener": function () {},
      "addListeners": function () {},
      "addNamedAsyncListener": function () {},
      "addNamedListener": function () {},
      "addNamedListeners": function () {},
      "callListeners": function () {},
      "constructor": {
        "__super__": function () {}
      },
      "emit": function () {},
      "listeners": function () {},
      "on": function () {},
      "onAsync": function () {},
      "removeAllListeners": function () {},
      "removeListener": function () {}
    },
    "RestJson": {
      "BUILD": function () {},
      "EXTRACT_DATA": function () {},
      "EXTRACT_ERROR": function () {},
      "_events": {
        "build": {},
        "extractData": {},
        "extractError": {}
      },
      "addListener": function () {},
      "addListeners": function () {},
      "addNamedAsyncListener": function () {},
      "addNamedListener": function () {},
      "addNamedListeners": function () {},
      "callListeners": function () {},
      "constructor": {
        "__super__": function () {}
      },
      "emit": function () {},
      "listeners": function () {},
      "on": function () {},
      "onAsync": function () {},
      "removeAllListeners": function () {},
      "removeListener": function () {}
    },
    "RestXml": {
      "BUILD": function () {},
      "EXTRACT_DATA": function () {},
      "EXTRACT_ERROR": function () {},
      "_events": {
        "build": {},
        "extractData": {},
        "extractError": {}
      },
      "addListener": function () {},
      "addListeners": function () {},
      "addNamedAsyncListener": function () {},
      "addNamedListener": function () {},
      "addNamedListeners": function () {},
      "callListeners": function () {},
      "constructor": {
        "__super__": function () {}
      },
      "emit": function () {},
      "listeners": function () {},
      "on": function () {},
      "onAsync": function () {},
      "removeAllListeners": function () {},
      "removeListener": function () {}
    }
  },
  "HttpClient": {
    "__super__": function () {},
    "getInstance": function () {},
    "streamsApiVersion": {}
  },
  "HttpRequest": {
    "__super__": function () {}
  },
  "HttpResponse": {
    "__super__": function () {}
  },
  "JSON": {
    "Builder": function () {},
    "Parser": function () {}
  },
  "Model": {
    "Api": function () {},
    "Operation": function () {},
    "Paginator": function () {},
    "ResourceWaiter": function () {},
    "Shape": {
      "create": function () {},
      "normalizedTypes": {
        "bigdecimal": {},
        "biginteger": {},
        "blob": {},
        "character": {},
        "double": {},
        "long": {},
        "short": {}
      },
      "resolve": function () {},
      "shapes": {
        "Base64Shape": function () {},
        "BooleanShape": function () {},
        "ListShape": function () {},
        "MapShape": function () {},
        "StringShape": function () {},
        "StructureShape": function () {}
      },
      "types": {
        "base64": function () {},
        "binary": function () {},
        "boolean": function () {},
        "float": function () {},
        "integer": function () {},
        "list": function () {},
        "map": function () {},
        "string": function () {},
        "structure": function () {},
        "timestamp": function () {}
      }
    }
  },
  "ParamValidator": {
    "__super__": function () {}
  },
  "Protocol": {
    "Json": {
      "buildRequest": function () {},
      "extractData": function () {},
      "extractError": function () {}
    },
    "Query": {
      "buildRequest": function () {},
      "extractData": function () {},
      "extractError": function () {}
    },
    "Rest": {
      "buildRequest": function () {},
      "extractData": function () {},
      "extractError": function () {}
    },
    "RestJson": {
      "buildRequest": function () {},
      "extractData": function () {},
      "extractError": function () {}
    },
    "RestXml": {
      "buildRequest": function () {},
      "extractData": function () {},
      "extractError": function () {}
    }
  },
  "Request": {
    "__super__": function () {}
  },
  "ResourceWaiter": {
    "__super__": function () {}
  },
  "Response": {
    "__super__": function () {}
  },
  "SAMLCredentials": {
    "__super__": {
      "__super__": function () {}
    }
  },
  "STS": {
    "__super__": {
      "__super__": function () {},
      "_serviceMap": {
        "cognitoidentity": {},
        "cognitoidentityserviceprovider": {},
        "sts": {}
      },
      "addVersions": function () {},
      "defineMethods": function () {},
      "defineService": function () {},
      "defineServiceApi": function () {},
      "hasService": function () {}
    },
    "apiVersions": {},
    "serviceIdentifier": {},
    "services": {
      "2011-06-15": {}
    }
  },
  "SequentialExecutor": {
    "__super__": function () {}
  },
  "Service": {
    "__super__": function () {},
    "_serviceMap": {
      "cognitoidentity": {},
      "cognitoidentityserviceprovider": {},
      "sts": {}
    },
    "addVersions": function () {},
    "defineMethods": function () {},
    "defineService": function () {},
    "defineServiceApi": function () {},
    "hasService": function () {}
  },
  "Signers": {
    "Presign": {
      "__super__": function () {}
    },
    "RequestSigner": {
      "__super__": function () {},
      "getVersion": function () {}
    },
    "S3": {
      "__super__": {
        "__super__": function () {},
        "getVersion": function () {}
      }
    },
    "V2": {
      "__super__": {
        "__super__": function () {},
        "getVersion": function () {}
      }
    },
    "V3": {
      "__super__": {
        "__super__": function () {},
        "getVersion": function () {}
      }
    },
    "V3Https": {
      "__super__": {
        "__super__": {
          "__super__": function () {},
          "getVersion": function () {}
        }
      }
    },
    "V4": {
      "__super__": {
        "__super__": function () {},
        "getVersion": function () {}
      }
    }
  },
  "TemporaryCredentials": {
    "__super__": {
      "__super__": function () {}
    }
  },
  "VERSION": {},
  "WebIdentityCredentials": {
    "__super__": {
      "__super__": function () {}
    }
  },
  "XHRClient": {
    "__super__": function () {}
  },
  "XML": {
    "Builder": function () {},
    "Parser": function () {}
  },
  "apiLoader": {
    "services": {
      "cognitoidentity": {
        "2014-06-30": {
          "metadata": {
            "apiVersion": {},
            "endpointPrefix": {},
            "jsonVersion": {},
            "protocol": {},
            "serviceFullName": {},
            "signatureVersion": {},
            "targetPrefix": {}
          },
          "operations": {
            "CreateIdentityPool": {
              "input": {
                "members": {
                  "AllowUnauthenticatedIdentities": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "CognitoIdentityProviders": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "DeveloperProviderName": {
                    "closure_uid_969798409": {}
                  },
                  "IdentityPoolName": {
                    "closure_uid_969798409": {}
                  },
                  "OpenIdConnectProviderARNs": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "SamlProviderARNs": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "SupportedLoginProviders": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "shape": {}
              }
            },
            "DeleteIdentities": {
              "input": {
                "members": {
                  "IdentityIdsToDelete": {
                    "closure_uid_969798409": {},
                    "member": {
                      "closure_uid_969798409": {}
                    },
                    "type": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "UnprocessedIdentityIds": {
                    "closure_uid_969798409": {},
                    "member": {
                      "closure_uid_969798409": {},
                      "members": {
                        "ErrorCode": {
                          "closure_uid_969798409": {}
                        },
                        "IdentityId": {
                          "closure_uid_969798409": {}
                        },
                        "closure_uid_969798409": {}
                      },
                      "type": {}
                    },
                    "type": {}
                  }
                },
                "type": {}
              }
            },
            "DeleteIdentityPool": {
              "input": {
                "members": {
                  "IdentityPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              }
            },
            "DescribeIdentity": {
              "input": {
                "members": {
                  "IdentityId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "shape": {}
              }
            },
            "DescribeIdentityPool": {
              "input": {
                "members": {
                  "IdentityPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "shape": {}
              }
            },
            "GetCredentialsForIdentity": {
              "input": {
                "members": {
                  "CustomRoleArn": {
                    "closure_uid_969798409": {}
                  },
                  "IdentityId": {
                    "closure_uid_969798409": {}
                  },
                  "Logins": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "Credentials": {
                    "closure_uid_969798409": {},
                    "members": {
                      "AccessKeyId": {
                        "closure_uid_969798409": {}
                      },
                      "Expiration": {
                        "closure_uid_969798409": {},
                        "type": {}
                      },
                      "SecretKey": {
                        "closure_uid_969798409": {}
                      },
                      "SessionToken": {
                        "closure_uid_969798409": {}
                      },
                      "closure_uid_969798409": {}
                    },
                    "type": {}
                  },
                  "IdentityId": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "GetId": {
              "input": {
                "members": {
                  "AccountId": {
                    "closure_uid_969798409": {}
                  },
                  "IdentityPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Logins": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "IdentityId": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "GetIdentityPoolRoles": {
              "input": {
                "members": {
                  "IdentityPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "IdentityPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Roles": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "GetOpenIdToken": {
              "input": {
                "members": {
                  "IdentityId": {
                    "closure_uid_969798409": {}
                  },
                  "Logins": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "IdentityId": {
                    "closure_uid_969798409": {}
                  },
                  "Token": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "GetOpenIdTokenForDeveloperIdentity": {
              "input": {
                "members": {
                  "IdentityId": {
                    "closure_uid_969798409": {}
                  },
                  "IdentityPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Logins": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "TokenDuration": {
                    "closure_uid_969798409": {},
                    "type": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "IdentityId": {
                    "closure_uid_969798409": {}
                  },
                  "Token": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "ListIdentities": {
              "input": {
                "members": {
                  "HideDisabled": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "IdentityPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "MaxResults": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "NextToken": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "Identities": {
                    "closure_uid_969798409": {},
                    "member": {
                      "closure_uid_969798409": {},
                      "shape": {}
                    },
                    "type": {}
                  },
                  "IdentityPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "NextToken": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "ListIdentityPools": {
              "input": {
                "members": {
                  "MaxResults": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "NextToken": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "IdentityPools": {
                    "closure_uid_969798409": {},
                    "member": {
                      "closure_uid_969798409": {},
                      "members": {
                        "IdentityPoolId": {
                          "closure_uid_969798409": {}
                        },
                        "IdentityPoolName": {
                          "closure_uid_969798409": {}
                        },
                        "closure_uid_969798409": {}
                      },
                      "type": {}
                    },
                    "type": {}
                  },
                  "NextToken": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "LookupDeveloperIdentity": {
              "input": {
                "members": {
                  "DeveloperUserIdentifier": {
                    "closure_uid_969798409": {}
                  },
                  "IdentityId": {
                    "closure_uid_969798409": {}
                  },
                  "IdentityPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "MaxResults": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "NextToken": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "DeveloperUserIdentifierList": {
                    "closure_uid_969798409": {},
                    "member": {
                      "closure_uid_969798409": {}
                    },
                    "type": {}
                  },
                  "IdentityId": {
                    "closure_uid_969798409": {}
                  },
                  "NextToken": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "MergeDeveloperIdentities": {
              "input": {
                "members": {
                  "DestinationUserIdentifier": {
                    "closure_uid_969798409": {}
                  },
                  "DeveloperProviderName": {
                    "closure_uid_969798409": {}
                  },
                  "IdentityPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "SourceUserIdentifier": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "IdentityId": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "SetIdentityPoolRoles": {
              "input": {
                "members": {
                  "IdentityPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Roles": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              }
            },
            "UnlinkDeveloperIdentity": {
              "input": {
                "members": {
                  "DeveloperProviderName": {
                    "closure_uid_969798409": {}
                  },
                  "DeveloperUserIdentifier": {
                    "closure_uid_969798409": {}
                  },
                  "IdentityId": {
                    "closure_uid_969798409": {}
                  },
                  "IdentityPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              }
            },
            "UnlinkIdentity": {
              "input": {
                "members": {
                  "IdentityId": {
                    "closure_uid_969798409": {}
                  },
                  "Logins": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "LoginsToRemove": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              }
            },
            "UpdateIdentityPool": {
              "input": {
                "shape": {}
              },
              "output": {
                "shape": {}
              }
            }
          },
          "shapes": {
            "S17": {
              "key": {},
              "type": {},
              "value": {}
            },
            "S4": {
              "key": {},
              "type": {},
              "value": {}
            },
            "S8": {
              "member": {},
              "type": {}
            },
            "Sa": {
              "member": {
                "members": {
                  "ClientId": {
                    "closure_uid_969798409": {}
                  },
                  "ProviderName": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              },
              "type": {}
            },
            "Se": {
              "member": {},
              "type": {}
            },
            "Sf": {
              "members": {
                "AllowUnauthenticatedIdentities": {
                  "type": {}
                },
                "CognitoIdentityProviders": {
                  "shape": {}
                },
                "DeveloperProviderName": {},
                "IdentityPoolId": {},
                "IdentityPoolName": {},
                "OpenIdConnectProviderARNs": {
                  "shape": {}
                },
                "SamlProviderARNs": {
                  "shape": {}
                },
                "SupportedLoginProviders": {
                  "shape": {}
                }
              },
              "required": {},
              "type": {}
            },
            "Sq": {
              "members": {
                "CreationDate": {
                  "type": {}
                },
                "IdentityId": {},
                "LastModifiedDate": {
                  "type": {}
                },
                "Logins": {
                  "shape": {}
                }
              },
              "type": {}
            },
            "Sr": {
              "member": {},
              "type": {}
            },
            "Sv": {
              "key": {},
              "type": {},
              "value": {}
            }
          },
          "version": {}
        }
      },
      "cognitoidentityserviceprovider": {
        "2016-04-18": {
          "metadata": {
            "apiVersion": {},
            "endpointPrefix": {},
            "jsonVersion": {},
            "protocol": {},
            "serviceFullName": {},
            "signatureVersion": {},
            "targetPrefix": {}
          },
          "operations": {
            "AddCustomAttributes": {
              "input": {
                "members": {
                  "CustomAttributes": {
                    "closure_uid_969798409": {},
                    "member": {
                      "closure_uid_969798409": {},
                      "shape": {}
                    },
                    "type": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "AdminConfirmSignUp": {
              "input": {
                "members": {
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "AdminDeleteUser": {
              "input": {
                "members": {
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              }
            },
            "AdminDeleteUserAttributes": {
              "input": {
                "members": {
                  "UserAttributeNames": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "AdminDisableUser": {
              "input": {
                "members": {
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "AdminEnableUser": {
              "input": {
                "members": {
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "AdminForgetDevice": {
              "input": {
                "members": {
                  "DeviceKey": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              }
            },
            "AdminGetDevice": {
              "input": {
                "members": {
                  "DeviceKey": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "Device": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              }
            },
            "AdminGetUser": {
              "input": {
                "members": {
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "Enabled": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "MFAOptions": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "UserAttributes": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "UserCreateDate": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "UserLastModifiedDate": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "UserStatus": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              }
            },
            "AdminInitiateAuth": {
              "input": {
                "members": {
                  "AuthFlow": {
                    "closure_uid_969798409": {}
                  },
                  "AuthParameters": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ClientId": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ClientMetadata": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "AuthenticationResult": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ChallengeName": {
                    "closure_uid_969798409": {}
                  },
                  "ChallengeParameters": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Session": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "AdminListDevices": {
              "input": {
                "members": {
                  "Limit": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "PaginationToken": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "Devices": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "PaginationToken": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "AdminResetUserPassword": {
              "input": {
                "members": {
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "AdminRespondToAuthChallenge": {
              "input": {
                "members": {
                  "ChallengeName": {
                    "closure_uid_969798409": {}
                  },
                  "ChallengeResponses": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ClientId": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Session": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "AuthenticationResult": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ChallengeName": {
                    "closure_uid_969798409": {}
                  },
                  "ChallengeParameters": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Session": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "AdminSetUserSettings": {
              "input": {
                "members": {
                  "MFAOptions": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "AdminUpdateDeviceStatus": {
              "input": {
                "members": {
                  "DeviceKey": {
                    "closure_uid_969798409": {}
                  },
                  "DeviceRememberedStatus": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "AdminUpdateUserAttributes": {
              "input": {
                "members": {
                  "UserAttributes": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "AdminUserGlobalSignOut": {
              "input": {
                "members": {
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "ChangePassword": {
              "authtype": {},
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "PreviousPassword": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ProposedPassword": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "ConfirmDevice": {
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "DeviceKey": {
                    "closure_uid_969798409": {}
                  },
                  "DeviceName": {
                    "closure_uid_969798409": {}
                  },
                  "DeviceSecretVerifierConfig": {
                    "closure_uid_969798409": {},
                    "members": {
                      "PasswordVerifier": {
                        "closure_uid_969798409": {}
                      },
                      "Salt": {
                        "closure_uid_969798409": {}
                      },
                      "closure_uid_969798409": {}
                    },
                    "type": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "UserConfirmationNecessary": {
                    "closure_uid_969798409": {},
                    "type": {}
                  }
                },
                "type": {}
              }
            },
            "ConfirmForgotPassword": {
              "authtype": {},
              "input": {
                "members": {
                  "ClientId": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ConfirmationCode": {
                    "closure_uid_969798409": {}
                  },
                  "Password": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "SecretHash": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "ConfirmSignUp": {
              "authtype": {},
              "input": {
                "members": {
                  "ClientId": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ConfirmationCode": {
                    "closure_uid_969798409": {}
                  },
                  "ForceAliasCreation": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "SecretHash": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "CreateUserImportJob": {
              "input": {
                "members": {
                  "CloudWatchLogsRoleArn": {
                    "closure_uid_969798409": {}
                  },
                  "JobName": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "UserImportJob": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "CreateUserPool": {
              "input": {
                "members": {
                  "AliasAttributes": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "AutoVerifiedAttributes": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "DeviceConfiguration": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "EmailConfiguration": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "EmailVerificationMessage": {
                    "closure_uid_969798409": {}
                  },
                  "EmailVerificationSubject": {
                    "closure_uid_969798409": {}
                  },
                  "LambdaConfig": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "MfaConfiguration": {
                    "closure_uid_969798409": {}
                  },
                  "Policies": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "PoolName": {
                    "closure_uid_969798409": {}
                  },
                  "SmsAuthenticationMessage": {
                    "closure_uid_969798409": {}
                  },
                  "SmsConfiguration": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "SmsVerificationMessage": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "UserPool": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "CreateUserPoolClient": {
              "input": {
                "members": {
                  "ClientName": {
                    "closure_uid_969798409": {}
                  },
                  "ExplicitAuthFlows": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "GenerateSecret": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "ReadAttributes": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "RefreshTokenValidity": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "WriteAttributes": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "UserPoolClient": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "DeleteUser": {
              "authtype": {},
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "DeleteUserAttributes": {
              "authtype": {},
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "UserAttributeNames": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "DeleteUserPool": {
              "input": {
                "members": {
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              }
            },
            "DeleteUserPoolClient": {
              "input": {
                "members": {
                  "ClientId": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              }
            },
            "DescribeUserImportJob": {
              "input": {
                "members": {
                  "JobId": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "UserImportJob": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "DescribeUserPool": {
              "input": {
                "members": {
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "UserPool": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "DescribeUserPoolClient": {
              "input": {
                "members": {
                  "ClientId": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "UserPoolClient": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "ForgetDevice": {
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "DeviceKey": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              }
            },
            "ForgotPassword": {
              "authtype": {},
              "input": {
                "members": {
                  "ClientId": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "SecretHash": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "CodeDeliveryDetails": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "GetCSVHeader": {
              "input": {
                "members": {
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "CSVHeader": {
                    "closure_uid_969798409": {},
                    "member": {
                      "closure_uid_969798409": {}
                    },
                    "type": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "GetDevice": {
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "DeviceKey": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "Device": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              }
            },
            "GetUser": {
              "authtype": {},
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              },
              "output": {
                "members": {
                  "MFAOptions": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "UserAttributes": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              }
            },
            "GetUserAttributeVerificationCode": {
              "authtype": {},
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "AttributeName": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "CodeDeliveryDetails": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "GlobalSignOut": {
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "InitiateAuth": {
              "input": {
                "members": {
                  "AuthFlow": {
                    "closure_uid_969798409": {}
                  },
                  "AuthParameters": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ClientId": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ClientMetadata": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "AuthenticationResult": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ChallengeName": {
                    "closure_uid_969798409": {}
                  },
                  "ChallengeParameters": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Session": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "ListDevices": {
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Limit": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "PaginationToken": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "Devices": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "PaginationToken": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "ListUserImportJobs": {
              "input": {
                "members": {
                  "MaxResults": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "PaginationToken": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "PaginationToken": {
                    "closure_uid_969798409": {}
                  },
                  "UserImportJobs": {
                    "closure_uid_969798409": {},
                    "member": {
                      "closure_uid_969798409": {},
                      "shape": {}
                    },
                    "type": {}
                  }
                },
                "type": {}
              }
            },
            "ListUserPoolClients": {
              "input": {
                "members": {
                  "MaxResults": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "NextToken": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "NextToken": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolClients": {
                    "closure_uid_969798409": {},
                    "member": {
                      "closure_uid_969798409": {},
                      "members": {
                        "ClientId": {
                          "closure_uid_969798409": {},
                          "shape": {}
                        },
                        "ClientName": {
                          "closure_uid_969798409": {}
                        },
                        "UserPoolId": {
                          "closure_uid_969798409": {}
                        },
                        "closure_uid_969798409": {}
                      },
                      "type": {}
                    },
                    "type": {}
                  }
                },
                "type": {}
              }
            },
            "ListUserPools": {
              "input": {
                "members": {
                  "MaxResults": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "NextToken": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "NextToken": {
                    "closure_uid_969798409": {}
                  },
                  "UserPools": {
                    "closure_uid_969798409": {},
                    "member": {
                      "closure_uid_969798409": {},
                      "members": {
                        "CreationDate": {
                          "closure_uid_969798409": {},
                          "type": {}
                        },
                        "Id": {
                          "closure_uid_969798409": {}
                        },
                        "LambdaConfig": {
                          "closure_uid_969798409": {},
                          "shape": {}
                        },
                        "LastModifiedDate": {
                          "closure_uid_969798409": {},
                          "type": {}
                        },
                        "Name": {
                          "closure_uid_969798409": {}
                        },
                        "Status": {
                          "closure_uid_969798409": {}
                        },
                        "closure_uid_969798409": {}
                      },
                      "type": {}
                    },
                    "type": {}
                  }
                },
                "type": {}
              }
            },
            "ListUsers": {
              "input": {
                "members": {
                  "AttributesToGet": {
                    "closure_uid_969798409": {},
                    "member": {
                      "closure_uid_969798409": {}
                    },
                    "type": {}
                  },
                  "Filter": {
                    "closure_uid_969798409": {}
                  },
                  "Limit": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "PaginationToken": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "PaginationToken": {
                    "closure_uid_969798409": {}
                  },
                  "Users": {
                    "closure_uid_969798409": {},
                    "member": {
                      "closure_uid_969798409": {},
                      "members": {
                        "Attributes": {
                          "closure_uid_969798409": {},
                          "shape": {}
                        },
                        "Enabled": {
                          "closure_uid_969798409": {},
                          "type": {}
                        },
                        "UserCreateDate": {
                          "closure_uid_969798409": {},
                          "type": {}
                        },
                        "UserLastModifiedDate": {
                          "closure_uid_969798409": {},
                          "type": {}
                        },
                        "UserStatus": {
                          "closure_uid_969798409": {}
                        },
                        "Username": {
                          "closure_uid_969798409": {},
                          "shape": {}
                        },
                        "closure_uid_969798409": {}
                      },
                      "type": {}
                    },
                    "type": {}
                  }
                },
                "type": {}
              }
            },
            "ResendConfirmationCode": {
              "authtype": {},
              "input": {
                "members": {
                  "ClientId": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "SecretHash": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "CodeDeliveryDetails": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "RespondToAuthChallenge": {
              "input": {
                "members": {
                  "ChallengeName": {
                    "closure_uid_969798409": {}
                  },
                  "ChallengeResponses": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ClientId": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Session": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "AuthenticationResult": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ChallengeName": {
                    "closure_uid_969798409": {}
                  },
                  "ChallengeParameters": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Session": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "SetUserSettings": {
              "authtype": {},
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "MFAOptions": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "SignUp": {
              "authtype": {},
              "input": {
                "members": {
                  "ClientId": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Password": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "SecretHash": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "UserAttributes": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Username": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ValidationData": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "CodeDeliveryDetails": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "UserConfirmed": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "UserSub": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              }
            },
            "StartUserImportJob": {
              "input": {
                "members": {
                  "JobId": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "UserImportJob": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "StopUserImportJob": {
              "input": {
                "members": {
                  "JobId": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "UserImportJob": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "UpdateDeviceStatus": {
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "DeviceKey": {
                    "closure_uid_969798409": {}
                  },
                  "DeviceRememberedStatus": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "UpdateUserAttributes": {
              "authtype": {},
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "UserAttributes": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "CodeDeliveryDetailsList": {
                    "closure_uid_969798409": {},
                    "member": {
                      "closure_uid_969798409": {},
                      "shape": {}
                    },
                    "type": {}
                  }
                },
                "type": {}
              }
            },
            "UpdateUserPool": {
              "input": {
                "members": {
                  "AutoVerifiedAttributes": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "DeviceConfiguration": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "EmailConfiguration": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "EmailVerificationMessage": {
                    "closure_uid_969798409": {}
                  },
                  "EmailVerificationSubject": {
                    "closure_uid_969798409": {}
                  },
                  "LambdaConfig": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "MfaConfiguration": {
                    "closure_uid_969798409": {}
                  },
                  "Policies": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "SmsAuthenticationMessage": {
                    "closure_uid_969798409": {}
                  },
                  "SmsConfiguration": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "SmsVerificationMessage": {
                    "closure_uid_969798409": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            },
            "UpdateUserPoolClient": {
              "input": {
                "members": {
                  "ClientId": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ClientName": {
                    "closure_uid_969798409": {}
                  },
                  "ExplicitAuthFlows": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "ReadAttributes": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "RefreshTokenValidity": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "UserPoolId": {
                    "closure_uid_969798409": {}
                  },
                  "WriteAttributes": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "UserPoolClient": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "type": {}
              }
            },
            "VerifyUserAttribute": {
              "authtype": {},
              "input": {
                "members": {
                  "AccessToken": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "AttributeName": {
                    "closure_uid_969798409": {}
                  },
                  "Code": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {},
                "type": {}
              }
            }
          },
          "shapes": {
            "S10": {
              "member": {
                "members": {
                  "AttributeName": {
                    "closure_uid_969798409": {}
                  },
                  "DeliveryMedium": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              },
              "type": {}
            },
            "S14": {
              "sensitive": {},
              "type": {}
            },
            "S16": {
              "key": {},
              "type": {},
              "value": {}
            },
            "S17": {
              "key": {},
              "type": {},
              "value": {}
            },
            "S1b": {
              "key": {},
              "type": {},
              "value": {}
            },
            "S1c": {
              "members": {
                "AccessToken": {
                  "shape": {}
                },
                "ExpiresIn": {
                  "type": {}
                },
                "IdToken": {
                  "shape": {}
                },
                "NewDeviceMetadata": {
                  "members": {
                    "DeviceGroupKey": {
                      "closure_uid_969798409": {}
                    },
                    "DeviceKey": {
                      "closure_uid_969798409": {}
                    },
                    "closure_uid_969798409": {}
                  },
                  "type": {}
                },
                "RefreshToken": {
                  "shape": {}
                },
                "TokenType": {}
              },
              "type": {}
            },
            "S1d": {
              "sensitive": {},
              "type": {}
            },
            "S1k": {
              "member": {
                "shape": {}
              },
              "type": {}
            },
            "S1o": {
              "key": {},
              "type": {},
              "value": {}
            },
            "S20": {
              "sensitive": {},
              "type": {}
            },
            "S27": {
              "sensitive": {},
              "type": {}
            },
            "S2h": {
              "members": {
                "CloudWatchLogsRoleArn": {},
                "CompletionDate": {
                  "type": {}
                },
                "CompletionMessage": {},
                "CreationDate": {
                  "type": {}
                },
                "FailedUsers": {
                  "type": {}
                },
                "ImportedUsers": {
                  "type": {}
                },
                "JobId": {},
                "JobName": {},
                "PreSignedUrl": {},
                "SkippedUsers": {
                  "type": {}
                },
                "StartDate": {
                  "type": {}
                },
                "Status": {},
                "UserPoolId": {}
              },
              "type": {}
            },
            "S2p": {
              "members": {
                "PasswordPolicy": {
                  "members": {
                    "MinimumLength": {
                      "closure_uid_969798409": {},
                      "type": {}
                    },
                    "RequireLowercase": {
                      "closure_uid_969798409": {},
                      "type": {}
                    },
                    "RequireNumbers": {
                      "closure_uid_969798409": {},
                      "type": {}
                    },
                    "RequireSymbols": {
                      "closure_uid_969798409": {},
                      "type": {}
                    },
                    "RequireUppercase": {
                      "closure_uid_969798409": {},
                      "type": {}
                    },
                    "closure_uid_969798409": {}
                  },
                  "type": {}
                }
              },
              "type": {}
            },
            "S2s": {
              "members": {
                "CreateAuthChallenge": {},
                "CustomMessage": {},
                "DefineAuthChallenge": {},
                "PostAuthentication": {},
                "PostConfirmation": {},
                "PreAuthentication": {},
                "PreSignUp": {},
                "VerifyAuthChallengeResponse": {}
              },
              "type": {}
            },
            "S2t": {
              "member": {},
              "type": {}
            },
            "S2v": {
              "member": {},
              "type": {}
            },
            "S31": {
              "members": {
                "ChallengeRequiredOnNewDevice": {
                  "type": {}
                },
                "DeviceOnlyRememberedOnUserPrompt": {
                  "type": {}
                }
              },
              "type": {}
            },
            "S32": {
              "members": {
                "ReplyToEmailAddress": {},
                "SourceArn": {}
              },
              "type": {}
            },
            "S34": {
              "members": {
                "ExternalId": {},
                "SnsCallerArn": {}
              },
              "type": {}
            },
            "S36": {
              "members": {
                "AliasAttributes": {
                  "shape": {}
                },
                "AutoVerifiedAttributes": {
                  "shape": {}
                },
                "CreationDate": {
                  "type": {}
                },
                "DeviceConfiguration": {
                  "shape": {}
                },
                "EmailConfiguration": {
                  "shape": {}
                },
                "EmailConfigurationFailure": {},
                "EmailVerificationMessage": {},
                "EmailVerificationSubject": {},
                "EstimatedNumberOfUsers": {
                  "type": {}
                },
                "Id": {},
                "LambdaConfig": {
                  "shape": {}
                },
                "LastModifiedDate": {
                  "type": {}
                },
                "MfaConfiguration": {},
                "Name": {},
                "Policies": {
                  "shape": {}
                },
                "SchemaAttributes": {
                  "member": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "type": {}
                },
                "SmsAuthenticationMessage": {},
                "SmsConfiguration": {
                  "shape": {}
                },
                "SmsConfigurationFailure": {},
                "SmsVerificationMessage": {},
                "Status": {}
              },
              "type": {}
            },
            "S3d": {
              "member": {},
              "type": {}
            },
            "S3f": {
              "member": {},
              "type": {}
            },
            "S3i": {
              "members": {
                "ClientId": {
                  "shape": {}
                },
                "ClientName": {},
                "ClientSecret": {
                  "sensitive": {},
                  "type": {}
                },
                "CreationDate": {
                  "type": {}
                },
                "ExplicitAuthFlows": {
                  "shape": {}
                },
                "LastModifiedDate": {
                  "type": {}
                },
                "ReadAttributes": {
                  "shape": {}
                },
                "RefreshTokenValidity": {
                  "type": {}
                },
                "UserPoolId": {},
                "WriteAttributes": {
                  "shape": {}
                }
              },
              "type": {}
            },
            "S3y": {
              "members": {
                "AttributeName": {},
                "DeliveryMedium": {},
                "Destination": {}
              },
              "type": {}
            },
            "S4": {
              "members": {
                "AttributeDataType": {},
                "DeveloperOnlyAttribute": {
                  "type": {}
                },
                "Mutable": {
                  "type": {}
                },
                "Name": {},
                "NumberAttributeConstraints": {
                  "members": {
                    "MaxValue": {
                      "closure_uid_969798409": {}
                    },
                    "MinValue": {
                      "closure_uid_969798409": {}
                    },
                    "closure_uid_969798409": {}
                  },
                  "type": {}
                },
                "Required": {
                  "type": {}
                },
                "StringAttributeConstraints": {
                  "members": {
                    "MaxLength": {
                      "closure_uid_969798409": {}
                    },
                    "MinLength": {
                      "closure_uid_969798409": {}
                    },
                    "closure_uid_969798409": {}
                  },
                  "type": {}
                }
              },
              "type": {}
            },
            "Sd": {
              "sensitive": {},
              "type": {}
            },
            "Sh": {
              "member": {},
              "type": {}
            },
            "Ss": {
              "members": {
                "DeviceAttributes": {
                  "shape": {}
                },
                "DeviceCreateDate": {
                  "type": {}
                },
                "DeviceKey": {},
                "DeviceLastAuthenticatedDate": {
                  "type": {}
                },
                "DeviceLastModifiedDate": {
                  "type": {}
                }
              },
              "type": {}
            },
            "St": {
              "member": {
                "members": {
                  "Name": {
                    "closure_uid_969798409": {}
                  },
                  "Value": {
                    "closure_uid_969798409": {},
                    "sensitive": {},
                    "type": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "type": {}
            }
          },
          "version": {}
        }
      },
      "sts": {
        "2011-06-15": {
          "metadata": {
            "apiVersion": {},
            "endpointPrefix": {},
            "globalEndpoint": {},
            "protocol": {},
            "serviceAbbreviation": {},
            "serviceFullName": {},
            "signatureVersion": {},
            "xmlNamespace": {}
          },
          "operations": {
            "AssumeRole": {
              "input": {
                "members": {
                  "DurationSeconds": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "ExternalId": {
                    "closure_uid_969798409": {}
                  },
                  "Policy": {
                    "closure_uid_969798409": {}
                  },
                  "RoleArn": {
                    "closure_uid_969798409": {}
                  },
                  "RoleSessionName": {
                    "closure_uid_969798409": {}
                  },
                  "SerialNumber": {
                    "closure_uid_969798409": {}
                  },
                  "TokenCode": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "AssumedRoleUser": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Credentials": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "PackedPolicySize": {
                    "closure_uid_969798409": {},
                    "type": {}
                  }
                },
                "resultWrapper": {},
                "type": {}
              }
            },
            "AssumeRoleWithSAML": {
              "input": {
                "members": {
                  "DurationSeconds": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "Policy": {
                    "closure_uid_969798409": {}
                  },
                  "PrincipalArn": {
                    "closure_uid_969798409": {}
                  },
                  "RoleArn": {
                    "closure_uid_969798409": {}
                  },
                  "SAMLAssertion": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "AssumedRoleUser": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Audience": {
                    "closure_uid_969798409": {}
                  },
                  "Credentials": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Issuer": {
                    "closure_uid_969798409": {}
                  },
                  "NameQualifier": {
                    "closure_uid_969798409": {}
                  },
                  "PackedPolicySize": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "Subject": {
                    "closure_uid_969798409": {}
                  },
                  "SubjectType": {
                    "closure_uid_969798409": {}
                  }
                },
                "resultWrapper": {},
                "type": {}
              }
            },
            "AssumeRoleWithWebIdentity": {
              "input": {
                "members": {
                  "DurationSeconds": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "Policy": {
                    "closure_uid_969798409": {}
                  },
                  "ProviderId": {
                    "closure_uid_969798409": {}
                  },
                  "RoleArn": {
                    "closure_uid_969798409": {}
                  },
                  "RoleSessionName": {
                    "closure_uid_969798409": {}
                  },
                  "WebIdentityToken": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "AssumedRoleUser": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "Audience": {
                    "closure_uid_969798409": {}
                  },
                  "Credentials": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "PackedPolicySize": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "Provider": {
                    "closure_uid_969798409": {}
                  },
                  "SubjectFromWebIdentityToken": {
                    "closure_uid_969798409": {}
                  }
                },
                "resultWrapper": {},
                "type": {}
              }
            },
            "DecodeAuthorizationMessage": {
              "input": {
                "members": {
                  "EncodedMessage": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "DecodedMessage": {
                    "closure_uid_969798409": {}
                  }
                },
                "resultWrapper": {},
                "type": {}
              }
            },
            "GetCallerIdentity": {
              "input": {
                "members": {},
                "type": {}
              },
              "output": {
                "members": {
                  "Account": {
                    "closure_uid_969798409": {}
                  },
                  "Arn": {
                    "closure_uid_969798409": {}
                  },
                  "UserId": {
                    "closure_uid_969798409": {}
                  }
                },
                "resultWrapper": {},
                "type": {}
              }
            },
            "GetFederationToken": {
              "input": {
                "members": {
                  "DurationSeconds": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "Name": {
                    "closure_uid_969798409": {}
                  },
                  "Policy": {
                    "closure_uid_969798409": {}
                  }
                },
                "required": {},
                "type": {}
              },
              "output": {
                "members": {
                  "Credentials": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  },
                  "FederatedUser": {
                    "closure_uid_969798409": {},
                    "members": {
                      "Arn": {
                        "closure_uid_969798409": {}
                      },
                      "FederatedUserId": {
                        "closure_uid_969798409": {}
                      },
                      "closure_uid_969798409": {}
                    },
                    "required": {},
                    "type": {}
                  },
                  "PackedPolicySize": {
                    "closure_uid_969798409": {},
                    "type": {}
                  }
                },
                "resultWrapper": {},
                "type": {}
              }
            },
            "GetSessionToken": {
              "input": {
                "members": {
                  "DurationSeconds": {
                    "closure_uid_969798409": {},
                    "type": {}
                  },
                  "SerialNumber": {
                    "closure_uid_969798409": {}
                  },
                  "TokenCode": {
                    "closure_uid_969798409": {}
                  }
                },
                "type": {}
              },
              "output": {
                "members": {
                  "Credentials": {
                    "closure_uid_969798409": {},
                    "shape": {}
                  }
                },
                "resultWrapper": {},
                "type": {}
              }
            }
          },
          "shapes": {
            "Sa": {
              "members": {
                "AccessKeyId": {},
                "Expiration": {
                  "type": {}
                },
                "SecretAccessKey": {},
                "SessionToken": {}
              },
              "required": {},
              "type": {}
            },
            "Sf": {
              "members": {
                "Arn": {},
                "AssumedRoleId": {}
              },
              "required": {},
              "type": {}
            }
          },
          "version": {}
        }
      }
    }
  },
  "config": {
    "apiVersion": {},
    "apiVersions": {},
    "clear": function () {},
    "computeChecksums": {},
    "constructor": {
      "__super__": function () {}
    },
    "convertResponseTypes": {},
    "correctClockSkew": {},
    "credentialProvider": {},
    "credentials": {},
    "customUserAgent": {},
    "dynamoDbCrc32": {},
    "endpoint": {},
    "extractCredentials": function () {},
    "getCredentials": function () {},
    "httpOptions": {
      "timeout": {}
    },
    "keys": {
      "apiVersion": {},
      "apiVersions": {},
      "computeChecksums": {},
      "convertResponseTypes": {},
      "correctClockSkew": {},
      "credentialProvider": {},
      "credentials": {},
      "customUserAgent": {},
      "dynamoDbCrc32": {},
      "endpoint": {},
      "httpOptions": {
        "timeout": {}
      },
      "logger": {},
      "maxRedirects": {},
      "maxRetries": {},
      "paramValidation": {},
      "region": {},
      "retryDelayOptions": {
        "base": {}
      },
      "s3BucketEndpoint": {},
      "s3DisableBodySigning": {},
      "s3ForcePathStyle": {},
      "signatureCache": {},
      "signatureVersion": {},
      "sslEnabled": {},
      "systemClockOffset": {},
      "useAccelerateEndpoint": {}
    },
    "loadFromPath": function () {},
    "logger": {},
    "maxRedirects": {},
    "maxRetries": {},
    "paramValidation": {},
    "region": {},
    "retryDelayOptions": {
      "base": {}
    },
    "s3BucketEndpoint": {},
    "s3DisableBodySigning": {},
    "s3ForcePathStyle": {},
    "set": function () {},
    "setPromisesDependency": function () {},
    "signatureCache": {},
    "signatureVersion": {},
    "sslEnabled": {},
    "systemClockOffset": {},
    "update": function () {},
    "useAccelerateEndpoint": {}
  },
  "events": {
    "_events": {},
    "addListener": function () {},
    "addListeners": function () {},
    "addNamedAsyncListener": function () {},
    "addNamedListener": function () {},
    "addNamedListeners": function () {},
    "callListeners": function () {},
    "constructor": {
      "__super__": function () {}
    },
    "emit": function () {},
    "listeners": function () {},
    "on": function () {},
    "onAsync": function () {},
    "removeAllListeners": function () {},
    "removeListener": function () {}
  },
  "util": {
    "Buffer": {
      "TYPED_ARRAY_SUPPORT": {},
      "_augment": function () {},
      "alloc": function () {},
      "allocUnsafe": function () {},
      "allocUnsafeSlow": function () {},
      "byteLength": function () {},
      "compare": function () {},
      "concat": function () {},
      "from": function () {},
      "isBuffer": function () {},
      "isEncoding": function () {},
      "poolSize": {}
    },
    "abort": {},
    "addPromisesToRequests": function () {},
    "applyClockOffset": function () {},
    "arrayEach": function () {},
    "arraySliceFn": function () {},
    "base64": {
      "decode": function () {},
      "encode": function () {}
    },
    "buffer": {
      "concat": function () {},
      "toStream": function () {}
    },
    "calculateRetryDelay": function () {},
    "computeSha256": function () {},
    "copy": function () {},
    "crypto": {
      "crc32": function () {},
      "crc32Table": {},
      "createHash": function () {},
      "hash": function () {},
      "hmac": function () {},
      "lib": {
        "createCipher": function () {},
        "createCipheriv": function () {},
        "createCredentials": function () {},
        "createDecipher": function () {},
        "createDecipheriv": function () {},
        "createDiffieHellman": function () {},
        "createHash": function () {},
        "createHmac": function () {},
        "createSign": function () {},
        "createVerify": function () {},
        "pbkdf2": function () {},
        "randomBytes": function () {}
      },
      "md5": function () {},
      "sha256": function () {},
      "toHex": function () {}
    },
    "date": {
      "format": function () {},
      "from": function () {},
      "getDate": function () {},
      "iso8601": function () {},
      "parseTimestamp": function () {},
      "rfc822": function () {},
      "unixTimestamp": function () {}
    },
    "each": function () {},
    "engine": function () {},
    "error": function () {},
    "extractRequestId": function () {},
    "fn": {
      "makeAsync": function () {},
      "noop": function () {}
    },
    "handleRequestWithRetries": function () {},
    "hideProperties": function () {},
    "hoistPayloadMember": function () {},
    "inherit": function () {},
    "ini": {
      "parse": function () {}
    },
    "isBrowser": function () {},
    "isClockSkewed": function () {},
    "isDualstackAvailable": function () {},
    "isEmpty": function () {},
    "isNode": function () {},
    "isType": function () {},
    "memoizedProperty": function () {},
    "merge": function () {},
    "mixin": function () {},
    "property": function () {},
    "queryParamsToString": function () {},
    "queryStringParse": function () {},
    "querystring": {
      "decode": function () {},
      "encode": function () {},
      "parse": function () {},
      "stringify": function () {}
    },
    "readFileSync": function () {},
    "string": {
      "byteLength": function () {},
      "lowerFirst": function () {},
      "upperFirst": function () {}
    },
    "typeName": function () {},
    "update": function () {},
    "uriEscape": function () {},
    "uriEscapePath": function () {},
    "url": {
      "Url": function () {},
      "format": function () {},
      "parse": function () {},
      "resolve": function () {},
      "resolveObject": function () {}
    },
    "urlFormat": function () {},
    "urlParse": function () {},
    "userAgent": function () {}
  }
};
AWSCognito.CognitoIdentity.prototype = {
  "addAllRequestListeners": function () {},
  "api": function () {},
  "clockSkewError": function () {},
  "constructor": function () {},
  "defaultRetryCount": function () {},
  "endpointFromTemplate": function () {},
  "expiredCredentialsError": function () {},
  "getCredentialsForIdentity": function () {},
  "getId": function () {},
  "getLatestServiceClass": function () {},
  "getLatestServiceVersion": function () {},
  "getOpenIdToken": function () {},
  "getSignerClass": function () {},
  "initialize": function () {},
  "loadServiceClass": function () {},
  "makeRequest": function () {},
  "makeUnauthenticatedRequest": function () {},
  "networkingError": function () {},
  "numRetries": function () {},
  "paginationConfig": function () {},
  "retryDelays": function () {},
  "retryableError": function () {},
  "serviceInterface": function () {},
  "setEndpoint": function () {},
  "setupRequestListeners": function () {},
  "successfulResponse": function () {},
  "throttledError": function () {},
  "validateService": function () {},
  "waitFor": function () {}
};
AWSCognito.CognitoIdentity.__super__.prototype = {
  "addAllRequestListeners": function () {},
  "api": function () {},
  "clockSkewError": function () {},
  "constructor": function () {},
  "defaultRetryCount": function () {},
  "endpointFromTemplate": function () {},
  "expiredCredentialsError": function () {},
  "getLatestServiceClass": function () {},
  "getLatestServiceVersion": function () {},
  "getSignerClass": function () {},
  "initialize": function () {},
  "loadServiceClass": function () {},
  "makeRequest": function () {},
  "makeUnauthenticatedRequest": function () {},
  "networkingError": function () {},
  "numRetries": function () {},
  "paginationConfig": function () {},
  "retryDelays": function () {},
  "retryableError": function () {},
  "serviceInterface": function () {},
  "setEndpoint": function () {},
  "setupRequestListeners": function () {},
  "successfulResponse": function () {},
  "throttledError": function () {},
  "validateService": function () {},
  "waitFor": function () {}
};
AWSCognito.CognitoIdentityCredentials.prototype = {
  "cacheId": function () {},
  "clearCachedId": function () {},
  "clearIdOnNotAuthorized": function () {},
  "constructor": function () {},
  "createClients": function () {},
  "expiryWindow": function () {},
  "get": function () {},
  "getCredentialsForIdentity": function () {},
  "getCredentialsFromSTS": function () {},
  "getId": function () {},
  "getStorage": function () {},
  "loadCachedId": function () {},
  "loadCredentials": function () {},
  "localStorageKey": function () {},
  "needsRefresh": function () {},
  "refresh": function () {},
  "setStorage": function () {},
  "storage": function () {}
};
AWSCognito.CognitoIdentityCredentials.__super__.prototype = {
  "constructor": function () {},
  "expiryWindow": function () {},
  "get": function () {},
  "needsRefresh": function () {},
  "refresh": function () {}
};
AWSCognito.CognitoIdentityServiceProvider.prototype = {
  "addAllRequestListeners": function () {},
  "api": function () {},
  "clockSkewError": function () {},
  "constructor": function () {},
  "defaultRetryCount": function () {},
  "endpointFromTemplate": function () {},
  "expiredCredentialsError": function () {},
  "getLatestServiceClass": function () {},
  "getLatestServiceVersion": function () {},
  "getSignerClass": function () {},
  "initialize": function () {},
  "loadServiceClass": function () {},
  "makeRequest": function () {},
  "makeUnauthenticatedRequest": function () {},
  "networkingError": function () {},
  "numRetries": function () {},
  "paginationConfig": function () {},
  "retryDelays": function () {},
  "retryableError": function () {},
  "serviceInterface": function () {},
  "setEndpoint": function () {},
  "setupRequestListeners": function () {},
  "successfulResponse": function () {},
  "throttledError": function () {},
  "validateService": function () {},
  "waitFor": function () {}
};
AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails.prototype = {
  "getPassword": function () {},
  "getUsername": function () {},
  "getValidationData": function () {}
};
AWSCognito.CognitoIdentityServiceProvider.AuthenticationHelper.prototype = {
  "calculateA": function () {},
  "calculateU": function () {},
  "computehkdf": function () {},
  "generateHashDevice": function () {},
  "generateRandomSmallA": function () {},
  "generateRandomString": function () {},
  "getLargeAValue": function () {},
  "getNewPasswordRequiredChallengeUserAttributePrefix": function () {},
  "getPasswordAuthenticationKey": function () {},
  "getRandomPassword": function () {},
  "getSaltDevices": function () {},
  "getSmallAValue": function () {},
  "getVerifierDevices": function () {},
  "hash": function () {},
  "hexHash": function () {},
  "padHex": function () {}
};
AWSCognito.CognitoIdentityServiceProvider.CognitoAccessToken.prototype = {
  "getExpiration": function () {},
  "getJwtToken": function () {}
};
AWSCognito.CognitoIdentityServiceProvider.CognitoIdToken.prototype = {
  "getExpiration": function () {},
  "getJwtToken": function () {}
};
AWSCognito.CognitoIdentityServiceProvider.CognitoRefreshToken.prototype = {
  "getToken": function () {}
};
AWSCognito.CognitoIdentityServiceProvider.CognitoUser.prototype = {
  "authenticateUser": function () {},
  "authenticateUserInternal": function () {},
  "cacheDeviceKeyAndPassword": function () {},
  "cacheTokens": function () {},
  "changePassword": function () {},
  "clearCachedDeviceKeyAndPassword": function () {},
  "clearCachedTokens": function () {},
  "completeNewPasswordChallenge": function () {},
  "confirmPassword": function () {},
  "confirmRegistration": function () {},
  "deleteAttributes": function () {},
  "deleteUser": function () {},
  "disableMFA": function () {},
  "enableMFA": function () {},
  "forgetDevice": function () {},
  "forgetSpecificDevice": function () {},
  "forgotPassword": function () {},
  "getAttributeVerificationCode": function () {},
  "getAuthenticationFlowType": function () {},
  "getCachedDeviceKeyAndPassword": function () {},
  "getCognitoUserSession": function () {},
  "getDevice": function () {},
  "getDeviceResponse": function () {},
  "getMFAOptions": function () {},
  "getSession": function () {},
  "getSignInUserSession": function () {},
  "getUserAttributes": function () {},
  "getUsername": function () {},
  "globalSignOut": function () {},
  "listDevices": function () {},
  "refreshSession": function () {},
  "resendConfirmationCode": function () {},
  "sendCustomChallengeAnswer": function () {},
  "sendMFACode": function () {},
  "setAuthenticationFlowType": function () {},
  "setDeviceStatusNotRemembered": function () {},
  "setDeviceStatusRemembered": function () {},
  "signOut": function () {},
  "updateAttributes": function () {},
  "verifyAttribute": function () {}
};
AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute.prototype = {
  "getName": function () {},
  "getValue": function () {},
  "setName": function () {},
  "setValue": function () {},
  "toJSON": function () {},
  "toString": function () {}
};
AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool.prototype = {
  "getClientId": function () {},
  "getCurrentUser": function () {},
  "getUserPoolId": function () {},
  "signUp": function () {}
};
AWSCognito.CognitoIdentityServiceProvider.CognitoUserSession.prototype = {
  "getAccessToken": function () {},
  "getIdToken": function () {},
  "getRefreshToken": function () {},
  "isValid": function () {}
};
AWSCognito.CognitoIdentityServiceProvider.DateHelper.prototype = {
  "getNowString": function () {}
};
AWSCognito.CognitoIdentityServiceProvider.__super__.prototype = {
  "addAllRequestListeners": function () {},
  "api": function () {},
  "clockSkewError": function () {},
  "constructor": function () {},
  "defaultRetryCount": function () {},
  "endpointFromTemplate": function () {},
  "expiredCredentialsError": function () {},
  "getLatestServiceClass": function () {},
  "getLatestServiceVersion": function () {},
  "getSignerClass": function () {},
  "initialize": function () {},
  "loadServiceClass": function () {},
  "makeRequest": function () {},
  "makeUnauthenticatedRequest": function () {},
  "networkingError": function () {},
  "numRetries": function () {},
  "paginationConfig": function () {},
  "retryDelays": function () {},
  "retryableError": function () {},
  "serviceInterface": function () {},
  "setEndpoint": function () {},
  "setupRequestListeners": function () {},
  "successfulResponse": function () {},
  "throttledError": function () {},
  "validateService": function () {},
  "waitFor": function () {}
};
AWSCognito.Config.prototype = {
  "clear": function () {},
  "constructor": function () {},
  "extractCredentials": function () {},
  "getCredentials": function () {},
  "keys": function () {},
  "loadFromPath": function () {},
  "set": function () {},
  "setPromisesDependency": function () {},
  "update": function () {}
};
AWSCognito.CredentialProviderChain.prototype = {
  "constructor": function () {},
  "expiryWindow": function () {},
  "get": function () {},
  "needsRefresh": function () {},
  "refresh": function () {},
  "resolve": function () {}
};
AWSCognito.CredentialProviderChain.__super__.prototype = {
  "constructor": function () {},
  "expiryWindow": function () {},
  "get": function () {},
  "needsRefresh": function () {},
  "refresh": function () {}
};
AWSCognito.Credentials.prototype = {
  "constructor": function () {},
  "expiryWindow": function () {},
  "get": function () {},
  "needsRefresh": function () {},
  "refresh": function () {}
};
AWSCognito.Endpoint.prototype = {
  "constructor": function () {}
};
AWSCognito.EventListeners.Core.constructor.prototype = {
  "addListener": function () {},
  "addListeners": function () {},
  "addNamedAsyncListener": function () {},
  "addNamedListener": function () {},
  "addNamedListeners": function () {},
  "callListeners": function () {},
  "constructor": function () {},
  "emit": function () {},
  "listeners": function () {},
  "on": function () {},
  "onAsync": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {}
};
AWSCognito.EventListeners.CorePost.constructor.prototype = {
  "addListener": function () {},
  "addListeners": function () {},
  "addNamedAsyncListener": function () {},
  "addNamedListener": function () {},
  "addNamedListeners": function () {},
  "callListeners": function () {},
  "constructor": function () {},
  "emit": function () {},
  "listeners": function () {},
  "on": function () {},
  "onAsync": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {}
};
AWSCognito.EventListeners.Json.constructor.prototype = {
  "addListener": function () {},
  "addListeners": function () {},
  "addNamedAsyncListener": function () {},
  "addNamedListener": function () {},
  "addNamedListeners": function () {},
  "callListeners": function () {},
  "constructor": function () {},
  "emit": function () {},
  "listeners": function () {},
  "on": function () {},
  "onAsync": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {}
};
AWSCognito.EventListeners.Logger.constructor.prototype = {
  "addListener": function () {},
  "addListeners": function () {},
  "addNamedAsyncListener": function () {},
  "addNamedListener": function () {},
  "addNamedListeners": function () {},
  "callListeners": function () {},
  "constructor": function () {},
  "emit": function () {},
  "listeners": function () {},
  "on": function () {},
  "onAsync": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {}
};
AWSCognito.EventListeners.Query.constructor.prototype = {
  "addListener": function () {},
  "addListeners": function () {},
  "addNamedAsyncListener": function () {},
  "addNamedListener": function () {},
  "addNamedListeners": function () {},
  "callListeners": function () {},
  "constructor": function () {},
  "emit": function () {},
  "listeners": function () {},
  "on": function () {},
  "onAsync": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {}
};
AWSCognito.EventListeners.Rest.constructor.prototype = {
  "addListener": function () {},
  "addListeners": function () {},
  "addNamedAsyncListener": function () {},
  "addNamedListener": function () {},
  "addNamedListeners": function () {},
  "callListeners": function () {},
  "constructor": function () {},
  "emit": function () {},
  "listeners": function () {},
  "on": function () {},
  "onAsync": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {}
};
AWSCognito.EventListeners.RestJson.constructor.prototype = {
  "addListener": function () {},
  "addListeners": function () {},
  "addNamedAsyncListener": function () {},
  "addNamedListener": function () {},
  "addNamedListeners": function () {},
  "callListeners": function () {},
  "constructor": function () {},
  "emit": function () {},
  "listeners": function () {},
  "on": function () {},
  "onAsync": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {}
};
AWSCognito.EventListeners.RestXml.constructor.prototype = {
  "addListener": function () {},
  "addListeners": function () {},
  "addNamedAsyncListener": function () {},
  "addNamedListener": function () {},
  "addNamedListeners": function () {},
  "callListeners": function () {},
  "constructor": function () {},
  "emit": function () {},
  "listeners": function () {},
  "on": function () {},
  "onAsync": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {}
};
AWSCognito.HttpClient.prototype = {
  "constructor": function () {},
  "finishRequest": function () {},
  "handleRequest": function () {},
  "parseHeaders": function () {}
};
AWSCognito.HttpRequest.prototype = {
  "constructor": function () {},
  "pathname": function () {},
  "search": function () {},
  "setUserAgent": function () {}
};
AWSCognito.HttpResponse.prototype = {
  "constructor": function () {},
  "createUnbufferedStream": function () {}
};
AWSCognito.JSON.Builder.prototype = {
  "build": function () {}
};
AWSCognito.JSON.Parser.prototype = {
  "parse": function () {}
};
AWSCognito.ParamValidator.prototype = {
  "constructor": function () {},
  "fail": function () {},
  "validate": function () {},
  "validateEnum": function () {},
  "validateList": function () {},
  "validateMap": function () {},
  "validateMember": function () {},
  "validateNumber": function () {},
  "validatePattern": function () {},
  "validatePayload": function () {},
  "validateRange": function () {},
  "validateScalar": function () {},
  "validateString": function () {},
  "validateStructure": function () {},
  "validateType": function () {}
};
AWSCognito.Request.prototype = {
  "abort": function () {},
  "addListener": function () {},
  "addListeners": function () {},
  "addNamedAsyncListener": function () {},
  "addNamedListener": function () {},
  "addNamedListeners": function () {},
  "build": function () {},
  "buildAsGet": function () {},
  "callListeners": function () {},
  "constructor": function () {},
  "createReadStream": function () {},
  "eachItem": function () {},
  "eachPage": function () {},
  "emit": function () {},
  "emitEvent": function () {},
  "eventParameters": function () {},
  "haltHandlersOnError": function () {},
  "isPageable": function () {},
  "isPresigned": function () {},
  "listeners": function () {},
  "on": function () {},
  "onAsync": function () {},
  "presign": function () {},
  "promise": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "runTo": function () {},
  "send": function () {},
  "toGet": function () {},
  "toUnauthenticated": function () {}
};
AWSCognito.ResourceWaiter.prototype = {
  "config": function () {},
  "constructor": function () {},
  "listeners": function () {},
  "loadWaiterConfig": function () {},
  "matchers": function () {},
  "service": function () {},
  "setError": function () {},
  "setSuccess": function () {},
  "state": function () {},
  "wait": function () {}
};
AWSCognito.Response.prototype = {
  "cacheNextPageTokens": function () {},
  "constructor": function () {},
  "hasNextPage": function () {},
  "nextPage": function () {}
};
AWSCognito.SAMLCredentials.prototype = {
  "constructor": function () {},
  "createClients": function () {},
  "expiryWindow": function () {},
  "get": function () {},
  "needsRefresh": function () {},
  "refresh": function () {}
};
AWSCognito.SAMLCredentials.__super__.prototype = {
  "constructor": function () {},
  "expiryWindow": function () {},
  "get": function () {},
  "needsRefresh": function () {},
  "refresh": function () {}
};
AWSCognito.STS.prototype = {
  "addAllRequestListeners": function () {},
  "api": function () {},
  "assumeRoleWithSAML": function () {},
  "assumeRoleWithWebIdentity": function () {},
  "clockSkewError": function () {},
  "constructor": function () {},
  "credentialsFrom": function () {},
  "defaultRetryCount": function () {},
  "endpointFromTemplate": function () {},
  "expiredCredentialsError": function () {},
  "getLatestServiceClass": function () {},
  "getLatestServiceVersion": function () {},
  "getSignerClass": function () {},
  "initialize": function () {},
  "loadServiceClass": function () {},
  "makeRequest": function () {},
  "makeUnauthenticatedRequest": function () {},
  "networkingError": function () {},
  "numRetries": function () {},
  "paginationConfig": function () {},
  "retryDelays": function () {},
  "retryableError": function () {},
  "serviceInterface": function () {},
  "setEndpoint": function () {},
  "setupRequestListeners": function () {},
  "successfulResponse": function () {},
  "throttledError": function () {},
  "validateService": function () {},
  "waitFor": function () {}
};
AWSCognito.STS.__super__.prototype = {
  "addAllRequestListeners": function () {},
  "api": function () {},
  "clockSkewError": function () {},
  "constructor": function () {},
  "defaultRetryCount": function () {},
  "endpointFromTemplate": function () {},
  "expiredCredentialsError": function () {},
  "getLatestServiceClass": function () {},
  "getLatestServiceVersion": function () {},
  "getSignerClass": function () {},
  "initialize": function () {},
  "loadServiceClass": function () {},
  "makeRequest": function () {},
  "makeUnauthenticatedRequest": function () {},
  "networkingError": function () {},
  "numRetries": function () {},
  "paginationConfig": function () {},
  "retryDelays": function () {},
  "retryableError": function () {},
  "serviceInterface": function () {},
  "setEndpoint": function () {},
  "setupRequestListeners": function () {},
  "successfulResponse": function () {},
  "throttledError": function () {},
  "validateService": function () {},
  "waitFor": function () {}
};
AWSCognito.SequentialExecutor.prototype = {
  "addListener": function () {},
  "addListeners": function () {},
  "addNamedAsyncListener": function () {},
  "addNamedListener": function () {},
  "addNamedListeners": function () {},
  "callListeners": function () {},
  "constructor": function () {},
  "emit": function () {},
  "listeners": function () {},
  "on": function () {},
  "onAsync": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {}
};
AWSCognito.Service.prototype = {
  "addAllRequestListeners": function () {},
  "api": function () {},
  "clockSkewError": function () {},
  "constructor": function () {},
  "defaultRetryCount": function () {},
  "endpointFromTemplate": function () {},
  "expiredCredentialsError": function () {},
  "getLatestServiceClass": function () {},
  "getLatestServiceVersion": function () {},
  "getSignerClass": function () {},
  "initialize": function () {},
  "loadServiceClass": function () {},
  "makeRequest": function () {},
  "makeUnauthenticatedRequest": function () {},
  "networkingError": function () {},
  "numRetries": function () {},
  "paginationConfig": function () {},
  "retryDelays": function () {},
  "retryableError": function () {},
  "serviceInterface": function () {},
  "setEndpoint": function () {},
  "setupRequestListeners": function () {},
  "successfulResponse": function () {},
  "throttledError": function () {},
  "validateService": function () {},
  "waitFor": function () {}
};
AWSCognito.Signers.Presign.prototype = {
  "constructor": function () {},
  "sign": function () {}
};
AWSCognito.Signers.RequestSigner.prototype = {
  "constructor": function () {},
  "getServiceClientId": function () {},
  "setServiceClientId": function () {}
};
AWSCognito.Signers.S3.prototype = {
  "addAuthorization": function () {},
  "canonicalizedAmzHeaders": function () {},
  "canonicalizedResource": function () {},
  "constructor": function () {},
  "getServiceClientId": function () {},
  "responseHeaders": function () {},
  "setServiceClientId": function () {},
  "sign": function () {},
  "stringToSign": function () {},
  "subResources": function () {}
};
AWSCognito.Signers.S3.__super__.prototype = {
  "constructor": function () {},
  "getServiceClientId": function () {},
  "setServiceClientId": function () {}
};
AWSCognito.Signers.V2.prototype = {
  "addAuthorization": function () {},
  "constructor": function () {},
  "getServiceClientId": function () {},
  "setServiceClientId": function () {},
  "signature": function () {},
  "stringToSign": function () {}
};
AWSCognito.Signers.V2.__super__.prototype = {
  "constructor": function () {},
  "getServiceClientId": function () {},
  "setServiceClientId": function () {}
};
AWSCognito.Signers.V3.prototype = {
  "addAuthorization": function () {},
  "authorization": function () {},
  "canonicalHeaders": function () {},
  "constructor": function () {},
  "getServiceClientId": function () {},
  "headersToSign": function () {},
  "setServiceClientId": function () {},
  "signature": function () {},
  "signedHeaders": function () {},
  "stringToSign": function () {}
};
AWSCognito.Signers.V3.__super__.prototype = {
  "constructor": function () {},
  "getServiceClientId": function () {},
  "setServiceClientId": function () {}
};
AWSCognito.Signers.V3Https.prototype = {
  "addAuthorization": function () {},
  "authorization": function () {},
  "canonicalHeaders": function () {},
  "constructor": function () {},
  "getServiceClientId": function () {},
  "headersToSign": function () {},
  "setServiceClientId": function () {},
  "signature": function () {},
  "signedHeaders": function () {},
  "stringToSign": function () {}
};
AWSCognito.Signers.V3Https.__super__.prototype = {
  "addAuthorization": function () {},
  "authorization": function () {},
  "canonicalHeaders": function () {},
  "constructor": function () {},
  "getServiceClientId": function () {},
  "headersToSign": function () {},
  "setServiceClientId": function () {},
  "signature": function () {},
  "signedHeaders": function () {},
  "stringToSign": function () {}
};
AWSCognito.Signers.V3Https.__super__.__super__.prototype = {
  "constructor": function () {},
  "getServiceClientId": function () {},
  "setServiceClientId": function () {}
};
AWSCognito.Signers.V4.prototype = {
  "addAuthorization": function () {},
  "addHeaders": function () {},
  "algorithm": function () {},
  "authorization": function () {},
  "canonicalHeaderValues": function () {},
  "canonicalHeaders": function () {},
  "canonicalString": function () {},
  "constructor": function () {},
  "credentialString": function () {},
  "getServiceClientId": function () {},
  "hexEncodedBodyHash": function () {},
  "hexEncodedHash": function () {},
  "isPresigned": function () {},
  "isSignableHeader": function () {},
  "setServiceClientId": function () {},
  "signature": function () {},
  "signedHeaders": function () {},
  "stringToSign": function () {},
  "unsignableHeaders": function () {},
  "updateForPresigned": function () {}
};
AWSCognito.Signers.V4.__super__.prototype = {
  "constructor": function () {},
  "getServiceClientId": function () {},
  "setServiceClientId": function () {}
};
AWSCognito.TemporaryCredentials.prototype = {
  "constructor": function () {},
  "createClients": function () {},
  "expiryWindow": function () {},
  "get": function () {},
  "loadMasterCredentials": function () {},
  "needsRefresh": function () {},
  "refresh": function () {}
};
AWSCognito.TemporaryCredentials.__super__.prototype = {
  "constructor": function () {},
  "expiryWindow": function () {},
  "get": function () {},
  "needsRefresh": function () {},
  "refresh": function () {}
};
AWSCognito.WebIdentityCredentials.prototype = {
  "constructor": function () {},
  "createClients": function () {},
  "expiryWindow": function () {},
  "get": function () {},
  "needsRefresh": function () {},
  "refresh": function () {}
};
AWSCognito.WebIdentityCredentials.__super__.prototype = {
  "constructor": function () {},
  "expiryWindow": function () {},
  "get": function () {},
  "needsRefresh": function () {},
  "refresh": function () {}
};
AWSCognito.XHRClient.prototype = {
  "constructor": function () {},
  "finishRequest": function () {},
  "handleRequest": function () {},
  "parseHeaders": function () {}
};
AWSCognito.XML.Builder.prototype = {
  "toXML": function () {}
};
AWSCognito.XML.Parser.prototype = {
  "parse": function () {}
};
AWSCognito.config.constructor.prototype = {
  "clear": function () {},
  "constructor": function () {},
  "extractCredentials": function () {},
  "getCredentials": function () {},
  "keys": function () {},
  "loadFromPath": function () {},
  "set": function () {},
  "setPromisesDependency": function () {},
  "update": function () {}
};
AWSCognito.events.constructor.prototype = {
  "addListener": function () {},
  "addListeners": function () {},
  "addNamedAsyncListener": function () {},
  "addNamedListener": function () {},
  "addNamedListeners": function () {},
  "callListeners": function () {},
  "constructor": function () {},
  "emit": function () {},
  "listeners": function () {},
  "on": function () {},
  "onAsync": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {}
};
AWSCognito.util.Buffer.prototype = {
  "_isBuffer": function () {},
  "compare": function () {},
  "copy": function () {},
  "equals": function () {},
  "fill": function () {},
  "includes": function () {},
  "indexOf": function () {},
  "inspect": function () {},
  "lastIndexOf": function () {},
  "readDoubleBE": function () {},
  "readDoubleLE": function () {},
  "readFloatBE": function () {},
  "readFloatLE": function () {},
  "readInt16BE": function () {},
  "readInt16LE": function () {},
  "readInt32BE": function () {},
  "readInt32LE": function () {},
  "readInt8": function () {},
  "readIntBE": function () {},
  "readIntLE": function () {},
  "readUInt16BE": function () {},
  "readUInt16LE": function () {},
  "readUInt32BE": function () {},
  "readUInt32LE": function () {},
  "readUInt8": function () {},
  "readUIntBE": function () {},
  "readUIntLE": function () {},
  "slice": function () {},
  "swap16": function () {},
  "swap32": function () {},
  "swap64": function () {},
  "toJSON": function () {},
  "toString": function () {},
  "write": function () {},
  "writeDoubleBE": function () {},
  "writeDoubleLE": function () {},
  "writeFloatBE": function () {},
  "writeFloatLE": function () {},
  "writeInt16BE": function () {},
  "writeInt16LE": function () {},
  "writeInt32BE": function () {},
  "writeInt32LE": function () {},
  "writeInt8": function () {},
  "writeIntBE": function () {},
  "writeIntLE": function () {},
  "writeUInt16BE": function () {},
  "writeUInt16LE": function () {},
  "writeUInt32BE": function () {},
  "writeUInt32LE": function () {},
  "writeUInt8": function () {},
  "writeUIntBE": function () {},
  "writeUIntLE": function () {}
};
AWSCognito.util.url.Url.prototype = {
  "format": function () {},
  "parse": function () {},
  "parseHost": function () {},
  "resolve": function () {},
  "resolveObject": function () {}
};