exports.id = "server";
exports.modules = {

/***/ "./src/pages/crewman/index.js":
/*!************************************!*\
  !*** ./src/pages/crewman/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/form */ "./src/components/form/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _information__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./information */ "./src/pages/crewman/information/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects */ "./src/pages/crewman/projects/index.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel */ "./src/pages/crewman/carousel/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-styles */ "./src/pages/crewman/use-styles.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/crewman/index.js";










var CrewMan = function CrewMan() {
  var fetchTeamMember = useCallback(function () {
    return dispatch(getTeamAll());
  }, [dispatch]);
  useEffect(function () {
    fetchTeamMember();
  }, []);
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_8__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.crewMan,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_information__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_projects__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }));
};

function ContactForm() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_8__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_4__["Header2"], {
    title: "Get in touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CrewMan);

/***/ })

};
//# sourceMappingURL=server.83de2909df756ebfbcbd.hot-update.js.map