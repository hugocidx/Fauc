import { Component } from "@angular/core";
import { MaterialModule } from "src/assets/material.module";

@Component({
  selector: "app-carousel",
  standalone: true,
  imports: [MaterialModule],
  templateUrl: "./carousel.component.html",
  styles: [
    `
      // #home-slider .slider-caption {
      //   position: absolute;
      //   top: 50%;
      //   left: 50%;
      //   transform: translate(-50%, -50%);
      //   text-align: center;
      //   color: #fff; /* Ajusta el color del texto según tu diseño */
      // }
      // #home-slider .slider-caption h1 {
      //   font-size: 2.5rem; /* Ajusta el tamaño del texto según tus necesidades */
      // }
      // @media screen and (max-width: 600px) {
      //   #home-slider .slider-caption {
      //     display: block;
      //     position: static;
      //     transform: none;
      //   }
      //   #home-slider .slider-caption h1 {
      //     font-size: 1.5rem; /* Ajusta el tamaño del texto para pantallas más pequeñas */
      //   }
      // }
    `,
  ],
})
export class CarouselComponent {}
