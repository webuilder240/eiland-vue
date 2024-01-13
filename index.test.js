process.env.EILAND_PATH = './test_components';
import { VueEiland } from './index'; // あなたのカスタムエレメントのパス
customElements.define('vue-eiland', VueEiland)

describe('VueEiland custom element', () => {
  let eiland;
  describe("not Props", () => {
    beforeEach(async () => {
      document.body.innerHTML = `
        <vue-eiland data-name="hoge"></vue-eiland>
      `
      eiland = document.getElementsByTagName('vue-eiland')[0];
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    afterEach(() => {
      document.body.innerHTML = '';
    });

    it('should create and mount Vue instance', async () => {
      expect(eiland.innerHTML.match(/Hello/g)?.length).toEqual(1)
    });
  })

  describe("has Props", () => {
    const demoProps = JSON.stringify({
      user: {
        name: "John Doe",
        age: 30
      }
    })

    beforeEach(async () => {
      document.body.innerHTML = `
        <vue-eiland data-name="has-props" data-init-props='${demoProps}'></vue-eiland>
      `
      eiland = document.getElementsByTagName('vue-eiland')[0];
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    afterEach(() => {
      document.body.innerHTML = '';
    });

    it('should create and mount Vue instance', async () => {
      console.log(eiland.innerHTML)
      expect(eiland.innerHTML.match(/John/g)?.length).toEqual(1)
    });
  })
});
