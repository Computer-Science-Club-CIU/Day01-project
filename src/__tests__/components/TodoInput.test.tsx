import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { TodoInput } from '../../components/TodoInput';

describe('TodoInput', () => {
  it('should call onAdd when submitting valid input', () => {
    const onAdd = vi.fn();
    const { getByPlaceholderText } = render(<TodoInput onAdd={onAdd} />);
    
    const input = getByPlaceholderText('Add a new task...');
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.submit(input);

    expect(onAdd).toHaveBeenCalledWith('New todo');
  });

  it('should not call onAdd when input is empty', () => {
    const onAdd = vi.fn();
    const { getByPlaceholderText } = render(<TodoInput onAdd={onAdd} />);
    
    const input = getByPlaceholderText('Add a new task...');
    fireEvent.submit(input);

    expect(onAdd).not.toHaveBeenCalled();
  });
});