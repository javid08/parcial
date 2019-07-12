import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarlibrosComponent } from './agregarlibros.component';

describe('AgregarlibrosComponent', () => {
  let component: AgregarlibrosComponent;
  let fixture: ComponentFixture<AgregarlibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarlibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarlibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
