import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { LeftSideBarComponent } from "./left-side-bar/left-side-bar.component";
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { IntroComponent } from './intro/intro.component';
import { PodcastComponent } from "./podcast/podcast.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { ExperienceComponent } from "./experience/experience.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    IntroComponent,
    PodcastComponent,
    AboutMeComponent,
    ContactComponent, 
    FooterComponent, 
    ExperienceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    'class': 'app-root'
  }
})
export class AppComponent {
  title = 'PortfolioSite';
}
