import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';

import useDebounce from './useDebounce';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('executes action only once with multiple calls', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useDebounce(500, callback));
    
    result.current.debounce();
    result.current.debounce();
    result.current.debounce();
    
    expect(callback).not.toHaveBeenCalled();
    
    vi.runAllTimers();
    
    expect(callback).toHaveBeenCalledOnce();
  });
});