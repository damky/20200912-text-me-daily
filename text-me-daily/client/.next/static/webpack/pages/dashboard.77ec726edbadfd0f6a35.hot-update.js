webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dashboard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"../node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"../node_modules/swr/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/btn */ \"./components/btn.js\");\nvar _jsxFileName = \"/Users/Doug/Library/Mobile Documents/com~apple~CloudDocs/Development/20200912-text-me-daily/text-me-daily/client/pages/dashboard.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // set up cookies\n\nvar __N_SSG = true;\nfunction Dashboard(ctx) {\n  _s();\n\n  var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_1__[\"Cookies\"]();\n  var token = cookies.get('token');\n\n  var logOut = function logOut() {\n    // cookies.remove('token', null);\n    // cookies.remove('refreshToken', null);\n    cookies.remove('status', null);\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n  };\n\n  var refreshToken = function refreshToken() {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"\".concat(ctx.serverUrl, \"/api/token\"), {\n      refreshToken: cookies.get('refreshToken')\n    }, {\n      headers: {\n        'Authorization': token\n      }\n    }).then(function (res) {\n      return res.json;\n    }).then(function (res) {\n      return cookies.set('token', res.token);\n    })[\"catch\"](function (err) {\n      if (err) console.error(err);\n    });\n  };\n\n  var fetcherAuth = function fetcherAuth(url) {\n    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, {\n      headers: {\n        'Authorization': token\n      }\n    }).then(function (res) {\n      return res.data;\n    });\n  };\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"\".concat(ctx.serverUrl, \"/api/ping\"), fetcherAuth),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (error) {\n    // console.error(error.response.data.msg)\n    logOut();\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 12\n      }\n    }, \"error loading. probably need to login again.\");\n  }\n\n  if (!data) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 12\n      }\n    }, \"loading...\");\n  }\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 10\n    }\n  }, \"secret page\"), \" \", __jsx(_components_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: true,\n    onClick: function onClick() {\n      return logOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 31\n    }\n  }, \"log out\"), __jsx(_components_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: true,\n    onClick: function onClick() {\n      return refreshToken();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 82\n    }\n  }, \"log out\"), JSON.stringify(data));\n}\n\n_s(Dashboard, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Dashboard;\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzP2JiZDgiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwiY3R4IiwiY29va2llcyIsIkNvb2tpZXMiLCJ0b2tlbiIsImdldCIsImxvZ091dCIsInJlbW92ZSIsIlJvdXRlciIsInB1c2giLCJyZWZyZXNoVG9rZW4iLCJheGlvcyIsInBvc3QiLCJzZXJ2ZXJVcmwiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJmZXRjaGVyQXV0aCIsInVybCIsImRhdGEiLCJ1c2VTV1IiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7OztBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0FBQUE7O0FBQ3JDLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxvREFBSixFQUFoQjtBQUNBLE1BQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVksT0FBWixDQUFkOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkI7QUFDQTtBQUNBSixXQUFPLENBQUNLLE1BQVIsQ0FBZSxRQUFmLEVBQXlCLElBQXpCO0FBQ0FDLHNEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0QsR0FMRDs7QUFPQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCQyxnREFBSyxDQUFDQyxJQUFOLFdBQWNYLEdBQUcsQ0FBQ1ksU0FBbEIsaUJBQXlDO0FBQUVILGtCQUFZLEVBQUVSLE9BQU8sQ0FBQ0csR0FBUixDQUFZLGNBQVo7QUFBaEIsS0FBekMsRUFBd0Y7QUFBRVMsYUFBTyxFQUFFO0FBQUUseUJBQWlCVjtBQUFuQjtBQUFYLEtBQXhGLEVBQ0dXLElBREgsQ0FDUSxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFSO0FBQUEsS0FEWCxFQUVHRixJQUZILENBRVEsVUFBQUMsR0FBRztBQUFBLGFBQUlkLE9BQU8sQ0FBQ2dCLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixHQUFHLENBQUNaLEtBQXpCLENBQUo7QUFBQSxLQUZYLFdBR1MsVUFBQWUsR0FBRyxFQUFJO0FBQUUsVUFBSUEsR0FBSixFQUFTQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUFvQixLQUgvQztBQUlELEdBTEQ7O0FBT0EsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsR0FBRztBQUFBLFdBQUlaLDRDQUFLLENBQUNOLEdBQU4sQ0FBVWtCLEdBQVYsRUFBZTtBQUFFVCxhQUFPLEVBQUU7QUFBRSx5QkFBaUJWO0FBQW5CO0FBQVgsS0FBZixFQUF3RFcsSUFBeEQsQ0FBNkQsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ1EsSUFBUjtBQUFBLEtBQWhFLENBQUo7QUFBQSxHQUF2Qjs7QUFsQnFDLGdCQW1CYkMsbURBQU0sV0FBSXhCLEdBQUcsQ0FBQ1ksU0FBUixnQkFBOEJTLFdBQTlCLENBbkJPO0FBQUEsTUFtQjdCRSxJQW5CNkIsV0FtQjdCQSxJQW5CNkI7QUFBQSxNQW1CdkJILEtBbkJ1QixXQW1CdkJBLEtBbkJ1Qjs7QUFvQnJDLE1BQUlBLEtBQUosRUFBVztBQUNUO0FBQ0FmLFVBQU07QUFDTixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBQVA7QUFDRDs7QUFDRCxNQUFJLENBQUNrQixJQUFMLEVBQVc7QUFDVCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDRDs7QUFFRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFMLE9BQTBCLE1BQUMsdURBQUQ7QUFBSyxXQUFPLE1BQVo7QUFBYSxXQUFPLEVBQUU7QUFBQSxhQUFNbEIsTUFBTSxFQUFaO0FBQUEsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUExQixFQUE2RSxNQUFDLHVEQUFEO0FBQUssV0FBTyxNQUFaO0FBQWEsV0FBTyxFQUFFO0FBQUEsYUFBTUksWUFBWSxFQUFsQjtBQUFBLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBN0UsRUFBdUlnQixJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZixDQUF2SSxDQURGO0FBR0Q7O0dBaEN1QnhCLFM7VUFtQkV5QiwyQzs7O0tBbkJGekIsUyIsImZpbGUiOiIuL3BhZ2VzL2Rhc2hib2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEJ0biBmcm9tICcuLi9jb21wb25lbnRzL2J0bidcblxuLy8gc2V0IHVwIGNvb2tpZXNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKGN0eCkge1xuICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgY29uc3QgdG9rZW4gPSBjb29raWVzLmdldCgndG9rZW4nKTtcblxuICBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XG4gICAgLy8gY29va2llcy5yZW1vdmUoJ3Rva2VuJywgbnVsbCk7XG4gICAgLy8gY29va2llcy5yZW1vdmUoJ3JlZnJlc2hUb2tlbicsIG51bGwpO1xuICAgIGNvb2tpZXMucmVtb3ZlKCdzdGF0dXMnLCBudWxsKTtcbiAgICBSb3V0ZXIucHVzaCgnLycpO1xuICB9XG5cbiAgY29uc3QgcmVmcmVzaFRva2VuID0gKCkgPT4ge1xuICAgIGF4aW9zLnBvc3QoYCR7Y3R4LnNlcnZlclVybH0vYXBpL3Rva2VuYCwgeyByZWZyZXNoVG9rZW46IGNvb2tpZXMuZ2V0KCdyZWZyZXNoVG9rZW4nKSB9LCB7IGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiB0b2tlbiB9IH0pXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24pXG4gICAgICAudGhlbihyZXMgPT4gY29va2llcy5zZXQoJ3Rva2VuJywgcmVzLnRva2VuKSlcbiAgICAgIC5jYXRjaChlcnIgPT4geyBpZiAoZXJyKSBjb25zb2xlLmVycm9yKGVycikgfSk7XG4gIH1cblxuICBjb25zdCBmZXRjaGVyQXV0aCA9IHVybCA9PiBheGlvcy5nZXQodXJsLCB7IGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiB0b2tlbiB9IH0pLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGAke2N0eC5zZXJ2ZXJVcmx9L2FwaS9waW5nYCwgZmV0Y2hlckF1dGgpO1xuICBpZiAoZXJyb3IpIHtcbiAgICAvLyBjb25zb2xlLmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKVxuICAgIGxvZ091dCgpO1xuICAgIHJldHVybiA8ZGl2PmVycm9yIGxvYWRpbmcuIHByb2JhYmx5IG5lZWQgdG8gbG9naW4gYWdhaW4uPC9kaXY+XG4gIH1cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PjxoMj5zZWNyZXQgcGFnZTwvaDI+IDxCdG4gcHJpbWFyeSBvbkNsaWNrPXsoKSA9PiBsb2dPdXQoKX0+bG9nIG91dDwvQnRuPjxCdG4gcHJpbWFyeSBvbkNsaWNrPXsoKSA9PiByZWZyZXNoVG9rZW4oKX0+bG9nIG91dDwvQnRuPntKU09OLnN0cmluZ2lmeShkYXRhKX08L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY3R4KSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNlcnZlclVybDogcHJvY2Vzcy5lbnYuU0VSVkVSXG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

})