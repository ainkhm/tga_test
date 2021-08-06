exports.id = "server";
exports.modules = {

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jss_preset_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jss-preset-default */ "jss-preset-default");
/* harmony import */ var jss_preset_default__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jss_preset_default__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_jss_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/jss/theme */ "./src/config/jss/theme.js");
/* harmony import */ var _config_jss_default_unit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/jss/default-unit */ "./src/config/jss/default-unit.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
var _jsxFileName = "/Users/ainkhm/Desktop/tga-app/src/server.js";












jss__WEBPACK_IMPORTED_MODULE_6___default.a.setup(jss_preset_default__WEBPACK_IMPORTED_MODULE_7___default()({
  defaultUnit: _config_jss_default_unit__WEBPACK_IMPORTED_MODULE_10__["default"]
}));

var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var server = express__WEBPACK_IMPORTED_MODULE_3___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_3___default.a["static"]("/Users/ainkhm/Desktop/tga-app/public")).get('/*', function (req, res) {
  var context = {};
  var store = Object(_store__WEBPACK_IMPORTED_MODULE_11__["default"])({
    test: 'sdfds'
  });
  console.log('sdf', store);
  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__["renderToString"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    location: req.url,
    context: context,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jss__WEBPACK_IMPORTED_MODULE_8__["JssProvider"], {
    jss: jss__WEBPACK_IMPORTED_MODULE_6___default.a,
    registry: sheets,
    generateId: generateId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jss__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
    theme: _config_jss_theme__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 8
    }
  }))))));
  var sheets = new react_jss__WEBPACK_IMPORTED_MODULE_8__["SheetsRegistry"]();
  var generateId = Object(react_jss__WEBPACK_IMPORTED_MODULE_8__["createGenerateId"])();

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send("<!doctype html>\n                    <html lang=\"en\">\n                    <head>\n                        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n                        <meta charset=\"utf-8\" />\n                        <title>TGA - website</title>\n                        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\">\n                        <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"".concat(undefined || '/', "apple-touch-icon.png\">\n                        <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"").concat(undefined || '/', "favicon-32x32.png\">\n                        <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"").concat(undefined || '/', "favicon-16x16.png\">\n                        <link rel=\"manifest\" href=\"").concat(undefined || '', "/site.webmanifest\">\n                        <style type=\"text/css\">").concat(sheets.toString(), "</style>\n                        ").concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : '', "\n                        ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n                    </head>\n                    <body>\n                        <div id=\"root\">").concat(markup, "</div>\n                    </body>\n                </html>"));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=server.38e374439bf12cc61674.hot-update.js.map