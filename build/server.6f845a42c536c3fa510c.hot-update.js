exports.id = "server";
exports.modules = {

/***/ "./src/pages/home/projects/index.js":
/*!******************************************!*\
  !*** ./src/pages/home/projects/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/project */ "./src/components/project/index.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/link */ "./src/components/link/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/projects/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/projects/index.js";







function Projects() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var payload = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ProjectAll;
  });
  var projectItems = [{
    title: 'Mobile App for not typical karaoke',
    description: "Replacement and enhancement of Lucky Voice's venerable iOS sing at home karaoke app.",
    client: 'Lucky Voice',
    sector: 'Leisure & Media',
    type: 'Mobile App',
    stack: 'React Native, Python',
    team: 'Yuriy R., Anton Zh., Iryna Sh., Andrew Kh., Mykola P.',
    index: 1
  }, {
    title: 'Web developent online platform to work with trusted network',
    description: "Replacement and enhancement of Lucky Voice's venerable iOS sing at home karaoke app.",
    client: 'Lucky Voice',
    sector: 'Leisure & Media',
    type: 'Mobile App',
    stack: 'React Native, Python',
    team: 'Yuriy R., Anton Zh., Iryna Sh., Andrew Kh., Mykola P.',
    index: 0
  }, {
    title: 'Mobile App for not typical karaoke',
    description: "Replacement and enhancement of Lucky Voice's venerable iOS sing at home karaoke app.",
    client: 'Lucky Voice',
    sector: 'Leisure & Media',
    type: 'Mobile App',
    stack: 'React Native, Python',
    team: 'Yuriy R., Anton Zh., Iryna Sh., Andrew Kh., Mykola P.',
    index: 1
  }, {
    title: 'Web developent online platform to work with trusted network',
    description: "Replacement and enhancement of Lucky Voice's venerable iOS sing at home karaoke app.",
    client: 'Lucky Voice',
    sector: 'Leisure & Media',
    type: 'Mobile App',
    stack: 'React Native, Python',
    team: 'Yuriy R., Anton Zh., Iryna Sh., Andrew Kh., Mykola P.',
    index: 0
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.projects,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header2"], {
    className: styles.topHeader,
    title: "Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, payload.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_project__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 14
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.bottomLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Show all projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 6
    }
  }))));
}

/***/ })

};
//# sourceMappingURL=server.6f845a42c536c3fa510c.hot-update.js.map