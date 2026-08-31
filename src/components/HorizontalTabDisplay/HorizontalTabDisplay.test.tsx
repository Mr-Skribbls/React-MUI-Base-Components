import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HorizontalTabDisplay } from './HorizontalTabDisplay';
import type { HorizontalTab } from './HorizontalTabDisplay';

const sampleTabs: HorizontalTab[] = [
  { displayName: 'Tab One', content: <span>Content One</span> },
  { displayName: 'Tab Two', content: <span>Content Two</span> },
  { displayName: 'Tab Three', content: <span>Content Three</span> },
];

describe('HorizontalTabDisplay', () => {
  it('renders all tab labels', () => {
    render(<HorizontalTabDisplay tabs={sampleTabs} />);

    expect(screen.getByRole('tab', { name: 'Tab One' })).toBeDefined();
    expect(screen.getByRole('tab', { name: 'Tab Two' })).toBeDefined();
    expect(screen.getByRole('tab', { name: 'Tab Three' })).toBeDefined();
  });

  it('shows the first tab content by default', () => {
    render(<HorizontalTabDisplay tabs={sampleTabs} />);

    expect(screen.getByText('Content One')).toBeVisible();
    expect(screen.getByText('Content Two')).not.toBeVisible();
    expect(screen.getByText('Content Three')).not.toBeVisible();
  });

  it('switches content when a tab is clicked', () => {
    render(<HorizontalTabDisplay tabs={sampleTabs} />);

    fireEvent.click(screen.getByRole('tab', { name: 'Tab Two' }));

    expect(screen.getByText('Content Two')).toBeVisible();
    expect(screen.getByText('Content One')).not.toBeVisible();
  });

  it('applies the ariaLabel to the tab list', () => {
    render(<HorizontalTabDisplay tabs={sampleTabs} ariaLabel='My tabs' />);

    expect(screen.getByRole('tablist')).toHaveAttribute('aria-label', 'My tabs');
  });

  it('renders a disabled tab that cannot be activated', () => {
    const tabs: HorizontalTab[] = [
      { displayName: 'Enabled', content: <span>Enabled Content</span> },
      { displayName: 'Disabled', content: <span>Disabled Content</span>, disabled: true },
    ];

    render(<HorizontalTabDisplay tabs={tabs} />);

    const disabledTab = screen.getByRole('tab', { name: 'Disabled' });
    expect(disabledTab).toBeDisabled();

    fireEvent.click(disabledTab);
    expect(screen.getByText('Disabled Content')).not.toBeVisible();
  });
});