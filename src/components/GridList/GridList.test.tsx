import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import GridList from './GridList';

const { dataGridMock } = vi.hoisted(() => ({ dataGridMock: vi.fn() }));

vi.mock('@mui/x-data-grid', () => ({
  DataGrid: dataGridMock,
}));

describe('GridList', () => {
  beforeEach(() => {
    dataGridMock.mockReset();
    dataGridMock.mockImplementation(() => null);
  });

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

  it('defaults to automatic page sizing and forwards row height', () => {
    const getRowHeight = vi.fn(() => 'auto' as const);

    render(
      <GridList
        data={[]}
        configuration={{ columns: {}, getRowHeight }}
      />,
    );

    expect(dataGridMock.mock.calls[0][0]).toMatchObject({
      autoPageSize: true,
      getRowHeight,
    });
  });

  it('supports a fixed initial page size without automatic sizing', () => {
    const getRowHeight = vi.fn(() => 'auto' as const);

    render(
      <GridList
        data={[]}
        configuration={{
          columns: {},
          pagination: { autoPageSize: false, initialPageSize: 25 },
          getRowHeight,
        }}
      />,
    );

    expect(dataGridMock.mock.calls[0][0]).toMatchObject({
      autoPageSize: false,
      initialState: { pagination: { paginationModel: { pageSize: 25 } } },
      getRowHeight,
    });
  });
});