import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

describe('Unit testing for rendering components', () => {
  const [alert, setAlert] = useState({ visibility: false });
  const MockingComponent = () => {
    return <BrowserRouter><Home alert={alert} /></BrowserRouter>
  }
  
  test('renders upload video and URL links', () => {
    render(<MockingComponent />);
    const videoFileLinkElement = screen.getByRole('link', { name: 'Upload a video file' });
    const videoURLLinkElement = screen.getByRole('link', { name: 'Upload via URL' });
    expect(videoFileLinkElement).toHaveAttribute('href', '/viaVideo');
    expect(videoURLLinkElement).toHaveAttribute('href', '/viaURL');
  });
})