import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../../hooks/useTheme';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('should load theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('dark');
  });

  it('should toggle theme', () => {
    const { result } = renderHook(() => useTheme());
    const initialTheme = result.current.theme;

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).not.toBe(initialTheme);
  });

  it('should update document classes when theme changes', () => {
    const { result } = renderHook(() => useTheme());
    
    act(() => {
      result.current.toggleTheme();
    });

    const isDark = result.current.theme === 'dark';
    expect(document.documentElement.classList.contains('dark')).toBe(isDark);
  });
});