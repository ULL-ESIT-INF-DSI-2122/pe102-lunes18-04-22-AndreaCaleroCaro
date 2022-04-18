import {Reduce} from './reduce';

/**
 * @class SubReduce subclase hija que extiende del Reduce 
 * esta implementa la reducción del array mediante la resta
 */
export class SubReduce extends Reduce {
    constructor(protected arrayIn: number []) {
      super(arrayIn);
    }

    /**
     * @method subReduce() implementa la reducción mediante la resta
     * @param arrayIn 
     */
    public subReduce(arrayIn: number[]) {
        let sub: number = 0
        for(let i: number = 0; i < arrayIn.length; i++){
            let valorAnterior = arrayIn[i-1];
            let valorActual = arrayIn[i];
            sub = valorAnterior - valorActual
        }
        console.log(sub);
        return sub;
    }

     /**
     * Hook del final de evaluación
     */
    protected evalValuesAfter(){
        console.log('\nFin evaluación');
    } 
}


let arrayIn: number[] = [4,3];
let array = new SubReduce(arrayIn);
console.log('Array a evaluar: ['+arrayIn+']');
array.subReduce(arrayIn)
console.log('\nTemplate Method: ');
array.run()