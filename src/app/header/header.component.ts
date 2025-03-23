import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Configuration } from '../../utils/config';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('about') about!: ElementRef;
  @ViewChild('experience') experience!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('podcast') podcast!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  email = 'esaldivar1214@gmail.com';
  config = new Configuration();
       
  ngAfterViewInit () {
    const options = {
      ...this.config.srConfig(),
      origin: 'top',
      distance: '50px'
    }
    this.config.sr(this.about, {...options, delay: 200});
    this.config.sr(this.experience, {...options, delay: 400});
    this.config.sr(this.projects, {...options, delay: 600});
    this.config.sr(this.podcast, {...options, delay: 800});
    this.config.sr(this.contact, {...options, delay: 1000});

  }
}
