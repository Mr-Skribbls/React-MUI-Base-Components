import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import ActiveAddress from './ActiveAddress';

describe('ActiveAddress', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('renders the address and map button', () => {
    render(<ActiveAddress address="123 Main St, Austin, TX" />);

    expect(screen.getByText('123 Main St, Austin, TX')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Map' }),
    ).toBeInTheDocument();
  });

  it('opens the Google Maps web fallback after 500ms', async () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    render(<ActiveAddress address="123 Main St, Austin, TX" />);

    fireEvent.click(screen.getByRole('button', { name: 'Map' }));

    expect(openSpy).not.toHaveBeenCalled();

    vi.advanceTimersByTime(500);

    expect(openSpy).toHaveBeenCalledWith(
      'https://www.google.com/maps/search/?api=1&query=123%20Main%20St%2C%20Austin%2C%20TX',
      '_blank',
    );
  });
});