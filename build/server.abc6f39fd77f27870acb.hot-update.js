exports.id = "server";
exports.modules = {

/***/ "./src/pages/home/clients/index.js":
/*!*****************************************!*\
  !*** ./src/pages/home/clients/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/breakpoints */ "./src/helpers/breakpoints.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button */ "./src/components/button/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item */ "./src/pages/home/clients/item/index.js");
/* harmony import */ var components_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/carousel */ "./src/components/carousel/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/clients/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/clients/index.js";











var Clients = function Clients() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var payload = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.HomeInfo;
  });
  var isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_3__["mobileSize"]);
  var isTablet = Object(react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])(helpers_breakpoints__WEBPACK_IMPORTED_MODULE_3__["tabletSize"]);
  var slidesToShow = isMobile ? 2 : isTablet ? 4 : 6;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.clients,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.clientsWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.headWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header2"], {
    className: styles.topHeader,
    title: "Main clients",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Description1"], {
    className: styles.topDescription,
    title: payload.clientsFieldDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.action,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Become a client",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.clientsSlider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    variableWidth: false,
    autoPlay: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
      index: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 8
      }
    });
  }))), isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Become a client",
    className: styles.customButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Clients);

/***/ })

};
//# sourceMappingURL=server.abc6f39fd77f27870acb.hot-update.js.map