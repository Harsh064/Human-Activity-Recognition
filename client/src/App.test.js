import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Integration testing of render components', () => {  
  it('renders upload video file component', () => {
    render(<App />);
    const mainLinkElement = screen.getByRole('link', { name: 'Get Started' });
    fireEvent.click(mainLinkElement);
    const videoFileLinkElement = screen.getByRole('link', { name: 'Upload a video file' });
    fireEvent.click(videoFileLinkElement);
    const spanElement = screen.getByText(/Select Video/i);
    expect(spanElement).toBeInTheDocument();
  });

  it('renders upload video URL component', () => {
    render(<App />);
    const videoURLlinkElement = screen.getByRole('link', { name: 'Upload via URL' });
    fireEvent.click(videoURLlinkElement);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Submit URL');
  });
  
  it('validate youtube URL', () => {
    render(<App />);
    const inputboxElement = screen.getByPlaceholderText('http://youtube.com/watch?v=<video-id>');
    fireEvent.change(inputboxElement, { target: { value: 'https://www.youtube.com/watch?v=IiawByKdv0' } });
    const buttonElement = screen.getByRole('button', { name: 'Submit URL' }); 
    fireEvent.click(buttonElement);
    const alertPopupElement = screen.getByTestId('alertpopup');
    expect(inputboxElement).toHaveValue("https://www.youtube.com/watch?v=IiawByKdv0");
    expect(alertPopupElement).toBeInTheDocument();
    expect(alertPopupElement).toHaveTextContent('Invalid youtube URL');
  });
  
  it('empty input in URL', () => {
    render(<App />);
    const inputboxElement = screen.getByPlaceholderText('http://youtube.com/watch?v=<video-id>');
    fireEvent.change(inputboxElement, { target: { value: '' } });
    const buttonElement = screen.getByRole('button', { name: 'Submit URL' });
    fireEvent.click(buttonElement);
    const alertPopupElement = screen.getByTestId('alertpopup');
    expect(inputboxElement).toHaveValue('');
    expect(alertPopupElement).toBeInTheDocument();
    expect(alertPopupElement).toHaveTextContent('Enter youtube video URL');
  });

  it('route back to Home page', () => {
    render(<App />);
    const backToHomeLinkElement = screen.getByRole('link', { name: String.fromCodePoint(8592) + ' Home' });
    expect(backToHomeLinkElement).toHaveAttribute('href', '/');
    fireEvent.click(backToHomeLinkElement);
    const mainLinkElement = screen.getByRole('link', { name: 'Get Started' });
    expect(mainLinkElement).toBeInTheDocument();
  })
})

