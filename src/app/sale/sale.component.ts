import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  standalone:true,
  imports:[MatCardModule,CommonModule],
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent {
  products = [
    { name: 'Huevos', quantity: '30', price: '$7.000', image: '/Fauc/assets/images/pro1.jpg' },
    { name: 'Leche', quantity: '1 Litro', price: '$2.000', image: '/Fauc/assets/images/pro2.jpg' },
    { name: 'Maiz', quantity: '1 Saco', price: '$10.000', image: '/Fauc/assets/images/pro3.jpg' },
    { name: 'Trigo', quantity: '1 Saco', price: '$15.000', image: '/Fauc/assets/images/pro4.jpg' },
  ];
}
