// import { CommonModule } from "@angular/common";
// import { Component } from "@angular/core";
// import { RouterModule } from "@angular/router";
// @Component({
//   selector: "app-header",
//   standalone: true,
//   imports: [RouterModule, CommonModule],
//   templateUrl: "./header.component.html",
// })
// export class HeaderComponent {
//   public selectedView: string | undefined;
//   // Datos para la sección de estructuras de cargo y personal
//   title = "Fundacion Agronomica UC";
//   showView(view: string) {
//     this.selectedView = view;
//     // Actualizar el título según la vista seleccionada
//     switch (view) {
//       case "estructuras-de-cargo":
//         this.title = "Estructuras de Cargo y Personal";
//         break;
//       // Agrega más casos según las vistas que tengas
//       case "home":
//         this.title = "Home";
//         break;
//       case "eventos":
//         this.title = "Eventos";
//         break;
//       case "causas":
//         this.title = "Causas";
//         break;
//       // Agrega más casos según las vistas que tengas
//       default:
//         this.title = "Fundacion Agronomica UC";
//     }
//   }
// }
