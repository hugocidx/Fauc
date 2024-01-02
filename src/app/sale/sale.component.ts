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
    { name: 'Huevos', quantity: '20', price: '$6.500', image: '/Fauc/assets/images/pro1.jpg' },
    { name: 'Leche', quantity: '1 Litro', price: '$1.000', image: '/Fauc/assets/images/pro2.jpg' },
    { name: 'Maiz', quantity: '25kg', price: '$15.000', image: '/Fauc/assets/images/pro3.jpg' },
    { name: 'Trigo', quantity: '25kg', price: '$19.000', image: '/Fauc/assets/images/pro4.jpg' },
  ];
}
