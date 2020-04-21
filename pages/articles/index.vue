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

  interface article{
    _id:string;
    title:string;
    words:string;
    createdDate:string;
    tags:string[];
    location:string;
  }

  @Component({
    components: {
      Unit
    }
  })
  export default class Articles extends Vue {
    articles:article[] = [];
    total:number = 0;
    async asyncData ({$axios}:any) {
      const url = `https://api.iam66.com/api/articles/list`;
      const { data } = await $axios.get(url)
      return {articles:data.data.list,total:data.data.total}
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
