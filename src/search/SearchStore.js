import { create } from "zustand"

export const coreapiStore = create((set) => ({
  apiKey: "j8F30WKHQaLkZVnEI4xU6Pd1Gc2BNwil",
  apiEndpoint: "https://api.core.ac.uk/v3/",
}))

export const useSearchResults = create((set) => ({
  results: [],
  setResults: (results) => set((state) => ({ results })),
}))