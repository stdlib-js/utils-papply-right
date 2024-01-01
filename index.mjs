// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n){var e,s,i;if(!t(n))throw new TypeError(r("invalid argument. First argument must be a function. Value: `%s`.",n));for(s=arguments.length-1,e=new Array(s),i=1;i<arguments.length;i++)e[i-1]=arguments[i];return a;function a(){var t,r,i;for(t=arguments.length,r=new Array(s+t),i=0;i<r.length;i++)r[i]=i>=t?e[i-t]:arguments[i];return n.apply(null,r)}}export{n as default};
//# sourceMappingURL=index.mjs.map
