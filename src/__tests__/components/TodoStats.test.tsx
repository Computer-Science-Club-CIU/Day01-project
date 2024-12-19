import { render } from '@testing-library/react';
import { TodoStats } from '../../components/TodoStats';
import { describe, it, expect } from 'vitest';

describe('TodoStats', () => {
  it('should display correct stats for empty list', () => {
    const { getByText } = render(<TodoStats todos={[]} />);
    expect(getByText('0 tasks')).toBeDefined();
    expect(getByText('0', { exact: false })).toBeDefined();
  });

  it('should display correct stats for single task', () => {
    const todos = [{
      id: '1',
      text: 'Test',
      completed: false,
      createdAt: Date.now()
    }];
    const { getByText } = render(<TodoStats todos={todos} />);
    expect(getByText('1 task')).toBeDefined();
  });

  it('should display correct completed count', () => {
    const todos = [
      { id: '1', text: 'Test 1', completed: true, createdAt: Date.now() },
      { id: '2', text: 'Test 2', completed: false, createdAt: Date.now() }
    ];
    const { getByText } = render(<TodoStats todos={todos} />);
    expect(getByText('1', { exact: false })).toBeDefined();
  });
});