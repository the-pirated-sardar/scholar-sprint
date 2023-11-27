import { create } from "zustand"

export const useGPTResults = create((set) => ({
    gptResults: "results from ChatGPT",
    setGPTResults: (gptResults) => set((state) => ({ gptResults })),
  }))