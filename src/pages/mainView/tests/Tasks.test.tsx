import { test, describe, afterEach, expect, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import Tasks from '../Tasks';


describe.skip('test tasks component', () => {
  // afterEach(() => cleanup());

  test('renders elements', () => {
    vi.mock('../../../utils/faker.ts', (TASKS: string[]) => {
      return ['David']
    })
    render(<Tasks />)
    const nameElement = screen.getByText('David');
    expect(nameElement).toBeInTheDocument();

    const dateElement = screen.getByText('12.06.2022');
    expect(dateElement).toBeInTheDocument();
  })
})
// https://www.carlrippon.com/how-to-mock-a-function-in-jest-with-typescript/