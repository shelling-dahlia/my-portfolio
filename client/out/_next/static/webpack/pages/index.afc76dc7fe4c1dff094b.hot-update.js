webpackHotUpdate_N_E("pages/index",{

/***/ "./components/contactSection.tsx":
/*!***************************************!*\
  !*** ./components/contactSection.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _common_hooks_useFormError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/hooks/useFormError */ "./common/hooks/useFormError.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _store_api_thunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/api/thunk */ "./store/api/thunk.ts");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading */ "./components/loading.tsx");


var _jsxFileName = "E:\\portfolio\\client\\components\\contactSection.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];







var defaultValues = {
  email: '',
  message: '',
  name: ''
};

var ContactSection = function ContactSection() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
    defaultValues: defaultValues
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      reset = _useForm.reset;

  var apiState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.api;
  });
  var errors = Object(_common_hooks_useFormError__WEBPACK_IMPORTED_MODULE_4__["default"])(defaultValues);

  var handleOnSubmit = function handleOnSubmit(data) {
    _store__WEBPACK_IMPORTED_MODULE_5__["store"].dispatch(_store_api_thunk__WEBPACK_IMPORTED_MODULE_6__["commonThunk"].sendSupport(data));
  };

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (apiState.message) {
      reset(defaultValues);
    }
  }, [apiState.message]);
  return __jsx("div", {
    className: "mx-auto rounded-md bg-gradient-to-bl from-green-600 via-red-600 md:w-contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(handleOnSubmit),
    className: "px-2 py-16 space-y-4 transform bg-white rounded-md md:px-8 md:-translate-x-4 md:translate-y-4 bg-opacity-80 md:w-contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "mb-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-4xl font-semibold text-center text-gray-900",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "Get In Touch"), __jsx("p", {
    className: "text-center text-gray-500 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "Thank For Your Message, I will response your message as soon as possible.")), Boolean(apiState.message.length) && __jsx("p", {
    className: "text-green-600 fade-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 54
    }
  }, apiState.message), __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block font-medium text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "Full Name"), __jsx("input", Object(E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "block w-full outline-none rounded-sm bg-tuna py-2 px-1.5 border border-gray-600 border-opacity-70"
  }, register('name'), {
    placeholder: "Nhan...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  })), Boolean(errors.name.length) && __jsx("p", {
    className: "text-red-500 fade-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 53
    }
  }, "Full Name ", errors.message)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block font-medium text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "Email"), __jsx("input", Object(E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "email",
    className: "block w-full outline-none rounded-sm bg-tuna py-2 px-1.5 border border-gray-600 border-opacity-70"
  }, register('email'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  })), Boolean(errors.email.length) && __jsx("p", {
    className: "text-red-500 fade-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 54
    }
  }, "Email ", errors.email)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block font-medium text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, "Your Message"), __jsx("textarea", Object(E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "block w-full outline-none rounded-sm bg-tuna py-2 px-1.5  text-mercury border border-gray-600 border-opacity-70",
    placeholder: "Message..."
  }, register('message'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  })), Boolean(errors.message.length) && __jsx("p", {
    className: "text-red-500 fade-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 56
    }
  }, "Message ", errors.message)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, apiState.isLoading && __jsx(_loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 44
    }
  }), !apiState.isLoading && __jsx("button", {
    className: "inline-block p-2 font-semibold duration-300 bg-red-500 rounded-sm hover:bg-red-600 text-coolGray-50 focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, "Submit Message"))));
};

_s(ContactSection, "qTE2/pK5KhURZmANr158lgTS/mM=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], _common_hooks_useFormError__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = ContactSection;
/* harmony default export */ __webpack_exports__["default"] = (ContactSection);

var _c;

$RefreshReg$(_c, "ContactSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0U2VjdGlvbi50c3giXSwibmFtZXMiOlsiZGVmYXVsdFZhbHVlcyIsImVtYWlsIiwibWVzc2FnZSIsIm5hbWUiLCJDb250YWN0U2VjdGlvbiIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwiYXBpU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXBpIiwiZXJyb3JzIiwidXNlRm9ybUVycm9yIiwiaGFuZGxlT25TdWJtaXQiLCJkYXRhIiwic3RvcmUiLCJkaXNwYXRjaCIsImNvbW1vblRodW5rIiwic2VuZFN1cHBvcnQiLCJSZWFjdCIsIkJvb2xlYW4iLCJsZW5ndGgiLCJpc0xvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUUEsSUFBTUEsYUFBMEIsR0FBRztBQUMvQkMsT0FBSyxFQUFFLEVBRHdCO0FBRS9CQyxTQUFPLEVBQUUsRUFGc0I7QUFHL0JDLE1BQUksRUFBRTtBQUh5QixDQUFuQzs7QUFPQSxJQUFNQyxjQUFxRCxHQUFHLFNBQXhEQSxjQUF3RCxHQUFNO0FBQUE7O0FBQUEsaUJBQ3RCQywrREFBTyxDQUFjO0FBQUVMLGlCQUFhLEVBQWJBO0FBQUYsR0FBZCxDQURlO0FBQUEsTUFDeERNLFFBRHdELFlBQ3hEQSxRQUR3RDtBQUFBLE1BQzlDQyxZQUQ4QyxZQUM5Q0EsWUFEOEM7QUFBQSxNQUNoQ0MsS0FEZ0MsWUFDaENBLEtBRGdDOztBQUVoRSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQXNCLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLEdBQWpCO0FBQUEsR0FBdEIsQ0FBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDBFQUFZLENBQWNkLGFBQWQsQ0FBM0I7O0FBQ0EsTUFBTWUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixD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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE2Q1YsTUFBTSxDQUFDWCxPQUFwRCxDQVB2QyxDQTNCSixFQW9DSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tPLFFBQVEsQ0FBQ2UsU0FBVCxJQUFzQixNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEM0IsRUFFSyxDQUFDZixRQUFRLENBQUNlLFNBQVYsSUFDRztBQUFRLGFBQVMsRUFBQyx3SEFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIUixDQXBDSixDQURKLENBREo7QUFpREgsQ0EvREQ7O0dBQU1wQixjO1VBQ3dDQyx1RCxFQUN6QkssdUQsRUFDRkksa0U7OztLQUhiVixjO0FBaUVTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZmM3NmRjN2ZlNGMxZGZmMDk0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwaVN0YXRlIH0gZnJvbSAnLi4vYXBpL2FwaS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgdXNlRm9ybUVycm9yIGZyb20gJy4uL2NvbW1vbi9ob29rcy91c2VGb3JtRXJyb3InO1xyXG5pbXBvcnQgeyBSb290U3RhdGUsIHN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBjb21tb25UaHVuayB9IGZyb20gJy4uL3N0b3JlL2FwaS90aHVuayc7XHJcbmltcG9ydCBXYXZlTG9hZGluZyBmcm9tICcuL2xvYWRpbmcnO1xyXG5cclxuaW50ZXJmYWNlIENvbnRhY3RGb3JtIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZXM6IENvbnRhY3RGb3JtID0ge1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgbWVzc2FnZTogJycsXHJcbiAgICBuYW1lOiAnJyxcclxufTtcclxuZXhwb3J0IGludGVyZmFjZSBDb250YWN0UHJvcHMge31cclxuXHJcbmNvbnN0IENvbnRhY3RTZWN0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxDb250YWN0UHJvcHM+ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCByZXNldCB9ID0gdXNlRm9ybTxDb250YWN0Rm9ybT4oeyBkZWZhdWx0VmFsdWVzIH0pO1xyXG4gICAgY29uc3QgYXBpU3RhdGUgPSB1c2VTZWxlY3RvcjxSb290U3RhdGUsIEFwaVN0YXRlPigoc3RhdGUpID0+IHN0YXRlLmFwaSk7XHJcbiAgICBjb25zdCBlcnJvcnMgPSB1c2VGb3JtRXJyb3I8Q29udGFjdEZvcm0+KGRlZmF1bHRWYWx1ZXMpO1xyXG4gICAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAoZGF0YTogQ29udGFjdEZvcm0pID0+IHtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChjb21tb25UaHVuay5zZW5kU3VwcG9ydChkYXRhKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFwaVN0YXRlLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmVzZXQoZGVmYXVsdFZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FwaVN0YXRlLm1lc3NhZ2VdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byByb3VuZGVkLW1kIGJnLWdyYWRpZW50LXRvLWJsIGZyb20tZ3JlZW4tNjAwIHZpYS1yZWQtNjAwIG1kOnctY29udGFjdFwiPlxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChoYW5kbGVPblN1Ym1pdCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTE2IHNwYWNlLXktNCB0cmFuc2Zvcm0gYmctd2hpdGUgcm91bmRlZC1tZCBtZDpweC04IG1kOi10cmFuc2xhdGUteC00IG1kOnRyYW5zbGF0ZS15LTQgYmctb3BhY2l0eS04MCBtZDp3LWNvbnRhY3RcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktOTAwXCI+R2V0IEluIFRvdWNoPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwIFwiPlRoYW5rIEZvciBZb3VyIE1lc3NhZ2UsIEkgd2lsbCByZXNwb25zZSB5b3VyIG1lc3NhZ2UgYXMgc29vbiBhcyBwb3NzaWJsZS48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtCb29sZWFuKGFwaVN0YXRlLm1lc3NhZ2UubGVuZ3RoKSAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTYwMCBmYWRlLWluXCI+e2FwaVN0YXRlLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDBcIj5GdWxsIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgb3V0bGluZS1ub25lIHJvdW5kZWQtc20gYmctdHVuYSBweS0yIHB4LTEuNSBib3JkZXIgYm9yZGVyLWdyYXktNjAwIGJvcmRlci1vcGFjaXR5LTcwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmhhbi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7Qm9vbGVhbihlcnJvcnMubmFtZS5sZW5ndGgpICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBmYWRlLWluXCI+RnVsbCBOYW1lIHtlcnJvcnMubWVzc2FnZX08L3A+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgb3V0bGluZS1ub25lIHJvdW5kZWQtc20gYmctdHVuYSBweS0yIHB4LTEuNSBib3JkZXIgYm9yZGVyLWdyYXktNjAwIGJvcmRlci1vcGFjaXR5LTcwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge0Jvb2xlYW4oZXJyb3JzLmVtYWlsLmxlbmd0aCkgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGZhZGUtaW5cIj5FbWFpbCB7ZXJyb3JzLmVtYWlsfTwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDBcIj5Zb3VyIE1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgb3V0bGluZS1ub25lIHJvdW5kZWQtc20gYmctdHVuYSBweS0yIHB4LTEuNSAgdGV4dC1tZXJjdXJ5IGJvcmRlciBib3JkZXItZ3JheS02MDAgYm9yZGVyLW9wYWNpdHktNzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2UuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ21lc3NhZ2UnKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICB7Qm9vbGVhbihlcnJvcnMubWVzc2FnZS5sZW5ndGgpICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBmYWRlLWluXCI+TWVzc2FnZSB7ZXJyb3JzLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7YXBpU3RhdGUuaXNMb2FkaW5nICYmIDxXYXZlTG9hZGluZyAvPn1cclxuICAgICAgICAgICAgICAgICAgICB7IWFwaVN0YXRlLmlzTG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHAtMiBmb250LXNlbWlib2xkIGR1cmF0aW9uLTMwMCBiZy1yZWQtNTAwIHJvdW5kZWQtc20gaG92ZXI6YmctcmVkLTYwMCB0ZXh0LWNvb2xHcmF5LTUwIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0IE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFNlY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=