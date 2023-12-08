import React from 'react';
import { render, act, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

import SearchBar from './search/SearchBar';
import SearchDisplay from './search/SearchDisplay';
import SearchResults from './search/SearchResults';

import GPTSummary from './summarize/GPTSummary';
import GPTKeywords from './summarize/GPTSummary';
import GPTDisplay from './summarize/GPTDisplay';

describe('SearchBar Testing', () => {
  // Unit Test 1: Check that SearchBar is rendering properly
  test('renders SearchBar', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox', { name: /search/i })).toHaveValue('ML');
  });
});

describe('SearchResults Testing', () => {
  // Unit Test 2: Check that SearchResults is rendering properly
  test('renders SearchResults component with no results', () => {
    render(
      <MemoryRouter>
        <SearchResults />
      </MemoryRouter>
    );
  });
});

describe('SearchDisplay Testing', () => {
  // Integration Test 1: Check that SearchBar redners with SearchResults
  test('renders SearchBar and SearchResults', () => {
    render(
      <MemoryRouter>
        <SearchResults />
      </MemoryRouter>
    );
  });
});

describe('GPTSummary Testing', () => {
  // Unit Test 3: Check that GPTSummary is rendering properly
  test('renders GPTSummary', () => {
    render(<GPTSummary />);
  });
});

describe('SearGPTKeywordschBar Testing', () => {
  // Unit Test 4: Check that GPTKeywords is rendering properly
  test('renders GPTKeywords', () => {
    render(<GPTKeywords />);
  });  
});

describe('GPTDisplay Testing', () => {
  // Integration Test 2: Check that GPTSummary redners with GPTKeywords
  test('renders GPTSummary and GPTKeywords', () => {
    render(
      <MemoryRouter>
        <GPTDisplay />
      </MemoryRouter>
    );
  });
});

// Integration Test / System Test
test('renders the App', async () => {
  await act(async () => {
    render(<App />);
  });
});