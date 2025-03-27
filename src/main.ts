import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import emailjs from 'emailjs-com';
import { isDevMode } from '@angular/core';

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if(!isDevMode() && !isMobile()) {
  emailjs.init(import.meta.env.NG_APP_EMAILJS);
} 

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
