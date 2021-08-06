exports.id = "server";
exports.modules = {

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/header */ "./src/components/header/index.js");
/* harmony import */ var components_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/content */ "./src/components/content/index.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/footer */ "./src/components/footer/index.js");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_jss_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/jss/theme */ "./src/config/jss/theme.js");
/* harmony import */ var hooks_use_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hooks/use-layout */ "./src/hooks/use-layout.js");
/* harmony import */ var pages_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pages/error */ "./src/pages/error/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var pages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pages */ "./src/pages/index.js");
/* harmony import */ var _config_jss_use_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config/jss/use-styles */ "./src/config/jss/use-styles.js");
/* harmony import */ var assets_fonts_font_face_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/fonts/font-face.css */ "./src/assets/fonts/font-face.css");
/* harmony import */ var assets_fonts_font_face_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assets_fonts_font_face_css__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














function App(_ref) {
  var showLayout = _ref.showLayout;
  var classNames = Object(_config_jss_use_styles__WEBPACK_IMPORTED_MODULE_12__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classNames.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_11__["home"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_11__["about"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_11__["projects"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_11__["project"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_11__["team"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_11__["crewman"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, pages__WEBPACK_IMPORTED_MODULE_11__["join"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], {
    component: pages_error__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  }))), showLayout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var showLayout = Object(hooks_use_layout__WEBPACK_IMPORTED_MODULE_8__["default"])();

  var theme = _objectSpread({}, _config_jss_theme__WEBPACK_IMPORTED_MODULE_7__["default"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_jss__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(App, {
    showLayout: showLayout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }));
});

/***/ })

};
//# sourceMappingURL=server.3bcb42c23692f192ce7a.hot-update.js.map