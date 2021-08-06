exports.id = "server";
exports.modules = {

/***/ "./src/pages/home/numbers/index.js":
/*!*****************************************!*\
  !*** ./src/pages/home/numbers/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Numbers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ "./src/pages/home/numbers/item/index.js");
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/numbers/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/numbers/index.js";





function Numbers(props) {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useSelector = useSelector(function (state) {
    return state.HomeInfo;
  }),
      payload = _useSelector.payload;

  var items = [{
    number: 10,
    description: 'Years TGA has been in the market',
    link: 'Learn more'
  }, {
    number: 75,
    description: 'Projects we developed',
    link: 'Learn more'
  }, {
    number: 28,
    description: '	People currently we have in the team',
    link: 'Learn more'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.numbers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_1__["Header2"], {
    className: styles.headerOffest,
    title: "TGA Numbers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.numbersList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      number: item.number,
      description: item.description,
      link: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    });
  }))));
}

/***/ })

};
//# sourceMappingURL=server.7d50166a236f6b524944.hot-update.js.map