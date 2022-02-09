import { newDato, serie } from "../index"

export default function upgrade (objConocido:serie, newList:Array<serie>){   
    
    let inyect:Array<serie> = [...newList, objConocido ];
    
    newDato(inyect);
}