<template>
  <a-config-provider>
    <section>
      <section id="cns-main-app" v-show="!$route.meta.withoutLayout" >
        <section class="cns-menu-wrapper">
          <main-menu :menus="menus"/>
        </section>
        <section class="cns-frame-wrapper">
          <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
          <router-view v-show="$route.name" />

          <!-- 子应用渲染区，用于挂载子应用节点 -->
          <section v-show="!$route.name" id="frame"></section>
        </section>
      </section>
      <router-view v-show="$route.meta.withoutLayout" />
    </section>
  </a-config-provider>
</template>

<script>
import MainMenu from './components/menu/index'
export default {
  components: {
    MainMenu
  },
  data () {
    return {
      menus: [
        {
          key: 'Home',
          title: '主页',
          path: '/'
        },
        {
          key: 'Vue1MicroApp',
          title: 'Vue1 主页',
          path: '/vue1'
        },
        {
          key: 'Vue1MicroAppList',
          title: 'Vue1 列表页',
          path: '/vue1/list'
        },
        // {
        //   key: 'Vue2MicroApp',
        //   title: 'Vue2 主页',
        //   path: '/vue2'
        // },
        // {
        //   key: 'Vue2MicroAppList',
        //   title: 'Vue2 列表页',
        //   path: '/vue2/list'
        // },
        {
          key: 'StaticMicroApp',
          title: 'Static微应用',
          path: '/static'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #cns-main-app {
    height: 100%;
    position: relative;
    .cns-menu-wrapper {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 40;
      width: 172px;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .cns-nav-wrapper {
      position: fixed;
      width: 100%;
      min-width: 1060px;
      padding-left: 172px;
      left: 0;
      top: 0;
      z-index: 30;
    }
  }

  .cns-frame-wrapper {
    padding-left: 172px;
    flex-grow: 1;
    height: 100%;
    width: 100%;
    position: relative;
  }

  #cns-frame {
    width: 100%;
    height: 100%;
    > :first-child {
      height: 100%;
    }
  }
</style>
