import { Dispatch } from 'react';
import { Draft } from 'immer';
export declare enum ActionType {
    SET = "set",
    UPDATE = "update",
    DRAFT = "draft"
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
export type ImducerAction<T> = ImducerSetAction<T> | ImducerUpdateAction<T> | ImducerDraftAction<T>;
export declare const useImducer: <T>(initialState: T) => [T, Dispatch<ImducerAction<T>>];
export default useImducer;
