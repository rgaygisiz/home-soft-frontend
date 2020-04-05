import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared';
import { PersonsComponent } from './components/persons/persons.component';
import { PersonsPageComponent } from './containers/persons-page/persons-page.component';
import { PersonsRoutingModule } from './persons-routing.module';
import { fromPerson } from './reducers';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonEditPageComponent } from './containers/person-edit-page/person-edit-page.component';

@NgModule({
  declarations: [PersonsComponent, PersonsPageComponent, PersonEditComponent, PersonEditPageComponent],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromPerson.personsFeatureKey, fromPerson.reducer),
  ],
})
export class PersonsModule {}
