import { TestBed, inject } from '@angular/core/testing';

import { CourseSearchService } from './course-search.service';

describe('CourseSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseSearchService]
    });
  });

  it('should ...', inject([CourseSearchService], (service: CourseSearchService) => {
    expect(service).toBeTruthy();
  }));
});
