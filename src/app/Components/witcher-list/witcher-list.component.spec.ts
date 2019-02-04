import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitcherListComponent } from './witcher-list.component';

describe('WitcherListComponent', () => {
  let component: WitcherListComponent;
  let fixture: ComponentFixture<WitcherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitcherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitcherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
