import { beforeEach, describe, expect, it } from 'vitest';

import useTempId from './useTempId';
import { renderHook } from '@testing-library/react';

describe('getIdGenerator', () => {
  let getIdGenerator: ReturnType<typeof useTempId>['getIdGenerator'];

  beforeEach(() => {
    const { result } = renderHook(() => useTempId());
    getIdGenerator = result.current.getIdGenerator;
  });

  it('returns a negative full number', () => {
    const { next } = getIdGenerator([]);
    const id = next();
    expect(id).toBeLessThan(0);
    expect(Number.isInteger(id)).toBe(true);
  });

  it('returns the closest next number to 0', () => {
    const { next } = getIdGenerator([-1, -2, -4]);
    expect(next()).toBe(-3);
    expect(next()).toBe(-5);
  });

});