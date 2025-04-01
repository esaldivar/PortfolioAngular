import { AfterViewInit, Component, ElementRef, EventEmitter, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Configuration } from '../../../utils/config';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
	encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements AfterViewInit {
  constructor(private offCanvasService: NgbOffcanvas){}
  @ViewChild('about') about!: ElementRef;
  @ViewChild('experience') experience!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('podcast') podcast!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @Output() blurBackground = new EventEmitter<boolean>(false);
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

  openRight(content: TemplateRef<any>) {
		this.offCanvasService.open(content, { position: 'end' });
    this.blurBackground.emit(true);
	}

  closeRight(){
		this.offCanvasService.dismiss('Cross click');
    this.blurBackground.emit(false);
  }
}
