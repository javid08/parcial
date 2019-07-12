import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultalibrosComponent } from './consultalibros.component';

describe('ConsultalibrosComponent', () => {
  let component: ConsultalibrosComponent;
  let fixture: ComponentFixture<ConsultalibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultalibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultalibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
