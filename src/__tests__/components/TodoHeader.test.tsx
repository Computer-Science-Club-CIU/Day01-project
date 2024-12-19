import { render } from '@testing-library/react';
import { TodoHeader } from '../../components/TodoHeader';
import { describe, it, expect } from 'vitest';

describe('TodoHeader', () => {
  it('should render title and subtitle', () => {
    const { getByText } = render(<TodoHeader />);
    expect(getByText('Todo List')).toBeDefined();
    expect(getByText('Stay organized and productive')).toBeDefined();
  });
});