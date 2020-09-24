webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dashboard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"../node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"../node_modules/swr/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/btn */ \"./components/btn.js\");\nvar _jsxFileName = \"/Users/Doug/Library/Mobile Documents/com~apple~CloudDocs/Development/20200912-text-me-daily/text-me-daily/client/pages/dashboard.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // set up cookies\n\nvar __N_SSG = true;\nfunction Dashboard(ctx) {\n  _s();\n\n  var logOut = function logOut() {\n    cookies.remove('token', null);\n    cookies.remove('refreshToken', null);\n    cookies.remove('status', null);\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n  };\n\n  var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_1__[\"Cookies\"]();\n  var token = cookies.get('token');\n\n  var fetcherAuth = function fetcherAuth(url) {\n    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, {\n      headers: {\n        'Authorization': token\n      }\n    }).then(function (res) {\n      return res.data;\n    });\n  };\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"\".concat(ctx.serverUrl, \"/api/ping\"), fetcherAuth),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (error) {\n    logOut();\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 12\n      }\n    }, \"error loading. probably need to login again.\");\n  }\n\n  if (!data) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 12\n      }\n    }, \"loading...\");\n  }\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 10\n    }\n  }, \"secret page\"), \" \", __jsx(_components_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: true,\n    onClick: function onClick() {\n      return logOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 31\n    }\n  }, \"log out\"), JSON.stringify(data));\n}\n\n_s(Dashboard, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Dashboard;\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzP2JiZDgiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwiY3R4IiwibG9nT3V0IiwiY29va2llcyIsInJlbW92ZSIsIlJvdXRlciIsInB1c2giLCJDb29raWVzIiwidG9rZW4iLCJnZXQiLCJmZXRjaGVyQXV0aCIsInVybCIsImF4aW9zIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlU1dSIiwic2VydmVyVXJsIiwiZXJyb3IiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7OztBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0FBQUE7O0FBQ3JDLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJDLFdBQU8sQ0FBQ0MsTUFBUixDQUFlLE9BQWYsRUFBd0IsSUFBeEI7QUFDQUQsV0FBTyxDQUFDQyxNQUFSLENBQWUsY0FBZixFQUErQixJQUEvQjtBQUNBRCxXQUFPLENBQUNDLE1BQVIsQ0FBZSxRQUFmLEVBQXlCLElBQXpCO0FBQ0FDLHNEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0QsR0FMRDs7QUFNQSxNQUFNSCxPQUFPLEdBQUcsSUFBSUksb0RBQUosRUFBaEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdMLE9BQU8sQ0FBQ00sR0FBUixDQUFZLE9BQVosQ0FBZDs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxHQUFHO0FBQUEsV0FBSUMsNENBQUssQ0FBQ0gsR0FBTixDQUFVRSxHQUFWLEVBQWU7QUFBRUUsYUFBTyxFQUFFO0FBQUUseUJBQWlCTDtBQUFuQjtBQUFYLEtBQWYsRUFBd0RNLElBQXhELENBQTZELFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQVI7QUFBQSxLQUFoRSxDQUFKO0FBQUEsR0FBdkI7O0FBVHFDLGdCQVViQyxtREFBTSxXQUFJaEIsR0FBRyxDQUFDaUIsU0FBUixnQkFBOEJSLFdBQTlCLENBVk87QUFBQSxNQVU3Qk0sSUFWNkIsV0FVN0JBLElBVjZCO0FBQUEsTUFVdkJHLEtBVnVCLFdBVXZCQSxLQVZ1Qjs7QUFhckMsTUFBSUEsS0FBSixFQUFXO0FBQ1RqQixVQUFNO0FBQ04sV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNEQUFQO0FBQ0Q7O0FBQ0QsTUFBSSxDQUFDYyxJQUFMLEVBQVc7QUFDVCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDRDs7QUFFRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFMLE9BQTBCLE1BQUMsdURBQUQ7QUFBSyxXQUFPLE1BQVo7QUFBYSxXQUFPLEVBQUU7QUFBQSxhQUFNZCxNQUFNLEVBQVo7QUFBQSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTFCLEVBQThFa0IsSUFBSSxDQUFDQyxTQUFMLENBQWVMLElBQWYsQ0FBOUUsQ0FERjtBQUdEOztHQXhCdUJoQixTO1VBVUVpQiwyQzs7O0tBVkZqQixTIiwiZmlsZSI6Ii4vcGFnZXMvZGFzaGJvYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQnRuIGZyb20gJy4uL2NvbXBvbmVudHMvYnRuJ1xuXG4vLyBzZXQgdXAgY29va2llc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoY3R4KSB7XG4gIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcbiAgICBjb29raWVzLnJlbW92ZSgndG9rZW4nLCBudWxsKTtcbiAgICBjb29raWVzLnJlbW92ZSgncmVmcmVzaFRva2VuJywgbnVsbCk7XG4gICAgY29va2llcy5yZW1vdmUoJ3N0YXR1cycsIG51bGwpO1xuICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gIH1cbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gIGNvbnN0IHRva2VuID0gY29va2llcy5nZXQoJ3Rva2VuJyk7XG4gIGNvbnN0IGZldGNoZXJBdXRoID0gdXJsID0+IGF4aW9zLmdldCh1cmwsIHsgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IHRva2VuIH0gfSkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYCR7Y3R4LnNlcnZlclVybH0vYXBpL3BpbmdgLCBmZXRjaGVyQXV0aCk7XG5cblxuICBpZiAoZXJyb3IpIHtcbiAgICBsb2dPdXQoKTtcbiAgICByZXR1cm4gPGRpdj5lcnJvciBsb2FkaW5nLiBwcm9iYWJseSBuZWVkIHRvIGxvZ2luIGFnYWluLjwvZGl2PlxuICB9XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj48aDI+c2VjcmV0IHBhZ2U8L2gyPiA8QnRuIHByaW1hcnkgb25DbGljaz17KCkgPT4gbG9nT3V0KCl9PmxvZyBvdXQ8L0J0bj57SlNPTi5zdHJpbmdpZnkoZGF0YSl9PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzZXJ2ZXJVcmw6IHByb2Nlc3MuZW52LlNFUlZFUlxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

})