exports.id = "server";
exports.modules = {

/***/ "./src/pages/team/index.js":
/*!*********************************!*\
  !*** ./src/pages/team/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/cards */ "./src/components/cards/index.js");
/* harmony import */ var components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/form */ "./src/components/form/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/button */ "./src/components/button/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-styles */ "./src/pages/team/use-styles.js");
/* harmony import */ var actions_team__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! actions/team */ "./src/actions/team.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/team/index.js";










function Team() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.TeamAll;
  }),
      team = _useSelector.team;

  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var fetchTeamAll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return dispatch(Object(actions_team__WEBPACK_IMPORTED_MODULE_8__["getTeamAll"])());
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchTeamAll();
  }, []);
  var bosses = team.filter(function (item) {
    return item.slug === 'paul_chudleigh' || item.slug === 'michael_sastry';
  });
  var employees = payload && payload.filter(function (item) {
    return item.slug !== 'paul_chudleigh' && item.slug !== 'michael_sastry';
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: styles.teamPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.topWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Header2"], {
    className: styles.topHeader,
    title: "Our team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Join to Us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.topRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, bosses && bosses.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_cards__WEBPACK_IMPORTED_MODULE_3__["CrewCard"], {
      name: item.name,
      bio: item.roles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.teamWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, employees && employees.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_cards__WEBPACK_IMPORTED_MODULE_3__["CrewCard"], {
      name: item.name,
      bio: item.roles,
      photos: [item.imageKeys.professional, item.imageKeys.smiley],
      url: item._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }
  }));
}

function ContactForm() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_5__["Header2"], {
    title: "Get in touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ })

};
//# sourceMappingURL=server.77ba7966931805999dce.hot-update.js.map