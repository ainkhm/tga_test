exports.id = "server";
exports.modules = {

/***/ "./src/actions/team.js":
/*!*****************************!*\
  !*** ./src/actions/team.js ***!
  \*****************************/
/*! exports provided: getTeamList, getTeamAll, getTeamMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamList", function() { return getTeamList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamAll", function() { return getTeamAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamMember", function() { return getTeamMember; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api/index.js");




var getTeamList = function getTeamList() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, getState, api) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TEAM_LIST"]
              });
              Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/team/getList').then(function (_ref2) {
                var data = _ref2.data;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_TEAM_LIST"],
                  data: data
                });
              })["catch"](function (error) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_TEAM_LIST"],
                  error: error
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getTeamAll = function getTeamAll() {
  return /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch, getState, api) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TEAM_ALL"]
              });
              Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('/team/getAll').then(function (_ref4) {
                var data = _ref4.data;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_TEAM_ALL"],
                  data: data
                });
              })["catch"](function (error) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_TEAM_ALL"],
                  error: error
                });
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x4, _x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var getTeamMember = function getTeamMember(memberId) {
  return /*#__PURE__*/function () {
    var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch, getState, api) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TEAM_MEMBER"]
              });
              Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])("/team/member_".concat(memberId)).then(function (_ref6) {
                var data = _ref6.data;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_TEAM_MEMBER"],
                  data: data
                });
              })["catch"](function (error) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_TEAM_MEMBER"],
                  error: error
                });
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x7, _x8, _x9) {
      return _ref5.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/pages/team/index.js":
/*!*********************************!*\
  !*** ./src/pages/team/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_wrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/wrap */ "./src/components/wrap/index.js");
/* harmony import */ var components_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/cards */ "./src/components/cards/index.js");
/* harmony import */ var components_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/form */ "./src/components/form/index.js");
/* harmony import */ var components_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/typography */ "./src/components/typography/index.js");
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/button */ "./src/components/button/index.js");
/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-styles */ "./src/pages/team/use-styles.js");
/* harmony import */ var actions_team__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/team */ "./src/actions/team.js");


var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/team/index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function Team() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.TeamAll;
  }),
      payload = _useSelector.payload;

  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var fetchTeamAll = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    return dispatch(Object(actions_team__WEBPACK_IMPORTED_MODULE_10__["getTeamAll"])());
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchTeamAll();
  }, []);
  var test = payload && payload.reduce(function (result, item) {
    if (item.slug !== 'paul_chudleigh' || 'michael_sastry') {
      return _objectSpread(_objectSpread({}, result), {}, {
        item: item
      });
    }
  });
  console.log('WW', test);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: styles.teamPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.topWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_7__["Header2"], {
    className: styles.topHeader,
    title: "Our team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Join to Us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.topRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Array(2)).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_cards__WEBPACK_IMPORTED_MODULE_5__["CrewCard"], {
      name: "Mykola P.",
      bio: "QA engineer who became an excellent Project Lead Your project is safe with him!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 8
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.teamWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, payload && payload.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_cards__WEBPACK_IMPORTED_MODULE_5__["CrewCard"], {
      name: item.name,
      bio: "QA engineer who became an excellent Project Lead Your project is safe with him!",
      photos: [item.imageKeys.professional, item.imageKeys.smiley],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ContactForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }
  }));
}

function ContactForm() {
  var styles = Object(_use_styles__WEBPACK_IMPORTED_MODULE_9__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styles.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_wrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_typography__WEBPACK_IMPORTED_MODULE_7__["Header2"], {
    title: "Get in touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

/***/ "./src/pages/team/use-styles.js":
/*!**************************************!*\
  !*** ./src/pages/team/use-styles.js ***!
  \**************************************/
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
  var _topRow, _teamWrap;

  return {
    teamPage: {},
    topWrap: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      display: 'flex',
      flexDirection: 'column',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(64), 0],
      '& > button': {
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(296),
        alignSelf: 'center'
      }
    }, theme.media.md_, {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(80), 0, Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(128), 0],
      '& > button': {
        width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(138),
        alignSelf: 'flex-start',
        padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)]
      }
    }),
    topHeader: {
      marginBottom: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32)]
    },
    topRow: (_topRow = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& > div': {
        marginRight: 0,
        marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(38)
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_topRow, theme.media.md_, {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_topRow, theme.media.lg_, {
      flexDirection: 'row',
      justifyContent: 'center',
      '& > div': {
        marginRight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(60),
        marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100),
        '&:last-child': {
          marginRight: 0
        }
      }
    }), _topRow),
    teamWrap: (_teamWrap = {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      '& > div': {
        marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(38)
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_teamWrap, theme.media.sm_, {
      justifyContent: 'space-around'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_teamWrap, theme.media.lg_, {
      '& > div': {
        marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100),
        '&:nth-last-child(-n+4)': {
          marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100)
        }
      }
    }), _teamWrap),
    contacts: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(72)
    }, theme.media.lg_, {
      paddingTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(160)
    })
  };
}));

/***/ })

};
//# sourceMappingURL=server.53ffa930e1ec36582a2f.hot-update.js.map