import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import GridList from './GridList';

const { dataGridMock } = vi.hoisted(() => ({ dataGridMock: vi.fn() }));

vi.mock('@mui/x-data-grid', () => ({
  DataGrid: dataGridMock,
}));

describe('GridList', () => {
  it('builds configured columns and forwards rows to DataGrid', () => {
    dataGridMock.mockImplementation(({ rows, columns }: { rows: unknown[]; columns: { field: string }[] }) => (
      <div data-testid="data-grid">{rows.length}:{columns.map((column) => column.field).join(',')}</div>
    ));
    const data = [{ id: 1, name: 'Animal', hidden: 'secret' }];

    const { getByTestId } = render(
      <GridList
        data={data}
        configuration={{
          columns: {
            hidden: ['hidden'],
            headers: { name: 'Name' },
            order: ['name', 'id'],
          },
        }}
      />,
    );

    expect(getByTestId('data-grid')).toHaveTextContent('1:name,id');
    expect(dataGridMock).toHaveBeenCalledOnce();
    expect(dataGridMock.mock.calls[0][0].columns[0]).toMatchObject({ field: 'name', headerName: 'Name' });
  });
});