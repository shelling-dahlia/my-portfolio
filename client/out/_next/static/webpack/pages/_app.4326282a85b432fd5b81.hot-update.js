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
  }), __jsx("button", {
    className: "hidden btn-scroll lg:block duration-300 transform ".concat(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["data"].length - 1 === currentSelect ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0', " "),
    onClick: function onClick() {
      return console.log('hello');
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTZWxlY3QiLCJzZXRDdXJyZW50U2VsZWN0IiwiaXNTY3JvbGwiLCJzZXRTY3JvbGwiLCJzY3JvbGxCYXIiLCJ1c2VSZWYiLCJ0b3VjaCIsInVzZVRvdWNoIiwiaGFuZGxlT25TY3JvbGwiLCJ1c2VUaHJvdHRsZSIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlT25TY3JvbGxTdGFydCIsImhhbmRsZU9uU2Nyb2xsRW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlT25DbGljayIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0b3JlIiwiZGF0YSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxHQUFzQyxHQUFHLFNBQXpDQSxHQUF5QyxPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLHdCQUMvQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FEK0I7QUFBQTtBQUFBLE1BQ2xFQyxhQURrRTtBQUFBLE1BQ25EQyxnQkFEbUQ7O0FBQUEseUJBRTNDSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUYyQztBQUFBO0FBQUEsTUFFbEVHLFFBRmtFO0FBQUEsTUFFeERDLFNBRndEOztBQUd6RSxNQUFNQyxTQUFTLEdBQUdOLDRDQUFLLENBQUNPLE1BQU4sRUFBbEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHVFQUFRLEVB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVlJO0FBQ0ksT0FBRyxFQUFDLDRIQURSO0FBRUksUUFBSSxFQUFDLFdBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLENBREosRUFrQkksTUFBQywwREFBRDtBQUFRLGlCQUFhLEVBQUVSLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkosRUFvQkk7QUFDSSxhQUFTLDhEQUNMUyx1REFBSSxDQUFDQyxNQUFMLEdBQWMsQ0FBZCxLQUFvQnpCLGFBQXBCLEdBQW9DLDRCQUFwQyxHQUFtRSwyQkFEOUQsTUFEYjtBQUlJLFdBQU8sRUFBRTtBQUFBLGFBQU1pQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLENBQU47QUFBQSxLQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcEJKLEVBNEJJO0FBQ0ksYUFBUyxnRUFDTE0sdURBQUksQ0FBQ0MsTUFBTCxHQUFjLENBQWQsS0FBb0J6QixhQUFwQixHQUFvQywyQkFBcEMsR0FBa0UsNEJBRDdELE1BRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1QkosRUFtQ0ksTUFBQyxTQUFEO0FBQVcsWUFBUSxFQUFFSSxTQUFyQjtBQUFnQyxpQkFBYSxFQUFFVyxhQUEvQztBQUE4RCxpQkFBYSxFQUFFZjtBQUE3RSxLQUFnR0gsU0FBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW5DSixDQURKLENBREo7QUF5Q0gsQ0EzRkQ7O0dBQU1GLEc7VUFJWVksK0QsRUFDU0UscUU7OztLQUxyQmQsRztBQTZGU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MzI2MjgyYTg1YjQzMmZkNWI4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy90YWlsd2luZC5jc3MnO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInO1xyXG5pbXBvcnQgeyB1c2VUaHJvdHRsZSB9IGZyb20gJy4uL2NvbW1vbi9ob29rcy91c2VUaHJvdHRsZSc7XHJcbmltcG9ydCB7IHVzZVRvdWNoIH0gZnJvbSAnLi4vY29tbW9uL2hvb2tzL3VzZVRvdWNoJztcclxuZXhwb3J0IGludGVyZmFjZSBBcHBQcm9wcyB7XHJcbiAgICBDb21wb25lbnQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50O1xyXG4gICAgcGFnZVByb3BzOiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IEFwcDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRTZWxlY3QsIHNldEN1cnJlbnRTZWxlY3RdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaXNTY3JvbGwsIHNldFNjcm9sbF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IHNjcm9sbEJhciA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHRvdWNoID0gdXNlVG91Y2goKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uU2Nyb2xsID0gdXNlVGhyb3R0bGUoKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzU2Nyb2xsKVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3QgPCAzKSBzZXRDdXJyZW50U2VsZWN0KGN1cnJlbnRTZWxlY3QgKyAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2VsZWN0ID4gMCkgc2V0Q3VycmVudFNlbGVjdChjdXJyZW50U2VsZWN0IC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH0sIDEyMDApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uU2Nyb2xsU3RhcnQoKSB7XHJcbiAgICAgICAgc2V0U2Nyb2xsKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uU2Nyb2xsRW5kKCkge1xyXG4gICAgICAgIHNldFNjcm9sbCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1Njcm9sbClcclxuICAgICAgICAgICAgaWYgKHRvdWNoIDwgLTAuNSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3QgPCAzKSBzZXRDdXJyZW50U2VsZWN0KGN1cnJlbnRTZWxlY3QgKyAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b3VjaCA+PSAwLjUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2VsZWN0ID4gMCkgc2V0Q3VycmVudFNlbGVjdChjdXJyZW50U2VsZWN0IC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH0sIFt0b3VjaF0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xyXG4gICAgICAgIHNldEN1cnJlbnRTZWxlY3QoaW5kZXgpO1xyXG4gICAgfTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlT25TY3JvbGwsIGZhbHNlKTtcclxuICAgICAgICBpZiAoc2Nyb2xsQmFyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc2Nyb2xsQmFyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnN0YXJ0JywgaGFuZGxlT25TY3JvbGxTdGFydCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBzY3JvbGxCYXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlT25TY3JvbGxFbmQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZU9uU2Nyb2xsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxCYXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmFyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnN0YXJ0JywgaGFuZGxlT25TY3JvbGxTdGFydCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmFyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZU9uU2Nyb2xsRW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW2N1cnJlbnRTZWxlY3QsIGlzU2Nyb2xsXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4gYmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dmlkZW9cclxuICAgICAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICAgICAgICBsb29wXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHotMCBvYmplY3QtY292ZXIgdy1mdWxsIGgtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdGVyPVwiaHR0cHM6Ly9jZG4uYWthbWFpLnN0ZWFtc3RhdGljLmNvbS9zdGVhbWNvbW11bml0eS9wdWJsaWMvaW1hZ2VzL2l0ZW1zLzEwMzgzMDAvZWM5MDY5OGEzY2ZlMDY5Y2M4NmNmNzA3MDhiODMyMDNhZmMwNjRmZS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uYWthbWFpLnN0ZWFtc3RhdGljLmNvbS9zdGVhbWNvbW11bml0eS9wdWJsaWMvaW1hZ2VzL2l0ZW1zLzEwMzgzMDAvZDE3OTU3Y2U3OTRkYjM0ODM2M2EzM2EyOTc4MmUwNzBlYWQ4OWZiOS53ZWJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInZpZGVvL3dlYm1cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5ha2FtYWkuc3RlYW1zdGF0aWMuY29tL3N0ZWFtY29tbXVuaXR5L3B1YmxpYy9pbWFnZXMvaXRlbXMvMTAzODMwMC85M2IzYzNlYzNhOWViZTBkMGIwNjlmZmViYjY5NWJmYWU0NGZiYmIzLm1wNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ2aWRlby9tcDRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciBoYW5kbGVPbkNsaWNrPXtoYW5kbGVPbkNsaWNrfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoaWRkZW4gYnRuLXNjcm9sbCBsZzpibG9jayBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubGVuZ3RoIC0gMSA9PT0gY3VycmVudFNlbGVjdCA/ICdvcGFjaXR5LTAgdHJhbnNsYXRlLXktZnVsbCcgOiAnb3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCdcclxuICAgICAgICAgICAgICAgICAgICB9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ2hlbGxvJyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU0NST0xMRE9XTlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGlkZGVuIGJ0bi1zY3JvbGwtMiBsZzpibG9jayBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubGVuZ3RoIC0gMSA9PT0gY3VycmVudFNlbGVjdCA/ICdvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wJyA6ICdvcGFjaXR5LTAgdHJhbnNsYXRlLXktZnVsbCdcclxuICAgICAgICAgICAgICAgICAgICB9IGB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU0NST0xMVE9QXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgcmVnaXN0ZXI9e3Njcm9sbEJhcn0gaGFuZGxlT25DbGljaz17aGFuZGxlT25DbGlja30gY3VycmVudFNlbGVjdD17Y3VycmVudFNlbGVjdH0gey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=