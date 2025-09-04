import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProfileFromComponent } from './complete-profile-from.component';

describe('CompleteProfileFromComponent', () => {
  let component: CompleteProfileFromComponent;
  let fixture: ComponentFixture<CompleteProfileFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteProfileFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteProfileFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
