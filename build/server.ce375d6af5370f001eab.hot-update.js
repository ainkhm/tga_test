exports.id = "server";
exports.modules = {

/***/ "./src/pages/home/domain/index.js":
/*!****************************************!*\
  !*** ./src/pages/home/domain/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Top; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item */ "./src/pages/home/domain/item/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/domain/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/domain/index.js";






function Top() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var payload = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.DomainAll;
  });
  var items = [{
    title: 'Sport',
    description: 'Discover Projects'
  }, {
    title: 'Leisure & Media',
    description: 'Discover Projects'
  }, {
    title: 'Agency',
    description: 'Discover Projects'
  }, {
    title: 'Recruitment',
    description: 'Discover Projects'
  }, {
    title: 'Healthcare',
    description: 'Discover Projects'
  }];
  var myList = new Array();
  myList.push(payload);
  Object.keys(payload).map(function (key, index) {
    console.log(payload[key]);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.domain,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_3__["Header2"], {
    title: payload.sectorFieldName,
    className: styles.headerOffset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_3__["Description1"], {
    className: styles.descriptionOffset,
    title: payload.sectorFieldDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.sectorList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, Object.keys(payload).map(function (key, index) {
    console.log(payload[key]); // <SectorItem
    // 	title={item.name}
    // 	description={'Discover Projects'}
    // 	url={'sdf'}
    // />
  }))));
}

/***/ }),

/***/ "./src/pages/home/domain/item/index.js":
/*!*********************************************!*\
  !*** ./src/pages/home/domain/item/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DomainItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/link */ "./src/components/link/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/domain/item/use-styles.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api */ "./src/api/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/domain/item/index.js";





function DomainItem(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.item,
    style: {
      backgroundImage: "url(".concat(api__WEBPACK_IMPORTED_MODULE_4__["baseURL"], "/image/").concat(props.url, ")})")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.innerWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Caption"], {
    className: styles.captionStyle,
    title: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.itemHover,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles.itemHoverText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }, props.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  })))));
}

/***/ }),

/***/ "./src/pages/home/domain/item/use-styles.js":
/*!**************************************************!*\
  !*** ./src/pages/home/domain/item/use-styles.js ***!
  \**************************************************/
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
  var _item;

  return {
    item: (_item = {
      margin: [0, 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16), 0],
      flex: '0 1 100%',
      height: 'auto',
      backgroundSize: 'cover',
      position: 'relative',
      zIndex: 9,
      '&:after': {
        content: '""',
        display: 'block',
        paddingBottom: '100%'
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_item, theme.media.sm_, {
      flex: '1 0 30%',
      margin: '1px',
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(350)
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_item, theme.media.md_, {
      flex: '0 1 calc(20% - 2px)'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_item, '&:hover', {
      '& [class^="itemHover"]': {
        transition: '0.3s ease',
        opacity: 1
      }
    }), _item),
    innerWrap: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    itemHover: {
      opacity: 0,
      transition: '0.3s ease',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:before': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        content: '""',
        backgroundImage: theme.gradients.secondary,
        opacity: 0.8,
        zIndex: -1
      }
    },
    itemHoverText: {
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'RedHatFontBold',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      color: theme.colors.white.string(),
      cursor: 'pointer',
      '& img': {
        backgroundColor: theme.colors.white.string(),
        padding: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(8),
        borderRadius: '30px',
        marginLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(12),
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(35)
      }
    },
    captionStyle: {
      position: 'absolute',
      bottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30),
      left: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(12),
      zIndex: 2
    }
  };
}));

/***/ }),

/***/ "./src/pages/home/domain/use-styles.js":
/*!*********************************************!*\
  !*** ./src/pages/home/domain/use-styles.js ***!
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
    domain: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    headerOffset: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80)
    }, theme.media.sm_, {
      margin: 0
    }),
    descriptionOffset: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10)
    }),
    sectorList: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(18),
      '& > div:last-child': {
        margin: 0
      }
    }, theme.media.sm_, {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(35)
    })
  };
}));

/***/ })

};
//# sourceMappingURL=server.ce375d6af5370f001eab.hot-update.js.map