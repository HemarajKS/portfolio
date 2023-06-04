import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form: any;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;

      const templateParams = {
        name: this.form.value.name,
        email: this.form.value.email,
        message: this.form.value.message,
      };

      // Send the email using EmailJS
      emailjs
        .send(
          'service_iysla4i',
          'template_svn1exq',
          templateParams,
          'N9-HRw4di4yevuMIo'
        )
        .then(
          (response: EmailJSResponseStatus) => {
            alert('Email sent successfully');

            this.form.reset();
          },
          (error) => {
            console.error('Error sending email:', error);
          }
        );
    }
  }
}
