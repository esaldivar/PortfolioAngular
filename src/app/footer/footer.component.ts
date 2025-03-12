import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialLink, Config } from '../../utils/config';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
socialLinks: SocialLink[] =  Config.socials;
}
