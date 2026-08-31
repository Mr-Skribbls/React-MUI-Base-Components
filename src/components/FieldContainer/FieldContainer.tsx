import type { DragEvent, ReactNode } from 'react';
import { Stack } from '@mui/material';

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

export const FieldContainer = ({
  children,
  direction = 'column',
  minWidth = 0,
  spacing = 1.5,
  onDragOver,
  onDragEnter,
  onDragLeave,
  onDrop,
}: FieldContainerProps) => {

  return (
    <Stack
      minWidth={minWidth}
      sx={{
        marginTop: '6px',
      }}
      spacing={spacing}
      direction={direction}
      flexGrow={1}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}>
      { children }
    </Stack>
  );
};

export default FieldContainer;