"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var t=v(function(l,a){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),o=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),d=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/blas-ext-base-done-to/dist').ndarray;function f(e){var r=e[0];return m(s(r,0),d(r),o(r,0),q(r)),r}a.exports=f
});var c=require("path").join,g=require('@stdlib/utils-try-require/dist'),j=require('@stdlib/assert-is-error/dist'),p=t(),i,u=g(c(__dirname,"./native.js"));j(u)?i=p:i=u;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
