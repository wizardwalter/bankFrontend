import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Deposit from './Deposit';

describe('<Deposit />', () => {
  test('it should mount', () => {
    render(<Deposit />);
    
    const deposit = screen.getByTestId('Deposit');

    expect(deposit).toBeInTheDocument();
  });
});