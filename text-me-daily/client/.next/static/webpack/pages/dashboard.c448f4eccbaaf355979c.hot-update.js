webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dashboard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"../node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"../node_modules/swr/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/btn */ \"./components/btn.js\");\nvar _jsxFileName = \"/Users/Doug/Library/Mobile Documents/com~apple~CloudDocs/Development/20200912-text-me-daily/text-me-daily/client/pages/dashboard.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // set up cookies\n\nvar __N_SSG = true;\nfunction Dashboard(_ref) {\n  _s();\n\n  var serverUrl = _ref.serverUrl;\n  var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_1__[\"Cookies\"]();\n  var token = cookies.get('token');\n\n  var logOut = function logOut() {\n    // cookies.remove('token', null);\n    // cookies.remove('refreshToken', null);\n    cookies.remove('status', null);\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n  };\n\n  var refreshToken = function refreshToken() {\n    // console.log(cookies.get('refreshToken'));\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"\".concat(serverUrl, \"/api/token\"), {\n      refreshToken: cookies.get('refreshToken'),\n      user: cookies.get('user')\n    }, {\n      headers: {\n        'Authorization': token\n      }\n    }).then(function (res) {\n      if (res.data.token) {\n        cookies.set('token', res.data.token);\n        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.reload();\n      } else {\n        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n      }\n    })[\"catch\"](function (err) {\n      if (err) console.error(err);\n    });\n  };\n\n  var fetcherAuth = function fetcherAuth(url) {\n    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, {\n      headers: {\n        'Authorization': token\n      }\n    }).then(function (res) {\n      return res.data;\n    });\n  };\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"\".concat(serverUrl, \"/api/ping\"), fetcherAuth),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (error) {\n    // console.error(error.response.data.msg)\n    cookies.remove('status');\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }\n    }, \"error loading. probably need to login again.\"), __jsx(_components_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      primary: true,\n      onClick: function onClick() {\n        return refreshToken();\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }\n    }, \"refresh\"));\n  }\n\n  if (!data) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 12\n      }\n    }, \"loading...\");\n  }\n\n  cookies.set('status', 'in');\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 10\n    }\n  }, \"secret page\"), \" \", __jsx(_components_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: true,\n    onClick: function onClick() {\n      return logOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 31\n    }\n  }, \"log out\"), __jsx(_components_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: true,\n    onClick: function onClick() {\n      return refreshToken();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 82\n    }\n  }, \"refresh\"), JSON.stringify(data));\n}\n\n_s(Dashboard, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Dashboard;\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzP2JiZDgiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwic2VydmVyVXJsIiwiY29va2llcyIsIkNvb2tpZXMiLCJ0b2tlbiIsImdldCIsImxvZ091dCIsInJlbW92ZSIsIlJvdXRlciIsInB1c2giLCJyZWZyZXNoVG9rZW4iLCJheGlvcyIsInBvc3QiLCJ1c2VyIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJkYXRhIiwic2V0IiwicmVsb2FkIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZmV0Y2hlckF1dGgiLCJ1cmwiLCJ1c2VTV1IiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7OztBQUVlLFNBQVNBLFNBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDL0MsTUFBTUMsT0FBTyxHQUFHLElBQUlDLG9EQUFKLEVBQWhCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRixPQUFPLENBQUNHLEdBQVIsQ0FBWSxPQUFaLENBQWQ7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQjtBQUNBO0FBQ0FKLFdBQU8sQ0FBQ0ssTUFBUixDQUFlLFFBQWYsRUFBeUIsSUFBekI7QUFDQUMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDRCxHQUxEOztBQU9BLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekI7QUFDQUMsZ0RBQUssQ0FBQ0MsSUFBTixXQUFjWCxTQUFkLGlCQUFxQztBQUFFUyxrQkFBWSxFQUFFUixPQUFPLENBQUNHLEdBQVIsQ0FBWSxjQUFaLENBQWhCO0FBQTZDUSxVQUFJLEVBQUVYLE9BQU8sQ0FBQ0csR0FBUixDQUFZLE1BQVo7QUFBbkQsS0FBckMsRUFBK0c7QUFBRVMsYUFBTyxFQUFFO0FBQUUseUJBQWlCVjtBQUFuQjtBQUFYLEtBQS9HLEVBQ0dXLElBREgsQ0FDUSxVQUFBQyxHQUFHLEVBQUk7QUFDWCxVQUFJQSxHQUFHLENBQUNDLElBQUosQ0FBU2IsS0FBYixFQUFvQjtBQUNsQkYsZUFBTyxDQUFDZ0IsR0FBUixDQUFZLE9BQVosRUFBcUJGLEdBQUcsQ0FBQ0MsSUFBSixDQUFTYixLQUE5QjtBQUNBSSwwREFBTSxDQUFDVyxNQUFQO0FBQ0QsT0FIRCxNQUdPO0FBQ0xYLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7QUFDRixLQVJILFdBU1MsVUFBQVcsR0FBRyxFQUFJO0FBQUUsVUFBSUEsR0FBSixFQUFTQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUFvQixLQVQvQztBQVVELEdBWkQ7O0FBY0EsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsR0FBRztBQUFBLFdBQUliLDRDQUFLLENBQUNOLEdBQU4sQ0FBVW1CLEdBQVYsRUFBZTtBQUFFVixhQUFPLEVBQUU7QUFBRSx5QkFBaUJWO0FBQW5CO0FBQVgsS0FBZixFQUF3RFcsSUFBeEQsQ0FBNkQsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBUjtBQUFBLEtBQWhFLENBQUo7QUFBQSxHQUF2Qjs7QUF6QitDLGdCQTBCdkJRLG1EQUFNLFdBQUl4QixTQUFKLGdCQUEwQnNCLFdBQTFCLENBMUJpQjtBQUFBLE1BMEJ2Q04sSUExQnVDLFdBMEJ2Q0EsSUExQnVDO0FBQUEsTUEwQmpDSyxLQTFCaUMsV0EwQmpDQSxLQTFCaUM7O0FBMkIvQyxNQUFJQSxLQUFKLEVBQVc7QUFDVDtBQUNBcEIsV0FBTyxDQUFDSyxNQUFSLENBQWUsUUFBZjtBQUNBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREYsRUFFRSxNQUFDLHVEQUFEO0FBQUssYUFBTyxNQUFaO0FBQWEsYUFBTyxFQUFFO0FBQUEsZUFBTUcsWUFBWSxFQUFsQjtBQUFBLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsQ0FERjtBQU1EOztBQUNELE1BQUksQ0FBQ08sSUFBTCxFQUFXO0FBQ1QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFQO0FBQ0Q7O0FBRURmLFNBQU8sQ0FBQ2dCLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLElBQXRCO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTCxPQUEwQixNQUFDLHVEQUFEO0FBQUssV0FBTyxNQUFaO0FBQWEsV0FBTyxFQUFFO0FBQUEsYUFBTVosTUFBTSxFQUFaO0FBQUEsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUExQixFQUE2RSxNQUFDLHVEQUFEO0FBQUssV0FBTyxNQUFaO0FBQWEsV0FBTyxFQUFFO0FBQUEsYUFBTUksWUFBWSxFQUFsQjtBQUFBLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBN0UsRUFBdUlnQixJQUFJLENBQUNDLFNBQUwsQ0FBZVYsSUFBZixDQUF2SSxDQURGO0FBR0Q7O0dBN0N1QmpCLFM7VUEwQkV5QiwyQzs7O0tBMUJGekIsUyIsImZpbGUiOiIuL3BhZ2VzL2Rhc2hib2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEJ0biBmcm9tICcuLi9jb21wb25lbnRzL2J0bidcblxuLy8gc2V0IHVwIGNvb2tpZXNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKHsgc2VydmVyVXJsIH0pIHtcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gIGNvbnN0IHRva2VuID0gY29va2llcy5nZXQoJ3Rva2VuJyk7XG5cbiAgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICAgIC8vIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicsIG51bGwpO1xuICAgIC8vIGNvb2tpZXMucmVtb3ZlKCdyZWZyZXNoVG9rZW4nLCBudWxsKTtcbiAgICBjb29raWVzLnJlbW92ZSgnc3RhdHVzJywgbnVsbCk7XG4gICAgUm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4gIGNvbnN0IHJlZnJlc2hUb2tlbiA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhjb29raWVzLmdldCgncmVmcmVzaFRva2VuJykpO1xuICAgIGF4aW9zLnBvc3QoYCR7c2VydmVyVXJsfS9hcGkvdG9rZW5gLCB7IHJlZnJlc2hUb2tlbjogY29va2llcy5nZXQoJ3JlZnJlc2hUb2tlbicpLCB1c2VyOiBjb29raWVzLmdldCgndXNlcicpIH0sIHsgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IHRva2VuIH0gfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuZGF0YS50b2tlbikge1xuICAgICAgICAgIGNvb2tpZXMuc2V0KCd0b2tlbicsIHJlcy5kYXRhLnRva2VuKVxuICAgICAgICAgIFJvdXRlci5yZWxvYWQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4geyBpZiAoZXJyKSBjb25zb2xlLmVycm9yKGVycikgfSk7XG4gIH1cblxuICBjb25zdCBmZXRjaGVyQXV0aCA9IHVybCA9PiBheGlvcy5nZXQodXJsLCB7IGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiB0b2tlbiB9IH0pLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGAke3NlcnZlclVybH0vYXBpL3BpbmdgLCBmZXRjaGVyQXV0aCk7XG4gIGlmIChlcnJvcikge1xuICAgIC8vIGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpXG4gICAgY29va2llcy5yZW1vdmUoJ3N0YXR1cycpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PmVycm9yIGxvYWRpbmcuIHByb2JhYmx5IG5lZWQgdG8gbG9naW4gYWdhaW4uPC9kaXY+XG4gICAgICAgIDxCdG4gcHJpbWFyeSBvbkNsaWNrPXsoKSA9PiByZWZyZXNoVG9rZW4oKX0+cmVmcmVzaDwvQnRuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgfVxuXG4gIGNvb2tpZXMuc2V0KCdzdGF0dXMnLCAnaW4nKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PjxoMj5zZWNyZXQgcGFnZTwvaDI+IDxCdG4gcHJpbWFyeSBvbkNsaWNrPXsoKSA9PiBsb2dPdXQoKX0+bG9nIG91dDwvQnRuPjxCdG4gcHJpbWFyeSBvbkNsaWNrPXsoKSA9PiByZWZyZXNoVG9rZW4oKX0+cmVmcmVzaDwvQnRuPntKU09OLnN0cmluZ2lmeShkYXRhKX08L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY3R4KSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNlcnZlclVybDogcHJvY2Vzcy5lbnYuU0VSVkVSXG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

})