import { Component } from '@angular/core';
import { MaterialModule } from 'src/assets/material.module';

@Component({
  selector: 'app-carousel',
  standalone:true,
  imports:[MaterialModule,],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {

}
