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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Home = ()=>{\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.fetch(\"/api/avo\").then((res)=>res.json()).then(({ data  })=>{\n            setProductList(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Next.js!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shaio\\\\Documents\\\\GitHub\\\\project-nextjs\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            productList.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: product.name\n                }, product.id, false, {\n                    fileName: \"C:\\\\Users\\\\shaio\\\\Documents\\\\GitHub\\\\project-nextjs\\\\pages\\\\index.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shaio\\\\Documents\\\\GitHub\\\\project-nextjs\\\\pages\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW1EO0FBR25ELE1BQU1HLE9BQU8sSUFBTTtJQUNqQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUVqREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkSyxPQUNDQyxLQUFLLENBQUMsWUFDTkMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDLEVBQUNHLEtBQUksRUFBQyxHQUFLO1lBQ2hCTixlQUFlTTtRQUNqQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNBOzBCQUFJOzs7Ozs7WUFDRlIsWUFBWVMsR0FBRyxDQUFDLENBQUNDLHdCQUNoQiw4REFBQ0Y7OEJBQXNCRSxRQUFRQyxJQUFJO21CQUF6QkQsUUFBUUUsRUFBRTs7Ozs7Ozs7Ozs7QUFJOUI7QUFFQSxpRUFBZWIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3dcclxuICAgIC5mZXRjaCgnL2FwaS9hdm8nKVxyXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgc2V0UHJvZHVjdExpc3QoZGF0YSlcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5OZXh0LmpzITwvZGl2PlxyXG4gICAgICAgIHtwcm9kdWN0TGlzdC5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInByb2R1Y3RMaXN0Iiwic2V0UHJvZHVjdExpc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImRpdiIsIm1hcCIsInByb2R1Y3QiLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();