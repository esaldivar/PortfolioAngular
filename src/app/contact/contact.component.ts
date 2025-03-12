import { AfterViewInit, Component, ElementRef, isDevMode, ViewChild } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';
import { sr } from '../../config';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent, ReactiveFormsModule, CommonModule],
  providers: [ContactService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  constructor(private contactService: ContactService) { }
  @ViewChild('contact') contact!: ElementRef;
  show = false;

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

  ngAfterViewInit () {
    sr(this.contact);
  }

  showEmailForm(e: Event) {
    e.preventDefault();
    this.displayForm = true;
  }

  async sendEmail(e: Event) {
    e.preventDefault(); 
    if(this.emailForm.valid) {
      if(!isDevMode()){
        this.thankYouMessage = await this.contactService.sendEmail(this.emailForm);
      } else {
        console.log('Email sent', this.emailForm.value);
        this.thankYouMessage = true;
      }
       
    }
  }

}
