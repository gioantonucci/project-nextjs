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
exports.id = "pages/product/[id]";
exports.ids = ["pages/product/[id]"];
exports.modules = {

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ProductItem = ()=>{\n    const { query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id) {\n            window.fetch(`/api/avo/${id}`).then((response)=>response.json()).then((data)=>setProduct(data)).catch((error)=>console.error(error));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Pagina del producto\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shaio\\\\Documents\\\\GitHub\\\\project-nextjs\\\\pages\\\\product\\\\[id].js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: product?.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shaio\\\\Documents\\\\GitHub\\\\project-nextjs\\\\pages\\\\product\\\\[id].js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shaio\\\\Documents\\\\GitHub\\\\project-nextjs\\\\pages\\\\product\\\\[id].js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBQ1g7QUFFeEMsTUFBTUksY0FBYyxJQUFNO0lBQ3hCLE1BQU0sRUFDSkMsT0FBTyxFQUFFQyxHQUFFLEVBQUUsR0FDZCxHQUFHSCxzREFBU0E7SUFFYixNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBO0lBRXRDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSUssSUFBSTtZQUNORyxPQUNHQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUVKLEdBQUcsQ0FBQyxFQUN0QkssSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxDQUFDRyxPQUFTTixXQUFXTSxPQUMxQkMsS0FBSyxDQUFDLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQ0E7UUFDcEMsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFJYixTQUFTYzs7Ozs7Ozs7Ozs7O0FBR3BCO0FBRUEsaUVBQWVqQixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvcHJvZHVjdC9baWRdLmpzP2Y2ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0SXRlbSA9ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyBpZCB9LFxyXG4gIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB3aW5kb3dcclxuICAgICAgICAuZmV0Y2goYC9hcGkvYXZvLyR7aWR9YClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0UHJvZHVjdChkYXRhKSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlBhZ2luYSBkZWwgcHJvZHVjdG88L2gxPlxyXG4gICAgICA8aDM+e3Byb2R1Y3Q/Lm5hbWV9PC9oMz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJQcm9kdWN0SXRlbSIsInF1ZXJ5IiwiaWQiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImgxIiwiaDMiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/product/[id].js"));
module.exports = __webpack_exports__;

})();