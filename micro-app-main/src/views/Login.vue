<template>
  <section class="login-container">
    <a-button size="large" type="primary" @click="login">登录</a-button>
  </section>
</template>

<script>
import actions from '../shared/actions'
import { apiLogin } from '../apis'
export default {
  name: 'Login',
  mounted () {
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log('主应用观察者：token 改变前的值为 ', prevState.token)
      console.log('主应用观察者：登录状态发生改变，改变后的 token 的值为 ', state.token)

      this.$router.push('/')
    })
  },
  methods: {
    async login () {
      const res = await apiLogin()
      const { token } = res.data.data
      this.$message.success('登录成功')
      // 登录成功后，设置 token
      actions.setGlobalState({
        token
      })
    }
  }
}
</script>

<style scoped lang="less">
  .login-container {
    padding: 30px;
  }
</style>
