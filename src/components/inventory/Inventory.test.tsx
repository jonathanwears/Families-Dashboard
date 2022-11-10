import { render, screen } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import Inventory from './Inventory';

describe('test Inventory', () => {
  const testData = [
    {
      "name": 'Passport',
      "belongs to": 'Anna',
      "Current Location": 'Dad\'s House',
      "Notes": "Child Passport"
    },
    {
      "name": 'Umbrella',
      "belongs to": 'David',
      "Current Location": 'Mum\'s House',
    }
  ]

  test('expect data to be there', () => {
    render(<Inventory items={testData} />)
    const item1 = screen.getAllByTestId('name');
    expect(item1[0].innerText).toBe('Passport');
  });
});
