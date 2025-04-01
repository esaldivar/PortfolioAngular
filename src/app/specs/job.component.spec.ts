import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobComponent } from '../components/work-experience/job/job.component';

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    }).compileComponents();

    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    // Provide mock data for the job input
    component.jobDetails = {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Corp',
      companyUrl: 'www.techcorp.com',
      shortCompanyName: 'TC',
      range: 'Jan 2020 - Present',
      bullets: [
        'Developed new features for the company\'s main product.',
        'Collaborated with cross-functional teams to enhance product functionality.',
        'Participated in code reviews and contributed to team knowledge sharing.'
      ]
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});