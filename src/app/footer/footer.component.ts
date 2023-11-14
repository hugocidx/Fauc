import { Component } from '@angular/core';
import { MaterialModule } from 'src/assets/material.module';

@Component({
  selector: 'app-footer',
  standalone:true,
  imports:[MaterialModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
