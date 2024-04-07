import { render, screen } from '@testing-library/react';
import UploadviaURL from '../UploadviaURL';

describe('Unit testing for rendering components', () => {
  test('render of upload button', () => {
    render(<UploadviaURL />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
  
  test('render of input field', () => {
    render(<UploadviaURL />);
    const inputboxElement = screen.getByRole('textbox');
    expect(inputboxElement).toBeInTheDocument();
  })

//   test('Cancel submit on empty input field', () => {
//     render(<UploadviaURL />);
//     const inputboxElement = screen.getByRole('textbox');
//     const buttonElement = screen.getByRole('button');
//     expect(inputboxElement.)
//   })
})