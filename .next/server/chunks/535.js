"use strict";
exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 3964:
/***/ ((module) => {


const CONFIG = {
    // profile setting (required)
    profile: {
        name: "olchaeun",
        image: "/avatar.png",
        role: "frontend developer",
        bio: "I develop everything using node.",
        email: "olchaeun@gmail.com",
        linkedin: "morethanmin",
        github: "morethanmin",
        instagram: ""
    },
    projects: [
        {
            name: `todo`,
            href: "https://github.com/morethanmin/morethan-log"
        }
    ],
    // blog setting (required)
    blog: {
        title: "olchaeun-log",
        description: "welcome to olchaeun-log!",
        scheme: "dark"
    },
    // CONFIG configration (required)
    link: "https://olchaeun-blog.vercel.app",
    since: 2022,
    lang: "en-US",
    ogImageGenerateURL: "https://og-image-korean.vercel.app",
    // notion configuration (required)
    notionConfig: {
        pageId: process.env.NOTION_PAGE_ID
    },
    // plugin configuration (optional)
    googleAnalytics: {
        enable: true,
        config: {
            measurementId: "G-YGBTYT3ZSJ" || 0
        }
    },
    googleSearchConsole: {
        enable: true,
        config: {
            siteVerification: "i1qTzdVX4NgKRQgXdl4tdfbcNyOVD2MGl6p7F5ZXLDA" || 0
        }
    },
    naverSearchAdvisor: {
        enable: false,
        config: {
            siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || ""
        }
    },
    utterances: {
        enable: true,
        config: {
            repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
            "issue-term": "og:title",
            label: "\uD83D\uDCAC Utterances"
        }
    },
    cusdis: {
        enable: false,
        config: {
            host: "https://cusdis.com",
            appid: ""
        }
    },
    isProd: process.env.VERCEL_ENV === "production",
    revalidateTime: 21600 * 7
};
module.exports = {
    CONFIG
};


/***/ }),

/***/ 8811:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ Emoji)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var next_font_google_target_css_path_src_components_Emoji_tsx_import_Noto_Color_Emoji_arguments_weight_400_subsets_emoji_fallback_Apple_Color_Emoji_variableName_notoColorEmoji___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9739);
/* harmony import */ var next_font_google_target_css_path_src_components_Emoji_tsx_import_Noto_Color_Emoji_arguments_weight_400_subsets_emoji_fallback_Apple_Color_Emoji_variableName_notoColorEmoji___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_Emoji_tsx_import_Noto_Color_Emoji_arguments_weight_400_subsets_emoji_fallback_Apple_Color_Emoji_variableName_notoColorEmoji___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Emoji = ({ className, children })=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: className,
        css: [
            (next_font_google_target_css_path_src_components_Emoji_tsx_import_Noto_Color_Emoji_arguments_weight_400_subsets_emoji_fallback_Apple_Color_Emoji_variableName_notoColorEmoji___WEBPACK_IMPORTED_MODULE_2___default().style)
        ],
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ queryKey)
/* harmony export */ });
const queryKey = {
    scheme: ()=>[
            "scheme"
        ],
    posts: ()=>[
            "posts"
        ],
    tags: ()=>[
            "tags"
        ],
    categories: ()=>[
            "categories"
        ],
    post: (slug)=>[
            "post",
            slug
        ]
};


/***/ }),

/***/ 4828:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3964);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_constants_queryKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2192);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const useScheme = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    const followsSystemTheme = site_config__WEBPACK_IMPORTED_MODULE_3__.CONFIG.blog.scheme === "system";
    const { data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)({
        queryKey: src_constants_queryKey__WEBPACK_IMPORTED_MODULE_4__/* .queryKey */ .E.scheme(),
        enabled: false,
        initialData: followsSystemTheme ? "dark" : site_config__WEBPACK_IMPORTED_MODULE_3__.CONFIG.blog.scheme
    });
    const setScheme = (scheme)=>{
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.setCookie)("scheme", scheme);
        queryClient.setQueryData(src_constants_queryKey__WEBPACK_IMPORTED_MODULE_4__/* .queryKey */ .E.scheme(), scheme);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!window) return;
        const cachedScheme = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("scheme");
        const defaultScheme = followsSystemTheme ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : data;
        setScheme(cachedScheme || defaultScheme);
    }, []);
    return [
        data,
        setScheme
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScheme);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3964);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_3__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Logo = ()=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledWrapper, {
        href: "/",
        "aria-label": site_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG.blog.title,
        children: site_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG.blog.title
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);
const StyledWrapper = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"])((next_link__WEBPACK_IMPORTED_MODULE_1___default()))``;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8404:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4115);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_1__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const NavBar = ()=>{
    const links = [
        {
            id: 1,
            name: "About",
            to: "/about"
        }
    ];
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledWrapper, {
        className: "",
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: links.map((link)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: link.to,
                        children: link.name
                    })
                }, link.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);
const StyledWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme })=>theme.colors.gray11};
    }
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16:
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
/* harmony import */ var src_hooks_useScheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4828);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_1__, src_components_Emoji__WEBPACK_IMPORTED_MODULE_3__, src_hooks_useScheme__WEBPACK_IMPORTED_MODULE_4__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_1__, src_components_Emoji__WEBPACK_IMPORTED_MODULE_3__, src_hooks_useScheme__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ThemeToggle = ()=>{
    const [scheme, setScheme] = (0,src_hooks_useScheme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const handleClick = ()=>{
        setScheme(scheme === "light" ? "dark" : "light");
    };
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledWrapper, {
        onClick: handleClick,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Emoji__WEBPACK_IMPORTED_MODULE_3__/* .Emoji */ .d, {
            children: scheme === "light" ? "☀️" : "\uD83C\uDF19"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeToggle);
const StyledWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  cursor: pointer;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2000:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8404);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9651);
/* harmony import */ var _ThemeToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4115);
/* harmony import */ var src_styles_zIndexes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7072);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _NavBar__WEBPACK_IMPORTED_MODULE_1__, _Logo__WEBPACK_IMPORTED_MODULE_2__, _ThemeToggle__WEBPACK_IMPORTED_MODULE_3__, _emotion_styled__WEBPACK_IMPORTED_MODULE_4__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _NavBar__WEBPACK_IMPORTED_MODULE_1__, _Logo__WEBPACK_IMPORTED_MODULE_2__, _ThemeToggle__WEBPACK_IMPORTED_MODULE_3__, _emotion_styled__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Header = ({ fullWidth })=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledWrapper, {
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            "data-full-width": fullWidth,
            className: "container",
            children: [
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "nav",
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeToggle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);
const StyledWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  z-index: ${src_styles_zIndexes__WEBPACK_IMPORTED_MODULE_5__/* .zIndexes */ .U.header};
  position: sticky;
  top: 0;
  background-color: ${({ theme })=>theme.colors.gray2};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  .container {
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    height: 3rem;
    margin: 0 auto;
    &[data-full-width="true"] {
      @media (min-width: 768px) {
        padding-left: 6rem;
        padding-right: 6rem;
      }
    }
    .nav {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1900:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3964);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Scripts = ()=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: site_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG?.googleAnalytics?.enable === true && /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: `https://www.googletagmanager.com/gtag/js?id=${site_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG.googleAnalytics.config.measurementId}`
                }),
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                    strategy: "lazyOnload",
                    id: "ga",
                    children: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG.googleAnalytics.config.measurementId}', {
              page_path: window.location.pathname,
            });`
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scripts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Global)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3139);
/* harmony import */ var src_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2621);
/* harmony import */ var src_assets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_assets__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_1__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const Global = ()=>{
    const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
        styles: _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
        body {
          margin: 0;
          padding: 0;
          color: ${theme.colors.gray12};
          background-color: ${theme.colors.gray2};
          font-family: ${(src_assets__WEBPACK_IMPORTED_MODULE_2___default().style).fontFamily};
          font-weight: ${(src_assets__WEBPACK_IMPORTED_MODULE_2___default().style).fontWeight};
          font-style: ${(src_assets__WEBPACK_IMPORTED_MODULE_2___default().style).fontStyle};
        }

        * {
          color-scheme: ${theme.scheme};
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-weight: inherit;
          font-style: inherit;
        }

        a {
          all: unset;
          cursor: pointer;
        }

        ul {
          padding: 0;
        }

        // init button
        button {
          all: unset;
          cursor: pointer;
        }

        // init input
        input {
          all: unset;
          box-sizing: border-box;
        }

        // init textarea
        textarea {
          border: none;
          background-color: transparent;
          font-family: inherit;
          padding: 0;
          outline: none;
          resize: none;
          color: inherit;
        }

        hr {
          width: 100%;
          border: none;
          margin: 0;
          border-top: 1px solid ${theme.colors.gray6};
        }
      `
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3139);
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5476);
/* harmony import */ var src_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4258);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_1__, _Global__WEBPACK_IMPORTED_MODULE_2__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_react__WEBPACK_IMPORTED_MODULE_1__, _Global__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const ThemeProvider = ({ scheme, children })=>{
    const theme = (0,src_styles__WEBPACK_IMPORTED_MODULE_3__/* .createTheme */ .jG)({
        scheme
    });
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Global__WEBPACK_IMPORTED_MODULE_2__/* .Global */ .x, {}),
            children
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1772);
/* harmony import */ var src_hooks_useScheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4828);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2000);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4115);
/* harmony import */ var src_layouts_RootLayout_Scripts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1900);
/* harmony import */ var _useGtagEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3659);
/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(391);
/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_prism__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_markup_templating_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4899);
/* harmony import */ var prismjs_components_prism_markup_templating_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup_templating_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_markup_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9545);
/* harmony import */ var prismjs_components_prism_markup_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_bash_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9347);
/* harmony import */ var prismjs_components_prism_bash_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_components_prism_c_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7632);
/* harmony import */ var prismjs_components_prism_c_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_c_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prismjs_components_prism_cpp_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7909);
/* harmony import */ var prismjs_components_prism_cpp_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_cpp_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prismjs_components_prism_csharp_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4800);
/* harmony import */ var prismjs_components_prism_csharp_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_csharp_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prismjs_components_prism_docker_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(615);
/* harmony import */ var prismjs_components_prism_docker_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_docker_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prismjs_components_prism_java_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4602);
/* harmony import */ var prismjs_components_prism_java_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_java_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prismjs_components_prism_js_templates_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5070);
/* harmony import */ var prismjs_components_prism_js_templates_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_js_templates_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var prismjs_components_prism_coffeescript_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8568);
/* harmony import */ var prismjs_components_prism_coffeescript_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_coffeescript_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var prismjs_components_prism_diff_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9734);
/* harmony import */ var prismjs_components_prism_diff_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_diff_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var prismjs_components_prism_git_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5014);
/* harmony import */ var prismjs_components_prism_git_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_git_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var prismjs_components_prism_go_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5478);
/* harmony import */ var prismjs_components_prism_go_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_go_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var prismjs_components_prism_kotlin_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2993);
/* harmony import */ var prismjs_components_prism_kotlin_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_kotlin_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var prismjs_components_prism_graphql_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2615);
/* harmony import */ var prismjs_components_prism_graphql_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_graphql_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var prismjs_components_prism_handlebars_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1126);
/* harmony import */ var prismjs_components_prism_handlebars_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_handlebars_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var prismjs_components_prism_less_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(4962);
/* harmony import */ var prismjs_components_prism_less_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_less_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var prismjs_components_prism_makefile_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(9351);
/* harmony import */ var prismjs_components_prism_makefile_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_makefile_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var prismjs_components_prism_markdown_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(6772);
/* harmony import */ var prismjs_components_prism_markdown_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markdown_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var prismjs_components_prism_objectivec_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(5507);
/* harmony import */ var prismjs_components_prism_objectivec_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_objectivec_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var prismjs_components_prism_ocaml_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(3786);
/* harmony import */ var prismjs_components_prism_ocaml_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_ocaml_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var prismjs_components_prism_python_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(712);
/* harmony import */ var prismjs_components_prism_python_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_python_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var prismjs_components_prism_reason_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(1508);
/* harmony import */ var prismjs_components_prism_reason_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_reason_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var prismjs_components_prism_rust_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(8352);
/* harmony import */ var prismjs_components_prism_rust_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_rust_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var prismjs_components_prism_sass_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(1465);
/* harmony import */ var prismjs_components_prism_sass_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var prismjs_components_prism_scss_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(6819);
/* harmony import */ var prismjs_components_prism_scss_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var prismjs_components_prism_solidity_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(1360);
/* harmony import */ var prismjs_components_prism_solidity_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_solidity_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var prismjs_components_prism_sql_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(646);
/* harmony import */ var prismjs_components_prism_sql_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sql_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var prismjs_components_prism_stylus_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(7449);
/* harmony import */ var prismjs_components_prism_stylus_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_stylus_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var prismjs_components_prism_swift_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(9815);
/* harmony import */ var prismjs_components_prism_swift_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_swift_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var prismjs_components_prism_wasm_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(1742);
/* harmony import */ var prismjs_components_prism_wasm_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_wasm_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var prismjs_components_prism_yaml_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(5019);
/* harmony import */ var prismjs_components_prism_yaml_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_yaml_js__WEBPACK_IMPORTED_MODULE_40__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__, src_hooks_useScheme__WEBPACK_IMPORTED_MODULE_3__, _Header__WEBPACK_IMPORTED_MODULE_4__, _emotion_styled__WEBPACK_IMPORTED_MODULE_5__, src_layouts_RootLayout_Scripts__WEBPACK_IMPORTED_MODULE_6__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__, src_hooks_useScheme__WEBPACK_IMPORTED_MODULE_3__, _Header__WEBPACK_IMPORTED_MODULE_4__, _emotion_styled__WEBPACK_IMPORTED_MODULE_5__, src_layouts_RootLayout_Scripts__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










































const RootLayout = ({ children })=>{
    const [scheme] = (0,src_hooks_useScheme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    (0,_useGtagEffect__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        prismjs_prism__WEBPACK_IMPORTED_MODULE_8___default().highlightAll();
    }, []);
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__/* .ThemeProvider */ .f, {
        scheme: scheme,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_layouts_RootLayout_Scripts__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                fullWidth: false
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledMain, {
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootLayout);
const StyledMain = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].main`
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  padding: 0 1rem;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ RootLayout_useGtagEffect)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./site.config.js
var site_config = __webpack_require__(3964);
;// CONCATENATED MODULE: ./src/libs/gtag.ts

const GA_TRACKING_ID = site_config.CONFIG.googleAnalytics.config.measurementId;
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url)=>{
    if (true) return;
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const gtag_event = ({ action, category, label, value })=>{
    if (true) return;
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};

;// CONCATENATED MODULE: ./src/layouts/RootLayout/useGtagEffect.ts




const useGtagEffect = ()=>{
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (!(site_config.CONFIG.isProd && site_config.CONFIG?.googleAnalytics?.enable)) return;
        const handleRouteChange = (url)=>{
            pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return null;
};
/* harmony default export */ const RootLayout_useGtagEffect = (useGtagEffect);


/***/ }),

/***/ 8557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* reexport safe */ _RootLayout__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _RootLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4920);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RootLayout__WEBPACK_IMPORTED_MODULE_0__]);
_RootLayout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ queryClient)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
/* harmony import */ var src_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8557);
/* harmony import */ var src_libs_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3917);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, src_layouts__WEBPACK_IMPORTED_MODULE_2__, src_libs_react_query__WEBPACK_IMPORTED_MODULE_3__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, src_layouts__WEBPACK_IMPORTED_MODULE_2__, src_libs_react_query__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function App({ Component, pageProps }) {
    // 타입 단언으로 Component를 JSX 요소로 처리할 수 있게 함
    const getLayout = Component.getLayout ?? ((page)=>page);
    const ComponentWithProps = ()=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        });
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {
        client: src_libs_react_query__WEBPACK_IMPORTED_MODULE_3__/* .queryClient */ .E,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.Hydrate, {
            state: pageProps.dehydratedState,
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_layouts__WEBPACK_IMPORTED_MODULE_2__/* .RootLayout */ .e, {
                children: getLayout(/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ComponentWithProps, {}))
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3104:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3964);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
    render() {
        return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            lang: site_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG.lang,
            children: [
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "192x192",
                            href: "/apple-touch-icon.png"
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "alternate",
                            type: "application/rss+xml",
                            title: "RSS 2.0",
                            href: "/feed"
                        }),
                        site_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG.googleSearchConsole.enable === true && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "google-site-verification",
                                content: site_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG.googleSearchConsole.config.siteVerification
                            })
                        }),
                        site_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG.naverSearchAdvisor.enable === true && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "naver-site-verification",
                                content: site_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG.naverSearchAdvisor.config.siteVerification
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O9: () => (/* reexport */ colors),
  jG: () => (/* reexport */ createTheme)
});

// UNUSED EXPORTS: respondMobile, variables

// EXTERNAL MODULE: external "@radix-ui/colors"
var colors_ = __webpack_require__(6366);
;// CONCATENATED MODULE: ./src/styles/colors.ts

const colors = {
    light: {
        ...colors_.indigo,
        ...colors_.gray,
        ...colors_.blue,
        ...colors_.red,
        ...colors_.green
    },
    dark: {
        ...colors_.indigoDark,
        ...colors_.grayDark,
        ...colors_.blueDark,
        ...colors_.redDark,
        ...colors_.greenDark
    }
};

;// CONCATENATED MODULE: ./src/styles/variables.ts
const variables_variables = {
    breakpoint: 960,
    headerHeight: 56,
    paddingLg: 24,
    paddingMd: 20,
    widthLg: 1480,
    widthMd: 1280
};

// EXTERNAL MODULE: ./src/styles/zIndexes.ts
var zIndexes = __webpack_require__(7072);
;// CONCATENATED MODULE: ./src/styles/theme.ts



const createTheme = (options)=>({
        scheme: options.scheme,
        colors: colors[options.scheme],
        variables: variables_variables,
        zIndexes: zIndexes/* zIndexes */.U
    });

;// CONCATENATED MODULE: ./src/styles/media.ts

const respondMobile = (/* unused pure expression or super */ null && (`@media (max-width: ${variables.breakpoint}px)`));

;// CONCATENATED MODULE: ./src/styles/index.ts






/***/ }),

/***/ 7072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ zIndexes)
/* harmony export */ });
const zIndexes = {
    dialog: 32,
    dropdownMenu: 36,
    header: 30,
    hoverCard: 28,
    dialogHoverCard: 34
};


/***/ })

};
;