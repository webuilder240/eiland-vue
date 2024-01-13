import { h, createApp } from 'vue';
const COMPONENT_PATH = process.env.EILAND_PATH || 'components';

export class VueEiland extends HTMLElement {
  constructor() {
    super()
    this.vueInstance = null
  }

  connectedCallback() {
    this.name = this.dataset.name
    this.loadVueInstance()
  }

  kebabToPascalCase(str) {
    return str.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
  }

  async loadComponet() {
    const componentName = this.kebabToPascalCase(this.name);
    const componentModule = await import(`${COMPONENT_PATH}/${componentName}.vue`);
    const AsyncComponent = componentModule.default;
    return AsyncComponent;
  }

  async loadVueInstance() {
    const props = this.initalProps()
    if (!this.vueInstance) {
      const AsyncComponent = await this.loadComponet();

      const hasProps = (Object.keys(props).length > 0)
      if (hasProps) {
        this.vueInstance = createApp({
          render() {
            return h(AsyncComponent, props);
          }
        });
      } else {
        this.vueInstance = createApp({
          render() {
            return h(AsyncComponent);
          }
        });
      }
      this.vueInstance.mount(this);
    }
  }

  initalProps() {
    return JSON.parse(this.dataset.initProps || '{}');
  }

  unloadVueInstance() {
    if (this.vueInstance) {
      this.vueInstance.unmount();
      this.vueInstance = null;
    }
  }

  disconnectedCallback() {
    this.unloadVueInstance();
  }
}
