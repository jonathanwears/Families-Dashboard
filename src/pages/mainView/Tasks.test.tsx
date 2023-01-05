import { test, describe, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import Tasks from './Tasks';

describe('test tasks component', () => {
  afterEach(() => cleanup());

  test('renders elements', () => {
    render(<Tasks />)

    const nameElement = screen.getByText('name');
    expect(nameElement).toBeInTheDocument();

    const dateElement = screen.getByText('12/06/2022');
    expect(dateElement).toBeInTheDocument();
  })
})
