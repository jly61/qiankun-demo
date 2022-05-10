<template>
  <section class="communication-container">
    <a-card :title="`欢迎你，${userInfo.nickname}`">
      <section class="container">
        <div>
          <a-avatar :size="50" src=""/>
        </div>
        <div>
          <span>用户名：</span>
          {{userInfo.nickname}}
        </div>
        <div>
          <span>性别：</span>
          {{userInfo.isMale ? "男" : "女"}}
        </div>
        <div>
          <span>所在地：</span>
          {{userInfo.address}}
        </div>
      </section>
    </a-card>
  </section>
</template>

<script>
import actions from '../shared/actions'
import { apiGetUserInfo } from '../apis'

export default {
  name: 'Communication',
  data () {
    return {
      userInfo: {}
    }
  },
  mounted () {
    // 添加观察者
    // onGlobalStateChange 第二个入参为 true，代表立即执行一次观察者函数
    actions.onGlobalStateChange(state => {
      const { token } = state
      // 未登录 - 返回主页
      if (!token) {
        this.$message.error('未检测到登录信息！')
        return this.$router.push('/')
      }
      this.getUserInfo(token)
    }, true)
  },
  methods: {
    async getUserInfo (token) {
      const res = await apiGetUserInfo()
      this.userInfo = res.data.userInfo
    }
  }
}
</script>

<style scoped lang="less">
  .communication-container {
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding-top: 30px;

      div {
        width: 100%;
        margin: 10px;
        text-align: center;
        font-size: 16px;

        span {
          font-weight: bold;
        }
      }
    }
  }
</style>
