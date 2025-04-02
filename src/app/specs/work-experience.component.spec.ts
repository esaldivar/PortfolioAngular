import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperienceComponent } from '../components/work-experience/work-experience.component';
import { NgbdNavVertical } from '../components/nav/nav.component';
import { MobileNavComponent } from '../components/mobile-nav/mobile-nav.component';
import { ElementRef } from '@angular/core';
import { Configuration } from '../../utils/config';

describe('Work Experience Component', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;
  let mockConfiguration: jasmine.SpyObj<Configuration>;

  beforeEach(async () => {
    // Mock Configuration
    mockConfiguration = jasmine.createSpyObj('Configuration', ['sr']);

    await TestBed.configureTestingModule({
      imports: [WorkExperienceComponent, NgbdNavVertical, MobileNavComponent], // Standalone component
      providers: [{ provide: Configuration, useValue: mockConfiguration }],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;

    // Mock the @ViewChild property
    component.work = new ElementRef(document.createElement('div'));

    fixture.detectChanges();
  });

  it('should create the work-experience component', () => {
    expect(component).toBeTruthy();
  });

});
