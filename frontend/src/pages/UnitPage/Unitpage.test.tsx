import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Unitpage from './Unitpage';

import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  it('should have a correct heading', () => {
    render(
      <MemoryRouter>
        <Unitpage />
      </MemoryRouter>
    );
    const heading = screen.getByText(/Unitpage/i);
    expect(heading).toBeInTheDocument();
  });
});
