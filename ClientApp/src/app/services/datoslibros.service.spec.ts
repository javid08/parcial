import { TestBed } from '@angular/core/testing';

import { DatoslibrosService } from './datoslibros.service';

describe('DatoslibrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatoslibrosService = TestBed.get(DatoslibrosService);
    expect(service).toBeTruthy();
  });
});
