import { ReactNode } from 'react';
export interface ResponsiveButtonProps {
    title?: string;
    icon: ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export declare const ResponsiveButton: ({ title, icon, onClick, }: ResponsiveButtonProps) => import("react").JSX.Element;
export default ResponsiveButton;
