exports.id = "server";
exports.modules = {

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top */ "./src/pages/home/top/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/pages/home/services/index.js");
/* harmony import */ var _numbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./numbers */ "./src/pages/home/numbers/index.js");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domain */ "./src/pages/home/domain/index.js");
/* harmony import */ var _technology__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./technology */ "./src/pages/home/technology/index.js");
/* harmony import */ var _clients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients */ "./src/pages/home/clients/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects */ "./src/pages/home/projects/index.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form */ "./src/pages/home/form/index.js");
/* harmony import */ var actions_home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/home */ "./src/actions/home.js");
/* harmony import */ var actions_domain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! actions/domain */ "./src/actions/domain.js");
/* harmony import */ var actions_team__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! actions/team */ "./src/actions/team.js");
/* harmony import */ var actions_tech__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! actions/tech */ "./src/actions/tech.js");
/* harmony import */ var actions_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! actions/client */ "./src/actions/client.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/pages/home/index.js";
















function Home() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var fetchHomeInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(actions_home__WEBPACK_IMPORTED_MODULE_10__["getHomeInfo"])());
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchHomeInfo();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_top__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_numbers__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_domain__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_technology__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_clients__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_projects__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};
//# sourceMappingURL=server.1d13b3a4fa3ec7b8d4f1.hot-update.js.map