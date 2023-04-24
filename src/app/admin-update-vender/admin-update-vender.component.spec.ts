import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateVenderComponent } from './admin-update-vender.component';

describe('AdminUpdateVenderComponent', () => {
  let component: AdminUpdateVenderComponent;
  let fixture: ComponentFixture<AdminUpdateVenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateVenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
