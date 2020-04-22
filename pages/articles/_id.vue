<template>
  <div class="container">
    <div class="article-content ">
      <div v-html="htmlMD" class="markdown-body"></div>
    </div>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import marked from 'marked'
  import '../../assets/styles/css/github-markdown.css'
  @Component({})
  export default class Article extends Vue{
    title:string = '';
    words:string = '';
    htmlMD:string = '';
    async asyncData ({ $axios, params}:any) {
      const url = `https://api.iam66.com/api/articles/detail?id=${params.id}`;
      const res = await $axios.get(url);
      const info = res.data.data;
      const locationUrl = `https://api.iam66.com/${info.location}.md`;
      const {data} = await $axios.get(locationUrl)
      return {htmlMD:marked(data),title:info.title,words:info.words}
    }
    head(){
      return{
        title:this.title,//页面的title
        meta:[
          {hid:'description',name:this.title,content:this.words}
        ]//hid是覆盖，
      }
    }
  }
</script>

<style lang="scss">
.article-content{
  width: 80%;
  margin: 0 auto;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
}

</style>
