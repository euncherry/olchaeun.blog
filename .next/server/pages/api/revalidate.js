"use strict";
(() => {
var exports = {};
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 743:
/***/ ((module) => {

module.exports = import("notion-client");;

/***/ }),

/***/ 8751:
/***/ ((module) => {

module.exports = import("notion-utils");;

/***/ }),

/***/ 2997:
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

/***/ 6695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* reexport safe */ _notion_client__WEBPACK_IMPORTED_MODULE_0__.J)
/* harmony export */ });
/* harmony import */ var _notion_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(791);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_notion_client__WEBPACK_IMPORTED_MODULE_0__]);
_notion_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6786:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ getPosts)
/* harmony export */ });
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2997);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(743);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8751);
/* harmony import */ var src_libs_utils_notion_getAllPageIds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9849);
/* harmony import */ var src_libs_utils_notion_getPageProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1004);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_client__WEBPACK_IMPORTED_MODULE_1__, notion_utils__WEBPACK_IMPORTED_MODULE_2__, src_libs_utils_notion_getAllPageIds__WEBPACK_IMPORTED_MODULE_3__, src_libs_utils_notion_getPageProperties__WEBPACK_IMPORTED_MODULE_4__]);
([notion_client__WEBPACK_IMPORTED_MODULE_1__, notion_utils__WEBPACK_IMPORTED_MODULE_2__, src_libs_utils_notion_getAllPageIds__WEBPACK_IMPORTED_MODULE_3__, src_libs_utils_notion_getPageProperties__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */ // TODO: react query를 사용해서 처음 불러온 뒤로는 해당데이터만 사용하도록 수정
const getPosts = async ()=>{
    let id = site_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG.notionConfig.pageId;
    const api = new notion_client__WEBPACK_IMPORTED_MODULE_1__.NotionAPI();
    const response = await api.getPage(id);
    id = (0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.idToUuid)(id);
    const collection = Object.values(response.collection)[0]?.value;
    const block = response.block;
    const schema = collection?.schema;
    const rawMetadata = block[id].value;
    // Check Type
    if (rawMetadata?.type !== "collection_view_page" && rawMetadata?.type !== "collection_view") {
        return [];
    } else {
        // Construct Data
        const pageIds = (0,src_libs_utils_notion_getAllPageIds__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(response);
        const data = [];
        for(let i = 0; i < pageIds.length; i++){
            const id = pageIds[i];
            const properties = await (0,src_libs_utils_notion_getPageProperties__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(id, block, schema) || null;
            // Add fullwidth, createdtime to properties
            properties.createdTime = new Date(block[id].value?.created_time).toString();
            properties.fullWidth = (block[id].value?.format)?.page_full_width ?? false;
            data.push(properties);
        }
        // Sort by date
        data.sort((a, b)=>{
            const dateA = new Date(a?.date?.start_date || a.createdTime);
            const dateB = new Date(b?.date?.start_date || b.createdTime);
            return dateB - dateA;
        });
        const posts = data;
        return posts;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 467:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export getRecordMap */
/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_client__WEBPACK_IMPORTED_MODULE_0__]);
notion_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getRecordMap = async (pageId)=>{
    const api = new NotionAPI();
    const recordMap = await api.getPage(pageId);
    return recordMap;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 791:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* reexport safe */ _getPosts__WEBPACK_IMPORTED_MODULE_1__.J)
/* harmony export */ });
/* harmony import */ var _getRecordMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(467);
/* harmony import */ var _getPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getRecordMap__WEBPACK_IMPORTED_MODULE_0__, _getPosts__WEBPACK_IMPORTED_MODULE_1__]);
([_getRecordMap__WEBPACK_IMPORTED_MODULE_0__, _getPosts__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ customMapImageUrl)
/* harmony export */ });
const customMapImageUrl = (url, block)=>{
    if (!url) {
        throw new Error("URL can't be empty");
    }
    if (url.startsWith("data:")) {
        return url;
    }
    // more recent versions of notion don't proxy unsplash images
    if (url.startsWith("https://images.unsplash.com")) {
        return url;
    }
    try {
        const u = new URL(url);
        if (u.pathname.startsWith("/secure.notion-static.com") && u.hostname.endsWith(".amazonaws.com")) {
            if (u.searchParams.has("X-Amz-Credential") && u.searchParams.has("X-Amz-Signature") && u.searchParams.has("X-Amz-Algorithm")) {
                // if the URL is already signed, then use it as-is
                url = u.origin + u.pathname;
            }
        }
    } catch  {
    // ignore invalid urls
    }
    if (url.startsWith("/images")) {
        url = `https://www.notion.so${url}`;
    }
    url = `https://www.notion.so${url.startsWith("/image") ? url : `/image/${encodeURIComponent(url)}`}`;
    const notionImageUrlV2 = new URL(url);
    let table = block.parent_table === "space" ? "block" : block.parent_table;
    if (table === "collection" || table === "team") {
        table = "block";
    }
    notionImageUrlV2.searchParams.set("table", table);
    notionImageUrlV2.searchParams.set("id", block.id);
    notionImageUrlV2.searchParams.set("cache", "v2");
    url = notionImageUrlV2.toString();
    return url;
};


/***/ }),

/***/ 9849:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getAllPageIds)
/* harmony export */ });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8751);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_0__]);
notion_utils__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getAllPageIds(response, viewId) {
    const collectionQuery = response.collection_query;
    const views = Object.values(collectionQuery)[0];
    let pageIds = [];
    if (viewId) {
        const vId = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.idToUuid)(viewId);
        pageIds = views[vId]?.blockIds;
    } else {
        const pageSet = new Set();
        // * type not exist
        Object.values(views).forEach((view)=>{
            view?.collection_group_results?.blockIds?.forEach((id)=>pageSet.add(id));
        });
        pageIds = [
            ...pageSet
        ];
    }
    return pageIds;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getPageProperties)
/* harmony export */ });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8751);
/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(743);
/* harmony import */ var _customMapImageUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3795);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_0__, notion_client__WEBPACK_IMPORTED_MODULE_1__]);
([notion_utils__WEBPACK_IMPORTED_MODULE_0__, notion_client__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getPageProperties(id, block, schema) {
    const api = new notion_client__WEBPACK_IMPORTED_MODULE_1__.NotionAPI();
    const rawProperties = Object.entries(block?.[id]?.value?.properties || []);
    const excludeProperties = [
        "date",
        "select",
        "multi_select",
        "person",
        "file"
    ];
    const properties = {};
    for(let i = 0; i < rawProperties.length; i++){
        const [key, val] = rawProperties[i];
        properties.id = id;
        if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
            properties[schema[key].name] = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.getTextContent)(val);
        } else {
            switch(schema[key]?.type){
                case "file":
                    {
                        try {
                            const Block = block?.[id].value;
                            const url = val[0][1][0][1];
                            const newurl = (0,_customMapImageUrl__WEBPACK_IMPORTED_MODULE_2__/* .customMapImageUrl */ .T)(url, Block);
                            properties[schema[key].name] = newurl;
                        } catch (error) {
                            properties[schema[key].name] = undefined;
                        }
                        break;
                    }
                case "date":
                    {
                        const dateProperty = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.getDateValue)(val);
                        delete dateProperty.type;
                        properties[schema[key].name] = dateProperty;
                        break;
                    }
                case "select":
                    {
                        const selects = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.getTextContent)(val);
                        if (selects[0]?.length) {
                            properties[schema[key].name] = selects.split(",");
                        }
                        break;
                    }
                case "multi_select":
                    {
                        const selects = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.getTextContent)(val);
                        if (selects[0]?.length) {
                            properties[schema[key].name] = selects.split(",");
                        }
                        break;
                    }
                case "person":
                    {
                        const rawUsers = val.flat();
                        const users = [];
                        for(let i = 0; i < rawUsers.length; i++){
                            if (rawUsers[i][0][1]) {
                                const userId = rawUsers[i][0];
                                const res = await api.getUsers(userId);
                                const resValue = res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value;
                                const user = {
                                    id: resValue?.id,
                                    name: resValue?.name || `${resValue?.family_name}${resValue?.given_name}` || undefined,
                                    profile_photo: resValue?.profile_photo || null
                                };
                                users.push(user);
                            }
                        }
                        properties[schema[key].name] = users;
                        break;
                    }
                default:
                    break;
            }
        }
    }
    return properties;
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5716:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis__WEBPACK_IMPORTED_MODULE_0__]);
_apis__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// for all path revalidate, https://<your-site.com>/api/revalidate?secret=<token>
// for specific path revalidate, https://<your-site.com>/api/revalidate?secret=<token>&path=<path>
// example, https://<your-site.com>/api/revalidate?secret=이것은_키&path=feed
async function handler(req, res) {
    const { secret, path } = req.query;
    if (secret !== process.env.TOKEN_FOR_REVALIDATE) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
    try {
        if (path && typeof path === "string") {
            await res.revalidate(path);
        } else {
            const posts = await (0,_apis__WEBPACK_IMPORTED_MODULE_0__/* .getPosts */ .J)();
            const revalidateRequests = posts.map((row)=>res.revalidate(`/${row.slug}`));
            await Promise.all(revalidateRequests);
        }
        res.json({
            revalidated: true
        });
    } catch (err) {
        return res.status(500).send("Error revalidating");
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5716));
module.exports = __webpack_exports__;

})();