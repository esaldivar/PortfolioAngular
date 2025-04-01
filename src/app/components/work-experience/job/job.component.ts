import { Component, Input } from '@angular/core';
import { JobDetails } from '../../../../utils/config';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-job',
  imports: [CommonModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  @Input({required:true}) jobDetails!: JobDetails;

}
