import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ButtonSelect from './ButtonSelect';

describe('ButtonSelect', () => {
  it('renders option displays and reports the selected value', () => {
    const onChange = vi.fn();
    const options = [
      { id: 1, name: 'First' },
      { id: 2, name: 'Second' },
    ];

    render(
      <ButtonSelect
        options={options}
        valueProp="id"
        displayProp="name"
        selectedOption={options[0]}
        onChange={onChange}
      />,
    );

    expect(screen.getByRole('button', { name: 'First' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Second' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Second' }));

    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('does not render options without a value', () => {
    render(
      <ButtonSelect
        options={[{ id: undefined, name: 'Missing' }, { id: 1, name: 'Available' }]}
        valueProp="id"
        displayProp="name"
        onChange={vi.fn()}
      />,
    );

    expect(screen.queryByRole('button', { name: 'Missing' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Available' })).toBeInTheDocument();
  });
});