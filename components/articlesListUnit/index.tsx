import { Component, Vue, Prop } from 'vue-property-decorator';
import './index.scss';
interface article{
  id:number;
  label:string;
  recommend:string;
  date:string;
  tags:string[];
}
@Component({})
export default class ArticlesListUnit extends Vue {
  @Prop() info!: article;

  public render() {
    return <router-link to={"/articles/"+this.info.label}>
      <section>
        <h3>{this.info.label}</h3>
        <p>{this.info.recommend}</p>
        <div>
          < span>{this.info.date}</span>
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

