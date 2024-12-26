import { render, screen } from '@testing-library/react';
import Divider from './Divider';

describe('Divider Component', () => {
  it('renders the divider with default props', () => {
    render(<Divider  />);

    const divider = screen.getByRole('separator', { hidden: true });
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('w-full');
    expect(divider).toHaveClass('border-gray-200');
  });

  it('renders the divider with custom width', () => {
    render(<Divider width="w-1/2" />);

    const divider = screen.getByRole('separator', { hidden: true });
    expect(divider).toHaveClass('w-1/2');
  });

  it('renders the divider with custom border color', () => {
    render(<Divider borderColor="border-red-500" />);

    const divider = screen.getByRole('separator', { hidden: true });
    expect(divider).toHaveClass('border-red-500');
  });

  it('renders the divider with both custom width and border color', () => {
    render(<Divider width="w-1/4" borderColor="border-blue-300" />);

    const divider = screen.getByRole('separator', { hidden: true });
    expect(divider).toHaveClass('w-1/4');
    expect(divider).toHaveClass('border-blue-300');
  });
});
