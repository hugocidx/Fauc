import { Component } from "@angular/core";
import { AppComponent } from "../app.component";
import { MaterialModule } from "src/assets/material.module";
@Component({
  selector: "app-header",
  standalone: true,
  imports: [MaterialModule],
  templateUrl: "./header.component.html",
  styleUrls: ["header.component.scss"],
})
export class HeaderComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor(private appComponent: AppComponent) {}
  scrollToSection(sectionId: string) {
    this.appComponent.scrollToSection(sectionId);
  }
}