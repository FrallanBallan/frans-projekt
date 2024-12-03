import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { mockServer } from './mocks/mockServer';

//Intercept

beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());
