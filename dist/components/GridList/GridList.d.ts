import { GridColType, GridActionsCellItemProps, GridRowParams, GridRowSelectionModel, GridValidRowModel, GridCellParams, GridTreeNode, GridRowHeightReturnValue, GridRowHeightParams } from '@mui/x-data-grid';
import { ReactElement, ReactNode } from 'react';
import { Dayjs } from 'dayjs';
type GridItemColumnValue = number | string | Dayjs | boolean | undefined | null;
export interface GridData {
    id: number | string;
    [key: string]: GridItemColumnValue;
}
export interface GridConfiguration<T extends GridValidRowModel> {
    columns: {
        hidden?: (keyof T)[];
        order?: ((keyof T) | string)[];
        headers?: {
            [field: string]: string;
        };
        types?: {
            [field: string]: GridColType;
        };
        actions?: {
            [field: string]: (params: GridRowParams<T>) => readonly ReactElement<GridActionsCellItemProps>[];
        };
        customCells?: {
            [field in keyof T]?: (value: string, row: GridValidRowModel) => ReactNode;
        };
        customCellClassNames?: {
            [field in keyof T]?: (params: GridCellParams<T, unknown, unknown, GridTreeNode>) => string;
        };
        formats?: {
            [field in keyof T]?: (value: unknown) => unknown;
        };
        dimensions?: {
            [field: string]: {
                width?: number;
                minWidth?: number;
                maxWidth?: number;
                flex?: number;
            };
        };
    };
    selection?: {
        disabled?: boolean;
        multiSelect?: boolean;
        model?: GridRowSelectionModel;
    };
    getRowHeight?: ((params: GridRowHeightParams) => GridRowHeightReturnValue) | undefined;
}
export interface GridEvents {
    onRowSelection?: (selection: GridRowSelectionModel) => void;
}
export interface GridListProps<T extends GridData> {
    data: T[];
    configuration?: GridConfiguration<T>;
    events?: GridEvents;
}
export declare function GridList<T extends GridData>({ data, configuration, events, }: GridListProps<T>): import("react").JSX.Element;
export default GridList;
