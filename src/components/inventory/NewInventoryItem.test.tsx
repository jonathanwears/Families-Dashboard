import { screen, render, fireEvent, getByRole } from '@testing-library/react';
import user from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import NewInventoryItem from './NewInventoryItem';

describe('test input new inventory item', () => {

  test('expect form to be in the document', () => {
    render(<NewInventoryItem />)
    const labelName = screen.getByLabelText(/name/i);
    expect(labelName).toBeInTheDocument();
  })

  // test('expect button to send data', async () => {
  //   const mockSubmitData = {
  //     "Name": "Banana",
  //     "Belongs to": "David",
  //     "Current Location": "North",
  //     "Notes": "none",
  //   }
  //   user.setup();
  //   const onSubmitSpy = vi.fn();
  //   render(<NewInventoryItem onSubmit={onSubmitSpy} />)

  //   const nameInput = screen.getByLabelText(/name/i)
  //   await user.type(nameInput, 'Banana');
  //   const belongsInput = screen.getByLabelText(/Belongs to/i)
  //   await user.type(belongsInput, 'David');
  //   const currentInput = screen.getByLabelText(/Current Location/i)
  //   await user.type(currentInput, 'North');
  //   const notesInput = screen.getByLabelText(/Notes/i)
  //   await user.type(notesInput, 'none');

  //   const submitButton = screen.getByRole('button', { name: 'Submit' });


  //   expect(onSubmitSpy).toHaveBeenCalledWith({
  //     "Name": "Banana",
  //     "Belongs to": "David",
  //     "Current Location": "North",
  //     "Notes": "none",
  //   });
  // });
});
