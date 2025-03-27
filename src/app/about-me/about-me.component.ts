import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Configuration } from '../../utils/config';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('about') about!: ElementRef;
  config = new Configuration();
  cdnUrl = import.meta.env.NG_APP_CLOUDFRONT_CDN + "/aboutme.webp";

  ngAfterViewInit () {
    const options = {
      ...this.config.srConfig(),
      delay: 2500,
      viewFactor: 0
    }
    this.config.sr(this.about, options);
  }
  
}
