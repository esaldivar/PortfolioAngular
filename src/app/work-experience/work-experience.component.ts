import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Configuration } from '../../utils/config';
import { NgbdNavVertical } from '../nav/nav.component';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-work-experience',
  imports: [NgbdNavVertical, MobileNavComponent],
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
