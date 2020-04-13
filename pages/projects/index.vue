<template>
  <div class="container">
    <div>
     project
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { Component, Vue } from 'nuxt-property-decorator';

// @Component({})
export default Vue.extend({
  head(){
    return{
      title:'项目列表',//页面的title
      meta:[
        {hid:'description',name:'projects',content:'This is projects page'}
      ]//hid是覆盖，
    }
  }
})
</script>

<style>

</style>
