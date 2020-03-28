import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared';
import { BanksComponent } from '../banks.component';

export default {
  title: 'Banks',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, SharedModule],
    }),
  ],
};

export const emptyBankDataTable = () => ({
  component: BanksComponent,
});

export const bankDataTableWithOneRow = () => ({
  component: BanksComponent,
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
