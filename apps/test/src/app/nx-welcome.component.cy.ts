import { TestBed } from '@angular/core/testing';
import { NxWelcomeComponent } from './nx-welcome.component';
import { mount } from 'cypress/angular';

describe(NxWelcomeComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(NxWelcomeComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    mount(NxWelcomeComponent);
  });

  it('header is setup correctly', () => {
    mount(NxWelcomeComponent);
    cy.get('h1').should('contain.text', 'Hello there,');
  });
});
