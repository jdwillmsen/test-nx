import { TestBed } from '@angular/core/testing';
import { ComponentOneComponent } from './component-one.component';

describe(ComponentOneComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(ComponentOneComponent, {
      add: {
        imports: [],
        providers: []
      }
    })
  })

  it('renders', () => {
     cy.mount(ComponentOneComponent,);
  })

})
