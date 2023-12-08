import { create } from "zustand"

export const useSearchResults = create((set) => ({
  results: [],
  setResults: (newResults) => set({ results: newResults }),

  selectedItem: null,
  setSelectedItem: (item) => set({ selectedItem: item }),
}));