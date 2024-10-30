/* eslint-disable no-async-promise-executor */
import type { CrudHOOK, Row } from './types';

/**
 * CRUD钩子
 */

export const HOOK: CrudHOOK<Function> = {
  /** 重置 - 之前 */
  beforeReset: () => true,
  /** 重置 - 之后 */
  afterReset: () => true,
  /** 刷新 - 之前 */
  beforeRefresh: () => true,
  /** 刷新 - 之后 */
  afterRefresh: () => true,
  /** 删除 - 之前 */
  beforeDelete: () => true,
  /** 删除 - 之后 */
  afterDelete: () => true,
  /** 删除取消 - 之前 */
  beforeDeleteCancel: () => true,
  /** 删除取消 - 之后 */
  afterDeleteCancel: () => true,
  /** 撤回 - 之前 */
  beforeRecall: () => true,
  /** 撤回 - 之后 */
  afterRecall: () => true,
  /** 撤回取消 - 之前 */
  beforeRecallCancel: () => true,
  /** 撤回取消 - 之后 */
  afterRecallCancel: () => true,
  /** 置顶/取消置顶 - 之前 */
  beforeTop: () => true,
  /** 置顶/取消置顶 - 之后 */
  afterTop: () => true,
  /** 置顶/取消置顶取消 - 之前 */
  beforeTopCancel: () => true,
  /** 置顶/取消置顶取消 - 之后 */
  afterTopCancel: () => true,
  /** 新建 - 之前 */
  beforeToAdd: () => true,
  /** 新建 - 之后 */
  afterToAdd: () => true,
  /** 编辑 - 之前 */
  beforeToEdit: () => true,
  /** 编辑 - 之后 */
  afterToEdit: () => true,
  /** 开始 "新建/编辑" - 之前 */
  beforeToCU: () => true,
  /** 开始 "新建/编辑" - 之后 */
  afterToCU: () => true,
  /** "新建/编辑" 验证 - 之前 */
  beforeValidateCU: () => true,
  /** "新建/编辑" 验证 - 之后 */
  afterValidateCU: () => true,
  /** 添加取消 - 之前 */
  beforeAddCancel: () => true,
  /** 添加取消 - 之后 */
  afterAddCancel: () => true,
  /** 编辑取消 - 之前 */
  beforeEditCancel: () => true,
  /** 编辑取消 - 之后 */
  afterEditCancel: () => true,
  /** 提交 - 之前 */
  beforeSubmit: () => true,
  /** 提交 - 之后 */
  afterSubmit: () => true,
  /** 添加失败 - 之后 */
  afterAddError: () => true,
  /** 编辑失败 - 之后 */
  afterEditError: () => true,
  /** 拖动结束 */
  dragEnd: () => true
};

export async function callVmHook(hook: Function, form?: Row) {
  return new Promise(async (resolve) => {
    let result = true;
    if (hook && typeof hook == 'function') {
      try {
        result = await hook(form);
        resolve(result);
      } catch (error) {
        resolve(false);
      }
    } else {
      resolve(result);
    }
  });
}
