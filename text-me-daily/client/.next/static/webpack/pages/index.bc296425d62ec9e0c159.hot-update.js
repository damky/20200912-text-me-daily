webpackHotUpdate_N_E("pages/index",{

/***/ "./components/signIn.js":
/*!******************************!*\
  !*** ./components/signIn.js ***!
  \******************************/
/*! exports provided: ErrorMsg, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorMsg\", function() { return ErrorMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./btn */ \"./components/btn.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"../node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"../node_modules/swr/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/Doug/Library/Mobile Documents/com~apple~CloudDocs/Development/20200912-text-me-daily/text-me-daily/client/components/signIn.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nfunction ErrorMsg(_ref) {\n  var children = _ref.children;\n  return __jsx(\"div\", {\n    className: \"errorMsg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 10\n    }\n  }, children);\n}\n_c = ErrorMsg;\nfunction SignIn(_ref2) {\n  _s();\n\n  var _this = this;\n\n  var signin = _ref2.signin,\n      signup = _ref2.signup,\n      setNeedSignUp = _ref2.setNeedSignUp,\n      setCreatedUser = _ref2.setCreatedUser,\n      serverUrl = _ref2.serverUrl;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      logInError = _useState[0],\n      setLogInError = _useState[1];\n\n  var createUser = function createUser(values) {\n    try {\n      return fetch(serverUrl + '/api/createuser', {\n        method: \"POST\",\n        headers: {\n          'Content-type': 'application/json'\n        },\n        body: JSON.stringify(values)\n      });\n    } catch (err) {\n      console.error(err);\n      setLogInError(true);\n    }\n  };\n\n  var logInAndSetCookies = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {\n      var cookies, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_6__[\"Cookies\"]();\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(serverUrl + '/api/login', values).then(function (res) {\n                return res.data;\n              });\n\n            case 4:\n              data = _context.sent;\n              cookies.set('token', data.token);\n              cookies.set('refreshToken', data.refreshToken);\n              cookies.set('status', data.status);\n              _context.next = 14;\n              break;\n\n            case 10:\n              _context.prev = 10;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n              setLogInError(true);\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 10]]);\n    }));\n\n    return function logInAndSetCookies(_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n    initialValues: {\n      email: 'doug@weomedia.com',\n      password: 'P@ssw0rd'\n    },\n    validate: function validate(values) {\n      var errors = {};\n\n      if (!values.email) {\n        errors.email = 'email required';\n      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {\n        errors.email = 'Invalid email address';\n      }\n\n      if (!values.password) {\n        errors.password = 'password required';\n      } else if (signup && !/^(?=.*\\d)(?=.*[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])([a-z]|[A-Z]|[0-9]|[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~]){8,}$/.test(values.password)) {\n        errors.password = ['needs to add:'];\n\n        if (!/(?=.*\\d)/.test(values.password)) {\n          errors.password.push('numbers');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'numbers';\n          });\n        }\n\n        if (!/(?=.*[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])/.test(values.password)) {\n          if (errors.password.findIndex(function (m) {\n            return m === 'special characters';\n          }) === -1) {\n            errors.password.push('special characters');\n          }\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'special characters';\n          });\n        }\n\n        if (!/(?=.*[a-z])/.test(values.password)) {\n          errors.password.push('lowercase');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'lowercase';\n          });\n        }\n\n        if (!/(?=.*[A-Z])/.test(values.password)) {\n          errors.password.push('uppercase');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'uppercase';\n          });\n        }\n\n        if (!/.{8,}/.test(values.password)) {\n          errors.password.push('at least 8');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'at least 8';\n          });\n        }\n\n        errors.password = errors.password.join(',');\n      }\n\n      return errors;\n    },\n    onSubmit: /*#__PURE__*/function () {\n      var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(values, _ref4) {\n        var setSubmitting;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                setSubmitting = _ref4.setSubmitting;\n                setLogInError(false);\n                signin && setTimeout( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                    while (1) {\n                      switch (_context2.prev = _context2.next) {\n                        case 0:\n                          _context2.next = 2;\n                          return logInAndSetCookies(values);\n\n                        case 2:\n                          next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/dashboard'); // alert(JSON.stringify(values, null, 2));\n\n                        case 3:\n                        case \"end\":\n                          return _context2.stop();\n                      }\n                    }\n                  }, _callee2);\n                })), 400);\n                setSubmitting(false);\n                signup && setTimeout(function () {\n                  createUser(values).then(function (res) {\n                    if (res.ok) {\n                      // console.log(res)\n                      // console.log('created');\n                      // alert(JSON.stringify(values, null, 2));\n                      setCreatedUser(true);\n                      setNeedSignUp(false);\n                    } else {\n                      res.json().then(function (res) {\n                        return console.error(res.msg);\n                      });\n                      setLogInError(true);\n                    }\n                  })[\"catch\"](function (err) {\n                    if (err) console.error(err);\n                  });\n                }, 400);\n                setSubmitting(false);\n\n              case 6:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x2, _x3) {\n        return _ref5.apply(this, arguments);\n      };\n    }(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, function (_ref7) {\n    var isSubmitting = _ref7.isSubmitting;\n    return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 11\n      }\n    }, logInError && __jsx(ErrorMsg, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 28\n      }\n    }, \"email/password already exists or is wrong\"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      placeholder: \"email\",\n      className: \"primary\",\n      type: \"email\",\n      name: \"email\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"email\",\n      render: function render(msg) {\n        return __jsx(ErrorMsg, {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 55\n          }\n        }, msg);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      placeholder: \"password\",\n      className: \"primary\",\n      type: \"password\",\n      name: \"password\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"password\",\n      render: function render(msg) {\n        return msg.split(',').map(function (m) {\n          return __jsx(ErrorMsg, {\n            key: m,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 136,\n              columnNumber: 82\n            }\n          }, m);\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 13\n      }\n    }), __jsx(_btn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"submit\",\n      primary: true,\n      submit: true,\n      disabled: isSubmitting,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 13\n      }\n    }, signin && 'sign in' || signup && 'sign up'), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"submit\",\n      render: function render(msg) {\n        return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 56\n          }\n        }, msg);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 13\n      }\n    }));\n  }));\n}\n\n_s(SignIn, \"yh3kefJHdufW/qU1Db0lxgeyNY0=\");\n\n_c2 = SignIn;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ErrorMsg\");\n$RefreshReg$(_c2, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWduSW4uanM/MDg5NiJdLCJuYW1lcyI6WyJFcnJvck1zZyIsImNoaWxkcmVuIiwiU2lnbkluIiwic2lnbmluIiwic2lnbnVwIiwic2V0TmVlZFNpZ25VcCIsInNldENyZWF0ZWRVc2VyIiwic2VydmVyVXJsIiwidXNlU3RhdGUiLCJsb2dJbkVycm9yIiwic2V0TG9nSW5FcnJvciIsImNyZWF0ZVVzZXIiLCJ2YWx1ZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxvZ0luQW5kU2V0Q29va2llcyIsImNvb2tpZXMiLCJDb29raWVzIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzZXQiLCJ0b2tlbiIsInJlZnJlc2hUb2tlbiIsInN0YXR1cyIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvcnMiLCJ0ZXN0IiwicHVzaCIsImZpbHRlciIsIm0iLCJmaW5kSW5kZXgiLCJqb2luIiwic2V0U3VibWl0dGluZyIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJvayIsImpzb24iLCJtc2ciLCJpc1N1Ym1pdHRpbmciLCJzcGxpdCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxRQUFULE9BQWdDO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3JDLFNBQU87QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJCQSxRQUEzQixDQUFQO0FBQ0Q7S0FGZUQsUTtBQUlELFNBQVNFLE1BQVQsUUFBOEU7QUFBQTs7QUFBQTs7QUFBQSxNQUE1REMsTUFBNEQsU0FBNURBLE1BQTREO0FBQUEsTUFBcERDLE1BQW9ELFNBQXBEQSxNQUFvRDtB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QUEsTUFuQkYsQ0FERDtBQUFBLEdBdkVILENBREYsQ0FERjtBQW1HRDs7R0FySXVCOUMsTTs7TUFBQUEsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2lnbkluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCwgRXJyb3JNZXNzYWdlIH0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IEJ0biBmcm9tICcuL2J0bic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JNc2coeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yTXNnXCI+e2NoaWxkcmVufTwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oeyBzaWduaW4sIHNpZ251cCwgc2V0TmVlZFNpZ25VcCwgc2V0Q3JlYXRlZFVzZXIsIHNlcnZlclVybCB9KSB7XG4gIGNvbnN0IFtsb2dJbkVycm9yLCBzZXRMb2dJbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjcmVhdGVVc2VyID0gKHZhbHVlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZmV0Y2goc2VydmVyVXJsICsgJy9hcGkvY3JlYXRldXNlcicsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgc2V0TG9nSW5FcnJvcih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9nSW5BbmRTZXRDb29raWVzID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgIC8vIHNldCB1cCBjb29raWVzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLnBvc3Qoc2VydmVyVXJsICsgJy9hcGkvbG9naW4nLCB2YWx1ZXMpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIGNvb2tpZXMuc2V0KCd0b2tlbicsIGRhdGEudG9rZW4pO1xuICAgICAgY29va2llcy5zZXQoJ3JlZnJlc2hUb2tlbicsIGRhdGEucmVmcmVzaFRva2VuKTtcbiAgICAgIGNvb2tpZXMuc2V0KCdzdGF0dXMnLCBkYXRhLnN0YXR1cyk7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHNldExvZ0luRXJyb3IodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiAnZG91Z0B3ZW9tZWRpYS5jb20nLCBwYXNzd29yZDogJ1BAc3N3MHJkJyB9fVxuICAgICAgICB2YWxpZGF0ZT17dmFsdWVzID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgICAgICAgICBpZiAoIXZhbHVlcy5lbWFpbCkge1xuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ2VtYWlsIHJlcXVpcmVkJztcbiAgICAgICAgICB9IGVsc2UgaWYgKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsdWVzLmVtYWlsKSkge1xuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdmFsdWVzLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSAncGFzc3dvcmQgcmVxdWlyZWQnXG4gICAgICAgICAgfSBlbHNlIGlmIChzaWdudXAgJiYgIS9eKD89LipcXGQpKD89LipbIVxcXCIjJCUmJygpKissXFwtLlxcLzo7PD0+P0BcXFtcXFxcXFxdXl9ge3x9fl0pKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qW2EtekEtWl0pKFthLXpdfFtBLVpdfFswLTldfFshXFxcIiMkJSYnKCkqKyxcXC0uXFwvOjs8PT4/QFxcW1xcXFxcXF1eX2B7fH1+XSl7OCx9JC8udGVzdCh2YWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBbJ25lZWRzIHRvIGFkZDonXTtcbiAgICAgICAgICAgIGlmICghLyg/PS4qXFxkKS8udGVzdCh2YWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKCdudW1iZXJzJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IGVycm9ycy5wYXNzd29yZC5maWx0ZXIobSA9PiBtICE9PSAnbnVtYmVycycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEvKD89LipbIVxcXCIjJCUmJygpKissXFwtLlxcLzo7PD0+P0BcXFtcXFxcXFxdXl9ge3x9fl0pLy50ZXN0KHZhbHVlcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9ycy5wYXNzd29yZC5maW5kSW5kZXgobSA9PiBtID09PSAnc3BlY2lhbCBjaGFyYWN0ZXJzJykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goJ3NwZWNpYWwgY2hhcmFjdGVycycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBlcnJvcnMucGFzc3dvcmQuZmlsdGVyKG0gPT4gbSAhPT0gJ3NwZWNpYWwgY2hhcmFjdGVycycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEvKD89LipbYS16XSkvLnRlc3QodmFsdWVzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQucHVzaCgnbG93ZXJjYXNlJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IGVycm9ycy5wYXNzd29yZC5maWx0ZXIobSA9PiBtICE9PSAnbG93ZXJjYXNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIS8oPz0uKltBLVpdKS8udGVzdCh2YWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKCd1cHBlcmNhc2UnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gZXJyb3JzLnBhc3N3b3JkLmZpbHRlcihtID0+IG0gIT09ICd1cHBlcmNhc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghLy57OCx9Ly50ZXN0KHZhbHVlcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goJ2F0IGxlYXN0IDgnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gZXJyb3JzLnBhc3N3b3JkLmZpbHRlcihtID0+IG0gIT09ICdhdCBsZWFzdCA4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBlcnJvcnMucGFzc3dvcmQuam9pbignLCcpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgICAgIH19XG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xuICAgICAgICAgIHNldExvZ0luRXJyb3IoZmFsc2UpO1xuICAgICAgICAgIHNpZ25pbiAmJlxuICAgICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgIGF3YWl0IGxvZ0luQW5kU2V0Q29va2llcyh2YWx1ZXMpO1xuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgICAgICAgICAgICAvLyBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcbiAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgc2lnbnVwICYmXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY3JlYXRlVXNlcih2YWx1ZXMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG4gICAgICAgICAgICAgICAgICBzZXRDcmVhdGVkVXNlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgIHNldE5lZWRTaWduVXAoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXMuanNvbigpLnRoZW4ocmVzID0+IGNvbnNvbGUuZXJyb3IocmVzLm1zZykpO1xuICAgICAgICAgICAgICAgICAgc2V0TG9nSW5FcnJvcih0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7IGlmIChlcnIpIGNvbnNvbGUuZXJyb3IoZXJyKSB9KTtcbiAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxuICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAge2xvZ0luRXJyb3IgJiYgPEVycm9yTXNnPmVtYWlsL3Bhc3N3b3JkIGFscmVhZHkgZXhpc3RzIG9yIGlzIHdyb25nPC9FcnJvck1zZz59XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cImVtYWlsXCIgcmVuZGVyPXttc2cgPT4gPEVycm9yTXNnPnttc2d9PC9FcnJvck1zZz59IC8+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cInBhc3N3b3JkXCIgcmVuZGVyPXttc2cgPT4gbXNnLnNwbGl0KCcsJykubWFwKG0gPT4gPEVycm9yTXNnIGtleT17bX0+e219PC9FcnJvck1zZz4pfSAvPlxuICAgICAgICAgICAgPEJ0biBuYW1lPVwic3VibWl0XCIgcHJpbWFyeSBzdWJtaXQgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XG4gICAgICAgICAgICAgIHtzaWduaW4gJiYgJ3NpZ24gaW4nIHx8IHNpZ251cCAmJiAnc2lnbiB1cCd9XG4gICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cInN1Ym1pdFwiIHJlbmRlcj17bXNnID0+IDxFcnJvck1lc3NhZ2U+e21zZ308L0Vycm9yTWVzc2FnZT59IC8+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC8+XG4gIClcbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/signIn.js\n");

/***/ })

})