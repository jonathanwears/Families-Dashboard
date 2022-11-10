import { render, screen } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import Navigation from './Navigation';

describe('test the Navigation', () => {
  render(<Navigation />)
  test('expect to exist', () => {
    const label = screen.getByRole(/navigation-container/i);
    expect(label).toBeTruthy();
  });

  test('',)


});

