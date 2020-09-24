webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dashboard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"../node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"../node_modules/swr/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/btn */ \"./components/btn.js\");\nvar _jsxFileName = \"/Users/Doug/Library/Mobile Documents/com~apple~CloudDocs/Development/20200912-text-me-daily/text-me-daily/client/pages/dashboard.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // set up cookies\n\nvar __N_SSG = true;\nfunction Dashboard(ctx) {\n  _s();\n\n  var logOut = function logOut() {\n    // cookies.remove('token', null);\n    // cookies.remove('refreshToken', null);\n    cookies.remove('status', null); // Router.push('/');\n  };\n\n  var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_1__[\"Cookies\"]();\n  var token = cookies.get('token');\n\n  var fetcherAuth = function fetcherAuth(url) {\n    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, {\n      headers: {\n        'Authorization': token\n      }\n    }).then(function (res) {\n      return res.data;\n    });\n  };\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"\".concat(ctx.serverUrl, \"/api/ping\"), fetcherAuth),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (error) {\n    console.error(error.response.data.msg);\n    logOut();\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 12\n      }\n    }, \"error loading. probably need to login again.\");\n  }\n\n  if (!data) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 12\n      }\n    }, \"loading...\");\n  }\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 10\n    }\n  }, \"secret page\"), \" \", __jsx(_components_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: true,\n    onClick: function onClick() {\n      return logOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 31\n    }\n  }, \"log out\"), JSON.stringify(data));\n}\n\n_s(Dashboard, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Dashboard;\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzP2JiZDgiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwiY3R4IiwibG9nT3V0IiwiY29va2llcyIsInJlbW92ZSIsIkNvb2tpZXMiLCJ0b2tlbiIsImdldCIsImZldGNoZXJBdXRoIiwidXJsIiwiYXhpb3MiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImRhdGEiLCJ1c2VTV1IiLCJzZXJ2ZXJVcmwiLCJlcnJvciIsImNvbnNvbGUiLCJyZXNwb25zZSIsIm1zZyIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7O0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0I7QUFBQTs7QUFDckMsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQjtBQUNBO0FBQ0FDLFdBQU8sQ0FBQ0MsTUFBUixDQUFlLFFBQWYsRUFBeUIsSUFBekIsRUFIbUIsQ0FJbkI7QUFDRCxHQUxEOztBQU1BLE1BQU1ELE9BQU8sR0FBRyxJQUFJRSxvREFBSixFQUFoQjtBQUNBLE1BQU1DLEtBQUssR0FBR0gsT0FBTyxDQUFDSSxHQUFSLENBQVksT0FBWixDQUFkOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEdBQUc7QUFBQSxXQUFJQyw0Q0FBSyxDQUFDSCxHQUFOLENBQVVFLEdBQVYsRUFBZTtBQUFFRSxhQUFPLEVBQUU7QUFBRSx5QkFBaUJMO0FBQW5CO0FBQVgsS0FBZixFQUF3RE0sSUFBeEQsQ0FBNkQsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBUjtBQUFBLEtBQWhFLENBQUo7QUFBQSxHQUF2Qjs7QUFUcUMsZ0JBVWJDLG1EQUFNLFdBQUlkLEdBQUcsQ0FBQ2UsU0FBUixnQkFBOEJSLFdBQTlCLENBVk87QUFBQSxNQVU3Qk0sSUFWNkIsV0FVN0JBLElBVjZCO0FBQUEsTUFVdkJHLEtBVnVCLFdBVXZCQSxLQVZ1Qjs7QUFXckMsTUFBSUEsS0FBSixFQUFXO0FBQ1RDLFdBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFLLENBQUNFLFFBQU4sQ0FBZUwsSUFBZixDQUFvQk0sR0FBbEM7QUFDQWxCLFVBQU07QUFDTixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBQVA7QUFDRDs7QUFDRCxNQUFJLENBQUNZLElBQUwsRUFBVztBQUNULFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDtBQUNEOztBQUVELFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUwsT0FBMEIsTUFBQyx1REFBRDtBQUFLLFdBQU8sTUFBWjtBQUFhLFdBQU8sRUFBRTtBQUFBLGFBQU1aLE1BQU0sRUFBWjtBQUFBLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBMUIsRUFBOEVtQixJQUFJLENBQUNDLFNBQUwsQ0FBZVIsSUFBZixDQUE5RSxDQURGO0FBR0Q7O0dBdkJ1QmQsUztVQVVFZSwyQzs7O0tBVkZmLFMiLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBCdG4gZnJvbSAnLi4vY29tcG9uZW50cy9idG4nXG5cbi8vIHNldCB1cCBjb29raWVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZChjdHgpIHtcbiAgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICAgIC8vIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicsIG51bGwpO1xuICAgIC8vIGNvb2tpZXMucmVtb3ZlKCdyZWZyZXNoVG9rZW4nLCBudWxsKTtcbiAgICBjb29raWVzLnJlbW92ZSgnc3RhdHVzJywgbnVsbCk7XG4gICAgLy8gUm91dGVyLnB1c2goJy8nKTtcbiAgfVxuICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgY29uc3QgdG9rZW4gPSBjb29raWVzLmdldCgndG9rZW4nKTtcbiAgY29uc3QgZmV0Y2hlckF1dGggPSB1cmwgPT4gYXhpb3MuZ2V0KHVybCwgeyBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogdG9rZW4gfSB9KS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgJHtjdHguc2VydmVyVXJsfS9hcGkvcGluZ2AsIGZldGNoZXJBdXRoKTtcbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1zZylcbiAgICBsb2dPdXQoKTtcbiAgICByZXR1cm4gPGRpdj5lcnJvciBsb2FkaW5nLiBwcm9iYWJseSBuZWVkIHRvIGxvZ2luIGFnYWluLjwvZGl2PlxuICB9XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj48aDI+c2VjcmV0IHBhZ2U8L2gyPiA8QnRuIHByaW1hcnkgb25DbGljaz17KCkgPT4gbG9nT3V0KCl9PmxvZyBvdXQ8L0J0bj57SlNPTi5zdHJpbmdpZnkoZGF0YSl9PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzZXJ2ZXJVcmw6IHByb2Nlc3MuZW52LlNFUlZFUlxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

})