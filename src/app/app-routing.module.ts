import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobPositionsComponent } from './job-positions/job-positions.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'Home', component: AppComponent },
  { path: 'estructuras-de-cargo', component: JobPositionsComponent },
  { path: 'eventos', component: JobPositionsComponent },
  { path: 'causas', component: JobPositionsComponent },
    // Otras rutas...
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}