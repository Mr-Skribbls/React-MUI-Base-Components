import { ElementType, JSX } from 'react';
import { InputBaseComponentProps } from '@mui/material';
export type ComboBoxMask = ElementType<InputBaseComponentProps, keyof JSX.IntrinsicElements>;
export type ComboBoxValue<T> = (T | string) | (T | string)[] | null;
export interface ComboBoxProps<T> {
    options: T[];
    value: ComboBoxValue<T>;
    onChange: (value: ComboBoxValue<T>) => void;
    displayProp?: (option: T) => string;
    mask?: ComboBoxMask;
    maskInputProps?: Record<string, unknown>;
    multiple?: boolean;
    label?: string;
    placeholder?: string;
    errors?: string;
}
export declare const ComboBox: <T>({ options, value, onChange, displayProp, mask, maskInputProps, multiple, label, placeholder, errors, }: ComboBoxProps<T>) => JSX.Element;
export default ComboBox;
