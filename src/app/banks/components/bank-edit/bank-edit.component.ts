import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bank } from '../../models';

@Component({
  selector: 'kosaml-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.scss'],
})
export class BankEditComponent implements OnInit {
  @Input()
  data: Bank;

  @Output()
  cancel: EventEmitter<void> = new EventEmitter();

  bankForm: FormGroup;

  nameFormControl: FormControl = new FormControl(null, [Validators.required]);
  bicFormControl: FormControl = new FormControl(null, [Validators.required]);
  blzFormControl: FormControl = new FormControl(null, [Validators.required]);

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.bankForm = new FormGroup({
      name: this.nameFormControl,
      bic: this.bicFormControl,
      blz: this.blzFormControl,
    });

    if (this.data) {
      this.nameFormControl.setValue(this.data.name);
      this.bicFormControl.setValue(this.data.bic);
      this.blzFormControl.setValue(this.data.blz);
    }
  }

  onCancel() {
    this.cancel.next();
  }
}
