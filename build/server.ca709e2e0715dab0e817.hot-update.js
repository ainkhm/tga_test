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

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ProjectAll;
  }),
      projects = _useSelector.projects;

  console.log('FF', projects);
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
    //title: 'Web developent online platform to work with trusted network',
    //	description: `Replacement and enhancement of Lucky Voice's venerable iOS sing at home karaoke app.`,
    //	client: 'Lucky Voice',
    //sector: 'Leisure & Media',
    //	type: 'Mobile App',
    stack: 'React Native, Python',
    team: 'Yuriy R., Anton Zh., Iryna Sh., Andrew Kh., Mykola P.',
    index: 0
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.projects,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header2"], {
    className: styles.topHeader,
    title: "Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.projectList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, projects.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_project__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: item.project,
      description: item.description,
      sector: item.sector.name,
      type: item.type,
      client: item.client.name,
      stack: item.technologies.map(function (item, index) {
        index < item.length - 1 ? ",\xA0" : '';
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.bottomLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Show all projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 6
    }
  }))));
}

/***/ }),

/***/ "./src/pages/home/projects/use-styles.js":
/*!***********************************************!*\
  !*** ./src/pages/home/projects/use-styles.js ***!
  \***********************************************/
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
  var _projects, _projectList;

  return {
    projects: (_projects = {
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(72), 0, 0, 0]
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projects, theme.media.sm_, {
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(140), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(128)]
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projects, theme.media.md_, {
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(240), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(128)]
    }), _projects),
    projectList: (_projectList = {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24), 0, 0]
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectList, theme.media.sm_, {
      margin: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40), '-8px', 0]
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectList, '& > div', {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectList, '& > div:last-child', {
      marginBottom: 0
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_projectList, theme.media.sm_, {
      '& > div': {
        marginBottom: 0
      }
    }), _projectList),
    bottomLink: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24)
    }
  };
}));

/***/ })

};
//# sourceMappingURL=server.ca709e2e0715dab0e817.hot-update.js.map