import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css',
})
export class InscriptionComponent {
  letter!: string;
  maxAllowed: number = 1400;
  totalSelectedValue: number = 0;
  options: { name: string; value: number }[] = [
    { name: '200 mile', value: 200 },
    { name: '400 mile', value: 400 },
    { name: '800 mile', value: 800 },
    { name: '1000 mile', value: 1000 },
    { name: '1200 mile', value: 1200 },
    { name: '1400 mile', value: 1400 },
  ];
  selectedOptions: { name: string; value: number }[] = [];
  dni!: string;
  codiFederat!: string;
  nomCognom!: string;
  telefon!: string;
  email!: string;

  findLetter() {
    let myarray: string[] = [
      'T',
      ' R',
      ' W',
      'A',
      'G',
      'M',
      'Y',
      'F',
      'P',
      'D',
      'X',
      'B',
      'N',
      'J',
      'Z',
      'S',
      'Q',
      'V',
      'H',
      'L',
      'C',
      'K',
      'E',
    ];
    let mynum = parseInt(this.dni);
    mynum = (mynum % 23) - 1;

    if (this.dni.length === 8) {
      this.letter = myarray[mynum];
    }
  }
}
