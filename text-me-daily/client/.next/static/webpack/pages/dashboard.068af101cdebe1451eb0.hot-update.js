webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dashboard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"../node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"../node_modules/swr/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/btn */ \"./components/btn.js\");\nvar _jsxFileName = \"/Users/Doug/Library/Mobile Documents/com~apple~CloudDocs/Development/20200912-text-me-daily/text-me-daily/client/pages/dashboard.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // set up cookies\n\nvar __N_SSG = true;\nfunction Dashboard(ctx) {\n  _s();\n\n  var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_1__[\"Cookies\"]();\n  var token = cookies.get('token');\n\n  var fetcherAuth = function fetcherAuth(url) {\n    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, {\n      \"token\": token\n    }).then(function (res) {\n      return res.data;\n    });\n  };\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"\".concat(ctx.serverUrl, \"/api/ping\"), fetcherAuth),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  var logOut = function logOut() {\n    cookies.set('token', null);\n    cookies.set('refreshToken', null);\n    cookies.set('status', null);\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n  };\n\n  if (error) {\n    console.log(error.response.data.msg);\n    console.log(\"redirecting back to main page\");\n\n    if (ctx.res) {\n      ctx.res.writeHead(302, {\n        Location: '/'\n      });\n      ctx.res.end();\n    } else {\n      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n    }\n\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 12\n      }\n    }, \"error loading. probably not authorized.\");\n  }\n\n  if (!data) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 12\n      }\n    }, \"loading...\");\n  }\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 10\n    }\n  }, \"secret page\"), \" \", __jsx(_components_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: true,\n    onClick: function onClick() {\n      return logOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 31\n    }\n  }, \"log out\"), data);\n}\n\n_s(Dashboard, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Dashboard;\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzP2JiZDgiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwiY3R4IiwiY29va2llcyIsIkNvb2tpZXMiLCJ0b2tlbiIsImdldCIsImZldGNoZXJBdXRoIiwidXJsIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInVzZVNXUiIsInNlcnZlclVybCIsImVycm9yIiwibG9nT3V0Iiwic2V0IiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIm1zZyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7OztBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0FBQUE7O0FBQ3JDLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxvREFBSixFQUFoQjtBQUNBLE1BQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVksT0FBWixDQUFkOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEdBQUc7QUFBQSxXQUFJQyw0Q0FBSyxDQUFDSCxHQUFOLENBQVVFLEdBQVYsRUFBZTtBQUFFLGVBQVNIO0FBQVgsS0FBZixFQUFtQ0ssSUFBbkMsQ0FBd0MsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBUjtBQUFBLEtBQTNDLENBQUo7QUFBQSxHQUF2Qjs7QUFIcUMsZ0JBSWJDLG1EQUFNLFdBQUlYLEdBQUcsQ0FBQ1ksU0FBUixnQkFBOEJQLFdBQTlCLENBSk87QUFBQSxNQUk3QkssSUFKNkIsV0FJN0JBLElBSjZCO0FBQUEsTUFJdkJHLEtBSnVCLFdBSXZCQSxLQUp1Qjs7QUFLckMsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQmIsV0FBTyxDQUFDYyxHQUFSLENBQVksT0FBWixFQUFxQixJQUFyQjtBQUNBZCxXQUFPLENBQUNjLEdBQVIsQ0FBWSxjQUFaLEVBQTRCLElBQTVCO0FBQ0FkLFdBQU8sQ0FBQ2MsR0FBUixDQUFZLFFBQVosRUFBc0IsSUFBdEI7QUFDQUMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDRCxHQUxEOztBQU9BLE1BQUlKLEtBQUosRUFBVztBQUNUSyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sS0FBSyxDQUFDTyxRQUFOLENBQWVWLElBQWYsQ0FBb0JXLEdBQWhDO0FBQ0FILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaOztBQUNBLFFBQUluQixHQUFHLENBQUNTLEdBQVIsRUFBYTtBQUNYVCxTQUFHLENBQUNTLEdBQUosQ0FBUWEsU0FBUixDQUFrQixHQUFsQixFQUF1QjtBQUNyQkMsZ0JBQVEsRUFBRTtBQURXLE9BQXZCO0FBR0F2QixTQUFHLENBQUNTLEdBQUosQ0FBUWUsR0FBUjtBQUNELEtBTEQsTUFLTztBQUNMUix3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNEOztBQUNELFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFBUDtBQUNEOztBQUNELE1BQUksQ0FBQ1AsSUFBTCxFQUFXO0FBQ1QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFQO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTCxPQUEwQixNQUFDLHVEQUFEO0FBQUssV0FBTyxNQUFaO0FBQWEsV0FBTyxFQUFFO0FBQUEsYUFBTUksTUFBTSxFQUFaO0FBQUEsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUExQixFQUE4RUosSUFBOUUsQ0FERjtBQUdEOztHQWhDdUJYLFM7VUFJRVksMkM7OztLQUpGWixTIiwiZmlsZSI6Ii4vcGFnZXMvZGFzaGJvYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQnRuIGZyb20gJy4uL2NvbXBvbmVudHMvYnRuJ1xuXG4vLyBzZXQgdXAgY29va2llc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoY3R4KSB7XG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICBjb25zdCBmZXRjaGVyQXV0aCA9IHVybCA9PiBheGlvcy5nZXQodXJsLCB7IFwidG9rZW5cIjogdG9rZW4gfSkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYCR7Y3R4LnNlcnZlclVybH0vYXBpL3BpbmdgLCBmZXRjaGVyQXV0aCk7XG4gIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcbiAgICBjb29raWVzLnNldCgndG9rZW4nLCBudWxsKTtcbiAgICBjb29raWVzLnNldCgncmVmcmVzaFRva2VuJywgbnVsbCk7XG4gICAgY29va2llcy5zZXQoJ3N0YXR1cycsIG51bGwpO1xuICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XG4gICAgY29uc29sZS5sb2coXCJyZWRpcmVjdGluZyBiYWNrIHRvIG1haW4gcGFnZVwiKTtcbiAgICBpZiAoY3R4LnJlcykge1xuICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7XG4gICAgICAgIExvY2F0aW9uOiAnLydcbiAgICAgIH0pXG4gICAgICBjdHgucmVzLmVuZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKCcvJylcbiAgICB9XG4gICAgcmV0dXJuIDxkaXY+ZXJyb3IgbG9hZGluZy4gcHJvYmFibHkgbm90IGF1dGhvcml6ZWQuPC9kaXY+XG4gIH1cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PjxoMj5zZWNyZXQgcGFnZTwvaDI+IDxCdG4gcHJpbWFyeSBvbkNsaWNrPXsoKSA9PiBsb2dPdXQoKX0+bG9nIG91dDwvQnRuPntkYXRhfTwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHgpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc2VydmVyVXJsOiBwcm9jZXNzLmVudi5TRVJWRVJcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

})