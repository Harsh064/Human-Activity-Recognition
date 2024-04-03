import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Integration testing of render components', () => {
  test('renders upload video file component', () => {
    render(<App />);
    const videoFileLinkElement = screen.getByRole('link', { name: 'Upload a video file' });
    fireEvent.click(videoFileLinkElement);
    const spanElement = screen.getByText(/Select Video/i);
    expect(spanElement).toBeInTheDocument();
  });

  test('renders upload video URL component', () => {
    render(<App />);
    const videoURLlinkElement = screen.getByRole('link', { name: 'Upload via URL' });
    fireEvent.click(videoURLlinkElement);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Submit URL');
  });
})
