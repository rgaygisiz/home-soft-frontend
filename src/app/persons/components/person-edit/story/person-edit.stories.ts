import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared';
import { PersonEditComponent } from '../person-edit.component';

export default {
  title: 'Persons',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, SharedModule],
    }),
  ],
};

export const emptyPersonEdit = () => ({
  component: PersonEditComponent,
});

export const filledPersonEdit = () => ({
  component: PersonEditComponent,
  props: {
    data: [
      {
        firstName: 'Ammar Yusuf',
        lastName: 'Gaygisiz',
        birthDate: new Date(2018, 3, 26),
        birthPlace: 'Nürnberg',
      },
    ],
  },
});
