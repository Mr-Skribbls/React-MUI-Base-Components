import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Overlay from './Overlay';

describe('Overlay', () => {
  it('renders its children and supplied class name', () => {
    const { container } = render(
      <Overlay className="custom-overlay">Overlay content</Overlay>,
    );

    expect(screen.getByText('Overlay content')).toBeInTheDocument();
    expect(container.firstElementChild).toHaveClass('custom-overlay');
  });

  it('renders the module class when no className is supplied', () => {
    const { container } = render(<Overlay>Overlay content</Overlay>);

    const root = container.firstElementChild!;
    expect(root.className).not.toContain('undefined');
  });
});