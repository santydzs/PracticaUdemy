import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitcherListCardComponent } from './witcher-list-card.component';

describe('WitcherListCardComponent', () => {
  let component: WitcherListCardComponent;
  let fixture: ComponentFixture<WitcherListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitcherListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitcherListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
