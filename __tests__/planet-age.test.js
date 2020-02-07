import { Age } from './../src/age.js';
import TestRunner from 'jest-runner';
import { exportAllDeclaration } from '@babel/types';

describe('Age', () => {
    test('should only take a number for age object', () => {
        const earthAge = new Age('abc');
        expect(earthAge.posNumCheck()).toEqual("please enter a number");
    });
    test('Ensure the number entered is a positive number', () => {
        const earthAge = new Age(-25);
        expect(earthAge.posNumCheck()).toEqual('please enter a positive number');
    });
});