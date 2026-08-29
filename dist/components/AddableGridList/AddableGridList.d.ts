import { ReactNode } from 'react';
import { GridConfiguration, GridData, GridEvents } from '../GridList';
export interface AddableGridListProps<T extends GridData> {
    data: T[];
    addItemDialog: ReactNode;
    configuration?: GridConfiguration<T>;
    events?: GridEvents;
}
export declare const AddableGridList: <T extends GridData>({ data, addItemDialog, configuration, events, }: AddableGridListProps<T>) => import("react").JSX.Element;
export default AddableGridList;
