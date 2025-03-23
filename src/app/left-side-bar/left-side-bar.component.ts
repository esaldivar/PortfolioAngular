import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Configuration, SocialLink } from '../../utils/config';
import { AvatarComponent } from "../avatar/avatar.component";


@Component({
  selector: 'app-left-side-bar',
  imports: [CommonModule, AvatarComponent],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.scss'
})
export class LeftSideBarComponent {
  @ViewChild('links') links!: ElementRef;
  socialLinks: SocialLink[] = Configuration.socials;
  config = new Configuration();
    
    
    ngAfterViewInit () {
      const options = {
        ...this.config.srConfig(),
        delay: 3000,
        distance: '0px'
      }
      this.config.sr(this.links, options);
    }
}
