import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualAdminComponent } from './actual-admin.component';

describe('ActualAdminComponent', () => {
  let component: ActualAdminComponent;
  let fixture: ComponentFixture<ActualAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
