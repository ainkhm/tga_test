exports.id = "server";
exports.modules = {

/***/ "./src/actions/home.js":
/*!*****************************!*\
  !*** ./src/actions/home.js ***!
  \*****************************/
/*! exports provided: getHomeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeInfo", function() { return getHomeInfo; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/api/index.js");


var getHomeInfo = function getHomeInfo() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_HOME_INFO"]
    });
    Object(_api__WEBPACK_IMPORTED_MODULE_1__["get"])('/tga/getHomeInfo').then(function (response) {
      return response.json();
    }.then(function (_ref) {
      var data = _ref.data;
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FINISHED_FETCH_HOME_INFO"],
        data: data
      });
    }))["catch"](function (error) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["ERROR_FETCH_HOME_INFO"],
        error: error
      });
    });
  };
};

/***/ })

};
//# sourceMappingURL=server.b1c07f6f3b2d5eada401.hot-update.js.map