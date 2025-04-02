import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ProjectContentComponent } from '../components/projects/project-content/project-content.component';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { Configuration, Project } from '../../utils/config';

describe('Projects Component', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let mockConfiguration: jasmine.SpyObj<Configuration>;

  beforeEach(async () => {
    // Mock Configuration
    mockConfiguration = jasmine.createSpyObj('Configuration', ['sr']);
    (Configuration as any).projects = [
      {
        id: 1,
        title: 'Portfolio Website',
        description: 'A personal portfolio website built with Angular.',
        techStack: ['Angular', 'TypeScript', 'SCSS'],
        github: 'https://github.com/example/portfolio',
        website: 'https://example.com',
      },
      {
        id: 2,
        title: 'E-commerce App',
        description: 'An e-commerce application with a shopping cart and payment integration.',
        techStack: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/example/ecommerce',
        website: 'https://ecommerce.example.com',
      },
    ];

    await TestBed.configureTestingModule({
      imports: [ProjectsComponent, ProjectContentComponent, CommonModule], // Standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;

    // Mock the @ViewChild property
    component.projects = new ElementRef(document.createElement('div'));

    fixture.detectChanges();
  });

  it('should create the projects component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize work property with values from Configuration.projects', () => {
    expect(component.work).toEqual(Configuration.projects);
  });

  it('should render project items in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    // Check that the project items are rendered
    (Configuration.projects as Project[]).forEach((project:Project) => {
      expect(compiled.textContent).toContain(project.title);
      expect(compiled.textContent).toContain(project.description);
      project.techStack.forEach((tech) => {
        expect(compiled.textContent).toContain(tech);
      });
    });
  });
});
