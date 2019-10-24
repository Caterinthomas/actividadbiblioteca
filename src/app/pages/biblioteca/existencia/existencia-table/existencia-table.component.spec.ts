import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistenciaTableComponent } from './existencia-table.component';

describe('ExistenciaTableComponent', () => {
  let component: ExistenciaTableComponent;
  let fixture: ComponentFixture<ExistenciaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistenciaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistenciaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
