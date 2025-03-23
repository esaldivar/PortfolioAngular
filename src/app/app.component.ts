import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { LeftSideBarComponent } from "./left-side-bar/left-side-bar.component";
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { WorkExperienceComponent } from "./work-experience/work-experience.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";
import { PodcastComponent } from "./podcast/podcast.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { FooterComponent } from "./footer/footer.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { ToastsComponent } from './toasts/toasts.component';

@Component({
  selector: 'app-root',
  imports: [
    AvatarComponent,
    HeaderComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    WorkExperienceComponent,
    AboutMeComponent,
    ContactComponent,
    ProjectsComponent,
    PodcastComponent,
    IntroductionComponent,
    FooterComponent,
    AvatarComponent,
    ToastsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    'class': 'app-root'
  }
})
export class AppComponent 
{
  title = 'PortfolioSite';
  
}
