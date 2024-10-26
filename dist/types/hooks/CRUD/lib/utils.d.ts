import type { CrudHOOK, Row } from './interface';
/**
 * CRUD钩子
 */
export declare const HOOK: CrudHOOK<string | Function>;
export declare function callVmHook(hook: Function | string, form?: Row): Promise<unknown>;
