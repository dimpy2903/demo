import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12prodComponent } from './c12prod.component';

describe('C12prodComponent', () => {
  let component: C12prodComponent;
  let fixture: ComponentFixture<C12prodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12prodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C12prodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
