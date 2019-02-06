import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitcherPersonComponent } from './witcher-person.component';

describe('WitcherPersonComponent', () => {
  let component: WitcherPersonComponent;
  let fixture: ComponentFixture<WitcherPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitcherPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitcherPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
