import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  it('should have a correct heading', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    const heading = screen.getByText(/Homepage/i);
    expect(heading).toBeInTheDocument();
  });
});
