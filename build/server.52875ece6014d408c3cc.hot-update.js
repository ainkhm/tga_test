exports.id = "server";
exports.modules = {

/***/ "./src/components/cards/use-styles.js":
/*!********************************************!*\
  !*** ./src/components/cards/use-styles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/size */ "./src/helpers/size.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])(function (theme) {
  return {
    crewCard: {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(270),
      '&:hover': {
        '& $cardHover': {
          display: 'flex'
        }
      }
    },
    cardName: {
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(28),
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(460),
      fontFamily: 'RedHatFontBold',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(15),
      '& a': {
        textDecoration: 'none',
        '&:after': {
          content: 'unset'
        }
      }
    },
    cardPhoto: {
      backgroundSize: 'cover',
      width: '100%',
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(280),
      overflow: 'hidden',
      position: 'relative',
      '&:after': {
        position: 'absolute',
        content: '""',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        transition: '.4s',
        opacity: 0,
        backgroundImage: theme.gradients.secondary,
        transform: 'translateY(100%)'
      }
    },
    cardInfo: {
      display: 'flex',
      flexDirection: 'column',
      opacity: 0,
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(40), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16)],
      transform: 'translateY(100%)',
      transition: '.4s',
      position: 'relative',
      height: '100%',
      zIndex: 99,
      fontFamily: 'RedHatFont'
    },
    hoverDescription: {
      color: theme.colors.white.string(),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30)
    },
    textRow: {
      color: theme.colors.white.string(),
      fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(18),
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10),
      '& a': {
        color: theme.colors.white.string(),
        textDecoration: 'underline'
      }
    },
    textRowHeader: {
      fontFamily: 'RedHatFontBold',
      letterSpacing: '0.5px'
    },
    cardActive: {
      '& $cardPhoto:after': {
        opacity: 1,
        transform: 'translateY(0)'
      },
      '& $cardInfo': {
        opacity: 1,
        transform: 'translateY(0)',
        transitionDelay: '0.4s'
      }
    },
    customDescription: {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(10)
    },
    bottom: {
      marginTop: 'auto'
    },
    cardLogo: {
      maxWidth: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(105),
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(35)
    },
    projectCard: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(264)
    }, theme.media.sm_, {
      width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(320)
    }),
    projectPhoto: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(264)
    }, theme.media.sm_, {
      height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(320)
    }),
    infoCard: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      width: '100%',
      backgroundColor: theme.colors.white.string(),
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.05)',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32)],
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      '& a': {
        '&:before': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
          content: '""',
          position: 'absolute',
          left: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(100),
          top: '-12px',
          width: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
          height: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
          backgroundImage: "url(".concat(__webpack_require__(/*! assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"), ")"),
          backgroundSize: 'contain',
          marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(20)
        }, theme.media.sm_, {
          content: 'none'
        })
      }
    }, theme.media.sm_, {
      width: 'calc(50% - 45px)',
      padding: [Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(32), Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(45)],
      marginBottom: 0
    }),
    requirements: {
      marginTop: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
      marginBottom: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
      listStylePosition: 'inside',
      textIndent: '10px',
      '& li': {
        fontFamily: 'RedHatFont',
        fontSize: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(16),
        lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(24),
        color: theme.colors.black.string(),
        position: 'relative',
        '&:before': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
          position: 'absolute',
          content: '""',
          top: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(11),
          left: 0,
          width: '4px',
          height: '4px',
          borderRadius: '10px',
          backgroundColor: theme.colors.black.string()
        }, theme.media.sm_, {
          top: 'calc(50% - 3px)',
          left: '-8px'
        })
      }
    },
    externalLink: {
      display: 'inline-block',
      position: 'relative',
      lineHeight: Object(helpers_size__WEBPACK_IMPORTED_MODULE_2__["default"])(30),
      fontFamily: 'RedHatFontBold',
      '&:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: 0,
        left: 0,
        backgroundColor: theme.colors.primary.string(),
        transform: 'scaleX(0.5)',
        transformOrigin: 'bottom left',
        transition: 'transform 0.3s'
      },
      '&:hover': {
        '&:after': {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left'
        },
        '&:before': {
          animation: '1.2s fadeIn',
          animationFillMode: 'forwards'
        }
      }
    },
    hoverPhoto: {
      display: none
    }
  };
}));

/***/ })

};
//# sourceMappingURL=server.52875ece6014d408c3cc.hot-update.js.map