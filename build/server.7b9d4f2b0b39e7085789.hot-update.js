exports.id = "server";
exports.modules = {

/***/ "./src/reducers/team.js":
/*!******************************!*\
  !*** ./src/reducers/team.js ***!
  \******************************/
/*! exports provided: TeamList, TeamAll, TeamCounter, TeamMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamList", function() { return TeamList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamAll", function() { return TeamAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCounter", function() { return TeamCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMember", function() { return TeamMember; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var TeamList = function TeamList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TEAM_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_TEAM_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        payload: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_TEAM_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        payload: [],
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var TeamAll = function TeamAll() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TEAM_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_TEAM_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        payload: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_TEAM_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        payload: [],
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var TeamCounter = function TeamCounter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    count: 0,
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TEAM_COUNT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_TEAM_COUNT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        count: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_TEAM_COUNT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var TeamMember = function TeamMember() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TEAM_MEMBER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_TEAM_MEMBER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        payload: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_TEAM_MEMBER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        payload: [],
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};

/***/ })

};
//# sourceMappingURL=server.7b9d4f2b0b39e7085789.hot-update.js.map