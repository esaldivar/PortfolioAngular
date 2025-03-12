import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialLink, Config } from '../../utils/config';


@Component({
  selector: 'app-left-side-bar',
  imports: [CommonModule],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.scss'
})
export class LeftSideBarComponent {

  socialLinks: SocialLink[] =  Config.socials;
}
