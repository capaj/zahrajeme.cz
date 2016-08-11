SystemJS.config({
    devConfig: {
        "map": {
            "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
            "core-js": "npm:core-js@2.4.1",
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.10"
        },
        "packages": {
            "npm:babel-helper-builder-react-jsx@6.9.0": {
                "map": {
                    "babel-runtime": "npm:babel-runtime@6.11.6",
                    "babel-types": "npm:babel-types@6.13.0",
                    "esutils": "npm:esutils@2.0.2",
                    "lodash": "npm:lodash@4.14.1"
                }
            },
            "npm:babel-messages@6.8.0": {
                "map": {
                    "babel-runtime": "npm:babel-runtime@6.11.6"
                }
            },
            "npm:babel-plugin-transform-react-jsx@6.8.0": {
                "map": {
                    "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.9.0",
                    "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.13.0",
                    "babel-runtime": "npm:babel-runtime@6.11.6"
                }
            },
            "npm:chalk@1.1.3": {
                "map": {
                    "ansi-styles": "npm:ansi-styles@2.2.1",
                    "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
                    "has-ansi": "npm:has-ansi@2.0.0",
                    "strip-ansi": "npm:strip-ansi@3.0.1",
                    "supports-color": "npm:supports-color@2.0.0"
                }
            },
            "npm:has-ansi@2.0.0": {
                "map": {
                    "ansi-regex": "npm:ansi-regex@2.0.0"
                }
            },
            "npm:strip-ansi@3.0.1": {
                "map": {
                    "ansi-regex": "npm:ansi-regex@2.0.0"
                }
            },
            "npm:babel-types@6.13.0": {
                "map": {
                    "lodash": "npm:lodash@4.14.1",
                    "to-fast-properties": "npm:to-fast-properties@1.0.2",
                    "esutils": "npm:esutils@2.0.2",
                    "babel-traverse": "npm:babel-traverse@6.13.0",
                    "babel-runtime": "npm:babel-runtime@6.11.6"
                }
            },
            "npm:babel-traverse@6.13.0": {
                "map": {
                    "babel-messages": "npm:babel-messages@6.8.0",
                    "babylon": "npm:babylon@6.8.4",
                    "debug": "npm:debug@2.2.0",
                    "invariant": "npm:invariant@2.2.1",
                    "babel-types": "npm:babel-types@6.13.0",
                    "lodash": "npm:lodash@4.14.1",
                    "babel-runtime": "npm:babel-runtime@6.11.6",
                    "babel-code-frame": "npm:babel-code-frame@6.11.0",
                    "globals": "npm:globals@8.18.0"
                }
            },
            "npm:babylon@6.8.4": {
                "map": {
                    "babel-runtime": "npm:babel-runtime@6.11.6"
                }
            },
            "npm:babel-runtime@6.11.6": {
                "map": {
                    "core-js": "npm:core-js@2.4.1",
                    "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
                }
            },
            "npm:babel-code-frame@6.11.0": {
                "map": {
                    "js-tokens": "npm:js-tokens@2.0.0",
                    "esutils": "npm:esutils@2.0.2",
                    "babel-runtime": "npm:babel-runtime@6.11.6",
                    "chalk": "npm:chalk@1.1.3"
                }
            }
        }
    },
    transpiler: "plugin-babel",
    meta: {
        "*.js": {
            "babelOptions": {
                "plugins": [
                    "babel-plugin-transform-react-jsx"
                ],
                "optional": [
                    "runtime",
                    "optimisation.modules.system"
                ]
            }
        },
        "lib/index.js": {
            "deps": [
                "./definitions/init.js"
            ],
            "cjsDeferDepsExecute": true
        },
        "lib/definitions/init.js": {
            "deps": [
                "./index",
                "./core",
                "./es2015",
                "./flow",
                "./jsx",
                "./misc",
                "./experimental"
            ],
            "cjsDeferDepsExecute": true
        }
    },
    map: {
        "socket.io-rpc-client": "github:capaj/socket.io-rpc-client@1.1.3"
    },
    packages: {
        "github:capaj/socket.io-rpc-client@1.1.3": {
            "map": {
                "o.extend": "npm:o.extend@1.0.1",
                "traverse": "npm:traverse@0.6.6",
                "debug": "npm:debug@2.2.0",
                "socket.io-rpc-event-handlers": "github:capaj/socket.io-rpc-event-handlers@1.1.7",
                "socket.io-client": "github:socketio/socket.io-client@1.4.8"
            }
        },
        "github:capaj/socket.io-rpc-event-handlers@1.1.7": {
            "map": {
                "debug": "npm:debug@2.2.0",
                "traverse": "npm:traverse@0.6.6",
                "serialize-error": "npm:serialize-error@1.1.0",
                "co": "npm:co@4.6.0"
            }
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "react-select": "npm:react-select@1.0.0-beta14",
        "classnames": "npm:classnames@2.2.5",
        "exif-js/exif-js": "github:exif-js/exif-js@master",
        "react-promise": "npm:react-promise@1.1.1",
        "history": "npm:history@3.0.0",
        "lodash": "npm:lodash@4.14.1",
        "css": "github:systemjs/plugin-css@0.1.26",
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "bulma": "npm:bulma@0.0.28",
        "capaj/systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.6.0",
        "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
        "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
        "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
        "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
        "events": "github:jspm/nodelibs-events@0.2.0-alpha",
        "font-awesome": "npm:font-awesome@4.6.3",
        "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
        "http": "github:jspm/nodelibs-http@0.2.0-alpha",
        "https": "github:jspm/nodelibs-https@0.2.0-alpha",
        "mobx": "npm:mobx@2.4.2",
        "mobx-react": "npm:mobx-react@3.5.4",
        "moment": "npm:moment@2.14.1",
        "net": "github:jspm/nodelibs-net@0.2.0-alpha",
        "path": "github:jspm/nodelibs-path@0.2.0-alpha",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "react": "npm:react@15.3.0",
        "react-date-picker": "npm:react-date-picker@5.3.27",
        "react-dom": "npm:react-dom@15.3.0",
        "react-intl": "npm:react-intl@2.1.3",
        "react-router": "npm:react-router@2.6.1",
        "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
        "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
        "systemjs-plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
        "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
        "url": "github:jspm/nodelibs-url@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
        "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
    },
    packages: {
        "github:capaj/systemjs-hot-reloader@0.6.0": {
            "map": {
                "debug": "npm:debug@2.2.0",
                "socket.io-client": "github:socketio/socket.io-client@1.4.8",
                "weakee": "npm:weakee@1.0.0"
            }
        },
        "npm:fbjs@0.8.3": {
            "map": {
                "core-js": "npm:core-js@1.2.7",
                "immutable": "npm:immutable@3.8.1",
                "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
                "loose-envify": "npm:loose-envify@1.2.0",
                "object-assign": "npm:object-assign@4.1.0",
                "promise": "npm:promise@7.1.1",
                "ua-parser-js": "npm:ua-parser-js@0.7.10"
            }
        },
        "npm:history@2.1.2": {
            "map": {
                "deep-equal": "npm:deep-equal@1.0.1",
                "invariant": "npm:invariant@2.2.1",
                "query-string": "npm:query-string@3.0.3",
                "warning": "npm:warning@2.1.0"
            }
        },
        "npm:loose-envify@1.2.0": {
            "map": {
                "js-tokens": "npm:js-tokens@1.0.3"
            }
        },
        "npm:react-intl@2.1.3": {
            "map": {
                "intl-format-cache": "npm:intl-format-cache@2.0.5",
                "intl-messageformat": "npm:intl-messageformat@1.3.0",
                "intl-relativeformat": "npm:intl-relativeformat@1.3.0",
                "invariant": "npm:invariant@2.2.1"
            }
        },
        "npm:readable-stream@2.1.4": {
            "map": {
                "buffer-shims": "npm:buffer-shims@1.0.0",
                "core-util-is": "npm:core-util-is@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "isarray": "npm:isarray@1.0.0",
                "process-nextick-args": "npm:process-nextick-args@1.0.7",
                "string_decoder": "npm:string_decoder@0.10.31",
                "util-deprecate": "npm:util-deprecate@1.0.2"
            }
        },
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.7.1"
            }
        },
        "github:jspm/nodelibs-domain@0.2.0-alpha": {
            "map": {
                "domain-browserify": "npm:domain-browser@1.1.7"
            }
        },
        "github:jspm/nodelibs-http@0.2.0-alpha": {
            "map": {
                "http-browserify": "npm:stream-http@2.3.1"
            }
        },
        "github:jspm/nodelibs-stream@0.2.0-alpha": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
            "map": {
                "string_decoder-browserify": "npm:string_decoder@0.10.31"
            }
        },
        "github:jspm/nodelibs-url@0.2.0-alpha": {
            "map": {
                "url-browserify": "npm:url@0.11.0"
            }
        },
        "github:jspm/nodelibs-zlib@0.2.0-alpha": {
            "map": {
                "zlib-browserify": "npm:browserify-zlib@0.1.4"
            }
        },
        "npm:browserify-zlib@0.1.4": {
            "map": {
                "pako": "npm:pako@0.2.9",
                "readable-stream": "npm:readable-stream@2.1.4"
            }
        },
        "npm:core-util-is@1.0.2": {
            "map": {}
        },
        "npm:debug@2.2.0": {
            "map": {
                "ms": "npm:ms@0.7.1"
            }
        },
        "npm:domain-browser@1.1.7": {
            "map": {}
        },
        "npm:encoding@0.1.12": {
            "map": {
                "iconv-lite": "npm:iconv-lite@0.4.13"
            }
        },
        "npm:iconv-lite@0.4.13": {
            "map": {
                "systemjs-json": "github:systemjs/plugin-json@0.1.2"
            }
        },
        "npm:inherits@2.0.1": {
            "map": {}
        },
        "npm:intl-messageformat@1.3.0": {
            "map": {
                "intl-messageformat-parser": "npm:intl-messageformat-parser@1.2.0"
            }
        },
        "npm:intl-relativeformat@1.3.0": {
            "map": {
                "intl-messageformat": "npm:intl-messageformat@1.3.0"
            }
        },
        "npm:invariant@2.2.1": {
            "map": {
                "loose-envify": "npm:loose-envify@1.2.0"
            }
        },
        "npm:isomorphic-fetch@2.2.1": {
            "map": {
                "node-fetch": "npm:node-fetch@1.6.0",
                "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
            }
        },
        "npm:process-nextick-args@1.0.7": {
            "map": {}
        },
        "npm:promise@7.1.1": {
            "map": {
                "asap": "npm:asap@2.0.4"
            }
        },
        "npm:punycode@1.3.2": {
            "map": {}
        },
        "npm:query-string@3.0.3": {
            "map": {
                "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.1.4"
            }
        },
        "npm:string_decoder@0.10.31": {
            "map": {}
        },
        "npm:ua-parser-js@0.7.10": {
            "map": {
                "systemjs-json": "github:systemjs/plugin-json@0.1.2"
            }
        },
        "npm:url@0.11.0": {
            "map": {
                "punycode": "npm:punycode@1.3.2",
                "querystring": "npm:querystring@0.2.0"
            }
        },
        "npm:util-deprecate@1.0.2": {
            "map": {}
        },
        "npm:warning@2.1.0": {
            "map": {
                "loose-envify": "npm:loose-envify@1.2.0"
            }
        },
        "github:jspm/nodelibs-crypto@0.2.0-alpha": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.11.0"
            }
        },
        "npm:crypto-browserify@3.11.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "browserify-sign": "npm:browserify-sign@4.0.0",
                "public-encrypt": "npm:public-encrypt@4.0.0",
                "create-hmac": "npm:create-hmac@1.1.4",
                "randombytes": "npm:randombytes@2.0.3",
                "diffie-hellman": "npm:diffie-hellman@5.0.2",
                "create-hash": "npm:create-hash@1.1.2",
                "create-ecdh": "npm:create-ecdh@4.0.0",
                "browserify-cipher": "npm:browserify-cipher@1.0.0",
                "pbkdf2": "npm:pbkdf2@3.0.4"
            }
        },
        "npm:browserify-sign@4.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "create-hmac": "npm:create-hmac@1.1.4",
                "parse-asn1": "npm:parse-asn1@5.0.0",
                "create-hash": "npm:create-hash@1.1.2",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "elliptic": "npm:elliptic@6.3.1",
                "bn.js": "npm:bn.js@4.11.6"
            }
        },
        "npm:create-hmac@1.1.4": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:public-encrypt@4.0.0": {
            "map": {
                "randombytes": "npm:randombytes@2.0.3",
                "parse-asn1": "npm:parse-asn1@5.0.0",
                "create-hash": "npm:create-hash@1.1.2",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "bn.js": "npm:bn.js@4.11.6"
            }
        },
        "npm:parse-asn1@5.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "pbkdf2": "npm:pbkdf2@3.0.4",
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "asn1.js": "npm:asn1.js@4.8.0"
            }
        },
        "npm:create-hash@1.1.2": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "cipher-base": "npm:cipher-base@1.0.2",
                "ripemd160": "npm:ripemd160@1.0.1",
                "sha.js": "npm:sha.js@2.4.5"
            }
        },
        "npm:diffie-hellman@5.0.2": {
            "map": {
                "randombytes": "npm:randombytes@2.0.3",
                "bn.js": "npm:bn.js@4.11.6",
                "miller-rabin": "npm:miller-rabin@4.0.0"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            "map": {
                "randombytes": "npm:randombytes@2.0.3",
                "bn.js": "npm:bn.js@4.11.6"
            }
        },
        "npm:pbkdf2@3.0.4": {
            "map": {
                "create-hmac": "npm:create-hmac@1.1.4"
            }
        },
        "npm:create-ecdh@4.0.0": {
            "map": {
                "elliptic": "npm:elliptic@6.3.1",
                "bn.js": "npm:bn.js@4.11.6"
            }
        },
        "npm:elliptic@6.3.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "bn.js": "npm:bn.js@4.11.6",
                "brorand": "npm:brorand@1.0.5",
                "hash.js": "npm:hash.js@1.0.3"
            }
        },
        "npm:browserify-cipher@1.0.0": {
            "map": {
                "browserify-des": "npm:browserify-des@1.0.0",
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
            }
        },
        "npm:cipher-base@1.0.2": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:browserify-des@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "cipher-base": "npm:cipher-base@1.0.2",
                "des.js": "npm:des.js@1.0.0"
            }
        },
        "npm:browserify-aes@1.0.6": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.2",
                "create-hash": "npm:create-hash@1.1.2",
                "inherits": "npm:inherits@2.0.1",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "buffer-xor": "npm:buffer-xor@1.0.3"
            }
        },
        "npm:hash.js@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:miller-rabin@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "brorand": "npm:brorand@1.0.5"
            }
        },
        "npm:evp_bytestokey@1.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:sha.js@2.4.5": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:font-awesome@4.6.3": {
            "map": {
                "css": "github:systemjs/plugin-css@0.1.26"
            }
        },
        "npm:raf@3.2.0": {
            "map": {
                "performance-now": "npm:performance-now@0.2.0"
            }
        },
        "npm:react-notify-resize@1.0.3": {
            "map": {
                "react-class": "npm:react-class@2.1.0"
            }
        },
        "npm:react-class@2.1.0": {
            "map": {
                "object-assign": "npm:object-assign@4.1.0"
            }
        },
        "npm:history@3.0.0": {
            "map": {
                "query-string": "npm:query-string@4.2.2",
                "warning": "npm:warning@2.1.0",
                "invariant": "npm:invariant@2.2.1"
            }
        },
        "npm:query-string@4.2.2": {
            "map": {
                "object-assign": "npm:object-assign@4.1.0",
                "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
            }
        },
        "npm:react-router@2.6.1": {
            "map": {
                "history": "npm:history@2.1.2",
                "loose-envify": "npm:loose-envify@1.2.0",
                "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
                "invariant": "npm:invariant@2.2.1",
                "warning": "npm:warning@3.0.0"
            }
        },
        "npm:react-date-picker@5.3.27": {
            "map": {
                "react-inline-block": "npm:react-inline-block@2.0.0",
                "object-assign": "npm:object-assign@4.0.1",
                "react-style-normalizer": "npm:react-style-normalizer@1.2.8",
                "react-class": "npm:react-class@2.0.0",
                "react-flex": "npm:react-flex@2.2.7",
                "raf": "npm:raf@3.2.0",
                "lodash.throttle": "npm:lodash.throttle@4.1.0",
                "react-field": "npm:react-field@2.0.2",
                "react-notify-resize": "npm:react-notify-resize@1.0.3"
            }
        },
        "npm:react@15.3.0": {
            "map": {
                "object-assign": "npm:object-assign@4.1.0",
                "loose-envify": "npm:loose-envify@1.2.0",
                "fbjs": "npm:fbjs@0.8.3"
            }
        },
        "npm:react-inline-block@2.0.0": {
            "map": {
                "object-assign": "npm:object-assign@4.1.0"
            }
        },
        "npm:react-class@2.0.0": {
            "map": {
                "object-assign": "npm:object-assign@4.1.0"
            }
        },
        "npm:react-flex@2.2.7": {
            "map": {
                "object-assign": "npm:object-assign@4.1.0",
                "react-class": "npm:react-class@2.1.0"
            }
        },
        "npm:mobx-react@3.5.4": {
            "map": {
                "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0"
            }
        },
        "npm:warning@3.0.0": {
            "map": {
                "loose-envify": "npm:loose-envify@1.2.0"
            }
        },
        "npm:stream-http@2.3.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
                "readable-stream": "npm:readable-stream@2.1.4",
                "xtend": "npm:xtend@4.0.1",
                "builtin-status-codes": "npm:builtin-status-codes@2.0.0"
            }
        },
        "npm:buffer@4.7.1": {
            "map": {
                "ieee754": "npm:ieee754@1.1.6",
                "isarray": "npm:isarray@1.0.0",
                "base64-js": "npm:base64-js@1.1.2"
            }
        },
        "npm:react-field@2.0.2": {
            "map": {
                "object-assign": "npm:object-assign@4.1.0"
            }
        },
        "npm:asn1.js@4.8.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:node-fetch@1.6.0": {
            "map": {
                "is-stream": "npm:is-stream@1.1.0",
                "encoding": "npm:encoding@0.1.12"
            }
        },
        "npm:react-select@1.0.0-beta14": {
            "map": {
                "classnames": "npm:classnames@2.2.5",
                "blacklist": "npm:blacklist@1.1.4",
                "react-input-autosize": "npm:react-input-autosize@1.1.0"
            }
        }
    }
});
