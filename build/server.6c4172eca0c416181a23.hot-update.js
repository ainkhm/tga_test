exports.id = "server";
exports.modules = {

/***/ "./src/assets/icons/degree-icon.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/degree-icon.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/file-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/ainkhm/Desktop/tga-app/src/assets/icons/degree-icon.svg'");

/***/ }),

/***/ "./src/assets/icons/diamond-icon.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/diamond-icon.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/file-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/ainkhm/Desktop/tga-app/src/assets/icons/diamond-icon.svg'");

/***/ }),

/***/ "./src/assets/icons/shield-icon.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/shield-icon.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/file-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/ainkhm/Desktop/tga-app/src/assets/icons/shield-icon.svg'");

/***/ }),

/***/ "./src/assets/icons/valuable-icon.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/valuable-icon.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/file-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/ainkhm/Desktop/tga-app/src/assets/icons/valuable-icon.svg'");

/***/ }),

/***/ "./src/components/advantage/index.js":
/*!*******************************************!*\
  !*** ./src/components/advantage/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/components/advantage/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/advantage/index.js";




function Advantage(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.advantage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: styles.icon,
    src: props.src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_1__["Header3"], {
    className: styles.header,
    title: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_1__["Description3"], {
    className: styles.description,
    title: props.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Advantage);

/***/ }),

/***/ "./src/components/advantage/use-styles.js":
/*!************************************************!*\
  !*** ./src/components/advantage/use-styles.js ***!
  \************************************************/
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
  var _advantage;

  return {
    advantage: (_advantage = {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(44)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_advantage, theme.media.sm_, {
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(240),
      marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_advantage, theme.media.md_, {
      '&:last-child': {
        marginRight: 0
      }
    }), _advantage),
    icon: {
      margin: 0,
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(48)
    },
    header: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8)
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15)
    }),
    description: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8)
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(13)
    })
  };
}));

/***/ }),

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
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (OurVision);

/***/ }),

/***/ "./src/pages/about/vision/use-styles.js":
/*!**********************************************!*\
  !*** ./src/pages/about/vision/use-styles.js ***!
  \**********************************************/
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
  var _goalsList;

  return {
    vision: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    }, theme.media.md_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }),
    goalsList: (_goalsList = {
      display: 'flex',
      flexDirection: 'column'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_goalsList, theme.media.sm_, {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_goalsList, theme.media.md_, {
      flexWrap: 'no-wrap',
      justifyContent: 'normal',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }), _goalsList)
  };
}));

/***/ })

};
//# sourceMappingURL=server.6c4172eca0c416181a23.hot-update.js.map