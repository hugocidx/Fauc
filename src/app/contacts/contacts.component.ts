import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  public contacts: any[] = [
    {
      phone: '+569 8794 2360',
      email: 'Savka.aldunate@fundacionagrouc.cl',
      addres: 'Av. Alcaldde Hernan Prieto 3285, Pirque',
    },
  ];
}
