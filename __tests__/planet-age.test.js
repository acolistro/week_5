import { Age } from './../src/age.js';
import TestRunner from 'jest-runner';
import { exportAllDeclaration } from '@babel/types';

describe('Age', () => {
    test('should only take a number for age object', () => {
        const earthAge = new Age('abc');
        expect(earthAge.posNumCheck()).toEqual("please enter a number");
    });
});