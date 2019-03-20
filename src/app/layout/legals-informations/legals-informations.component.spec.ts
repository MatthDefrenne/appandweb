import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalsInformationsComponent } from './legals-informations.component';

describe('LegalsInformationsComponent', () => {
  let component: LegalsInformationsComponent;
  let fixture: ComponentFixture<LegalsInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalsInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalsInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
