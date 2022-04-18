import {Reduce} from './reduce';

/**
 * @class AddReduce subclase hija que extiende del Reduce 
 * esta implementa la reducción del array mediante la suma
 */
export class AddReduce extends Reduce {
    constructor(protected arrayIn: number []) {
      super(arrayIn);
    }

    /**
     * @method addReduce() implementa la reducción mediante la suma
     * @param arrayIn 
     */
    public addReduce(arrayIn: number[]) {
        let sum: number = 0
        for(let i: number = 0; i < arrayIn.length; i++){
            sum += arrayIn[i];
        }
        console.log(sum);
        return sum;
    }

    /**
     * Hook del final de evaluación
     */
    protected evalValuesAfter(){
        console.log('\nFin evaluación');
    } 
}


let arrayIn: number[] = [1,2,3,4];
let array = new AddReduce(arrayIn);
console.log('Array a evaluar: ['+arrayIn+']');
array.addReduce(arrayIn)
console.log('\nTemplate Method: ');
array.run()