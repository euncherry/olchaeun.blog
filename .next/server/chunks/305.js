"use strict";
exports.id = 305;
exports.ids = [305];
exports.modules = {

/***/ 6305:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_Emoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8811);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_1__, src_components_Emoji__WEBPACK_IMPORTED_MODULE_3__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_1__, src_components_Emoji__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const CustomError = ()=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledWrapper, {
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "wrapper",
            children: [
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "top",
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "4"
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Emoji__WEBPACK_IMPORTED_MODULE_3__/* .Emoji */ .d, {
                            children: "\uD83E\uDD14"
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "4"
                        })
                    ]
                }),
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text",
                    children: "Post not found"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomError);
const StyledWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  max-width: 56rem;
  .wrapper {
    display: flex;
    padding-top: 5rem;
    padding-bottom: 5rem;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    > .top {
      display: flex;
      align-items: center;
      font-size: 3.75rem;
      line-height: 1;
    }
    > .text {
      font-size: 1.875rem;
      line-height: 2.25rem;
      color: ${({ theme })=>theme.colors.gray11};
    }
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;