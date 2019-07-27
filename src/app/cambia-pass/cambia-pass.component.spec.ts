import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiaPassComponent } from './cambia-pass.component';

describe('CambiaPassComponent', () => {
  let component: CambiaPassComponent;
  let fixture: ComponentFixture<CambiaPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiaPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiaPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
