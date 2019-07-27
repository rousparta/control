import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiofrecuenciaComponent } from './radiofrecuencia.component';

describe('RadiofrecuenciaComponent', () => {
  let component: RadiofrecuenciaComponent;
  let fixture: ComponentFixture<RadiofrecuenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiofrecuenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiofrecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
