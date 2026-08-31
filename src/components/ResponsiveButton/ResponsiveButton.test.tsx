import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ResponsiveButton from './ResponsiveButton';

describe('ResponsiveButton', () => {
  it('renders desktop and mobile buttons with the same action', () => {
    const onClick = vi.fn();
    render(
      <ResponsiveButton
        title="Add"
        icon={<span aria-hidden="true">+</span>}
        onClick={onClick}
      />,
    );

    const buttons = screen.getAllByRole('button', { name: 'Add' });
    expect(buttons).toHaveLength(2);

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);

    expect(onClick).toHaveBeenCalledTimes(2);
  });
});