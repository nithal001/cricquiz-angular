import { TestBed } from '@angular/core/testing';

import { HomeCarouselComponent } from './home-carousel.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [HomeCarouselComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(HomeCarouselComponent);
    expect(fixture.componentInstance instanceof HomeCarouselComponent).toBe(true, 'should create HomeCarouselComponent');
  });
});
