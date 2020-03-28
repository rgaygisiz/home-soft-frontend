import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared';
import { AccountsComponent } from '../accounts.component';

export default {
  title: 'Accounts',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, SharedModule],
    }),
  ],
};

export const emptyAccountsDataTable = () => ({
  component: AccountsComponent,
});

export const accountsDataTableWithOneRow = () => ({
  component: AccountsComponent,
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
