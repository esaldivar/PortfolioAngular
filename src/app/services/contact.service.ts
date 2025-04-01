import { FormControl, FormGroup } from '@angular/forms';
import emailjs from 'emailjs-com';

interface ContactForm {
    name: FormControl<string | null>
    email: FormControl<string | null>
    message: FormControl<string | null>
}
  export class ContactService {
    isMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    serviceID = this.isMobile()  ?  '' : import.meta.env.NG_APP_SERVICE_ID;
    templateID = this.isMobile() ?  '' : import.meta.env.NG_APP_SERVICE_TEMPLATE;

    async sendEmail(form: FormGroup<ContactForm>): Promise<boolean> {
        const templateParams = {
            from_name: form.get('name')?.value,
            email: form.get('email')?.value,
            message: form.get('message')?.value
          }
          
        return await emailjs.send(this.serviceID, this.templateID, templateParams).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              return true;
            },
            (error) => {
              console.log('FAILED...', error);
              return false;
            },
          );
    }
  }