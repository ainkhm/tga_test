exports.id = "server";
exports.modules = {

/***/ "./src/components/link/use-styles.js":
/*!*******************************************!*\
  !*** ./src/components/link/use-styles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {
    link: {
      display: 'inline-block',
      position: 'relative',
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(30),
      fontFamily: 'RedHatFontBold',
      '&:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: 0,
        left: 0,
        backgroundColor: theme.colors.primary.string(),
        transform: 'scaleX(0.5)',
        transformOrigin: 'bottom left',
        transition: 'transform 0.3s'
      },
      '&:hover': {
        '&:after': {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left'
        },
        '&:before': {
          animation: '1.2s fadeIn',
          animationFillMode: 'forwards'
        }
      }
    },
    linkWhite: {
      color: theme.colors.white.string(),
      '&:after': {
        backgroundColor: theme.colors.white.string()
      },
      '&:before': {
        position: 'absolute',
        content: '""',
        right: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(-30),
        top: '50%',
        maskImage: "url(".concat(__webpack_require__(/*! assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"), ")"),
        maskSize: 'cover',
        backgroundColor: theme.colors.white.string(),
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(16),
        height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(16),
        transform: 'translate(0, -50%)'
      }
    }
  };
}));

/***/ })

};
//# sourceMappingURL=server.4830c450abf8eddbc6f3.hot-update.js.map