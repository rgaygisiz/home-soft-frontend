import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared';
import { BankEditComponent } from '../bank-edit.component';

export default {
  title: 'Banks',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, SharedModule],
    }),
  ],
};

export const emptyBankEdit = () => ({
  component: BankEditComponent,
});

export const filledBankEdit = () => ({
  component: BankEditComponent,
  props: {
    data: [
      {
        name: 'Dummy Bank',
        bic: 'FRSPDE66XXX',
        blz: '68050101',
      },
    ],
  },
});
