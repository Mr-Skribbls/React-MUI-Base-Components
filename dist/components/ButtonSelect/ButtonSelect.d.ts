type SpecificTypeKeys<T, V extends number | string> = {
    [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];
export interface ButtonSelectProps<T, V extends number | string, D extends number | string> {
    options: T[];
    onChange: (selectedValue?: V) => void;
    label?: string;
    selectedOption?: T;
    disabled?: boolean;
    displayProp?: SpecificTypeKeys<T, D>;
    valueProp?: SpecificTypeKeys<T, V>;
}
export declare const ButtonSelect: <T, V extends number | string, D extends number | string>({ options, onChange, label, selectedOption, disabled, displayProp, valueProp, }: ButtonSelectProps<T, V, D>) => import("react").JSX.Element;
export default ButtonSelect;
