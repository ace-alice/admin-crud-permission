// 钩子函数类型

export type CrudHOOKType = (form?: { [key: string]: any }) => boolean;
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
  /** 添加失败 - 之后 */
  afterAddError: S;
  /** 编辑失败 - 之后 */
  afterEditError: S;
  /** 拖动结束 */
  dragEnd: S;
}

// 响应类型
export interface CrudResDataType {
  [key: string]: any;
}

// crud方法类型
export interface CrudMethodType {
  list: () => Promise<any>;
  add: () => Promise<any>;
  edit: () => Promise<any>;
  del: () => Promise<any>;
  [key: string]: () => Promise<any>;
}

// 按钮显示控制标识类型
/**
 * @param query 是否显示查询区域
 */
export interface CrudOptShowType {
  /** 操作区域 */
  operate?: boolean;
  /** 搜索区域 */
  query?: boolean;
  /** 新增按钮 */
  add?: boolean;
  /** 编辑按钮 */
  edit?: boolean;
  pullOrder?: boolean;
  /** 删除按钮 */
  del?: boolean;
  /** 下载按钮 */
  download?: boolean;
  /** 导出按钮 */
  import?: boolean;
  /** 重制按钮 */
  reset?: boolean;
  /** 自动刷新组件 */
  autoRefresh?: boolean;
  /** 批量编辑按钮 */
  moreSet?: boolean;
  /** 批量删除按钮 */
  moreDel?: boolean;
  more?: boolean;
  /** 全屏按钮 */
  fullscreen?: boolean;
  /** form的size */
  formSize?: string;
  /** 是否可以拖动 */
  dragAble?: boolean;
  crudOptShow?: boolean;
  /** 隐藏底部 */
  hideFooter?: boolean;
}
