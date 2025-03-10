import { AfterViewInit, Component, ElementRef, isDevMode, ViewChild } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('contact') contact!: ElementRef;
  observer!: IntersectionObserver;
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
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), { threshold: 0 });
    this.observer.observe(this.contact.nativeElement);
  }

  showElement() {
    // Your code here
    console.log('Div is visible!');
    this.show = true;
  }
  handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.showElement();
        this.observer.unobserve(this.contact.nativeElement);
      }
    })};

  showEmailForm(e: Event) {
    e.preventDefault();
    this.displayForm = true;
  }

  onMouseEnter(){
    console.log('Mouse entered');
  }

  isElementVisible(element:HTMLElement) { 
    const elementTop = element.offsetTop; 
    const elementBottom = elementTop  
        + element.offsetHeight; 
    const viewportTop = window.pageYOffset; 
    const viewportBottom = viewportTop  
        + window.innerHeight; 

    return ( 
        elementBottom > viewportTop && 
        elementTop < viewportBottom
    ); 
} 

  sendEmail(e: Event) {
    e.preventDefault(); 
    if(this.emailForm.valid) {
      if(!isDevMode()){
        const templateParams = {
          from_name: this.emailForm.value.name,
          reply_to: this.emailForm.value.email,
          message: this.emailForm.value.message
        }
        const serviceID = import.meta.env.NG_APP_SERVICE_ID;
        const templateID = import.meta.env.NG_APP_SERVICE_TEMPLATE;
        emailjs.send(serviceID, templateID, templateParams).then(
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
