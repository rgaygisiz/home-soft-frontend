import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared';
import { AccountEditComponent } from '../account-edit.component';

export default {
  title: 'Accounts',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, SharedModule],
    }),
  ],
};

export const emptyAccountEdit = () => ({
  component: AccountEditComponent,
});

export const filledAccountEdit = () => ({
  component: AccountEditComponent,
  props: {
    data: [
      {
        number: 'ABCDEFGHI',
        bankName: 'Sparkasse Köln Bonn',
        holder: 'Resul Gaygisiz',
      },
    ],
  },
});
