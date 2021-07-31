webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/tailwind.css */ "./styles/tailwind.css");
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.tsx");
/* harmony import */ var _common_hooks_useThrottle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/hooks/useThrottle */ "./common/hooks/useThrottle.tsx");
/* harmony import */ var _common_hooks_useTouch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/hooks/useTouch */ "./common/hooks/useTouch.ts");



var _jsxFileName = "E:\\portfolio\\client\\pages\\_app.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/prop-types */









var App = function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      currentSelect = _React$useState2[0],
      setCurrentSelect = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState4 = Object(E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      isScroll = _React$useState4[0],
      setScroll = _React$useState4[1];

  var scrollBar = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var touch = Object(_common_hooks_useTouch__WEBPACK_IMPORTED_MODULE_8__["useTouch"])();
  var handleOnScroll = Object(_common_hooks_useThrottle__WEBPACK_IMPORTED_MODULE_7__["useThrottle"])(function (event) {
    if (isScroll) if (event.deltaY > 0) {
      if (currentSelect < 3) setCurrentSelect(currentSelect + 1);
    } else {
      if (currentSelect > 0) setCurrentSelect(currentSelect - 1);
    }
  }, 1200);

  function handleOnScrollStart() {
    setScroll(false);
  }

  function handleOnScrollEnd() {
    setScroll(true);
  }

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (isScroll) if (touch < -0.5) {
      if (currentSelect < 3) setCurrentSelect(currentSelect + 1);
    } else if (touch >= 0.5) {
      if (currentSelect > 0) setCurrentSelect(currentSelect - 1);
    }
  }, [touch]);

  var handleOnClick = function handleOnClick(index) {
    return setCurrentSelect(index);
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    window.addEventListener('wheel', handleOnScroll, false);

    if (scrollBar.current) {
      scrollBar.current.addEventListener('transitionstart', handleOnScrollStart, false);
      scrollBar.current.addEventListener('transitionend', handleOnScrollEnd, false);
    }

    return function () {
      window.removeEventListener('wheel', handleOnScroll, false);

      if (scrollBar.current) {
        scrollBar.current.removeEventListener('transitionstart', handleOnScrollStart, false);
        scrollBar.current.removeEventListener('transitionend', handleOnScrollEnd, false);
      }
    };
  }, [currentSelect, isScroll]);
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_5__["store"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative flex flex-col min-h-screen overflow-hidden bg-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("video", {
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true,
    className: "absolute top-0 left-0 z-0 object-cover w-full h-full",
    poster: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1038300/ec90698a3cfe069cc86cf70708b83203afc064fe.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("source", {
    src: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1038300/d17957ce794db348363a33a29782e070ead89fb9.webm",
    type: "video/webm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }), __jsx("source", {
    src: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1038300/93b3c3ec3a9ebe0d0b069ffebb695bfae44fbbb3.mp4",
    type: "video/mp4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  })), __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleOnClick: handleOnClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "hidden btn-scroll lg:block duration-300 transform ".concat(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["data"].length - 1 === currentSelect ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0', " "),
    onClick: function onClick() {
      return handleOnClick(0);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "SCROLLDOWN"), __jsx("div", {
    className: "hidden btn-scroll-2 lg:block duration-300 transform ".concat(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["data"].length - 1 === currentSelect ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full', " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, "SCROLLTOP"), __jsx(Component, Object(E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    register: scrollBar,
    handleOnClick: handleOnClick,
    currentSelect: currentSelect
  }, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }))));
};

_s(App, "DvE1D4wxliLLjkzS8SLvuTGHqPs=", false, function () {
  return [_common_hooks_useTouch__WEBPACK_IMPORTED_MODULE_8__["useTouch"], _common_hooks_useThrottle__WEBPACK_IMPORTED_MODULE_7__["useThrottle"]];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTZWxlY3QiLCJzZXRDdXJyZW50U2VsZWN0IiwiaXNTY3JvbGwiLCJzZXRTY3JvbGwiLCJzY3JvbGxCYXIiLCJ1c2VSZWYiLCJ0b3VjaCIsInVzZVRvdWNoIiwiaGFuZGxlT25TY3JvbGwiLCJ1c2VUaHJvdHRsZSIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlT25TY3JvbGxTdGFydCIsImhhbmRsZU9uU2Nyb2xsRW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlT25DbGljayIsImluZGV4Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcmUiLCJkYXRhIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1BLEdBQXNDLEdBQUcsU0FBekNBLEdBQXlDLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsd0JBQy9CQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUQrQjtBQUFBO0FBQUEsTUFDbEVDLGFBRGtFO0FBQUEsTUFDbkRDLGdCQURtRDs7QUFBQSx5QkFFM0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBRjJDO0FBQUE7QUFBQSxNQUVsRUcsUUFGa0U7QUFBQSxNQUV4REMsU0FGd0Q7O0FBR3pFLE1BQU1DLFNBQVMsR0FBR04sNENBQUssQ0FBQ08sTUFBTixFQUFsQjtBQUNBLE1BQU1DLEtBQUssR0FBR0MsdUVBQVEsRUFBdEI7QUFDQSxNQUFNQyxj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LDRIQURSO0FBRUksUUFBSSxFQUFDLFdBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLENBREosRUFrQkksTUFBQywwREFBRDtBQUFRLGlCQUFhLEVBQUVOLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkosRUFvQkk7QUFDSSxhQUFTLDhEQUNMTyx1REFBSSxDQUFDQyxNQUFMLEdBQWMsQ0FBZCxLQUFvQnZCLGFBQXBCLEdBQW9DLDRCQUFwQyxHQUFtRSwyQkFEOUQsTUFEYjtBQUlJLFdBQU8sRUFBRTtBQUFBLGFBQU1lLGFBQWEsQ0FBQyxDQUFELENBQW5CO0FBQUEsS0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBCSixFQTRCSTtBQUNJLGFBQVMsZ0VBQ0xPLHVEQUFJLENBQUNDLE1BQUwsR0FBYyxDQUFkLEtBQW9CdkIsYUFBcEIsR0FBb0MsMkJBQXBDLEdBQWtFLDRCQUQ3RCxNQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUJKLEVBbUNJLE1BQUMsU0FBRDtBQUFXLFlBQVEsRUFBRUksU0FBckI7QUFBZ0MsaUJBQWEsRUFBRVcsYUFBL0M7QUFBOEQsaUJBQWEsRUFBRWY7QUFBN0UsS0FBZ0dILFNBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FuQ0osQ0FESixDQURKO0FBeUNILENBekZEOztHQUFNRixHO1VBSVlZLCtELEVBQ1NFLHFFOzs7S0FMckJkLEc7QUEyRlNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzdlYTIxYzEyOTYzZTU1MjVmMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICcuLi9zdHlsZXMvdGFpbHdpbmQuY3NzJztcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJztcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJztcclxuaW1wb3J0IHsgdXNlVGhyb3R0bGUgfSBmcm9tICcuLi9jb21tb24vaG9va3MvdXNlVGhyb3R0bGUnO1xyXG5pbXBvcnQgeyB1c2VUb3VjaCB9IGZyb20gJy4uL2NvbW1vbi9ob29rcy91c2VUb3VjaCc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwUHJvcHMge1xyXG4gICAgQ29tcG9uZW50OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDtcclxuICAgIHBhZ2VQcm9wczogYW55O1xyXG59XHJcblxyXG5jb25zdCBBcHA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50U2VsZWN0LCBzZXRDdXJyZW50U2VsZWN0XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2lzU2Nyb2xsLCBzZXRTY3JvbGxdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBzY3JvbGxCYXIgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0b3VjaCA9IHVzZVRvdWNoKCk7XHJcbiAgICBjb25zdCBoYW5kbGVPblNjcm9sbCA9IHVzZVRocm90dGxlKChldmVudDogV2hlZWxFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1Njcm9sbClcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmRlbHRhWSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2VsZWN0IDwgMykgc2V0Q3VycmVudFNlbGVjdChjdXJyZW50U2VsZWN0ICsgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNlbGVjdCA+IDApIHNldEN1cnJlbnRTZWxlY3QoY3VycmVudFNlbGVjdCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9LCAxMjAwKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPblNjcm9sbFN0YXJ0KCkge1xyXG4gICAgICAgIHNldFNjcm9sbChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPblNjcm9sbEVuZCgpIHtcclxuICAgICAgICBzZXRTY3JvbGwodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNTY3JvbGwpXHJcbiAgICAgICAgICAgIGlmICh0b3VjaCA8IC0wLjUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2VsZWN0IDwgMykgc2V0Q3VycmVudFNlbGVjdChjdXJyZW50U2VsZWN0ICsgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG91Y2ggPj0gMC41KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNlbGVjdCA+IDApIHNldEN1cnJlbnRTZWxlY3QoY3VycmVudFNlbGVjdCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9LCBbdG91Y2hdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPbkNsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHNldEN1cnJlbnRTZWxlY3QoaW5kZXgpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlT25TY3JvbGwsIGZhbHNlKTtcclxuICAgICAgICBpZiAoc2Nyb2xsQmFyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc2Nyb2xsQmFyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnN0YXJ0JywgaGFuZGxlT25TY3JvbGxTdGFydCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBzY3JvbGxCYXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlT25TY3JvbGxFbmQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZU9uU2Nyb2xsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxCYXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmFyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnN0YXJ0JywgaGFuZGxlT25TY3JvbGxTdGFydCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmFyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZU9uU2Nyb2xsRW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW2N1cnJlbnRTZWxlY3QsIGlzU2Nyb2xsXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4gYmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dmlkZW9cclxuICAgICAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICAgICAgICBsb29wXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHotMCBvYmplY3QtY292ZXIgdy1mdWxsIGgtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdGVyPVwiaHR0cHM6Ly9jZG4uYWthbWFpLnN0ZWFtc3RhdGljLmNvbS9zdGVhbWNvbW11bml0eS9wdWJsaWMvaW1hZ2VzL2l0ZW1zLzEwMzgzMDAvZWM5MDY5OGEzY2ZlMDY5Y2M4NmNmNzA3MDhiODMyMDNhZmMwNjRmZS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uYWthbWFpLnN0ZWFtc3RhdGljLmNvbS9zdGVhbWNvbW11bml0eS9wdWJsaWMvaW1hZ2VzL2l0ZW1zLzEwMzgzMDAvZDE3OTU3Y2U3OTRkYjM0ODM2M2EzM2EyOTc4MmUwNzBlYWQ4OWZiOS53ZWJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInZpZGVvL3dlYm1cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5ha2FtYWkuc3RlYW1zdGF0aWMuY29tL3N0ZWFtY29tbXVuaXR5L3B1YmxpYy9pbWFnZXMvaXRlbXMvMTAzODMwMC85M2IzYzNlYzNhOWViZTBkMGIwNjlmZmViYjY5NWJmYWU0NGZiYmIzLm1wNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ2aWRlby9tcDRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciBoYW5kbGVPbkNsaWNrPXtoYW5kbGVPbkNsaWNrfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoaWRkZW4gYnRuLXNjcm9sbCBsZzpibG9jayBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubGVuZ3RoIC0gMSA9PT0gY3VycmVudFNlbGVjdCA/ICdvcGFjaXR5LTAgdHJhbnNsYXRlLXktZnVsbCcgOiAnb3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCdcclxuICAgICAgICAgICAgICAgICAgICB9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlT25DbGljaygwKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTQ1JPTExET1dOXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoaWRkZW4gYnRuLXNjcm9sbC0yIGxnOmJsb2NrIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5sZW5ndGggLSAxID09PSBjdXJyZW50U2VsZWN0ID8gJ29wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTAnIDogJ29wYWNpdHktMCB0cmFuc2xhdGUteS1mdWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTQ1JPTExUT1BcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCByZWdpc3Rlcj17c2Nyb2xsQmFyfSBoYW5kbGVPbkNsaWNrPXtoYW5kbGVPbkNsaWNrfSBjdXJyZW50U2VsZWN0PXtjdXJyZW50U2VsZWN0fSB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==