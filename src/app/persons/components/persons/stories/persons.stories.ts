import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared';
import { PersonsComponent } from '../persons.component';

export default {
  title: 'Persons',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, SharedModule],
    }),
  ],
};

export const emptyPersonsDataTable = () => ({
  component: PersonsComponent,
});

export const personsDataTableWithOneRow = () => ({
  component: PersonsComponent,
  props: {
    data: [
      {
        lastName: 'Gaygisiz',
        firstName: 'Ammar Yusuf',
        birthDate: new Date(),
        birthPlace: 'Nürnberg',
      },
    ],
  },
});
