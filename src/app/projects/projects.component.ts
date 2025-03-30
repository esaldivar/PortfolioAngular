import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Configuration } from '../../utils/config';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('projects') projects!: ElementRef;
  config = new Configuration();

  ngAfterViewInit () {
    this.config.sr(this.projects);
  }
  
}
