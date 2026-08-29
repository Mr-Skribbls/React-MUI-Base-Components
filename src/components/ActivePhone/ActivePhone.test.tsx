import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import useDevice from '../../hooks/useDevice';
import ActivePhone from './ActivePhone';

vi.mock('../../hooks/useDevice', () => ({
  default: vi.fn(),
}));

describe('ActivePhone', () => {
  const phone = '+1 555 123 4567';

  beforeEach(() => {
    vi.mocked(useDevice).mockReturnValue({
      isMobile: true,
      isApple: false,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the phone number and mobile actions', () => {
    render(<ActivePhone phone={phone} />);

    expect(screen.getByText(phone)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Call' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Message' })).toBeInTheDocument();
  });

  it('hides mobile actions on desktop', () => {
    vi.mocked(useDevice).mockReturnValue({
      isMobile: false,
      isApple: false,
    });

    render(<ActivePhone phone={phone} />);

    expect(screen.getByText(phone)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Call' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Message' })).not.toBeInTheDocument();
  });

  it('opens a tel link when Call is clicked', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    render(<ActivePhone phone={phone} />);

    fireEvent.click(screen.getByRole('button', { name: 'Call' }));

    expect(openSpy).toHaveBeenCalledWith(`tel:${phone}`);
  });

  it('opens an sms link when Message is clicked', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    render(<ActivePhone phone={phone} />);

    fireEvent.click(screen.getByRole('button', { name: 'Message' }));

    expect(openSpy).toHaveBeenCalledWith(`sms:${phone}`);
  });
});