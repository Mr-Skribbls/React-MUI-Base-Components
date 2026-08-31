import { describe, expect, it } from 'vitest';
import { fireEvent, renderHook } from '@testing-library/react';
import useWindowDimensions from './useWindowDimensions';

describe('windowDimensions', () => {
  
  it('returns the browsers window size', () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 1280,
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 720,
    });

    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current).toEqual({ width: 1280, height: 720 });
  });

  it('returns the browsers new window size when it is resized', () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 1280,
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 720,
    });
    const { result } = renderHook(() => useWindowDimensions());
    expect(result.current).toEqual({ width: 1280, height: 720 });

    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 768,
    });
    fireEvent.resize(window);
    expect(result.current).toEqual({ width: 1024, height: 768 });
  });

});