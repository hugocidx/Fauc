import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public selectedView: string | undefined;
  title = 'Fundacion Agronomica UC';
  showView(view: string) {
    this.selectedView = view;
    switch (view) {
      case 'conocenos':
        break;
      case 'home':
        this.title = 'Home';
        break;
      case 'contacto':
        this.title = 'contacto';
        break;
      default:
        this.title = 'Fundacion Agronomica UC';
    }
  }
}
