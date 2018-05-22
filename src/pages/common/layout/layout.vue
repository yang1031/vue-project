<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <el-submenu v-for="(item, index) in menuList" :index="item.path">
          <template slot="title">
            <i :class=item.icon></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group v-for="(ite, idx) in item.children">
            <el-menu-item :index="ite.path">
              <i :class=ite.icon></i>
              <span>{{ite.name}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import MenuList from '@/router/routes-nav'

  export default {
    name: 'layout',
    data () {
      return {
        menuList: MenuList
      }
    },
    created () {
      console.log(this.$router)
      console.log(this.$route)
    },
    methods: {
    }
  }
</script>

<style scoped>
.el-aside {
  padding-top: 50px;
  background-color: #545c64;
}
.el-submenu {width: 200px;}
</style>
