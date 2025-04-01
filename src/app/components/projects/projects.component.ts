import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Configuration, Project } from '../../../utils/config';
import { ProjectContentComponent } from './project-content/project-content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectContentComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('projects') projects!: ElementRef;
  config = new Configuration();
  work: Project[] = Configuration.projects;

  ngAfterViewInit () {
    this.config.sr(this.projects);
  }
  
}
