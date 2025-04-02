import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobComponent } from '../components/work-experience/job/job.component';
import { JobDetails } from '../../utils/config';
import { CommonModule } from '@angular/common';

describe('Job Component', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, JobComponent], // Standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
  });

  it('should create the job component', () => {
    expect(component).toBeTruthy();
  });

  it('should throw an error if jobDetails input is not provided', () => {
    expect(() => fixture.detectChanges()).toThrowError(/Cannot read properties of undefined/);
  });

  it('should render jobDetails correctly in the template', () => {
    const mockJobDetails: JobDetails = {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Corp',
      shortCompanyName: 'Tech',
      companyUrl: 'https://www.techcorp.com',
      range: 'Jan 2020 - Present',
      bullets: ['Developed and maintained web applications.'],
    };

    component.jobDetails = mockJobDetails;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain(mockJobDetails.title);
    expect(compiled.textContent).toContain(mockJobDetails.company);
    expect(compiled.textContent).toContain(mockJobDetails.shortCompanyName);
    expect(compiled.textContent).toContain(mockJobDetails.range);
    expect(compiled.textContent).toContain(mockJobDetails.bullets[0]);
  });
});