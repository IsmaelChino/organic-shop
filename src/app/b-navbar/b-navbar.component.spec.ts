import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BNavbarComponent } from './b-navbar.component';

describe('BNavbarComponent', () => {
  let component: BNavbarComponent;
  let fixture: ComponentFixture<BNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
