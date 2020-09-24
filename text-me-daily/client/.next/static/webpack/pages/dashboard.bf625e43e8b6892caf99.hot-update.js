webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dashboard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"../node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"../node_modules/swr/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/btn */ \"./components/btn.js\");\nvar _jsxFileName = \"/Users/Doug/Library/Mobile Documents/com~apple~CloudDocs/Development/20200912-text-me-daily/text-me-daily/client/pages/dashboard.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // set up cookies\n\nvar __N_SSG = true;\nfunction Dashboard(ctx) {\n  _s();\n\n  var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_1__[\"Cookies\"]();\n  var token = cookies.get('token');\n\n  var logOut = function logOut() {\n    // cookies.remove('token', null);\n    // cookies.remove('refreshToken', null);\n    cookies.remove('status', null);\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n  };\n\n  var refreshToken = function refreshToken() {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"\".concat(ctx.serverUrl, \"/api/token\"), {\n      refreshToken: cookies.get('refreshToken')\n    }, {\n      headers: {\n        'Authorization': token\n      }\n    }).then(function (res) {\n      return res.json;\n    }).then(function (res) {\n      return cookies.set('token', res.token);\n    })[\"catch\"](function (err) {\n      if (err) console.error(err);\n    });\n  };\n\n  var fetcherAuth = function fetcherAuth(url) {\n    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, {\n      headers: {\n        'Authorization': token\n      }\n    }).then(function (res) {\n      return res.data;\n    });\n  };\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"\".concat(ctx.serverUrl, \"/api/ping\"), fetcherAuth),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (error) {\n    // console.error(error.response.data.msg)\n    logOut();\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 12\n      }\n    }, \"error loading. probably need to login again.\");\n  }\n\n  if (!data) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 12\n      }\n    }, \"loading...\");\n  }\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 10\n    }\n  }, \"secret page\"), \" \", __jsx(_components_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: true,\n    onClick: function onClick() {\n      return logOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 31\n    }\n  }, \"log out\"), __jsx(_components_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: true,\n    onClick: function onClick() {\n      return refreshToken();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 82\n    }\n  }, \"log out\"), JSON.stringify(data));\n}\n\n_s(Dashboard, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Dashboard;\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzP2JiZDgiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwiY3R4IiwiY29va2llcyIsIkNvb2tpZXMiLCJ0b2tlbiIsImdldCIsImxvZ091dCIsInJlbW92ZSIsIlJvdXRlciIsInB1c2giLCJyZWZyZXNoVG9rZW4iLCJheGlvcyIsInBvc3QiLCJzZXJ2ZXJVcmwiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJmZXRjaGVyQXV0aCIsInVybCIsImRhdGEiLCJ1c2VTV1IiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7OztBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0FBQUE7O0FBQ3JDLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxvREFBSixFQUFoQjtBQUNBLE1BQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVksT0FBWixDQUFkOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkI7QUFDQTtBQUNBSixXQUFPLENBQUNLLE1BQVIsQ0FBZSxRQUFmLEVBQXlCLElBQXpCO0FBQ0FDLHNEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0QsR0FMRDs7QUFPQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCQyxnREFBSyxDQUFDQyxJQUFOLFdBQWNYLEdBQUcsQ0FBQ1ksU0FBbEIsaUJBQXlDO0FBQUVILGtCQUFZLEVBQUVSLE9BQU8sQ0FBQ0csR0FBUixDQUFZLGNBQVo7QUFBaEIsS0FBekMsRUFBd0Y7QUFBRVMsYUFBTyxFQUFFO0FBQUUseUJBQWlCVjtBQUFuQjtBQUFYLEtBQXhGLEVBQWlJVyxJQUFqSSxDQUFzSSxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFSO0FBQUEsS0FBekksRUFBdUpGLElBQXZKLENBQTRKLFVBQUFDLEdBQUc7QUFBQSxhQUFJZCxPQUFPLENBQUNnQixHQUFSLENBQVksT0FBWixFQUFxQkYsR0FBRyxDQUFDWixLQUF6QixDQUFKO0FBQUEsS0FBL0osV0FBME0sVUFBQWUsR0FBRyxFQUFJO0FBQUUsVUFBSUEsR0FBSixFQUFTQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUFvQixLQUFoUDtBQUNELEdBRkQ7O0FBSUEsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsR0FBRztBQUFBLFdBQUlaLDRDQUFLLENBQUNOLEdBQU4sQ0FBVWtCLEdBQVYsRUFBZTtBQUFFVCxhQUFPLEVBQUU7QUFBRSx5QkFBaUJWO0FBQW5CO0FBQVgsS0FBZixFQUF3RFcsSUFBeEQsQ0FBNkQsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ1EsSUFBUjtBQUFBLEtBQWhFLENBQUo7QUFBQSxHQUF2Qjs7QUFmcUMsZ0JBZ0JiQyxtREFBTSxXQUFJeEIsR0FBRyxDQUFDWSxTQUFSLGdCQUE4QlMsV0FBOUIsQ0FoQk87QUFBQSxNQWdCN0JFLElBaEI2QixXQWdCN0JBLElBaEI2QjtBQUFBLE1BZ0J2QkgsS0FoQnVCLFdBZ0J2QkEsS0FoQnVCOztBQWlCckMsTUFBSUEsS0FBSixFQUFXO0FBQ1Q7QUFDQWYsVUFBTTtBQUNOLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzREFBUDtBQUNEOztBQUNELE1BQUksQ0FBQ2tCLElBQUwsRUFBVztBQUNULFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDtBQUNEOztBQUVELFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUwsT0FBMEIsTUFBQyx1REFBRDtBQUFLLFdBQU8sTUFBWjtBQUFhLFdBQU8sRUFBRTtBQUFBLGFBQU1sQixNQUFNLEVBQVo7QUFBQSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTFCLEVBQTZFLE1BQUMsdURBQUQ7QUFBSyxXQUFPLE1BQVo7QUFBYSxXQUFPLEVBQUU7QUFBQSxhQUFNSSxZQUFZLEVBQWxCO0FBQUEsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE3RSxFQUF1SWdCLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmLENBQXZJLENBREY7QUFHRDs7R0E3QnVCeEIsUztVQWdCRXlCLDJDOzs7S0FoQkZ6QixTIiwiZmlsZSI6Ii4vcGFnZXMvZGFzaGJvYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQnRuIGZyb20gJy4uL2NvbXBvbmVudHMvYnRuJ1xuXG4vLyBzZXQgdXAgY29va2llc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoY3R4KSB7XG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuZ2V0KCd0b2tlbicpO1xuXG4gIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcbiAgICAvLyBjb29raWVzLnJlbW92ZSgndG9rZW4nLCBudWxsKTtcbiAgICAvLyBjb29raWVzLnJlbW92ZSgncmVmcmVzaFRva2VuJywgbnVsbCk7XG4gICAgY29va2llcy5yZW1vdmUoJ3N0YXR1cycsIG51bGwpO1xuICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gIH1cblxuICBjb25zdCByZWZyZXNoVG9rZW4gPSAoKSA9PiB7XG4gICAgYXhpb3MucG9zdChgJHtjdHguc2VydmVyVXJsfS9hcGkvdG9rZW5gLCB7IHJlZnJlc2hUb2tlbjogY29va2llcy5nZXQoJ3JlZnJlc2hUb2tlbicpIH0sIHsgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IHRva2VuIH0gfSkudGhlbihyZXMgPT4gcmVzLmpzb24pLnRoZW4ocmVzID0+IGNvb2tpZXMuc2V0KCd0b2tlbicsIHJlcy50b2tlbikpLmNhdGNoKGVyciA9PiB7IGlmIChlcnIpIGNvbnNvbGUuZXJyb3IoZXJyKSB9KTtcbiAgfVxuXG4gIGNvbnN0IGZldGNoZXJBdXRoID0gdXJsID0+IGF4aW9zLmdldCh1cmwsIHsgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IHRva2VuIH0gfSkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYCR7Y3R4LnNlcnZlclVybH0vYXBpL3BpbmdgLCBmZXRjaGVyQXV0aCk7XG4gIGlmIChlcnJvcikge1xuICAgIC8vIGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpXG4gICAgbG9nT3V0KCk7XG4gICAgcmV0dXJuIDxkaXY+ZXJyb3IgbG9hZGluZy4gcHJvYmFibHkgbmVlZCB0byBsb2dpbiBhZ2Fpbi48L2Rpdj5cbiAgfVxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+PGgyPnNlY3JldCBwYWdlPC9oMj4gPEJ0biBwcmltYXJ5IG9uQ2xpY2s9eygpID0+IGxvZ091dCgpfT5sb2cgb3V0PC9CdG4+PEJ0biBwcmltYXJ5IG9uQ2xpY2s9eygpID0+IHJlZnJlc2hUb2tlbigpfT5sb2cgb3V0PC9CdG4+e0pTT04uc3RyaW5naWZ5KGRhdGEpfTwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHgpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc2VydmVyVXJsOiBwcm9jZXNzLmVudi5TRVJWRVJcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

})