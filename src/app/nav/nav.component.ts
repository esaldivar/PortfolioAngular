import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { JobComponent } from '../work-experience/job/job.component';
import { Configuration, JobDetails } from '../../utils/config';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'work-nav',
	imports: [NgbNavModule, JobComponent, CommonModule],
	templateUrl: './nav.component.html',
})
export class NgbdNavVertical {
	active = 1;
	workExperience: JobDetails[] = Configuration.workExperience;
}