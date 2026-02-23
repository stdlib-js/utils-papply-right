// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.3-esm/index.mjs";function e(e){var n,s,o;if(!r(e))throw new TypeError(t("1WV3c",e));for(s=arguments.length-1,n=new Array(s),o=1;o<arguments.length;o++)n[o-1]=arguments[o];return function(){var r,t,o;for(r=arguments.length,t=new Array(s+r),o=0;o<t.length;o++)t[o]=o>=r?n[o-r]:arguments[o];return e.apply(null,t)}}export{e as default};
//# sourceMappingURL=index.mjs.map
