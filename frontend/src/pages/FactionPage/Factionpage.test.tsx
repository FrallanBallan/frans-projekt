import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Factionpage from './Factionpage';

import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  it('should have a correct heading', () => {
    render(
      <MemoryRouter>
        <Factionpage />
      </MemoryRouter>
    );
    const heading = screen.getByText(/Factionpage/i);
    expect(heading).toBeInTheDocument();
  });
});
