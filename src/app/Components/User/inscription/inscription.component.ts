import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../classes/user';

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

  user: User = new User();

  findLetter() {
    let letters: string = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let mynum = parseInt(this.user.dni);
    mynum = (mynum % 23) - 1;
    if (this.user.dni !== undefined && this.user.dni.length === 8) {
      return letters.charAt(mynum);
    }
    return '';
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
      this.user.dni === '' ||
      this.user.codiFederat === '' ||
      this.user.email === '' ||
      this.user.nomCognom === '' ||
      this.user.telefon === '' ||
      this.user.dni === undefined ||
      this.user.codiFederat === undefined ||
      this.user.email === undefined ||
      this.user.nomCognom === undefined ||
      this.user.telefon === undefined ||
      this.user.dni.length !== 8 ||
      this.selectedOptions.length === 0
    );
  }
}
