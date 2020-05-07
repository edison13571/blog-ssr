<template>
  <div class="container">
    <div class="wrap">
      <Unit v-for="item in articles" :key="item.id" :info="item" />
      <div v-if="total > page * size" @click="getMore" class="get-more">加载更多</div>
    </div>
    <PageNav/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import Unit from '../../components/articlesListUnit'
  import PageNav from '../../components/pageNav'
  import {getArticlesList} from  '../../api/articles'

  interface article{
    _id:string;
    title:string;
    words:string;
    createdDate:number;
    updatedDate:number;
    tags:string[];
    location:string;
    series:string;
    views:number;
  }

  @Component({
    components: {
      Unit,
      PageNav
    }
  })
  export default class Articles extends Vue {
    articles:article[] = [];
    total:number = 0;
    page:number = 1;
    size:number = 10;
    async asyncData () {
      const { data } = await getArticlesList()
      return {articles:data.list,total:data.total}
    }
    mounted(){
      let owner = window.localStorage.getItem('6')
      if (owner && owner === '6') {
        this.articles = []
        this.total = 0
        this.getOwnerList()
      }
    }
    async getOwnerList(obj:any = {}){
      let owner = window.localStorage.getItem('6')
      const { data } = await getArticlesList(obj,owner)
      this.articles = this.articles.concat(data.list)
      this.total= data.total
    }
    getMore () {
      let data = {
        page: ++this.page,
        size: this.size
      }
     this.getOwnerList(data)
    }
    head(){
      return{
        title:'im66',//页面的title
        meta:[
          {hid:'description',name:'iam66文章列表',content:'This is articles page'}
        ]//hid是覆盖，
      }
    }
  }
</script>

<style lang="scss">
.wrap{
  width: 600px;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .get-more {
    text-align: center;
    color: #a1a2a2;
    cursor: pointer;
  }
}
</style>
