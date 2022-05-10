<template>
  <div class="home">
    Hello
    <a-button size="large" @click="toLogin">跳转到登录</a-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>
