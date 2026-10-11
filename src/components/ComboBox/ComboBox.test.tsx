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

  it('calls onInputChange with the typed text as the user types', async () => {
    const user = userEvent.setup();
    const onInputChange = vi.fn();

    render(
      <ComboBox
        items={['Alpha', 'Beta']}
        value=""
        onChange={vi.fn()}
        onInputChange={onInputChange}
        label="Choice"
      />,
    );

    await user.type(screen.getByRole('combobox'), 'Alph');

    await waitFor(() => {
      expect(onInputChange).toHaveBeenCalledWith('Alph');
    });
  });

  it('calls onInputChange with the typed text for object options', async () => {
    const user = userEvent.setup();
    const onInputChange = vi.fn();
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
        onChange={vi.fn()}
        onInputChange={onInputChange}
        label="Item"
      />,
    );

    await user.type(screen.getByRole('combobox'), 'Seco');

    await waitFor(() => {
      expect(onInputChange).toHaveBeenCalledWith('Seco');
    });
  });

  it('calls onInputChange with an empty string when the input is cleared', async () => {
    const user = userEvent.setup();
    const onInputChange = vi.fn();

    render(
      <ComboBox
        items={['Alpha', 'Beta']}
        value=""
        onChange={vi.fn()}
        onInputChange={onInputChange}
        label="Choice"
      />,
    );

    const input = screen.getByRole('combobox');
    await user.type(input, 'Alpha');
    await user.clear(input);

    await waitFor(() => {
      expect(onInputChange).toHaveBeenCalledWith('');
    });
  });

  it('does not require onChange when onInputChange is provided', () => {
    render(
      <ComboBox
        items={['Alpha', 'Beta']}
        value=""
        onInputChange={vi.fn()}
        label="Choice"
      />,
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
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
