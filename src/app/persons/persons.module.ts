import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersonsComponent } from './components/persons/persons.component';
import { PersonsRoutingModule } from './persons-routing.module';

@NgModule({
  declarations: [PersonsComponent],
  imports: [CommonModule, PersonsRoutingModule],
})
export class PersonsModule {}
