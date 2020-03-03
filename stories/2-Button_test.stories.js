import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from '../src/components/Button';

export default {
    title: 'Button_test',
    component: MyButton,
  };
export const Text = () => ({
  components: { MyButton },
  template: '<my-button @click="action" name="test">Hello Button</my-button>',
  methods: { action: action('clicked') },
});

export const Jsx = () => ({
  components: { MyButton },
  render(h) {
    return <my-button onClick={this.action} name="test">With JSX</my-button>;
  },
  methods: { action: linkTo('clicked') }, 
});

export const Emoji = () => ({
  components: { MyButton },
  template: '<my-button @click="action" name="test">😀 😎 👍 💯</my-button>',
  methods: { action: action('clicked') },
});
