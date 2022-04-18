import {Reduce} from './reduce';

/**
 * @class SubReduce subclase hija que extiende del Reduce 
 * esta implementa la reducción del array mediante la suma
 */
export class SubReduce extends Reduce {
    constructor(protected arrayIn: number []) {
      super(arrayIn);
    }

    protected subReduce(arrayIn: number[]) {
        let sum: number = 0
        let arrayAux: number[] = [];
        for(let i: number = 0; i < arrayIn.length; i++){
            let valorAnterior = arrayIn[i-1];
            let valorActual = arrayIn[i];
            sum = valorAnterior - valorActual
        }
        console.log(sum);

    }
}


let arrayIn: number[] = [4,3];
let array = new SubReduce(arrayIn);
array.run()