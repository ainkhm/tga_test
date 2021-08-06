exports.id = "server";
exports.modules = {

/***/ "./src/pages/join/reasons/index.js":
/*!*****************************************!*\
  !*** ./src/pages/join/reasons/index.js ***!
  \*****************************************/
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
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ "./src/pages/join/reasons/use-styles.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item */ "./src/pages/join/reasons/item/index.js");

var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/join/reasons/index.js";







function Reasons() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.JoinInfo;
  }),
      data = _useSelector.data;

  var reasons = data.reasons.map(function (item, index) {
    return {
      icon: index,
      title: item.heading,
      description: item.info
    };
  }); // [
  // 	{
  // 		icon: 0,
  // 		title: 'Remote work',
  // 		description: 'You can work from any place\non Earth',
  // 	},
  // 	{
  // 		icon: 1,
  // 		title: 'Transparency',
  // 		description:
  // 			'Our employees always know what’s happening and how business is going',
  // 	},
  // 	{
  // 		icon: 2,
  // 		title: 'No bureaucracy',
  // 		description: 'We don’t hold unnecessary meeting or do useless paperwork',
  // 	},
  // 	{
  // 		icon: 3,
  // 		title: 'Learning',
  // 		description:
  // 			'We encourage employees to learn and become better every day and compensate learning expenses',
  // 	},
  // 	{
  // 		icon: 4,
  // 		title: 'Flexibility',
  // 		description:
  // 			'We don’t follow standard\n9 to 5 schedule and offer our employees perfect work-life balance',
  // 	},
  // ];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.reasonsWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header2"], {
    title: "5 reasons to join TGA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.reasonsRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.firstRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 6
    }
  }, reasons.map(function (item, index) {
    return index <= 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.centeredRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 6
    }
  }, reasons.map(function (item, index) {
    return index > 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 28
      }
    }));
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Reasons);

/***/ })

};
//# sourceMappingURL=server.0126dd8b7db10dfdd520.hot-update.js.map