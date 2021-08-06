exports.id = "server";
exports.modules = {

/***/ "./src/reducers/home.js":
/*!******************************!*\
  !*** ./src/reducers/home.js ***!
  \******************************/
/*! exports provided: HomeInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeInfo", function() { return HomeInfo; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
 // const initialState = {
// 	clientsFieldDescription: '',
// 	description: '',
// 	peoplesText: '',
// 	projectCount: 100,
// 	projectsText: '',
// 	sectorFieldDescription: '',
// 	sectorFieldName: '',
// 	services: [],
// 	slogan: 'd',
// 	years: 11,
// 	yearsText: '',
// 	_id: 0,
// };

var initialState = {};
var HomeInfo = function HomeInfo(initialState, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_HOME_INFO"]:
      return {
        initialState: initialState,
        isFetching: true
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["FINISHED_FETCH_HOME_INFO"]:
      return {
        isFetching: false,
        payload: [initialState, action.data]
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["ERROR_FETCH_HOME_INFO"]:
      return {
        initialState: initialState,
        payload: [],
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (HomeInfo);

/***/ })

};
//# sourceMappingURL=server.8c965d7a756b3e8ae0cb.hot-update.js.map