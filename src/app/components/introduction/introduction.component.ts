import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Configuration } from '../../../utils/config';

@Component({
  selector: 'app-introduction',
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent implements AfterViewInit{
@ViewChild('introduction') introduction!: ElementRef;
  config = new Configuration();
  
  
  ngAfterViewInit () {
    const options = {
      ...this.config.srConfig(),
      delay: 2000
    }
    this.config.sr(this.introduction, options);
  }
  
}
