!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=4)}([function(n,t){},function(n,t){},function(n,t,e){"use strict";e.d(t,"a",function(){return o});const o=["张无忌","周芷若","郭靖"];setTimeout(function(){console.log(o[0])},500)},function(n,t){var e={name:"马云测试",speak:function(){return this.name},getData:function(){fetch("/api/theaters_data").then(function(n){return n.json()}).then(function(n){console.log(n)}).catch(function(n){console.log("Oops, error")})}};n.exports=e},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(2);e(0),e(1);var r=e(3);console.log(o.a[1]),console.log(r.speak()),r.getData()}]);