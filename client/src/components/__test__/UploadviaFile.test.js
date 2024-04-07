import { render, screen } from '@testing-library/react';
import UploadviaFile from '../UploadviaFile';

describe('Unit testing for rendering components', () => {
  test('renders learn react link', () => {
    render(<UploadviaFile />);
    const buttonElement = screen.getByText('Select Video');
    expect(buttonElement).toBeInTheDocument();
  });
})