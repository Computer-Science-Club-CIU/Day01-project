import { render } from '@testing-library/react';
import { TodoContainer } from '../../components/TodoContainer';
import { describe, it, expect } from 'vitest';

describe('TodoContainer', () => {
  it('should render children content', () => {
    const { getByText } = render(
      <TodoContainer>
        <div>Test Content</div>
      </TodoContainer>
    );
    expect(getByText('Test Content')).toBeDefined();
  });
});