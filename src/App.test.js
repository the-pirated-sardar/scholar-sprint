import React from 'react';
import { render, act, screen, fireEvent} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

import SearchBar from './search/SearchBar';
import SearchDisplay from './search/SearchDisplay';
import SearchResults from './search/SearchResults';

import GPTSummary from './summarize/GPTSummary';
import GPTKeywords from './summarize/GPTKeywords';
import GPTDisplay from './summarize/GPTDisplay';

import { useSearchResults } from './search/SearchStore';
import { useGPTResults } from './summarize/GPTStore';
import { useAuthStore } from './auth/AuthStore';

jest.mock('./search/SearchStore');
jest.mock('./summarize/GPTStore');
jest.mock('./auth/AuthStore');

describe('SearchBar component', () => {
  // Unit Test 1: SearchBar renders properly
  test('renders SearchBar component', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox', { name: /search/i })).toHaveValue('ML');
  });

  // Unit Test 2: SearchBar accepts input
  test('handles form submission', async () => {
    const setResultsMock = jest.fn();
    useSearchResults.mockReturnValue({ setResults: setResultsMock });

    const { getByLabelText, getByTestId } = render(<SearchBar />);
    fireEvent.change(getByLabelText('search'), { target: { value: 'Machine Learning' } });
    fireEvent.submit(getByTestId('search-form'));

    await waitFor(() => {
      expect(setResultsMock).toHaveBeenCalled();
    });
  });

  // Add more tests as needed for other functionality in your component
});


// Unit Test
test('renders SearchResults', () => {
  render(
    <MemoryRouter>
      <SearchResults />
    </MemoryRouter>
  )
});

// Integration Test
test('integrating SearchBar & SearchResults', () => {
  render(
    <MemoryRouter>
      <SearchDisplay />
    </MemoryRouter>
  )
});

// Unit Test
test('renders GPTSummary', () => {
  render(<GPTSummary />);
});

// Unit Test
test('renders GPTKeywords', () => {
  render(<GPTKeywords />);
});

// Integration Test
test('integrating GPTSummary & GPTKeywords', () => {
  render(<GPTDisplay />);
});

// Integration Test / System Test
test('renders the App', async () => {
  await act(async () => {
    render(<App />);
  });
});