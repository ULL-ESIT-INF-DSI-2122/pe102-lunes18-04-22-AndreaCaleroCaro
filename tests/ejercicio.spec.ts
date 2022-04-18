import 'mocha';
import {expect} from 'chai';
import {AddReduce} from '../src/addReduce';
import {SubReduce} from '../src/subReduce';
import {ProdReduce} from '../src/prodReduce';
import {DivReduce} from '../src/divReduce';

let arrayInAdd: number[] = [1,2,3,4];
let arrayInSub: number[] = [4,3];
let arrayInProd: number[] = [2,3];
let arrayInDiv: number[] = [6,3];
let array = new AddReduce(arrayInAdd);
let array2 = new SubReduce(arrayInSub);
let array3 = new ProdReduce(arrayInProd);
let array4 = new DivReduce(arrayInDiv);
//array.run()

describe('Subclase AddReduce tests', () => {
  it('array.addReduce(arrayInAdd) returns value 10', () => {
    expect(array.addReduce(arrayInAdd)).to.be.equal(10);
  });
});

describe('Subclase SubReduce tests', () => {
  it('array2.subReduce(arrayInSub) returns value 1', () => {
    expect(array2.subReduce(arrayInSub)).to.be.equal(1);
  });
});

describe('Subclase ProdReduce tests', () => {
  it('array3.prodReduce(arrayInProd) returns value 1', () => {
    expect(array3.prodReduce(arrayInProd)).to.be.equal(6);
  });
});

describe('Subclase DivReduce tests', () => {
  it('array4.divReduce(arrayInDiv) returns value 2', () => {
    expect(array4.divReduce(arrayInDiv)).to.be.equal(2);
  });
});