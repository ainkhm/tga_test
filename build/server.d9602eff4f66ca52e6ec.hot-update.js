exports.id = "server";
exports.modules = {

/***/ "./src/actions/team.js":
/*!*****************************!*\
  !*** ./src/actions/team.js ***!
  \*****************************/
/*! exports provided: getTeamList, getTeamAll, getTeamMember, getCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamList", function() { return getTeamList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamAll", function() { return getTeamAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamMember", function() { return getTeamMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCount", function() { return getCount; });
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
var getCount = function getCount() {
  return /*#__PURE__*/function () {
    var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch, getState, api) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TEAM_COUNT"]
              });
              Object(_api__WEBPACK_IMPORTED_MODULE_3__["get"])('team/count').then(function (_ref8) {
                var data = _ref8.data;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["FINISHED_FETCH_TEAM_COUNT"],
                  data: data
                });
              })["catch"](function (error) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["ERROR_FETCH_TEAM_COUNT"],
                  error: error
                });
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x10, _x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }();
};

/***/ })

};
//# sourceMappingURL=server.d9602eff4f66ca52e6ec.hot-update.js.map