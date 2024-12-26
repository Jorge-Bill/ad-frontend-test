import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from './Banner';

describe('Banner Component', () => {
  it('renders the title correctly', () => {
    render(<Banner title="Welcome to the App">Some child content</Banner>);

    expect(screen.getByText('Welcome to the App')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <Banner title="Welcome to the App">
        <button>Click Me</button>
      </Banner>
    );

    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the correct classes', () => {
    render(<Banner title="Test Title">Some child content</Banner>);

    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toHaveClass(
      'text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl max-w-3xl font-semibold tracking-tight text-gray-900'
    );
  });
});
