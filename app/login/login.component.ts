import { Component, NgModule } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nombreUsuario: string = "";
  password: string = "";
  usuario: Usuario = new Usuario(this.nombreUsuario, this.password);

  constructor(private router: Router){}
  
  iniciarSecion(){
    if(this.usuario.nombre == "pepe" && this.usuario.clave == "1234"){
      this.router.navigate(['/bienvenido']);
      console.log("Inicio de secion exitoso");
    }else{
      this.router.navigate(['/error']);
      console.log("Error");
    }
  }

}
