import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  showEmailForm = false;
  
  sendEmail(e: Event) {
    e.preventDefault();
    this.showEmailForm = true;
    console.log("Sending email...");
  }

}
