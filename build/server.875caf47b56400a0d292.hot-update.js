exports.id = "server";
exports.modules = {

/***/ "./src/pages/join/positions/index.js":
/*!*******************************************!*\
  !*** ./src/pages/join/positions/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/cards */ "./src/components/cards/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-styles */ "./src/pages/join/positions/use-styles.js");

var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/join/positions/index.js";







function Positions() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.JoinInfo;
  }),
      data = _useSelector.data;

  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var vacancies = [{
    title: 'Python backend developer',
    requirements: ['We look for talented Python devs with 3+ years of experience', 'Hands on experience with Python (Django, Flask)', 'Good knowledge of data structures and algorithms', 'Experience with SQL and NoSQL databases', 'Knowledge of net/web protocols', 'Understanding of HTTP and REST principles', 'At least Intermediate level of English, good communications skills']
  }, {
    title: 'Python backend developer',
    requirements: ['We look for talented Python devs with 3+ years of experience', 'Hands on experience with Python (Django, Flask)', 'Good knowledge of data structures and algorithms', 'Experience with SQL and NoSQL databases', 'Knowledge of net/web protocols', 'Understanding of HTTP and REST principles', 'At least Intermediate level of English, good communications skills']
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.positionsWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_3__["Header2"], {
    title: "Open positions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.positions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, vacancies.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_cards__WEBPACK_IMPORTED_MODULE_5__["InfoCard"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 14
      }
    }));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Positions);

/***/ })

};
//# sourceMappingURL=server.875caf47b56400a0d292.hot-update.js.map