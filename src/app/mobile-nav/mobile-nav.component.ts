import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { JobComponent } from '../work-experience/job/job.component';
import { CommonModule } from '@angular/common';
import { JobDetails, Configuration } from '../../utils/config';

@Component({
  selector: 'mobile-nav',
  imports: [NgbNavModule, JobComponent, CommonModule],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavComponent {
  active = 0;
  workExperience: JobDetails[] = Configuration.workExperience;
}
