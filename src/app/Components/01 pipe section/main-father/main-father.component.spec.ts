import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFatherComponent } from './main-father.component';

describe('MainFatherComponent', () => {
  let component: MainFatherComponent;
  let fixture: ComponentFixture<MainFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
