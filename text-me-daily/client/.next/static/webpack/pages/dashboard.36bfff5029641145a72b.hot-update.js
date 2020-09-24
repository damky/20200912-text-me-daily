webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dashboard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"../node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"../node_modules/swr/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/btn */ \"./components/btn.js\");\nvar _jsxFileName = \"/Users/Doug/Library/Mobile Documents/com~apple~CloudDocs/Development/20200912-text-me-daily/text-me-daily/client/pages/dashboard.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // set up cookies\n\nvar __N_SSG = true;\nfunction Dashboard(ctx) {\n  _s();\n\n  var logOut = function logOut() {\n    // cookies.remove('token', null);\n    // cookies.remove('refreshToken', null);\n    cookies.remove('status', null);\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n  };\n\n  var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_1__[\"Cookies\"]();\n  var token = cookies.get('token');\n\n  var fetcherAuth = function fetcherAuth(url) {\n    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, {\n      token: token\n    }).then(function (res) {\n      return res.data;\n    });\n  };\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"\".concat(ctx.serverUrl, \"/api/ping\"), fetcherAuth),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (error) {\n    console.error(error.response.data.msg);\n    logOut();\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 12\n      }\n    }, \"error loading. probably need to login again.\");\n  }\n\n  if (!data) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 12\n      }\n    }, \"loading...\");\n  }\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 10\n    }\n  }, \"secret page\"), \" \", __jsx(_components_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: true,\n    onClick: function onClick() {\n      return logOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 31\n    }\n  }, \"log out\"), JSON.stringify(data));\n}\n\n_s(Dashboard, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Dashboard;\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzP2JiZDgiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwiY3R4IiwibG9nT3V0IiwiY29va2llcyIsInJlbW92ZSIsIlJvdXRlciIsInB1c2giLCJDb29raWVzIiwidG9rZW4iLCJnZXQiLCJmZXRjaGVyQXV0aCIsInVybCIsImF4aW9zIiwidGhlbiIsInJlcyIsImRhdGEiLCJ1c2VTV1IiLCJzZXJ2ZXJVcmwiLCJlcnJvciIsImNvbnNvbGUiLCJyZXNwb25zZSIsIm1zZyIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7O0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0I7QUFBQTs7QUFDckMsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQjtBQUNBO0FBQ0FDLFdBQU8sQ0FBQ0MsTUFBUixDQUFlLFFBQWYsRUFBeUIsSUFBekI7QUFDQUMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDRCxHQUxEOztBQU1BLE1BQU1ILE9BQU8sR0FBRyxJQUFJSSxvREFBSixFQUFoQjtBQUNBLE1BQU1DLEtBQUssR0FBR0wsT0FBTyxDQUFDTSxHQUFSLENBQVksT0FBWixDQUFkOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEdBQUc7QUFBQSxXQUFJQyw0Q0FBSyxDQUFDSCxHQUFOLENBQVVFLEdBQVYsRUFBZTtBQUFFSCxXQUFLLEVBQUVBO0FBQVQsS0FBZixFQUFpQ0ssSUFBakMsQ0FBc0MsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBUjtBQUFBLEtBQXpDLENBQUo7QUFBQSxHQUF2Qjs7QUFUcUMsZ0JBVWJDLG1EQUFNLFdBQUlmLEdBQUcsQ0FBQ2dCLFNBQVIsZ0JBQThCUCxXQUE5QixDQVZPO0FBQUEsTUFVN0JLLElBVjZCLFdBVTdCQSxJQVY2QjtBQUFBLE1BVXZCRyxLQVZ1QixXQVV2QkEsS0FWdUI7O0FBV3JDLE1BQUlBLEtBQUosRUFBVztBQUNUQyxXQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBSyxDQUFDRSxRQUFOLENBQWVMLElBQWYsQ0FBb0JNLEdBQWxDO0FBQ0FuQixVQUFNO0FBQ04sV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNEQUFQO0FBQ0Q7O0FBQ0QsTUFBSSxDQUFDYSxJQUFMLEVBQVc7QUFDVCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDRDs7QUFFRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFMLE9BQTBCLE1BQUMsdURBQUQ7QUFBSyxXQUFPLE1BQVo7QUFBYSxXQUFPLEVBQUU7QUFBQSxhQUFNYixNQUFNLEVBQVo7QUFBQSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTFCLEVBQThFb0IsSUFBSSxDQUFDQyxTQUFMLENBQWVSLElBQWYsQ0FBOUUsQ0FERjtBQUdEOztHQXZCdUJmLFM7VUFVRWdCLDJDOzs7S0FWRmhCLFMiLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBCdG4gZnJvbSAnLi4vY29tcG9uZW50cy9idG4nXG5cbi8vIHNldCB1cCBjb29raWVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZChjdHgpIHtcbiAgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICAgIC8vIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicsIG51bGwpO1xuICAgIC8vIGNvb2tpZXMucmVtb3ZlKCdyZWZyZXNoVG9rZW4nLCBudWxsKTtcbiAgICBjb29raWVzLnJlbW92ZSgnc3RhdHVzJywgbnVsbCk7XG4gICAgUm91dGVyLnB1c2goJy8nKTtcbiAgfVxuICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgY29uc3QgdG9rZW4gPSBjb29raWVzLmdldCgndG9rZW4nKTtcbiAgY29uc3QgZmV0Y2hlckF1dGggPSB1cmwgPT4gYXhpb3MuZ2V0KHVybCwgeyB0b2tlbjogdG9rZW4gfSkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYCR7Y3R4LnNlcnZlclVybH0vYXBpL3BpbmdgLCBmZXRjaGVyQXV0aCk7XG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpXG4gICAgbG9nT3V0KCk7XG4gICAgcmV0dXJuIDxkaXY+ZXJyb3IgbG9hZGluZy4gcHJvYmFibHkgbmVlZCB0byBsb2dpbiBhZ2Fpbi48L2Rpdj5cbiAgfVxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+PGgyPnNlY3JldCBwYWdlPC9oMj4gPEJ0biBwcmltYXJ5IG9uQ2xpY2s9eygpID0+IGxvZ091dCgpfT5sb2cgb3V0PC9CdG4+e0pTT04uc3RyaW5naWZ5KGRhdGEpfTwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHgpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc2VydmVyVXJsOiBwcm9jZXNzLmVudi5TRVJWRVJcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

})