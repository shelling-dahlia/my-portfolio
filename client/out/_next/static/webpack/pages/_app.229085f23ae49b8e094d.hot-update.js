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
    console.log('hello');
    setCurrentSelect(index);
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
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative flex flex-col min-h-screen overflow-hidden bg-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx("source", {
    src: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1038300/d17957ce794db348363a33a29782e070ead89fb9.webm",
    type: "video/webm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }), __jsx("source", {
    src: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1038300/93b3c3ec3a9ebe0d0b069ffebb695bfae44fbbb3.mp4",
    type: "video/mp4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  })), __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleOnClick: handleOnClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "hidden btn-scroll lg:block duration-300 transform ".concat(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["data"].length - 1 === currentSelect ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0', " "),
    onClick: handleOnClick(3),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, "SCROLLDOWN"), __jsx("div", {
    className: "hidden btn-scroll-2 lg:block duration-300 transform ".concat(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["data"].length - 1 === currentSelect ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full', " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTZWxlY3QiLCJzZXRDdXJyZW50U2VsZWN0IiwiaXNTY3JvbGwiLCJzZXRTY3JvbGwiLCJzY3JvbGxCYXIiLCJ1c2VSZWYiLCJ0b3VjaCIsInVzZVRvdWNoIiwiaGFuZGxlT25TY3JvbGwiLCJ1c2VUaHJvdHRsZSIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlT25TY3JvbGxTdGFydCIsImhhbmRsZU9uU2Nyb2xsRW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlT25DbGljayIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0b3JlIiwiZGF0YSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxHQUFzQyxHQUFHLFNBQXpDQSxHQUF5QyxPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLHdCQUMvQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FEK0I7QUFBQTtBQUFBLE1BQ2xFQyxhQURrRTtBQUFBLE1BQ25EQyxnQkFEbUQ7O0FBQUEseUJBRTNDSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUYyQztBQUFBO0FBQUEsTUFFbEVHLFFBRmtFO0FBQUEsTUFFeERDLFNBRndEOztBQUd6RSxNQUFNQyxTQUFTLEdBQUdOLDRDQUFLLENBQUNPLE1BQU4sRUFBbEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHVFQUFRLEVB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVlJO0FBQ0ksT0FBRyxFQUFDLDRIQURSO0FBRUksUUFBSSxFQUFDLFdBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLENBREosRUFrQkksTUFBQywwREFBRDtBQUFRLGlCQUFhLEVBQUVSLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkosRUFvQkk7QUFDSSxhQUFTLDhEQUNMUyx1REFBSSxDQUFDQyxNQUFMLEdBQWMsQ0FBZCxLQUFvQnpCLGFBQXBCLEdBQW9DLDRCQUFwQyxHQUFtRSwyQkFEOUQsTUFEYjtBQUlJLFdBQU8sRUFBRWUsYUFBYSxDQUFDLENBQUQsQ0FKMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwQkosRUE0Qkk7QUFDSSxhQUFTLGdFQUNMUyx1REFBSSxDQUFDQyxNQUFMLEdBQWMsQ0FBZCxLQUFvQnpCLGFBQXBCLEdBQW9DLDJCQUFwQyxHQUFrRSw0QkFEN0QsTUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVCSixFQW1DSSxNQUFDLFNBQUQ7QUFBVyxZQUFRLEVBQUVJLFNBQXJCO0FBQWdDLGlCQUFhLEVBQUVXLGFBQS9DO0FBQThELGlCQUFhLEVBQUVmO0FBQTdFLEtBQWdHSCxTQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbkNKLENBREosQ0FESjtBQXlDSCxDQTNGRDs7R0FBTUYsRztVQUlZWSwrRCxFQUNTRSxxRTs7O0tBTHJCZCxHO0FBNkZTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIyOTA4NWYyM2FlNDliOGUwOTRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3RhaWx3aW5kLmNzcyc7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcic7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcic7XHJcbmltcG9ydCB7IHVzZVRocm90dGxlIH0gZnJvbSAnLi4vY29tbW9uL2hvb2tzL3VzZVRocm90dGxlJztcclxuaW1wb3J0IHsgdXNlVG91Y2ggfSBmcm9tICcuLi9jb21tb24vaG9va3MvdXNlVG91Y2gnO1xyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFByb3BzIHtcclxuICAgIENvbXBvbmVudDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ7XHJcbiAgICBwYWdlUHJvcHM6IGFueTtcclxufVxyXG5cclxuY29uc3QgQXBwOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudFNlbGVjdCwgc2V0Q3VycmVudFNlbGVjdF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpc1Njcm9sbCwgc2V0U2Nyb2xsXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3Qgc2Nyb2xsQmFyID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgY29uc3QgdG91Y2ggPSB1c2VUb3VjaCgpO1xyXG4gICAgY29uc3QgaGFuZGxlT25TY3JvbGwgPSB1c2VUaHJvdHRsZSgoZXZlbnQ6IFdoZWVsRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaXNTY3JvbGwpXHJcbiAgICAgICAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNlbGVjdCA8IDMpIHNldEN1cnJlbnRTZWxlY3QoY3VycmVudFNlbGVjdCArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3QgPiAwKSBzZXRDdXJyZW50U2VsZWN0KGN1cnJlbnRTZWxlY3QgLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfSwgMTIwMCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25TY3JvbGxTdGFydCgpIHtcclxuICAgICAgICBzZXRTY3JvbGwoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25TY3JvbGxFbmQoKSB7XHJcbiAgICAgICAgc2V0U2Nyb2xsKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzU2Nyb2xsKVxyXG4gICAgICAgICAgICBpZiAodG91Y2ggPCAtMC41KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNlbGVjdCA8IDMpIHNldEN1cnJlbnRTZWxlY3QoY3VycmVudFNlbGVjdCArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvdWNoID49IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3QgPiAwKSBzZXRDdXJyZW50U2VsZWN0KGN1cnJlbnRTZWxlY3QgLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfSwgW3RvdWNoXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25DbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNlbGVjdChpbmRleCk7XHJcbiAgICB9O1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVPblNjcm9sbCwgZmFsc2UpO1xyXG4gICAgICAgIGlmIChzY3JvbGxCYXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzY3JvbGxCYXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uc3RhcnQnLCBoYW5kbGVPblNjcm9sbFN0YXJ0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHNjcm9sbEJhci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVPblNjcm9sbEVuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlT25TY3JvbGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKHNjcm9sbEJhci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxCYXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uc3RhcnQnLCBoYW5kbGVPblNjcm9sbFN0YXJ0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxCYXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlT25TY3JvbGxFbmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbY3VycmVudFNlbGVjdCwgaXNTY3JvbGxdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIG92ZXJmbG93LWhpZGRlbiBiZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgei0wIG9iamVjdC1jb3ZlciB3LWZ1bGwgaC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBwb3N0ZXI9XCJodHRwczovL2Nkbi5ha2FtYWkuc3RlYW1zdGF0aWMuY29tL3N0ZWFtY29tbXVuaXR5L3B1YmxpYy9pbWFnZXMvaXRlbXMvMTAzODMwMC9lYzkwNjk4YTNjZmUwNjljYzg2Y2Y3MDcwOGI4MzIwM2FmYzA2NGZlLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5ha2FtYWkuc3RlYW1zdGF0aWMuY29tL3N0ZWFtY29tbXVuaXR5L3B1YmxpYy9pbWFnZXMvaXRlbXMvMTAzODMwMC9kMTc5NTdjZTc5NGRiMzQ4MzYzYTMzYTI5NzgyZTA3MGVhZDg5ZmI5LndlYm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidmlkZW8vd2VibVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmFrYW1haS5zdGVhbXN0YXRpYy5jb20vc3RlYW1jb21tdW5pdHkvcHVibGljL2ltYWdlcy9pdGVtcy8xMDM4MzAwLzkzYjNjM2VjM2E5ZWJlMGQwYjA2OWZmZWJiNjk1YmZhZTQ0ZmJiYjMubXA0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInZpZGVvL21wNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIGhhbmRsZU9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhpZGRlbiBidG4tc2Nyb2xsIGxnOmJsb2NrIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5sZW5ndGggLSAxID09PSBjdXJyZW50U2VsZWN0ID8gJ29wYWNpdHktMCB0cmFuc2xhdGUteS1mdWxsJyA6ICdvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gYH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrKDMpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNDUk9MTERPV05cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhpZGRlbiBidG4tc2Nyb2xsLTIgbGc6YmxvY2sgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxlbmd0aCAtIDEgPT09IGN1cnJlbnRTZWxlY3QgPyAnb3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCcgOiAnb3BhY2l0eS0wIHRyYW5zbGF0ZS15LWZ1bGwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNDUk9MTFRPUFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHJlZ2lzdGVyPXtzY3JvbGxCYXJ9IGhhbmRsZU9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9IGN1cnJlbnRTZWxlY3Q9e2N1cnJlbnRTZWxlY3R9IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9