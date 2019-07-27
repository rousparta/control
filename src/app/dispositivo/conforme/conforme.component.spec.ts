import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformeComponent } from './conforme.component';

describe('ConformeComponent', () => {
  let component: ConformeComponent;
  let fixture: ComponentFixture<ConformeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConformeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
