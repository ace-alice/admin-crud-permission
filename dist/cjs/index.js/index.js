'use strict';

var vue = require('vue');
var pinia = require('pinia');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var useRolesStore = pinia.defineStore('roles', function () {
    var roles = vue.ref([]);
    function initRoles(roleList) {
        roles.value = roleList;
    }
    return { roles: roles, initRoles: initRoles };
});

var Crudmsg;
(function (Crudmsg) {
    Crudmsg[Crudmsg["SubmittedSuccessfully"] = 0] = "SubmittedSuccessfully";
    Crudmsg[Crudmsg["AddSuccessfully"] = 1] = "AddSuccessfully";
    Crudmsg[Crudmsg["EditSuccessfully"] = 2] = "EditSuccessfully";
    Crudmsg[Crudmsg["DeleteSuccessfully"] = 3] = "DeleteSuccessfully";
    Crudmsg[Crudmsg["RecallSuccessfully"] = 4] = "RecallSuccessfully";
    Crudmsg[Crudmsg["BaseHandleSuccessfully"] = 5] = "BaseHandleSuccessfully";
})(Crudmsg || (Crudmsg = {}));

/**
 * CRUD钩子
 */
var HOOK = {
    /** 重置 - 之前 */
    beforeReset: 'beforeCrudReset',
    /** 重置 - 之后 */
    afterReset: 'afterCrudReset',
    /** 刷新 - 之前 */
    beforeRefresh: 'beforeCrudRefresh',
    /** 刷新 - 之后 */
    afterRefresh: 'afterCrudRefresh',
    /** 删除 - 之前 */
    beforeDelete: 'beforeCrudDelete',
    /** 删除 - 之后 */
    afterDelete: 'afterCrudDelete',
    /** 删除取消 - 之前 */
    beforeDeleteCancel: 'beforeCrudDeleteCancel',
    /** 删除取消 - 之后 */
    afterDeleteCancel: 'afterCrudDeleteCancel',
    /** 撤回 - 之前 */
    beforeRecall: 'beforeCrudRecall',
    /** 撤回 - 之后 */
    afterRecall: 'afterCrudRecall',
    /** 撤回取消 - 之前 */
    beforeRecallCancel: 'beforeCrudRecallCancel',
    /** 撤回取消 - 之后 */
    afterRecallCancel: 'afterCrudRecallCancel',
    /** 置顶/取消置顶 - 之前 */
    beforeTop: 'beforeCrudTop',
    /** 置顶/取消置顶 - 之后 */
    afterTop: 'afterCrudTop',
    /** 置顶/取消置顶取消 - 之前 */
    beforeTopCancel: 'beforeCrudTopCancel',
    /** 置顶/取消置顶取消 - 之后 */
    afterTopCancel: 'afterCrudTopCancel',
    /** 新建 - 之前 */
    beforeToAdd: 'beforeCrudToAdd',
    /** 新建 - 之后 */
    afterToAdd: 'afterCrudToAdd',
    /** 编辑 - 之前 */
    beforeToEdit: 'beforeCrudToEdit',
    /** 编辑 - 之后 */
    afterToEdit: 'afterCrudToEdit',
    /** 开始 "新建/编辑" - 之前 */
    beforeToCU: 'beforeCrudToCU',
    /** 开始 "新建/编辑" - 之后 */
    afterToCU: 'afterCrudToCU',
    /** "新建/编辑" 验证 - 之前 */
    beforeValidateCU: 'beforeCrudValidateCU',
    /** "新建/编辑" 验证 - 之后 */
    afterValidateCU: 'afterCrudValidateCU',
    /** 添加取消 - 之前 */
    beforeAddCancel: 'beforeCrudAddCancel',
    /** 添加取消 - 之后 */
    afterAddCancel: 'afterCrudAddCancel',
    /** 编辑取消 - 之前 */
    beforeEditCancel: 'beforeCrudEditCancel',
    /** 编辑取消 - 之后 */
    afterEditCancel: 'afterCrudEditCancel',
    /** 提交 - 之前 */
    beforeSubmit: 'beforeCrudSubmitCU',
    /** 提交 - 之后 */
    afterSubmit: 'afterCrudSubmitCU',
    afterAddError: 'afterCrudAddError',
    afterEditError: 'afterCrudEditError',
    dragEnd: 'dragEnd'
};
function callVmHook(hook, form) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                result = true;
                                if (!(hook && typeof hook == 'string')) return [3 /*break*/, 1];
                                resolve(result);
                                return [3 /*break*/, 5];
                            case 1:
                                if (!(hook && typeof hook == 'function')) return [3 /*break*/, 5];
                                _a.label = 2;
                            case 2:
                                _a.trys.push([2, 4, , 5]);
                                return [4 /*yield*/, hook(form)];
                            case 3:
                                result = _a.sent();
                                resolve(result);
                                return [3 /*break*/, 5];
                            case 4:
                                _a.sent();
                                resolve(false);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-async-promise-executor */
// noinspection JSUnusedGlobalSymbols,JSIgnoredPromiseFromCall
/**
 * @description 后台获取的租户权限按钮标识数组
 */
var roles = useRolesStore().roles;
function isHave(Authority) {
    return roles.includes(Authority);
}
/**
 *@description CRUD HOOK方法 包含了基础的 增、删、改、查
 * @param crudOptions 一些可配置的参数
 * @returns crud对象
 */
function CRUD(crudOptions, notification) {
    var keys = Object.keys(crudOptions);
    var hasKey = function (key) {
        return keys.includes(key);
    };
    /**
     *@description 一些权限判断方法
     */
    var crudFindRole = {
        /**
         * @description 只满足一个权限标识
         * @param Authority 权限标识字符串
         */
        only: function (Authority) {
            try {
                // if (roles && roles.length > 0 && roles[0] === '*:*:*') return true;
                return roles.includes(Authority);
            }
            catch (error) {
                console.error(error);
                return false;
            }
        },
        /**
         * @description 满足所有列出的权限标识
         * @param Authoritys 权限标识数组
         */
        all: function (Authoritys) {
            try {
                // if (roles && roles.length > 0 && roles[0] === '*:*:*') return true;
                return Authoritys.every(isHave);
            }
            catch (error) {
                console.error(error);
                return false;
            }
        },
        /**
         * @description 只要满意一个权限即可
         * @param Authoritys 权限标识数组
         */
        once: function (Authoritys) {
            try {
                // if (roles && roles.length > 0 && roles[0] === '*:*:*') return true;
                return Authoritys.some(isHave);
            }
            catch (error) {
                console.error(error);
                return false;
            }
        }
    };
    /**
     * @description 状态标识
     */
    var STATUS = {
        NORMAL: 0,
        PREPARED: 1,
        PROCESSING: 2
    };
    /**
     * @description 结果状态标识
     */
    var NOTIFICATION_TYPE = {
        SUCCESS: 'success',
        WARNING: 'warning',
        INFO: 'info',
        ERROR: 'error'
    };
    /**
     * @description 成功提示语
     */
    var MSG = {
        submit: Crudmsg.SubmittedSuccessfully,
        add: Crudmsg.AddSuccessfully,
        edit: Crudmsg.EditSuccessfully,
        del: Crudmsg.DeleteSuccessfully,
        recall: Crudmsg.RecallSuccessfully,
        top: Crudmsg.BaseHandleSuccessfully
    };
    /**
     * @description 插件标识
     */
    var crudTag = 'default';
    if (hasKey('crudTag')) {
        crudTag = crudOptions.crudTag;
    }
    var crudPermission = vue.reactive({
        add: "".concat(crudTag, "add"),
        edit: "".concat(crudTag, "edit"),
        delete: "".concat(crudTag, "delete"),
        recall: "".concat(crudTag, "recall"),
        top: "".concat(crudTag, "top")
    });
    /**
     * @description 是否加载时请求list接口
     */
    var crudCreateQuery = true;
    if (hasKey('crudCreateQuery')) {
        crudCreateQuery = crudOptions.crudCreateQuery;
    }
    /**
     *  @description 钩子函数
     */
    var crudHook = vue.reactive(Object.assign({}, HOOK));
    /**
     *  @description 数据主键，默认从接口返回数据中取该值存入 crudResData 中
     */
    var crudPrimarykey = vue.ref('id');
    if (hasKey('crudPrimarykey')) {
        crudPrimarykey.value = crudOptions.crudPrimarykey;
    }
    /**
     *  @description 标题（新增和编辑弹窗的title）
     */
    var crudTitle = vue.ref('');
    if (hasKey('crudTitle')) {
        crudTitle.value = crudOptions.crudTitle;
    }
    /**
     *  @description 启用分页查询标识
     */
    var isPageQuery = true;
    if (hasKey('isPageQuery')) {
        isPageQuery = crudOptions.isPageQuery;
    }
    /**
     *  @description 响应数据
     */
    var crudResData = vue.reactive({});
    if (hasKey('crudDelKeys')) {
        crudOptions.crudDelKeys;
    }
    /**
     *  @description 表格多选时的已选项
     */
    var crudSelections = vue.ref([]);
    /**
     *  @description form表单DOM标识<crudDefaultForm>
     */
    var formKey = vue.ref('id');
    if (hasKey('formKey')) {
        formKey.value = crudOptions.formKey;
    }
    /**
     *  @description form表单DOM标识<crudDefaultForm>
     */
    var crudDefaultFormRef = vue.ref();
    /**
     *  @description 表单数据 （从表格获取，提交时使用）
     */
    var crudForm = vue.reactive({});
    /**
     *  @description 初始化表单数据 （新增时初始化代理表单数据）
     */
    var defaultForm = vue.reactive({});
    if (hasKey('defaultForm')) {
        defaultForm = Object.assign(defaultForm, crudOptions.defaultForm);
    }
    /**
     *  @description 代理表单数据 （新增和编辑时实际操作的数据）
     */
    var proxyForm = vue.reactive({});
    /**
     *  @description 查询条件
     */
    var crudQuery = vue.reactive({});
    /**
     *  @description 初始化查询条件数据
     */
    var defaultQuery = vue.reactive({});
    if (hasKey('defaultQuery')) {
        defaultQuery = Object.assign(defaultQuery, crudOptions.defaultQuery);
        crudQuery = Object.assign(crudQuery, defaultQuery, crudOptions.defaultQuery);
    }
    /**
     *  @description 暴露给外部的修改 crudQuery 的方法
     * @param setObj 需要修改的查询条件
     */
    function crudSetQueryKey(setObj) {
        crudQuery = Object.assign(crudQuery, setObj);
    }
    /**
     *  @description 暴露给外部的修改 proxyForm 的方法
     * @param setObj 需要修改的查询条件
     */
    function crudSetProxyFormKey(setObj) {
        proxyForm = Object.assign(proxyForm, setObj);
    }
    /**
     * @description 加载延时
     */
    var time = 50;
    /**
     * @description crud接口
     *  @type {*} */
    var crudMethod = vue.reactive({
        list: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve({ code: 200, rows: [{ name: 'crud' }] });
                }, 2000);
            });
        },
        add: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve({ code: 200 });
                }, 2000);
            });
        },
        edit: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve({ code: 200 });
                }, 2000);
            });
        },
        del: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve({ code: 200 });
                }, 2000);
            });
        }
    });
    if (hasKey('crudMethod')) {
        crudMethod = Object.assign(crudMethod, crudOptions.crudMethod);
    }
    /**
     * @description 修改状态的一些接口的统一调用形式
     * @param fnName 需要调用的api的名称
     * @param value 需要传入的数据
     */
    function changeStatus(fnName, value) {
        return new Promise(function (resolve) {
            crudMethod[fnName](value)
                .then(function (result) {
                if (result.code === 1) {
                    editSuccessNotify();
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            })
                .catch(function () {
                resolve(false);
            });
        });
    }
    // 按钮显示控制标识
    /**
     * @description 一些页面显示的按钮及插件
     * @param query 是否显示查询区域
     * @param add 是否显示新增按钮
     */
    var crudOptShow = vue.reactive({
        operate: true,
        query: true,
        pullOrder: false,
        add: false,
        edit: true,
        del: true,
        download: false,
        import: false,
        reset: true,
        autoRefresh: false,
        moreSet: false,
        moreDel: false,
        more: false,
        fullscreen: false,
        formSize: '60%',
        hideFooter: false
    });
    if (hasKey('crudOptShow')) {
        crudOptShow = Object.assign(crudOptShow, crudOptions.crudOptShow);
    }
    var crudData = vue.ref([]);
    // 页面展示key值
    var crudTableParams = 'data';
    if (hasKey('crudTableParams')) {
        crudTableParams = crudOptions.crudTableParams;
    }
    /**
     * @description crud状态（新增、编辑、弹窗标题）
     */
    var crudStatus = vue.reactive({
        // （添加）状态标识
        add: STATUS.NORMAL,
        // （编辑）状态标识
        edit: STATUS.NORMAL,
        get cu() {
            if (this.add === STATUS.NORMAL && this.edit === STATUS.NORMAL) {
                return STATUS.NORMAL;
            }
            else if (this.add === STATUS.PREPARED || this.edit === STATUS.PREPARED) {
                return STATUS.PREPARED;
            }
            else if (this.add === STATUS.PROCESSING || this.edit === STATUS.PROCESSING) {
                return STATUS.PROCESSING;
            }
            throw new Error("wrong crud's cu status");
        },
        // 获得标题
        get title() {
            return this.add > STATUS.NORMAL
                ? "".concat('Add', " ").concat(crudTitle.value)
                : this.edit > STATUS.NORMAL
                    ? "".concat('Edit', " ").concat(crudTitle.value)
                    : '暂无操作';
        }
    });
    vue.provide('crudStatus', vue.computed(function () { return crudStatus; }));
    /**
     * @description 重置crud状态
     */
    function resetCrudStatus() {
        crudDefaultFormRef.value && crudDefaultFormRef.value.resetFields();
        resetForm();
        crudStatus.add = STATUS.NORMAL;
        crudStatus.edit = STATUS.NORMAL;
        addEditLoading.value = false;
    }
    /**
     * @description 设置新增状态值
     * @param status 状态值
     */
    function setAddStatus(status) {
        crudStatus.add = status;
    }
    /**
     * @description 设置编辑状态值
     * @param status 状态值
     */
    function setEditStatus(status) {
        crudStatus.edit = status;
    }
    /**
     * @description 获取新增状态值
     */
    function getAddStatus() {
        return crudStatus.add;
    }
    /**
     * @description 获取编辑状态值
     */
    function getEditStatus() {
        return crudStatus.edit;
    }
    /**
     * @description 获取弹窗标题
     */
    function getTitleStatus() {
        return crudStatus.title;
    }
    /**
     *@description 侧边提示框
     * @param title 提示内容标题
     * @param type 提示类型
     */
    var notify = function (title, type) {
        if (type === void 0) { type = NOTIFICATION_TYPE.INFO; }
        notification(title, type);
    };
    /**
     * @description 提交成功提示
     */
    var submitSuccessNotify = function () {
        notify(MSG.submit, NOTIFICATION_TYPE.SUCCESS);
    };
    /**
     * @description 添加成功提示
     */
    var addSuccessNotify = function () {
        notify(MSG.add, NOTIFICATION_TYPE.SUCCESS);
    };
    /**
     * @description 编辑成功提示
     */
    var editSuccessNotify = function () {
        notify(MSG.edit, NOTIFICATION_TYPE.SUCCESS);
    };
    /**
     * @description 删除成功提示
     */
    var delSuccessNotify = function () {
        notify(MSG.del, NOTIFICATION_TYPE.SUCCESS);
    };
    /**
     * @description 撤回成功提示
     */
    var recallSuccessNotify = function () {
        notify(MSG.recall, NOTIFICATION_TYPE.SUCCESS);
    };
    /**
     * @description 置顶成功成功提示
     */
    var topSuccessNotify = function () {
        notify(MSG.top, NOTIFICATION_TYPE.SUCCESS);
    };
    // 查询的 Loading
    var queryLoading = vue.ref(false);
    // 导出的 Loading
    var downloadLoading = vue.ref(false);
    // 删除的 Loading
    var delLoading = vue.ref(false);
    // 多选删除的 Loading
    var delAllLoading = vue.ref(false);
    var crudPage = vue.reactive({
        page: 1,
        limit: 10,
        count: 0
    });
    function crudTinymce(key, value) {
        proxyForm[key] = value;
    }
    // 重置form表单数据
    var resetForm = function (rowForm) {
        if (rowForm === void 0) { rowForm = {}; }
        crudForm = Object.assign(crudForm, defaultForm, rowForm);
        proxyForm = Object.assign(proxyForm, crudForm);
    };
    // 重置搜索数据
    var resetQuery = function (selfQuery) {
        if (selfQuery === void 0) { selfQuery = {}; }
        Object.keys(crudQuery).forEach(function (key) {
            crudQuery[key] = null;
        });
        crudQuery = Object.assign(crudQuery, defaultQuery, selfQuery);
        crudPage = Object.assign(crudPage, {
            page: 1,
            limit: 10,
            count: 0
        });
    };
    // 设置请求参数
    function setTheQuery(query) {
        Object.assign(crudQuery, query);
    }
    // 设置form参数
    function setTheForm(from) {
        Object.assign(proxyForm, from);
    }
    // 搜索条件处理
    var getQueryParams = function () {
        if (Object.keys(crudQuery).length !== 0) {
            Object.keys(crudQuery).forEach(function (item) {
                if (crudQuery[item] === null || crudQuery[item] === '') {
                    crudQuery[item] = undefined;
                }
            });
        }
        if (!isPageQuery) {
            return __assign({ page: 1, limit: 100000 }, crudQuery);
        }
        else {
            return __assign(__assign({}, crudPage), crudQuery);
        }
    };
    function toQuery(params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        crudPage.page = 1;
                        return [4 /*yield*/, refresh(params)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function reQuery(params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resetQuery();
                        return [4 /*yield*/, refresh(params)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    var statisticsTotal = null;
    /**
     * @return {*}
     * @param params
     */
    function refresh(params) {
        return __awaiter(this, void 0, void 0, function () {
            var loadingFlag, beforeRefreshFlag;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loadingFlag = false;
                        return [4 /*yield*/, callVmHook(crudHook.beforeRefresh)];
                    case 1:
                        beforeRefreshFlag = _a.sent();
                        if (!beforeRefreshFlag) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                var query;
                                return __generator(this, function (_a) {
                                    if (params && params.loading === false) {
                                        queryLoading.value = false;
                                    }
                                    else {
                                        queryLoading.value = !loadingFlag;
                                    }
                                    query = __assign(__assign({}, getQueryParams()), params);
                                    crudMethod
                                        .list(query)
                                        .then(function (result) {
                                        if (+result.code === 1) {
                                            crudResData = Object.assign(crudResData, result.data);
                                            crudPage.count = result.data.count ? result.data.count : result.data.total ? result.data.total : 0;
                                            if (crudTableParams) {
                                                crudData.value = crudResData[crudTableParams];
                                            }
                                            else {
                                                crudData.value = crudResData;
                                            }
                                            // 保存总和数据
                                            // eslint-disable-next-line no-prototype-builtins
                                            result.data.hasOwnProperty('statistics')
                                                ? (statisticsTotal = result.data.statistics)
                                                : (statisticsTotal = null);
                                            callVmHook(crudHook.afterRefresh, crudResData);
                                            resolve(crudData);
                                            setTimeout(function () {
                                                queryLoading.value = false;
                                            }, time);
                                        }
                                        else {
                                            crudResData = {};
                                            reject(result);
                                        }
                                    })
                                        .catch(function (err) {
                                        queryLoading.value = false;
                                        reject(err);
                                    });
                                    return [2 /*return*/];
                                });
                            }); })];
                }
            });
        });
    }
    /**
     *@description 触发新增操作
     * @param {Row} [form]
     * @return {*}
     */
    function toAdd(form) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var beforeAdd, beforeCu;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    resetForm(form);
                                    return [4 /*yield*/, callVmHook(crudHook.beforeToAdd, proxyForm)];
                                case 1:
                                    beforeAdd = _a.sent();
                                    return [4 /*yield*/, callVmHook(crudHook.beforeToCU, proxyForm)];
                                case 2:
                                    beforeCu = _a.sent();
                                    if (!beforeAdd || !beforeCu) {
                                        return [2 /*return*/];
                                    }
                                    setAddStatus(STATUS.PREPARED);
                                    resolve(true);
                                    return [3 /*break*/, 4];
                                case 3:
                                    _a.sent();
                                    resolve(false);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    }
    /**
     *@description 进行新增操作
     * @return {*}
     */
    function doAdd() {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var afterAdd;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 4]);
                                    crudForm = Object.assign(crudForm, proxyForm);
                                    return [4 /*yield*/, callVmHook(crudHook.beforeValidateCU, crudForm)];
                                case 1:
                                    afterAdd = _a.sent();
                                    if (!afterAdd) {
                                        resolve(false);
                                        return [2 /*return*/];
                                    }
                                    crudDefaultFormRef.value &&
                                        crudDefaultFormRef.value.validate(function (valid) { return __awaiter(_this, void 0, void 0, function () {
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                if (valid) {
                                                    // 验证通过
                                                    crudMethod
                                                        .add(crudForm)
                                                        .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                                        return __generator(this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    if (+res.code === 1) {
                                                                        notify(MSG.add, NOTIFICATION_TYPE.SUCCESS);
                                                                    }
                                                                    return [4 /*yield*/, callVmHook(crudHook.afterToAdd)];
                                                                case 1:
                                                                    _a.sent();
                                                                    return [4 /*yield*/, callVmHook(crudHook.afterToCU)];
                                                                case 2:
                                                                    _a.sent();
                                                                    return [4 /*yield*/, toQuery()];
                                                                case 3:
                                                                    _a.sent();
                                                                    resolve(+res.code === 1);
                                                                    return [2 /*return*/];
                                                            }
                                                        });
                                                    }); })
                                                        .catch(function () {
                                                        callVmHook(crudHook.afterAddError);
                                                        resolve(false);
                                                    });
                                                }
                                                else {
                                                    resolve(false);
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); });
                                    return [3 /*break*/, 4];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, callVmHook(crudHook.afterAddError)];
                                case 3:
                                    _a.sent();
                                    resolve(false);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    }
    /**
     *@description 触发编辑操作
     * @param {Row} row
     * @return {*}
     */
    function toEdit(row) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var beforeEdit, beforeCu;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    resetForm(row);
                                    return [4 /*yield*/, callVmHook(crudHook.beforeToEdit, proxyForm)];
                                case 1:
                                    beforeEdit = _a.sent();
                                    return [4 /*yield*/, callVmHook(crudHook.beforeToCU, proxyForm)];
                                case 2:
                                    beforeCu = _a.sent();
                                    if (!beforeEdit || !beforeCu) {
                                        return [2 /*return*/];
                                    }
                                    setEditStatus(STATUS.PREPARED);
                                    resolve(true);
                                    return [3 /*break*/, 4];
                                case 3:
                                    _a.sent();
                                    resolve(true);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    }
    /**
     *@description 进行编辑操作
     * @return {*}
     */
    function doEdit() {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var afterEdit;
                        var _this = this;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 2, , 4]);
                                    crudForm = Object.assign(crudForm, proxyForm);
                                    return [4 /*yield*/, callVmHook(crudHook.beforeValidateCU, crudForm)];
                                case 1:
                                    afterEdit = _b.sent();
                                    // const formData = getEditForm(proxyForm)
                                    if (!afterEdit) {
                                        resolve(false);
                                        return [2 /*return*/];
                                    }
                                    crudDefaultFormRef.value &&
                                        ((_a = crudDefaultFormRef.value) === null || _a === void 0 ? void 0 : _a.validate(function (valid) { return __awaiter(_this, void 0, void 0, function () {
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                if (valid) {
                                                    crudMethod
                                                        .edit(crudForm)
                                                        .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                                        return __generator(this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    if (+res.code === 1) {
                                                                        notify(MSG.edit, NOTIFICATION_TYPE.SUCCESS);
                                                                    }
                                                                    return [4 /*yield*/, callVmHook(crudHook.afterToAdd)];
                                                                case 1:
                                                                    _a.sent();
                                                                    return [4 /*yield*/, callVmHook(crudHook.afterToCU)];
                                                                case 2:
                                                                    _a.sent();
                                                                    return [4 /*yield*/, toQuery()];
                                                                case 3:
                                                                    _a.sent();
                                                                    resolve(+res.code === 1);
                                                                    return [2 /*return*/];
                                                            }
                                                        });
                                                    }); })
                                                        .catch(function () { return __awaiter(_this, void 0, void 0, function () {
                                                        return __generator(this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0: return [4 /*yield*/, callVmHook(crudHook.afterAddError)];
                                                                case 1:
                                                                    _a.sent();
                                                                    resolve(false);
                                                                    return [2 /*return*/];
                                                            }
                                                        });
                                                    }); });
                                                }
                                                else {
                                                    resolve(false);
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); }));
                                    return [3 /*break*/, 4];
                                case 2:
                                    _b.sent();
                                    return [4 /*yield*/, callVmHook(crudHook.afterAddError)];
                                case 3:
                                    _b.sent();
                                    resolve(false);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    }
    /**
     *@description 触发删除操作
     * @param {*} data
     * @return {*}
     */
    function toDel(data) {
        return __awaiter(this, void 0, void 0, function () {
            var beforeDel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callVmHook(crudHook.beforeDelete)];
                    case 1:
                        beforeDel = _a.sent();
                        if (!beforeDel) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, doDel(data)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    /**
     *@description 进行删除操作
     * @param {*} data
     * @return {*}
     */
    function doDel(data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        crudMethod
                            .del(data)
                            .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(res.code === 1)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, toQuery()];
                                    case 1:
                                        _a.sent();
                                        notify(MSG.del, NOTIFICATION_TYPE.SUCCESS);
                                        _a.label = 2;
                                    case 2: return [4 /*yield*/, callVmHook(crudHook.afterDelete)];
                                    case 3:
                                        _a.sent();
                                        resolve(res.code === 1);
                                        return [2 /*return*/];
                                }
                            });
                        }); })
                            .catch(function () {
                            resolve(false);
                        });
                    })];
            });
        });
    }
    /**
     *@description 触发撤回操作
     * @param {*} data
     * @return {*}
     */
    function toRecall(data) {
        return __awaiter(this, void 0, void 0, function () {
            var beforeRec;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callVmHook(crudHook.beforeRecall)];
                    case 1:
                        beforeRec = _a.sent();
                        if (!beforeRec) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, doRecall(data)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    /**
     *@description 进行撤回操作
     * @param {*} data
     * @return {*}
     */
    function doRecall(data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        crudMethod
                            .recall(data)
                            .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(+res.code === 1)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, toQuery()];
                                    case 1:
                                        _a.sent();
                                        notify(MSG.recall, NOTIFICATION_TYPE.SUCCESS);
                                        _a.label = 2;
                                    case 2: return [4 /*yield*/, callVmHook(crudHook.afterRecall)];
                                    case 3:
                                        _a.sent();
                                        resolve(+res.code === 1);
                                        return [2 /*return*/];
                                }
                            });
                        }); })
                            .catch(function () {
                            resolve(false);
                        });
                    })];
            });
        });
    }
    /**
     *@description 触发置顶操作
     * @param {*} data
     * @return {*}
     */
    function toTop(data) {
        return __awaiter(this, void 0, void 0, function () {
            var beforeRec;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callVmHook(crudHook.beforeTop)];
                    case 1:
                        beforeRec = _a.sent();
                        if (!beforeRec) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, doTop(data)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    /**
     *@description 进行置顶操作
     * @return {*}
     * @param row
     */
    function doTop(row) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return __generator(this, function (_a) {
                params = {
                    id: row.id
                };
                return [2 /*return*/, new Promise(function (resolve) {
                        crudMethod
                            .top(params)
                            .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(+res.code === 1)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, toQuery()];
                                    case 1:
                                        _a.sent();
                                        notify(MSG.top, NOTIFICATION_TYPE.SUCCESS);
                                        _a.label = 2;
                                    case 2: return [4 /*yield*/, callVmHook(crudHook.afterTop)];
                                    case 3:
                                        _a.sent();
                                        resolve(+res.code === 1);
                                        return [2 /*return*/];
                                }
                            });
                        }); })
                            .catch(function () {
                            resolve(false);
                        });
                    })];
            });
        });
    }
    /**
     *  @type {Array<id>}
     *  @description 选中的行数据
     */
    var selectIds = vue.ref([]);
    /**
     *@description 进行多条数据删除
     */
    function doMoreDel() {
        var _this = this;
        return new Promise(function (resolve) {
            crudMethod
                .del({ ids: selectIds.value })
                .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(+res.code === 1)) return [3 /*break*/, 2];
                            return [4 /*yield*/, toQuery()];
                        case 1:
                            _a.sent();
                            notify(MSG.del, NOTIFICATION_TYPE.SUCCESS);
                            _a.label = 2;
                        case 2:
                            resolve(res.code === 1);
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function () {
                resolve(false);
            });
        });
    }
    /**
     *@description 进行下载操作
     * @return {*}
     */
    function doDownLoad() {
        downloadLoading.value = true;
        return new Promise(function (resolve, reject) {
            var query = getQueryParams();
            crudMethod
                .list(Object.assign(query, { export: 1 }))
                .then(function (result) {
                downloadLoading.value = false;
                if (+result.code === 1) {
                    resolve(result.data.export);
                }
            })
                .catch(function (err) {
                downloadLoading.value = false;
                reject(err);
            });
        });
    }
    function crudSelectHandle(selection) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                selectIds.value = [];
                selection.forEach(function (list) {
                    selectIds.value.push(list[crudPrimarykey.value]);
                });
                return [2 /*return*/];
            });
        });
    }
    function crudSelectAllhandle(selection) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                selectIds.value = [];
                selection.forEach(function (list) {
                    selectIds.value.push(list[crudPrimarykey.value]);
                });
                return [2 /*return*/];
            });
        });
    }
    function crudSelectionChangeHandle(selection) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                selectIds.value = [];
                selection.forEach(function (list) {
                    selectIds.value.push(list[crudPrimarykey.value]);
                });
                return [2 /*return*/];
            });
        });
    }
    /**
     * 表格合计统计逻辑
     * @param param 默认表格row
     * @returns '总计' || '-' || number || 'N/A'
     */
    var getSummaries = function (param) {
        var columns = param.columns, data = param.data;
        var sums = [];
        // 接口是否返回了全部统计总和的数据 先不放开
        // const totalFlag = false;
        var totalFlag = statisticsTotal !== null;
        columns.forEach(function (column, index) {
            if (index === 0) {
                sums[index] = totalFlag ? '本页合计\n总计' : '本页合计';
                return;
            }
            if (hasKey('excludeSumColumn') && crudOptions.excludeSumColumn.includes(column.property)) {
                sums[index] = totalFlag ? '-\n-' : '-';
                return;
            }
            if (hasKey('includeSumColumn') && !crudOptions.includeSumColumn.includes(column.property)) {
                sums[index] = totalFlag ? '-\n-' : '-';
                return;
            }
            var values = data.map(function (item) { return Number(item[column.property]); });
            if (!values.every(function (value) { return Number.isNaN(value); })) {
                var _sum = "".concat(values.reduce(function (prev, curr) {
                    var value = Number(curr);
                    if (!Number.isNaN(value)) {
                        return prev + curr;
                    }
                    else {
                        return prev;
                    }
                }, 0));
                var _total = totalFlag ? statisticsTotal[column.property] : '-';
                if (hasKey('unfixedSum') && crudOptions.unfixedSum.includes(column.property)) {
                    sums[index] = totalFlag
                        ? "".concat(parseFloat(Number(_sum).toFixed(4)), "\n").concat(parseFloat(Number(_total).toFixed(4)))
                        : parseFloat(Number(_sum).toFixed(4));
                }
                else {
                    sums[index] = totalFlag
                        ? "".concat(Number(_sum).toFixed(4), "\n").concat(Number(_total).toFixed(4))
                        : Number(_sum).toFixed(4);
                }
            }
            else {
                sums[index] = totalFlag ? 'N/A\nN/A' : 'N/A';
            }
        });
        return sums;
    };
    var dialogVisible = vue.ref(false);
    var addEditLoading = vue.ref(false);
    vue.watch(function () { return crudStatus.cu; }, function () {
        dialogVisible.value = !!crudStatus.cu;
    });
    function submitHandle() {
        return __awaiter(this, void 0, void 0, function () {
            var result, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addEditLoading.value = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        if (!getAddStatus()) return [3 /*break*/, 3];
                        return [4 /*yield*/, doAdd()];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            resetCrudStatus();
                        }
                        else {
                            addEditLoading.value = false;
                        }
                        return [3 /*break*/, 6];
                    case 3:
                        if (!getEditStatus()) return [3 /*break*/, 5];
                        return [4 /*yield*/, doEdit()];
                    case 4:
                        result = _a.sent();
                        if (result) {
                            resetCrudStatus();
                        }
                        else {
                            addEditLoading.value = false;
                        }
                        return [3 /*break*/, 6];
                    case 5: return [2 /*return*/];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        _a.sent();
                        addEditLoading.value = false;
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    }
    vue.onMounted(function () {
        if (!crudCreateQuery) {
            return;
        }
        toQuery();
    });
    vue.onActivated(function () {
        if (!crudCreateQuery) {
            return;
        }
        refresh();
    });
    return {
        MSG: MSG,
        STATUS: STATUS,
        NOTIFICATION_TYPE: NOTIFICATION_TYPE,
        crudTag: crudTag,
        crudData: crudData,
        crudHook: crudHook,
        crudPrimarykey: crudPrimarykey,
        isPageQuery: isPageQuery,
        crudResData: crudResData,
        crudSelections: crudSelections,
        crudForm: crudForm,
        crudDefaultFormRef: crudDefaultFormRef,
        crudStatus: crudStatus,
        crudMethod: crudMethod,
        crudOptShow: crudOptShow,
        crudPage: crudPage,
        notify: notify,
        submitSuccessNotify: submitSuccessNotify,
        addSuccessNotify: addSuccessNotify,
        editSuccessNotify: editSuccessNotify,
        delSuccessNotify: delSuccessNotify,
        recallSuccessNotify: recallSuccessNotify,
        topSuccessNotify: topSuccessNotify,
        queryLoading: queryLoading,
        downloadLoading: downloadLoading,
        delLoading: delLoading,
        delAllLoading: delAllLoading,
        resetForm: resetForm,
        resetQuery: resetQuery,
        getQueryParams: getQueryParams,
        refresh: refresh,
        toQuery: toQuery,
        crudQuery: crudQuery,
        resetCrudStatus: resetCrudStatus,
        getTitleStatus: getTitleStatus,
        setEditStatus: setEditStatus,
        getEditStatus: getEditStatus,
        setAddStatus: setAddStatus,
        getAddStatus: getAddStatus,
        proxyForm: proxyForm,
        setTheForm: setTheForm,
        toAdd: toAdd,
        doAdd: doAdd,
        toEdit: toEdit,
        doEdit: doEdit,
        toDel: toDel,
        doDel: doDel,
        toRecall: toRecall,
        doRecall: doRecall,
        toTop: toTop,
        doTop: doTop,
        crudSelectHandle: crudSelectHandle,
        crudSelectAllhandle: crudSelectAllhandle,
        crudSelectionChangeHandle: crudSelectionChangeHandle,
        setTheQuery: setTheQuery,
        crudSetQueryKey: crudSetQueryKey,
        crudTinymce: crudTinymce,
        crudFindRole: crudFindRole,
        roles: roles,
        doDownLoad: doDownLoad,
        crudPermission: crudPermission,
        changeStatus: changeStatus,
        doMoreDel: doMoreDel,
        crudSetProxyFormKey: crudSetProxyFormKey,
        getSummaries: getSummaries,
        dialogVisible: dialogVisible,
        submitHandle: submitHandle,
        addEditLoading: addEditLoading,
        reQuery: reQuery
    };
}

exports.CRUD = CRUD;
