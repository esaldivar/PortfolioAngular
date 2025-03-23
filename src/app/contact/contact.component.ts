import { AfterViewInit, Component, ElementRef, isDevMode, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from './contact.service';
import { Configuration } from '../../utils/config';
import { AppToastService } from '../toasts/toasts.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  providers: [ContactService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  constructor(private contactService: ContactService, private toastService: AppToastService) { }
  @ViewChild('contact') contact!: ElementRef;
  show = false;
  config = new Configuration();

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
    this.config.sr(this.contact);
  }

  showEmailForm(e: Event) {
    e.preventDefault();
    this.displayForm = true;
  }

  showSuccess(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-success text-light', delay: 10000 });
	}

  async sendEmail(e: Event, template: TemplateRef<any>) {
    e.preventDefault(); 
    if(this.emailForm.valid) {
      if(!isDevMode()){
        this.thankYouMessage = await this.contactService.sendEmail(this.emailForm);
        this.showSuccess(template);
      } else {
        console.log('Email sent', this.emailForm.value);
        this.thankYouMessage = true;
        this.showSuccess(template);
      }
       
    }
  }

}
