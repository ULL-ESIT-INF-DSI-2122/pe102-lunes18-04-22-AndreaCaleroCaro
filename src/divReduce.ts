import {Reduce} from './reduce';

/**
 * @class DivReduce subclase hija que extiende del Reduce 
 * esta implementa la reducción del array mediante la división
 */
export class DivReduce extends Reduce {
    constructor(protected arrayIn: number []) {
      super(arrayIn);
    }

    /**
     * @method divReduce() implementa la reducción mediante la división
     * @param arrayIn 
     */
    public divReduce(arrayIn: number[]) {
        let div: number = 0
        for(let i: number = 0; i < arrayIn.length; i++){
            let valorAnterior = arrayIn[i-1];
            let valorActual = arrayIn[i];
            div = valorAnterior / valorActual
        }
        console.log(div);
        return div;
    }

     /**
     * Hook del final de evaluación
     */
    protected evalValuesAfter(){
        console.log('\nFin evaluación');
    } 
}


let arrayIn: number[] = [20,2,5];
let array = new DivReduce(arrayIn);
console.log('Array a evaluar: ['+arrayIn+']');
array.divReduce(arrayIn)
console.log('\nTemplate Method: ');
array.run()