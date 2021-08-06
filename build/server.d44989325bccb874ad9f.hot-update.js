exports.id = "server";
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: home, about, projects, project, team, crewman, join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "home", function() { return home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "about", function() { return about; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "team", function() { return team; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crewman", function() { return crewman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony import */ var _create_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-route */ "./src/pages/create-route.js");

var home = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/',
  exact: true,
  component: __webpack_require__(/*! ./home */ "./src/pages/home/index.js")["default"]
});
var about = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/about',
  exact: true,
  component: __webpack_require__(/*! ./about */ "./src/pages/about/index.js")["default"]
});
var projects = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/projects',
  exact: true,
  component: __webpack_require__(/*! ./projects */ "./src/pages/projects/index.js")["default"]
});
var project = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/projects/:id',
  exact: true,
  component: __webpack_require__(/*! ./project */ "./src/pages/project/index.js")["default"]
});
var team = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/team',
  exact: true,
  component: __webpack_require__(/*! ./team */ "./src/pages/team/index.js")["default"]
});
var crewman = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/team/:id',
  exact: true,
  component: __webpack_require__(/*! ./crewman */ "./src/pages/crewman/index.js")["default"]
});
var join = Object(_create_route__WEBPACK_IMPORTED_MODULE_0__["default"])({
  path: '/join',
  exact: true,
  component: __webpack_require__(/*! ./join */ "./src/pages/join/index.js")["default"]
});

/***/ })

};
//# sourceMappingURL=server.d44989325bccb874ad9f.hot-update.js.map