import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-area-service',
  standalone:true,
  imports:[MatIconModule,MatListModule,CommonModule],
  templateUrl: './area-service.component.html',
  styleUrls: ['./area-service.component.scss']
})
export class AreaServiceComponent {
  services = [
    { icon: 'recycling', title: 'Gestión de Reciclaje', description: 'Cuida el planeta, recicla!' },
    { icon: 'wind_power', title: 'Energía Renovable', description: 'Prefiere energías renovables' },
    { icon: 'water_drop', title: 'Agua Pura', description: 'Cuida el agua que usas' },
    { icon: 'nature', title: 'Árboles Plantados', description: 'Haz que las plantas vivan de por vida' },
    { icon: 'sensors', title: 'Sensores', description: 'Tecnología en pro de la naturaleza' },
  ];
}
