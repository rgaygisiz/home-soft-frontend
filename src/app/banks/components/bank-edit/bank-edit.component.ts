import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kosaml-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.scss'],
})
export class BankEditComponent implements OnInit {
  bankForm: FormGroup;

  nameFormControl: FormControl = new FormControl(null, [Validators.required]);
  bicFormControl: FormControl = new FormControl(null, [Validators.required]);
  blzFormControl: FormControl = new FormControl(null, [Validators.required]);

  constructor() {}

  ngOnInit() {
    this.bankForm = new FormGroup({
      name: this.nameFormControl,
      bic: this.bicFormControl,
      blz: this.blzFormControl,
    });
  }
}
