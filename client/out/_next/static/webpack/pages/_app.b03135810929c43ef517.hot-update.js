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
      lineNumber: 94,
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
      lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTZWxlY3QiLCJzZXRDdXJyZW50U2VsZWN0IiwiaXNTY3JvbGwiLCJzZXRTY3JvbGwiLCJzY3JvbGxCYXIiLCJ1c2VSZWYiLCJ0b3VjaCIsInVzZVRvdWNoIiwiaGFuZGxlT25TY3JvbGwiLCJ1c2VUaHJvdHRsZSIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlT25TY3JvbGxTdGFydCIsImhhbmRsZU9uU2Nyb2xsRW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlT25DbGljayIsImluZGV4Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcmUiLCJkYXRhIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1BLEdBQXNDLEdBQUcsU0FBekNBLEdBQXlDLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsd0JBQy9CQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUQrQjtBQUFBO0FBQUEsTUFDbEVDLGFBRGtFO0FBQUEsTUFDbkRDLGdCQURtRDs7QUFBQSx5QkFFM0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBRjJDO0FBQUE7QUFBQSxNQUVsRUcsUUFGa0U7QUFBQSxNQUV4REMsU0FGd0Q7O0FBR3pFLE1BQU1DLFNBQVMsR0FBR04sNENBQUssQ0FBQ08sTUFBTixFQUFsQjtBQUNBLE1BQU1DLEtBQUssR0FBR0MsdUVBQVEsRUFBdEI7QUFDQSxNQUFNQyxj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LDRIQURSO0FBRUksUUFBSSxFQUFDLFdBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLENBREosRUFrQkksTUFBQywwREFBRDtBQUFRLGlCQUFhLEVBQUVOLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkosRUFvQkk7QUFDSSxhQUFTLDhEQUNMTyx1REFBSSxDQUFDQyxNQUFMLEdBQWMsQ0FBZCxLQUFvQnZCLGFBQXBCLEdBQW9DLDRCQUFwQyxHQUFtRSwyQkFEOUQsTUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBCSixFQTJCSTtBQUNJLGFBQVMsZ0VBQ0xzQix1REFBSSxDQUFDQyxNQUFMLEdBQWMsQ0FBZCxLQUFvQnZCLGFBQXBCLEdBQW9DLDJCQUFwQyxHQUFrRSw0QkFEN0QsTUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNCSixFQWtDSSxNQUFDLFNBQUQ7QUFBVyxZQUFRLEVBQUVJLFNBQXJCO0FBQWdDLGlCQUFhLEVBQUVXLGFBQS9DO0FBQThELGlCQUFhLEVBQUVmO0FBQTdFLEtBQWdHSCxTQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbENKLENBREosQ0FESjtBQXdDSCxDQXhGRDs7R0FBTUYsRztVQUlZWSwrRCxFQUNTRSxxRTs7O0tBTHJCZCxHO0FBMEZTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmIwMzEzNTgxMDkyOWM0M2VmNTE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3RhaWx3aW5kLmNzcyc7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcic7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcic7XHJcbmltcG9ydCB7IHVzZVRocm90dGxlIH0gZnJvbSAnLi4vY29tbW9uL2hvb2tzL3VzZVRocm90dGxlJztcclxuaW1wb3J0IHsgdXNlVG91Y2ggfSBmcm9tICcuLi9jb21tb24vaG9va3MvdXNlVG91Y2gnO1xyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFByb3BzIHtcclxuICAgIENvbXBvbmVudDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ7XHJcbiAgICBwYWdlUHJvcHM6IGFueTtcclxufVxyXG5cclxuY29uc3QgQXBwOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudFNlbGVjdCwgc2V0Q3VycmVudFNlbGVjdF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpc1Njcm9sbCwgc2V0U2Nyb2xsXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3Qgc2Nyb2xsQmFyID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgY29uc3QgdG91Y2ggPSB1c2VUb3VjaCgpO1xyXG4gICAgY29uc3QgaGFuZGxlT25TY3JvbGwgPSB1c2VUaHJvdHRsZSgoZXZlbnQ6IFdoZWVsRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaXNTY3JvbGwpXHJcbiAgICAgICAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNlbGVjdCA8IDMpIHNldEN1cnJlbnRTZWxlY3QoY3VycmVudFNlbGVjdCArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3QgPiAwKSBzZXRDdXJyZW50U2VsZWN0KGN1cnJlbnRTZWxlY3QgLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfSwgMTIwMCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25TY3JvbGxTdGFydCgpIHtcclxuICAgICAgICBzZXRTY3JvbGwoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25TY3JvbGxFbmQoKSB7XHJcbiAgICAgICAgc2V0U2Nyb2xsKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzU2Nyb2xsKVxyXG4gICAgICAgICAgICBpZiAodG91Y2ggPCAtMC41KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNlbGVjdCA8IDMpIHNldEN1cnJlbnRTZWxlY3QoY3VycmVudFNlbGVjdCArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvdWNoID49IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3QgPiAwKSBzZXRDdXJyZW50U2VsZWN0KGN1cnJlbnRTZWxlY3QgLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfSwgW3RvdWNoXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25DbGljayA9IChpbmRleDogbnVtYmVyKSA9PiBzZXRDdXJyZW50U2VsZWN0KGluZGV4KTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZU9uU2Nyb2xsLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHNjcm9sbEJhci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNjcm9sbEJhci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25zdGFydCcsIGhhbmRsZU9uU2Nyb2xsU3RhcnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgc2Nyb2xsQmFyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZU9uU2Nyb2xsRW5kLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVPblNjcm9sbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsQmFyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbEJhci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25zdGFydCcsIGhhbmRsZU9uU2Nyb2xsU3RhcnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNjcm9sbEJhci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVPblNjcm9sbEVuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtjdXJyZW50U2VsZWN0LCBpc1Njcm9sbF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuIGJnLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB6LTAgb2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3Rlcj1cImh0dHBzOi8vY2RuLmFrYW1haS5zdGVhbXN0YXRpYy5jb20vc3RlYW1jb21tdW5pdHkvcHVibGljL2ltYWdlcy9pdGVtcy8xMDM4MzAwL2VjOTA2OThhM2NmZTA2OWNjODZjZjcwNzA4YjgzMjAzYWZjMDY0ZmUuanBnXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmFrYW1haS5zdGVhbXN0YXRpYy5jb20vc3RlYW1jb21tdW5pdHkvcHVibGljL2ltYWdlcy9pdGVtcy8xMDM4MzAwL2QxNzk1N2NlNzk0ZGIzNDgzNjNhMzNhMjk3ODJlMDcwZWFkODlmYjkud2VibVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ2aWRlby93ZWJtXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uYWthbWFpLnN0ZWFtc3RhdGljLmNvbS9zdGVhbWNvbW11bml0eS9wdWJsaWMvaW1hZ2VzL2l0ZW1zLzEwMzgzMDAvOTNiM2MzZWMzYTllYmUwZDBiMDY5ZmZlYmI2OTViZmFlNDRmYmJiMy5tcDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidmlkZW8vbXA0XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgaGFuZGxlT25DbGljaz17aGFuZGxlT25DbGlja30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGlkZGVuIGJ0bi1zY3JvbGwgbGc6YmxvY2sgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxlbmd0aCAtIDEgPT09IGN1cnJlbnRTZWxlY3QgPyAnb3BhY2l0eS0wIHRyYW5zbGF0ZS15LWZ1bGwnIDogJ29wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNDUk9MTERPV05cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhpZGRlbiBidG4tc2Nyb2xsLTIgbGc6YmxvY2sgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxlbmd0aCAtIDEgPT09IGN1cnJlbnRTZWxlY3QgPyAnb3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCcgOiAnb3BhY2l0eS0wIHRyYW5zbGF0ZS15LWZ1bGwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNDUk9MTFRPUFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHJlZ2lzdGVyPXtzY3JvbGxCYXJ9IGhhbmRsZU9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9IGN1cnJlbnRTZWxlY3Q9e2N1cnJlbnRTZWxlY3R9IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9