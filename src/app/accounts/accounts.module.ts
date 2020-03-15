import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountsRoutingModule } from './accounts-routing.module';
// todo: import the according container instead of the component
import { AccountsComponent } from './components';

@NgModule({
  declarations: [AccountsComponent],
  imports: [CommonModule, AccountsRoutingModule],
})
export class AccountsModule {}
