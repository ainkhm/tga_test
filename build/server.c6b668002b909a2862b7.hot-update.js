exports.id = "server";
exports.modules = {

/***/ "./src/assets/images sync recursive ^\\.\\/project\\-img\\-.*\\.png$":
/*!************************************************************!*\
  !*** ./src/assets/images sync ^\.\/project\-img\-.*\.png$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./project-img-0.png": "./src/assets/images/project-img-0.png",
	"./project-img-1.png": "./src/assets/images/project-img-1.png"
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
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/project\\-img\\-.*\\.png$";

/***/ }),

/***/ "./src/assets/images/project-img-0.png":
/*!*********************************************!*\
  !*** ./src/assets/images/project-img-0.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/project-img-0.ab020ced.png";

/***/ }),

/***/ "./src/assets/images/project-img-1.png":
/*!*********************************************!*\
  !*** ./src/assets/images/project-img-1.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/project-img-1.c338c972.png";

/***/ }),

/***/ "./src/components/project/index.js":
/*!*****************************************!*\
  !*** ./src/components/project/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/components/project/use-styles.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api */ "./src/api/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/project/index.js";




function Project(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  console.log('sdfsdf', props.url);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.project,
    style: {
      backgroundImage: props.url ? "url(".concat(api__WEBPACK_IMPORTED_MODULE_3__["baseURL"], "/image/").concat(props.url, ")") : "url(".concat(__webpack_require__("./src/assets/images sync recursive ^\\.\\/project\\-img\\-.*\\.png$")("./project-img-".concat(props.index, ".png")), ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "projects/luckyvoice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectTop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.logo ? "".concat(api__WEBPACK_IMPORTED_MODULE_3__["baseURL"], "/image/").concat(props.logo) : __webpack_require__("./src/assets/icons sync recursive ^\\.\\/logo\\-icon\\-.*\\.png$")("./logo-icon-".concat(props.index, ".png")),
    className: styles.projectLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 6
    }
  }, props.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectMiddle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectBottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: styles.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, "Client:\xA0"), props.client), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: styles.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 8
    }
  }, "Sector:\xA0"), props.sector), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: styles.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 8
    }
  }, "Type:\xA0"), props.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: styles.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 8
    }
  }, "Tech stack:\xA0"), props.stack), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: styles.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 8
    }
  }, "Team:\xA0"), props.team)))));
}

/***/ }),

/***/ "./src/components/project/use-styles.js":
/*!**********************************************!*\
  !*** ./src/components/project/use-styles.js ***!
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
  var _project, _projectInfo, _projectTitle, _projectDescription, _text;

  return {
    project: (_project = {
      margin: '0',
      flex: '0 1 100%',
      width: '100%',
      backgroundSize: 'cover',
      position: 'relative',
      marginBottom: '8px',
      '&:after': {
        content: '""',
        display: 'block',
        paddingBottom: '100%'
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_project, theme.media.sm_, {
      flex: '0 calc(50% - 16px)',
      minHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(200),
      margin: '8px',
      '&:nth-last-of-type(-n + 2)': {
        margin: '8px 8px 0 8px'
      }
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_project, theme.media.md_, {
      minHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(495),
      maxHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(604)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_project, '&:before', {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundImage: theme.gradients.primary,
      transition: 'opacity 0.3s ease',
      opacity: 0
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_project, '&:hover', {
      '&:before': {
        opacity: 1
      },
      '& [class^="projectDescription"], & [class^="projectMiddle"], & [class^="projectBottom"]': {
        opacity: 1
      }
    }), _project),
    projectInfo: (_projectInfo = {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      padding: '24px 12px',
      position: 'relative',
      zIndex: 3,
      height: '100%'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectInfo, "position", 'absolute'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectInfo, "width", '100%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectInfo, theme.media.sm_, {
      padding: '20px 15px'
    }), _projectInfo),
    projectTop: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%'
    },
    projectTitle: (_projectTitle = {
      color: theme.colors.white.string(),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(460),
      fontFamily: 'RedHatFontBold'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectTitle, theme.media.sm_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectTitle, theme.media.md_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(28)
    }), _projectTitle),
    projectDescription: (_projectDescription = {
      color: theme.colors.white.string(),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(14),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(460),
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      opacity: 0
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectDescription, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(0)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectDescription, theme.media.md_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }), _projectDescription),
    projectMiddle: {
      opacity: 0,
      padding: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      backgroundColor: theme.colors.white.string(),
      borderRadius: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(70),
      cursor: 'pointer',
      position: 'absolute',
      display: 'flex',
      top: '50%',
      left: ' 50%',
      transform: 'translate(-50%, -50%)',
      '& img': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24)
      }, theme.media.sm_, {
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32)
      })
    },
    projectBottom: {
      marginTop: 'auto',
      opacity: 0
    },
    projectLogo: {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(7),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(110)
    },
    text: (_text = {
      color: theme.colors.white.string(),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(12),
      fontFamily: 'RedHatFont',
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_text, theme.media.sm_, {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(0)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_text, theme.media.md_, {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_text, '&:last-child', {
      marginBottom: 0
    }), _text),
    header: {
      fontFamily: 'RedHatFontBold'
    }
  };
}));

/***/ })

};
//# sourceMappingURL=server.c6b668002b909a2862b7.hot-update.js.map