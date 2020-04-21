<template>
  <div class="container">
    <div class="temp">
      <div>你好，iam66。这是一个关于66的随便写写的网站。</div>
    </div>
  </div>
</template>

<script lang="ts">


import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Index extends Vue {
  head(){
    return{
      title:'im66',//页面的title
      meta:[
        {hid:'description',name:'iam66',content:'This is blog page'}
      ]//hid是覆盖，
    }
  }
}


</script>

<style>

</style>
