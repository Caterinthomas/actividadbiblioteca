import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTableComponent } from './tipo-table.component';

describe('TipoTableComponent', () => {
  let component: TipoTableComponent;
  let fixture: ComponentFixture<TipoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
