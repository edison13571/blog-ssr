import { Component, Vue } from 'vue-property-decorator';
import './footer.scss';
@Component({})
export default class Footer extends Vue {
  // Footer
  public render() {
    return <footer><a href='http://www.beian.miit.gov.cn/'>沪ICP备19015099号-1</a></footer>;
  }
}

