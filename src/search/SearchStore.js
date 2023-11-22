import { create } from "zustand"

export const useSearchResults = create((set) => ({
  results: [],
  setResults: (results) => set((state) => ({ results })),
}))

export const foo = create((set) => ({
  results: [],
  setResults: (results) => set((state) => ({ results })),
}))