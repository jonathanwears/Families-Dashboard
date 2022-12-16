import { screen, render } from '@testing-library/react';
import { test, expect } from 'vitest';
import FieldComponent from './FieldComponent';
const data = {
  "name": 'Passport',
  "belongs to": 'Anna',
  "Current Location": 'Dad\'s House',
  "Notes": "Child Passport"
}

test('expect items to be there', () => {
  render(<FieldComponent item={data} />)
  const formLabel = screen.getByRole(/Name/i);
  const belongsToField = screen.getByText(/anna/i);
  expect(formLabel.innerText).toBe('Passport');
  expect(belongsToField).toBeInTheDocument();
});
