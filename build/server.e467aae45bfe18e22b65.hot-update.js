exports.id = "server";
exports.modules = {

/***/ "./src/reducers/domain.js":
/*!********************************!*\
  !*** ./src/reducers/domain.js ***!
  \********************************/
/*! exports provided: DomainList, DomainAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainList", function() { return DomainList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainAll", function() { return DomainAll; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = [];
var DomainList = function DomainList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_DOMAIN_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_DOMAIN_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false
      }, action.data);

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_DOMAIN_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var DomainAll = function DomainAll() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_DOMAIN_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_DOMAIN_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false
      }, action.data);

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_DOMAIN_ALL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/reducers/about.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/reducers/home.js");
/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./join */ "./src/reducers/join.js");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team */ "./src/reducers/team.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client */ "./src/reducers/client.js");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domain */ "./src/reducers/domain.js");







var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  AboutInfo: _about__WEBPACK_IMPORTED_MODULE_1__["default"],
  HomeInfo: _home__WEBPACK_IMPORTED_MODULE_2__["default"],
  ClientAll: _client__WEBPACK_IMPORTED_MODULE_5__["ClientAll"],
  TeamAll: _team__WEBPACK_IMPORTED_MODULE_4__["TeamAll"],
  JoinInfo: _join__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ })

};
//# sourceMappingURL=server.e467aae45bfe18e22b65.hot-update.js.map