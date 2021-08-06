exports.id = "server";
exports.modules = {

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
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/components/cards/use-styles.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/link */ "./src/components/link/index.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! api */ "./src/api/index.js");



var _templateObject,
    _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/components/cards/index.js";







function CrewCard(_ref) {
  var name = _ref.name,
      bio = _ref.bio,
      photos = _ref.photos;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      isHover = _useState2[0],
      setHover = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      activeCard = _useState4[0],
      setActiveCard = _useState4[1];

  console.log('sdf', api__WEBPACK_IMPORTED_MODULE_7__["baseURL"]);

  var cardToggle = function cardToggle() {
    setActiveCard(!activeCard);
  };

  var test = api__WEBPACK_IMPORTED_MODULE_7__["baseURL"];
  console.log('sdf'(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["", "/image/", ""])), test, photos && photos[0]));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.crewCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(styles.cardPhoto, activeCard && styles.cardActive),
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    } // style={{
    // 	backgroundImage: isHover
    // 		? `url(${require(`${test}/image/${photos && photos[0]}`)})`
    // 		: `url(${require(`${test}/image/${photos && photos[1]}`)})`,
    // }}
    ,
    onClick: cardToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.cardInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.hoverDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, "QA engineer and project lead with more than 6 years of experience."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: styles.textRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: styles.textRowHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "Manager:\xA0"), "World athletics projects, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  }, "Lucky Voice"), ",", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "Sixley")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: styles.textRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: styles.textRowHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "QA:\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Netcel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.bottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: 'Explore more',
    url: 'team/mykola',
    white: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.cardName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: name,
    url: 'team/mykola',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Description3"], {
    title: bio,
    className: styles.customDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }
  }));
}
function ProjectCard(_ref2) {
  var image = _ref2.image,
      icon = _ref2.icon,
      description = _ref2.description;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.projectCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(styles.cardPhoto, styles.projectPhoto),
    style: {
      backgroundImage: "url(".concat(__webpack_require__("./src/assets/images sync recursive ^\\.\\/lv\\-img\\-.*\\.png$")("./lv-img-".concat(image, ".png")), ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.cardName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Header4"], {
    title: description,
    className: styles.customDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.cardLogo,
    style: {
      backgroundImage: "url(".concat(__webpack_require__("./src/assets/icons sync recursive ^\\.\\/logo\\-icon\\-.*\\.png$")("./logo-icon-".concat(icon, ".png")), ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }
  }));
}
function InfoCard(_ref3) {
  var title = _ref3.title,
      requirements = _ref3.requirements;
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.infoCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Header4"], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: styles.requirements,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 4
    }
  }, requirements.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, item);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Learn more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 4
    }
  }));
}

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ })

};
//# sourceMappingURL=server.05d45dc897f1da54c841.hot-update.js.map