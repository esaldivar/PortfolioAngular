import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface socialLink {
  name: string,
  url: string
}
@Component({
  selector: 'app-left-side-bar',
  imports: [CommonModule],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.scss'
})
export class LeftSideBarComponent {

  socialLinks: socialLink[] = [
    { name: 'GitHub', url: 'https://github.com/esaldivar' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/esaldivar1214/' },
  ]
}
