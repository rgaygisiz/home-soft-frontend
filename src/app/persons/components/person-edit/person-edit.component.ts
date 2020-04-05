import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../models';

@Component({
  selector: 'kosaml-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
})
export class PersonEditComponent implements OnInit {
  @Input()
  data: Person;

  @Output()
  cancel: EventEmitter<void> = new EventEmitter();

  personForm: FormGroup;

  lastNameFormControl: FormControl = new FormControl(null, [Validators.required]);
  firstNameFormControl: FormControl = new FormControl(null, [Validators.required]);
  birthDateFormControl: FormControl = new FormControl(null, [Validators.required]);
  birthPlaceFormControl: FormControl = new FormControl(null, [Validators.required]);

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.personForm = new FormGroup({
      lastName: this.lastNameFormControl,
      firstName: this.firstNameFormControl,
      birthDate: this.birthDateFormControl,
      birthPlace: this.birthPlaceFormControl,
    });
  }

  onCancel() {
    this.cancel.next();
  }
}
