import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AllData from './AllData';

describe('<AllData />', () => {
  test('it should mount', () => {
    render(<AllData />);
    
    const allData = screen.getByTestId('AllData');

    expect(allData).toBeInTheDocument();
  });
});