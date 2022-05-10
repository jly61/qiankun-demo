function emptyAction () {
  // 警告：提示当前使用的是空 Action
  console.warn('当前执行的 action 是空的!')
}

class Actions {
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction
  }

  setActions (actions) {
    this.actions = actions
  }

  /**
   * 映射
   */
  onGlobalStateChange (...args) {
    return this.actions.onGlobalStateChange(...args)
  }

  /**
   * 映射
   */
  setGlobalState (...args) {
    return this.actions.setGlobalState(...args)
  }
}

const actions = new Actions()
export default actions
