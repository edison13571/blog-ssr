<template>
  <div class="container">
    <div>
     <div>首页{{msg}}</div>
    </div>
  </div>
</template>

<script lang="ts">


import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Index extends Vue {
  msg:string = ''
  mounted(){
    this.$axios.get('http://129.211.51.250:3000/api/users/test').then((res:any)=>{
      this.msg = res.data.msg
      console.log(res)
    })
  }
  head(){
    return{
      title:'im66 blog',//页面的title
      meta:[
        {hid:'description',name:'blog',content:'This is blog page'}
      ]//hid是覆盖，
    }
  }
}


</script>

<style>

</style>
