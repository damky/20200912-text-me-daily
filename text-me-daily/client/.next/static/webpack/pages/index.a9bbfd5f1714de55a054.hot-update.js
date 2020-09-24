webpackHotUpdate_N_E("pages/index",{

/***/ "./components/signIn.js":
/*!******************************!*\
  !*** ./components/signIn.js ***!
  \******************************/
/*! exports provided: ErrorMsg, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorMsg\", function() { return ErrorMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./btn */ \"./components/btn.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"../node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"../node_modules/swr/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/Doug/Library/Mobile Documents/com~apple~CloudDocs/Development/20200912-text-me-daily/text-me-daily/client/components/signIn.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nfunction ErrorMsg(_ref) {\n  var children = _ref.children;\n  return __jsx(\"div\", {\n    className: \"errorMsg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 10\n    }\n  }, children);\n}\n_c = ErrorMsg;\nfunction SignIn(_ref2) {\n  _s();\n\n  var _this = this;\n\n  var signin = _ref2.signin,\n      signup = _ref2.signup,\n      setNeedSignUp = _ref2.setNeedSignUp,\n      setCreatedUser = _ref2.setCreatedUser,\n      serverUrl = _ref2.serverUrl;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      logInError = _useState[0],\n      setLogInError = _useState[1];\n\n  var createUser = function createUser(values) {\n    try {\n      return fetch(serverUrl + '/api/createuser', {\n        method: \"POST\",\n        headers: {\n          'Content-type': 'application/json'\n        },\n        body: JSON.stringify(values)\n      });\n    } catch (err) {\n      console.error(err);\n      setLogInError(true);\n    }\n  };\n\n  var logInAndSetCookies = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {\n      var cookies, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_6__[\"Cookies\"]();\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(serverUrl + '/api/login', values).then(function (res) {\n                return console.log(res);\n              });\n\n            case 4:\n              data = _context.sent;\n              _context.next = 11;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n              setLogInError(true);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function logInAndSetCookies(_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n    initialValues: {\n      email: 'doug@weomedia.com',\n      password: 'P@ssw0rd'\n    },\n    validate: function validate(values) {\n      var errors = {};\n\n      if (!values.email) {\n        errors.email = 'email required';\n      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {\n        errors.email = 'Invalid email address';\n      }\n\n      if (!values.password) {\n        errors.password = 'password required';\n      } else if (signup && !/^(?=.*\\d)(?=.*[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])([a-z]|[A-Z]|[0-9]|[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~]){8,}$/.test(values.password)) {\n        errors.password = ['needs to add:'];\n\n        if (!/(?=.*\\d)/.test(values.password)) {\n          errors.password.push('numbers');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'numbers';\n          });\n        }\n\n        if (!/(?=.*[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])/.test(values.password)) {\n          if (errors.password.findIndex(function (m) {\n            return m === 'special characters';\n          }) === -1) {\n            errors.password.push('special characters');\n          }\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'special characters';\n          });\n        }\n\n        if (!/(?=.*[a-z])/.test(values.password)) {\n          errors.password.push('lowercase');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'lowercase';\n          });\n        }\n\n        if (!/(?=.*[A-Z])/.test(values.password)) {\n          errors.password.push('uppercase');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'uppercase';\n          });\n        }\n\n        if (!/.{8,}/.test(values.password)) {\n          errors.password.push('at least 8');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'at least 8';\n          });\n        }\n\n        errors.password = errors.password.join(',');\n      }\n\n      return errors;\n    },\n    onSubmit: /*#__PURE__*/function () {\n      var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(values, _ref4) {\n        var setSubmitting;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                setSubmitting = _ref4.setSubmitting;\n                setLogInError(false);\n                signin && setTimeout( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                    while (1) {\n                      switch (_context2.prev = _context2.next) {\n                        case 0:\n                          _context2.next = 2;\n                          return logInAndSetCookies(values);\n\n                        case 2:\n                          next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/dashboard'); // alert(JSON.stringify(values, null, 2));\n\n                        case 3:\n                        case \"end\":\n                          return _context2.stop();\n                      }\n                    }\n                  }, _callee2);\n                })), 400);\n                setSubmitting(false);\n                signup && setTimeout(function () {\n                  createUser(values).then(function (res) {\n                    if (res.ok) {\n                      // console.log(res)\n                      // console.log('created');\n                      // alert(JSON.stringify(values, null, 2));\n                      setCreatedUser(true);\n                      setNeedSignUp(false);\n                    } else {\n                      res.json().then(function (res) {\n                        return console.error(res.msg);\n                      });\n                      setLogInError(true);\n                    }\n                  })[\"catch\"](function (err) {\n                    if (err) console.error(err);\n                  });\n                }, 400);\n                setSubmitting(false);\n\n              case 6:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x2, _x3) {\n        return _ref5.apply(this, arguments);\n      };\n    }(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, function (_ref7) {\n    var isSubmitting = _ref7.isSubmitting;\n    return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 11\n      }\n    }, logInError && __jsx(ErrorMsg, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 28\n      }\n    }, \"email/password already exists or is wrong\"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      placeholder: \"email\",\n      className: \"primary\",\n      type: \"email\",\n      name: \"email\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"email\",\n      render: function render(msg) {\n        return __jsx(ErrorMsg, {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 55\n          }\n        }, msg);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      placeholder: \"password\",\n      className: \"primary\",\n      type: \"password\",\n      name: \"password\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"password\",\n      render: function render(msg) {\n        return msg.split(',').map(function (m) {\n          return __jsx(ErrorMsg, {\n            key: m,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 133,\n              columnNumber: 82\n            }\n          }, m);\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 13\n      }\n    }), __jsx(_btn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"submit\",\n      primary: true,\n      submit: true,\n      disabled: isSubmitting,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 13\n      }\n    }, signin && 'sign in' || signup && 'sign up'), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"submit\",\n      render: function render(msg) {\n        return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 56\n          }\n        }, msg);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 13\n      }\n    }));\n  }));\n}\n\n_s(SignIn, \"yh3kefJHdufW/qU1Db0lxgeyNY0=\");\n\n_c2 = SignIn;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ErrorMsg\");\n$RefreshReg$(_c2, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWduSW4uanM/MDg5NiJdLCJuYW1lcyI6WyJFcnJvck1zZyIsImNoaWxkcmVuIiwiU2lnbkluIiwic2lnbmluIiwic2lnbnVwIiwic2V0TmVlZFNpZ25VcCIsInNldENyZWF0ZWRVc2VyIiwic2VydmVyVXJsIiwidXNlU3RhdGUiLCJsb2dJbkVycm9yIiwic2V0TG9nSW5FcnJvciIsImNyZWF0ZVVzZXIiLCJ2YWx1ZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxvZ0luQW5kU2V0Q29va2llcyIsImNvb2tpZXMiLCJDb29raWVzIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImxvZyIsImRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3JzIiwidGVzdCIsInB1c2giLCJmaWx0ZXIiLCJtIiwiZmluZEluZGV4Iiwiam9pbiIsInNldFN1Ym1pdHRpbmciLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwib2siLCJqc29uIiwibXNnIiwiaXNTdWJtaXR0aW5nIiwic3BsaXQiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsUUFBVCxPQUFnQztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUNyQyxTQUFPO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyQkEsUUFBM0IsQ0FBUDtBQUNEO0tBRmVELFE7QUFJRCxTQUFTRSxNQUFULFFBQThFO0FBQUE7O0FBQUE7O0FBQUEsTUFBNURDLE1BQTRELFNBQTVEQSxNQUE0RDtBQUFBLE1BQXBEQyxNQUFvRCxTQUFwREEsTUFBb0Q7QUFBQSxNQUE1Q0MsYUFBNEMsU0FBNUNBLGFBQTRDO0FB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LFVBQUksRUFBQyxVQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFURixFQWVFLE1BQUMsbURBQUQ7QUFBYyxVQUFJLEVBQUMsVUFBbkI7QUFBOEIsWUFBTSxFQUFFLGdCQUFBQSxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDRSxLQUFKLENBQVUsR0FBVixFQUFlQyxHQUFmLENBQW1CLFVBQUFYLENBQUM7QUFBQSxpQkFBSSxNQUFDLFFBQUQ7QUFBVSxlQUFHLEVBQUVBLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFtQkEsQ0FBbkIsQ0FBSjtBQUFBLFNBQXBCLENBQUo7QUFBQSxPQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BZkYsRUFnQkUsTUFBQyw0Q0FBRDtBQUFLLFVBQUksRUFBQyxRQUFWO0FBQW1CLGFBQU8sTUFBMUI7QUFBMkIsWUFBTSxNQUFqQztBQUFrQyxjQUFRLEVBQUVTLFlBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRzNDLE1BQU0sSUFBSSxTQUFWLElBQXVCQyxNQUFNLElBQUksU0FEcEMsQ0FoQkYsRUFtQkUsTUFBQyxtREFBRDtBQUFjLFVBQUksRUFBQyxRQUFuQjtBQUE0QixZQUFNLEVBQUUsZ0JBQUF5QyxHQUFHO0FBQUEsZUFBSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZUEsR0FBZixDQUFKO0FBQUEsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5CRixDQUREO0FBQUEsR0F2RUgsQ0FERixDQURGO0FBbUdEOztHQWxJdUIzQyxNOztNQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaWduSW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkLCBFcnJvck1lc3NhZ2UgfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQgQnRuIGZyb20gJy4vYnRuJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvck1zZyh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JNc2dcIj57Y2hpbGRyZW59PC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25Jbih7IHNpZ25pbiwgc2lnbnVwLCBzZXROZWVkU2lnblVwLCBzZXRDcmVhdGVkVXNlciwgc2VydmVyVXJsIH0pIHtcbiAgY29uc3QgW2xvZ0luRXJyb3IsIHNldExvZ0luRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNyZWF0ZVVzZXIgPSAodmFsdWVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmZXRjaChzZXJ2ZXJVcmwgKyAnL2FwaS9jcmVhdGV1c2VyJyxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcylcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICBzZXRMb2dJbkVycm9yKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2dJbkFuZFNldENvb2tpZXMgPSBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgLy8gc2V0IHVwIGNvb2tpZXNcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MucG9zdChzZXJ2ZXJVcmwgKyAnL2FwaS9sb2dpbicsIHZhbHVlcykudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSk7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHNldExvZ0luRXJyb3IodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiAnZG91Z0B3ZW9tZWRpYS5jb20nLCBwYXNzd29yZDogJ1BAc3N3MHJkJyB9fVxuICAgICAgICB2YWxpZGF0ZT17dmFsdWVzID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgICAgICAgICBpZiAoIXZhbHVlcy5lbWFpbCkge1xuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ2VtYWlsIHJlcXVpcmVkJztcbiAgICAgICAgICB9IGVsc2UgaWYgKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsdWVzLmVtYWlsKSkge1xuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdmFsdWVzLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSAncGFzc3dvcmQgcmVxdWlyZWQnXG4gICAgICAgICAgfSBlbHNlIGlmIChzaWdudXAgJiYgIS9eKD89LipcXGQpKD89LipbIVxcXCIjJCUmJygpKissXFwtLlxcLzo7PD0+P0BcXFtcXFxcXFxdXl9ge3x9fl0pKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qW2EtekEtWl0pKFthLXpdfFtBLVpdfFswLTldfFshXFxcIiMkJSYnKCkqKyxcXC0uXFwvOjs8PT4/QFxcW1xcXFxcXF1eX2B7fH1+XSl7OCx9JC8udGVzdCh2YWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBbJ25lZWRzIHRvIGFkZDonXTtcbiAgICAgICAgICAgIGlmICghLyg/PS4qXFxkKS8udGVzdCh2YWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKCdudW1iZXJzJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IGVycm9ycy5wYXNzd29yZC5maWx0ZXIobSA9PiBtICE9PSAnbnVtYmVycycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEvKD89LipbIVxcXCIjJCUmJygpKissXFwtLlxcLzo7PD0+P0BcXFtcXFxcXFxdXl9ge3x9fl0pLy50ZXN0KHZhbHVlcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9ycy5wYXNzd29yZC5maW5kSW5kZXgobSA9PiBtID09PSAnc3BlY2lhbCBjaGFyYWN0ZXJzJykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goJ3NwZWNpYWwgY2hhcmFjdGVycycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBlcnJvcnMucGFzc3dvcmQuZmlsdGVyKG0gPT4gbSAhPT0gJ3NwZWNpYWwgY2hhcmFjdGVycycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEvKD89LipbYS16XSkvLnRlc3QodmFsdWVzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQucHVzaCgnbG93ZXJjYXNlJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IGVycm9ycy5wYXNzd29yZC5maWx0ZXIobSA9PiBtICE9PSAnbG93ZXJjYXNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIS8oPz0uKltBLVpdKS8udGVzdCh2YWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKCd1cHBlcmNhc2UnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gZXJyb3JzLnBhc3N3b3JkLmZpbHRlcihtID0+IG0gIT09ICd1cHBlcmNhc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghLy57OCx9Ly50ZXN0KHZhbHVlcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goJ2F0IGxlYXN0IDgnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gZXJyb3JzLnBhc3N3b3JkLmZpbHRlcihtID0+IG0gIT09ICdhdCBsZWFzdCA4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBlcnJvcnMucGFzc3dvcmQuam9pbignLCcpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgICAgIH19XG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xuICAgICAgICAgIHNldExvZ0luRXJyb3IoZmFsc2UpO1xuICAgICAgICAgIHNpZ25pbiAmJlxuICAgICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgIGF3YWl0IGxvZ0luQW5kU2V0Q29va2llcyh2YWx1ZXMpO1xuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgICAgICAgICAgICAvLyBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcbiAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgc2lnbnVwICYmXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY3JlYXRlVXNlcih2YWx1ZXMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG4gICAgICAgICAgICAgICAgICBzZXRDcmVhdGVkVXNlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgIHNldE5lZWRTaWduVXAoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXMuanNvbigpLnRoZW4ocmVzID0+IGNvbnNvbGUuZXJyb3IocmVzLm1zZykpO1xuICAgICAgICAgICAgICAgICAgc2V0TG9nSW5FcnJvcih0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7IGlmIChlcnIpIGNvbnNvbGUuZXJyb3IoZXJyKSB9KTtcbiAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxuICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAge2xvZ0luRXJyb3IgJiYgPEVycm9yTXNnPmVtYWlsL3Bhc3N3b3JkIGFscmVhZHkgZXhpc3RzIG9yIGlzIHdyb25nPC9FcnJvck1zZz59XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cImVtYWlsXCIgcmVuZGVyPXttc2cgPT4gPEVycm9yTXNnPnttc2d9PC9FcnJvck1zZz59IC8+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cInBhc3N3b3JkXCIgcmVuZGVyPXttc2cgPT4gbXNnLnNwbGl0KCcsJykubWFwKG0gPT4gPEVycm9yTXNnIGtleT17bX0+e219PC9FcnJvck1zZz4pfSAvPlxuICAgICAgICAgICAgPEJ0biBuYW1lPVwic3VibWl0XCIgcHJpbWFyeSBzdWJtaXQgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XG4gICAgICAgICAgICAgIHtzaWduaW4gJiYgJ3NpZ24gaW4nIHx8IHNpZ251cCAmJiAnc2lnbiB1cCd9XG4gICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cInN1Ym1pdFwiIHJlbmRlcj17bXNnID0+IDxFcnJvck1lc3NhZ2U+e21zZ308L0Vycm9yTWVzc2FnZT59IC8+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC8+XG4gIClcbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/signIn.js\n");

/***/ })

})