/**
 * PE 102 Lunes 18 de abril 2022
 * Alumna: Andrea Calero Caro
 * Objetivo: implementar la clase Reduce mediante el Template Method
 */

/**
 * @type Operacion con el array de entrada tipo number (arrayIn) 
 * y el método a implementar 
 */
type Operacion = {
  arrayIn: number [];
  reduce: () => void;
}

/**
 * @class Reduce reduce el array de números en uno solo
 */
export abstract class Reduce {
  protected arrayAux: Operacion[];

  constructor(protected arrayIn: number []) {
    this.arrayAux = [];
  }

  /**
   * @method run() este establece los distintos métodos comunes para reducir el número
   * del array
   */
  public run() {
    this.evalValuesBefore();
    this.addReduce(this.arrayIn);
    this.subReduce(this.arrayIn);
    this.prodReduce();
    this.divReduce();
    //this.evalValuesAfter();
    
  }

  /**
   * @method evalValuesBefore evalua el array inicialpara reducirlo
   */
  protected evalValuesBefore() {
    console.log('Template: Evaluando el array inicial');
    this.arrayAux.forEach((operacion) => {
      operacion.arrayIn;
    });
  }

  /**
   * Métodos protegidos que se implementan en las subclases
   */
  protected addReduce(arrayIn) {}
  protected subReduce(arrayIn) {}
  protected prodReduce() {}
  protected divReduce() {}
  //protected evalValuesAfter() {}


}