import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ActionType, useImducer } from './useImducer';

interface Profile {
  name: string;
  details: {
    age: number;
    tags: string[];
  };
}

const makeProfile = (): Profile => ({
  name: 'Alex',
  details: {
    age: 30,
    tags: ['dev'],
  },
});

describe('useImducer', () => {
  it('replaces the state with SET', () => {
    const initial = makeProfile();
    const { result } = renderHook(() => useImducer<Profile>(initial));

    act(() => {
      result.current[1]({ type: ActionType.SET, value: { ...makeProfile(), name: 'BLANK' } });
    });

    expect(result.current[0].name).toBe('BLANK');
  });

  it('transforms the state with UPDATE', () => {
    const { result } = renderHook(() => useImducer<Profile>(makeProfile()));

    act(() => {
      result.current[1]({
        type: ActionType.UPDATE,
        updateFn: (prev) => ({ ...prev, details: { ...prev.details, age: prev.details.age + 1 } }),
      });
    });

    expect(result.current[0].details.age).toBe(31);
  });

  it('mutates a draft directly with DRAFT', () => {
    const { result } = renderHook(() => useImducer<Profile>(makeProfile()));

    act(() => {
      result.current[1]({
        type: ActionType.DRAFT,
        draftFn: (draft) => {
          draft.details.age = 40;
          draft.details.tags.push('react');
        },
      });
    });

    expect(result.current[0].details.age).toBe(40);
    expect(result.current[0].details.tags).toEqual(['dev', 'react']);
  });

  it('does not mutate the original initialState object', () => {
    const initial = makeProfile();
    const { result } = renderHook(() => useImducer<Profile>(initial));

    act(() => {
      result.current[1]({
        type: ActionType.DRAFT,
        draftFn: (draft) => {
          draft.details.tags.push('mutated');
        },
      });
    });

    expect(initial.details.tags).toEqual(['dev']);
    expect(result.current[0].details.tags).toEqual(['dev', 'mutated']);
  });

  it('supports primitive state', () => {
    const { result } = renderHook(() => useImducer<number>(1));

    act(() => {
      result.current[1]({
        type: ActionType.UPDATE,
        updateFn: (prev) => prev + 1,
      });
    });

    expect(result.current[0]).toBe(2);
  });
});