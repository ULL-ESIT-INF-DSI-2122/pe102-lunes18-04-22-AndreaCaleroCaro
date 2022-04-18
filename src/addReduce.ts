import {Reduce} from './reduce';

/**
 * @class AddReduce subclase hija que extiende del Reduce 
 * esta implementa la reducción del array mediante la suma
 */
export class AddReduce extends Reduce {
    constructor(protected arrayIn: number []) {
      super(arrayIn);
    }

    public addReduce(arrayIn: number[]) {
        let sum: number = 0
        for(let i: number = 0; i < arrayIn.length; i++){
            sum += arrayIn[i];
        }
        console.log(sum);
        return sum;
    }
}


let arrayIn: number[] = [1,2,3,4];
let array = new AddReduce(arrayIn);
array.addReduce(arrayIn)