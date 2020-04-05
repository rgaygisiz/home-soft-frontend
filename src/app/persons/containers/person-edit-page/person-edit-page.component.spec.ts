import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEditPageComponent } from './person-edit-page.component';

describe('PersonEditPageComponent', () => {
  let component: PersonEditPageComponent;
  let fixture: ComponentFixture<PersonEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
