import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C18infoComponent } from './c18info.component';

describe('C18infoComponent', () => {
  let component: C18infoComponent;
  let fixture: ComponentFixture<C18infoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C18infoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C18infoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
