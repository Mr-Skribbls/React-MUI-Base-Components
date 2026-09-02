import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import ImageDisplay from './ImageDisplay';

describe('ImageDisplay', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders an image from a URL with the given alt and object position', () => {
    render(
      <ImageDisplay alt="A cat" center={[50, 25]} imageUrl="https://example.com/cat.jpg" />,
    );

    const img = screen.getByAltText('A cat') as HTMLImageElement;
    expect(img.src).toBe('https://example.com/cat.jpg');
    expect(img.style.objectPosition).toBe('50% 25%');
  });

  it('renders an object URL when given a file and revokes it on unmount', () => {
    const createObjectURL = vi.fn(() => 'blob:mock-url');
    const revokeObjectURL = vi.fn();
    vi.stubGlobal('URL', { ...URL, createObjectURL, revokeObjectURL });

    const { unmount } = render(
      <ImageDisplay
        alt="A file"
        center={[0, 0]}
        imageFile={new File(['x'], 'image.png', { type: 'image/png' })}
      />,
    );

    expect(createObjectURL).toHaveBeenCalledOnce();
    expect((screen.getByAltText('A file') as HTMLImageElement).src).toBe('blob:mock-url');

    unmount();

    expect(revokeObjectURL).toHaveBeenCalledWith('blob:mock-url');
  });
});