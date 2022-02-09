import { newDato, serie } from "src";

export default function deleteFirst(newList:Array<serie>[]){
  let delDatos:serie[]= [];
    for (let i = 0; i < newList.length; i++) {
      const delDato = newList[i];
        if(i !== 0) {
          delDatos= [...delDato]
        } 
      }
  newDato(delDatos);
}

export default function deleteFirst(serie:serie[]){
  let delDatos:serie[]= [];
    for (let i = 0; i < serie.length; i++) {
      const delDato = serie[i];
        if(i !== 0) {
          delDatos= [...delDatos,delDato]
        } 
      }
  newDato(delDatos);
}