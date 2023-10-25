import { TestBed } from '@angular/core/testing';
import { TestLibOneComponent } from './test-lib-one.component';

describe(TestLibOneComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(TestLibOneComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(TestLibOneComponent);
  });
});
