import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import QuickPanel from './QuickPanel';
import UserEvent from '@testing-library/user-event';

describe('Quick Panel', () => {

  test('expect drop downs inputs to be rendered', () => {

    render(<QuickPanel />)

    const firstInputElement = screen.getByRole('button');
    expect(firstInputElement).toBeInTheDocument();

  });

  test('dropdown changes state', async () => {
    render(<QuickPanel />)
    const user = UserEvent.setup();
    const firstInputElement = screen.getByLabelText('type', { selector: 'input' });
    // const a = screen.getByRole('button', { })
    await user.click(a);
    const dropButtonElement = screen.getByRole('button')
  })

  // test drop down is there 
  // expect the state to correct after selected






})