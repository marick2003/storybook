import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MySelection from '../src/components/Selectbox';

export default {
    title: 'Selection_test',
    component: MySelection,  
  };
export const Options = () => ({
  components: { MySelection },
  template: '<MySelection :options="options"></MySelection>',
  data:{
        options: {
            "1": "foo",
            "2": "bar",
            "3": "baz"
        }
    },
});

