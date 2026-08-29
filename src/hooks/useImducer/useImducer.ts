import type { Reducer, Dispatch } from 'react';
import { useReducer } from 'react';
import { produce } from 'immer';
import type { Draft } from 'immer';
import { isPrimitive } from '../../services/helpers';
import { cloneDeep } from 'lodash';

export enum ActionType {
  SET = 'set',
  UPDATE = 'update',
  DRAFT = 'draft',
}

type ImducerSetAction<T> = {
  type: ActionType.SET;
  value: T;
};

type ImducerUpdateAction<T> = {
  type: ActionType.UPDATE;
  updateFn: (prev: T) => T;
};

type ImducerDraftAction<T> = {
  type: ActionType.DRAFT;
  draftFn: (draft: Draft<T>) => void;
};

export type ImducerAction<T> =
  | ImducerSetAction<T>
  | ImducerUpdateAction<T>
  | ImducerDraftAction<T>;

type ActionMap<T> = {
  [ActionType.SET]: ImducerSetAction<T>;
  [ActionType.UPDATE]: ImducerUpdateAction<T>;
  [ActionType.DRAFT]: ImducerDraftAction<T>;
};

type ActionLibrary = {
  [K in ActionType]: <T>(state: T, action: ActionMap<T>[K]) => T;
};

const actions: ActionLibrary = {
  [ActionType.SET]: <T>(_state: T, action: ImducerSetAction<T>) => action.value,
  [ActionType.UPDATE]: <T>(state: T, action: ImducerUpdateAction<T>) => action.updateFn(state),
  [ActionType.DRAFT]: <T>(state: T, action: ImducerDraftAction<T>) => produce(state, action.draftFn),
};

const runAction = <T>(state: T, action: ImducerAction<T>): T => {
  switch (action.type) {
    case ActionType.SET:
      return actions[action.type](state, action);
    case ActionType.UPDATE:
      return actions[action.type](state, action);
    case ActionType.DRAFT:
      return actions[action.type](state, action);
  }
};

const reducer = <T>(): Reducer<T, ImducerAction<T>> => {
  return (state, action) => runAction(state, action);
};

export const useImducer = <T>(
  initialState: T
): [T, Dispatch<ImducerAction<T>>] => {
  return useReducer(reducer<T>(), isPrimitive(initialState) ? initialState : cloneDeep(initialState));
};

export default useImducer;