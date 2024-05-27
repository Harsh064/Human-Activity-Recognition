import { fireEvent, render, screen } from '@testing-library/react';
import UploadviaURL from '../UploadviaURL';

describe('Unit testing for rendering components', () => {
  it('render of upload button', () => {
    render(<UploadviaURL />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
  
  it('render of input field', () => {
    render(<UploadviaURL />);
    const inputboxElement = screen.getByRole('textbox');
    expect(inputboxElement).toBeInTheDocument();
  });

  it('give input to textbox', () => {
    render(<UploadviaURL />);
    const inputboxElement = screen.getByRole('textbox');
    fireEvent.change(inputboxElement, { target: { value: 'http://youtube.com/watch?v=12345678901'} });
    expect(inputboxElement).toHaveValue('http://youtube.com/watch?v=12345678901');
  });

  it('test regex pattern for URL validation', () => {
    const regex = /^((?:https?:)?\/\/)?(((?:www|m)\.)?(youtube\.com(?:(\/shorts\/|\/watch\/|\/v\/)[\w-]{11}|\/watch\?v=[\w-]{11}((&list=LL)?(&index=[\d]+)?|(&index=[\d]+)?(&list=LL)?)|(\/embed\/[\w-]{11}(\?si=[\w-]{16})?)))|youtu\.be\/[\w-]{11}(\?si=[\w-]{16})?)$/i;
    const youtubeURLs = [
      'https://www.youtube.com/watch?v=O35gEZej_AA',
      'https://www.youtube.com/watch?v=O35gEZej_AA&list=LL&index=1',
      'https://www.youtube.com/watch?v=O35gEZej_AA&list=LL',
      'https://m.youtube.com/watch?v=O35gEZej_AA',
      'https://m.youtube.com/watch?v=O35gEZej_AA&list=LL&index=1',
      'https://m.youtube.com/watch?v=O35gEZej_AA&list=LL',
      'https://youtube.com/watch?v=O35gEZej_AA',
      'https://m.youtube.com/watch?v=O35gEZej_AA&list=LL&index=1',
      'https://m.youtube.com/watch?v=O35gEZej_AA&list=LL',
      'https://www.youtube.com/watch/O35gEZej_AA',
      'https://www.youtube.com/v/O35gEZej_AA',
      'https://www.youtube.com/embed/O35gEZej_AA?si=4YAafesd9ypeBj46',
      'https://www.youtube.com/embed/O35gEZej_AA',
      'https://www.youtube.com/shorts/IiawByKdv0o',
      'https://youtube.com/shorts/IiawByKdv0o',
      'https://youtu.be/O35gEZej_AA?si=4YAafesd9ypeBj46',
      
      'http://www.youtube.com/watch?v=O35gEZej_AA',
      'http://www.youtube.com/watch?v=O35gEZej_AA&list=LL&index=1',
      'http://www.youtube.com/watch?v=O35gEZej_AA&list=LL',
      'http://m.youtube.com/watch?v=O35gEZej_AA',
      'http://m.youtube.com/watch?v=O35gEZej_AA&list=LL&index=1',
      'http://m.youtube.com/watch?v=O35gEZej_AA&list=LL',
      'http://youtube.com/watch?v=O35gEZej_AA',
      'http://youtube.com/watch?v=O35gEZej_AA&list=LL&index=1',
      'http://youtube.com/watch?v=O35gEZej_AA&list=LL',
      'http://www.youtube.com/watch/O35gEZej_AA',
      'http://www.youtube.com/v/O35gEZej_AA',
      'http://www.youtube.com/embed/O35gEZej_AA?si=4YAafesd9ypeBj46',
      'http://www.youtube.com/embed/O35gEZej_AA',
      'http://youtube.com/shorts/IiawByKdv0o',
      'http://www.youtube.com/shorts/IiawByKdv0o',
      'http://youtu.be/O35gEZej_AA?si=4YAafesd9ypeBj46',

      'www.youtube.com/watch/O35gEZej_AA',
      'www.youtube.com/v/O35gEZej_AA',
      'www.youtube.com/embed/O35gEZej_AA?si=4YAafesd9ypeBj46',
      'www.youtube.com/embed/O35gEZej_AA',      
      'www.youtube.com/watch?v=O35gEZej_AA',
      'www.youtube.com/watch?v=O35gEZej_AA&list=LL&index=1',
      'www.youtube.com/watch?v=O35gEZej_AA&list=LL',
      'www.youtube.com/shorts/IiawByKdv0o',

      'm.youtube.com/watch?v=O35gEZej_AA',
      'm.youtube.com/watch?v=O35gEZej_AA&list=LL&index=1',
      'm.youtube.com/watch?v=O35gEZej_AA&list=LL',
      'm.youtube.com/watch/O35gEZej_AA',
      'm.youtube.com/v/O35gEZej_AA',
      'm.youtube.com/embed/O35gEZej_AA?si=4YAafesd9ypeBj46',
      'm.youtube.com/embed/O35gEZej_AA',
      'm.youtube.com/shorts/IiawByKdv0o',

      'youtube.com/watch?v=O35gEZej_AA',
      'youtube.com/watch?v=O35gEZej_AA&list=LL&index=1',
      'youtube.com/watch?v=O35gEZej_AA&list=LL',
      'youtube.com/watch/O35gEZej_AA',
      'youtube.com/v/O35gEZej_AA',
      'youtube.com/embed/O35gEZej_AA?si=4YAafesd9ypeBj46',
      'youtube.com/embed/O35gEZej_AA',
      'youtube.com/shorts/IiawByKdv0o',
    ];

    for (let url of youtubeURLs) {
      expect(regex.test(url)).toBe(true);
    }
  });
})