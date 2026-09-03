import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ComboBox from './ComboBox';

describe('ComboBox', () => {
  it('renders label and placeholder', () => {
    render(
      <ComboBox
        items={['One', 'Two']}
        value=""
        onChange={vi.fn()}
        label="Pick"
        placeholder="Pick one"
      />,
    );

    expect(screen.getByLabelText('Pick')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Pick one')).toBeInTheDocument();
  });

  it('calls onChange with the selected string value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <ComboBox
        items={['Alpha', 'Beta']}
        value=""
        onChange={onChange}
        label="Choice"
      />,
    );

    const input = screen.getByRole('combobox');
    await user.click(input);
    await user.click(await screen.findByRole('option', { name: 'Beta' }));

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith('Beta');
    });
  });

  it('calls onChange with the value property for object options', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const options = [
      { id: 1, name: 'First' },
      { id: 2, name: 'Second' },
    ];

    render(
      <ComboBox
        items={options}
        getOptionLabel={(o) => o.name}
        valueProperty="id"
        value={undefined}
        onChange={onChange}
        label="Item"
      />,
    );

    const input = screen.getByRole('combobox');
    await user.click(input);
    await user.click(await screen.findByRole('option', { name: 'Second' }));

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(2);
    });
  });

  it('disables the input when disabled is true', () => {
    render(
      <ComboBox
        items={['One', 'Two']}
        value=""
        onChange={vi.fn()}
        disabled
        label="Pick"
      />,
    );

    expect(screen.getByRole('combobox')).toBeDisabled();
  });
});
