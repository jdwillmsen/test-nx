import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestLibOneComponent } from './test-lib-one.component';

describe('TestLibOneComponent', () => {
  let component: TestLibOneComponent;
  let fixture: ComponentFixture<TestLibOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLibOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestLibOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
