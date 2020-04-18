<template>
  <div class="container">
    <div>
      <div>articles {{info.id}}</div>
      <div>{{info.label}}</div>
      <div>{{info.recommend}}</div>
      <div>{{info.content}}</div>
      <div>
        <span>{{info.date}}</span>
        <span v-for="(item,index) in info.tags" :key="index">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  interface article{
    id:number;
    label:string;
    recommend:string;
    date:string;
    content:string;
    tags:string[];
  }
  @Component({})
  export default class Article extends Vue{
    id:number|string = 0;
    info!:article;
    created(){
      this.id = Number(this.$route.params.id)
      this.getDetail(this.id)
    }
    getDetail(id:number){
      function makeUnit(id:number):article {
        return {
          id: id,
          label: '标题' + id,
          recommend: '推荐语' + id,
          date: '2020-4-15',
          content: '内容' + id,
          tags: ['标签','标签']
        }
      }
      this.info = makeUnit(id)
    }
    head(){
      return{
        title:this.info.label,//页面的title
        meta:[
          {hid:'description',name:this.info.label,content:this.info.recommend}
        ]//hid是覆盖，
      }
    }
  }
</script>

<style>

</style>
