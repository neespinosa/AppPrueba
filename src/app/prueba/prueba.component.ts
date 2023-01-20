import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})












export class PruebaComponent {
  /*int edad=28; */
edad:number=28;
/*String nombre; no se inicializando */ 
nombre:string | undefined;

apellido?:string;


/** 
public int suma(object num1,int num2){
  return 5;
}*/
suma(num1:any,num2:number):number{
  return 5;
}

multiplicacion(num1:number,num2:number):number{
  return num1*num2;
}
}
