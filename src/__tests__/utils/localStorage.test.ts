import { describe, it, expect, beforeEach, vi } from 'vitest';
import { loadFromStorage, saveToStorage } from '../../utils/localStorage';

describe('localStorage utils', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should load data from localStorage', () => {
    const testData = [{ id: '1', text: 'Test' }];
    localStorage.setItem('todos', JSON.stringify(testData));
    
    const result = loadFromStorage();
    expect(result).toEqual(testData);
  });

  it('should return empty array when localStorage is empty', () => {
    const result = loadFromStorage();
    expect(result).toEqual([]);
  });

  it('should save data to localStorage', () => {
    const testData = [{ id: '1', text: 'Test' }];
    saveToStorage(testData);
    
    const stored = localStorage.getItem('todos');
    expect(JSON.parse(stored!)).toEqual(testData);
  });

  it('should handle localStorage errors gracefully', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Storage full');
    });

    saveToStorage([{ id: '1', text: 'Test' }]);
    expect(consoleSpy).toHaveBeenCalled();
  });
});