import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarlibrosComponent } from './editarlibros.component';

describe('EditarlibrosComponent', () => {
  let component: EditarlibrosComponent;
  let fixture: ComponentFixture<EditarlibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarlibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarlibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
