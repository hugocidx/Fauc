import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about-us',
  standalone:true,
  imports:[MatCardModule,CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  objetivos: any[] = [
    {
      title: 'Objetivos',
      subtitle: 'Servicio a la Comunidad',
      description: `La Fundación Agrouc es una entidad sin fines de lucro, cuyo objetivo principal es colaborar al desarrollo de la Facultad de Agronomía e Ingeniería Forestal de la Pontificia Universidad Católica de Chile y específicamente:
      1. Promover, financiar y desarrollar actividades de investigación científica y aplicada en el campo de la agricultura y la agroindustria, así como en investigaciones interdisciplinarias.
      2. Efectuar labores de extensión, divulgación y servicios en el campo de su competencia.
      3. Propender a la formación y perfeccionamiento de docentes e investigaciones en el campo de las ciencias agropecuarias.
      4. Administrar las estaciones experimentales agrícolas de la Universidad. Si algo está caliente en la economía actual, está ahorrando dinero, incluido unbroad range of green businesses helping people save energy, water, and other resources.`,
      link: 'Mas Sobre la Fundacion'
    }
  ];
  numericas: any[] = [
    { count: 6, text: 'Grandes proyectos' },
    { count: 20, text: 'Hectáreas plantadas' },
    { count: 300, text: 'Ganado y Animales' },
    { count: 5900, text: 'Estudiantes Recibidos' },
  ];
}
