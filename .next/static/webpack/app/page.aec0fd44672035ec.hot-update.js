"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/category-card.tsx":
/*!**************************************!*\
  !*** ./components/category-card.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CategoryCard: function() { return /* binding */ CategoryCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\nfunction CategoryCard(param) {\n    let { title, image, href } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        href: href,\n        className: \"group\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative overflow-hidden rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: image || \"/placeholder.svg\",\n                    alt: title,\n                    width: 180,\n                    height: 180,\n                    className: \"h-[160px] w-full  transition-transform group-hover:scale-105\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\amilc\\\\OneDrive\\\\Documents\\\\forniture\\\\components\\\\category-card.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-white font-medium\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\amilc\\\\OneDrive\\\\Documents\\\\forniture\\\\components\\\\category-card.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\amilc\\\\OneDrive\\\\Documents\\\\forniture\\\\components\\\\category-card.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\amilc\\\\OneDrive\\\\Documents\\\\forniture\\\\components\\\\category-card.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\amilc\\\\OneDrive\\\\Documents\\\\forniture\\\\components\\\\category-card.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = CategoryCard;\nvar _c;\n$RefreshReg$(_c, \"CategoryCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY2F0ZWdvcnktY2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFDRTtBQVF2QixTQUFTRSxhQUFhLEtBQXlDO1FBQXpDLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQXFCLEdBQXpDO0lBQzNCLHFCQUNFLDhEQUFDTCxpREFBSUE7UUFBQ0ssTUFBTUE7UUFBTUMsV0FBVTtrQkFDMUIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDTCxrREFBS0E7b0JBQ0pPLEtBQUtKLFNBQVM7b0JBQ2RLLEtBQUtOO29CQUNMTyxPQUFPO29CQUNQQyxRQUFRO29CQUNSTCxXQUFVOzs7Ozs7OEJBRVosOERBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDTTt3QkFBR04sV0FBVTtrQ0FBMEJIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xEO0tBakJnQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXRlZ29yeS1jYXJkLnRzeD9jNmE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuaW50ZXJmYWNlIENhdGVnb3J5Q2FyZFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZ1xuICBpbWFnZTogc3RyaW5nXG4gIGhyZWY6IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0ZWdvcnlDYXJkKHsgdGl0bGUsIGltYWdlLCBocmVmIH06IENhdGVnb3J5Q2FyZFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPVwiZ3JvdXBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtpbWFnZSB8fCBcIi9wbGFjZWhvbGRlci5zdmdcIn1cbiAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAgIHdpZHRoPXsxODB9XG4gICAgICAgICAgaGVpZ2h0PXsxODB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC1bMTYwcHhdIHctZnVsbCAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZ3JvdXAtaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjay83MCB0by10cmFuc3BhcmVudCBmbGV4IGl0ZW1zLWVuZCBwLTRcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LW1lZGl1bVwiPnt0aXRsZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiQ2F0ZWdvcnlDYXJkIiwidGl0bGUiLCJpbWFnZSIsImhyZWYiLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/category-card.tsx\n"));

/***/ })

});