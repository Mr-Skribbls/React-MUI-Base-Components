import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import VerticalTabDisplay from './VerticalTabDisplay';

const mockUseWindowDimensions = vi.fn();

vi.mock('../../hooks/useWindowDimensions', () => ({
  useWindowDimensions: (...args: unknown[]) => mockUseWindowDimensions(...args),
}));

describe('VerticalTabDisplay', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows the selected tab content and switches tabs', () => {
    mockUseWindowDimensions.mockReturnValue({ width: 1000, height: 800 });

    render(
      <VerticalTabDisplay
        ariaLabel="Animal views"
        tabs={[
          { displayName: 'Details', content: <div>Details content</div> },
          { displayName: 'History', content: <div>History content</div> },
        ]}
      />,
    );

    expect(screen.getByRole('tab', { name: 'Details' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Details content').parentElement).not.toHaveAttribute('hidden');

    fireEvent.click(screen.getByRole('tab', { name: 'History' }));

    expect(screen.getByRole('tab', { name: 'History' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('History content').parentElement).not.toHaveAttribute('hidden');
  });

  it('does not select a disabled tab', () => {
    mockUseWindowDimensions.mockReturnValue({ width: 500, height: 800 });

    render(
      <VerticalTabDisplay
        tabs={[
          { displayName: 'First', content: 'First' },
          { displayName: 'Disabled', content: 'Disabled', disabled: true },
        ]}
      />,
    );

    fireEvent.click(screen.getByRole('tab', { name: 'Disabled' }));

    expect(screen.getByRole('tab', { name: 'First' })).toHaveAttribute('aria-selected', 'true');
  });
});