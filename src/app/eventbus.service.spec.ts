/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventbusService } from './eventbus.service';

describe('Service: Eventbus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventbusService]
    });
  });

  it('should ...', inject([EventbusService], (service: EventbusService) => {
    expect(service).toBeTruthy();
  }));
});
