exports.id = "server";
exports.modules = {

/***/ "./src/assets/icons sync recursive ^\\.\\/.*\\-icon\\.svg$":
/*!***************************************************!*\
  !*** ./src/assets/icons sync ^\.\/.*\-icon\.svg$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./clip-icon.svg": "./src/assets/icons/clip-icon.svg",
	"./facebook-icon.svg": "./src/assets/icons/facebook-icon.svg",
	"./linkedin-icon.svg": "./src/assets/icons/linkedin-icon.svg",
	"./tga-icon.svg": "./src/assets/icons/tga-icon.svg"
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
webpackContext.id = "./src/assets/icons sync recursive ^\\.\\/.*\\-icon\\.svg$";

/***/ }),

/***/ "./src/components/header/drawer/close.svg":
/*!************************************************!*\
  !*** ./src/components/header/drawer/close.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/close.7c52e54e.svg";

/***/ }),

/***/ "./src/components/header/drawer/index.js":
/*!***********************************************!*\
  !*** ./src/components/header/drawer/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button */ "./src/components/button/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-styles */ "./src/components/header/drawer/use-styles.js");


var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/header/drawer/index.js";





function Drawer(_ref) {
  var menu = _ref.menu,
      isOpen = _ref.isOpen,
      onDrawerClose = _ref.onDrawerClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      active = _useState2[0],
      setACtive = _useState2[1];

  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var contacts = [{
    label: 'Phone',
    text: '020 3633 4842',
    icon: 'facebook'
  }, {
    label: 'Email',
    text: 'contact@tgadigital.com',
    icon: 'linkedin'
  }];

  if (!isOpen) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.drawerContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: onDrawerClose,
    className: styles.onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: __webpack_require__(/*! ./close.svg */ "./src/components/header/drawer/close.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.drawer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: styles.menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, menu.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: item.title,
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(styles.menuItem, active === item && 'active'),
      onClick: onDrawerClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomLink, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
      className: styles.menuItemLink,
      onClick: onDrawerClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.socials,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }, contacts.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: styles.socialsRow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: styles.socialInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: styles.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, item.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: styles.phone,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, item.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: styles.socialIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: __webpack_require__("./src/assets/icons sync recursive ^\\.\\/.*\\-icon\\.svg$")("./".concat(item.icon, "-icon.svg")),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 12
      }
    }))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.cta,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Contact us",
    className: styles.contactButton,
    dark: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  })))));
}

function CustomLink(props) {
  if (props.route) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
      to: props.route.getPath(props.routeParams || {}),
      className: props.className,
      exact: props.hasOwnProperty('exact') ? props.exact : props.route.exact,
      onClick: props.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 4
      }
    }, props.title);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: props.link,
      className: props.className,
      onClick: props.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 4
      }
    }, props.title);
  }
}

/***/ }),

/***/ "./src/components/header/drawer/use-styles.js":
/*!****************************************************!*\
  !*** ./src/components/header/drawer/use-styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {
    drawerContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: theme.colors.white.string(),
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(23), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(23), 0],
      zIndex: 10,
      overflowY: 'scroll'
    },
    drawer: {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(30)
    },
    menuItemLink: {
      borderLeft: "4px solid transparent",
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(17), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(17), Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(28)],
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(20),
      '&.active': {
        color: theme.colors.primary.string(),
        fontFamily: 'RedHatFontBold',
        borderColor: theme.colors.primary.string()
      }
    },
    menuItem: {
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(34),
      '&:last-child': {
        marginBottom: 0
      }
    },
    onClose: {
      marginLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(30),
      cursor: 'pointer',
      display: 'inline-flex'
    },
    socials: {
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(0), Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(32)],
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(45),
      '& $socialsRow:first-child': {
        marginTop: 0
      }
    },
    label: {
      color: theme.colors.black.string(),
      fontFamily: 'RedHatFontBold',
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(16),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(23)
    },
    phone: {
      fontFamily: 'RedHatFont',
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(23)
    },
    socialIcon: {
      '& a': {
        backgroundColor: theme.colors.black.string(),
        display: 'inline-flex',
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(32),
        height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(32),
        borderRadius: '50%',
        padding: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(4)
      }
    },
    socialsRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(16)
    },
    cta: {
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(28), Object(helpers_size__WEBPACK_IMPORTED_MODULE_1__["default"])(32), 0]
    },
    contactButton: {
      display: 'block',
      margin: '0 auto',
      width: '100%'
    }
  };
}));

/***/ }),

/***/ "./src/components/header/tools/hamburger.svg":
/*!***************************************************!*\
  !*** ./src/components/header/tools/hamburger.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/hamburger.b7aa773c.svg";

/***/ }),

/***/ "./src/components/header/tools/index.js":
/*!**********************************************!*\
  !*** ./src/components/header/tools/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tools; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drawer */ "./src/components/header/drawer/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu */ "./src/components/header/menu.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/components/header/tools/use-styles.js");

var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/header/tools/index.js";




function Tools() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isDrawerOpen = _useState2[0],
      setIsDrawerOpen = _useState2[1];

  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var toggleDrawer = function toggleDrawer(e) {
    e.preventDefault();
    setIsDrawerOpen(true);
  };

  var rootTag = document.body.parentNode;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    isDrawerOpen ? rootTag.style.overflow = 'hidden' : rootTag.style.overflow = 'unset';
  }, [isDrawerOpen]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: toggleDrawer,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ./hamburger.svg */ "./src/components/header/tools/hamburger.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_drawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDrawerClose: function onDrawerClose() {
      return setIsDrawerOpen(false);
    },
    isOpen: isDrawerOpen,
    menu: _menu__WEBPACK_IMPORTED_MODULE_3__["menu"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }));
}

/***/ }),

/***/ "./src/components/header/tools/use-styles.js":
/*!***************************************************!*\
  !*** ./src/components/header/tools/use-styles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(function (theme) {
  return {};
}));

/***/ })

};
//# sourceMappingURL=server.c1eec6fdf84013c36c31.hot-update.js.map