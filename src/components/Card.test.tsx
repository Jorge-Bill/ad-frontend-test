import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';
import { Game } from '@/types/game';

const mockGame: Game = {
  id: '4',
  genre: 'Action',
  image: '/game-images/gta5.jpeg',
  name: 'Grand Theft Auto V',
  description:
    'An action-adventure game set in the sprawling city of Los Santos.',
  price: 29.99,
  isNew: true,
};

describe('Card Component', () => {
  it('renders the card type correctly', () => {
    render(<Card game={mockGame} type="card" />);
    
    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(screen.getByText(mockGame.genre)).toBeInTheDocument();
    expect(screen.getByText(`$ ${mockGame.price}`)).toBeInTheDocument();
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument();
  });

  it('renders the checkout type correctly', () => {
    render(<Card game={mockGame} type="checkout" />);
    
    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(screen.getByText(mockGame.genre)).toBeInTheDocument();
    expect(screen.getByText(mockGame.description)).toBeInTheDocument();
    expect(screen.getByText(`$ ${mockGame.price}`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /remove/i })).toBeInTheDocument();
  });

  it('displays "Remove from cart" when isInCart is true', () => {
    render(<Card game={mockGame} type="card" isInCart={true} />);
    
    expect(screen.getByText(/remove from cart/i)).toBeInTheDocument();
  });

  it('calls onClick when the button is clicked (card type)', () => {
    const handleClick = jest.fn();
    render(<Card game={mockGame} type="card" onClick={handleClick} />);
    
    const button = screen.getByText(/add to cart/i);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('calls onClick when the button is clicked (checkout type)', () => {
    const handleClick = jest.fn();
    render(<Card game={mockGame} type="checkout" onClick={handleClick} />);
    
    const button = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders the "New" badge when isNew is true', () => {
    render(<Card game={mockGame} type="card" />);
    
    expect(screen.getByText(/new/i)).toBeInTheDocument();
  });

  it('does not render the "New" badge when isNew is false', () => {
    const gameWithoutNew = { ...mockGame, isNew: false };
    render(<Card game={gameWithoutNew} type="card" />);
    
    expect(screen.queryByText(/new/i)).not.toBeInTheDocument();
  });
});
