import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Withdraw from './Withdraw';

describe('<Withdraw />', () => {
  test('it should mount', () => {
    render(<Withdraw />);
    
    const withdraw = screen.getByTestId('Withdraw');

    expect(withdraw).toBeInTheDocument();
  });
});