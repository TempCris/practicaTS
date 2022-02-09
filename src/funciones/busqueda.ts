import { serie } from '../index'

export default function Busqueda(serie:serie[], a:Number) {
    for (let i = 0; i < serie.length; i++) {
        const busqueda= serie[i];
        if (a === serie[i].numCap){
            console.log(busqueda);
        }
    }
}