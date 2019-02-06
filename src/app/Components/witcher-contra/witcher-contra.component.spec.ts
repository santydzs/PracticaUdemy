import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitcherContraComponent } from './witcher-contra.component';

describe('WitcherContraComponent', () => {
  let component: WitcherContraComponent;
  let fixture: ComponentFixture<WitcherContraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitcherContraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitcherContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
