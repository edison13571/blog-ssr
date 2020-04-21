import { Component, Vue, Prop } from 'vue-property-decorator';
import './index.scss';
import moment from 'moment'
interface article{
  _id:string;
  title:string;
  words:string;
  createdDate:string;
  tags:string[];
  location:string;
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
          < span>{moment(this.info.createdDate).format('YYYY-MM-DD HH:mm:ss')}</span>
          {
            this.info.tags.map((tag)=>{
              return (<span>{tag}</span>)
            })
          }
        </div>
      </section>
      </router-link>
    ;
  }
}

