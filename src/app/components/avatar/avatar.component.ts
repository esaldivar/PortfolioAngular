import { Component, ElementRef, ViewChild } from '@angular/core';
import { Configuration } from '../../../utils/config';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @ViewChild('logo') logo!: ElementRef;
  config = new Configuration();
  cdnUrl = import.meta.env.NG_APP_CLOUDFRONT_CDN + "/logo.webp";
  
  ngAfterViewInit () {
    const options = {
      ...this.config.srConfig(),
      origin: 'top',
      delay: 1000
    }

    this.config.sr(this.logo, options);
  }
  
}
