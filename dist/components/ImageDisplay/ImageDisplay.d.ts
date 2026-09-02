import { CSSProperties } from 'react';
type BaseProps = {
    alt: string;
    center: ImageCenter;
    className?: string;
    style?: CSSProperties;
};
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>;
type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>> | T;
type ValidPercentage = IntRange<0, 100>;
export type ImageCenter = [ValidPercentage, ValidPercentage];
export type ImageDisplayProps = ({
    imageUrl: string;
} & BaseProps) | ({
    imageFile: File;
} & BaseProps);
export declare const ImageDisplay: (props: ImageDisplayProps) => import("react").JSX.Element;
export default ImageDisplay;
