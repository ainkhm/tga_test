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
  HomeInfos: _home__WEBPACK_IMPORTED_MODULE_2__["default"],
  TeamCounter: _team__WEBPACK_IMPORTED_MODULE_4__["TeamCounter"],
  ClientAll: _client__WEBPACK_IMPORTED_MODULE_5__["ClientAll"],
  TeamAll: _team__WEBPACK_IMPORTED_MODULE_4__["TeamAll"],
  DomainAll: _domain__WEBPACK_IMPORTED_MODULE_6__["DomainAll"],
  JoinInfo: _join__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ })

};
//# sourceMappingURL=server.1251fa91554afae65774.hot-update.js.map