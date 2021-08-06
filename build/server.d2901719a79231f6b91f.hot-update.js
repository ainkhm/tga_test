exports.id = "server";
exports.modules = {

/***/ "./src/assets/icons sync recursive ^\\.\\/reasons\\-icon\\-.*\\.svg$":
/*!************************************************************!*\
  !*** ./src/assets/icons sync ^\.\/reasons\-icon\-.*\.svg$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./reasons-icon-0.svg": "./src/assets/icons/reasons-icon-0.svg",
	"./reasons-icon-1.svg": "./src/assets/icons/reasons-icon-1.svg",
	"./reasons-icon-2.svg": "./src/assets/icons/reasons-icon-2.svg",
	"./reasons-icon-3.svg": "./src/assets/icons/reasons-icon-3.svg",
	"./reasons-icon-4.svg": "./src/assets/icons/reasons-icon-4.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/icons sync recursive ^\\.\\/reasons\\-icon\\-.*\\.svg$";

/***/ }),

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
  });
  [{
    icon: 0,
    title: 'Remote work',
    description: 'You can work from any place\non Earth'
  }, {
    icon: 1,
    title: 'Transparency',
    description: 'Our employees always know what’s happening and how business is going'
  }, {
    icon: 2,
    title: 'No bureaucracy',
    description: 'We don’t hold unnecessary meeting or do useless paperwork'
  }, {
    icon: 3,
    title: 'Learning',
    description: 'We encourage employees to learn and become better every day and compensate learning expenses'
  }, {
    icon: 4,
    title: 'Flexibility',
    description: 'We don’t follow standard\n9 to 5 schedule and offer our employees perfect work-life balance'
  }];
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
  }, data.reasons.map(function (item, index) {
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

/***/ }),

/***/ "./src/pages/join/reasons/item/index.js":
/*!**********************************************!*\
  !*** ./src/pages/join/reasons/item/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/pages/join/reasons/item/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/join/reasons/item/index.js";




function Reason(_ref) {
  var title = _ref.title,
      description = _ref.description,
      icon = _ref.icon;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.reason,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__("./src/assets/icons sync recursive ^\\.\\/reasons\\-icon\\-.*\\.svg$")("./reasons-icon-".concat(icon, ".svg")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.infoWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_1__["Header3"], {
    title: title,
    className: styles.customHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_1__["Description3"], {
    title: description,
    className: styles.customDesc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Reason);

/***/ }),

/***/ "./src/pages/join/reasons/item/use-styles.js":
/*!***************************************************!*\
  !*** ./src/pages/join/reasons/item/use-styles.js ***!
  \***************************************************/
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
    reason: {
      '& img': {
        maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(48),
        marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
      }
    },
    customHeader: {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15)
    },
    infoWrap: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45)
    }, theme.media.sm_, {
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(270)
    }),
    customDesc: {
      whiteSpace: 'pre-wrap'
    }
  };
}));

/***/ }),

/***/ "./src/pages/join/reasons/use-styles.js":
/*!**********************************************!*\
  !*** ./src/pages/join/reasons/use-styles.js ***!
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
  var _reasonsRow;

  return {
    reasonsWrap: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    }, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }),
    reasonsRow: (_reasonsRow = {
      display: 'flex',
      flexWrap: 'wrap',
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(28)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_reasonsRow, theme.media.sm_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_reasonsRow, theme.media.md_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }), _reasonsRow),
    firstRow: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      justifyContent: 'space-between',
      flex: '100%',
      flexDirection: 'column'
    }, theme.media.sm_, {
      flexDirection: 'row'
    }),
    centeredRow: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      justifyContent: 'space-around',
      flex: '100%',
      marginTop: 0,
      flexDirection: 'column'
    }, theme.media.sm_, {
      flexDirection: 'row',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30)
    })
  };
}));

/***/ })

};
//# sourceMappingURL=server.d2901719a79231f6b91f.hot-update.js.map