import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Datos para la sección de estructuras de cargo y personal
    title = 'Fundacion Agronomica UC';
  jobPositions = [
    { name: 'Cargo 1', description: 'Descripción del cargo 1' },
    { name: 'Cargo 2', description: 'Descripción del cargo 2' },
    // Agrega más cargos según sea necesario
  ];
  // Datos para la sección de contactos
  contacts = [
    { name: 'Nombre 1', email: 'correo1@example.com' },
    { name: 'Nombre 2', email: 'correo2@example.com' },
    // Agrega más contactos según sea necesario
  ];
  // Datos para la sección de noticias
  news = [
    {
      title: 'Objetivos',
      content: 'La Fundación Agrouc es una entidad sin fines de lucro, cuyo objetivo principal es colaborar al desarrollo de la Facultad de Agronomía e Ingeniería Forestal de la Pontificia Universidad Católica de Chile y específicamente:\n\n1. Promover, financiar y desarrollar actividades de investigación científica y aplicada en el campo de la agricultura y la agroindustria, así como en investigaciones interdisciplinarias.\n2. Efectuar labores de extensión, divulgación y servicios en el campo de su competencia.\n3. Propender a la formación y perfeccionamiento de docentes e investigadores en el campo de las ciencias agropecuarias.\n4. Administrar las estaciones experimentales agrícolas de la Universidad.'
    },
    {
      title: 'Noticia 2',
      content: 'Contenido de la noticia 2'
    },
    // Agrega más noticias según sea necesario
  ];
  selectedView: string | undefined;
  showJobPositions() {
    this.selectedView = 'jobPositions';
    this.title = 'Estructuras de Cargo y Personal'; // Cambia el título para esta vista
  }
  showContacts() {
    this.selectedView = 'contacts';
    this.title = 'Contactos'; // Cambia el título para esta vista
  }
  showHome() {
    this.selectedView = 'home';
  }
  
}