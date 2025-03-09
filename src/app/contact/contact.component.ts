import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  displayForm= false;

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
      this.displayForm = false;
    }
  }

}
