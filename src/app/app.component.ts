import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InscriptionComponent } from './Components/User/inscription/inscription.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InscriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'InscriptionProject';
}
