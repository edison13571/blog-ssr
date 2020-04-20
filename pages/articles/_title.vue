<template>
  <div class="container">
    <div class="article-content">
      <div v-html="htmlMD"></div>
    </div>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import marked from 'marked'
  @Component({})
  export default class Article extends Vue{
    title:string = '';
    htmlMD:string = '';
    async asyncData ({$axios, params}:any) {
      const url = `/doc/${params.title}.md`;
      const { data } = await $axios.get(url)
      return {htmlMD:marked(data),title:params.title}
    }
    head(){
      return{
        title:this.title,//页面的title
        meta:[
          {hid:'description',name:this.title,content:this.title}
        ]//hid是覆盖，
      }
    }
  }
</script>

<style lang="scss">
.article-content{
  width: 80%;
  margin: 0 auto;
}
</style>
