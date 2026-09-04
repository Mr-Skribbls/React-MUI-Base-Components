import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import useFieldValidationMessage from './useFieldValidationMessage';

describe('validationAttrs', () => {

  it('returns empty object when field validation succeeds.', () => {
    const { result } = renderHook(() => useFieldValidationMessage('abc', (value) => value === 'abc', 'Field must equal abc.'));
    const validationAttrs = result.current.validationAttrs;

    expect(validationAttrs).toEqual({});
  });

  it('returns helperText attribute when field validation fails', () => {
    const message = 'Field must equal abc.';
    const { result } = renderHook(() => useFieldValidationMessage('123', (value) => value === 'abc', message));
    const validationAttrs = result.current.validationAttrs;

    expect(validationAttrs).toEqual({
      helperText: message,
    });
  });

});