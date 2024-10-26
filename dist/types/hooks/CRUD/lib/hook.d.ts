import type { Ref } from 'vue';
import { Crudmsg, type CrudMethodType, type CrudNOTIFICATION_TYPE, type CrudOptShowType, type CrudOptionsType, type CrudResDataType, type CrudmsgType, type Row, type STATUSType, type crudPageType, type crudStatusType } from './interface';
/**
 *@description CRUD HOOK方法 包含了基础的 增、删、改、查
 * @param crudOptions 一些可配置的参数
 * @returns crud对象
 */
export default function CRUD(crudOptions: CrudOptionsType, notification: (title: Crudmsg, type: string) => void): {
    MSG: CrudmsgType;
    STATUS: STATUSType;
    NOTIFICATION_TYPE: CrudNOTIFICATION_TYPE;
    crudTag: string;
    crudData: Ref<any[], any[]>;
    crudHook: {
        beforeReset: string | Function;
        afterReset: string | Function;
        beforeRefresh: string | Function;
        afterRefresh: string | Function;
        beforeDelete: string | Function;
        afterDelete: string | Function;
        beforeDeleteCancel: string | Function;
        afterDeleteCancel: string | Function;
        beforeRecall: string | Function;
        afterRecall: string | Function;
        beforeRecallCancel: string | Function;
        afterRecallCancel: string | Function;
        beforeTop: string | Function;
        afterTop: string | Function;
        beforeTopCancel: string | Function;
        afterTopCancel: string | Function;
        beforeToAdd: string | Function;
        afterToAdd: string | Function;
        beforeToEdit: string | Function;
        afterToEdit: string | Function;
        beforeToCU: string | Function;
        afterToCU: string | Function;
        beforeValidateCU: string | Function;
        afterValidateCU: string | Function;
        beforeAddCancel: string | Function;
        afterAddCancel: string | Function;
        beforeEditCancel: string | Function;
        afterEditCancel: string | Function;
        beforeSubmit: string | Function;
        afterSubmit: string | Function;
        afterAddError: string | Function;
        afterEditError: string | Function;
        dragEnd: string | Function;
    };
    crudPrimarykey: Ref<string, string>;
    isPageQuery: boolean;
    crudResData: CrudResDataType;
    crudSelections: Ref<Row[], Row[]>;
    crudForm: Row;
    crudDefaultFormRef: Ref<any, any>;
    crudStatus: crudStatusType;
    crudMethod: CrudMethodType;
    crudOptShow: CrudOptShowType;
    crudPage: crudPageType;
    notify: (title: Crudmsg, type?: import("./interface").MessageType) => void;
    submitSuccessNotify: () => void;
    addSuccessNotify: () => void;
    editSuccessNotify: () => void;
    delSuccessNotify: () => void;
    recallSuccessNotify: () => void;
    topSuccessNotify: () => void;
    queryLoading: Ref<boolean, boolean>;
    downloadLoading: Ref<boolean, boolean>;
    delLoading: Ref<boolean, boolean>;
    delAllLoading: Ref<boolean, boolean>;
    resetForm: (rowForm?: {}) => void;
    resetQuery: (selfQuery?: {}) => void;
    getQueryParams: () => {
        page: number;
        limit: number;
    } | {
        page: number;
        limit: number;
        count: number;
    };
    refresh: (params?: any) => Promise<unknown>;
    toQuery: (params?: any) => Promise<void>;
    crudQuery: Row;
    resetCrudStatus: () => void;
    getTitleStatus: () => string;
    setEditStatus: (status: number) => void;
    getEditStatus: () => number;
    setAddStatus: (status: number) => void;
    getAddStatus: () => number;
    proxyForm: Row;
    setTheForm: (from: Row) => void;
    toAdd: (form?: Row) => Promise<unknown>;
    doAdd: () => Promise<unknown>;
    toEdit: (row: Row) => Promise<unknown>;
    doEdit: () => Promise<unknown>;
    toDel: (data: any) => Promise<void>;
    doDel: (data: any) => Promise<unknown>;
    toRecall: (data: any) => Promise<void>;
    doRecall: (data: any) => Promise<unknown>;
    toTop: (data: any) => Promise<void>;
    doTop: (row: any) => Promise<unknown>;
    crudSelectHandle: (selection: Array<Row>) => Promise<void>;
    crudSelectAllhandle: (selection: Array<Row>) => Promise<void>;
    crudSelectionChangeHandle: (selection: Array<Row>) => Promise<void>;
    setTheQuery: (query: Row) => void;
    crudSetQueryKey: (setObj: Row) => void;
    crudTinymce: (key: string, value: string) => void;
    crudFindRole: {
        /**
         * @description 只满足一个权限标识
         * @param Authority 权限标识字符串
         */
        only(Authority: string): boolean;
        /**
         * @description 满足所有列出的权限标识
         * @param Authoritys 权限标识数组
         */
        all(Authoritys: Array<string>): boolean;
        /**
         * @description 只要满意一个权限即可
         * @param Authoritys 权限标识数组
         */
        once(Authoritys: Array<string>): boolean;
    };
    roles: string[];
    doDownLoad: () => Promise<unknown>;
    crudPermission: {
        add: string;
        edit: string;
        delete: string;
        recall: string;
        top: string;
    };
    changeStatus: (fnName: any, value: any) => Promise<unknown>;
    doMoreDel: () => Promise<unknown>;
    crudSetProxyFormKey: (setObj: Row) => void;
    getSummaries: (param: any) => any;
    dialogVisible: Ref<boolean, boolean>;
    submitHandle: () => Promise<void>;
    addEditLoading: Ref<boolean, boolean>;
    reQuery: (params?: any) => Promise<void>;
};
