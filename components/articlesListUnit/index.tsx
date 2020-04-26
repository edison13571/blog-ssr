import { Component, Vue, Prop } from 'vue-property-decorator';
import './index.scss';
import moment from 'moment'
moment.locale('zh-cn');
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
@Component({})
export default class ArticlesListUnit extends Vue {
  @Prop() info!: article;

  public render() {
    return <router-link to={"/articles/"+this.info._id}>
      <section class="article-unit">
        <h2>{this.info.title}</h2>
        <p>{this.info.words}</p>
        <div>
          <span>{moment(this.info.createdDate).format('YYYY-MM-DD HH:mm:ss')}</span>
          <span>{this.info.series}</span>
          {
            this.info.tags.map((tag)=>{
              return (<span>{tag}</span>)
            })
          }
          < span>浏览：{this.info.views}</span>
          < span>更新：{moment(this.info.updatedDate).fromNow(true)}</span>
        </div>
      </section>
      </router-link>
    ;
  }
}

