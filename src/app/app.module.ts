import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobPositionsComponent } from './job-positions/job-positions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/assets/material.module';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { AreaServiceComponent } from './area-service/area-service.component';
import { SaleComponent } from './sale/sale.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    JobPositionsComponent,
    ContactsComponent,
  ],
  imports: [
    AboutUsComponent,
    AppRoutingModule,
    AreaServiceComponent,
    BrowserAnimationsModule,
    BrowserModule,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    MaterialModule,
    ProjectsComponent,
    SaleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
