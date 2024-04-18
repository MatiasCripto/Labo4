import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-primer-componente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './primer-componente.component.html',
  styleUrl: './primer-componente.component.css'
})
export class PrimerComponenteComponent {
  title = "Primer Ejercicio";
  suma: number = 0;
  edadUno!: number;
  edadDos!: number;  
  promedio: number = 0;  
  resultado: number = 0;


  calcular(){
    this.suma = this.edadUno + this.edadDos;                                                                                                                                                                                                                                                                                       
    this.promedio = this.suma / 2; 
  }

  limpiar() {
    this.edadUno = NaN;
    this.edadDos = NaN;
    this.promedio = NaN;
    this.suma = NaN;
  }
}


