import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ActiveWebsite from './ActiveWebsite';

describe('ActiveWebsite', () => {
  const website = 'example.com';

  it('renders the website', () => {
    render(<ActiveWebsite website={website} />);

    expect(screen.getByText(website)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
  });

  it('opens the website in a new tab when Open is clicked', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    render(<ActiveWebsite website={website} />);

    fireEvent.click(screen.getByRole('button', { name: 'Open' }));

    expect(openSpy).toHaveBeenCalledWith('https://example.com', '_blank', 'noopener,noreferrer');
  });

  it('keeps an existing protocol when opening', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    render(<ActiveWebsite website="http://example.com" />);

    fireEvent.click(screen.getByRole('button', { name: 'Open' }));

    expect(openSpy).toHaveBeenCalledWith('http://example.com', '_blank', 'noopener,noreferrer');
  });
});