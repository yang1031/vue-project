<template>
  <div class="container">
   <div class="title">登 录</div>
    <group>
      <x-input title="用户名" v-model="username"></x-input>
    </group>
  </div>
</template>

<script>
  import moment from "moment";

  export default {
    name: 'index',
    components: {},
    data() {
      return {
        username: ''
      }
    },
    mounted() {
    },
    methods: {
      moment
    }
  }
</script>

<style scoped lang="scss">
  .title {
    padding-top: 60px;
    font-size: 60px;
    text-align: center;
  }

</style>