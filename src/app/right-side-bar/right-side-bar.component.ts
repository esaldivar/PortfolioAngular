import { Component, ElementRef, ViewChild } from '@angular/core';
import { Configuration } from '../../utils/config';

@Component({
  selector: 'app-right-side-bar',
  imports: [],
  templateUrl: './right-side-bar.component.html',
  styleUrl: './right-side-bar.component.scss'
})
export class RightSideBarComponent {
  @ViewChild('resume') resume!: ElementRef;
  @ViewChild('emailAddress') emailAddress!: ElementRef;
  cdnUrl = import.meta.env.NG_APP_CLOUDFRONT_CDN + "/Eric+Saldivar+Resume+25.pdf";
  email = 'esaldivar1214@gmail.com';
  config = new Configuration();
       
  ngAfterViewInit () {
    const topRevealOptions = {
      ...this.config.srConfig(),
      origin: 'top',
      delay: 1000
    }
    const options = {
      ...this.config.srConfig(),
      delay: 3000,
      distance: '0px'
    }
    this.config.sr(this.resume, topRevealOptions);
    this.config.sr(this.emailAddress, options);
  }
}
