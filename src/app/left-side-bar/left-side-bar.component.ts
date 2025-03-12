import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialLink, Config } from '../../utils/config';
import { AvatarComponent } from "../avatar/avatar.component";


@Component({
  selector: 'app-left-side-bar',
  imports: [CommonModule, AvatarComponent],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.scss'
})
export class LeftSideBarComponent {

  socialLinks: SocialLink[] =  Config.socials;
}
