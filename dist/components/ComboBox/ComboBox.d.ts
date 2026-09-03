import { InputBaseComponentProps } from '@mui/material';
type BaseProps = {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    mask?: React.ElementType<InputBaseComponentProps, keyof React.JSX.IntrinsicElements>;
    errors?: string;
};
type StringComboBoxProps = BaseProps & {
    items: string[];
    multiple?: boolean;
    value?: string | string[];
    onChange: (value: string | string[]) => void;
};
type ObjectComboBoxProps<T extends Record<string, unknown>, K extends keyof T> = BaseProps & {
    items: T[];
    multiple?: boolean;
    value?: T[K] | T[K][] | string | string[];
    onChange: (value: T[K] | T[K][] | string | string[]) => void;
    getOptionLabel: (option: T) => string;
    valueProperty: K;
};
declare function ComboBox<T extends Record<string, unknown>, K extends keyof T>(props: StringComboBoxProps | ObjectComboBoxProps<T, K>): React.ReactElement;
export default ComboBox;
