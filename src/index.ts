import Busqueda from "./funciones/busqueda";
import upgrade from "./funciones/añadir";
import ImpDatos from "./funciones/impresion"
import { anime1 } from "./dataAnimes/Animes";
//import deleteLast from "./funciones/deleteLastPlace";
import deleteFirst from "./funciones/deleteFirstPlace";
export interface serie {
  nombre: string 
  numCap: number
  genero: string
  autor: string
  ova: boolean 
}

export function newDato (datoNuevo:Array<serie>){
  newList = datoNuevo;
}

let serie:serie[];

let newList:Array<serie> = [];

function main() { 
  console.log('---------- Cool Programing ----------\n');
  ImpDatos(anime7);
  ImpDatos(anime8);
  ImpDatos(anime9);
  upgrade(anime1, newList);
  deleteFirst(serie);
  Busqueda(anime1,12);
}
main();
