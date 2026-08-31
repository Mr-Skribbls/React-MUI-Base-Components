import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import FieldContainer from './FieldContainer';

describe('FieldContainer', () => {
  it('renders its children', () => {
    render(<FieldContainer><span>Field content</span></FieldContainer>);

    expect(screen.getByText('Field content')).toBeInTheDocument();
  });

  it('forwards drag events', () => {
    const onDragOver = vi.fn();
    const onDragEnter = vi.fn();
    const onDragLeave = vi.fn();
    const onDrop = vi.fn();

    const { container } = render(
      <FieldContainer
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        Content
      </FieldContainer>,
    );

    const fieldContainer = container.firstElementChild;
    expect(fieldContainer).not.toBeNull();
    fireEvent.dragOver(fieldContainer!);
    fireEvent.dragEnter(fieldContainer!);
    fireEvent.dragLeave(fieldContainer!);
    fireEvent.drop(fieldContainer!);

    expect(onDragOver).toHaveBeenCalledOnce();
    expect(onDragEnter).toHaveBeenCalledOnce();
    expect(onDragLeave).toHaveBeenCalledOnce();
    expect(onDrop).toHaveBeenCalledOnce();
  });
});