import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoconformeComponent } from './noconforme.component';

describe('NoconformeComponent', () => {
  let component: NoconformeComponent;
  let fixture: ComponentFixture<NoconformeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoconformeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoconformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
