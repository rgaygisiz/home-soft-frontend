import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { PersonsComponent } from './components/persons/persons.component';
import { PersonsRoutingModule } from './persons-routing.module';
import { fromPerson } from './reducers';

@NgModule({
  declarations: [PersonsComponent],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    StoreModule.forFeature(fromPerson.personsFeatureKey, fromPerson.reducer),
  ],
})
export class PersonsModule {}
