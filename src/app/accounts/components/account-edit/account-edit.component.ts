import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kosaml-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss'],
})
export class AccountEditComponent implements OnInit {
  accountForm: FormGroup;

  numberFormControl: FormControl = new FormControl(null, [Validators.required]);
  bankNameFormControl: FormControl = new FormControl(null, [Validators.required]);
  holderFormControl: FormControl = new FormControl(null, [Validators.required]);

  constructor() {}

  ngOnInit() {
    this.accountForm = new FormGroup({
      number: this.numberFormControl,
      bankName: this.bankNameFormControl,
      holder: this.holderFormControl,
    });
  }
}
