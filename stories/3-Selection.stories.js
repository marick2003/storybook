import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MySelection from '../src/components/Selectbox';

export default {
    title: 'Selection_test',
    component: MySelection,  
  };
export const Options = () => ({
  components: { MySelection },
  template: '<MySelection :options="aoptions"></MySelection>',
  data:function() {

    return {
        aoptions:[
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ]
     }
  }
});

