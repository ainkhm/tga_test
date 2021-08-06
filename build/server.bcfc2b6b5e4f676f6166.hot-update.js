exports.id = "server";
exports.modules = {

/***/ "./src/pages/home/top/index.js":
/*!*************************************!*\
  !*** ./src/pages/home/top/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Top; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/top/use-styles.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helpers_breakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/breakpoints */ "./src/helpers/breakpoints.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/button */ "./src/components/button/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/top/index.js";







function Top() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.HomeInfo;
  }),
      payload = _useSelector.payload; //	const { slogan } = payload.length && payload;


  if (payload !== 'undefined') {
    console.log('FF', payload && payload.slogan);
  }

  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();

  var scrollDown = function scrollDown() {
    var target = document.getElementById('services');
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  var isTabletOrMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_4__["tabletSize"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.top,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Header1"], {
    className: styles.topHeader,
    title: payload.slogan && payload.slogan,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Description1"], {
    className: styles.topDescription,
    title: payload && payload.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.action,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Discover more",
    dark: isTabletOrMobile,
    className: styles.customButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.bottom,
    onClick: scrollDown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! assets/icons/arrow-down.svg */ "./src/assets/icons/arrow-down.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  })));
}

/***/ }),

/***/ "./src/pages/home/top/main-bg.svg":
/*!****************************************!*\
  !*** ./src/pages/home/top/main-bg.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/main-bg.2fec8690.svg";

/***/ }),

/***/ "./src/pages/home/top/use-styles.js":
/*!******************************************!*\
  !*** ./src/pages/home/top/use-styles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  var _bottom;

  return {
    top: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      height: 'calc(100vh - 59px)',
      backgroundSize: 'cover',
      backgroundImage: "url(".concat(__webpack_require__(/*! ./main-bg.svg */ "./src/pages/home/top/main-bg.svg"), ")"),
      backgroundPosition: 'center',
      padding: [0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(28)]
    }, theme.media.sm_, {
      justifyContent: 'center',
      padding: 0,
      height: 'calc(100vh - 73px)'
    }),
    topHeader: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      textAlign: 'center',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(60),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(810)
    }, theme.media.sm_, {
      marginTop: 0
    }),
    topDescription: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      textAlign: 'center',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(43),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(500)
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
    }),
    action: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45),
      width: '100%'
    }, theme.media.sm_, {
      width: 'unset',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    }),
    customButton: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      width: '100%'
    }, theme.media.sm_, {
      width: 'auto'
    }),
    bottom: (_bottom = {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40),
      position: 'relative',
      top: 0,
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(64),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      padding: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(2)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_bottom, theme.media.sm_, {
      top: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100),
      marginTop: 0,
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(64),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(64),
      padding: 0
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_bottom, '& img', {
      width: '100%'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_bottom, '&:after', {
      position: 'absolute',
      top: '50%',
      left: '50%',
      content: '""',
      width: '100%',
      height: '100%',
      border: "1px solid ".concat(theme.colors.black.string()),
      transform: "translate(-50%, -50%)",
      borderRadius: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(64)
    }), _bottom)
  };
}));

/***/ })

};
//# sourceMappingURL=server.bcfc2b6b5e4f676f6166.hot-update.js.map