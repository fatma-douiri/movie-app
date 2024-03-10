// Imports
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// To Test
import App from '../App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Tests
describe('Renders main page correctly', async () => {
  it('Should render the page correctly', async () => {
    const queryClient = new QueryClient();
    // Setup
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    const title = await screen.queryByText('Rechercher');

    // Expectations
    expect(title).not.toBeNull();
  });
});
