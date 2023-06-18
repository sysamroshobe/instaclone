"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    callbacks: {\n        async session ({ session , token  }) {\n            const user = session.user;\n            user.username = user.name ? user.name.split(\" \").join(\"\").toLocaleLowerCase() : \"\"; // Assign empty string if user.name is undefined\n            user.uid = token.sub ?? \"\"; // Assign empty string if token.sub is undefined\n            return session;\n        }\n    },\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID ?? \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? \"\"\n        })\n    ],\n    pages: {\n        signIn: \"/auth/signin\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2lDO0FBQ3VCO0FBYXhELGlFQUFlQSxnREFBUUEsQ0FBQztJQUN0QkUsV0FBVztRQUNULE1BQU1DLFNBQVEsRUFBRUEsUUFBTyxFQUFFQyxNQUFLLEVBQUUsRUFBRTtZQUNoQyxNQUFNQyxPQUFPRixRQUFRRSxJQUFJO1lBQ3pCQSxLQUFLQyxRQUFRLEdBQUdELEtBQUtFLElBQUksR0FDckJGLEtBQUtFLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEtBQUtDLElBQUksQ0FBQyxJQUFJQyxpQkFBaUIsS0FDL0MsRUFBRSxFQUFFLGdEQUFnRDtZQUN4REwsS0FBS00sR0FBRyxHQUFHUCxNQUFNUSxHQUFHLElBQUksSUFBSSxnREFBZ0Q7WUFDNUUsT0FBT1Q7UUFDVDtJQUNGO0lBQ0FVLFdBQVc7UUFDVFosaUVBQWNBLENBQUM7WUFDYmEsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0IsSUFBSTtZQUMxQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0IsSUFBSTtRQUNwRDtLQUNEO0lBQ0RDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlc3Npb24sIFVzZXIgfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuXHJcbmludGVyZmFjZSBVc2VyV2l0aFVJRCBleHRlbmRzIFVzZXIge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgdWlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwibmV4dC1hdXRoXCIge1xyXG4gIGludGVyZmFjZSBTZXNzaW9uIHtcclxuICAgIHVzZXI6IFVzZXJXaXRoVUlEO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgY29uc3QgdXNlciA9IHNlc3Npb24udXNlciBhcyBVc2VyV2l0aFVJRDtcclxuICAgICAgdXNlci51c2VybmFtZSA9IHVzZXIubmFtZVxyXG4gICAgICAgID8gdXNlci5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKClcclxuICAgICAgICA6IFwiXCI7IC8vIEFzc2lnbiBlbXB0eSBzdHJpbmcgaWYgdXNlci5uYW1lIGlzIHVuZGVmaW5lZFxyXG4gICAgICB1c2VyLnVpZCA9IHRva2VuLnN1YiA/PyBcIlwiOyAvLyBBc3NpZ24gZW1wdHkgc3RyaW5nIGlmIHRva2VuLnN1YiBpcyB1bmRlZmluZWRcclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEID8/IFwiXCIsIC8vIEFzc2lnbiBlbXB0eSBzdHJpbmcgaWYgR09PR0xFX0NMSUVOVF9JRCBpcyB1bmRlZmluZWRcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCA/PyBcIlwiLCAvLyBBc3NpZ24gZW1wdHkgc3RyaW5nIGlmIEdPT0dMRV9DTElFTlRfU0VDUkVUIGlzIHVuZGVmaW5lZFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiBcIi9hdXRoL3NpZ25pblwiLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsInVzZXIiLCJ1c2VybmFtZSIsIm5hbWUiLCJzcGxpdCIsImpvaW4iLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsInVpZCIsInN1YiIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInBhZ2VzIiwic2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();