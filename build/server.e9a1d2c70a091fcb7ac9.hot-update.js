exports.id = "server";
exports.modules = {

/***/ "./src/pages/crewman/information/index.js":
/*!************************************************!*\
  !*** ./src/pages/crewman/information/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_specification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/specification */ "./src/components/specification/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/crewman/information/index.js";




function Information() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.TeamMember;
  }),
      payload = _useSelector.payload;

  var info = {
    heading: 'Mykola P.',
    description: "QA engineer and project lead with more than 6 years of experience, great communicator and negotiator. Make team work productively and efficiently.\n\nLives in Uzhgorod (Western Ukraine) with his wife and son.\nLikes coffee and dogs.",
    aditional: {
      heading: 'Work and projects',
      details: [{
        naming: 'Manager',
        project: ['World athletics projects', 'Lucky Voice', 'Sixley']
      }, {
        naming: 'QA',
        project: ['Netcel']
      }]
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_specification__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Information);

/***/ })

};
//# sourceMappingURL=server.e9a1d2c70a091fcb7ac9.hot-update.js.map