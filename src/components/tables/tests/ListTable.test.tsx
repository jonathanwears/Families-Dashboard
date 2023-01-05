import { describe, test, afterEach, expect } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import ListTable from './ListTable';
import InventoryFields from '../inventory/InventoryFields';
import { mockInventoryData } from '../../mockInventoryData';
describe('ListTable test', () => {

  afterEach(() => {
    cleanup()
  })

  test('expect fields to have been rendered', () => {
    render(<ListTable data={mockInventoryData} field={InventoryFields} />)
    const nameLabel = screen.getByText(/passport/i)
    expect(nameLabel).toBeInTheDocument()
  })
})
