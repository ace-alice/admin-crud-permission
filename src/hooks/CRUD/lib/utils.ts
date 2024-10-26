/* eslint-disable no-async-promise-executor */
import type { CrudHOOK, Row } from './interface';

/**
 * CRUD钩子
 */

export const HOOK: CrudHOOK<string | Function> = {
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

export async function callVmHook(hook: Function | string, form?: Row) {
  return new Promise(async (resolve) => {
    let result = true;
    if (hook && typeof hook == 'string') {
      resolve(result);
    } else if (hook && typeof hook == 'function') {
      try {
        result = await hook(form);
        resolve(result);
      } catch (error) {
        resolve(false);
      }
    }
  });
}
