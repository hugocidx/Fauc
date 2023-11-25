import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-job-positions',
  templateUrl: './job-positions.component.html',
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    RouterModule,
  ],
})
export class JobPositionsComponent {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion();
}