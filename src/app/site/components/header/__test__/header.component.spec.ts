import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../header.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should compile', () => {
    fixture.detectChanges();

    /**
     * The login form is a presentational component, as it
     * only derives its state from inputs and communicates
     * externally through outputs. We can use snapshot
     * tests to validate the presentation state of this component
     * by changing its inputs and snapshotting the generated
     * HTML.
     *
     * We can also use this as a validation tool against changes
     * to the component's template against the currently stored
     * snapshot.
     */
    expect(fixture).toMatchSnapshot();
  });
});
