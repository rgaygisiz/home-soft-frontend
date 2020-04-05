import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsPageComponent } from './containers';
import { PersonEditPageComponent } from './containers/person-edit-page/person-edit-page.component';

const routes: Routes = [
  { path: '', component: PersonsPageComponent },
  { path: 'edit', component: PersonEditPageComponent },
  { path: 'new', component: PersonEditPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonsRoutingModule {}
