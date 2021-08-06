exports.id = "server";
exports.modules = {

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/reducers/about.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/reducers/home.js");
/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./join */ "./src/reducers/join.js");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team */ "./src/reducers/team.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client */ "./src/reducers/client.js");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domain */ "./src/reducers/domain.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  AboutInfo: _about__WEBPACK_IMPORTED_MODULE_2__["default"],
  HomeInfo: [_objectSpread(_objectSpread({}, _home__WEBPACK_IMPORTED_MODULE_3__["default"]), _team__WEBPACK_IMPORTED_MODULE_5__["TeamCounter"])],
  ClientAll: _client__WEBPACK_IMPORTED_MODULE_6__["ClientAll"],
  TeamAll: _team__WEBPACK_IMPORTED_MODULE_5__["TeamAll"],
  DomainAll: _domain__WEBPACK_IMPORTED_MODULE_7__["DomainAll"],
  JoinInfo: _join__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ })

};
//# sourceMappingURL=server.40aa57308f58217356d6.hot-update.js.map