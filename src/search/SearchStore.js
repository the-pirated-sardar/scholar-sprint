import { create } from "zustand"

export const coreapiStore = create((set) => ({
  apiKey: "j8F30WKHQaLkZVnEI4xU6Pd1Gc2BNwil",
  apiEndpoint: "https://api.core.ac.uk/v3/",
}))

export const useSearchResults = create((set) => ({
  results: [],
  setResults: (newResults) => set({ results: newResults }),

  selectedItem: null,
  setSelectedItem: (item) => set({ selectedItem: item }),
}));