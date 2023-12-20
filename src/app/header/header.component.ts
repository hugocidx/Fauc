import { Component } from "@angular/core";
import { AppComponent } from "../app.component";
@Component({
  selector: "app-header",
  standalone: true,
  imports: [],
  templateUrl: "./header.component.html",
  styleUrls: ["header.component.scss"],
})
export class HeaderComponent {
  constructor(private appComponent: AppComponent) {}
  scrollToSection(sectionId: string) {
    this.appComponent.scrollToSection(sectionId);
  }
}
