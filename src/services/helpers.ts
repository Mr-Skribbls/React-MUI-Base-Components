import { isBoolean, isNil, isNumber, isString, isSymbol } from 'lodash';

export const isPrimitive = (value: unknown): boolean => {
  return isString(value)
    || isNumber(value)
    || typeof value === 'bigint'
    || isBoolean(value)
    || isNil(value)
    || isSymbol(value);
};

export const getTypeKeys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};