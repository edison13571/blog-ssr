<template>
  <div class="container">
    <div>
     project
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component({})
  export default class Index extends Vue {
    head(){
      return{
        title:'项目列表',//页面的title
        meta:[
          {hid:'description',name:'iam66项目列表',content:'This is projects page'}
        ]//hid是覆盖，
      }
    }
  }
</script>

<style>

</style>
