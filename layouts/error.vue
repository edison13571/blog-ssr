<template>
  <div class="error temp">
    <div class="title" v-if="error.statusCode == 404">404 - Not Found</div>
    <div class="title" v-else>500 - 服务器错误</div>
    <div class="back">
      <ul>
        <li @click="$router.back(-1)">返回上一页</li>
        <nuxt-link to="/">
          <li>查看首页</li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['error']
  }
</script>

<style lang="scss">
  .error{
    li{
      list-style: none;
    }
    .back ul{
      @include flexJustify(space-between);
      width: 300px;
      cursor: pointer;
    }
    .title{
      margin-bottom: 50px;
    }
  }

</style>
