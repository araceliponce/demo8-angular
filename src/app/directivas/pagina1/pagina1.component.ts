import { Component } from '@angular/core';

interface Login{
  nombre: string;
  password: number;
  }

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})

export class Pagina1Component {

  enlaces = ['Home','Support','Contact'];
  
  datos: Login = {
  nombre: "Angular",
  password: 123456
  }
  
  
  validacion(nom: string, pass: number){
    if(nom==this.datos.nombre && pass==this.datos.password){
    console.log("Datos correctos");

    return true;
    }
    else{
    console.log("Datos incorrectos");

    return false;
    }

  }


}
