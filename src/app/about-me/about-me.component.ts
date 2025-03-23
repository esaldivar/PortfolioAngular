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
  
  ngAfterViewInit () {
    const options = {
      ...this.config.srConfig(),
      delay: 2500
    }
    this.config.sr(this.about, options);
  }
  
}
