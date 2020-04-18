<template>
  <header class="header">
    <nav class="nav ">
      <router-link to="/">
        <div>iam66</div>
      </router-link>
      <ul class="nav-ul flexCe">
        <router-link to="/projects">
          <li>项目</li>
        </router-link>
        <router-link to="/articles">
          <li>博客</li>
        </router-link>
        <router-link to="/about">
          <li>关于我</li>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class HeaderT extends Vue {
    // 66
  }
</script>

<style lang="scss">
  .header{
    background-color: #ffffff;
  }
  .nav {
    padding: 0 20px;
    height: $nav-height;
    @include flexJustify(space-between);
  }
  .nav-ul {
    @include flexJustify;
    li {
      margin-right: 20px;
      cursor: pointer;
    }
  }

</style>
