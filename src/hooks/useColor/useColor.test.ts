import { beforeEach, describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react';

import useColor from './useColor';

describe('randomHex', () => {
  let randomHex: ReturnType<typeof useColor>['randomHex'];

  beforeEach(() => {
    const { result } = renderHook(() => useColor());
    randomHex = result.current.randomHex;
  });

  it('returns a color', () => {
    expect(randomHex()).toMatch(/^#[0-9a-fA-F]{6}$/);
  });

  it('returns a different color on each call', () => {
    expect(randomHex()).not.toBe(randomHex());
  });
});
