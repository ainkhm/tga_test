exports.id = "server";
exports.modules = {

/***/ "./src/pages/home/services/index.js":
/*!******************************************!*\
  !*** ./src/pages/home/services/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-styles */ "./src/pages/home/services/use-styles.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item */ "./src/pages/home/services/item/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/services/index.js";





function Services() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(); // const services = [
  // 	{
  // 		title: 'Software Development',
  // 		description:
  // 			'We work across a variety of technologies on both Microsoft and open technologies. We have strength in .Net and Python as well as many other back end and front end technologies. We manage the software development process from inititation through to completion use tools to manage ticketing, testing and deployment.',
  // 		link: 'Explore our service',
  // 	},
  // 	{
  // 		title: 'Quality Assurance',
  // 		description:
  // 			'We have a specialised team of QA engineers who can provide both manual and automated testing.',
  // 		link: 'Explore our service',
  // 	},
  // 	{
  // 		title: 'Due Diligence',
  // 		description:
  // 			'We have also provided services to investors and acquirers in performing  due diligence on organisations before they receive investment or are acquired.',
  // 		link: 'Explore our service',
  // 	},
  // 	{
  // 		title: 'Technology Consulting',
  // 		description:
  // 			'We can help organisations diagnose problems with their existing technology as well as developing product and technology roadmaps.',
  // 		link: 'Explore our service',
  // 	},
  // ];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "services",
    className: styles.services,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_3__["Header2"], {
    title: "Services we provide",
    className: styles.headerOffset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.servicesList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, services.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: item.title,
      description: item.description,
      link: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    });
  }))));
}

/***/ })

};
//# sourceMappingURL=server.2cb2fec6537fa27f07a0.hot-update.js.map