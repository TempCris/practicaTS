import { serie } from 'src';

export default function deleteLast(objConocido:serie,newList:Array<serie>[]){
    let delDatos:Array<serie>[] = [];
        for (let i = 0; i < delDatos.length -1; i++){
            const delDato = a[i];
            delDatos =[...delDatos,delDato];
    }
    return(delDatos);
}


