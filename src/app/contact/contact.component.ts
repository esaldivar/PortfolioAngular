import { Component, isDevMode } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  displayForm= false;
  thankYouMessage = false;

  name = new FormControl('',[
    Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]*$/)
  ]);

  email  = new FormControl('',[
    Validators.required,
    Validators.email
  ]);

  message = new FormControl('',[
    Validators.required, Validators.minLength(10)
  ]);

  emailForm = new FormGroup({
    email: this.email,
    name: this.name,
    message: this.message
  });

  showEmailForm(e: Event) {
    e.preventDefault();
    this.displayForm = true;
  }

  sendEmail(e: Event) {
    e.preventDefault(); 
    if(this.emailForm.valid) {
      if(!isDevMode()){
        const templateParams = {
          from_name: this.emailForm.value.name,
          from_email: this.emailForm.value.email,
          message: this.emailForm.value.message
        }
        emailjs.send(process.env["SERVICE_ID"] || '', process.env["SERVICE_TEMPLATE"] || '', templateParams).then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            this.thankYouMessage = true;
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );
      } else {
        console.log('Email sent', this.emailForm.value);
        this.thankYouMessage = true;
      }
       
    }
  }

}
