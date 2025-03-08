import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { LeftSideBarComponent } from "./left-side-bar/left-side-bar.component";
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, LeftSideBarComponent, RightSideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    'class': 'app-root'
  }
})
export class AppComponent {
  title = 'PortfolioSite';
}
