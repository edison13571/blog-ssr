import { Component, Vue, Prop } from 'vue-property-decorator';
import './index.scss';

@Component({})
export default class PageNav extends Vue {
  showTopBack:boolean = false
  mounted(){
    window.addEventListener('scroll', this.scrollCpt)
  }
  beforeDestroy(){
    window.removeEventListener('scroll', this.scrollCpt)
  }
  scrollCpt(){
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    this.showTopBack = scrollTop > 300
  }
  // pageBack(){
  //   this.$router.back()
  // }
  pageTop(){
    window.scrollTo(0,0)
  }
  public render() {
    return <div class="page-nav">
      {/*<i class="iconfont" title="返回上一页" onClick = {this.pageBack.bind(this)}>&#xe61c;</i>*/}
      <i class={this.showTopBack ? 'iconfont' : 'iconfont notShow'} title="返回顶部" onClick = {this.pageTop.bind(this)}>&#xe619;</i>
    </div>
    ;
  }
}

