import { ReactNode } from 'react';
export type MenuItemDefinition = {
    displayName: string;
    click: () => void;
};
export interface IconMenuProps {
    title?: string;
    icon: ReactNode;
    menuItems: MenuItemDefinition[];
}
export declare const IconMenu: ({ title, icon, menuItems, }: IconMenuProps) => import("react").JSX.Element;
export default IconMenu;
