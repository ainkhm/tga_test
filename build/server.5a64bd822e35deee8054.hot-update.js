exports.id = "server";
exports.modules = {

/***/ "./src/components/cards sync recursive ^.*$":
/*!****************************************!*\
  !*** ./src/components/cards sync ^.*$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": "./src/components/cards/index.js",
	"./": "./src/components/cards/index.js",
	"./index": "./src/components/cards/index.js",
	"./index.js": "./src/components/cards/index.js",
	"./use-styles": "./src/components/cards/use-styles.js",
	"./use-styles.js": "./src/components/cards/use-styles.js"
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
webpackContext.id = "./src/components/cards sync recursive ^.*$";

/***/ }),

/***/ "./src/components/cards/index.js":
/*!***************************************!*\
  !*** ./src/components/cards/index.js ***!
  \***************************************/
/*! exports provided: CrewCard, ProjectCard, InfoCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewCard", function() { return CrewCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCard", function() { return ProjectCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCard", function() { return InfoCard; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/components/cards/use-styles.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/link */ "./src/components/link/index.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! api */ "./src/api/index.js");

var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/cards/index.js";






function CrewCard(_ref) {
  var name = _ref.name,
      bio = _ref.bio,
      index = _ref.index,
      photos = _ref.photos;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isHover = _useState2[0],
      setHover = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      activeCard = _useState4[0],
      setActiveCard = _useState4[1];

  console.log('sdf', api__WEBPACK_IMPORTED_MODULE_6__["baseURL"]);

  var cardToggle = function cardToggle() {
    setActiveCard(!activeCard);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.crewCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.cardPhoto, activeCard && styles.cardActive),
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    style: {
      backgroundImage: isHover ? "url(".concat(__webpack_require__("./src/components/cards sync recursive ^.*$")("".concat(baseURL && baseURL, "/image/").concat(photos[0])), ")") : "url(".concat(!(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), ")")
    },
    onClick: cardToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.cardInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.hoverDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, "QA engineer and project lead with more than 6 years of experience."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styles.textRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styles.textRowHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "Manager:\xA0"), "World athletics projects, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, "Lucky Voice"), ",", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Sixley")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styles.textRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styles.textRowHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "QA:\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Netcel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.bottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: 'Explore more',
    url: 'team/mykola',
    white: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.cardName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: name,
    url: 'team/mykola',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Description3"], {
    title: bio,
    className: styles.customDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }
  }));
}
function ProjectCard(_ref2) {
  var image = _ref2.image,
      icon = _ref2.icon,
      description = _ref2.description;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.projectCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles.cardPhoto, styles.projectPhoto),
    style: {
      backgroundImage: "url(".concat(__webpack_require__("./src/assets/images sync recursive ^\\.\\/lv\\-img\\-.*\\.png$")("./lv-img-".concat(image, ".png")), ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.cardName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header4"], {
    title: description,
    className: styles.customDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.cardLogo,
    style: {
      backgroundImage: "url(".concat(__webpack_require__("./src/assets/icons sync recursive ^\\.\\/logo\\-icon\\-.*\\.png$")("./logo-icon-".concat(icon, ".png")), ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }
  }));
}
function InfoCard(_ref3) {
  var title = _ref3.title,
      requirements = _ref3.requirements;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.infoCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header4"], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: styles.requirements,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }
  }, requirements.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, item);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Learn more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 4
    }
  }));
}

/***/ }),

/***/ "./src/components/cards/use-styles.js":
/*!********************************************!*\
  !*** ./src/components/cards/use-styles.js ***!
  \********************************************/
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
    crewCard: {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(270),
      '&:hover': {
        '& $cardHover': {
          display: 'flex'
        }
      }
    },
    cardName: {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(28),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(460),
      fontFamily: 'RedHatFontBold',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15),
      '& a': {
        textDecoration: 'none',
        '&:after': {
          content: 'unset'
        }
      }
    },
    cardPhoto: {
      backgroundSize: 'cover',
      width: '100%',
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(280),
      overflow: 'hidden',
      position: 'relative',
      '&:after': {
        position: 'absolute',
        content: '""',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        transition: '.4s',
        opacity: 0,
        backgroundImage: theme.gradients.secondary,
        transform: 'translateY(100%)'
      }
    },
    cardInfo: {
      display: 'flex',
      flexDirection: 'column',
      opacity: 0,
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)],
      transform: 'translateY(100%)',
      transition: '.4s',
      position: 'relative',
      height: '100%',
      zIndex: 99,
      fontFamily: 'RedHatFont'
    },
    hoverDescription: {
      color: theme.colors.white.string(),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30)
    },
    textRow: {
      color: theme.colors.white.string(),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(18),
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10),
      '& a': {
        color: theme.colors.white.string(),
        textDecoration: 'underline'
      }
    },
    textRowHeader: {
      fontFamily: 'RedHatFontBold',
      letterSpacing: '0.5px'
    },
    cardActive: {
      '& $cardPhoto:after': {
        opacity: 1,
        transform: 'translateY(0)'
      },
      '& $cardInfo': {
        opacity: 1,
        transform: 'translateY(0)',
        transitionDelay: '0.4s'
      }
    },
    customDescription: {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10)
    },
    bottom: {
      marginTop: 'auto'
    },
    cardLogo: {
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(105),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(35)
    },
    projectCard: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(264)
    }, theme.media.sm_, {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(320)
    }),
    projectPhoto: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(264)
    }, theme.media.sm_, {
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(320)
    }),
    infoCard: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      width: '100%',
      backgroundColor: theme.colors.white.string(),
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.05)',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32)],
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      '& a': {
        '&:before': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
          content: '""',
          position: 'absolute',
          left: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100),
          top: '-12px',
          width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
          height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
          backgroundImage: "url(".concat(__webpack_require__(/*! assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"), ")"),
          backgroundSize: 'contain',
          marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
        }, theme.media.sm_, {
          content: 'none'
        })
      }
    }, theme.media.sm_, {
      width: 'calc(50% - 45px)',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45)],
      marginBottom: 0
    }),
    requirements: {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      listStylePosition: 'inside',
      textIndent: '10px',
      '& li': {
        fontFamily: 'RedHatFont',
        fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
        lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
        color: theme.colors.black.string(),
        position: 'relative',
        '&:before': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
          position: 'absolute',
          content: '""',
          top: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(11),
          left: 0,
          width: '4px',
          height: '4px',
          borderRadius: '10px',
          backgroundColor: theme.colors.black.string()
        }, theme.media.sm_, {
          top: 'calc(50% - 3px)',
          left: '-8px'
        })
      }
    }
  };
}));

/***/ })

};
//# sourceMappingURL=server.5a64bd822e35deee8054.hot-update.js.map