// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var n=r,e=t;var s=function(r){var t,s,i;if(!n(r))throw new TypeError(e("invalid argument. First argument must be a function. Value: `%s`.",r));for(s=arguments.length-1,t=new Array(s),i=1;i<arguments.length;i++)t[i-1]=arguments[i];return a;function a(){var n,e,i;for(n=arguments.length,e=new Array(s+n),i=0;i<e.length;i++)e[i]=i>=n?t[i-n]:arguments[i];return r.apply(null,e)}};export{s as default};
//# sourceMappingURL=index.mjs.map
