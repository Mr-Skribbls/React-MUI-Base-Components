import { ReactNode } from 'react';
export interface HorizontalTab {
    displayName: string;
    content: ReactNode;
    disabled?: boolean;
}
export interface HorizontalTabDisplayProps {
    tabs: HorizontalTab[];
    ariaLabel?: string;
}
export declare const HorizontalTabDisplay: ({ tabs, ariaLabel, }: HorizontalTabDisplayProps) => import("react").JSX.Element;
export default HorizontalTabDisplay;
