exports.id = "server";
exports.modules = {

/***/ "./src/pages/about/solutions/index.js":
/*!********************************************!*\
  !*** ./src/pages/about/solutions/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/pages/about/solutions/use-styles.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/about/solutions/index.js";






function Solutions(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var _useSelector = useSelector(function (state) {
    return state.AboutInfo;
  }),
      payload = _useSelector.payload;

  var tabs = [{
    title: 'TGA for your project',
    description: '1 We have decades of experience in delivering high quality software to tight budgets and deadlines. We are a small highly competent team that have been working together for many years. We enjoy challenging agile projects and are largely technology neutral.'
  }, {
    title: 'TGA for your Agency',
    description: '2 We have decades of experience in delivering high quality software to tight budgets and deadlines. We are a small highly competent team that have been working together for many years. We enjoy challenging agile projects and are largely technology neutral.'
  }, {
    title: 'TGA for Consultancy',
    description: '3 We have decades of experience in delivering high quality software to tight budgets and deadlines. We are a small highly competent team that have been working together for many years. We enjoy challenging agile projects and are largely technology neutral.'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.solutions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header2"], {
    title: "How TGA can help you",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Description1"], {
    className: styles.captionOffset,
    title: "Different solutions and high quality service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: tabs,
    solutions: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Solutions);

/***/ })

};
//# sourceMappingURL=server.fabebc4107deca0c64fa.hot-update.js.map