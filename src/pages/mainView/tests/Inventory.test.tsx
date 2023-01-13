import { cleanup, render, screen, waitFor, logRoles, act } from '@testing-library/react';
import { test, describe, expect, afterEach } from 'vitest';

import user from '@testing-library/user-event';
import Inventory from '../Inventory';


describe('test Inventory', () => {
  afterEach(() => cleanup());

  test('expect data to be there', () => {
    render(<Inventory />)
    const item1 = screen.getByText('Passport');
    expect(item1).toBeInTheDocument();
  });

  //act

  test('expect new item to be in list', async () => {
    user.setup()
    const c = render(<Inventory />)

    const nameInput = screen.getByLabelText(/name/i)
    await user.type(nameInput, 'Banana');
    const belongsInput = screen.getByLabelText(/Belongs to/i)
    await user.type(belongsInput, 'David');
    const currentInput = screen.getByLabelText(/Current Location/i)
    await user.type(currentInput, 'North');
    const notesInput = screen.getByLabelText(/Notes/i)
    await user.type(notesInput, 'none');
    const b = screen.findByText('Umbrella')
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    user.click(submitButton)
    const d = screen.getByText(/passport/i)
    expect(d).toBeInTheDocument()
  })
});
