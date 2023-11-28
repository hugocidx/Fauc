import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AreaServiceComponent } from './area-service/area-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './carousel/carousel.component';
import { FloatingContactComponent } from './floating-contact/floating-contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { JobPositionsComponent } from './job-positions/job-positions.component';
import { MaterialModule } from 'src/assets/material.module';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { SaleComponent } from './sale/sale.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    AboutUsComponent,
    AppRoutingModule, 
    AreaServiceComponent,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserModule,
    CarouselComponent,
    ContactFormComponent,
    FloatingContactComponent,
    FooterComponent,
    HeaderComponent,
    JobPositionsComponent,
    MatDialogModule,
    MaterialModule,
    ProjectsComponent,
    SaleComponent,
]
})
export class AppModule {}