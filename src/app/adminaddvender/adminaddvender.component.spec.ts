import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddvenderComponent } from './adminaddvender.component';

describe('AdminaddvenderComponent', () => {
  let component: AdminaddvenderComponent;
  let fixture: ComponentFixture<AdminaddvenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddvenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaddvenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
