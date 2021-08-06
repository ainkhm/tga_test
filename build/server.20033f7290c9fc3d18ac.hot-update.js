exports.id = "server";
exports.modules = {

/***/ "./src/pages/join/hiring/index.js":
/*!****************************************!*\
  !*** ./src/pages/join/hiring/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/pages/join/hiring/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/join/hiring/index.js";






function HiringProcess(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var hiringProcess = [{
    step: 1,
    title: 'Application'
  }, {
    step: 2,
    title: 'Interview\nwith HR'
  }, {
    step: 3,
    title: 'Tech call'
  }, {
    step: 4,
    title: 'Test task\n(optional)'
  }, {
    step: 5,
    title: 'Call with\nCEO and CTO'
  }, {
    step: 6,
    title: 'Become\na valuable part\nof TGA Digital'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.hiringWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header2"], {
    title: "Our hiring process",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.process,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, hiringProcess.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.processStep,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.counter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, item.step), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, "Application"));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (HiringProcess);

/***/ })

};
//# sourceMappingURL=server.20033f7290c9fc3d18ac.hot-update.js.map