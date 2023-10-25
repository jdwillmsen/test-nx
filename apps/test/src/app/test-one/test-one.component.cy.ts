import { TestBed } from '@angular/core/testing';
import { TestOneComponent } from './test-one.component';
import { mount } from 'cypress/angular';

describe(TestOneComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(TestOneComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    mount(TestOneComponent);
  });
});
