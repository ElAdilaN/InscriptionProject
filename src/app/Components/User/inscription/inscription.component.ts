import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule, NgFor],
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
    // let myp = document.getElementById('myp');
    if (this.dni.length === 8) {
      this.letter = myarray[mynum];
    }
  }

  isSelected(optionName: string): boolean {
    return this.selectedOptions.some((option) => option.name === optionName);
  }

  onCheckboxChange(option: { name: string; value: number }, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      if (this.totalSelectedValue + option.value <= this.maxAllowed) {
        this.selectedOptions.push(option);
        this.totalSelectedValue += option.value;
      } else {
        (event.target as HTMLInputElement).checked = false;
        alert('you surpassed 1400miles allowed');
      }
    } else {
      const index = this.selectedOptions.findIndex(
        (opt) => opt.name === option.name
      );
      if (index > -1) {
        this.selectedOptions.splice(index, 1);
        this.totalSelectedValue -= option.value;
      }
    }
  }
  isDisabled(): boolean {
    return (
      this.dni === '' ||
      this.codiFederat === '' ||
      this.email === '' ||
      this.nomCognom === '' ||
      this.telefon === '' ||
      this.dni === undefined ||
      this.codiFederat === undefined ||
      this.email === undefined ||
      this.nomCognom === undefined ||
      this.telefon === undefined ||
      this.dni.length !== 8 ||
      this.selectedOptions.length === 0
    );
  }
}
