"use strict";
exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 7226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* reexport safe */ _notion_client__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   J: () => (/* reexport safe */ _notion_client__WEBPACK_IMPORTED_MODULE_0__.J)
/* harmony export */ });
/* harmony import */ var _notion_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3580);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_notion_client__WEBPACK_IMPORTED_MODULE_0__]);
_notion_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ getRecordMap)
/* harmony export */ });
/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_client__WEBPACK_IMPORTED_MODULE_0__]);
notion_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getRecordMap = async (pageId)=>{
    const api = new notion_client__WEBPACK_IMPORTED_MODULE_0__.NotionAPI();
    const recordMap = await api.getPage(pageId);
    return recordMap;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* reexport safe */ _getRecordMap__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   J: () => (/* reexport safe */ _getPosts__WEBPACK_IMPORTED_MODULE_1__.J)
/* harmony export */ });
/* harmony import */ var _getRecordMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8634);
/* harmony import */ var _getPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4029);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getRecordMap__WEBPACK_IMPORTED_MODULE_0__, _getPosts__WEBPACK_IMPORTED_MODULE_1__]);
([_getRecordMap__WEBPACK_IMPORTED_MODULE_0__, _getPosts__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ COLOR_SET)
/* harmony export */ });
const COLOR_SET = {
    0: "rgb(186 230 253)",
    1: "rgb(254 205 211)",
    2: "rgb(245 208 254)",
    3: "rgb(221 214 254)",
    4: "rgb(191 219 254)",
    5: "rgb(204 251 241)",
    6: "rgb(187 247 208)",
    7: "rgb(254 249 195)",
    8: "rgb(186 230 253)",
    9: "rgb(254 202 202)",
    A: "rgb(231 229 228)",
    B: "rgb(226 232 240)",
    C: "rgb(252 231 243)",
    D: "rgb(233 213 255)",
    E: "rgb(199 210 254)",
    F: "rgb(209 250 229)"
};


/***/ }),

/***/ 5511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getColorClassByName */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8229);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4115);
/* harmony import */ var src_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4258);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_4__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const getColorClassByName = (name)=>{
    try {
        let sum = 0;
        name.split("").forEach((alphabet)=>sum = sum + alphabet.charCodeAt(0));
        const colorKey = sum.toString(16)?.[sum.toString(16).length - 1].toUpperCase();
        return _constants__WEBPACK_IMPORTED_MODULE_3__/* .COLOR_SET */ .p[colorKey];
    } catch  {
        return _constants__WEBPACK_IMPORTED_MODULE_3__/* .COLOR_SET */ .p[0];
    }
};
const Category = ({ readOnly = false, children })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const handleClick = (value)=>{
        if (readOnly) return;
        router.push(`/?category=${value}`);
    };
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledWrapper, {
        onClick: ()=>handleClick(children),
        css: {
            backgroundColor: getColorClassByName(children),
            cursor: readOnly ? "default" : "pointer"
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);
const StyledWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 9999px;
  width: fit-content;
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0.9;
  color: ${src_styles__WEBPACK_IMPORTED_MODULE_5__/* .colors */ .O9.dark.gray1};
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5986:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4115);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_1__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Tag = ({ children })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleClick = (value)=>{
        router.push(`/?tag=${value}`);
    };
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledWrapper, {
        onClick: ()=>handleClick(children),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);
const StyledWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 50px;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: ${({ theme })=>theme.colors.gray10};
  background-color: ${({ theme })=>theme.colors.gray5};
  cursor: pointer;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(date, local) {
    const d = new Date(date);
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    const res = d.toLocaleDateString(local, options);
    return res;
}


/***/ }),

/***/ 1483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* reexport */ filterPosts),
  P: () => (/* reexport */ getAllSelectItemsFromPosts)
});

;// CONCATENATED MODULE: ./src/libs/utils/notion/getAllSelectItemsFromPosts.ts
function getAllSelectItemsFromPosts(key, posts) {
    const selectedPosts = posts.filter((post)=>post?.[key]);
    const items = [
        ...selectedPosts.map((p)=>p[key]).flat()
    ];
    const itemObj = {};
    items.forEach((item)=>{
        if (!item) return;
        if (item in itemObj) {
            itemObj[item]++;
        } else {
            itemObj[item] = 1;
        }
    });
    return itemObj;
}

;// CONCATENATED MODULE: ./src/libs/utils/notion/filterPosts.ts
const initialOption = {
    acceptStatus: [
        "Public"
    ],
    acceptType: [
        "Post"
    ]
};
const current = new Date();
const tomorrow = new Date(current);
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);
function filterPosts(posts, options = initialOption) {
    const { acceptStatus = [
        "Public"
    ], acceptType = [
        "Post"
    ] } = options;
    const filteredPosts = posts// filter data
    .filter((post)=>{
        const postDate = new Date(post?.date?.start_date || post.createdTime);
        if (!post.title || !post.slug || postDate > tomorrow) return false;
        return true;
    })// filter status
    .filter((post)=>{
        const postStatus = post.status[0];
        return acceptStatus.includes(postStatus);
    })// filter type
    .filter((post)=>{
        const postType = post.type[0];
        return acceptType.includes(postType);
    });
    return filteredPosts;
}

;// CONCATENATED MODULE: ./src/libs/utils/notion/index.ts




/***/ })

};
;