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

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-styles */ "./src/components/header/use-styles.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/breakpoints */ "./src/helpers/breakpoints.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation */ "./src/components/header/navigation/index.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo */ "./src/components/header/logo/index.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools */ "./src/components/header/tools/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/button */ "./src/components/button/index.js");
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-headroom */ "react-headroom");
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_headroom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu */ "./src/components/header/menu.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/header/index.js";











function Hader() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var isTabletOrMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_3__["tabletSize"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_headroom__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      webkitTransition: 'all .5s ease-in-out',
      mozTransition: 'all .5s ease-in-out',
      oTransition: 'all .5s ease-in-out',
      transition: 'all .5s ease-in-out'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.headline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }, isTabletOrMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tools__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onToggleMenu: function onToggleMenu() {
      return setIsDrawerOpen(!isDrawerOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 8
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    menu: _menu__WEBPACK_IMPORTED_MODULE_10__["menu"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.headlineAction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Contact us",
    className: styles.contactUs,
    dark: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 8
    }
  }))))));
}

/***/ }),

/***/ "./src/components/header/logo/index.js":
/*!*********************************************!*\
  !*** ./src/components/header/logo/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/components/header/logo/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/header/logo/index.js";



function Logo() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ./logo.svg */ "./src/components/header/logo/logo.svg"),
    className: styles.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }));
}

/***/ }),

/***/ "./src/components/header/logo/logo.svg":
/*!*********************************************!*\
  !*** ./src/components/header/logo/logo.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5a533772.svg";

/***/ }),

/***/ "./src/components/header/logo/use-styles.js":
/*!**************************************************!*\
  !*** ./src/components/header/logo/use-styles.js ***!
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
  var _logo;

  return {
    logo: (_logo = {
      display: 'flex',
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(95),
      marginLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(19)
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_logo, theme.media.md_, {
      marginLeft: 0
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_logo, theme.media.sm_, {
      width: '100%'
    }), _logo)
  };
}));

/***/ }),

/***/ "./src/components/header/menu.js":
/*!***************************************!*\
  !*** ./src/components/header/menu.js ***!
  \***************************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony import */ var pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pages */ "./src/pages/index.js");

var menu = [{
  exact: true,
  title: 'Home',
  route: pages__WEBPACK_IMPORTED_MODULE_0__["home"]
}, {
  exact: true,
  title: 'About',
  route: pages__WEBPACK_IMPORTED_MODULE_0__["about"]
}, {
  exact: true,
  title: 'Clients',
  route: pages__WEBPACK_IMPORTED_MODULE_0__["projects"]
}, {
  exact: true,
  title: 'Team',
  route: pages__WEBPACK_IMPORTED_MODULE_0__["team"]
}, {
  exact: true,
  title: 'Join',
  route: pages__WEBPACK_IMPORTED_MODULE_0__["join"]
}];

/***/ }),

/***/ "./src/components/header/navigation/index.js":
/*!***************************************************!*\
  !*** ./src/components/header/navigation/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/components/header/navigation/use-styles.js");

var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/header/navigation/index.js";



function Navigation(_ref) {
  var menu = _ref.menu;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: styles.navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, menu.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: "navigation-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
      className: styles.navigationItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 6
      }
    })));
  }));
}

function Link(props) {
  if (props.route) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: props.route.getPath(props.routeParams || {}),
      className: props.className,
      exact: props.hasOwnProperty('exact') ? props.exact : props.route.exact,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 4
      }
    }, props.title);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: props.link,
      className: props.className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 4
      }
    }, props.title);
  }
}

/***/ }),

/***/ "./src/components/header/navigation/use-styles.js":
/*!********************************************************!*\
  !*** ./src/components/header/navigation/use-styles.js ***!
  \********************************************************/
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
    navigation: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'none',
      marginLeft: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(72),
      '& li:last-child': {
        '& $navigationItem': {
          marginRight: 0
        }
      }
    }, theme.media.md_, {
      display: 'flex'
    }),
    navigationItem: {
      display: 'inline-block',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24), 0],
      marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(48),
      position: 'relative',
      transition: 'color .3s ease',
      '&:hover': {
        color: theme.colors.primary.string()
      },
      '&.active': {
        color: theme.colors.primary.string(),
        fontFamily: 'RedHatFontBold',
        borderColor: theme.colors.primary.string(),
        '&:after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          border: "2px solid ".concat(theme.colors.primary)
        }
      }
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: toggleDrawer,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ./hamburger.svg */ "./src/components/header/tools/hamburger.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
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
      lineNumber: 21,
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

/***/ }),

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
      boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.12)"
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

/***/ }),

/***/ "react-headroom":
/*!*********************************!*\
  !*** external "react-headroom" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-headroom");

/***/ })

};
//# sourceMappingURL=server.914eb176a3a394f4a86b.hot-update.js.map