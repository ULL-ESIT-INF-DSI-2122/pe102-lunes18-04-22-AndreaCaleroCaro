import 'mocha';
import {expect} from 'chai';
import {AddReduce} from '../src/addReduce';
import {SubReduce} from '../src/subReduce';

let arrayInAdd: number[] = [1,2,3,4];
let arrayInSub: number[] = [4,3];
let array = new AddReduce(arrayInAdd);
let array2 = new SubReduce(arrayInSub);
//array.run()

describe('Subclase AddReduce y Reduce tests', () => {
  it('array.addReduce(arrayInAdd) returns value 10', () => {
    expect(array.addReduce(arrayInAdd)).to.be.equal(10);
  });
});

describe('Subclase SubReduce y Reduce tests', () => {
  it('array2.subReduce(arrayInSub) returns value 1', () => {
    expect(array2.subReduce(arrayInSub)).to.be.equal(1);
  });
});