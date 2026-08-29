import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Color } from '@rc-component/color-picker';

import ColorPickerButton from './ColorPickerButton';

vi.mock('../../hooks/useColor', () => ({
  default: () => ({ randomHex: () => '#112233' }),
}));

describe('ColorPickerButton', () => {
  it('renders the swatch with the provided color', () => {
    const color = new Color('#abcdef');
    const { container } = render(<ColorPickerButton color={color} />);

    const swatch = container.firstElementChild!.firstElementChild as HTMLElement;
    expect(swatch.style.backgroundColor).toBe(color.toRgbString().replace(/,/g, ', '));
  });

  it('opens the picker dialog and closes it', async () => {
    const { container } = render(<ColorPickerButton />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    fireEvent.click(container.firstElementChild!);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('does not open a dialog when disabled by configuration', () => {
    const { container } = render(<ColorPickerButton configuration={{ allowDialog: false }} />);

    fireEvent.click(container.firstElementChild!);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});