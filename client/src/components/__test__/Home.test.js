import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

describe('Unit testing for rendering components', () => {
  const MockingComponent = () => {
    return <BrowserRouter><Home /></BrowserRouter>
  }
  
  it('render get started button to route main page', () => {
    render(<MockingComponent />);
    const mainLinkElement = screen.getByRole('link', { name: 'Get Started' });
    expect(mainLinkElement).toHaveAttribute('href', '/viaVideo');
  });
})