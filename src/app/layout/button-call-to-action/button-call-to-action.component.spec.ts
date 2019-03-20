import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCallToActionComponent } from './button-call-to-action.component';

describe('ButtonCallToActionComponent', () => {
  let component: ButtonCallToActionComponent;
  let fixture: ComponentFixture<ButtonCallToActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCallToActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
