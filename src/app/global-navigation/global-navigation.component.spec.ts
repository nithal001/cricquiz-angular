import { TestBed } from '@angular/core/testing';

import { GlobalNavigationComponent } from './global-navigation.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [GlobalNavigationComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(GlobalNavigationComponent);
    expect(fixture.componentInstance instanceof GlobalNavigationComponent).toBe(true, 'should create GlobalNavigationComponent');
  });
});
