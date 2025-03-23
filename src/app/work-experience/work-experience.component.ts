import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Configuration } from '../../utils/config';

@Component({
  selector: 'app-work-experience',
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent implements AfterViewInit {
  @ViewChild('work') work!: ElementRef;
  config = new Configuration();
  
  ngAfterViewInit () {
    this.config.sr(this.work);
  }
  
}
