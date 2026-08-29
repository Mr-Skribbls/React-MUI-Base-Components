import {
  DataGrid,
  GridColDef,
  GridColType,
  GridActionsCellItemProps,
  GridRowParams,
  GridRowSelectionModel,
  GridValidRowModel,
  GridRenderCellParams,
  GridTreeNodeWithRender,
  GridCellClassNamePropType,
  GridCellParams,
  GridTreeNode,
  GridRowHeightReturnValue,
  GridRowHeightParams,
} from '@mui/x-data-grid';
import { ReactElement, ReactNode, useMemo } from 'react';
import { findIndex, flatten, isEmpty, isFunction, isNil, isString, keys, sortBy, uniq } from 'lodash';
import type { Dayjs } from 'dayjs';

type GridItemColumnValue = number | string | Dayjs | boolean | undefined | null;

export interface GridData {
  id: number | string;
  [key: string]: GridItemColumnValue;
}

export interface GridConfiguration<T extends GridValidRowModel> {
  columns: {
    hidden?: (keyof T)[];
    order?: ((keyof T) | string)[];
    headers?: { [field: string]: string; };
    types?: { [field: string]: GridColType};
    actions?: { [field: string]: (params: GridRowParams<T>) => readonly ReactElement<GridActionsCellItemProps>[] };
    customCells?: { [field in keyof T]?: (value: string, row: GridValidRowModel) => ReactNode }
    customCellClassNames?: { [field in keyof T]?: (params: GridCellParams<T, unknown, unknown, GridTreeNode>) => string}
    formats?: { [field in keyof T]?: (value: unknown) => unknown}
    dimensions?: { [field: string]: {
      width?: number;
      minWidth?: number;
      maxWidth?: number;
      flex?: number;
    }};
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

export function GridList<T extends GridData>({
  data,
  configuration,
  events,
}: GridListProps<T>) {

  const columns = useMemo<GridColDef<T>[]>(
    () => {
      const columnNames = sortBy([
        ...uniq(flatten(data.map((row) => keys(row).filter((key) => !configuration?.columns.hidden?.includes(key))))) as (keyof T)[],
        ...keys(configuration?.columns.actions),
      ], (columnName) => findIndex(configuration?.columns.order, (orderColumn) => orderColumn === columnName));

      const columns: GridColDef<T>[] = columnNames.map((columnName) => {
        let optionalColumnProps: {
          type?: GridColType;
          headerName?: string;
          getActions?: (params: GridRowParams<T>) => readonly ReactElement<GridActionsCellItemProps>[];
          renderCell?: <T,>(params: GridRenderCellParams<GridValidRowModel, T>) => ReactNode;
          cellClassName?: GridCellClassNamePropType<T, unknown>;
          valueFormatter?: (value: unknown) => unknown;
          width?: number;
        } = {};

        // headerName
        if ( !isNil(configuration?.columns.headers)
          && !isNil(configuration.columns.headers[columnName as string])
        ) {
          optionalColumnProps.headerName = configuration.columns.headers[columnName as string]
        }

        // dimensions
        if ( !isNil(configuration?.columns.dimensions)
          && !isNil(configuration.columns.dimensions[columnName as string])
        ) {
          const dimensions = configuration.columns.dimensions[columnName as string];
          if (!isEmpty(dimensions)) {
            optionalColumnProps = {
              ...optionalColumnProps,
              ...dimensions
            }
          }
        }

        // type
        if ( !isNil(configuration?.columns.types)
          && !isNil(configuration.columns.types[columnName as string])
        ) {
          optionalColumnProps.type = configuration.columns.types[columnName as string]
        }

        // getActions
        if ( !isNil(configuration?.columns.actions)
          && !isNil(configuration.columns.actions[columnName as keyof typeof configuration.columns.actions])
        ) {
          optionalColumnProps.type = 'actions';
          optionalColumnProps.getActions = configuration.columns.actions[columnName as keyof typeof configuration.columns.actions]
        }

        // renderCell
        if ( !isNil(configuration?.columns.customCells)
          && !isNil(configuration.columns.customCells[columnName])
        ) {
          const customFn = configuration.columns.customCells[columnName];
          optionalColumnProps.type = 'custom';
          optionalColumnProps.renderCell = <T,>(params: GridRenderCellParams<GridValidRowModel, T, T, GridTreeNodeWithRender>) => {
            let res:ReactNode = <></>;
            if(isFunction(customFn) && isString(params.value)) {
              res = customFn(params.value, params.row);
            }
            return res;
          }
        }

        // cellClassName
        if ( !isNil(configuration?.columns.customCellClassNames)
          && !isNil(configuration.columns.customCellClassNames[columnName])
        ) {
          const customClassFn = configuration.columns.customCellClassNames[columnName];
          optionalColumnProps.cellClassName = (params: GridCellParams<T, unknown>) => {
            let className = '';
            if(isFunction(customClassFn)) {
              className = customClassFn(params);
            }
            return className;
          };
        }

        // valueFormatter
        if ( !isNil(configuration?.columns.formats)
          && !isNil(configuration.columns.formats[columnName])
        ) {
          optionalColumnProps.valueFormatter = configuration.columns.formats[columnName];
        }

        const column: GridColDef<T> = {
          field: columnName as string,
          ...optionalColumnProps,
        }
        return column;
      });

      return columns;
    },
    [configuration, data],
  );

  const handleRowSelection = (rowSelectionModel: GridRowSelectionModel) => {
    if(events?.onRowSelection) {
      events.onRowSelection(rowSelectionModel);
    }
  };

  return (
    <DataGrid
      getRowHeight={configuration?.getRowHeight}
      autoPageSize
      disableColumnFilter
      checkboxSelection={configuration?.selection?.multiSelect}
      disableMultipleRowSelection={!configuration?.selection?.multiSelect}
      isRowSelectable={() => !configuration?.selection?.disabled}
      columns={columns}
      rows={data}
      rowSelectionModel={configuration?.selection?.model}
      onRowSelectionModelChange={handleRowSelection}
      sx={{
        border: '2px solid var(--mui-palette-borders-main)',
        '& .MuiDataGrid-cell': {
          borderTop: '1px solid var(--mui-palette-borders-main)',
        },
        // Target both header and row checkboxes
        '& .MuiCheckbox-root': {
          color: 'var(--mui-palette-cards-contrastText)', // Color when unchecked
        },
        '& .MuiCheckbox-root.Mui-checked': {
          color: 'var(--mui-palette-highlights-main)', // Color when checked
        },
      }} />
  );
}

export default GridList;
