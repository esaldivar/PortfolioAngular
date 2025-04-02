import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbdNavVertical } from '../components/nav/nav.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { JobComponent } from '../components/work-experience/job/job.component';
import { CommonModule } from '@angular/common';
import { Configuration, JobDetails } from '../../utils/config';

describe('Ngbd Nav Vertical', () => {
  let component: NgbdNavVertical;
  let fixture: ComponentFixture<NgbdNavVertical>;

  beforeEach(async () => {
    // Mock Configuration.workExperience
    (Configuration as any).workExperience = [
      {
        id: 1,
        title: 'Software Engineer',
        company: 'Tech Corp',
        shortCompanyName: 'Tech',
        companyUrl: 'https://www.techcorp.com',
        range: 'Jan 2020 - Present',
        bullets: ['Developed and maintained web applications.'],
      },
      {
        id: 2,
        title: 'Frontend Developer',
        company: 'Web Solutions',
        shortCompanyName: 'Web',
        companyUrl: 'https://www.websolutions.com',
        range: 'Jan 2018 - Dec 2019',
        bullets: ['Built responsive UI components.'],
      },
    ];

    await TestBed.configureTestingModule({
      imports: [NgbdNavVertical, NgbNavModule, JobComponent, CommonModule], // Standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(NgbdNavVertical);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the NgbdNavVertical component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize active property to 1', () => {
    expect(component.active).toBe(1);
  });

  it('should initialize workExperience with values from Configuration', () => {
    expect(component.workExperience).toEqual(Configuration.workExperience);
  });
});
