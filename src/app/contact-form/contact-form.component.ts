import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/assets/material.module';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  public contactForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ContactFormComponent>,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Validadores para requerido y formato de email
      message: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      console.log('Enviando mensaje a:', this.contactForm.value.email);
      console.log('Datos del formulario:', this.contactForm.value);
      // Aquí puedes agregar la lógica para enviar el mensaje
      this.dialogRef.close();
    }
  }

  closeForm() {
    this.dialogRef.close();
  }
}

