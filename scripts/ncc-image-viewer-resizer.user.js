// ==UserScript==
// @name		ncc-image-viewer-resizer
// @namespace	https://sdbx.github.io/ncc-extension/scripts/ncc-image-viewer-resizer.user.js
// @description	ncc image viewer resizer
// @include		https://chat.cafe.naver.com/html/viewer.html*
// @version		1
// @
// ==/UserScript==

var v = document.getElementById("viewer");

var innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var innerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.resizeBy(v.width - innerWidth, v.height - innerHeight);
