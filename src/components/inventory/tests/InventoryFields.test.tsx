import { screen, render } from '@testing-library/react';
import { test, expect } from 'vitest';
import FieldComponent from '../InventoryFields';
const data = {
  "name": 'Passport',
  "belongs to": 'Anna',
  "current location": 'Dad\'s House',
  "notes": "Child Passport"
}

test('expect items to be there', () => {
  render(<FieldComponent item={data} />)
  const belongsToField = screen.getByText(/anna/i);
  expect(belongsToField).toBeInTheDocument();
});
