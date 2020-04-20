<template>
  <div class="container">
    <div>
      <Unit v-for="item in articles" :key="item.id" :info="item" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import Unit from '../../components/articlesListUnit'

  interface article{
    id:number;
    label:string;
    recommend:string;
    date:string;
    tags:string[];
  }

  @Component({
    components: {
      Unit
    }
  })
  export default class Articles extends Vue {
    articles:article[] = [];
    created(){
      this.getList()
    }
    getList(){
      let num:number = 3;
      let arr:article[] = [];
      function makeUnit(id:number):article {
        return {
          id: id,
          label: id===1?'README':'TEST',
          recommend: '推荐语' + id,
          date: '2020-4-15',
          tags: ['标签','标签']
        }
      }
      for (let i = 0 ; i < num; i++) {
        arr.push(makeUnit(i+1));
      }
      this.articles = arr;
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

<style>

</style>
