import { Age } from './../src/age.js';
import TestRunner from 'jest-runner';
import { exportAllDeclaration } from '@babel/types';

describe('Age', () => {
    const age = new Age(25);
    const ageOver = new Age(85)
    test('should only take a number for age object', () => {
        const earthAge = new Age('abc');
        expect(earthAge.posNumCheck()).toEqual("please enter a number");
    });
    test('Ensure the number entered is a positive number', () => {
        const ageNeg = new Age(-25);
        expect(ageNeg.posNumCheck()).toEqual('please enter a positive number');
    });
    test('should correctly convert Earth age to Mercury solar age', () => {
        age.toMercury();
        expect(age.mercSolar).toEqual(104);
    });
    test('should correctly convert Earth age to Venus solar age', () => {
        age.toVenus();
        expect(age.venSolar).toEqual(40);
    });
    test('should correctly convert Earth age to Mars solar age', () => {
        age.toMars();
        expect(age.marsSolar).toEqual(13);
    });
    test('should correctly convert Earth age to Jupiter age', () => {
        age.toJupiter();
        expect(age.jupSolar).toEqual(2);
    });
    test('should correctly calculate years left to live on Earth based on a life expectancy of 75 Earth years.', () => {
        expect(age.earthExpect).toEqual(50);
    });
    test('should correctly calculate years left to live on Mercury based on a life expectancy of 75 Earth years.', () => {
        ageOver.toMercury();
        expect(ageOver.mercExpect).toEqual(41);
    });
    test('should correctly calculate years left to live on Venus based on a life expectancy of 75 Earth years.', () => {
        ageOver.toVenus();
        expect(ageOver.venExpect).toEqual(41);
    });
});