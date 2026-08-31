import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import IconMenu from './IconMenu';

describe('IconMenu', () => {
  it('opens the menu and invokes the selected item', () => {
    const click = vi.fn();
    render(
      <IconMenu
        title="Actions"
        icon={<span aria-hidden="true">...</span>}
        menuItems={[{ displayName: 'Edit', click }]}
      />,
    );

    fireEvent.click(screen.getAllByRole('button', { name: 'Actions' })[0]);

    expect(screen.getByRole('menuitem', { name: 'Edit' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('menuitem', { name: 'Edit' }));

    expect(click).toHaveBeenCalledOnce();
    expect(screen.queryByRole('menuitem', { name: 'Edit' })).not.toBeInTheDocument();
  });
});