import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import emailjs from 'emailjs-com';
import { isDevMode } from '@angular/core';

if(!isDevMode ) {
  emailjs.init(process.env["EMAIL_JS"] || '');
} 

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
