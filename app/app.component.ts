import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PrimerComponenteComponent } from './componentes/primer-componente/primer-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, PrimerComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'seguandaApp';
  suma: number = 0;
  nombre: string = "";
  miArray = [1,2];
  edadUno: number = 0;
  edadDos: number = 0;  
  promedio: number = 0;  
  resultado: number = 0;
  


  sumar(){
    this.resultado = this.edadUno + this.edadDos;
  }

  calcular(){
    this.resultado = this.promedio / 2; 
    console.log(this.resultado);                                                                                                                                                                                                                                                                                       
  }
  
  incrementar(){
    this.suma = this.suma +1;
  }

  

  

}
