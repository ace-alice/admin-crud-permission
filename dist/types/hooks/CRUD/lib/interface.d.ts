import type { Ref } from 'vue';
export type CrudHOOKType = (form?: {
    [key: string]: any;
}) => boolean;
export interface Row {
    [key: string]: any;
}
export type MessageType = '' | 'success' | 'warning' | 'info' | 'error' | undefined;
export interface crudStatusType {
    add: number;
    edit: number;
    cu: number;
    title: string;
}
export interface CrudOptionsType {
    crudTag?: string;
    crudPrimarykey?: string | undefined;
    crudTitle?: string;
    isPageQuery?: boolean;
    crudDelKeys?: Array<string>;
    defaultForm?: Row;
    defaultQuery?: Row;
    crudMethod?: any;
    unfixedSum?: any;
    excludeSumColumn?: any;
    includeSumColumn?: any;
    crudOptShow?: CrudOptShowType;
    setupQuery?: boolean;
    crudTableParams?: string;
    crudFormRefsKey?: string;
    crudCreateQuery?: boolean;
    downloadUrl?: string;
    formKey?: string;
}
export interface CrudHOOK<S> {
    /** 重置 - 之前 */
    beforeReset: S;
    /** 重置 - 之后 */
    afterReset: S;
    /** 刷新 - 之前 */
    beforeRefresh: S;
    /** 刷新 - 之后 */
    afterRefresh: S;
    /** 删除 - 之前 */
    beforeDelete: S;
    /** 删除 - 之后 */
    afterDelete: S;
    /** 删除取消 - 之前 */
    beforeDeleteCancel: S;
    /** 删除取消 - 之后 */
    afterDeleteCancel: S;
    /** 撤回 - 之前 */
    beforeRecall: S;
    /** 撤回 - 之后 */
    afterRecall: S;
    /** 撤回取消 - 之前 */
    beforeRecallCancel: S;
    /** 撤回取消 - 之后 */
    afterRecallCancel: S;
    /** 置顶/取消置顶 - 之前 */
    beforeTop: S;
    /** 置顶/取消置顶 - 之后 */
    afterTop: S;
    /** 置顶/取消置顶取消 - 之前 */
    beforeTopCancel: S;
    /** 置顶/取消置顶取消 - 之后 */
    afterTopCancel: S;
    /** 新建 - 之前 */
    beforeToAdd: S;
    /** 新建 - 之后 */
    afterToAdd: S;
    /** 编辑 - 之前 */
    beforeToEdit: S;
    /** 编辑 - 之后 */
    afterToEdit: S;
    /** 开始 "新建/编辑" - 之前 */
    beforeToCU: S;
    /** 开始 "新建/编辑" - 之后 */
    afterToCU: S;
    /** "新建/编辑" 验证 - 之前 */
    beforeValidateCU: S;
    /** "新建/编辑" 验证 - 之后 */
    afterValidateCU: S;
    /** 添加取消 - 之前 */
    beforeAddCancel: S;
    /** 添加取消 - 之后 */
    afterAddCancel: S;
    /** 编辑取消 - 之前 */
    beforeEditCancel: S;
    /** 编辑取消 - 之后 */
    afterEditCancel: S;
    /** 提交 - 之前 */
    beforeSubmit: S;
    /** 提交 - 之后 */
    afterSubmit: S;
    afterAddError: S;
    afterEditError: S;
    dragEnd: S;
}
export interface CrudResDataType {
    [key: string]: any;
}
export interface CrudMethodType {
    list: Function;
    add: Function;
    edit: Function;
    del: Function;
    [key: string]: any;
}
/**
 * @param query 是否显示查询区域
 */
export interface CrudOptShowType {
    operate?: boolean;
    query?: boolean;
    add?: boolean;
    edit?: boolean;
    pullOrder?: boolean;
    del?: boolean;
    download?: boolean;
    import?: boolean;
    reset?: boolean;
    autoRefresh?: boolean;
    moreSet?: boolean;
    moreDel?: boolean;
    more?: boolean;
    fullscreen?: boolean;
    formSize?: string;
    dragAble?: boolean;
    crudOptShow?: boolean;
    hideFooter?: boolean;
}
export interface STATUSType {
    NORMAL: number;
    PREPARED: number;
    PROCESSING: number;
}
export interface CrudNOTIFICATION_TYPE {
    SUCCESS: MessageType;
    WARNING: MessageType;
    INFO: MessageType;
    ERROR: MessageType;
}
export interface CrudmsgType {
    submit: Crudmsg;
    add: Crudmsg;
    edit: Crudmsg;
    del: Crudmsg;
    recall: Crudmsg;
    top: Crudmsg;
}
export interface crudPageType {
    page: number;
    limit: number;
    count: number;
}
export interface CrudType<T> {
    parseTime: Function;
    MSG: CrudmsgType;
    STATUS: STATUSType;
    NOTIFICATION_TYPE: CrudNOTIFICATION_TYPE;
    crudTag: string | undefined;
    crudData: any;
    crudHook: CrudHOOK<string | Function>;
    crudPrimarykey: Ref<string | undefined>;
    isPageQuery: boolean | undefined;
    crudResData: CrudResDataType;
    crudSelections: Ref<Array<Row>>;
    crudForm: T;
    crudDefaultFormRefs: any;
    getCrudDefaultFormRefs: Function;
    crudStatus: crudStatusType;
    crudMethod: CrudMethodType;
    crudOptShow: CrudOptShowType;
    crudPage: crudPageType;
    notify: (title: string, type: MessageType) => void;
    submitSuccessNotify: any;
    addSuccessNotify: any;
    editSuccessNotify: any;
    delSuccessNotify: any;
    queryLoading: any;
    downloadLoading: any;
    delLoading: any;
    delAllLoading: any;
    resetForm: any;
    resetQuery: any;
    getQueryParams: any;
    setCrudPageNum: any;
    setCrudPageSize: any;
    refresh: any;
    toQuery: any;
    crudQuery: any;
    resetCrudStatus: any;
    getTitleStatus: any;
    setEditStatus: any;
    getEditStatus: any;
    setAddStatus: any;
    getAddStatus: any;
    proxyForm: T;
    setTheForm: any;
    toAdd: any;
    doAdd: any;
    toEdit: any;
    doEdit: any;
    toDel: any;
    doDel: any;
    crudSelectHandle: any;
    crudSelectAllhandle: any;
    crudSelectionChangeHandle: any;
    setTheQuery: any;
    crudSetQueryKey: any;
    crudTinymce: any;
    crudFindRole: any;
    roles: any;
    crudPermission: {
        add: string;
        edit: string;
        delete: string;
        recall: string;
    };
    [key: string]: any;
}
export declare enum Crudmsg {
    SubmittedSuccessfully = 0,
    AddSuccessfully = 1,
    EditSuccessfully = 2,
    DeleteSuccessfully = 3,
    RecallSuccessfully = 4,
    BaseHandleSuccessfully = 5
}
