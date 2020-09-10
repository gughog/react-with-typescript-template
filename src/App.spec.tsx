import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('Should match snapshot for App component', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });

  it('Should have "Hello, React!" string on body', () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent('Hello, React!');
  });
});
