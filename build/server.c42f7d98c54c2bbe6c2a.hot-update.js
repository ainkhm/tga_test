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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/pages/about/solutions/use-styles.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/about/solutions/index.js";







function Solutions() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.AboutInfo;
  }),
      payload = _useSelector.payload;

  var tabs = payload && payload.help.map(function (item) {
    return {
      title: item.heading,
      description: item.info
    };
  });
  console.log('SS', tabs); // const tabs =  [
  // 	{
  // 		title: 'TGA for your project',
  // 		description:
  // 			'1 We have decades of experience in delivering high quality software to tight budgets and deadlines. We are a small highly competent team that have been working together for many years. We enjoy challenging agile projects and are largely technology neutral.',
  // 	},
  // 	{
  // 		title: 'TGA for your Agency',
  // 		description:
  // 			'2 We have decades of experience in delivering high quality software to tight budgets and deadlines. We are a small highly competent team that have been working together for many years. We enjoy challenging agile projects and are largely technology neutral.',
  // 	},
  // 	{
  // 		title: 'TGA for Consultancy',
  // 		description:
  // 			'3 We have decades of experience in delivering high quality software to tight budgets and deadlines. We are a small highly competent team that have been working together for many years. We enjoy challenging agile projects and are largely technology neutral.',
  // 	},
  // ];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.solutions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Header2"], {
    title: "How TGA can help you",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Description1"], {
    className: styles.captionOffset,
    title: "Different solutions and high quality service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Solutions);

/***/ })

};
//# sourceMappingURL=server.c42f7d98c54c2bbe6c2a.hot-update.js.map