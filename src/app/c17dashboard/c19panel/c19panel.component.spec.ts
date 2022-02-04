import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C19panelComponent } from './c19panel.component';

describe('C19panelComponent', () => {
  let component: C19panelComponent;
  let fixture: ComponentFixture<C19panelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C19panelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C19panelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
