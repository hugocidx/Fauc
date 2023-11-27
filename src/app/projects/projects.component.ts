import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  news = [
    {
      date: '29 September, 2018',
      comments: '134 Comments',
      title: 'Planting Trees for Better Future',
      image: '/Fauc/assets/images/h2news1.jpg',
      link: '#'
    },
    {
      date: '29 September, 2018',
      title: 'How you can keep alive wildlife long.',
      description: 'According to a survey the perceived higher cost of environmentally.',
      image: '/Fauc/assets/images/h2news2.jpg',
      link: '#'
    },
    {
      date: '29 September, 2018',
      title: 'The effort GoGreen has been felt across',
      description: 'Majority have suffered alteration in some form by injected humour.',
      image: '/Fauc/assets/images/h2news3.jpg',
      link: '#'
    },
    // ... agregar más noticias según sea necesario
  ];
}

