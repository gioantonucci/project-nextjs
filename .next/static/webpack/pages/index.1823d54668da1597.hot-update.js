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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Home = ()=>{\n    _s();\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.fetch(\"/api/avo\").then((res)=>res.json()).then((param)=>{\n            let { data  } = param;\n            setProductList(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Next.js!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shaio\\\\Documents\\\\GitHub\\\\project-nextjs\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            productList.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: product.name\n                }, product.id, false, {\n                    fileName: \"C:\\\\Users\\\\shaio\\\\Documents\\\\GitHub\\\\project-nextjs\\\\pages\\\\index.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shaio\\\\Documents\\\\GitHub\\\\project-nextjs\\\\pages\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"OqBFtcRPuEK5n5yG0OhgJizsaa8=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFtRDtBQUduRCxNQUFNRyxPQUFPLElBQU07O0lBQ2pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RLLE9BQ0NDLEtBQUssQ0FBQyxZQUNOQyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLFNBQVk7Z0JBQVgsRUFBQ0csS0FBSSxFQUFDO1lBQ1hOLGVBQWVNO1FBQ2pCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0E7MEJBQUk7Ozs7OztZQUNGUixZQUFZUyxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2hCLDhEQUFDRjs4QkFBc0JFLFFBQVFDLElBQUk7bUJBQXpCRCxRQUFRRSxFQUFFOzs7Ozs7Ozs7OztBQUk5QjtHQXBCTWI7S0FBQUE7QUFzQk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvd1xyXG4gICAgLmZldGNoKCcvYXBpL2F2bycpXHJcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICBzZXRQcm9kdWN0TGlzdChkYXRhKVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2Pk5leHQuanMhPC9kaXY+XHJcbiAgICAgICAge3Byb2R1Y3RMaXN0Lm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZGl2IiwibWFwIiwicHJvZHVjdCIsIm5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});