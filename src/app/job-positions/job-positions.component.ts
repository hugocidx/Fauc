import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-positions',
  templateUrl: './job-positions.component.html',
  styleUrls: ['./job-positions.component.scss']
})
export class JobPositionsComponent {
  @Input() jobPositions: any[] = [];
}
