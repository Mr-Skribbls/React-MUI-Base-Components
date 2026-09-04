import { beforeEach, describe, expect, it } from 'vitest';

import useDateFormat from './useDateFormat';
import { renderHook } from '@testing-library/react';
import dayjs from 'dayjs';

const dateToFormat = dayjs('1-1-2026 00:00:00');

describe('formatDate', () => {

  describe('with default options', () => {
    let formatDate: ReturnType<typeof useDateFormat>['formatDate'];
  
    beforeEach(() => {
      const { result } = renderHook(() => useDateFormat());
      formatDate = result.current.formatDate;
    });
  
    it('returns the date formatted with the default format.', () => {
      const formatted = formatDate(dateToFormat);
      expect(formatted).toBe('Jan 1, 2026');
    });

    it('returns the date formatted with a custom format when one is provided', (() => {
      const formatted = formatDate(dateToFormat, {
        year: 'numeric',
        month: undefined,
        day: undefined,
      });
      expect(formatted).toBe('2026');
    }))
  });

  describe('with provided options', () => {
    let formatDate: ReturnType<typeof useDateFormat>['formatDate'];

    beforeEach(() => {
      const { result } = renderHook(() => useDateFormat({
        year: '2-digit',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }));
      formatDate = result.current.formatDate;
    });

    it('returns the date formatted with the provided format.', () => {
      const formatted = formatDate(dateToFormat);
      expect(formatted).toBe('January 01, 26 at 12:00:00 AM');
    });

    it('returns the date formatted with a custom format when on is provided.', () => {
      const formatted = formatDate(dateToFormat, {
        year: '2-digit',
        month: undefined,
        day: undefined,
        hour: undefined,
        minute: undefined,
        second: undefined,
      });
      expect(formatted).toBe('26');
    })
  })
});

describe('simpleFormatDate', () => {
  let simpleFormatDate: ReturnType<typeof useDateFormat>['simpleFormatDate'];

  beforeEach(() => {
    const { result } = renderHook(() => useDateFormat());
    simpleFormatDate = result.current.simpleFormatDate;
  });

  it('returns the date formatted with the default template.', () => {
    const formatted = simpleFormatDate(dateToFormat);
    expect(formatted).toBe('2026-01-01 00:00');
  });

  it('returns the date formatted with a custom template when provided.', () => {
    const formatted = simpleFormatDate(dateToFormat, 'MM yyyy | HH:mm');
    expect(formatted).toBe('01 2026 | 00:00');
  });
});