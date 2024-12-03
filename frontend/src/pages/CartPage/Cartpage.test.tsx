import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cartpage from './Cartpage';

import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';

describe('App component', () => {
  it('should have a correct heading', () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <Cartpage />
        </MemoryRouter>
      </CartProvider>
    );
    const heading = screen.getByText(/Cartpage/i);
    expect(heading).toBeInTheDocument();
  });
});
