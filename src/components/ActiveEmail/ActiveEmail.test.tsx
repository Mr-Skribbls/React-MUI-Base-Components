import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import ActiveEmail from './ActiveEmail';

describe('ActiveEmail', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the email and email button', () => {
    render(<ActiveEmail email="person@example.com" />);

    expect(screen.getByText('person@example.com')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Email' }),
    ).toBeInTheDocument();
  });

  it('opens a mailto link when the email button is clicked', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    render(<ActiveEmail email="person@example.com" />);

    fireEvent.click(screen.getByRole('button', { name: 'Email' }));

    expect(openSpy).toHaveBeenCalledWith('mailto:person@example.com');
  });
});