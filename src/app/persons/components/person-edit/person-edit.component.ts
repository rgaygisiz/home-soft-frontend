import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kosaml-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
})
export class PersonEditComponent implements OnInit {
  personForm: FormGroup;

  lastNameFormControl: FormControl = new FormControl(null, [Validators.required]);
  firstNameFormControl: FormControl = new FormControl(null, [Validators.required]);
  birthDateFormControl: FormControl = new FormControl(null, [Validators.required]);
  birthPlaceFormControl: FormControl = new FormControl(null, [Validators.required]);

  constructor() {}

  ngOnInit() {
    this.personForm = new FormGroup({
      lastName: this.lastNameFormControl,
      firstName: this.firstNameFormControl,
      birthDate: this.birthDateFormControl,
      birthPlace: this.birthPlaceFormControl,
    });
  }
}
