import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../Main';
import { useState } from 'react';

describe('Unit testing for rendering components', () => {
  const MockingComponent = () => {
    const [activity, setActivity] = useState('0');
    return <BrowserRouter><Main alert={{visibility: false}} activity={activity} setActivity={setActivity} /></BrowserRouter>
  }
  
  it('renders upload video and URL links', () => {
    render(<MockingComponent />);
    const videoFileLinkElement = screen.getByRole('link', { name: 'Upload a video file' });
    const videoURLLinkElement = screen.getByRole('link', { name: 'Upload via URL' });
    expect(videoFileLinkElement).toHaveAttribute('href', '/viaVideo');
    expect(videoURLLinkElement).toHaveAttribute('href', '/viaURL');
  });

  it('select category of activity', () => {
    render(<MockingComponent />);
    const radioButtonElement1 = screen.getByRole('radio', { name: "Gym Activity" });
    const radioButtonElement2 = screen.getByRole('radio', { name: "Musical Activity" });
    const radioButtonElement3 = screen.getByRole('radio', { name: "Games" });
    expect(radioButtonElement1).toBeChecked();
    expect(radioButtonElement2).not.toBeChecked();
    expect(radioButtonElement3).not.toBeChecked();
    
    fireEvent.click(radioButtonElement2);
    expect(radioButtonElement1).not.toBeChecked();
    expect(radioButtonElement2).toBeChecked();
    expect(radioButtonElement3).not.toBeChecked();

    fireEvent.click(radioButtonElement3);
    expect(radioButtonElement1).not.toBeChecked();
    expect(radioButtonElement2).not.toBeChecked();
    expect(radioButtonElement3).toBeChecked();

  })
})
