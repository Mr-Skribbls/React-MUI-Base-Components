import { DragEvent, ReactNode } from 'react';
export interface FieldContainerProps {
    children: ReactNode;
    direction?: 'column' | 'row';
    minWidth?: number;
    spacing?: number;
    onDragOver?: (event: DragEvent<HTMLElement>) => void;
    onDragEnter?: (event: DragEvent<HTMLElement>) => void;
    onDragLeave?: (event: DragEvent<HTMLElement>) => void;
    onDrop?: (event: DragEvent<HTMLElement>) => void;
}
export declare const FieldContainer: ({ children, direction, minWidth, spacing, onDragOver, onDragEnter, onDragLeave, onDrop, }: FieldContainerProps) => import("react").JSX.Element;
export default FieldContainer;
