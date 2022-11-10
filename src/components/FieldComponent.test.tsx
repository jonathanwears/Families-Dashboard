import { screen, render } from '@testing-library/react';
import { test, expect } from 'vitest';
import FieldComponent from './FieldComponent';
const data = {
  "name": 'Passport',
  "belongs-to": 'Anna',
  "Current-Location": 'Dad\'s House',
  "Notes": "Child Passport"
}

test('expect items to be there', () => {
  render(<FieldComponent item={data} />)
  const formLabel = screen.getByRole(/Name/i);
  const formLabel1 = screen.getByRole(/belongs-to/i);
  expect(formLabel.innerText).toBe('Passport');
  expect(formLabel1.innerText).toBe('Anna');
});
