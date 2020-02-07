import { Age } from './../src/age.js';
import TestRunner from 'jest-runner';
import { exportAllDeclaration } from '@babel/types';

describe('Age', () => {
    test('should only take a number for age object', () => {
        const earthAge = new Age('abc');
        expect(earthAge.posNumCheck()).toEqual("please enter a number");
    });
    test('Ensure the number entered is a positive number', () => {
        const age = new Age(-25);
        expect(age.posNumCheck()).toEqual('please enter a positive number');
    });
    test('should correctly convert Earth age to Mercury solar age', () => {
        const age = new Age(25);
        expect(age.toMercury()).toEqual(25/0.24);
    });
    test('should correctly convert Earth age to Venus solar age', () => {
        const age = new Age(25);
        expect(age.toVenus()).toEqual(25/0.62);
    });
    test('should correctly convert Earth age to Mars solar age', () => {
        const age = new Age(25);
        expect(age.toMars()).toEqual(25/1.88);
    });
    test('should correctly convert Earth age to Jupiter age', () => {
        const age = new Age(25);
        expect(age.toJupiter()).toEqual(25/11.86);
    });
    test('should correctly calculate years left to live on Earth based on a life expectancy of 75 Earth years.', () => {
        const age = new Age(25);
        expect(age.expect()).toEqual(50);
    });
});