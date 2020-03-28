import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsPageComponent } from './containers';

const routes: Routes = [{ path: '', component: PersonsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonsRoutingModule {}
