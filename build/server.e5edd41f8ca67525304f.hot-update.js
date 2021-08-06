exports.id = "server";
exports.modules = {

/***/ "./src/reducers/tech.js":
/*!******************************!*\
  !*** ./src/reducers/tech.js ***!
  \******************************/
/*! exports provided: TechList, TechMains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechList", function() { return TechList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechMains", function() { return TechMains; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var TechList = function TechList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TECH_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_TECH_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        payload: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_TECH_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        payload: [],
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
};
var TechMains = function TechMains() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    technologies: {
      FE: [],
      BE: [],
      other: []
    },
    isFetching: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TECH_MAINS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["FINISHED_FETCH_TECH_MAINS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        technologies: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ERROR_FETCH_TECH_MAINS"]:
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
//# sourceMappingURL=server.e5edd41f8ca67525304f.hot-update.js.map