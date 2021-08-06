exports.id = "server";
exports.modules = {

/***/ "./src/pages/home/technology/index.js":
/*!********************************************!*\
  !*** ./src/pages/home/technology/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Technology; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/technology/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/technology/index.js";






function Technology() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.TechMains;
  }),
      technologies = _useSelector.technologies;

  console.log('RR', technologies.BE);
  var tabs = [{
    title: 'Front-End',
    tech: technologies.FE,
    link: 'Learn more'
  }, {
    title: 'Back End',
    tech: technologies.BE,
    link: 'Learn more'
  }, {
    title: 'Other technologies',
    tech: technologies.other,
    link: 'Learn more'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.tech,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_3__["Header2"], {
    title: "Technology stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_3__["Description1"], {
    className: styles.descriptionOffset,
    title: "Main technologies we use, but always expanding our stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: tabs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  })));
}

/***/ })

};
//# sourceMappingURL=server.da33ab93e292c1457bdc.hot-update.js.map