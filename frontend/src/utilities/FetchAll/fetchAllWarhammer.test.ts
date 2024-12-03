// Utilities/LoadWarhammer.test.ts
import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { mockServer } from '../../mocks/mockServer';
import { fetchAllWarhammer } from './fetchAllWarhammer'; // Assuming loadData fetches data from /api
import { cleanup } from '@testing-library/react';

// Start the mock server before running any tests
beforeAll(() => {
  mockServer.listen();
});

// Reset handlers after each test
afterEach(() => {
  mockServer.resetHandlers();
  cleanup();
});

// Stop the mock server once all tests are done
afterAll(() => {
  mockServer.close();
});

describe('loadData', () => {
  it('fetches and returns units data from the API', async () => {
    // Call the loadData function and verify it returns the mock data
    const data = await fetchAllWarhammer();
    console.log('Fetched data:', data); // Add this line for debugging
    expect(data).toHaveLength(3);
    expect(data[0].title).toBe('High Elf Lord-Celestant');
  });
});
