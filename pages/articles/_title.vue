<template>
  <div class="container">
    <div class="article-content">
      <div v-html="htmlMD"></div>
      <!--<div>articles {{info.id}}</div>-->
      <!--<div>{{info.label}}</div>-->
      <!--<div>{{info.recommend}}</div>-->
      <!--<div>{{info.content}}</div>-->
      <!--<div>-->
        <!--<span>{{info.date}}</span>-->
        <!--<span v-for="(item,index) in info.tags" :key="index">{{item}}</span>-->
      <!--</div>-->
    </div>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import marked from 'marked'
  @Component({
    // components: VueMarkdown
  })
  export default class Article extends Vue{
    title:number|string = 0;
    htmlMD:string = '';
    created(){
      this.title = this.$route.params.title
      this.getDetail(this.title)
    }
    getDetail(name:string){
      const url = `./doc/${name}.md`;
      this.$axios.get(url).then((response) => {
        this.htmlMD = marked(response.data)
      });
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
