<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu v-for="(item, index) in menuList" :index="index">
          <template slot="title">
            <i :class=item.icon></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group v-for="(ite, idx) in item.children">
            <el-menu-item :index="index+'-'+idx">
              <i :class=ite.icon></i>
              <span>{{ite.name}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
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
    methods: {}
  }
</script>

<style scoped>

</style>
