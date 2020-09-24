webpackHotUpdate_N_E("pages/index",{

/***/ "./components/signIn.js":
/*!******************************!*\
  !*** ./components/signIn.js ***!
  \******************************/
/*! exports provided: ErrorMsg, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorMsg\", function() { return ErrorMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./btn */ \"./components/btn.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"../node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"../node_modules/swr/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/Doug/Library/Mobile Documents/com~apple~CloudDocs/Development/20200912-text-me-daily/text-me-daily/client/components/signIn.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nfunction ErrorMsg(_ref) {\n  var children = _ref.children;\n  return __jsx(\"div\", {\n    className: \"errorMsg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 10\n    }\n  }, children);\n}\n_c = ErrorMsg;\nfunction SignIn(_ref2) {\n  _s();\n\n  var _this = this;\n\n  var signin = _ref2.signin,\n      signup = _ref2.signup,\n      setNeedSignUp = _ref2.setNeedSignUp,\n      setCreatedUser = _ref2.setCreatedUser,\n      serverUrl = _ref2.serverUrl;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      logInError = _useState[0],\n      setLogInError = _useState[1];\n\n  var createUser = function createUser(values) {\n    try {\n      return fetch(serverUrl + '/api/createuser', {\n        method: \"POST\",\n        headers: {\n          'Content-type': 'application/json'\n        },\n        body: JSON.stringify(values)\n      });\n    } catch (err) {\n      if (err) console.error(err);\n    }\n  };\n\n  var logInAndSetCookies = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {\n      var cookies, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_6__[\"Cookies\"]();\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(serverUrl + '/api/login', values).then(function (res) {\n                return res.data;\n              });\n\n            case 4:\n              data = _context.sent;\n              cookies.set('token', data.token);\n              cookies.set('refreshToken', data.refreshToken);\n              cookies.set('status', data.status);\n              next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/dashboard');\n              _context.next = 15;\n              break;\n\n            case 11:\n              _context.prev = 11;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n              setLogInError(true);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 11]]);\n    }));\n\n    return function logInAndSetCookies(_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n    initialValues: {\n      email: 'doug@weomedia.com',\n      password: 'P@ssw0rd'\n    },\n    validate: function validate(values) {\n      var errors = {};\n\n      if (!values.email) {\n        errors.email = 'email required';\n      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {\n        errors.email = 'Invalid email address';\n      }\n\n      if (!values.password) {\n        errors.password = 'password required';\n      } else if (signup && !/^(?=.*\\d)(?=.*[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])([a-z]|[A-Z]|[0-9]|[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~]){8,}$/.test(values.password)) {\n        errors.password = ['needs to add:'];\n\n        if (!/(?=.*\\d)/.test(values.password)) {\n          errors.password.push('numbers');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'numbers';\n          });\n        }\n\n        if (!/(?=.*[!\\\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])/.test(values.password)) {\n          if (errors.password.findIndex(function (m) {\n            return m === 'special characters';\n          }) === -1) {\n            errors.password.push('special characters');\n          }\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'special characters';\n          });\n        }\n\n        if (!/(?=.*[a-z])/.test(values.password)) {\n          errors.password.push('lowercase');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'lowercase';\n          });\n        }\n\n        if (!/(?=.*[A-Z])/.test(values.password)) {\n          errors.password.push('uppercase');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'uppercase';\n          });\n        }\n\n        if (!/.{8,}/.test(values.password)) {\n          errors.password.push('at least 8');\n        } else {\n          errors.password = errors.password.filter(function (m) {\n            return m !== 'at least 8';\n          });\n        }\n\n        errors.password = errors.password.join(',');\n      }\n\n      return errors;\n    },\n    onSubmit: /*#__PURE__*/function () {\n      var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(values, _ref4) {\n        var setSubmitting;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                setSubmitting = _ref4.setSubmitting;\n                signin && setTimeout( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                    while (1) {\n                      switch (_context2.prev = _context2.next) {\n                        case 0:\n                          _context2.next = 2;\n                          return logInAndSetCookies(values);\n\n                        case 2:\n                          // alert(JSON.stringify(values, null, 2));\n                          setSubmitting(false);\n\n                        case 3:\n                        case \"end\":\n                          return _context2.stop();\n                      }\n                    }\n                  }, _callee2);\n                })), 400);\n                signup && setTimeout(function () {\n                  createUser(values).then(function (res) {\n                    if (res.ok) {\n                      // console.log('created');\n                      // alert(JSON.stringify(values, null, 2));\n                      setLogInError(false);\n                      setCreatedUser(true);\n                      setNeedSignUp(false);\n                    }\n                  })[\"catch\"](function (err) {\n                    if (err) console.error(err);\n                  });\n                }, 400);\n                setSubmitting(false);\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x2, _x3) {\n        return _ref5.apply(this, arguments);\n      };\n    }(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, function (_ref7) {\n    var isSubmitting = _ref7.isSubmitting;\n    return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 11\n      }\n    }, logInError && __jsx(ErrorMsg, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 28\n      }\n    }, \"wrong email or password\"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      placeholder: \"email\",\n      className: \"primary\",\n      type: \"email\",\n      name: \"email\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"email\",\n      render: function render(msg) {\n        return __jsx(ErrorMsg, {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 55\n          }\n        }, msg);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      placeholder: \"password\",\n      className: \"primary\",\n      type: \"password\",\n      name: \"password\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 13\n      }\n    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"password\",\n      render: function render(msg) {\n        return msg.split(',').map(function (m) {\n          return __jsx(ErrorMsg, {\n            key: m,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 131,\n              columnNumber: 82\n            }\n          }, m);\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 13\n      }\n    }), __jsx(_btn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"submit\",\n      primary: true,\n      submit: true,\n      disabled: isSubmitting,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 13\n      }\n    }, signin && 'sign in' || signup && 'sign up'), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"submit\",\n      render: function render(msg) {\n        return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 56\n          }\n        }, msg);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 13\n      }\n    }));\n  }));\n}\n\n_s(SignIn, \"yh3kefJHdufW/qU1Db0lxgeyNY0=\");\n\n_c2 = SignIn;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ErrorMsg\");\n$RefreshReg$(_c2, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWduSW4uanM/MDg5NiJdLCJuYW1lcyI6WyJFcnJvck1zZyIsImNoaWxkcmVuIiwiU2lnbkluIiwic2lnbmluIiwic2lnbnVwIiwic2V0TmVlZFNpZ25VcCIsInNldENyZWF0ZWRVc2VyIiwic2VydmVyVXJsIiwidXNlU3RhdGUiLCJsb2dJbkVycm9yIiwic2V0TG9nSW5FcnJvciIsImNyZWF0ZVVzZXIiLCJ2YWx1ZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxvZ0luQW5kU2V0Q29va2llcyIsImNvb2tpZXMiLCJDb29raWVzIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzZXQiLCJ0b2tlbiIsInJlZnJlc2hUb2tlbiIsInN0YXR1cyIsIlJvdXRlciIsInB1c2giLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3JzIiwidGVzdCIsImZpbHRlciIsIm0iLCJmaW5kSW5kZXgiLCJqb2luIiwic2V0U3VibWl0dGluZyIsInNldFRpbWVvdXQiLCJvayIsImlzU3VibWl0dGluZyIsIm1zZyIsInNwbGl0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFFBQVQsT0FBZ0M7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDckMsU0FBTztBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkJBLFFBQTNCLENBQVA7QUFDRDtLQUZlRCxRO0FBSUQsU0FBU0UsTUFBVCxRQUE4RTtBQUFBOztBQUFBOztBQUFBLE1BQTVEQyxNQUE0RCxTQUE1REEsTUFBNEQ7QUFBQSxNQUFwREMsTUFBb0QsU0FBcERBLE1BQW9EO0FBQUEsTUFB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RUFBQyxVQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFURixFQWVFLE1BQUMsbURBQUQ7QUFBYyxVQUFJLEVBQUMsVUFBbkI7QUFBOEIsWUFBTSxFQUFFLGdCQUFBQSxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDQyxLQUFKLENBQVUsR0FBVixFQUFlQyxHQUFmLENBQW1CLFVBQUFULENBQUM7QUFBQSxpQkFBSSxNQUFDLFFBQUQ7QUFBVSxlQUFHLEVBQUVBLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFtQkEsQ0FBbkIsQ0FBSjtBQUFBLFNBQXBCLENBQUo7QUFBQSxPQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BZkYsRUFnQkUsTUFBQyw0Q0FBRDtBQUFLLFVBQUksRUFBQyxRQUFWO0FBQW1CLGFBQU8sTUFBMUI7QUFBMkIsWUFBTSxNQUFqQztBQUFrQyxjQUFRLEVBQUVNLFlBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRzVDLE1BQU0sSUFBSSxTQUFWLElBQXVCQyxNQUFNLElBQUksU0FEcEMsQ0FoQkYsRUFtQkUsTUFBQyxtREFBRDtBQUFjLFVBQUksRUFBQyxRQUFuQjtBQUE0QixZQUFNLEVBQUUsZ0JBQUE0QyxHQUFHO0FBQUEsZUFBSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZUEsR0FBZixDQUFKO0FBQUEsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5CRixDQUREO0FBQUEsR0FuRUgsQ0FERixDQURGO0FBK0ZEOztHQWhJdUI5QyxNOztNQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaWduSW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkLCBFcnJvck1lc3NhZ2UgfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQgQnRuIGZyb20gJy4vYnRuJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvck1zZyh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JNc2dcIj57Y2hpbGRyZW59PC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25Jbih7IHNpZ25pbiwgc2lnbnVwLCBzZXROZWVkU2lnblVwLCBzZXRDcmVhdGVkVXNlciwgc2VydmVyVXJsIH0pIHtcbiAgY29uc3QgW2xvZ0luRXJyb3IsIHNldExvZ0luRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNyZWF0ZVVzZXIgPSAodmFsdWVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmZXRjaChzZXJ2ZXJVcmwgKyAnL2FwaS9jcmVhdGV1c2VyJyxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcylcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyKSBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvZ0luQW5kU2V0Q29va2llcyA9IGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICAvLyBzZXQgdXAgY29va2llc1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5wb3N0KHNlcnZlclVybCArICcvYXBpL2xvZ2luJywgdmFsdWVzKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XG4gICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuKTtcbiAgICAgIGNvb2tpZXMuc2V0KCdyZWZyZXNoVG9rZW4nLCBkYXRhLnJlZnJlc2hUb2tlbik7XG4gICAgICBjb29raWVzLnNldCgnc3RhdHVzJywgZGF0YS5zdGF0dXMpO1xuICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHNldExvZ0luRXJyb3IodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiAnZG91Z0B3ZW9tZWRpYS5jb20nLCBwYXNzd29yZDogJ1BAc3N3MHJkJyB9fVxuICAgICAgICB2YWxpZGF0ZT17dmFsdWVzID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgICAgICAgICBpZiAoIXZhbHVlcy5lbWFpbCkge1xuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ2VtYWlsIHJlcXVpcmVkJztcbiAgICAgICAgICB9IGVsc2UgaWYgKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsdWVzLmVtYWlsKSkge1xuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdmFsdWVzLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSAncGFzc3dvcmQgcmVxdWlyZWQnXG4gICAgICAgICAgfSBlbHNlIGlmIChzaWdudXAgJiYgIS9eKD89LipcXGQpKD89LipbIVxcXCIjJCUmJygpKissXFwtLlxcLzo7PD0+P0BcXFtcXFxcXFxdXl9ge3x9fl0pKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qW2EtekEtWl0pKFthLXpdfFtBLVpdfFswLTldfFshXFxcIiMkJSYnKCkqKyxcXC0uXFwvOjs8PT4/QFxcW1xcXFxcXF1eX2B7fH1+XSl7OCx9JC8udGVzdCh2YWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBbJ25lZWRzIHRvIGFkZDonXTtcbiAgICAgICAgICAgIGlmICghLyg/PS4qXFxkKS8udGVzdCh2YWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKCdudW1iZXJzJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IGVycm9ycy5wYXNzd29yZC5maWx0ZXIobSA9PiBtICE9PSAnbnVtYmVycycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEvKD89LipbIVxcXCIjJCUmJygpKissXFwtLlxcLzo7PD0+P0BcXFtcXFxcXFxdXl9ge3x9fl0pLy50ZXN0KHZhbHVlcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9ycy5wYXNzd29yZC5maW5kSW5kZXgobSA9PiBtID09PSAnc3BlY2lhbCBjaGFyYWN0ZXJzJykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goJ3NwZWNpYWwgY2hhcmFjdGVycycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBlcnJvcnMucGFzc3dvcmQuZmlsdGVyKG0gPT4gbSAhPT0gJ3NwZWNpYWwgY2hhcmFjdGVycycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEvKD89LipbYS16XSkvLnRlc3QodmFsdWVzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQucHVzaCgnbG93ZXJjYXNlJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9IGVycm9ycy5wYXNzd29yZC5maWx0ZXIobSA9PiBtICE9PSAnbG93ZXJjYXNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIS8oPz0uKltBLVpdKS8udGVzdCh2YWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZC5wdXNoKCd1cHBlcmNhc2UnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gZXJyb3JzLnBhc3N3b3JkLmZpbHRlcihtID0+IG0gIT09ICd1cHBlcmNhc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghLy57OCx9Ly50ZXN0KHZhbHVlcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goJ2F0IGxlYXN0IDgnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gZXJyb3JzLnBhc3N3b3JkLmZpbHRlcihtID0+IG0gIT09ICdhdCBsZWFzdCA4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBlcnJvcnMucGFzc3dvcmQuam9pbignLCcpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgICAgIH19XG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xuICAgICAgICAgIHNpZ25pbiAmJlxuICAgICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgIGF3YWl0IGxvZ0luQW5kU2V0Q29va2llcyh2YWx1ZXMpO1xuICAgICAgICAgICAgICAvLyBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcblxuICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgc2lnbnVwICYmXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY3JlYXRlVXNlcih2YWx1ZXMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG4gICAgICAgICAgICAgICAgICBzZXRMb2dJbkVycm9yKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIHNldENyZWF0ZWRVc2VyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgc2V0TmVlZFNpZ25VcChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4geyBpZiAoZXJyKSBjb25zb2xlLmVycm9yKGVycikgfSk7XG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgIHtsb2dJbkVycm9yICYmIDxFcnJvck1zZz53cm9uZyBlbWFpbCBvciBwYXNzd29yZDwvRXJyb3JNc2c+fVxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJlbWFpbFwiIHJlbmRlcj17bXNnID0+IDxFcnJvck1zZz57bXNnfTwvRXJyb3JNc2c+fSAvPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJwYXNzd29yZFwiIHJlbmRlcj17bXNnID0+IG1zZy5zcGxpdCgnLCcpLm1hcChtID0+IDxFcnJvck1zZyBrZXk9e219PnttfTwvRXJyb3JNc2c+KX0gLz5cbiAgICAgICAgICAgIDxCdG4gbmFtZT1cInN1Ym1pdFwiIHByaW1hcnkgc3VibWl0IGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICB7c2lnbmluICYmICdzaWduIGluJyB8fCBzaWdudXAgJiYgJ3NpZ24gdXAnfVxuICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJzdWJtaXRcIiByZW5kZXI9e21zZyA9PiA8RXJyb3JNZXNzYWdlPnttc2d9PC9FcnJvck1lc3NhZ2U+fSAvPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvPlxuICApXG59XG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/signIn.js\n");

/***/ })

})