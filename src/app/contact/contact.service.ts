import { FormControl, FormGroup } from '@angular/forms';
import emailjs from 'emailjs-com';

  
interface ContactForm {
    name: FormControl<string | null>
    email: FormControl<string | null>
    message: FormControl<string | null>
}
  export class ContactService {
    
    serviceID = import.meta.env.NG_APP_SERVICE_ID;
    templateID = import.meta.env.NG_APP_SERVICE_TEMPLATE;
      
    
    sendEmail(form: FormGroup<ContactForm>): boolean {

        const templateParams = {
            from_name: form.get('name')?.value,
            email: form.get('email')?.value,
            message: form.get('message')?.value
          }
        let emailSuccess = false;
        emailjs.send(this.serviceID, this.templateID, templateParams).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              emailSuccess = true;
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
          return emailSuccess;
    }
  }