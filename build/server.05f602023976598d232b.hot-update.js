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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  clientsFieldDescription: '',
  description: '',
  peoplesText: '',
  projectCount: 100,
  projectsText: '',
  sectorFieldDescription: '',
  sectorFieldName: '',
  services: [],
  slogan: 'd',
  years: 11,
  yearsText: '',
  _id: 0
};
var HomeInfo = function HomeInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_HOME_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_HOME_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        payload: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_HOME_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        payload: [],
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (HomeInfo);

/***/ })

};
//# sourceMappingURL=server.05f602023976598d232b.hot-update.js.map