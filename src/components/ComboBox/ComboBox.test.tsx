import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ComboBox from './ComboBox';

describe('ComboBox', () => {
  it('renders label, placeholder and error helper text', () => {
    render(
      <ComboBox
        options={['One', 'Two']}
        value={null}
        onChange={vi.fn()}
        label="Pick"
        placeholder="Pick one"
        errors="Something went wrong"
      />,
    );

    expect(screen.getByLabelText('Pick')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Pick one')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('calls onChange with the selected option', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const options = [
      { id: 1, name: 'First' },
      { id: 2, name: 'Second' },
    ];

    render(
      <ComboBox
        options={options}
        displayProp="name"
        value={null}
        onChange={onChange}
      />,
    );

    const input = screen.getByRole('combobox');
    await user.click(input);
    await user.click(await screen.findByRole('option', { name: 'Second' }));

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({ id: 2, name: 'Second' }),
      );
    });
  });
});
