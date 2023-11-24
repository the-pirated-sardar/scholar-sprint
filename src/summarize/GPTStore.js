import { create } from "zustand"

export const useGPTResults = create((set) => ({
    gptResults: "filler",
    setGPTResults: (gptResults) => set((state) => ({ gptResults })),
  }))