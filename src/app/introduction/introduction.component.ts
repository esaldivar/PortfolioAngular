import { Component, ElementRef, ViewChild } from '@angular/core';
import { sr, srConfig } from '../../config';

@Component({
  selector: 'app-introduction',
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  @ViewChild('introduction') introduction!: ElementRef;
  
  ngAfterViewInit () {
      sr(this.introduction);
    }
}
