import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountEditPageComponent, AccountsPageComponent } from './containers';

const routes: Routes = [
  { path: '', component: AccountsPageComponent },
  { path: 'edit', component: AccountEditPageComponent },
  { path: 'new', component: AccountEditPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
