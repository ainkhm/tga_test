exports.id = "server";
exports.modules = {

/***/ "./src/components/header/use-styles.js":
/*!*********************************************!*\
  !*** ./src/components/header/use-styles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    header: {
      backgroundColor: theme.colors.white.string(),
      boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.12)",
      zIndex: 100
    },
    headline: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      alignItems: 'center',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10), 0]
    }, theme.media.md_, {
      padding: 0
    }),
    headlineAction: {
      marginLeft: 'auto'
    },
    contactUs: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, theme.media._sm, {
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24)]
    })
  };
}));

/***/ })

};
//# sourceMappingURL=server.02f10e5ba7f4d7ba7eec.hot-update.js.map