import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectContentComponent } from '../components/projects/project-content/project-content.component';
import { CommonModule } from '@angular/common';
import { Project } from '../../utils/config';

describe('ProjectContentComponent', () => {
  let component: ProjectContentComponent;
  let fixture: ComponentFixture<ProjectContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectContentComponent, CommonModule], // Standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectContentComponent);
    component = fixture.componentInstance;
  });

  it('should create the project-content component', () => {
    expect(component).toBeTruthy();
  });

  it('should set projectOnLeft to true if listNumber is even', () => {
    component.listNumber = 2; // Even number
    component.ngOnInit();
    expect(component.projectOnLeft).toBeTrue();
  });

  it('should set projectOnLeft to false if listNumber is odd', () => {
    component.listNumber = 3; // Odd number
    component.ngOnInit();
    expect(component.projectOnLeft).toBeFalse();
  });

  it('should render project details in the template', () => {
    const mockProject: Project = {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular.',
      techStack: ['Angular', 'TypeScript', 'SCSS'],
      github: 'https://github.com/example/portfolio',
      imageUrl: 'https://example.com/image.png',
    };

    component.project = mockProject;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    // Check that the project details are rendered
    expect(compiled.textContent).toContain(mockProject.title);
    expect(compiled.textContent).toContain(mockProject.description);
    mockProject.techStack.forEach((tech) => {
      expect(compiled.textContent).toContain(tech);
    });
    const githubLink = compiled.querySelector('a[href="https://github.com/example/portfolio"]');
    expect(githubLink).toBeTruthy();
  });
});
