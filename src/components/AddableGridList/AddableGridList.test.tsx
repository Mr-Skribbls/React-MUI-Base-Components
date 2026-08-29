import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import AddableGridList from './AddableGridList';

const { gridListMock } = vi.hoisted(() => ({
  gridListMock: vi.fn(),
}));

vi.mock('../GridList', () => ({
  GridList: gridListMock,
}));

describe('AddableGridList', () => {
  beforeEach(() => {
    gridListMock.mockReturnValue(<div data-testid="grid-list" />);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the grid and add item dialog', () => {
    render(
      <AddableGridList
        data={[{ id: 1, name: 'First item' }]}
        addItemDialog={<div role="dialog">Add item</div>}
      />,
    );

    expect(screen.getByTestId('grid-list')).toBeInTheDocument();
    expect(screen.getByText('Add item')).toBeInTheDocument();
  });

  it('forwards grid data, configuration, and events', () => {
    const data = [{ id: 1, name: 'First item' }];
    const configuration = { columns: { hidden: ['name' as const] } };
    const events = { onRowSelection: vi.fn() };

    render(
      <AddableGridList
        data={data}
        addItemDialog={<div>Add item</div>}
        configuration={configuration}
        events={events}
      />,
    );

    expect(gridListMock).toHaveBeenCalledTimes(1);
    expect(gridListMock.mock.calls[0][0]).toEqual({
      data,
      configuration,
      events,
    });
  });
});