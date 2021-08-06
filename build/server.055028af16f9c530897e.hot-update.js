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
      payload = _useSelector.payload;

  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  console.log('SSR', payload);

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
      lineNumber: 26,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Header1"], {
    className: styles.topHeader,
    title: payload.slogan,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Description1"], {
    className: styles.topDescription,
    title: payload && payload.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.action,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Discover more",
    dark: isTabletOrMobile,
    className: styles.customButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.bottom,
    onClick: scrollDown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! assets/icons/arrow-down.svg */ "./src/assets/icons/arrow-down.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  })));
}

/***/ })

};
//# sourceMappingURL=server.055028af16f9c530897e.hot-update.js.map