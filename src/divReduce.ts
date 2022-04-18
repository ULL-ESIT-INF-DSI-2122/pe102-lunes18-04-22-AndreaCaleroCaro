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
        let prod: number = 0
        for(let i: number = 0; i < arrayIn.length; i++){
            let valorAnterior = arrayIn[i-1];
            let valorActual = arrayIn[i];
            prod = valorAnterior * valorActual
        }
        console.log(prod);
        return prod;
    }
}


let arrayIn: number[] = [2,3];
let array = new ProdReduce(arrayIn);
array.prodReduce(arrayIn)