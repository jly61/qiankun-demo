<template>
  <div class="home">
    <h2>子项目sub home</h2>
    <button @click="jump">List</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  methods: {
    jump () {
      this.$router.push({
        path: '/list'
      })
      // window.history.pushState(null, null, '/vue1/list')
    }
  }
}
</script>
