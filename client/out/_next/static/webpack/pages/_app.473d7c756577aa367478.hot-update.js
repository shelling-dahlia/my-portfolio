webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar.tsx":
/*!*******************************!*\
  !*** ./components/navbar.tsx ***!
  \*******************************/
/*! exports provided: data, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony import */ var E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_asset_icons_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/asset/icons/github */ "./public/asset/icons/github.tsx");
/* harmony import */ var _public_asset_icons_facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/asset/icons/facebook */ "./public/asset/icons/facebook.tsx");
/* harmony import */ var _public_asset_icons_linkedin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/asset/icons/linkedin */ "./public/asset/icons/linkedin.tsx");
/* harmony import */ var _public_asset_icons_gmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/asset/icons/gmail */ "./public/asset/icons/gmail.tsx");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/tooltip */ "./components/tooltip.tsx");


var _jsxFileName = "E:\\portfolio\\client\\components\\navbar.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];







var socialConfig = {
  github: 'https://github.com/Heaty566',
  facebook: 'https://www.facebook.com/Heaty566/',
  linkedin: 'https://www.linkedin.com/in/heaty566/',
  gmail: 'heaty566@gmail.com'
};
var data = [{
  label: 'ABOUT ME',
  color: 'hover:bg-rose-500'
}, {
  color: 'hover:bg-green-700',
  label: 'PROJECTS'
}, {
  color: 'hover:bg-yellow-700',
  label: 'TECHNICAL SKILLS'
}, {
  color: 'hover:bg-blue-600',
  label: 'CONTACT ME'
}];

var Navbar = function Navbar(_ref) {
  _s();

  var handleOnClick = _ref.handleOnClick;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isActive = _React$useState2[0],
      setActive = _React$useState2[1];

  return __jsx("div", {
    className: "fixed z-50 flex w-full p-4 md:p-8 text-coolGray-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "z-50 flex items-center justify-between flex-1 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl font-medium tracking-wider duration-300 opacity-0 cursor-pointer hover:text-rose-400 lg:opacity-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "Pham Vinh Nhan")), __jsx("div", {
    className: "flex space-x-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "hidden space-x-8 md:flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("a", {
    target: "__blank",
    href: socialConfig.github,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx(_public_asset_icons_github__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  })), __jsx("a", {
    target: "__blank",
    href: socialConfig.facebook,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx(_public_asset_icons_facebook__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  })), __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: socialConfig.gmail,
    maxLength: 0,
    position: "top-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx("a", {
    target: "__blank",
    href: "mailto:".concat(socialConfig.gmail),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, __jsx(_public_asset_icons_gmail__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }))), __jsx("a", {
    target: "__blank",
    href: socialConfig.linkedin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx(_public_asset_icons_linkedin__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }))), __jsx("button", {
    className: "space-y-2 focus:outline-none",
    onClick: function onClick() {
      return setActive(!isActive);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-8 h-1 rounded-sm bg-coolGray-50 duration-200 transform ".concat(isActive ? 'translate-y-1 rotate-45' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-8 h-1 rounded-sm bg-coolGray-50 duration-200  transform ".concat(isActive ? '-translate-y-2 -rotate-45' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "fixed top-0 left-0 z-40 w-full h-screen duration-500 transform bg-navbar ".concat(isActive ? 'translate-x-0' : 'translate-x-full'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col items-center justify-center h-full space-y-8 text-4xl font-semibold md:text-6xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, data.map(function (item, index) {
    return __jsx("div", {
      className: "overflow-hidden ",
      key: item.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 25
      }
    }, __jsx("button", {
      onClick: function onClick() {
        handleOnClick(index);
        setActive(false);
      },
      className: "inline-block duration-300 delay-500 transform rounded-tl-xl  rounded-br-xl overflow-hidden focus:outline-none ".concat(isActive ? '' : 'translate-y-full'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "inline-block p-2 duration-200 transform  ".concat(item.color),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 33
      }
    }, item.label)));
  }), __jsx("div", {
    className: "flex md:hidden  space-x-4 duration-300 delay-500 transform ".concat(isActive ? '' : 'scale-x-0'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx("a", {
    target: "__blank",
    href: socialConfig.github,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, __jsx(_public_asset_icons_github__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  })), __jsx("a", {
    target: "__blank",
    href: socialConfig.facebook,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, __jsx(_public_asset_icons_facebook__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  })), __jsx("a", {
    target: "__blank",
    href: "mailto:".concat(socialConfig.gmail),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, __jsx(_public_asset_icons_gmail__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  })), __jsx("a", {
    target: "__blank",
    href: socialConfig.linkedin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, __jsx(_public_asset_icons_linkedin__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }))))));
};

_s(Navbar, "NIDogoy7bmTp1+ctz7hxf3NMsLg=");

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIudHN4Il0sIm5hbWVzIjpbInNvY2lhbENvbmZpZyIsImdpdGh1YiIsImZhY2Vib29rIiwibGlua2VkaW4iLCJnbWFpbCIsImRhdGEiLCJsYWJlbCIsImNvbG9yIiwiTmF2YmFyIiwiaGFuZGxlT25DbGljayIsIlJlYWN0IiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLFFBQU0sRUFBRSw2QkFEUztBQUVqQkMsVUFBUSxFQUFFLG9DQUZPO0FBR2pCQyxVQUFRLEVBQUUsdUNBSE87QUFJakJDLE9BQUssRUFBRTtBQUpVLENBQXJCO0FBWU8sSUFBTUMsSUFBa0IsR0FBRyxDQUM5QjtBQUFFQyxPQUFLLEVBQUUsVUFBVDtBQUFxQkMsT0FBSyxFQUFFO0FBQTVCLENBRDhCLEVBRTlCO0FBQUVBLE9BQUssRUFBRSxvQkFBVDtBQUErQkQsT0FBSyxFQUFFO0FBQXRDLENBRjhCLEVBRzlCO0FBQUVDLE9BQUssRUFBRSxxQkFBVDtBQUFnQ0QsT0FBSyxFQUFFO0FBQXZDLENBSDhCLEVBSTlCO0FBQUVDLE9BQUssRUFBRSxtQkFBVDtBQUE4QkQsT0FBSyxFQUFFO0FBQXJDLENBSjhCLENBQTNCOztBQVdQLElBQU1FLE1BQTRDLEdBQUcsU0FBL0NBLE1BQStDLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjs7QUFBQSx3QkFDMUNDLDhDQUFBLENBQWUsS0FBZixDQUQwQztBQUFBO0FBQUEsTUFDakVDLFFBRGlFO0FBQUEsTUFDdkRDLFNBRHVEOztBQUd4RSxTQUNJO0FBQUssYUFBUyxFQUFDLG9EQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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TUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FWSixDQWpCSixDQUxKLENBcENKLENBREo7QUE2RUgsQ0FoRkQ7O0dBQU1LLE07O0tBQUFBLE07QUFrRlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDczZDdjNzU2NTc3YWEzNjc0NzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSAnLi4vcHVibGljL2Fzc2V0L2ljb25zL2dpdGh1Yic7XHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnLi4vcHVibGljL2Fzc2V0L2ljb25zL2ZhY2Vib29rJztcclxuaW1wb3J0IExpbmtlZGluSWNvbiBmcm9tICcuLi9wdWJsaWMvYXNzZXQvaWNvbnMvbGlua2VkaW4nO1xyXG5pbXBvcnQgR21haWxJY29uIGZyb20gJy4uL3B1YmxpYy9hc3NldC9pY29ucy9nbWFpbCc7XHJcbmltcG9ydCBUb29sdGlwRHJvcEJveCBmcm9tICcuLi9jb21wb25lbnRzL3Rvb2x0aXAnO1xyXG5jb25zdCBzb2NpYWxDb25maWcgPSB7XHJcbiAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vSGVhdHk1NjYnLFxyXG4gICAgZmFjZWJvb2s6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vSGVhdHk1NjYvJyxcclxuICAgIGxpbmtlZGluOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2hlYXR5NTY2LycsXHJcbiAgICBnbWFpbDogJ2hlYXR5NTY2QGdtYWlsLmNvbScsXHJcbn07XHJcblxyXG5pbnRlcmZhY2UgTmF2YmFySXRlbSB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGE6IE5hdmJhckl0ZW1bXSA9IFtcclxuICAgIHsgbGFiZWw6ICdBQk9VVCBNRScsIGNvbG9yOiAnaG92ZXI6Ymctcm9zZS01MDAnIH0sXHJcbiAgICB7IGNvbG9yOiAnaG92ZXI6YmctZ3JlZW4tNzAwJywgbGFiZWw6ICdQUk9KRUNUUycgfSxcclxuICAgIHsgY29sb3I6ICdob3ZlcjpiZy15ZWxsb3ctNzAwJywgbGFiZWw6ICdURUNITklDQUwgU0tJTExTJyB9LFxyXG4gICAgeyBjb2xvcjogJ2hvdmVyOmJnLWJsdWUtNjAwJywgbGFiZWw6ICdDT05UQUNUIE1FJyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOYXZiYXJQcm9wcyB7XHJcbiAgICBoYW5kbGVPbkNsaWNrOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgTmF2YmFyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxOYXZiYXJQcm9wcz4gPSAoeyBoYW5kbGVPbkNsaWNrIH0pID0+IHtcclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgei01MCBmbGV4IHctZnVsbCBwLTQgbWQ6cC04IHRleHQtY29vbEdyYXktNTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmbGV4LTEgXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGVyIGR1cmF0aW9uLTMwMCBvcGFjaXR5LTAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1yb3NlLTQwMCBsZzpvcGFjaXR5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQaGFtIFZpbmggTmhhblxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzcGFjZS14LTggbWQ6ZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfX2JsYW5rXCIgaHJlZj17c29jaWFsQ29uZmlnLmdpdGh1Yn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2l0aHViSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9fYmxhbmtcIiBocmVmPXtzb2NpYWxDb25maWcuZmFjZWJvb2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwRHJvcEJveCBjb250ZW50PXtzb2NpYWxDb25maWcuZ21haWx9IG1heExlbmd0aD17MH0gcG9zaXRpb249XCJ0b3AtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX19ibGFua1wiIGhyZWY9e2BtYWlsdG86JHtzb2NpYWxDb25maWcuZ21haWx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdtYWlsSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBEcm9wQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfX2JsYW5rXCIgaHJlZj17c29jaWFsQ29uZmlnLmxpbmtlZGlufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rZWRpbkljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3BhY2UteS0yIGZvY3VzOm91dGxpbmUtbm9uZVwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghaXNBY3RpdmUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy04IGgtMSByb3VuZGVkLXNtIGJnLWNvb2xHcmF5LTUwIGR1cmF0aW9uLTIwMCB0cmFuc2Zvcm0gJHtpc0FjdGl2ZSA/ICd0cmFuc2xhdGUteS0xIHJvdGF0ZS00NScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctOCBoLTEgcm91bmRlZC1zbSBiZy1jb29sR3JheS01MCBkdXJhdGlvbi0yMDAgIHRyYW5zZm9ybSAke2lzQWN0aXZlID8gJy10cmFuc2xhdGUteS0yIC1yb3RhdGUtNDUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIHotNDAgdy1mdWxsIGgtc2NyZWVuIGR1cmF0aW9uLTUwMCB0cmFuc2Zvcm0gYmctbmF2YmFyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyAndHJhbnNsYXRlLXgtMCcgOiAndHJhbnNsYXRlLXgtZnVsbCdcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtZnVsbCBzcGFjZS15LTggdGV4dC00eGwgZm9udC1zZW1pYm9sZCBtZDp0ZXh0LTZ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gXCIga2V5PXtpdGVtLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2xpY2soaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5saW5lLWJsb2NrIGR1cmF0aW9uLTMwMCBkZWxheS01MDAgdHJhbnNmb3JtIHJvdW5kZWQtdGwteGwgIHJvdW5kZWQtYnIteGwgb3ZlcmZsb3ctaGlkZGVuIGZvY3VzOm91dGxpbmUtbm9uZSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICcnIDogJ3RyYW5zbGF0ZS15LWZ1bGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaW5saW5lLWJsb2NrIHAtMiBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtICAke2l0ZW0uY29sb3J9YH0+e2l0ZW0ubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggbWQ6aGlkZGVuICBzcGFjZS14LTQgZHVyYXRpb24tMzAwIGRlbGF5LTUwMCB0cmFuc2Zvcm0gJHtpc0FjdGl2ZSA/ICcnIDogJ3NjYWxlLXgtMCd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9fYmxhbmtcIiBocmVmPXtzb2NpYWxDb25maWcuZ2l0aHVifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHaXRodWJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX19ibGFua1wiIGhyZWY9e3NvY2lhbENvbmZpZy5mYWNlYm9va30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX19ibGFua1wiIGhyZWY9e2BtYWlsdG86JHtzb2NpYWxDb25maWcuZ21haWx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R21haWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX19ibGFua1wiIGhyZWY9e3NvY2lhbENvbmZpZy5saW5rZWRpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua2VkaW5JY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=