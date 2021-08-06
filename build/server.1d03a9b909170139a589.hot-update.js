exports.id = "server";
exports.modules = {

/***/ "./src/pages/about/story/index.js":
/*!****************************************!*\
  !*** ./src/pages/about/story/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-styles */ "./src/pages/about/story/use-styles.js");
/* harmony import */ var helpers_dragScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/dragScroll */ "./src/helpers/dragScroll.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/about/story/index.js";






function OurStory(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(helpers_dragScroll__WEBPACK_IMPORTED_MODULE_4__["DragScroll"])('timeline');
  }, []);
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var _useSelector = useSelector(function (state) {
    return state.AboutInfo;
  }),
      payload = _useSelector.payload;

  var timeEvents = [{
    year: '1999 - 2005',
    text: 'TGA Founders Paul Chudleigh and Mike Sastry work together on the senior team at lastminute.com.'
  }, {
    year: '2006 - 2010',
    text: 'Other roles. Paul Co-founds Mydeco, Mike has a few head of eCommerce roles and consults independently.'
  }, {
    year: '2010',
    text: 'Paul and Mike founded Conversion Science Ltd, a remote software development business, with an identical business and operating model as TGA.'
  }, {
    year: '2015',
    text: 'Convension Science grows to 33 staff and is bought by Zone Digital'
  }, {
    year: 'Mar 2017',
    text: 'TGA Digital Ltd is founded as Paul and Mike leave Zone'
  }, {
    year: 'November 2020',
    text: 'At time of writing TGA has grown to 28 staff with people in UK, Ukraine, Russia, Moldova, Belarus, Spain, Georgia, Poland and associates in Germany. Including several team members who have been with us for almost a decade.'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.story,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_2__["Header2"], {
    title: "Story of TGA and Founders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "timeline",
    className: styles.timeline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  }, timeEvents.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: styles.circle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.info,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: styles.year,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 10
      }
    }, item.year, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: styles.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 10
      }
    }, item.text)));
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (OurStory);

/***/ })

};
//# sourceMappingURL=server.1d03a9b909170139a589.hot-update.js.map