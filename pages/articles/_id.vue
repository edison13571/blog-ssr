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
  import {getArticlesDetail, getArticlesContent, getArticlesAddView} from '../../api/articles'
  @Component({})
  export default class Article extends Vue{
    title:string = '';
    words:string = '';
    htmlMD:string = '';
    async asyncData ({params}:any) {
      const {data} = await getArticlesDetail({id:params.id});
      const html = await getArticlesContent(data.location)
      return {htmlMD:marked(html),title:data.title,words:data.words}
    }
    mounted(){
      getArticlesAddView({id:this.$route.params.id})
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
