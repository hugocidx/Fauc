import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './projects.component.html',
  styles: [``]
})
export class ProjectsComponent {
  news = [
    {
      date: '29 Septiembre, 2022',
      // comments: '134 Comments',
      title: 'Crianza de gallinas ponedoras',
      image: '/Fauc/assets/images/h2news1.jpg',
      // link: '#'
    },
    {
      date: '20 agosto, 2021',
      title: 'Predio de caballos.',
      // description: ' del medio ambientSegún una encuesta, el mayor costo percibidoe.',
      image: '/Fauc/assets/images/h2news2.jpg',
      // link: '#'
    },
    {
      date: '15 octubre, 2021',
      title: 'Establos de bovinos',
      // description: 'Majority have suffered alteration in some form by injected humour.',
      image: '/Fauc/assets/images/h2news3.jpg',
      // link: '#'
    },
    // ... agregar más noticias según sea necesario
  ];
}

