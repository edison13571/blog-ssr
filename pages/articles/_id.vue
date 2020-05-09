<template>
  <div class="container ">
    <div class="article-container">
      <div class="side">
        <div class="side-wrap">
          <div v-for="(item,index) in catalog" :key="index" :class="'side-unit'+ item.level" @click="sideClick(item.title)">
            {{item.title}}
          </div>
        </div>
      </div>
      <div class="article-content ">
        <div v-html="htmlMD" class="markdown-body"></div>
      </div>
    </div>
    <PageNav/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import marked from 'marked'
  import '../../assets/styles/css/github-markdown.css'
  import {getArticlesDetail, getArticlesContent, getArticlesAddView} from '../../api/articles'
  import {getHTitles} from '../../utils/articles'
  import PageNav from '../../components/pageNav'
  interface catalogUnit{
    level:number,
    title:string
  }
  @Component({
    components: {
      PageNav
    }
  })
  export default class Article extends Vue{
    title:string = '';
    words:string = '';
    htmlMD:string = '';
    catalog:catalogUnit[]=[];
    async asyncData ({params}:any) {
      const {data} = await getArticlesDetail({id:params.id});
      const html = await getArticlesContent(data.location)
      return {htmlMD:marked(html),title:data.title,words:data.words}
    }
    mounted(){
      getArticlesAddView({id:this.$route.params.id})
      this.catalog = getHTitles(this.htmlMD)
    }
    sideClick (eleId:string) {
      let ele:any = document.getElementById(eleId)
      let wrap:any = document.getElementsByClassName('article-content')[0]
      let pos:number = ele.offsetTop - wrap.offsetTop +wrap.scrollTop
      window.scroll(0, pos)
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
  .article-container{
    /*width: 80%;*/
    margin: 0 auto;
    min-height: calc(100vh - 120px);
    display: flex;
  }
.article-content{
  flex: 1;
  display: flex;
  flex-direction: column;
}

  .article-container .side{
    margin-right: 20px;
    width: 300px;
    border-right: 1px solid #eeeeee;
    overflow: scroll;
    position: relative;
    .side-wrap{
      position: fixed;
      left: 0;
      top: 60px;
      width: 300px;
      padding-left: 5px;
      overflow: scroll;
      height: calc(100vh - 60px);
      padding-bottom: 30px;

    }
    .side-wrap div {
      margin-bottom: 10px;
      cursor: pointer;
    }
    .side-unit1 {
      font-size: 22px;
      /*font-weight: 700;*/
    }
    .side-unit2 {
      padding-left: 10px;
      font-size: 20px;
    }
    .side-unit3 {
      padding-left: 20px;
      font-size: 16px;
    }
    .side-unit4 {
      padding-left: 30px;
      font-size: 14px;
    }
  }

</style>
