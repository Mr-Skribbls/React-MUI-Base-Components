import { Color } from '@rc-component/color-picker';
export interface ColorPickerButtonProps {
    color?: Color | null;
    onChange?: (color: Color) => void;
    configuration?: {
        size?: number;
        padding?: number;
        borderRadius?: number;
        allowDialog?: boolean;
    };
}
export declare const ColorPickerButton: ({ color, onChange, configuration, }: ColorPickerButtonProps) => import("react").JSX.Element;
export default ColorPickerButton;
