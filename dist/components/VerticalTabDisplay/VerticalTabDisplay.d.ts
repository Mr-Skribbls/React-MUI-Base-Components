import { ReactNode } from 'react';
export interface VerticalTab {
    displayName: string;
    content: ReactNode;
    disabled?: boolean;
}
export interface VerticalTabDisplayProps {
    tabs: VerticalTab[];
    ariaLabel?: string;
}
export declare const VerticalTabDisplay: ({ tabs, ariaLabel, }: VerticalTabDisplayProps) => import("react").JSX.Element;
export default VerticalTabDisplay;
