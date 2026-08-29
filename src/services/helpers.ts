import { isBoolean, isNil, isNumber, isString, isSymbol } from 'lodash';

export const isPrimitive = (value: unknown): boolean => {
  return isString(value)
    || isNumber(value)
    || typeof value === 'bigint'
    || isBoolean(value)
    || isNil(value)
    || isSymbol(value);
};