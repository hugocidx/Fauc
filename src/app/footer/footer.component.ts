import { Component } from '@angular/core';
import { MaterialModule } from 'src/assets/material.module';

@Component({
  selector: 'app-footer',
  standalone:true,
  imports:[MaterialModule],
  templateUrl: './footer.component.html',
  styles: [``]
})
export class FooterComponent {}
