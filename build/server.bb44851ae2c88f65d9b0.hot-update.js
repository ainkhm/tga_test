exports.id = "server";
exports.modules = {

/***/ "./src/config/jss/use-styles.js":
/*!**************************************!*\
  !*** ./src/config/jss/use-styles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    '@global': {
      '*': {
        fontFamily: 'RedHatFont'
      },
      html: {
        boxSizing: 'border-box',
        overflowX: 'hidden'
      },
      '*, *:before, *:after': {
        boxSizing: 'inherit'
      },
      body: {
        backgroundColor: theme.colors.white.string(),
        margin: 0,
        padding: 0,
        fontSize: '16px',
        overflowX: 'hidden'
      },
      'ul, ol': {
        paddingLeft: 0,
        margin: 0,
        listStyle: 'none'
      },
      li: {
        padding: 0
      },
      'p, h1, h2, h3, h4, h5, h6 ': {
        margin: 0,
        padding: 0
      },
      a: {
        textDecoration: 'none',
        color: theme.colors.black.string()
      },
      button: {
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        cursor: 'pointer'
      },
      '.headroom--pinned': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, theme.media._md, {
        padding: [size(8), size(24)]
      })
    }
  };
}));

/***/ })

};
//# sourceMappingURL=server.bb44851ae2c88f65d9b0.hot-update.js.map