import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistenciaFormComponent } from './existencia-form.component';

describe('ExistenciaFormComponent', () => {
  let component: ExistenciaFormComponent;
  let fixture: ComponentFixture<ExistenciaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistenciaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistenciaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
