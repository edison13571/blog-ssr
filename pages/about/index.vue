<template>
  <div class="container">
    <div>
     关于我
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component({})
  export default class About extends Vue {
    head(){
      return{
        title:'im66',//页面的title
        meta:[
          {hid:'description',name:'iam66关于我',content:'This is about page'}
        ]//hid是覆盖，
      }
    }
  }

</script>

<style>

</style>
