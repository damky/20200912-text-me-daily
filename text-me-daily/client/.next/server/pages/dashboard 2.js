module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dashboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/Doug/Library/Mobile Documents/com~apple~CloudDocs/Development/20200912-text-me-daily/text-me-daily/client/pages/dashboard.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // set up cookies\n\nfunction Dashboard(ctx) {\n  const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_1__[\"Cookies\"]();\n  const token = cookies.get('token');\n\n  const fetcherAuth = url => axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, {\n    headers: {\n      'Authorization': token\n    }\n  }).then(res => res.data);\n\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(`${ctx.serverUrl}/api/ping`, fetcherAuth);\n\n  if (error) {\n    console.log(error.response.data.msg);\n    console.log(\"redirecting back to main page\");\n\n    if (ctx.res) {\n      ctx.res.writeHead(302, {\n        Location: '/'\n      });\n      ctx.res.end();\n    } else {\n      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n    }\n\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 12\n      }\n    }, \"error loading. probably not authorized.\");\n  }\n\n  if (!data) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 12\n      }\n    }, \"loading...\");\n  }\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 10\n    }\n  }, \"secret page\"));\n}\nasync function getStaticProps(ctx) {\n  return {\n    props: {\n      serverUrl: process.env.SERVER\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQuanM/YmJkOCJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJjdHgiLCJjb29raWVzIiwiQ29va2llcyIsInRva2VuIiwiZ2V0IiwiZmV0Y2hlckF1dGgiLCJ1cmwiLCJheGlvcyIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVycm9yIiwidXNlU1dSIiwic2VydmVyVXJsIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwibXNnIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJSb3V0ZXIiLCJwdXNoIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyIsInByb2Nlc3MiLCJlbnYiLCJTRVJWRVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxHQUFuQixFQUF3QjtBQUNyQyxRQUFNQyxPQUFPLEdBQUcsSUFBSUMsb0RBQUosRUFBaEI7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZLE9BQVosQ0FBZDs7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLEdBQUcsSUFBSUMsNENBQUssQ0FBQ0gsR0FBTixDQUFVRSxHQUFWLEVBQWU7QUFBRUUsV0FBTyxFQUFFO0FBQUUsdUJBQWlCTDtBQUFuQjtBQUFYLEdBQWYsRUFBd0RNLElBQXhELENBQTZEQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBeEUsQ0FBM0I7O0FBQ0EsUUFBTTtBQUFFQSxRQUFGO0FBQVFDO0FBQVIsTUFBa0JDLDBDQUFNLENBQUUsR0FBRWIsR0FBRyxDQUFDYyxTQUFVLFdBQWxCLEVBQThCVCxXQUE5QixDQUE5Qjs7QUFFQSxNQUFJTyxLQUFKLEVBQVc7QUFDVEcsV0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQUssQ0FBQ0ssUUFBTixDQUFlTixJQUFmLENBQW9CTyxHQUFoQztBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSwrQkFBWjs7QUFDQSxRQUFJaEIsR0FBRyxDQUFDVSxHQUFSLEVBQWE7QUFDWFYsU0FBRyxDQUFDVSxHQUFKLENBQVFTLFNBQVIsQ0FBa0IsR0FBbEIsRUFBdUI7QUFDckJDLGdCQUFRLEVBQUU7QUFEVyxPQUF2QjtBQUdBcEIsU0FBRyxDQUFDVSxHQUFKLENBQVFXLEdBQVI7QUFDRCxLQUxELE1BS087QUFDTEMsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDRDs7QUFDRCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBQVA7QUFDRDs7QUFDRCxNQUFJLENBQUNaLElBQUwsRUFBVztBQUNULFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDtBQUNEOztBQUVELFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUwsQ0FERjtBQUdEO0FBRU0sZUFBZWEsY0FBZixDQUE4QnhCLEdBQTlCLEVBQW1DO0FBQ3hDLFNBQU87QUFDTHlCLFNBQUssRUFBRTtBQUNMWCxlQUFTLEVBQUVZLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQURsQjtBQURGLEdBQVA7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL2Rhc2hib2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG4vLyBzZXQgdXAgY29va2llc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoY3R4KSB7XG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICBjb25zdCBmZXRjaGVyQXV0aCA9IHVybCA9PiBheGlvcy5nZXQodXJsLCB7IGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiB0b2tlbiB9IH0pLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGAke2N0eC5zZXJ2ZXJVcmx9L2FwaS9waW5nYCwgZmV0Y2hlckF1dGgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKTtcbiAgICBjb25zb2xlLmxvZyhcInJlZGlyZWN0aW5nIGJhY2sgdG8gbWFpbiBwYWdlXCIpO1xuICAgIGlmIChjdHgucmVzKSB7XG4gICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHtcbiAgICAgICAgTG9jYXRpb246ICcvJ1xuICAgICAgfSlcbiAgICAgIGN0eC5yZXMuZW5kKClcbiAgICB9IGVsc2Uge1xuICAgICAgUm91dGVyLnB1c2goJy8nKVxuICAgIH1cbiAgICByZXR1cm4gPGRpdj5lcnJvciBsb2FkaW5nLiBwcm9iYWJseSBub3QgYXV0aG9yaXplZC48L2Rpdj5cbiAgfVxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+PGgyPnNlY3JldCBwYWdlPC9oMj48L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY3R4KSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNlcnZlclVybDogcHJvY2Vzcy5lbnYuU0VSVkVSXG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIj9lMjliIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-cookie\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });