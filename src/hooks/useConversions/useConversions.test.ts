import { renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import useConversions from './useConversions';

describe('useConversions', () => {

  let convertWeight: ReturnType<typeof useConversions>['convertWeight'];

  beforeEach(() => {
    const { result } = renderHook(() => useConversions());
    convertWeight = result.current.convertWeight;
  });

  describe('convertWeight', () => {
    // gram conversion checks
    it('accurately converts grams to kilograms', () => {
      expect(convertWeight(1000, 'g', 'kg')).toBe(1);
      expect(convertWeight(2500, 'g', 'kg')).toBe(2.5);
      expect(convertWeight(125, 'g', 'kg')).toBe(0.125);
    });
  
    it('accurately converts grams to oz', () => {
      expect(convertWeight(1000, 'g', 'oz')).toBe(35.27396194958041);
      expect(convertWeight(2500, 'g', 'oz')).toBe(88.18490487395103);
      expect(convertWeight(125, 'g', 'oz')).toBe(4.409245243697551);
    });
  
    it('accurately converts grams to lbs', () => {
      expect(convertWeight(1000, 'g', 'lbs')).toBe(2.2046226218487757);
      expect(convertWeight(2500, 'g', 'lbs')).toBe(5.511556554621939);
      expect(convertWeight(125, 'g', 'lbs')).toBe(0.27557782773109696);
    });
  
    // kilogram conversion checks
    it('accurately converts kilograms to grams', () => {
      expect(convertWeight(1000, 'kg', 'g')).toBe(1000000);
      expect(convertWeight(2500, 'kg', 'g')).toBe(2500000);
      expect(convertWeight(125, 'kg', 'g')).toBe(125000);
    });
  
    it('accurately converts kilograms to oz', () => {
      expect(convertWeight(1000, 'kg', 'oz')).toBe(35273.961949580415);
      expect(convertWeight(2500, 'kg', 'oz')).toBe(88184.90487395103);
      expect(convertWeight(125, 'kg', 'oz')).toBe(4409.245243697552);
    });
  
    it('accurately converts kilograms to lbs', () => {
      expect(convertWeight(1000, 'kg', 'lbs')).toBe(2204.622621848776);
      expect(convertWeight(2500, 'kg', 'lbs')).toBe(5511.5565546219395);
      expect(convertWeight(125, 'kg', 'lbs')).toBe(275.577827731097);
    });
  
    // ounces conversion checks
    it('accurately converts ounces to grams', () => {
      expect(convertWeight(1000, 'oz', 'g')).toBe(28349.523125);
      expect(convertWeight(2500, 'oz', 'g')).toBe(70873.8078125);
      expect(convertWeight(125, 'oz', 'g')).toBe(3543.690390625);
    });
  
    it('accurately converts ounces to kilograms', () => {
      expect(convertWeight(1000, 'oz', 'kg')).toBe(28.349523125);
      expect(convertWeight(2500, 'oz', 'kg')).toBe(70.8738078125);
      expect(convertWeight(125, 'oz', 'kg')).toBe(3.543690390625);
    });
  
    it('accurately converts ounces to lbs', () => {
      expect(convertWeight(1000, 'oz', 'lbs')).toBe(62.5);
      expect(convertWeight(2500, 'oz', 'lbs')).toBe(156.25);
      expect(convertWeight(125, 'oz', 'lbs')).toBe(7.8125);
    });
  
    // pound conversion checks
    it('accurately converts pound to grams', () => {
      expect(convertWeight(1000, 'lbs', 'g')).toBe(453592.37);
      expect(convertWeight(2500, 'lbs', 'g')).toBe(1133980.925);
      expect(convertWeight(125, 'lbs', 'g')).toBe(56699.04625);
    });
  
    it('accurately converts pound to kilograms', () => {
      expect(convertWeight(1000, 'lbs', 'kg')).toBe(453.59237);
      expect(convertWeight(2500, 'lbs', 'kg')).toBe(1133.980925);
      expect(convertWeight(125, 'lbs', 'kg')).toBe(56.69904625);
    });
  
    it('accurately converts pound to oz', () => {
      expect(convertWeight(1000, 'lbs', 'oz')).toBe(16000);
      expect(convertWeight(2500, 'lbs', 'oz')).toBe(40000);
      expect(convertWeight(125, 'lbs', 'oz')).toBe(2000);
    });
  });
});