import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSpotiComponent } from './search-spoti.component';

describe('SearchSpotiComponent', () => {
  let component: SearchSpotiComponent;
  let fixture: ComponentFixture<SearchSpotiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSpotiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSpotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
