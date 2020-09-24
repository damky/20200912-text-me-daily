webpackHotUpdate_N_E("pages/index",{

/***/ "./components/signIn.js":
/*!******************************!*\
  !*** ./components/signIn.js ***!
  \******************************/
/*! exports provided: ErrorMsg, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorMsg\", function() { return ErrorMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./btn */ \"./components/btn.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"../node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"../node_modules/swr/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/Doug/Library/Mobile Documents/com~apple~CloudDocs/Development/20200912-text-me-daily/text-me-daily/client/components/signIn.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nfunction ErrorMsg(_ref) {\n  var children = _ref.children;\n  return __jsx(\"div\", {\n    className: \"errorMsg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 10\n    }\n  }, children);\n}\n_c = ErrorMsg;\nfunction SignIn(_ref2) {\n  _s();\n\n  var _this = this;\n\n  var signin = _ref2.signin,\n      signup = _ref2.signup,\n      setNeedSignUp = _ref2.setNeedSignUp,\n      setCreatedUser = _ref2.setCreatedUser,\n      serverUrl = _ref2.serverUrl;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      logInError = _useState[0],\n      setLogInError = _useState[1];\n\n  var createUser = function createUser(values) {\n    try {\n      return fetch(serverUrl + '/api/createuser', {\n        method: \"POST\",\n        headers: {\n          'Content-type': 'application/json'\n        },\n        body: JSON.stringify(values)\n      });\n    } catch (err) {\n      console.error(err);\n      setLogInError(true);\n    }\n  };\n\n  var logInAndSetCookies = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {\n      var cookies, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_6__[\"Cookies\"]();\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(serverUrl + '/api/login', values).then(function (res) {\n                return res.data;\n              });\n\n            case 4:\n              data = _context.sent;\n              cookies.set('token', data.token);\n              cookies.set('refreshToken', data.refreshToken);\n              cookies.set('status', data.status);\n              next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/dashboard');\n              _context.next = 15;\n              break;\n\n            case 11:\n              _context.prev = 11;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n              setLogInError(true);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 11]]);\n    }));\n\n    return function logInAndSetCookies(_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n    initialValues: {\n      email: 'doug@weomedia.com',\n      password: 'P@ssw0rd'\n    },\n    validate: function validate(values) {\n      var errors = {};\n\n      if (!values.email) {\n        errors.email = 'email required';\n      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {\n        errors.email = 'Invalid email address';\n      }\n\n      if (!values.password) {\n        errors.password = 'password required';\n      } else if (signup && !/^(?=.*\\d)(?=.*[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])([a-z]|[A-Z]|[0-9]|[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~]){8,}$/.test(values.password)) {\n        errors.password = ['needs to add:'];\n\n        if (!/(?=.*\\d)/.test(values.password)) {\n          errors.password.push('numbers');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'numbers';\n          });\n        }\n\n        if (!/(?=.*[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])/.test(values.password)) {\n          if (errors.password.findIndex(function (m) {\n            return m === 'special characters';\n          }) === -1) {\n            errors.password.push('special characters');\n          }\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'special characters';\n          });\n        }\n\n        if (!/(?=.*[a-z])/.test(values.password)) {\n          errors.password.push('lowercase');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'lowercase';\n          });\n        }\n\n        if (!/(?=.*[A-Z])/.test(values.password)) {\n          errors.password.push('uppercase');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'uppercase';\n          });\n        }\n\n        if (!/.{8,}/.test(values.password)) {\n          errors.password.push('at least 8');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'at least 8';\n          });\n        }\n\n        errors.password = errors.password.join(',');\n      }\n\n      return errors;\n    },\n    onSubmit: /*#__PURE__*/function () {\n      var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(values, _ref4) {\n        var setSubmitting;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                setSubmitting = _ref4.setSubmitting;\n                setLogInError(false);\n                signin && setTimeout( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                    while (1) {\n                      switch (_context2.prev = _context2.next) {\n                        case 0:\n                          _context2.next = 2;\n                          return logInAndSetCookies(values);\n\n                        case 2:\n                          // alert(JSON.stringify(values, null, 2));\n                          setSubmitting(false);\n\n                        case 3:\n                        case \"end\":\n                          return _context2.stop();\n                      }\n                    }\n                  }, _callee2);\n                })), 400);\n                signup && setTimeout(function () {\n                  createUser(values).then(function (res) {\n                    if (res.ok) {\n                      // console.log(res)\n                      // console.log('created');\n                      // alert(JSON.stringify(values, null, 2));\n                      setCreatedUser(true);\n                      setNeedSignUp(false);\n                    } else {\n                      res.json().then(function (res) {\n                        return console.error(res.msg);\n                      });\n                    }\n                  })[\"catch\"](function (err) {\n                    if (err) console.error(err);\n                  });\n                }, 400);\n                setSubmitting(false);\n\n              case 5:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x2, _x3) {\n        return _ref5.apply(this, arguments);\n      };\n    }(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, function (_ref7) {\n    var isSubmitting = _ref7.isSubmitting;\n    return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 11\n      }\n    }, logInError && __jsx(ErrorMsg, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 28\n      }\n    }, \"email already exists or wrong email/password\"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      placeholder: \"email\",\n      className: \"primary\",\n      type: \"email\",\n      name: \"email\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"email\",\n      render: function render(msg) {\n        return __jsx(ErrorMsg, {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 55\n          }\n        }, msg);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      placeholder: \"password\",\n      className: \"primary\",\n      type: \"password\",\n      name: \"password\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"password\",\n      render: function render(msg) {\n        return msg.split(',').map(function (m) {\n          return __jsx(ErrorMsg, {\n            key: m,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 82\n            }\n          }, m);\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 13\n      }\n    }), __jsx(_btn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"submit\",\n      primary: true,\n      submit: true,\n      disabled: isSubmitting,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 13\n      }\n    }, signin && 'sign in' || signup && 'sign up'), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"submit\",\n      render: function render(msg) {\n        return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 56\n          }\n        }, msg);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 13\n      }\n    }));\n  }));\n}\n\n_s(SignIn, \"yh3kefJHdufW/qU1Db0lxgeyNY0=\");\n\n_c2 = SignIn;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ErrorMsg\");\n$RefreshReg$(_c2, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWduSW4uanM/MDg5NiJdLCJuYW1lcyI6WyJFcnJvck1zZyIsImNoaWxkcmVuIiwiU2lnbkluIiwic2lnbmluIiwic2lnbnVwIiwic2V0TmVlZFNpZ25VcCIsInNldENyZWF0ZWRVc2VyIiwic2VydmVyVXJsIiwidXNlU3RhdGUiLCJsb2dJbkVycm9yIiwic2V0TG9nSW5FcnJvciIsImNyZWF0ZVVzZXIiLCJ2YWx1ZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxvZ0luQW5kU2V0Q29va2llcyIsImNvb2tpZXMiLCJDb29raWVzIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzZXQiLCJ0b2tlbiIsInJlZnJlc2hUb2tlbiIsInN0YXR1cyIsIlJvdXRlciIsInB1c2giLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3JzIiwidGVzdCIsImZpbHRlciIsIm0iLCJmaW5kSW5kZXgiLCJqb2luIiwic2V0U3VibWl0dGluZyIsInNldFRpbWVvdXQiLCJvayIsImpzb24iLCJtc2ciLCJpc1N1Ym1pdHRpbmciLCJzcGxpdCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxRQUFULE9BQWdDO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3JDLFNBQU87QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJCQSxRQUEzQixDQUFQO0FBQ0Q7S0FGZUQsUTtBQUlELFNBQVNFLE1BQVQsUUFBOEU7QUFBQTs7QUFBQTs7QUFBQSxNQUE1REMsTUFBNEQsU0FBNURBLE1BQTREO0FBQUEsTUFBcERDLE1BQW9ELFNBQXBEQSxNQUFvRDtB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REY7QUFpR0Q7O0dBbkl1QjlDLE07O01BQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZ25Jbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQsIEVycm9yTWVzc2FnZSB9IGZyb20gJ2Zvcm1paydcbmltcG9ydCBCdG4gZnJvbSAnLi9idG4nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IENvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yTXNnKHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJlcnJvck1zZ1wiPntjaGlsZHJlbn08L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKHsgc2lnbmluLCBzaWdudXAsIHNldE5lZWRTaWduVXAsIHNldENyZWF0ZWRVc2VyLCBzZXJ2ZXJVcmwgfSkge1xuICBjb25zdCBbbG9nSW5FcnJvciwgc2V0TG9nSW5FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY3JlYXRlVXNlciA9ICh2YWx1ZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZldGNoKHNlcnZlclVybCArICcvYXBpL2NyZWF0ZXVzZXInLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsdWVzKVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHNldExvZ0luRXJyb3IodHJ1ZSlcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9nSW5BbmRTZXRDb29raWVzID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgIC8vIHNldCB1cCBjb29raWVzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLnBvc3Qoc2VydmVyVXJsICsgJy9hcGkvbG9naW4nLCB2YWx1ZXMpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIGNvb2tpZXMuc2V0KCd0b2tlbicsIGRhdGEudG9rZW4pO1xuICAgICAgY29va2llcy5zZXQoJ3JlZnJlc2hUb2tlbicsIGRhdGEucmVmcmVzaFRva2VuKTtcbiAgICAgIGNvb2tpZXMuc2V0KCdzdGF0dXMnLCBkYXRhLnN0YXR1cyk7XG4gICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgc2V0TG9nSW5FcnJvcih0cnVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgZW1haWw6ICdkb3VnQHdlb21lZGlhLmNvbScsIHBhc3N3b3JkOiAnUEBzc3cwcmQnIH19XG4gICAgICAgIHZhbGlkYXRlPXt2YWx1ZXMgPT4ge1xuICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xuICAgICAgICAgIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnZW1haWwgcmVxdWlyZWQnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpKSB7XG4gICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF2YWx1ZXMucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9ICdwYXNzd29yZCByZXF1aXJlZCdcbiAgICAgICAgICB9IGVsc2UgaWYgKHNpZ251cCAmJiAhL14oPz0uKlxcZCkoPz0uKlshXFxcIiMkJSYnKCkqKyxcXC0uXFwvOjs8PT4/QFxcW1xcXFxcXF1eX2B7fH1+XSkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbYS16QS1aXSkoW2Etel18W0EtWl18WzAtOV18WyFcXFwiIyQlJicoKSorLFxcLS5cXC86Ozw9Pj9AXFxbXFxcXFxcXV5fYHt8fX5dKXs4LH0kLy50ZXN0KHZhbHVlcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IFsnbmVlZHMgdG8gYWRkOiddO1xuICAgICAgICAgICAgaWYgKCEvKD89LipcXGQpLy50ZXN0KHZhbHVlcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goJ251bWJlcnMnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gZXJyb3JzLnBhc3N3b3JkLmZpbHRlcihtID0+IG0gIT09ICdudW1iZXJzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIS8oPz0uKlshXFxcIiMkJSYnKCkqKyxcXC0uXFwvOjs8PT4/QFxcW1xcXFxcXF1eX2B7fH1+XSkvLnRlc3QodmFsdWVzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICBpZiAoZXJyb3JzLnBhc3N3b3JkLmZpbmRJbmRleChtID0+IG0gPT09ICdzcGVjaWFsIGNoYXJhY3RlcnMnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQucHVzaCgnc3BlY2lhbCBjaGFyYWN0ZXJzJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IGVycm9ycy5wYXNzd29yZC5maWx0ZXIobSA9PiBtICE9PSAnc3BlY2lhbCBjaGFyYWN0ZXJzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIS8oPz0uKlthLXpdKS8udGVzdCh2YWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKCdsb3dlcmNhc2UnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gZXJyb3JzLnBhc3N3b3JkLmZpbHRlcihtID0+IG0gIT09ICdsb3dlcmNhc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghLyg/PS4qW0EtWl0pLy50ZXN0KHZhbHVlcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goJ3VwcGVyY2FzZScpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBlcnJvcnMucGFzc3dvcmQuZmlsdGVyKG0gPT4gbSAhPT0gJ3VwcGVyY2FzZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEvLns4LH0vLnRlc3QodmFsdWVzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQucHVzaCgnYXQgbGVhc3QgOCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBlcnJvcnMucGFzc3dvcmQuZmlsdGVyKG0gPT4gbSAhPT0gJ2F0IGxlYXN0IDgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IGVycm9ycy5wYXNzd29yZC5qb2luKCcsJylcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGVycm9ycztcbiAgICAgICAgfX1cbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XG4gICAgICAgICAgc2V0TG9nSW5FcnJvcihmYWxzZSk7XG4gICAgICAgICAgc2lnbmluICYmXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgYXdhaXQgbG9nSW5BbmRTZXRDb29raWVzKHZhbHVlcyk7XG4gICAgICAgICAgICAgIC8vIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgc2lnbnVwICYmXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY3JlYXRlVXNlcih2YWx1ZXMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG4gICAgICAgICAgICAgICAgICBzZXRDcmVhdGVkVXNlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgIHNldE5lZWRTaWduVXAoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXMuanNvbigpLnRoZW4ocmVzID0+IGNvbnNvbGUuZXJyb3IocmVzLm1zZykpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4geyBpZiAoZXJyKSBjb25zb2xlLmVycm9yKGVycikgfSk7XG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgIHtsb2dJbkVycm9yICYmIDxFcnJvck1zZz5lbWFpbCBhbHJlYWR5IGV4aXN0cyBvciB3cm9uZyBlbWFpbC9wYXNzd29yZDwvRXJyb3JNc2c+fVxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJlbWFpbFwiIHJlbmRlcj17bXNnID0+IDxFcnJvck1zZz57bXNnfTwvRXJyb3JNc2c+fSAvPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJwYXNzd29yZFwiIHJlbmRlcj17bXNnID0+IG1zZy5zcGxpdCgnLCcpLm1hcChtID0+IDxFcnJvck1zZyBrZXk9e219PnttfTwvRXJyb3JNc2c+KX0gLz5cbiAgICAgICAgICAgIDxCdG4gbmFtZT1cInN1Ym1pdFwiIHByaW1hcnkgc3VibWl0IGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICB7c2lnbmluICYmICdzaWduIGluJyB8fCBzaWdudXAgJiYgJ3NpZ24gdXAnfVxuICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJzdWJtaXRcIiByZW5kZXI9e21zZyA9PiA8RXJyb3JNZXNzYWdlPnttc2d9PC9FcnJvck1lc3NhZ2U+fSAvPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvPlxuICApXG59XG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/signIn.js\n");

/***/ })

})