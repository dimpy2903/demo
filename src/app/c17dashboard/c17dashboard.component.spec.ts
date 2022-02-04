import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C17dashboardComponent } from './c17dashboard.component';

describe('C17dashboardComponent', () => {
  let component: C17dashboardComponent;
  let fixture: ComponentFixture<C17dashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C17dashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C17dashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
