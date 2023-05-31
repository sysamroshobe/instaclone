"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Post.tsx":
/*!*****************************!*\
  !*** ./components/Post.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/gr */ \"./node_modules/react-icons/gr/index.esm.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.tsx\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Post(param) {\n    let { id , name , userImg , img , caption  } = param;\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [likes, setlikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>(0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"posts\", id, \"comments\"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"timestamp\", \"desc\")), (snapshot)=>setComments(snapshot.docs)), [\n        _firebase__WEBPACK_IMPORTED_MODULE_4__.db\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>(0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"posts\", id, \"likes\"), (snapshot)=>setlikes(snapshot.docs)), [\n        _firebase__WEBPACK_IMPORTED_MODULE_4__.db,\n        id\n    ]);\n    const likepost = async ()=>{\n        await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"posts\", id, \"likes\", sessios.user.uid), {\n            like: true,\n            name: session.user.name,\n            userImg: session.user.image,\n            timestamp: (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()\n        });\n    };\n    const sendComment = async (e)=>{\n        e.preventDefault();\n        const commentToSend = comment;\n        setComment(\"\");\n        await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"posts\", id, \"comments\"), {\n            name: session.user.name\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white my-7 border rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center p-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"rounded-full h-12 w-12 object-contain border p-1 mr-3\",\n                        src: userImg,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex-1 font-bold\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiDotsHorizontal, {\n                        className: \"h-5\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: img,\n                className: \"object-cover w-full\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between px-4 pt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaRegHeart, {\n                                onClick: likepost\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsChatDots, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_9__.FiSend, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_vsc__WEBPACK_IMPORTED_MODULE_10__.VscBookmark, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"p-5 truncate\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold mr-1\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    caption\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            comments.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scroolbar-thin\",\n                children: comments.map((comment)=>{\n                    var ref;\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2 mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-7 rounded-full\",\n                                src: comment.data().userImg,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm flex-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold\",\n                                        children: comment.data().name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 17\n                                    }, this),\n                                    \" \",\n                                    comment.data().comment\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                fromNow: true,\n                                children: (ref = comment.data().timestamp) === null || ref === void 0 ? void 0 : ref.toDate()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, comment.id, true, {\n                        fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                lineNumber: 112,\n                columnNumber: 9\n            }, this),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex items-center p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gr__WEBPACK_IMPORTED_MODULE_11__.GrEmoji, {\n                        className: \"h-7\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: comment,\n                        onChange: (e)=>setComment(e.target.value),\n                        placeholder: \"Add a comment...\",\n                        className: \"border-none flex-1 focus:ring-0 outline-none\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        disabled: !comment.trim(),\n                        onClick: sendComment,\n                        className: \"font-semibold text-blue-400\",\n                        children: \"Post\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gigio\\\\OneDrive\\\\Documents\\\\appDev\\\\instaclone\\\\components\\\\Post.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(Post, \"1Fwq8iseRJ3K1VEBTjuIHWeu+cQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtrQ0FWbkIscUVBQUNtQjt3QkFBcUJDLFdBQVU7OzBDQUM5Qiw4REFBQ3hCO2dDQUNDd0IsV0FBVTtnQ0FDVkMsS0FBS3JCLFFBQVFGLElBQUksR0FBR0gsT0FBTztnQ0FDM0IyQixLQUFJOzs7Ozs7MENBRU4sOERBQUNDO2dDQUFFSCxXQUFVOztrREFDWCw4REFBQ0s7d0NBQUtMLFdBQVU7a0RBQWFwQixRQUFRRixJQUFJLEdBQUdKLElBQUk7Ozs7OztvQ0FBUztvQ0FDeERNLFFBQVFGLElBQUksR0FBR0UsT0FBTzs7Ozs7OzswQ0FFekIsOERBQUNULHFEQUFNQTtnQ0FBQ3FDLE9BQU87MENBQUU1QixDQUFBQSxNQUFBQSxRQUFRRixJQUFJLEdBQUdnQixTQUFTLGNBQXhCZCxpQkFBQUEsS0FBQUEsSUFBQUEsSUFBMEI2Qjs7Ozs7Ozt1QkFWbkM3QixRQUFRUCxFQUFFOzs7Ozs7Ozs7OztZQWdCekJNLHlCQUNDLDhEQUFDK0I7Z0JBQUtWLFdBQVU7O2tDQUNkLDhEQUFDMUMsb0RBQU9BO3dCQUFDMEMsV0FBVTs7Ozs7O2tDQUNuQiw4REFBQ1c7d0JBQ0NDLE1BQUs7d0JBQ0xDLE9BQU9qQzt3QkFDUGtDLFVBQVUsQ0FBQ2xCLElBQU1mLFdBQVdlLEVBQUVtQixNQUFNLENBQUNGLEtBQUs7d0JBQzFDRyxhQUFZO3dCQUNaaEIsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDaUI7d0JBQ0NMLE1BQUs7d0JBQ0xNLFVBQVUsQ0FBQ3RDLFFBQVF1QyxJQUFJO3dCQUN2QmYsU0FBU1Q7d0JBQ1RLLFdBQVU7a0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBOUhTNUI7O1FBYW1CYix1REFBVUE7OztLQWI3QmE7QUFnSVQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LnRzeD83NzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIaURvdHNIb3Jpem9udGFsIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XHJcbmltcG9ydCB7IEJzQ2hhdERvdHMgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgRmFSZWdIZWFydCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBGaVNlbmQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHsgVnNjQm9va21hcmsgfSBmcm9tIFwicmVhY3QtaWNvbnMvdnNjXCI7XHJcbmltcG9ydCB7IEdyRW1vamkgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGFkZERvYyxcclxuICBzZXJ2ZXJUaW1lc3RhbXAsXHJcbiAgY29sbGVjdGlvbixcclxuICBvblNuYXBzaG90LFxyXG4gIG9yZGVyQnksXHJcbiAgcXVlcnksXHJcbiAgc2V0RG9jLFxyXG4gIGRvYyxcclxufSBmcm9tIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB0aW1lU3RhbXAgfSBmcm9tIFwiY29uc29sZVwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIFBvc3Qoe1xyXG4gIGlkLFxyXG4gIG5hbWUsXHJcbiAgdXNlckltZyxcclxuICBpbWcsXHJcbiAgY2FwdGlvbixcclxufToge1xyXG4gIGlkOiBhbnk7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHVzZXJJbWc6IHN0cmluZztcclxuICBpbWc6IHN0cmluZztcclxuICBjYXB0aW9uOiBzdHJpbmc7XHJcbn0pIHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGlrZXMsIHNldGxpa2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgKCkgPT5cclxuICAgICAgb25TbmFwc2hvdChcclxuICAgICAgICBxdWVyeShcclxuICAgICAgICAgIGNvbGxlY3Rpb24oZGIsIFwicG9zdHNcIiwgaWQsIFwiY29tbWVudHNcIiksXHJcbiAgICAgICAgICBvcmRlckJ5KFwidGltZXN0YW1wXCIsIFwiZGVzY1wiKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgKHNuYXBzaG90KSA9PiBzZXRDb21tZW50cyhzbmFwc2hvdC5kb2NzKVxyXG4gICAgICApLFxyXG4gICAgW2RiXVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdChcclxuICAgICgpID0+XHJcbiAgICAgIG9uU25hcHNob3QoY29sbGVjdGlvbihkYiwgXCJwb3N0c1wiLCBpZCwgXCJsaWtlc1wiKSwgKHNuYXBzaG90KSA9PlxyXG4gICAgICAgIHNldGxpa2VzKHNuYXBzaG90LmRvY3MpXHJcbiAgICAgICksXHJcbiAgICBbZGIsIGlkXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGxpa2Vwb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgc2V0RG9jKGRvYyhkYiwgXCJwb3N0c1wiLCBpZCwgXCJsaWtlc1wiLCBzZXNzaW9zLnVzZXIudWlkKSwge1xyXG4gICAgICBsaWtlOiB0cnVlLFxyXG4gICAgICBuYW1lOiBzZXNzaW9uLnVzZXIubmFtZSxcclxuICAgICAgdXNlckltZzogc2Vzc2lvbi51c2VyLmltYWdlLFxyXG4gICAgICB0aW1lc3RhbXA6IHNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VuZENvbW1lbnQgPSBhc3luYyAoZTogYW55KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjb21tZW50VG9TZW5kID0gY29tbWVudDtcclxuICAgIHNldENvbW1lbnQoXCJcIik7XHJcbiAgICBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJwb3N0c1wiLCBpZCwgXCJjb21tZW50c1wiKSwge1xyXG4gICAgICBuYW1lOiBzZXNzaW9uLnVzZXIubmFtZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgbXktNyBib3JkZXIgcm91bmRlZC1sZ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtNSBcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgaC0xMiB3LTEyIG9iamVjdC1jb250YWluIGJvcmRlciBwLTEgbXItM1wiXHJcbiAgICAgICAgICBzcmM9e3VzZXJJbWd9XHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtYm9sZFwiPntuYW1lfTwvcD5cclxuICAgICAgICA8SGlEb3RzSG9yaXpvbnRhbCBjbGFzc05hbWU9XCJoLTVcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxpbWcgc3JjPXtpbWd9IGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGxcIiBhbHQ9XCJcIiAvPlxyXG5cclxuICAgICAge3Nlc3Npb24gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtNCBwdC00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgIDxGYVJlZ0hlYXJ0IG9uQ2xpY2s9e2xpa2Vwb3N0fSAvPlxyXG4gICAgICAgICAgICA8QnNDaGF0RG90cyAvPlxyXG4gICAgICAgICAgICA8RmlTZW5kIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxWc2NCb29rbWFyayAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicC01IHRydW5jYXRlXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1yLTFcIj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAge2NhcHRpb259XHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEwIGgtMjAgb3ZlcmZsb3cteS1zY3JvbGwgc2Nyb2xsYmFyLXRodW1iLWJsYWNrIHNjcm9vbGJhci10aGluXCI+XHJcbiAgICAgICAgICB7Y29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtjb21tZW50LmlkfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNyByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtjb21tZW50LmRhdGEoKS51c2VySW1nfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57Y29tbWVudC5kYXRhKCkubmFtZX08L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAge2NvbW1lbnQuZGF0YSgpLmNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxNb21lbnQgZnJvbU5vdz57Y29tbWVudC5kYXRhKCkudGltZXN0YW1wPy50b0RhdGUoKX08L01vbWVudD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtzZXNzaW9uICYmIChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTRcIj5cclxuICAgICAgICAgIDxHckVtb2ppIGNsYXNzTmFtZT1cImgtN1wiIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBjb21tZW50Li4uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLW5vbmUgZmxleC0xIGZvY3VzOnJpbmctMCBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshY29tbWVudC50cmltKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NlbmRDb21tZW50fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtYmx1ZS00MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBQb3N0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIaURvdHNIb3Jpem9udGFsIiwiQnNDaGF0RG90cyIsIkZhUmVnSGVhcnQiLCJGaVNlbmQiLCJWc2NCb29rbWFyayIsIkdyRW1vamkiLCJ1c2VTZXNzaW9uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhZGREb2MiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJjb2xsZWN0aW9uIiwib25TbmFwc2hvdCIsIm9yZGVyQnkiLCJxdWVyeSIsInNldERvYyIsImRvYyIsImRiIiwiTW9tZW50IiwiUG9zdCIsImlkIiwibmFtZSIsInVzZXJJbWciLCJpbWciLCJjYXB0aW9uIiwiZGF0YSIsInNlc3Npb24iLCJjb21tZW50Iiwic2V0Q29tbWVudCIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJsaWtlcyIsInNldGxpa2VzIiwic25hcHNob3QiLCJkb2NzIiwibGlrZXBvc3QiLCJzZXNzaW9zIiwidXNlciIsInVpZCIsImxpa2UiLCJpbWFnZSIsInRpbWVzdGFtcCIsInNlbmRDb21tZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29tbWVudFRvU2VuZCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInAiLCJvbkNsaWNrIiwic3BhbiIsImxlbmd0aCIsIm1hcCIsImZyb21Ob3ciLCJ0b0RhdGUiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJ0cmltIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post.tsx\n"));

/***/ })

});