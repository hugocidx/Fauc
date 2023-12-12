import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { JobPositionsComponent } from './job-positions/job-positions.component';
// import { AppComponent } from './app.component';
// import { ContactPageComponent } from './contact-page/contact-page.component';
const routes: Routes = [
  // { path: 'Home', component: AppComponent },
  // { path: 'conocenos', component: JobPositionsComponent },
  // { path: 'eventos', component: JobPositionsComponent },
  // { path: 'contactos', component: ContactPageComponent },
  // Otras rutas...
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}