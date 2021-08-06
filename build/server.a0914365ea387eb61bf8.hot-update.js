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
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item */ "./src/pages/home/domain/item/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/domain/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/domain/index.js";





function Top() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.domain,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header2"], {
    title: "Domain Sector",
    className: styles.headerOffset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Description1"], {
    className: styles.descriptionOffset,
    title: "We have developed numerous projects in different sectors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.sectorList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, items.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: item.title,
      description: item.description,
      index: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    });
  }))));
}

/***/ })

};
//# sourceMappingURL=server.a0914365ea387eb61bf8.hot-update.js.map