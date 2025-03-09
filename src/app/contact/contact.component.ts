import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  displayForm= false;
  emailDetails = {
    name: '',
    email: '',
    message: ''
  }

  showEmailForm(e: Event) {
    e.preventDefault();
    this.displayForm = true;
  }

  sendEmail() { 
    this.displayForm = false;

  }

}
