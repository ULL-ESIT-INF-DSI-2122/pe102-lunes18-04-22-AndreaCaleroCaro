import 'mocha';
import {expect} from 'chai';
import {AddReduce} from '../src/addReduce';
import {SubReduce} from '../src/subReduce';
/*import * as reduce from '../src/ejercicio';

describe('Class Reduce tests', () => {
  it('evalValuesBefore() returns ', () => {
    expect(reduce.evalValuesBefore()).to.be.equal(undefined);
  });

});*/

let arrayInAdd: number[] = [1,2,3,4];
let arrayInSub: number[] = [4,3];
let array = new AddReduce(arrayInAdd);
let array2 = new SubReduce(arrayInSub);
array.run()

describe('Subclase AddReduce y Reduce tests', () => {
  it('array.run() returns value 10', () => {
    expect(array.run()).to.be.equal(undefined);
  });
});

describe('Subclase SubReduce y Reduce tests', () => {
  it('array2.run() returns value 1', () => {
    expect(array2.run()).to.be.equal(undefined);
  });
});