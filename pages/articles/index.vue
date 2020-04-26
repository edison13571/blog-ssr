<template>
  <div class="container">
    <div class="wrap">
      <Unit v-for="item in articles" :key="item.id" :info="item" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import Unit from '../../components/articlesListUnit'
  import {getArticlesList} from  '../../api/articles'

  interface article{
    _id:string;
    title:string;
    words:string;
    createdDate:number;
    updatedDate:number;
    tags:string[];
    location:string;
    views:number;
  }

  @Component({
    components: {
      Unit
    }
  })
  export default class Articles extends Vue {
    articles:article[] = [];
    total:number = 0;
    async asyncData () {
      const { data } = await getArticlesList()
      return {articles:data.list,total:data.total}
    }
    mounted(){
      let owner = window.localStorage.getItem('6')
      if (owner && owner === '6') {
        this.getOnwerList()
      }
    }
    async getOnwerList(){
      const { data } = await getArticlesList({},true)
      this.articles = data.list
      this.total= data.total
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
}
</style>
