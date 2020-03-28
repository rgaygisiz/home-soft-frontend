import { moduleMetadata } from '@storybook/angular';
import { CardComponent } from '../..';
import { SharedModule } from '../../..';

export default {
  title: 'Card',
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
};

export const emptyCard = () => ({
  component: CardComponent,
});
