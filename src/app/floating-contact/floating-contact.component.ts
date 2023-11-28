import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from 'src/assets/material.module';
@Component({
  standalone:true,
  imports:[MaterialModule,CommonModule],
  selector: 'app-floating-contact',
  templateUrl: './floating-contact.component.html',
  styleUrls: ['./floating-contact.component.scss']
})
export class FloatingContactComponent {
  constructor(public dialog: MatDialog) {}
  openContactForm() {
    const dialogRef = this.dialog.open(ContactFormComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Formulario cerrado');
    });
  }
}