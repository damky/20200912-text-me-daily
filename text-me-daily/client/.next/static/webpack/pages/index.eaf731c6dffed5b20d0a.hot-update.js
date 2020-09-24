webpackHotUpdate_N_E("pages/index",{

/***/ "./components/signIn.js":
/*!******************************!*\
  !*** ./components/signIn.js ***!
  \******************************/
/*! exports provided: ErrorMsg, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorMsg\", function() { return ErrorMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./btn */ \"./components/btn.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"../node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"../node_modules/swr/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/Doug/Library/Mobile Documents/com~apple~CloudDocs/Development/20200912-text-me-daily/text-me-daily/client/components/signIn.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nfunction ErrorMsg(_ref) {\n  var children = _ref.children;\n  return __jsx(\"div\", {\n    className: \"errorMsg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 10\n    }\n  }, children);\n}\n_c = ErrorMsg;\nfunction SignIn(_ref2) {\n  _s();\n\n  var _this = this;\n\n  var signin = _ref2.signin,\n      signup = _ref2.signup,\n      setNeedSignUp = _ref2.setNeedSignUp,\n      setCreatedUser = _ref2.setCreatedUser,\n      serverUrl = _ref2.serverUrl;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      logInError = _useState[0],\n      setLogInError = _useState[1];\n\n  var createUser = function createUser(values) {\n    try {\n      return fetch(serverUrl + '/api/createuser', {\n        method: \"POST\",\n        headers: {\n          'Content-type': 'application/json'\n        },\n        body: JSON.stringify(values)\n      });\n    } catch (err) {\n      console.error(err);\n      setLogInError(true);\n    }\n  };\n\n  var logInAndSetCookies = function logInAndSetCookies(values) {\n    // set up cookies\n    try {\n      var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_6__[\"Cookies\"]();\n      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(serverUrl + '/api/login', values).then(function (res) {\n        cookies.set('token', res.data.token);\n        cookies.set('refreshToken', res.data.refreshToken);\n        cookies.set('status', res.data.status);\n      });\n    } catch (err) {\n      console.error(err);\n      setLogInError(true);\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n    initialValues: {\n      email: 'doug@weomedia.com',\n      password: 'P@ssw0rd'\n    },\n    validate: function validate(values) {\n      var errors = {};\n\n      if (!values.email) {\n        errors.email = 'email required';\n      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {\n        errors.email = 'Invalid email address';\n      }\n\n      if (!values.password) {\n        errors.password = 'password required';\n      } else if (signup && !/^(?=.*\\d)(?=.*[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])([a-z]|[A-Z]|[0-9]|[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~]){8,}$/.test(values.password)) {\n        errors.password = ['needs to add:'];\n\n        if (!/(?=.*\\d)/.test(values.password)) {\n          errors.password.push('numbers');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'numbers';\n          });\n        }\n\n        if (!/(?=.*[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])/.test(values.password)) {\n          if (errors.password.findIndex(function (m) {\n            return m === 'special characters';\n          }) === -1) {\n            errors.password.push('special characters');\n          }\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'special characters';\n          });\n        }\n\n        if (!/(?=.*[a-z])/.test(values.password)) {\n          errors.password.push('lowercase');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'lowercase';\n          });\n        }\n\n        if (!/(?=.*[A-Z])/.test(values.password)) {\n          errors.password.push('uppercase');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'uppercase';\n          });\n        }\n\n        if (!/.{8,}/.test(values.password)) {\n          errors.password.push('at least 8');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'at least 8';\n          });\n        }\n\n        errors.password = errors.password.join(',');\n      }\n\n      return errors;\n    },\n    onSubmit: /*#__PURE__*/function () {\n      var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values, _ref3) {\n        var setSubmitting;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                setSubmitting = _ref3.setSubmitting;\n                setLogInError(false);\n                signin && setTimeout( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          _context.next = 2;\n                          return logInAndSetCookies(values);\n\n                        case 2:\n                          next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/dashboard'); // alert(JSON.stringify(values, null, 2));\n\n                        case 3:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                })), 400);\n                setSubmitting(false);\n                signup && setTimeout(function () {\n                  createUser(values).then(function (res) {\n                    if (res.ok) {\n                      // console.log(res)\n                      // console.log('created');\n                      // alert(JSON.stringify(values, null, 2));\n                      setCreatedUser(true);\n                      setNeedSignUp(false);\n                    } else {\n                      res.json().then(function (res) {\n                        return console.error(res.msg);\n                      });\n                      setLogInError(true);\n                    }\n                  })[\"catch\"](function (err) {\n                    if (err) console.error(err);\n                  });\n                }, 400);\n                setSubmitting(false);\n\n              case 6:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x, _x2) {\n        return _ref4.apply(this, arguments);\n      };\n    }(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, function (_ref6) {\n    var isSubmitting = _ref6.isSubmitting;\n    return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 11\n      }\n    }, logInError && __jsx(ErrorMsg, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 28\n      }\n    }, \"email/password already exists or is wrong\"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      placeholder: \"email\",\n      className: \"primary\",\n      type: \"email\",\n      name: \"email\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"email\",\n      render: function render(msg) {\n        return __jsx(ErrorMsg, {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 55\n          }\n        }, msg);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      placeholder: \"password\",\n      className: \"primary\",\n      type: \"password\",\n      name: \"password\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"password\",\n      render: function render(msg) {\n        return msg.split(',').map(function (m) {\n          return __jsx(ErrorMsg, {\n            key: m,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 138,\n              columnNumber: 82\n            }\n          }, m);\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 13\n      }\n    }), __jsx(_btn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"submit\",\n      primary: true,\n      submit: true,\n      disabled: isSubmitting,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 13\n      }\n    }, signin && 'sign in' || signup && 'sign up'), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"submit\",\n      render: function render(msg) {\n        return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 142,\n            columnNumber: 56\n          }\n        }, msg);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 13\n      }\n    }));\n  }));\n}\n\n_s(SignIn, \"yh3kefJHdufW/qU1Db0lxgeyNY0=\");\n\n_c2 = SignIn;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ErrorMsg\");\n$RefreshReg$(_c2, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWduSW4uanM/MDg5NiJdLCJuYW1lcyI6WyJFcnJvck1zZyIsImNoaWxkcmVuIiwiU2lnbkluIiwic2lnbmluIiwic2lnbnVwIiwic2V0TmVlZFNpZ25VcCIsInNldENyZWF0ZWRVc2VyIiwic2VydmVyVXJsIiwidXNlU3RhdGUiLCJsb2dJbkVycm9yIiwic2V0TG9nSW5FcnJvciIsImNyZWF0ZVVzZXIiLCJ2YWx1ZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxvZ0luQW5kU2V0Q29va2llcyIsImNvb2tpZXMiLCJDb29raWVzIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsInNldCIsImRhdGEiLCJ0b2tlbiIsInJlZnJlc2hUb2tlbiIsInN0YXR1cyIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvcnMiLCJ0ZXN0IiwicHVzaCIsImZpbHRlciIsIm0iLCJmaW5kSW5kZXgiLCJqb2luIiwic2V0U3VibWl0dGluZyIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJvayIsImpzb24iLCJtc2ciLCJpc1N1Ym1pdHRpbmciLCJzcGxpdCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxRQUFULE9BQWdDO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3JDLFNBQU87QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJCQSxRQUEzQixDQUFQO0FBQ0Q7S0FGZUQsUTtBQUlELFNBQVNFLE1BQVQsUUFBOEU7QUFBQTs7QUFBQTs7QUFBQSxNQUE1REMsTUFBNEQsU0FBNURBLE1BQTREO0FBQUEsTUFBcERDLE1BQW9ELFNBQXBEQSxNQUFvRDtB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bkluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCwgRXJyb3JNZXNzYWdlIH0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IEJ0biBmcm9tICcuL2J0bic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JNc2coeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yTXNnXCI+e2NoaWxkcmVufTwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oeyBzaWduaW4sIHNpZ251cCwgc2V0TmVlZFNpZ25VcCwgc2V0Q3JlYXRlZFVzZXIsIHNlcnZlclVybCB9KSB7XG4gIGNvbnN0IFtsb2dJbkVycm9yLCBzZXRMb2dJbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjcmVhdGVVc2VyID0gKHZhbHVlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZmV0Y2goc2VydmVyVXJsICsgJy9hcGkvY3JlYXRldXNlcicsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgc2V0TG9nSW5FcnJvcih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9nSW5BbmRTZXRDb29raWVzID0gKHZhbHVlcykgPT4ge1xuICAgIC8vIHNldCB1cCBjb29raWVzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgYXhpb3MucG9zdChzZXJ2ZXJVcmwgKyAnL2FwaS9sb2dpbicsIHZhbHVlcylcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCByZXMuZGF0YS50b2tlbik7XG4gICAgICAgICAgY29va2llcy5zZXQoJ3JlZnJlc2hUb2tlbicsIHJlcy5kYXRhLnJlZnJlc2hUb2tlbik7XG4gICAgICAgICAgY29va2llcy5zZXQoJ3N0YXR1cycsIHJlcy5kYXRhLnN0YXR1cyk7XG4gICAgICAgIH0pO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICBzZXRMb2dJbkVycm9yKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBlbWFpbDogJ2RvdWdAd2VvbWVkaWEuY29tJywgcGFzc3dvcmQ6ICdQQHNzdzByZCcgfX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbHVlcyA9PiB7XG4gICAgICAgICAgY29uc3QgZXJyb3JzID0ge307XG4gICAgICAgICAgaWYgKCF2YWx1ZXMuZW1haWwpIHtcbiAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdlbWFpbCByZXF1aXJlZCc7XG4gICAgICAgICAgfSBlbHNlIGlmICghL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaS50ZXN0KHZhbHVlcy5lbWFpbCkpIHtcbiAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXZhbHVlcy5wYXNzd29yZCkge1xuICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gJ3Bhc3N3b3JkIHJlcXVpcmVkJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2lnbnVwICYmICEvXig/PS4qXFxkKSg/PS4qWyFcXFwiIyQlJicoKSorLFxcLS5cXC86Ozw9Pj9AXFxbXFxcXFxcXV5fYHt8fX5dKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlthLXpBLVpdKShbYS16XXxbQS1aXXxbMC05XXxbIVxcXCIjJCUmJygpKissXFwtLlxcLzo7PD0+P0BcXFtcXFxcXFxdXl9ge3x9fl0pezgsfSQvLnRlc3QodmFsdWVzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gWyduZWVkcyB0byBhZGQ6J107XG4gICAgICAgICAgICBpZiAoIS8oPz0uKlxcZCkvLnRlc3QodmFsdWVzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQucHVzaCgnbnVtYmVycycpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBlcnJvcnMucGFzc3dvcmQuZmlsdGVyKG0gPT4gbSAhPT0gJ251bWJlcnMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghLyg/PS4qWyFcXFwiIyQlJicoKSorLFxcLS5cXC86Ozw9Pj9AXFxbXFxcXFxcXV5fYHt8fX5dKS8udGVzdCh2YWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvcnMucGFzc3dvcmQuZmluZEluZGV4KG0gPT4gbSA9PT0gJ3NwZWNpYWwgY2hhcmFjdGVycycpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKCdzcGVjaWFsIGNoYXJhY3RlcnMnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gZXJyb3JzLnBhc3N3b3JkLmZpbHRlcihtID0+IG0gIT09ICdzcGVjaWFsIGNoYXJhY3RlcnMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghLyg/PS4qW2Etel0pLy50ZXN0KHZhbHVlcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goJ2xvd2VyY2FzZScpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBlcnJvcnMucGFzc3dvcmQuZmlsdGVyKG0gPT4gbSAhPT0gJ2xvd2VyY2FzZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEvKD89LipbQS1aXSkvLnRlc3QodmFsdWVzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQucHVzaCgndXBwZXJjYXNlJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IGVycm9ycy5wYXNzd29yZC5maWx0ZXIobSA9PiBtICE9PSAndXBwZXJjYXNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIS8uezgsfS8udGVzdCh2YWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKCdhdCBsZWFzdCA4JylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IGVycm9ycy5wYXNzd29yZC5maWx0ZXIobSA9PiBtICE9PSAnYXQgbGVhc3QgOCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gZXJyb3JzLnBhc3N3b3JkLmpvaW4oJywnKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZXJyb3JzO1xuICAgICAgICB9fVxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nIH0pID0+IHtcbiAgICAgICAgICBzZXRMb2dJbkVycm9yKGZhbHNlKTtcbiAgICAgICAgICBzaWduaW4gJiZcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICBhd2FpdCBsb2dJbkFuZFNldENvb2tpZXModmFsdWVzKTtcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICAgICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICAgIHNpZ251cCAmJlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNyZWF0ZVVzZXIodmFsdWVzKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NyZWF0ZWQnKTtcbiAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuICAgICAgICAgICAgICAgICAgc2V0Q3JlYXRlZFVzZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICBzZXROZWVkU2lnblVwKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVzLmpzb24oKS50aGVuKHJlcyA9PiBjb25zb2xlLmVycm9yKHJlcy5tc2cpKTtcbiAgICAgICAgICAgICAgICAgIHNldExvZ0luRXJyb3IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4geyBpZiAoZXJyKSBjb25zb2xlLmVycm9yKGVycikgfSk7XG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgIHtsb2dJbkVycm9yICYmIDxFcnJvck1zZz5lbWFpbC9wYXNzd29yZCBhbHJlYWR5IGV4aXN0cyBvciBpcyB3cm9uZzwvRXJyb3JNc2c+fVxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJlbWFpbFwiIHJlbmRlcj17bXNnID0+IDxFcnJvck1zZz57bXNnfTwvRXJyb3JNc2c+fSAvPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJwYXNzd29yZFwiIHJlbmRlcj17bXNnID0+IG1zZy5zcGxpdCgnLCcpLm1hcChtID0+IDxFcnJvck1zZyBrZXk9e219PnttfTwvRXJyb3JNc2c+KX0gLz5cbiAgICAgICAgICAgIDxCdG4gbmFtZT1cInN1Ym1pdFwiIHByaW1hcnkgc3VibWl0IGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICB7c2lnbmluICYmICdzaWduIGluJyB8fCBzaWdudXAgJiYgJ3NpZ24gdXAnfVxuICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJzdWJtaXRcIiByZW5kZXI9e21zZyA9PiA8RXJyb3JNZXNzYWdlPnttc2d9PC9FcnJvck1lc3NhZ2U+fSAvPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvPlxuICApXG59XG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/signIn.js\n");

/***/ })

})