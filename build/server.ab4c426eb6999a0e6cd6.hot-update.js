exports.id = "server";
exports.modules = {

/***/ "./src/pages/about/vision/index.js":
/*!*****************************************!*\
  !*** ./src/pages/about/vision/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_advantage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/advantage */ "./src/components/advantage/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ "./src/pages/about/vision/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/about/vision/index.js";







function OurVision(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.AboutInfo;
  }),
      payload = _useSelector.payload;

  var goalItems = [{
    title: 'Most valuable thing',
    description: 'There is as little hierarchy as possible and the most valuable thing is the quality of the work or the idea - not the position or years of experience one has',
    src: __webpack_require__(/*! assets/icons/valuable-icon.svg */ "./src/assets/icons/valuable-icon.svg")
  }, {
    title: 'What we care',
    description: 'We care about and take responsibility for the work we do, with high standards of quality',
    src: __webpack_require__(/*! assets/icons/diamond-icon.svg */ "./src/assets/icons/diamond-icon.svg")
  }, {
    title: 'Become better',
    description: 'We always learn and improve our skills to become better and take greater challenge',
    src: __webpack_require__(/*! assets/icons/degree-icon.svg */ "./src/assets/icons/degree-icon.svg")
  }, {
    title: 'Everyone will be safe',
    description: 'We want everyone to feel they can fail and be safe because if you are scared to fail you don’t try new things or take risk or new responsibilities - so you don’t get better',
    src: __webpack_require__(/*! assets/icons/shield-icon.svg */ "./src/assets/icons/shield-icon.svg")
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.vision,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header2"], {
    title: "Our visions and goals",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.goalsList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, payload && payload.visions.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_advantage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: item.heading,
      description: item.info,
      src: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'assets/icons/vision-icon.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (OurVision);

/***/ })

};
//# sourceMappingURL=server.ab4c426eb6999a0e6cd6.hot-update.js.map