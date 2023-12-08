import React from 'react';
import { render, act, screen, fireEvent} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

import SearchBar from './search/SearchBar';
import SearchDisplay from './search/SearchDisplay';
import SearchResults from './search/SearchResults';

import GPTSummary from './summarize/GPTSummary';
import GPTKeywords from './summarize/GPTSummary';
import GPTDisplay from './summarize/GPTDisplay';

// Unit Test
test('renders SearchBar', () => {
  render(<SearchBar />);
  
  expect(screen.getByRole('textbox', { name: /search/i })).toHaveValue('ML');
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