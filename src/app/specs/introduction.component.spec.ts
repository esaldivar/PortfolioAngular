import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroductionComponent } from '../components/introduction/introduction.component';
import { ElementRef } from '@angular/core';
import { Configuration } from '../../utils/config';

describe('Introduction Component', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;
  let mockConfiguration: jasmine.SpyObj<Configuration>;

  beforeEach(async () => {
    // Mock Configuration
    mockConfiguration = jasmine.createSpyObj('Configuration', ['sr', 'srConfig']);
    mockConfiguration.srConfig.and.returnValue({
      origin: 'top',
      distance: '50px',
      duration: 500,
      delay: 1000,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: false,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    await TestBed.configureTestingModule({
      imports: [IntroductionComponent], // Standalone component
      providers: [{ provide: Configuration, useValue: mockConfiguration }],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;

    // Mock the @ViewChild property
    component.introduction = new ElementRef(document.createElement('div'));

    fixture.detectChanges();
  });

  it('should create the introduction component', () => {
    expect(component).toBeTruthy();
  });

});
