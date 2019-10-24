import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialTableComponent } from './editorial-table.component';

describe('EditorialTableComponent', () => {
  let component: EditorialTableComponent;
  let fixture: ComponentFixture<EditorialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
